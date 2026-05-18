# enums/commerce

## Phase 3 contract scope

This folder contains Commerce Runtime v1 enums for availability, quote, cart, order, payment, shipping, and verified revenue.

Enums are contract values only. They are not UI labels, database seeds, workflow code, service logic, or business logic.

Compatibility: removing a value, changing its meaning, weakening a guard, or treating pending/unpaid/cancelled/refunded/COD-failed states as verified revenue is breaking.

TODO:
- Source docs do not lock official payment method enum, member benefit taxonomy, carrier/method enum, or complete availability taxonomy.

Thư mục này chứa enum chuẩn cho commerce domain.

Người dùng chính là business-platform provider và ops-core consumer. Không đặt order/payment/shipping implementation, UI label hoặc database seed vào đây.

Ví dụ file sau này: `order-status-v1.md`, `payment-status-v1.md`, `shipping-status-v1.md`. Đổi meaning enum value là breaking change.
