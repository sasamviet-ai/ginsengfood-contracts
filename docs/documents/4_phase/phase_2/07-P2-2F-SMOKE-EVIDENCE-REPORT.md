**FILE: 07-P2-2F-SMOKE-EVIDENCE-REPORT.docx**

**PROMPT-P2.2F — PHASE 2 SMOKE / EVIDENCE / IMPLEMENTATION REPORT HANDOFF**

**MODE: VALIDATION / SMOKE / EVIDENCE REPORT ONLY**

**V1.0 CLEAN FINAL**

## 1. PHASE MARKER

### 1.1. Phase hiện tại

**PHASE-02 — OPERATIONAL CORE**

### 1.2. Prompt hiện tại

**PROMPT-P2.2F — PHASE 2 SMOKE / EVIDENCE / IMPLEMENTATION REPORT HANDOFF**

### 1.3. Mode

**MODE: VALIDATION / SMOKE / EVIDENCE REPORT ONLY**

### 1.4. Prompt liền trước

**PROMPT-P2.2E — TRACEABILITY / QR / PUBLIC TRACE / RECALL / SALE LOCK IMPLEMENTATION HANDOFF**

### 1.5. Prompt tiếp theo

**PROMPT-P3 — COMMERCE RUNTIME / SELLABLE GATE / QUOTE / ORDER / PAYMENT / SHIPPING ANALYSIS HANDOFF**

### 1.6. Điều kiện bắt đầu P2.2F

PROMPT-P2.2F chỉ được bắt đầu khi:

1.  PROMPT-P2 Analysis Report đã có.

2.  PROMPT-P2.1 Technical Design Handoff đã có.

3.  P2.2A Implementation Report đã có.

4.  P2.2B Implementation Report đã có.

5.  P2.2C Implementation Report đã có.

6.  P2.2D Implementation Report đã có.

7.  P2.2E Implementation Report đã có.

8.  Toàn bộ limited implementation của PHASE 2 đã có report 14 mục.

9.  Agent có quyền inspect codebase thật.

10. Agent có thể chạy build/test/smoke phù hợp.

11. Global Gateway vẫn BLOCKED.

### 1.7. Điều kiện chuyển sang PHASE 3

Chỉ được viết **PROMPT-P3 — Commerce Runtime Analysis Only** khi:

1.  P2.2F đã chạy/ghi nhận smoke PHASE 2.

2.  P2.2F đã lập Evidence Register.

3.  P2.2F đã lập Open Blocker Register.

4.  P2.2F đã lập Risk Register.

5.  Không còn P0/P1/P2 blocker nghiêm trọng mở.

6.  Evidence đã được submit cho owner/reviewer.

7.  PHASE 2 report đủ 14 mục.

8.  Owner/dev lead cho phép viết PROMPT-P3.

9.  Global Gateway vẫn BLOCKED.

Lưu ý:

**P2.2F completed không đồng nghĩa Release Ready.**
**P2.2F completed không đồng nghĩa Production Ready.**
**P2.2F completed không đồng nghĩa Go-live Approved.**

## 2. HEADER

### 2.1. Tên prompt

**PROMPT-P2.2F — PHASE 2 SMOKE / EVIDENCE / IMPLEMENTATION REPORT HANDOFF**

### 2.2. Vị trí trong roadmap

PROMPT-P2.2F là prompt kết thúc kiểm tra PHASE 2 ở mức:

1.  Validation.

2.  Smoke.

3.  Evidence.

4.  Risk register.

5.  Blocker register.

6.  Handoff sang PHASE 3.

PROMPT-P2.2F không triển khai feature mới.

PROMPT-P2.2F không sửa code nghiệp vụ.

PROMPT-P2.2F không mở Global Gateway.

### 2.3. Mục tiêu

Mục tiêu của PROMPT-P2.2F là yêu cầu dev/Codex/Copilot:

1.  Đọc toàn bộ report P2 → P2.2E.

2.  Inspect codebase thật sau implementation.

3.  Chạy build/test/lint phù hợp.

4.  Chạy smoke PHASE 2.

5.  Kiểm tra migration nếu có.

6.  Kiểm tra seed nếu có.

7.  Kiểm tra git status/git diff.

8.  Gom evidence PHASE 2.

9.  Lập Smoke Result Matrix.

10. Lập Evidence Register.

11. Lập Open Blocker Register.

12. Lập Risk Register.

13. Lập PHASE 2 Implementation Summary.

14. Đề xuất handoff sang PHASE 3 nếu đủ điều kiện review.

15. Không gọi Completion PASS / Release Ready / Production Ready / Go-live Approved.

## 3. MODE: VALIDATION / SMOKE / EVIDENCE REPORT ONLY

### 3.1. Chế độ thực thi

**MODE: VALIDATION / SMOKE / EVIDENCE REPORT ONLY**

Agent được phép:

1.  Đọc tài liệu source-of-truth.

2.  Đọc toàn bộ report PHASE 2.

3.  Inspect codebase thật.

4.  Chạy build.

5.  Chạy test.

6.  Chạy smoke.

7.  Chạy lint nếu repo yêu cầu.

8.  Kiểm tra migration nếu có.

9.  Kiểm tra seed nếu có.

10. Kiểm tra git status/git diff.

11. Gom evidence.

12. Lập report 14 mục.

### 3.2. Các hành động bị cấm

Agent không được:

1.  Tạo feature code mới.

2.  Sửa business logic.

3.  Sửa Source / Raw / QC logic.

4.  Sửa Production Order logic.

5.  Sửa Material Issue / Receipt / Ledger logic.

6.  Sửa Batch / Release / Warehouse logic.

7.  Sửa Traceability / QR / Recall / Sale Lock logic.

