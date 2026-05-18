# Payment State Machine v1

Owner: business-platform

Source basis: TECH-04, payment documents, payment schema, `payment-status` enum.

## Allowed Transitions

| From | To | Guard |
| --- | --- | --- |
| PAYMENT_NOT_STARTED | PAYMENT_PENDING | Official order has selected a payment method. |
| PAYMENT_PENDING | PAYMENT_REVIEW | Bank transfer, COD, gateway, or reconciliation needs review. |
| PAYMENT_PENDING | PAYMENT_FAILED | Payment attempt fails. |
| PAYMENT_REVIEW | PAYMENT_CONFIRMED | Payment gateway, payment core, accounting review, or reconciliation confirms payment. |
| PAYMENT_REVIEW | AMOUNT_MISMATCH | Evidence amount does not match the order amount. |
| PAYMENT_REVIEW | REFERENCE_MISMATCH | Payment reference cannot be matched. |
| PAYMENT_REVIEW | PAYMENT_REJECTED | Review rejects the payment evidence. |
| PAYMENT_CONFIRMED | CLOSED | Payment lifecycle is closed after order verification. |
| PAYMENT_CONFIRMED | REFUND_PENDING | Refund process starts. |
| REFUND_PENDING | REFUNDED | Refund is confirmed. |

## Blocked Transitions

| From | To | Reason |
| --- | --- | --- |
| PAYMENT_PENDING | PAYMENT_CONFIRMED | Customer claim, chat message, or image alone is not confirmation. |
| COD_PENDING_COLLECTION | PAYMENT_CONFIRMED | COD must be collected or reconciled before confirmation. |
| PAYMENT_FAILED | PAYMENT_CONFIRMED | Failed payment needs a new attempt or review path. |
| PAYMENT_REJECTED | Verified revenue | Rejected payment cannot create verified revenue. |
| Any state | Ops-core payment truth | Payment truth belongs to business-platform/accounting review, not ops-core. |

## Notes

- `paid_requires_confirmation` remains true in the payment schema.
- TODO: Source documents do not define all gateway statuses or refund review transitions.
