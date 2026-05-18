# Production Order State Machine v1

Owner: ops-core

Source basis: PACK-01 to PACK-04, TECH-02, TECH-03, production order schema, `production-order-status` enum.

## Allowed Transitions

| From | To | Guard |
| --- | --- | --- |
| DRAFT | PENDING_OWNER_APPROVAL | Production demand and draft production inputs are captured. |
| PENDING_OWNER_APPROVAL | APPROVED | Owner approval evidence is attached. |
| APPROVED | RELEASED_TO_PRODUCTION | Approved formula/BOM snapshot is available for the production order. |
| RELEASED_TO_PRODUCTION | IN_PROGRESS | Production execution starts against the approved snapshot. |
| IN_PROGRESS | COMPLETED | Execution is completed and handoff to batch/QC flow is ready. |
| DRAFT, PENDING_OWNER_APPROVAL, APPROVED | CANCELLED | Cancellation is owner-approved before irreversible production execution. |
| Any active state | BLOCKED | Required evidence, release, inventory, or owner-decision guard fails. |

## Blocked Transitions

| From | To | Reason |
| --- | --- | --- |
| DRAFT | RELEASED_TO_PRODUCTION | Owner approval and production BOM snapshot cannot be skipped. |
| PENDING_OWNER_APPROVAL | IN_PROGRESS | Production cannot start before approval and release-to-production. |
| APPROVED | COMPLETED | Execution evidence cannot be bypassed. |
| Any state | Inventory mutation | Inventory changes only through warehouse receipt confirmation and inventory ledger. |
| Any state | Sellable | Product activation or production completion does not make stock sellable. |

## Notes

- Production order state does not directly release a batch, create inventory, or make a SKU sellable.
- G0/G1 formula and BOM version detail is carried by product and production BOM snapshot contracts, not by this state machine.
- TODO: Source documents do not fully define cancellation after `RELEASED_TO_PRODUCTION` or partial production completion rules.
