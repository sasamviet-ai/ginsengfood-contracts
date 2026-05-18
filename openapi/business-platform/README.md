# openapi/business-platform

Thu muc nay chua OpenAPI v1 contracts do `ginsengfood-business-platform` expose cho frontend, kenh ban hang, AI/channel modules, va cac consumer hop le khac. Day chi la contract, khong chua implementation code, service logic, secret, production config, migration, hoac generated SDK.

## API Groups

| File | API group | Scope |
| --- | --- | --- |
| `catalog-consumer.v1.yaml` | Catalog consumer | Adapter/read contract de lay public SKU va operational status tu ops-core boundary. |
| `availability-consumer.v1.yaml` | Availability consumer | Check sellable/stock/hold/trace readiness qua ops-core, khong mutate ops-core truth. |
| `quote.v1.yaml` | Quote | QuoteSnapshot la nguon gia cuoi cung cho commerce flow. |
| `cart.v1.yaml` | Cart | Cart contract truoc Order Draft, khong phai official order. |
| `order.v1.yaml` | Order | Order Draft, Customer Confirmation, Official Order. |
| `payment.v1.yaml` | Payment | Payment reference, bank transfer, accounting review; khong PAID neu chua co confirmation/review phu hop. |
| `shipping.v1.yaml` | Shipping | Shipping eligibility, COD, ETA, tracking reference. |
| `customer.v1.yaml` | Customer | Customer read va member benefit read cho quote/order flow. |
| `ai-advisor.v1.yaml` | AI Advisor | Nhan channel context, tra response instruction/handoff; khong la source-of-truth. |
| `facebook-gateway.v1.yaml` | Facebook Gateway | Public/private boundary, comment-to-messenger handoff, human takeover, delivery. |
| `ads-measurement.v1.yaml` | Ads Measurement | Raw funnel, verified revenue link, ROAS, scale gate. |
| `mc-ai-live.v1.yaml` | MC AI Live | Live plan, host cue, risk cue, private handoff cue. |
| `ivr-order-confirmation.v1.yaml` | IVR Order Confirmation | IVR chi cho official order confirmation. |
| `notification.v1.yaml` | Notification | Reserved cancellation notice handoff sau core order cancellation. |

## Co The Duoc ops-core Goi

- `GET /v1/orders/{orderId}`: doc official order contract khi can doi chieu order state.
- `GET /v1/payments/{paymentId}`: doc payment reference/review status khi can doi chieu commerce payment.
- `POST /v1/notifications/cancellation-notices`: reserved handoff sau khi core order state machine da quyet dinh cancellation.
- Cac endpoint khac chi nen duoc ops-core goi neu source document sau nay mo rong integration policy ro rang.

## Business-platform Noi Bo

- Quote/cart/order draft/customer confirmation/payment/shipping/customer member benefit phuc vu Commerce Runtime.
- AI Advisor, Facebook Gateway, Ads Measurement, MC AI Live, IVR call job/attempt/result la cac contract noi bo business-platform hoac channel-adapter.
- `notification.v1.yaml` dang reserved vi source documents chua dinh nghia notification schema tong quat.

## Boundary Khong Duoc Vuot

- Business-platform duoc check availability/sellable nhung khong mutate stock, quality hold, recall hold, sale lock, trace readiness, inventory ledger, hoac ops-core master data.
- QuoteSnapshot la nguon gia cuoi cung; cart/order draft khong duoc thay the official customer confirmation.
- Payment khong duoc thanh PAID neu thieu customer confirmation va accounting review theo tai lieu.
- AI Advisor khong duoc tu tao source-of-truth cho price, stock, order, payment, revenue, claim, hoac private data.
- Facebook Gateway phai giu public/private boundary; human takeover phai tam dung automation phu hop.
- Ads ROAS/KPI chi dung verified revenue; raw funnel, pending order, unpaid order, quote, cart, draft khong phai verified revenue.
- MC AI Live khong duoc tao fake urgency, fake scarcity, hoac public order closing.
- IVR chi la order confirmation input signal, khong truc tiep huy order, update payment, tao revenue, gui notification, hay tao MISA/warehouse action.

## Compatibility

Tat ca file la v1 contracts. Breaking change phai duoc ghi vao compatibility notes va provider/consumer review truoc khi ap dung.
