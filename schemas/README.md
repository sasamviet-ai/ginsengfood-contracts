# schemas

Thư mục này chứa JSON Schema dùng chung cho request, response và event payload giữa `ginsengfood-ops-core` và `ginsengfood-business-platform`.

Người dùng chính là backend, frontend, QA, contract test và generated model pipeline nếu sau này có policy. Không đặt database schema, ORM model, business logic, migration, generated code hoặc config production vào đây.

Mọi schema phải versioned khi được tạo. Schema có thể được nhóm theo domain: `common/`, `product/`, `ops/`, `commerce/`, `channel/`, `ai/`, `ads/`, `live/`, `ivr/`.
