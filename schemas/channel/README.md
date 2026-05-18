# schemas/channel

Thư mục này chứa JSON Schema cho channel context như Facebook, Messenger và handoff context.

Người dùng chính là business-platform và các consumer cần hiểu nguồn tương tác khách hàng. Không đặt token, page secret, webhook implementation hoặc nội dung hội thoại production vào đây.

Ví dụ file sau này: `facebook-context-v1.schema.json`, `messenger-thread-v1.schema.json`, `handoff-context-v1.schema.json`. Schema phải versioned và tránh chứa dữ liệu nhạy cảm thật.
