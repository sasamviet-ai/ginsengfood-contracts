# IVR-03 - Eligibility Rule / Customer Trust / Official Contact

Trạng thái: `SRS_BASELINE`  
Phase: 8 - IVR Order Confirmation  
Mục tiêu: Khóa điều kiện đơn/khách nào cần IVR, khách trusted được skip thế nào và contact nào được phép gọi.

## 1. Mục tiêu

Eligibility là chốt chặn để IVR không gọi đại trà, không gọi sai đối tượng và không gọi khi nguồn sự thật chưa sẵn sàng. IVR chỉ được gọi Official Order đủ điều kiện từ Commerce Order Core.

## 2. Nguồn tham chiếu

| Nguồn | Vai trò |
| --- | --- |
| `docs/documents/2. pack/09-PACK-09-IVR-ORDER-CONFIRMATION.md` | Rule chương trình, boundary và call script. |
| `docs/documents/3. tech/10-TECH-09-IVR-ORDER-CONFIRMATION-AUTO-CALL-VERIFICATION-ANTI-FAKE-ORDER-CONTROL.md` | Eligibility, trusted customer exclusion, phone validation. |
| `docs/documents/3. tech/05-TECH-04-COMMERCE-RUNTIME-SELLABLE-GATE-QUOTE-CART-ORDER-PAYMENT-SHIPPING.md` | Official Order boundary. |
| `docs/documents/4. phase/phase-4/09-README-PHASE-04-HANDOFF-INDEX.md` | Customer Memory/Context Resolver là consumer, không tự tạo business truth. |
| `docs/documents/4. phase/phase-8/ivr-pre-srs-gap-closure.md` | Gap closure về eligibility, official contact và phone validation. |

## 3. Input bắt buộc

| Field | Owner | Bắt buộc | Ghi chú |
| --- | --- | --- | --- |
| `order_id` | Order Core | Có | Official Order only. |
| `order_code_short` | Order Core | Có | Biến được phép đọc trong script. |
| `order_version` | Order Core | Có | Guard chống stale callback/race. |
| `order_state` | Order Core | Có | Phải là trạng thái được phép IVR. |
| `program_code` | Commerce Runtime | Có | `GOLDEN_HOUR` hoặc `TWENTY_FOUR_SEVEN`. |
| `customer_ref` | Customer/Commerce | Có | Không truyền full profile. |
| `customer_trust_status` | Customer Trust Resolver | Có | `NEW`, `UNTRUSTED`, `PARTIALLY_TRUSTED`, `TRUSTED`. |
| `risk_flags` | Commerce/Risk | Có | Chỉ dùng flag có source-backed policy. |
| `official_contact_id` | Customer/Commerce | Có | Contact được phép gọi. |
| `phone_ref` | Customer/Commerce | Có | Tham chiếu bảo mật hoặc token. |
| `phone_masked` | Customer/Commerce | Có | Hiển thị admin. |
| `phone_validation_status` | Phone Validation Resolver | Có | Không production nếu unknown. |
| `sale_lock_status` | Operational Core | Có | Blocker. |
| `recall_status` | Operational Core | Có | Blocker. |
| `suppression_status` | Operational/Gateway | Có | Blocker. |
| `call_restriction_status` | Compliance/Customer | Có | Opt-out/legal/call restriction. |

## 4. Eligibility decisions

| Decision | Ý nghĩa | Hành động |
| --- | --- | --- |
| `ELIGIBLE_FOR_IVR` | Official Order đủ điều kiện IVR | Tạo CallJob. |
| `NOT_ELIGIBLE_NOT_OFFICIAL_ORDER` | Không phải Official Order | Reject task, ghi evidence. |
| `NOT_ELIGIBLE_TRUSTED_CUSTOMER` | Khách trusted, không có risk mới | Skip IVR, trả skip reason cho Core. |
| `NOT_ELIGIBLE_POLICY_BLOCKED` | Policy/source chưa sẵn sàng | Fail-safe, admin review. |
| `NOT_ELIGIBLE_OPERATIONAL_BLOCKED` | Sale Lock/Recall/Suppression/availability block | Stop IVR, handoff Core. |
| `NOT_ELIGIBLE_CALL_RESTRICTED` | Opt-out/legal/call restriction | Stop IVR, handoff Core. |
| `NOT_ELIGIBLE_PHONE_INVALID` | Phone invalid trước attempt | Không gọi, trả invalid phone outcome. |
| `ROUTE_HUMAN_REVIEW` | Ambiguous/risk cần người xử lý | Admin/CSKH review queue. |

