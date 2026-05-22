# IVR-07 - Result Normalization / IVR -> Order Core Callback

Trạng thái: `SRS_BASELINE`  
Phase: 8 - IVR Order Confirmation  
Mục tiêu: Khóa result taxonomy, callback contract và race-condition revalidation.

## 1. Mục tiêu

IVR Result Normalizer chuyển raw SIM/DTMF result thành outcome chuẩn và gửi callback về Order Core. Order Core luôn revalidate trước khi transition. IVR không được ép trạng thái đơn.

## 2. Nguồn tham chiếu

| Nguồn | Vai trò |
| --- | --- |
| `docs/documents/2. pack/09-PACK-09-IVR-ORDER-CONFIRMATION.md` | IVR result là input signal. |
| `docs/documents/3. tech/10-TECH-09-IVR-ORDER-CONFIRMATION-AUTO-CALL-VERIFICATION-ANTI-FAKE-ORDER-CONTROL.md` | Outcome classification và callback boundary. |
| `docs/documents/3. tech/05-TECH-04-COMMERCE-RUNTIME-SELLABLE-GATE-QUOTE-CART-ORDER-PAYMENT-SHIPPING.md` | Order Core/Payment/Verified Revenue boundary. |
| `docs/documents/4. phase/phase-8/ivr-pre-srs-gap-closure.md` | Race condition và callback contract baseline. |

## 3. Tổng quan contract

| Thuộc tính | Giá trị |
| --- | --- |
| Contract name | `IvrConfirmationResultCallbackV1` |
| Direction | IVR Runtime -> Order Core |
| Producer | IVR Runtime Orchestrator |
| Consumer | Commerce Order Core / Order State Machine |
| Role | Result signal only |
| Idempotency | Bắt buộc |
| Correlation | Bắt buộc |

## 4. Trường dữ liệu bắt buộc

| Field | Required | Ghi chú |
| --- | --- | --- |
| `callback_id` | Có | Unique callback. |
| `task_id` | Có | Link task gốc. |
| `call_job_id` | Có điều kiện | Có nếu đã tạo CallJob. |
| `attempt_id` | Có điều kiện | Có với attempt-level result. |
| `idempotency_key` | Có | Chống duplicate transition. |
| `correlation_id` | Có | Trace. |
| `order_id` | Có | Order gốc. |
| `order_version_seen_by_ivr` | Có | Race guard. |
| `program_code` | Có | Context chương trình. |
| `attempt_policy_code` | Có | Context policy. |
| `attempt_no` | Có điều kiện | Required cho attempt result. |
| `max_attempts` | Có | 2 hoặc 3 theo chương trình. |
| `result_type` | Có | Outcome chuẩn. |
| `result_reason` | Có | Lý do chi tiết. |
| `dtmf_key` | Có điều kiện | `1`, `0`, invalid hoặc null. |
| `is_counted_customer_attempt` | Có | False cho technical failure. |
| `is_final_for_ivr` | Có | IVR có dừng không. |
| `recommended_core_action` | Có | Recommendation only. |
| `technical_error_code` | Có điều kiện | Required nếu technical exception. |
| `evidence_ref` | Có | Evidence Registry reference. |
| `audit_ref` | Có | Audit reference. |
| `privacy_policy_version` | Có | Privacy context. |
| `script_version` | Có | Script đã phát. |
| `created_at` | Có | Callback timestamp. |

## 5. Loại kết quả

| Result type | Ý nghĩa | Counted? | Final? |
| --- | --- | --- | --- |
| `IVR_CONFIRMED` | Khách bấm `1` | Có | Có |
| `IVR_CUSTOMER_CANCELLED` | Khách bấm `0` | Có | Có |
| `IVR_NO_ANSWER_ATTEMPT` | Attempt hợp lệ nhưng không nghe/không input | Có | Không nếu chưa max |
| `IVR_NO_ANSWER_FINAL` | No-answer sau max attempt | Có | Có |
| `IVR_CONFIRMATION_WINDOW_EXPIRED` | Hết window trước confirmation hợp lệ | Tùy attempt | Có |
| `INVALID_PHONE_FINAL` | Phone invalid theo policy | Không | Có |
| `IVR_TECHNICAL_EXCEPTION` | Lỗi kỹ thuật | Không | Tùy policy |
| `IVR_POLICY_BLOCKED` | Policy/source unavailable hoặc blocked | Không | Có hoặc review |
| `IVR_OPERATIONAL_BLOCKED` | Sale Lock/Recall/Suppression/call restriction | Không | Có |
| `IVR_CUSTOMER_NEEDS_SUPPORT` | Khách cần hỗ trợ nếu future key enabled | Có | Có/review |