8.  Tạo migration mới.

9.  Tạo seed mới.

10. Update database thật.

11. Mở Global Gateway.

12. Gọi Completion PASS.

13. Gọi Release Ready.

14. Gọi Production Ready.

15. Gọi Go-live Approved.

16. Tự chuyển sang PHASE 3 implementation.

Nếu smoke fail do code cần sửa, agent không được tự vá trong P2.2F. Agent phải báo fail và map về prompt cần sửa.

## 4. SOURCE-OF-TRUTH BẮT BUỘC

Agent phải đọc và ưu tiên:

1.  **PROMPT-P2 Analysis Report**

2.  **PROMPT-P2.1 Technical Design Handoff**

3.  **P2.2A Source / Raw / QC / Readiness Implementation Report**

4.  **P2.2B Production Order / Snapshot / Workshop Implementation Report**

5.  **P2.2C Material Issue / Receipt / Ledger Implementation Report**

6.  **P2.2D Batch / QC / Release / Warehouse / Inventory Implementation Report**

7.  **P2.2E Traceability / QR / Public Trace / Recall / Sale Lock Implementation Report**

8.  **PHASE 0 Validation Report**

9.  **PHASE 1 Smoke / Evidence / Implementation Report**

10. **TECH-01 — Foundation / RBAC / Audit / Evidence / Idempotency**

11. **TECH-10 — Global Smoke / UAT / Evidence / Release Gateway**

12. **TECH-11 — Implementation Roadmap / Dev Phase Plan**

13. **TECH-12 — Phase Backlog Pack**

14. **TECH-13 — Codex / Copilot Dev Prompt Pack**

Quy tắc ưu tiên:

1.  TECH mới thắng code cũ.

2.  TECH mới thắng tài liệu cũ.

3.  Code hiện tại chỉ là **CURRENT_IMPLEMENTATION_STATE_ONLY**.

4.  Report implementation là evidence đầu vào, chưa phải Evidence Accepted.

5.  Smoke local không phải Global Smoke Pass.

6.  P2 evidence submitted chưa phải Completion PASS.

7.  Không dùng legacy làm nền nghiệp vụ.

8.  Nếu phát hiện conflict thì báo cáo, không tự sửa ngoài mode.

## 5. SCOPE IN

PROMPT-P2.2F phải kiểm tra toàn bộ PHASE 2 theo các cụm sau:

1.  Source / Raw Material / Raw Lot / QC / Readiness.

2.  Production Order / Formula Snapshot / Workshop.

3.  Material Request / Material Issue / Material Receipt / Raw Inventory Ledger.

4.  Batch / Batch QC / Batch Release.

5.  Warehouse Receipt / Finished Goods Ledger / Balance Projection.

6.  Traceability / Genealogy.

7.  QR / Public Trace.

8.  Recall / Hold / Sale Lock.

9.  Operational Actor / RBAC / Audit / Evidence / Idempotency linkage.

10. Migration / Seed nếu có.

11. Build / Test / Lint.

12. Evidence / Smoke / Risk / Blocker.

## 6. SCOPE OUT

PROMPT-P2.2F không được:

1.  Sửa code nghiệp vụ.

2.  Tạo feature mới.

3.  Tạo API mới.

4.  Tạo UI mới.

5.  Tạo migration mới.

6.  Tạo seed mới.

7.  Sửa Commerce Runtime.

8.  Sửa AI Advisor.

9.  Sửa Facebook Gateway.

10. Sửa Ads.

11. Sửa MC AI Live.

12. Sửa IVR.

13. Sửa Release Gateway.

14. Gọi Gateway PASS.

15. Gọi Release Ready.

16. Gọi Production Ready.

17. Gọi Go-live Approved.

Nếu phát hiện cần sửa, chỉ ghi handoff quay lại prompt tương ứng.

## 7. PHASE 2 SMOKE MATRIX

### 7.1. Smoke nhóm P2.2A — Source / Raw / QC / Readiness

| **Smoke ID**  | **Scenario**                      | **Expected Result**                           | **Fail Handoff** |
|---------------|-----------------------------------|-----------------------------------------------|------------------|
| P2F-SMOKE-A01 | Tạo Raw Material hợp lệ           | Raw Material được tạo                         | P2.2A            |
| P2F-SMOKE-A02 | Tạo Raw Material Receipt hợp lệ   | Receipt được tạo                              | P2.2A            |
| P2F-SMOKE-A03 | Tạo Raw Lot từ receipt hợp lệ     | Raw Lot CREATED/PENDING_QC                    | P2.2A            |
| P2F-SMOKE-A04 | Raw Lot thiếu UOM/quantity        | Bị reject                                     | P2.2A            |
| P2F-SMOKE-A05 | Incoming QC PASS                  | QC PASS, raw lot chưa tự READY_FOR_PRODUCTION | P2.2A            |
| P2F-SMOKE-A06 | Incoming QC FAIL/HOLD             | Raw lot không READY_FOR_PRODUCTION            | P2.2A            |
| P2F-SMOKE-A07 | Raw lot QC_PASS + đủ điều kiện    | Mark READY_FOR_PRODUCTION                     | P2.2A            |
| P2F-SMOKE-A08 | Raw lot HOLD/REJECTED/QUARANTINE  | Không READY_FOR_PRODUCTION                    | P2.2A            |
| P2F-SMOKE-A09 | Raw lot chưa READY_FOR_PRODUCTION | Không pass issue eligibility                  | P2.2A            |

### 7.2. Smoke nhóm P2.2B — Production Order / Snapshot

