# events/ops-core/recall

Recall and sale-lock events published by ops-core. `sale-lock-activated.v1` and `stop-sale-required.v1` are high-risk suppression events and must block quote/order/AI/CRM/Ads/Live for the affected scope.

- `recall-case-opened.v1` carries external `status=OPEN`; later external projection changes do not emit a status event by themselves.
- `BLOCKED` is a read-response overlay and is never an event or persisted Recall state.
- Every durable Sale Lock activation emits both `sale-lock-activated.v1` and `stop-sale-required.v1` for the same scope/correlation in the same outbox transaction.
- Event scope uses only external v1 values `SKU`, `BATCH`, `LOT`, `TRACE_CHAIN`.
- `CANCELLED` is an additive external Recall response value; no new cancellation event is implied by this contract update.
