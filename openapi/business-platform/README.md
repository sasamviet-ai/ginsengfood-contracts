# openapi/business-platform

Thư mục này dành cho REST API contracts do `ginsengfood-business-platform` expose cho `ginsengfood-ops-core` hoặc consumer hợp lệ khác.

Người dùng chính là team business-platform khi publish API và team ops-core khi consume API. Không đặt implementation Spring Boot, Next.js route code, secret, production config hoặc generated SDK vào đây.

Ví dụ file sau này: `order-v1.yaml`, `payment-v1.yaml`, `shipping-v1.yaml`, `ai-advisor-v1.yaml`. API phải versioned và breaking change phải được provider/consumer review.
