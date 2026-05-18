# schemas/ivr

Thư mục này chứa JSON Schema cho IVR như call job, call result, attempt và cancellation notice.

Người dùng chính là business-platform IVR và consumer cần trạng thái gọi tự động. Không đặt telephony credential, audio file, provider SDK code hoặc call routing implementation vào đây.

Ví dụ file sau này: `call-job-v1.schema.json`, `call-result-v1.schema.json`, `call-attempt-v1.schema.json`, `cancellation-notice-v1.schema.json`. Schema phải versioned và breaking change phải được review.
