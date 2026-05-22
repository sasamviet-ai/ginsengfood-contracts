**FILE: 01-P3-1-TECHNICAL-DESIGN-ONLY.md**

**PROMPT-P3.1 — COMMERCE RUNTIME TECHNICAL DESIGN HANDOFF**

**MODE: TECHNICAL DESIGN ONLY — DO NOT MODIFY CODE**

**V1.0 CLEAN FINAL**

## 1. PHASE MARKER

**PHASE:** PHASE-03 — COMMERCE RUNTIME  
**PROMPT:** PROMPT-P3.1 — COMMERCE RUNTIME TECHNICAL DESIGN HANDOFF  
**MODE:** TECHNICAL DESIGN ONLY  
**PROMPT LIỀN TRƯỚC:** PROMPT-P3 — ANALYSIS ONLY  
**PROMPT TIẾP THEO:** PROMPT-P3.2A — SELLABLE GATE FROM OPERATIONAL  
**GLOBAL GATEWAY:** BLOCKED

## 2. ĐIỀU KIỆN BẮT ĐẦU

Chỉ bắt đầu P3.1 khi:

1. P3 Analysis Report đã có.
2. Current State / Gap / Conflict / Blocker Matrix đã có.
3. API/DTO/Schema Impact Matrix đã có nếu có API surface.
4. Smoke/Evidence Required Matrix đã có.
5. Owner/dev lead cho phép Technical Design.
6. Global Gateway vẫn BLOCKED.

## 3. MỤC TIÊU

P3.1 chuyển kết quả analysis thành handoff kỹ thuật:

1. Workstream Matrix.
2. Task Breakdown Matrix.
3. Dependency Matrix.
4. API/DTO/Schema Change Plan.
5. State Machine / Event Change Plan.
6. Evidence Plan.
7. Smoke Plan.
8. Implementation Sequence.
9. Rollback / blocker handling.
10. Frontend update note nếu contract thay đổi.

## 4. WORKSTREAM BẮT BUỘC

| Workstream | Backlog | Output |
|---|---|---|
| P3.2A | COM-BLG-001 | Sellable Gate from Operational |
| P3.2B | COM-BLG-002-004 | QuoteSnapshot, Cart, Order Draft |
| P3.2C | COM-BLG-005-008 | Customer Confirmation, Official Order, Payment, COD, Shipping |
| P3.2D | COM-BLG-009-011 | Verified Revenue, runtime benefit, bank registry |
| P3.2E | COM-BLG-012 | Commerce Smoke / Evidence Pack |

## 5. TECHNICAL BOUNDARY

P3.1 phải khóa rõ:

1. Entity/model nào là source-of-truth.
2. API nào chỉ query, API nào command có side effect.
3. DTO response nào public-safe, internal-safe.
4. State transition nào hợp lệ.
5. Event/outbox nào phát sinh.
6. Idempotency key dùng cho command nào.
7. Audit/evidence/correlation ghi ở đâu.
8. Payment confirmation source hợp lệ.
9. Verified Revenue source hợp lệ.
10. Downstream suppression reason public/internal.

Nếu thiếu source-of-truth schema, ghi `BLOCKED_BY_SOURCE_OF_TRUTH`, không tự invent schema.

## 6. IMPLEMENTATION SEQUENCE

1. Sellable Gate first.
2. QuoteSnapshot second.
3. Cart after QuoteSnapshot.
4. Order Draft after Cart/QuoteSnapshot.
5. Customer Confirmation after complete Order Draft.
6. Official Order after valid confirmation.
7. Payment/COD/Shipping after Official Order.
8. Verified Revenue after payment/order verification.
9. Runtime benefit and bank registry only through approved runtime/config.
10. Smoke/evidence after all slices.

Không được triển khai AI Advisor trước khi QuoteSnapshot/Order Draft boundary có evidence tối thiểu.

## 7. DONE GATE

P3.1 done khi:

1. Workstream/task/dependency matrix rõ.
2. Scope In/Out từng slice rõ.
3. Done Gate / Fail Gate từng slice rõ.
4. P0 blocker từng slice rõ.
5. Evidence/smoke plan rõ.
6. API/DTO/Schema impact rõ.
7. Frontend impact được flag nếu có.
8. Owner/dev lead cho phép limited implementation.
9. Không sửa code.
10. Global Gateway vẫn BLOCKED.

Trạng thái tối đa: **P3 TECHNICAL DESIGN HANDOFF COMPLETED — NOT RELEASE READY**.

