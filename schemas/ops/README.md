# schemas/ops

Thư mục này chứa JSON Schema cho domain vận hành như Production, Batch, QC, Warehouse, Inventory, Trace, Recall và SaleLock.

Người dùng chính là ops-core provider và business-platform consumer khi cần dữ liệu vận hành. Không đặt workflow implementation, warehouse algorithm, QC business rule hoặc database migration vào đây.

Ví dụ file sau này: `batch-v1.schema.json`, `qc-result-v1.schema.json`, `inventory-position-v1.schema.json`, `trace-link-v1.schema.json`, `sale-lock-v1.schema.json`. Breaking change phải được review và tăng major version.
