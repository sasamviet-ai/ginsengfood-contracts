**FILE: 05-P4-2D-FINAL-RESPONSE-GUARD-PRIVACY-FAILSAFE.md**

**PROMPT-P4.2D — FINAL RESPONSE GUARD / PRIVACY BOUNDARY / RUNTIME FAIL-SAFE IMPLEMENTATION HANDOFF**

**MODE: LIMITED IMPLEMENTATION**

**V1.0 CLEAN FINAL**

## 1. PHASE MARKER

**PHASE:** PHASE-04 — AI ADVISOR RUNTIME  
**BACKLOG:** AIA-BLG-006 / AIA-BLG-007 / AIA-BLG-008 / AIA-BLG-009  
**PROMPT LIỀN TRƯỚC:** PROMPT-P4.2C — QuoteSnapshot Consumption / Order Draft Handoff  
**PROMPT TIẾP THEO:** PROMPT-P4.2E — AI Advisor Smoke / Evidence Pack  
**GLOBAL GATEWAY:** BLOCKED

## 2. ĐIỀU KIỆN BẮT ĐẦU

1. P4.2A/B/C reports đã có.
2. Product/claim/customer/quote/order evidence đã submit.
3. Privacy and public/private policy rõ.
4. Owner/dev lead cho phép slice này.
5. Global Gateway vẫn BLOCKED.

## 3. SCOPE IN

1. Final Response Guard required before send.
2. Public/private data boundary.
3. Product name public policy.
4. Sensitive/private/internal data suppression.
5. Runtime unavailable fail-safe.
6. Human handoff required state.
7. Blocking reason public-safe/internal-safe.
8. Evidence/test/feedback capture.

## 4. SCOPE OUT

Không implement:

1. Gateway send mechanics.
2. Live script runtime.
3. Ads measurement.
4. IVR.
5. Global Release Gateway.

## 5. P0 BLOCKER

1. Response sent before Final Response Guard.
2. Private/internal data public.
3. Payment/order/customer data public sai context.
4. Public comment chứa quote riêng/order/payment.
5. Runtime unavailable nhưng AI khẳng định.
6. Human handoff required nhưng AI tự xử lý.
7. Sale Lock / Recall suppression bị bỏ qua.
8. Evidence missing nhưng gọi PASS.

## 6. SMOKE TỐI THIỂU

| Smoke ID | Scenario | Expected |
|---|---|---|
| P4.2D-SMK-001 | Response has price/order/payment | Must pass Final Response Guard |
| P4.2D-SMK-002 | Public response contains phone/payment proof | Block |
| P4.2D-SMK-003 | Runtime unavailable | Fail-safe, no guessing |
| P4.2D-SMK-004 | Human handoff required | AI does not self-resolve |
| P4.2D-SMK-005 | Sale Lock active | AI response suppresses sales |
| P4.2D-SMK-006 | Final guard fail | Response not sent |
| P4.2D-SMK-007 | Approved safe response | Response allowed |

## 7. FINAL STATUS

**PROMPT-P4.2D FINAL STATUS: LIMITED IMPLEMENTATION REPORT ONLY**  
**NOT PHASE 4 COMPLETE**  
**NOT GATEWAY READY**  
**NOT RELEASE READY**  
**GLOBAL GATEWAY: BLOCKED**

