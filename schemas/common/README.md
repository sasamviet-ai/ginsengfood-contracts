# schemas/common

Thư mục này chứa schema dùng chung xuyên domain như envelope, error, audit, correlation và idempotency.

Người dùng chính là cả `ginsengfood-ops-core` và `ginsengfood-business-platform`. Không đặt schema nghiệp vụ riêng của product, order, payment hoặc inventory vào đây nếu không dùng chung.

Ví dụ file sau này: `api-envelope-v1.schema.json`, `error-response-v1.schema.json`, `correlation-context-v1.schema.json`, `idempotency-key-v1.schema.json`. Schema phải versioned và thay đổi breaking phải được review.
