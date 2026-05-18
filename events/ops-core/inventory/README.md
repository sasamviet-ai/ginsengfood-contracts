# events/ops-core/inventory

Thư mục này dành cho inventory events phát ra từ `ginsengfood-ops-core`.

Consumer chính là business-platform khi cần biết availability hoặc stock state. Không đặt warehouse allocation logic, stock reservation implementation hoặc inventory ledger vào đây.

Ví dụ file sau này: `inventory-available-changed-v1.schema.json`, `warehouse-stock-adjusted-v1.schema.json`. Event payload phải versioned và tương thích consumer.
