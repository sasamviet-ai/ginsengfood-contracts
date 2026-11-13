# Webhook transport: ops-core -> business-platform

Status: transport specification for the outbound events that ops-core routes to the business-platform (M3). It complements `asyncapi/ops-core-events.v1.yaml`, which describes channels and payloads only (its broker, retry and outbox fields are placeholders), and the event schemas under `events/ops-core/`.

Source of this specification: the ops-core HTTP webhook dispatcher and its delivery route registry, and the M3 handoff package TB-14. If this file and the provider disagree, the provider's runtime is the truth until this file is corrected.

The security rules of the webhook (header semantics, key version and rotation, the receiver's checks and answers, body cap, redirects, the field lists of the payload) are in `docs/webhook-security.md`. This file keeps the transport: what is sent, to which endpoint, which event types, how a failed delivery is retried.

## 1. What a webhook is, and is not

- The pull model is the source of truth. A webhook only says "something changed, pull again". It must not be used to rebuild stock or sale state from the event stream.
- Delivery is **at-least-once**: the same event can arrive more than once, and order between events is not promised. Use `occurredAt` and pull.
- One endpoint receives all routed event types; `eventType` tells them apart.
- Allocation events (hold, release, issue) are not routed. Stock events are hints only: a warehouse-receipt event, in particular, is not a stock source (OD-C18), and a sale-lock release event does not mean "sellable again" (OD-C20) - only `POST /v1/availability/check` answers that.

## 2. Request

`POST <consumer endpoint URL>` with `Content-Type: application/json`. The consumer endpoint URL is operational configuration agreed between the two owners; it is not part of this repository. Outside development, the URL must be `https://`.

| Header | Value |
| --- | --- |
| `X-Outbox-Event-Id` | The event id (`eventId`), a lowercase UUID with hyphens. Identical on every retry of the same event: it is the deduplication key. |
| `X-Idempotency-Key` | Same value as `X-Outbox-Event-Id`. |
| `X-Correlation-Id` | The event's `correlationId`. |
| `X-Webhook-Timestamp` | Unix time in seconds (UTC) at the moment of **this** attempt. Every retry carries a new value. |
| `X-Webhook-Key-Version` | The label of the shared signing key that signed the request, for example `v1`. A hint for choosing the key, not proof; grammar and rotation in `webhook-security.md` section 4. |
| `X-Webhook-Signature` | `v1=<hex>`: lowercase hexadecimal HMAC-SHA256, see section 3. |

Body: one event, shaped by the schema in `events/ops-core/<group>/<name>.v1.json` (the whole body, not just `data`). Envelope fields: `eventId`, `eventType`, `eventVersion` (`"1.0"`), `occurredAt`, `source` (`"ops-core"`), `correlationId`, `data`, and optionally `causationId` and `idempotencyKey`. `data` keys are snake_case.

## 3. Signature

HMAC-SHA256 over the byte string

```
"{timestamp}\n{eventId}\n" + raw body
```

where `{timestamp}` is the decimal text of `X-Webhook-Timestamp`, `{eventId}` is the text of `X-Outbox-Event-Id`, `\n` is a single line feed (0x0A), and the raw body is the exact bytes received (UTF-8). Sign and verify over the received bytes: do not parse the JSON and serialize it again before checking.

The key is the shared secret decoded from base64 (at least 32 bytes). The two owners exchange it over a protected channel and per key version; the key is never written to this repository, to a ticket or to a log.

The header value is the literal prefix `v1=` followed by the lowercase hexadecimal digest.

## 4. What the receiver checks, in order

The normative list, with the answer to give for each failure, is `webhook-security.md` section 5. In short:

1. Body size: read at most 64 KiB (65 536 bytes), `413` beyond it.
2. Signature: recompute it and compare with `X-Webhook-Signature` using a constant-time comparison. Mismatch: answer `401`.
3. Clock skew: reject when `|receive time - X-Webhook-Timestamp|` exceeds **300 seconds**. Keep the receiver clock on NTP. The sender does not apply this threshold itself, and every retry has a fresh timestamp, so an honest retry is not rejected by it.
4. Deduplicate on `X-Outbox-Event-Id`: delivery is at-least-once, so record the id with an atomic insert for at least 24 hours, process an event once and answer `2xx` for repeats.
5. Answer `2xx` quickly and process afterwards. For an event type the receiver does not care about, or a body whose `eventType` is missing or malformed (a signed body that is not one of the 13 types is a provider defect: answer `2xx`, alert, see `webhook-security.md` section 5), answer `2xx` and ignore it: a `4xx` sends the event to dead-letter (section 6).

## 5. Routed event types (13)

| Group | `eventType` | Schema |
| --- | --- | --- |
| Product | `ops-core.product.product-activated.v1` | `events/ops-core/product/product-activated.v1.json` |
| Product | `ops-core.product.formula-version-approved.v1` | `events/ops-core/product/formula-version-approved.v1.json` |
| Sellable | `ops-core.sellable.sku-became-sellable.v1` | `events/ops-core/sellable/sku-became-sellable.v1.json` |
| Sellable | `ops-core.sellable.sku-became-not-sellable.v1` | `events/ops-core/sellable/sku-became-not-sellable.v1.json` |
| Sellable | `ops-core.sellable.sellable-status-changed.v1` | `events/ops-core/sellable/sellable-status-changed.v1.json` |
| Inventory | `ops-core.inventory.inventory-available-changed.v1` | `events/ops-core/inventory/inventory-available-changed.v1.json` |
| Inventory | `ops-core.inventory.stock-below-threshold.v1` | `events/ops-core/inventory/stock-below-threshold.v1.json` |
| Inventory | `ops-core.inventory.stockout-risk-detected.v1` | `events/ops-core/inventory/stockout-risk-detected.v1.json` |
| Inventory | `ops-core.inventory.warehouse-receipt-confirmed.v1` | `events/ops-core/inventory/warehouse-receipt-confirmed.v1.json` |
| Recall / sale lock | `ops-core.recall.recall-case-opened.v1` | `events/ops-core/recall/recall-case-opened.v1.json` |
| Recall / sale lock | `ops-core.recall.sale-lock-activated.v1` | `events/ops-core/recall/sale-lock-activated.v1.json` |
| Recall / sale lock | `ops-core.recall.stop-sale-required.v1` | `events/ops-core/recall/stop-sale-required.v1.json` |
| Recall / sale lock | `ops-core.recall.sale-lock-released.v1` | `events/ops-core/recall/sale-lock-released.v1.json` |

The four recall / sale-lock events are the ones a seller must not miss: they stop further selling. Other `ops-core.*` event types published on the bus (for example `product-suspended`, accounting and evidence events) have no external delivery route and are never sent to this endpoint.

## 6. Responses, retry and dead-letter

| Receiver answer | Provider behaviour |
| --- | --- |
| `2xx` | Delivered. |
| `4xx` except `408` and `429` (`401` and `413` included) | **Not retried.** The event goes to dead-letter immediately. |
| `3xx` | **Not followed**: the client never re-sends the signed body to a `Location`. The attempt counts as failed and is retried like a `5xx`, so a wrong URL ends in dead-letter. |
| `5xx`, `408`, `429`, no answer within 30 seconds, network error | Retried: up to 5 attempts spaced 30, 60, 90 and 120 seconds apart (about 5 minutes in total); each attempt also makes up to 2 quick transport retries. After the last attempt the event goes to dead-letter. |

- Dead-letter events are not re-sent automatically.
- Turning the webhook on does not back-fill: events produced before it was enabled that waited more than 24 hours for a configured endpoint are in dead-letter and are not replayed. Pull to catch up.
- Retry spacing and attempt counts are provider operational parameters, stated here so a receiver can size its dedupe store; they are not a wire guarantee.
- A body larger than 64 KiB is never sent: the event goes to dead-letter without an attempt. Real bodies are a few kilobytes.
- A receiver that is down for longer than the retry window loses the push signal, never the data: pull (`GET` snapshots and `POST /v1/availability/check`) is always available.

## 7. Not specified here

The endpoint URL, the key itself, key rotation timing and the receiver's storage design are deployment matters between the two owners; the rotation procedure itself is `webhook-security.md` section 4. There is no Kafka or AMQP delivery: `asyncapi/` channel addresses are placeholders.
