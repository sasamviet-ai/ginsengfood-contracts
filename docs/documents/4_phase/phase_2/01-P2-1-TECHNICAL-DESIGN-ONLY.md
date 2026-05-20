**FILE: 01-P2-1-TECHNICAL-DESIGN-ONLY.docx**

**PROMPT-P2.1 — OPERATIONAL CORE TECHNICAL DESIGN HANDOFF**

**MODE: TECHNICAL DESIGN ONLY — DO NOT MODIFY FILES**

**V1.0 CLEAN FINAL**

## 1. PHASE MARKER

### 1.1. Phase hiện tại

**PHASE-02 — OPERATIONAL CORE**

### 1.2. Prompt hiện tại

**PROMPT-P2.1 — OPERATIONAL CORE TECHNICAL DESIGN HANDOFF**

### 1.3. Mode

**MODE: TECHNICAL DESIGN ONLY — DO NOT MODIFY FILES**

### 1.4. Prompt liền trước

**PROMPT-P2 — OPERATIONAL CORE / PRODUCTION / WAREHOUSE / INVENTORY / TRACEABILITY / RECALL / SALE LOCK ANALYSIS HANDOFF**

### 1.5. Prompt tiếp theo

**PROMPT-P2.2A — SOURCE / RAW MATERIAL / RAW LOT / QC / READINESS IMPLEMENTATION HANDOFF**

### 1.6. Điều kiện bắt đầu P2.1

PROMPT-P2.1 chỉ được bắt đầu khi:

1.  PROMPT-P2 Analysis Report đã có.

2.  P2 Current Implementation State Matrix đã có.

3.  P2 Gap Analysis Matrix đã có.

4.  P2 Conflict Detection Matrix đã có.

5.  P2 Blocker Register đã có.

6.  P2 Downstream Impact đã có.

7.  P2 Smoke Required đã có.

8.  PHASE 1 Smoke / Evidence / Implementation Report đã được đọc.

9.  TECH source-of-truth đã được đọc.

10. Global Gateway vẫn BLOCKED.

### 1.7. Điều kiện chuyển sang P2.2A

Chỉ được chuyển sang **P2.2A — Source / Raw Material / Raw Lot / QC / Readiness Implementation** khi:

1.  P2.1 đã lập Workstream Matrix.

2.  P2.1 đã lập Task Breakdown Matrix.

3.  P2.1 đã lập Dependency Matrix.

4.  P2.1 đã lập Evidence Plan.

5.  P2.1 đã lập Smoke Plan.

6.  P2.1 đã lập Implementation Sequence.

7.  P2.1 đã khóa rõ các boundary P2 bắt buộc.

8.  Không còn thiếu source-of-truth nghiêm trọng cho Source / Raw / QC / Readiness.

9.  Owner/dev lead cho phép chuyển sang limited implementation.

10. Global Gateway vẫn BLOCKED.

### 1.8. Điều kiện chuyển sang PHASE 3

Chưa được chuyển sang PHASE 3 sau P2.1.

PHASE 3 chỉ được bắt đầu sau khi hoàn tất:

1.  P2.2A — Source / Raw / Lot / QC / Readiness.

2.  P2.2B — Production Order / Snapshot / Workshop.

3.  P2.2C — Material Issue / Receipt / Ledger.

4.  P2.2D — Batch / QC / Release / Warehouse / Inventory.

5.  P2.2E — Traceability / QR / Recall / Sale Lock.

6.  P2.2F — PHASE 2 Smoke / Evidence / Implementation Report.

7.  Không còn P0/P1/P2 blocker mở.

8.  Owner/dev lead cho phép viết **PROMPT-P3 — Commerce Runtime Analysis Only**.

## 2. HEADER

### 2.1. Tên prompt

**PROMPT-P2.1 — OPERATIONAL CORE TECHNICAL DESIGN HANDOFF**

### 2.2. Vị trí trong roadmap

PROMPT-P2.1 thuộc:

**PHASE-02 — OPERATIONAL CORE**

PROMPT-P2.1 là bước **Technical Design Only** sau PROMPT-P2 Analysis.

PROMPT-P2.1 không phải implementation prompt.

PROMPT-P2.1 chỉ dùng để chuyển kết quả phân tích Operational Core thành:

1.  Workstream.

2.  Task breakdown.

3.  Dependency matrix.

4.  Evidence plan.

5.  Smoke plan.

6.  Implementation sequence.

7.  Blocker handling.

8.  Handoff cho các prompt limited implementation tiếp theo.

### 2.3. Mục tiêu

Mục tiêu của PROMPT-P2.1 là yêu cầu dev/Codex/Copilot:

1.  Đọc PROMPT-P2 Analysis Report.

2.  Đọc TECH source-of-truth.

3.  Chuyển gap của Operational Core thành workstream.

4.  Chuyển blocker thành task kỹ thuật.

5.  Xác định boundary cho Source / Raw / QC / Readiness.

6.  Xác định boundary cho Production Order / Formula Snapshot.

7.  Xác định boundary cho Material Issue / Material Receipt / Inventory Ledger.

8.  Xác định boundary cho Batch / QC / Release / Warehouse Receipt.

9.  Xác định boundary cho Traceability / QR / Public Trace.

10. Xác định boundary cho Recall / Hold / Sale Lock.

11. Xác định evidence cần có.

12. Xác định smoke cần có.

13. Xác định thứ tự implementation an toàn.

14. Không sửa code.

15. Không tạo migration.

16. Không tạo seed.

17. Không tự đổi nghiệp vụ.

18. Không gọi PHASE 2 Complete / Release Ready / Production Ready / Go-live Approved.

## 3. MODE: TECHNICAL DESIGN ONLY — DO NOT MODIFY FILES

### 3.1. Chế độ thực thi

**MODE: TECHNICAL DESIGN ONLY**

Agent chỉ được phép:

1.  Đọc PROMPT-P2 Analysis Report.

2.  Đọc TECH source-of-truth.

3.  Đọc PHASE 0 / PHASE 1 reports nếu cần.

4.  Đọc codebase nếu cần đối chiếu lại.

5.  Tổng hợp gap thành workstream.

6.  Tổng hợp blocker thành task.

7.  Thiết kế boundary kỹ thuật ở mức handoff.

8.  Lập implementation sequence.

9.  Lập evidence plan.

10. Lập smoke plan.

11. Lập report 14 mục.

### 3.2. Các hành động bị cấm

Agent không được:

1.  Sửa file.

2.  Tạo file.

3.  Xóa file.

4.  Rename file.

5.  Format file.

6.  Refactor code.

7.  Tạo code.

8.  Tạo migration.

9.  Tạo seed.

10. Update database.

11. Tạo production order.

12. Issue material.

13. Receipt material.

14. Release batch.

15. Confirm warehouse receipt.

16. Tạo QR.

17. Public trace dữ liệu.

18. Kích hoạt recall/sale lock.

19. Tạo API.

20. Tạo UI.

21. Tự quyết nghiệp vụ.

22. Hardcode policy.

23. Gọi Raw Lot QC_PASS là READY_FOR_PRODUCTION.

24. Gọi Batch QC_PASS là RELEASED.

25. Gọi Material Receipt là điểm giảm tồn nguyên liệu.

26. Gọi Warehouse Receipt được phép trước Batch RELEASED.

27. Gọi Inventory Ledger có thể update/delete.

28. Gọi PHASE 2 Complete.

29. Gọi Completion PASS.

30. Gọi Release Ready.

31. Gọi Production Ready.

32. Gọi Go-live Approved.

