# state-machines

Thư mục này chứa mô tả state machine bằng Markdown để hai team hiểu trạng thái và transition hợp lệ.

Người dùng chính là `ginsengfood-ops-core`, `ginsengfood-business-platform`, QA và reviewer contract. Không đặt implementation code, workflow engine config, database migration hoặc runtime rule vào đây.

Ví dụ file sau này: `order-state-machine-v1.md`, `payment-state-machine-v1.md`, `sale-lock-state-machine-v1.md`. State machine phải versioned nếu được dùng như contract.
