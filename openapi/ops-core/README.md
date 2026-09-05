# openapi/ops-core

## Ops Core OpenAPI

Thu muc nay chua OpenAPI 3.1.0 contracts cho `ginsengfood-ops-core`. Phần lớn surface hiện ở v1; Availability / Sellable và Operational Forms có v2 riêng. Cac file chi mo ta API contract giua systems/frontend; khong chua implementation code, client SDK, database migration, service logic hoac business logic.

API groups:
- Product Master: `product-master.v1.yaml`
- SKU: `sku.v1.yaml`
- Ingredient: `ingredient.v1.yaml`
- Recipe / Formula / BOM v1 compatibility: `recipe-formula-bom.v1.yaml`
- Recipe / Formula v2 contract candidate (runtime blocked by X04): `recipe-formula-bom.v2.yaml`
- Product Activation: `product-activation.v1.yaml`
- Demand / MRP: `demand-mrp.v1.yaml`
- Production: `production.v1.yaml`
- Material Issue / Receipt: `material-issue.v1.yaml`
- Batch / QC / Release: `batch-qc-release.v1.yaml`
- Warehouse: `warehouse.v1.yaml`
- Inventory: `inventory.v1.yaml`
- Availability / Sellable v1 compatibility: `availability-sellable.v1.yaml`
- Availability / Sellable v2 conservative contract: `availability-sellable.v2.yaml`
- Traceability: `traceability.v1.yaml`
- Recall / Sale Lock: `recall-sale-lock.v1.yaml`
- Operational Evidence / Forms: `operational-evidence.v1.yaml`
- Operational Admin / Appendix Forms / Print / MISA: `operational-admin.v1.yaml`
- Operational Forms v2 (`form_key`, không major-version print/MISA/material planning): `operational-forms.v2.yaml`
- MISA Handoff: `misa-handoff.v1.yaml`
- Service Authentication: `service-auth.v1.yaml`

## Ops-core External Boundary With ginsengfood-business-platform

Ops-core expose API:

| API | Contract file | Boundary lock |
|---|---|---|
| Product Public API | `product-master.v1.yaml`, `sku.v1.yaml` | Protected M2M projection; exact `PRODUCT_PUBLIC_VIEW` allowlist only, không fallback sang internal SKU/formula/BOM. |
| SKU Detail API | `sku.v1.yaml` | SKU Active không đồng nghĩa có hàng bán. |
| Product Activation Status API | `product-activation.v1.yaml` | Product Active không đồng nghĩa Sellable. |
| Recipe / Formula read API | `recipe-formula-bom.v1.yaml`, `recipe-formula-bom.v2.yaml` | v1 Recipe/Formula operations frozen/deprecated; v2 uses canonical lifecycle plus separate formula_kind and remains contract-only until X04 and consumer gates close. |
| Availability / Sellable Check API | `availability-sellable.v1.yaml`, `availability-sellable.v2.yaml` | Read/check only; v1 frozen, v2 exact-UOM and fail-closed; no reservation or mutation. |
| Inventory external reads | `inventory.v1.yaml` | Stock balance, ledger, stock alert và allocation là read-only projections; ledger remains ops-core truth. |
| Warehouse external reads | `warehouse.v1.yaml` | Warehouse, location và receipt projections không thực hiện command hoặc ledger mutation. |

The 24 implemented external v1 operations declare exact X04D operation-level auth class, audience, token-use disposition, permission/scope, rate/retry policy, idempotency disposition, runtime policy, owner-decision reference, and `429 RATE_LIMITED` response metadata. Operator rate policies remain contract-approved but are explicitly marked as not yet implemented at runtime.
| Trace Public API | `traceability.v1.yaml` | Whitelist-only public fields. |
| Recall Status API | `recall-sale-lock.v1.yaml` | Recall blocks downstream flow where applicable. |
| Sale Lock Status API | `recall-sale-lock.v1.yaml` | Sale Lock wins every downstream selling flow. |
| Service Token API | `service-auth.v1.yaml` | Client credentials only; short-lived bearer, no refresh token, generic invalid-client failure. |

