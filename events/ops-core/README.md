# events/ops-core

Events published by `ginsengfood-ops-core`.

Consumer chinh la `ginsengfood-business-platform` va contract tests. Khong dat .NET handler, service logic, database migration, broker config, hay operational truth mutation code vao day.

## Groups

- `product`: product activation, formula approval, suspension.
- `inventory`: warehouse receipt confirmation, stock availability, stock threshold/risk signals.
- `sellable`: sellable status change signals consumed by commerce/channel/ads/live.
- `recall`: recall, sale lock, and stop-sale suppression events.
- `misa`: accounting handoff and MISA sync result events; these do not modify Operational Truth.
