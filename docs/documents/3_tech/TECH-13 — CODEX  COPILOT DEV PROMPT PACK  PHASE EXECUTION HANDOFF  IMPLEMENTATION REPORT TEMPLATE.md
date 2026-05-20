**TECH-13 — CODEX / COPILOT DEV PROMPT PACK / PHASE EXECUTION HANDOFF / IMPLEMENTATION REPORT TEMPLATE**

**CODING AGENT GOVERNANCE / PHASE EXECUTION PROMPTS / DEV HANDOFF CONTROL / IMPLEMENTATION REPORT STANDARD**

**V1.0 CLEAN FINAL**

**PHẦN 1/4 — DEV PROMPT PACK PRINCIPLES / AGENT BOUNDARY / NO-CODE-SNIPPET RULE / PHASE EXECUTION HANDOFF GOVERNANCE**

**1. MỤC TIÊU CỦA TECH-13**

TECH-13 là tài liệu tạo **bộ prompt/handoff giao dev, Codex, Copilot hoặc coding agent** triển khai hệ thống Ginsengfood theo từng phase.

TECH-13 không thay thế TECH-00 → TECH-12.

TECH-13 không viết code trong tài liệu này.

TECH-13 không thiết kế API chi tiết.

TECH-13 không thiết kế database chi tiết.

TECH-13 không thiết kế UI chi tiết.

TECH-13 có nhiệm vụ khóa:

1.  Cách viết prompt giao dev/coding agent.

2.  Cách chia prompt theo PHASE 0 → PHASE 9.

3.  Cách yêu cầu coding agent đọc source-of-truth trước khi sửa code.

4.  Cách yêu cầu coding agent inspect codebase thật trước khi đề xuất sửa.

5.  Cách cấm coding agent copy-paste code rời rạc.

6.  Cách cấm coding agent hardcode policy.

7.  Cách yêu cầu coding agent báo cáo theo format 14 mục.

8.  Cách yêu cầu coding agent nộp evidence.

9.  Cách yêu cầu coding agent chạy test/build.

10. Cách yêu cầu coding agent không gọi dev done là release ready.

11. Cách yêu cầu coding agent không tự mở Global Gateway.

12. Cách bàn giao từng phase sang TECH-11 và TECH-10.

TECH-13 là cầu nối giữa:

**TECH-12 — Phase Backlog Pack**

và

**Dev/Codex/Copilot triển khai trong codebase thật.**

**2. VAI TRÒ CỦA TECH-13 TRONG BỘ TECH**

TECH-13 đứng sau:

1.  TECH-00 — Global Technical Governance.

2.  TECH-01 — Foundation / RBAC / Audit / Idempotency / Evidence Registry.

3.  TECH-02 — Product / SKU / Recipe / Product Activation.

4.  TECH-03 — Operational Core.

5.  TECH-04 — Commerce Runtime.

6.  TECH-05 — AI Advisor Runtime.

7.  TECH-06 — Facebook Gateway.

8.  TECH-07 — Ads Measurement.

9.  TECH-08 — MC AI Live.

10. TECH-09 — IVR Order Confirmation.

11. TECH-10 — Global Smoke / UAT / Evidence / Release Gateway.

12. TECH-11 — Implementation Roadmap / Dev Phase Plan / Backlog Governance / Code Handoff Control.

13. TECH-12 — Phase Backlog Pack / Dev Task Breakdown / Source-to-Backlog Matrix.

TECH-12 đã khóa backlog.

TECH-13 khóa prompt giao việc cho dev/coding agent.

Nói cách khác:

1.  TECH-10 khóa release/go-live gate.

2.  TECH-11 khóa cách triển khai theo phase.

3.  TECH-12 khóa backlog/task theo phase.

4.  TECH-13 khóa prompt/handoff để dev hoặc coding agent thực hiện từng phase.

**3. TECH-13 KHÔNG PHẢI TÀI LIỆU CODE**

TECH-13 không tạo code mẫu.

TECH-13 không tạo snippet để copy.

TECH-13 không yêu cầu dán code vào project.

TECH-13 không thay developer.

TECH-13 chỉ viết **prompt chuẩn** để giao việc cho dev hoặc coding agent.

Một prompt đúng không phải là:

1.  “Viết code cho chức năng này.”

2.  “Tạo API này.”

3.  “Tạo bảng này.”

4.  “Dán đoạn code này vào.”

5.  “Làm nhanh cho chạy.”

6.  “Fix lỗi này bằng mọi cách.”

7.  “Copy code từ AI vào project.”

Một prompt đúng phải yêu cầu coding agent:

1.  Đọc source-of-truth.

2.  Inspect codebase thật.

3.  Xác định current implementation state.

4.  Phát hiện conflict giữa code cũ và TECH mới.

5.  Đề xuất implementation plan.

6.  Nêu file dự kiến sửa.

7.  Nêu rủi ro.

8.  Chỉ sửa trong phạm vi phase/backlog.

9.  Chạy test/build.

10. Nộp evidence.

11. Báo cáo theo format 14 mục.

12. Không tự tuyên bố release ready.

**4. NO-CODE-SNIPPET RULE**

**4.1. Không giao coding agent bằng snippet rời rạc**

Không được yêu cầu coding agent:

1.  Viết vài đoạn code rời.

2.  Copy vào file bất kỳ.

3.  Tự đoán kiến trúc.

4.  Tự đoán database.

5.  Tự đoán API.

6.  Tự đoán UI.

7.  Tự đoán policy.

8.  Tự đoán state machine.

9.  Tự đoán permission.

10. Tự đoán evidence.

Hệ thống Ginsengfood có nhiều domain liên kết chặt:

1.  Foundation.

2.  Product.

3.  Operational.

4.  Commerce.

5.  AI Advisor.

6.  Gateway.

7.  Ads.

8.  MC AI Live.

9.  IVR.

10. Global Release.

Vì vậy, không thể triển khai bằng code snippet rời rạc.

**4.2. Coding agent phải làm trong codebase thật**

Khi đến bước được phép code, coding agent phải:

1.  Inspect cấu trúc project.

2.  Đọc file hiện có.

3.  Tìm pattern đang dùng.

4.  Xác định module liên quan.

5.  Xác định dependency.

6.  Xác định test hiện có.

7.  Xác định build command.

8.  Xác định migration/seed impact nếu có.

9.  Xác định docs/handoff cần update.

10. Chỉ sửa trong phạm vi được giao.

**4.3. Không được dùng AI code thay thiết kế hệ thống**

AI/coding agent có thể hỗ trợ triển khai.

Nhưng không được thay:

1.  Kiến trúc sư hệ thống.

2.  Developer.

3.  QA.

4.  Owner nghiệp vụ.

5.  Security reviewer.

6.  Release owner.

Prompt phải luôn giữ nguyên tắc:

**Owner quyết định muốn gì.**

**Developer quyết định làm như thế nào trong codebase thật.**

**AI/coding agent hỗ trợ triển khai có kiểm soát, không tự đổi nghiệp vụ.**

**5. AGENT BOUNDARY**

**5.1. Coding agent được phép làm gì**

Coding agent được phép:

1.  Đọc source-of-truth được giao.

2.  Inspect codebase hiện tại.

3.  Tìm file liên quan.

4.  Phân tích khoảng cách giữa code hiện tại và TECH mới.

5.  Đề xuất implementation plan.

6.  Sửa code trong phạm vi được giao nếu được phép.

7.  Thêm/chỉnh test nếu phù hợp.

8.  Chạy build/test/lint nếu có lệnh.

9.  Ghi nhận lỗi build/test.

10. Cập nhật docs/handoff nếu được yêu cầu.

11. Nộp implementation report.

12. Nêu rủi ro còn lại.

**5.2. Coding agent không được làm gì**

Coding agent không được:

1.  Tự đổi business rule.

2.  Tự đổi source-of-truth.

3.  Tự dùng tài liệu cũ để phủ định TECH mới.

4.  Tự dùng code cũ để phủ định TECH mới.

5.  Tự hardcode policy.

6.  Tự bỏ audit.

7.  Tự bỏ evidence.

8.  Tự bỏ smoke.

9.  Tự bỏ permission.

10. Tự bỏ idempotency.

11. Tự bỏ state machine.

12. Tự bỏ privacy/security rule.

13. Tự sửa ngoài scope.

14. Tự tạo release decision.

15. Tự gọi release ready.

16. Tự gọi production ready.

17. Tự mở Global Gateway.

**5.3. Khi agent gặp mâu thuẫn**

Nếu agent phát hiện mâu thuẫn giữa:

1.  TECH mới và tài liệu cũ.

2.  TECH mới và code cũ.

3.  Source-of-truth và implementation hiện tại.

4.  Backlog và codebase.

5.  Policy và config hiện có.

6.  Test hiện có và requirement mới.

Agent phải:

1.  Ghi rõ conflict.

2.  Không tự chọn theo cảm tính.

3.  Không âm thầm sửa lệch rule.

4.  Không giữ code cũ nếu trái TECH mới.

5.  Đề xuất blocker.

6.  Báo cáo trong phần “Rủi ro còn lại” hoặc “Blocker”.

**6. PROMPT PACK PHẢI CHIA THEO PHASE**

TECH-13 bắt buộc chia prompt theo PHASE 0 → PHASE 9.

Không dùng một prompt làm toàn bộ hệ thống.

Không dùng một prompt “triển khai Ginsengfood”.

Không dùng một prompt “đọc toàn bộ TECH rồi code hết”.

Mỗi prompt phải đi theo một phase hoặc một nhóm backlog rất rõ.

Danh sách phase:

1.  **PHASE 0 — Foundation / RBAC / Audit / Evidence / Idempotency**

2.  **PHASE 1 — Product / SKU / Recipe / Product Activation**

3.  **PHASE 2 — Operational Core**

4.  **PHASE 3 — Commerce Runtime**

5.  **PHASE 4 — AI Advisor Runtime**

6.  **PHASE 5 — Facebook Gateway / Messenger / Channel Delivery**

7.  **PHASE 6 — Ads Measurement**

8.  **PHASE 7 — MC AI Live**

9.  **PHASE 8 — IVR Order Confirmation**

10. **PHASE 9 — Global Smoke / UAT / Release Gateway**

**7. PHASE EXECUTION PROMPT STRUCTURE**

Mỗi prompt giao dev/coding agent phải có cấu trúc chuẩn.

**7.1. Header bắt buộc**

Mỗi prompt phải bắt đầu bằng:

1.  Tên dự án.

2.  Phase.

3.  Module/backlog.

4.  Mục tiêu.

5.  Source-of-truth.

6.  Trạng thái gateway.

7.  Cảnh báo không được gọi release ready.

Mẫu header:

DỰ ÁN: Ginsengfood — Greenfield Technical Implementation  
PHASE: {{phase_id}} — {{phase_name}}  
BACKLOG: {{backlog_id}} — {{backlog_name}}  
SOURCE-OF-TRUTH: {{tech_refs}}  
MỤC TIÊU: {{goal}}  
TRẠNG THÁI: Implementation task only. Not Release Ready. Global Gateway remains BLOCKED.

**7.2. Source-of-truth bắt buộc**

Prompt phải ghi rõ:

1.  TECH liên quan.

2.  Section liên quan.

3.  Rule P0 liên quan.

4.  Dependency liên quan.

5.  Evidence/smoke liên quan.

Không được nói chung chung:

“Đọc tài liệu liên quan.”

Phải nói cụ thể:

“Đọc TECH-04 Commerce Runtime phần QuoteSnapshot, Order Draft, Payment Boundary và TECH-07 Verified Revenue nếu backlog liên quan Ads.”

**7.3. Scope In bắt buộc**

Prompt phải liệt kê rõ việc cần làm.

Ví dụ:

1.  Inspect module hiện tại.

2.  Xác định current implementation.

3.  So sánh với TECH source-of-truth.

4.  Đề xuất implementation plan.

5.  Sửa đúng phạm vi nếu được phép.

6.  Chạy test/build.

7.  Nộp report.

**7.4. Scope Out bắt buộc**

Prompt phải liệt kê rõ việc không làm.

Ví dụ:

1.  Không tự thiết kế lại domain ngoài scope.

2.  Không hardcode policy.

3.  Không tự sửa giá.

4.  Không tự tạo order.

5.  Không bypass audit/evidence.

6.  Không mở Gateway.

7.  Không gọi Production Ready.

**7.5. Dependency bắt buộc**

Prompt phải ghi:

1.  Upstream dependency.

2.  Downstream dependency.

3.  Dependency nào đang required.

4.  Dependency nào chỉ planning-only.

5.  Dependency nào blocked.

**7.6. P0 Blocker bắt buộc**

Prompt phải nêu rõ lỗi cấm tuyệt đối.

Ví dụ với Commerce:

1.  Không QuoteSnapshot mà vẫn final price.

2.  Cart bị hiểu là order.

3.  Order Draft bị hiểu là Official Order.

4.  Ảnh chuyển khoản bị coi là PAID.

5.  COD pending bị coi là Verified Revenue.

**7.7. Evidence bắt buộc**

Prompt phải yêu cầu evidence:

1.  File đã sửa.

2.  Log/test/build output.

3.  Before/after nếu phù hợp.

4.  Migration/seed result nếu có.

5.  Audit/correlation nếu high-risk.

6.  Smoke output nếu có.

**7.8. Report format bắt buộc**

Prompt phải yêu cầu dev báo cáo 14 mục:

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

**8. PROMPT EXECUTION MODE**

**8.1. Mode 1 — Analysis Only**

Dùng khi chưa cho phép sửa code.

Agent chỉ được:

1.  Inspect repo.

2.  Tìm file liên quan.

3.  Đối chiếu source-of-truth.

4.  Lập implementation plan.

5.  Nêu rủi ro.

6.  Không sửa file.

Prompt phải ghi rõ:

**MODE: ANALYSIS ONLY — DO NOT MODIFY FILES**

**8.2. Mode 2 — Implement With Guard**

Dùng khi đã qua Code Handoff Control.

Agent được phép sửa code trong phạm vi task.

Prompt phải ghi rõ:

**MODE: IMPLEMENT WITH GUARD — MODIFY ONLY FILES REQUIRED FOR THIS BACKLOG**

Agent phải:

1.  Không sửa ngoài scope.

2.  Không đổi nghiệp vụ.

3.  Không hardcode policy.

4.  Không bỏ test.

5.  Không bỏ evidence.

6.  Báo cáo đầy đủ.

**8.3. Mode 3 — Test / Smoke Only**

Dùng khi cần QA/test/smoke.

Agent chỉ được:

1.  Chạy test.

2.  Chạy build.

3.  Chạy smoke nếu có.

4.  Thu thập evidence.

5.  Không sửa code nếu chưa được phép.

Prompt phải ghi:

**MODE: TEST / SMOKE ONLY — DO NOT MODIFY BUSINESS LOGIC**

**8.4. Mode 4 — Fix After Review**

Dùng khi có blocker/smoke fail.

Agent chỉ được sửa phần liên quan blocker.

Prompt phải ghi:

**MODE: FIX AFTER REVIEW — FIX ONLY LISTED BLOCKERS**

Agent phải:

1.  Nêu root cause.

2.  Sửa đúng blocker.

3.  Chạy retest.

4.  Cập nhật report.

5.  Không mở rộng scope.

**8.5. Mode 5 — Documentation / Handoff Update**

Dùng khi cần cập nhật docs/handoff sau implementation.

Agent chỉ được:

1.  Cập nhật Markdown/handoff.

2.  Ghi rõ thay đổi.

3.  Không sửa code logic.

4.  Không thay source-of-truth.

Prompt phải ghi:

**MODE: DOCUMENTATION / HANDOFF UPDATE ONLY**

**9. PROMPT GUARDRAIL CHUNG**

Mọi prompt TECH-13 phải có đoạn guardrail chung sau.

**9.1. Guardrail về source-of-truth**

Coding agent phải tuân thủ:

1.  TECH source-of-truth mới thắng tài liệu cũ.

2.  TECH source-of-truth mới thắng code cũ.

3.  Legacy documents chỉ là tham chiếu.

4.  Current implementation chỉ là hiện trạng.

5.  Nếu conflict, báo blocker.

6.  Không tự chọn theo cảm tính.

**9.2. Guardrail về không hardcode**

Không hardcode:

1.  Giá.

2.  Khuyến mãi.

3.  Member benefit.

4.  Diamond benefit.

5.  Shipping fee.

6.  Payment account.

7.  IVR attempt policy.

8.  Notification content.

9.  Ads scale rule.

10. Claim/public wording.

11. Sale Lock/Recall.

12. Verified Revenue.

13. Privacy rules.

Nếu runtime/config chưa có, báo blocker.

**9.3. Guardrail về evidence**

Không được báo xong nếu thiếu:

1.  File list.

2.  Commands run.

3.  Test/build result.

4.  Evidence.

5.  Risk note.

6.  Handoff update.

**9.4. Guardrail về release**

Agent không được ghi:

1.  Release Ready.

2.  Production Ready.

3.  Go-live Approved.

4.  Scale Approved.

5.  Global Gateway PASS.

Agent chỉ được ghi:

1.  Implementation completed.

2.  Report submitted.

3.  Evidence provided.

4.  Smoke suggested/passed nếu đã chạy.

5.  Ready for review.

6.  Not release-ready until TECH-10 gates pass.

**10. PHASE PROMPT PACK OVERVIEW**

TECH-13 sẽ tạo prompt pack cho 10 phase.

**10.1. PHASE 0 Prompt Pack**

Tên:

**PROMPT-P0 — Foundation / RBAC / Audit / Evidence / Idempotency Execution Handoff**

Dùng cho:

1.  RBAC.

2.  Actor identity.

3.  Audit trail.

4.  Evidence registry.

5.  Idempotency.

6.  Correlation ID.

7.  Admin override.

**10.2. PHASE 1 Prompt Pack**

Tên:

**PROMPT-P1 — Product / SKU / Recipe / Product Activation Execution Handoff**

Dùng cho:

1.  Product Master.

2.  SKU Master.

3.  Recipe/Formula.

4.  Activation Guard.

5.  Product Active ≠ Sellable.

6.  Public product naming.

**10.3. PHASE 2 Prompt Pack**

Tên:

**PROMPT-P2 — Operational Core Execution Handoff**

Dùng cho:

1.  Raw intake.

2.  Raw QC.

3.  Raw lot readiness.

4.  Production order snapshot.

5.  Material issue/receipt.

6.  Batch release.

7.  Warehouse.

8.  Trace.

9.  Recall/Sale Lock.

**10.4. PHASE 3 Prompt Pack**

Tên:

**PROMPT-P3 — Commerce Runtime Execution Handoff**

Dùng cho:

1.  Sellable Gate.

2.  QuoteSnapshot.

3.  Cart.

4.  Order Draft.

5.  Official Order.

6.  Payment.

7.  Shipping/COD.

8.  Verified Revenue.

9.  Member/Diamond/runtime benefit.

**10.5. PHASE 4 Prompt Pack**

Tên:

**PROMPT-P4 — AI Advisor Runtime Execution Handoff**

Dùng cho:

1.  Product consulting.

2.  Customer memory.

3.  Claim guard.

4.  Quote-safe sales.

5.  Order Draft handoff.

6.  Final Response Guard.

7.  Runtime unavailable fail-safe.

**10.6. PHASE 5 Prompt Pack**

Tên:

**PROMPT-P5 — Facebook Gateway / Messenger / Channel Delivery Execution Handoff**

Dùng cho:

1.  Public/private routing.

2.  Comment-to-Messenger.

3.  Messenger context.

4.  Final Response Guard delivery.

5.  Typing indicator.

6.  Rate limit.

7.  Moderation.

8.  Suppression.

**10.7. PHASE 6 Prompt Pack**

Tên:

**PROMPT-P6 — Ads Measurement / Attribution / Verified Revenue / Scale Gate Execution Handoff**

Dùng cho:

1.  Event taxonomy.

2.  Pixel/CAPI dedup.

3.  Attribution.

4.  Verified Revenue.

5.  Exclusion rules.

6.  Data Quality.

7.  Scale Gate.

**10.8. PHASE 7 Prompt Pack**

Tên:

**PROMPT-P7 — MC AI Live / Live Script Runtime / Live Sales Control Execution Handoff**

Dùng cho:

1.  Live session.

2.  Script runtime.

3.  Script guard.

4.  Comment classifier.

5.  Messenger coordination.

6.  Troll/complaint split.

7.  Ads-safe signal boundary.

**10.9. PHASE 8 Prompt Pack**

Tên:

**PROMPT-P8 — IVR Order Confirmation Execution Handoff**

Dùng cho:

1.  IVR eligibility.

2.  Customer trust.

3.  Official Order only.

4.  Phone validation.

5.  Attempt policy.

6.  Outcome classification.

7.  Core Order handoff.

8.  Notification handoff.

**10.10. PHASE 9 Prompt Pack**

Tên:

**PROMPT-P9 — Global Smoke / UAT / Release Gateway Execution Handoff**

Dùng cho:

1.  Evidence intake.

2.  Global smoke.

3.  UAT.

4.  Owner sign-off.

5.  P0 blocker.

6.  Cross-tech dependency.

7.  Privacy/security.

8.  Rollback/fallback.

9.  Monitoring.

10. Release decision.

11. Global Gateway.

**11. PROMPT TEMPLATE CHUNG CHO MỌI PHASE**

Dưới đây là template chuẩn dùng cho mọi phase.

DỰ ÁN: Ginsengfood — Greenfield Technical Implementation  
  
MODE: {{ANALYSIS_ONLY \| IMPLEMENT_WITH_GUARD \| TEST_SMOKE_ONLY \| FIX_AFTER_REVIEW \| DOCUMENTATION_HANDOFF_UPDATE_ONLY}}  
  
PHASE: {{phase_id}} — {{phase_name}}  
  
BACKLOG / TASK:  
- Backlog ID: {{backlog_id}}  
- Task ID: {{task_id_if_any}}  
- Domain: {{domain}}  
- Source-of-Truth: {{tech_refs}}  
  
MỤC TIÊU:  
{{goal}}  
  
SOURCE-OF-TRUTH BẮT BUỘC:  
1. {{tech_ref_1}}  
2. {{tech_ref_2}}  
3. {{tech_ref_3}}  
  
NGUYÊN TẮC BẮT BUỘC:  
- TECH source-of-truth mới thắng tài liệu cũ.  
- Code cũ chỉ là CURRENT_IMPLEMENTATION_STATE_ONLY.  
- Không dùng tài liệu cũ để phủ định TECH mới.  
- Không hardcode policy.  
- Không copy-paste code rời rạc.  
- Không thay đổi nghiệp vụ ngoài scope.  
- Không gọi implementation done là release ready.  
- Không mở Global Gateway.  
  
SCOPE IN:  
1. {{scope_in_1}}  
2. {{scope_in_2}}  
3. {{scope_in_3}}  
  
SCOPE OUT:  
1. {{scope_out_1}}  
2. {{scope_out_2}}  
3. {{scope_out_3}}  
  
UPSTREAM DEPENDENCY:  
1. {{upstream_1}}  
2. {{upstream_2}}  
  
DOWNSTREAM HANDOFF:  
1. {{downstream_1}}  
2. {{downstream_2}}  
  
P0 BLOCKER:  
1. {{p0_1}}  
2. {{p0_2}}  
3. {{p0_3}}  
  
YÊU CẦU THỰC THI:  
1. Inspect codebase thật trước khi sửa.  
2. Xác định file liên quan.  
3. Không sửa ngoài scope.  
4. Nếu có conflict giữa code hiện tại và TECH mới, báo blocker.  
5. Nếu thiếu runtime/config/policy, báo blocker.  
6. Chạy test/build phù hợp nếu có.  
7. Không bỏ qua lỗi build/test.  
  
EVIDENCE REQUIRED:  
1. {{evidence_1}}  
2. {{evidence_2}}  
3. {{evidence_3}}  
  