33. Mở Global Gateway.

## 4. SOURCE-OF-TRUTH BẮT BUỘC

### 4.1. Source chính

Agent phải đọc và ưu tiên:

1.  **PROMPT-P2 Analysis Report**

2.  **PHASE 0 Validation Report**

3.  **PHASE 1 Smoke / Evidence / Implementation Report**

4.  **TECH-01 — Foundation / RBAC / Audit / Evidence / Idempotency**

5.  **TECH-10 — Global Smoke / UAT / Evidence / Release Gateway**

6.  **TECH-11 — Implementation Roadmap / Dev Phase Plan**

7.  **TECH-12 — Phase Backlog Pack**

8.  **TECH-13 — Codex / Copilot Dev Prompt Pack**

9.  **TECH Operational Core nếu đã có trong bộ TECH**

10. **Source / Raw / Production / Warehouse / Inventory / Traceability / Recall source-of-truth mới do owner cung cấp nếu có**

### 4.2. Quy tắc ưu tiên

Agent phải áp dụng:

1.  TECH mới thắng code cũ.

2.  TECH mới thắng tài liệu cũ.

3.  PROMPT-P2 Analysis Report là đầu vào thiết kế, không phải release evidence.

4.  Code hiện tại chỉ là **CURRENT_IMPLEMENTATION_STATE_ONLY**.

5.  Tài liệu cũ chỉ là **LEGACY_REFERENCE_ONLY**.

6.  Không dùng legacy làm nền nghiệp vụ.

7.  Không để code cũ thắng TECH mới.

8.  Nếu code khác TECH mới thì đưa vào conflict handling, không tự sửa.

9.  Nếu nghiệp vụ chưa có source-of-truth thì đưa vào owner decision required, không tự suy luận.

10. Nếu evidence mới chỉ submitted thì không được gọi accepted.

## 5. REQUIRED INPUT

### 5.1. Đầu vào bắt buộc

Agent cần có:

1.  PROMPT-P2 Analysis Report.

2.  P2 Current Implementation State Matrix.

3.  P2 Gap Analysis Matrix.

4.  P2 Conflict Detection Matrix.

5.  P2 Blocker Register.

6.  P2 Downstream Impact.

7.  P2 Smoke Required.

8.  PHASE 0 Validation Report.

9.  PHASE 1 Smoke / Evidence / Implementation Report.

10. TECH source-of-truth.

### 5.2. Nếu thiếu đầu vào

Nếu thiếu PROMPT-P2 Analysis Report, agent phải dừng và báo:

**BLOCKED — PROMPT-P2 ANALYSIS REPORT REQUIRED**

Nếu thiếu gap/conflict/blocker matrix, agent phải báo:

**BLOCKED — PROMPT-P2 ANALYSIS REPORT INCOMPLETE**

Nếu thiếu source-of-truth Operational Core, agent phải báo:

**BLOCKED — PHASE 2 SOURCE-OF-TRUTH REQUIRED**

Agent không được tự dựng nghiệp vụ Operational Core.

## 6. OBJECTIVE

### 6.1. Mục tiêu chính

Agent phải lập technical design handoff cho:

1.  Source Origin / Raw Material Master.

2.  Raw Material Receipt.

3.  Raw Lot.

4.  Incoming QC.

5.  Raw Lot Readiness.

6.  Production Demand / Production Order.

7.  Formula Snapshot / Recipe Snapshot.

8.  Material Request.

9.  Material Issue.

10. Material Receipt / Workshop Receipt.

11. Production Batch.

12. Batch Process State.

13. Batch QC.

14. Batch Release.

15. Warehouse Receipt.

16. Inventory Ledger.

17. Inventory Balance Projection.

18. Packaging / QR / Print readiness nếu thuộc Operational.

19. Traceability / Genealogy.

20. Public Trace Boundary.

21. Recall / Hold / Sale Lock.

22. Operational Evidence / Audit / Idempotency.

23. Operational Smoke Plan.

24. Handoff sang implementation prompt sau.

### 6.2. Mục tiêu không phải

PROMPT-P2.1 không nhằm:

1.  Viết code.

2.  Sửa code.

3.  Tạo API.

4.  Tạo DB schema cuối cùng.

5.  Tạo migration.

6.  Tạo seed.

7.  Tạo UI.

8.  Tạo test code.

9.  Tạo production order.

10. Thực hiện material issue.

11. Thực hiện warehouse receipt.

12. Tạo batch.

13. Release batch.

14. Tạo QR.

15. Mở public trace.

16. Kích hoạt recall/sale lock.

17. Release.

18. Go-live.

## 7. WORKSTREAM STRUCTURE

Agent phải chia PHASE 2 thành các workstream sau.

### 7.1. Workstream 2A — Source / Raw Material / Raw Lot / QC / Readiness

**Mục tiêu**

Thiết kế boundary cho Source / Raw Material / Raw Lot / QC / Readiness để bảo đảm:

1.  Raw material có master data rõ.

2.  Raw receipt có lot linkage rõ.

3.  Raw lot có status lifecycle rõ.

4.  Incoming QC không bị dùng thay readiness.

5.  Raw Lot QC_PASS không đồng nghĩa READY_FOR_PRODUCTION.

6.  READY_FOR_PRODUCTION là gate riêng.

7.  Raw lot chỉ được issue khi READY_FOR_PRODUCTION.

8.  QC/readiness command dùng Actor / RBAC / Audit / Evidence / Idempotency từ PHASE 0.

**Output bắt buộc**

1.  Raw Material Boundary.

2.  Raw Lot Boundary.

3.  Incoming QC Boundary.

4.  Readiness Gate Boundary.

5.  Raw Lot Status Rule.

6.  QC_PASS vs READY_FOR_PRODUCTION Rule.

7.  Raw Lot Evidence Plan.

8.  Raw Lot Smoke Plan.

9.  Workstream 2A Task List.

### 7.2. Workstream 2B — Production Order / Formula Snapshot / Workshop

**Mục tiêu**

Thiết kế boundary cho Production Order để bảo đảm:

1.  Production Order có linked SKU.

2.  Production Order có linked Recipe.

3.  Production Order có formula snapshot.

4.  Production Order snapshot gồm formula kind / version / ingredient / quantity / UOM.

5.  Production Order không bị thay đổi bởi recipe edit sau khi đã tạo.

6.  Production Order có state lifecycle.

7.  Production Order có approval/guard nếu required.

8.  Production Order dùng Actor / RBAC / Audit / Evidence / Idempotency.

**Output bắt buộc**

1.  Production Order Boundary.

2.  Formula Snapshot Boundary.

3.  Recipe Snapshot Boundary.

4.  Production Order State Rule.

5.  Snapshot Immutability Rule.

6.  Workshop Handoff Boundary.

7.  Production Evidence Plan.

8.  Production Smoke Plan.

9.  Workstream 2B Task List.

### 7.3. Workstream 2C — Material Request / Material Issue / Material Receipt / Ledger

**Mục tiêu**

Thiết kế boundary cho Material Request / Material Issue / Material Receipt để bảo đảm:

1.  Material Request linked Production Order.

2.  Material Issue linked Ready Raw Lot.

3.  Material Issue là điểm giảm tồn nguyên liệu chính.

4.  Material Issue tạo raw inventory ledger debit.

5.  Material Issue retry không double debit.

6.  Material Receipt chỉ xác nhận xưởng nhận nguyên liệu.

7.  Material Receipt không giảm tồn lần hai.

8.  Material Receipt có variance nếu required.

9.  Material issue/receipt có audit/idempotency/evidence nếu required.

