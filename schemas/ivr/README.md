# IVR Schemas

This folder contains v1 JSON Schemas for Phase 8 IVR order confirmation contracts.

Contract boundaries:

- IVR only receives tasks for eligible Official Orders.
- IVR does not call Quote, Cart, or Order Draft.
- IVR never creates, updates, confirms, cancels, pays, ships, or releases an order.
- IVR sends normalized result callbacks to Order Core; Order Core revalidates Sale Lock, Recall, suppression, opt-out, payment, and policy constraints before any state transition.
- Technical retry is separate from customer-counted no-answer attempts.
- Evidence and audit references are part of the contract surface; raw recording or full phone number retention is governed by privacy policy and release gate.