SMOKE REQUIRED:  
1. {{smoke_1}}  
2. {{smoke_2}}  
3. {{smoke_3}}  
  
REPORT FORMAT BẮT BUỘC:  
1. Tóm tắt.  
2. File đã sửa.  
3. Nguồn yêu cầu.  
4. Evidence đã dùng.  
5. Lệnh đã chạy.  
6. Kết quả test.  
7. Kết quả backend build.  
8. Kết quả frontend build.  
9. Kết quả cleanup process.  
10. Cập nhật Markdown.  
11. Kết quả database migration/update nếu áp dụng.  
12. Kết quả seed validation nếu áp dụng.  
13. Rủi ro còn lại.  
14. Cập nhật handoff.  
  
KẾT LUẬN BẮT BUỘC:  
- Chỉ báo cáo implementation status.  
- Không được gọi Release Ready.  
- Không được gọi Production Ready.  
- Không được gọi Go-live Approved.  
- Global Gateway vẫn BLOCKED cho tới khi TECH-10 pass.

**12. IMPLEMENTATION REPORT TEMPLATE CHUNG**

Mọi phase sau khi dev/coding agent thực hiện phải báo cáo đúng mẫu sau.

**12.1. Tóm tắt**

Ghi rõ:

1.  Phase.

2.  Backlog.

3.  Task.

4.  Đã làm gì.

5.  Chưa làm gì.

6.  Trạng thái hiện tại.

**12.2. File đã sửa**

Ghi rõ:

1.  Backend files.

2.  Frontend files.

3.  Config files.

4.  Migration files.

5.  Seed files.

6.  Test files.

7.  Docs files.

Nếu không áp dụng, ghi “Không áp dụng”.

**12.3. Nguồn yêu cầu**

Ghi rõ:

1.  TECH number.

2.  Section.

3.  Requirement.

4.  Backlog ID.

5.  Task ID.

**12.4. Evidence đã dùng**

Ghi rõ:

1.  Log.

2.  Screenshot/export nếu có.

3.  Test output.

4.  Build output.

5.  Migration output.

6.  Seed validation.

7.  Audit/correlation nếu có.

**12.5. Lệnh đã chạy**

Ghi rõ các lệnh đã chạy:

1.  Build.

2.  Test.

3.  Lint.

4.  Typecheck.

5.  Migration.

6.  Seed.

7.  Smoke.

8.  Cleanup.

**12.6. Kết quả test**

Ghi rõ:

1.  Pass.

2.  Fail.

3.  Chưa chạy.

4.  Lý do chưa chạy.

5.  Retest cần thiết.

**12.7. Kết quả backend build**

Ghi:

1.  Pass/fail.

2.  Error.

3.  Warning.

4.  Impact.

**12.8. Kết quả frontend build**

Ghi:

1.  Pass/fail.

2.  Error.

3.  Warning.

4.  Impact.

**12.9. Kết quả cleanup process**

Ghi:

1.  File rác đã xóa.

2.  Code tạm đã bỏ.

3.  Debug log tạm đã bỏ.

4.  Duplicate đã xử lý.

5.  Chưa cleanup gì thì nêu lý do.

**12.10. Cập nhật Markdown**

Ghi:

1.  Docs cập nhật.

2.  README cập nhật.

3.  Handoff cập nhật.

4.  Chưa cập nhật thì nêu lý do.

**12.11. Database migration/update nếu áp dụng**

Ghi:

1.  Migration name.

2.  Migration status.

3.  Rollback note.

4.  Data impact.

5.  Risk.

**12.12. Seed validation nếu áp dụng**

Ghi:

1.  Seed file.

2.  Seed data.

3.  Validation result.

4.  Missing seed.

5.  Conflict seed.

**12.13. Rủi ro còn lại**

Ghi:

1.  Known issues.

2.  Open blockers.

3.  Technical debt.

4.  Dependency chưa pass.

5.  Smoke chưa chạy.

6.  Evidence thiếu.

7.  Risk cần owner review.

**12.14. Cập nhật handoff**

Ghi:

1.  Phase tiếp theo.

2.  Backlog tiếp theo.

3.  Điều kiện để tiếp tục.

4.  Blocker cần xử lý.

5.  Owner/QA cần review.

**13. DEV PROMPT PACK P0 BLOCKER REGISTRY — PHẦN 1/4**

Các lỗi sau là P0 Blocker:

1.  Prompt yêu cầu viết code snippet rời rạc.

2.  Prompt không có source-of-truth.

3.  Prompt không có Scope Out.

4.  Prompt không có dependency.

5.  Prompt không có P0 blocker.

6.  Prompt không có evidence required.

7.  Prompt không có smoke required.

8.  Prompt không có report format.

9.  Prompt cho phép hardcode policy.

10. Prompt cho phép coding agent tự đổi nghiệp vụ.

11. Prompt cho phép dùng tài liệu cũ thắng TECH mới.

12. Prompt cho phép dùng code cũ thắng TECH mới.

13. Prompt cho phép sửa ngoài scope.

14. Prompt cho phép bỏ test/build.

15. Prompt cho phép bỏ evidence.

16. Prompt cho phép gọi implementation done là release ready.

17. Prompt cho phép gọi production ready.

18. Prompt cho phép go-live.

19. Prompt cho phép scale.

20. Prompt cho phép mở Global Gateway.

**14. EVIDENCE YÊU CẦU CHO PHẦN 1/4**

PHẦN 1/4 yêu cầu evidence ở cấp tài liệu gồm:

1.  TECH-13 purpose accepted.

2.  Agent Boundary accepted.

3.  No-Code-Snippet Rule accepted.

4.  Prompt Pack Phase Structure accepted.

5.  Prompt Execution Mode accepted.

6.  Prompt Guardrail accepted.

7.  Prompt Template accepted.

8.  Implementation Report Template accepted.

9.  P0 Blocker Registry accepted.

10. Release Handoff sang PHẦN 2/4 accepted.

**15. SMOKE ĐỊNH HƯỚNG — PHẦN 1/4**

**TECH13-P1-SMK-001 — Prompt Không Source Bị Reject**

Given prompt không có TECH source-of-truth  
When Prompt Review chạy  
Then prompt bị reject.

**TECH13-P1-SMK-002 — Prompt Thiếu Scope Out Bị Reject**

Given prompt có Scope In nhưng thiếu Scope Out  
When Prompt Review chạy  
Then prompt không được dùng giao dev.

**TECH13-P1-SMK-003 — Prompt Yêu Cầu Copy Code Bị Reject**

Given prompt yêu cầu “viết code rồi dán vào project”  
When Prompt Review chạy  
Then prompt bị reject.

**TECH13-P1-SMK-004 — Prompt Thiếu Evidence/Smoke Bị Reject**

Given prompt không yêu cầu evidence/smoke  
When Prompt Review chạy  
Then prompt không được dùng.

**TECH13-P1-SMK-005 — Prompt Cho Hardcode Policy Bị Reject**

Given prompt cho phép hardcode giá/khuyến mãi/member/IVR policy  
When Prompt Review chạy  
Then prompt fail.

**TECH13-P1-SMK-006 — Agent Không Được Gọi Release Ready**

Given agent hoàn tất implementation  
When agent report  
Then agent không được gọi Release Ready, chỉ báo Ready for Review.

**TECH13-P1-SMK-007 — Conflict Phải Báo Blocker**

Given agent thấy code cũ khác TECH mới  
When execution chạy  
Then agent phải báo conflict/blocker, không tự chọn code cũ.

**TECH13-P1-SMK-008 — Report Thiếu 14 Mục Bị Reject**

Given agent report thiếu file list/test/build/evidence/risk/handoff  
When report review  
Then report bị reject hoặc Need More Info.

**16. DONE GATE — PHẦN 1/4**

PHẦN 1/4 đạt Documentation Complete ở cấp nguyên tắc khi:

1.  Đã khóa mục tiêu TECH-13.

2.  Đã khóa vai trò TECH-13 trong bộ TECH.

3.  Đã khóa TECH-13 không phải tài liệu code.

4.  Đã khóa No-Code-Snippet Rule.

5.  Đã khóa Agent Boundary.

6.  Đã khóa Prompt Pack chia theo phase.

7.  Đã khóa Phase Execution Prompt Structure.

8.  Đã khóa Prompt Execution Mode.

9.  Đã khóa Prompt Guardrail chung.

10. Đã khóa Phase Prompt Pack Overview.

11. Đã khóa Prompt Template chung.

12. Đã khóa Implementation Report Template.

13. Đã khóa P0 Blocker Registry.

14. Đã có Evidence Requirement.

15. Đã có Smoke định hướng.

16. Đã có Release Handoff sang PHẦN 2/4.

**17. FAIL GATE — PHẦN 1/4**

PHẦN 1/4 FAIL nếu:

1.  TECH-13 bị hiểu là tài liệu code.

2.  TECH-13 tạo code snippet để copy.

3.  TECH-13 không chia phase.

4.  Prompt không có source-of-truth.

5.  Prompt không có Scope Out.

6.  Prompt không có dependency.

7.  Prompt không có P0 blocker.

8.  Prompt không có evidence.

9.  Prompt không có smoke.

10. Prompt không có report format.

11. Prompt cho phép hardcode policy.

12. Prompt cho phép dev/coding agent tự đổi nghiệp vụ.

13. Prompt cho phép dùng code cũ thắng TECH mới.

14. Prompt cho phép dùng tài liệu cũ thắng TECH mới.

15. Prompt cho phép gọi Release Ready.

16. Prompt cho phép gọi Production Ready.

17. Prompt cho phép Go-live Approved.

18. Prompt cho phép mở Global Gateway.

19. Không có prompt execution mode.

20. Không có implementation report template.

**18. RELEASE HANDOFF — SANG PHẦN 2/4**

PHẦN 1/4 bàn giao sang PHẦN 2/4 các nguyên tắc đã khóa:

1.  TECH-13 là Dev Prompt Pack.

2.  TECH-13 không viết code.

3.  Prompt phải chia theo phase.

4.  Prompt phải có source-of-truth.

5.  Prompt phải có Scope In / Scope Out.

6.  Prompt phải có dependency.

7.  Prompt phải có P0 blocker.

8.  Prompt phải có evidence required.

9.  Prompt phải có smoke required.

10. Prompt phải có report format 14 mục.

11. Prompt phải có execution mode.

12. Prompt phải cấm hardcode policy.

13. Prompt phải cấm copy-paste code rời rạc.

14. Prompt phải yêu cầu inspect codebase thật.

15. Prompt phải yêu cầu báo conflict nếu code cũ khác TECH mới.

16. Prompt không được gọi Release Ready / Production Ready / Go-live Approved.

17. Prompt không được mở Global Gateway.

PHẦN 2/4 sẽ viết:

**DEV PROMPT MODULE CONTRACTS / PHASE PROMPT CONTRACTS / AGENT EXECUTION CONTROL**

Các module cần khóa ở PHẦN 2/4:

1.  Prompt Pack Orchestrator.

2.  Phase Prompt Factory.

3.  Source Injection Resolver.

4.  Scope Injection Resolver.

5.  Dependency Injection Resolver.

6.  P0 Blocker Injection Resolver.

7.  Evidence/Smoke Injection Resolver.

8.  Execution Mode Resolver.

9.  Agent Guardrail Resolver.

10. Codebase Inspection Resolver.

11. Conflict Detection Resolver.

12. Report Template Resolver.

13. Prompt Review Resolver.

14. Prompt Change Control Resolver.

15. Prompt-to-Dev Handoff Resolver.

**19. TRẠNG THÁI SAU PHẦN 1/4**

Sau PHẦN 1/4:

**TECH-13 = DOCUMENTATION IN PROGRESS**

Chưa được gọi là Documentation Complete.

Chưa được gọi là Prompt Pack Ready.

Chưa được gọi là Dev Ready.

Chưa được gọi là Implementation Ready.

Chưa được gọi là Release Ready.

Chưa được gọi là Production Ready.

Chưa được gọi là Go-live Approved.

Global Gateway vẫn mặc định:

**BLOCKED**

**KẾT LUẬN PHẦN 1/4**

PHẦN 1/4 đã khóa nguyên tắc nền của TECH-13.

Các điểm cốt lõi đã được cố định:

1.  TECH-13 là bộ prompt/handoff giao dev/Codex/Copilot theo phase.

2.  TECH-13 không phải tài liệu code.

3.  TECH-13 không tạo snippet để copy-paste.

4.  Prompt phải chia theo PHASE 0 → PHASE 9.

5.  Mỗi prompt phải có source-of-truth rõ.

6.  Mỗi prompt phải có Scope In / Scope Out.

7.  Mỗi prompt phải có dependency.

8.  Mỗi prompt phải có P0 blocker.

9.  Mỗi prompt phải có evidence required.

10. Mỗi prompt phải có smoke required.

11. Mỗi prompt phải có report format 14 mục.

12. Mỗi prompt phải có execution mode.

13. Coding agent phải inspect codebase thật.

14. Coding agent không được tự đổi nghiệp vụ.

15. Coding agent không được hardcode policy.

16. Coding agent không được dùng tài liệu cũ hoặc code cũ để phủ định TECH mới.

17. Coding agent phải báo conflict/blocker nếu phát hiện mâu thuẫn.

18. Coding agent không được gọi implementation done là Release Ready.

19. Coding agent không được gọi Production Ready.

20. Coding agent không được mở Global Gateway.

21. Report thiếu file list/test/build/evidence/risk/handoff sẽ bị reject.

22. TECH-10 mới có quyền xét Release Ready, Go-live Approved và Global Gateway.

PHẦN 1/4 sẵn sàng bàn giao sang:

**PHẦN 2/4 — DEV PROMPT MODULE CONTRACTS / PHASE PROMPT CONTRACTS / AGENT EXECUTION CONTROL**.

**PHẦN 2/4 — DEV PROMPT MODULE CONTRACTS / PHASE PROMPT CONTRACTS / AGENT EXECUTION CONTROL**

**1. MỤC TIÊU PHẦN 2/4**

PHẦN 2/4 khóa các module contract để tạo, review, kiểm soát và bàn giao prompt cho dev/Codex/Copilot/coding agent.

PHẦN này xác định rõ:

1.  Module nào điều phối toàn bộ prompt pack.

2.  Module nào tạo prompt theo từng phase.

3.  Module nào đưa source-of-truth vào prompt.

4.  Module nào đưa Scope In / Scope Out vào prompt.

5.  Module nào đưa dependency vào prompt.

6.  Module nào đưa P0 blocker vào prompt.

7.  Module nào đưa evidence/smoke vào prompt.

8.  Module nào xác định execution mode.

9.  Module nào kiểm soát guardrail cho coding agent.

10. Module nào buộc agent inspect codebase thật.

11. Module nào phát hiện conflict giữa TECH mới và code cũ.

12. Module nào ép report template 14 mục.

13. Module nào review prompt trước khi giao dev.

14. Module nào kiểm soát thay đổi prompt.

15. Module nào bàn giao prompt sang dev/TECH-11.

PHẦN 2/4 không viết code.

PHẦN 2/4 không thiết kế API chi tiết.

PHẦN 2/4 không thiết kế database chi tiết.

PHẦN 2/4 không thiết kế UI chi tiết.

PHẦN 2/4 chỉ khóa **module contract cho prompt/handoff governance**.

**2. NGUYÊN TẮC MODULE CONTRACT CHUNG**

Mọi module trong TECH-13 phải tuân thủ:

1.  Không tạo prompt không source-of-truth.

2.  Không tạo prompt thiếu Scope Out.

3.  Không tạo prompt thiếu dependency.

4.  Không tạo prompt thiếu P0 blocker.

5.  Không tạo prompt thiếu evidence required.

6.  Không tạo prompt thiếu smoke required.

7.  Không tạo prompt thiếu report format.

8.  Không tạo prompt yêu cầu copy-paste code rời rạc.

9.  Không tạo prompt yêu cầu agent hardcode policy.

10. Không tạo prompt cho phép agent tự đổi nghiệp vụ.

11. Không tạo prompt cho phép code cũ thắng TECH mới.

12. Không tạo prompt cho phép tài liệu cũ thắng TECH mới.

13. Không tạo prompt cho phép agent sửa ngoài scope.

14. Không tạo prompt cho phép bỏ test/build/evidence.

15. Không tạo prompt cho phép agent gọi Release Ready.

16. Không tạo prompt cho phép agent gọi Production Ready.

17. Không tạo prompt cho phép agent gọi Go-live Approved.

18. Không tạo prompt cho phép agent mở Global Gateway.

19. Không tạo prompt một lần cho toàn bộ hệ thống.

20. Không bỏ qua TECH-11 Code Handoff Control và TECH-10 Global Release Gateway.

**3. MODULE CONTRACT 01 — PROMPT PACK ORCHESTRATOR**

**3.1. Mục tiêu**

Prompt Pack Orchestrator điều phối toàn bộ bộ prompt TECH-13 theo PHASE 0 → PHASE 9.

Module này đảm bảo mỗi prompt được tạo đúng phase, đúng backlog, đúng source, đúng boundary và đúng mode thực thi.

**3.2. Scope In**

Prompt Pack Orchestrator được phép:

1.  Tạo danh sách prompt pack theo phase.

2.  Gắn mỗi prompt với phase/backlog/task.

3.  Kiểm tra prompt có đủ module contract bắt buộc chưa.

4.  Tổng hợp trạng thái prompt: Draft / Need Review / Ready / Blocked.

5.  Điều phối Source Injection Resolver.

6.  Điều phối Scope Injection Resolver.

7.  Điều phối Dependency Injection Resolver.

8.  Điều phối P0 Blocker Injection Resolver.

9.  Điều phối Evidence/Smoke Injection Resolver.

10. Điều phối Execution Mode Resolver.

11. Điều phối Agent Guardrail Resolver.

12. Bàn giao prompt đã pass sang Prompt-to-Dev Handoff Resolver.

**3.3. Scope Out**

Prompt Pack Orchestrator không được:

1.  Viết code.

2.  Tạo code snippet.

3.  Giao prompt không source.

4.  Giao prompt một lần cho toàn bộ hệ thống.

5.  Tự quyết định business rule.

6.  Tự mở Dev Ready nếu TECH-11 chưa pass.

7.  Tự mở Release Ready nếu TECH-10 chưa pass.

8.  Tự mở Global Gateway.

9.  Bỏ qua prompt review.

10. Bỏ qua change control.

**3.4. Upstream Dependency**

Phụ thuộc:

1.  TECH-00 → TECH-12.

2.  TECH-12 Phase Backlog Pack.

3.  TECH-11 Dev Handoff Governance.

4.  TECH-10 Global Release Governance.

5.  Backlog-to-Handoff Package.

6.  Phase Dependency Matrix.

**3.5. Downstream Handoff**

Bàn giao cho:

1.  Phase Prompt Factory.

2.  Prompt Review Resolver.

3.  Prompt-to-Dev Handoff Resolver.

4.  TECH-11 Dev Handoff Resolver.

**3.6. P0 Blocker**

FAIL nếu Prompt Pack Orchestrator tạo prompt tổng “triển khai toàn bộ Ginsengfood”.

FAIL nếu prompt thiếu source-of-truth vẫn Ready.

FAIL nếu prompt gọi dev/coding agent viết code copy-paste.

FAIL nếu prompt bypass TECH-11 hoặc TECH-10.

**3.7. Evidence**

Evidence tối thiểu:

1.  Prompt pack list.

2.  Phase mapping.

3.  Backlog mapping.

4.  Source mapping status.

5.  Prompt review status.

6.  Blocked prompt list.

7.  Ready prompt list.

8.  Handoff record.

**3.8. Smoke**

**TECH13-MOD-SMK-001**

Given prompt pack có prompt “triển khai toàn bộ hệ thống”  
When Prompt Pack Orchestrator review  
Then prompt phải bị reject vì không chia phase.

**4. MODULE CONTRACT 02 — PHASE PROMPT FACTORY**

**4.1. Mục tiêu**

Phase Prompt Factory tạo prompt draft cho từng phase/backlog/task theo template chuẩn TECH-13.

Module này không tạo code.

Module này chỉ tạo prompt/handoff để coding agent làm việc có kiểm soát.

**4.2. Scope In**

Phase Prompt Factory được phép tạo prompt có:

1.  Project header.

2.  Execution mode.

3.  Phase.

4.  Backlog ID.

5.  Task ID nếu có.

6.  Domain.

7.  Source-of-truth.

8.  Mục tiêu.

9.  Scope In.

10. Scope Out.

11. Upstream dependency.

12. Downstream handoff.

13. P0 blocker.

14. Evidence required.

15. Smoke required.

16. Report format 14 mục.

17. No hardcode policy guard.

18. No copy-paste code guard.

19. Release/Gateway warning.

**4.3. Scope Out**

Phase Prompt Factory không được:

1.  Tạo prompt thiếu source.

2.  Tạo prompt thiếu Scope Out.

3.  Tạo prompt thiếu P0 blocker.

4.  Tạo prompt thiếu evidence/smoke.

5.  Tạo prompt không có execution mode.

6.  Tạo prompt yêu cầu agent tự đoán requirement.

7.  Tạo prompt yêu cầu agent tự quyết business rule.

8.  Tạo prompt viết code không cần inspect codebase.

9.  Tạo prompt kết luận Release Ready.

10. Tạo prompt mở Gateway.

**4.4. Upstream Dependency**

Phụ thuộc:

1.  TECH-12 Backlog Pack.

2.  Prompt Pack Orchestrator.

3.  Source Injection Resolver.

4.  Scope Injection Resolver.

5.  Dependency Injection Resolver.

6.  Evidence/Smoke Injection Resolver.

**4.5. Downstream Handoff**

Bàn giao:

1.  Draft phase prompt.

2.  Missing prompt field list.

3.  Prompt status.

4.  Handoff sang Prompt Review Resolver.

**4.6. P0 Blocker**

FAIL nếu prompt factory tạo prompt không có execution mode.

FAIL nếu prompt factory tạo prompt không có report format.

FAIL nếu prompt factory tạo prompt có câu “hãy viết code hoàn chỉnh để copy vào”.

**4.7. Evidence**

Evidence tối thiểu:

1.  Prompt ID.

2.  Phase ID.

3.  Backlog ID.

4.  Required prompt field checklist.

5.  Missing field list.

6.  Draft status.

**4.8. Smoke**

**TECH13-MOD-SMK-002**

Given phase prompt thiếu Scope Out và Report Format  
When Phase Prompt Factory tạo draft  
Then prompt không được Ready.

**5. MODULE CONTRACT 03 — SOURCE INJECTION RESOLVER**

**5.1. Mục tiêu**

Source Injection Resolver đưa source-of-truth vào prompt một cách cụ thể, không chung chung.

Module này đảm bảo coding agent biết phải đọc TECH nào, section nào, rule nào.

**5.2. Scope In**

Module được phép đưa vào prompt:

1.  TECH number.

2.  Section hoặc requirement group.

3.  Backlog ID.

4.  Task ID.

5.  Rule P0 liên quan.

6.  Dependency liên quan.

7.  Source conflict note nếu có.

8.  Legacy boundary.

9.  Current implementation boundary.

10. Yêu cầu báo conflict nếu code cũ khác TECH mới.

**5.3. Scope Out**

Module không được:

1.  Ghi “đọc tài liệu liên quan” chung chung.

2.  Ghi source mơ hồ.

3.  Dùng tài liệu cũ làm source thật.

4.  Dùng code cũ làm source thật.

5.  Bỏ qua conflict.

6.  Cho agent tự chọn source.

7.  Cho agent tự quyết nếu TECH và code cũ khác nhau.

**5.4. Upstream Dependency**

Phụ thuộc:

1.  TECH-00 → TECH-12.

2.  Source-to-Backlog Matrix.

3.  Backlog ID.

4.  Task ID.

5.  Source conflict registry nếu có.

**5.5. Downstream Handoff**

