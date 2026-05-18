# openapi

Thư mục này chứa REST API contracts cho `ginsengfood-ops-core` và `ginsengfood-business-platform`.

Hai repo consumer không được tự ý thay đổi API đã expose mà không cập nhật contract tương ứng ở đây. Không đặt business logic, controller code, generated SDK, secret hoặc runtime config vào thư mục này.

Contracts được chia theo provider: `openapi/ops-core/` cho API do ops-core expose và `openapi/business-platform/` cho API do business-platform expose. Mọi OpenAPI file sau này phải versioned, ví dụ `product-v1.yaml` hoặc đặt trong path `v1/`.