| **Smoke ID**  | **Scenario**                              | **Expected Result**                                        | **Fail Handoff** |
|---------------|-------------------------------------------|------------------------------------------------------------|------------------|
| P2F-SMOKE-B01 | Tạo Production Order từ SKU/Recipe hợp lệ | Production Order được tạo                                  | P2.2B            |
| P2F-SMOKE-B02 | Production Order thiếu SKU                | Bị reject                                                  | P2.2B            |
| P2F-SMOKE-B03 | Production Order thiếu Recipe             | Bị reject                                                  | P2.2B            |
| P2F-SMOKE-B04 | Recipe thiếu BOM line                     | Production Order bị reject                                 | P2.2B            |
| P2F-SMOKE-B05 | Production Order snapshot                 | Có formula kind/version/ingredient/quantity/UOM            | P2.2B            |
| P2F-SMOKE-B06 | Recipe/BOM sửa sau khi tạo order          | Snapshot cũ không đổi                                      | P2.2B            |
| P2F-SMOKE-B07 | Demand từ Sales/Đại lý                    | Không tự phát Production Order nếu chưa qua resolver/guard | P2.2B            |
| P2F-SMOKE-B08 | Production Order created                  | Không tự material issue, không debit inventory             | P2.2B            |

### 7.3. Smoke nhóm P2.2C — Material Issue / Receipt / Raw Ledger

| **Smoke ID**  | **Scenario**                                    | **Expected Result**                  | **Fail Handoff** |
|---------------|-------------------------------------------------|--------------------------------------|------------------|
| P2F-SMOKE-C01 | Material Request linked Production Order        | Request được tạo, không debit ledger | P2.2C            |
| P2F-SMOKE-C02 | Material Issue raw lot READY_FOR_PRODUCTION     | Issue được tạo                       | P2.2C            |
| P2F-SMOKE-C03 | Material Issue raw lot QC_PASS chưa READY       | Bị reject                            | P2.2C            |
| P2F-SMOKE-C04 | Material Issue raw lot HOLD/REJECTED/QUARANTINE | Bị reject                            | P2.2C            |
| P2F-SMOKE-C05 | Material Issue thành công                       | Tạo raw ledger debit                 | P2.2C            |
| P2F-SMOKE-C06 | Retry Material Issue same key/payload           | Không double debit                   | P2.2C            |
| P2F-SMOKE-C07 | Same key different payload                      | Conflict nếu idempotency hook có     | P2.2C            |
| P2F-SMOKE-C08 | Material Receipt linked Issue                   | Receipt được tạo                     | P2.2C            |
| P2F-SMOKE-C09 | Material Receipt thành công                     | Không tạo raw ledger debit lần hai   | P2.2C            |
| P2F-SMOKE-C10 | Ledger update/delete attempt qua service        | Không được phép                      | P2.2C            |

### 7.4. Smoke nhóm P2.2D — Batch / Release / Warehouse / Inventory

| **Smoke ID**  | **Scenario**                                  | **Expected Result**                    | **Fail Handoff** |
|---------------|-----------------------------------------------|----------------------------------------|------------------|
| P2F-SMOKE-D01 | Tạo Batch linked Production Order             | Batch được tạo                         | P2.2D            |
| P2F-SMOKE-D02 | PROCESS_COMPLETED                             | Không tự QC_PASS, không RELEASED       | P2.2D            |
| P2F-SMOKE-D03 | Batch QC PASS                                 | QC record PASS, batch chưa tự RELEASED | P2.2D            |
| P2F-SMOKE-D04 | Batch QC FAIL/HOLD/REJECTED                   | Không release được                     | P2.2D            |
| P2F-SMOKE-D05 | Batch Release khi QC_PASS + guard pass        | Batch RELEASED                         | P2.2D            |
| P2F-SMOKE-D06 | Warehouse Receipt Batch QC_PASS chưa RELEASED | Bị reject                              | P2.2D            |
| P2F-SMOKE-D07 | Warehouse Receipt Batch RELEASED              | Receipt được confirm                   | P2.2D            |
| P2F-SMOKE-D08 | Warehouse Receipt confirmed                   | Tạo Finished Goods Ledger credit       | P2.2D            |
| P2F-SMOKE-D09 | Retry Warehouse Receipt same key/payload      | Không double credit                    | P2.2D            |
| P2F-SMOKE-D10 | Warehouse Receipt confirmed                   | Không tự set Sellable                  | P2.2D            |

### 7.5. Smoke nhóm P2.2E — Traceability / QR / Recall / Sale Lock

| **Smoke ID**  | **Scenario**                       | **Expected Result**                                     | **Fail Handoff** |
|---------------|------------------------------------|---------------------------------------------------------|------------------|
| P2F-SMOKE-E01 | Build internal genealogy           | Trace link từ raw lot → production → batch → warehouse  | P2.2E            |
| P2F-SMOKE-E02 | Missing genealogy link             | Trace gap flagged                                       | P2.2E            |
| P2F-SMOKE-E03 | QR GENERATED/PRINTED               | QR có status hợp lệ                                     | P2.2E            |
| P2F-SMOKE-E04 | QR VOID                            | Public Trace không valid                                | P2.2E            |
| P2F-SMOKE-E05 | QR FAILED                          | Public Trace không valid                                | P2.2E            |
| P2F-SMOKE-E06 | Public Trace response              | Whitelist-only                                          | P2.2E            |
| P2F-SMOKE-E07 | Public Trace private field attempt | Không lộ private/internal field                         | P2.2E            |
| P2F-SMOKE-E08 | Recall Case OPEN                   | Recall case được tạo                                    | P2.2E            |
| P2F-SMOKE-E09 | Recall impact analysis             | Xác định impacted batch/QR/SKU                          | P2.2E            |
| P2F-SMOKE-E10 | Sale Lock active                   | Target bị suppression                                   | P2.2E            |
| P2F-SMOKE-E11 | Sale Lock active downstream hook   | Commerce/AI/Gateway/Ads/Live/CRM/IVR bị chặn ở boundary | P2.2E            |

