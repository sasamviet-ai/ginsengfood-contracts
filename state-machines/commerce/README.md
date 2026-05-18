# state-machines/commerce

Thư mục này chứa state machine contract cho commerce domain.

Người dùng chính là business-platform provider và ops-core consumer. Không đặt order service code, payment orchestration, shipping integration hoặc database migration vào đây.

Ví dụ file sau này: `order-status-v1.md`, `payment-status-v1.md`, `shipping-status-v1.md`. Transition hoặc terminal state thay đổi có thể là breaking change.
