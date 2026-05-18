# error-codes

Thư mục này chứa chuẩn error code để các API không trả lỗi ngẫu nhiên theo từng service.

Người dùng chính là `ginsengfood-ops-core`, `ginsengfood-business-platform`, frontend, QA và contract tests. Không đặt stack trace, log dump, exception implementation, secret hoặc error handling code vào đây.

Ví dụ file sau này: `common-errors-v1.md`, `ops-errors-v1.md`, `commerce-errors-v1.md`. Error code đã publish phải ổn định; xóa hoặc đổi meaning là breaking change và phải review.
