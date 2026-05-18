# enums/product

Thư mục này chứa enum chuẩn cho product domain.

Người dùng chính là ops-core provider và business-platform consumer. Không đặt Product Master rule, SKU activation logic hoặc implementation enum code vào đây.

Ví dụ file sau này: `product-status-v1.md`, `sku-status-v1.md`, `bom-status-v1.md`. Enum phải versioned và breaking change phải review.
