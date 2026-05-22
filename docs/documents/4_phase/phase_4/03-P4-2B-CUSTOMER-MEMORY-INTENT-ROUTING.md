**FILE: 03-P4-2B-CUSTOMER-MEMORY-INTENT-ROUTING.md**

**PROMPT-P4.2B — CUSTOMER MEMORY RESOLVER / INTENT ROUTING IMPLEMENTATION HANDOFF**

**MODE: LIMITED IMPLEMENTATION**

**V1.0 CLEAN FINAL**

## 1. PHASE MARKER

**PHASE:** PHASE-04 — AI ADVISOR RUNTIME  
**BACKLOG:** AIA-BLG-003 plus intent-routing foundation  
**PROMPT LIỀN TRƯỚC:** PROMPT-P4.2A — Product Knowledge / Claim Guard  
**PROMPT TIẾP THEO:** PROMPT-P4.2C — QuoteSnapshot Consumption / Order Draft Handoff  
**GLOBAL GATEWAY:** BLOCKED

## 2. ĐIỀU KIỆN BẮT ĐẦU

1. P4.2A report đã có.
2. Product Knowledge / Claim Guard evidence đã submit.
3. Customer identity/privacy policy rõ.
4. Owner/dev lead cho phép slice này.
5. Global Gateway vẫn BLOCKED.

## 3. SCOPE IN

1. Channel/session/customer context resolver.
2. Customer Memory permission and opt-out guard.
3. Intent routing: product question, price, buy, order, payment, complaint, human handoff.
4. Route price/order intent to Commerce.
5. Route complaint/adverse event to human/CSKH per policy.
6. Public/private context classification.
7. Audit/evidence/correlation.

## 4. SCOPE OUT

Không implement:

1. Quote generation.
2. Order creation.
3. Payment confirmation.
4. Gateway webhooks.
5. Ads/Live/IVR.

## 5. P0 BLOCKER

1. Customer/session mismatch.
2. Memory dùng sai khách/sai kênh.
3. Opt-out bị bỏ qua.
4. Public context bị xem là private.
5. Hỏi giá nhưng không route Commerce.
6. Complaint/adverse event không handoff.
7. Private data bị public.

## 6. SMOKE TỐI THIỂU

| Smoke ID | Scenario | Expected |
|---|---|---|
| P4.2B-SMK-001 | Known customer private channel | Memory used only if permitted |
| P4.2B-SMK-002 | Opt-out customer | Memory/CRM action blocked |
| P4.2B-SMK-003 | Public comment asks price | Route private/Commerce, no public private quote |
| P4.2B-SMK-004 | Messenger asks product | Route Product Knowledge + Claim Guard |
| P4.2B-SMK-005 | Customer says buy | Route Order Draft / Commerce, no official order |
| P4.2B-SMK-006 | Complaint/adverse event | Human/CSKH handoff |

## 7. FINAL STATUS

**PROMPT-P4.2B FINAL STATUS: LIMITED IMPLEMENTATION REPORT ONLY**  
**NOT PHASE 4 COMPLETE**  
**NOT RELEASE READY**  
**GLOBAL GATEWAY: BLOCKED**

