# examples/events

Thư mục này chứa event payload mẫu.

Người dùng chính là producer, consumer, QA và contract test. Không đặt event log production, broker config, handler code hoặc dữ liệu nhạy cảm thật vào đây.

Ví dụ file sau này: `sku-became-sellable-v1.example.json`, `order-confirmed-v1.example.json`, `payment-confirmed-v1.example.json`. Example phải khớp event version.