Bàn giao:

1.  Source-injected prompt.

2.  Source missing warning.

3.  Source conflict warning.

4.  Handoff sang Prompt Review Resolver.

**5.6. P0 Blocker**

FAIL nếu prompt không có TECH source.

FAIL nếu prompt cho phép dùng code cũ làm source-of-truth.

FAIL nếu prompt không yêu cầu báo conflict.

**5.7. Evidence**

Evidence tối thiểu:

1.  Prompt ID.

2.  TECH reference list.

3.  Requirement mapping.

4.  Conflict status.

5.  Injection decision.

**5.8. Smoke**

**TECH13-MOD-SMK-003**

Given prompt giao Commerce QuoteSnapshot nhưng không nhắc TECH-04  
When Source Injection review  
Then prompt rejected.

**6. MODULE CONTRACT 04 — SCOPE INJECTION RESOLVER**

**6.1. Mục tiêu**

Scope Injection Resolver đưa Scope In và Scope Out vào prompt.

Module này ngăn coding agent tự mở rộng phạm vi.

**6.2. Scope In**

Module được phép đưa vào prompt:

1.  Việc cần inspect.

2.  Việc cần phân tích.

3.  Việc cần sửa nếu được phép.

4.  Việc cần test.

5.  Việc cần báo cáo.

6.  Các file/khu vực có thể kiểm tra nếu biết.

7.  Các việc được phép làm trong mode hiện tại.

**6.3. Scope Out**

Module phải đưa vào prompt các việc không được làm:

1.  Không sửa ngoài phase.

2.  Không sửa ngoài backlog.

3.  Không đổi business rule.

4.  Không hardcode policy.

5.  Không bỏ audit/evidence.

6.  Không tự tạo release decision.

7.  Không mở Global Gateway.

8.  Không gọi Release Ready.

9.  Không gọi Production Ready.

10. Không sửa API/DB/UI nếu mode chưa cho phép hoặc impact chưa review.

**6.4. Upstream Dependency**

Phụ thuộc:

1.  TECH-12 Backlog Scope.

2.  TECH-11 Code Handoff Control.

3.  Execution Mode Resolver.

4.  Phase Prompt Factory.

**6.5. Downstream Handoff**

Bàn giao:

1.  Scope-injected prompt.

2.  Scope missing warning.

3.  Scope conflict warning.

4.  Handoff sang Prompt Review Resolver.

**6.6. P0 Blocker**

FAIL nếu prompt thiếu Scope Out.

FAIL nếu prompt cho phép agent sửa ngoài scope.

FAIL nếu prompt cho phép agent tự đổi business rule.

**6.7. Evidence**

Evidence tối thiểu:

1.  Prompt ID.

2.  Scope In list.

3.  Scope Out list.

4.  Reviewer decision.

**6.8. Smoke**

**TECH13-MOD-SMK-004**

Given prompt có Scope In nhưng thiếu Scope Out  
When Scope Injection review  
Then prompt không Ready.

**7. MODULE CONTRACT 05 — DEPENDENCY INJECTION RESOLVER**

**7.1. Mục tiêu**

Dependency Injection Resolver đưa upstream/downstream dependency vào prompt.

Module này ngăn coding agent triển khai downstream khi upstream chưa pass.

**7.2. Scope In**

Module được phép đưa vào prompt:

1.  Upstream phase dependency.

2.  Upstream backlog dependency.

3.  Downstream handoff.

4.  Planning-only dependency nếu có.

5.  Blocked dependency nếu có.

6.  Mock limitation nếu có.

7.  Runtime dependency.

8.  TECH-10 release dependency.

**7.3. Scope Out**

Module không được:

1.  Bỏ dependency.

2.  Cho downstream tự release.

3.  Cho mock làm production truth.

4.  Cho agent tự đánh dependency pass.

5.  Cho agent triển khai khi upstream critical blocked.

6.  Bỏ Sale Lock/Recall dependency.

7.  Bỏ Verified Revenue dependency.

8.  Bỏ QuoteSnapshot dependency.

9.  Bỏ Official Order dependency.

10. Bỏ Final Response Guard dependency.

**7.4. Upstream Dependency**

Phụ thuộc:

1.  TECH-12 Dependency Matrix.

2.  TECH-11 Phase Control.

3.  Backlog dependency status.

4.  Prompt execution mode.

**7.5. Downstream Handoff**

Bàn giao:

1.  Dependency-injected prompt.

2.  Dependency blocked warning.

3.  Planning-only note.

4.  Handoff sang Prompt Review Resolver.

**7.6. P0 Blocker**

FAIL nếu prompt cho PHASE 6 Ads scale nhưng không nhắc Verified Revenue dependency.

FAIL nếu prompt cho PHASE 8 IVR nhưng không nhắc Official Order/Core Order dependency.

FAIL nếu prompt cho Gateway/Live nhưng không nhắc Final Response Guard.

**7.7. Evidence**

Evidence tối thiểu:

1.  Prompt ID.

2.  Dependency list.

3.  Dependency status.

4.  Blocked/planning-only note.

5.  Reviewer decision.

**7.8. Smoke**

**TECH13-MOD-SMK-005**

Given prompt PHASE 8 IVR thiếu dependency Official Order  
When Dependency Injection review  
Then prompt rejected.

**8. MODULE CONTRACT 06 — P0 BLOCKER INJECTION RESOLVER**

**8.1. Mục tiêu**

P0 Blocker Injection Resolver đưa lỗi cấm tuyệt đối vào prompt.

Module này bảo đảm coding agent biết việc gì không được vi phạm.

**8.2. Scope In**

Module được phép đưa vào prompt:

1.  P0 blocker của phase.

2.  P0 blocker của backlog.

3.  P0 blocker của dependency.

4.  P0 blocker về source-of-truth.

5.  P0 blocker về hardcode.

6.  P0 blocker về privacy/security.

7.  P0 blocker về evidence/smoke.

8.  P0 blocker về release/gateway.

9.  P0 blocker về cross-phase downstream.

**8.3. Scope Out**

Module không được:

1.  Bỏ P0 blocker.

2.  Ghi P0 blocker chung chung.

3.  Hạ P0 thành warning.

4.  Cho agent tự bỏ qua P0.

5.  Cho agent gọi P0 là “known issue” để tiếp tục.

6.  Cho agent sửa workaround trái source-of-truth.

**8.4. Upstream Dependency**

Phụ thuộc:

1.  TECH-00 → TECH-12 P0 registry.

2.  Phase P0 registry.

3.  Backlog P0 registry.

4.  Prompt Pack Orchestrator.

**8.5. Downstream Handoff**

Bàn giao:

1.  P0-injected prompt.

2.  Missing P0 warning.

3.  Handoff sang Prompt Review Resolver.

**8.6. P0 Blocker**

FAIL nếu prompt không có P0 blocker.

FAIL nếu prompt cho phép agent bỏ qua P0 blocker.

FAIL nếu prompt gọi P0 blocker là optional.

**8.7. Evidence**

Evidence tối thiểu:

1.  Prompt ID.

2.  P0 blocker list.

3.  Phase/backlog mapping.

4.  Reviewer decision.

**8.8. Smoke**

**TECH13-MOD-SMK-006**

Given prompt Commerce thiếu P0 “ảnh chuyển khoản không phải PAID”  
When P0 Injection review  
Then prompt không Ready.

**9. MODULE CONTRACT 07 — EVIDENCE / SMOKE INJECTION RESOLVER**

**9.1. Mục tiêu**

Evidence / Smoke Injection Resolver đưa yêu cầu evidence và smoke vào prompt.

Module này ngăn coding agent báo “đã xong” mà không có bằng chứng.

**9.2. Scope In**

Module được phép đưa vào prompt:

1.  Evidence required.

2.  Smoke required.

3.  Test/build command expectation.

4.  Migration/seed evidence nếu có.

5.  Audit/correlation evidence nếu high-risk.

6.  Privacy/security evidence nếu có dữ liệu nhạy cảm.

7.  Runtime unavailable smoke nếu cần.

8.  Dependency smoke nếu downstream.

9.  Fail-case smoke nếu critical.

10. Report evidence section requirement.

**9.3. Scope Out**

Module không được:

1.  Bỏ evidence.

2.  Bỏ smoke.

3.  Chấp nhận lời nói thay evidence.

4.  Chỉ yêu cầu happy path smoke.

5.  Bỏ P0 smoke.

6.  Bỏ build/test output.

7.  Bỏ migration/seed result khi có impact.

8.  Bỏ privacy/security evidence.

9.  Cho agent gọi done khi test chưa chạy.

10. Cho agent bỏ qua failed test.

**9.4. Upstream Dependency**

Phụ thuộc:

1.  TECH-12 Evidence Matrix.

2.  TECH-12 Smoke Matrix.

3.  TECH-10 Evidence/Smoke Governance.

4.  Phase/backlog risk level.

**9.5. Downstream Handoff**

Bàn giao:

1.  Evidence/smoke-injected prompt.

2.  Missing evidence warning.

3.  Missing smoke warning.

4.  Handoff sang Prompt Review Resolver.

**9.6. P0 Blocker**

FAIL nếu prompt không yêu cầu evidence.

FAIL nếu prompt không yêu cầu smoke.

FAIL nếu prompt không yêu cầu report test/build.

FAIL nếu high-risk task không yêu cầu audit/correlation evidence.

**9.7. Evidence**

Evidence tối thiểu:

1.  Prompt ID.

2.  Evidence list.

3.  Smoke list.

4.  Reviewer decision.

**9.8. Smoke**

**TECH13-MOD-SMK-007**

Given prompt Ads Measurement thiếu smoke loại trừ quote/cart/draft/unpaid  
When Evidence/Smoke Injection review  
Then prompt rejected.

**10. MODULE CONTRACT 08 — EXECUTION MODE RESOLVER**

**10.1. Mục tiêu**

Execution Mode Resolver xác định coding agent được phép làm gì trong lần chạy prompt.

Module này ngăn agent tự sửa code khi prompt chỉ yêu cầu analysis hoặc test.

**10.2. Execution Mode hợp lệ**

Các mode hợp lệ:

1.  **ANALYSIS ONLY**  
    Chỉ inspect, phân tích, lập plan. Không sửa file.

2.  **IMPLEMENT WITH GUARD**  
    Được sửa file trong scope. Phải test/build/report.

3.  **TEST / SMOKE ONLY**  
    Chỉ chạy test/smoke/build. Không sửa business logic.

4.  **FIX AFTER REVIEW**  
    Chỉ sửa blocker được liệt kê. Không mở rộng scope.

5.  **DOCUMENTATION / HANDOFF UPDATE ONLY**  
    Chỉ cập nhật docs/handoff. Không sửa code logic.

**10.3. Scope In**

Module được phép:

1.  Gắn execution mode vào prompt.

2.  Ghi rõ quyền được làm.

3.  Ghi rõ việc không được làm.

4.  Chặn prompt thiếu mode.

5.  Chặn mode sai với backlog status.

6.  Chặn implement mode nếu TECH-11 Code Handoff chưa pass.

**10.4. Scope Out**

Module không được:

1.  Cho prompt không có mode.

2.  Cho implement mode khi chưa code handoff.

3.  Cho fix mode sửa ngoài blocker.

4.  Cho test mode sửa business logic.

5.  Cho docs mode sửa code.

6.  Cho analysis mode sửa file.

7.  Cho agent tự đổi mode.

**10.5. Upstream Dependency**

Phụ thuộc:

1.  TECH-11 Code Handoff Control.

2.  Backlog status.

3.  Phase status.

4.  Prompt purpose.

5.  Handoff status.

**10.6. Downstream Handoff**

Bàn giao:

1.  Mode-injected prompt.

2.  Mode blocked warning.

3.  Handoff sang Prompt Review Resolver.

**10.7. P0 Blocker**

FAIL nếu prompt không có execution mode.

FAIL nếu ANALYSIS ONLY nhưng agent được phép sửa file.

FAIL nếu IMPLEMENT WITH GUARD khi chưa qua Code Handoff Control.

**10.8. Evidence**

Evidence tối thiểu:

1.  Prompt ID.

2.  Execution mode.

3.  Mode rationale.

4.  Permission boundary.

5.  Reviewer decision.

**10.9. Smoke**

**TECH13-MOD-SMK-008**

Given prompt chưa qua TECH-11 Code Handoff Control  
When Execution Mode Resolver chạy  
Then không được chọn IMPLEMENT WITH GUARD.

**11. MODULE CONTRACT 09 — AGENT GUARDRAIL RESOLVER**

**11.1. Mục tiêu**

Agent Guardrail Resolver đưa các guardrail bắt buộc vào prompt để giới hạn hành vi của coding agent.

**11.2. Scope In**

Guardrail bắt buộc gồm:

1.  TECH mới thắng tài liệu cũ.

2.  TECH mới thắng code cũ.

3.  Không hardcode policy.

4.  Không copy-paste code rời rạc.

5.  Không đổi business rule.

6.  Không sửa ngoài scope.

7.  Không bỏ audit/evidence.

8.  Không bỏ smoke/test/build.

9.  Không gọi Release Ready.

10. Không gọi Production Ready.

11. Không gọi Go-live Approved.

12. Không mở Global Gateway.

13. Nếu conflict thì báo blocker.

14. Nếu thiếu runtime/config thì báo blocker.

15. Nếu test/build fail thì báo thật.

**11.3. Scope Out**

Module không được:

1.  Bỏ guardrail cho prompt “nhanh”.

2.  Cho agent tự tắt guardrail.

3.  Cho agent bypass vì “để build pass”.

4.  Cho agent sửa rule để test pass.

5.  Cho agent giấu failure.

6.  Cho agent bỏ report risk.

**11.4. Upstream Dependency**

Phụ thuộc:

1.  TECH-00 Governance.

2.  TECH-10 Gateway.

3.  TECH-11 Code Handoff.

4.  TECH-12 Backlog Pack.

**11.5. Downstream Handoff**

Bàn giao:

1.  Guardrail-injected prompt.

2.  Missing guardrail warning.

3.  Handoff sang Prompt Review Resolver.

**11.6. P0 Blocker**

FAIL nếu prompt không cấm hardcode.

FAIL nếu prompt không cấm release claim.

FAIL nếu prompt không yêu cầu báo conflict.

**11.7. Evidence**

Evidence tối thiểu:

1.  Prompt ID.

2.  Guardrail list.

3.  Reviewer decision.

**11.8. Smoke**

**TECH13-MOD-SMK-009**

Given prompt cho agent “fix cho build pass bằng mọi cách”  
When Guardrail Resolver review  
Then prompt rejected.

**12. MODULE CONTRACT 10 — CODEBASE INSPECTION RESOLVER**

**12.1. Mục tiêu**

Codebase Inspection Resolver buộc coding agent inspect codebase thật trước khi sửa.

Module này ngăn agent viết code tưởng tượng hoặc snippet không khớp project.

**12.2. Scope In**

Prompt phải yêu cầu agent:

1.  Inspect cấu trúc repo.

2.  Tìm file liên quan.

3.  Tìm pattern hiện có.

4.  Tìm module/domain liên quan.

5.  Tìm test hiện có.

6.  Tìm build command.

7.  Tìm config/runtime liên quan.

8.  Tìm migration/seed liên quan nếu có.

9.  Xác định current implementation state.

10. Ghi rõ file dự kiến sửa trước hoặc trong report.

**12.3. Scope Out**

Module không được:

1.  Cho agent viết code trước khi inspect.

2.  Cho agent đoán file.

3.  Cho agent tạo file lung tung.

4.  Cho agent bỏ qua pattern project.

5.  Cho agent bỏ qua test hiện có.

6.  Cho agent bỏ qua config/runtime.

7.  Cho agent sửa DB/API/UI ngầm không review.

**12.4. Upstream Dependency**

Phụ thuộc:

1.  Execution Mode.

2.  Dev Handoff.

3.  Code Handoff Control.

4.  Backlog/task scope.

**12.5. Downstream Handoff**

Bàn giao:

1.  Inspection-injected prompt.

2.  Inspection checklist.

3.  Handoff sang Prompt Review Resolver.

**12.6. P0 Blocker**

FAIL nếu prompt implement không yêu cầu inspect codebase.

FAIL nếu prompt cho phép agent tạo code không theo project pattern.

FAIL nếu prompt không yêu cầu báo file đã sửa.

**12.7. Evidence**

Evidence tối thiểu:

1.  Prompt ID.

2.  Inspection checklist.

3.  Required report fields.

4.  Reviewer decision.

**12.8. Smoke**

**TECH13-MOD-SMK-010**

Given prompt IMPLEMENT WITH GUARD nhưng không yêu cầu inspect codebase  
When Codebase Inspection Resolver review  
Then prompt rejected.

**13. MODULE CONTRACT 11 — CONFLICT DETECTION RESOLVER**

**13.1. Mục tiêu**

Conflict Detection Resolver đưa yêu cầu phát hiện và báo cáo mâu thuẫn vào prompt.

**13.2. Scope In**

Prompt phải yêu cầu agent phát hiện conflict giữa:

1.  TECH mới và tài liệu cũ.

2.  TECH mới và code cũ.

3.  Backlog và codebase.

4.  Source-of-truth và test hiện có.

5.  Policy và config hiện tại.

6.  Runtime rule và hardcode cũ.

7.  State machine mới và implementation cũ.

8.  Public/private boundary mới và behavior cũ.

9.  Evidence/audit rule mới và code cũ.

10. Release gate mới và current pipeline.

**13.3. Scope Out**

Module không được:

1.  Cho agent bỏ qua conflict.

2.  Cho agent tự chọn code cũ.

3.  Cho agent sửa âm thầm.

4.  Cho agent hợp thức hóa legacy behavior.

5.  Cho agent downgrade conflict thành note không hành động.

6.  Cho agent tiếp tục code nếu conflict là P0 và chưa có decision.

**13.4. Upstream Dependency**

Phụ thuộc:

1.  Source Injection.

2.  Codebase Inspection.

3.  Agent Guardrail.

4.  Backlog P0 Blocker.

**13.5. Downstream Handoff**

Bàn giao:

1.  Conflict detection prompt block.

2.  Conflict report requirement.

3.  Handoff sang Prompt Review Resolver.

**13.6. P0 Blocker**

FAIL nếu prompt không yêu cầu báo conflict.

FAIL nếu prompt cho phép giữ code cũ vì “đang chạy”.

FAIL nếu prompt không yêu cầu nêu blocker khi TECH và code cũ mâu thuẫn.

**13.7. Evidence**

Evidence tối thiểu:

1.  Prompt ID.

2.  Conflict detection requirement.

3.  Conflict reporting section.

4.  Reviewer decision.

**13.8. Smoke**

**TECH13-MOD-SMK-011**

Given prompt sửa AI Advisor nhưng không yêu cầu phát hiện AI tự tính giá cũ  
When Conflict Detection Resolver review  
Then prompt không Ready.

**14. MODULE CONTRACT 12 — REPORT TEMPLATE RESOLVER**

**14.1. Mục tiêu**

Report Template Resolver đưa format báo cáo 14 mục vào mọi prompt.

**14.2. Scope In**

Report bắt buộc gồm:

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

**14.3. Scope Out**

Module không được:

1.  Bỏ report template.

2.  Cho report rút gọn với task high-risk.

3.  Cho agent chỉ ghi “done”.

4.  Cho agent bỏ file list.

5.  Cho agent bỏ lệnh đã chạy.

6.  Cho agent bỏ test/build result.

7.  Cho agent bỏ risk.

8.  Cho agent bỏ handoff update.

**14.4. Upstream Dependency**

Phụ thuộc:

1.  TECH-11 Implementation Report Format.

2.  TECH-12 Report Requirement.

3.  Phase/backlog risk level.

**14.5. Downstream Handoff**

Bàn giao:

1.  Report-injected prompt.

2.  Missing report warning.

3.  Handoff sang Prompt Review Resolver.

**14.6. P0 Blocker**

FAIL nếu prompt không có report format.

FAIL nếu prompt cho agent báo cáo thiếu test/build/evidence.

FAIL nếu prompt không yêu cầu rủi ro còn lại.

**14.7. Evidence**

Evidence tối thiểu:

1.  Prompt ID.

2.  Report template attached.

3.  Reviewer decision.

**14.8. Smoke**

**TECH13-MOD-SMK-012**

Given prompt thiếu phần “Rủi ro còn lại”  
When Report Template Resolver review  
Then prompt rejected.

**15. MODULE CONTRACT 13 — PROMPT REVIEW RESOLVER**

**15.1. Mục tiêu**

Prompt Review Resolver kiểm tra prompt trước khi giao dev/coding agent.

Không prompt nào được dùng nếu chưa review.

**15.2. Scope In**

Module kiểm tra prompt có đủ:

1.  Phase.

2.  Backlog/task.

3.  Execution mode.

4.  Source-of-truth.

5.  Scope In.

6.  Scope Out.

7.  Dependency.

8.  P0 blocker.

9.  Evidence required.

10. Smoke required.

11. Guardrail.

12. Codebase inspection requirement.

13. Conflict detection requirement.

14. Report format.

15. Release/Gateway warning.

**15.3. Scope Out**

Module không được:

1.  Pass prompt thiếu field critical.

2.  Pass prompt yêu cầu copy-paste code.

3.  Pass prompt cho hardcode policy.

4.  Pass prompt không mode.

5.  Pass prompt không source.

6.  Pass prompt không evidence/smoke.

7.  Pass prompt không report.

8.  Pass prompt cho phép release claim.

9.  Pass prompt bypass TECH-11/TECH-10.

**15.4. Upstream Dependency**

Phụ thuộc:

1.  All prompt injection resolvers.

2.  Phase Prompt Factory.

3.  Prompt Pack Orchestrator.

4.  Backlog status.

**15.5. Downstream Handoff**

Bàn giao:

1.  PROMPT_READY.

2.  PROMPT_REJECTED.

3.  PROMPT_NEED_MORE_CONTEXT.

4.  PROMPT_BLOCKED.

5.  Handoff sang Prompt-to-Dev Handoff Resolver.

**15.6. P0 Blocker**

FAIL nếu prompt chưa review đã giao dev.

FAIL nếu prompt thiếu source vẫn được dùng.

FAIL nếu prompt có release claim vẫn được dùng.

**15.7. Evidence**

Evidence tối thiểu:

1.  Prompt ID.

2.  Review checklist.

3.  Missing field list.

4.  Decision.

5.  Reviewer.

**15.8. Smoke**

**TECH13-MOD-SMK-013**

Given prompt thiếu execution mode và P0 blocker  
When Prompt Review Resolver chạy  
Then PROMPT_REJECTED.

**16. MODULE CONTRACT 14 — PROMPT CHANGE CONTROL RESOLVER**

**16.1. Mục tiêu**

Prompt Change Control Resolver kiểm soát mọi thay đổi prompt sau khi đã Ready hoặc đã giao dev.

**16.2. Scope In**

Module được phép kiểm soát thay đổi:

1.  Source-of-truth.

2.  Scope.

3.  Dependency.

4.  Execution mode.

5.  P0 blocker.

6.  Evidence.

7.  Smoke.

8.  Report format.

9.  Guardrail.

10. Handoff target.

11. Phase/backlog mapping.

**16.3. Scope Out**

Module không được:

1.  Sửa prompt âm thầm.

2.  Xóa P0 blocker.

3.  Xóa evidence/smoke.

4.  Thay IMPLEMENT WITH GUARD khi chưa code handoff.

5.  Thay source sang legacy doc.

6.  Bỏ report format.

7.  Bỏ release warning.

8.  Không thông báo dev/QA khi prompt thay đổi sau handoff.

**16.4. Upstream Dependency**

Phụ thuộc:

1.  Prompt status.

2.  Backlog change control.

3.  Dev handoff status.

4.  Reviewer/owner approval.

**16.5. Downstream Handoff**

Bàn giao:

1.  Prompt change record.

