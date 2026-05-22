# P7.1 - Technical Design Only

**PROMPT-P7.1 - MC AI LIVE TECHNICAL DESIGN HANDOFF**

## Mode

TECHNICAL DESIGN ONLY. Khong implement live runtime, khong bat live auto-reply, khong tao script production.

## Input Bat Buoc

- P7 Analysis report.
- P5 Gateway evidence.
- P4 AI/Final Response Guard evidence.
- P3 Commerce evidence.
- P6 Ads signal/Verified Revenue boundary evidence neu dung ads-safe orchestration.

Neu thieu Gateway evidence, ghi `BLOCKED_NEED_PHASE5_GATEWAY_EVIDENCE`.

## Design Boundary

MC AI Live la live orchestration assistant. No chi:

- Resolve live session context.
- Goi y script/nhiep noi/CTA.
- Goi y public-safe comment handling.
- Coordinate Messenger handoff qua Gateway.
- Respect Product Knowledge / Claim Guard / Final Response Guard.
- Respect Commerce QuoteSnapshot / Order / Payment boundary.
- Respect Ads signal boundary.

MC AI Live khong:

- Tu tinh gia/discount/ton kho.
- Tu tao order/payment/revenue.
- Tu noi claim y te chua approved.
- Tu dung live signal lam revenue/ROAS.

## Workstreams

| Slice | Backlog | Muc tieu |
|---|---|---|
| P7.2A | LIVE-BLG-001 | Live Session Context Resolver |
| P7.2B | LIVE-BLG-002/003 | Live Script Runtime + Script/Claim Guard |
| P7.2C | LIVE-BLG-004/005 | Comment Classifier + Messenger Coordination |
| P7.2D | LIVE-BLG-006 | Product/Price Boundary In Live |
| P7.2E | LIVE-BLG-007/008 | Troll/Abuse + Complaint/CSKH Route |
| P7.2F | LIVE-BLG-009 | Ads-safe Live Signal Boundary |
| P7.2G | LIVE-BLG-010 | Smoke / Evidence Pack |

## Contract Can Khoa

- Live session context.
- Live product board reference.
- Script runtime request/response.
- Claim guard decision.
- Comment classification result.
- Messenger handoff command.
- Commerce quote boundary.
- Ads-safe signal event.
- Suppression decision.
- Evidence record.

## API/DTO Impact

Moi API/DTO/event/OpenAPI thay doi phai ghi FE/operator console/channel/ads dashboard impact.

## P0 Design Blockers

- Live tu bao gia.
- Live tu tao order/payment/revenue.
- Script chua guard van duoc dung.
- Claim chua approved van noi.
- Live signal dung lam ROAS.
- Troll/malicious keo Messenger sai policy.
- Complaint that bi xu nhu troll.

## Final Status

**P7 TECHNICAL DESIGN HANDOFF COMPLETED - NOT RELEASE READY**  
**GLOBAL GATEWAY: BLOCKED**

