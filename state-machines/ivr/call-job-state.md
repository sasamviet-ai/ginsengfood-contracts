# IVR CallJob State Machine v1

## Scope

The CallJob machine starts when IVR receives an `IvrConfirmationTaskV1` from Order Core and ends when a final input signal is sent and handled, or when the job is blocked/closed with evidence.

## States

| state | description |
|---|---|
| `TASK_RECEIVED` | IVR received a task for an Official Order. |
| `ELIGIBILITY_PENDING` | IVR checks task, contact, policy, and latest block indicators. |
| `ELIGIBLE_QUEUED` | Task is eligible and queued for program attempts. |
| `SKIPPED_TRUSTED_CUSTOMER` | Trusted customer rule says IVR is not required. |
| `BLOCKED_POLICY` | Suppression, opt-out, invalid task purpose, or policy blocks IVR. |
| `BLOCKED_OPERATIONAL` | Sale Lock, Recall, availability, payment issue, or owner revalidation blocks IVR. |
| `CALLING` | One or more attempts are active or pending. |
| `WAITING_FOR_CALLBACK` | Result is normalized and waiting for Order Core callback handling. |
| `FINAL_SIGNAL_SENT` | Final IVR signal has been sent to Order Core. |
| `COMPLETED_BY_CORE` | Order Core accepted and handled the signal. |
| `TECHNICAL_EXCEPTION` | Job is held by technical exception. |
| `CAPACITY_HELD` | Queue or SIM capacity hold blocks execution. |
| `CANCELLED_BY_ADMIN` | Authorized admin cancelled the IVR job with evidence. |

## Allowed Transitions

| from | to | guard | evidence/audit |
|---|---|---|---|
| `TASK_RECEIVED` | `ELIGIBILITY_PENDING` | Task has idempotency key and Official Order id. | Task receipt audit. |
| `ELIGIBILITY_PENDING` | `ELIGIBLE_QUEUED` | Official Order, valid official contact, no active policy/ops block. | Eligibility decision, phone validation. |
| `ELIGIBILITY_PENDING` | `SKIPPED_TRUSTED_CUSTOMER` | Trust policy explicitly allows IVR skip. | Trust decision evidence. |
| `ELIGIBILITY_PENDING` | `BLOCKED_POLICY` | Quote/Cart/Draft, suppression, opt-out, invalid contact, or policy block. | Block reason evidence. |
| `ELIGIBILITY_PENDING` | `BLOCKED_OPERATIONAL` | Sale Lock, Recall, payment issue, or owner revalidation block. | Owner revalidation evidence. |
| `ELIGIBLE_QUEUED` | `CALLING` | Queue is active and capacity is available. | Queue dispatch audit. |
| `CALLING` | `WAITING_FOR_CALLBACK` | Attempt/result machine produced normalized final signal. | Attempt and result evidence. |
| `CALLING` | `CAPACITY_HELD` | Queue/SIM capacity incident opened. | Capacity incident evidence. |
| `CALLING` | `TECHNICAL_EXCEPTION` | Technical exception prevents safe call execution. | Technical exception evidence. |
| `WAITING_FOR_CALLBACK` | `FINAL_SIGNAL_SENT` | Callback is sent idempotently to Order Core. | Callback audit. |
| `FINAL_SIGNAL_SENT` | `COMPLETED_BY_CORE` | Order Core acknowledges callback after revalidation. | Core acknowledgement evidence. |
| `CAPACITY_HELD` | `ELIGIBLE_QUEUED` | Capacity incident resolved and schedule remains valid. | Resume admin action. |
| `TECHNICAL_EXCEPTION` | `ELIGIBLE_QUEUED` | Approved technical retry does not consume customer attempt quota. | Technical retry action. |
| Any non-terminal state | `CANCELLED_BY_ADMIN` | Admin has permission and reason; no policy bypass. | Admin action evidence. |

## Blocked Transitions

| transition | reason |
|---|---|
| `TASK_RECEIVED` to `CALLING` | Eligibility, phone validation, and policy checks cannot be skipped. |
| `CALLING` to `COMPLETED_BY_CORE` | Callback and Order Core acknowledgement are required. |
| Any state to order confirmed/cancelled | Order state belongs to Order Core. |
| `SKIPPED_TRUSTED_CUSTOMER` to `CALLING` | Skip decision means no IVR call for that task unless a new task is created. |
