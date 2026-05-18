# compatibility

Thư mục này chứa chính sách versioning và compatibility cho contract v1 giữa `ginsengfood-ops-core`, `ginsengfood-business-platform` và các consumer liên quan.

Nội dung trong thư mục này chỉ là contract governance: breaking change policy, deprecation policy, version matrix và consumer compatibility. Không đặt implementation workaround, migration SQL, deployment config, generated artifact hoặc business logic vào đây.

Các tài liệu hiện có:

- `breaking-change-policy.md`
- `deprecation-policy.md`
- `api-version-matrix.md`
- `event-version-matrix.md`
- `consumer-compatibility-matrix.md`

Mọi breaking change phải được review trước khi dùng trong provider hoặc consumer. Nếu tài liệu nguồn chưa đủ rõ, ghi TODO trong policy hoặc matrix thay vì tự suy diễn.
