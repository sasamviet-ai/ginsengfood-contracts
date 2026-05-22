# IVR State Machines

This folder contains Phase 8 v1 state-machine contracts for IVR order confirmation.

State ownership rules:

- IVR state machines govern call execution and result signaling only.
- Order Core owns official order state transitions after revalidation.
- Technical retry, capacity hold, invalid phone, no-answer, customer confirm, and customer cancel are separate states/signals.
- Every high-risk transition requires audit/evidence references in the related schema.