**Output bắt buộc**

1.  Material Request Boundary.

2.  Material Issue Boundary.

3.  Material Receipt Boundary.

4.  Raw Inventory Ledger Debit Rule.

5.  No Double Debit Rule.

6.  Material Idempotency Plan.

7.  Material Evidence Plan.

8.  Material Smoke Plan.

9.  Workstream 2C Task List.

### 7.4. Workstream 2D — Batch / QC / Release / Warehouse / Inventory

**Mục tiêu**

Thiết kế boundary cho Batch / QC / Release / Warehouse / Inventory để bảo đảm:

1.  Batch linked Production Order.

2.  Batch process state rõ.

3.  Batch QC là một bước riêng.

4.  Batch QC_PASS không đồng nghĩa RELEASED.

5.  Batch Release là gate riêng.

6.  Warehouse chỉ nhận Batch RELEASED.

7.  Finished goods chỉ tăng tồn khi warehouse receipt confirmed.

8.  Inventory Ledger append-only.

9.  Inventory balance là projection từ ledger.

10. Warehouse receipt retry không double credit.

**Output bắt buộc**

1.  Batch Boundary.

2.  Batch QC Boundary.

3.  Batch Release Boundary.

4.  Warehouse Receipt Boundary.

5.  Finished Goods Ledger Credit Rule.

6.  Inventory Ledger Append-only Rule.

7.  Inventory Projection Boundary.

8.  Warehouse Evidence Plan.

9.  Warehouse Smoke Plan.

10. Workstream 2D Task List.

### 7.5. Workstream 2E — Traceability / QR / Public Trace / Recall / Sale Lock

**Mục tiêu**

Thiết kế boundary cho Traceability / QR / Public Trace / Recall / Sale Lock để bảo đảm:

1.  Traceability nối source → raw lot → production order → batch → warehouse receipt.

2.  Internal genealogy có thể phục vụ recall.

3.  QR có status rõ.

4.  QR VOID/FAILED không public-valid.

5.  Public Trace whitelist-only.

6.  Public Trace không lộ private/internal field.

7.  Recall có impact analysis.

8.  Recall/Hold/Sale Lock chặn downstream.

9.  Recall/Sale Lock thắng Commerce / AI / Ads / Live / CRM / Gateway / IVR.

10. Recall close cần evidence nếu policy yêu cầu.

**Output bắt buộc**

1.  Traceability Boundary.

2.  QR Boundary.

3.  Public Trace Boundary.

4.  Recall Boundary.

5.  Hold / Sale Lock Boundary.

6.  Public Whitelist DTO Plan.

7.  Recall Evidence Plan.

8.  Trace / Recall Smoke Plan.

9.  Workstream 2E Task List.

### 7.6. Workstream 2F — Operational Smoke / Evidence / Report

**Mục tiêu**

Thiết kế kế hoạch smoke/evidence cuối PHASE 2 để bảo đảm:

1.  Mỗi business rule P2 có smoke.

2.  Mỗi high-risk command có evidence.

3.  Mỗi ledger side effect có idempotency smoke.

4.  Mỗi release/warehouse/public trace/recall rule có negative smoke.

5.  Evidence chỉ submitted, chưa accepted.

6.  Không gọi Release Ready khi chỉ có PHASE 2 local smoke.

7.  Có handoff sang PHASE 3 Commerce Runtime Analysis Only.

**Output bắt buộc**

1.  PHASE 2 Smoke Matrix.

2.  PHASE 2 Evidence Register.

3.  PHASE 2 Open Blocker Register.

4.  PHASE 2 Risk Register.

5.  PHASE 2 Handoff Decision.

6.  Workstream 2F Task List.

## 8. TECHNICAL DESIGN MATRICES

Agent phải tạo các ma trận sau.

### 8.1. Workstream Matrix

| **Workstream** | **Domain**                                   | **Current State From P2** | **Target State** | **P2 Blocker** | **Dependency** | **Output** |
|----------------|----------------------------------------------|---------------------------|------------------|----------------|----------------|------------|
| 2A             | Source / Raw / QC / Readiness                |                           |                  |                |                |            |
| 2B             | Production Order / Snapshot                  |                           |                  |                |                |            |
| 2C             | Material Issue / Receipt / Ledger            |                           |                  |                |                |            |
| 2D             | Batch / QC / Release / Warehouse / Inventory |                           |                  |                |                |            |
| 2E             | Traceability / QR / Recall / Sale Lock       |                           |                  |                |                |            |
| 2F             | Smoke / Evidence / Report                    |                           |                  |                |                |            |

### 8.2. Task Breakdown Matrix

Mỗi task phải có đủ:

1.  Task ID.

2.  Phase.

3.  Workstream.

4.  Source-of-truth.

5.  Requirement summary.

6.  Scope In.

7.  Scope Out.

8.  Upstream dependency.

9.  Downstream handoff.

10. P2 blocker liên quan.

11. Evidence required.

12. Smoke required.

13. Owner.

14. Report requirement.

15. Done Gate.

16. Fail Gate.

17. Initial status.

| **Task ID** | **Workstream** | **Requirement**                      | **Scope In** | **Scope Out** | **Dependency** | **Evidence** | **Smoke** | **Owner** | **Status** |
|-------------|----------------|--------------------------------------|--------------|---------------|----------------|--------------|-----------|-----------|------------|
| P2-TASK-001 | 2A             | Source / Raw Material Foundation     |              |               |                |              |           |           | DRAFT      |
| P2-TASK-002 | 2A             | Raw Lot / QC / Readiness Gate        |              |               |                |              |           |           | DRAFT      |
| P2-TASK-003 | 2B             | Production Order Foundation          |              |               |                |              |           |           | DRAFT      |
| P2-TASK-004 | 2B             | Formula Snapshot                     |              |               |                |              |           |           | DRAFT      |
| P2-TASK-005 | 2C             | Material Request / Issue             |              |               |                |              |           |           | DRAFT      |
| P2-TASK-006 | 2C             | Material Receipt / No Double Debit   |              |               |                |              |           |           | DRAFT      |
| P2-TASK-007 | 2D             | Batch / QC / Release                 |              |               |                |              |           |           | DRAFT      |
| P2-TASK-008 | 2D             | Warehouse Receipt / Inventory Ledger |              |               |                |              |           |           | DRAFT      |
| P2-TASK-009 | 2E             | Traceability / QR / Public Trace     |              |               |                |              |           |           | DRAFT      |
| P2-TASK-010 | 2E             | Recall / Hold / Sale Lock            |              |               |                |              |           |           | DRAFT      |
| P2-TASK-011 | 2F             | Smoke / Evidence / Report            |              |               |                |              |           |           | DRAFT      |

### 8.3. Dependency Matrix

