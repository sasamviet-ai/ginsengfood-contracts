# Governance

`ginsengfood-contracts` là giao ước chung giữa `ginsengfood-ops-core` và `ginsengfood-business-platform`. Thay đổi contract phải được quản trị như thay đổi public interface.

## Review Rules

- Contract thay đổi phải có PR.
- Ít nhất owner của provider và consumer liên quan phải review.
- Breaking change phải có migration note.
- Contract phải có example trước khi dùng production.
- API/event quan trọng phải có schema.
- Không merge contract nếu chưa rõ version và compatibility impact.

## Ownership

Provider chịu trách nhiệm tính đúng đắn của contract mình expose hoặc publish. Consumer chịu trách nhiệm xác nhận contract có đủ dữ liệu và tương thích với flow tiêu thụ.

## Không Đặt Trong Repo Này

Không đặt business logic, database migration, secret, production config, generated code bắt buộc hoặc implementation code vào repo này.
