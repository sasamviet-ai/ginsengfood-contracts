# P7.2A - Live Session Context Resolver

**BACKLOG:** LIVE-BLG-001  
**MODE:** LIMITED IMPLEMENTATION HANDOFF  
**GLOBAL GATEWAY:** BLOCKED

## Muc Tieu

Khoa live session context de MC AI Live biet live nao, page nao, product board nao, host/operator nao va suppression nao dang active.

## Entry Gate

- P7.1 design accepted.
- P5 Gateway channel/page/session evidence pass.
- Live board/source accepted.

## Implementation Scope

- Live session identity.
- Page/channel binding.
- Live product board binding.
- Host/operator context.
- Suppression context.
- Evidence logging.

## Not Allowed

- Hardcode live session/product board.
- Dung live session unknown de tao script.
- Bo qua recall/sale lock/suppression.
- Public internal board/private data.

## Acceptance Criteria

- Moi live command co live_session_id/page/channel/context.
- Unknown session bi reject.
- Product board co source/evidence.
- Suppression state duoc resolve truoc script/comment suggestion.

## Smoke

| Smoke ID | Scenario | Expected |
|---|---|---|
| P7.2A-SMK-001 | Known live session | Context resolved |
| P7.2A-SMK-002 | Unknown session | Reject/quarantine |
| P7.2A-SMK-003 | Missing board | No script generation |
| P7.2A-SMK-004 | Sale lock active | Sales suggestion blocked |

## Final Status

**LIMITED IMPLEMENTATION REPORT ONLY**  
**NOT RELEASE READY**  
**GLOBAL GATEWAY: BLOCKED**

