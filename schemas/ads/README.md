# schemas/ads

## Phase 3 contract scope

This folder contains Ads Measurement v1 JSON Schemas for attribution, funnel events, verified revenue link, ROAS measurement, scale gate, and data quality status.

These files are contracts only. They do not contain attribution algorithms, BI/reporting implementation, ad platform integration code, service logic, database migration, or business logic.

Required boundaries:
- Raw events, comments, inbox, quote, cart, order draft, unpaid order, and pending revenue are not verified revenue.
- Official ROAS must use Commerce Verified Revenue.
- Attribution conflict must be explicit.
- Scale Gate requires data quality, verified revenue, clear attribution, and owner decision.

TODO:
- Source docs do not lock full attribution rule schema, data quality enum, funnel stage enum, conflict enum, scale threshold fields, or official calculation precision.

Thư mục này chứa JSON Schema cho attribution, funnel, ROAS và scale gate.

Người dùng chính là business-platform, ads measurement và consumer phân tích doanh thu. Không đặt ad account secret, campaign runtime config, tracking pixel code hoặc report export thật vào đây.

Ví dụ file sau này: `attribution-v1.schema.json`, `funnel-stage-v1.schema.json`, `roas-snapshot-v1.schema.json`, `scale-gate-v1.schema.json`. Schema phải versioned.
