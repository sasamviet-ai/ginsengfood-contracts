# Shipping State Machine v1

Owner: business-platform

Source basis: TECH-04, shipping schema, `shipping-status` enum.

## Allowed Transitions

| From | To | Guard |
| --- | --- | --- |
| SHIPPING_NOT_CHECKED | CHECKING | Address and shipping inputs are submitted. |
| CHECKING | ADDRESS_MISSING | Required address fields are missing. |
| CHECKING | ELIGIBLE | Destination and channel are eligible for shipping. |
| CHECKING | NOT_ELIGIBLE | Destination or policy blocks shipping. |
| ELIGIBLE | FEE_PENDING | Shipping fee is being resolved. |
| FEE_PENDING | FEE_CONFIRMED | Shipping fee and ETA are confirmed. |
| Any active state | BLOCKED | Shipping policy, sale lock, or runtime guard blocks shipping. |
| Any active state | RUNTIME_UNAVAILABLE | Shipping resolver is unavailable. |
| Terminal state | CLOSED | Shipping lifecycle is closed. |

## Blocked Transitions

| From | To | Reason |
| --- | --- | --- |
| ADDRESS_MISSING | FEE_CONFIRMED | Fee cannot be confirmed without valid address. |
| NOT_ELIGIBLE | FEE_CONFIRMED | Ineligible shipping cannot proceed. |
| BLOCKED | Official order | Blocked shipping must not create an official order. |
| RUNTIME_UNAVAILABLE | Official order | Runtime fallback must be explicit; do not silently create an order. |
| Any state | Paid | Shipping state does not confirm payment. |

## Notes

- Shipping eligibility, COD constraints, ETA, and tracking are contract-level concerns.
- TODO: International shipping and payment are marked future/reserved in source documents and need owner-approved extension before v1 contract expansion.