2.  Before/after prompt.

3.  Impact list.

4.  Re-review requirement.

5.  Re-handoff requirement.

**16.6. P0 Blocker**

FAIL nếu prompt thay đổi sau handoff mà không có change record.

FAIL nếu change control xóa evidence/smoke.

FAIL nếu change control bỏ guardrail.

**16.7. Evidence**

Evidence tối thiểu:

1.  Change request ID.

2.  Prompt ID.

3.  Before/after.

4.  Impact.

5.  Approver.

6.  Re-handoff status.

**16.8. Smoke**

**TECH13-MOD-SMK-014**

Given prompt đã giao dev nhưng Scope Out bị sửa  
When Change Control chạy  
Then phải tạo change record và re-handoff.

**17. MODULE CONTRACT 15 — PROMPT-TO-DEV HANDOFF RESOLVER**

**17.1. Mục tiêu**

Prompt-to-Dev Handoff Resolver bàn giao prompt đã review cho dev/coding agent.

Module này không được gọi prompt handoff là Dev Ready hoặc Release Ready nếu chưa qua các gate sau đó.

**17.2. Scope In**

Module được phép:

1.  Nhận PROMPT_READY.

2.  Kiểm tra backlog status.

3.  Kiểm tra execution mode.

4.  Kiểm tra handoff target.

5.  Gửi prompt cho dev/coding agent.

6.  Ghi handoff status.

7.  Ghi điều kiện report.

8.  Ghi điều kiện evidence/smoke.

9.  Ghi release warning.

10. Ghi TECH-11/TECH-10 boundary.

**17.3. Scope Out**

Module không được:

1.  Gửi prompt chưa review.

2.  Gửi prompt blocked.

3.  Gửi prompt thiếu source.

4.  Gửi prompt thiếu P0 blocker.

5.  Gửi prompt thiếu evidence/smoke.

6.  Gọi prompt handoff là implementation complete.

7.  Gọi prompt handoff là release ready.

8.  Gọi prompt handoff là production ready.

9.  Mở Global Gateway.

**17.4. Upstream Dependency**

Phụ thuộc:

1.  Prompt Review Resolver.

2.  Prompt Change Control Resolver.

3.  TECH-11 Dev Handoff Governance.

4.  Backlog-to-Handoff Package.

**17.5. Downstream Handoff**

Bàn giao:

1.  Prompt handoff package.

2.  Dev/coding agent instruction.

3.  Report requirement.

4.  Evidence/smoke requirement.

5.  Handoff status.

6.  Next review step.

**17.6. P0 Blocker**

FAIL nếu prompt blocked vẫn giao dev.

FAIL nếu handoff không yêu cầu report 14 mục.

FAIL nếu handoff gọi Ready là Release Ready.

**17.7. Evidence**

Evidence tối thiểu:

1.  Prompt handoff ID.

2.  Prompt ID.

3.  Dev/coding agent receiver.

4.  Handoff timestamp.

5.  Required report note.

6.  Reviewer decision.

**17.8. Smoke**

**TECH13-MOD-SMK-015**

Given PROMPT_READY được bàn giao dev  
When Prompt-to-Dev Handoff chạy  
Then trạng thái chỉ là PROMPT_HANDOFF_SENT, không Implementation Complete.

**18. CROSS-MODULE DEPENDENCY MAP**

**18.1. Luồng chuẩn**

Luồng chuẩn trong TECH-13:

1.  Prompt Pack Orchestrator xác định phase/backlog.

2.  Phase Prompt Factory tạo prompt draft.

3.  Source Injection Resolver đưa source vào prompt.

4.  Scope Injection Resolver đưa Scope In/Out.

5.  Dependency Injection Resolver đưa dependency.

6.  P0 Blocker Injection Resolver đưa P0 blocker.

7.  Evidence/Smoke Injection Resolver đưa evidence/smoke.

8.  Execution Mode Resolver xác định mode.

9.  Agent Guardrail Resolver đưa guardrail.

10. Codebase Inspection Resolver đưa inspection requirement.

11. Conflict Detection Resolver đưa conflict requirement.

12. Report Template Resolver đưa report 14 mục.

13. Prompt Review Resolver kiểm tra prompt.

14. Prompt Change Control Resolver kiểm soát thay đổi.

15. Prompt-to-Dev Handoff Resolver bàn giao dev.

**18.2. No-bypass rule**

Không module nào được bỏ qua:

1.  Source injection.

2.  Scope injection.

3.  Dependency injection.

4.  P0 blocker injection.

5.  Evidence/smoke injection.

6.  Execution mode.

7.  Guardrail.

8.  Codebase inspection requirement.

9.  Conflict detection.

10. Report template.

11. Prompt review.

12. Change control nếu sửa.

13. Handoff governance.

**18.3. Dependency ưu tiên**

Nếu có mâu thuẫn:

1.  Source-of-truth thắng prompt draft.

2.  Scope Out thắng agent tự mở rộng.

3.  Dependency fail thắng handoff urgency.

4.  P0 blocker thắng convenience.

5.  Evidence/smoke missing thắng dev speed.

6.  Execution mode thắng agent hành vi.

7.  TECH-11 thắng Dev Ready claim.

8.  TECH-10 thắng Release Ready claim.

9.  Global Gateway mặc định BLOCKED.

**19. MODULE P0 BLOCKER REGISTRY — PHẦN 2/4**

Các lỗi sau là P0 Blocker cấp module:

1.  Prompt Pack Orchestrator tạo prompt toàn hệ thống.

2.  Phase Prompt Factory tạo prompt thiếu execution mode.

3.  Source Injection Resolver bỏ TECH reference.

4.  Scope Injection Resolver bỏ Scope Out.

5.  Dependency Injection Resolver bỏ upstream critical.

6.  P0 Blocker Injection Resolver bỏ P0.

7.  Evidence/Smoke Injection Resolver bỏ evidence hoặc smoke.

8.  Execution Mode Resolver cho implement khi chưa code handoff.

9.  Agent Guardrail Resolver bỏ no-hardcode rule.

10. Codebase Inspection Resolver không yêu cầu inspect repo.

11. Conflict Detection Resolver không yêu cầu báo conflict.

12. Report Template Resolver bỏ report 14 mục.

13. Prompt Review Resolver pass prompt thiếu field critical.

14. Prompt Change Control sửa prompt âm thầm.

15. Prompt-to-Dev Handoff gửi prompt blocked.

16. Prompt cho phép copy-paste code rời rạc.

17. Prompt cho phép agent tự đổi nghiệp vụ.

18. Prompt cho phép agent gọi Release Ready.

19. Prompt cho phép agent mở Global Gateway.

20. Prompt bypass TECH-11/TECH-10.

**20. EVIDENCE PACKAGE — PHẦN 2/4**

PHẦN 2/4 yêu cầu evidence thiết kế ở cấp module gồm:

1.  Prompt Pack Orchestrator contract accepted.

2.  Phase Prompt Factory contract accepted.

3.  Source Injection Resolver contract accepted.

4.  Scope Injection Resolver contract accepted.

5.  Dependency Injection Resolver contract accepted.

6.  P0 Blocker Injection Resolver contract accepted.

7.  Evidence/Smoke Injection Resolver contract accepted.

8.  Execution Mode Resolver contract accepted.

9.  Agent Guardrail Resolver contract accepted.

10. Codebase Inspection Resolver contract accepted.

11. Conflict Detection Resolver contract accepted.

12. Report Template Resolver contract accepted.

13. Prompt Review Resolver contract accepted.

14. Prompt Change Control Resolver contract accepted.

15. Prompt-to-Dev Handoff Resolver contract accepted.

16. Cross-module dependency accepted.

17. Module P0 Blocker Registry accepted.

18. Smoke matrix định hướng accepted.

19. Release handoff checklist prepared.

**21. SMOKE MATRIX ĐỊNH HƯỚNG — PHẦN 2/4**

**TECH13-P2-SMK-001 — Prompt Toàn Hệ Thống Bị Reject**

Given prompt “triển khai toàn bộ Ginsengfood”  
When Prompt Pack Orchestrator review  
Then prompt rejected.

**TECH13-P2-SMK-002 — Prompt Thiếu Mode Bị Reject**

Given prompt không có execution mode  
When Phase Prompt Factory review  
Then prompt rejected.

**TECH13-P2-SMK-003 — Prompt Thiếu Source Bị Reject**

Given prompt không có TECH reference  
When Source Injection Resolver chạy  
Then prompt rejected.

**TECH13-P2-SMK-004 — Prompt Thiếu Scope Out Bị Reject**

Given prompt không có Scope Out  
When Scope Injection Resolver chạy  
Then prompt rejected.

**TECH13-P2-SMK-005 — Prompt Thiếu Dependency Bị Reject**

Given prompt PHASE 6 Ads không nhắc Verified Revenue dependency  
When Dependency Injection Resolver chạy  
Then prompt rejected.

**TECH13-P2-SMK-006 — Prompt Thiếu P0 Bị Reject**

Given prompt Commerce không có P0 Payment/Quote/Order boundary  
When P0 Injection review  
Then prompt rejected.

**TECH13-P2-SMK-007 — Prompt Thiếu Evidence/Smoke Bị Reject**

Given prompt không yêu cầu evidence/smoke  
When Evidence/Smoke Injection review  
Then prompt rejected.

**TECH13-P2-SMK-008 — Prompt Sai Execution Mode Bị Reject**

Given prompt chọn IMPLEMENT WITH GUARD khi chưa qua TECH-11 Code Handoff  
When Execution Mode Resolver chạy  
Then mode rejected.

**TECH13-P2-SMK-009 — Prompt Không Inspect Repo Bị Reject**

Given prompt implement nhưng không yêu cầu inspect codebase  
When Codebase Inspection review  
Then prompt rejected.

**TECH13-P2-SMK-010 — Prompt Không Báo Conflict Bị Reject**

Given prompt không yêu cầu phát hiện conflict TECH mới vs code cũ  
When Conflict Detection review  
Then prompt rejected.

**TECH13-P2-SMK-011 — Prompt Thiếu Report Format Bị Reject**

Given prompt không có report 14 mục  
When Report Template Resolver chạy  
Then prompt rejected.

**TECH13-P2-SMK-012 — Prompt Change Không Audit Bị Reject**

Given prompt đã handoff nhưng bị sửa âm thầm  
When Change Control review  
Then prompt invalid.

**TECH13-P2-SMK-013 — Handoff Không Là Implementation Complete**

Given PROMPT_READY đã gửi dev  
When Prompt-to-Dev Handoff chạy  
Then status chỉ là PROMPT_HANDOFF_SENT, không Implementation Complete.

**22. DONE GATE — PHẦN 2/4**

PHẦN 2/4 đạt Documentation Complete ở cấp module contract khi:

1.  Đã khóa Prompt Pack Orchestrator.

2.  Đã khóa Phase Prompt Factory.

3.  Đã khóa Source Injection Resolver.

4.  Đã khóa Scope Injection Resolver.

5.  Đã khóa Dependency Injection Resolver.

6.  Đã khóa P0 Blocker Injection Resolver.

7.  Đã khóa Evidence/Smoke Injection Resolver.

8.  Đã khóa Execution Mode Resolver.

9.  Đã khóa Agent Guardrail Resolver.

10. Đã khóa Codebase Inspection Resolver.

11. Đã khóa Conflict Detection Resolver.

12. Đã khóa Report Template Resolver.

13. Đã khóa Prompt Review Resolver.

14. Đã khóa Prompt Change Control Resolver.

15. Đã khóa Prompt-to-Dev Handoff Resolver.

16. Mỗi module có Scope In.

17. Mỗi module có Scope Out.

18. Mỗi module có Upstream Dependency.

19. Mỗi module có Downstream Handoff.

20. Mỗi module có P0 Blocker.

21. Mỗi module có Evidence.

22. Mỗi module có Smoke.

23. Có Cross-Module Dependency Map.

24. Có Module P0 Blocker Registry.

25. Có Evidence Package cấp phần.

26. Có Smoke Matrix định hướng.

27. Sẵn sàng chuyển sang PHẦN 3/4.

**23. FAIL GATE — PHẦN 2/4**

PHẦN 2/4 FAIL nếu:

1.  Thiếu module contract bắt buộc.

2.  Có module chưa có Scope In.

3.  Có module chưa có Scope Out.

4.  Có module chưa có Upstream Dependency.

5.  Có module chưa có Downstream Handoff.

6.  Có module chưa có P0 Blocker.

7.  Có module chưa có Evidence.

8.  Có module chưa có Smoke.

9.  Có module cho prompt thiếu source Ready.

10. Có module cho prompt thiếu Scope Out Ready.

11. Có module cho prompt thiếu execution mode Ready.

12. Có module cho prompt thiếu evidence/smoke Ready.

13. Có module cho prompt thiếu report format Ready.

14. Có module cho prompt không inspect repo Ready.

15. Có module cho prompt không báo conflict Ready.

16. Có module cho prompt hardcode policy.

17. Có module cho prompt copy-paste code rời rạc.

18. Có module cho prompt bypass TECH-11/TECH-10.

19. Có module cho prompt gọi Release Ready/Production Ready/Go-live Approved.

20. Có module tự mở Global Gateway.

**24. RELEASE HANDOFF — SANG PHẦN 3/4**

PHẦN 2/4 bàn giao sang PHẦN 3/4 các nội dung đã khóa:

1.  Danh sách module prompt governance đầy đủ.

2.  Boundary từng module.

3.  Dependency từng module.

4.  Handoff từng module.

5.  P0 blocker từng module.

6.  Evidence từng module.

7.  Smoke từng module.

8.  Cross-module dependency map.

9.  Prompt Pack Orchestrator rule.

10. Phase Prompt Factory rule.

11. Source Injection rule.

12. Scope Injection rule.

13. Dependency Injection rule.

14. P0 Blocker Injection rule.

15. Evidence/Smoke Injection rule.

16. Execution Mode rule.

17. Agent Guardrail rule.

18. Codebase Inspection rule.

19. Conflict Detection rule.

20. Report Template rule.

21. Prompt Review rule.

22. Prompt Change Control rule.

23. Prompt-to-Dev Handoff rule.

PHẦN 3/4 sẽ viết:

**PROMPT LIFECYCLE / AGENT EXECUTION STATE MACHINE / PHASE PROMPT FLOW / REPORT-TO-EVIDENCE CONTROL**

Trong đó phải khóa rõ:

1.  Prompt lifecycle.

2.  Execution mode state model.

3.  Prompt review state model.

4.  Agent execution state model.

5.  Conflict handling flow.

6.  Codebase inspection flow.

7.  Report submission flow.

8.  Evidence/smoke handoff flow.

9.  Fix-after-review flow.

10. Prompt change control flow.

11. Prompt-to-dev handoff flow.

12. TECH-11/TECH-10 alignment.

13. Fail-safe agent control.

**25. TRẠNG THÁI SAU PHẦN 2/4**

Sau PHẦN 2/4:

**TECH-13 = DOCUMENTATION IN PROGRESS**

PHẦN 1/4 đã khóa prompt pack principles.

PHẦN 2/4 đã khóa module contracts.

Chưa được gọi là Documentation Complete.

Chưa được gọi là Prompt Pack Ready.

Chưa được gọi là Dev Ready.

Chưa được gọi là Implementation Ready.

Chưa được gọi là Release Ready.

Chưa được gọi là Production Ready.

Chưa được gọi là Go-live Approved.

Global Gateway vẫn mặc định:

**BLOCKED**

**KẾT LUẬN PHẦN 2/4**

PHẦN 2/4 đã khóa đầy đủ module contracts cho TECH-13.

Các module trọng yếu đã được cố định:

1.  Prompt Pack Orchestrator giữ toàn bộ prompt pack theo PHASE 0 → PHASE 9.

2.  Phase Prompt Factory tạo prompt draft đúng chuẩn.

3.  Source Injection Resolver buộc prompt có TECH source rõ.

4.  Scope Injection Resolver buộc có Scope In và Scope Out.

5.  Dependency Injection Resolver chặn prompt bỏ upstream/downstream.

6.  P0 Blocker Injection Resolver buộc prompt có lỗi cấm tuyệt đối.

7.  Evidence/Smoke Injection Resolver buộc prompt yêu cầu bằng chứng và smoke.

8.  Execution Mode Resolver kiểm soát agent được làm gì.

9.  Agent Guardrail Resolver chặn hardcode, copy-paste, tự đổi nghiệp vụ.

10. Codebase Inspection Resolver buộc agent inspect repo thật.

11. Conflict Detection Resolver buộc agent báo mâu thuẫn TECH mới/code cũ.

12. Report Template Resolver buộc report 14 mục.

13. Prompt Review Resolver chặn prompt thiếu field critical.

14. Prompt Change Control Resolver kiểm soát thay đổi prompt sau khi Ready/handoff.

15. Prompt-to-Dev Handoff Resolver chỉ gửi prompt đã review, không gọi implementation complete hay release ready.

PHẦN 2/4 sẵn sàng bàn giao sang:

**PHẦN 3/4 — PROMPT LIFECYCLE / AGENT EXECUTION STATE MACHINE / PHASE PROMPT FLOW / REPORT-TO-EVIDENCE CONTROL**.

**PHẦN 3/4 — PROMPT LIFECYCLE / AGENT EXECUTION STATE MACHINE / PHASE PROMPT FLOW / REPORT-TO-EVIDENCE CONTROL**

**1. MỤC TIÊU PHẦN 3/4**

PHẦN 3/4 khóa vòng đời của prompt từ lúc được tạo theo phase/backlog cho đến khi được review, handoff cho dev/coding agent, agent thực thi, nộp report, evidence, smoke và bàn giao lại cho TECH-11/TECH-10 theo đúng gate.

PHẦN này xác định rõ:

1.  Prompt đi qua những trạng thái nào.

2.  Execution mode vận hành ra sao.

3.  Prompt review vận hành thế nào.

4.  Agent execution state machine hoạt động ra sao.

5.  Agent phải inspect codebase thật trước khi sửa thế nào.

6.  Agent phát hiện conflict giữa TECH mới và code cũ ra sao.

7.  Agent nộp report theo 14 mục thế nào.

8.  Report chuyển thành evidence ra sao.

9.  Smoke/test/build output được kiểm soát thế nào.

10. Fix-after-review vận hành ra sao.

11. Prompt change control vận hành thế nào.

12. Prompt-to-dev handoff được kiểm soát thế nào.

13. TECH-13 liên kết với TECH-11 và TECH-10 thế nào.

14. Khi thiếu source, thiếu mode, thiếu evidence, smoke, report hoặc conflict thì fail-safe ra sao.

PHẦN 3/4 không viết code.

PHẦN 3/4 không thiết kế API chi tiết.

PHẦN 3/4 không thiết kế database chi tiết.

PHẦN 3/4 không thiết kế UI chi tiết.

PHẦN 3/4 chỉ khóa **prompt lifecycle, agent execution state machine, report-to-evidence control và handoff governance**.

**2. NGUYÊN TẮC LIFECYCLE CHUNG**

Toàn bộ lifecycle của prompt trong TECH-13 phải tuân thủ các nguyên tắc sau:

1.  Prompt không source-of-truth thì không được tạo thành prompt Ready.

2.  Prompt thiếu Scope Out thì không được giao dev.

3.  Prompt thiếu dependency thì không được giao dev.

4.  Prompt thiếu P0 blocker thì không được giao dev.

5.  Prompt thiếu evidence/smoke thì không được giao dev.

6.  Prompt thiếu execution mode thì không được giao dev.

7.  Prompt thiếu report format thì không được giao dev.

8.  Prompt thiếu guardrail thì không được giao dev.

9.  Prompt không yêu cầu inspect codebase thật thì không được dùng cho implementation.

10. Prompt không yêu cầu báo conflict thì không được dùng.

11. Prompt cho phép hardcode policy thì phải bị reject.

12. Prompt cho phép copy-paste code rời rạc thì phải bị reject.

13. Prompt cho phép agent tự đổi nghiệp vụ thì phải bị reject.

14. Prompt cho phép agent gọi Release Ready / Production Ready / Go-live Approved thì phải bị reject.

15. Prompt handoff không phải Implementation Complete.

16. Agent report không phải Release Ready.

17. Agent build/test pass không phải Production Ready.

18. Evidence/smoke output phải đi qua TECH-11/TECH-10.

19. TECH-13 không mở Global Gateway.

20. Global Gateway vẫn BLOCKED cho tới khi TECH-10 pass.

**3. PROMPT LIFECYCLE STATE MODEL**

**3.1. Danh sách trạng thái prompt**

Mỗi prompt trong TECH-13 có các trạng thái:

1.  **PROMPT_NOT_CREATED**  
    Prompt chưa được tạo.

2.  **PROMPT_DRAFTING**  
    Prompt đang được soạn theo phase/backlog.

3.  **PROMPT_NEED_SOURCE_INJECTION**  
    Prompt chưa có source-of-truth rõ.

4.  **PROMPT_NEED_SCOPE_INJECTION**  
    Prompt chưa có Scope In / Scope Out.

5.  **PROMPT_NEED_DEPENDENCY_INJECTION**  
    Prompt chưa có dependency.

6.  **PROMPT_NEED_P0_INJECTION**  
    Prompt chưa có P0 blocker.

7.  **PROMPT_NEED_EVIDENCE_SMOKE_INJECTION**  
    Prompt chưa có evidence/smoke.

8.  **PROMPT_NEED_EXECUTION_MODE**  
    Prompt chưa có mode thực thi.

9.  **PROMPT_NEED_GUARDRAIL**  
    Prompt chưa có guardrail.

10. **PROMPT_NEED_REPORT_TEMPLATE**  
    Prompt chưa có report format 14 mục.

11. **PROMPT_REVIEW_PENDING**  
    Prompt đang chờ review.

12. **PROMPT_REJECTED**  
    Prompt bị reject.

13. **PROMPT_NEED_REWORK**  
    Prompt cần sửa.

14. **PROMPT_READY_FOR_HANDOFF**  
    Prompt đủ điều kiện bàn giao dev/coding agent.

15. **PROMPT_HANDOFF_SENT**  
    Prompt đã gửi cho dev/coding agent.

16. **PROMPT_EXECUTION_IN_PROGRESS**  
    Agent đang thực thi.

17. **PROMPT_EXECUTION_REPORTED**  
    Agent đã nộp report.

18. **PROMPT_REPORT_REVIEW_PENDING**  
    Report đang được review.

19. **PROMPT_REPORT_REJECTED**  
    Report bị reject.

20. **PROMPT_REPORT_ACCEPTED_FOR_TECH11**  
    Report được accepted ở cấp handoff về TECH-11.

21. **PROMPT_SUPERSEDED**  
    Prompt bị thay thế bởi prompt mới.

22. **PROMPT_CANCELLED**  
    Prompt bị hủy có lý do.

**3.2. Transition hợp lệ**

Các transition hợp lệ:

1.  PROMPT_NOT_CREATED → PROMPT_DRAFTING.

2.  PROMPT_DRAFTING → PROMPT_NEED_SOURCE_INJECTION.

3.  PROMPT_NEED_SOURCE_INJECTION → PROMPT_NEED_SCOPE_INJECTION.

4.  PROMPT_NEED_SCOPE_INJECTION → PROMPT_NEED_DEPENDENCY_INJECTION.

5.  PROMPT_NEED_DEPENDENCY_INJECTION → PROMPT_NEED_P0_INJECTION.

6.  PROMPT_NEED_P0_INJECTION → PROMPT_NEED_EVIDENCE_SMOKE_INJECTION.

7.  PROMPT_NEED_EVIDENCE_SMOKE_INJECTION → PROMPT_NEED_EXECUTION_MODE.

8.  PROMPT_NEED_EXECUTION_MODE → PROMPT_NEED_GUARDRAIL.

9.  PROMPT_NEED_GUARDRAIL → PROMPT_NEED_REPORT_TEMPLATE.

