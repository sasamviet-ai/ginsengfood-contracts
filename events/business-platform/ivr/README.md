# IVR Events

IVR events are published by business-platform as input signals or operational visibility events. They do not directly mutate Official Order state.

Current Phase 8 event set:

- `ivr-confirmation-requested.v1`: eligible Official Order task was requested.
- `ivr-confirmed.v1`: customer confirmed via IVR; Order Core still revalidates.
- `ivr-customer-cancelled.v1`: customer cancelled via IVR; Order Core decides final cancellation.
- `ivr-no-answer-final.v1`: program-specific no-answer final was reached.
- `ivr-invalid-phone-final.v1`: official contact phone failed validation.
- `ivr-technical-exception.v1`: technical exception was captured and is not a customer attempt.
- `ivr-operational-blocked.v1`: Order Core or owner policy blocked IVR progression.
- `ivr-capacity-incident-opened.v1`: queue/SIM/adapter capacity incident was opened.

AsyncAPI files map event names to payload refs only. Real broker, topic, retry, outbox, and dead-letter behavior remain future approved toolchain decisions.
