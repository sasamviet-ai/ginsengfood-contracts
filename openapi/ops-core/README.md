# openapi/ops-core

Thư mục này dành cho REST API contracts do `ginsengfood-ops-core` expose cho `ginsengfood-business-platform` hoặc consumer hợp lệ khác.

Người dùng chính là team ops-core khi publish API và team business-platform khi consume API. Không đặt implementation .NET, database migration, secret, production config hoặc mock server code vào đây.

Ví dụ file sau này: `product-v1.yaml`, `inventory-v1.yaml`, `recall-v1.yaml`, `misa-handoff-v1.yaml`. API breaking change phải tạo major version mới hoặc có migration path được review.