Boundary locks:

- `ginsengfood-business-platform` chỉ consume/check contract, không mutate ops-core truth.
- Ops-core không sở hữu customer, CRM, quote/cart/order final commerce, payment, shipping, ads, AI advisor, customer memory hoặc member/diamond benefit.
- Ops-core chỉ lưu reference key nếu cần: `order_id`, `order_item_id`, `customer_id`, `shipment_id`.

API phuc vu business-platform:
- `POST /v1/service-tokens`
- `POST /v1/availability/check`
- `POST /v2/availability/check`
- `GET /v1/skus/{skuId}/public`
- `GET /v1/skus/{skuId}/operational-status`
- `GET /v1/inventory/stock-balances`
- `GET /v1/inventory/ledger`
- `GET /v1/inventory/stock-alerts`
- `GET /v1/inventory/allocations`
- `GET /v1/warehouses`
- `GET /v1/warehouse-locations`
- `GET /v1/warehouse-receipts`
- `GET /v1/trace/public/{qrCode}`
- `GET /v1/misa-handoffs` va `GET /v1/misa-handoffs/{misaHandoffId}` neu co quyen integration review

API phuc vu ops-core frontend:
- Product/SKU/Ingredient/Recipe/Formula/BOM read APIs
- Product Activation create/read APIs
- Demand/MRP create/read APIs
- Production, Material Issue/Receipt, Batch/QC/Release, Warehouse APIs
- Inventory ledger, stock balance, stock alert read APIs
- Trace chain internal API
- Operational Evidence/Form v1 APIs remain deprecated compatibility surfaces.
- Operational Forms v2 APIs use canonical `form_key` and cover all 32 read/history keys; 31 keys are active and `AFTER_DRYING_QC` is read-only retired history.
- Print/reprint, material planning policy, and MISA sync requests remain v1 and are not implicitly versioned by the Operational Forms v2 file.
- MISA handoff create/read APIs

High-risk APIs:
- `POST /v1/service-tokens` (authentication-sensitive rate limit; client secret and access token must never be logged or cached)
- `POST /v1/recall-cases`
- `POST /v1/sale-locks`
- `POST /v1/batch-releases`
- `POST /v1/material-issues`
- `POST /v1/warehouse-receipts`
- `POST /v1/misa-handoffs` when it creates accounting integration handoff from an operational checkpoint
- `POST /v1/admin/operational/*` when it creates or transitions a high-risk operational form
- `POST /v1/admin/operational/print-jobs/{printJobId}/reprint`
- `POST /v1/admin/operational/misa-handoffs/{misaHandoffId}/sync`

Boundary notes:
- `/v1/service-tokens` is the M2M authentication bootstrap for approved root `/v1/*` consumers; it is not an internal user/admin login and does not issue refresh tokens.
- business-platform may check sellable/availability but must not mutate ops-core truth.
- Inventory Ledger is append-only and has no direct consumer mutation API in Phase 4.
- Sale Lock / Recall wins over Product Activation, channels, quote/order, and field actions.
- QC_PASS is not RELEASED.
- Product Activation is not Sellable.

TODO:
- Source docs do not lock every search/filter parameter, every public projection shape, per-form transition matrix, MISA target module payload, warehouse taxonomy, or recall severity model. These remain TODO comments in the relevant OpenAPI descriptions.

Thư mục này dành cho REST API contracts do `ginsengfood-ops-core` expose cho `ginsengfood-business-platform` hoặc consumer hợp lệ khác.

Người dùng chính là team ops-core khi publish API và team business-platform khi consume API. Không đặt implementation .NET, database migration, secret, production config hoặc mock server code vào đây.

Ví dụ file sau này: `product-v1.yaml`, `inventory-v1.yaml`, `recall-v1.yaml`, `misa-handoff-v1.yaml`. API breaking change phải tạo major version mới hoặc có migration path được review.
