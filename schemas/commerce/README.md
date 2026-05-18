# schemas/commerce

## Phase 3 contract scope

This folder contains Commerce Runtime v1 JSON Schemas for availability, QuoteSnapshot, Cart, Order Draft, Customer Confirmation, Official Order, Payment, Bank Transfer, Accounting Review, Shipping, Verified Revenue, Customer, and Member Benefit.

These files are contracts for business-platform providers and ops-core/ai/channel/ads/live/ivr consumers. They do not contain pricing engine code, checkout logic, payment gateway implementation, service logic, database migration, or business logic.

Required boundaries:
- QuoteSnapshot is the sole source for final price.
- Order Draft is not an Official Order and cannot issue an official order code before Customer Confirmation.
- Payment cannot be PAID without an allowed confirmation source; bank transfer requires Accounting Review.
- Verified Revenue is the only source for official Ads ROAS/KPI/commission measurement.

Compatibility: every schema uses `version: v1`. Adding optional fields is backward compatible; changing invariants, required fields, or meanings is breaking and must be documented in compatibility.

TODO:
- Source docs do not lock money precision, tax/discount line shape, full customer PII schema, carrier/method enum, bank account registry fields, member benefit taxonomy, or payment method enum.

Thư mục này chứa JSON Schema cho commerce domain như Quote, Cart, Order, Payment, Shipping và VerifiedRevenue.

Người dùng chính là business-platform provider và ops-core consumer khi cần đồng bộ demand, order, revenue hoặc shipping state. Không đặt checkout logic, payment gateway code, pricing engine hoặc database migration vào đây.

Ví dụ file sau này: `order-v1.schema.json`, `payment-v1.schema.json`, `shipping-v1.schema.json`, `verified-revenue-v1.schema.json`. Schema phải versioned.
