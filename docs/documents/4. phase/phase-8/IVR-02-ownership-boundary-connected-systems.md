# IVR-02 - Ownership Boundary / Connected Systems

Trạng thái: `SRS_BASELINE`  
Phase: 8 - IVR Order Confirmation  
Mục tiêu: Khóa hệ thống IVR kết nối với hệ thống nào, bằng gì và theo ranh giới ownership nào.

## 1. Mục tiêu

Tài liệu này mô tả kiến trúc kết nối cấp SRS cho IVR. Đây chưa phải OpenAPI/AsyncAPI/schema thật, nhưng khóa semantic interface để phase sau sinh contract.

## 2. Nguồn tham chiếu

| Nguồn | Vai trò |
| --- | --- |
| `docs/documents/1. master/02-MASTER-01-SOURCE-OF-TRUTH.md` | Owner/resolver/consumer boundary. |
| `docs/documents/1. master/03-MASTER-02-CROSS-PACK-DEPENDENCY.md` | Cross-pack dependency. |
| `docs/documents/2. pack/09-PACK-09-IVR-ORDER-CONFIRMATION.md` | Boundary Order Core / IVR / Operational Core. |
| `docs/documents/3. tech/05-TECH-04-COMMERCE-RUNTIME-SELLABLE-GATE-QUOTE-CART-ORDER-PAYMENT-SHIPPING.md` | Commerce owner của Official Order và payment boundary. |
| `docs/documents/3. tech/10-TECH-09-IVR-ORDER-CONFIRMATION-AUTO-CALL-VERIFICATION-ANTI-FAKE-ORDER-CONTROL.md` | Module boundary IVR. |
| `docs/documents/4. phase/phase-8/ivr-pre-srs-gap-closure.md` | Connected systems baseline. |

## 3. Hệ thống kết nối

| Hệ thống | Kết nối bằng gì | Kết nối như thế nào | Owner | IVR được làm | IVR không được làm |
| --- | --- | --- | --- | --- | --- |
| Commerce Order Core / Order State Machine | Internal command/callback contract | Order Core tạo `IvrConfirmationTaskV1`; IVR callback `IvrConfirmationResultCallbackV1`; Order Core revalidate | Commerce/Order Owner | Nhận task, gửi result signal | Tự transition order |
| Operational Core | Internal read/check contract | IVR/Order Core kiểm Sale Lock, Recall, Suppression, availability, traceability blocker | Operational Owner | Consume blocker status | Bỏ qua hoặc override blocker |
| Customer Trust / Customer Memory | Internal resolver | Lấy trust decision, risk reason, trusted skip reason | Customer/CRM Owner | Consume trusted/untrusted decision | Hardcode trusted customer |
| Official Contact / Customer Profile | Privacy-safe projection | Nhận `official_contact_id`, `phone_ref`, `phone_masked`, token dial nếu được phép | Customer/Commerce Owner | Gọi contact đã duyệt | Đọc full profile/full address |
| SIM Gateway Adapter | Internal hardware/API adapter | Scheduler reserve SIM, adapter dial, capture call status/DTMF | IVR Infrastructure Owner | Dial, capture, health check | Gửi SMS hoặc update order |
| Evidence Registry / Audit | Internal writer | Ghi evidence/audit refs cho task, attempt, result, admin action | Foundation/Evidence Owner | Ghi evidence | Tự mark accepted/pass |
| Admin Web/Ops Console | Internal admin API | Monitor queue, review exception, pause/resume, disable SIM theo RBAC | Ops/Admin Owner | Điều hành có audit | Override P0 blocker |
| Notification Owner | Internal handoff sau Core decision | Order Core gửi yêu cầu notification sau khi hủy/expire/hold | Notification Owner | Không gửi trực tiếp | Tự gửi notice từ IVR/SIM |
| AI Advisor/Facebook Gateway/Live/CRM | No direct command | Chỉ consume trạng thái đã được Core công nhận nếu policy cho phép | Channel/AI/CRM Owners | Không trigger IVR | Tạo task/gọi IVR/public result |
| Payment/MISA/Finance | Không kết nối trực tiếp từ IVR | Order Core/Finance xử lý riêng | Finance/MISA Owner | Không xử lý | Xác nhận payment/MISA/revenue |

## 4. Luồng kết nối chuẩn

1. Commerce Order Core tạo Official Order đủ điều kiện.
2. Order Core quyết định có cần IVR theo policy và tạo `IvrConfirmationTaskV1`.
3. IVR intake task, kiểm idempotency và trace.
4. IVR re-check eligibility, phone, blocker, attempt policy.
5. IVR scheduler reserve SIM channel.
6. SIM Gateway Adapter gọi khách và capture DTMF.
7. IVR Result Normalizer chuẩn hóa result.
8. IVR ghi evidence/audit.
9. IVR callback về Order Core.
10. Order Core revalidate và quyết định transition.
11. Notification/Evidence/Release systems chỉ consume quyết định đã được owner công nhận.

## 5. Yêu cầu chức năng

| ID | Yêu cầu |
| --- | --- |
| IVR02-FR-001 | IVR chỉ nhận task từ Order Core hoặc service được Order Core ủy quyền rõ ràng. |
| IVR02-FR-002 | Mọi kết nối phải có `correlation_id`, `idempotency_key` hoặc trace tương đương. |
| IVR02-FR-003 | IVR phải re-check blocker trước attempt và Order Core phải re-check blocker khi nhận callback. |
| IVR02-FR-004 | SIM Gateway Adapter không được có credential/quyền ghi order. |
| IVR02-FR-005 | Admin action phải đi qua RBAC server-side và audit. |
| IVR02-FR-006 | Không hệ thống downstream nào được dùng raw IVR result để tuyên bố order đã paid/revenue/delivered. |

## 6. Tình huống lỗi

| Failure | Hành vi bắt buộc |
| --- | --- |
| Order Core unavailable | Không tạo hoặc không tiếp tục task mới; route fail-safe/admin review. |
| Operational blocker check unavailable | Không dispatch attempt. |
| Customer Trust unavailable | Không gọi trusted/customer nếu không có policy fallback. |
| Evidence Registry unavailable | Không dùng result để transition. |
| SIM Gateway unavailable | Technical exception, không tính customer attempt. |
| Callback failed | Retry kỹ thuật bounded, không gửi duplicate transition. |

## 7. Tiêu chí chấp nhận

- SRS chỉ rõ từng hệ thống kết nối bằng gì và quyền gì.
- Không có hệ thống nào ngoài Order Core được quyết định trạng thái đơn.
- Không có kết nối IVR -> Payment/MISA/Revenue.
- Có fail-safe khi source owner không khả dụng.
