# IVR Result State Machine v1

## Scope

The Result machine normalizes raw SIM/DTMF/call outcomes and sends an input signal callback to Order Core.

## States

| state | description |
|---|---|
| `RESULT_CAPTURED` | Raw call outcome or DTMF has been captured. |
| `NORMALIZATION_PENDING` | IVR is mapping raw data into a contract result. |
| `NORMALIZED` | Result status is source-backed and ready for callback. |
| `CALLBACK_SENT` | Callback has been sent idempotently to Order Core. |
| `CALLBACK_ACCEPTED` | Order Core accepted the callback as input. |
| `CALLBACK_REJECTED_STALE` | Order Core rejected stale order/task/idempotency version. |
| `CALLBACK_BLOCKED_BY_CORE` | Order Core revalidation blocked action. |
| `HUMAN_REVIEW_REQUIRED` | Result cannot be auto-handled. |
| `TECHNICAL_EXCEPTION` | Result handling failed technically. |

## Allowed Transitions

| from | to | guard | evidence/audit |
|---|---|---|---|
| `RESULT_CAPTURED` | `NORMALIZATION_PENDING` | Raw outcome has call job and attempt references. | Raw call/DTMF evidence. |
| `NORMALIZATION_PENDING` | `NORMALIZED` | Outcome maps to a known result status. | Normalization audit. |
| `NORMALIZATION_PENDING` | `HUMAN_REVIEW_REQUIRED` | Outcome ambiguous or owner decision required. | Review reason evidence. |
| `NORMALIZATION_PENDING` | `TECHNICAL_EXCEPTION` | Evidence, callback, or normalization source failed. | Technical exception evidence. |
| `NORMALIZED` | `CALLBACK_SENT` | Callback has idempotency key and required evidence refs. | Callback audit. |
| `CALLBACK_SENT` | `CALLBACK_ACCEPTED` | Order Core accepts signal after revalidation. | Core ack evidence. |
| `CALLBACK_SENT` | `CALLBACK_REJECTED_STALE` | Order/task version or idempotency key is stale. | Rejection evidence. |
| `CALLBACK_SENT` | `CALLBACK_BLOCKED_BY_CORE` | Sale Lock, Recall, payment issue, suppression, opt-out, or policy block wins. | Core block evidence. |

## Blocked Transitions

| transition | reason |
|---|---|
| `NORMALIZED` to order confirmed/cancelled | IVR normalized result is not the order transition. |
| `CALLBACK_SENT` to `CALLBACK_ACCEPTED` without core ack | Order Core acknowledgement is mandatory. |
| No-answer final to notification | No-answer max does not send notification by itself. |
| Technical exception to customer cancellation | Technical exception is not customer intent. |
