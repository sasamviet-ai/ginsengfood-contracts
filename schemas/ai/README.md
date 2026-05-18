# schemas/ai

## Phase 3 contract scope

This folder contains AI Advisor v1 JSON Schemas for intent, response instruction, product recommendation, claim guard result, customer memory reference, and order draft handoff.

These files are contracts only. They do not contain prompts, model code, retrieval logic, service logic, database migration, or business logic.

Required boundaries:
- AI is not source of truth for price, stock, order, payment, revenue, claims, or private data.
- Final price requires QuoteSnapshot.
- Official Order creation requires Commerce Runtime and Customer Confirmation.
- AI must hand off for low confidence, complaints, legal/media, payment dispute, privacy deletion, quality/adverse event, or active human takeover.

TODO:
- Source docs do not lock complete intent taxonomy, recommendation status enum, claim category enum, memory consent/status taxonomy, or AI-Commerce handoff status enum.

Thư mục này chứa JSON Schema cho AI intent, response instruction và claim guard result.

Người dùng chính là business-platform, AI Advisor và consumer cần kiểm soát contract AI output. Không đặt prompt secret, model config production, inference implementation hoặc policy runtime vào đây.

Ví dụ file sau này: `ai-intent-v1.schema.json`, `response-instruction-v1.schema.json`, `claim-guard-result-v1.schema.json`. Schema phải versioned; breaking change cần review consumer.
