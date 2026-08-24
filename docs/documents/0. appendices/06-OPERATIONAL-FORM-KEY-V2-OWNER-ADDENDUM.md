# Operational Form Key v2 — Owner Addendum

Status: `ACCEPTED`

Owner approval: `D1=A` on 2026-08-21. Additive owner approval on 2026-08-24 adds semantic-only `COOKING_LOG` without allocating a legacy code. At the cross-repository contract boundary, `form_key` is the canonical Operational Form identity.

## Precedence and scope

This addendum supplements appendices 01, 02, and 05 for the Operational Forms v2 contract. It does not rewrite historical v1 contracts or records.

- v1 remains a usable, deprecated compatibility surface for FRM-01 through FRM-27.
- v2 uses only `form_key` for form identity. `form_code`, `deprecated_form_code_alias`, and `form_type` are not v2 wire fields.
- A key is immutable and order-independent. `flow_sequence` and `flow_stage` are mutable placement metadata.
- All 31 keys are valid for read/history. `AFTER_DRYING_QC` is retired and cannot be created.
- Historical `AFTER_DRYING_QC` records remain that identity. They must not be rewritten as `FREEZE_DRYING_LOG`.
- No v1 removal date is approved. Removal needs a separately reviewed provider/consumer compatibility plan.

## Canonical identity map

The table is ordered by the historical paper code only for migration lookup; it is not workflow order.

| Legacy code | v1 form_type | v2 form_key | Lifecycle |
|---|---|---|---|
| FRM-01 | PRODUCTION_PLAN_DEMAND | PRODUCTION_DEMAND_PLAN | ACTIVE |
| FRM-02 | DEMAND_BOARD_RECORD | PRODUCTION_DEMAND_BOARD | ACTIVE |
| FRM-03 | FORMULA_RESOLUTION_BOM_SNAPSHOT | FORMULA_RESOLUTION | ACTIVE |
| FRM-04 | MRP_RUN_MATERIAL_REQUIREMENT_BOARD | MRP_RUN | ACTIVE |
| FRM-05 | PROCUREMENT_SUPPRESSION_RESULT | PURCHASE_CONTROL_RESULT | ACTIVE |
| FRM-06 | PURCHASE_REQUIREMENT | MATERIAL_PURCHASE_REQUEST | ACTIVE |
| FRM-07 | HARVEST_REQUIREMENT | HARVEST_REQUEST | ACTIVE |
| FRM-08 | PACKAGING_PROCUREMENT_REQUIREMENT | PACKAGING_PURCHASE_REQUEST | ACTIVE |
| FRM-09 | RAW_MATERIAL_INTAKE | MATERIAL_INTAKE | ACTIVE |
| FRM-10 | PACKAGING_INTAKE | PACKAGING_INTAKE | ACTIVE |
| FRM-11 | PRODUCTION_ORDER | PRODUCTION_ORDER | ACTIVE |
| FRM-12 | MATERIAL_REQUEST | MATERIAL_ISSUE_REQUEST | ACTIVE |
| FRM-13 | MATERIAL_ACCEPTANCE_FOR_PRODUCTION | MATERIAL_RELEASE_APPROVAL | ACTIVE |
| FRM-14 | ACCOUNTING_MATERIAL_ISSUE | MATERIAL_ISSUE_ACCOUNTING | ACTIVE |
| FRM-15 | PERSONNEL_CHECKIN_CHECKOUT | PERSONNEL_ATTENDANCE | ACTIVE |
| FRM-16 | PREPROCESSING_TRACKING | PREPROCESSING_LOG | ACTIVE |
| FRM-17 | FREEZE_DRY_QC | AFTER_DRYING_QC | RETIRED; active replacement is FREEZE_DRYING_LOG |
| FRM-18 | PACKAGING_LEVEL_1 | PACKAGING_LEVEL1_LOG | ACTIVE |
| FRM-19 | PACKAGING_LEVEL_2 | PACKAGING_LEVEL2_LOG | ACTIVE |
| FRM-20 | FINISHED_GOODS_QC | FINISHED_GOODS_QC | ACTIVE |
| FRM-21 | BATCH_RELEASE | BATCH_RELEASE | ACTIVE |
| FRM-22 | FINISHED_GOODS_WAREHOUSE_RECEIPT | FINISHED_GOODS_RECEIPT | ACTIVE |
| FRM-23 | DISPOSAL_REQUEST | DISPOSAL_REQUEST | ACTIVE |
| FRM-24 | INVENTORY_WRITE_OFF | INVENTORY_WRITE_OFF | ACTIVE |
| FRM-25 | MISA_ACCOUNTING_HANDOFF_RECORD | MISA_HANDOFF | ACTIVE |
| FRM-26 | OPERATIONAL_EVIDENCE_PACKET | EVIDENCE_PACKET | ACTIVE |
| FRM-27 | OPERATIONAL_SMOKE_RUN_RECORD | SMOKE_RUN | ACTIVE |
| FRM-28 | none in v1 | FREEZING_LOG | ACTIVE |
| FRM-29 | none in v1 | FREEZE_DRYING_LOG | ACTIVE |
| FRM-30 | none in v1 | PACKAGING_LEVEL3_LOG | ACTIVE |
| — | none in v1 | COOKING_LOG | ACTIVE; semantic-key-only |

## Current flow placement

Consumers must use explicit placement metadata. The accepted order at this decision point is:

`PRODUCTION_DEMAND_PLAN`, `PRODUCTION_DEMAND_BOARD`, `FORMULA_RESOLUTION`, `MRP_RUN`, `PURCHASE_CONTROL_RESULT`, `MATERIAL_PURCHASE_REQUEST`, `HARVEST_REQUEST`, `PACKAGING_PURCHASE_REQUEST`, `MATERIAL_INTAKE`, `PACKAGING_INTAKE`, `PRODUCTION_ORDER`, `MATERIAL_ISSUE_REQUEST`, `MATERIAL_RELEASE_APPROVAL`, `MATERIAL_ISSUE_ACCOUNTING`, `PREPROCESSING_LOG`, `COOKING_LOG`, `FREEZING_LOG`, `FREEZE_DRYING_LOG`, `AFTER_DRYING_QC` (retired historical slot), `PACKAGING_LEVEL1_LOG`, `PACKAGING_LEVEL2_LOG`, `PACKAGING_LEVEL3_LOG`, `FINISHED_GOODS_QC`, `BATCH_RELEASE`, `FINISHED_GOODS_RECEIPT`, `PERSONNEL_ATTENDANCE`, `DISPOSAL_REQUEST`, `INVENTORY_WRITE_OFF`, `MISA_HANDOFF`, `EVIDENCE_PACKET`, `SMOKE_RUN`.

Changing this order does not change a key and does not require a new identity version. Provider data remains authoritative for the actual `flow_sequence` and `flow_stage` values.

## Compatibility requirements

1. Provider and consumer owners review the v2 contract PR.
2. v1 fixtures and endpoints remain during migration and are marked deprecated, not deleted.
3. v1 providers never represent FRM-28 through FRM-30 or `COOKING_LOG` by inventing v1 enum values/codes.
4. v2 create requests reject `AFTER_DRYING_QC`; v2 reads may return it for history.
5. A consumer must not send both legacy identity fields and `form_key` in one v2 payload.
6. Contract publication does not prove an implemented provider route; runtime status stays separate from schema status.
