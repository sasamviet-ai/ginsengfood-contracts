# Event Design Standard

Tài liệu này định hướng cách thiết kế event contracts cho AsyncAPI và event payload.

Event phải có tên ổn định, `eventVersion`, correlation/audit metadata khi cần, và payload schema rõ. Ví dụ event liên hệ giữa hai hệ thống gồm `SkuBecameSellable`, `InventoryAvailableChanged`, `SaleLockActivated`, `OrderConfirmed`, `PaymentConfirmed`.

Không dùng event để sửa dữ liệu nguồn của hệ thống khác nếu contract không cho phép.
