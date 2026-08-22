# Operational Form State Machine v2

Sources:

- `docs/documents/0. appendices/06-OPERATIONAL-FORM-KEY-V2-OWNER-ADDENDUM.md`
- `state-machines/ops/operational-form-state.md` (v1 lifecycle baseline)

Scope:

- Form identity is `form_key`; `form_code` and `form_type` are not v2 payload fields.
- The status vocabulary and guarded baseline transitions remain compatible with v1.
- `AFTER_DRYING_QC` is `RETIRED`: historical instances remain readable but no create transition is allowed.
- `flow_sequence` and `flow_stage` are placement metadata, not identity.

States:

`AUTO_GENERATED_DRAFT`, `DRAFT`, `PENDING_CONFIRMATION`, `SUBMITTED`, `CONFIRMED`, `APPROVED`, `PARTIALLY_APPROVED`, `REJECTED`, `IN_PROGRESS`, `CHECKED_OUT`, `APPROVED_FOR_PACKING`, `APPROVED_FOR_WAREHOUSE`, `COMPLETED`, `ACCOUNTED`, `SYNC_AWAITING_REVIEW`, `SYNC_SUCCESS`, `SYNC_ERROR`, `REVIEW_REQUIRED`, `BLOCKED`, `CLOSED`, `CANCELLED`.

Allowed baseline transitions are unchanged from `state-machines/ops/operational-form-state.md`. Provider implementations may define stricter per-key guards but must not bypass confirmation, permission, evidence, audit, QC, release, inventory, or MISA boundaries.

Compatibility:

- Do not rename an existing `form_key` when the flow order changes.
- Do not map historical `AFTER_DRYING_QC` records to `FREEZE_DRYING_LOG`; the replacement applies only to active workflow creation.
- Removing the v1 lifecycle or accepting retired-key creation requires a separately reviewed compatibility decision.
