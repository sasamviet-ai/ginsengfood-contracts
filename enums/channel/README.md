# enums/channel

## Phase 3 contract scope

This folder contains Channel Gateway v1 enums for channel type, visibility state, handoff status, human takeover status, and channel delivery status.

Enums are contract values only. They are not UI labels, routing implementation, database seeds, service logic, or business logic.

Compatibility: mixing public/private visibility, claiming failed handoff as success, or allowing AI during active human takeover is breaking.

TODO:
- Source docs show human takeover requirements and some states, but the complete locked human takeover state list needs Phase 7 confirmation.

Thư mục này chứa enum chuẩn cho channel như Facebook, Messenger và handoff.

Không đặt access token, page config, webhook implementation hoặc mapping UI label production vào đây.

Ví dụ file sau này: `channel-type-v1.md`, `handoff-reason-v1.md`, `message-origin-v1.md`. Enum phải versioned.
