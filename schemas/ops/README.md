# schemas/ops

## Phase 2 - Operational Core v1

This folder contains Operational Core v1 JSON Schemas for `ginsengfood-ops-core`.

Scope:
- Source origin, supplier, raw material receipt/lot/QC, demand, MRP, material requirement, procurement suppression.
- Production order, Production BOM Snapshot, material issue/receipt, production execution, personnel check, batch, packaging, print, QC, and batch release.
- Warehouse, warehouse location, warehouse receipt, inventory ledger, stock balance, stock alert, sellable status, trace chain, public trace, recall, sale lock, MISA handoff, operational evidence, and operational form.
- Contract surfaces only. No OpenAPI, AsyncAPI, event payloads, implementation code, migration, service logic, or business logic.

Source basis:
- PACK-01 / TECH-03 for production, warehouse, inventory, traceability, recall, sale lock, and sellable guard.
- PACK-03 for demand, MRP, formula scaling, material groups, dynamic thresholds, procurement suppression, and stock alerts.
- PACK-04 plus operational form documents for MISA checkpoints, sync/reconcile status, and FRM-01 through FRM-27 forms.

Compatibility:
- All schemas are v1 and must stay backward compatible unless a compatibility note is added in a later phase.
- Inventory Ledger is append-only; Stock Balance is derived from ledger and availability guards.
- QC_PASS is not RELEASED, and Product Activation is not Sellable.

TODO:
- Confirm final state machines for demand, MRP, production order, batch, recall, sale lock, and operational forms.
- Confirm official checkpoint type enum for MISA handoff.
- Confirm warehouse/location taxonomy, supplier lifecycle, UOM catalog, and public trace payload fields.

Thư mục này chứa JSON Schema cho domain vận hành như Production, Batch, QC, Warehouse, Inventory, Trace, Recall và SaleLock.

Người dùng chính là ops-core provider và business-platform consumer khi cần dữ liệu vận hành. Không đặt workflow implementation, warehouse algorithm, QC business rule hoặc database migration vào đây.

Ví dụ file sau này: `batch-v1.schema.json`, `qc-result-v1.schema.json`, `inventory-position-v1.schema.json`, `trace-link-v1.schema.json`, `sale-lock-v1.schema.json`. Breaking change phải được review và tăng major version.
