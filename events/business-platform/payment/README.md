# events/business-platform/payment

Thư mục này dành cho payment events phát ra từ `ginsengfood-business-platform`.

Consumer chính là ops-core khi cần verified revenue hoặc accounting handoff input. Không đặt payment gateway integration, credential, reconciliation job hoặc settlement implementation vào đây.

Ví dụ file sau này: `payment-confirmed-v1.schema.json`, `payment-failed-v1.schema.json`, `refund-completed-v1.schema.json`. Event payload phải versioned và không chứa secret.
