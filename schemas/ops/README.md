# schemas/ops

This folder contains Operational Core v1 JSON Schemas for `ginsengfood-ops-core`.

## Scope

- Source origin, supplier, raw material receipt/lot/QC, demand, MRP, material requirement, procurement suppression.
- Production order, Production BOM Snapshot, material issue/receipt, production execution, personnel check, batch, packaging, QC, batch release, warehouse, inventory, traceability, recall, sale lock, sellable status, and public trace.
- Operational appendices: OPF-01 through OPF-12, auto-generated form payloads, print payload/job, material code registry, packaging yield policy, material planning policy, MISA checkpoint, and MISA handoff.
- Contract surfaces only. No implementation code, database migration, algorithm, or business calculation belongs here.

## Source Basis

- `docs/documents/2. pack/01-PACK-01-OPERATIONAL-CORE.md` and `docs/documents/3. tech/04-TECH-03-OPERATIONAL-CORE-PRODUCTION-WAREHOUSE-INVENTORY-TRACEABILITY-RECALL-SALE-LOCK.md`
- `docs/documents/2. pack/03-PACK-03-DEMAND-MRP-PROCUREMENT-MATERIAL-CONTROL.md`
- `docs/documents/2. pack/04-PACK-04-MISA-ACCOUNTING-HANDOFF.md`
- `docs/documents/0. appendices/01-OPERATIONAL-FORMS.md`
- `docs/documents/0. appendices/02-AUTO-GENERATED-FORM-RULES.md`
- `docs/documents/0. appendices/03-PRINTING-CODE-RULES.md`
- `docs/documents/0. appendices/04-MISA-MAPPING-RULES.md`
- `docs/documents/0. appendices/05-MATERIAL-PACKAGING-TAXONOMY.md`

## Compatibility

- All schemas are v1 and must stay backward compatible unless a compatibility note is added.
- Inventory Ledger is append-only; Stock Balance is derived from ledger and availability guards.
- QC_PASS is not RELEASED, and Product Activation is not Sellable.
- Thresholds, buffers, yield rates, and suppression policies are owner-approved configuration, not hardcoded calculations.
- MISA checkpoint, mapping, sync, and reconcile states are contract fields; MISA must not rewrite Operational Truth.

## Remaining Owner Decisions

- Warehouse/location taxonomy and public trace detail can be tightened after owner approval.
- Async broker/topic/retry/outbox behavior remains outside schema scope until integration owners approve it.
