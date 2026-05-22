**FILE: 02-P4-2A-PRODUCT-KNOWLEDGE-CLAIM-GUARD.md**

**PROMPT-P4.2A — PRODUCT KNOWLEDGE RESOLVER / CLAIM GUARD IMPLEMENTATION HANDOFF**

**MODE: LIMITED IMPLEMENTATION**

**V1.0 CLEAN FINAL**

## 1. PHASE MARKER

**PHASE:** PHASE-04 — AI ADVISOR RUNTIME  
**BACKLOG:** AIA-BLG-001 / AIA-BLG-002  
**PROMPT LIỀN TRƯỚC:** PROMPT-P4.1 — Technical Design  
**PROMPT TIẾP THEO:** PROMPT-P4.2B — Customer Memory / Intent Routing  
**GLOBAL GATEWAY:** BLOCKED

## 2. ĐIỀU KIỆN BẮT ĐẦU

1. P4.1 report đã có.
2. Product Knowledge source rõ.
3. Claim policy source rõ.
4. Owner/dev lead cho phép slice này.
5. Global Gateway vẫn BLOCKED.

## 3. SCOPE IN

1. Product Knowledge Resolver chỉ dùng approved knowledge.
2. Public-safe vs internal knowledge boundary.
3. Claim Guard / public wording policy.
4. Block unapproved claim.
5. Medical/sensitive wording fail-safe nếu có.
6. Audit/evidence for knowledge/claim decision.
7. Tests cho approved/unapproved knowledge and claim.

## 4. SCOPE OUT

Không implement:

1. QuoteSnapshot consumption.
2. Order Draft handoff.
3. Payment response.
4. Gateway delivery.
5. CRM campaign automation.
6. Release Gateway.

## 5. P0 BLOCKER

1. Product Knowledge chưa approved vẫn public.
2. Internal Product Knowledge bị public.
3. Claim chưa approved vẫn public.
4. AI nói chữa bệnh/thay thuốc.
5. Missing knowledge nhưng AI bịa nội dung.
6. Runtime unavailable nhưng AI khẳng định.

## 6. SMOKE TỐI THIỂU

| Smoke ID | Scenario | Expected |
|---|---|---|
| P4.2A-SMK-001 | Product Knowledge approved | AI được dùng public-safe content |
| P4.2A-SMK-002 | Product Knowledge unapproved | Không tư vấn chi tiết |
| P4.2A-SMK-003 | Internal knowledge requested in public | Block / safe response |
| P4.2A-SMK-004 | Approved claim | Response allowed through guard |
| P4.2A-SMK-005 | Unapproved claim | Blocked |
| P4.2A-SMK-006 | Runtime unavailable | Fail-safe, no guessing |

## 7. FINAL STATUS

**PROMPT-P4.2A FINAL STATUS: LIMITED IMPLEMENTATION REPORT ONLY**  
**NOT PHASE 4 COMPLETE**  
**NOT RELEASE READY**  
**GLOBAL GATEWAY: BLOCKED**

