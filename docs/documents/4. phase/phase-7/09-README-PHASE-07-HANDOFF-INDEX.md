# P7 - README HANDOFF INDEX

## Update 2026-05-22 - Phase 7 Plan

Dung thu muc chinh thuc: `docs/documents/4. phase/phase-7/`.

Phase 7 la MC AI Live / Live Script Runtime / Live Sales Control / Ads-safe Live Orchestration. MC AI Live la assistant cho host/operator, khong phai source-of-truth ve san pham, gia, ton, order, payment, revenue hay ROAS.

## Entry Gate

Chi duoc bat dau Phase 7 khi:

- Phase 5 Gateway public/private, comment classifier va Messenger handoff co evidence.
- Phase 4 AI Advisor / Final Response Guard co evidence.
- Phase 3 QuoteSnapshot / Order / Payment boundary co evidence.
- Phase 6 Ads signal / Verified Revenue boundary co evidence neu dung ads-safe live orchestration.

Neu chua du, ghi `P7-ENTRY-BLOCKED-BY-GATEWAY-AI-COMMERCE`.

**Global Gateway:** `BLOCKED` den TECH-10.

## Source Of Truth

- TECH-08 MC AI Live.
- PACK-08 MC AI Live.
- TECH-06 Facebook Gateway.
- TECH-07 Ads Measurement.
- TECH-05 AI Advisor.
- TECH-04 Commerce Runtime.
- TECH-11/12 phase governance/backlog.

## Execution Order

1. `00-P7-ANALYSIS-ONLY.md`: inspect live/script/comment/runtime code that.
2. `01-P7-1-TECHNICAL-DESIGN-ONLY.md`: khoa MC AI Live contract.
3. `02-P7-2A-LIVE-SESSION-CONTEXT-RESOLVER.md`: LIVE-BLG-001.
4. `03-P7-2B-LIVE-SCRIPT-RUNTIME-CLAIM-GUARD.md`: LIVE-BLG-002/003.
5. `04-P7-2C-LIVE-COMMENT-CLASSIFIER-MESSENGER-COORDINATION.md`: LIVE-BLG-004/005.
6. `05-P7-2D-PRODUCT-PRICE-BOUNDARY-IN-LIVE.md`: LIVE-BLG-006.
7. `06-P7-2E-TROLL-COMPLAINT-MODERATION-ROUTE.md`: LIVE-BLG-007/008.
8. `07-P7-2F-ADS-SAFE-LIVE-SIGNAL-BOUNDARY.md`: LIVE-BLG-009.
9. `08-P7-2G-SMOKE-EVIDENCE-REPORT.md`: LIVE-BLG-010.

## Core Rules

- MC AI Live khong tu bao gia, khong tu tinh discount, khong tu xac nhan ton.
- MC AI Live khong tu tao order/order_code.
- MC AI Live khong tu xac nhan payment/revenue.
- No QuoteSnapshot -> no final price.
- Script/claim phai qua guard.
- Public/private boundary do Gateway enforce.
- Live signal khong phai revenue/ROAS.
- Sale Lock / Recall / Suppression thang live script/CTA.

## P0 Blockers

- MC AI Live tu bao gia.
- MC AI Live tu tao order.
- MC AI Live tu xac nhan payment/revenue.
- Live signal dung lam ROAS.
- Script chua guard van dung.
- Claim chua approved van noi.
- Troll/malicious keo Messenger sai policy.
- Complaint that bi xu nhu troll.

## Downstream

Phase 8 IVR chi nen bat dau sau khi Commerce Official Order boundary va channel handoff du evidence. Phase 7 smoke pass khong mo Gateway va khong goi production readiness.

**NOT LIVE READY**  
**NOT RELEASE READY**  
**GLOBAL GATEWAY: BLOCKED**

