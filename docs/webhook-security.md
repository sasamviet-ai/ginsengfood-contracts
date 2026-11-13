# Webhook security profile: ops-core -> business-platform

Status: security specification for the HTTP webhook that ops-core sends to the business-platform (M3). It adds to `docs/webhook-transport.md` (transport, retry, the 13 routed event types) and to the event schemas under `events/ops-core/`; where the two documents cover the same point, this file is the more specific one and the transport file points here.

Source of this specification: ops-core SEC-12 and SEC-13 (M12-082, M12-083), the ops-core security review `PL-H` (K5 and gaps GAP-04, GAP-07, GAP-08, GAP-21), and the provider's webhook dispatcher. If this file and the provider disagree, the provider's runtime is the truth until this file is corrected. Provider changes that this file describes beyond the runtime before them are listed in the CHANGELOG entry "Webhook security profile and inventory payload allowlist".

## 1. What this profile defends against

| Threat | Defence | Section |
| --- | --- | --- |
| Someone posts a forged event, above all a recall or sale-lock one | HMAC-SHA256 over the raw body, constant-time comparison, secret shared only by the two owners | 3, 5 |
| A captured request is replayed later | Timestamp inside the signature, 300 second window, deduplication on the event id | 5 |
| A signed body is re-sent somewhere else | The provider never follows a redirect | 7 |
| The receiver is flooded or fed a huge body | 64 KiB body cap on both sides | 5 |
| The payload tells the receiver more than it needs (production planning, free text) | Explicit field lists, bounded `reason` | 8 |
| A key rotation loses recall events | Receiver accepts two keys during rotation, version label is a hint only | 4 |

The webhook stays a signal: the pull model is the source of truth (`webhook-transport.md` section 1). Nothing in this file lets a webhook change a sale state by itself.

## 2. Request headers

Every request is `POST <endpoint>` with `Content-Type: application/json`, a body of at most 64 KiB (section 5), and these headers.

| Header | Value | Receiver |
| --- | --- | --- |
| `X-Outbox-Event-Id` | The event id, lowercase UUID with hyphens, equal to `eventId` in the body. Identical on every retry of one event. | Deduplication key. Part of the signed string. |
| `X-Idempotency-Key` | Same value as `X-Outbox-Event-Id`. | May be ignored. |
| `X-Correlation-Id` | The event's `correlationId`. | For tracing only. |
| `X-Webhook-Timestamp` | Unix time in whole seconds (UTC), decimal text, taken at the moment of **this** attempt. Every retry carries a new value. | Part of the signed string. Checked against the clock skew window. |
| `X-Webhook-Key-Version` | The label of the shared signing key that signed this request, section 4. | A hint for choosing the key, never proof. |
| `X-Webhook-Signature` | `v1=<hex>`: the literal prefix `v1=` and the lowercase hexadecimal HMAC-SHA256 digest, section 3. | Verified before anything else is trusted. |

## 3. Signature

HMAC-SHA256 over the byte string

```
"{timestamp}\n{eventId}\n" + raw body
```

`{timestamp}` is the text of `X-Webhook-Timestamp`, `{eventId}` the text of `X-Outbox-Event-Id`, `\n` a single line feed (0x0A), and the raw body the exact bytes received (UTF-8). Verify over the received bytes; never parse the JSON and serialize it again first. The key is the shared secret decoded from base64 (at least 32 bytes). It is exchanged between the two owners over a protected channel, once per key version, and is never written to this repository, to a ticket or to a log.

Published test vector, so the receiver can check its implementation before real traffic. The key below is a **test key** (the bytes 0 to 31) and has never been used for anything else.

| Item | Value |
| --- | --- |
| Key (base64) | `AAECAwQFBgcICQoLDA0ODxAREhMUFRYXGBkaGxwdHh8=` |
| `X-Webhook-Timestamp` | `1794000000` |
| `X-Outbox-Event-Id` | `3f2b8c1e-5d4a-4e7b-9a60-1c2d3e4f5a6b` |
| Expected `X-Webhook-Signature` | `v1=c44f2da76de091af02e8378dabaaa5a8a038e75b1e9483c3becce9222f44ed82` |

Raw body of the vector (one line, no trailing newline):

