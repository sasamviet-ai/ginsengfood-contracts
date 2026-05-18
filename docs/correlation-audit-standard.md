# Correlation And Audit Standard

Tài liệu này định hướng metadata correlation và audit dùng chung giữa hai repo.

API/event nên có correlation id, causation id, actor, source system và timestamp khi cần trace end-to-end giữa `ginsengfood-ops-core` và `ginsengfood-business-platform`.

Không đặt log format production, secret, token hoặc observability config vào tài liệu này.
