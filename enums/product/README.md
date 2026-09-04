# enums/product

## Product Enums v1 and bounded v2 candidates

This folder contains Product Master v1 enum contracts for `ginsengfood-ops-core`.

These enums are contract values only. They do not implement business logic and do not make a SKU sellable.

Recipe and Formula Version v2 use `recipe-formula-lifecycle-status.v2.yaml` for the exact canonical seven-value lifecycle and `formula-kind.v2.yaml` for the separate formula calculation kind. The legacy v1 recipe/formula status files remain frozen compatibility vocabularies and must not be used for lossy translation.

Source basis:
- PACK-02 for Product Master, Recipe/BOM/Formula Version, config readiness, and Product Activation.
- The 20 SKU operational formula catalog for dietary grouping.

TODO:
- Several Product Master state machines are not fully locked in the source documents. Conservative values are included with TODO notes and should be refined in Phase 7 state-machine work.

Thư mục này chứa enum chuẩn cho product domain.

Người dùng chính là ops-core provider và business-platform consumer. Không đặt Product Master rule, SKU activation logic hoặc implementation enum code vào đây.

Ví dụ file sau này: `product-status-v1.md`, `sku-status-v1.md`, `bom-status-v1.md`. Enum phải versioned và breaking change phải review.