### 7.6. Smoke nhóm cross-cutting PHASE 2

| **Smoke ID**  | **Scenario**                                      | **Expected Result**                | **Fail Handoff**       |
|---------------|---------------------------------------------------|------------------------------------|------------------------|
| P2F-SMOKE-X01 | High-risk operational command thiếu actor         | DENY / BLOCK                       | P0 / Related P2 prompt |
| P2F-SMOKE-X02 | High-risk operational command thiếu permission    | DENY                               | P0 / Related P2 prompt |
| P2F-SMOKE-X03 | Command require evidence nhưng evidence SUBMITTED | Không pass                         | P0 / Related P2 prompt |
| P2F-SMOKE-X04 | Idempotency same key same payload                 | Không tạo side effect lần hai      | P0 / Related P2 prompt |
| P2F-SMOKE-X05 | Idempotency same key different payload            | Conflict                           | P0 / Related P2 prompt |
| P2F-SMOKE-X06 | Runtime dependency unavailable                    | Fail-safe, không suy đoán          | Related P2 prompt      |
| P2F-SMOKE-X07 | Audit event for success/deny                      | Có actor/correlation/action/result | P0 / Related P2 prompt |

Không gọi bất kỳ smoke nào ở đây là Global Smoke Pass.

## 8. EVIDENCE REQUIREMENTS

### 8.1. Evidence phải gom

Agent phải gom evidence cho:

1.  Source-of-truth đã đọc.

2.  Report P2 / P2.1 / P2.2A / P2.2B / P2.2C / P2.2D / P2.2E.

3.  Danh sách file đã sửa trong PHASE 2.

4.  Git diff summary.

5.  Build result.

6.  Test result.

7.  Smoke result.

8.  Migration validation nếu có.

9.  Seed validation nếu có.

10. Raw Lot QC_PASS != READY_FOR_PRODUCTION smoke.

11. Production Order snapshot smoke.

12. Material Issue no double debit smoke.

13. Material Receipt no second debit smoke.

14. Batch QC_PASS != RELEASED smoke.

15. Warehouse only accepts RELEASED batch smoke.

16. No double credit smoke.

17. Inventory Ledger append-only smoke.

18. Public Trace whitelist-only smoke.

19. QR VOID/FAILED not public-valid smoke.

20. Recall / Sale Lock downstream suppression smoke.

21. Open blocker/risk.

### 8.2. Evidence status được phép dùng

Trong P2.2F, agent chỉ được dùng các status:

| **Status**        | **Ý nghĩa**                      |
|-------------------|----------------------------------|
| FOUND             | Tìm thấy evidence                |
| SUBMITTED         | Đã đưa vào report                |
| MISSING           | Chưa có evidence                 |
| NEEDS_REVIEW      | Cần owner/reviewer kiểm tra      |
| REJECTED_BY_SMOKE | Smoke/test không chứng minh được |
| BLOCKED           | Không thể kiểm tra               |

Agent không được tự ghi:

1.  ACCEPTED.

2.  COMPLETION PASS.

3.  RELEASE READY.

4.  PRODUCTION READY.

5.  GO-LIVE APPROVED.

### 8.3. Evidence Accepted rule

Agent phải ghi rõ:

1.  Evidence trong P2.2F chỉ là **Evidence Submitted**.

2.  Evidence Submitted chưa phải Evidence Accepted.

3.  Evidence chỉ accepted sau khi owner/reviewer kiểm tra.

4.  Evidence Accepted cũng chưa đồng nghĩa Release Ready.

5.  Release Ready phải qua TECH-10 và Global Smoke/Release Gateway sau này.

## 9. BUILD / TEST / LINT REQUIREMENTS

Agent phải chạy hoặc báo lý do không chạy:

1.  Backend build.

2.  Backend test.

3.  Backend lint nếu repo có.

4.  Frontend build nếu PHASE 2 có đụng frontend hoặc repo yêu cầu.

5.  Frontend test nếu có.

6.  Migration validation nếu có migration.

7.  Seed validation nếu có seed.

8.  Targeted smoke P2.2A → P2.2E.

9.  Git status.

10. Git diff.

Nếu lệnh fail, agent không được tự sửa feature code trong P2.2F.

Agent phải báo:

**P2.2F SMOKE FAILED — RETURN TO RELATED PROMPT**

## 10. OPEN BLOCKER REGISTER

Agent phải lập bảng:

| **Blocker ID**  | **Domain** | **Description** | **Evidence** | **Failed Smoke** | **Required Fix Prompt** | **Severity** | **Status** |
|-----------------|------------|-----------------|--------------|------------------|-------------------------|--------------|------------|
| P2F-BLOCKER-001 |            |                 |              |                  | P2.2A/B/C/D/E           | P0/P1        | OPEN       |

P2 blocker bắt buộc nếu:

1.  Raw Lot QC_PASS bị dùng làm READY_FOR_PRODUCTION.

2.  Raw lot chưa READY_FOR_PRODUCTION vẫn issue được.

3.  Material Issue không tạo raw ledger debit.

4.  Material Receipt tạo debit lần hai.

5.  Inventory Ledger update/delete được.

6.  Material Issue retry tạo double debit.

7.  Warehouse Receipt retry tạo double credit.

8.  Production Order không snapshot formula/BOM.

9.  Recipe/BOM sửa làm snapshot cũ thay đổi.

10. Batch QC_PASS bị dùng làm RELEASED.

11. Warehouse nhận Batch chưa RELEASED.

12. Finished Goods Ledger credit tạo trước warehouse receipt confirmed.

