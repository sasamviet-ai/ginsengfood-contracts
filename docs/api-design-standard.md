# API Design Standard

Tài liệu này định hướng cách thiết kế REST API contracts trong `openapi/`.

API phải có version rõ ràng như `v1` hoặc `v2`, mô tả request/response/error nhất quán và không thay đổi breaking behavior nếu chưa review. `ginsengfood-ops-core` và `ginsengfood-business-platform` không được tự ý thay đổi API đã publish mà không cập nhật contract.

Không đặt OpenAPI YAML thật vào tài liệu này; OpenAPI contract thuộc `openapi/`.
