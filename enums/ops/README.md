# enums/ops

Operational Core enum contracts for `ginsengfood-ops-core`. Existing files remain v1 unless their filename/metadata declares another version.

These enums define contract vocabulary only. They do not implement transitions, service logic, inventory calculations, MISA sync, or business decisions.

## Source Basis

- `docs/documents/2. pack/01-PACK-01-OPERATIONAL-CORE.md` and `docs/documents/3. tech/04-TECH-03-OPERATIONAL-CORE-PRODUCTION-WAREHOUSE-INVENTORY-TRACEABILITY-RECALL-SALE-LOCK.md`
- `docs/documents/2. pack/03-PACK-03-DEMAND-MRP-PROCUREMENT-MATERIAL-CONTROL.md`
- `docs/documents/2. pack/04-PACK-04-MISA-ACCOUNTING-HANDOFF.md`
- `docs/documents/0. appendices/01-OPERATIONAL-FORMS.md`
- `docs/documents/0. appendices/03-PRINTING-CODE-RULES.md`
- `docs/documents/0. appendices/04-MISA-MAPPING-RULES.md`
- `docs/documents/0. appendices/05-MATERIAL-PACKAGING-TAXONOMY.md`
- `docs/documents/0. appendices/06-OPERATIONAL-FORM-KEY-V2-OWNER-ADDENDUM.md`

## Current Split Enums

- Operational forms v1 (deprecated compatibility): `operational-form-type.yaml`, `operational-form-status.yaml`
- Operational forms v2: `operational-form-key.v2.yaml`, `operational-form-status.v2.yaml`
- Printing: `print-job-status.yaml`
- Material/packaging: `material-group.yaml`, `material-group-family.yaml`, `material-planning-policy.yaml`, `material-suppression-reason.yaml`
- MISA: `misa-checkpoint-type.yaml`, `misa-mapping-status.yaml`, `misa-sync-status.yaml`, `misa-reconcile-status.yaml`, plus `misa-handoff-status.yaml` for compatibility with broad consumers.

Future tightening is allowed only when the source documents or owner decisions define stable values.
