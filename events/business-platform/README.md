# events/business-platform

Events published by `ginsengfood-business-platform`.

Consumer chinh la `ginsengfood-ops-core`, Ads/measurement, IVR, shipping/payment integrations, va contract tests. Khong dat Spring Boot handler, commerce service logic, payment gateway code, secret, hay broker config vao day.

## Groups

- `order`: Official Order lifecycle events. Order Draft is not Official Order.
- `payment`: payment reference and confirmed/failed payment signals.
- `shipping`: shipping lifecycle and delivery issue signals.
- `demand`: sales/campaign/dealer demand signals for ops-core review, not Production Order commands.
- `ads`: verified revenue, attribution, and scale gate events.
- `ivr`: order confirmation request/result signals; IVR result is input signal only.
