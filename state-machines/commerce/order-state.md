# Order State Machine v1

Owner: business-platform

Source basis: TECH-04, Commerce Runtime documents, IVR documents, order schema, `order-status` enum.

## Allowed Transitions

| From | To | Guard |
| --- | --- | --- |
| ORDER_NOT_CREATED | ORDER_CREATING | Valid order draft and customer confirmation are present. |
| ORDER_CREATING | ORDER_CREATED | Official order is created after customer confirmation. |
| ORDER_CREATED | ORDER_CODE_ISSUED | Order code is issued for the official order. |
| ORDER_CREATED, ORDER_CODE_ISSUED | ORDER_PAYMENT_PENDING | Payment method is selected and payment is pending. |
| ORDER_PAYMENT_PENDING | ORDER_PAYMENT_REVIEW | Payment proof, bank transfer, COD, or reconciliation needs review. |
| ORDER_PAYMENT_REVIEW | ORDER_PAYMENT_CONFIRMED | Allowed confirmation source confirms payment or collection. |
| ORDER_PAYMENT_CONFIRMED | ORDER_VERIFICATION_PENDING | Order verification is ready. |
| ORDER_VERIFICATION_PENDING | ORDER_VERIFIED | Order verification is complete. |
| ORDER_VERIFIED | ORDER_FULFILLMENT_PENDING | Order can be handed to fulfillment. |
| Any pre-fulfillment state | ORDER_CANCELLED | Customer cancellation, IVR customer-cancelled signal, or owner-approved cancellation applies. |
| Terminal state | ORDER_CLOSED | Order lifecycle is closed after fulfillment, cancellation, refund, or expiry handling. |

## Blocked Transitions

| From | To | Reason |
| --- | --- | --- |
| ORDER_NOT_CREATED | ORDER_CODE_ISSUED | Order code cannot exist before official order creation. |
| Any pre-confirmation state | ORDER_CREATED | Customer confirmation is required. |
| ORDER_CREATED | ORDER_VERIFIED | Payment and verification cannot be skipped. |
| ORDER_PAYMENT_PENDING | ORDER_PAYMENT_CONFIRMED | Customer statement or image alone is not payment confirmation. |
| ORDER_CANCELLED | Verified revenue | Cancelled orders must not create verified revenue. |
| Any state | Ops-core mutation | business-platform events inform ops-core; they do not mutate ops-core truth directly. |

## Notes

- IVR result is an input signal only. Core order state machine decides cancellation or human review.
- TODO: Source documents do not define every refund, expiry, and fulfillment sub-state for v1.
