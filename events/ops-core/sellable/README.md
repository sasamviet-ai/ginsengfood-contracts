# events/ops-core/sellable

Thư mục này dành cho sellable state events phát ra từ `ginsengfood-ops-core`.

Consumer chính là business-platform để quyết định SKU có được bán hay không. Không đặt sale rule implementation, pricing logic hoặc commerce UI state vào đây.

Ví dụ file sau này: `sku-became-sellable-v1.schema.json`, `sku-became-unsellable-v1.schema.json`, `sale-lock-activated-v1.schema.json`. Breaking change phải được review.
