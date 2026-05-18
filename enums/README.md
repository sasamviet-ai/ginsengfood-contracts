# enums

Thư mục này chứa enum chuẩn dùng chung để tránh mỗi team tự đặt trạng thái khác nhau.

Người dùng chính là `ginsengfood-ops-core`, `ginsengfood-business-platform`, frontend, QA và contract tests. Không đặt business logic, code enum generated, database seed hoặc i18n label production vào đây.

Ví dụ enum sau này: `sellable-status`, `order-status`, `payment-status`, `qc-status`, `sale-lock-status`. Enum phải versioned khi publish; xóa hoặc đổi meaning enum value là breaking change.
