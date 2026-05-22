# IVR TechnicalException State Machine v1

## Scope

The TechnicalException machine tracks IVR failures that are not customer outcomes and do not consume customer attempt quota.

## States

| state | description |
|---|---|
| `TECHNICAL_EXCEPTION_OPENED` | Technical exception has been detected. |
| `CLASSIFICATION_PENDING` | Exception type and impact are being classified. |
| `RETRY_ELIGIBLE` | Technical retry is allowed without consuming customer attempt quota. |
| `RETRY_BLOCKED` | Retry is blocked by policy, capacity, or owner revalidation. |
| `ESCALATED` | Admin/owner review is required. |
| `RESOLVED` | Exception has been resolved. |
| `CLOSED_NO_CUSTOMER_ATTEMPT` | Exception closed without counting a customer attempt. |

## Allowed Transitions

| from | to | guard | evidence/audit |
|---|---|---|---|
| `TECHNICAL_EXCEPTION_OPENED` | `CLASSIFICATION_PENDING` | Exception has task/job/attempt context. | Technical evidence. |
| `CLASSIFICATION_PENDING` | `RETRY_ELIGIBLE` | Policy allows technical retry and capacity is available. | Classification audit. |
| `CLASSIFICATION_PENDING` | `RETRY_BLOCKED` | Policy, capacity, or owner revalidation blocks retry. | Block evidence. |
| `CLASSIFICATION_PENDING` | `ESCALATED` | Ambiguous or high-risk exception. | Escalation audit. |
| `RETRY_ELIGIBLE` | `RESOLVED` | Retry is scheduled or executed safely. | Retry admin/action evidence. |
| `RETRY_BLOCKED` | `CLOSED_NO_CUSTOMER_ATTEMPT` | No safe retry path remains. | Closure evidence. |
| `ESCALATED` | `RESOLVED` | Authorized review resolves the exception. | Review evidence. |
| `RESOLVED` | `CLOSED_NO_CUSTOMER_ATTEMPT` | Exception closed without customer-counted attempt. | Closure audit. |

## Blocked Transitions

| transition | reason |
|---|---|
| Technical exception to `NO_ANSWER` | Technical failure is not customer no-answer. |
| Technical retry to increment customer attempt number | Technical retry is separate from customer attempt quota. |
| Technical exception to customer cancellation | Technical issue is not customer intent. |
