# IVR Enums

This folder contains v1 enum contracts for Phase 8 IVR order confirmation.

Source-backed boundaries:

- Golden Hour uses 2 customer-counted attempts in 10 minutes: `T0`, `T0 + 5`.
- 24/7 uses 3 customer-counted attempts in 15 minutes: `T0`, `T0 + 5`, `T0 + 10`.
- Technical retry is separate from customer no-answer attempts.
- IVR result is an input signal only; Order Core owns order state transitions.
- Sale Lock, Recall, Suppression, opt-out, and policy blocks override IVR confirmation.

Compatibility rule: do not remove existing v1 values. When a clearer Phase 8 value is added, older values remain legacy-compatible aliases until a breaking-change review is approved.
