# schemas/product

Thư mục này chứa JSON Schema cho Product Master domain do `ginsengfood-ops-core` sở hữu và `ginsengfood-business-platform` có thể consume.

Không đặt business rule tính giá, công thức sản xuất, database table hoặc service code vào đây. Schema chỉ mô tả shape dữ liệu contract.

Ví dụ file sau này: `product-v1.schema.json`, `sku-v1.schema.json`, `ingredient-v1.schema.json`, `recipe-v1.schema.json`, `formula-v1.schema.json`, `bom-v1.schema.json`. Mọi schema phải versioned.
