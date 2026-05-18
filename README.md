# ginsengfood-contracts

`ginsengfood-contracts` là repo source-of-truth cho API contracts, event contracts, schemas, enums, examples, state machines, error codes, compatibility policy và contract tests giữa hai hệ thống vận hành chính của Ginsengfood.

Repo này phục vụ ba repo trong hệ thống:

1. `ginsengfood-ops-core`: sở hữu Product Master, SKU, Ingredient, Recipe, Formula, BOM, Demand, MRP, Production, QC, Batch, Warehouse, Inventory, Traceability, Recall, Sale Lock và MISA accounting handoff.
2. `ginsengfood-business-platform`: sở hữu Commerce Runtime, Quote, Cart, Order, Payment, Shipping, AI Advisor, Customer Memory, Facebook Gateway, Messenger, Ads Measurement, MC AI Live, IVR và Notification.
3. `ginsengfood-contracts`: lưu giao ước chung giữa hai repo trên, không chứa business logic hay implementation.

## Mục Đích

Repo này giúp hai team thống nhất trước khi triển khai: API nào được expose, event nào được publish, payload có shape gì, trạng thái nào hợp lệ, error code nào được dùng và thay đổi nào có thể phá vỡ consumer.

Contracts trong repo này là giao ước chung giữa `ginsengfood-ops-core` và `ginsengfood-business-platform`; đây không phải nơi chứa business logic, database migration, secret, production config hoặc implementation code.

## Nguyên Tắc

- Contract-first: thống nhất contract trước khi implementation phụ thuộc vào nó.
- Mọi API, event và schema phải versioned.
- Breaking change phải được review trước khi merge.
- Không chứa business logic.
- Không chứa secret.
- Không chứa database migration.
- Không chứa generated code bắt buộc, trừ khi có policy rõ trong `generated/README.md`.
- Contract quan trọng cần có example và schema trước khi dùng production.

## Cách Sử Dụng

`ginsengfood-ops-core` dùng repo này để đọc OpenAPI, AsyncAPI, JSON Schema, event payload, enum, state machine và error code trước khi expose API hoặc publish event.

`ginsengfood-business-platform` dùng repo này để consume API/event từ ops-core, đồng thời công bố contract API/event do business-platform expose hoặc publish.

Giai đoạn đầu có thể dùng Git submodule để hai repo consumer tham chiếu cùng một contract source. Giai đoạn sau có thể publish package hoặc artifact versioned để phục vụ CI, contract test và generated client/model theo policy.

## Ops-core External Boundary With ginsengfood-business-platform

Boundary chung giữa hai hệ thống được chốt tại `docs/ops-core-business-platform-boundary.md`.

- Ops-core expose Product Public API, SKU Detail API, Product Activation Status API, Availability / Sellable Check API, Stock Balance API, Trace Public API, Recall Status API và Sale Lock Status API.
- Ops-core publish `ProductActivated`, `FormulaVersionApproved`, `WarehouseReceiptConfirmed`, `InventoryAvailableChanged`, `StockBelowThreshold`, `StockoutRiskDetected`, `SkuBecameSellable`, `SkuBecameNotSellable`, `SaleLockActivated`, `SaleLockReleased`, `RecallCaseOpened`, `StopSaleRequired`, `AccountingHandoffCreated`.
- Ops-core consume boundary events `OrderCreated`, `OrderConfirmed`, `OrderCancelled`, `OrderReadyForFulfillment`, `OrderDelivered`, `SalesDemandCreated`, `CampaignDemandForecasted`, `DealerOrderDemandCreated`.
- `ginsengfood-business-platform` chỉ consume/check contract, không mutate ops-core truth.
- Ops-core không sở hữu customer, CRM, quote/cart/order final commerce, payment, shipping, ads, AI advisor, customer memory hoặc member/diamond benefit; nếu cần chỉ lưu reference key như `order_id`, `order_item_id`, `customer_id`, `shipment_id`.
- Sale Lock / Recall / Not Sellable thắng mọi downstream selling flow. Product Active không đồng nghĩa Sellable. SKU Active không đồng nghĩa có hàng bán.

## Nhóm Contract Chính

- `openapi/`: REST API contracts.
- `asyncapi/`: event bus contracts.
- `schemas/`: JSON Schema dùng chung cho request, response và event payload.
- `events/`: event payload contracts theo provider.
- `enums/`: enum chuẩn dùng chung.
- `state-machines/`: mô tả state machine và transition hợp lệ.
- `error-codes/`: chuẩn error code.
- `examples/`: request, response, event và error mẫu.
- `contract-tests/`: định hướng và tài sản phục vụ contract tests.
- `compatibility/`: chính sách compatibility, deprecation và version matrix.

## Review Và Breaking Change

Mọi thay đổi contract phải đi qua PR. Provider owner và consumer owner liên quan cần review, đặc biệt với breaking change. Breaking change phải có migration note, version mới và kế hoạch tương thích rõ ràng.
