# events/ops-core

Thư mục này chứa event payload contracts phát ra từ `ginsengfood-ops-core`.

Consumer chính là `ginsengfood-business-platform` và các contract tests liên quan. Không đặt .NET handler, domain service, database migration hoặc event bus config vào đây.

Ví dụ nhóm event: product, inventory, sellable, recall và MISA handoff. Event breaking change phải tăng major version hoặc publish event mới có migration note.
