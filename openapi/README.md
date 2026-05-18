# openapi

Thư mục này chứa REST API contracts cho `ginsengfood-ops-core` và `ginsengfood-business-platform`.

Hai repo consumer không được tự ý thay đổi API đã expose mà không cập nhật contract tương ứng ở đây. Không đặt business logic, controller code, generated SDK, secret hoặc runtime config vào thư mục này.

Contracts được chia theo provider: `openapi/ops-core/` cho API do ops-core expose và `openapi/business-platform/` cho API do business-platform expose. Mọi OpenAPI file sau này phải versioned, ví dụ `product-v1.yaml` hoặc đặt trong path `v1/`.

## Ops-core External Boundary With ginsengfood-business-platform

Ops-core expose các API boundary sau cho `ginsengfood-business-platform` hoặc consumer hợp lệ theo authorization:

- Product Public API.
- SKU Detail API.
- Product Activation Status API.
- Availability / Sellable Check API.
- Stock Balance API.
- Trace Public API.
- Recall Status API.
- Sale Lock Status API.

`ginsengfood-business-platform` chỉ consume/check contract, không mutate ops-core truth. Các OpenAPI trong `openapi/ops-core/` là source chung; implementation riêng của ops-core hoặc business-platform không nằm trong thư mục này.
