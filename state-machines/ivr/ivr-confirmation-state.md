# IVR Confirmation State Machine v1

Owner: business-platform

Source basis: PACK-09, TECH-09, IVR schemas, `ivr-result-status` enum.

## Allowed Transitions

| From | To | Guard |
| --- | --- | --- |
| REQUESTED | ATTEMPTING | Eligible official order is queued for IVR order confirmation. |
| ATTEMPTING | IVR_CONFIRMED | Customer confirms the order through the IVR program. |
| ATTEMPTING | IVR_CUSTOMER_CANCELLED | Customer cancels through the IVR program. |
| ATTEMPTING | NO_ANSWER | Attempt receives no answer. |
| NO_ANSWER | ATTEMPTING | Attempt policy allows another retry. |
| NO_ANSWER | NO_ANSWER_MAX_ATTEMPT_REACHED | Attempt policy is exhausted. |
| ATTEMPTING | INVALID_PHONE | Phone is invalid under IVR rules. |
| ATTEMPTING | IVR_TECHNICAL_EXCEPTION | Provider, capacity, or technical exception occurs. |
| Any final result | CORE_ORDER_HANDOFF_REQUIRED | Result is passed to the core order state machine as input signal. |

## Blocked Transitions

| From | To | Reason |
| --- | --- | --- |
| Any state | Direct order state update | IVR result is input signal only; core order state machine decides. |
| Any state | Payment confirmed | IVR cannot mark an order as paid. |
| Any state | Verified revenue | IVR cannot create verified revenue. |
| Any state | Delivery completed | IVR cannot mark fulfillment or delivery as complete. |
| IVR_TECHNICAL_EXCEPTION | Cancellation notice | Technical exception must not trigger customer cancellation notice. |
| Quote, cart, order draft | REQUESTED | IVR applies only to eligible official orders. |

## Notes

- Invalid phone, no-answer, customer-cancelled, confirmed, and technical exception outcomes must stay distinct.
- TODO: Source documents include program-based final no-answer names and baseline max-attempt policy; exact retry count and timing need owner confirmation.
