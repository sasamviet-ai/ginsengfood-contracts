# events/business-platform/ads

Thư mục này dành cho ads measurement events phát ra từ `ginsengfood-business-platform`.

Consumer có thể là ops-core hoặc analytics pipeline khi cần ROAS, attribution hoặc scale gate signal. Không đặt ad account secret, pixel code, campaign runtime config hoặc raw report dump vào đây.

Ví dụ file sau này: `attribution-updated-v1.schema.json`, `scale-gate-passed-v1.schema.json`, `roas-snapshot-created-v1.schema.json`. Event payload phải versioned.
