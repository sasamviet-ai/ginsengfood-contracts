# asyncapi

Thư mục này chứa event bus contracts ở mức AsyncAPI cho các event liên hệ giữa `ginsengfood-ops-core` và `ginsengfood-business-platform`.

Người dùng chính là hai team backend, QA, DevOps và reviewer contract. Không đặt queue worker, broker config production, retry implementation, secret hoặc event payload schema chi tiết không thuộc AsyncAPI vào đây.

Ví dụ event sau này: `SkuBecameSellable`, `InventoryAvailableChanged`, `SaleLockActivated`, `OrderConfirmed`, `PaymentConfirmed`. Mỗi event phải có version rõ ràng như `eventVersion`; breaking change phải tăng major version và có migration note.