```
{"eventId":"3f2b8c1e-5d4a-4e7b-9a60-1c2d3e4f5a6b","eventType":"ops-core.inventory.inventory-available-changed.v1","eventVersion":"1.0","occurredAt":"2026-11-12T03:04:05+00:00","source":"ops-core","correlationId":"vector-1","data":{"stock_balance_id":"7d1c2f3a-0b4e-4c5d-8e6f-9a0b1c2d3e4f","sku_id":"a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d","available_quantity":{"value":"12.5","unit":"BOX"},"last_ledger_entry_id":"5e4d3c2b-1a09-4f8e-9d7c-6b5a49382716"}}
```

## 4. Key version and rotation

`X-Webhook-Key-Version` is an opaque label that names which shared key signed the request. The two owners choose it when they exchange a key (for example `v1`, `v2`). Rules:

- Grammar: `^[A-Za-z0-9][A-Za-z0-9._-]{0,31}$`, compared as exact, case-sensitive text. The provider refuses to start outside development with a label that does not match, because the label travels as an HTTP header.
- The label belongs to the webhook signing key only. It has its own deployment variable and, once that variable is set, does not move when any other secret of the provider (database, token signing, evidence encryption, snapshot cursor) is rotated. While that variable is unset the provider falls back to the version label shared with those other secrets, and then the label does move with them: the owners set the variable before the first rotation of the webhook key, and before the webhook is enabled. Do not infer anything about other secrets from it.
- It is not secret and not proof: choose the key it names first, and accept the request if any configured key verifies. A wrong or unknown label is never a reason to answer `401` on its own.

The receiver holds at most **two** keys at the same time: the current one and the one being retired or introduced. Rotation, in this order, so that no event signed with a key the receiver does not know is ever sent:

1. The receiver adds the new key next to the old one, labelled with the new version, and accepts both.
2. The provider switches to the new key and the new label. Retries always sign again, so no request after the switch uses the old key.
3. After the retry window of section 6 of `webhook-transport.md` plus the clock skew window have passed (one hour is a comfortable margin), the receiver removes the old key.

Rotating in any other order, or a rotation interrupted half way, makes the receiver answer `401` to events that are legitimate; `401` is not retried (section 6) and a recall or sale-lock event lost that way is only caught up by the next pull.

## 5. What the receiver checks, in order

1. **Body size.** Read at most **65 536 bytes (64 KiB)**. A larger body is answered `413` without reading further. The provider never sends more: an event whose body would exceed this size is not sent and goes to dead-letter.
2. **Required headers.** `X-Webhook-Timestamp` is a decimal integer, `X-Outbox-Event-Id` is a UUID, `X-Webhook-Signature` starts with `v1=`. Otherwise answer `401`.
3. **Signature.** Recompute over the raw bytes (section 3) with the key chosen as in section 4, and compare with `X-Webhook-Signature` using a constant-time comparison. No match: `401`. Nothing from the body is trusted, parsed or logged before this passes.
4. **Clock skew.** Reject when the absolute difference between the receiver's clock (UTC) and `X-Webhook-Timestamp` is more than **300 seconds**: `401`, because a stale timestamp cannot be told from a replay. The provider does not apply this window itself and signs a fresh timestamp on every attempt, so an honest retry is never rejected by it. Keep the receiver clock on NTP.
5. **Deduplication.** Delivery is at-least-once. Record `X-Outbox-Event-Id` with an **atomic** insert-if-absent on a unique key (one statement; check-then-insert is not atomic and lets two concurrent deliveries both through). Keep each id for **at least 24 hours**. A repeat gets `2xx` and is not processed again. Record only after steps 3 and 4 passed, so that a caller without the key cannot fill the store.
6. **Answer fast, work later.** Answer `2xx` as soon as the event is recorded (the provider gives up on a request after 30 seconds) and process afterwards. An event type the receiver does not care about is answered `2xx` and ignored, never `4xx`. This covers a type it does not know and a body whose `eventType` is missing or does not look like `ops-core.<group>.<name>.v<N>`: once the signature has passed, answer `2xx`, ignore the event and raise an alert on your side, because the provider only signs and sends the 13 `eventType` values of `docs/webhook-transport.md`: a signed body with any other value is a provider defect, not something to reject. Answering `4xx` (a `400` for instance) makes the provider dead-letter that delivery at once, with no retry (section 6).

The receiver must not write the body, the signature or the key to a log. Treat every text field of `data` as untrusted display text.

## 6. Answers and what the provider does

