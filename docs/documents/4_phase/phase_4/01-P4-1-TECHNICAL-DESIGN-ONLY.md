**FILE: 01-P4-1-TECHNICAL-DESIGN-ONLY.md**

**PROMPT-P4.1 — AI ADVISOR RUNTIME TECHNICAL DESIGN HANDOFF**

**MODE: TECHNICAL DESIGN ONLY — DO NOT MODIFY CODE**

**V1.0 CLEAN FINAL**

## 1. PHASE MARKER

**PHASE:** PHASE-04 — AI ADVISOR RUNTIME  
**PROMPT:** PROMPT-P4.1 — AI ADVISOR TECHNICAL DESIGN HANDOFF  
**MODE:** TECHNICAL DESIGN ONLY  
**PROMPT LIỀN TRƯỚC:** PROMPT-P4 — ANALYSIS ONLY  
**PROMPT TIẾP THEO:** PROMPT-P4.2A — PRODUCT KNOWLEDGE / CLAIM GUARD  
**GLOBAL GATEWAY:** BLOCKED

## 2. ĐIỀU KIỆN BẮT ĐẦU

1. P4 Analysis Report đã có.
2. AI current state / gap / blocker matrix đã có.
3. Commerce dependency impact rõ.
4. Evidence/smoke required matrix đã có.
5. Owner/dev lead cho phép technical design.
6. Global Gateway vẫn BLOCKED.

## 3. WORKSTREAM BẮT BUỘC

| Workstream | Backlog | Output |
|---|---|---|
| P4.2A | AIA-BLG-001/002 | Product Knowledge Resolver + Claim Guard |
| P4.2B | AIA-BLG-003 | Customer Memory + Intent Routing |
| P4.2C | AIA-BLG-004/005 | QuoteSnapshot Consumption + Order Draft Handoff |
| P4.2D | AIA-BLG-006-009 | Final Response Guard + Privacy + Runtime Fail-safe |
| P4.2E | AIA-BLG-010 | AI Advisor Smoke / Evidence Pack |

## 4. TECHNICAL BOUNDARY

P4.1 phải khóa:

1. AI command/query boundary.
2. Product Knowledge approved/public-safe view.
3. Claim Guard decision.
4. Customer Memory permission.
5. Intent routing to Product/Commerce/Human.
6. QuoteSnapshot safe consumption.
7. Order Draft safe presentation.
8. Payment status safe response.
9. Public/private data classification.
10. Final Response Guard required before send.
11. Runtime unavailable fail-safe.
12. Audit/evidence/correlation.

## 5. IMPLEMENTATION SEQUENCE

1. Product Knowledge Resolver.
2. Claim Guard.
3. Customer Memory and channel/session context.
4. Intent routing.
5. QuoteSnapshot consumption.
6. Order Draft handoff.
7. Payment response boundary.
8. Public/private data guard.
9. Final Response Guard.
10. Runtime unavailable fail-safe.
11. Smoke/evidence.

Không được tạo Gateway delivery production trong PHASE 4.

## 6. DONE GATE

P4.1 done khi:

1. Workstream/task/dependency matrix rõ.
2. Scope In/Out từng slice rõ.
3. Done Gate / Fail Gate từng slice rõ.
4. P0 blocker từng slice rõ.
5. Evidence/smoke plan rõ.
6. API/DTO/Schema impact rõ.
7. Frontend/Gateway impact được flag nếu có.
8. Owner/dev lead cho phép limited implementation.
9. Không sửa code.
10. Global Gateway vẫn BLOCKED.

Trạng thái tối đa: **P4 TECHNICAL DESIGN HANDOFF COMPLETED — NOT RELEASE READY**.

