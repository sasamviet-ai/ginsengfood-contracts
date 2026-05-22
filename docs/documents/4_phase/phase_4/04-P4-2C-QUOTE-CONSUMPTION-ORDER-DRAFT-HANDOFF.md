**FILE: 04-P4-2C-QUOTE-CONSUMPTION-ORDER-DRAFT-HANDOFF.md**

**PROMPT-P4.2C — QUOTESNAPSHOT CONSUMPTION / ORDER DRAFT HANDOFF IMPLEMENTATION HANDOFF**

**MODE: LIMITED IMPLEMENTATION**

**V1.0 CLEAN FINAL**

## 1. PHASE MARKER

**PHASE:** PHASE-04 — AI ADVISOR RUNTIME  
**BACKLOG:** AIA-BLG-004 / AIA-BLG-005  
**PROMPT LIỀN TRƯỚC:** PROMPT-P4.2B — Customer Memory / Intent Routing  
**PROMPT TIẾP THEO:** PROMPT-P4.2D — Final Response Guard / Privacy / Fail-safe  
**GLOBAL GATEWAY:** BLOCKED

## 2. ĐIỀU KIỆN BẮT ĐẦU

1. P4.2B report đã có.
2. P3 QuoteSnapshot evidence đã submit.
3. P3 Order Draft evidence đã submit.
4. Không có P0 Commerce blocker về quote/order/payment.
5. Owner/dev lead cho phép slice này.
6. Global Gateway vẫn BLOCKED.

## 3. SCOPE IN

1. AI reads QuoteSnapshot safe view.
2. AI displays final price only from QuoteSnapshot.
3. AI shows quote expiry.
4. AI requests Order Draft through Commerce handoff.
5. AI presents Order Draft from Commerce only.
6. AI submits Customer Confirmation to Commerce, does not create Official Order.
7. AI displays order_code only after Commerce returns Official Order.
8. AI payment instruction/status response reads Commerce/Payment safe view.

## 4. SCOPE OUT

Không implement:

1. Commerce QuoteSnapshot creation.
2. Commerce Order Draft creation internals.
3. Official Order state machine.
4. Payment confirmation logic.
5. Gateway delivery production.

## 5. P0 BLOCKER

1. Không QuoteSnapshot vẫn báo final price.
2. Quote expired vẫn chốt.
3. AI tự tạo QuoteSnapshot.
4. AI tự tạo Order Draft ngoài Commerce.
5. AI nói đã tạo đơn trước Commerce order_code.
6. AI nói PAID khi chưa Payment Confirmation.
7. Bank account hardcoded.
8. Payment proof image được xem là PAID.

## 6. SMOKE TỐI THIỂU

| Smoke ID | Scenario | Expected |
|---|---|---|
| P4.2C-SMK-001 | Ask price without QuoteSnapshot | AI không báo final price |
| P4.2C-SMK-002 | Active QuoteSnapshot | AI báo đúng price + expiry |
| P4.2C-SMK-003 | Expired QuoteSnapshot | AI request refresh / fail-safe |
| P4.2C-SMK-004 | Customer says buy without draft | AI route Commerce draft, no order_code |
| P4.2C-SMK-005 | Commerce returns Order Draft | AI presents draft đủ 3 phần |
| P4.2C-SMK-006 | Commerce creates Official Order | AI mới nói đơn đã ghi nhận |
| P4.2C-SMK-007 | Transfer proof image | AI says review/pending, not PAID |

## 7. FINAL STATUS

**PROMPT-P4.2C FINAL STATUS: LIMITED IMPLEMENTATION REPORT ONLY**  
**NOT PHASE 4 COMPLETE**  
**NOT RELEASE READY**  
**NOT ORDER/PAYMENT RELEASE READY**  
**GLOBAL GATEWAY: BLOCKED**
