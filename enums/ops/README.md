# enums/ops

## Phase 2 - Operational Core Enums v1

This folder contains Operational Core v1 enum contracts for `ginsengfood-ops-core`.

These enums are contract values only. They do not implement state transitions, service logic, inventory calculation, MISA sync, or business decisions.

Source basis:
- PACK-01 / TECH-03 for QC, batch, release, warehouse receipt, inventory, sellable, trace, recall, and sale lock boundaries.
- PACK-03 for material groups, demand, MRP, procurement suppression, and stock alert status.
- PACK-04 plus operational form documents for MISA handoff and operational form status values.

TODO:
- Split broad MISA handoff status into mapping/sync/reconcile enums if future documents require strict typing.
- Define official per-domain state machines in Phase 7 where the source documents currently only define guard outcomes.

Thư mục này chứa enum chuẩn cho vận hành như QC, batch, inventory, recall và sale lock.

Không đặt workflow code, database status migration hoặc rule engine vào đây. Enum chỉ mô tả vocabulary contract.

Ví dụ file sau này: `qc-status-v1.md`, `batch-status-v1.md`, `sale-lock-status-v1.md`, `recall-status-v1.md`. Enum phải versioned.
