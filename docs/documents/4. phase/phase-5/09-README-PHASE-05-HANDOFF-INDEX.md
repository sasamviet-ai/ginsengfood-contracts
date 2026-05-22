# P5 - README HANDOFF INDEX

## Update 2026-05-22 - Phase 5 Plan

Dung thu muc chinh thuc: `docs/documents/4. phase/phase-5/`.

Phase 5 la Facebook Gateway / Messenger / Channel Delivery. Gateway la channel delivery runtime, khong phai AI Advisor, Commerce, Payment hay noi quyet dinh sellable.

## Entry Gate

Chi duoc bat dau Phase 5 khi:

- P4 Final Response Guard co evidence submitted/accepted de Gateway enforce.
- P4 AI Advisor khong tu tinh gia/order/payment.
- P3 QuoteSnapshot, Order Draft, Official Order, Payment boundary co evidence du de channel consume.
- Khong con P0 blocker ve public/private leak hoac unguarded AI response.

Neu chua du, ghi `P5-ENTRY-BLOCKED-BY-P4-AI-GATEWAY-DEPENDENCY`.

**Global Gateway:** `BLOCKED` den TECH-10.

## Source Of Truth

- TECH-06 Facebook Gateway / Meta Live / Messenger.
- PACK-06 Facebook Channel Gateway.
- TECH-05 AI Advisor Final Response Guard.
- TECH-04 Commerce Runtime.
- TECH-11/12 phase governance/backlog.
- PACK-10 evidence gateway.

## Execution Order

1. `00-P5-ANALYSIS-ONLY.md`: inspect backend/channel code that, map API/schema/event/test.
2. `01-P5-1-TECHNICAL-DESIGN-ONLY.md`: khoa Gateway contract va API/DTO/event impact.
3. `02-P5-2A-CHANNEL-IDENTITY-PAGE-CONTEXT.md`: GW-BLG-001.
4. `03-P5-2B-PUBLIC-COMMENT-COMMENT-TO-MESSENGER.md`: GW-BLG-002/003.
5. `04-P5-2C-MESSENGER-CONTEXT-FINAL-RESPONSE-GUARD.md`: GW-BLG-004/005.
6. `05-P5-2D-TYPING-INDICATOR-RESPONSE-PACING.md`: GW-BLG-006.
7. `06-P5-2E-RATE-LIMIT-ANTI-SPAM-MODERATION.md`: GW-BLG-007/008.
8. `07-P5-2F-SUPPRESSION-OPT-OUT-HUMAN-HANDOFF.md`: GW-BLG-009.
9. `08-P5-2G-SMOKE-EVIDENCE-REPORT.md`: GW-BLG-010.

## Core Rules

- Khong co Final Response Guard pass thi Gateway khong gui response.
- Khong co QuoteSnapshot thi Gateway khong hien thi final price.
- Khong co Customer Confirmation thi Gateway khong tao official order.
- Khong co Payment Confirmation thi Gateway khong noi PAID.
- Public channel khong hien thi private data.
- Sale Lock / Recall / Suppression thang moi template ban hang.

## P0 Blockers

- Public private data.
- Public gia/order/payment ca nhan sai policy.
- Gui response chua guard.
- Hoi gia/mua/chot trong public khong route Messenger.
- Troll/malicious bi keo vao Messenger sai policy.
- Complaint that bi xu ly nhu troll.
- Gateway gia mao nguoi that.

## Downstream

Phase 7 MC AI Live phu thuoc Phase 5 Gateway public/private, comment classification va Messenger handoff evidence.

Phase 6 Ads co the can Phase 5 event identity cho paid/social signal, nhung scale van phu thuoc P3 Verified Revenue.

**NOT RELEASE READY**  
**GLOBAL GATEWAY: BLOCKED**