| **Dependency ID** | **Upstream**          | **Downstream**                            | **Dependency Type**   | **Blocked If Missing**                  | **Required Evidence** |
|-------------------|-----------------------|-------------------------------------------|-----------------------|-----------------------------------------|-----------------------|
| P2-DEP-001        | PHASE 0 Actor Context | All Operational Commands                  | Security / audit      | Không biết ai thao tác                  |                       |
| P2-DEP-002        | PHASE 0 RBAC          | QC / Issue / Release / Warehouse / Recall | Permission            | Không enforce backend permission        |                       |
| P2-DEP-003        | PHASE 0 Audit         | Operational state changes                 | Traceability          | Không truy vết thay đổi                 |                       |
| P2-DEP-004        | PHASE 0 Evidence      | QC / Release / Recall                     | Governance            | Không có evidence cho quyết định        |                       |
| P2-DEP-005        | PHASE 0 Idempotency   | Issue / Receipt / Release / Warehouse     | Duplicate safety      | Double debit/credit                     |                       |
| P2-DEP-006        | PHASE 1 SKU           | Production Order                          | Domain dependency     | Production order không biết SKU         |                       |
| P2-DEP-007        | PHASE 1 Recipe/BOM    | Production Snapshot                       | Data dependency       | Không snapshot formula/BOM              |                       |
| P2-DEP-008        | Raw Lot Readiness     | Material Issue                            | Operational gate      | Lot chưa ready vẫn issue                |                       |
| P2-DEP-009        | Material Issue        | Raw Ledger                                | Inventory side effect | Không giảm tồn đúng điểm                |                       |
| P2-DEP-010        | Batch Release         | Warehouse Receipt                         | Warehouse gate        | Warehouse nhận batch chưa released      |                       |
| P2-DEP-011        | Warehouse Receipt     | Commerce Sellable Gate                    | Downstream truth      | Commerce không biết tồn thành phẩm thật |                       |
| P2-DEP-012        | Recall / Sale Lock    | Commerce / AI / Gateway / Ads / IVR       | Suppression           | Downstream vẫn bán SKU bị recall        |                       |

### 8.4. Evidence Plan Matrix

| **Evidence ID** | **Related Task**    | **Evidence Required**                          | **When Produced** | **Reviewer**   | **Accepted Required For** |
|-----------------|---------------------|------------------------------------------------|-------------------|----------------|---------------------------|
| P2-EVD-PLAN-001 | Raw Lot Readiness   | QC_PASS != READY_FOR_PRODUCTION smoke evidence | After smoke       | Owner/dev lead | P2 Done Review            |
| P2-EVD-PLAN-002 | Production Snapshot | Snapshot formula/version/BOM evidence          | After smoke       | Owner/dev lead | P2 Done Review            |
| P2-EVD-PLAN-003 | Material Issue      | Ledger debit + no double debit evidence        | After smoke       | Owner/dev lead | P2 Done Review            |
| P2-EVD-PLAN-004 | Material Receipt    | No second debit evidence                       | After smoke       | Owner/dev lead | P2 Done Review            |
| P2-EVD-PLAN-005 | Batch Release       | QC_PASS != RELEASED evidence                   | After smoke       | Owner/dev lead | P2 Done Review            |
| P2-EVD-PLAN-006 | Warehouse Receipt   | RELEASED gate + ledger credit evidence         | After smoke       | Owner/dev lead | P2 Done Review            |
| P2-EVD-PLAN-007 | Inventory Ledger    | Append-only ledger evidence                    | After smoke       | Owner/dev lead | P2 Done Review            |
| P2-EVD-PLAN-008 | Public Trace        | Whitelist-only response evidence               | After smoke       | Owner/dev lead | P2 Done Review            |
| P2-EVD-PLAN-009 | Recall / Sale Lock  | Stop-sale suppression evidence                 | After smoke       | Owner/dev lead | P2 Done Review            |
| P2-EVD-PLAN-010 | Phase 2 Report      | Smoke/evidence register evidence               | After P2.2F       | Owner/dev lead | PHASE 3 handoff review    |

### 8.5. Smoke Plan Matrix

| **Smoke ID** | **Related Task**    | **Scenario**                                     | **Expected Result**                              | **Required Before Handoff** |
|--------------|---------------------|--------------------------------------------------|--------------------------------------------------|-----------------------------|
| P2-SMOKE-001 | Raw Lot Readiness   | Raw lot QC_PASS nhưng chưa READY_FOR_PRODUCTION  | Không được issue                                 | Yes                         |
| P2-SMOKE-002 | Raw Lot Readiness   | Raw lot READY_FOR_PRODUCTION                     | Được phép issue nếu đủ guard                     | Yes                         |
| P2-SMOKE-003 | Material Issue      | Retry material issue cùng key/payload            | Không double debit                               | Yes                         |
| P2-SMOKE-004 | Material Receipt    | Material receipt sau issue                       | Không giảm tồn lần hai                           | Yes                         |
| P2-SMOKE-005 | Production Snapshot | Production order tạo từ recipe                   | Snapshot formula/version/ingredient/quantity/UOM | Yes                         |
| P2-SMOKE-006 | Batch QC / Release  | Batch QC_PASS nhưng chưa RELEASED                | Warehouse không được nhận                        | Yes                         |
| P2-SMOKE-007 | Warehouse Receipt   | Batch RELEASED                                   | Warehouse receipt được phép nếu đủ guard         | Yes                         |
| P2-SMOKE-008 | Warehouse Receipt   | Retry warehouse receipt                          | Không double credit                              | Yes                         |
| P2-SMOKE-009 | Inventory Ledger    | Ledger mutation attempt                          | Không update/delete ledger                       | Yes                         |
| P2-SMOKE-010 | QR / Public Trace   | QR VOID/FAILED                                   | Public Trace không valid                         | Yes                         |
| P2-SMOKE-011 | Public Trace        | Public trace response                            | Whitelist-only, không private leak               | Yes                         |
| P2-SMOKE-012 | Recall / Sale Lock  | Recall/Sale Lock active                          | Downstream bị chặn                               | Yes                         |
| P2-SMOKE-013 | Runtime Fail-safe   | Runtime unavailable                              | Không suy đoán, fail-safe                        | Yes                         |
| P2-SMOKE-014 | Evidence Gate       | Evidence SUBMITTED dùng cho release/recall close | Không pass nếu cần ACCEPTED                      | Yes                         |

## 9. BOUNDARY RULES BẮT BUỘC

### 9.1. Raw Lot QC_PASS Boundary

Raw Lot QC_PASS chỉ có nghĩa:

1.  Raw lot đã qua kiểm tra chất lượng đầu vào.

2.  Raw lot có kết quả QC đạt theo tiêu chí QC.

3.  Raw lot có thể được xem xét để readiness.

Raw Lot QC_PASS không có nghĩa:

1.  Được phép issue ngay.

2.  Được phép dùng trong production.

3.  Đã READY_FOR_PRODUCTION.

4.  Đã vượt qua mọi guard.

5.  Đã có đủ evidence/approval nếu policy yêu cầu.

Nguyên tắc bắt buộc:

**RAW_LOT QC_PASS không đồng nghĩa READY_FOR_PRODUCTION.**

### 9.2. READY_FOR_PRODUCTION Boundary

READY_FOR_PRODUCTION là gate riêng.

Raw lot chỉ được đánh READY_FOR_PRODUCTION khi:

1.  Raw lot tồn tại.

2.  Raw lot QC đạt.

3.  Raw lot không bị hold/reject/quarantine.

4.  Raw lot có quantity/UOM hợp lệ.

5.  Raw lot có evidence nếu policy yêu cầu.

6.  Actor có quyền.

7.  Audit event được ghi nếu foundation hỗ trợ.

8.  Idempotency được kiểm soát nếu command có side effect.

Nguyên tắc bắt buộc:

**Raw lot chỉ được issue khi READY_FOR_PRODUCTION.**

### 9.3. Production Order Snapshot Boundary

Production Order phải snapshot:

1.  SKU.

2.  Recipe.

3.  Formula kind.

4.  Formula version.

5.  Ingredient.

6.  Quantity.

7.  UOM.

8.  Recipe/BOM line.

9.  Effective metadata tại thời điểm tạo order.

Nguyên tắc bắt buộc:

**Production Order không được phụ thuộc động vào recipe hiện tại sau khi đã tạo.**