10. PROMPT_NEED_REPORT_TEMPLATE → PROMPT_REVIEW_PENDING.

11. PROMPT_REVIEW_PENDING → PROMPT_REJECTED.

12. PROMPT_REVIEW_PENDING → PROMPT_NEED_REWORK.

13. PROMPT_REVIEW_PENDING → PROMPT_READY_FOR_HANDOFF.

14. PROMPT_READY_FOR_HANDOFF → PROMPT_HANDOFF_SENT.

15. PROMPT_HANDOFF_SENT → PROMPT_EXECUTION_IN_PROGRESS.

16. PROMPT_EXECUTION_IN_PROGRESS → PROMPT_EXECUTION_REPORTED.

17. PROMPT_EXECUTION_REPORTED → PROMPT_REPORT_REVIEW_PENDING.

18. PROMPT_REPORT_REVIEW_PENDING → PROMPT_REPORT_REJECTED.

19. PROMPT_REPORT_REVIEW_PENDING → PROMPT_REPORT_ACCEPTED_FOR_TECH11.

20. Bất kỳ trạng thái nào → PROMPT_SUPERSEDED nếu có prompt mới thay thế.

21. Bất kỳ trạng thái nào → PROMPT_CANCELLED nếu owner quyết định hủy.

**3.3. Transition bị cấm**

Các transition bị cấm:

1.  PROMPT_NOT_CREATED → PROMPT_READY_FOR_HANDOFF.

2.  PROMPT_DRAFTING → PROMPT_HANDOFF_SENT.

3.  PROMPT_NEED_SOURCE_INJECTION → PROMPT_READY_FOR_HANDOFF.

4.  PROMPT_NEED_SCOPE_INJECTION → PROMPT_READY_FOR_HANDOFF.

5.  PROMPT_NEED_P0_INJECTION → PROMPT_READY_FOR_HANDOFF.

6.  PROMPT_NEED_EVIDENCE_SMOKE_INJECTION → PROMPT_READY_FOR_HANDOFF.

7.  PROMPT_NEED_EXECUTION_MODE → PROMPT_HANDOFF_SENT.

8.  PROMPT_REJECTED → PROMPT_HANDOFF_SENT.

9.  PROMPT_HANDOFF_SENT → Implementation Complete.

10. PROMPT_REPORT_ACCEPTED_FOR_TECH11 → Release Ready.

11. PROMPT_REPORT_ACCEPTED_FOR_TECH11 → Production Ready.

12. PROMPT_REPORT_ACCEPTED_FOR_TECH11 → Go-live Approved.

**3.4. P0 Blocker**

FAIL nếu prompt chưa review đã giao dev.

FAIL nếu prompt thiếu source nhưng handoff.

FAIL nếu prompt thiếu evidence/smoke nhưng handoff.

FAIL nếu report accepted rồi bị gọi là Release Ready.

FAIL nếu prompt lifecycle bypass TECH-11 hoặc TECH-10.

**4. EXECUTION MODE STATE MODEL**

**4.1. Danh sách trạng thái execution mode**

Execution mode có các trạng thái:

1.  **MODE_NOT_SELECTED**  
    Chưa chọn mode.

2.  **MODE_ANALYSIS_ONLY**  
    Chỉ phân tích, không sửa file.

3.  **MODE_IMPLEMENT_WITH_GUARD**  
    Được sửa file trong phạm vi đã duyệt.

4.  **MODE_TEST_SMOKE_ONLY**  
    Chỉ test/smoke/build, không sửa business logic.

5.  **MODE_FIX_AFTER_REVIEW**  
    Chỉ sửa blocker đã được liệt kê.

6.  **MODE_DOCUMENTATION_HANDOFF_UPDATE_ONLY**  
    Chỉ cập nhật tài liệu/handoff.

7.  **MODE_REJECTED**  
    Mode không hợp lệ.

8.  **MODE_REVIEW_REQUIRED**  
    Cần review lại mode.

**4.2. Rule chọn mode**

Mode được chọn theo trạng thái backlog/handoff:

1.  Chưa qua Code Handoff Control → chỉ được ANALYSIS ONLY.

2.  Đã qua Code Handoff Control → có thể IMPLEMENT WITH GUARD.

3.  Đang cần test lại → TEST / SMOKE ONLY.

4.  Có blocker đã review → FIX AFTER REVIEW.

5.  Chỉ cần cập nhật tài liệu/handoff → DOCUMENTATION / HANDOFF UPDATE ONLY.

**4.3. Transition bị cấm**

1.  MODE_ANALYSIS_ONLY → Agent sửa file.

2.  MODE_TEST_SMOKE_ONLY → Agent sửa business logic.

3.  MODE_DOCUMENTATION_HANDOFF_UPDATE_ONLY → Agent sửa code logic.

4.  MODE_FIX_AFTER_REVIEW → Agent sửa ngoài blocker.

5.  MODE_IMPLEMENT_WITH_GUARD khi chưa qua TECH-11 Code Handoff Control.

6.  MODE_NOT_SELECTED → PROMPT_HANDOFF_SENT.

**4.4. P0 Blocker**

FAIL nếu prompt không có mode.

FAIL nếu agent tự đổi mode.

FAIL nếu ANALYSIS ONLY nhưng agent sửa file.

FAIL nếu IMPLEMENT WITH GUARD khi chưa được phép.

**5. PROMPT REVIEW STATE MODEL**

**5.1. Danh sách trạng thái review**

Prompt review có các trạng thái:

1.  **REVIEW_NOT_STARTED**.

2.  **REVIEW_CHECKING_SOURCE**.

3.  **REVIEW_CHECKING_SCOPE**.

4.  **REVIEW_CHECKING_DEPENDENCY**.

5.  **REVIEW_CHECKING_P0**.

6.  **REVIEW_CHECKING_EVIDENCE_SMOKE**.

7.  **REVIEW_CHECKING_MODE**.

8.  **REVIEW_CHECKING_GUARDRAIL**.

9.  **REVIEW_CHECKING_REPORT_TEMPLATE**.

10. **REVIEW_PASS**.

11. **REVIEW_FAIL**.

12. **REVIEW_NEED_REWORK**.

13. **REVIEW_BLOCKED_BY_BACKLOG**.

14. **REVIEW_BLOCKED_BY_TECH11**.

**5.2. Review Pass Rule**

Prompt chỉ REVIEW_PASS khi có:

1.  Phase.

2.  Backlog/task.

3.  Execution mode.

4.  Source-of-truth cụ thể.

5.  Scope In.

6.  Scope Out.

7.  Upstream dependency.

8.  Downstream handoff.

9.  P0 blocker.

10. Evidence required.

11. Smoke required.

12. Guardrail.

13. Codebase inspection requirement.

14. Conflict detection requirement.

15. Report format 14 mục.

16. Release/Gateway warning.

17. Không có prompt-level P0 blocker.

**5.3. Review Fail Rule**

Prompt REVIEW_FAIL nếu:

1.  Thiếu source.

2.  Thiếu Scope Out.

3.  Thiếu P0 blocker.

4.  Thiếu evidence/smoke.

5.  Thiếu execution mode.

6.  Thiếu report format.

7.  Cho copy-paste code.

8.  Cho hardcode policy.

9.  Cho agent tự đổi nghiệp vụ.

10. Cho release claim.

11. Bypass TECH-11/TECH-10.

**5.4. P0 Blocker**

FAIL nếu prompt review pass khi thiếu field critical.

FAIL nếu reviewer pass prompt yêu cầu copy-paste code.

FAIL nếu prompt thiếu release warning nhưng vẫn gửi dev.

**6. AGENT EXECUTION STATE MACHINE**

**6.1. Danh sách trạng thái agent execution**

Agent execution có các trạng thái:

1.  **AGENT_NOT_STARTED**.

2.  **AGENT_READING_PROMPT**.

3.  **AGENT_READING_SOURCE_OF_TRUTH**.

4.  **AGENT_INSPECTING_CODEBASE**.

5.  **AGENT_IDENTIFYING_CURRENT_STATE**.

6.  **AGENT_DETECTING_CONFLICTS**.

7.  **AGENT_PLANNING_IMPLEMENTATION**.

8.  **AGENT_WAITING_FOR_APPROVAL_IF_REQUIRED**.

9.  **AGENT_IMPLEMENTING_WITH_GUARD**.

10. **AGENT_TESTING_BUILDING**.

11. **AGENT_COLLECTING_EVIDENCE**.

12. **AGENT_PREPARING_REPORT**.

13. **AGENT_REPORT_SUBMITTED**.

14. **AGENT_BLOCKED_BY_CONFLICT**.

15. **AGENT_BLOCKED_BY_DEPENDENCY**.

16. **AGENT_BLOCKED_BY_MISSING_RUNTIME_CONFIG**.

17. **AGENT_BLOCKED_BY_TEST_FAILURE**.

18. **AGENT_BLOCKED_BY_SCOPE**.

19. **AGENT_COMPLETED_FOR_REVIEW**.

**6.2. Luồng execution chuẩn**

Luồng chuẩn:

1.  AGENT_READING_PROMPT.

2.  AGENT_READING_SOURCE_OF_TRUTH.

3.  AGENT_INSPECTING_CODEBASE.

4.  AGENT_IDENTIFYING_CURRENT_STATE.

5.  AGENT_DETECTING_CONFLICTS.

6.  AGENT_PLANNING_IMPLEMENTATION.

7.  Nếu mode cho phép: AGENT_IMPLEMENTING_WITH_GUARD.

8.  AGENT_TESTING_BUILDING.

9.  AGENT_COLLECTING_EVIDENCE.

10. AGENT_PREPARING_REPORT.

11. AGENT_REPORT_SUBMITTED.

12. AGENT_COMPLETED_FOR_REVIEW.

**6.3. Execution bị chặn khi**

Agent phải dừng hoặc báo blocker khi:

1.  Source-of-truth không tìm thấy.

2.  Codebase không có module liên quan.

3.  Code cũ trái TECH mới.

4.  Tài liệu cũ trái TECH mới.

5.  Dependency upstream thiếu.

6.  Runtime/config/policy thiếu.

7.  Test/build fail.

8.  Scope không rõ.

9.  Cần DB/API/UI impact review nhưng chưa có.

10. Không thể tạo evidence.

11. Có risk hardcode policy.

12. Có risk sửa ngoài scope.

**6.4. P0 Blocker**

FAIL nếu agent sửa code trước khi đọc source.

FAIL nếu agent sửa code trước khi inspect codebase.

FAIL nếu agent gặp conflict nhưng vẫn tự xử lý im lặng.

FAIL nếu agent test fail nhưng báo complete.

**7. CODEBASE INSPECTION FLOW**

**7.1. Mục tiêu**

Codebase Inspection Flow đảm bảo agent không viết code tưởng tượng.

Agent phải hiểu project thật trước khi sửa.

**7.2. Agent phải inspect**

Agent phải inspect:

1.  Project structure.

2.  Module liên quan.

3.  Existing patterns.

4.  Naming conventions.

5.  Current implementation state.

6.  Tests hiện có.

7.  Build/lint/typecheck command.

8.  Config/runtime hiện có.

9.  Migration/seed nếu có impact.

10. Docs/handoff hiện có nếu liên quan.

**7.3. Inspection output bắt buộc**

Agent phải ghi trong report:

1.  File/khu vực đã inspect.

2.  Current implementation summary.

3.  Gaps với TECH source-of-truth.

4.  Files modified nếu có.

5.  Files không sửa nhưng liên quan.

6.  Risk nếu không tìm thấy pattern/test/config.

**7.4. P0 Blocker**

FAIL nếu agent tạo file mới không theo project pattern.

FAIL nếu agent sửa file không liên quan scope.

FAIL nếu agent không báo file đã inspect.

FAIL nếu agent không báo current implementation state.

**8. CONFLICT HANDLING FLOW**

**8.1. Các loại conflict**

Agent phải phát hiện các loại conflict:

1.  TECH mới vs tài liệu cũ.

2.  TECH mới vs code cũ.

3.  Backlog vs codebase.

4.  Requirement vs test cũ.

5.  Policy mới vs config cũ.

6.  State machine mới vs implementation cũ.

7.  Evidence/audit rule mới vs code không audit.

8.  Public/private boundary mới vs behavior cũ.

9.  Release gate mới vs current pipeline.

**8.2. Xử lý conflict**

Khi có conflict:

1.  Không tự chọn code cũ.

2.  Không dùng legacy behavior để làm chuẩn.

3.  Không sửa âm thầm.

4.  Ghi conflict trong report.

5.  Phân loại severity.

6.  Đề xuất blocker nếu P0.

7.  Đề xuất cần owner review nếu cần.

8.  Chỉ tiếp tục phần không bị ảnh hưởng nếu scope cho phép.

**8.3. Conflict report format**

Conflict phải ghi:

1.  Conflict ID.

2.  TECH source.

3.  Current code/file nếu có.

4.  Conflict summary.

5.  Impact.

6.  P0/P1/P2.

7.  Suggested action.

8.  Owner/reviewer required.

**8.4. P0 Blocker**

FAIL nếu conflict P0 bị ghi như warning nhẹ.

FAIL nếu code cũ thắng TECH mới.

FAIL nếu conflict không xuất hiện trong report.

FAIL nếu agent tự hợp thức hóa legacy behavior.

**9. IMPLEMENTATION PLAN FLOW**

**9.1. Khi nào cần implementation plan**

Agent phải lập plan trước khi sửa code nếu:

1.  Mode là IMPLEMENT WITH GUARD.

2.  Task có nhiều file.

3.  Task có risk DB/API/UI.

4.  Task ảnh hưởng high-risk command.

5.  Task ảnh hưởng payment/order/revenue.

6.  Task ảnh hưởng AI/Gateway/Ads/Live/IVR.

7.  Task ảnh hưởng evidence/audit.

8.  Task có source conflict.

**9.2. Nội dung plan**

Implementation plan phải có:

1.  Requirement summary.

2.  Files/modules expected.

3.  Changes proposed.

4.  Risk.

5.  Test/build plan.

6.  Evidence plan.

7.  Rollback/undo note nếu phù hợp.

8.  Out-of-scope note.

9.  Blocker if any.

**9.3. Plan không phải approval release**

Implementation plan không phải:

1.  Implementation Complete.

2.  Evidence Accepted.

3.  Smoke Pass.

4.  Release Ready.

5.  Production Ready.

6.  Go-live Approved.

**9.4. P0 Blocker**

FAIL nếu agent sửa high-risk flow mà không có plan.

FAIL nếu plan bỏ test/build/evidence.

FAIL nếu plan không nêu risk khi có DB/API/UI impact.

**10. REPORT SUBMISSION FLOW**

**10.1. Report nộp khi nào**

Agent phải nộp report khi:

1.  Hoàn tất analysis-only.

2.  Hoàn tất implementation.

3.  Hoàn tất test/smoke-only.

4.  Hoàn tất fix-after-review.

5.  Hoàn tất documentation/handoff update.

6.  Bị blocked và không thể tiếp tục.

7.  Có conflict P0.

8.  Có test/build fail.

**10.2. Report 14 mục bắt buộc**

Report phải gồm:

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

**10.3. Report khi bị blocked**

Nếu bị blocked, report vẫn phải có:

1.  Lý do bị blocked.

2.  Source liên quan.

3.  File/module liên quan nếu đã inspect.

4.  Dependency thiếu.

5.  Evidence thiếu.

6.  Owner cần review.

7.  Đề xuất next action.

**10.4. P0 Blocker**

FAIL nếu agent chỉ báo “done”.

FAIL nếu report thiếu file list.

FAIL nếu report thiếu test/build status.

FAIL nếu report giấu blocker.

FAIL nếu report gọi Release Ready.

**11. REPORT REVIEW STATE MODEL**

**11.1. Danh sách trạng thái report review**

Report review có các trạng thái:

1.  **REPORT_NOT_RECEIVED**.

2.  **REPORT_RECEIVED**.

3.  **REPORT_UNDER_REVIEW**.

4.  **REPORT_ACCEPTED_FOR_HANDOFF**.

5.  **REPORT_NEED_MORE_INFO**.

6.  **REPORT_REJECTED**.

7.  **REPORT_BLOCKED_BY_P0**.

8.  **REPORT_RETEST_REQUIRED**.

9.  **REPORT_SUPERSEDED**.

**11.2. Report accepted khi**

Report accepted khi có:

1.  14 mục đầy đủ hoặc ghi “không áp dụng” hợp lý.

2.  Source requirement rõ.

3.  File list rõ.

4.  Commands run rõ.

5.  Test/build result rõ.

6.  Evidence rõ.

7.  Risk rõ.

8.  Handoff update rõ.

9.  Không gọi release ready.

10. Không giấu blocker.

**11.3. Report rejected khi**

Report rejected nếu:

1.  Thiếu source.

2.  Thiếu file list.

3.  Thiếu lệnh chạy.

4.  Thiếu test/build result.

5.  Thiếu evidence.

6.  Thiếu risk.

7.  Thiếu handoff.

8.  Có release claim.

9.  Có blocker nhưng ghi pass.

10. Có conflict nhưng không report.

**11.4. P0 Blocker**

FAIL nếu report accepted dù thiếu test/build/evidence.

FAIL nếu report accepted dù gọi Production Ready.

FAIL nếu report accepted dù có P0 blocker open.

**12. REPORT-TO-EVIDENCE CONTROL**

**12.1. Mục tiêu**

Report-to-Evidence Control chuyển nội dung report thành evidence package cho TECH-11/TECH-10 review.

**12.2. Report không tự thành evidence accepted**

Agent report chỉ là submission.

Report chưa phải Evidence Accepted.

Evidence phải được review theo TECH-10.

**12.3. Evidence từ report**

Có thể trích từ report:

1.  File list.

2.  Commands run.

3.  Test/build output.

4.  Migration/seed output.

5.  Smoke output.

6.  Audit/correlation reference.

7.  Screenshots/logs nếu có.

8.  Risk/blocker.

9.  Handoff note.

**12.4. Evidence bị reject nếu**

1.  Không map requirement.

2.  Không rõ environment.

3.  Không có expected/actual.

4.  Không có reviewer.

5.  Lộ dữ liệu nhạy cảm.

6.  Chỉ là lời nói.

7.  Không có output thực tế.

8.  Không trace được smoke/test.

**12.5. P0 Blocker**

FAIL nếu report được coi là evidence accepted ngay.

FAIL nếu evidence chưa review mà Completion PASS.

FAIL nếu test/build output thiếu nhưng evidence accepted.

**13. SMOKE / TEST / BUILD CONTROL**

**13.1. Agent phải chạy gì**

Tùy scope, agent phải chạy hoặc báo rõ không chạy được:

1.  Unit test.

2.  Integration test.

3.  Typecheck.

4.  Lint.

5.  Backend build.

6.  Frontend build.

7.  Migration test nếu có.

8.  Seed validation nếu có.

9.  Smoke script nếu có.

10. Manual smoke evidence nếu chưa có script.

**13.2. Khi không chạy được**

Nếu không chạy được test/build/smoke, agent phải báo:

1.  Lệnh không chạy được.

2.  Lý do.

3.  Missing dependency.

4.  Environment limitation.

5.  Risk.

6.  Suggested next action.

Không được ghi pass nếu chưa chạy.

**13.3. Build/test fail**

Nếu build/test fail:

1.  Không được báo complete.

2.  Phải ghi lỗi.

3.  Phải phân loại lỗi thuộc scope hay ngoài scope.

4.  Nếu mode cho phép fix thì đề xuất fix.

5.  Nếu không thuộc scope thì báo blocker.

6.  Không được giấu fail.

**13.4. P0 Blocker**

FAIL nếu agent không chạy test nhưng ghi pass.

FAIL nếu build fail nhưng báo done.

FAIL nếu smoke fail nhưng báo ready.

FAIL nếu agent bỏ qua migration/seed failure.

**14. FIX-AFTER-REVIEW FLOW**

**14.1. Khi nào dùng**

Dùng FIX AFTER REVIEW khi:

1.  Prompt trước đã chạy.

2.  Report đã nộp.

3.  Reviewer phát hiện blocker.

4.  Blocker đã được liệt kê.

5.  Scope fix rõ.

6.  Retest requirement rõ.

**14.2. Rule của Fix After Review**

Agent chỉ được:

1.  Sửa blocker được liệt kê.

2.  Không mở rộng scope.

3.  Không sửa business rule khác.

4.  Không refactor ngoài scope.

5.  Không hardcode để fix nhanh.

6.  Không bỏ test.

7.  Chạy retest.

8.  Nộp fix report.

**14.3. Fix report phải có**

1.  Blocker ID.

2.  Root cause.

3.  Files changed.

4.  Fix summary.

5.  Retest command.

6.  Retest result.

7.  Remaining risk.

8.  Handoff update.

**14.4. P0 Blocker**

FAIL nếu fix mode sửa ngoài blocker.

FAIL nếu fix không có retest.

FAIL nếu fix hardcode policy.

FAIL nếu fix che giấu root cause.

**15. PROMPT CHANGE CONTROL FLOW**

**15.1. Khi nào cần change control**

Cần change control khi:

1.  Prompt đã Ready nhưng thay source.

2.  Prompt đã Ready nhưng thay scope.

3.  Prompt đã Ready nhưng thay dependency.

4.  Prompt đã Ready nhưng thay execution mode.

5.  Prompt đã Ready nhưng thay P0 blocker.

6.  Prompt đã Ready nhưng thay evidence/smoke.

7.  Prompt đã handoff dev nhưng cần sửa.

8.  Prompt bị superseded bởi prompt mới.

**15.2. Change record phải có**

1.  Change ID.

2.  Prompt ID.

3.  Before.

4.  After.

5.  Reason.

6.  Impact.

7.  Owner/reviewer.

8.  Re-review required.

9.  Re-handoff required.

10. Dev/QA notification.

**15.3. Change bị cấm**

Không được:

1.  Sửa prompt âm thầm.

2.  Xóa P0 blocker.

3.  Xóa evidence/smoke.

4.  Chuyển mode sang implement khi chưa được phép.

5.  Bỏ report format.

6.  Bỏ guardrail.

7.  Bỏ release warning.

**15.4. P0 Blocker**

FAIL nếu prompt đã giao dev bị sửa âm thầm.

FAIL nếu prompt change làm mất source/evidence/smoke.

FAIL nếu dev không được thông báo prompt change.

**16. PROMPT-TO-DEV HANDOFF FLOW**

**16.1. Điều kiện handoff**

Prompt chỉ được handoff khi:

1.  Prompt Review Pass.

2.  Execution Mode hợp lệ.

3.  Source injected.

4.  Scope injected.

5.  Dependency injected.

6.  P0 blocker injected.

7.  Evidence/smoke injected.

8.  Guardrail injected.

9.  Report template attached.

10. No open prompt blocker.

**16.2. Handoff package phải có**

1.  Prompt ID.

2.  Phase.

3.  Backlog/task.

4.  Execution mode.

5.  Source-of-truth.

6.  Scope In/Out.

7.  Dependency.

8.  P0 blocker.

9.  Evidence/smoke.

10. Report template.

11. Receiver.

12. Handoff timestamp.

13. Next review step.

**16.3. Handoff không có nghĩa là**

Prompt handoff không có nghĩa:

1.  Dev Ready hoàn toàn.

2.  Implementation Complete.

3.  Evidence Accepted.

4.  Smoke Pass.

5.  Release Ready.

6.  Production Ready.

7.  Go-live Approved.

8.  Global Gateway Open.

**16.4. P0 Blocker**

FAIL nếu handoff gửi prompt blocked.

FAIL nếu handoff thiếu report template.

FAIL nếu handoff gọi prompt sent là implementation complete.

**17. TECH-11 / TECH-10 ALIGNMENT**

**17.1. Liên kết với TECH-11**

TECH-13 chỉ được giao prompt dựa trên:

1.  TECH-12 Backlog Pack.

