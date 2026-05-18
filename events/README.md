# events

Thư mục này chứa event payload contracts theo provider giữa `ginsengfood-ops-core` và `ginsengfood-business-platform`.

Người dùng chính là backend producer/consumer, QA và contract test. Không đặt queue worker, handler implementation, broker config production, secret hoặc event log thật vào đây.

`events/ops-core/` là event phát ra từ ops-core. `events/business-platform/` là event phát ra từ business-platform. Event không được dùng để sửa dữ liệu nguồn của hệ thống khác nếu contract không cho phép. Mọi event payload phải versioned.
