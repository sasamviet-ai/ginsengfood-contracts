# Ops-core External Boundary With ginsengfood-business-platform

Tài liệu này là boundary contract chung giữa `ginsengfood-ops-core` và `ginsengfood-business-platform`. Mục tiêu là chốt phần ops-core phải expose/consume ở mức API/event contract, không phân tích implementation, code, backlog hoặc database nội bộ của `ginsengfood-business-platform`.

Nguồn đối chiếu:

- `ginsengfood-contracts/docs/documents`
- `ginsengfood-contracts/openapi/ops-core/*.yaml`
- `ginsengfood-contracts/events/ops-core/**/*.json`
- `ginsengfood-contracts/events/business-platform/order/*.json`
- `ginsengfood-contracts/events/business-platform/demand/*.json`

## Ops-core expose API

| API boundary | Contract source | Consumer rule |
|---|---|---|
| Product Public API | `openapi/ops-core/product-master.v1.yaml`, `openapi/ops-core/sku.v1.yaml` | Chỉ trả projection public-safe cho product/SKU. Không expose recipe, formula internals, supplier, QC defect, cost, personnel hoặc private operational data. |
| SKU Detail API | `openapi/ops-core/sku.v1.yaml` | Contract đọc SKU identity/detail theo authorization. SKU Active không đồng nghĩa có hàng bán. |
| Product Activation Status API | `openapi/ops-core/product-activation.v1.yaml` | Activation status là upstream operational state. Product Active không đồng nghĩa Sellable. |
| Availability / Sellable Check API | `openapi/ops-core/availability-sellable.v1.yaml` | Chỉ read/check. Consumer không được reserve stock hoặc mutate ops-core truth. |
| Stock Balance API | `openapi/ops-core/inventory.v1.yaml` | Chỉ trả derived balance/projection. Inventory ledger vẫn là ops-core source of truth. |
| Trace Public API | `openapi/ops-core/traceability.v1.yaml` | Public trace là whitelist-only và không được leak internal supplier/personnel/cost/QC/loss/MISA data. |
| Recall Status API | `openapi/ops-core/recall-sale-lock.v1.yaml` | Downstream consumer phải block selling/fulfillment khi recall status yêu cầu. |
| Sale Lock Status API | `openapi/ops-core/recall-sale-lock.v1.yaml` | Sale Lock thắng downstream selling flow cho tới khi ops-core release. |

## Ops-core publish events

| Event | Contract source | Boundary meaning |
|---|---|---|
| `ProductActivated` | `events/ops-core/product/product-activated.v1.json` | Product/SKU activation thay đổi; không phải availability guarantee. |
| `FormulaVersionApproved` | `events/ops-core/product/formula-version-approved.v1.json` | Formula version đã được approve để downstream planning/reference dùng. |
| `WarehouseReceiptConfirmed` | `events/ops-core/inventory/warehouse-receipt-confirmed.v1.json` | Finished-goods inventory chỉ được tăng sau confirmed receipt. |
| `InventoryAvailableChanged` | `events/ops-core/inventory/inventory-available-changed.v1.json` | Derived available inventory thay đổi. |
| `StockBelowThreshold` | `events/ops-core/inventory/stock-below-threshold.v1.json` | Stock alert threshold bị vượt ngưỡng. |
| `StockoutRiskDetected` | `events/ops-core/inventory/stockout-risk-detected.v1.json` | Demand/MRP hoặc stock projection phát hiện stockout risk. |
| `SkuBecameSellable` | `events/ops-core/sellable/sku-became-sellable.v1.json` | Tất cả sellable guard conditions hiện đang pass. |
| `SkuBecameNotSellable` | `events/ops-core/sellable/sku-became-not-sellable.v1.json` | Một hoặc nhiều guard conditions đang block selling. |
| `SaleLockActivated` | `events/ops-core/recall/sale-lock-activated.v1.json` | Downstream selling flow phải dừng với affected scope. |
| `SaleLockReleased` | `events/ops-core/recall/sale-lock-released.v1.json` | Downstream có thể re-check availability; release không phải automatic sellable pass. |
| `RecallCaseOpened` | `events/ops-core/recall/recall-case-opened.v1.json` | Downstream phải đánh giá recall/sale-lock impact. |
| `StopSaleRequired` | `events/ops-core/recall/stop-sale-required.v1.json` | Tín hiệu stop-sale ngay lập tức. |
| `AccountingHandoffCreated` | `events/ops-core/misa/accounting-handoff-created.v1.json` | Accounting checkpoint/handoff được tạo; MISA không được write back operational truth. |

## Ops-core consume boundary events

| Event | Contract source | Ops-core usage boundary |
|---|---|---|
| `OrderCreated` | `events/business-platform/order/order-created.v1.json` | Reference/allocation context only. Does not create production order by itself. |
| `OrderConfirmed` | `events/business-platform/order/order-confirmed.v1.json` | Confirmed order signal for fulfillment/allocation boundary if ops-core needs it. |
| `OrderCancelled` | `events/business-platform/order/order-cancelled.v1.json` | Release/suppress allocation reference if applicable; does not mutate external order truth. |
| `OrderReadyForFulfillment` | `events/business-platform/order/order-ready-for-fulfillment.v1.json` | Fulfillment readiness input only. |
| `OrderDelivered` | `events/business-platform/order/order-delivered.v1.json` | Trace/exposure reference only where required. |
| `SalesDemandCreated` | `events/business-platform/demand/sales-demand-created.v1.json` | Demand Board input only. |
| `CampaignDemandForecasted` | `events/business-platform/demand/campaign-demand-forecasted.v1.json` | Forecast input for Demand/MRP only. |
| `DealerOrderDemandCreated` | `events/business-platform/demand/dealer-order-demand-created.v1.json` | Dealer demand input only. |

## Boundary locks

| Lock | Required rule |
|---|---|
| Contract-only consumer | `ginsengfood-business-platform` chỉ consume/check contract, không mutate ops-core truth. |
| Ops-core ownership limit | Ops-core không sở hữu customer, CRM, quote/cart/order final commerce, payment, shipping, ads, AI advisor, customer memory, member/diamond benefit. |
| Reference keys only | Ops-core chỉ lưu reference key nếu cần: `order_id`, `order_item_id`, `customer_id`, `shipment_id`. |
| Downstream block | Sale Lock / Recall / Not Sellable thắng mọi downstream selling flow. |
| Activation separation | Product Active không đồng nghĩa Sellable. |
| SKU/stock separation | SKU Active không đồng nghĩa có hàng bán. |
| No external implementation analysis | Contract docs chỉ mô tả API/event/schema boundary; không dùng để đánh giá implementation của `ginsengfood-business-platform`. |

## Placement rule

- Nội dung chung giữa hai hệ thống nằm trong `ginsengfood-contracts`.
- Nội dung triển khai riêng của ops-core nằm trong `ginsengfood-ops-core/docs/software-specs`.
- Không tạo duplicate OpenAPI/event schema nếu contract file đã tồn tại; chỉ cập nhật README/index/spec để trỏ đúng nguồn.
