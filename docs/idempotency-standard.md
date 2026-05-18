# Idempotency Standard

Tài liệu này định hướng cách dùng idempotency cho API/event có khả năng retry.

Contract nên mô tả idempotency key, phạm vi key, TTL, behavior khi request lặp lại và error khi key conflict. Quy tắc này đặc biệt quan trọng với order, payment, shipping, inventory và MISA handoff.

Không đặt implementation retry, queue worker hoặc storage strategy vào đây.