2.  TECH-11 Dev Handoff Governance.

3.  TECH-11 Code Handoff Control.

4.  TECH-11 Implementation Report Format.

5.  TECH-11 Phase Exit Gate.

Nếu chưa qua TECH-11 Code Handoff Control, không dùng IMPLEMENT WITH GUARD.

**17.2. Liên kết với TECH-10**

TECH-13 không xét:

1.  Completion PASS.

2.  Release Ready.

3.  Release Approved.

4.  Go-live Approved.

5.  Scale Approved.

6.  Global Gateway PASS.

Các trạng thái này thuộc TECH-10.

**17.3. Handoff về TECH-10**

Chỉ sau khi:

1.  Prompt đã handoff.

2.  Agent thực thi.

3.  Report accepted.

4.  Evidence mapped.

5.  Smoke mapped.

6.  QA/retest nếu có.

7.  Phase exit accepted theo TECH-11.

thì mới bàn giao sang TECH-10 review.

**17.4. P0 Blocker**

FAIL nếu TECH-13 bypass TECH-11.

FAIL nếu TECH-13 bypass TECH-10.

FAIL nếu prompt report tự gọi Release Ready.

**18. FAIL-SAFE AGENT CONTROL**

**18.1. Khi source thiếu**

Nếu source thiếu:

1.  Agent không được sửa code.

2.  Report blocker.

3.  Prompt status cần rework.

4.  Route source review.

**18.2. Khi dependency thiếu**

Nếu dependency thiếu:

1.  Agent không được release-level implement.

2.  Có thể analysis-only nếu mode cho phép.

3.  Report dependency blocker.

4.  Chờ upstream pass.

**18.3. Khi codebase không khớp**

Nếu codebase không có pattern/module như prompt kỳ vọng:

1.  Không tự tạo kiến trúc tùy ý.

2.  Report gap.

3.  Đề xuất implementation plan.

4.  Chờ review nếu impact lớn.

**18.4. Khi runtime/config thiếu**

Nếu thiếu runtime/config/policy:

1.  Không hardcode.

2.  Report blocker.

3.  Đề xuất config/runtime need.

4.  Không tự tạo policy tạm.

**18.5. Khi test/build fail**

Nếu test/build fail:

1.  Không báo complete.

2.  Báo lỗi.

3.  Nếu trong scope, fix theo mode.

4.  Nếu ngoài scope, báo blocker.

5.  Không giấu fail.

**18.6. Khi agent không chắc**

Nếu agent không chắc:

1.  Không tự đoán.

2.  Ghi uncertainty.

3.  Report risk.

4.  Đề xuất owner/dev review.

5.  Không sửa business rule.

**19. P0 BLOCKER REGISTRY — PHẦN 3/4**

Các lỗi sau là P0 Blocker cấp lifecycle/state machine:

1.  Prompt thiếu source nhưng handoff.

2.  Prompt thiếu execution mode nhưng handoff.

3.  Prompt thiếu Scope Out nhưng handoff.

4.  Prompt thiếu P0 blocker nhưng handoff.

5.  Prompt thiếu evidence/smoke nhưng handoff.

6.  Prompt thiếu report format nhưng handoff.

7.  Prompt chưa review nhưng handoff.

8.  Prompt rejected nhưng handoff.

9.  Agent sửa file trong ANALYSIS ONLY.

10. Agent sửa business logic trong TEST / SMOKE ONLY.

11. Agent sửa ngoài blocker trong FIX AFTER REVIEW.

12. Agent sửa code trước khi inspect repo.

13. Agent không báo conflict TECH mới vs code cũ.

14. Agent dùng code cũ thắng TECH mới.

15. Agent hardcode policy.

16. Agent copy-paste code rời rạc.

17. Agent bỏ test/build.

18. Agent test fail nhưng báo complete.

19. Agent report thiếu 14 mục.

20. Report accepted nhưng thiếu evidence.

21. Report gọi Release Ready.

22. Prompt change không audit.

23. Prompt handoff gọi Implementation Complete.

24. TECH-13 bypass TECH-11.

25. TECH-13 bypass TECH-10.

26. TECH-13 mở Global Gateway.

**20. SMOKE ĐỊNH HƯỚNG — PHẦN 3/4**

**TECH13-P3-SMK-001 — Prompt Lifecycle Blocks Missing Source**

Given prompt draft chưa có source  
When Prompt Lifecycle chạy  
Then prompt chuyển PROMPT_NEED_SOURCE_INJECTION, không handoff.

**TECH13-P3-SMK-002 — Mode Blocks Wrong Action**

Given MODE_ANALYSIS_ONLY  
When agent cố sửa file  
Then execution fail và report violation.

**TECH13-P3-SMK-003 — Review Blocks Missing Report Template**

Given prompt thiếu report format 14 mục  
When Prompt Review chạy  
Then PROMPT_REJECTED.

**TECH13-P3-SMK-004 — Agent Must Inspect Codebase**

Given IMPLEMENT_WITH_GUARD prompt  
When agent bắt đầu  
Then phải inspect codebase trước khi sửa.

**TECH13-P3-SMK-005 — Conflict Must Be Reported**

Given code cũ khác TECH mới  
When agent phát hiện  
Then report conflict/blocker, không im lặng sửa lệch rule.

**TECH13-P3-SMK-006 — Build Fail Not Complete**

Given build/test fail  
When agent report  
Then không được ghi completed/pass.

**TECH13-P3-SMK-007 — Report To Evidence Not Auto Accepted**

Given agent report có test output  
When evidence review chưa accepted  
Then không gọi Completion PASS.

**TECH13-P3-SMK-008 — Fix Mode Limited**

Given FIX_AFTER_REVIEW  
When agent sửa ngoài blocker list  
Then execution violation.

**TECH13-P3-SMK-009 — Prompt Change Requires Re-handoff**

Given prompt đã gửi dev nhưng thay scope  
When Change Control chạy  
Then phải re-review và re-handoff.

**TECH13-P3-SMK-010 — Handoff Not Release Ready**

Given prompt handoff sent and agent report accepted  
When release status xét  
Then không Release Ready nếu chưa qua TECH-10.

**TECH13-P3-SMK-011 — Runtime Missing Blocks Hardcode**

Given runtime/config thiếu  
When agent triển khai  
Then agent phải báo blocker, không hardcode.

**TECH13-P3-SMK-012 — Global Gateway Still Blocked**

Given prompt execution completed  
When chưa có TECH-10 evidence/smoke/sign-off/release decision  
Then Global Gateway vẫn BLOCKED.

**21. EVIDENCE PACKAGE — PHẦN 3/4**

PHẦN 3/4 yêu cầu evidence thiết kế gồm:

1.  Prompt Lifecycle State Model accepted.

2.  Execution Mode State Model accepted.

3.  Prompt Review State Model accepted.

4.  Agent Execution State Machine accepted.

5.  Codebase Inspection Flow accepted.

6.  Conflict Handling Flow accepted.

7.  Implementation Plan Flow accepted.

8.  Report Submission Flow accepted.

9.  Report Review State Model accepted.

10. Report-to-Evidence Control accepted.

11. Smoke/Test/Build Control accepted.

12. Fix-after-Review Flow accepted.

13. Prompt Change Control Flow accepted.

14. Prompt-to-Dev Handoff Flow accepted.

15. TECH-11 / TECH-10 Alignment accepted.

16. Fail-safe Agent Control accepted.

17. P0 Blocker Registry accepted.

18. Smoke định hướng accepted.

**22. DONE GATE — PHẦN 3/4**

PHẦN 3/4 đạt Documentation Complete ở cấp lifecycle/state machine khi:

1.  Đã khóa Prompt Lifecycle State Model.

2.  Đã khóa Execution Mode State Model.

3.  Đã khóa Prompt Review State Model.

4.  Đã khóa Agent Execution State Machine.

5.  Đã khóa Codebase Inspection Flow.

6.  Đã khóa Conflict Handling Flow.

7.  Đã khóa Implementation Plan Flow.

8.  Đã khóa Report Submission Flow.

9.  Đã khóa Report Review State Model.

10. Đã khóa Report-to-Evidence Control.

11. Đã khóa Smoke/Test/Build Control.

12. Đã khóa Fix-after-Review Flow.

13. Đã khóa Prompt Change Control Flow.

14. Đã khóa Prompt-to-Dev Handoff Flow.

15. Đã khóa TECH-11 / TECH-10 Alignment.

16. Đã khóa Fail-safe Agent Control.

17. Đã có P0 Blocker Registry.

18. Đã có Smoke định hướng.

19. Đã có Evidence Package.

20. Đã sẵn sàng chuyển sang PHẦN 4/4.

**23. FAIL GATE — PHẦN 3/4**

PHẦN 3/4 FAIL nếu:

1.  Thiếu Prompt Lifecycle State Model.

2.  Thiếu Execution Mode State Model.

3.  Thiếu Prompt Review State Model.

4.  Thiếu Agent Execution State Machine.

5.  Thiếu Codebase Inspection Flow.

6.  Thiếu Conflict Handling Flow.

7.  Thiếu Report Submission Flow.

8.  Thiếu Report-to-Evidence Control.

9.  Thiếu Smoke/Test/Build Control.

10. Thiếu Fix-after-Review Flow.

11. Thiếu Prompt Change Control Flow.

12. Thiếu TECH-11/TECH-10 Alignment.

13. Cho prompt thiếu source handoff.

14. Cho prompt thiếu mode handoff.

15. Cho agent sửa code trong Analysis Only.

16. Cho agent bỏ inspect codebase.

17. Cho agent không báo conflict.

18. Cho report thiếu 14 mục accepted.

19. Cho report tự thành Evidence Accepted.

20. Cho implementation report gọi Release Ready.

21. Cho TECH-13 mở Global Gateway.

**24. RELEASE HANDOFF — SANG PHẦN 4/4**

PHẦN 3/4 bàn giao sang PHẦN 4/4 các nội dung đã khóa:

1.  Prompt Lifecycle.

2.  Execution Mode State Model.

3.  Prompt Review State Model.

4.  Agent Execution State Machine.

5.  Codebase Inspection Flow.

6.  Conflict Handling Flow.

7.  Implementation Plan Flow.

8.  Report Submission Flow.

9.  Report Review State Model.

10. Report-to-Evidence Control.

11. Smoke/Test/Build Control.

12. Fix-after-Review Flow.

13. Prompt Change Control Flow.

14. Prompt-to-Dev Handoff Flow.

15. TECH-11 / TECH-10 Alignment.

16. Fail-safe Agent Control.

17. P0 Blocker Registry.

18. Smoke định hướng.

19. Evidence Package.

PHẦN 4/4 sẽ viết:

**FINAL PHASE PROMPT PACK / EXECUTION HANDOFF MATRIX / REPORT TEMPLATE / DONE GATE / FAIL GATE / RELEASE HANDOFF / TECH-13 FINAL CONCLUSION**

Trong đó phải khóa rõ:

1.  Final prompt pack PHASE 0 → PHASE 9.

2.  Execution handoff matrix.

3.  Mode matrix.

4.  Evidence/smoke/report matrix.

5.  Prompt review matrix.

6.  Agent execution matrix.

7.  Final implementation report template.

8.  Final prompt smoke matrix.

9.  Final evidence package.

10. Owner/reviewer points.

11. Final Done Gate.

12. Final Fail Gate.

13. Final Status Registry.

14. TECH-13 Final Conclusion.

**25. TRẠNG THÁI SAU PHẦN 3/4**

Sau PHẦN 3/4:

**TECH-13 = DOCUMENTATION IN PROGRESS**

PHẦN 1/4 đã khóa prompt pack principles.

PHẦN 2/4 đã khóa module contracts.

PHẦN 3/4 đã khóa prompt lifecycle, agent execution state machine, phase prompt flow và report-to-evidence control.

Chưa được gọi là Documentation Complete.

Chưa được gọi là Prompt Pack Ready.

Chưa được gọi là Dev Ready.

Chưa được gọi là Implementation Ready.

Chưa được gọi là Release Ready.

Chưa được gọi là Production Ready.

Chưa được gọi là Go-live Approved.

Global Gateway vẫn mặc định:

**BLOCKED**

**KẾT LUẬN PHẦN 3/4**

PHẦN 3/4 đã khóa vòng đời prompt và agent execution cho TECH-13.

Các điểm trọng yếu đã được cố định:

1.  Prompt phải đi từ draft → source injection → scope injection → dependency → P0 → evidence/smoke → mode → guardrail → report template → review → handoff.

2.  Prompt thiếu source không được handoff.

3.  Prompt thiếu Scope Out không được handoff.

4.  Prompt thiếu execution mode không được handoff.

5.  Prompt thiếu evidence/smoke/report không được handoff.

6.  Agent không được sửa file trong ANALYSIS ONLY.

7.  Agent không được sửa business logic trong TEST / SMOKE ONLY.

8.  Agent chỉ được sửa blocker đã liệt kê trong FIX AFTER REVIEW.

9.  Agent phải đọc source-of-truth.

10. Agent phải inspect codebase thật.

11. Agent phải phát hiện và báo conflict giữa TECH mới và code cũ.

12. Agent không được hardcode policy.

13. Agent không được copy-paste code rời rạc.

14. Agent không được tự đổi nghiệp vụ.

15. Agent không được giấu build/test fail.

16. Agent report phải đủ 14 mục.

17. Agent report không tự thành Evidence Accepted.

18. Agent report không được gọi Release Ready.

19. Prompt change sau handoff phải có change record và re-handoff.

20. TECH-13 chỉ bàn giao report/evidence về TECH-11/TECH-10, không tự xét release.

21. TECH-13 không mở Global Gateway.

22. Global Gateway vẫn BLOCKED cho tới khi TECH-10 có accepted evidence, smoke pass, owner sign-off và release decision.

PHẦN 3/4 sẵn sàng bàn giao sang:

**PHẦN 4/4 — FINAL PHASE PROMPT PACK / EXECUTION HANDOFF MATRIX / REPORT TEMPLATE / DONE GATE / FAIL GATE / RELEASE HANDOFF / TECH-13 FINAL CONCLUSION**.

**PHẦN 4/4 — FINAL PHASE PROMPT PACK / EXECUTION HANDOFF MATRIX / REPORT TEMPLATE / DONE GATE / FAIL GATE / RELEASE HANDOFF / TECH-13 FINAL CONCLUSION**

**1. MỤC TIÊU PHẦN 4/4**

PHẦN 4/4 khóa bản cuối của **Dev Prompt Pack** dùng để giao việc cho dev/Codex/Copilot/coding agent theo từng phase.

PHẦN này xác định rõ:

1.  Final Prompt Pack cho PHASE 0 → PHASE 9.

2.  Execution Handoff Matrix.

3.  Execution Mode Matrix.

4.  Evidence / Smoke / Report Matrix.

5.  Prompt Review Matrix.

6.  Agent Execution Matrix.

7.  Final Implementation Report Template.

8.  Final Prompt Smoke Matrix.

9.  Final Evidence Package.

10. Owner / Reviewer Points.

11. Final Done Gate.

12. Final Fail Gate.

13. Release Handoff.

14. Final Status Registry.

15. TECH-13 Final Conclusion.

PHẦN 4/4 không viết code.

PHẦN 4/4 không thiết kế API chi tiết.

PHẦN 4/4 không thiết kế database chi tiết.

PHẦN 4/4 không thiết kế UI chi tiết.

PHẦN 4/4 chỉ khóa **prompt/handoff chuẩn để dev triển khai trong codebase thật**.

**2. FINAL PROMPT PACK PRINCIPLE**

TECH-13 khẳng định nguyên tắc cuối cùng:

**Prompt không phải code.**

**Prompt handoff không phải implementation complete.**

**Agent report không phải evidence accepted.**

**Build/test pass không phải release ready.**

**TECH-13 không mở Global Gateway.**

Một prompt chỉ hợp lệ khi có đủ:

1.  Phase.

2.  Backlog/task.

3.  Execution mode.

4.  Source-of-truth.

5.  Scope In.

6.  Scope Out.

7.  Upstream dependency.

8.  Downstream handoff.

9.  P0 blocker.

10. Evidence required.

11. Smoke required.

12. Guardrail.

13. Codebase inspection requirement.

14. Conflict detection requirement.

15. Report format 14 mục.

16. Release/Gateway warning.

Nếu thiếu bất kỳ điểm cốt lõi nào:

**Prompt không READY.**

**3. FINAL PHASE PROMPT PACK — PHASE 0**

**PROMPT-P0 — FOUNDATION / RBAC / AUDIT / EVIDENCE / IDEMPOTENCY EXECUTION HANDOFF**

**3.1. Mục tiêu**

Giao dev/coding agent triển khai hoặc phân tích PHASE 0 — Foundation.

PHASE 0 là nền bắt buộc cho toàn bộ hệ thống.

Không có PHASE 0, các phase sau không được triển khai high-risk flow ở mức release.

**3.2. Source-of-Truth bắt buộc**

1.  TECH-00 — Global Technical Governance.

2.  TECH-01 — Foundation / RBAC / Audit / Idempotency / Evidence Registry.

3.  TECH-10 — Global Evidence / Release Gateway.

4.  TECH-11 — Implementation Roadmap.

5.  TECH-12 — PHASE 0 Backlog Matrix.

**3.3. Execution Mode mặc định**

Bắt đầu bằng:

**MODE: ANALYSIS ONLY**

Chỉ chuyển sang:

**MODE: IMPLEMENT WITH GUARD**

khi TECH-11 Code Handoff Control đã pass.

**3.4. Scope In**

1.  Inspect codebase foundation hiện tại.

2.  Xác định RBAC/permission hiện có.

3.  Xác định actor identity hiện có.

4.  Xác định audit/evidence hiện có.

5.  Xác định idempotency hiện có.

6.  Xác định correlation/trace context hiện có.

7.  Phát hiện gap với TECH-01.

8.  Đề xuất implementation plan.

9.  Nếu được phép implement, chỉ sửa đúng scope PHASE 0.

10. Chạy test/build phù hợp.

11. Nộp report 14 mục.

**3.5. Scope Out**

1.  Không triển khai Product.

2.  Không triển khai Operational.

3.  Không triển khai Commerce.

4.  Không triển khai AI.

5.  Không triển khai Gateway.

6.  Không triển khai Ads.

7.  Không triển khai Live.

8.  Không triển khai IVR.

9.  Không hardcode permission.

10. Không bỏ audit/evidence cho high-risk command.

11. Không gọi Foundation pass là Release Ready.

12. Không mở Global Gateway.

**3.6. P0 Blocker**

1.  High-risk command không audit.

2.  Admin override không reason/evidence/audit.

3.  Evidence không map requirement.

4.  Permission không chặn action sai quyền.

5.  Idempotency không chặn double action.

6.  Correlation ID thiếu ở flow cần trace.

7.  Dev report thiếu test/build/evidence.

8.  Implementation done bị gọi là Production Ready.

**3.7. Evidence Required**

1.  File/module đã inspect.

2.  Current implementation summary.

3.  Permission matrix hoặc permission gap.

4.  Audit/evidence gap.

5.  Idempotency gap.

6.  Test/build output.

7.  Risk/blocker list.

8.  Report 14 mục.

**3.8. Smoke Required**

1.  User thiếu quyền → action blocked.

2.  High-risk action → audit created.

3.  Missing evidence → gate blocked.

4.  Duplicate command → không double action.

5.  Admin override thiếu reason → blocked.

**3.9. Handoff**

Kết quả PHASE 0 chỉ được ghi:

**Ready for TECH-11 Review**

Không được ghi:

1.  Release Ready.

2.  Production Ready.

3.  Go-live Approved.

4.  Global Gateway PASS.

**4. FINAL PHASE PROMPT PACK — PHASE 1**

**PROMPT-P1 — PRODUCT / SKU / RECIPE / PRODUCT ACTIVATION EXECUTION HANDOFF**

**4.1. Mục tiêu**

Giao dev/coding agent triển khai hoặc phân tích PHASE 1 — Product / SKU / Recipe / Product Activation.

PHASE 1 tạo nền sản phẩm trước Operational, Commerce, AI, Gateway và Live.

**4.2. Source-of-Truth bắt buộc**

1.  TECH-02 — Product / SKU / Recipe / Product Activation.

2.  TECH-03 — Operational Core dependency.

3.  TECH-04 — Commerce Sellable dependency.

4.  TECH-05 — AI Product Knowledge dependency.

5.  TECH-12 — PHASE 1 Backlog Matrix.

**4.3. Execution Mode mặc định**

**MODE: ANALYSIS ONLY**

Chỉ chuyển **IMPLEMENT WITH GUARD** sau khi PHASE 0 và TECH-11 Code Handoff Control pass.

**4.4. Scope In**

1.  Inspect product/SKU/recipe hiện tại.

2.  Xác định product master structure.

3.  Xác định SKU master structure.

4.  Xác định recipe/formula/version hiện có.

5.  Xác định product activation hiện có.

6.  Xác định public product name handling.

7.  Xác định internal SKU exposure risk.

8.  So sánh với TECH-02.

9.  Báo gap/conflict.

10. Nếu được phép implement, sửa đúng PHASE 1.

11. Chạy test/build.

12. Nộp report 14 mục.

**4.5. Scope Out**

1.  Không tự quyết Sellable.

2.  Không bán hàng.

3.  Không tạo quote.

4.  Không tạo order.

5.  Không triển khai warehouse.

6.  Không triển khai AI response.

7.  Không public internal SKU code.

8.  Không dùng product knowledge chưa approved.

9.  Không hardcode product rule.

10. Không gọi Product Active là Sellable.

**4.6. P0 Blocker**

1.  Product Active bị hiểu là Sellable.

2.  Internal SKU code public ra khách.

3.  Product knowledge chưa approved nhưng downstream dùng.

4.  Recipe/formula không version.

5.  Product activation không evidence/audit.

6.  Code cũ khác TECH-02 nhưng vẫn được giữ làm chuẩn.

**4.7. Evidence Required**

1.  Product/SKU/recipe current state.

2.  Activation rule evidence.

3.  Public/internal field boundary evidence.

4.  Formula/version evidence.

5.  Test/build output.

6.  Report 14 mục.

**4.8. Smoke Required**

1.  Product Active ≠ Sellable.

2.  Internal SKU not public.

3.  Unapproved product knowledge blocked.

4.  Formula version required before operational usage.

**5. FINAL PHASE PROMPT PACK — PHASE 2**

**PROMPT-P2 — OPERATIONAL CORE EXECUTION HANDOFF**

**5.1. Mục tiêu**

Giao dev/coding agent triển khai hoặc phân tích PHASE 2 — Operational Core.

Operational Core là nền cho Sellable, Inventory, Traceability, Recall và Sale Lock.

**5.2. Source-of-Truth bắt buộc**

1.  TECH-03 — Operational Core.

2.  TECH-02 — Product/SKU/Recipe dependency.

3.  TECH-01 — Audit/Evidence/Idempotency dependency.

4.  TECH-04 — Commerce dependency.

5.  TECH-12 — PHASE 2 Backlog Matrix.

**5.3. Execution Mode mặc định**

**MODE: ANALYSIS ONLY**

Chỉ chuyển **IMPLEMENT WITH GUARD** khi PHASE 0 và PHASE 1 dependency pass.

**5.4. Scope In**

1.  Inspect operational modules hiện tại.

2.  Xác định raw intake/QC/readiness flow.

3.  Xác định production order snapshot flow.

4.  Xác định material issue/receipt.

5.  Xác định batch execution/release.

6.  Xác định warehouse/inventory ledger.

7.  Xác định trace/public trace.

8.  Xác định recall/sale lock.

9.  So sánh với TECH-03.

10. Báo conflict/gap.

11. Nếu được phép implement, sửa đúng scope PHASE 2.

12. Chạy test/build.

13. Nộp report 14 mục.

**5.5. Scope Out**

1.  Không tạo Commerce quote/order.

2.  Không tự bán SKU.