### 9.4. Material Issue Boundary

Material Issue là điểm giảm tồn nguyên liệu chính.

Material Issue phải:

1.  Kiểm raw lot READY_FOR_PRODUCTION.

2.  Kiểm quantity/UOM.

3.  Kiểm production order hợp lệ.

4.  Ghi ledger debit nguyên liệu.

5.  Có idempotency để tránh double debit.

6.  Có audit.

7.  Có actor/correlation.

8.  Không tạo double side effect khi retry.

Nguyên tắc bắt buộc:

**Material Issue là điểm giảm tồn nguyên liệu chính.**

### 9.5. Material Receipt Boundary

Material Receipt / Workshop Receipt chỉ xác nhận xưởng nhận nguyên liệu.

Material Receipt không được:

1.  Giảm tồn nguyên liệu lần hai.

2.  Tạo raw ledger debit lần hai.

3.  Bỏ qua issue record.

4.  Sửa ledger issue cũ.

5.  Tự điều chỉnh tồn nếu chưa có adjustment flow.

Nguyên tắc bắt buộc:

**Material Receipt không được giảm tồn lần hai.**

### 9.6. Batch QC / Release Boundary

Batch QC_PASS chỉ có nghĩa:

1.  Batch đã đạt kết quả QC.

2.  Batch có thể được xem xét release.

Batch QC_PASS không có nghĩa:

1.  Batch đã RELEASED.

2.  Batch được warehouse nhận.

3.  Thành phẩm đã tăng tồn.

4.  SKU đã sellable.

Nguyên tắc bắt buộc:

**Batch QC_PASS không đồng nghĩa Batch RELEASED.**

### 9.7. Warehouse Receipt Boundary

Warehouse chỉ được nhận:

1.  Batch đã RELEASED.

2.  Batch không bị hold/reject.

3.  Batch có quantity/UOM hợp lệ.

4.  Batch có guard/evidence nếu policy yêu cầu.

Warehouse receipt confirmed mới:

1.  Ghi finished goods ledger credit.

2.  Cập nhật balance projection.

3.  Tạo available finished goods foundation cho Commerce sau này.

Nguyên tắc bắt buộc:

**Warehouse chỉ nhận batch RELEASED.**
**Finished goods chỉ tăng tồn khi warehouse receipt confirmed.**

### 9.8. Inventory Ledger Boundary

Inventory Ledger phải:

1.  Append-only.

2.  Không update/delete nghiệp vụ.

3.  Có debit/credit rõ.

4.  Có reference object.

5.  Có actor/correlation/audit nếu foundation hỗ trợ.

6.  Có idempotency linkage cho side-effect commands.

7.  Balance phải là projection từ ledger.

Nguyên tắc bắt buộc:

**Inventory Ledger append-only.**

### 9.9. Public Trace Boundary

Public Trace chỉ được trả dữ liệu whitelist.

Public Trace không được lộ:

1.  Supplier private detail.

2.  Internal cost.

3.  Internal formula ratio.

4.  Internal QC defect detail.

5.  Internal loss/variance.

6.  Personnel note.

7.  MISA/accounting data.

8.  Evidence private.

9.  Recall internal note.

10. Any private/internal field.

Nguyên tắc bắt buộc:

**Public Trace whitelist-only.**

### 9.10. QR Boundary

QR status phải được kiểm soát.

QR không public-valid nếu:

1.  VOID.

2.  FAILED.

3.  Missing public trace policy.

4.  Missing trace projection.

5.  Linked batch/lot bị recall/sale lock nếu policy yêu cầu.

Nguyên tắc bắt buộc:

**QR VOID/FAILED không public-valid.**

### 9.11. Recall / Sale Lock Boundary

Recall / Sale Lock phải thắng:

1.  Commerce.

2.  AI Advisor.

3.  Facebook Gateway.

4.  Ads.

5.  MC AI Live.

6.  CRM.

7.  IVR.

8.  Any channel selling flow.

Nguyên tắc bắt buộc:

**Recall / Sale Lock thắng Commerce, AI, Ads, Live, CRM, Gateway, IVR.**

## 10. P2 BLOCKER HANDLING

Agent phải chuyển blocker từ P2 Analysis Report thành bảng xử lý.

| **Blocker ID** | **Root Cause**                           | **Required Decision** | **Required Fix Later** | **Evidence** | **Smoke** | **Downstream Impact**       | **Owner** | **Status** |
|----------------|------------------------------------------|-----------------------|------------------------|--------------|-----------|-----------------------------|-----------|------------|
| P2-BLOCKER-001 | QC_PASS bị dùng làm READY_FOR_PRODUCTION |                       |                        |              |           | Production / Material Issue |           | DRAFT      |
| P2-BLOCKER-002 | Material Issue không kiểm readiness      |                       |                        |              |           | Inventory / Production      |           | DRAFT      |
| P2-BLOCKER-003 | Material Receipt double debit            |                       |                        |              |           | Inventory                   |           | DRAFT      |
| P2-BLOCKER-004 | Production Order không snapshot formula  |                       |                        |              |           | Traceability / Costing      |           | DRAFT      |
| P2-BLOCKER-005 | Batch QC_PASS bị dùng làm RELEASED       |                       |                        |              |           | Warehouse / Commerce        |           | DRAFT      |
| P2-BLOCKER-006 | Inventory Ledger không append-only       |                       |                        |              |           | Audit / Finance / Warehouse |           | DRAFT      |
| P2-BLOCKER-007 | Public Trace không whitelist-only        |                       |                        |              |           | Public / Gateway            |           | DRAFT      |
| P2-BLOCKER-008 | Recall/Sale Lock không chặn downstream   |                       |                        |              |           | Commerce / AI / Ads / IVR   |           | DRAFT      |

Status được phép:

1.  DRAFT.

2.  BLOCKED_BY_OWNER_DECISION.

3.  BLOCKED_BY_SOURCE_OF_TRUTH.

4.  BLOCKED_BY_DEPENDENCY.

5.  READY_FOR_REVIEW.

6.  APPROVED_FOR_IMPLEMENTATION_PROMPT.

Không dùng:

- DONE.

- PASS.

- RELEASE READY.

- PRODUCTION READY.

- GO-LIVE APPROVED.

## 11. IMPLEMENTATION SEQUENCE ĐỀ XUẤT

Agent phải đề xuất implementation sequence theo thứ tự an toàn.

### 11.1. Thứ tự khuyến nghị

1.  Source / Raw Material foundation.

2.  Raw Receipt / Raw Lot foundation.

3.  Incoming QC foundation.

4.  Raw Lot Readiness Gate.

5.  Production Order foundation.

6.  Formula Snapshot / Recipe Snapshot.

7.  Material Request foundation.

8.  Material Issue + Raw Ledger Debit.

9.  Material Receipt / Workshop Receipt no-double-debit.

10. Production Batch foundation.

11. Batch QC foundation.

12. Batch Release Gate.

13. Warehouse Receipt + Finished Goods Ledger Credit.

14. Inventory Ledger append-only / Balance projection.

15. Traceability / Genealogy.

16. QR / Public Trace whitelist.

17. Recall / Hold / Sale Lock.

18. PHASE 2 Smoke / Evidence / Report.

### 11.2. Không được đảo thứ tự nguy hiểm

Không được làm Material Issue trước khi:

1.  Raw Lot có readiness gate.

2.  Raw Lot QC_PASS != READY_FOR_PRODUCTION được khóa.

3.  Inventory ledger foundation rõ.

