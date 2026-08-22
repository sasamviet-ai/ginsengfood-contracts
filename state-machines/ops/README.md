# state-machines/ops

Operational state-machine contracts for ops-core provider and authorized consumers.

This folder describes contract-level states and transitions only. Do not place production workflow code, database transition scripts, or business rule engines here.

Current coverage includes production order, batch, QC, warehouse receipt, recall, sale lock, operational form, and print job states. `operational-form-state.md` is the frozen v1 FRM lifecycle; `operational-form-state.v2.md` keeps the lifecycle while changing canonical identity to `form_key` and making `AFTER_DRYING_QC` read-only retired history.
