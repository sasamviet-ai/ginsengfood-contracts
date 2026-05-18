# Consumer Compatibility Matrix v1

This matrix records provider and consumer boundaries for v1 contracts. It is not an implementation integration plan.

| Provider | Consumer | Contract areas | Consumer may rely on | Consumer must not do |
| --- | --- | --- | --- | --- |
| ops-core | business-platform | catalog, availability, sellable, inventory, trace, recall, sale lock | Public SKU data, availability decision, sellable block reasons, public trace, active sale lock/recall signals. | Mutate product, batch, inventory ledger, recall, or sale lock truth. |
| ops-core | ops-core frontend | product, recipe, BOM, production, QC, release, warehouse, inventory, evidence, MISA | Operational owner workflows and evidence-backed commands. | Skip owner decision, bypass release guards, or directly edit derived stock balance. |
| business-platform | ops-core | official order, demand, payment status, IVR signal | Official customer-confirmed order signals and planning demand. | Treat quote, cart, draft, IVR signal, or unverified payment as operational truth. |
| business-platform | ads/analytics | verified revenue, attribution, scale gate | Verified revenue only after order and payment/collection confirmation. | Use raw funnel or pending payment as verified revenue. |
| business-platform | channel/AI/live | channel context, response instruction, handoff, sale suppression | Response instructions and delivery state. | Override ops-core sale lock, invent product truth, or create fake urgency. |
| business-platform | notification | order and IVR decisions | Cancellation or confirmation notices only after core order decision. | Send cancellation notice from IVR technical exception alone. |
| both | integration consumers | events, error codes, examples | Stable v1 envelopes and versioned event payloads. | Depend on undocumented broker config, internal database state, or implementation exceptions. |

## Compatibility Notes

- Consumers must tolerate additive optional fields in v1 payloads.
- Consumers must fail closed for sale lock, recall, stock unavailable, quality hold, and trace-not-ready conditions.
- Consumers must keep public/private channel boundaries intact.
- Providers must not expose sensitive operational or payment data unless the relevant source contract explicitly permits it.

## TODO

- Source documents do not define formal consumer ownership registry or notification SLA for compatibility changes.
