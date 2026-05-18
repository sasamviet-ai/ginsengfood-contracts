# events/business-platform

Thư mục này chứa event payload contracts phát ra từ `ginsengfood-business-platform`.

Consumer chính là `ginsengfood-ops-core` và các contract tests liên quan. Không đặt Spring Boot handler, commerce service logic, payment gateway code, secret hoặc broker config vào đây.

Ví dụ nhóm event: order, payment, shipping, demand, ads và IVR. Event breaking change phải tăng major version hoặc có migration path được review.