3.  Không quyết định giá.

4.  Không triển khai AI.

5.  Không triển khai Ads.

6.  Không triển khai IVR.

7.  Không public dữ liệu trace ngoài whitelist.

8.  Không mutate ledger history.

9.  Không bypass audit/evidence.

10. Không gọi QC_PASS là RELEASED.

**5.6. P0 Blocker**

1.  RAW_LOT QC_PASS = READY_FOR_PRODUCTION.

2.  Raw lot chưa ready vẫn issue.

3.  Material Receipt giảm tồn lần hai.

4.  Batch QC_PASS = RELEASED.

5.  Warehouse nhận batch chưa RELEASED.

6.  Inventory ledger không append-only.

7.  Public trace không whitelist-only.

8.  Recall/Sale Lock không chặn downstream.

**5.7. Evidence Required**

1.  Raw lot readiness evidence.

2.  Material issue/receipt evidence.

3.  Batch release evidence.

4.  Warehouse receipt evidence.

5.  Inventory ledger evidence.

6.  Public trace whitelist evidence.

7.  Recall/Sale Lock evidence.

8.  Test/build output.

9.  Report 14 mục.

**5.8. Smoke Required**

1.  QC_PASS ≠ READY_FOR_PRODUCTION.

2.  READY_FOR_PRODUCTION mới được issue.

3.  Issue decrements raw stock once.

4.  QC_PASS ≠ RELEASED.

5.  RELEASED mới warehouse receipt.

6.  Recall/Sale Lock blocks Commerce/AI/Ads/Live/IVR.

**6. FINAL PHASE PROMPT PACK — PHASE 3**

**PROMPT-P3 — COMMERCE RUNTIME EXECUTION HANDOFF**

**6.1. Mục tiêu**

Giao dev/coding agent triển khai hoặc phân tích PHASE 3 — Commerce Runtime.

Commerce là nguồn sự thật cho Sellable Gate, QuoteSnapshot, Cart, Order Draft, Official Order, Payment, Shipping và Verified Revenue.

**6.2. Source-of-Truth bắt buộc**

1.  TECH-04 — Commerce Runtime.

2.  TECH-03 — Operational Sellable/Sale Lock/Recall dependency.

3.  TECH-07 — Verified Revenue dependency.

4.  TECH-09 — Official Order / IVR dependency.

5.  TECH-12 — PHASE 3 Backlog Matrix.

**6.3. Execution Mode mặc định**

**MODE: ANALYSIS ONLY**

Chỉ chuyển **IMPLEMENT WITH GUARD** khi PHASE 0, PHASE 1 và PHASE 2 relevant dependency pass.

**6.4. Scope In**

1.  Inspect Commerce modules hiện tại.

2.  Xác định Sellable Gate.

3.  Xác định QuoteSnapshot.

4.  Xác định Cart.

5.  Xác định Order Draft.

6.  Xác định Customer Confirmation.

7.  Xác định Official Order.

8.  Xác định Payment boundary.

9.  Xác định COD/Shipping boundary.

10. Xác định Verified Revenue.

11. Xác định Member/Diamond/runtime benefit.

12. So sánh với TECH-04.

13. Báo conflict/gap.

14. Nếu được phép implement, sửa đúng PHASE 3.

15. Chạy test/build.

16. Nộp report 14 mục.

**6.5. Scope Out**

1.  Không tự bypass Operational.

2.  Không bán SKU not sellable.

3.  Không hardcode giá.

4.  Không hardcode payment account.

5.  Không dùng cart làm order.

6.  Không dùng order draft làm official order.

7.  Không coi ảnh chuyển khoản là PAID.

8.  Không coi COD pending là Verified Revenue.

9.  Không tạo Ads ROAS.

10. Không mở Gateway.

**6.6. P0 Blocker**

1.  Operational blocked nhưng Commerce vẫn bán.

2.  Không QuoteSnapshot mà vẫn final price.

3.  Cart bị hiểu là Order.

4.  Order Draft bị hiểu là Official Order.

5.  CustomerConfirmation chưa CONFIRMED mà tạo official order.

6.  Ảnh chuyển khoản được coi là PAID.

7.  COD pending được coi là Verified Revenue.

8.  Verified Revenue không đến từ Commerce.

9.  Payment account hardcode.

**6.7. Evidence Required**

1.  Sellable decision evidence.

2.  QuoteSnapshot evidence.

3.  Cart/order draft/official order evidence.

4.  Payment confirmation evidence.

5.  COD/shipping boundary evidence.

6.  Verified Revenue evidence.

7.  Runtime benefit evidence.

8.  Test/build output.

9.  Report 14 mục.

**6.8. Smoke Required**

1.  Operational blocked → Commerce blocked.

2.  QuoteSnapshot is only final price source.

3.  Cart ≠ Order.

4.  Order Draft ≠ Official Order.

5.  Image transfer ≠ PAID.

6.  COD pending ≠ Verified Revenue.

7.  Verified Revenue comes from Commerce only.

**7. FINAL PHASE PROMPT PACK — PHASE 4**

**PROMPT-P4 — AI ADVISOR RUNTIME EXECUTION HANDOFF**

**7.1. Mục tiêu**

Giao dev/coding agent triển khai hoặc phân tích PHASE 4 — AI Advisor Runtime.

AI Advisor chỉ là lớp tư vấn, diễn giải, gợi ý và hỗ trợ chốt đơn có kiểm soát.

AI không phải source-of-truth nghiệp vụ.

**7.2. Source-of-Truth bắt buộc**

1.  TECH-05 — AI Advisor Runtime.

2.  TECH-02 — Product Knowledge.

3.  TECH-04 — QuoteSnapshot / Order Draft / Payment dependency.

4.  TECH-06 — Gateway delivery dependency.

5.  TECH-12 — PHASE 4 Backlog Matrix.

**7.3. Execution Mode mặc định**

**MODE: ANALYSIS ONLY**

Chỉ chuyển **IMPLEMENT WITH GUARD** khi Product/Commerce dependencies phù hợp.

**7.4. Scope In**

1.  Inspect AI Advisor modules hiện tại.

2.  Xác định product knowledge resolver.

3.  Xác định claim guard.

4.  Xác định customer memory.

5.  Xác định quote consumption.

6.  Xác định order draft handoff.

7.  Xác định final response guard.

8.  Xác định public/private boundary.

9.  Xác định runtime unavailable behavior.

10. So sánh với TECH-05.

11. Báo conflict/gap.

12. Nếu được phép implement, sửa đúng PHASE 4.

13. Chạy test/build.

14. Nộp report 14 mục.

**7.5. Scope Out**

1.  Không tự tính giá.

2.  Không tự tạo official order.

3.  Không tự xác nhận payment.

4.  Không tự xác nhận Verified Revenue.

5.  Không bán SKU not sellable/Sale Lock/Recall.

6.  Không dùng claim chưa approved.

7.  Không public dữ liệu private.

8.  Không nói chữa bệnh/điều trị/thay thuốc.

9.  Không dùng mã SKU nội bộ với khách.

10. Không mở Gateway.

**7.6. P0 Blocker**

1.  AI tự tính giá.

2.  AI tự tạo official order.

3.  AI tự xác nhận payment.

4.  AI tự xác nhận Verified Revenue.

5.  AI bán SKU not sellable/Sale Lock/Recall.

6.  AI dùng claim chưa approved.

7.  AI public dữ liệu private.

8.  AI nói claim y khoa bị cấm.

9.  Runtime unavailable nhưng AI suy đoán.

**7.7. Evidence Required**

1.  Product knowledge evidence.

2.  Claim guard evidence.

3.  QuoteSnapshot consumption evidence.

4.  Order draft handoff evidence.

5.  Final response guard evidence.

6.  Privacy boundary evidence.

7.  Runtime unavailable fail-safe evidence.

8.  Test/build output.

9.  Report 14 mục.

**7.8. Smoke Required**

1.  AI no self-price.

2.  AI no self-order.

3.  AI no payment confirmation.

4.  Unapproved claim blocked.

5.  Private data not public.

6.  Runtime unavailable → fail-safe.

**8. FINAL PHASE PROMPT PACK — PHASE 5**

**PROMPT-P5 — FACEBOOK GATEWAY / MESSENGER / CHANNEL DELIVERY EXECUTION HANDOFF**

**8.1. Mục tiêu**

Giao dev/coding agent triển khai hoặc phân tích PHASE 5 — Facebook Gateway / Messenger / Channel Delivery.

Gateway là lớp delivery/channel, không phải AI, không phải Commerce, không phải Payment.

**8.2. Source-of-Truth bắt buộc**

1.  TECH-06 — Facebook Gateway.

2.  TECH-05 — Final Response Guard.

3.  TECH-04 — Commerce private quote boundary.

4.  TECH-08 — Live dependency.

5.  TECH-12 — PHASE 5 Backlog Matrix.

**8.3. Execution Mode mặc định**

**MODE: ANALYSIS ONLY**

Chỉ chuyển **IMPLEMENT WITH GUARD** khi AI Final Response Guard dependency pass.

**8.4. Scope In**

1.  Inspect Gateway/channel modules hiện tại.

2.  Xác định page/channel context.

3.  Xác định public/private routing.

4.  Xác định comment-to-Messenger handoff.

5.  Xác định Messenger private context.

6.  Xác định Final Response Guard enforcement.

7.  Xác định typing indicator/pacing.

8.  Xác định rate limit/anti-spam.

9.  Xác định moderation/troll/complaint split.

10. Xác định suppression/opt-out.

11. So sánh với TECH-06.

12. Báo conflict/gap.

13. Nếu được phép implement, sửa đúng PHASE 5.

14. Chạy test/build.

15. Nộp report 14 mục.

**8.5. Scope Out**

1.  Không tự tạo AI response.

2.  Không tự tính giá.

3.  Không tự tạo order.

4.  Không tự xác nhận payment.

5.  Không public dữ liệu private.

6.  Không gửi response chưa qua guard.

7.  Không kéo troll/malicious vào Messenger sai policy.

8.  Không xử complaint thật như troll.

9.  Không giả mạo người thật.

10. Không mở Gateway production nếu TECH-10 chưa pass.

**8.6. P0 Blocker**

1.  Gateway public dữ liệu private.

2.  Gateway public giá cá nhân/order info sai rule.

3.  Gateway gửi response chưa qua Final Response Guard.

4.  Public price/buy/deep consult không route Messenger.

5.  Troll/malicious bị kéo Messenger sai policy.

6.  Complaint thật bị xử như troll.

7.  Gateway giả mạo người thật.

**8.7. Evidence Required**

1.  Public/private routing evidence.

2.  Messenger handoff evidence.

3.  Final Response Guard enforcement evidence.

4.  Pacing evidence.

5.  Rate-limit evidence.

6.  Moderation evidence.

7.  Suppression evidence.

8.  Test/build output.

9.  Report 14 mục.

**8.8. Smoke Required**

1.  Public comment no private data.

2.  Price/buy intent routes Messenger.

3.  Unguarded response blocked.

4.  Troll not pulled to Messenger.

5.  Complaint routed CSKH/Quality.

6.  Suppressed user not messaged.

**9. FINAL PHASE PROMPT PACK — PHASE 6**

**PROMPT-P6 — ADS MEASUREMENT / ATTRIBUTION / VERIFIED REVENUE / SCALE GATE EXECUTION HANDOFF**

**9.1. Mục tiêu**

Giao dev/coding agent triển khai hoặc phân tích PHASE 6 — Ads Measurement.

Ads chỉ dùng Verified Revenue từ Commerce.

Ads không dùng quote, cart, order draft, unpaid order, payment pending hoặc COD pending làm revenue.

**9.2. Source-of-Truth bắt buộc**

1.  TECH-07 — Ads Measurement.

2.  TECH-04 — Verified Revenue.

3.  TECH-01 — Idempotency / Evidence.

4.  TECH-10 — Scale Gate / Global Gateway.

5.  TECH-12 — PHASE 6 Backlog Matrix.

**9.3. Execution Mode mặc định**

**MODE: ANALYSIS ONLY**

Chỉ chuyển **IMPLEMENT WITH GUARD** khi Verified Revenue dependency rõ và TECH-11 Code Handoff Control pass.

**9.4. Scope In**

1.  Inspect ads/event/attribution modules hiện tại.

2.  Xác định event taxonomy.

3.  Xác định Pixel/CAPI dedup.

4.  Xác định attribution source.

5.  Xác định Verified Revenue consumption.

6.  Xác định exclusion rules.

7.  Xác định CPA/AOV/ROAS computation.

8.  Xác định Data Quality gate.

9.  Xác định Scale Gate.

10. Xác định Sale Lock/Recall suppression.

11. So sánh với TECH-07.

12. Báo conflict/gap.

13. Nếu được phép implement, sửa đúng PHASE 6.

14. Chạy test/build.

15. Nộp report 14 mục.

**9.5. Scope Out**

1.  Không dùng quote làm revenue.

2.  Không dùng cart làm revenue.

3.  Không dùng order draft làm revenue.

4.  Không dùng unpaid order làm revenue.

5.  Không dùng payment pending làm revenue.

6.  Không dùng COD pending làm revenue.

7.  Không double count Pixel/CAPI.

8.  Không scale khi Data Quality fail.

9.  Không scale khi Sale Lock/Recall/Suppression active.

10. Không gọi ROAS đẹp là Scale Approved.

**9.6. P0 Blocker**

1.  Fake revenue.

2.  Double count revenue.

3.  Verified Revenue không từ Commerce.

4.  Ads scale khi Data Quality fail.

5.  Ads scale khi Sale Lock/Recall active.

6.  Ads scale khi chưa owner approval.

7.  Ads scale khi Global Gateway blocked.

**9.7. Evidence Required**

1.  Event taxonomy evidence.

2.  Dedup/idempotency evidence.

3.  Attribution evidence.

4.  Verified Revenue evidence.

5.  Exclusion rule evidence.

6.  Data Quality evidence.

7.  Scale Gate evidence.

8.  Test/build output.

9.  Report 14 mục.

**9.8. Smoke Required**

1.  Quote/cart/draft/unpaid excluded.

2.  Payment pending ≠ revenue.

3.  COD pending ≠ revenue.

4.  Verified Revenue only.

5.  Dedup prevents double count.

6.  Data Quality fail blocks scale.

7.  Sale Lock/Recall blocks scale.

**10. FINAL PHASE PROMPT PACK — PHASE 7**

**PROMPT-P7 — MC AI LIVE / LIVE SCRIPT RUNTIME / LIVE SALES CONTROL EXECUTION HANDOFF**

**10.1. Mục tiêu**

Giao dev/coding agent triển khai hoặc phân tích PHASE 7 — MC AI Live.

MC AI Live là lớp hỗ trợ live script và live orchestration, không phải source-of-truth nghiệp vụ.

**10.2. Source-of-Truth bắt buộc**

1.  TECH-08 — MC AI Live.

2.  TECH-06 — Gateway / Messenger.

3.  TECH-05 — AI Advisor / Claim Guard.

4.  TECH-04 — Commerce price/order boundary.

5.  TECH-07 — Ads-safe signal boundary.

6.  TECH-12 — PHASE 7 Backlog Matrix.

**10.3. Execution Mode mặc định**

**MODE: ANALYSIS ONLY**

Chỉ chuyển **IMPLEMENT WITH GUARD** khi Gateway/AI/Commerce dependencies pass.

**10.4. Scope In**

1.  Inspect live modules hiện tại.

2.  Xác định live session context.

3.  Xác định script runtime.

4.  Xác định script guard/claim guard.

5.  Xác định live comment classifier.

6.  Xác định Messenger coordination.

7.  Xác định product/price boundary.

8.  Xác định troll/abuse handling.

9.  Xác định complaint route.

10. Xác định Ads-safe live signal boundary.

11. So sánh với TECH-08.

12. Báo conflict/gap.

13. Nếu được phép implement, sửa đúng PHASE 7.

14. Chạy test/build.

15. Nộp report 14 mục.

**10.5. Scope Out**

1.  Không tự báo giá.

2.  Không tự tạo order.

3.  Không tự xác nhận payment.

4.  Không tự xác nhận revenue.

5.  Không dùng live signal làm ROAS.

6.  Không dùng claim chưa approved.

7.  Không kéo troll/malicious vào Messenger sai policy.

8.  Không xử complaint thật như troll.

9.  Không bỏ Gateway rate/suppression.

10. Không gọi Live Ready nếu chưa TECH-10 pass.

**10.6. P0 Blocker**

1.  MC AI Live tự báo giá.

2.  MC AI Live tự tạo order.

3.  MC AI Live tự xác nhận payment/revenue.

4.  Live signal dùng làm ROAS.

5.  Script chưa guard vẫn dùng.

6.  Claim chưa approved vẫn nói.

7.  Troll/malicious kéo Messenger sai policy.

8.  Complaint thật xử như troll.

**10.7. Evidence Required**

1.  Live session context evidence.

2.  Script guard evidence.

3.  Comment classification evidence.

4.  Messenger coordination evidence.

5.  Price/order boundary evidence.

6.  Troll/complaint split evidence.

7.  Live signal boundary evidence.

8.  Test/build output.

9.  Report 14 mục.

**10.8. Smoke Required**

1.  Script guard blocks unsafe script.

2.  Live no self-price.

3.  Live no self-order.

4.  Live signal not revenue.

5.  Troll not pulled Messenger.

6.  Complaint routed correctly.

**11. FINAL PHASE PROMPT PACK — PHASE 8**

**PROMPT-P8 — IVR ORDER CONFIRMATION EXECUTION HANDOFF**

**11.1. Mục tiêu**

Giao dev/coding agent triển khai hoặc phân tích PHASE 8 — IVR Order Confirmation.

IVR chỉ xử lý Official Order đủ điều kiện theo Commerce.

IVR không gọi đại trà, không xác nhận payment, không xác nhận revenue.

**11.2. Source-of-Truth bắt buộc**

1.  TECH-09 — IVR Order Confirmation.

2.  TECH-04 — Official Order / Core Order State Machine.

3.  TECH-05 — Customer Memory dependency nếu liên quan trust.

4.  TECH-10 — Evidence / Privacy / Release Gate.

5.  TECH-12 — PHASE 8 Backlog Matrix.

**11.3. Execution Mode mặc định**

**MODE: ANALYSIS ONLY**

Chỉ chuyển **IMPLEMENT WITH GUARD** khi Official Order/Core Order State dependency pass.

**11.4. Scope In**

1.  Inspect IVR modules hiện tại.

2.  Xác định IVR eligibility.

3.  Xác định customer trust exclusion.

4.  Xác định Official Order only boundary.

5.  Xác định phone validation.

6.  Xác định attempt policy.

7.  Xác định outcome classification.

8.  Xác định confirm/cancel/need support.

9.  Xác định no answer/max attempts.

10. Xác định Core Order State handoff.

11. Xác định Notification Owner handoff.

12. Xác định privacy-safe call result.

13. So sánh với TECH-09.

14. Báo conflict/gap.

15. Nếu được phép implement, sửa đúng PHASE 8.

16. Chạy test/build.

17. Nộp report 14 mục.

**11.5. Scope Out**

1.  Không gọi mọi khách.

2.  Không gọi Quote.

3.  Không gọi Cart.

4.  Không gọi Order Draft.

5.  Không tự tạo order.

6.  Không tự hủy order.

7.  Không tự gửi notification.

8.  Không xác nhận PAID.

9.  Không xác nhận Verified Revenue.

10. Không đọc full address/payment/member/Diamond/health note sai policy.

11. Không hardcode attempt policy nếu runtime/config chưa có.

12. Không mở Global Gateway.

**11.6. P0 Blocker**

1.  IVR gọi đại trà.

2.  IVR gọi Quote/Cart/Order Draft.

3.  IVR tự hủy đơn.

4.  IVR tự gửi notification.

5.  IVR confirmation = PAID.

6.  Invalid phone bị ghi no answer.

7.  Customer cancel bị ghi no answer.

8.  Technical failure bị quy lỗi khách.

9.  Notification gửi trước Core cancellation.

**11.7. Evidence Required**

1.  Eligibility evidence.

2.  Customer trust evidence.

3.  Official Order boundary evidence.

4.  Phone validation evidence.

5.  Attempt policy evidence.

6.  Outcome classification evidence.

7.  Core Order handoff evidence.

8.  Notification handoff evidence.

9.  Privacy evidence.

10. Test/build output.

11. Report 14 mục.

**11.8. Smoke Required**

1.  Quote/cart/draft cannot enter IVR.

2.  Trusted customer not called đại trà.

3.  Invalid phone ≠ no answer.

4.  Customer cancel ≠ no answer.

5.  Technical failure not customer fault.

6.  Confirm ≠ PAID.

7.  No answer max only handoff Core.

8.  Notification only after Core cancellation.

**12. FINAL PHASE PROMPT PACK — PHASE 9**

**PROMPT-P9 — GLOBAL SMOKE / UAT / RELEASE GATEWAY EXECUTION HANDOFF**

**12.1. Mục tiêu**

Giao dev/coding agent hoặc QA/release agent triển khai hoặc phân tích PHASE 9 — Global Smoke / UAT / Release Gateway.

PHASE 9 kiểm soát evidence, smoke, UAT, sign-off, blocker, release decision, Global Gateway và post-go-live.

**12.2. Source-of-Truth bắt buộc**

1.  TECH-10 — Global Smoke / UAT / Evidence / Release Gateway.

2.  TECH-11 — Implementation Roadmap / Dev Phase Control.

3.  TECH-12 — Phase Backlog Pack.

4.  TECH-00 → TECH-09 — Domain source-of-truth.

5.  TECH-13 — Prompt/Report Governance.

**12.3. Execution Mode mặc định**

**MODE: ANALYSIS ONLY** hoặc **TEST / SMOKE ONLY**

Chỉ dùng **IMPLEMENT WITH GUARD** nếu có release tooling/backlog rõ và TECH-11 Code Handoff Control pass.

**12.4. Scope In**

1.  Inspect release/evidence/smoke tooling hiện tại nếu có.

2.  Xác định documentation completion registry.

3.  Xác định evidence intake/acceptance.

4.  Xác định global smoke matrix.

5.  Xác định UAT session control.

6.  Xác định owner sign-off control.

7.  Xác định P0 blocker registry.

8.  Xác định cross-tech dependency validator.

9.  Xác định privacy/security release review.

10. Xác định rollback/fallback/monitoring readiness.

11. Xác định release decision/global gateway state.

12. Xác định post-go-live monitoring.

13. So sánh với TECH-10.

14. Báo gap/conflict.

15. Chạy smoke/test nếu mode cho phép.

16. Nộp report 14 mục.

**12.5. Scope Out**

1.  Không tự đánh Documentation Complete là Production Ready.

2.  Không tự accepted evidence.

3.  Không tự pass smoke.

4.  Không tự sign-off owner.

5.  Không tự release decision.

6.  Không tự Go-live Approved.

7.  Không tự Scale Approved.

8.  Không mở Global Gateway.

9.  Không bỏ rollback/fallback.

10. Không bỏ monitoring/alert.

11. Không bỏ P0 blocker.

**12.6. P0 Blocker**

1.  Documentation Complete = Production Ready.

2.  Evidence submitted = Evidence accepted.

3.  Smoke chưa pass nhưng Release Ready.

4.  Owner chưa sign-off nhưng Release Approved.

5.  Không release decision nhưng Go-live Approved.

6.  Global Gateway mở khi còn blocker.

7.  Post-go-live incident open nhưng scale.

8.  Verified Revenue/Data Quality fail nhưng scale.

**12.7. Evidence Required**

1.  Documentation registry evidence.

2.  Evidence intake evidence.

3.  Smoke matrix evidence.

4.  UAT evidence.

5.  Owner sign-off evidence.

6.  P0 blocker evidence.

7.  Dependency evidence.

8.  Privacy/security evidence.

9.  Rollback/fallback evidence.

