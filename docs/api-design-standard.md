# API Design Standard

Tài liệu này định hướng cách thiết kế REST API contracts trong `openapi/`.

API phải có version rõ ràng như `v1` hoặc `v2`, mô tả request/response/error nhất quán và không thay đổi breaking behavior nếu chưa review. `ginsengfood-ops-core` và `ginsengfood-business-platform` không được tự ý thay đổi API đã publish mà không cập nhật contract.

Quy ước namespace cho ops-core:

- `/v1/*` là external boundary contract đã publish cho service/integration consumers, bao gồm các file trong `openapi/ops-core/*.yaml`.
- Internal application API của ops-core phải version dưới `/api/v1/{surface}/*`, ví dụ `/api/v1/admin/*`, `/api/v1/supplier/*`, `/api/v1/mobile/*`.
- Không dùng root `/v1/*` cho Admin Web/internal route vì khác audience, auth, DTO exposure, permission, audit và idempotency với external contract.

Không đặt OpenAPI YAML thật vào tài liệu này; OpenAPI contract thuộc `openapi/`.