13. Warehouse Receipt tự set Sellable.

14. Public Trace không whitelist-only.

15. QR VOID/FAILED public-valid.

16. Recall/Sale Lock không chặn downstream.

17. Global Gateway không còn BLOCKED.

## 11. RISK REGISTER

Agent phải lập Risk Register tối thiểu:

| **Risk ID**  | **Domain**                         | **Risk Description** | **Severity** | **Impact** | **Required Action** | **Owner** | **Status** |
|--------------|------------------------------------|----------------------|--------------|------------|---------------------|-----------|------------|
| P2F-RISK-001 | Raw Lot Readiness                  |                      |              |            |                     |           | OPEN       |
| P2F-RISK-002 | Production Snapshot                |                      |              |            |                     |           | OPEN       |
| P2F-RISK-003 | Material Issue / Receipt           |                      |              |            |                     |           | OPEN       |
| P2F-RISK-004 | Inventory Ledger                   |                      |              |            |                     |           | OPEN       |
| P2F-RISK-005 | Batch QC / Release                 |                      |              |            |                     |           | OPEN       |
| P2F-RISK-006 | Warehouse / FG Inventory           |                      |              |            |                     |           | OPEN       |
| P2F-RISK-007 | Traceability / Public Trace        |                      |              |            |                     |           | OPEN       |
| P2F-RISK-008 | Recall / Sale Lock                 |                      |              |            |                     |           | OPEN       |
| P2F-RISK-009 | Downstream Commerce / AI / Gateway |                      |              |            |                     |           | OPEN       |
| P2F-RISK-010 | Release Gateway                    |                      |              |            |                     |           | OPEN       |

## 12. HANDOFF DECISION

### 12.1. Decision hợp lệ sau P2.2F

Sau P2.2F, chỉ có các decision hợp lệ sau:

| **Decision**                       | **Ý nghĩa**                                          |
|------------------------------------|------------------------------------------------------|
| PHASE2_REPORT_SUBMITTED_FOR_REVIEW | Báo cáo đã submit cho owner/reviewer                 |
| PHASE2_SMOKE_FAILED                | Smoke fail, cần quay lại prompt liên quan            |
| PHASE2_EVIDENCE_MISSING            | Thiếu evidence                                       |
| PHASE2_BLOCKED_BY_P0_OR_P1_OR_P2   | Có blocker từ phase trước hoặc PHASE 2               |
| PHASE2_READY_FOR_OWNER_REVIEW      | Đủ điều kiện để owner/reviewer xem xét               |
| PHASE3_PROMPT_DRAFT_ALLOWED        | Được phép viết prompt PHASE 3 draft nếu owner đồng ý |

Không có decision:

1.  Completion PASS.

2.  Release Ready.

3.  Production Ready.

4.  Go-live Approved.

5.  Gateway PASS.

### 12.2. Điều kiện được viết PROMPT-P3

Chỉ được viết PROMPT-P3 khi:

1.  P2.2F report đủ 14 mục.

2.  Không có P0/P1/P2 blocker nghiêm trọng mở.

3.  Smoke PHASE 2 tối thiểu pass hoặc fail đã được xử lý.

4.  Evidence đã submit đầy đủ cho owner/reviewer.

5.  Owner/dev lead cho phép viết prompt PHASE 3.

6.  Global Gateway vẫn BLOCKED.

PROMPT-P3 nên bắt đầu bằng:

**PROMPT-P3 — COMMERCE RUNTIME / SELLABLE GATE / QUOTE / ORDER / PAYMENT / SHIPPING ANALYSIS HANDOFF**
**MODE: ANALYSIS ONLY**

Không được nhảy ngay vào implementation PHASE 3 nếu chưa analysis codebase/domain thật.

## 13. EXECUTION STEPS

Agent phải làm theo thứ tự:

1.  Đọc TECH-01 / TECH-10 / TECH-11 / TECH-12 / TECH-13.

2.  Đọc PHASE 0 Validation Report.

3.  Đọc PHASE 1 Smoke / Evidence Report.

4.  Đọc PROMPT-P2 Analysis Report.

5.  Đọc PROMPT-P2.1 Technical Design Handoff.

6.  Đọc report P2.2A.

7.  Đọc report P2.2B.

8.  Đọc report P2.2C.

9.  Đọc report P2.2D.

10. Đọc report P2.2E.

11. Inspect codebase thật.

12. Xác định file changes trong PHASE 2.

13. Chạy build/test/lint phù hợp.

14. Chạy smoke P2.2A → P2.2E.

15. Kiểm tra migration nếu có.

16. Kiểm tra seed nếu có.

17. Kiểm tra git status/git diff.

18. Gom evidence.

19. Lập Smoke Result Matrix.

20. Lập Evidence Register.

21. Lập Open Blocker Register.

22. Lập Risk Register.

23. Lập Handoff Decision.

24. Trả report đúng 14 mục.

## 14. REQUIRED REPORT FORMAT — 14 MỤC

Agent phải trả báo cáo đúng 14 mục.

### 14.1. Mục 1 — Tóm tắt

Phải ghi:

1.  Prompt đã chạy: PROMPT-P2.2F.

2.  Mode: VALIDATION / SMOKE / EVIDENCE REPORT ONLY.

3.  Scope đã kiểm tra.

4.  Tổng kết smoke P2.2A → P2.2E.

5.  Tổng kết evidence.

6.  P2 blocker còn lại nếu có.

7.  Handoff decision.

8.  Trạng thái cuối.

Không được ghi PHASE 2 Complete / Completion PASS / Release Ready / Production Ready / Go-live Approved.

### 14.2. Mục 2 — File đã sửa

Ghi rõ:

