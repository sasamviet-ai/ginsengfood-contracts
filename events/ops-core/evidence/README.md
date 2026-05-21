# ops-core evidence events

Evidence and release-readiness events use the standard event envelope and carry common foundation records in `data`.

Current v1 events:

- `evidence-accepted.v1.json`
- `release-status-changed.v1.json`

These events do not define broker, topic, retry, dead-letter, or outbox behavior. Those remain future integration decisions until source documents or owners approve them.