4.  Idempotency foundation từ PHASE 0 dùng được.

5.  Audit foundation từ PHASE 0 dùng được.

Không được làm Warehouse Receipt trước khi:

1.  Batch QC/Release boundary rõ.

2.  Batch QC_PASS != RELEASED được khóa.

3.  Finished goods ledger credit rule rõ.

4.  Inventory ledger append-only rõ.

Không được làm Public Trace trước khi:

1.  Internal trace/genealogy rõ.

2.  Public whitelist DTO rõ.

3.  QR status boundary rõ.

4.  Recall/Sale Lock impact rõ.

## 12. PROMPT IMPLEMENTATION SAU P2.1

Nếu P2.1 đạt Done Gate, các prompt tiếp theo nên chia nhỏ:

### 12.1. PROMPT-P2.2A

**SOURCE / RAW MATERIAL / RAW LOT / QC / READINESS IMPLEMENTATION HANDOFF**
**MODE: LIMITED IMPLEMENTATION**

Phạm vi:

1.  Source origin.

2.  Raw material master.

3.  Raw receipt.

4.  Raw lot.

5.  Incoming QC.

6.  READY_FOR_PRODUCTION gate.

7.  Không làm material issue đầy đủ.

8.  Không làm production order đầy đủ.

### 12.2. PROMPT-P2.2B

**PRODUCTION ORDER / SNAPSHOT / WORKSHOP IMPLEMENTATION HANDOFF**
**MODE: LIMITED IMPLEMENTATION**

Phạm vi:

1.  Production order foundation.

2.  Formula snapshot.

3.  Recipe snapshot.

4.  Production order state.

5.  Workshop handoff foundation.

6.  Không làm material issue ledger đầy đủ.

### 12.3. PROMPT-P2.2C

**MATERIAL ISSUE / MATERIAL RECEIPT / INVENTORY LEDGER IMPLEMENTATION HANDOFF**
**MODE: LIMITED IMPLEMENTATION**

Phạm vi:

1.  Material request.

2.  Material issue.

3.  Raw ledger debit.

4.  Material receipt.

5.  No double debit.

6.  Idempotency smoke.

7.  Không làm batch release/warehouse full.

### 12.4. PROMPT-P2.2D

**BATCH / QC / RELEASE / WAREHOUSE / INVENTORY IMPLEMENTATION HANDOFF**
**MODE: LIMITED IMPLEMENTATION**

Phạm vi:

1.  Production batch.

2.  Batch process state.

3.  Batch QC.

4.  Batch release.

5.  Warehouse receipt.

6.  Finished goods ledger credit.

7.  Inventory balance projection.

8.  No double credit.

### 12.5. PROMPT-P2.2E

**TRACEABILITY / QR / PUBLIC TRACE / RECALL / SALE LOCK IMPLEMENTATION HANDOFF**
**MODE: LIMITED IMPLEMENTATION**

Phạm vi:

1.  Internal trace/genealogy.

2.  QR status boundary.

3.  Public Trace whitelist.

4.  Recall case.

5.  Hold / Sale Lock.

6.  Downstream suppression hooks.

7.  No public private leak.

### 12.6. PROMPT-P2.2F

**PHASE 2 SMOKE / EVIDENCE / IMPLEMENTATION REPORT HANDOFF**
**MODE: VALIDATION / SMOKE / EVIDENCE REPORT ONLY**

Phạm vi:

1.  Smoke PHASE 2.

2.  Evidence register.

3.  Open blocker.

4.  Risk register.

5.  Handoff sang PHASE 3.

6.  Không gọi Release Ready.

## 13. SECURITY / GOVERNANCE GUARDRAILS

Agent phải giữ các guardrail sau:

1.  Không hardcode QC_PASS = READY_FOR_PRODUCTION.

2.  Không hardcode Batch QC_PASS = RELEASED.

3.  Không cho Raw Lot chưa ready issue.

4.  Không để Material Receipt giảm tồn lần hai.

5.  Không để Ledger update/delete.

6.  Không để retry tạo double debit/credit.

7.  Không để Production Order phụ thuộc động recipe hiện tại sau khi đã tạo.

8.  Không để Warehouse nhận batch chưa RELEASED.

9.  Không để QR VOID/FAILED public-valid.

10. Không để Public Trace lộ private/internal field.

11. Không để Recall/Sale Lock bị downstream bypass.

12. Không bỏ qua Actor/RBAC/Audit/Evidence/Idempotency PHASE 0.

13. Không gọi smoke cục bộ là Global Smoke Pass.

14. Không gọi Documentation Complete là Production Ready.

15. Không mở Global Gateway.

## 14. REQUIRED REPORT FORMAT — 14 MỤC

Agent phải báo cáo đúng 14 mục.

### 14.1. Mục 1 — Tóm tắt

Ghi rõ:

1.  Prompt đã chạy: PROMPT-P2.1.

2.  Mode: TECHNICAL DESIGN ONLY.

3.  Đầu vào đã dùng.

4.  Workstream đã tạo.

5.  Task breakdown đã tạo.

6.  Blocker chính.

7.  Implementation sequence đề xuất.

8.  Trạng thái cuối.

Không được ghi PHASE 2 Complete / Release Ready / Production Ready / Go-live Approved.

### 14.2. Mục 2 — File đã sửa

Bắt buộc ghi:

1.  Không sửa file.

2.  Không tạo file.

3.  Không tạo code.

4.  Không tạo migration.

5.  Không tạo seed.

6.  Không update database.

7.  Git status/git diff nếu có.

### 14.3. Mục 3 — Nguồn yêu cầu

Liệt kê:

1.  PROMPT-P2 Analysis Report.

2.  PHASE 0 Validation Report.

3.  PHASE 1 Smoke / Evidence Report.

4.  TECH-01.

5.  TECH-10.

6.  TECH-11.

7.  TECH-12.

8.  TECH-13.

9.  TECH Operational Core nếu có.

10. Legacy docs nếu có đọc, ghi rõ LEGACY_REFERENCE_ONLY.

### 14.4. Mục 4 — Evidence đã dùng

Liệt kê:

| **Evidence ID** | **Type** | **Source** | **Domain** | **Status** | **Limitation** |
|-----------------|----------|------------|------------|------------|----------------|

Bắt buộc ghi:

**Evidence Submitted, not Evidence Accepted.**

### 14.5. Mục 5 — Lệnh đã chạy

Liệt kê:

1.  Lệnh inspect nếu có.

2.  Lệnh search nếu có.

3.  Lệnh git status/git diff nếu có.

4.  Nếu không chạy lệnh, ghi lý do.

Không chạy lệnh phá hủy.

### 14.6. Mục 6 — Kết quả test

Ghi rõ:

1.  Không viết test mới.

2.  Không sửa test.

3.  Có đọc/chạy test hiện có hay không.

4.  Smoke cần chạy ở prompt implementation sau.

Không gọi test cục bộ là Global Smoke Pass.

### 14.7. Mục 7 — Kết quả backend build

Ghi rõ:

1.  Backend build có chạy không.

2.  Nếu không chạy, lý do.

3.  Không sửa code để build pass.

### 14.8. Mục 8 — Kết quả frontend build

Ghi rõ:

1.  Frontend build có chạy không.

2.  Nếu không chạy, lý do.

3.  Không sửa frontend.

### 14.9. Mục 9 — Kết quả cleanup process

Ghi rõ:

1.  Có process nào mở không.

2.  Có server/test runner cần dừng không.

3.  Có file tạm không.

4.  Có artifact phát sinh không.

5.  Có cần cleanup không.

