# QC State Machine v1

Owner: ops-core

Source basis: TECH-02, TECH-03, QC inspection schema, `qc-status` enum.

## Allowed Transitions

| From | To | Guard |
| --- | --- | --- |
| QC_PENDING | QC_PASS | Inspection passes against the configured QC checklist. |
| QC_PENDING | QC_HOLD | Inspection requires hold before release decision. |
| QC_PENDING | QC_REVIEW | Inspection requires owner or quality review. |
| QC_PENDING | QC_FAIL | Inspection fails. |
| QC_HOLD | QC_REVIEW | Hold is escalated for review. |
| QC_REVIEW | QC_PASS | Review accepts the QC result. |
| QC_REVIEW | QC_FAIL | Review rejects the QC result. |

## Blocked Transitions

| From | To | Reason |
| --- | --- | --- |
| QC_PASS | RELEASED | QC pass does not equal batch release. |
| QC_PASS | Inventory ledger | Stock can increase only after warehouse receipt confirmation. |
| QC_PENDING | RELEASED | QC evidence cannot be skipped. |
| QC_FAIL | Sellable | Failed QC must not become sellable. |
| Any state | Public trace ready | Trace readiness depends on release and downstream trace chain, not QC alone. |

## Notes

- QC state feeds batch release, but does not own release or inventory truth.
- TODO: Source documents do not define every QC checklist result or remediation path.
