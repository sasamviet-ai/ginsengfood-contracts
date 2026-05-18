# API Version Matrix v1

All OpenAPI contracts use OpenAPI 3.1.0 and v1 paths. `info.version` remains `1.0.0` for the current contract generation.

## ops-core APIs

| API group | File | Version | Primary consumers | Compatibility notes |
| --- | --- | --- | --- | --- |
| Product master | `openapi/ops-core/product-master.v1.yaml` | v1 | ops-core frontend | Product activation does not imply sellable. |
| SKU | `openapi/ops-core/sku.v1.yaml` | v1 | ops-core frontend, business-platform | Public SKU reads must not expose operational sensitive data. |
| Ingredient | `openapi/ops-core/ingredient.v1.yaml` | v1 | ops-core frontend | Ingredient contracts remain ops-owned. |
| Recipe / formula / BOM | `openapi/ops-core/recipe-formula-bom.v1.yaml` | v1 | ops-core frontend | G0/G1/version, anchor rice, ratio, and BOM snapshot must stay distinct. |
| Product activation | `openapi/ops-core/product-activation.v1.yaml` | v1 | ops-core frontend | Activation is not sellable status. |
| Demand / MRP | `openapi/ops-core/demand-mrp.v1.yaml` | v1 | ops-core frontend, business-platform demand events | MRP output is not a purchase order by itself. |
| Production | `openapi/ops-core/production.v1.yaml` | v1 | ops-core frontend | Production order does not mutate inventory directly. |
| Material issue | `openapi/ops-core/material-issue.v1.yaml` | v1 | ops-core frontend | Material issue must keep evidence and source object references. |
| Batch / QC / release | `openapi/ops-core/batch-qc-release.v1.yaml` | v1 | ops-core frontend | `QC_PASS` and `RELEASED` must stay separate. |
| Warehouse | `openapi/ops-core/warehouse.v1.yaml` | v1 | ops-core frontend | Warehouse receipt requires released batch. |
| Inventory | `openapi/ops-core/inventory.v1.yaml` | v1 | ops-core frontend, business-platform | Consumers read stock balance; they must not mutate ledger truth. |
| Availability / sellable | `openapi/ops-core/availability-sellable.v1.yaml` | v1 | business-platform | `POST /v1/availability/check` is read/decision support, not mutation of ops truth. |
| Traceability | `openapi/ops-core/traceability.v1.yaml` | v1 | consumers, business-platform | Public trace must exclude internal operational data. |
| Recall / sale lock | `openapi/ops-core/recall-sale-lock.v1.yaml` | v1 | ops-core frontend, business-platform consumers | High-risk commands; active locks block commerce/channel flows. |
| Operational evidence | `openapi/ops-core/operational-evidence.v1.yaml` | v1 | ops-core frontend | Evidence references must remain auditable. |
| MISA handoff | `openapi/ops-core/misa-handoff.v1.yaml` | v1 | ops-core, integration consumers | MISA handoff does not modify operational truth. |

## business-platform APIs

| API group | File | Version | Primary consumers | Compatibility notes |
| --- | --- | --- | --- | --- |
| Catalog consumer | `openapi/business-platform/catalog-consumer.v1.yaml` | v1 | business-platform channels | Catalog reads rely on ops-core product/sku truth. |
| Availability consumer | `openapi/business-platform/availability-consumer.v1.yaml` | v1 | business-platform channels | Must respect ops-core sellable and sale-lock result. |
| Quote | `openapi/business-platform/quote.v1.yaml` | v1 | commerce runtime | QuoteSnapshot is not official order. |
| Cart | `openapi/business-platform/cart.v1.yaml` | v1 | commerce runtime | Cart is not official order or revenue. |
| Order | `openapi/business-platform/order.v1.yaml` | v1 | commerce runtime, ops-core events | Customer confirmation is required for official order. |
| Payment | `openapi/business-platform/payment.v1.yaml` | v1 | commerce runtime, accounting review | No paid status without confirmation source. |
| Shipping | `openapi/business-platform/shipping.v1.yaml` | v1 | commerce runtime | Shipping eligibility and fee must be resolved before official order flow proceeds. |
| Customer | `openapi/business-platform/customer.v1.yaml` | v1 | business-platform | Avoid sensitive data outside documented fields. |
| AI advisor | `openapi/business-platform/ai-advisor.v1.yaml` | v1 | business-platform channels | AI gives response instruction only; it is not source of truth. |
| Facebook gateway | `openapi/business-platform/facebook-gateway.v1.yaml` | v1 | business-platform channels | Public/private boundary must be preserved. |
| Ads measurement | `openapi/business-platform/ads-measurement.v1.yaml` | v1 | ads/analytics | Verified revenue must not come from ops-core. |
| MC AI Live | `openapi/business-platform/mc-ai-live.v1.yaml` | v1 | live commerce | No fake urgency; respect sale lock. |
| IVR confirmation | `openapi/business-platform/ivr-order-confirmation.v1.yaml` | v1 | IVR/order runtime | IVR result is input signal only. |
| Notification | `openapi/business-platform/notification.v1.yaml` | v1 | business-platform | Notification does not own order state. |

## TODO

- Source documents do not define real server URLs, authentication schemes, rate limits, or API deprecation windows.
