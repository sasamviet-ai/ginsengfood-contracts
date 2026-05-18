# Batch State Machine v1

Owner: ops-core

Source basis: TECH-02, TECH-03, PACK-01 to PACK-04, batch schema, `batch-status` enum.

## Allowed Transitions

| From | To | Guard |
| --- | --- | --- |
| CREATED | IN_PRODUCTION | Production execution is started for the batch. |
| IN_PRODUCTION | QC_PENDING | Production execution creates a batch requiring QC inspection. |
| QC_PENDING | QC_PASS | QC inspection passes. |
| QC_PENDING | QC_HOLD | QC inspection requires hold or review. |
| QC_PENDING | QC_FAIL | QC inspection fails. |
| QC_PASS | RELEASE_PENDING | Batch release review starts after QC result. |
| RELEASE_PENDING | RELEASED | Batch release is approved with required evidence. |
| QC_HOLD | QC_PENDING | Re-test or review evidence reopens QC. |
| Any active state | ON_HOLD | Quality, recall, or owner decision requires hold. |
| Any active state | BLOCKED | Required evidence or release guard fails. |

## Blocked Transitions

| From | To | Reason |
| --- | --- | --- |
| QC_PASS | RELEASED | QC pass is only a result and must not auto-release a batch. |
| CREATED | RELEASED | Production, QC, and batch release cannot be skipped. |
| IN_PRODUCTION | Warehouse receipt | Warehouse can only receive a RELEASED batch. |
| QC_PENDING, QC_HOLD, QC_FAIL | Warehouse receipt | Non-RELEASED batches must not enter sellable inventory. |
| Any state | Sellable | Batch release is necessary but not sufficient for sellable status. |

## Notes

- `QC_PASS` and `RELEASED` are intentionally separate.
- Warehouse receipt and inventory ledger are downstream of batch release.
- TODO: Source documents do not fully define rework loops from `QC_FAIL` or exact hold release authorities.
