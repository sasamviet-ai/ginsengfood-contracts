# Contract Principles

Contracts là giao ước chung giữa `ginsengfood-ops-core` và `ginsengfood-business-platform`, không phải nơi chứa business logic.

Nguyên tắc chính: contract-first, versioned, review trước breaking change, có schema/example cho interface quan trọng, và giữ backward compatibility khi có thể.

Không dùng tài liệu này để mô tả implementation nội bộ, database schema, secret hoặc config production.
