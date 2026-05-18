# scripts

Thư mục này dành cho script validate, lint, generate hoặc kiểm breaking change của contract trong tương lai.

Hiện chỉ có README, chưa tạo script thật vì repo chưa có toolchain chính thức. Không đặt business logic, production config, secret, one-off data migration, service logic hoặc deployment automation vào đây.

Script tương lai có thể gồm:

- `validate-openapi`
- `validate-asyncapi`
- `validate-json-schema`
- `lint-contracts`
- `check-breaking-changes`
- `generate-dotnet-client`
- `generate-java-client`
- `generate-typescript-client`

Mọi script phải chỉ phục vụ contract lifecycle và không thay thế review breaking change trong `compatibility/`.

TODO: Chưa có lựa chọn toolchain, package manager, CI entrypoint hoặc generator chuẩn.
