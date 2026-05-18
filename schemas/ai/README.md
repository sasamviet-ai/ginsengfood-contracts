# schemas/ai

Thư mục này chứa JSON Schema cho AI intent, response instruction và claim guard result.

Người dùng chính là business-platform, AI Advisor và consumer cần kiểm soát contract AI output. Không đặt prompt secret, model config production, inference implementation hoặc policy runtime vào đây.

Ví dụ file sau này: `ai-intent-v1.schema.json`, `response-instruction-v1.schema.json`, `claim-guard-result-v1.schema.json`. Schema phải versioned; breaking change cần review consumer.
