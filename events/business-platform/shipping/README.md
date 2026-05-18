# events/business-platform/shipping

Thư mục này dành cho shipping events phát ra từ `ginsengfood-business-platform`.

Consumer chính là ops-core khi cần fulfillment hoặc delivery state. Không đặt carrier SDK code, shipping fee calculation, label file hoặc production credential vào đây.

Ví dụ file sau này: `shipment-created-v1.schema.json`, `shipment-delivered-v1.schema.json`, `shipment-failed-v1.schema.json`. Event payload phải versioned.
