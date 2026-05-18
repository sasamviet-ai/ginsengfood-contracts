# events/ops-core/recall

Thư mục này dành cho recall events phát ra từ `ginsengfood-ops-core`.

Consumer chính là business-platform để khóa bán, thông báo hoặc hỗ trợ truy vết đơn hàng liên quan. Không đặt recall workflow implementation, customer notification code hoặc trace query logic vào đây.

Ví dụ file sau này: `recall-opened-v1.schema.json`, `recall-expanded-v1.schema.json`, `recall-closed-v1.schema.json`. Event payload phải versioned.
