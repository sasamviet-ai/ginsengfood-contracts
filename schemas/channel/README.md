# schemas/channel

## Phase 3 contract scope

This folder contains Channel Gateway v1 JSON Schemas for channel context, Facebook comments, Messenger threads, comment-to-Messenger handoff, human takeover, and channel delivery.

These files are contracts only. They do not contain Facebook SDK code, Messenger routing implementation, delivery retries, service logic, database migration, or business logic.

Required boundaries:
- Public comments and private Messenger contexts must not be mixed.
- Public replies must not expose private quote, order, payment, delivery, or customer data.
- Private handoff failure must not be reported as success.
- AI must pause when human takeover is active.

TODO:
- Source docs do not lock all channel payload fields, human takeover reason taxonomy, or structured delivery target schema.

Thư mục này chứa JSON Schema cho channel context như Facebook, Messenger và handoff context.

Người dùng chính là business-platform và các consumer cần hiểu nguồn tương tác khách hàng. Không đặt token, page secret, webhook implementation hoặc nội dung hội thoại production vào đây.

Ví dụ file sau này: `facebook-context-v1.schema.json`, `messenger-thread-v1.schema.json`, `handoff-context-v1.schema.json`. Schema phải versioned và tránh chứa dữ liệu nhạy cảm thật.
