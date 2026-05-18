# Warehouse Receipt State Machine v1

Owner: ops-core

Source basis: TECH-03, PACK-03, warehouse receipt schema, `warehouse-receipt-status` enum.

## Allowed Transitions

| From | To | Guard |
| --- | --- | --- |
| DRAFT | PENDING_CONFIRMATION | Receipt draft references a RELEASED batch and target warehouse location. |
| PENDING_CONFIRMATION | CONFIRMED | Warehouse receipt is confirmed with evidence. |
| DRAFT, PENDING_CONFIRMATION | BLOCKED | Batch is not released or required evidence is missing. |
| DRAFT, PENDING_CONFIRMATION | REJECTED | Receipt is rejected before confirmation. |

## Blocked Transitions

| From | To | Reason |
| --- | --- | --- |
| DRAFT | CONFIRMED | Confirmation review cannot be skipped. |
| PENDING_CONFIRMATION | CONFIRMED | Blocked when batch status is not `RELEASED`. |
| CONFIRMED | DRAFT | Confirmed receipt is an operational checkpoint and must not be reset. |
| Any state | Inventory balance direct edit | Inventory balance is derived from ledger, not edited directly. |
| Any state | MISA handoff without checkpoint | MISA handoff requires the configured operational checkpoint. |

## Notes

- Inventory can increase only after `CONFIRMED` warehouse receipt creates or references an inventory ledger entry.
- TODO: Source documents do not define exact rejection reason enum or partial receipt transitions.