1.  P2.2F có sửa file không.

2.  Nếu có, chỉ được là test/report trong scope.

3.  Không sửa feature code.

4.  Không sửa business domain.

5.  Git diff summary.

6.  Danh sách file thay đổi từ P2.2A → P2.2E nếu tổng hợp được.

### 14.3. Mục 3 — Nguồn yêu cầu

Liệt kê:

1.  TECH-01.

2.  TECH-10.

3.  TECH-11.

4.  TECH-12.

5.  TECH-13.

6.  PHASE 0 Validation Report.

7.  PHASE 1 Smoke / Evidence Report.

8.  PROMPT-P2 Analysis Report.

9.  PROMPT-P2.1 Technical Design Handoff.

10. PROMPT-P2.2A report.

11. PROMPT-P2.2B report.

12. PROMPT-P2.2C report.

13. PROMPT-P2.2D report.

14. PROMPT-P2.2E report.

### 14.4. Mục 4 — Evidence đã dùng

Phải có bảng:

| **Evidence ID** | **Evidence Type** | **Source** | **Domain** | **Status** | **Limitation** |
|-----------------|-------------------|------------|------------|------------|----------------|

Ghi rõ:

**Evidence Submitted, not Evidence Accepted.**

### 14.5. Mục 5 — Lệnh đã chạy

Liệt kê:

1.  Lệnh build.

2.  Lệnh test.

3.  Lệnh smoke.

4.  Lệnh lint.

5.  Lệnh migration validation nếu có.

6.  Lệnh seed validation nếu có.

7.  Lệnh git status/git diff.

8.  Lệnh cleanup nếu có.

### 14.6. Mục 6 — Kết quả test

Ghi rõ:

1.  Tổng số test chạy.

2.  Test pass.

3.  Test fail.

4.  Test skipped.

5.  Test không chạy được.

6.  Lý do fail/skip.

7.  Mapping fail về P2.2A → P2.2E.

Không gọi test pass là Global Smoke Pass.

### 14.7. Mục 7 — Kết quả backend build

Ghi rõ:

1.  Backend build có chạy không.

2.  Kết quả.

3.  Log tóm tắt.

4.  Nếu fail, nguyên nhân.

5.  Nếu không chạy, lý do.

### 14.8. Mục 8 — Kết quả frontend build

Ghi rõ:

1.  Frontend build có chạy không.

2.  Có cần chạy không.

3.  Kết quả.

4.  Nếu fail, nguyên nhân.

5.  Nếu không chạy, lý do.

### 14.9. Mục 9 — Kết quả cleanup process

Ghi rõ:

1.  Có process nào mở không.

2.  Có server/test runner cần dừng không.

3.  Có file tạm không.

4.  Có build artifact không.

5.  Có cleanup không.

6.  Trạng thái môi trường sau kiểm tra.

### 14.10. Mục 10 — Cập nhật Markdown

Ghi rõ:

1.  Có tạo/cập nhật report Markdown không.

2.  Nếu có, file nào.

3.  Có đúng scope P2.2F không.

4.  Nếu không, ghi “Không cập nhật Markdown”.

### 14.11. Mục 11 — Kết quả database migration/update nếu áp dụng

Ghi rõ:

1.  Có migration nào trong P2.2A → P2.2E không.

2.  Migration validation có chạy không.

3.  Có update database thật không.

4.  Nếu không update DB thật, ghi rõ.

5.  Migration risk còn lại.

Không được chạy production migration.

### 14.12. Mục 12 — Kết quả seed validation nếu áp dụng

Ghi rõ:

1.  Có seed nào bị thay đổi không.

2.  Seed validation có chạy không.

3.  Seed có hardcode admin/secret không.

4.  Seed có tạo production operational state thật không.

5.  Seed có tạo inventory side effect ngoài controlled fixture không.

6.  Seed có phù hợp dev/test/baseline không.

7.  Seed risk còn lại.

### 14.13. Mục 13 — Rủi ro còn lại

Phân nhóm:

1.  Source / Raw / QC / Readiness risk.

2.  Production Order / Snapshot risk.

3.  Material Issue / Receipt / Ledger risk.

4.  Batch / QC / Release risk.

5.  Warehouse / Finished Goods Inventory risk.

6.  Traceability / QR / Public Trace risk.

7.  Recall / Sale Lock risk.

8.  Operational audit/evidence/idempotency risk.

9.  Migration / seed risk.

10. Test coverage risk.

11. Downstream PHASE 3 Commerce risk.

12. Downstream PHASE 4 AI risk.

13. Release Gateway risk.

14. Global Gateway risk.

### 14.14. Mục 14 — Cập nhật handoff

Phải ghi:

1.  PHASE 2 smoke summary.

2.  Evidence register summary.

3.  Blocker register summary.

4.  Prompt cần quay lại nếu fail.

5.  Điều kiện để viết PROMPT-P3.

6.  Handoff decision.

7.  Trạng thái cuối.

Bắt buộc ghi:

PROMPT-P2.2F FINAL STATUS: PHASE 2 VALIDATION REPORT ONLY
PHASE 2 EVIDENCE SUBMITTED FOR REVIEW ONLY
NOT PHASE 2 COMPLETE UNTIL OWNER REVIEW
NOT COMPLETION PASS
NOT RELEASE READY
NOT PRODUCTION READY
NOT GO-LIVE APPROVED
GLOBAL GATEWAY: BLOCKED

## 15. DONE GATE

PROMPT-P2.2F chỉ được xem là done khi đủ:

1.  Đã đọc source-of-truth.

2.  Đã đọc PHASE 0 report.

3.  Đã đọc PHASE 1 report.

4.  Đã đọc P2 → P2.2E reports.