### 14.10. Mục 10 — Cập nhật Markdown

Bắt buộc ghi:

1.  Không cập nhật Markdown.

2.  Không sửa tài liệu trong repo.

3.  Chỉ trả handoff trong response.

Nếu có cập nhật Markdown ngoài ý muốn thì FAIL.

### 14.11. Mục 11 — Kết quả database migration/update nếu áp dụng

Bắt buộc ghi:

1.  Không tạo migration.

2.  Không chạy migration.

3.  Không update database.

4.  Chỉ thiết kế migration need nếu cần cho prompt sau.

### 14.12. Mục 12 — Kết quả seed validation nếu áp dụng

Ghi rõ:

1.  Không tạo seed.

2.  Không sửa seed.

3.  Chỉ thiết kế seed governance.

4.  Seed validation sẽ thuộc prompt implementation sau.

### 14.13. Mục 13 — Rủi ro còn lại

Phân nhóm:

1.  Source / Raw risk.

2.  Raw Lot Readiness risk.

3.  Production Snapshot risk.

4.  Material Issue risk.

5.  Material Receipt risk.

6.  Inventory Ledger risk.

7.  Batch QC / Release risk.

8.  Warehouse Receipt risk.

9.  Traceability / Public Trace risk.

10. Recall / Sale Lock risk.

11. Downstream PHASE 3/4/5 risk.

12. Release Gateway risk.

13. Global Gateway risk.

### 14.14. Mục 14 — Cập nhật handoff

Phải ghi:

1.  Workstream summary.

2.  Task breakdown summary.

3.  Blocker handling.

4.  Evidence plan.

5.  Smoke plan.

6.  Implementation sequence.

7.  Prompt tiếp theo đề xuất.

8.  Điều kiện để được chuyển sang P2.2A.

9.  Trạng thái cuối.

Bắt buộc ghi:

PROMPT-P2.1 FINAL STATUS: TECHNICAL DESIGN HANDOFF ONLY
NOT PHASE 2 COMPLETE
NOT IMPLEMENTATION COMPLETE
NOT COMPLETION PASS
NOT RELEASE READY
NOT PRODUCTION READY
NOT GO-LIVE APPROVED
GLOBAL GATEWAY: BLOCKED

## 15. DONE GATE

PROMPT-P2.1 chỉ được xem là done khi đủ:

1.  Đã đọc PROMPT-P2 Analysis Report.

2.  Đã đọc TECH source-of-truth.

3.  Đã tạo Workstream Matrix.

4.  Đã tạo Task Breakdown Matrix.

5.  Đã tạo Dependency Matrix.

6.  Đã tạo Evidence Plan Matrix.

7.  Đã tạo Smoke Plan Matrix.

8.  Đã khóa QC_PASS != READY_FOR_PRODUCTION.

9.  Đã khóa Raw Lot chỉ issue khi READY_FOR_PRODUCTION.

10. Đã khóa Material Issue là điểm giảm tồn nguyên liệu chính.

11. Đã khóa Material Receipt không giảm tồn lần hai.

12. Đã khóa Production Order snapshot formula/BOM.

13. Đã khóa Batch QC_PASS != RELEASED.

14. Đã khóa Warehouse chỉ nhận Batch RELEASED.

15. Đã khóa Inventory Ledger append-only.

16. Đã khóa Public Trace whitelist-only.

17. Đã khóa QR VOID/FAILED không public-valid.

18. Đã khóa Recall/Sale Lock thắng downstream.

19. Đã có implementation sequence.

20. Đã có prompt tiếp theo đề xuất.

21. Đã report đủ 14 mục.

22. Không sửa file.

23. Không tạo code.

24. Không tạo migration.

25. Không tạo seed.

26. Không gọi PHASE 2 Complete / Release Ready / Production Ready / Go-live Approved.

27. Global Gateway vẫn BLOCKED.

Trạng thái tối đa được phép:

**PHASE 2 TECHNICAL DESIGN HANDOFF COMPLETED**

Không được gọi:

- PHASE 2 Complete.

- Implementation Complete.

- Completion PASS.

- Release Ready.

- Production Ready.

- Go-live Approved.

- Gateway PASS.

## 16. FAIL GATE

PROMPT-P2.1 phải fail nếu:

1.  Agent sửa file.

2.  Agent tạo code.

3.  Agent tạo migration.

4.  Agent tạo seed.

5.  Agent update database.

6.  Agent không dùng PROMPT-P2 Analysis Report.

7.  Agent không lập workstream.

8.  Agent không lập task breakdown.

9.  Agent không lập dependency matrix.

10. Agent không lập evidence plan.

11. Agent không lập smoke plan.

12. Agent gọi QC_PASS là READY_FOR_PRODUCTION.

13. Agent gọi QC_PASS là RELEASED.

14. Agent bỏ qua Material Issue / Receipt boundary.

15. Agent bỏ qua Inventory Ledger append-only.

16. Agent bỏ qua Public Trace whitelist-only.

17. Agent bỏ qua Recall / Sale Lock.

18. Agent hardcode nghiệp vụ Operational Core.

19. Agent gọi Technical Design là Implementation Complete.

20. Agent gọi Release Ready / Production Ready / Go-live Approved.

21. Agent mở Global Gateway.

22. Agent không report đủ 14 mục.

Nếu fail, agent phải ghi:

**PROMPT-P2.1 FAIL GATE — TECHNICAL DESIGN HANDOFF NOT ACCEPTED**

## 17. DOWNSTREAM HANDOFF

### 17.1. Prompt tiếp theo nếu P2.1 đạt Done Gate

Nếu PROMPT-P2.1 đạt Done Gate, prompt tiếp theo nên là:

**PROMPT-P2.2A — SOURCE / RAW MATERIAL / RAW LOT / QC / READINESS IMPLEMENTATION HANDOFF**

**MODE: LIMITED IMPLEMENTATION**

**V1.0 CLEAN FINAL**

P2.2A chỉ được bắt đầu khi:

1.  P2 Analysis Report đã có.

2.  P2.1 Technical Design Handoff đã có.

3.  Source / Raw / QC / Readiness scope rõ.

4.  QC_PASS != READY_FOR_PRODUCTION boundary rõ.

5.  Raw lot issue gate rõ.

6.  Owner/dev lead cho phép limited implementation.

### 17.2. Không tự chuyển mode

Agent không được tự chuyển từ:

**TECHNICAL DESIGN ONLY**

sang:

**LIMITED IMPLEMENTATION**

Chỉ owner/dev lead mới được cho phép prompt implementation tiếp theo.

## 18. PROMPT COPY GIAO DEV / CODEX / COPILOT

### 18.1. Nội dung prompt

**BẮT ĐẦU PROMPT**

Bạn đang tiếp tục dự án Ginsengfood theo GREENFIELD TECH SOURCE-OF-TRUTH.

PHASE HIỆN TẠI:

**PHASE-02 — OPERATIONAL CORE**

PROMPT HIỆN TẠI:

**PROMPT-P2.1 — OPERATIONAL CORE TECHNICAL DESIGN HANDOFF**

MODE:

**TECHNICAL DESIGN ONLY — DO NOT MODIFY FILES**

PROMPT TIẾP THEO:

**PROMPT-P2.2A — SOURCE / RAW MATERIAL / RAW LOT / QC / READINESS IMPLEMENTATION HANDOFF**

Bạn chỉ được thiết kế handoff kỹ thuật.

Bạn không được sửa file.

Bạn không được tạo code.

Bạn không được tạo migration.

Bạn không được tạo seed.

Bạn không được update database.

