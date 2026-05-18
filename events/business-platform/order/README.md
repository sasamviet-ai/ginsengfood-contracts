# events/business-platform/order

Thư mục này dành cho order events phát ra từ `ginsengfood-business-platform`.

Consumer chính là ops-core khi cần demand, fulfillment hoặc traceability input. Không đặt order service implementation, pricing rule, cart logic hoặc database migration vào đây.

Ví dụ file sau này: `order-confirmed-v1.schema.json`, `order-cancelled-v1.schema.json`, `order-updated-v1.schema.json`. Event payload phải versioned.
