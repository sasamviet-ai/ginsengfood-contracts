# schemas/commerce

Thư mục này chứa JSON Schema cho commerce domain như Quote, Cart, Order, Payment, Shipping và VerifiedRevenue.

Người dùng chính là business-platform provider và ops-core consumer khi cần đồng bộ demand, order, revenue hoặc shipping state. Không đặt checkout logic, payment gateway code, pricing engine hoặc database migration vào đây.

Ví dụ file sau này: `order-v1.schema.json`, `payment-v1.schema.json`, `shipping-v1.schema.json`, `verified-revenue-v1.schema.json`. Schema phải versioned.
