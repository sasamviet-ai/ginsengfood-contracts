# IVR-04 - Order Core -> IVR Task Contract

Trạng thái: `SRS_BASELINE`  
Phase: 8 - IVR Order Confirmation  
Mục tiêu: Khóa semantic contract cho task mà Order Core gửi sang IVR.

## 1. Mục tiêu

`IvrConfirmationTaskV1` là contract nội bộ để Order Core yêu cầu IVR xét/gọi xác nhận đơn. Tài liệu này chưa tạo JSON Schema/OpenAPI thật, nhưng khóa field, owner, validation và reject rule để phase sau sinh contract.

## 2. Nguồn tham chiếu

| Nguồn | Vai trò |
| --- | --- |
| `docs/documents/1. master/04-MASTER-03-TRACEABILITY-ID.md` | Correlation, idempotency, trace. |
| `docs/documents/3. tech/02-TECH-01-FOUNDATION-RBAC-AUDIT-IDEMPOTENCY-EVIDENCE-REGISTRY.md` | Foundation audit/evidence/idempotency. |
| `docs/documents/2. pack/09-PACK-09-IVR-ORDER-CONFIRMATION.md` | Pack boundary và program-based attempt policy. |
| `docs/documents/3. tech/10-TECH-09-IVR-ORDER-CONFIRMATION-AUTO-CALL-VERIFICATION-ANTI-FAKE-ORDER-CONTROL.md` | Module contract và lifecycle. |

## 3. Tổng quan contract

| Thuộc tính | Giá trị |
| --- | --- |
| Contract name | `IvrConfirmationTaskV1` |
| Direction | Order Core -> IVR Runtime |
| Producer | Commerce Order Core / Order State Machine |
| Consumer | IVR Runtime Orchestrator |
| Transport | Internal service contract, implementation decision ở phase sau |
| Idempotency | Bắt buộc |
| Correlation | Bắt buộc |
| Production use | Chỉ sau IVR-09 release gate |

## 4. Trường dữ liệu bắt buộc

| Field | Type semantic | Required | Owner | Ghi chú |
| --- | --- | --- | --- | --- |
| `task_id` | string | Có | Order Core | ID duy nhất của task. |
| `task_version` | string | Có | Order Core | `v1`. |
| `idempotency_key` | string | Có | Order Core | Chống duplicate task. |
| `correlation_id` | string | Có | Order Core | Trace xuyên hệ thống. |
| `created_at` | datetime | Có | Order Core | Thời điểm tạo task. |
| `expires_at` | datetime | Có | Order Core | Không vượt program window. |
| `order_id` | string | Có | Order Core | Official Order id. |
| `order_code_short` | string | Có | Order Core | Biến script được phép đọc. |
| `order_version` | string/integer | Có | Order Core | Race-condition guard. |
| `order_state` | enum | Có | Order Core | Phải là IVR-callable state. |
| `program_code` | enum | Có | Commerce Runtime | `GOLDEN_HOUR`, `TWENTY_FOUR_SEVEN`. |
| `attempt_policy_code` | enum | Có | Policy | Program-based policy. |
| `max_attempts` | integer | Có | Policy | 2 cho Golden Hour, 3 cho 24/7. |
| `attempt_schedule` | array | Có | Policy | T0/T0+5/T0+10 tùy chương trình. |
| `customer_ref` | string | Có | Customer/Commerce | Không phải full profile. |
| `customer_trust_status` | enum | Có | Trust Resolver | Snapshot trust. |
| `trusted_skip_allowed` | boolean | Có | Trust Resolver | Nếu true và không có risk, IVR không gọi. |
| `risk_flags` | array | Có | Commerce/Risk | Chỉ source-backed. |
| `official_contact_id` | string | Có | Customer/Commerce | Contact được gọi. |
| `phone_ref` | string | Có | Customer/Commerce | Secure reference. |
| `phone_masked` | string | Có | Customer/Commerce | Admin display. |
| `phone_e164_or_adapter_token` | string | Có điều kiện | Customer/Commerce | Chỉ nếu privacy/security cho phép. |
| `phone_validation_status` | enum | Có | Phone Resolver | Không unknown ở production. |
| `call_script_template_id` | string | Có | IVR Owner | Script đã duyệt. |
| `call_script_version` | string | Có | IVR Owner | Version đã duyệt. |
| `allowed_script_variables` | object | Có | Order Core | Chỉ biến được duyệt. |
| `sale_lock_snapshot` | object/ref | Có | Operational Core | Blocking snapshot/ref. |
| `recall_snapshot` | object/ref | Có | Operational Core | Blocking snapshot/ref. |
| `suppression_snapshot` | object/ref | Có | Operational/Gateway | Blocking snapshot/ref. |
| `call_restriction_snapshot` | object/ref | Có | Compliance/Customer | Opt-out/legal restriction. |
| `evidence_policy_version` | string | Có | Evidence Owner | Bắt buộc. |
| `privacy_policy_version` | string | Có | Privacy Owner | Bắt buộc. |

## 5. Validation tại task intake

IVR phải reject hoặc hold task nếu:

- Task thiếu `idempotency_key` hoặc `correlation_id`.
- `order_id` không phải Official Order.
- `order_state` không phải IVR-callable.
- `expires_at` đã qua.
- `program_code` không được hỗ trợ.
- `max_attempts` không khớp chương trình.
- Thiếu official contact hoặc phone projection.
- Phone invalid/unknown mà không có fallback policy.
- Sale Lock/Recall/Suppression/call restriction active.
- Evidence/privacy policy version thiếu.
- Script template/version chưa approved.

## 6. Output sau intake

| Intake result | Ý nghĩa |
| --- | --- |
| `TASK_ACCEPTED_CALL_JOB_CREATED` | Task hợp lệ, tạo CallJob. |
| `TASK_REJECTED_NOT_OFFICIAL_ORDER` | Không phải Official Order. |
| `TASK_REJECTED_POLICY_MISMATCH` | Attempt policy hoặc program mismatch. |
| `TASK_REJECTED_CONTACT_INVALID` | Contact/phone không hợp lệ. |
| `TASK_BLOCKED_OPERATIONAL` | Sale Lock/Recall/Suppression/call restriction. |
| `TASK_HELD_ADMIN_REVIEW` | Cần owner/admin review. |

## 7. Audit/evidence

Mỗi task intake phải ghi:

- `task_id`.
- `order_id`.
- `order_version`.
- `program_code`.
- `decision`.
- `reject_or_block_reason`.
- `correlation_id`.
- `idempotency_key`.
- `policy_version`.
- `evidence_ref`.
- `audit_ref`.

## 8. Tiêu chí chấp nhận

- Contract mô tả đủ dữ liệu Order Core phải gửi.
- Contract không chứa dữ liệu riêng tư vượt policy.
- Reject rule rõ, không để implementer tự suy luận.
- Sẵn sàng để phase sau sinh schema `IvrConfirmationTaskV1`.
