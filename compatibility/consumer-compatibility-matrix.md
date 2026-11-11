# Consumer Compatibility Matrix

This matrix records provider and consumer boundaries for versioned contracts. It is not an implementation integration plan.

| Provider | Consumer | Contract areas | Consumer may rely on | Consumer must not do |
| --- | --- | --- | --- | --- |
| ops-core | business-platform | catalog, availability, sellable, inventory, trace, recall, sale lock | Public SKU data, availability decision, sellable block reasons, public trace, active sale lock/recall signals. Allocation holds through the two owner-approved commands `reserveInventoryAllocationV1` and `releaseInventoryAllocationV1` (see exception below). | Mutate product, batch, inventory ledger, recall, or sale lock truth. Confirm, issue or warehouse-release an allocation, or release a CONFIRMED or ISSUED one. |
| ops-core | ops-core frontend | product, recipe, BOM, production, QC, release, warehouse, inventory, evidence, MISA | Operational owner workflows and evidence-backed commands. | Skip owner decision, bypass release guards, or directly edit derived stock balance. |
| ops-core | ops-admin-ui / ops-core frontend | Operational Forms v1 and v2 | Stay on deprecated v1 until a tested provider v2 route exists; migrate identity branching to canonical `form_key`. | Invent v1 values for FRM-28 through FRM-30, infer order from identity, create `AFTER_DRYING_QC`, or treat schema publication as runtime proof. |
| business-platform | ops-core | official order, demand, payment status, IVR signal | Official customer-confirmed order signals and planning demand. | Treat quote, cart, draft, IVR signal, or unverified payment as operational truth. |
| business-platform | ads/analytics | verified revenue, attribution, scale gate | Verified revenue only after order and payment/collection confirmation. | Use raw funnel or pending payment as verified revenue. |
| business-platform | channel/AI/live | channel context, response instruction, handoff, sale suppression | Response instructions and delivery state. | Override ops-core sale lock, invent product truth, or create fake urgency. |
| business-platform | notification | order and IVR decisions | Cancellation or confirmation notices only after core order decision. | Send cancellation notice from IVR technical exception alone. |
| both | integration consumers | events, error codes, examples | Stable v1 envelopes and versioned event payloads. | Depend on undocumented broker config, internal database state, or implementation exceptions. |

## Intentional Exception: allocation hold and self-release

The row above says business-platform must not mutate inventory truth. There is exactly one deliberate exception, a hold of finished-goods stock and the consumer's own release of that hold:

- `reserveInventoryAllocationV1` (`POST /v1/inventory/allocations`, OWNER-DIRECTIVE-2026-09-05-EXT-ALLOC-RESERVE) places a hold on stock.
- `releaseInventoryAllocationV1` (`POST /v1/inventory/allocations/release`, OD-M3-REPLY-01, owner decision 2B of 2026-10-08) ends a RESERVED hold that the same service principal created. It reuses `INVENTORY_ALLOCATION_CREATE`; the warehouse permission `INVENTORY_ALLOCATION_RELEASE` is never granted to a consumer.
- Neither command writes an inventory ledger entry or moves goods. Stock on hand, batch, recall and sale-lock truth stay with ops-core; a hold only moves quantity between `available` and `reserved`, and it ends by release or expiry.
- Confirming (`CONFIRMED`) and issuing (`ISSUED`) belong to the warehouse; a consumer cannot drive them and cannot release a line in those states.

The `ISSUED` status and the release command are classified "additive, coordinated" in `CHANGELOG.md`: non-breaking only because consumers must tolerate unknown enum values, and the business-platform owner reviews before the provider enables them on a shared environment.

## Compatibility Notes

- Consumers must tolerate additive optional fields in v1 payloads, and enum values they do not know (for example allocation `status` `ISSUED`).
- Consumers must fail closed for sale lock, recall, stock unavailable, quality hold, and trace-not-ready conditions.
- Consumers must keep public/private channel boundaries intact.
- Providers must not expose sensitive operational or payment data unless the relevant source contract explicitly permits it.
- Provider and consumer owners must sign off before Operational Forms traffic moves to v2. Business-platform is not a declared Operational Forms consumer.

## TODO

- Source documents do not define formal consumer ownership registry or notification SLA for compatibility changes.
