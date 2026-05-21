# state-machines

This folder contains Markdown state-machine contracts for shared and domain lifecycle states.

Primary readers are `ginsengfood-ops-core`, `ginsengfood-business-platform`, QA, and contract reviewers. Do not place implementation code, workflow engine configuration, database transition scripts, or runtime rule engines here.

Folders:

- `common/`: foundation flows such as evidence registry, P0 stop points, and release status registry.
- `ops/`: operational-core states, including production, batch, QC, warehouse, recall, sale lock, operational forms, and print jobs.
- `commerce/`: commerce-runtime states.
- `ivr/`: IVR confirmation states.

State machine changes that remove states, loosen required guards, or allow previously forbidden transitions are compatibility-sensitive and must be reviewed.
