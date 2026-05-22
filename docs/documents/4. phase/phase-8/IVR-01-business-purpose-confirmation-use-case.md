# IVR-01 - Business Purpose / Confirmation Use Case

Trạng thái: `SRS_BASELINE`  
Phase: 8 - IVR Order Confirmation  
Mục tiêu: Khóa mục đích nghiệp vụ và các use case xác nhận đơn hàng.

## 1. Mục tiêu

IVR được xây dựng để giảm đơn ảo, đơn sai số điện thoại, đơn đặt nhầm và đơn không xác nhận được, nhưng không làm phiền khách hàng tin cậy một cách đại trà.

IVR chỉ xác nhận ý chí đặt hàng ở mức tối thiểu, không xác nhận thanh toán, xuất kho, giao hàng, doanh thu hoặc kế toán.

## 2. Nguồn tham chiếu

| Nguồn | Vai trò |
| --- | --- |
| `docs/documents/2. pack/09-PACK-09-IVR-ORDER-CONFIRMATION.md` | Mục đích pack, call script, phím bấm, attempt policy. |
| `docs/documents/3. tech/10-TECH-09-IVR-ORDER-CONFIRMATION-AUTO-CALL-VERIFICATION-ANTI-FAKE-ORDER-CONTROL.md` | Eligibility, outcome classification, privacy-safe confirmation. |
| `docs/documents/3. tech/05-TECH-04-COMMERCE-RUNTIME-SELLABLE-GATE-QUOTE-CART-ORDER-PAYMENT-SHIPPING.md` | Official Order không đồng nghĩa Paid/Verified Revenue. |
| `docs/documents/4. phase/phase-8/ivr-input-baseline.md` | Nội dung cuộc gọi, DTMF và rule chương trình. |

## 3. Mục tiêu nghiệp vụ

| ID | Mục tiêu |
| --- | --- |
| IVR01-BG-001 | Xác nhận khách còn muốn tiếp tục xử lý đơn hàng. |
| IVR01-BG-002 | Giảm rủi ro đơn ảo, số điện thoại sai, khách đặt nhầm, khách không phản hồi. |
| IVR01-BG-003 | Tách rõ khách xác nhận, khách hủy, khách không nghe, số điện thoại invalid và lỗi kỹ thuật. |
| IVR01-BG-004 | Tránh gọi đại trà khách trusted nếu không có tín hiệu rủi ro mới. |
| IVR01-BG-005 | Cung cấp evidence cho Order Core ra quyết định, không thay Order Core. |

## 4. Tác nhân

| Actor | Vai trò |
| --- | --- |
| Khách hàng | Nhận cuộc gọi, bấm `1` để xác nhận hoặc `0` để hủy/không đặt. |
| Order Core | Tạo task, nhận callback, revalidate và transition order. |
| IVR Runtime | Điều phối queue, gọi, capture DTMF, normalize result. |
| IVR Operator | Theo dõi queue, SIM health, lỗi kỹ thuật. |
| Admin/Incident Manager | Pause queue, disable SIM, review exception theo permission. |
| Evidence/Audit Owner | Kiểm tra evidence, audit, release readiness. |

## 5. Tình huống nghiệp vụ chính

### UC-01 - Khách bấm `1`

Điều kiện:

- Official Order đủ điều kiện IVR.
- Phone valid.
- Không có Sale Lock/Recall/Suppression/call restriction.
- Attempt còn trong window.

Kết quả:

- IVR ghi `IVR_CONFIRMED`.
- IVR gửi callback về Order Core.
- Order Core revalidate.
- Nếu vẫn hợp lệ, Order Core chuyển đơn sang bước xử lý tiếp theo theo state machine.

### UC-02 - Khách bấm `0`

Kết quả:

- IVR ghi `IVR_CUSTOMER_CANCELLED`.
- IVR gửi callback về Order Core.
- Order Core revalidate và thực hiện cancel theo state machine.
- IVR không tự cancel order.

### UC-03 - Khách không nghe

Kết quả:

- IVR ghi no-answer attempt nếu attempt hợp lệ.
- Nếu chưa đạt max attempt, scheduler chờ attempt tiếp theo theo chương trình.
- Nếu đạt max attempt, IVR gửi `IVR_NO_ANSWER_FINAL` về Order Core.
- Notification chỉ được gửi bởi Notification Owner sau khi Order Core đã ra quyết định.

### UC-04 - Số điện thoại invalid

Kết quả:

- IVR không gọi nếu phone validation xác định invalid trước dispatch.
- IVR gửi/ghi outcome invalid phone theo policy.
- Invalid phone không được ghi thành no-answer.

### UC-05 - Lỗi kỹ thuật

Kết quả:

- IVR ghi `IVR_TECHNICAL_EXCEPTION`.
- Attempt kỹ thuật không tính là customer attempt.
- Hệ thống route admin review hoặc technical retry trong giới hạn policy.
- Không tự hủy đơn.

## 6. Nội dung cuộc gọi

Call script V1.0 chỉ được dùng biến đã duyệt:

- `order_code_short`.
- `total_amount_display`.
- `customer_name_short` nếu có và policy cho phép.
- `program_name` nếu cần.

Không được đọc:

- Full address.
- Payment detail.
- Member tier.
- Diamond/referral information.
- Health note.
- AI consultation content.
- CRM content.
- Full order history.

## 7. Quy tắc DTMF

| Phím | Ý nghĩa | Outcome |
| --- | --- | --- |
| `1` | Khách xác nhận tiếp tục xử lý đơn | `IVR_CONFIRMED` |
| `0` | Khách không đặt hoặc muốn hủy | `IVR_CUSTOMER_CANCELLED` |
| Không bấm | Không có xác nhận hợp lệ | `IVR_NO_ANSWER_ATTEMPT` hoặc `IVR_NO_ANSWER_FINAL` |
| Sai phím | Input không hợp lệ | Xử lý theo policy attempt |
| Lỗi DTMF | Lỗi kỹ thuật | `IVR_TECHNICAL_EXCEPTION` |

`KEY_9_HUMAN_SUPPORT` chưa bật trong V1.0. Nếu mở sau này phải có owner decision, CSKH capacity và SRS update.

## 8. Quy tắc nghiệp vụ

| ID | Rule |
| --- | --- |
| IVR01-BR-001 | IVR confirmation không đồng nghĩa `PAID`. |
| IVR01-BR-002 | IVR confirmation không đồng nghĩa `DELIVERED`. |
| IVR01-BR-003 | IVR confirmation không đồng nghĩa `VERIFIED_REVENUE`. |
| IVR01-BR-004 | IVR không được dùng làm kênh marketing, upsell, CRM hoặc chăm sóc khách hàng đại trà. |
| IVR01-BR-005 | Không có evidence thì kết quả IVR không được dùng làm căn cứ transition. |

## 9. Tiêu chí chấp nhận

- Use case trả lời đủ cho confirm, cancel, no-answer, invalid phone và technical failure.
- DTMF result tách rõ business outcome và technical exception.
- Không có câu nào cho phép IVR tự cập nhật order.
- Call script không chứa dữ liệu riêng tư ngoài phạm vi.
