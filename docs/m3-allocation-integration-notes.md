# M3 <-> ops-core allocation: integration notes

Audience: the `ginsengfood-business-platform` (M3) owner and the ops-core owner. These are integration notes, not a new contract surface: the binding definitions are `reserveInventoryAllocationV1` and `releaseInventoryAllocationV1` in `openapi/ops-core/inventory.v1.yaml`, the x03b schemas, `enums/ops/inventory-allocation-status.yaml` and `state-machines/ops/allocation-state.md`. Where a note here and a schema disagree, the schema wins and this file is wrong.

Scope of the change these notes belong to: the allocation write surface becomes two commands (hold and self-release) plus a fourth status, `ISSUED`. See `CHANGELOG.md` (Unreleased, "additive, coordinated") and `compatibility/consumer-compatibility-matrix.md` for the deliberate exception to "business-platform must not mutate inventory".

## 1. Order identity: how M3 produces `source_object_id`

ops-core stores `source_object_id` exactly as received and requires only a non-nil UUID. It never derives or validates it, so the consumer owns the identity rules (EXT-OD-02). M3 order ids are numeric (BIGINT), so M3 derives a UUID from the order id deterministically instead of storing a second identifier.

**Rule.** For a hold with `source_object_type = EXTERNAL_ORDER`:

```
source_object_id = UUIDv5(ORDER_SOURCE_NAMESPACE_UUID, "order:" + orderId)
```

- ORDER_SOURCE_NAMESPACE_UUID = `f13ae28e-7225-4364-83ff-0d55cccf8cb7`
- This namespace is a published constant, not a secret. It was generated once as a random (version 4) UUID on 2026-11-11 and is fixed for the life of the v1 contract. Changing it changes every derived `source_object_id`, so holds already placed could no longer be found, listed or released: never rotate it.
- UUIDv5 is the RFC 4122 section 4.3 algorithm: SHA-1 over the 16 namespace bytes followed by the UTF-8 bytes of the name, first 16 bytes of the digest, version nibble set to 5, variant bits set to 10.
- `orderId` is the canonical decimal text of the M3 order id: digits only, no sign, no leading zeros, no separators, no padding. The name is the ASCII prefix `order:` followed by that text, so the same order always yields the same UUID and it can be recomputed after any incident without a lookup table.
- The derivation is the consumer's identity function. The phrase "never synthesized" in the allocation schemas forbids deriving the id from unstable or positional data (order header plus SKU plus ordinal, a hash of mutable fields, the allocation id). A fixed encoding of a stable order id is not that.

**Test vectors** (an implementation must reproduce them exactly; `contract-tests/x03b/external-allocation-write-v1.contract.test.mjs` recomputes them):

| name | UUIDv5 |
| --- | --- |
| `order:1` | `3cec2522-d110-55a0-8eac-2a898257d3ca` |
| `order:123456` | `5d65e4a9-b171-599d-ac58-c4308320bf1d` |
| `order-item:1` | `39070d13-8ab5-5bc6-8f86-69cd65695c47` |
| `order-item:123456` | `42fbced9-2551-5195-8b83-8c789629ef73` |

**One source holds one scope.** A source id can hold only one SKU, one warehouse, one unit and one quantity: asking again with the same id and a different scope is answered `409 INSUFFICIENT_STOCK`, not a second hold. An order with several lines therefore needs one `EXTERNAL_ORDER_ITEM` source per line, not one `EXTERNAL_ORDER` source per order. For lines, use the same namespace with a name built from the stable M3 order-item id, for example `order-item:<orderItemId>` with the same canonical decimal rule. The two `order-item:` vectors above were computed independently by the provider and by M3 on 2026-11-12 and agree; M3 pins them in its own tests. The contract still only requires a stable UUID per line, never one built from a position in the order, so a consumer that keeps its own stable per-line name is conformant; the `order-item:` name is the one both sides use today.

## 2. Calling the two commands

Example key shapes (not part of the contract): `m3:rsv:<orderId>:<n>` for hold and `m3:rel:<orderId>:<n>`. The contract fixes only the charset and length of `X-Idempotency-Key`: 1 to 200 characters of letters, digits and `: - _ .`. One key per intent; reuse the same key (and the same body) for every retry of that intent, never a new key for the same intent, because a new key for the same source can hold twice. A key belongs to the service principal that first used it (another principal gets `403`). The scope differs by command: for reserve it is the source (the same key with another source is a new command; the same key and source with a different body is `422`, and the body fingerprint includes `expires_at`, so a retry must resend the original `expires_at` unchanged); for release it is the key alone (the same key with another source is `422`). A repeat reserve with a new key never extends a hold: the lines keep their original `expires_at`.

