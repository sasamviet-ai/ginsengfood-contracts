# Inventory Allocation State Machine v1

Owner: ops-core

Source basis: `inventory-allocation-status` enum, `external-inventory-allocation` schema, OWNER-DIRECTIVE-2026-09-05-EXT-ALLOC-RESERVE, OD-ALLOC-LIFECYCLE-01, OD-ALLOC-CONSUME-01 (C37), OD-M3-REPLY-01 section 3.2.

An allocation is one hold of finished-goods stock on one warehouse lot. One reserve call can create several allocations (one per lot) for the same source object; for the consumer-visible commands below they move together.

## Allowed Transitions

| From | To | Actor | Guard |
| --- | --- | --- | --- |
| (none) | RESERVED | Consumer, `POST /v1/inventory/allocations` | Full-fill only, sellability guard passed, hold expiry at most 24 hours ahead (default 30 minutes). |
| RESERVED | CONFIRMED | Warehouse | Warehouse starts picking the order. The consumer has no command for this transition. |
| CONFIRMED | ISSUED | Warehouse | A sales issue document linked to exactly this allocation is applied. Terminal. |
| RESERVED | RELEASED | Consumer, `POST /v1/inventory/allocations/release` | Only lines created by the calling service principal, and only while the hold has not expired. |
| RESERVED | RELEASED | Warehouse | Warehouse release with a reason. |
| RESERVED | RELEASED | Provider expiry worker | `expires_at` has passed. The reason is recorded internally; the status alone reads RELEASED. |
| CONFIRMED | RELEASED | Warehouse | Warehouse release with a reason. Not available to the consumer. |

## Blocked Transitions

| From | To | Reason |
| --- | --- | --- |
| ISSUED | RELEASED | Goods already left the warehouse; reversing an issue is a warehouse document, not a release. |
| ISSUED | CONFIRMED | Terminal state. |
| ISSUED | RESERVED | Terminal state. A reserve call for an issued source is answered `409 ALLOCATION_CONFLICT`, with or without a new idempotency key. |
| RELEASED | RESERVED | A new reserve call creates new allocations; a released row is never reopened. |
| RELEASED | any | Terminal state. A second release is `409 ALLOCATION_NOT_HELD`. |
| CONFIRMED | RELEASED (consumer) | The warehouse committed part of the order; releasing the rest would leave half an order held. `releaseInventoryAllocationV1` answers `409 ALLOCATION_CONFLICT` and releases nothing. |
| RESERVED | ISSUED | An issue document can only consume a CONFIRMED allocation, because a RESERVED one may expire between drafting and applying the document. |
| Any state | Ledger entry | Reserve and release never write an inventory ledger entry; only the warehouse issue document that makes a line ISSUED moves goods. |

## Notes

- Expiry applies to RESERVED only. CONFIRMED never expires on its own, and expiry always ends in RELEASED.
- Expiry is not distinguishable from an operator release or a consumer self-release through `status` alone; all three read RELEASED.
- A RESERVED line whose `expires_at` has passed but which the expiry worker has not swept yet cannot be released by the consumer (`409 ALLOCATION_NOT_HELD`); the worker releases it.
- ISSUED adds no field to `external-inventory-allocation.schema.json`: a consumer reading an ISSUED row sees the same fields as before, with `confirmed_at` set.
- A consumer that receives `ALLOCATION_CONFLICT` from reserve cannot tell "hold expired" from "already issued" by code: it reads `GET /v1/inventory/allocations?sourceObjectId=` once. An `ISSUED` row means stop; no row in a holding state means the hold expired.
- Consumers must tolerate an unknown status value (see `enums/ops/inventory-allocation-status.yaml`).
