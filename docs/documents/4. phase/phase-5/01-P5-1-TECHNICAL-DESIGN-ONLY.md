# P5.1 - Technical Design Only

**PROMPT-P5.1 - FACEBOOK GATEWAY TECHNICAL DESIGN HANDOFF**

## Mode

TECHNICAL DESIGN ONLY. Khong implement, khong migration, khong seed, khong doi contract khi chua co approval.

## Input Bat Buoc

- P5 Analysis report.
- P4 Final Response Guard evidence.
- P3 QuoteSnapshot / Order Draft / Payment boundary evidence.
- TECH-06 / PACK-06.

Neu thieu P5 Analysis report, ghi `BLOCKED_NEED_P5_ANALYSIS_REPORT`.

## Design Boundary

Gateway la channel delivery runtime. Gateway chi:

- Nhan event tu Meta/Live/Messenger/Web/Landing/CRM.
- Resolve channel/page/session context.
- Route public comment sang private/Messenger khi can.
- Goi AI Advisor hoac Commerce theo contract duoc phep.
- Enforce Final Response Guard truoc khi send.
- Delivery message theo pacing/rate-limit/platform policy.
- Ghi audit/evidence.

Gateway khong:

- Tu viet noi dung ban hang de them gia/claim/urgency.
- Tu tinh final price.
- Tu tao official order/order_code.
- Tu set PAID.
- Tu bo qua recall/sale lock/suppression.

## Workstreams

| Slice | Backlog | Muc tieu |
|---|---|---|
| P5.2A | GW-BLG-001 | Channel Identity / Page Context |
| P5.2B | GW-BLG-002/003 | Public Comment Boundary + Comment-to-Messenger |
| P5.2C | GW-BLG-004/005 | Messenger Context + Final Response Guard |
| P5.2D | GW-BLG-006 | Typing Indicator / Response Pacing |
| P5.2E | GW-BLG-007/008 | Rate Limit / Anti-Spam / Moderation |
| P5.2F | GW-BLG-009 | Suppression / Opt-out |
| P5.2G | GW-BLG-010 | Smoke / Evidence Pack |

## Contract Can Khoa

- Inbound event envelope.
- Channel/page/session identity.
- Public/private visibility flag.
- Comment intent classification result.
- Messenger handoff request.
- AI request/response envelope.
- Final Response Guard result.
- Delivery command.
- Suppression decision.
- Audit/evidence record.

## API/DTO Impact

Moi thay doi API/DTO/event/OpenAPI phai ghi:

- Endpoint/event name.
- Request/response fields.
- Backward compatibility.
- FE/channel consumer can update.
- Test/smoke can bo sung.

## P0 Design Blockers

- Public comment co private data.
- Gateway send unguarded AI response.
- Gateway public final price ca nhan sai policy.
- Comment "gia/mua/chot" khong route private.
- Payment WAITING bi noi PAID.
- Suppression active nhung van gui sales message.

## Final Status

Trang thai toi da: **P5 TECHNICAL DESIGN HANDOFF COMPLETED - NOT RELEASE READY**.

**GLOBAL GATEWAY: BLOCKED**

