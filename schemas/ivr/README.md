# schemas/ivr

## Phase 3 contract scope

This folder contains IVR v1 JSON Schemas for call jobs, call attempts, call results, and cancellation notices.

These files are contracts only. They do not contain telephony provider code, SIM gateway code, notification implementation, service logic, database migration, or business logic.

Required boundaries:
- IVR is ORDER_CONFIRMATION_ONLY.
- IVR is not sales, CRM, marketing, payment, delivery, warehouse, MISA, or ROAS.
- IVR result is an input signal only; it cannot directly update order state, cancel orders, confirm payment, confirm verified revenue, or send notifications by itself.
- Technical exceptions, capacity exceptions, invalid phone, busy, rejected, and unreachable must not be treated as no-answer unless source policy explicitly allows it.

TODO:
- PACK-09 describes program-based attempts, while TECH-09 V1.0 locks baseline MAX_ATTEMPT_PER_ORDER = 2. Resolve this in Phase 7 state machines/compatibility.
- Source docs do not lock notification channel payload schema or final IVR job status enum.

Thư mục này chứa JSON Schema cho IVR như call job, call result, attempt và cancellation notice.

Người dùng chính là business-platform IVR và consumer cần trạng thái gọi tự động. Không đặt telephony credential, audio file, provider SDK code hoặc call routing implementation vào đây.

Ví dụ file sau này: `call-job-v1.schema.json`, `call-result-v1.schema.json`, `call-attempt-v1.schema.json`, `cancellation-notice-v1.schema.json`. Schema phải versioned và breaking change phải được review.
