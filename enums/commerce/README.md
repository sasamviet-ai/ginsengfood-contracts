# enums/commerce

Thư mục này chứa enum chuẩn cho commerce domain.

Người dùng chính là business-platform provider và ops-core consumer. Không đặt order/payment/shipping implementation, UI label hoặc database seed vào đây.

Ví dụ file sau này: `order-status-v1.md`, `payment-status-v1.md`, `shipping-status-v1.md`. Đổi meaning enum value là breaking change.
