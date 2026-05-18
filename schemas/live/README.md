# schemas/live

## Phase 3 contract scope

This folder contains MC AI Live v1 JSON Schemas for live plan, host cue, live risk cue, live measurement event, and private handoff cue.

These files are contracts only. They do not contain live streaming implementation, script generation, host assistant code, service logic, database migration, or business logic.

Required boundaries:
- Live requires Live Plan, product scope, script brief, stock/sellable guard, recall/sale-lock guard, claim guard, privacy guard, and fake urgency guard.
- Host cues cannot sell out-of-scope or not-sellable SKUs.
- Live cannot create fake urgency/scarcity and cannot close orders publicly.
- Live measurement signals are not verified revenue by themselves.

TODO:
- Source docs do not lock live plan status enum, cue type enum, live risk taxonomy, severity enum, host action enum, or live measurement event taxonomy.

Thư mục này chứa JSON Schema cho live plan, host cue và risk cue.

Người dùng chính là business-platform và các module live commerce. Không đặt nội dung live script production, operator note cá nhân, implementation UI hoặc runtime orchestration vào đây.

Ví dụ file sau này: `live-plan-v1.schema.json`, `host-cue-v1.schema.json`, `risk-cue-v1.schema.json`. Schema phải versioned.
