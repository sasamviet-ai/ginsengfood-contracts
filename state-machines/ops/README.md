# state-machines/ops

Thư mục này chứa state machine contract cho domain vận hành.

Người dùng chính là ops-core provider và business-platform consumer. Không đặt production workflow code, database transition script hoặc business rule engine vào đây.

Ví dụ file sau này: `qc-status-v1.md`, `batch-status-v1.md`, `recall-status-v1.md`, `sale-lock-status-v1.md`. Breaking transition change phải được review.
