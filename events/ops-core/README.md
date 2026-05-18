# events/ops-core

Events published by `ginsengfood-ops-core`.

Consumer chinh la `ginsengfood-business-platform` va contract tests. Khong dat .NET handler, service logic, database migration, broker config, hay operational truth mutation code vao day.

## Groups

- `product`: product activation, formula approval, suspension.
- `inventory`: warehouse receipt confirmation, stock availability, stock threshold/risk signals.
- `sellable`: sellable status change signals consumed by commerce/channel/ads/live.
- `recall`: recall, sale lock, and stop-sale suppression events.
- `misa`: accounting handoff and MISA sync result events; these do not modify Operational Truth.

## Ops-core External Boundary With ginsengfood-business-platform

Ops-core publish events:

| Event | File |
|---|---|
| `ProductActivated` | `product/product-activated.v1.json` |
| `FormulaVersionApproved` | `product/formula-version-approved.v1.json` |
| `WarehouseReceiptConfirmed` | `inventory/warehouse-receipt-confirmed.v1.json` |
| `InventoryAvailableChanged` | `inventory/inventory-available-changed.v1.json` |
| `StockBelowThreshold` | `inventory/stock-below-threshold.v1.json` |
| `StockoutRiskDetected` | `inventory/stockout-risk-detected.v1.json` |
| `SkuBecameSellable` | `sellable/sku-became-sellable.v1.json` |
| `SkuBecameNotSellable` | `sellable/sku-became-not-sellable.v1.json` |
| `SaleLockActivated` | `recall/sale-lock-activated.v1.json` |
| `SaleLockReleased` | `recall/sale-lock-released.v1.json` |
| `RecallCaseOpened` | `recall/recall-case-opened.v1.json` |
| `StopSaleRequired` | `recall/stop-sale-required.v1.json` |
| `AccountingHandoffCreated` | `misa/accounting-handoff-created.v1.json` |

Boundary locks:

- `ginsengfood-business-platform` chỉ consume/check contract, không mutate ops-core truth.
- Sale Lock / Recall / Not Sellable thắng mọi downstream selling flow.
- Product Active không đồng nghĩa Sellable.
- SKU Active không đồng nghĩa có hàng bán.