Bạn không được tự đổi nghiệp vụ.

Bạn không được hardcode policy.

Bạn không được gọi Raw Lot QC_PASS là READY_FOR_PRODUCTION.

Bạn không được gọi Batch QC_PASS là RELEASED.

Bạn không được mở Global Gateway.

Bạn không được gọi Completion PASS / Release Ready / Production Ready / Go-live Approved.

**A. Source-of-truth bắt buộc**

Bạn phải đọc:

1.  PROMPT-P2 Analysis Report.

2.  PHASE 0 Validation Report.

3.  PHASE 1 Smoke / Evidence Report.

4.  TECH-01.

5.  TECH-10.

6.  TECH-11.

7.  TECH-12.

8.  TECH-13.

9.  TECH Operational Core nếu có.

Quy tắc:

- TECH mới thắng code cũ.

- TECH mới thắng tài liệu cũ.

- Code hiện tại chỉ là CURRENT_IMPLEMENTATION_STATE_ONLY.

- Legacy chỉ là LEGACY_REFERENCE_ONLY.

- Nếu thiếu source-of-truth, báo BLOCKED, không tự suy luận.

**B. Scope In**

Bạn phải lập technical design cho:

1.  Source / Raw Material / Raw Lot / QC / Readiness.

2.  Production Order / Formula Snapshot / Workshop.

3.  Material Request / Material Issue / Material Receipt / Ledger.

4.  Batch / QC / Release / Warehouse / Inventory.

5.  Traceability / QR / Public Trace / Recall / Sale Lock.

6.  Operational Smoke / Evidence / Report.

**C. Scope Out**

Bạn không được:

1.  Sửa code.

2.  Tạo code.

3.  Tạo migration.

4.  Tạo seed.

5.  Tạo API.

6.  Tạo UI.

7.  Tạo production order.

8.  Issue material.

9.  Receipt material.

10. Release batch.

11. Confirm warehouse receipt.

12. Tạo QR.

13. Public trace dữ liệu.

14. Kích hoạt recall/sale lock.

15. Sửa Commerce / AI Advisor / Gateway.

16. Gọi PHASE 2 Complete.

17. Mở Global Gateway.

**D. Workstream bắt buộc**

Bạn phải chia thành:

1.  Workstream 2A — Source / Raw Material / Raw Lot / QC / Readiness.

2.  Workstream 2B — Production Order / Formula Snapshot / Workshop.

3.  Workstream 2C — Material Request / Material Issue / Material Receipt / Ledger.

4.  Workstream 2D — Batch / QC / Release / Warehouse / Inventory.

5.  Workstream 2E — Traceability / QR / Public Trace / Recall / Sale Lock.

6.  Workstream 2F — Operational Smoke / Evidence / Report.

**E. Ma trận bắt buộc**

Bạn phải tạo:

1.  Workstream Matrix.

2.  Task Breakdown Matrix.

3.  Dependency Matrix.

4.  Evidence Plan Matrix.

5.  Smoke Plan Matrix.

6.  P2 Blocker Handling Matrix.

7.  Implementation Sequence.

**F. Boundary bắt buộc**

Bạn phải ghi rõ:

1.  Raw Lot QC_PASS không đồng nghĩa READY_FOR_PRODUCTION.

2.  Raw lot chỉ được issue khi READY_FOR_PRODUCTION.

3.  Material Issue là điểm giảm tồn nguyên liệu chính.

4.  Material Receipt không được giảm tồn lần hai.

5.  Production Order phải snapshot formula kind/version/ingredient/quantity/UOM.

6.  Batch QC_PASS không đồng nghĩa RELEASED.

7.  Warehouse chỉ nhận Batch RELEASED.

8.  Finished goods chỉ tăng tồn khi warehouse receipt confirmed.

9.  Inventory Ledger append-only.

10. Public Trace whitelist-only.

11. QR VOID/FAILED không public-valid.

12. Recall/Sale Lock thắng Commerce / AI / Ads / Live / CRM / Gateway / IVR.

**G. Mỗi task phải có đủ**

1.  Task ID.

2.  Phase.

3.  Workstream.

4.  Source-of-truth.

5.  Requirement summary.

6.  Scope In.

7.  Scope Out.

8.  Upstream dependency.

9.  Downstream handoff.

10. P2 blocker liên quan.

11. Evidence required.

12. Smoke required.

13. Owner.

14. Report requirement.

15. Done Gate.

16. Fail Gate.

17. Initial status.

**H. Report format 14 mục**

Bạn phải báo cáo đúng 14 mục:

1.  Tóm tắt.

2.  File đã sửa.

3.  Nguồn yêu cầu.

4.  Evidence đã dùng.

5.  Lệnh đã chạy.

6.  Kết quả test.

7.  Kết quả backend build.

8.  Kết quả frontend build.

9.  Kết quả cleanup process.

10. Cập nhật Markdown.

11. Kết quả database migration/update nếu áp dụng.

12. Kết quả seed validation nếu áp dụng.

13. Rủi ro còn lại.

14. Cập nhật handoff.

**I. Done Gate**

Chỉ được coi là done nếu:

1.  Có workstream matrix.

2.  Có task breakdown.

3.  Có dependency matrix.

4.  Có evidence plan.

5.  Có smoke plan.

6.  Có blocker handling.

7.  Có implementation sequence.

8.  Có đầy đủ Operational Core boundary.

9.  Không sửa file.

10. Không tạo code.

11. Không tạo migration.

12. Không tạo seed.

13. Global Gateway vẫn BLOCKED.

**J. Fail Gate**

Phải fail nếu:

1.  Sửa file.

2.  Tạo code.

3.  Tạo migration.

4.  Tạo seed.

5.  Gọi QC_PASS là READY_FOR_PRODUCTION.

6.  Gọi QC_PASS là RELEASED.

7.  Không tạo task breakdown.

8.  Không tạo evidence plan.

9.  Không tạo smoke plan.

10. Tự đổi nghiệp vụ.

11. Hardcode policy.

12. Gọi Release Ready / Production Ready / Go-live Approved.

13. Mở Global Gateway.

**K. Trạng thái cuối bắt buộc**

Kết thúc report phải ghi:

PROMPT-P2.1 FINAL STATUS: TECHNICAL DESIGN HANDOFF ONLY
NOT PHASE 2 COMPLETE
NOT IMPLEMENTATION COMPLETE
NOT COMPLETION PASS
NOT RELEASE READY
NOT PRODUCTION READY
NOT GO-LIVE APPROVED
GLOBAL GATEWAY: BLOCKED

**KẾT THÚC PROMPT**

## 19. FINAL STATUS

### 19.1. Trạng thái tài liệu

**PROMPT-P2.1 DOCUMENT STATUS: CLEAN FINAL**

### 19.2. Trạng thái thực thi

**TECHNICAL DESIGN HANDOFF ONLY**

### 19.3. Phạm vi

**OPERATIONAL CORE TECHNICAL DESIGN ONLY**

### 19.4. Trạng thái PHASE 2

**NOT PHASE 2 COMPLETE**

### 19.5. Trạng thái implementation

**NOT IMPLEMENTATION COMPLETE**

### 19.6. Trạng thái Completion

**NOT COMPLETION PASS**

### 19.7. Trạng thái release

**NOT RELEASE READY**

### 19.8. Trạng thái production

**NOT PRODUCTION READY**

### 19.9. Trạng thái go-live

**NOT GO-LIVE APPROVED**

### 19.10. Trạng thái Global Gateway

**GLOBAL GATEWAY: BLOCKED**