## 5. Khách cần IVR

Một đơn được xét IVR khi có ít nhất một điều kiện:

- Khách mới.
- Khách chưa đủ trust.
- Customer profile thiếu dữ liệu xác thực.
- Official contact mới hoặc bất thường.
- Đơn có risk flag theo policy.
- Customer Memory chưa đủ dữ liệu để bỏ qua IVR.
- Đơn thuộc chương trình yêu cầu xác nhận theo policy.

## 6. Trusted customer skip

Khách trusted được skip IVR chỉ khi tất cả điều kiện đúng:

- Customer Trust Resolver trả `TRUSTED`.
- Commerce/Customer Memory cho phép trusted checkout.
- Official contact ổn định và được duyệt.
- Không có risk flag mới.
- Không có Sale Lock/Recall/Suppression/call restriction.
- Order state/program/window còn hợp lệ.

IVR không được hardcode trusted customer bằng:

- Tên khách.
- Số điện thoại thô.
- Lịch sử chat.
- Admin note không có policy/evidence.
- Cảm tính nhân viên.

`Owner Decision Required`: ngưỡng trust cụ thể và danh sách risk flag buộc trusted customer vẫn phải IVR.

## 7. Official contact policy

IVR chỉ được gọi `official_contact_id` do Commerce/Customer Profile cung cấp. Projection sang IVR chỉ gồm dữ liệu tối thiểu:

- `official_contact_id`.
- `phone_ref`.
- `phone_masked`.
- `phone_e164_or_adapter_token` nếu security/privacy policy cho phép.
- `contact_source`.
- `contact_verified_at`.
- `contact_policy_version`.

Không được truyền full profile, full address, payment detail, health note, CRM note hoặc nội dung tư vấn riêng tư.

## 8. Phone validation

| State | Ý nghĩa | Hành động |
| --- | --- | --- |
| `PHONE_NOT_EVALUATED` | Chưa validate | Validate trước khi tạo CallJob. |
| `PHONE_VALID` | Có thể gọi theo policy | Tiếp tục. |
| `PHONE_INVALID_FORMAT` | Sai định dạng | Không gọi, invalid outcome. |
| `PHONE_INVALID_UNREACHABLE_CONFIRMED` | Invalid theo rule owner-approved | Không gọi hoặc final invalid theo policy. |
| `PHONE_UNKNOWN_NEEDS_REVIEW` | Không đủ căn cứ | Human review hoặc policy fallback. |
| `PHONE_VALIDATION_TECHNICAL_ERROR` | Lỗi resolver | Technical exception, không tính lỗi khách. |

Invalid phone không được ghi là no-answer. Technical validation error không được ghi là invalid phone nếu chưa có rule owner-approved.

## 9. Fail-safe

Không được tạo CallJob nếu thiếu:

- Order Core status.
- Customer Trust Resolver.
- Phone Validation Resolver.
- Sale Lock/Recall/Suppression check.
- Attempt Policy Resolver.
- Evidence Registry.
- Privacy/Call Restriction check.

Fail-safe outcome: `ELIGIBILITY_POLICY_UNAVAILABLE` và `ADMIN_REVIEW_REQUIRED`.

## 10. Acceptance criteria

- SRS trả lời rõ khách mới/untrusted cần IVR như thế nào.
- SRS trả lời rõ khách trusted skip theo rule nào.
- Official contact được chọn, validate, mask và audit rõ.
- Invalid phone, no-answer và technical validation error không bị trộn.
