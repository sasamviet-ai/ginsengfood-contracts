# IVR Attempt State Machine v1

## Scope

The Attempt machine governs one planned customer-counted attempt or its linked technical retry path. It does not decide final order state.

## States

| state | description |
|---|---|
| `ATTEMPT_PLANNED` | Attempt slot exists in the program schedule. |
| `ATTEMPT_PRECHECK_PENDING` | Latest eligibility, contact, and policy checks are pending. |
| `SIM_RESERVED` | A SIM channel is reserved. |
| `DIALING` | Adapter is dialing. |
| `RINGING` | Official contact is ringing. |
| `ANSWERED` | Customer answered. |
| `DTMF_WAITING` | Script is waiting for valid key. |
| `DTMF_1_CONFIRMED` | Customer pressed key 1. |
| `DTMF_0_CANCELLED` | Customer pressed key 0. |
| `DTMF_INVALID` | Unsupported key captured. |
| `DTMF_TIMEOUT` | Customer did not provide valid input. |
| `NO_ANSWER` | Customer-counted no-answer. |
| `CUSTOMER_REJECTED` | Customer rejected the call. |
| `UNREACHABLE` | Contact unreachable by call outcome. |
| `CALL_DROPPED` | Call dropped after connection. |
| `SIM_FAILURE` | SIM/channel failure before a customer-counted result. |
| `CALL_TECHNICAL_FAILURE` | Technical failure not counted as customer attempt. |
| `ATTEMPT_BLOCKED` | Attempt blocked by policy, owner revalidation, or admin hold. |

## Allowed Transitions

| from | to | guard | evidence/audit |
|---|---|---|---|
| `ATTEMPT_PLANNED` | `ATTEMPT_PRECHECK_PENDING` | Attempt time reached within program window. | Scheduler audit. |
| `ATTEMPT_PRECHECK_PENDING` | `SIM_RESERVED` | Revalidation passes; queue active. | Revalidation and SIM reservation audit. |
| `ATTEMPT_PRECHECK_PENDING` | `ATTEMPT_BLOCKED` | Sale Lock, Recall, suppression, opt-out, payment issue, invalid phone, or queue pause. | Block evidence. |
| `SIM_RESERVED` | `DIALING` | SIM channel healthy and enabled. | Adapter audit. |
| `DIALING` | `RINGING` | Provider/SIM reports ringing. | Call log evidence. |
| `RINGING` | `ANSWERED` | Customer answers. | Call log evidence. |
| `ANSWERED` | `DTMF_WAITING` | Script playback reaches input prompt. | Script/evidence reference. |
| `DTMF_WAITING` | `DTMF_1_CONFIRMED` | Customer presses key 1. | DTMF evidence. |
| `DTMF_WAITING` | `DTMF_0_CANCELLED` | Customer presses key 0. | DTMF evidence. |
| `DTMF_WAITING` | `DTMF_INVALID` | Unsupported key received. | DTMF evidence. |
| `DTMF_WAITING` | `DTMF_TIMEOUT` | No valid key before timeout. | Timeout audit. |
| `RINGING` | `NO_ANSWER` | Call reaches no-answer condition under policy. | Call log evidence. |
| `RINGING` | `CUSTOMER_REJECTED` | Customer rejects the call. | Call log evidence. |
| `DIALING` | `UNREACHABLE` | Network/contact unreachable result. | Call log evidence. |
| Any active call state | `CALL_DROPPED` | Call drops after start. | Call log evidence. |
| Any technical state | `CALL_TECHNICAL_FAILURE` | Adapter/provider/evidence write technical failure. | Technical exception record. |
| `SIM_RESERVED` | `SIM_FAILURE` | SIM channel fails before customer outcome. | SIM channel evidence. |

## Blocked Transitions

| transition | reason |
|---|---|
| Technical failure to `NO_ANSWER` | Technical failure is not a customer no-answer. |
| `DTMF_1_CONFIRMED` to order confirmed | Result must go through Result callback and Order Core revalidation. |
| `DTMF_0_CANCELLED` to order cancelled | Order Core decides final cancellation. |
| Attempt beyond Golden Hour attempt 2 | Golden Hour policy has exactly two customer-counted attempts. |
| Attempt beyond 24/7 attempt 3 | 24/7 policy has exactly three customer-counted attempts. |