| Call | Answer | Meaning | What the consumer does |
| --- | --- | --- | --- |
| reserve | `201` `RESERVED` | New hold created | Store `allocation_id` of each line. |
| reserve | `200` `ALREADY_RESERVED` | An equivalent hold of this principal already exists; nothing created, nothing extended | Same as `201`. |
| reserve | `409` `INSUFFICIENT_STOCK` | One code for five causes: short stock, lots blocked, different scope held for this source, source held by another principal (any state, `ISSUED` included; the holder is never disclosed), more than 20 lots | Do not show "out of stock"; call `POST /v1/availability/check` for the reason. |
| reserve | `409` `ALLOCATION_CONFLICT` | The hold of this key is no longer held (expired, or released by the warehouse or by your own release call), or the source was already `ISSUED` for an allocation of your own principal | Read `GET /v1/inventory/allocations?sourceObjectId=` once. An `ISSUED` row of your own: stop, never reserve it again. No holding row: the hold ended (expired, or released by the warehouse or by your own release call), send a new key if the order is still live. |
| release | `200` `RELEASED` | Every RESERVED line of this principal for the source was released | Order is free of the hold. A replay with the same key returns the same body. |
| release | `409` `ALLOCATION_NOT_HELD` | Already released, or expired and waiting for the expiry worker | Treat as success: nothing is held. |
| release | `409` `ALLOCATION_CONFLICT` | The warehouse already confirmed or issued stock of the source (nothing released), or the allocation changed mid-call | Do not loop. Read `GET /v1/inventory/allocations?sourceObjectId=` once; `CONFIRMED` or `ISSUED` means the warehouse owns it, contact the warehouse. |
| release | `404` `NOT_FOUND` | This principal holds nothing for the source (an unknown source and another principal's source look the same) | Treat as nothing to release; check the id derivation if unexpected. |
| reserve | `422` `VALIDATION_FAILED` | Bad, missing or over-long key; the key already used for this source with a different body (`expires_at` included); bad body field; `details[]` names it | Fix the request; do not retry unchanged. |
| release | `422` `VALIDATION_FAILED` | Bad, missing or over-long key; the key already used for a different source; bad body field; `details[]` names it | Fix the request; do not retry unchanged. |
| either | `403` `FORBIDDEN` | Missing permission or audience, a token without subject, or a key first used by another service principal | Do not retry; check the credentials and that keys are never shared between principals. |
| either | `429` `RATE_LIMITED` | The `ExternalAllocationWrite` bucket (5 per second, burst 10) is empty, or a call with the same key is still running (`Retry-After: 1`), or temporary contention on the same source or stock that outlasted the provider's own retries (`Retry-After: 1`, no `details`) | Not out of stock, nothing changed. Wait `Retry-After`, repeat with the same key and the same body (see "Retrying a 429" below). |

The consumer cannot confirm or issue an allocation, and cannot release a `CONFIRMED` one.

Send an `X-Correlation-Id` on every call and log it with the answer: the `X-Correlation-Id` rules are in `docs/correlation-audit-standard.md` (at most 128 characters of letters, digits and `: _ . -`; a malformed value is replaced by a generated one, never rejected, and the id in effect is echoed in the response header and body). Cache the access token in memory until its `expires_in` elapses instead of asking for a token per call (10 token requests per minute per IP); never write it to a log or to disk.

### Retrying a 429

One code, `RATE_LIMITED`, three causes: the bucket is empty, a call with the same key is still running, or temporary contention (the provider's database transaction was rejected because of concurrent activity on the same source or stock and its own retries, 6 attempts in a few hundred milliseconds, ran out). The contention case has the message "The request could not be completed because of concurrent activity. Retry later with the same X-Idempotency-Key." and no `details`; the message is a hint, not part of the contract. Handle all three the same way:

1. It is not "out of stock" and nothing changed: the transaction did not commit, so the idempotency key is reusable. Never show a customer an out-of-stock message for a `429`.
2. Wait at least `Retry-After` seconds (1), then send the same call with the same `X-Idempotency-Key` and the same body (`expires_at` included). A new key for the same intent can open a second hold on reserve, or a second release.
3. Retry up to about 5 times in total, with a growing pause and some jitter so competing callers do not retry in step. This is `max_retries: 5` of `x-retry-policies.ExternalIdempotentReplay` in `inventory.v1.yaml`: a recommended ceiling, not a cap the provider enforces. Replaying the same key and the same body is always valid, also after a lost response or a timeout, and the same rule applies to release.
4. If it is still `429` after that, treat the outcome as UNKNOWN: neither held nor refused. Do not report out of stock, do not mint a new key; keep the intent open, repeat later with the same key and body, or resolve it by reading `GET /v1/inventory/allocations?sourceObjectId=` once (your own rows only).

Before the provider change that introduced the contention answer, the same situation was reported as `409 INSUFFICIENT_STOCK` on reserve and `409 ALLOCATION_CONFLICT` on release, which a consumer could only read as "no stock" or "do not retry". Those two `409` answers now mean a real shortage, an issued source, or an ordinary state conflict.

### The closed table of `details[].reason`

`error.details` is an optional array of `{ "field"?, "reason" }` items (`$defs/Detail` in both error schemas; closed, no other key, never an empty array). It appears on exactly two answers of these commands, and on no other: the `409 ALLOCATION_CONFLICT` of a reservation quota refusal, and a `422 VALIDATION_FAILED`. No `409` of the release command carries `details`, and a `429` never does. The stable tokens below are contract values and never change wording; the machine-readable copy is `x-detail-reasons` in `external-allocation-reserve-error.schema.json` and `external-allocation-release-error.schema.json`.

| Command | Status and `code` | `field` | `reason` | Meaning |
| --- | --- | --- | --- | --- |
| reserve | `409` `ALLOCATION_CONFLICT` | omitted | `HOLD_LIMIT_REACHED` | The principal already has the maximum number of active holds (one hold = one `source_object_id`; RESERVED and not expired, or CONFIRMED). Nothing reserved, the key stays reusable: send the same request again after holds were released or expired. |
| reserve | `409` `ALLOCATION_CONFLICT` | `requested_quantity` | `HOLD_SHARE_LIMIT_REACHED` | The hold would take more than the allowed share of the physical stock of that SKU, warehouse and unit. Not a shortage; same handling as above. |
| reserve | `422` `VALIDATION_FAILED` | `requested_quantity` | `REQUESTED_QUANTITY_LIMIT_EXCEEDED` | `requested_quantity` is above the per-line limit. Send less or split the line; do not retry unchanged. |
| reserve | `422` `VALIDATION_FAILED` | `expires_at` | `EXPIRES_AT_LIMIT_EXCEEDED` | `expires_at` is later than the maximum hold window. Send an earlier `expires_at`. |
| reserve, release | `422` `VALIDATION_FAILED` | `X-Idempotency-Key` | `IDEMPOTENCY_KEY_REUSED` | The key was already used for a different request: reserve, the same source with a different body (`expires_at` included); release, a different source. Use a new key for a new intent. |

Rules:

- Every other `reason` on a `422` is free text from input validation, for example `sku_id is required.` for a body field; the wording for an `X-Idempotency-Key` that is missing, too long or has bad characters may be Vietnamese. It is free text, not contractual, and can change without notice: handle a `422` by `field` and status (fix the request, never retry unchanged), never by matching the text. The fields that can appear this way: for reserve `source_object_type`, `sku_id`, `warehouse_id`, `source_object_id`, `uom_code`, `requested_quantity`, `expires_at` and `X-Idempotency-Key`; for release `source_object_type`, `source_object_id` and `X-Idempotency-Key`.
- `ALLOCATION_NOT_HELD`, `ALLOCATION_CONFLICT` and `INSUFFICIENT_STOCK` are `error.code` values, not reasons. The provider's internal markers behind some of them (for example "already issued by the warehouse" or "committed by the warehouse") are never on the wire: those answers have no `details`.
- Outside these two commands, `GET /v1/inventory/allocations` answers `422` with `field` `sourceObjectId` and `reason` `SOURCE_OBJECT_ID_REQUIRED` when a request omits the filter once the provider flag that makes it mandatory is on (off by default; the CHANGELOG says when it is switched on). That answer belongs to the shared read error schema, which this table does not close; always send `sourceObjectId`.
- The limits behind the quota refusals are never echoed in any answer.

## 3. Status values the consumer must tolerate

`GET /v1/inventory/allocations` returns `status` in `RESERVED`, `CONFIRMED`, `ISSUED`, `RELEASED`. `ISSUED` is new, so a parser written against the three-value schema from 2026-09-21 must accept it and, in general, any value it does not know, without mapping it to another status. `ISSUED` adds no field: the row looks like a `CONFIRMED` one. Expiry, warehouse release and consumer self-release all read `RELEASED`.

The snapshot lists only allocations created by the calling service principal; rows of another principal are not visible. `allocated_quantity` is written without trailing zeros there (`"5"`), while reserve and release lines always carry three decimals (`"5.000"`): compare quantities as decimals, never as strings between the two.

## 4. Webhooks are a hint, not the source of truth

The pull model (reading `GET` snapshots and `POST /v1/availability/check` before committing an order) decides. Allocation events (hold, release, issue) are not routed to M3 at all, so a hold that expired or was issued is learned by reading allocations. The transport of the 13 event types that are routed is specified in `docs/webhook-transport.md`.

## 5. Review checklist before the provider turns the new surface on in a shared environment

1. M3 parser accepts `ISSUED` and unknown `status` values.
2. M3 derives `source_object_id` with the rule above and reproduces both vectors.
3. M3 cancellation flow calls release, treats `ALLOCATION_NOT_HELD` and `404` as done, and routes `ALLOCATION_CONFLICT` to the warehouse instead of re-reserving.
4. M3 never builds a new idempotency key for a retry of the same intent, and treats every `429` on these two commands as retry-with-the-same-key-and-body, never as out of stock.
5. M3 pins a contracts revision that contains these files.

## 6. The service principal of M3: audiences and permissions

`POST /v1/service-tokens` carries only `client_id` and `client_secret`: there is no audience, scope or permission parameter. The principal decides. The permissions granted to it decide which audiences (`aud`) the token carries, and every operation requires its own audience (`x-audience`) and its own permission (`x-permission`). A call whose token lacks either is `403 FORBIDDEN`, however right the rest of the request is. A principal and its credentials belong to one ops-core environment: credentials of one environment mean nothing in another, and an idempotency key belongs to the principal that first used it (another principal gets `403`).

M3 calls operations of three audiences, so its one principal per environment must hold at least one permission for each:

| Audience (`aud`) | The token carries it when the principal holds | Operations behind it (permission) |
| --- | --- | --- |
| `ginsengfood-ops-core-external-availability-v1` | `SELLABLE_CHECK` or `SELLABLE_STATUS_VIEW` | `checkAvailabilityV1` (`SELLABLE_CHECK`), `getSellableStatusV1` (`SELLABLE_STATUS_VIEW`) |
| `ginsengfood-ops-core-external-bulk-read-v1` | any one of `SKU_CATALOG_VIEW`, `RECALL_CASE_VIEW`, `RECALL_HOLD_VIEW`, `INVENTORY_BALANCE_VIEW`, `INVENTORY_ALLOCATION_VIEW`, `WAREHOUSE_VIEW`, `WAREHOUSE_RECEIPT_VIEW`, `SELLABLE_STATUS_VIEW` | `listInventoryAllocationsV1` (`INVENTORY_ALLOCATION_VIEW`), `listStockBalancesV1` (`INVENTORY_BALANCE_VIEW`), `listWarehousesV1` and `listWarehouseLocationsV1` (`WAREHOUSE_VIEW`), `listWarehouseReceiptsV1` (`WAREHOUSE_RECEIPT_VIEW`), `getSkuV1` (`SKU_CATALOG_VIEW`), `getSkuOperationalStatusV1` (`SELLABLE_STATUS_VIEW`), `getRecallCaseV1` (`RECALL_CASE_VIEW`), `getSaleLockV1` (`RECALL_HOLD_VIEW`) |
| `ginsengfood-ops-core-external-allocation-v1` | `INVENTORY_ALLOCATION_CREATE` only | `reserveInventoryAllocationV1` and `releaseInventoryAllocationV1` (both `INVENTORY_ALLOCATION_CREATE`) |

Two things that are easy to get wrong. The allocation audience is never inferred from a read permission: it is separate on purpose, so a token that can read stock cannot hold it. And listing allocations is a read: `listInventoryAllocationsV1` needs `INVENTORY_ALLOCATION_VIEW` and the bulk-read audience, not the allocation audience, so a principal that only holds `INVENTORY_ALLOCATION_CREATE` can reserve and release but cannot read its own holds back. The warehouse permission `INVENTORY_ALLOCATION_RELEASE` is never granted to a service principal; release uses `INVENTORY_ALLOCATION_CREATE`.

The provider caps the permissions of the M3 sales principal at ten, the approved ceiling (a grant outside it is refused and never reaches the token): `SELLABLE_CHECK`, `SELLABLE_STATUS_VIEW`, `SKU_CATALOG_VIEW`, `RECALL_CASE_VIEW`, `RECALL_HOLD_VIEW`, `INVENTORY_ALLOCATION_CREATE`, `INVENTORY_ALLOCATION_VIEW`, `INVENTORY_BALANCE_VIEW`, `WAREHOUSE_VIEW`, `WAREHOUSE_RECEIPT_VIEW`. Operations whose permission is outside the ten answer `403` to this principal, for example `listInventoryLedgerV1` (`INVENTORY_LEDGER_VIEW`), `listStockAlertsV1` (`STOCK_ALERT_VIEW`), `getPublicSkuV1` (`PRODUCT_PUBLIC_VIEW`), the recipe, formula, BOM and activation reads, and every operator operation.

Open point: the ten is today's default. Whether `SELLABLE_STATUS_VIEW` and `WAREHOUSE_RECEIPT_VIEW` stay in it is not decided, and provider configuration can narrow the ceiling to eight. Until it is decided, M3 must not depend on `getSellableStatusV1`, `getSkuOperationalStatusV1` or `listWarehouseReceiptsV1`; `checkAvailabilityV1` and every call of the three groups above that use the other eight permissions are not affected.

## 7. Provider limits: current defaults and what is not guaranteed

The refusals of "The closed table of `details[].reason`" come from limits that are provider configuration (section `ExternalApi:AllocationHoldLimits`), not from the wire: no request or response field carries them and no answer echoes them. No wire field and no status code is added by publishing them here. They are active as soon as the reserve route is, with no flag. These are the values the provider uses today when nothing overrides them (`x-provider-limits` in `inventory.v1.yaml` carries the same numbers):

| Setting | Current default | What it limits | Refusal |
| --- | --- | --- | --- |
| `MaximumActiveHoldsPerPrincipal` | 200 | Active holds of one principal; one hold is one `source_object_id` (RESERVED and not expired, or CONFIRMED). | `409` `ALLOCATION_CONFLICT`, `HOLD_LIMIT_REACHED` |
| `MaximumShareOfOnHandPercent`, `ShareFloorQuantity` | 80% and 50 | What one principal may hold of one SKU in one warehouse and one unit, its other active holds included: the larger of 80% of the physical on-hand stock and 50 units. The floor lets small stock (5 boxes) sell its last box. | `409` `ALLOCATION_CONFLICT`, `HOLD_SHARE_LIMIT_REACHED` |
| `MaximumRequestedQuantityPerLine` | 1000 | `requested_quantity` of one reserve call, that is one line or one order. | `422` `VALIDATION_FAILED`, `REQUESTED_QUANTITY_LIMIT_EXCEEDED` |
| `MaximumHoldWindowMinutes` | 60 minutes | How far ahead `expires_at` may be, counted from the moment the provider receives the call. An omitted `expires_at` still means 30 minutes; the contract ceiling stays 24 hours. | `422` `VALIDATION_FAILED`, `EXPIRES_AT_LIMIT_EXCEEDED` |

The provider refuses to start with a nonsensical value, so the configured hold window is never below 30 minutes (the default window it must not undercut) and never above 24 hours: a hold of up to 30 minutes is never refused for its window, and a longer `expires_at` is accepted only while the configured maximum is at least that long. A deployment sets these per environment, so the live value of an environment can differ from the default in this table.

**The numbers a consumer may rely on are NOT FIXED YET.** The values above are reasonable defaults to run with, not approved numbers. The minimum numbers the provider guarantees to a consumer will be fixed through SEC-15 / M3-158 (the M3 and ops-core owners) before 20/11/2026. Until then each value may change without a change of this contract, and a consumer that hard-codes a window or a line size above what its environment is configured with gets `422` on every reserve. Publishing the defaults gives a consumer the sizes to plan with; it does not promise them.

Consumer rule: **fail closed on every limit refusal.** `HOLD_LIMIT_REACHED`, `HOLD_SHARE_LIMIT_REACHED`, `REQUESTED_QUANTITY_LIMIT_EXCEEDED` and `EXPIRES_AT_LIMIT_EXCEEDED` all mean that nothing was reserved and the line is not covered by a hold: do not sell the line as if it were held, do not report out of stock (stock may be intact), and do not mint a new key to try again. A quota `409` may be sent again with the same key and body once holds were released or expired; a `422` needs a smaller `requested_quantity` or an earlier `expires_at`.
