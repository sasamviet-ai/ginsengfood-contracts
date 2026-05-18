# schemas/product

## Phase 2 - Product Master v1

This folder contains Product Master v1 JSON Schemas for `ginsengfood-ops-core`.

Scope:
- Product, SKU, Ingredient, Recipe, Formula Version, BOM, Product Activation.
- Product-side configs for packaging, print, QC, shelf-life/HSD, trace, and recall.
- Contract surfaces only. No implementation code, migration, service logic, or business logic.

Source basis:
- PACK-02 Product Master / SKU / Ingredient / Recipe / Formula Version / Product Activation.
- PACK-03 Demand / MRP / Formula Scaling / Material & Packaging Control where formula scaling and material groups affect product contracts.
- 20 SKU operational formula catalog for G0/G1, formula codes, anchor rice, and ratio_to_rice concepts.

Compatibility:
- All schemas are v1 and must stay backward compatible unless a compatibility note is added in a later phase.
- Product Activation is not sellable. Sellable status belongs to Operational Core.

TODO:
- Confirm final SKU lifecycle, recipe lifecycle, BOM lifecycle, and post-G1 version naming.
- Confirm exact English label for the source dietary label "Man".
- Confirm UOM catalog, density/conversion policy, and QR/barcode payload formats.

Thư mục này chứa JSON Schema cho Product Master domain do `ginsengfood-ops-core` sở hữu và `ginsengfood-business-platform` có thể consume.

Không đặt business rule tính giá, công thức sản xuất, database table hoặc service code vào đây. Schema chỉ mô tả shape dữ liệu contract.

Ví dụ file sau này: `product-v1.schema.json`, `sku-v1.schema.json`, `ingredient-v1.schema.json`, `recipe-v1.schema.json`, `formula-v1.schema.json`, `bom-v1.schema.json`. Mọi schema phải versioned.
