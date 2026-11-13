# M3 <-> ops-core SKU catalog: integration notes

Audience: the business-platform (M3) team and the ops-core owners. These notes explain `GET /v1/skus` and `GET /v1/skus/{skuId}` (`openapi/ops-core/sku.v1.yaml`, `schemas/product/sku.schema.json`) and answer the questions of the M3 review of the contract (NM3-32c). They add no wire field, no status code and no operation; where a number appears it is marked as a recommendation or as the provider's current behaviour, never as a promise the contract does not make.

## 1. Reading the catalog

`GET /v1/skus` returns a complete, ordered snapshot of the SKU catalog as of the first page of the read (`updatedAt ASC, skuId ASC`, opaque cursor, `limit` 1 to 100). The optional filter `updated_since` keeps the SKUs whose `updated_at` is greater than or equal to a given instant.

**`updated_since` is a filter, not a delta feed.** The snapshot policy of the contract (`x-pagination-policies`, `delta_supported: false`, and `schemas/ops/x03b/external-snapshot-meta.schema.json`) uses the word "delta" for a change feed that returns only what changed since a checkpoint and replays what was missed. No list of this contract publishes one. `GET /v1/skus?updated_since=` is a filter on the instant a SKU was written, applied to a complete snapshot of the moment of the read: the provider keeps no checkpoint, replays nothing and publishes no tombstone (a SKU never disappears, RETIRED stays listed). The rule `expired_cursor_recovery: FULL_RECONCILE_NO_TIMESTAMP_OR_LOCAL_CHECKPOINT` is about CURSORS: a cursor that expired (410) or a snapshot that changed under a cursor (409) is recovered by reading the whole snapshot again from the first page, never by resuming from a timestamp. It does not forbid starting a new pull with `updated_since`.

**Recommended cadence for the SKU catalog (SHOULD, not a guarantee; the provider does not enforce these numbers):**

| What | Recommendation |
| --- | --- |
| Incremental pull | every 5 minutes, with `updated_since` = the time of the previous successful pull minus 5 minutes (a 5-minute overlap) |
| Full read | at start-up and at least every 24 hours, without `updated_since`; the catalog is 19 SKUs today, one page, so this is cheap |
| Cursor expired (410) or snapshot changed under the cursor (409) | read the whole catalog again from the first page |
| De-duplication | by `sku_id` and `revision`: the overlap returns the SKUs again |

Why the overlap and the periodic full read: `updated_at` is the instant a change was WRITTEN, not the instant it was COMMITTED. A transaction that starts early and commits late carries an `updated_at` older than a value the consumer has already stored, and a pull that starts exactly at that value would never return it. The overlap covers most of that gap; the periodic full read covers the rest and is the authority. A change made outside the application (SQL, a migration, a seed) that does not set `updated_at` is invisible to `updated_since`, `revision` and the incremental pull until the next full read: the provider must set `updated_at` itself in that case (`schemas/product/sku.schema.json`, runbook of ops-core).

The sustained rate for this operation is the `ExternalBulkRead` policy (2 requests per second per principal, burst 4); one pull of the 19 SKUs is one request.

## 2. SKU lifecycle as ops-core stores and publishes it

The contract enum `lifecycle_status` has eight values. What ops-core stores is narrower, and this section says exactly how (answers C2 and C7 of the M3 review).

- **Four stored states.** The column `ref_sku.status` is constrained by `ck_ref_sku_status` to ACTIVE_BASELINE, ACTIVE, INACTIVE and RETIRED. ACTIVE_BASELINE marks the SKUs of the seed catalog; it is internal and ACTIVE_BASELINE is published as ACTIVE.
- **No hiding.** `GET /v1/skus` does not hide a SKU by its status: every stored SKU is listed, and the operation filters only when `lifecycle_status` is sent. A SKU is therefore never absent because of its state; absence from a complete read means that ops-core has no such SKU.
- **Five values never published.** The other five values of the enum (DRAFT, PENDING_CONFIG, PENDING_EVIDENCE, READY, BLOCKED) have never been published: no stored SKU can carry them, and filtering by one of them answers an empty page (`complete: true`), not an error. DRAFT, PENDING_READINESS and BLOCKED that appear in the ops-core code are statuses of the product activation (`GET /v1/skus/{skuId}/activation`), not of the SKU lifecycle; do not read them as values of `lifecycle_status`.
- **Transitions.** INACTIVE and ACTIVE can alternate: a SKU that was stopped can be started again. RETIRED is final: a database trigger (`SKU_RETIRED_TERMINAL`) refuses any way back, and the code of a retired SKU is not reused. The 19 SKUs of the seed catalog (stored ACTIVE_BASELINE) cannot be edited, activated or deactivated through the API; the ways to stop selling one are a sale lock or RETIRED (one-way), and M3 is told beforehand (runbook of ops-core).
- **What the other operations say about an INACTIVE or RETIRED SKU.** `POST /v1/availability/check` answers NOT_SELLABLE with the block reason `SKU_NOT_ACTIVE`; `sellable_quantity` is 0 and `available_quantity` stays the physical stock on hand (the quantity block reports stock, not permission to sell). `GET /v1/inventory/stock-balances` does not filter stock balances by the status of the SKU, so the stock of a stopped SKU stays readable. `GET /v1/skus/{skuId}` still answers 200 for a RETIRED SKU; it is never a 404 because of the status.

## 3. `sku_code` does not change on a `sku_id`

No operation of the API changes a `sku_code`, and the database refuses it: the trigger `SKU_CODE_IMMUTABLE` rejects an update of the code, and the code is unique. The only way to change a code is a deliberate migration that drops the trigger for that change (the precedent renumbered a group of codes and kept every `sku_id`), and M3 is told before, through the runbook of ops-core `12-11-15-00-doi-ngung-ma-sku-bao-m3-runbook.md`. Such a migration must set `updated_at` itself (section 1), so `updated_at` and `revision` move and the list shows the new code at the next pull; a consumer that links by `sku_id` keeps working through the change and compares `sku_code` only as a check.
