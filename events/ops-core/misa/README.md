# events/ops-core/misa

Thư mục này dành cho event contract liên quan MISA accounting handoff từ `ginsengfood-ops-core`.

Người dùng chính là ops-core và consumer cần audit trạng thái handoff. Không đặt credential, accounting implementation, export file thật hoặc production config vào đây.

Ví dụ file sau này: `misa-handoff-requested-v1.schema.json`, `misa-handoff-completed-v1.schema.json`, `misa-handoff-failed-v1.schema.json`. Event phải versioned và có audit/correlation khi cần.
