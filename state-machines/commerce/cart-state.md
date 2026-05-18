# Cart State Machine v1

Owner: business-platform

Source basis: TECH-04, Commerce Runtime documents, cart schema, `cart-status` enum.

## Allowed Transitions

| From | To | Guard |
| --- | --- | --- |
| CART_EMPTY | CART_ACTIVE | Customer adds a line. |
| CART_ACTIVE | CART_VALIDATING | Availability, price, benefit, and shipping inputs are checked. |
| CART_VALIDATING | CART_VALID | Current cart can proceed with QuoteSnapshot. |
| CART_VALIDATING | CART_INVALID | Required validation fails. |
| CART_VALID | CART_CONVERTED_TO_DRAFT | Order draft is created from valid quote/cart context. |
| CART_VALID | CART_NEEDS_QUOTE_REFRESH | QuoteSnapshot is expired or superseded. |
| Any active state | CART_BLOCKED | Sale lock, recall, stock, price, or shipping guard blocks the cart. |
| Any active state | CART_ABANDONED | Customer abandons cart. |
| Terminal state | CART_CLOSED | Cart lifecycle is closed. |

## Blocked Transitions

| From | To | Reason |
| --- | --- | --- |
| CART_EMPTY | CART_CONVERTED_TO_DRAFT | No sellable line or quote snapshot exists. |
| CART_INVALID | CART_CONVERTED_TO_DRAFT | Invalid cart cannot create order draft. |
| CART_BLOCKED | CART_CONVERTED_TO_DRAFT | Blocked cart must not bypass ops-core sellable controls. |
| Any state | Official order | Cart is not an official order. |
| Any state | Verified revenue | Cart is not revenue. |

## Notes

- Cart is a pre-order runtime object. Customer confirmation is still required before official order creation.
- TODO: Source documents do not define cart abandonment timeout or recovery transitions.
