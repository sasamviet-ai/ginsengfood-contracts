# Recall State Machine v1

Owner: ops-core

Source basis: TECH-03, recall schema, traceability contracts, `recall-status` enum.

## Allowed Transitions

| From | To | Guard |
| --- | --- | --- |
| OPEN | UNDER_REVIEW | Recall case is opened with trace-chain evidence. |
| UNDER_REVIEW | ACTIVE | Owner or quality decision activates recall action. |
| ACTIVE | RECOVERY_IN_PROGRESS | Recovery or field action starts. |
| RECOVERY_IN_PROGRESS | CLOSED | Closure evidence and owner decision are attached. |
| Any active state | BLOCKED | Required trace, evidence, or owner decision is missing. |

## Blocked Transitions

| From | To | Reason |
| --- | --- | --- |
| OPEN | CLOSED | Review, action, and closure evidence cannot be skipped. |
| UNDER_REVIEW | CLOSED | Recall case cannot close without active decision or documented no-action decision. |
| ACTIVE | CLOSED | Recovery or closure evidence is required. |
| Any state | Separate trace chain | Recall must use the operational trace chain, not a separate recall chain. |
| ACTIVE | Commerce available | Active recall must suppress sellable/quote/order/channel flows through sale lock or stop-sale controls. |

## Notes

- Recall is a high-risk operational command and must be evidence-backed.
- TODO: Source documents do not fully define recall severity, no-action closure, or external reporting transitions.
