# enums/ivr

## Phase 3 contract scope

This folder contains IVR v1 enums for result status, program type, call attempt status, and technical exception type.

Enums are contract values only. They are not telephony implementation, provider mappings, database seeds, service logic, or business logic.

Compatibility: converting technical/capacity/provider failures, invalid phone, busy, rejected, or unreachable into no-answer without locked policy is breaking.

TODO:
- Reconcile PACK-09 program-based attempt values with TECH-09 V1.0 baseline MAX_ATTEMPT_PER_ORDER = 2 before Phase 7 state machines.

Thư mục này chứa enum chuẩn cho IVR.

Không đặt telephony provider config, routing code hoặc audio asset vào đây. Enum chỉ phục vụ contract giữa producer và consumer.

Ví dụ file sau này: `call-status-v1.md`, `call-result-status-v1.md`, `call-cancellation-reason-v1.md`. Enum phải versioned và breaking change phải review.
