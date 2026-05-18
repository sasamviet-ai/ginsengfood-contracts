# contract-tests/fixtures

Thư mục này dành cho fixtures dùng trong contract tests.

Người dùng chính là QA, backend và CI. Không đặt dữ liệu khách hàng thật, secret, production dump hoặc fixtures không khớp schema version vào đây.

Ví dụ file sau này: `order-v1.fixture.json`, `inventory-v1.fixture.json`, `payment-v1.fixture.json`. Fixture phải chỉ minh họa contract và cần version rõ.