| Receiver answers | Meaning | Provider behaviour |
| --- | --- | --- |
| `2xx` | Accepted: first delivery, repeat, or ignored type | Delivered. |
| `401` | Signature wrong, header missing or malformed, timestamp outside 300 s | **Not retried.** Dead-letter immediately. |
| `413` | Body larger than 64 KiB | **Not retried.** Dead-letter immediately. |
| Any other `4xx` except `408` and `429` | The receiver rejects the event (a `400` for an unexpected `eventType` falls in this row) | **Not retried.** Dead-letter immediately. |
| `408`, `429`, `5xx`, no answer within 30 s, network error | Temporary failure on the receiver side | Retried as in `webhook-transport.md` section 6, then dead-letter. |
| `3xx` | The endpoint moved | **Not followed** (section 7). Counts as a failed attempt; the same answer comes every time, so fix the configured URL. |

Use `5xx` only for a real temporary fault (database down, queue full). Do not answer `4xx` to cover a fault that is the receiver's own: a `4xx` loses the event, and for a recall or sale-lock event the next pull is the only safety net. Dead-letter events are not re-sent automatically.

## 7. Redirects

The provider's webhook client **does not follow redirects**: no `301`, `302`, `307` or `308`. The signed body is sent to the configured endpoint URL and nowhere else, whatever that endpoint answers. The configured URL must therefore be the final one, `https://` outside development, with no redirect in front of it (for example from a bare domain to `www`, or from a path with a trailing slash to one without).

## 8. What the payload carries

The provider builds `data` from an explicit list of keys per event type. A key that is not on the list is not sent, even when the internal event has it. The lists below are the ones the provider uses; the schemas are the machine-readable side.

| Event | `data` keys sent (optional keys are absent when they have no value, never `null`) | Schema |
| --- | --- | --- |
| `ops-core.inventory.inventory-available-changed.v1` | `stock_balance_id`, `sku_id`, `available_quantity`, `last_ledger_entry_id` | `schemas/ops/stock-balance.schema.json` |
| `ops-core.inventory.stock-below-threshold.v1` | `stock_alert_id`, `sku_id`, `warehouse_id`, `warehouse_location_id` (optional), `status`, `available_stock`, `yellow_threshold` or `red_threshold`, `stock_ok_reference_quantity` (optional), `zero_stock_threshold`, `alert_reason`, `source_stock_balance_id` (optional), `source_ledger_entry_id` (optional), `demand_id` (optional) | `schemas/ops/stock-alert-webhook.schema.json` |
| `ops-core.inventory.stockout-risk-detected.v1` | the same as `stock-below-threshold`, with `stockout_risk_threshold` in place of `yellow_threshold` or `red_threshold` | `schemas/ops/stock-alert-webhook.schema.json` |

The threshold of `stock-below-threshold` is named after the status: `STOCK_YELLOW_ALERT` carries `yellow_threshold`, `STOCK_RED_ALERT` carries `red_threshold`, exactly one of the two, and its value is the threshold that was crossed. `stockout-risk-detected` carries `stockout_risk_threshold` only.

Never sent on a webhook, because they describe production planning or internal detail and the receiver pulls what it is entitled to: `risk_calculation`, `lead_time_days`, `coverage_days`, `recommended_action`, `guard_block_reasons`, `evidence_refs` and `available_stock_breakdown`. `stock-alert-webhook.schema.json` is closed (`additionalProperties: false`), so a message carrying one of them is invalid. The domain schema `stock-alert.schema.json` and the REST read of stock alerts are not narrowed.

Sale-lock events (`sale-lock-activated`, `stop-sale-required`, `sale-lock-released`): `reason` is operator-typed text in ops-core. On the wire it is normalised by the sender: control characters (line feeds, tabs, escape and the like) and invisible formatting characters (zero-width and bidirectional-override characters) are replaced by one space, runs of white space collapse to one space, the ends are trimmed, and the result is cut to at most **200 characters** (a cut never splits a surrogate pair). If nothing printable is left the value is the fixed text `UNSPECIFIED`, so the stop-sale signal is never dropped because of its reason. It is text for a person, not a code: do not parse it, branch on it or write it to a log unescaped. The full text is read through the REST sale-lock read by a caller that is entitled to it.

## 9. Not specified here

- The endpoint URL, the key itself and the timing of a rotation are deployment matters between the two owners (`webhook-transport.md` section 7).
- Receiver-side rate limiting and network exposure of the receiver route are the receiver owner's deployment decision.
- Alerting when the provider's dead-letter count is above zero is an operations matter of the provider (SEC-18) and is not part of this wire contract. Clock synchronisation evidence on both machines (NTP) is gathered under SEC-25.