5.  Đã inspect codebase thật.

6.  Đã chạy hoặc báo rõ build/test/lint.

7.  Đã chạy hoặc báo rõ smoke P2.2A → P2.2E.

8.  Đã kiểm tra migration nếu có.

9.  Đã kiểm tra seed nếu có.

10. Đã gom evidence.

11. Đã lập Smoke Result Matrix.

12. Đã lập Evidence Register.

13. Đã lập Open Blocker Register.

14. Đã lập Risk Register.

15. Đã mapping fail về prompt cần sửa.

16. Đã có git status/git diff.

17. Không sửa feature code ngoài scope.

18. Không mở Global Gateway.

19. Không gọi Completion PASS.

20. Không gọi Release Ready.

21. Không gọi Production Ready.

22. Không gọi Go-live Approved.

23. Report đủ 14 mục.

Trạng thái tối đa được phép:

**PHASE 2 VALIDATION REPORT SUBMITTED FOR OWNER REVIEW**

Không được gọi:

1.  PHASE 2 Complete.

2.  Completion PASS.

3.  Release Ready.

4.  Production Ready.

5.  Go-live Approved.

6.  Gateway PASS.

## 16. FAIL GATE

PROMPT-P2.2F phải fail nếu:

1.  Không đọc report P2.2A → P2.2E.

2.  Không inspect codebase.

3.  Không chạy hoặc không báo build/test/smoke.

4.  Smoke fail nhưng vẫn gọi done.

5.  Evidence missing nhưng vẫn gọi Completion PASS.

6.  Evidence Submitted bị gọi là Evidence Accepted.

7.  Test pass bị gọi là Global Smoke Pass.

8.  Agent sửa feature code ngoài scope.

9.  Agent sửa business domain.

10. Agent mở Global Gateway.

11. Agent gọi Release Ready.

12. Agent gọi Production Ready.

13. Agent gọi Go-live Approved.

14. Agent không report đủ 14 mục.

15. Agent không chỉ rõ blocker/risk còn lại.

Nếu fail, agent phải ghi:

**PROMPT-P2.2F FAIL GATE — PHASE 2 VALIDATION NOT ACCEPTED**

## 17. DOWNSTREAM HANDOFF

### 17.1. Nếu P2.2F đạt Done Gate nhưng chưa owner review

Trạng thái:

**PHASE 2 VALIDATION REPORT SUBMITTED FOR OWNER REVIEW**

Chưa được gọi:

1.  Completion PASS.

2.  PHASE 3 Ready.

3.  Release Ready.

4.  Production Ready.

5.  Go-live Approved.

### 17.2. Nếu owner/dev lead chấp nhận P2.2F report

Bước tiếp theo được phép viết:

**PROMPT-P3 — COMMERCE RUNTIME / SELLABLE GATE / QUOTE / ORDER / PAYMENT / SHIPPING ANALYSIS HANDOFF**

**MODE: ANALYSIS ONLY**

**V1.0 CLEAN FINAL**

PROMPT-P3 phải bắt đầu bằng analysis, không nhảy thẳng vào code.

### 17.3. Nếu P2.2F fail

Quay lại prompt tương ứng:

| **Fail Domain**                                  | **Return Prompt**        |
|--------------------------------------------------|--------------------------|
| Source / Raw / QC / Readiness                    | P2.2A                    |
| Production Order / Snapshot                      | P2.2B                    |
| Material Issue / Receipt / Ledger                | P2.2C                    |
| Batch / QC / Release / Warehouse / Inventory     | P2.2D                    |
| Traceability / QR / Recall / Sale Lock           | P2.2E                    |
| Foundation Actor/RBAC/Audit/Evidence/Idempotency | PHASE 0 prompt liên quan |
| Product/SKU/Recipe dependency                    | PHASE 1 prompt liên quan |
| Test/report/evidence thiếu                       | P2.2F bổ sung report     |
| Source conflict                                  | P2 / P2.1 review lại     |

## 18. PROMPT COPY GIAO DEV / CODEX / COPILOT

### 18.1. Nội dung prompt

**BẮT ĐẦU PROMPT**

Bạn đang tiếp tục dự án Ginsengfood theo GREENFIELD TECH SOURCE-OF-TRUTH.

PHASE HIỆN TẠI:

**PHASE-02 — OPERATIONAL CORE**

PROMPT HIỆN TẠI:

**PROMPT-P2.2F — PHASE 2 SMOKE / EVIDENCE / IMPLEMENTATION REPORT HANDOFF**

MODE:

**VALIDATION / SMOKE / EVIDENCE REPORT ONLY**

PROMPT TIẾP THEO:

**PROMPT-P3 — COMMERCE RUNTIME ANALYSIS HANDOFF**

Bạn không được triển khai feature mới.

Bạn không được sửa business domain.

Bạn không được tự đổi nghiệp vụ.

Bạn không được hardcode policy.

Bạn không được mở Global Gateway.

Bạn không được gọi Completion PASS / Release Ready / Production Ready / Go-live Approved.

**A. Source-of-truth bắt buộc**

Bạn phải đọc:

1.  TECH-01.

2.  TECH-10.

3.  TECH-11.

4.  TECH-12.

5.  TECH-13.

6.  PHASE 0 Validation Report.

7.  PHASE 1 Smoke / Evidence Report.

8.  PROMPT-P2 Analysis Report.

9.  PROMPT-P2.1 Technical Design Handoff.

10. PROMPT-P2.2A Implementation Report.

11. PROMPT-P2.2B Implementation Report.

12. PROMPT-P2.2C Implementation Report.

13. PROMPT-P2.2D Implementation Report.

14. PROMPT-P2.2E Implementation Report.

Quy tắc:

- TECH mới thắng code cũ.

