# openapi/ops-core

## Phase 4 - Ops Core OpenAPI v1

Thu muc nay chua OpenAPI 3.1.0 v1 contracts cho `ginsengfood-ops-core`. Cac file chi mo ta API contract giua systems/frontend; khong chua implementation code, client SDK, database migration, service logic hoac business logic.

API groups:
- Product Master: `product-master.v1.yaml`
- SKU: `sku.v1.yaml`
- Ingredient: `ingredient.v1.yaml`
- Recipe / Formula / BOM: `recipe-formula-bom.v1.yaml`
- Product Activation: `product-activation.v1.yaml`
- Demand / MRP: `demand-mrp.v1.yaml`
- Production: `production.v1.yaml`
- Material Issue / Receipt: `material-issue.v1.yaml`
- Batch / QC / Release: `batch-qc-release.v1.yaml`
- Warehouse: `warehouse.v1.yaml`
- Inventory: `inventory.v1.yaml`
- Availability / Sellable: `availability-sellable.v1.yaml`
- Traceability: `traceability.v1.yaml`
- Recall / Sale Lock: `recall-sale-lock.v1.yaml`
- Operational Evidence / Forms: `operational-evidence.v1.yaml`
- MISA Handoff: `misa-handoff.v1.yaml`

## Ops-core External Boundary With ginsengfood-business-platform

Ops-core expose API:

| API | Contract file | Boundary lock |
|---|---|---|
| Product Public API | `product-master.v1.yaml`, `sku.v1.yaml` | Public-safe projection only. |
| SKU Detail API | `sku.v1.yaml` | SKU Active không đồng nghĩa có hàng bán. |
| Product Activation Status API | `product-activation.v1.yaml` | Product Active không đồng nghĩa Sellable. |
| Availability / Sellable Check API | `availability-sellable.v1.yaml` | Read/check only; no reservation or mutation. |
| Stock Balance API | `inventory.v1.yaml` | Derived stock balance only; ledger remains ops-core truth. |
| Trace Public API | `traceability.v1.yaml` | Whitelist-only public fields. |
| Recall Status API | `recall-sale-lock.v1.yaml` | Recall blocks downstream flow where applicable. |
| Sale Lock Status API | `recall-sale-lock.v1.yaml` | Sale Lock wins every downstream selling flow. |

Boundary locks:

- `ginsengfood-business-platform` chỉ consume/check contract, không mutate ops-core truth.
- Ops-core không sở hữu customer, CRM, quote/cart/order final commerce, payment, shipping, ads, AI advisor, customer memory hoặc member/diamond benefit.
- Ops-core chỉ lưu reference key nếu cần: `order_id`, `order_item_id`, `customer_id`, `shipment_id`.

API phuc vu business-platform:
- `POST /v1/availability/check`
- `GET /v1/skus/{skuId}/public`
- `GET /v1/skus/{skuId}/operational-status`
- `GET /v1/inventory/stock-balances`
- `GET /v1/trace/public/{qrCode}`
- `GET /v1/misa-handoffs` va `GET /v1/misa-handoffs/{misaHandoffId}` neu co quyen integration review

API phuc vu ops-core frontend:
- Product/SKU/Ingredient/Recipe/Formula/BOM read APIs
- Product Activation create/read APIs
- Demand/MRP create/read APIs
- Production, Material Issue/Receipt, Batch/QC/Release, Warehouse APIs
- Inventory ledger, stock balance, stock alert read APIs
- Trace chain internal API
- Operational Evidence/Form APIs
- MISA handoff create/read APIs

High-risk APIs:
- `POST /v1/recall-cases`
- `POST /v1/sale-locks`
- `POST /v1/batch-releases`
- `POST /v1/material-issues`
- `POST /v1/warehouse-receipts`
- `POST /v1/misa-handoffs` when it creates accounting integration handoff from an operational checkpoint

Boundary notes:
- business-platform may check sellable/availability but must not mutate ops-core truth.
- Inventory Ledger is append-only and has no direct consumer mutation API in Phase 4.
- Sale Lock / Recall wins over Product Activation, channels, quote/order, and field actions.
- QC_PASS is not RELEASED.
- Product Activation is not Sellable.

TODO:
- Source docs do not lock every search/filter parameter, public projection shape, state transition, MISA checkpoint enum, warehouse taxonomy, recall severity model, or availability-check request schema. These remain TODO comments in the relevant OpenAPI descriptions.

Thư mục này dành cho REST API contracts do `ginsengfood-ops-core` expose cho `ginsengfood-business-platform` hoặc consumer hợp lệ khác.

Người dùng chính là team ops-core khi publish API và team business-platform khi consume API. Không đặt implementation .NET, database migration, secret, production config hoặc mock server code vào đây.

Ví dụ file sau này: `product-v1.yaml`, `inventory-v1.yaml`, `recall-v1.yaml`, `misa-handoff-v1.yaml`. API breaking change phải tạo major version mới hoặc có migration path được review.
