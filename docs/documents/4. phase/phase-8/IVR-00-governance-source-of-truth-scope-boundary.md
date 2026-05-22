# IVR-00 - Governance / Source of Truth / Scope Boundary

Trạng thái: `SRS_BASELINE`  
Phase: 8 - IVR Order Confirmation  
Mục tiêu: Khóa governance, nguồn sự thật và ranh giới phạm vi trước khi viết contract hoặc triển khai.

## 1. Mục tiêu

Tài liệu này xác định IVR là một hợp phần xác nhận đơn hàng bằng cuộc gọi tự động, không phải hệ thống bán hàng, không phải hệ thống chăm sóc khách hàng đại trà và không phải lớp quyết định trạng thái đơn hàng.

IVR chỉ được vận hành sau khi có Official Order đủ điều kiện từ Commerce Order Core. Kết quả IVR chỉ là tín hiệu đầu vào để Order Core revalidate và quyết định transition.

## 2. Nguồn tham chiếu

| Nguồn | Vai trò |
| --- | --- |
| `docs/source-map.md` | Đường dẫn nguồn hợp lệ cho traceability. |
| `docs/documents/1. master/02-MASTER-01-SOURCE-OF-TRUTH.md` | Source-of-truth, owner, resolver, consumer boundary. |
| `docs/documents/1. master/04-MASTER-03-TRACEABILITY-ID.md` | Correlation, idempotency, evidence trace. |
| `docs/documents/1. master/06-MASTER-05-EVIDENCE-SMOKE-COMPLETION-GATE.md` | Evidence, smoke, completion gate. |
| `docs/documents/1. master/08-MASTER-07-RELEASE-GO-LIVE-CONTROL.md` | Release/go-live gate. |
| `docs/documents/2. pack/09-PACK-09-IVR-ORDER-CONFIRMATION.md` | Pack source chính của IVR. |
| `docs/documents/3. tech/10-TECH-09-IVR-ORDER-CONFIRMATION-AUTO-CALL-VERIFICATION-ANTI-FAKE-ORDER-CONTROL.md` | Technical source chính của IVR. |
| `docs/documents/4. phase/phase-8/ivr-pre-srs-gap-closure.md` | Baseline gap-closure tiền SRS. |

## 3. Thuật ngữ

| Thuật ngữ | Định nghĩa |
| --- | --- |
| IVR | Hợp phần gọi tự động xác nhận đơn hàng bằng SIM Gateway nội bộ. |
| Order Core | Commerce Order Core / Order State Machine, chủ sở hữu trạng thái đơn hàng. |
| Official Order | Đơn chính thức đã được Commerce tạo từ Customer Confirmation hợp lệ. |
| IVR task | Yêu cầu nội bộ do Order Core tạo để IVR xem xét/gọi xác nhận. |
| IVR result | Kết quả đã normalize từ cuộc gọi IVR. |
| Evidence | Bằng chứng có trace, owner, trạng thái và audit. |
| Release gate | Cổng kiểm soát trước khi cho phép gọi khách thật. |

## 4. Phạm vi

Trong phạm vi:

- Xác nhận ý chí đặt hàng bằng phím `1`.
- Ghi nhận yêu cầu hủy/không đặt bằng phím `0`.
- Ghi nhận no-answer theo attempt policy.
- Ghi nhận invalid phone theo policy.
- Ghi nhận technical exception.
- Gửi callback kết quả về Order Core.
- Ghi audit/evidence cho task, attempt, result, admin action và incident.

Ngoài phạm vi:

- Tạo Quote, Cart, Order Draft hoặc Official Order.
- Sửa giá, tồn kho, chương trình, quyền lợi thành viên, phí ship, payment, MISA.
- Tự xác nhận `PAID`, `DELIVERED`, `VERIFIED_REVENUE`.
- Tự hủy đơn.
- Tự gửi SMS/thông báo sau từng attempt hoặc sau no-answer max.
- Marketing, upsell, CRM, chăm sóc khách hàng đại trà.

## 5. Source-of-truth

