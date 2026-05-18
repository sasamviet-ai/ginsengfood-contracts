# events/business-platform

Events published by `ginsengfood-business-platform`.

Consumer chinh la `ginsengfood-ops-core`, Ads/measurement, IVR, shipping/payment integrations, va contract tests. Khong dat Spring Boot handler, commerce service logic, payment gateway code, secret, hay broker config vao day.

## Groups

- `order`: Official Order lifecycle events. Order Draft is not Official Order.
- `payment`: payment reference and confirmed/failed payment signals.
- `shipping`: shipping lifecycle and delivery issue signals.
- `demand`: sales/campaign/dealer demand signals for ops-core review, not Production Order commands.
- `ads`: verified revenue, attribution, and scale gate events.
- `ivr`: order confirmation request/result signals; IVR result is input signal only.

## Ops-core External Boundary With ginsengfood-business-platform

Ops-core consume boundary events:

| Event | File | Ops-core usage boundary |
|---|---|---|
| `OrderCreated` | `order/order-created.v1.json` | Reference/allocation context only. |
| `OrderConfirmed` | `order/order-confirmed.v1.json` | Fulfillment/allocation boundary input if ops-core needs it. |
| `OrderCancelled` | `order/order-cancelled.v1.json` | Allocation release/suppression reference if applicable. |
| `OrderReadyForFulfillment` | `order/order-ready-for-fulfillment.v1.json` | Fulfillment readiness input only. |
| `OrderDelivered` | `order/order-delivered.v1.json` | Trace/exposure reference only where required. |
| `SalesDemandCreated` | `demand/sales-demand-created.v1.json` | Demand Board input only. |
| `CampaignDemandForecasted` | `demand/campaign-demand-forecasted.v1.json` | Forecast input for Demand/MRP only. |
| `DealerOrderDemandCreated` | `demand/dealer-order-demand-created.v1.json` | Dealer demand input only. |

Ops-core không sở hữu customer, CRM, quote/cart/order final commerce, payment, shipping, ads, AI advisor, customer memory hoặc member/diamond benefit. Nếu cần liên kết, ops-core chỉ lưu reference key như `order_id`, `order_item_id`, `customer_id`, `shipment_id`.
