# Quote State Machine v1

Owner: business-platform

Source basis: TECH-04, Commerce Runtime documents, quote snapshot schema, `quote-status` enum.

## Allowed Transitions

| From | To | Guard |
| --- | --- | --- |
| QUOTE_NOT_CREATED | QUOTE_CREATING | Customer context and requested lines are received. |
| QUOTE_CREATING | QUOTE_ACTIVE | Sellable check, listed price, benefits, and shipping inputs are captured into QuoteSnapshot. |
| QUOTE_ACTIVE | QUOTE_USED_FOR_DRAFT | QuoteSnapshot is used to create an order draft. |
| QUOTE_ACTIVE | QUOTE_USED_FOR_ORDER | QuoteSnapshot is used after valid customer confirmation. |
| QUOTE_ACTIVE | QUOTE_EXPIRED | Quote validity window expires. |
| QUOTE_ACTIVE | QUOTE_SUPERSEDED | A newer quote snapshot replaces it. |
| QUOTE_ACTIVE | QUOTE_CANCELLED | Customer or business-platform cancels the quote. |
| Any active state | QUOTE_BLOCKED | Ops-core sellable, sale lock, price, or shipping guard fails. |
| Any active state | QUOTE_DISPUTE_REVIEW | Price or benefit dispute needs review. |
| Terminal state | QUOTE_CLOSED | Quote lifecycle is closed for reporting. |

## Blocked Transitions

| From | To | Reason |
| --- | --- | --- |
| QUOTE_EXPIRED | QUOTE_USED_FOR_ORDER | Expired quotes cannot create official orders. |
| QUOTE_SUPERSEDED | QUOTE_USED_FOR_ORDER | Superseded quote snapshots cannot be reused for official orders. |
| QUOTE_BLOCKED | QUOTE_USED_FOR_DRAFT | Operational or sale-lock block must be resolved first. |
| Any state | Payment paid | Quote is not an official order and has no payment truth. |
| Any state | Verified revenue | Quote is not revenue. |

## Notes

- QuoteSnapshot freezes pricing inputs for downstream review; it does not mutate ops-core truth.
- TODO: Source documents do not define exact quote expiration duration or dispute-review SLA.