| Nhóm sự thật | Owner | IVR được làm | IVR bị cấm |
| --- | --- | --- | --- |
| Trạng thái đơn | Order Core | Đọc task và gửi result signal | Tự transition đơn |
| Official Order | Commerce Runtime | Chỉ xử lý order đã đủ điều kiện | Gọi Quote/Cart/Order Draft |
| Sale Lock/Recall/Suppression | Operational Core | Consume trạng thái block | Override hoặc bỏ qua block |
| Customer trust | Customer Trust/Customer Memory Resolver | Consume quyết định trusted/untrusted | Hardcode trusted customer |
| Official contact | Customer/Commerce Profile | Gọi contact được duyệt | Đọc full profile hoặc full address |
| Payment/MISA/Revenue | Payment/MISA/Finance/Commerce | Không xử lý trực tiếp | Xác nhận thanh toán/kế toán/doanh thu |
| Evidence/Audit | Foundation/Evidence Registry | Ghi evidence/audit theo policy | Tự gọi PASS khi evidence chưa accepted |

## 6. Baseline governance

| Rule | Giá trị |
| --- | --- |
| `CALL_PURPOSE` | `ORDER_CONFIRMATION_ONLY` |
| `IVR_DEPLOYMENT_MODEL` | `INTERNAL_SIM_GATEWAY_SERVER` |
| `MAX_ATTEMPT_PER_ORDER` | `PROGRAM_BASED` |
| Golden Hour | 2 cuộc trong 10 phút |
| 24/7 | 3 cuộc trong 15 phút |
| `IVR_RESULT_IS_INPUT_SIGNAL_ONLY` | `YES` |
| `ORDER_STATE_MACHINE_IS_FINAL_DECISION_LAYER` | `YES` |
| `REAL_CUSTOMER_CALL_ALLOWED` | `NO` cho đến khi release gate pass |

## 7. Yêu cầu chức năng

| ID | Yêu cầu |
| --- | --- |
| IVR00-FR-001 | Hệ thống phải chặn mọi task không đến từ Order Core hoặc không có correlation/idempotency hợp lệ. |
| IVR00-FR-002 | Hệ thống phải từ chối Quote, Cart, Order Draft và mọi entity không phải Official Order. |
| IVR00-FR-003 | Hệ thống phải coi mọi kết quả IVR là signal, không phải quyết định trạng thái đơn. |
| IVR00-FR-004 | Hệ thống phải dừng hoặc hold IVR khi Sale Lock, Recall, Suppression, opt-out hoặc policy block xuất hiện. |
| IVR00-FR-005 | Hệ thống phải ghi evidence/audit cho task, attempt, result, callback, exception và admin action. |
| IVR00-FR-006 | Hệ thống phải giữ production disabled cho đến khi IVR-09 release gate pass. |

## 8. Yêu cầu phi chức năng

- Idempotency bắt buộc cho task intake, attempt dispatch và callback.
- Correlation bắt buộc xuyên suốt Order Core, IVR, SIM Gateway Adapter, Evidence Registry.
- Fail-safe khi source-of-truth hoặc policy resolver không khả dụng.
- Không lộ PII trong log/UI ngoài phạm vi được duyệt.
- Không có hardcoded PASS/Release Ready/Production Ready.

## 9. Cổng chặn lỗi

Phase 8 FAIL nếu:

- IVR có đường tự update order.
- IVR có đường gọi Quote/Cart/Order Draft.
- IVR gọi khách trusted đại trà.
- IVR bỏ qua Sale Lock/Recall/Suppression.
- IVR trộn no-answer với invalid phone hoặc technical failure.
- IVR tự gửi notification.
- Tài liệu hoặc implementation nói production ready khi chưa có smoke/evidence/owner sign-off.

## 10. Tiêu chí chấp nhận

Tài liệu này đạt khi:

- Các ranh giới owner/source-of-truth đã rõ.
- Các rule baseline khớp PACK-09, TECH-09 và Phase 8 baseline.
- Không có quyết định nghiệp vụ nào bị giao cho implementer tự suy diễn.
- Mọi điểm chưa có nguồn được ghi `Owner Decision Required`.
