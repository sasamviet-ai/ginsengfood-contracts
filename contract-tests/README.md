# contract-tests

Thư mục này chứa định hướng và tài sản phục vụ contract testing giữa provider và consumer của `ginsengfood-ops-core`, `ginsengfood-business-platform` và các integration consumer.

Contract test dùng để kiểm provider/consumer có tuân thủ OpenAPI, AsyncAPI, JSON Schema, event payload, error envelope và compatibility rule đã công bố hay không. Test không thay thế unit test, integration test nội bộ hoặc business rule trong application.

Giai đoạn đầu có thể dùng Postman collection và fixture JSON trong repo để kiểm các request/response/event quan trọng. Giai đoạn sau có thể dùng Pact hoặc công cụ tương đương để quản lý provider/consumer verification chính thức.

Hiện chưa tạo test thật. Không đặt application implementation, dependency package, generated SDK, migration, secret hoặc production config vào đây.

Các nhóm dự kiến:

- `fixtures/`: dữ liệu mẫu dùng lại cho provider/consumer verification.
- `postman/`: collection hoặc environment cho giai đoạn đầu.
- `pact/`: contract pact cho giai đoạn sau nếu có policy.

TODO: Chưa có toolchain chính thức, CI gate, provider registry hoặc consumer ownership registry.