- TECH mới thắng tài liệu cũ.

- Code hiện tại chỉ là CURRENT_IMPLEMENTATION_STATE_ONLY.

- Evidence trong report là submitted, chưa phải accepted.

- Nếu conflict ngoài scope, báo cáo, không sửa.

**B. Scope In**

Bạn chỉ được thực hiện:

1.  Inspect codebase thật.

2.  Chạy build/test/lint phù hợp.

3.  Chạy smoke P2.2A → P2.2E.

4.  Kiểm tra migration nếu có.

5.  Kiểm tra seed nếu có.

6.  Kiểm tra git status/git diff.

7.  Gom evidence.

8.  Lập Smoke Result Matrix.

9.  Lập Evidence Register.

10. Lập Open Blocker Register.

11. Lập Risk Register.

12. Lập handoff sang PHASE 3 nếu đủ điều kiện review.

13. Report 14 mục.

**C. Scope Out**

Bạn không được:

1.  Tạo feature code mới.

2.  Sửa business domain.

3.  Tạo migration mới.

4.  Tạo seed mới.

5.  Sửa Commerce.

6.  Sửa AI Advisor.

7.  Sửa Gateway / Ads / Live / IVR.

8.  Sửa Release Gateway.

9.  Mở Global Gateway.

10. Gọi Completion PASS.

11. Gọi Release Ready.

12. Gọi Production Ready.

13. Gọi Go-live Approved.

**D. Smoke bắt buộc**

Bạn phải chạy hoặc báo rõ lý do không chạy smoke cho:

1.  Source / Raw / QC / Readiness.

2.  Production Order / Snapshot.

3.  Material Issue / Receipt / Ledger.

4.  Batch / QC / Release / Warehouse / Inventory.

5.  Traceability / QR / Public Trace / Recall / Sale Lock.

6.  Operational Audit / Evidence / Idempotency cross-cutting.

Không gọi smoke này là Global Smoke Pass.

**E. Evidence bắt buộc**

Bạn phải gom:

1.  Source đã đọc.

2.  Report P2.2A → P2.2E.

3.  File changes.

4.  Git diff summary.

5.  Build result.

6.  Test result.

7.  Smoke result.

8.  Migration validation nếu có.

9.  Seed validation nếu có.

10. Open blocker/risk.

Ghi rõ:

**Evidence Submitted, not Evidence Accepted.**

**F. Build/test/lint**

Bạn phải chạy hoặc báo lý do không chạy:

1.  Backend build.

2.  Backend test.

3.  Backend lint nếu có.

4.  Frontend build nếu cần.

5.  Frontend test nếu cần.

6.  Migration validation nếu có.

7.  Seed validation nếu có.

8.  Git status.

9.  Git diff.

Nếu fail, không tự sửa feature code. Báo fail và mapping về prompt cần sửa.

**G. Done Gate**

Chỉ được coi là done nếu:

1.  Đã đọc source-of-truth.

2.  Đã đọc report P2.2A → P2.2E.

3.  Đã inspect codebase thật.

4.  Đã chạy hoặc báo rõ build/test/smoke.

5.  Đã gom evidence.

6.  Đã lập Evidence Register.

7.  Đã lập Smoke Result Matrix.

8.  Đã lập Open Blocker Register.

9.  Đã lập Risk Register.

10. Có git status/git diff.

11. Không sửa feature code ngoài scope.

12. Không mở Global Gateway.

13. Không gọi Completion PASS / Release Ready / Production Ready / Go-live Approved.

14. Report đủ 14 mục.

**H. Fail Gate**

Phải fail nếu:

1.  Không chạy hoặc không báo smoke.

2.  Smoke fail nhưng vẫn gọi done.

3.  Evidence Submitted bị gọi là Evidence Accepted.

4.  Test pass bị gọi là Global Smoke Pass.

5.  Evidence missing nhưng vẫn gọi Completion PASS.

6.  Sửa feature code ngoài scope.

7.  Sửa business domain.

8.  Mở Gateway.

9.  Gọi Release Ready / Production Ready / Go-live Approved.

10. Không report đủ 14 mục.

**I. Report format bắt buộc 14 mục**

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

**J. Trạng thái cuối bắt buộc**

Kết thúc report phải ghi:

PROMPT-P2.2F FINAL STATUS: PHASE 2 VALIDATION REPORT ONLY
PHASE 2 EVIDENCE SUBMITTED FOR REVIEW ONLY
NOT PHASE 2 COMPLETE UNTIL OWNER REVIEW
NOT COMPLETION PASS
NOT RELEASE READY
NOT PRODUCTION READY
NOT GO-LIVE APPROVED
GLOBAL GATEWAY: BLOCKED

**KẾT THÚC PROMPT**

## 19. FINAL STATUS

### 19.1. Trạng thái tài liệu

**PROMPT-P2.2F DOCUMENT STATUS: CLEAN FINAL**

### 19.2. Trạng thái thực thi

**VALIDATION / SMOKE / EVIDENCE REPORT HANDOFF ONLY**

### 19.3. Phạm vi được phép

**PHASE 2 SMOKE / EVIDENCE / IMPLEMENTATION REPORT ONLY**

### 19.4. Trạng thái PHASE 2

**NOT PHASE 2 COMPLETE UNTIL OWNER REVIEW**

### 19.5. Trạng thái Completion

**NOT COMPLETION PASS**

### 19.6. Trạng thái release

**NOT RELEASE READY**

### 19.7. Trạng thái production

**NOT PRODUCTION READY**

### 19.8. Trạng thái go-live

**NOT GO-LIVE APPROVED**

### 19.9. Trạng thái Global Gateway

**GLOBAL GATEWAY: BLOCKED**