## 6. Hành động khuyến nghị cho Core

`recommended_core_action` không phải command. Order Core phải revalidate.

Allowed values:

- `CORE_REVALIDATE_AND_CONFIRM_ORDER`.
- `CORE_REVALIDATE_AND_CANCEL_CUSTOMER_REQUEST`.
- `CORE_REVALIDATE_AND_CANCEL_NO_ANSWER`.
- `CORE_REVALIDATE_AND_EXPIRE_CONFIRMATION`.
- `CORE_REVALIDATE_AND_HOLD_ADMIN_REVIEW`.
- `CORE_IGNORE_STALE_CALLBACK`.
- `CORE_BLOCK_DUE_TO_OPERATIONAL_CONSTRAINT`.

## 7. Result state machine

| State | Ý nghĩa | Next states |
| --- | --- | --- |
| `RESULT_NOT_NORMALIZED` | Chỉ có raw adapter result | `RESULT_NORMALIZED`, `RESULT_REJECTED_NEEDS_REVIEW` |
| `RESULT_NORMALIZED` | Outcome đã phân loại | `RESULT_EVIDENCE_PENDING`, `RESULT_REJECTED_NEEDS_REVIEW` |
| `RESULT_EVIDENCE_PENDING` | Chờ ghi evidence | `RESULT_READY_FOR_CALLBACK`, `RESULT_EVIDENCE_FAILED` |
| `RESULT_READY_FOR_CALLBACK` | Payload callback sẵn sàng | `RESULT_SENT_TO_CORE` |
| `RESULT_SENT_TO_CORE` | Đã gửi Core | `RESULT_CORE_ACCEPTED`, `RESULT_CORE_REJECTED_STALE`, `RESULT_CALLBACK_RETRY_PENDING` |
| `RESULT_CORE_ACCEPTED` | Core nhận hợp lệ | Terminal cho IVR |
| `RESULT_CORE_REJECTED_STALE` | Core reject do stale/version/state | Terminal cho IVR |
| `RESULT_CALLBACK_RETRY_PENDING` | Retry callback kỹ thuật | `RESULT_SENT_TO_CORE`, `RESULT_ADMIN_REVIEW_REQUIRED` |
| `RESULT_EVIDENCE_FAILED` | Không ghi evidence | `RESULT_ADMIN_REVIEW_REQUIRED` |
| `RESULT_ADMIN_REVIEW_REQUIRED` | Cần người review | Terminal đến khi admin xử lý |

## 8. Revalidation khi có race condition

Order Core phải revalidate khi nhận callback:

- Callback idempotency.
- `task_id`, `order_id`, `order_version_seen_by_ivr`.
- Order state hiện tại còn nhận IVR outcome không.
- Order amount/items/contact có thay đổi làm confirmation cũ không hợp lệ không.
- Sale Lock/Recall/Suppression/payment/availability hiện tại.
- Evidence/audit refs tồn tại.
- Result type khớp attempt policy.

Nếu khách bấm `1` nhưng Sale Lock/Recall/payment issue xuất hiện trước khi Core accept:

- IVR result vẫn là `IVR_CONFIRMED` như raw customer signal.
- Core action là block hoặc hold admin review.
- Order không được tiếp tục chỉ vì phím `1`.
- Evidence phải link cả IVR signal và blocker.

## 9. Tiêu chí chấp nhận

- Callback đủ dữ liệu để Core revalidate.
- Result taxonomy tách confirm/cancel/no-answer/invalid/technical/block.
- Stale callback không ép order transition.
- No-answer max không tự notification.
