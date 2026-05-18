# examples/errors

Thư mục này chứa response lỗi mẫu theo chuẩn error code.

Người dùng chính là backend, frontend, QA và contract test. Không đặt stack trace production, secret, PII hoặc log dump vào đây.

Ví dụ file sau này: `validation-error-v1.example.json`, `idempotency-conflict-v1.example.json`, `sale-lock-active-v1.example.json`. Example phải khớp version error contract.
