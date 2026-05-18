# events/business-platform/demand

Thư mục này dành cho demand events phát ra từ `ginsengfood-business-platform`.

Consumer chính là ops-core MRP, production planning hoặc inventory planning. Không đặt forecasting model, campaign planning logic hoặc production scheduling implementation vào đây.

Ví dụ file sau này: `demand-signal-created-v1.schema.json`, `demand-forecast-updated-v1.schema.json`. Event payload phải versioned.
