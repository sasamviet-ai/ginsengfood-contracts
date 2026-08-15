# Sale Lock State Machine v1

Owner: ops-core

Source basis: TECH-03, PACK-03, sale lock schema, `sale-lock-status` enum.

## Allowed Transitions

| From | To | Guard |
| --- | --- | --- |
| ACTIVE | RELEASE_REQUESTED | Owner or quality team requests release with evidence. |
| RELEASE_REQUESTED | RELEASED | Release decision is approved and effective end is recorded. |
| ACTIVE | REVIEW_REQUIRED | Evidence or scope requires owner review before release. |
| REVIEW_REQUIRED | RELEASE_REQUESTED | Review accepts release request. |
| Any active state | BLOCKED | Required evidence, trace, or owner decision is missing. |

## Blocked Transitions

| From | To | Reason |
| --- | --- | --- |
| ACTIVE | RELEASED | Release cannot bypass owner decision and evidence. |
| ACTIVE | Quote/order/AI/CRM/Ads/Live allow | Sale Lock / Stop Sale wins over consumer and channel flows. |
| RELEASE_REQUESTED | Commerce available | Commerce remains blocked until lock is actually released. |
| Any state | Silent scope change | Lock scope changes require explicit evidence and audit. |
| Any state | Inventory ledger mutation | Sale lock suppresses sale; it does not edit operational inventory truth. |

## Notes

- `ACTIVE` sale lock is sufficient for business-platform to stop quote, order, AI recommendation, CRM, Ads, and Live selling flows.
- External create v1 accepts only `SKU`, `BATCH`, `LOT`, `TRACE_CHAIN`.
- Every v1 identifier is a UUID. For `TRACE_CHAIN`, `scope_id` must equal `recall_case_id` and covers that case's complete versioned historical impact union.
- A scope outside that allowlist is rejected before registry, audit transition, or outbox event side effects.
- Warning/pre-lock and wider scope capabilities are not silently accepted through v1; they require an approved additive contract or a new version.