10. Monitoring evidence.

11. Release decision evidence.

12. Gateway state evidence.

13. Report 14 mục.

**12.8. Smoke Required**

1.  Documentation Complete ≠ Production Ready.

2.  Evidence not accepted → no Completion PASS.

3.  Smoke fail → no Release Ready.

4.  Missing owner sign-off → no Release Approved.

5.  Missing release decision → no Go-live Approved.

6.  P0 blocker open → Gateway BLOCKED.

7.  Incident open → no scale.

**13. FINAL EXECUTION HANDOFF MATRIX**

| **Prompt** | **Phase**          | **Default Mode**     | **Required Upstream**     | **Main Output**             | **Not Allowed**                   |
|------------|--------------------|----------------------|---------------------------|-----------------------------|-----------------------------------|
| PROMPT-P0  | Foundation         | ANALYSIS ONLY        | TECH-01, TECH-11, TECH-12 | Foundation gap/report       | Release claim                     |
| PROMPT-P1  | Product/SKU/Recipe | ANALYSIS ONLY        | PHASE 0                   | Product backlog/report      | Product Active = Sellable         |
| PROMPT-P2  | Operational        | ANALYSIS ONLY        | PHASE 0/1                 | Operational report/evidence | Commerce selling                  |
| PROMPT-P3  | Commerce           | ANALYSIS ONLY        | PHASE 0/1/2               | Commerce report/evidence    | Self-price/payment/revenue bypass |
| PROMPT-P4  | AI Advisor         | ANALYSIS ONLY        | PHASE 1/3                 | AI report/evidence          | AI self-price/order/payment       |
| PROMPT-P5  | Gateway            | ANALYSIS ONLY        | PHASE 4                   | Gateway report/evidence     | Public private data               |
| PROMPT-P6  | Ads                | ANALYSIS ONLY        | PHASE 3 Verified Revenue  | Ads report/evidence         | Fake revenue/scale                |
| PROMPT-P7  | MC AI Live         | ANALYSIS ONLY        | PHASE 4/5/3/6             | Live report/evidence        | Live signal as ROAS               |
| PROMPT-P8  | IVR                | ANALYSIS ONLY        | PHASE 3 Official Order    | IVR report/evidence         | IVR self-cancel/SMS/payment       |
| PROMPT-P9  | Release Gateway    | ANALYSIS / TEST ONLY | TECH-10                   | Release governance report   | Open Gateway without decision     |

**14. FINAL EXECUTION MODE MATRIX**

| **Mode**                            | **Được làm**                        | **Không được làm**                       | **Dùng khi**                           |
|-------------------------------------|-------------------------------------|------------------------------------------|----------------------------------------|
| ANALYSIS ONLY                       | Inspect, map gap, plan, report      | Sửa file                                 | Chưa qua Code Handoff Control          |
| IMPLEMENT WITH GUARD                | Sửa file trong scope                | Sửa ngoài scope, hardcode, release claim | Đã qua TECH-11 Code Handoff            |
| TEST / SMOKE ONLY                   | Chạy test/build/smoke, thu evidence | Sửa business logic                       | QA/test/smoke                          |
| FIX AFTER REVIEW                    | Sửa blocker được liệt kê            | Mở rộng scope                            | Sau review fail                        |
| DOCUMENTATION / HANDOFF UPDATE ONLY | Cập nhật docs/handoff               | Sửa code logic                           | Sau implementation hoặc handoff update |

**15. FINAL EVIDENCE / SMOKE / REPORT MATRIX**

| **Thành phần**  | **Bắt buộc trong prompt**   | **Bắt buộc trong report** |
|-----------------|-----------------------------|---------------------------|
| Source-of-truth | Có TECH/section/requirement | Có nguồn yêu cầu          |
| Scope In/Out    | Có                          | Nêu đã làm/chưa làm       |
| Dependency      | Có                          | Nêu dependency pass/fail  |
| P0 Blocker      | Có                          | Nêu blocker/risk còn lại  |
| Evidence        | Có danh sách yêu cầu        | Có evidence đã dùng       |
| Smoke           | Có danh sách smoke          | Có smoke/test result      |
| Test/build      | Có expectation              | Có lệnh và kết quả        |
| Migration/seed  | Có nếu áp dụng              | Có kết quả nếu áp dụng    |
| Cleanup         | Có expectation              | Có cleanup result         |
| Handoff         | Có downstream               | Có handoff update         |
| Release warning | Có                          | Không được claim release  |

**16. FINAL PROMPT REVIEW MATRIX**

Prompt chỉ được **PROMPT_READY_FOR_HANDOFF** khi pass toàn bộ review sau:

| **Review**        | **PASS khi**                    | **FAIL nếu**          |
|-------------------|---------------------------------|-----------------------|
| Source Review     | Có TECH source rõ               | Source mơ hồ          |
| Scope Review      | Có Scope In/Out                 | Thiếu Scope Out       |
| Dependency Review | Upstream/downstream rõ          | Bỏ dependency         |
| P0 Review         | P0 cụ thể                       | P0 chung chung/thiếu  |
| Evidence Review   | Evidence required rõ            | Không evidence        |
| Smoke Review      | Smoke required rõ               | Không smoke           |
| Mode Review       | Mode hợp lệ                     | Không mode/sai mode   |
| Guardrail Review  | Cấm hardcode/copy/release claim | Cho agent tự đổi rule |
| Inspection Review | Yêu cầu inspect codebase        | Viết code tưởng tượng |
| Conflict Review   | Yêu cầu báo conflict            | Bỏ conflict           |
| Report Review     | Có 14 mục                       | Report thiếu          |
| Gateway Review    | Có warning TECH-10              | Cho mở Gateway        |

**17. FINAL AGENT EXECUTION MATRIX**

Agent thực thi đúng khi:

1.  Đọc prompt.

2.  Đọc source-of-truth.

3.  Inspect codebase thật.

4.  Xác định current state.

5.  Phát hiện conflict.

6.  Lập plan nếu cần.

7.  Implement chỉ khi mode cho phép.

8.  Chạy test/build.

9.  Thu evidence.

10. Nộp report 14 mục.

11. Không release claim.

12. Không mở Gateway.

Agent fail nếu:

1.  Sửa file trước khi inspect.

2.  Không đọc source.

3.  Không báo conflict.

4.  Sửa ngoài scope.

5.  Hardcode policy.

6.  Copy-paste code rời rạc.

7.  Bỏ test/build.

8.  Giấu fail.

9.  Report thiếu.

10. Gọi Production Ready.

**18. FINAL IMPLEMENTATION REPORT TEMPLATE**

Mọi report dev/coding agent phải theo đúng 14 mục sau.

**18.1. Tóm tắt**

Ghi:

1.  Phase.

2.  Prompt ID.

3.  Backlog/task.

4.  Mode.

5.  Đã làm gì.

6.  Chưa làm gì.

7.  Trạng thái hiện tại.

**18.2. File đã sửa**

Ghi:

1.  Backend files.

2.  Frontend files.

3.  Config files.

4.  Migration files.

5.  Seed files.

6.  Test files.

7.  Docs files.

Nếu không áp dụng, ghi rõ **Không áp dụng**.

**18.3. Nguồn yêu cầu**

Ghi:

1.  TECH number.

2.  Section.

3.  Requirement.

4.  Backlog ID.

5.  Task ID.

6.  Prompt ID.

**18.4. Evidence đã dùng**

Ghi:

1.  Log.

2.  Screenshot/export nếu có.

3.  Test output.

4.  Build output.

5.  Migration output.

6.  Seed validation.

7.  Audit/correlation nếu có.

**18.5. Lệnh đã chạy**

Ghi:

1.  Build.

2.  Test.

3.  Lint.

4.  Typecheck.

5.  Migration.

6.  Seed.

7.  Smoke.

8.  Cleanup.

**18.6. Kết quả test**

Ghi:

1.  Pass.

2.  Fail.

3.  Chưa chạy.

4.  Lý do chưa chạy.

5.  Retest cần thiết.

**18.7. Kết quả backend build**

Ghi:

1.  Pass/fail.

2.  Error.

3.  Warning.

4.  Impact.

**18.8. Kết quả frontend build**

Ghi:

1.  Pass/fail.

2.  Error.

3.  Warning.

4.  Impact.

**18.9. Kết quả cleanup process**

Ghi:

1.  File rác đã xóa.

2.  Code tạm đã bỏ.

3.  Debug log tạm đã bỏ.

4.  Duplicate đã xử lý.

5.  Chưa cleanup gì thì nêu lý do.

**18.10. Cập nhật Markdown**

Ghi:

1.  Docs cập nhật.

2.  README cập nhật.

3.  Handoff cập nhật.

4.  Chưa cập nhật thì nêu lý do.

**18.11. Kết quả database migration/update nếu áp dụng**

Ghi:

1.  Migration name.

2.  Migration status.

3.  Rollback note.

4.  Data impact.

5.  Risk.

**18.12. Kết quả seed validation nếu áp dụng**

Ghi:

1.  Seed file.

2.  Seed data.

3.  Validation result.

4.  Missing seed.

5.  Conflict seed.

**18.13. Rủi ro còn lại**

Ghi:

1.  Known issues.

2.  Open blockers.

3.  Technical debt.

4.  Dependency chưa pass.

5.  Smoke chưa chạy.

6.  Evidence thiếu.

7.  Owner review cần thiết.

**18.14. Cập nhật handoff**

Ghi:

1.  Phase tiếp theo.

2.  Backlog tiếp theo.

3.  Điều kiện để tiếp tục.

4.  Blocker cần xử lý.

5.  Owner/QA cần review.

**19. FINAL PROMPT SMOKE MATRIX**

**TECH13-FSMK-001 — Prompt Không Source Bị Reject**

Given prompt không có TECH source  
When review chạy  
Then PROMPT_REJECTED.

**TECH13-FSMK-002 — Prompt Thiếu Scope Out Bị Reject**

Given prompt thiếu Scope Out  
When review chạy  
Then PROMPT_REJECTED.

**TECH13-FSMK-003 — Prompt Thiếu Mode Bị Reject**

Given prompt không có execution mode  
When review chạy  
Then PROMPT_REJECTED.

**TECH13-FSMK-004 — Prompt Cho Copy Code Bị Reject**

Given prompt yêu cầu copy-paste code rời rạc  
When review chạy  
Then PROMPT_REJECTED.

**TECH13-FSMK-005 — Prompt Cho Hardcode Bị Reject**

Given prompt cho hardcode price/payment/IVR/notification policy  
When review chạy  
Then PROMPT_REJECTED.

**TECH13-FSMK-006 — Agent Không Inspect Repo**

Given prompt implement nhưng agent không inspect repo  
When report review  
Then report rejected.

**TECH13-FSMK-007 — Agent Không Báo Conflict**

Given code cũ khác TECH mới  
When agent report  
Then conflict phải được báo, nếu không report rejected.

**TECH13-FSMK-008 — Agent Test Fail Nhưng Báo Done**

Given build/test fail  
When agent report done  
Then report rejected.

**TECH13-FSMK-009 — Report Thiếu 14 Mục**

Given report thiếu file list/evidence/test/build/risk/handoff  
When review  
Then report rejected hoặc Need More Info.

**TECH13-FSMK-010 — Report Gọi Release Ready**

Given report ghi Release Ready/Production Ready  
When review  
Then report rejected.

**TECH13-FSMK-011 — Prompt Handoff Không Phải Implementation Complete**

Given prompt đã gửi dev  
When trạng thái cập nhật  
Then chỉ là PROMPT_HANDOFF_SENT.

**TECH13-FSMK-012 — TECH-10 Required**

Given implementation report accepted  
When chưa qua TECH-10  
Then không Release Ready.

**20. FINAL EVIDENCE PACKAGE — TECH-13**

TECH-13 yêu cầu final evidence package gồm:

1.  PHẦN 1/4 accepted.

2.  PHẦN 2/4 accepted.

3.  PHẦN 3/4 accepted.

4.  PHẦN 4/4 accepted.

5.  Prompt Pack Principles accepted.

6.  No-Code-Snippet Rule accepted.

7.  Agent Boundary accepted.

8.  Execution Mode Matrix accepted.

9.  Phase Prompt Pack PHASE 0 → PHASE 9 accepted.

10. Report Template accepted.

11. Prompt Review Matrix accepted.

12. Agent Execution Matrix accepted.

13. Prompt Smoke Matrix accepted.

14. P0 Blocker Registry accepted.

15. Release Handoff accepted.

**21. OWNER / REVIEWER POINTS**

**21.1. Implementation Roadmap Owner**

Phải xác nhận:

1.  Prompt chia đúng PHASE 0 → PHASE 9.

2.  Prompt không gộp toàn hệ thống.

3.  Prompt đúng backlog TECH-12.

4.  Prompt đúng TECH-11 handoff governance.

5.  Prompt không claim release.

**21.2. Dev Lead**

Phải xác nhận:

1.  Prompt đủ context để inspect repo.

2.  Prompt không ép snippet rời rạc.

3.  Prompt có mode rõ.

4.  Prompt có report format.

5.  Prompt có test/build expectation.

6.  Prompt không hardcode policy.

**21.3. QA Owner**

Phải xác nhận:

1.  Prompt có smoke required.

2.  Prompt có test/build output requirement.

3.  Prompt có fail-case/P0 smoke.

4.  Prompt có report đủ cho QA review.

5.  Prompt không giấu risk.

**21.4. Evidence / Audit Owner**

Phải xác nhận:

1.  Prompt có evidence required.

2.  Prompt có audit/correlation nếu high-risk.

3.  Prompt không coi report là evidence accepted.

4.  Prompt không bỏ TECH-10 evidence review.

**21.5. Release Owner**

Phải xác nhận:

1.  TECH-13 không gọi Release Ready.

2.  TECH-13 không gọi Production Ready.

3.  TECH-13 không gọi Go-live Approved.

4.  TECH-13 không mở Global Gateway.

5.  TECH-10 vẫn là release authority.

**22. FINAL DONE GATE — TECH-13**

TECH-13 đạt **DOCUMENTATION COMPLETE** khi:

1.  PHẦN 1/4 hoàn tất.

2.  PHẦN 2/4 hoàn tất.

3.  PHẦN 3/4 hoàn tất.

4.  PHẦN 4/4 hoàn tất.

5.  Dev Prompt Pack Principles đã khóa.

6.  Agent Boundary đã khóa.

7.  No-Code-Snippet Rule đã khóa.

8.  Prompt Execution Mode đã khóa.

9.  Prompt Guardrail đã khóa.

10. Prompt Lifecycle đã khóa.

11. Agent Execution State Machine đã khóa.

12. Report-to-Evidence Control đã khóa.

13. Final Phase Prompt Pack đã khóa.

14. Execution Handoff Matrix đã khóa.

15. Mode Matrix đã khóa.

16. Evidence/Smoke/Report Matrix đã khóa.

17. Prompt Review Matrix đã khóa.

18. Agent Execution Matrix đã khóa.

19. Implementation Report Template đã khóa.

20. Prompt Smoke Matrix đã khóa.

21. Evidence Package đã khóa.

22. Owner/Reviewer Points đã khóa.

23. Final Done Gate đã khóa.

24. Final Fail Gate đã khóa.

25. Release Handoff đã khóa.

26. Final Status Registry đã khóa.

27. TECH-13 Final Conclusion đã khóa.

**23. FINAL FAIL GATE — TECH-13**

TECH-13 FAIL nếu còn bất kỳ điểm nào sau:

1.  Prompt không có source-of-truth.

2.  Prompt không có Scope Out.

3.  Prompt không có dependency.

4.  Prompt không có P0 blocker.

5.  Prompt không có evidence required.

6.  Prompt không có smoke required.

7.  Prompt không có execution mode.

8.  Prompt không có report format.

9.  Prompt không yêu cầu inspect codebase.

10. Prompt không yêu cầu báo conflict.

11. Prompt yêu cầu copy-paste code rời rạc.

12. Prompt cho hardcode policy.

13. Prompt cho agent tự đổi nghiệp vụ.

14. Prompt cho code cũ thắng TECH mới.

15. Prompt cho tài liệu cũ thắng TECH mới.

16. Prompt cho agent sửa ngoài scope.

17. Prompt cho agent bỏ test/build.

18. Prompt cho agent bỏ evidence.

19. Prompt cho agent gọi Release Ready.

20. Prompt cho agent gọi Production Ready.

21. Prompt cho agent gọi Go-live Approved.

22. Prompt cho agent mở Global Gateway.

23. Prompt không chia theo phase.

24. Prompt gộp toàn hệ thống.

25. Report thiếu 14 mục.

26. Report gọi done khi build/test fail.

27. Report giấu conflict.

28. Report tự thành Evidence Accepted.

29. TECH-13 bypass TECH-11.

30. TECH-13 bypass TECH-10.

31. Không có final prompt pack PHASE 0 → PHASE 9.

32. Không có final status registry.

**24. RELEASE HANDOFF — SAU TECH-13**

**24.1. Trạng thái sau khi hoàn tất TECH-13**

Sau khi hoàn tất PHẦN 4/4:

**TECH-13 = DOCUMENTATION COMPLETE**

Nhưng:

**Prompt Pack Ready = DOCUMENTED, NOT EXECUTED**

**Dev Ready = NO**

**Implementation Ready = NO**

**Implementation Complete = NO**

**Evidence Accepted = NO**

**Smoke Pass = NO**

**Release Ready = NO**

**Production Ready = NO**

**Go-live Approved = NO**

**Scale Approved = NO**

**Global Gateway = BLOCKED**

Lý do:

TECH-13 mới là tài liệu prompt/handoff.

Chưa có prompt thực tế được gửi dev.

Chưa có dev/coding agent execution.

Chưa có implementation report thật.

Chưa có evidence accepted.

Chưa có smoke pass.

Chưa có QA/UAT.

Chưa có owner sign-off.

Chưa có release decision.

**24.2. Điều kiện để Prompt Pack Ready thành Dev Ready**

Muốn Dev Ready phải có:

1.  Prompt cụ thể theo phase/backlog.

2.  Prompt Review Pass.

3.  TECH-11 Dev Handoff accepted.

4.  Execution mode hợp lệ.

5.  Source/scope/dependency/P0/evidence/smoke đầy đủ.

6.  Dev/coding agent receiver rõ.

7.  Prompt handoff sent.

Nếu chưa:

**Dev Ready = NO**

**24.3. Điều kiện để Dev Ready thành Implementation Complete**

Muốn Implementation Complete phải có:

1.  Agent/dev thực thi trong codebase thật.

2.  Report 14 mục.

3.  File list.

4.  Source trace.

5.  Commands run.

6.  Test/build result.

7.  Evidence.

8.  Risk note.

9.  Handoff update.

Nếu chưa:

**Implementation Complete = NO**

**24.4. Điều kiện để Implementation Complete thành Ready for TECH-10 Review**

Muốn Ready for TECH-10 Review phải qua TECH-11:

1.  Implementation report accepted.

2.  Evidence mapped.

3.  Smoke mapped.

4.  QA handoff completed nếu required.

5.  P0 blocker closed.

6.  Cleanup/docs update pass.

7.  Phase exit accepted.

8.  Release handoff package complete.

Nếu chưa:

**Ready for TECH-10 Review = NO**

**24.5. Điều kiện để Release Ready**

Release Ready chỉ do TECH-10 xét.

TECH-13 không có quyền xét Release Ready.

TECH-10 chỉ xét khi có:

1.  Evidence accepted.

2.  Global smoke pass.

3.  UAT pass nếu required.

4.  Owner sign-off.

5.  No open P0 blocker.

6.  Cross-tech dependency pass.

7.  Privacy/security pass.

8.  Rollback/fallback ready nếu production.

9.  Monitoring/alert ready nếu go-live.

10. Release decision.

Nếu chưa qua TECH-10:

**Release Ready = NO**

**25. FINAL STATUS REGISTRY**

| **Hạng mục**            | **Trạng thái sau TECH-13** |
|-------------------------|----------------------------|
| TECH-13 Documentation   | DOCUMENTATION COMPLETE     |
| Prompt Pack             | DOCUMENTED                 |
| Prompt Pack Ready       | DOCUMENTED, NOT EXECUTED   |
| Prompt Handoff Sent     | NO                         |
| Dev Ready               | NO                         |
| Implementation Ready    | NO                         |
| Implementation Complete | NO                         |
| Evidence Accepted       | NO                         |
| Smoke Pass              | NO                         |
| QA/UAT Pass             | NO                         |
| Owner Sign-off          | NO                         |
| Release Ready           | NO                         |
| Production Ready        | NO                         |
| Go-live Approved        | NO                         |
| Scale Approved          | NO                         |
| Global Gateway          | BLOCKED                    |
| TECH-11 Review          | REQUIRED                   |
| TECH-10 Review          | REQUIRED BEFORE RELEASE    |

**TECH-13 FINAL CONCLUSION**

TECH-13 đã khóa lớp **Codex / Copilot Dev Prompt Pack / Phase Execution Handoff / Implementation Report Template** cho hệ thống Ginsengfood.

TECH-13 không thay thế TECH-00 → TECH-12.

TECH-13 không viết code.

TECH-13 không tạo snippet copy-paste.

TECH-13 không cho phép coding agent tự suy luận nghiệp vụ.

Các nguyên tắc cuối cùng đã khóa:

1.  Prompt phải chia theo PHASE 0 → PHASE 9.

2.  Không dùng một prompt cho toàn bộ hệ thống.

3.  Prompt phải có source-of-truth rõ.

4.  Prompt phải có Scope In.

5.  Prompt phải có Scope Out.

6.  Prompt phải có dependency.

7.  Prompt phải có P0 blocker.

8.  Prompt phải có evidence required.

9.  Prompt phải có smoke required.

10. Prompt phải có execution mode.

11. Prompt phải có guardrail.

12. Prompt phải yêu cầu inspect codebase thật.

13. Prompt phải yêu cầu phát hiện conflict TECH mới vs code cũ.

14. Prompt phải yêu cầu report 14 mục.

15. Prompt không được yêu cầu copy-paste code rời rạc.

16. Prompt không được cho hardcode policy.

17. Prompt không được cho agent tự đổi business rule.

18. Prompt không được cho code cũ thắng TECH mới.

19. Prompt không được cho tài liệu cũ thắng TECH mới.

20. Prompt không được cho agent gọi Release Ready.

21. Prompt không được cho agent gọi Production Ready.

22. Prompt không được cho agent gọi Go-live Approved.

23. Prompt không được mở Global Gateway.

24. Agent không được sửa file trong ANALYSIS ONLY.

25. Agent không được sửa business logic trong TEST / SMOKE ONLY.

26. Agent không được sửa ngoài blocker trong FIX AFTER REVIEW.

27. Agent không được sửa code trước khi inspect repo.

28. Agent không được giấu build/test fail.

29. Agent report không tự thành Evidence Accepted.

30. TECH-13 chỉ bàn giao về TECH-11/TECH-10, không tự xét release.

31. TECH-10 mới xét Evidence Accepted, Smoke Pass, UAT, Owner Sign-off, Release Decision và Global Gateway.

**Trạng thái cuối cùng của tài liệu:**

**TECH-13 — DOCUMENTATION COMPLETE**

Nhưng trạng thái triển khai vẫn là:

**Dev Ready = NO**  
**Implementation Ready = NO**  
**Implementation Complete = NO**  
**Evidence Accepted = NO**  
**Smoke Pass = NO**  
**Release Ready = NO**  
**Production Ready = NO**  
**Go-live Approved = NO**  
**Scale Approved = NO**  
**Global Gateway = BLOCKED**

Bước tiếp theo đúng là bắt đầu sử dụng TECH-13 để tạo **PROMPT-P0 — Foundation / RBAC / Audit / Evidence / Idempotency Execution Handoff** cho dev/Codex/Copilot, nhưng chỉ ở **MODE: ANALYSIS ONLY** trước khi cho phép sửa code.
