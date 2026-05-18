# events/ops-core/product

Thư mục này dành cho product events phát ra từ `ginsengfood-ops-core`.

Người dùng chính là business-platform khi cần cập nhật thông tin Product, SKU, Ingredient, Recipe, Formula hoặc BOM. Không đặt Product Master business logic, activation rule hoặc database model vào đây.

Ví dụ file sau này: `sku-created-v1.schema.json`, `sku-updated-v1.schema.json`, `product-activated-v1.schema.json`. Event payload phải versioned.
