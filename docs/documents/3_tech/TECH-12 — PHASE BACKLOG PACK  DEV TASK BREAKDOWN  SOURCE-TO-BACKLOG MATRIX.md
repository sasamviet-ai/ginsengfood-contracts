**TECH-12 — PHASE BACKLOG PACK / DEV TASK BREAKDOWN / SOURCE-TO-BACKLOG MATRIX**

**PHASE BACKLOG GOVERNANCE / SOURCE-TO-TASK TRACEABILITY / DEV TASK BREAKDOWN / EVIDENCE-SMOKE-READY BACKLOG CONTROL**

**V1.0 CLEAN FINAL**

**PHẦN 1/4 — BACKLOG PACK PRINCIPLES / SOURCE-TO-BACKLOG BOUNDARY / PHASE BACKLOG GOVERNANCE / NO-UNMAPPED-TASK RULE**

**1. MỤC TIÊU CỦA TECH-12**

TECH-12 là tài liệu chuyển từ **Implementation Roadmap** sang **Backlog triển khai cụ thể cho dev**.

TECH-12 không thay thế TECH-00 → TECH-11.

TECH-12 không viết code.

TECH-12 không thiết kế API chi tiết.

TECH-12 không thiết kế database chi tiết.

TECH-12 không thiết kế UI chi tiết.

TECH-12 có nhiệm vụ khóa cách biến toàn bộ hệ thống TECH source-of-truth thành các backlog item cụ thể, có thể giao cho dev triển khai theo phase.

TECH-12 trả lời các câu hỏi:

1.  Mỗi phase phải chia thành những backlog nhóm nào.

2.  Mỗi backlog phải map về TECH nào, section nào, requirement nào.

3.  Backlog nào làm trước, backlog nào làm sau.

4.  Backlog nào bị chặn bởi dependency.

5.  Backlog nào cần evidence.

6.  Backlog nào cần smoke.

7.  Backlog nào cần QA.

8.  Backlog nào cần owner review.

9.  Backlog nào không được đưa vào dev vì thiếu source.

10. Backlog nào không được đưa vào code vì thiếu architecture context.

11. Backlog nào chỉ được chuẩn bị, chưa được release.

12. Backlog nào phải đi qua TECH-10 Global Gateway trước khi vận hành thật.

Mục tiêu cuối cùng của TECH-12 là tạo một **Phase Backlog Pack** đủ rõ để dev không tự suy luận.

**2. VAI TRÒ CỦA TECH-12 TRONG BỘ TÀI LIỆU**

TECH-12 đứng sau:

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

TECH-11 đã khóa **cách triển khai theo phase**.

TECH-12 tiếp tục khóa **cách biến từng phase thành backlog cụ thể**.

Nói cách khác:

1.  TECH-11 trả lời: triển khai theo nguyên tắc và phase nào.

2.  TECH-12 trả lời: mỗi phase chia thành backlog nào, task nào, evidence nào, smoke nào.

3.  Các tài liệu sau TECH-12 mới có thể dùng để viết prompt giao Codex/Copilot theo từng phase.

**3. TECH-12 KHÔNG PHẢI TÀI LIỆU CODE**

TECH-12 không viết code.

TECH-12 không tạo file code.

TECH-12 không đưa snippet cho dev copy.

TECH-12 không viết class, service, controller, migration, DTO, component, worker hoặc script.

TECH-12 không đi vào chi tiết API/DB/UI nếu chưa có yêu cầu riêng.

TECH-12 chỉ tạo **backlog pack** để dev triển khai trong codebase thật.

Một backlog đúng không phải là code.

Một backlog đúng là một đơn vị công việc có:

1.  Source-of-truth.

2.  Phase.

3.  Scope.

4.  Dependency.

5.  Acceptance criteria.

6.  Evidence requirement.

7.  Smoke requirement.

8.  P0 blocker.

9.  Report requirement.

10. Handoff target.

**4. NO-UNMAPPED-TASK RULE**

**4.1. Không task nào được tồn tại nếu không map source**

Mọi backlog item phải map về source-of-truth.

Một task không có source là task không hợp lệ.

Không được tạo task kiểu:

1.  “Làm cho chạy.”

2.  “Sửa AI.”

3.  “Làm kho.”

4.  “Làm bán hàng.”

5.  “Làm Ads.”

6.  “Làm IVR.”

7.  “Tối ưu hệ thống.”

8.  “Code phần này.”

9.  “Triển khai nhanh.”

10. “Dev tự phân tích thêm.”

Tất cả đều quá mơ hồ.

**4.2. Một backlog hợp lệ phải có source**

Mỗi backlog phải có tối thiểu:

1.  TECH number.

2.  Section hoặc requirement group.

3.  Phase.

4.  Domain.

5.  Business rule.

6.  Dependency.

7.  P0 blocker.

8.  Evidence.

9.  Smoke.

10. Done Gate.

11. Fail Gate.

12. Handoff.

**4.3. Nếu chưa map được source**

Nếu chưa map được source:

1.  Không đưa backlog vào Ready.

2.  Không handoff cho dev.

3.  Không tạo code handoff.

4.  Không đưa vào sprint.

5.  Không cho coding agent xử lý.

6.  Phải đưa vào Source Mapping Review.

**4.4. P0 Blocker**

FAIL nếu backlog không có source vẫn được giao dev.

FAIL nếu backlog không có TECH reference vẫn được đưa vào Ready.

FAIL nếu backlog mơ hồ được coding agent triển khai.

FAIL nếu dev tự suy luận requirement chưa được map.

**5. SOURCE-TO-BACKLOG BOUNDARY**

**5.1. Source-of-truth đầu vào**

TECH-12 chỉ được lấy source từ:

1.  TECH-00.

2.  TECH-01.

3.  TECH-02.

4.  TECH-03.

5.  TECH-04.

6.  TECH-05.

7.  TECH-06.

8.  TECH-07.

9.  TECH-08.

10. TECH-09.

11. TECH-10.

12. TECH-11.

Tài liệu cũ chỉ là LEGACY_REFERENCE_ONLY.

Code cũ chỉ là CURRENT_IMPLEMENTATION_STATE_ONLY.

Không dùng tài liệu cũ hoặc code cũ để phủ định TECH mới.

**5.2. Backlog đầu ra**

Đầu ra của TECH-12 là:

1.  Phase backlog group.

2.  Backlog item.

3.  Source-to-backlog matrix.

4.  Dependency matrix.

5.  Evidence matrix.

6.  Smoke matrix.

7.  Blocker matrix.

8.  Handoff matrix.

9.  Dev task breakdown.

10. Ready/Blocked status.

**5.3. TECH-12 không quyết định implementation detail**

TECH-12 không quyết định:

1.  Tên bảng database.

2.  Tên endpoint API.

3.  Tên component UI.

4.  Tên class/service.

5.  Cách viết query.

6.  Cách organize folder.

7.  Cách inject dependency.

8.  Cách deploy.

9.  Cách migration chi tiết.

10. Cách viết automated test cụ thể.

Đó là phần developer quyết định trong codebase thật.

TECH-12 chỉ nói dev phải làm gì, theo rule nào, chứng minh bằng gì.

**6. BACKLOG UNIT STANDARD**

**6.1. Một backlog item chuẩn phải có các trường**

Mỗi backlog item trong TECH-12 phải có:

1.  **Backlog ID**  
    Mã định danh duy nhất.

2.  **Phase**  
    Thuộc PHASE 0 → PHASE 9.

3.  **Domain**  
    Foundation, Product, Operational, Commerce, AI, Gateway, Ads, MC Live, IVR, Release.

4.  **Source-of-Truth**  
    TECH number + section/requirement.

5.  **Mục tiêu**  
    Backlog này nhằm đạt điều gì.

6.  **Scope In**  
    Những việc phải làm.

7.  **Scope Out**  
    Những việc không làm.

8.  **Upstream Dependency**  
    Phụ thuộc gì.

9.  **Downstream Handoff**  
    Sau khi xong bàn giao cho ai/phase nào.

10. **P0 Blocker**  
    Lỗi cấm tuyệt đối.

11. **Evidence Required**  
    Cần bằng chứng gì.

12. **Smoke Required**  
    Cần smoke nào.

13. **Done Gate**  
    Khi nào backlog được coi là xong ở cấp implementation.

14. **Fail Gate**  
    Khi nào backlog bị fail.

15. **Report Requirement**  
    Dev phải báo cáo gì.

16. **Initial Status**  
    READY / BLOCKED / NEED_SOURCE_MAPPING / NEED_DEPENDENCY_REVIEW.

**6.2. Không được bỏ Scope Out**

Scope Out là bắt buộc.

Vì nếu chỉ ghi Scope In, dev có thể tự mở rộng sai.

Ví dụ:

Nếu backlog là “QuoteSnapshot final price source”, Scope Out phải ghi rõ:

1.  Không tự tính giá ở AI.

2.  Không tự tính giá ở Gateway.

3.  Không tự tính giá ở Live.

4.  Không hardcode giá.

5.  Không lấy cart/order draft làm final quote.

6.  Không bypass Commerce Runtime.

**6.3. Không được bỏ P0 Blocker**

P0 Blocker là bắt buộc.

Vì P0 Blocker giúp dev biết lỗi nào không được vi phạm.

Ví dụ:

Backlog IVR phải ghi:

1.  IVR không gọi Quote.

2.  IVR không gọi Cart.

3.  IVR không gọi Order Draft.

4.  IVR không tự hủy đơn.

5.  IVR không tự gửi SMS.

6.  IVR confirmation không phải PAID.

**6.4. Không được bỏ Evidence và Smoke**

Nếu không có evidence và smoke, backlog không thể chứng minh đã xong.

Dev nói “đã làm xong” không đủ.

Backlog phải có evidence/smoke ngay từ lúc tạo, không đợi sau khi dev làm xong mới nghĩ cách test.

**7. PHASE BACKLOG REGISTRY — TỔNG QUAN**

TECH-12 chia backlog theo 10 phase:

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

Mỗi phase sẽ có:

1.  Phase backlog group.

2.  Source-to-backlog matrix.

3.  Dependency list.

4.  Evidence list.

5.  Smoke list.

6.  P0 blocker list.

7.  Phase Done Gate.

8.  Phase Fail Gate.

9.  Phase Handoff.

**8. PHASE 0 — FOUNDATION BACKLOG PRINCIPLES**

**8.1. Mục tiêu PHASE 0**

PHASE 0 xây nền bắt buộc cho toàn bộ hệ thống.

Không có PHASE 0, các phase sau không đủ kiểm soát.

PHASE 0 bao gồm:

1.  RBAC.

2.  Permission.

3.  Actor identity.

4.  Audit log.

5.  Evidence registry.

6.  Idempotency.

7.  Correlation ID.

8.  High-risk command control.

9.  Admin override audit.

10. Source-of-truth registry nền.

**8.2. Backlog nhóm của PHASE 0**

PHASE 0 cần tối thiểu các backlog group:

1.  FND-BLG-001 — RBAC / Permission Foundation.

2.  FND-BLG-002 — Actor Identity / System Actor.

3.  FND-BLG-003 — Audit Trail Foundation.

4.  FND-BLG-004 — Evidence Registry Foundation.

5.  FND-BLG-005 — Idempotency Foundation.

6.  FND-BLG-006 — Correlation ID / Trace Context.

7.  FND-BLG-007 — High-Risk Command Guard.

8.  FND-BLG-008 — Admin Override Governance.

9.  FND-BLG-009 — Source-of-Truth Registry Foundation.

10. FND-BLG-010 — Foundation Smoke / Evidence Pack.

**8.3. P0 Blocker PHASE 0**

FAIL nếu high-risk command không có audit.

FAIL nếu admin override không có reason/evidence/audit.

FAIL nếu evidence không có correlation/reference.

FAIL nếu permission không kiểm soát actor.

FAIL nếu phase sau chạy high-risk flow khi PHASE 0 chưa pass.

**9. PHASE 1 — PRODUCT / SKU / RECIPE BACKLOG PRINCIPLES**

**9.1. Mục tiêu PHASE 1**

PHASE 1 xây nền Product / SKU / Recipe / Activation.

Mục tiêu là đảm bảo sản phẩm, SKU, recipe, formula, activation guard rõ trước khi Operational và Commerce sử dụng.

PHASE 1 bao gồm:

1.  Product Master.

2.  SKU Master.

3.  Recipe / Formula.

4.  Formula kind/version.

5.  Product Activation.

6.  Claim/Product Data Approval.

7.  Public product name rule.

8.  Internal SKU code privacy.

9.  Product knowledge source.

10. Product-active-not-sellable rule.

**9.2. Backlog nhóm của PHASE 1**

PHASE 1 cần tối thiểu:

1.  PRD-BLG-001 — Product Master Governance.

2.  PRD-BLG-002 — SKU Master Governance.

3.  PRD-BLG-003 — Recipe / Formula Version Governance.

4.  PRD-BLG-004 — Formula Kind / Version Lock.

5.  PRD-BLG-005 — Product Activation Guard.

6.  PRD-BLG-006 — Product Active Not Sellable Rule.

7.  PRD-BLG-007 — Public Product Name Policy.

8.  PRD-BLG-008 — Internal SKU Code Privacy.

9.  PRD-BLG-009 — Product Knowledge Approval.

10. PRD-BLG-010 — Product/SKU/Recipe Smoke Pack.

**9.3. P0 Blocker PHASE 1**

FAIL nếu Product Active bị hiểu là Sellable.

FAIL nếu SKU nội bộ public ra khách.

FAIL nếu product knowledge chưa approved nhưng AI/Gateway/Live dùng.

FAIL nếu recipe/formula không version nhưng Production Order snapshot.

FAIL nếu product activation không có evidence/audit.

**10. PHASE 2 — OPERATIONAL CORE BACKLOG PRINCIPLES**

**10.1. Mục tiêu PHASE 2**

PHASE 2 xây Operational Core.

Đây là nền kiểm soát sản xuất, kho, tồn, traceability, recall, sale lock.

PHASE 2 bao gồm:

1.  Source origin.

2.  Raw material intake.

3.  Raw QC.

4.  Raw lot readiness.

5.  Formula snapshot into production order.

6.  Material request / issue / receipt.

7.  Batch execution.

8.  Packaging.

9.  QC inspection.

10. Batch release.

11. Warehouse receipt.

12. Inventory ledger.

13. Trace/public trace.

14. Recall.

15. Sale Lock.

**10.2. Backlog nhóm của PHASE 2**

PHASE 2 cần tối thiểu:

1.  OPS-BLG-001 — Source Origin / Raw Intake Governance.

2.  OPS-BLG-002 — Raw QC / Raw Lot Readiness.

3.  OPS-BLG-003 — Recipe Snapshot Into Production Order.

4.  OPS-BLG-004 — Material Request / Issue / Receipt.

5.  OPS-BLG-005 — Batch Execution / Process Step Control.

6.  OPS-BLG-006 — Packaging / QR / Print Control.

7.  OPS-BLG-007 — QC Inspection / Batch Release.

8.  OPS-BLG-008 — Warehouse Receipt / Finished Goods Stock.

9.  OPS-BLG-009 — Inventory Ledger Append-only.

10. OPS-BLG-010 — Traceability / Public Trace Whitelist.

11. OPS-BLG-011 — Recall / Sale Lock Control.

12. OPS-BLG-012 — Operational Smoke / Evidence Pack.

**10.3. P0 Blocker PHASE 2**

FAIL nếu RAW_LOT QC_PASS bị hiểu là READY_FOR_PRODUCTION.

FAIL nếu raw lot chưa READY_FOR_PRODUCTION vẫn issue.

FAIL nếu Material Issue không phải điểm giảm tồn nguyên liệu chính.

FAIL nếu Material Receipt giảm tồn lần hai.

FAIL nếu Batch QC_PASS bị hiểu là RELEASED.

FAIL nếu Warehouse nhận batch chưa RELEASED.

FAIL nếu Inventory Ledger không append-only.

FAIL nếu Public Trace không whitelist-only.

FAIL nếu Recall/Sale Lock không chặn downstream.

**11. PHASE 3 — COMMERCE RUNTIME BACKLOG PRINCIPLES**

**11.1. Mục tiêu PHASE 3**

PHASE 3 xây Commerce Runtime.

Đây là nền bán hàng, quote, cart, order, payment, shipping, verified revenue.

PHASE 3 bao gồm:

1.  Sellable Gate.

2.  QuoteSnapshot.

3.  Cart.

4.  Order Draft.

5.  Customer Confirmation.

6.  Official Order.

7.  Payment boundary.

8.  COD boundary.

9.  Shipping boundary.

10. Verified Revenue.

11. Program/member/Diamond benefit runtime.

12. Order state machine.

**11.2. Backlog nhóm của PHASE 3**

PHASE 3 cần tối thiểu:

1.  COM-BLG-001 — Sellable Gate From Operational.

2.  COM-BLG-002 — QuoteSnapshot As Only Final Price Source.

3.  COM-BLG-003 — Cart Not Order Boundary.

4.  COM-BLG-004 — Order Draft Not Official Order Boundary.

5.  COM-BLG-005 — Customer Confirmation To Official Order.

6.  COM-BLG-006 — Official Order State Machine.

7.  COM-BLG-007 — Payment Confirmation Boundary.

8.  COM-BLG-008 — COD / Delivery / Shipping Boundary.

9.  COM-BLG-009 — Verified Revenue Resolver.

10. COM-BLG-010 — Program / Member / Diamond Runtime Benefit.

11. COM-BLG-011 — Bank Account Registry / No Hardcode Payment Account.

12. COM-BLG-012 — Commerce Smoke / Evidence Pack.

**11.3. P0 Blocker PHASE 3**

FAIL nếu Operational blocked nhưng Commerce vẫn bán.

FAIL nếu không QuoteSnapshot mà vẫn final price.

FAIL nếu Cart bị hiểu là Order.

FAIL nếu Order Draft bị hiểu là Official Order.

FAIL nếu CustomerConfirmation chưa CONFIRMED mà tạo official order.

FAIL nếu ảnh chuyển khoản được coi là PAID.

FAIL nếu COD pending được coi là Verified Revenue.

FAIL nếu Verified Revenue không đến từ Commerce.

FAIL nếu payment account hardcode.

**12. PHASE 4 — AI ADVISOR BACKLOG PRINCIPLES**

**12.1. Mục tiêu PHASE 4**

PHASE 4 xây AI Advisor Runtime.

AI Advisor là lớp tư vấn, diễn giải, gợi ý và hỗ trợ chốt đơn có kiểm soát.

AI không phải nguồn sự thật nghiệp vụ.

PHASE 4 bao gồm:

1.  Product consulting.

2.  Customer memory.

3.  Claim guard.

4.  Product knowledge approved.

5.  Quote-safe sales.

6.  Order draft handoff.

7.  Final Response Guard.

8.  Public/private response boundary.

9.  Runtime unavailable fail-safe.

10. No medical/therapeutic claim.

**12.2. Backlog nhóm của PHASE 4**

PHASE 4 cần tối thiểu:

1.  AIA-BLG-001 — Product Knowledge Resolver.

2.  AIA-BLG-002 — Claim Guard / Public Wording Policy.

3.  AIA-BLG-003 — Customer Memory Resolver.

4.  AIA-BLG-004 — QuoteSnapshot Consumption.

5.  AIA-BLG-005 — Order Draft Handoff.

6.  AIA-BLG-006 — Final Response Guard.

7.  AIA-BLG-007 — Public/Private Data Boundary.

8.  AIA-BLG-008 — Product Name Public Policy.

9.  AIA-BLG-009 — Runtime Unavailable Fail-safe.

10. AIA-BLG-010 — AI Advisor Smoke / Evidence Pack.

**12.3. P0 Blocker PHASE 4**

FAIL nếu AI tự tính giá.

FAIL nếu AI tự tạo official order.

FAIL nếu AI tự xác nhận payment.

FAIL nếu AI tự xác nhận Verified Revenue.

FAIL nếu AI bán SKU not sellable/Sale Lock/Recall.

FAIL nếu AI dùng claim chưa approved.

FAIL nếu AI public dữ liệu private.

FAIL nếu AI nói chữa bệnh/điều trị/thay thuốc/cam kết hiệu quả y khoa.

**13. PHASE 5 — FACEBOOK GATEWAY BACKLOG PRINCIPLES**

**13.1. Mục tiêu PHASE 5**

PHASE 5 xây Facebook Gateway / Messenger / Channel Delivery.

Gateway là lớp điều phối kênh, không phải AI, không phải Commerce, không phải Payment.

PHASE 5 bao gồm:

1.  Public/private routing.

2.  Comment-to-Messenger.

3.  Messenger handoff.

4.  Delivery guard.

5.  Final Response Guard integration.

6.  Typing indicator / response pacing.

7.  Rate limit.

8.  Moderation.

9.  Suppression.

10. No private data in public.

**13.2. Backlog nhóm của PHASE 5**

PHASE 5 cần tối thiểu:

1.  GW-BLG-001 — Channel Identity / Page Context.

2.  GW-BLG-002 — Public Comment Boundary.

3.  GW-BLG-003 — Comment-to-Messenger Routing.

4.  GW-BLG-004 — Messenger Private Context Handoff.

5.  GW-BLG-005 — Final Response Guard Enforcement.

6.  GW-BLG-006 — Typing Indicator / Response Pacing.

7.  GW-BLG-007 — Rate Limit / Anti-Spam.

8.  GW-BLG-008 — Moderation / Troll / Complaint Split.

9.  GW-BLG-009 — Suppression / Opt-out.

10. GW-BLG-010 — Gateway Smoke / Evidence Pack.

**13.3. P0 Blocker PHASE 5**

FAIL nếu Gateway public dữ liệu private.

FAIL nếu Gateway public giá cá nhân/order info sai rule.

FAIL nếu Gateway gửi response chưa qua Final Response Guard.

FAIL nếu hỏi giá/mua/chốt trong public không kéo Messenger/private.

FAIL nếu troll/malicious bị kéo Messenger sai policy.

FAIL nếu complaint thật bị xử như troll.

FAIL nếu Gateway giả mạo người thật.

**14. PHASE 6 — ADS MEASUREMENT BACKLOG PRINCIPLES**

**14.1. Mục tiêu PHASE 6**

PHASE 6 xây Ads Measurement / Attribution / ROAS / Scale Gate.

Ads chỉ được dùng Verified Revenue từ Commerce.

Ads không được dùng quote, cart, order draft, unpaid order, payment pending, COD pending làm revenue.

PHASE 6 bao gồm:

1.  Attribution.

2.  Pixel/CAPI event governance.

3.  Dedup/idempotency.

4.  Funnel signals.

5.  Verified Revenue.

6.  CPA/AOV/ROAS.

7.  Data Quality.

8.  Scale Gate.

9.  Sale Lock/Recall suppression.

10. Ads/CRM/Diamond attribution conflict.

**14.2. Backlog nhóm của PHASE 6**

PHASE 6 cần tối thiểu:

1.  ADS-BLG-001 — Event Taxonomy / Funnel Signal Boundary.

2.  ADS-BLG-002 — Pixel / CAPI Dedup / Idempotency.

3.  ADS-BLG-003 — Attribution Source Resolver.

4.  ADS-BLG-004 — Verified Revenue Consumption.

5.  ADS-BLG-005 — Exclusion Rules: Quote/Cart/Draft/Unpaid/Pending.

6.  ADS-BLG-006 — CPA / AOV / ROAS Computation Boundary.

7.  ADS-BLG-007 — Data Quality Gate.

8.  ADS-BLG-008 — Scale Gate / Owner Approval.

9.  ADS-BLG-009 — Sale Lock / Recall / Suppression Blocks Scale.

10. ADS-BLG-010 — Ads Smoke / Evidence Pack.

**14.3. P0 Blocker PHASE 6**

FAIL nếu Ads dùng quote/cart/order draft làm revenue.

FAIL nếu unpaid order/payment pending/COD pending được tính revenue.

FAIL nếu Verified Revenue không từ Commerce.

FAIL nếu Pixel/CAPI double count.

FAIL nếu scale khi Data Quality fail.

FAIL nếu scale khi Sale Lock/Recall/Suppression active.

FAIL nếu scale chỉ vì ROAS đẹp nhưng evidence chưa accepted.

**15. PHASE 7 — MC AI LIVE BACKLOG PRINCIPLES**

**15.1. Mục tiêu PHASE 7**

PHASE 7 xây MC AI Live / Live Script Runtime / Live Sales Control.

MC AI Live không phải nguồn sự thật nghiệp vụ.

MC AI Live không tự báo giá, không tự tạo order, không tự xác nhận payment/revenue.

PHASE 7 bao gồm:

1.  Live script runtime.

2.  Host intelligence.

3.  Live session context.

4.  Script guard.

5.  Live comment classification.

6.  Comment-to-Messenger handoff.

7.  Live sales control.

8.  Troll/abuse handling.

9.  Complaint route.

10. Ads-safe live orchestration.

**15.2. Backlog nhóm của PHASE 7**

PHASE 7 cần tối thiểu:

1.  LIVE-BLG-001 — Live Session Context Resolver.

2.  LIVE-BLG-002 — Live Script Runtime.

3.  LIVE-BLG-003 — Script Guard / Claim Guard.

4.  LIVE-BLG-004 — Live Comment Classifier.

5.  LIVE-BLG-005 — Comment-to-Messenger Coordination.

6.  LIVE-BLG-006 — Product/Price Boundary In Live.

7.  LIVE-BLG-007 — Troll / Abuse / Malicious Handling.

8.  LIVE-BLG-008 — Complaint / CSKH / Quality Route.

9.  LIVE-BLG-009 — Ads-safe Live Signal Boundary.

10. LIVE-BLG-010 — MC AI Live Smoke / Evidence Pack.

**15.3. P0 Blocker PHASE 7**

FAIL nếu MC AI Live tự báo giá.

FAIL nếu MC AI Live tự tạo order.

FAIL nếu MC AI Live tự xác nhận payment/revenue.

FAIL nếu live signal dùng làm ROAS.

FAIL nếu script chưa guard vẫn dùng.

FAIL nếu claim chưa approved vẫn nói.

FAIL nếu troll/malicious bị kéo Messenger sai policy.

FAIL nếu complaint thật bị xử như troll.

**16. PHASE 8 — IVR ORDER CONFIRMATION BACKLOG PRINCIPLES**

**16.1. Mục tiêu PHASE 8**

PHASE 8 xây IVR Order Confirmation.

IVR chỉ xử lý Official Order đủ điều kiện theo Commerce.

IVR không gọi đại trà.

IVR không xác nhận payment/revenue.

PHASE 8 bao gồm:

1.  IVR eligibility.

2.  Customer trust.

3.  Anti-fake-order.

4.  Official Order only.

5.  Phone validation.

6.  Attempt policy.

7.  Outcome classification.

8.  Core Order State Machine handoff.

9.  Notification Owner handoff.

10. Privacy-safe call result.

**16.2. Backlog nhóm của PHASE 8**

PHASE 8 cần tối thiểu:

1.  IVR-BLG-001 — IVR Eligibility Resolver.

2.  IVR-BLG-002 — Customer Trust / Existing Trusted Exclusion.

3.  IVR-BLG-003 — Official Order Only Boundary.

4.  IVR-BLG-004 — Phone Validation / Invalid Phone.

5.  IVR-BLG-005 — Call Attempt Policy.

6.  IVR-BLG-006 — Outcome Classification.

7.  IVR-BLG-007 — Customer Confirm / Cancel / Need Support.

8.  IVR-BLG-008 — No Answer / Max Attempts.

9.  IVR-BLG-009 — Core Order State / Notification Handoff.

10. IVR-BLG-010 — IVR Evidence / Audit / Smoke Pack.

**16.3. P0 Blocker PHASE 8**

FAIL nếu IVR gọi mọi khách.

FAIL nếu IVR gọi Quote/Cart/Order Draft.

FAIL nếu IVR tự tạo order.

FAIL nếu IVR tự hủy đơn.

FAIL nếu IVR tự gửi notification.

FAIL nếu IVR confirmation bị hiểu là PAID.

FAIL nếu invalid phone/no answer/customer cancel/technical failure bị trộn.

FAIL nếu Notification gửi trước Core Order State Machine hủy chính thức.

**17. PHASE 9 — GLOBAL RELEASE BACKLOG PRINCIPLES**

**17.1. Mục tiêu PHASE 9**

PHASE 9 xây Global Smoke / UAT / Evidence / Release Gateway.

PHASE 9 không triển khai nghiệp vụ domain.

PHASE 9 kiểm soát:

1.  Evidence.

2.  Smoke.

3.  UAT.

4.  Owner sign-off.

5.  Cross-tech dependency.

6.  P0 blocker.

7.  Privacy/security.

8.  Rollback/fallback.

9.  Monitoring/alert.

10. Release decision.

11. Global Gateway.

12. Post-go-live monitoring.

13. Scale approval.

**17.2. Backlog nhóm của PHASE 9**

PHASE 9 cần tối thiểu:

1.  REL-BLG-001 — Documentation Completion Registry.

2.  REL-BLG-002 — Evidence Intake / Acceptance.

3.  REL-BLG-003 — Global Smoke Matrix.

4.  REL-BLG-004 — UAT Session Control.

5.  REL-BLG-005 — Owner Sign-off Control.

6.  REL-BLG-006 — P0 Blocker Registry.

7.  REL-BLG-007 — Cross-Tech Dependency Validator.

8.  REL-BLG-008 — Privacy / Security Release Review.

9.  REL-BLG-009 — Rollback / Fallback / Monitoring Readiness.

10. REL-BLG-010 — Release Decision / Global Gateway State.

11. REL-BLG-011 — Post-Go-Live Monitoring.

12. REL-BLG-012 — Scale Approval Gate.

**17.3. P0 Blocker PHASE 9**

FAIL nếu Documentation Complete bị gọi là Production Ready.

FAIL nếu evidence chưa accepted nhưng Completion PASS.

FAIL nếu smoke chưa pass nhưng Release Ready.

FAIL nếu owner chưa sign-off nhưng Release Approved.

FAIL nếu không release decision nhưng Go-live Approved.

FAIL nếu Global Gateway mở khi còn blocker.

FAIL nếu post-go-live incident open nhưng scale.

**18. SOURCE-TO-BACKLOG MATRIX STANDARD**

**18.1. Mẫu matrix chuẩn**

Mỗi backlog trong TECH-12 phải theo mẫu:

| **Trường**          | **Nội dung bắt buộc**                                                   |
|---------------------|-------------------------------------------------------------------------|
| Backlog ID          | Mã duy nhất                                                             |
| Phase               | PHASE 0 → PHASE 9                                                       |
| Domain              | Foundation/Product/Operational/Commerce/AI/Gateway/Ads/Live/IVR/Release |
| Source-of-Truth     | TECH number + section/requirement                                       |
| Requirement Summary | Tóm tắt yêu cầu                                                         |
| Scope In            | Việc phải làm                                                           |
| Scope Out           | Việc không làm                                                          |
| Upstream Dependency | Phụ thuộc                                                               |
| Downstream Handoff  | Bàn giao                                                                |
| P0 Blocker          | Lỗi cấm                                                                 |
| Evidence Required   | Bằng chứng                                                              |
| Smoke Required      | Smoke                                                                   |
| Done Gate           | Điều kiện xong                                                          |
| Fail Gate           | Điều kiện fail                                                          |
| Initial Status      | READY/BLOCKED/NEED_REVIEW                                               |

**18.2. Matrix không được thiếu source**

Nếu thiếu Source-of-Truth:

**Initial Status = NEED_SOURCE_MAPPING**

Không được READY.

**18.3. Matrix không được thiếu dependency**

Nếu thiếu dependency:

**Initial Status = NEED_DEPENDENCY_REVIEW**

Không được READY.

**18.4. Matrix không được thiếu evidence/smoke**

Nếu thiếu evidence/smoke:

**Initial Status = NEED_EVIDENCE_SMOKE**

Không được READY.

**19. BACKLOG READY RULE**

Một backlog chỉ được READY khi đủ:

1.  Source-of-truth rõ.

2.  Requirement rõ.

3.  Phase rõ.

4.  Scope In rõ.

5.  Scope Out rõ.

6.  Dependency rõ.

7.  P0 blocker rõ.

8.  Evidence rõ.

9.  Smoke rõ.

10. Done Gate rõ.

11. Fail Gate rõ.

12. Owner rõ.

13. Handoff target rõ.

Nếu thiếu bất kỳ điểm nào:

**Backlog không READY.**

**20. BACKLOG BLOCKED RULE**

Một backlog phải BLOCKED nếu:

1.  Source-of-truth chưa rõ.

2.  Source conflict chưa xử lý.

3.  Upstream phase blocked.

4.  Dependency chưa pass.

5.  P0 blocker đang mở.

6.  Evidence/smoke chưa xác định.

7.  Owner chưa rõ.

8.  Handoff chưa rõ.

9.  Scope quá rộng.

10. Scope mơ hồ.

11. Có nguy cơ hardcode policy.

12. Có nguy cơ copy-paste code rời rạc.

**21. P0 BLOCKER REGISTRY — PHẦN 1/4**

Các lỗi sau là P0 Blocker của TECH-12 PHẦN 1/4:

1.  Backlog không có source-of-truth.

2.  Backlog không có TECH/section/requirement.

3.  Backlog mơ hồ vẫn READY.

4.  Backlog không có Scope Out.

5.  Backlog không có dependency.

6.  Backlog không có evidence.

7.  Backlog không có smoke.

8.  Backlog không có Done Gate.

9.  Backlog không có Fail Gate.

10. Backlog downstream READY khi upstream blocked.

11. Backlog cho phép hardcode policy.

12. Backlog cho phép copy-paste code rời rạc.

13. Backlog dùng tài liệu cũ làm source thật.

14. Backlog dùng code cũ làm source thật.

15. Backlog chuyển thẳng thành code handoff khi chưa review.

16. Backlog gọi implementation task là release-ready.

17. Backlog không bàn giao TECH-10 trước release.

18. Backlog không có owner.

19. Backlog không có report requirement.

20. Backlog không có smoke/fail-case cho requirement critical.

**22. EVIDENCE YÊU CẦU CHO PHẦN 1/4**

PHẦN 1/4 yêu cầu evidence ở cấp tài liệu gồm:

1.  TECH-12 purpose accepted.

2.  Source-to-backlog boundary accepted.

3.  No-Unmapped-Task Rule accepted.

4.  Backlog Unit Standard accepted.

5.  Phase Backlog Registry overview accepted.

6.  PHASE 0 backlog principles accepted.

7.  PHASE 1 backlog principles accepted.

8.  PHASE 2 backlog principles accepted.

9.  PHASE 3 backlog principles accepted.

10. PHASE 4 backlog principles accepted.

11. PHASE 5 backlog principles accepted.

12. PHASE 6 backlog principles accepted.

13. PHASE 7 backlog principles accepted.

14. PHASE 8 backlog principles accepted.

15. PHASE 9 backlog principles accepted.

16. Source-to-Backlog Matrix Standard accepted.

17. Backlog Ready Rule accepted.

18. Backlog Blocked Rule accepted.

19. P0 Blocker Registry accepted.

20. Release handoff sang PHẦN 2/4 accepted.

**23. SMOKE ĐỊNH HƯỚNG — PHẦN 1/4**

**TECH12-P1-SMK-001 — Backlog Không Source Bị Chặn**

Given backlog không có TECH/section/requirement  
When Source-to-Backlog Matrix review  
Then backlog = NEED_SOURCE_MAPPING, không READY.

**TECH12-P1-SMK-002 — Backlog Mơ Hồ Bị Reject**

Given backlog ghi “làm AI” hoặc “làm bán hàng”  
When Backlog Ready Rule kiểm tra  
Then backlog bị reject hoặc NEED_SCOPE_REVIEW.

**TECH12-P1-SMK-003 — Backlog Thiếu Scope Out Không Ready**

Given backlog chỉ có Scope In  
When Backlog Governance review  
Then backlog không READY.

**TECH12-P1-SMK-004 — Backlog Thiếu Evidence/Smoke Không Ready**

Given backlog chưa có evidence/smoke  
When Ready Rule kiểm tra  
Then backlog = NEED_EVIDENCE_SMOKE.

**TECH12-P1-SMK-005 — Upstream Blocked Chặn Downstream**

Given PHASE 2 Operational blocked  
When PHASE 3 Commerce backlog xét Ready  
Then backlog downstream = BLOCKED.

**TECH12-P1-SMK-006 — Product Active Không Được Thành Sellable**

Given PHASE 1 Product Active backlog  
When bàn giao sang Commerce  
Then phải có backlog Operational Sellable Gate ở PHASE 2/3, không dùng Product Active làm Sellable.

**TECH12-P1-SMK-007 — QuoteSnapshot Chặn AI Tự Tính Giá**

Given AI Advisor backlog muốn báo giá  
When PHASE 3 QuoteSnapshot chưa pass  
Then AI quote backlog blocked.

**TECH12-P1-SMK-008 — Verified Revenue Chặn Ads Scale**

Given Ads Scale backlog  
When Verified Revenue chưa pass  
Then Ads Scale backlog blocked.

**TECH12-P1-SMK-009 — Official Order Chặn IVR**

Given IVR call backlog  
When Official Order/Core Order State chưa pass  
Then IVR backlog blocked.

**TECH12-P1-SMK-010 — TECH-10 Chặn Release**

Given phase backlog đã dev done  
When chưa qua TECH-10 evidence/smoke/sign-off/release decision  
Then không Release Ready, Global Gateway vẫn BLOCKED.

**24. DONE GATE — PHẦN 1/4**

PHẦN 1/4 đạt Documentation Complete ở cấp nguyên tắc khi:

1.  Đã khóa mục tiêu TECH-12.

2.  Đã khóa vai trò TECH-12 trong bộ TECH.

3.  Đã khóa TECH-12 không phải tài liệu code.

4.  Đã khóa No-Unmapped-Task Rule.

5.  Đã khóa Source-to-Backlog Boundary.

6.  Đã khóa Backlog Unit Standard.

7.  Đã khóa Phase Backlog Registry tổng quan.

8.  Đã khóa PHASE 0 principles.

9.  Đã khóa PHASE 1 principles.

10. Đã khóa PHASE 2 principles.

11. Đã khóa PHASE 3 principles.

12. Đã khóa PHASE 4 principles.

13. Đã khóa PHASE 5 principles.

14. Đã khóa PHASE 6 principles.

15. Đã khóa PHASE 7 principles.

16. Đã khóa PHASE 8 principles.

17. Đã khóa PHASE 9 principles.

18. Đã khóa Source-to-Backlog Matrix Standard.

19. Đã khóa Backlog Ready Rule.

20. Đã khóa Backlog Blocked Rule.

21. Đã có P0 Blocker Registry.

22. Đã có Evidence Requirement.

23. Đã có Smoke định hướng.

24. Đã có Release Handoff sang PHẦN 2/4.

**25. FAIL GATE — PHẦN 1/4**

PHẦN 1/4 FAIL nếu:

1.  TECH-12 bị hiểu là tài liệu code.

2.  TECH-12 cho phép backlog không source.

3.  TECH-12 cho phép task mơ hồ.

4.  TECH-12 không có Source-to-Backlog Boundary.

5.  TECH-12 không có Backlog Unit Standard.

6.  TECH-12 không chia phase.

7.  TECH-12 thiếu PHASE 0.

8.  TECH-12 thiếu PHASE 9.

9.  TECH-12 thiếu evidence/smoke rule.

10. TECH-12 cho backlog downstream Ready khi upstream blocked.

11. TECH-12 cho code cũ/tài liệu cũ thắng TECH mới.

12. TECH-12 cho copy-paste code rời rạc.

13. TECH-12 cho hardcode policy.

14. TECH-12 không có P0 Blocker Registry.

15. TECH-12 không có Done Gate.

16. TECH-12 không có Fail Gate.

17. TECH-12 không có Release Handoff.

**26. RELEASE HANDOFF — SANG PHẦN 2/4**

PHẦN 1/4 bàn giao sang PHẦN 2/4 các nguyên tắc đã khóa:

1.  TECH-12 là Phase Backlog Pack.

2.  TECH-12 không viết code.

3.  Mọi backlog phải map source-of-truth.

4.  Không task nào không source được Ready.

5.  Mỗi backlog phải có Scope In/Scope Out.

6.  Mỗi backlog phải có dependency.

7.  Mỗi backlog phải có P0 blocker.

8.  Mỗi backlog phải có evidence.

9.  Mỗi backlog phải có smoke.

10. Mỗi backlog phải có Done Gate/Fail Gate.

11. Phase backlog chia theo PHASE 0 → PHASE 9.

12. Downstream blocked nếu upstream chưa pass.

13. TECH-12 không quyết định implementation detail.

14. TECH-12 không tự tạo Release Ready.

15. TECH-12 phải bàn giao sang TECH-11/TECH-10 theo đúng gate.

PHẦN 2/4 sẽ viết:

**PHASE BACKLOG MODULE CONTRACTS / SOURCE-TO-BACKLOG MATRIX CONTRACTS / DEV TASK BREAKDOWN GOVERNANCE**

Các module cần khóa ở PHẦN 2/4:

1.  Phase Backlog Orchestrator.

2.  Backlog Item Factory.

3.  Source-to-Backlog Matrix Resolver.

4.  Phase Dependency Matrix Resolver.

5.  Backlog Readiness Resolver.

6.  Backlog Blocker Resolver.

7.  Dev Task Breakdown Resolver.

8.  Evidence Requirement Resolver.

9.  Smoke Requirement Resolver.

10. Owner Assignment Resolver.

11. Report Requirement Resolver.

12. Phase Backlog Review Resolver.

13. Backlog-to-Handoff Resolver.

14. Backlog Change Control Resolver.

15. Release Handoff Resolver.

**27. TRẠNG THÁI SAU PHẦN 1/4**

Sau PHẦN 1/4:

**TECH-12 = DOCUMENTATION IN PROGRESS**

Chưa được gọi là Documentation Complete.

Chưa được gọi là Backlog Ready.

Chưa được gọi là Dev Ready.

Chưa được gọi là Implementation Ready.

Chưa được gọi là Release Ready.

Chưa được gọi là Production Ready.

Chưa được gọi là Go-live Approved.

Global Gateway vẫn mặc định:

**BLOCKED**

**KẾT LUẬN PHẦN 1/4**

PHẦN 1/4 đã khóa nguyên tắc nền của TECH-12.

Các điểm cốt lõi đã được cố định:

1.  TECH-12 là Phase Backlog Pack.

2.  TECH-12 không phải tài liệu code.

3.  TECH-12 không thay thế TECH-00 → TECH-11.

4.  TECH-12 biến source-of-truth thành backlog cụ thể.

5.  Không backlog nào được Ready nếu không map TECH/section/requirement.

6.  Không task nào được giao dev nếu không có source rõ.

7.  Mỗi backlog phải có Scope In/Scope Out/Dependency/P0/Evidence/Smoke/Done Gate/Fail Gate.

8.  Backlog mơ hồ bị reject.

9.  Downstream backlog bị blocked nếu upstream chưa pass.

10. Tài liệu cũ không thắng TECH mới.

11. Code cũ không thắng TECH mới.

12. TECH-12 không quyết định API/DB/UI/code detail.

13. Dev quyết định cách làm trong codebase thật.

14. Owner quyết định hệ thống muốn gì.

15. AI hỗ trợ chia backlog, checklist, prompt, review; không thay developer.

16. PHASE 0 → PHASE 9 đã được định nghĩa ở cấp backlog principles.

17. Backlog Ready Rule đã khóa.

18. Backlog Blocked Rule đã khóa.

19. P0 Blocker Registry đã khóa.

20. Global Gateway vẫn BLOCKED nếu chưa qua evidence/smoke/sign-off/release decision.

PHẦN 1/4 sẵn sàng bàn giao sang:

**PHẦN 2/4 — PHASE BACKLOG MODULE CONTRACTS / SOURCE-TO-BACKLOG MATRIX CONTRACTS / DEV TASK BREAKDOWN GOVERNANCE**.

**PHẦN 2/4 — PHASE BACKLOG MODULE CONTRACTS / SOURCE-TO-BACKLOG MATRIX CONTRACTS / DEV TASK BREAKDOWN GOVERNANCE**

**1. MỤC TIÊU PHẦN 2/4**

PHẦN 2/4 khóa các module contract để quản trị việc tạo backlog, chia task, map source-of-truth, kiểm tra dependency, gắn evidence, gắn smoke và bàn giao dev.

PHẦN này trả lời:

1.  Ai tạo backlog.

2.  Backlog được tạo theo chuẩn nào.

3.  Source-of-truth được map ra sao.

4.  Dependency giữa phase/backlog được kiểm soát thế nào.

5.  Backlog khi nào Ready.

6.  Backlog khi nào Blocked.

7.  Backlog được chia thành dev task thế nào.

8.  Evidence requirement được gắn thế nào.

9.  Smoke requirement được gắn thế nào.

10. Owner được gán thế nào.

11. Dev report requirement được gắn thế nào.

12. Phase backlog được review ra sao.

13. Backlog được chuyển sang handoff cho dev như thế nào.

14. Thay đổi backlog được kiểm soát ra sao.

15. Backlog được bàn giao sang TECH-11/TECH-10 như thế nào.

PHẦN 2/4 không viết code.

PHẦN 2/4 không thiết kế API chi tiết.

PHẦN 2/4 không thiết kế database chi tiết.

PHẦN 2/4 không thiết kế UI chi tiết.

PHẦN 2/4 chỉ khóa **module contract cho Phase Backlog Pack**.

**2. NGUYÊN TẮC MODULE CONTRACT CHUNG**

Mọi module trong TECH-12 phải tuân thủ:

1.  Không tạo backlog không source.

2.  Không tạo backlog mơ hồ.

3.  Không cho backlog thiếu Scope Out.

4.  Không cho backlog thiếu dependency.

5.  Không cho backlog thiếu P0 blocker.

6.  Không cho backlog thiếu evidence.

7.  Không cho backlog thiếu smoke.

8.  Không cho backlog thiếu owner.

9.  Không cho backlog thiếu report requirement.

10. Không cho backlog downstream Ready khi upstream blocked.

11. Không cho backlog chuyển thẳng thành code handoff.

12. Không cho backlog dùng tài liệu cũ làm source thật.

13. Không cho backlog dùng code cũ làm source thật.

14. Không cho backlog hardcode policy.

15. Không cho backlog copy-paste code rời rạc.

16. Không cho backlog gọi implementation task là Release Ready.

17. Không cho backlog bypass TECH-11.

18. Không cho backlog bypass TECH-10.

19. Không mở Global Gateway từ TECH-12.

20. Không để dev tự suy luận.

**3. MODULE CONTRACT 01 — PHASE BACKLOG ORCHESTRATOR**

**3.1. Mục tiêu**

Phase Backlog Orchestrator điều phối toàn bộ backlog theo PHASE 0 → PHASE 9.

Module này giữ vai trò trung tâm trong TECH-12, bảo đảm mỗi phase có backlog đúng source, đúng dependency, đúng evidence, đúng smoke và đúng handoff.

**3.2. Scope In**

Module được phép:

1.  Tạo danh sách phase backlog.

2.  Gắn mỗi backlog vào phase.

3.  Kiểm tra phase có đủ backlog group tối thiểu chưa.

4.  Tổng hợp trạng thái backlog trong phase.

5.  Nhận trạng thái Ready / Blocked / Need Review của từng backlog.

6.  Điều phối source mapping, dependency, evidence, smoke.

7.  Xác định phase backlog nào được đưa sang review.

8.  Bàn giao phase backlog sang TECH-11 Dev Handoff Governance.

9.  Bàn giao release-level backlog sang TECH-10 khi đủ điều kiện.

**3.3. Scope Out**

Module không được:

1.  Tự viết code.

2.  Tự thiết kế API/DB/UI chi tiết.

3.  Tự sửa nghiệp vụ.

4.  Tự bỏ source mapping.

5.  Tự cho backlog Ready khi thiếu requirement.

6.  Tự cho downstream Ready khi upstream blocked.

7.  Tự đánh Implementation Ready.

8.  Tự đánh Release Ready.

9.  Tự mở Global Gateway.

**3.4. Upstream Dependency**

Phụ thuộc:

1.  TECH-00 → TECH-11.

2.  Phase Backlog Registry.

3.  Source-to-Backlog Matrix Resolver.

4.  Phase Dependency Matrix Resolver.

5.  Backlog Readiness Resolver.

6.  Backlog Blocker Resolver.

**3.5. Downstream Handoff**

Bàn giao cho:

1.  Phase Backlog Review Resolver.

2.  Backlog-to-Handoff Resolver.

3.  TECH-11 Dev Handoff Governance.

4.  TECH-10 Global Release Governance nếu phase đủ điều kiện release review.

**3.6. P0 Blocker**

FAIL nếu phase backlog thiếu source-of-truth mà vẫn được Ready.

FAIL nếu PHASE 3 Commerce backlog Ready khi PHASE 2 Operational blocked.

FAIL nếu PHASE 6 Ads Scale backlog Ready khi Verified Revenue chưa pass.

FAIL nếu PHASE 8 IVR backlog Ready khi Official Order/Core Order State chưa pass.

**3.7. Evidence**

Evidence tối thiểu:

1.  Phase backlog list.

2.  Backlog status summary.

3.  Source mapping summary.

4.  Dependency summary.

5.  Blocked backlog list.

6.  Ready backlog list.

7.  Handoff record.

8.  Reviewer note.

**3.8. Smoke**

**TECH12-MOD-SMK-001**

Given PHASE 3 có backlog Commerce nhưng PHASE 2 chưa pass  
When Phase Backlog Orchestrator tổng hợp  
Then PHASE 3 release-level backlog phải BLOCKED.

**4. MODULE CONTRACT 02 — BACKLOG ITEM FACTORY**

**4.1. Mục tiêu**

Backlog Item Factory tạo backlog item theo chuẩn bắt buộc của TECH-12.

Module này không được tạo task mơ hồ.

**4.2. Scope In**

Module được phép tạo backlog item với các trường:

1.  Backlog ID.

2.  Phase.

3.  Domain.

4.  Source-of-Truth.

5.  Requirement Summary.

6.  Scope In.

7.  Scope Out.

8.  Upstream Dependency.

9.  Downstream Handoff.

10. P0 Blocker.

11. Evidence Required.

12. Smoke Required.

13. Done Gate.

14. Fail Gate.

15. Report Requirement.

16. Initial Status.

**4.3. Scope Out**

Module không được:

1.  Tạo backlog thiếu TECH reference.

2.  Tạo backlog thiếu Scope Out.

3.  Tạo backlog thiếu dependency.

4.  Tạo backlog thiếu evidence/smoke.

5.  Tạo backlog kiểu “làm cho chạy”.

6.  Tạo backlog kiểu “dev tự phân tích”.

7.  Tạo backlog cho code snippet.

8.  Tạo backlog hardcode policy.

**4.4. Upstream Dependency**

Phụ thuộc:

1.  TECH source-of-truth.

2.  Phase registry.

3.  Domain registry.

4.  Backlog Unit Standard.

5.  Source-to-Backlog Matrix Resolver.

**4.5. Downstream Handoff**

Bàn giao:

1.  Draft backlog item.

2.  Missing field list.

3.  Initial status.

4.  Handoff sang Backlog Readiness Resolver.

**4.6. P0 Blocker**

FAIL nếu tạo backlog không có Source-of-Truth.

FAIL nếu tạo backlog không có Done Gate / Fail Gate.

FAIL nếu tạo backlog không có P0 Blocker.

FAIL nếu tạo backlog cho phép copy-paste code.

**4.7. Evidence**

Evidence tối thiểu:

1.  Backlog ID.

2.  Required field checklist.

3.  Missing field list.

4.  Initial status decision.

5.  Reviewer.

**4.8. Smoke**

**TECH12-MOD-SMK-002**

Given backlog draft thiếu Scope Out và Evidence Required  
When Backlog Item Factory tạo item  
Then item không được Ready, phải NEED_REVIEW.

**5. MODULE CONTRACT 03 — SOURCE-TO-BACKLOG MATRIX RESOLVER**

**5.1. Mục tiêu**

Source-to-Backlog Matrix Resolver map từng backlog item với TECH source-of-truth.

Module này bảo đảm không backlog nào không nguồn được giao dev.

**5.2. Scope In**

Module được phép:

1.  Map backlog với TECH number.

2.  Map backlog với section/requirement.

3.  Map backlog với phase.

4.  Map backlog với domain.

5.  Ghi requirement summary.

6.  Ghi source conflict nếu có.

7.  Ghi legacy/current implementation deviation nếu có.

8.  Xác định source mapping accepted/rejected.

9.  Đưa backlog thiếu source về NEED_SOURCE_MAPPING.

**5.3. Scope Out**

Module không được:

1.  Cho backlog không source Ready.

2.  Cho tài liệu cũ thắng TECH mới.

3.  Cho code cũ thắng TECH mới.

4.  Tự chọn source theo cảm tính.

5.  Bỏ qua source conflict.

6.  Chấp nhận backlog “dev tự phân tích thêm” làm source.

**5.4. Upstream Dependency**

Phụ thuộc:

1.  TECH-00 → TECH-11.

2.  Legacy reference registry nếu có.

3.  Current implementation review nếu có.

4.  Backlog Item Factory.

**5.5. Downstream Handoff**

Bàn giao:

1.  Source mapped backlog.

2.  Source conflict list.

3.  Need source mapping list.

4.  Rejected backlog list.

5.  Handoff sang Backlog Readiness Resolver.

**5.6. P0 Blocker**

FAIL nếu backlog không có TECH/section/requirement vẫn Ready.

FAIL nếu code cũ được dùng để phủ định TECH mới.

FAIL nếu source conflict không mở blocker.

**5.7. Evidence**

Evidence tối thiểu:

1.  Backlog ID.

2.  TECH reference.

3.  Section/requirement.

4.  Source status.

5.  Conflict note nếu có.

6.  Reviewer decision.

**5.8. Smoke**

**TECH12-MOD-SMK-003**

Given backlog “AI báo giá cho khách” nhưng không map TECH-04 QuoteSnapshot và TECH-05 AI Advisor  
When Source-to-Backlog Resolver kiểm tra  
Then backlog không Ready.

**6. MODULE CONTRACT 04 — PHASE DEPENDENCY MATRIX RESOLVER**

**6.1. Mục tiêu**

Phase Dependency Matrix Resolver kiểm soát dependency giữa phase và giữa backlog.

Module này bảo đảm downstream không vượt upstream.

**6.2. Scope In**

Module được phép kiểm tra:

1.  PHASE 0 dependency với toàn hệ thống.

2.  PHASE 1 dependency với PHASE 2.

3.  PHASE 2 dependency với PHASE 3.

4.  PHASE 3 dependency với PHASE 4/6/8.

5.  PHASE 4 dependency với PHASE 5.

6.  PHASE 5 dependency với PHASE 7.

7.  PHASE 9 dependency với release/go-live/scale.

8.  Dependency theo rule Sale Lock / Recall.

9.  Dependency theo Verified Revenue.

10. Dependency theo QuoteSnapshot.

11. Dependency theo Official Order/Core Order State.

12. Dependency theo Final Response Guard.

**6.3. Scope Out**

Module không được:

1.  Cho downstream Ready khi upstream blocked.

2.  Cho mock upstream làm production truth.

3.  Cho Ads scale khi Verified Revenue chưa pass.

4.  Cho AI quote khi QuoteSnapshot chưa pass.

5.  Cho IVR call khi Official Order chưa pass.

6.  Cho MC Live go-live khi Gateway/AI/Commerce chưa pass.

7.  Hạ dependency fail thành warning nhẹ.

**6.4. Upstream Dependency**

Phụ thuộc:

1.  Phase status.

2.  Backlog status.

3.  Evidence/smoke status nếu có.

4.  Source mapping.

5.  TECH dependency registry.

**6.5. Downstream Handoff**

Bàn giao:

1.  Dependency pass list.

2.  Dependency fail list.

3.  Blocked backlog list.

4.  Upstream missing list.

5.  Handoff sang Backlog Readiness Resolver.

**6.6. P0 Blocker**

FAIL nếu PHASE 3 Commerce Ready khi PHASE 2 Operational Sellable Gate chưa pass.

FAIL nếu PHASE 6 Ads Ready khi Verified Revenue chưa pass.

FAIL nếu PHASE 8 IVR Ready khi Official Order/Core Order State chưa pass.

**6.7. Evidence**

Evidence tối thiểu:

1.  Dependency pair.

2.  Upstream phase/backlog.

3.  Downstream phase/backlog.

4.  Dependency status.

5.  Block reason.

6.  Reviewer.

**6.8. Smoke**

**TECH12-MOD-SMK-004**

Given PHASE 6 Ads Scale backlog  
When Verified Revenue backlog chưa pass  
Then Ads Scale backlog phải BLOCKED.

**7. MODULE CONTRACT 05 — BACKLOG READINESS RESOLVER**

**7.1. Mục tiêu**

Backlog Readiness Resolver quyết định backlog có được đưa vào trạng thái Ready hay không.

**7.2. Scope In**

Module được phép kiểm tra:

1.  Source-of-truth.

2.  Scope In.

3.  Scope Out.

4.  Dependency.

5.  P0 blocker.

6.  Evidence.

7.  Smoke.

8.  Owner.

9.  Done Gate.

10. Fail Gate.

11. Report Requirement.

12. Handoff target.

13. Initial status.

14. Risk of hardcode.

15. Risk of copy-paste code.

**7.3. Scope Out**

Module không được:

1.  Cho backlog thiếu field critical Ready.

2.  Cho backlog mơ hồ Ready.

3.  Cho backlog downstream Ready khi upstream blocked.

4.  Cho backlog Ready nếu source conflict còn mở.

5.  Cho backlog Ready nếu có nguy cơ hardcode policy chưa xử lý.

6.  Cho backlog Ready nếu evidence/smoke chưa rõ.

**7.4. Upstream Dependency**

Phụ thuộc:

1.  Backlog Item Factory.

2.  Source-to-Backlog Matrix Resolver.

3.  Phase Dependency Matrix Resolver.

4.  Owner Assignment Resolver.

5.  Evidence/Smoke Requirement Resolver.

**7.5. Downstream Handoff**

Bàn giao:

1.  BACKLOG_READY.

2.  BACKLOG_BLOCKED.

3.  NEED_SOURCE_MAPPING.

4.  NEED_DEPENDENCY_REVIEW.

5.  NEED_EVIDENCE_SMOKE.

6.  NEED_OWNER_ASSIGNMENT.

7.  NEED_SCOPE_REVIEW.

8.  Handoff sang Backlog-to-Handoff Resolver.

**7.6. P0 Blocker**

FAIL nếu backlog thiếu evidence/smoke nhưng Ready.

FAIL nếu backlog không owner nhưng Ready.

FAIL nếu backlog thiếu Fail Gate nhưng Ready.

**7.7. Evidence**

Evidence tối thiểu:

1.  Backlog readiness checklist.

2.  Missing field list.

3.  Ready/Blocked decision.

4.  Reason code.

5.  Reviewer.

**7.8. Smoke**

**TECH12-MOD-SMK-005**

Given backlog đủ source nhưng thiếu owner và smoke  
When Readiness Resolver chạy  
Then backlog không được Ready.

**8. MODULE CONTRACT 06 — BACKLOG BLOCKER RESOLVER**

**8.1. Mục tiêu**

Backlog Blocker Resolver quản lý các nguyên nhân khiến backlog bị blocked.

**8.2. Scope In**

Module được phép:

1.  Ghi nhận blocker.

2.  Phân loại blocker.

3.  Gắn blocker với backlog.

4.  Gắn blocker với phase.

5.  Gắn blocker với owner.

6.  Gắn blocker với source conflict.

7.  Gắn blocker với dependency fail.

8.  Gắn blocker với missing evidence/smoke.

9.  Gắn blocker với P0 risk.

10. Theo dõi xử lý blocker.

11. Yêu cầu review/retest nếu cần.

12. Đóng blocker khi đủ evidence.

**8.3. Scope Out**

Module không được:

1.  Đóng blocker không evidence.

2.  Hạ cấp P0 tùy tiện.

3.  Ẩn blocker khỏi backlog.

4.  Cho backlog Ready khi blocker còn open.

5.  Cho phase handoff khi blocker critical chưa xử lý.

6.  Dùng “owner đồng ý miệng” để đóng blocker.

**8.4. Upstream Dependency**

Phụ thuộc:

1.  Backlog Readiness Resolver.

2.  Source-to-Backlog Matrix Resolver.

3.  Phase Dependency Matrix Resolver.

4.  Evidence/Smoke Resolver.

5.  Owner Assignment Resolver.

**8.5. Downstream Handoff**

Bàn giao:

1.  Open blocker list.

2.  Resolved blocker list.

3.  Blocked backlog list.

4.  Required action list.

5.  Handoff sang Phase Backlog Review Resolver.

**8.6. P0 Blocker**

FAIL nếu backlog có P0 blocker mở nhưng vẫn Ready.

FAIL nếu blocker source conflict bị bỏ qua.

FAIL nếu blocker dependency fail bị ghi là warning.

**8.7. Evidence**

Evidence tối thiểu:

1.  Blocker ID.

2.  Backlog ID.

3.  Phase.

4.  Severity.

5.  Reason.

6.  Owner.

7.  Resolution evidence.

8.  Reviewer decision.

**8.8. Smoke**

**TECH12-MOD-SMK-006**

Given backlog IVR thiếu Official Order dependency  
When Blocker Resolver chạy  
Then backlog bị BLOCKED_BY_DEPENDENCY.

**9. MODULE CONTRACT 07 — DEV TASK BREAKDOWN RESOLVER**

**9.1. Mục tiêu**

Dev Task Breakdown Resolver chia backlog group thành các dev task nhỏ hơn nhưng vẫn giữ source, dependency, evidence và smoke.

Module này giúp dev triển khai có trật tự, không nhận task quá lớn hoặc mơ hồ.

**9.2. Scope In**

Module được phép:

1.  Chia backlog group thành dev task.

2.  Giữ mapping TECH/requirement cho từng task.

3.  Gắn task với phase.

4.  Gắn task với dependency.

5.  Gắn task với evidence.

6.  Gắn task với smoke.

7.  Gắn task với report requirement.

8.  Xác định task sequencing.

9.  Xác định task có thể chuẩn bị song song.

10. Xác định task không được coding nếu thiếu context.

**9.3. Scope Out**

Module không được:

1.  Chia task làm mất source.

2.  Chia task làm mất P0 blocker.

3.  Chia task quá mơ hồ.

4.  Chia task thành code snippet rời rạc.

5.  Chia task để bypass dependency.

6.  Cho task không evidence/smoke.

7.  Cho task không report requirement.

8.  Cho dev tự quyết business rule.

**9.4. Upstream Dependency**

Phụ thuộc:

1.  Backlog Ready.

2.  Source mapping.

3.  Dependency matrix.

4.  Evidence requirement.

5.  Smoke requirement.

6.  Owner assignment.

**9.5. Downstream Handoff**

Bàn giao:

1.  Dev task list.

2.  Task sequence.

3.  Task dependency.

4.  Task evidence.

5.  Task smoke.

6.  Handoff sang TECH-11 Dev Handoff Resolver.

**9.6. P0 Blocker**

FAIL nếu task breakdown làm mất source-of-truth.

FAIL nếu task chia nhỏ nhưng bỏ P0 blocker.

FAIL nếu task biến thành “copy đoạn code này”.

**9.7. Evidence**

Evidence tối thiểu:

1.  Backlog ID.

2.  Dev task IDs.

3.  Source mapping per task.

4.  Dependency per task.

5.  Evidence/smoke per task.

6.  Reviewer decision.

**9.8. Smoke**

**TECH12-MOD-SMK-007**

Given backlog “QuoteSnapshot as only final price source”  
When task breakdown chạy  
Then mọi task con vẫn phải giữ rule “AI/Gateway/Live không tự tính giá”.

**10. MODULE CONTRACT 08 — EVIDENCE REQUIREMENT RESOLVER**

**10.1. Mục tiêu**

Evidence Requirement Resolver xác định bằng chứng cần có cho từng backlog/task.

**10.2. Scope In**

Module được phép xác định:

1.  Evidence loại tài liệu.

2.  Evidence loại build/test output.

3.  Evidence loại log.

4.  Evidence loại screenshot/export nếu phù hợp.

5.  Evidence loại audit/correlation.

6.  Evidence migration/seed nếu áp dụng.

7.  Evidence source mapping.

8.  Evidence smoke result.

9.  Evidence QA handoff.

10. Evidence privacy/security nếu có dữ liệu nhạy cảm.

**10.3. Scope Out**

Module không được:

1.  Cho backlog thiếu evidence Ready.

2.  Chấp nhận lời nói thay evidence.

3.  Chấp nhận evidence không environment.

4.  Chấp nhận evidence không requirement.

5.  Chấp nhận evidence lộ secret/private data.

6.  Chấp nhận local evidence cho production readiness.

7.  Bỏ evidence high-risk command.

**10.4. Upstream Dependency**

Phụ thuộc:

1.  Backlog item.

2.  Requirement type.

3.  Phase.

4.  Domain risk.

5.  TECH-10 Evidence Boundary.

6.  Privacy/Security rule nếu liên quan.

**10.5. Downstream Handoff**

Bàn giao:

1.  Evidence requirement list.

2.  Evidence format.

3.  Evidence owner.

4.  Evidence review requirement.

5.  Handoff sang Backlog Readiness Resolver và TECH-11 Evidence Mapping.

**10.6. P0 Blocker**

FAIL nếu high-risk backlog không yêu cầu audit/evidence.

FAIL nếu payment/order/IVR/Ads revenue task không evidence.

FAIL nếu privacy-sensitive task không privacy evidence.

**10.7. Evidence**

Evidence tối thiểu của module:

1.  Backlog ID.

2.  Evidence requirement list.

3.  Evidence owner.

4.  Evidence format.

5.  Review status.

**10.8. Smoke**

**TECH12-MOD-SMK-008**

Given backlog liên quan Verified Revenue  
When Evidence Requirement Resolver chạy  
Then phải yêu cầu evidence từ Commerce source, không chỉ dashboard Ads.

**11. MODULE CONTRACT 09 — SMOKE REQUIREMENT RESOLVER**

**11.1. Mục tiêu**

Smoke Requirement Resolver xác định smoke bắt buộc cho từng backlog/task.

**11.2. Scope In**

Module được phép xác định:

1.  Smoke pass-case.

2.  Smoke fail-case.

3.  Smoke P0 case.

4.  Smoke runtime unavailable.

5.  Smoke privacy/security.

6.  Smoke dependency.

7.  Smoke cross-phase.

8.  Smoke upstream blocked.

9.  Smoke no-bypass.

10. Smoke release handoff nếu liên quan.

**11.3. Scope Out**

Module không được:

1.  Cho backlog thiếu smoke Ready.

2.  Chỉ tạo happy path smoke cho requirement critical.

3.  Bỏ P0 smoke.

4.  Bỏ fail-safe smoke.

5.  Bỏ dependency smoke.

6.  Bỏ privacy smoke khi có dữ liệu khách.

7.  Bỏ revenue/payment smoke khi liên quan Commerce/Ads.

**11.4. Upstream Dependency**

Phụ thuộc:

1.  Backlog item.

2.  Requirement risk level.

3.  Phase.

4.  P0 blocker list.

5.  TECH smoke rules.

6.  TECH-10 Global Smoke Boundary.

**11.5. Downstream Handoff**

Bàn giao:

1.  Smoke requirement list.

2.  Smoke ID draft.

3.  Smoke Given/When/Then draft.

4.  Must Not list.

5.  Evidence required for smoke.

6.  Handoff sang Backlog Readiness Resolver và TECH-11 Smoke Mapping.

**11.6. P0 Blocker**

FAIL nếu IVR backlog không có smoke invalid phone/no answer/customer cancel/technical failure.

FAIL nếu Ads backlog không có smoke fake revenue exclusion.

FAIL nếu Gateway backlog không có smoke public/private boundary.

**11.7. Evidence**

Evidence tối thiểu:

1.  Backlog ID.

2.  Smoke requirement list.

3.  P0 smoke list.

4.  Fail-case list.

5.  Reviewer decision.

**11.8. Smoke**

**TECH12-MOD-SMK-009**

Given backlog Gateway public comment  
When Smoke Requirement Resolver chạy  
Then phải có smoke “public không lộ private data”.

**12. MODULE CONTRACT 10 — OWNER ASSIGNMENT RESOLVER**

**12.1. Mục tiêu**

Owner Assignment Resolver gắn owner cho từng backlog/task.

Không backlog nào Ready nếu không có owner phù hợp.

**12.2. Scope In**

Module được phép xác định:

1.  Business owner.

2.  Dev owner.

3.  QA owner.

4.  Evidence reviewer.

5.  Smoke reviewer.

6.  Domain owner.

7.  Privacy/security owner nếu cần.

8.  Release owner nếu backlog release-level.

9.  Cross-phase dependency owner.

10. Handoff receiver.

**12.3. Scope Out**

Module không được:

1.  Cho backlog không owner Ready.

2.  Gán owner không đúng domain.

3.  Cho dev tự làm owner nghiệp vụ.

4.  Cho QA tự ký owner sign-off.

5.  Bỏ Privacy/Legal owner khi có dữ liệu nhạy cảm.

6.  Bỏ Release owner khi backlog có release impact.

**12.4. Upstream Dependency**

Phụ thuộc:

1.  Backlog domain.

2.  Phase.

3.  Risk level.

4.  Data sensitivity.

5.  Release impact.

6.  TECH owner registry.

**12.5. Downstream Handoff**

Bàn giao:

1.  Owner assignment list.

2.  Missing owner list.

3.  Owner conflict list.

4.  Handoff sang Backlog Readiness Resolver.

**12.6. P0 Blocker**

FAIL nếu backlog payment/revenue không có Commerce/Payment owner.

FAIL nếu backlog public/private data không có Privacy/Security owner.

FAIL nếu backlog release gate không có Release owner.

**12.7. Evidence**

Evidence tối thiểu:

1.  Backlog ID.

2.  Owner list.

3.  Owner role.

4.  Assignment status.

5.  Reviewer.

**12.8. Smoke**

**TECH12-MOD-SMK-010**

Given backlog IVR Notification Handoff  
When Owner Assignment chạy  
Then phải có IVR Owner, Commerce/Core Order Owner, Notification Owner và Privacy Owner nếu có dữ liệu khách.

**13. MODULE CONTRACT 11 — REPORT REQUIREMENT RESOLVER**

**13.1. Mục tiêu**

Report Requirement Resolver gắn chuẩn báo cáo dev cho từng backlog/task.

Module này đảm bảo dev report luôn theo format đã khóa.

**13.2. Scope In**

Module được phép yêu cầu report gồm:

1.  Tóm tắt.

2.  File đã sửa.

3.  Nguồn yêu cầu.

4.  Evidence đã dùng.

5.  Lệnh đã chạy.

6.  Kết quả test.

7.  Backend build result.

8.  Frontend build result.

9.  Cleanup result.

10. Markdown/docs update.

11. Database migration/update nếu áp dụng.

12. Seed validation nếu áp dụng.

13. Rủi ro còn lại.

14. Handoff update.

**13.3. Scope Out**

Module không được:

1.  Cho task không có report requirement Ready.

2.  Cho dev báo “đã xong” thay report.

3.  Bỏ qua test/build output.

4.  Bỏ qua migration/seed note nếu có.

5.  Bỏ qua risk note.

6.  Bỏ qua handoff update.

**13.4. Upstream Dependency**

Phụ thuộc:

1.  Backlog item.

2.  Phase.

3.  Implementation impact.

4.  TECH-11 report format.

5.  Migration/seed risk nếu có.

**13.5. Downstream Handoff**

Bàn giao:

1.  Report requirement list.

2.  Required sections.

3.  Optional sections.

4.  Not-applicable sections.

5.  Handoff sang Dev Task Breakdown và TECH-11 Implementation Report Resolver.

**13.6. P0 Blocker**

FAIL nếu backlog không yêu cầu dev report.

FAIL nếu report requirement không bắt test/build.

FAIL nếu migration/seed impact không được yêu cầu báo cáo.

**13.7. Evidence**

Evidence tối thiểu:

1.  Backlog ID.

2.  Report template.

3.  Required sections.

4.  Reviewer decision.

**13.8. Smoke**

**TECH12-MOD-SMK-011**

Given backlog có database impact  
When Report Requirement Resolver chạy  
Then report phải yêu cầu migration/update và rollback/seed note nếu áp dụng.

**14. MODULE CONTRACT 12 — PHASE BACKLOG REVIEW RESOLVER**

**14.1. Mục tiêu**

Phase Backlog Review Resolver kiểm tra toàn bộ backlog của một phase trước khi chuyển sang TECH-11 Dev Handoff.

**14.2. Scope In**

Module được phép review:

1.  Phase có đủ backlog group tối thiểu chưa.

2.  Backlog nào Ready.

3.  Backlog nào Blocked.

4.  Backlog nào Need Review.

5.  Dependency phase.

6.  Evidence coverage.

7.  Smoke coverage.

8.  Owner coverage.

9.  Report requirement coverage.

10. P0 blocker coverage.

11. Release impact.

12. Handoff readiness.

**14.3. Scope Out**

Module không được:

1.  Cho phase backlog pass khi thiếu backlog critical.

2.  Cho phase backlog pass khi nhiều item mơ hồ.

3.  Cho phase backlog pass khi dependency chưa rõ.

4.  Cho phase backlog pass khi evidence/smoke coverage thiếu.

5.  Cho phase backlog pass khi owner thiếu.

6.  Cho phase backlog pass khi P0 blocker chưa định nghĩa.

**14.4. Upstream Dependency**

Phụ thuộc:

1.  Phase Backlog Orchestrator.

2.  Backlog Readiness Resolver.

3.  Dependency Matrix Resolver.

4.  Evidence/Smoke Requirement Resolver.

5.  Owner Assignment Resolver.

6.  Backlog Blocker Resolver.

**14.5. Downstream Handoff**

Bàn giao:

1.  PHASE_BACKLOG_REVIEW_PASS.

2.  PHASE_BACKLOG_REVIEW_FAIL.

3.  Missing backlog list.

4.  Blocked backlog list.

5.  Handoff sang Backlog-to-Handoff Resolver.

**14.6. P0 Blocker**

FAIL nếu PHASE 0 thiếu audit/evidence/idempotency backlog mà vẫn pass.

FAIL nếu PHASE 3 thiếu QuoteSnapshot/Payment/Verified Revenue backlog mà vẫn pass.

FAIL nếu PHASE 9 thiếu Global Gateway/Release Decision backlog mà vẫn pass.

**14.7. Evidence**

Evidence tối thiểu:

1.  Phase backlog review checklist.

2.  Backlog coverage report.

3.  Evidence/smoke coverage report.

4.  Missing/blocked list.

5.  Reviewer decision.

**14.8. Smoke**

**TECH12-MOD-SMK-012**

Given PHASE 3 Commerce backlog thiếu Verified Revenue  
When Phase Backlog Review chạy  
Then PHASE 3 review fail.

**15. MODULE CONTRACT 13 — BACKLOG-TO-HANDOFF RESOLVER**

**15.1. Mục tiêu**

Backlog-to-Handoff Resolver chuyển backlog Ready thành handoff package cho TECH-11 Dev Handoff Governance.

**15.2. Scope In**

Module được phép tạo handoff package gồm:

1.  Phase.

2.  Backlog IDs.

3.  Source-of-truth.

4.  Requirement summary.

5.  Scope In.

6.  Scope Out.

7.  Dependency.

8.  P0 blocker.

9.  Evidence required.

10. Smoke required.

11. Owner.

12. Report requirement.

13. Initial implementation status.

14. Handoff target.

**15.3. Scope Out**

Module không được:

1.  Handoff backlog chưa Ready.

2.  Handoff backlog còn source conflict.

3.  Handoff backlog thiếu dependency.

4.  Handoff backlog thiếu evidence/smoke.

5.  Handoff backlog downstream khi upstream blocked.

6.  Gọi handoff là code instruction.

7.  Gọi handoff là Release Ready.

**15.4. Upstream Dependency**

Phụ thuộc:

1.  Backlog Readiness Resolver.

2.  Phase Backlog Review Resolver.

3.  Dependency Matrix Resolver.

4.  Owner Assignment Resolver.

5.  Evidence/Smoke Requirement Resolver.

**15.5. Downstream Handoff**

Bàn giao:

1.  Handoff package.

2.  Ready backlog list.

3.  Blocked backlog list.

4.  Handoff sang TECH-11 Dev Handoff Resolver.

**15.6. P0 Blocker**

FAIL nếu handoff backlog thiếu Scope Out.

FAIL nếu handoff backlog thiếu P0 blocker.

FAIL nếu handoff bypass TECH-11.

**15.7. Evidence**

Evidence tối thiểu:

1.  Handoff package ID.

2.  Backlog list.

3.  Source mapping.

4.  Dependency status.

5.  Evidence/smoke list.

6.  Reviewer decision.

**15.8. Smoke**

**TECH12-MOD-SMK-013**

Given backlog READY nhưng thiếu report requirement  
When Backlog-to-Handoff Resolver chạy  
Then handoff package phải bị reject.

**16. MODULE CONTRACT 14 — BACKLOG CHANGE CONTROL RESOLVER**

**16.1. Mục tiêu**

Backlog Change Control Resolver kiểm soát mọi thay đổi backlog sau khi đã Ready hoặc đã handoff.

**16.2. Scope In**

Module được phép kiểm soát:

1.  Thêm backlog mới.

2.  Sửa scope backlog.

3.  Sửa dependency.

4.  Sửa evidence requirement.

5.  Sửa smoke requirement.

6.  Sửa owner.

7.  Sửa priority.

8.  Hủy backlog.

9.  Tách backlog.

10. Gộp backlog.

11. Đánh dấu superseded.

12. Route owner review khi thay đổi ảnh hưởng source-of-truth.

**16.3. Scope Out**

Module không được:

1.  Sửa backlog không audit.

2.  Sửa scope để bỏ P0 blocker.

3.  Sửa dependency để bypass upstream.

4.  Xóa evidence/smoke requirement cho dễ làm.

5.  Đổi owner critical không review.

6.  Gộp backlog làm mất source mapping.

7.  Tách backlog làm mất P0 blocker.

8.  Thay đổi backlog sau handoff mà không báo dev/QA.

**16.4. Upstream Dependency**

Phụ thuộc:

1.  Backlog status.

2.  Source mapping.

3.  Dependency status.

4.  Owner assignment.

5.  Handoff status.

**16.5. Downstream Handoff**

Bàn giao:

1.  Change request.

2.  Change approved/rejected.

3.  Updated backlog.

4.  Superseded backlog note.

5.  Handoff update required.

6.  QA/review notification.

**16.6. P0 Blocker**

FAIL nếu backlog thay đổi sau handoff mà dev/QA không được cập nhật.

FAIL nếu change control bỏ evidence/smoke.

FAIL nếu change control làm mất source mapping.

**16.7. Evidence**

Evidence tối thiểu:

1.  Change request ID.

2.  Backlog ID.

3.  Before/after.

4.  Impact.

5.  Approver.

6.  Audit note.

**16.8. Smoke**

**TECH12-MOD-SMK-014**

Given backlog đã handoff cho dev  
When scope bị thay đổi  
Then phải tạo change record và cập nhật handoff, không sửa âm thầm.

**17. MODULE CONTRACT 15 — RELEASE HANDOFF RESOLVER**

**17.1. Mục tiêu**

Release Handoff Resolver bàn giao Phase Backlog Pack sang TECH-11/TECH-10 theo đúng gate.

Module này không được tự gọi backlog ready là release ready.

**17.2. Scope In**

Module được phép:

1.  Nhận phase backlog review pass.

2.  Kiểm tra handoff package.

3.  Kiểm tra source mapping.

4.  Kiểm tra dependency.

5.  Kiểm tra evidence/smoke requirement.

6.  Kiểm tra owner/report requirement.

7.  Ghi backlog ready for TECH-11 handoff.

8.  Ghi release-level backlog cần TECH-10 review.

9.  Ghi blocked backlog.

10. Ghi risks.

**17.3. Scope Out**

Module không được:

1.  Tự đánh Release Ready.

2.  Tự đánh Production Ready.

3.  Tự đánh Go-live Approved.

4.  Tự mở Global Gateway.

5.  Bypass TECH-11.

6.  Bypass TECH-10.

7.  Gửi backlog chưa Ready sang dev.

8.  Gửi backlog release-level sang go-live trực tiếp.

**17.4. Upstream Dependency**

Phụ thuộc:

1.  Phase Backlog Review Resolver.

2.  Backlog-to-Handoff Resolver.

3.  Backlog Change Control Resolver.

4.  Backlog Blocker Resolver.

5.  TECH-11.

6.  TECH-10.

**17.5. Downstream Handoff**

Bàn giao:

1.  Ready for TECH-11 Dev Handoff.

2.  Ready for TECH-10 Release Review nếu đã qua implementation/evidence/smoke ở các bước sau.

3.  Blocked backlog list.

4.  Risk list.

5.  Owner review required list.

**17.6. P0 Blocker**

FAIL nếu Release Handoff gọi Backlog Ready là Release Ready.

FAIL nếu Release Handoff bỏ qua TECH-11.

FAIL nếu Release Handoff bỏ qua TECH-10.

FAIL nếu Release Handoff mở Global Gateway.

**17.7. Evidence**

Evidence tối thiểu:

1.  Release handoff checklist.

2.  Backlog ready list.

3.  Blocked list.

4.  Risk list.

5.  Handoff target.

6.  Reviewer decision.

**17.8. Smoke**

**TECH12-MOD-SMK-015**

Given phase backlog review pass  
When Release Handoff chạy  
Then status chỉ là Ready for TECH-11 Dev Handoff, không Release Ready.

**18. CROSS-MODULE DEPENDENCY MAP**

**18.1. Luồng chuẩn**

Luồng chuẩn của TECH-12:

1.  Phase Backlog Orchestrator xác định phase.

2.  Backlog Item Factory tạo backlog item.

3.  Source-to-Backlog Matrix Resolver map source.

4.  Phase Dependency Matrix Resolver kiểm tra dependency.

5.  Evidence Requirement Resolver gắn evidence.

6.  Smoke Requirement Resolver gắn smoke.

7.  Owner Assignment Resolver gắn owner.

8.  Report Requirement Resolver gắn report requirement.

9.  Backlog Readiness Resolver quyết định Ready/Blocked.

10. Backlog Blocker Resolver quản lý blocker.

11. Dev Task Breakdown Resolver chia task.

12. Phase Backlog Review Resolver review toàn phase.

13. Backlog-to-Handoff Resolver tạo handoff package.

14. Backlog Change Control Resolver kiểm soát thay đổi.

15. Release Handoff Resolver bàn giao sang TECH-11/TECH-10.

**18.2. No-bypass rule**

Không module nào được bỏ qua:

1.  Source mapping.

2.  Dependency review.

3.  Evidence requirement.

4.  Smoke requirement.

5.  Owner assignment.

6.  Report requirement.

7.  Readiness review.

8.  Blocker review.

9.  Phase backlog review.

10. Handoff governance.

11. Change control.

12. TECH-11/TECH-10 gate.

**18.3. Dependency ưu tiên**

Nếu có mâu thuẫn:

1.  Source-of-truth mới thắng backlog mơ hồ.

2.  Dependency fail thắng readiness.

3.  P0 blocker thắng handoff.

4.  Evidence/smoke missing thắng task urgency.

5.  Owner missing thắng backlog Ready.

6.  TECH-11 thắng dev handoff claim.

7.  TECH-10 thắng release claim.

8.  Global Gateway mặc định BLOCKED.

**19. MODULE P0 BLOCKER REGISTRY — PHẦN 2/4**

Các lỗi sau là P0 Blocker cấp module:

1.  Phase Backlog Orchestrator cho downstream Ready khi upstream blocked.

2.  Backlog Item Factory tạo backlog thiếu source.

3.  Source-to-Backlog Matrix accepted backlog không TECH/section/requirement.

4.  Phase Dependency Matrix cho mock upstream làm production truth.

5.  Backlog Readiness cho item thiếu evidence/smoke Ready.

6.  Backlog Blocker Resolver đóng blocker không evidence.

7.  Dev Task Breakdown làm mất source mapping.

8.  Evidence Requirement Resolver bỏ evidence cho high-risk task.

9.  Smoke Requirement Resolver bỏ P0 smoke.

10. Owner Assignment Resolver cho backlog không owner Ready.

11. Report Requirement Resolver bỏ test/build report.

12. Phase Backlog Review pass khi thiếu backlog critical.

13. Backlog-to-Handoff gửi backlog chưa Ready sang dev.

14. Backlog Change Control sửa scope không audit.

15. Release Handoff gọi Backlog Ready là Release Ready.

16. Module nào cho copy-paste code rời rạc.

17. Module nào cho hardcode policy.

18. Module nào bỏ TECH-11.

19. Module nào bỏ TECH-10.

20. Module nào tự mở Global Gateway.

**20. EVIDENCE PACKAGE — PHẦN 2/4**

PHẦN 2/4 yêu cầu evidence thiết kế ở cấp module gồm:

1.  Phase Backlog Orchestrator contract accepted.

2.  Backlog Item Factory contract accepted.

3.  Source-to-Backlog Matrix Resolver contract accepted.

4.  Phase Dependency Matrix Resolver contract accepted.

5.  Backlog Readiness Resolver contract accepted.

6.  Backlog Blocker Resolver contract accepted.

7.  Dev Task Breakdown Resolver contract accepted.

8.  Evidence Requirement Resolver contract accepted.

9.  Smoke Requirement Resolver contract accepted.

10. Owner Assignment Resolver contract accepted.

11. Report Requirement Resolver contract accepted.

12. Phase Backlog Review Resolver contract accepted.

13. Backlog-to-Handoff Resolver contract accepted.

14. Backlog Change Control Resolver contract accepted.

15. Release Handoff Resolver contract accepted.

16. Cross-module dependency accepted.

17. Module P0 Blocker Registry accepted.

18. Smoke matrix định hướng accepted.

19. Release handoff checklist prepared.

**21. SMOKE MATRIX ĐỊNH HƯỚNG — PHẦN 2/4**

**TECH12-P2-SMK-001 — Backlog Item Factory Reject Missing Source**

Given backlog draft không có Source-of-Truth  
When Backlog Item Factory kiểm tra  
Then item không được Ready.

**TECH12-P2-SMK-002 — Source Mapping Reject Legacy Source**

Given backlog dùng tài liệu cũ làm source thật  
When Source-to-Backlog Matrix Resolver kiểm tra  
Then source mapping rejected.

**TECH12-P2-SMK-003 — Dependency Blocks Downstream**

Given PHASE 3 Commerce backlog phụ thuộc PHASE 2  
When PHASE 2 blocked  
Then PHASE 3 backlog blocked.

**TECH12-P2-SMK-004 — Evidence Required For High-Risk**

Given backlog Payment Confirmation  
When Evidence Requirement Resolver chạy  
Then phải yêu cầu evidence/audit.

**TECH12-P2-SMK-005 — Smoke Required For P0**

Given backlog IVR Outcome Classification  
When Smoke Requirement Resolver chạy  
Then phải có smoke invalid phone/no answer/customer cancel/technical failure.

**TECH12-P2-SMK-006 — Owner Required**

Given backlog Notification Handoff  
When Owner Assignment Resolver chạy  
Then phải có Notification Owner và Privacy Owner nếu có dữ liệu khách.

**TECH12-P2-SMK-007 — Report Required**

Given backlog có implementation impact  
When Report Requirement Resolver chạy  
Then phải yêu cầu đủ 14 mục report.

**TECH12-P2-SMK-008 — Phase Review Fails Missing Critical Backlog**

Given PHASE 9 thiếu Release Decision / Global Gateway backlog  
When Phase Backlog Review chạy  
Then phase review fail.

**TECH12-P2-SMK-009 — Handoff Rejects Not Ready Backlog**

Given backlog còn NEED_DEPENDENCY_REVIEW  
When Backlog-to-Handoff Resolver chạy  
Then không được handoff dev.

**TECH12-P2-SMK-010 — Change Control Required**

Given backlog đã handoff nhưng scope thay đổi  
When Change Control kiểm tra  
Then phải có change record và cập nhật handoff.

**TECH12-P2-SMK-011 — Release Handoff Not Release Ready**

Given phase backlog review pass  
When Release Handoff chạy  
Then chỉ Ready for TECH-11 Dev Handoff, không Release Ready.

**22. DONE GATE — PHẦN 2/4**

PHẦN 2/4 đạt Documentation Complete ở cấp module contract khi:

1.  Đã khóa Phase Backlog Orchestrator.

2.  Đã khóa Backlog Item Factory.

3.  Đã khóa Source-to-Backlog Matrix Resolver.

4.  Đã khóa Phase Dependency Matrix Resolver.

5.  Đã khóa Backlog Readiness Resolver.

6.  Đã khóa Backlog Blocker Resolver.

7.  Đã khóa Dev Task Breakdown Resolver.

8.  Đã khóa Evidence Requirement Resolver.

9.  Đã khóa Smoke Requirement Resolver.

10. Đã khóa Owner Assignment Resolver.

11. Đã khóa Report Requirement Resolver.

12. Đã khóa Phase Backlog Review Resolver.

13. Đã khóa Backlog-to-Handoff Resolver.

14. Đã khóa Backlog Change Control Resolver.

15. Đã khóa Release Handoff Resolver.

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

9.  Có module cho backlog không source Ready.

10. Có module cho downstream Ready khi upstream blocked.

11. Có module bỏ evidence/smoke.

12. Có module bỏ owner.

13. Có module bỏ report requirement.

14. Có module bỏ Phase Backlog Review.

15. Có module handoff backlog chưa Ready.

16. Có module sửa backlog không change record.

17. Có module gọi Backlog Ready là Release Ready.

18. Có module bypass TECH-11.

19. Có module bypass TECH-10.

20. Có module tự mở Global Gateway.

**24. RELEASE HANDOFF — SANG PHẦN 3/4**

PHẦN 2/4 bàn giao sang PHẦN 3/4 các nội dung đã khóa:

1.  Danh sách module backlog governance đầy đủ.

2.  Boundary từng module.

3.  Dependency từng module.

4.  Handoff từng module.

5.  P0 blocker từng module.

6.  Evidence từng module.

7.  Smoke từng module.

8.  Cross-module dependency map.

9.  Backlog item creation rule.

10. Source-to-backlog mapping rule.

11. Phase dependency matrix rule.

12. Backlog readiness rule.

13. Backlog blocker rule.

14. Dev task breakdown rule.

15. Evidence requirement rule.

16. Smoke requirement rule.

17. Owner assignment rule.

18. Report requirement rule.

19. Phase backlog review rule.

20. Change control rule.

21. Release handoff rule.

PHẦN 3/4 sẽ viết:

**BACKLOG LIFECYCLE / TASK STATE MACHINE / SOURCE-TO-BACKLOG-TO-HANDOFF FLOW / PHASE DEPENDENCY CONTROL**

Trong đó phải khóa rõ:

1.  Backlog lifecycle.

2.  Task state machine.

3.  Source mapping state model.

4.  Dependency matrix state model.

5.  Evidence requirement state model.

6.  Smoke requirement state model.

7.  Owner assignment state model.

8.  Backlog readiness state model.

9.  Blocker state model.

10. Task breakdown state model.

11. Handoff state model.

12. Change control state model.

13. Release handoff state model.

14. Fail-safe backlog control.

**25. TRẠNG THÁI SAU PHẦN 2/4**

Sau PHẦN 2/4:

**TECH-12 = DOCUMENTATION IN PROGRESS**

PHẦN 1/4 đã khóa backlog principles.

PHẦN 2/4 đã khóa module contracts.

Chưa được gọi là Documentation Complete.

Chưa được gọi là Backlog Ready.

Chưa được gọi là Dev Ready.

Chưa được gọi là Implementation Ready.

Chưa được gọi là Release Ready.

Chưa được gọi là Production Ready.

Chưa được gọi là Go-live Approved.

Global Gateway vẫn mặc định:

**BLOCKED**

**KẾT LUẬN PHẦN 2/4**

PHẦN 2/4 đã khóa đầy đủ module contracts cho TECH-12.

Các module trọng yếu đã được cố định:

1.  Phase Backlog Orchestrator giữ cấu trúc backlog theo PHASE 0 → PHASE 9.

2.  Backlog Item Factory tạo backlog theo chuẩn bắt buộc.

3.  Source-to-Backlog Matrix Resolver chặn backlog không source.

4.  Phase Dependency Matrix Resolver chặn downstream khi upstream blocked.

5.  Backlog Readiness Resolver quyết định Ready/Blocked/Need Review.

6.  Backlog Blocker Resolver quản lý blocker.

7.  Dev Task Breakdown Resolver chia task nhưng không làm mất source/evidence/smoke.

8.  Evidence Requirement Resolver gắn bằng chứng bắt buộc.

9.  Smoke Requirement Resolver gắn smoke bắt buộc.

10. Owner Assignment Resolver gắn owner đúng domain.

11. Report Requirement Resolver bắt dev report đúng format.

12. Phase Backlog Review Resolver kiểm tra toàn phase.

13. Backlog-to-Handoff Resolver tạo package sang TECH-11.

14. Backlog Change Control Resolver kiểm soát thay đổi.

15. Release Handoff Resolver chỉ bàn giao, không tự gọi Release Ready.

PHẦN 2/4 sẵn sàng bàn giao sang:

**PHẦN 3/4 — BACKLOG LIFECYCLE / TASK STATE MACHINE / SOURCE-TO-BACKLOG-TO-HANDOFF FLOW / PHASE DEPENDENCY CONTROL**.

**PHẦN 3/4 — BACKLOG LIFECYCLE / TASK STATE MACHINE / SOURCE-TO-BACKLOG-TO-HANDOFF FLOW / PHASE DEPENDENCY CONTROL**

**1. MỤC TIÊU PHẦN 3/4**

PHẦN 3/4 khóa vòng đời của backlog từ lúc một yêu cầu còn nằm trong TECH source-of-truth cho đến khi được tạo thành backlog item, review source, review dependency, gắn owner, gắn evidence, gắn smoke, chia task, đưa vào handoff cho dev và bàn giao sang TECH-11.

PHẦN này xác định rõ:

1.  Backlog đi qua những trạng thái nào.

2.  Task đi qua những trạng thái nào.

3.  Source-to-backlog mapping vận hành ra sao.

4.  Dependency matrix kiểm soát backlog như thế nào.

5.  Evidence requirement được sinh, review và accepted ra sao.

6.  Smoke requirement được sinh, review và accepted ra sao.

7.  Owner assignment được kiểm tra thế nào.

8.  Backlog readiness được quyết định ra sao.

9.  Blocker được mở, xử lý, retest và đóng thế nào.

10. Dev task breakdown được tạo thế nào.

11. Backlog-to-handoff flow sang TECH-11 vận hành thế nào.

12. Backlog change control vận hành ra sao.

13. Release handoff sang TECH-10 bị giới hạn như thế nào.

14. Fail-safe backlog control vận hành khi thiếu source, thiếu dependency, thiếu evidence hoặc thiếu smoke.

PHẦN 3/4 không viết code.

PHẦN 3/4 không thiết kế API chi tiết.

PHẦN 3/4 không thiết kế database chi tiết.

PHẦN 3/4 không thiết kế UI chi tiết.

PHẦN 3/4 chỉ khóa **backlog lifecycle, task state machine, source-to-backlog flow, handoff flow và phase dependency control**.

**2. NGUYÊN TẮC LIFECYCLE CHUNG**

Toàn bộ lifecycle backlog của TECH-12 phải tuân thủ:

1.  Không backlog nào được Ready nếu không có source-of-truth.

2.  Không backlog nào được Ready nếu thiếu Scope In / Scope Out.

3.  Không backlog nào được Ready nếu thiếu dependency.

4.  Không backlog nào được Ready nếu thiếu P0 blocker.

5.  Không backlog nào được Ready nếu thiếu evidence requirement.

6.  Không backlog nào được Ready nếu thiếu smoke requirement.

7.  Không backlog nào được Ready nếu thiếu owner.

8.  Không backlog nào được Ready nếu thiếu report requirement.

9.  Không backlog downstream nào được Ready nếu upstream critical blocked.

10. Không backlog nào được handoff dev nếu còn source conflict.

11. Không backlog nào được handoff dev nếu còn dependency unresolved.

12. Không backlog nào được gọi là Dev Ready nếu chưa qua TECH-11 Dev Handoff Governance.

13. Không backlog nào được gọi là Release Ready nếu chưa qua TECH-10.

14. Không backlog nào được dùng để viết code copy-paste rời rạc từ AI.

15. Không backlog nào được hardcode policy nghiệp vụ.

16. Không backlog nào được dùng tài liệu cũ hoặc code cũ để thắng TECH mới.

17. Không backlog nào được bypass evidence/smoke.

18. Không backlog nào được mở Global Gateway.

**3. BACKLOG LIFECYCLE STATE MODEL**

**3.1. Danh sách trạng thái backlog**

Mỗi backlog item trong TECH-12 có các trạng thái sau:

1.  **BACKLOG_NOT_CREATED**  
    Backlog chưa được tạo.

2.  **BACKLOG_DRAFTING**  
    Backlog đang được soạn nháp.

3.  **BACKLOG_NEED_SOURCE_MAPPING**  
    Backlog chưa có source-of-truth rõ.

4.  **BACKLOG_SOURCE_MAPPING_IN_PROGRESS**  
    Đang map backlog với TECH source-of-truth.

5.  **BACKLOG_SOURCE_MAPPED**  
    Đã map source-of-truth.

6.  **BACKLOG_SOURCE_CONFLICT**  
    Có mâu thuẫn giữa TECH mới, tài liệu cũ hoặc code cũ.

7.  **BACKLOG_NEED_SCOPE_REVIEW**  
    Scope In / Scope Out chưa rõ.

8.  **BACKLOG_NEED_DEPENDENCY_REVIEW**  
    Dependency chưa rõ hoặc upstream chưa pass.

9.  **BACKLOG_NEED_OWNER_ASSIGNMENT**  
    Chưa có owner phù hợp.

10. **BACKLOG_NEED_EVIDENCE_REQUIREMENT**  
    Chưa có evidence requirement.

11. **BACKLOG_NEED_SMOKE_REQUIREMENT**  
    Chưa có smoke requirement.

12. **BACKLOG_NEED_REPORT_REQUIREMENT**  
    Chưa có yêu cầu báo cáo dev.

13. **BACKLOG_READINESS_REVIEW**  
    Đang kiểm tra Ready/Blocked.

14. **BACKLOG_BLOCKED**  
    Bị chặn do thiếu source, thiếu dependency, thiếu owner, thiếu evidence/smoke hoặc có P0 blocker.

15. **BACKLOG_READY_FOR_TASK_BREAKDOWN**  
    Backlog đủ điều kiện để chia dev task.

16. **BACKLOG_TASK_BREAKDOWN_IN_PROGRESS**  
    Đang chia backlog thành task triển khai.

17. **BACKLOG_TASK_BREAKDOWN_ACCEPTED**  
    Task breakdown đã accepted.

18. **BACKLOG_READY_FOR_TECH11_HANDOFF**  
    Sẵn sàng chuyển sang TECH-11 Dev Handoff Governance.

19. **BACKLOG_HANDOFF_TO_TECH11**  
    Đã bàn giao sang TECH-11.

20. **BACKLOG_SUPERSEDED**  
    Backlog bị thay thế bởi backlog mới.

21. **BACKLOG_CANCELLED**  
    Backlog bị hủy có lý do.

**3.2. Transition hợp lệ**

Các transition hợp lệ:

1.  BACKLOG_NOT_CREATED → BACKLOG_DRAFTING.

2.  BACKLOG_DRAFTING → BACKLOG_NEED_SOURCE_MAPPING.

3.  BACKLOG_NEED_SOURCE_MAPPING → BACKLOG_SOURCE_MAPPING_IN_PROGRESS.

4.  BACKLOG_SOURCE_MAPPING_IN_PROGRESS → BACKLOG_SOURCE_MAPPED.

5.  BACKLOG_SOURCE_MAPPING_IN_PROGRESS → BACKLOG_SOURCE_CONFLICT.

6.  BACKLOG_SOURCE_MAPPED → BACKLOG_NEED_SCOPE_REVIEW.

7.  BACKLOG_NEED_SCOPE_REVIEW → BACKLOG_NEED_DEPENDENCY_REVIEW.

8.  BACKLOG_NEED_DEPENDENCY_REVIEW → BACKLOG_NEED_OWNER_ASSIGNMENT.

9.  BACKLOG_NEED_OWNER_ASSIGNMENT → BACKLOG_NEED_EVIDENCE_REQUIREMENT.

10. BACKLOG_NEED_EVIDENCE_REQUIREMENT → BACKLOG_NEED_SMOKE_REQUIREMENT.

11. BACKLOG_NEED_SMOKE_REQUIREMENT → BACKLOG_NEED_REPORT_REQUIREMENT.

12. BACKLOG_NEED_REPORT_REQUIREMENT → BACKLOG_READINESS_REVIEW.

13. BACKLOG_READINESS_REVIEW → BACKLOG_BLOCKED.

14. BACKLOG_READINESS_REVIEW → BACKLOG_READY_FOR_TASK_BREAKDOWN.

15. BACKLOG_READY_FOR_TASK_BREAKDOWN → BACKLOG_TASK_BREAKDOWN_IN_PROGRESS.

16. BACKLOG_TASK_BREAKDOWN_IN_PROGRESS → BACKLOG_TASK_BREAKDOWN_ACCEPTED.

17. BACKLOG_TASK_BREAKDOWN_ACCEPTED → BACKLOG_READY_FOR_TECH11_HANDOFF.

18. BACKLOG_READY_FOR_TECH11_HANDOFF → BACKLOG_HANDOFF_TO_TECH11.

19. Bất kỳ trạng thái nào → BACKLOG_SUPERSEDED nếu có backlog mới thay thế.

20. Bất kỳ trạng thái nào → BACKLOG_CANCELLED nếu owner quyết định hủy.

**3.3. Transition bị cấm**

Các transition bị cấm:

1.  BACKLOG_NOT_CREATED → BACKLOG_READY_FOR_TECH11_HANDOFF.

2.  BACKLOG_DRAFTING → BACKLOG_READY_FOR_TASK_BREAKDOWN.

3.  BACKLOG_NEED_SOURCE_MAPPING → BACKLOG_READY_FOR_TASK_BREAKDOWN.

4.  BACKLOG_SOURCE_CONFLICT → BACKLOG_READY_FOR_TASK_BREAKDOWN nếu chưa xử lý.

5.  BACKLOG_NEED_DEPENDENCY_REVIEW → BACKLOG_READY_FOR_TASK_BREAKDOWN.

6.  BACKLOG_NEED_EVIDENCE_REQUIREMENT → BACKLOG_READY_FOR_TECH11_HANDOFF.

7.  BACKLOG_NEED_SMOKE_REQUIREMENT → BACKLOG_READY_FOR_TECH11_HANDOFF.

8.  BACKLOG_BLOCKED → BACKLOG_HANDOFF_TO_TECH11.

9.  BACKLOG_READY_FOR_TECH11_HANDOFF → Release Ready.

10. BACKLOG_HANDOFF_TO_TECH11 → Go-live Approved.

**3.4. P0 Blocker**

FAIL nếu backlog chưa source-mapped nhưng được handoff.

FAIL nếu backlog còn source conflict nhưng được chia task.

FAIL nếu backlog thiếu evidence/smoke nhưng Ready.

FAIL nếu backlog blocked nhưng vẫn chuyển sang TECH-11.

**4. DEV TASK STATE MACHINE**

**4.1. Danh sách trạng thái task**

Mỗi backlog có thể được chia thành nhiều dev task. Mỗi task có các trạng thái:

1.  **TASK_NOT_CREATED**.

2.  **TASK_DRAFTING**.

3.  **TASK_SOURCE_MAPPED**.

4.  **TASK_SCOPE_REVIEWED**.

5.  **TASK_DEPENDENCY_REVIEWED**.

6.  **TASK_EVIDENCE_DEFINED**.

7.  **TASK_SMOKE_DEFINED**.

8.  **TASK_OWNER_ASSIGNED**.

9.  **TASK_READY_FOR_TECH11_HANDOFF**.

10. **TASK_BLOCKED**.

11. **TASK_SUPERSEDED**.

12. **TASK_CANCELLED**.

**4.2. Task Ready Rule**

Một task chỉ được Ready for TECH-11 Handoff khi có:

1.  Task ID.

2.  Backlog ID.

3.  Phase.

4.  TECH source.

5.  Requirement summary.

6.  Scope In.

7.  Scope Out.

8.  Dependency.

9.  P0 blocker.

10. Evidence required.

11. Smoke required.

12. Owner.

13. Report requirement.

14. Handoff target.

**4.3. Transition bị cấm**

1.  TASK_DRAFTING → TASK_READY_FOR_TECH11_HANDOFF nếu thiếu source.

2.  TASK_SOURCE_MAPPED → TASK_READY_FOR_TECH11_HANDOFF nếu thiếu dependency.

3.  TASK_EVIDENCE_DEFINED → TASK_READY_FOR_TECH11_HANDOFF nếu chưa có smoke.

4.  TASK_BLOCKED → TASK_READY_FOR_TECH11_HANDOFF.

5.  TASK_READY_FOR_TECH11_HANDOFF → Code Handoff Allowed nếu chưa qua TECH-11.

**4.4. P0 Blocker**

FAIL nếu task làm mất source mapping của backlog cha.

FAIL nếu task con bỏ P0 blocker của backlog cha.

FAIL nếu task con bỏ evidence/smoke requirement.

FAIL nếu task con biến thành code snippet rời rạc.

**5. SOURCE MAPPING STATE MODEL**

**5.1. Danh sách trạng thái source mapping**

Source mapping có các trạng thái:

1.  **SOURCE_NOT_CHECKED**.

2.  **SOURCE_CHECKING**.

3.  **SOURCE_FOUND_IN_TECH**.

4.  **SOURCE_NOT_FOUND**.

5.  **SOURCE_CONFLICT_WITH_LEGACY**.

6.  **SOURCE_CONFLICT_WITH_CURRENT_CODE**.

7.  **SOURCE_CONFLICT_REVIEW_REQUIRED**.

8.  **SOURCE_ACCEPTED_TECH_WINS**.

9.  **SOURCE_ACCEPTED_OWNER_DECISION**.

10. **SOURCE_REJECTED**.

**5.2. Source Mapping Rule**

Một source mapping hợp lệ phải có:

1.  TECH number.

2.  Section hoặc requirement group.

3.  Requirement summary.

4.  Phase.

5.  Domain.

6.  Backlog ID.

7.  Legacy conflict note nếu có.

8.  Current implementation deviation nếu có.

9.  Decision.

10. Reviewer.

**5.3. Rule khi có conflict**

Nếu có conflict:

1.  TECH mới thắng tài liệu cũ.

2.  TECH mới thắng code cũ.

3.  Không dùng legacy làm source thật.

4.  Không dùng current code làm nghiệp vụ đúng nếu khác TECH.

5.  Phải ghi source conflict.

6.  Nếu cần owner quyết định thì route owner.

7.  Không được đưa backlog sang Ready khi conflict chưa xử lý.

**5.4. P0 Blocker**

FAIL nếu source không tìm thấy nhưng backlog vẫn Ready.

FAIL nếu legacy reference thắng TECH mới.

FAIL nếu code cũ thắng TECH mới.

FAIL nếu source conflict bị bỏ qua.

**6. DEPENDENCY MATRIX STATE MODEL**

**6.1. Danh sách trạng thái dependency**

Dependency có các trạng thái:

1.  **DEPENDENCY_NOT_CHECKED**.

2.  **DEPENDENCY_CHECKING**.

3.  **DEPENDENCY_PASS**.

4.  **DEPENDENCY_FAIL**.

5.  **DEPENDENCY_BLOCKED_BY_UPSTREAM**.

6.  **DEPENDENCY_BLOCKED_BY_SOURCE_CONFLICT**.

7.  **DEPENDENCY_BLOCKED_BY_P0**.

8.  **DEPENDENCY_NEED_OWNER_REVIEW**.

9.  **DEPENDENCY_ACCEPTED_FOR_PLANNING_ONLY**.

10. **DEPENDENCY_ACCEPTED_FOR_HANDOFF**.

**6.2. Dependency Pass Rule**

Dependency chỉ pass khi:

1.  Upstream source rõ.

2.  Upstream critical backlog không blocked.

3.  Upstream smoke/evidence requirement đã xác định.

4.  Không có source conflict.

5.  Không có P0 blocker mở.

6.  Dependency không dựa vào mock production.

7.  Dependency không dựa vào code cũ trái TECH mới.

8.  Handoff downstream phù hợp.

**6.3. Planning-only rule**

Một số backlog downstream có thể ở trạng thái chuẩn bị:

**DEPENDENCY_ACCEPTED_FOR_PLANNING_ONLY**

Trạng thái này cho phép:

1.  Soạn tài liệu.

2.  Soạn test case.

3.  Chuẩn bị mock có ghi rõ là mock.

4.  Chuẩn bị UI wireframe.

5.  Chuẩn bị backlog phụ.

Nhưng không cho phép:

1.  Release.

2.  Production traffic.

3.  Go-live.

4.  Dùng mock làm source-of-truth.

5.  Gọi dependency pass thật.

**6.4. P0 Blocker**

FAIL nếu downstream release khi dependency chỉ planning-only.

FAIL nếu mock upstream được coi là production truth.

FAIL nếu dependency fail nhưng backlog vẫn Ready.

**7. EVIDENCE REQUIREMENT STATE MODEL**

**7.1. Danh sách trạng thái evidence requirement**

Evidence requirement có các trạng thái:

1.  **EVIDENCE_REQ_NOT_DEFINED**.

2.  **EVIDENCE_REQ_DRAFTING**.

3.  **EVIDENCE_REQ_NEED_DOMAIN_REVIEW**.

4.  **EVIDENCE_REQ_NEED_PRIVACY_REVIEW**.

5.  **EVIDENCE_REQ_ACCEPTED**.

6.  **EVIDENCE_REQ_REJECTED**.

7.  **EVIDENCE_REQ_SUPERSEDED**.

**7.2. Evidence Requirement Rule**

Evidence requirement accepted khi có:

1.  Evidence type.

2.  Requirement mapping.

3.  Phase mapping.

4.  Backlog mapping.

5.  Environment expectation.

6.  Expected/actual expectation.

7.  Reviewer expectation.

8.  Sensitive data policy nếu có.

9.  Audit/correlation expectation nếu high-risk.

10. Handoff destination.

**7.3. Evidence loại bắt buộc theo risk**

Backlog high-risk phải có evidence mạnh hơn.

Ví dụ:

1.  Payment / revenue cần audit/log/source evidence.

2.  IVR cần call outcome/evidence/audit.

3.  Ads cần Verified Revenue/Data Quality evidence.

4.  Gateway cần public/private delivery evidence.

5.  AI cần final response guard evidence.

6.  Operational cần inventory/ledger/trace/release evidence.

7.  Admin override cần actor/reason/evidence/audit.

**7.4. P0 Blocker**

FAIL nếu high-risk backlog không có evidence requirement.

FAIL nếu evidence requirement không nêu environment.

FAIL nếu evidence requirement không nêu expected/actual.

FAIL nếu privacy-sensitive backlog không có privacy evidence.

**8. SMOKE REQUIREMENT STATE MODEL**

**8.1. Danh sách trạng thái smoke requirement**

Smoke requirement có các trạng thái:

1.  **SMOKE_REQ_NOT_DEFINED**.

2.  **SMOKE_REQ_DRAFTING**.

3.  **SMOKE_REQ_NEED_P0_REVIEW**.

4.  **SMOKE_REQ_NEED_FAIL_CASE_REVIEW**.

5.  **SMOKE_REQ_NEED_DEPENDENCY_REVIEW**.

6.  **SMOKE_REQ_ACCEPTED**.

7.  **SMOKE_REQ_REJECTED**.

8.  **SMOKE_REQ_SUPERSEDED**.

**8.2. Smoke Requirement Rule**

Smoke requirement accepted khi có:

1.  Smoke ID draft.

2.  Scenario.

3.  Given.

4.  When.

5.  Then.

6.  Must Not.

7.  Expected result.

8.  Evidence required.

9.  P0 case nếu có.

10. Fail-case nếu có.

11. Dependency case nếu có.

12. Runtime unavailable case nếu có.

**8.3. Smoke theo domain**

Smoke requirement phải phù hợp domain:

1.  Foundation: audit/evidence/RBAC/idempotency.

2.  Product: Product Active ≠ Sellable.

3.  Operational: raw readiness, release, warehouse, trace, recall.

4.  Commerce: quote/cart/order/payment/revenue.

5.  AI: no self-price, no self-order, guard response.

6.  Gateway: public/private, Messenger handoff, suppression.

7.  Ads: no fake revenue, dedup, data quality, scale gate.

8.  Live: no live signal as revenue, script guard, troll/complaint split.

9.  IVR: official order only, invalid phone, no answer, cancel, technical failure.

10. Release: evidence, smoke, sign-off, release decision, gateway.

**8.4. P0 Blocker**

FAIL nếu smoke requirement chỉ có happy path cho backlog critical.

FAIL nếu không có Must Not.

FAIL nếu không có P0 smoke.

FAIL nếu không có dependency smoke cho backlog downstream.

**9. OWNER ASSIGNMENT STATE MODEL**

**9.1. Danh sách trạng thái owner assignment**

Owner assignment có các trạng thái:

1.  **OWNER_NOT_ASSIGNED**.

2.  **OWNER_ASSIGNMENT_IN_PROGRESS**.

3.  **OWNER_ASSIGNED**.

4.  **OWNER_MISSING_CRITICAL_ROLE**.

5.  **OWNER_CONFLICT**.

6.  **OWNER_REVIEW_REQUIRED**.

7.  **OWNER_ASSIGNMENT_ACCEPTED**.

8.  **OWNER_ASSIGNMENT_REJECTED**.

**9.2. Owner Assignment Rule**

Owner assignment accepted khi có:

1.  Business owner nếu backlog nghiệp vụ.

2.  Dev owner.

3.  QA owner.

4.  Evidence reviewer.

5.  Smoke reviewer.

6.  Domain owner.

7.  Privacy/Security owner nếu có dữ liệu nhạy cảm.

8.  Release owner nếu backlog release-level.

9.  Handoff receiver.

10. Owner scope rõ.

**9.3. Owner theo domain**

Backlog phải có owner phù hợp:

1.  Foundation: Security/RBAC/Audit owner.

2.  Product: Product/SKU/Recipe owner.

3.  Operational: Production/Warehouse/Trace/Recall owner.

4.  Commerce: Commerce/Payment/Shipping owner.

5.  AI: AI Advisor/Claim/Content owner.

6.  Gateway: Channel/Gateway owner.

7.  Ads: Ads Measurement/Data Quality owner.

8.  Live: MC AI Live owner.

9.  IVR: IVR/Core Order/Notification owner.

10. Release: Release/QA/UAT/Privacy/Security owner.

**9.4. P0 Blocker**

FAIL nếu backlog không owner vẫn Ready.

FAIL nếu backlog privacy-sensitive thiếu Privacy/Security owner.

FAIL nếu backlog payment/revenue thiếu Commerce/Payment owner.

FAIL nếu release-level backlog thiếu Release owner.

**10. BACKLOG READINESS STATE MODEL**

**10.1. Danh sách trạng thái readiness**

Backlog readiness có các trạng thái:

1.  **READINESS_NOT_CHECKED**.

2.  **READINESS_CHECKING**.

3.  **READINESS_NEED_SOURCE**.

4.  **READINESS_NEED_SCOPE**.

5.  **READINESS_NEED_DEPENDENCY**.

6.  **READINESS_NEED_OWNER**.

7.  **READINESS_NEED_EVIDENCE**.

8.  **READINESS_NEED_SMOKE**.

9.  **READINESS_NEED_REPORT_REQUIREMENT**.

10. **READINESS_BLOCKED_BY_P0**.

11. **READINESS_BLOCKED_BY_UPSTREAM**.

12. **READINESS_READY_FOR_TASK_BREAKDOWN**.

13. **READINESS_READY_FOR_TECH11_HANDOFF**.

**10.2. Ready for Task Breakdown Rule**

Backlog chỉ Ready for Task Breakdown khi:

1.  Source mapping accepted.

2.  Scope In/Out accepted.

3.  Dependency reviewed.

4.  Owner assigned.

5.  Evidence requirement accepted.

6.  Smoke requirement accepted.

7.  Report requirement accepted.

8.  P0 blocker list defined.

9.  No open source conflict.

10. No upstream critical blocker.

**10.3. Ready for TECH-11 Handoff Rule**

Backlog chỉ Ready for TECH-11 Handoff khi:

1.  Ready for Task Breakdown.

2.  Task breakdown accepted.

3.  Task evidence/smoke preserved.

4.  Handoff target clear.

5.  Change control not pending.

6.  Blocker none/open P0 none.

7.  Phase Backlog Review pass.

**10.4. P0 Blocker**

FAIL nếu readiness bỏ qua evidence/smoke.

FAIL nếu readiness bỏ qua owner.

FAIL nếu readiness cho source conflict vào handoff.

FAIL nếu readiness gọi Ready for TECH-11 là Dev Ready.

**11. BACKLOG BLOCKER STATE MODEL**

**11.1. Danh sách trạng thái blocker**

Backlog blocker có các trạng thái:

1.  **BLK_NOT_REPORTED**.

2.  **BLK_OPEN**.

3.  **BLK_ASSIGNED**.

4.  **BLK_NEED_SOURCE_REVIEW**.

5.  **BLK_NEED_DEPENDENCY_REVIEW**.

6.  **BLK_NEED_OWNER_REVIEW**.

7.  **BLK_NEED_EVIDENCE_SMOKE**.

8.  **BLK_FIX_IN_PROGRESS**.

9.  **BLK_FIX_SUBMITTED**.

10. **BLK_REVIEWING_FIX**.

11. **BLK_RESOLVED_PENDING_ACCEPTANCE**.

12. **BLK_CLOSED**.

13. **BLK_REOPENED**.

**11.2. Blocker Closure Rule**

Blocker chỉ closed khi có:

1.  Root cause.

2.  Fix decision.

3.  Updated backlog nếu cần.

4.  Updated source mapping nếu cần.

5.  Updated dependency nếu cần.

6.  Updated evidence/smoke nếu cần.

7.  Owner/reviewer acceptance.

8.  Audit note.

**11.3. P0 Blocker**

FAIL nếu blocker closed không evidence.

FAIL nếu blocker P0 downgraded không approval.

FAIL nếu blocker open nhưng backlog Ready.

FAIL nếu blocker hidden khỏi handoff.

**12. TASK BREAKDOWN STATE MODEL**

**12.1. Danh sách trạng thái task breakdown**

Task breakdown có các trạng thái:

1.  **BREAKDOWN_NOT_STARTED**.

2.  **BREAKDOWN_DRAFTING**.

3.  **BREAKDOWN_SOURCE_CHECKING**.

4.  **BREAKDOWN_DEPENDENCY_CHECKING**.

5.  **BREAKDOWN_EVIDENCE_SMOKE_CHECKING**.

6.  **BREAKDOWN_REJECTED**.

7.  **BREAKDOWN_NEED_REWORK**.

8.  **BREAKDOWN_ACCEPTED**.

9.  **BREAKDOWN_SUPERSEDED**.

**12.2. Task Breakdown Rule**

Task breakdown accepted khi:

1.  Không làm mất source mapping.

2.  Không làm mất dependency.

3.  Không làm mất Scope Out.

4.  Không làm mất P0 blocker.

5.  Không làm mất evidence requirement.

6.  Không làm mất smoke requirement.

7.  Task đủ nhỏ để dev hiểu.

8.  Task không biến thành code snippet.

9.  Task có report requirement.

10. Task có handoff target.

**12.3. Task Breakdown bị reject khi**

1.  Task quá rộng.

2.  Task quá mơ hồ.

3.  Task chỉ là “code phần này”.

4.  Task không source.

5.  Task không evidence/smoke.

6.  Task bỏ dependency.

7.  Task hardcode policy.

8.  Task bỏ P0 blocker của backlog cha.

**12.4. P0 Blocker**

FAIL nếu breakdown làm mất source.

FAIL nếu breakdown làm mất P0 blocker.

FAIL nếu breakdown thành code copy-paste task.

FAIL nếu breakdown cho dev tự quyết nghiệp vụ.

**13. BACKLOG-TO-HANDOFF STATE MODEL**

**13.1. Danh sách trạng thái handoff**

Backlog-to-handoff có các trạng thái:

1.  **HANDOFF_NOT_STARTED**.

2.  **HANDOFF_PREPARING**.

3.  **HANDOFF_NEED_BACKLOG_READY**.

4.  **HANDOFF_NEED_TASK_BREAKDOWN**.

5.  **HANDOFF_NEED_OWNER_CHECK**.

6.  **HANDOFF_NEED_EVIDENCE_SMOKE_CHECK**.

7.  **HANDOFF_NEED_DEPENDENCY_CHECK**.

8.  **HANDOFF_BLOCKED**.

9.  **HANDOFF_READY_FOR_TECH11**.

10. **HANDOFF_SENT_TO_TECH11**.

11. **HANDOFF_REJECTED_BY_TECH11**.

12. **HANDOFF_ACCEPTED_BY_TECH11**.

**13.2. Handoff Ready Rule**

Handoff ready khi:

1.  Backlog Ready for TECH-11 Handoff.

2.  Task breakdown accepted.

3.  Evidence/smoke preserved.

4.  Owner assignment accepted.

5.  Dependency pass hoặc planning-only được ghi rõ.

6.  Blocker none/open P0 none.

7.  Report requirement attached.

8.  Change control closed.

9.  Handoff document complete.

**13.3. P0 Blocker**

FAIL nếu handoff thiếu Scope Out.

FAIL nếu handoff thiếu P0 blocker.

FAIL nếu handoff thiếu evidence/smoke.

FAIL nếu handoff gửi backlog blocked sang TECH-11.

FAIL nếu handoff gọi backlog là Dev Ready khi chưa qua TECH-11.

**14. CHANGE CONTROL STATE MODEL**

**14.1. Danh sách trạng thái change control**

Backlog change có các trạng thái:

1.  **CHANGE_NOT_REQUESTED**.

2.  **CHANGE_REQUESTED**.

3.  **CHANGE_IMPACT_REVIEW**.

4.  **CHANGE_SOURCE_REVIEW**.

5.  **CHANGE_DEPENDENCY_REVIEW**.

6.  **CHANGE_EVIDENCE_SMOKE_REVIEW**.

7.  **CHANGE_OWNER_REVIEW**.

8.  **CHANGE_APPROVED**.

9.  **CHANGE_REJECTED**.

10. **CHANGE_APPLIED**.

11. **CHANGE_SUPERSEDED**.

12. **CHANGE_REQUIRES_REHANDOFF**.

**14.2. Change Control Rule**

Mọi thay đổi backlog sau khi Ready hoặc handoff phải có:

1.  Change request ID.

2.  Backlog ID.

3.  Before/after.

4.  Impact.

5.  Source impact.

6.  Dependency impact.

7.  Evidence/smoke impact.

8.  Owner impact.

9.  Handoff impact.

10. Approval.

**14.3. Change bị cấm**

Không được:

1.  Sửa backlog âm thầm.

2.  Xóa P0 blocker.

3.  Xóa evidence/smoke cho dễ làm.

4.  Đổi scope để bypass dependency.

5.  Đổi source sang tài liệu cũ.

6.  Đổi owner critical không review.

7.  Sửa handoff sau khi gửi dev mà không báo dev/QA.

**14.4. P0 Blocker**

FAIL nếu backlog thay đổi sau handoff mà không có change record.

FAIL nếu change làm mất source mapping.

FAIL nếu change làm mất evidence/smoke.

FAIL nếu change bypass dependency.

**15. RELEASE HANDOFF STATE MODEL**

**15.1. Danh sách trạng thái release handoff**

Release handoff trong TECH-12 có các trạng thái:

1.  **RELEASE_HANDOFF_NOT_REQUIRED_YET**.

2.  **RELEASE_HANDOFF_PREPARING**.

3.  **RELEASE_HANDOFF_BACKLOG_READY**.

4.  **RELEASE_HANDOFF_TO_TECH11_READY**.

5.  **RELEASE_HANDOFF_TO_TECH11_SENT**.

6.  **RELEASE_HANDOFF_TO_TECH11_ACCEPTED**.

7.  **RELEASE_HANDOFF_TO_TECH11_REJECTED**.

8.  **RELEASE_HANDOFF_TO_TECH10_NOT_ALLOWED_YET**.

9.  **RELEASE_HANDOFF_TO_TECH10_READY_AFTER_IMPLEMENTATION**.

10. **RELEASE_HANDOFF_BLOCKED**.

**15.2. Handoff sang TECH-11**

TECH-12 chỉ được bàn giao backlog sang TECH-11 khi:

1.  Source mapping accepted.

2.  Dependency reviewed.

3.  Evidence/smoke defined.

4.  Owner assigned.

5.  Task breakdown accepted.

6.  Backlog Ready for Handoff.

7.  Change control closed.

8.  No open P0 blocker.

**15.3. Handoff sang TECH-10**

TECH-12 không trực tiếp đưa backlog chưa implemented sang TECH-10 như release package.

TECH-10 chỉ review sau khi:

1.  TECH-11 handoff đã đi vào implementation.

2.  Dev report có.

3.  Evidence có.

4.  Smoke có.

5.  QA handoff có nếu required.

6.  Phase exit accepted.

7.  Release handoff package được tạo.

**15.4. P0 Blocker**

FAIL nếu TECH-12 gọi Backlog Ready là Release Ready.

FAIL nếu TECH-12 gửi backlog chưa implemented sang TECH-10 như release-ready.

FAIL nếu TECH-12 mở Global Gateway.

**16. SOURCE-TO-BACKLOG-TO-HANDOFF FLOW**

**16.1. Flow chuẩn**

Flow chuẩn:

1.  TECH source-of-truth được xác định.

2.  Backlog Item Factory tạo draft backlog.

3.  Source-to-Backlog Matrix Resolver map source.

4.  Phase Dependency Matrix Resolver kiểm tra dependency.

5.  Evidence Requirement Resolver gắn evidence.

6.  Smoke Requirement Resolver gắn smoke.

7.  Owner Assignment Resolver gắn owner.

8.  Report Requirement Resolver gắn report requirement.

9.  Backlog Readiness Resolver kiểm tra Ready.

10. Backlog Blocker Resolver xử lý blocker.

11. Dev Task Breakdown Resolver chia task.

12. Phase Backlog Review Resolver kiểm tra toàn phase.

13. Backlog-to-Handoff Resolver tạo handoff package.

14. Backlog Change Control Resolver kiểm soát thay đổi nếu có.

15. Release Handoff Resolver bàn giao sang TECH-11.

**16.2. Flow khi thiếu source**

1.  Backlog draft được tạo.

2.  Source mapping không tìm thấy TECH reference.

3.  Backlog chuyển NEED_SOURCE_MAPPING.

4.  Không dependency review.

5.  Không readiness Ready.

6.  Không task breakdown.

7.  Không handoff dev.

8.  Route owner/source review.

**16.3. Flow khi dependency fail**

1.  Backlog đã source mapped.

2.  Dependency Matrix phát hiện upstream blocked.

3.  Backlog chuyển BLOCKED_BY_UPSTREAM.

4.  Có thể chuẩn bị planning-only nếu phù hợp.

5.  Không handoff release-level implementation.

6.  Chờ upstream pass.

**16.4. Flow khi thiếu evidence/smoke**

1.  Backlog đã có source và dependency.

2.  Evidence/smoke requirement chưa định nghĩa.

3.  Backlog chuyển NEED_EVIDENCE_SMOKE.

4.  Không Ready.

5.  Evidence/Smoke Resolver bổ sung.

6.  Readiness review lại.

**16.5. Flow khi backlog thay đổi sau handoff**

1.  Change requested.

2.  Impact review.

3.  Source/dependency/evidence/smoke/owner review.

4.  Change approved hoặc rejected.

5.  Nếu approved, cập nhật backlog.

6.  Cập nhật handoff.

7.  Notify TECH-11/dev/QA nếu đã gửi.

**17. PHASE DEPENDENCY CONTROL**

**17.1. Dependency PHASE 0**

PHASE 0 là nền cho toàn bộ hệ thống.

Nếu PHASE 0 chưa pass, các backlog high-risk ở các phase sau chỉ được planning-only.

Không được release-level implementation với:

1.  Payment.

2.  Order.

3.  Warehouse.

4.  Inventory.

5.  Recall.

6.  Sale Lock.

7.  AI response guard.

8.  Ads revenue.

9.  IVR outcome.

10. Admin override.

**17.2. Dependency PHASE 1 → PHASE 2**

Operational không được dùng Product/SKU/Recipe chưa source-mapped.

P0 Fail nếu recipe/formula chưa version mà Production Order snapshot.

**17.3. Dependency PHASE 2 → PHASE 3**

Commerce phụ thuộc Operational Sellable Gate, Warehouse/Inventory/Sale Lock/Recall.

P0 Fail nếu Commerce bán SKU/batch Operational blocked.

**17.4. Dependency PHASE 3 → PHASE 4**

AI Advisor phụ thuộc Commerce QuoteSnapshot, Order Draft, Official Order boundary, payment boundary.

P0 Fail nếu AI tự tính giá hoặc tự tạo order.

**17.5. Dependency PHASE 4 → PHASE 5**

Gateway phụ thuộc AI Final Response Guard, public/private boundary, claim guard.

P0 Fail nếu Gateway gửi response chưa guard.

**17.6. Dependency PHASE 5 → PHASE 7**

MC AI Live phụ thuộc Gateway, AI, Commerce và Ads-safe boundary.

P0 Fail nếu Live public/private routing chưa pass mà go-live.

**17.7. Dependency PHASE 3 → PHASE 6**

Ads phụ thuộc Verified Revenue từ Commerce.

P0 Fail nếu Ads dùng quote/cart/order draft/unpaid order làm revenue.

**17.8. Dependency PHASE 3 → PHASE 8**

IVR phụ thuộc Official Order, Core Order State Machine, Notification Owner.

P0 Fail nếu IVR gọi Quote/Cart/Order Draft hoặc tự gửi notification.

**17.9. Dependency PHASE 9**

Release/go-live/scale phụ thuộc TECH-10.

P0 Fail nếu Global Gateway mở khi evidence/smoke/sign-off/release decision chưa đủ.

**18. FAIL-SAFE BACKLOG CONTROL**

**18.1. Khi source unavailable**

Nếu không tìm được source:

1.  Backlog không Ready.

2.  Không handoff dev.

3.  Không task breakdown.

4.  Route Source Review.

**18.2. Khi dependency unavailable**

Nếu không xác định được dependency:

1.  Backlog không Ready.

2.  Có thể planning-only.

3.  Không release-level implementation.

4.  Route Dependency Review.

**18.3. Khi owner unavailable**

Nếu chưa có owner:

1.  Backlog không Ready.

2.  Không handoff.

3.  Route Owner Assignment.

**18.4. Khi evidence/smoke chưa rõ**

Nếu evidence/smoke chưa rõ:

1.  Backlog không Ready.

2.  Không handoff dev.

3.  Route Evidence/Smoke Requirement Resolver.

**18.5. Khi có P0 blocker**

Nếu có P0 blocker:

1.  Backlog Blocked.

2.  Phase Backlog Review fail.

3.  Không handoff TECH-11.

4.  Không TECH-10 release review.

5.  Không Global Gateway.

**18.6. Khi change control mở**

Nếu change control đang mở:

1.  Backlog không được handoff.

2.  Nếu đã handoff thì phải re-handoff.

3.  Dev/QA phải được cập nhật.

4.  Không dùng bản cũ như source hiện hành.

**19. COMMAND BOUNDARY**

**19.1. Command được phép trong TECH-12**

TECH-12 cho phép các command quản trị backlog:

1.  Create Backlog Draft.

2.  Map Source To Backlog.

3.  Review Dependency.

4.  Define Evidence Requirement.

5.  Define Smoke Requirement.

6.  Assign Owner.

7.  Define Report Requirement.

8.  Review Backlog Readiness.

9.  Open Backlog Blocker.

10. Resolve Backlog Blocker.

11. Create Dev Task Breakdown.

12. Review Phase Backlog.

13. Create Handoff Package.

14. Request Backlog Change.

15. Approve/Reject Backlog Change.

16. Prepare Release Handoff.

**19.2. Command bị cấm trong TECH-12**

TECH-12 không được phát sinh command:

1.  Write Production Code.

2.  Generate Copy-Paste Code.

3.  Create API Endpoint Detail.

4.  Create Database Migration Detail.

5.  Create UI Component Detail.

6.  Override Business Rule.

7.  Hardcode Runtime Policy.

8.  Mark Dev Ready.

9.  Mark Release Ready.

10. Mark Production Ready.

11. Mark Go-live Approved.

12. Open Global Gateway.

13. Skip TECH-11.

14. Skip TECH-10.

**19.3. P0 Blocker**

FAIL nếu TECH-12 được dùng như code generation document.

FAIL nếu TECH-12 mở release.

FAIL nếu TECH-12 bỏ qua TECH-11/TECH-10.

**20. QUERY BOUNDARY**

**20.1. Query được phép**

TECH-12 được phép truy vấn/đối chiếu:

1.  TECH source-of-truth.

2.  Backlog registry.

3.  Phase registry.

4.  Source mapping.

5.  Dependency matrix.

6.  Evidence requirement.

7.  Smoke requirement.

8.  Owner assignment.

9.  Blocker status.

10. Change control status.

11. Handoff status.

**20.2. Query bị hạn chế**

TECH-12 không được dùng:

1.  Dev claim làm source.

2.  Code cũ làm source nếu trái TECH mới.

3.  Tài liệu cũ làm source nếu trái TECH mới.

4.  Mock làm production truth.

5.  Dashboard làm source-of-truth.

6.  Local demo làm release evidence.

7.  “Có vẻ đúng” làm readiness.

**20.3. P0 Blocker**

FAIL nếu query từ code cũ thay source-of-truth.

FAIL nếu mock được dùng làm dependency pass thật.

FAIL nếu backlog readiness dựa trên cảm tính.

**21. P0 BLOCKER REGISTRY — PHẦN 3/4**

Các lỗi sau là P0 Blocker cấp lifecycle/state machine:

1.  Backlog không source nhưng Ready.

2.  Backlog source conflict nhưng handoff.

3.  Backlog thiếu Scope Out nhưng Ready.

4.  Backlog thiếu dependency nhưng Ready.

5.  Backlog thiếu owner nhưng Ready.

6.  Backlog thiếu evidence nhưng Ready.

7.  Backlog thiếu smoke nhưng Ready.

8.  Backlog thiếu report requirement nhưng Ready.

9.  Backlog downstream Ready khi upstream blocked.

10. Task breakdown làm mất source.

11. Task breakdown bỏ P0 blocker.

12. Task breakdown biến thành code snippet.

13. Evidence requirement bỏ high-risk audit.

14. Smoke requirement chỉ happy path cho critical backlog.

15. Owner assignment thiếu owner critical.

16. Change control sửa backlog âm thầm.

17. Handoff gửi backlog blocked sang TECH-11.

18. TECH-12 gọi Backlog Ready là Dev Ready.

19. TECH-12 gọi Backlog Ready là Release Ready.

20. TECH-12 bỏ TECH-11.

21. TECH-12 bỏ TECH-10.

22. TECH-12 mở Global Gateway.

23. Mock upstream làm production truth.

24. Tài liệu cũ thắng TECH mới.

25. Code cũ thắng TECH mới.

**22. SMOKE ĐỊNH HƯỚNG — PHẦN 3/4**

**TECH12-P3-SMK-001 — Backlog Lifecycle Source Missing**

Given backlog draft không có source  
When Backlog Lifecycle chạy  
Then backlog chuyển BACKLOG_NEED_SOURCE_MAPPING.

**TECH12-P3-SMK-002 — Source Conflict Blocks Handoff**

Given backlog có source conflict với code cũ  
When Source Mapping chạy  
Then backlog chuyển BACKLOG_SOURCE_CONFLICT và không handoff.

**TECH12-P3-SMK-003 — Dependency Fail Blocks Readiness**

Given downstream backlog phụ thuộc upstream blocked  
When Dependency Matrix chạy  
Then backlog chuyển READINESS_BLOCKED_BY_UPSTREAM.

**TECH12-P3-SMK-004 — Evidence Requirement Missing**

Given backlog high-risk thiếu evidence requirement  
When Readiness Resolver chạy  
Then backlog chuyển READINESS_NEED_EVIDENCE.

**TECH12-P3-SMK-005 — Smoke Requirement Missing**

Given backlog critical thiếu P0 smoke  
When Readiness Resolver chạy  
Then backlog chuyển READINESS_NEED_SMOKE.

**TECH12-P3-SMK-006 — Owner Missing**

Given backlog payment/revenue thiếu Commerce Owner  
When Owner Assignment chạy  
Then backlog chuyển OWNER_MISSING_CRITICAL_ROLE.

**TECH12-P3-SMK-007 — Task Breakdown Preserves Source**

Given backlog source-mapped  
When Dev Task Breakdown chạy  
Then mọi task con giữ source mapping.

**TECH12-P3-SMK-008 — Task Breakdown Rejects Code Snippet**

Given task breakdown biến thành “copy đoạn code này”  
When review chạy  
Then BREAKDOWN_REJECTED.

**TECH12-P3-SMK-009 — Change Control Required**

Given backlog đã handoff nhưng scope thay đổi  
When Change Control chạy  
Then CHANGE_REQUIRES_REHANDOFF.

**TECH12-P3-SMK-010 — Handoff Only To TECH-11**

Given backlog Ready  
When Release Handoff chạy  
Then status = HANDOFF_READY_FOR_TECH11, không Release Ready.

**TECH12-P3-SMK-011 — TECH-10 Required Later**

Given backlog đã handoff TECH-11  
When chưa implementation/evidence/smoke  
Then không được gửi TECH-10 như release-ready package.

**TECH12-P3-SMK-012 — Global Gateway Blocked**

Given backlog lifecycle hoàn tất nhưng chưa TECH-10 gate  
When gateway status xét  
Then Global Gateway vẫn BLOCKED.

**23. EVIDENCE PACKAGE — PHẦN 3/4**

PHẦN 3/4 yêu cầu evidence thiết kế gồm:

1.  Backlog Lifecycle State Model accepted.

2.  Dev Task State Machine accepted.

3.  Source Mapping State Model accepted.

4.  Dependency Matrix State Model accepted.

5.  Evidence Requirement State Model accepted.

6.  Smoke Requirement State Model accepted.

7.  Owner Assignment State Model accepted.

8.  Backlog Readiness State Model accepted.

9.  Backlog Blocker State Model accepted.

10. Task Breakdown State Model accepted.

11. Backlog-to-Handoff State Model accepted.

12. Change Control State Model accepted.

13. Release Handoff State Model accepted.

14. Source-to-Backlog-to-Handoff Flow accepted.

15. Phase Dependency Control accepted.

16. Fail-safe Backlog Control accepted.

17. Command Boundary accepted.

18. Query Boundary accepted.

19. P0 Blocker Registry accepted.

20. Smoke định hướng accepted.

**24. DONE GATE — PHẦN 3/4**

PHẦN 3/4 đạt Documentation Complete ở cấp lifecycle/state machine khi:

1.  Đã khóa Backlog Lifecycle State Model.

2.  Đã khóa Dev Task State Machine.

3.  Đã khóa Source Mapping State Model.

4.  Đã khóa Dependency Matrix State Model.

5.  Đã khóa Evidence Requirement State Model.

6.  Đã khóa Smoke Requirement State Model.

7.  Đã khóa Owner Assignment State Model.

8.  Đã khóa Backlog Readiness State Model.

9.  Đã khóa Backlog Blocker State Model.

10. Đã khóa Task Breakdown State Model.

11. Đã khóa Backlog-to-Handoff State Model.

12. Đã khóa Change Control State Model.

13. Đã khóa Release Handoff State Model.

14. Đã khóa Source-to-Backlog-to-Handoff Flow.

15. Đã khóa Phase Dependency Control.

16. Đã khóa Fail-safe Backlog Control.

17. Đã khóa Command Boundary.

18. Đã khóa Query Boundary.

19. Đã có P0 Blocker Registry.

20. Đã có Smoke định hướng.

21. Đã có Evidence Package.

22. Đã sẵn sàng chuyển sang PHẦN 4/4.

**25. FAIL GATE — PHẦN 3/4**

PHẦN 3/4 FAIL nếu:

1.  Thiếu Backlog Lifecycle State Model.

2.  Thiếu Dev Task State Machine.

3.  Thiếu Source Mapping State Model.

4.  Thiếu Dependency Matrix State Model.

5.  Thiếu Evidence Requirement State Model.

6.  Thiếu Smoke Requirement State Model.

7.  Thiếu Owner Assignment State Model.

8.  Thiếu Backlog Readiness State Model.

9.  Thiếu Blocker State Model.

10. Thiếu Task Breakdown State Model.

11. Thiếu Handoff State Model.

12. Thiếu Change Control State Model.

13. Thiếu Release Handoff State Model.

14. Cho backlog không source Ready.

15. Cho source conflict handoff.

16. Cho downstream Ready khi upstream blocked.

17. Cho task breakdown thành code snippet.

18. Cho change control bỏ evidence/smoke.

19. Cho handoff backlog blocked sang TECH-11.

20. Gọi Backlog Ready là Release Ready.

21. Bỏ qua TECH-11.

22. Bỏ qua TECH-10.

23. Mở Global Gateway từ TECH-12.

**26. RELEASE HANDOFF — SANG PHẦN 4/4**

PHẦN 3/4 bàn giao sang PHẦN 4/4 các nội dung đã khóa:

1.  Backlog Lifecycle.

2.  Dev Task State Machine.

3.  Source Mapping State Model.

4.  Dependency Matrix State Model.

5.  Evidence Requirement State Model.

6.  Smoke Requirement State Model.

7.  Owner Assignment State Model.

8.  Backlog Readiness State Model.

9.  Backlog Blocker State Model.

10. Task Breakdown State Model.

11. Backlog-to-Handoff State Model.

12. Change Control State Model.

13. Release Handoff State Model.

14. Source-to-Backlog-to-Handoff Flow.

15. Phase Dependency Control.

16. Fail-safe Backlog Control.

17. Command Boundary.

18. Query Boundary.

19. P0 Blocker Registry.

20. Smoke định hướng.

21. Evidence Package.

PHẦN 4/4 sẽ viết:

**FINAL PHASE BACKLOG MATRIX / DEV TASK BREAKDOWN PACK / EVIDENCE-SMOKE MATRIX / DONE GATE / FAIL GATE / RELEASE HANDOFF / TECH-12 FINAL CONCLUSION**

Trong đó phải khóa rõ:

1.  Final backlog matrix theo PHASE 0 → PHASE 9.

2.  Dev task breakdown pack cấp phase.

3.  Evidence matrix.

4.  Smoke matrix.

5.  Owner matrix.

6.  Dependency matrix.

7.  Blocked backlog matrix.

8.  Ready backlog matrix.

9.  Backlog handoff matrix sang TECH-11.

10. Release boundary sang TECH-10.

11. Final Done Gate.

12. Final Fail Gate.

13. Final Status Registry.

14. TECH-12 Final Conclusion.

**27. TRẠNG THÁI SAU PHẦN 3/4**

Sau PHẦN 3/4:

**TECH-12 = DOCUMENTATION IN PROGRESS**

PHẦN 1/4 đã khóa backlog principles.

PHẦN 2/4 đã khóa module contracts.

PHẦN 3/4 đã khóa backlog lifecycle, task state machine, source-to-backlog-to-handoff flow và phase dependency control.

Chưa được gọi là Documentation Complete.

Chưa được gọi là Backlog Ready.

Chưa được gọi là Dev Ready.

Chưa được gọi là Implementation Ready.

Chưa được gọi là Release Ready.

Chưa được gọi là Production Ready.

Chưa được gọi là Go-live Approved.

Global Gateway vẫn mặc định:

**BLOCKED**

**KẾT LUẬN PHẦN 3/4**

PHẦN 3/4 đã khóa vòng đời backlog cho TECH-12.

Các điểm trọng yếu đã được cố định:

1.  Backlog phải đi từ draft → source mapping → scope review → dependency review → owner/evidence/smoke/report requirement → readiness review → task breakdown → handoff.

2.  Backlog không source không được Ready.

3.  Source conflict phải được xử lý trước khi handoff.

4.  TECH mới thắng tài liệu cũ và code cũ.

5.  Dependency fail chặn downstream.

6.  Planning-only không phải production-ready.

7.  Evidence requirement là bắt buộc.

8.  Smoke requirement là bắt buộc.

9.  Owner assignment là bắt buộc.

10. Task breakdown không được làm mất source/P0/evidence/smoke.

11. Task breakdown không được biến thành code snippet rời rạc.

12. Change control bắt buộc nếu backlog thay đổi sau Ready hoặc sau handoff.

13. Backlog handoff chỉ được sang TECH-11 Dev Handoff Governance.

14. TECH-12 không gọi Backlog Ready là Dev Ready.

15. TECH-12 không gọi Backlog Ready là Release Ready.

16. TECH-12 không gửi backlog chưa implemented sang TECH-10 như release-ready package.

17. TECH-12 không mở Global Gateway.

18. PHASE 0 chặn toàn bộ high-risk phase nếu foundation chưa pass.

19. PHASE 2 chặn Commerce nếu Operational Sellable/Sale Lock/Recall chưa pass.

20. PHASE 3 chặn AI/Ads/IVR nếu QuoteSnapshot/Official Order/Verified Revenue chưa pass.

21. PHASE 5 chặn MC AI Live nếu Gateway/Final Response Guard chưa pass.

22. PHASE 9 và TECH-10 mới kiểm soát release/go-live/scale.

PHẦN 3/4 sẵn sàng bàn giao sang:

**PHẦN 4/4 — FINAL PHASE BACKLOG MATRIX / DEV TASK BREAKDOWN PACK / EVIDENCE-SMOKE MATRIX / DONE GATE / FAIL GATE / RELEASE HANDOFF / TECH-12 FINAL CONCLUSION**.

**PHẦN 4/4 — FINAL PHASE BACKLOG MATRIX / DEV TASK BREAKDOWN PACK / EVIDENCE-SMOKE MATRIX / DONE GATE / FAIL GATE / RELEASE HANDOFF / TECH-12 FINAL CONCLUSION**

**1. MỤC TIÊU PHẦN 4/4**

PHẦN 4/4 khóa bản cuối của **Phase Backlog Pack**.

PHẦN này xác định rõ:

1.  Final Phase Backlog Matrix theo PHASE 0 → PHASE 9.

2.  Dev Task Breakdown Pack cấp phase.

3.  Evidence Matrix.

4.  Smoke Matrix.

5.  Owner Matrix.

6.  Dependency Matrix.

7.  Blocked Backlog Matrix.

8.  Ready Backlog Matrix.

9.  Backlog Handoff Matrix sang TECH-11.

10. Release Boundary sang TECH-10.

11. Final Done Gate.

12. Final Fail Gate.

13. Final Status Registry.

14. TECH-12 Final Conclusion.

PHẦN 4/4 không viết code.

PHẦN 4/4 không thiết kế API chi tiết.

PHẦN 4/4 không thiết kế database chi tiết.

PHẦN 4/4 không thiết kế UI chi tiết.

PHẦN 4/4 chỉ khóa **backlog pack, task breakdown, evidence-smoke matrix và handoff governance**.

**2. FINAL BACKLOG PRINCIPLE**

TECH-12 khẳng định nguyên tắc cuối cùng:

**Backlog không phải code.**

**Backlog Ready không phải Dev Ready.**

**Backlog Handoff không phải Implementation Complete.**

**Implementation Complete không phải Release Ready.**

**Release Ready chỉ được xét bởi TECH-10.**

Một backlog chỉ hợp lệ khi có:

1.  Source-of-truth.

2.  Phase.

3.  Domain.

4.  Requirement summary.

5.  Scope In.

6.  Scope Out.

7.  Upstream dependency.

8.  Downstream handoff.

9.  P0 blocker.

10. Evidence required.

11. Smoke required.

12. Owner.

13. Report requirement.

14. Done Gate.

15. Fail Gate.

16. Initial status.

Nếu thiếu bất kỳ điểm cốt lõi nào:

**Backlog không READY.**

Nếu backlog chưa qua TECH-11:

**Backlog không DEV READY.**

Nếu chưa có implementation/evidence/smoke/QA/TECH-10:

**Backlog không RELEASE READY.**

**3. FINAL PHASE BACKLOG MATRIX — PHASE 0**

**PHASE 0 — FOUNDATION / RBAC / AUDIT / EVIDENCE / IDEMPOTENCY**

**3.1. Mục tiêu PHASE 0**

PHASE 0 tạo nền kiểm soát bắt buộc cho toàn bộ hệ thống.

Không có PHASE 0, các phase sau không đủ:

1.  Quyền.

2.  Actor.

3.  Audit.

4.  Evidence.

5.  Idempotency.

6.  Correlation.

7.  High-risk command guard.

8.  Admin override governance.

**3.2. Final Backlog Matrix PHASE 0**

| **Backlog ID** | **Backlog Name**                    | **Source-of-Truth**         | **Dependency**  | **Evidence Required**                                   | **Smoke Required**                         | **Initial Status**        |
|----------------|-------------------------------------|-----------------------------|-----------------|---------------------------------------------------------|--------------------------------------------|---------------------------|
| FND-BLG-001    | RBAC / Permission Foundation        | TECH-01                     | None            | Permission matrix, role mapping, denied-action evidence | User lacks permission → action blocked     | READY FOR TECH-11 HANDOFF |
| FND-BLG-002    | Actor Identity / System Actor       | TECH-01                     | FND-BLG-001     | Actor log, system actor reference                       | Action must identify actor                 | READY FOR TECH-11 HANDOFF |
| FND-BLG-003    | Audit Trail Foundation              | TECH-01                     | FND-BLG-001/002 | Audit log, before/after state                           | High-risk action creates audit             | READY FOR TECH-11 HANDOFF |
| FND-BLG-004    | Evidence Registry Foundation        | TECH-01 / TECH-10           | FND-BLG-003     | Evidence ID, requirement mapping, environment           | Evidence missing → gate blocked            | READY FOR TECH-11 HANDOFF |
| FND-BLG-005    | Idempotency Foundation              | TECH-01                     | FND-BLG-003     | Idempotency key/result log                              | Duplicate command does not double action   | READY FOR TECH-11 HANDOFF |
| FND-BLG-006    | Correlation ID / Trace Context      | TECH-01                     | FND-BLG-003/004 | Correlation trace across actions                        | Trace can link request → action → evidence | READY FOR TECH-11 HANDOFF |
| FND-BLG-007    | High-Risk Command Guard             | TECH-01 / TECH-10           | FND-BLG-001-006 | Command guard evidence                                  | High-risk command blocked if missing audit | READY FOR TECH-11 HANDOFF |
| FND-BLG-008    | Admin Override Governance           | TECH-01 / TECH-10           | FND-BLG-001-007 | Actor, reason, evidence, audit                          | Override without reason blocked            | READY FOR TECH-11 HANDOFF |
| FND-BLG-009    | Source-of-Truth Registry Foundation | TECH-00 / TECH-10 / TECH-11 | None            | Active source registry, legacy boundary                 | Code cũ khác TECH mới → TECH mới thắng     | READY FOR TECH-11 HANDOFF |
| FND-BLG-010    | Foundation Smoke / Evidence Pack    | TECH-10 / TECH-11           | FND-BLG-001-009 | Smoke output, audit samples                             | Foundation smoke pass/fail                 | READY FOR TECH-11 HANDOFF |

**3.3. PHASE 0 P0 Blocker**

FAIL nếu:

1.  High-risk command không audit.

2.  Admin override không reason/evidence/audit.

3.  Evidence không requirement mapping.

4.  Permission không chặn action sai quyền.

5.  Idempotency không chặn double action.

6.  Phase sau dùng high-risk action khi PHASE 0 chưa pass.

**4. FINAL PHASE BACKLOG MATRIX — PHASE 1**

**PHASE 1 — PRODUCT / SKU / RECIPE / PRODUCT ACTIVATION**

**4.1. Mục tiêu PHASE 1**

PHASE 1 tạo nền Product / SKU / Recipe / Product Activation.

PHASE này bảo đảm:

1.  Product Master rõ.

2.  SKU Master rõ.

3.  Recipe/Formula version rõ.

4.  Product Activation Guard rõ.

5.  Product Active không bị hiểu là Sellable.

6.  Public product name đúng.

7.  Internal SKU code không public sai kênh.

**4.2. Final Backlog Matrix PHASE 1**

| **Backlog ID** | **Backlog Name**                    | **Source-of-Truth**                   | **Dependency**  | **Evidence Required**             | **Smoke Required**                               | **Initial Status**         |
|----------------|-------------------------------------|---------------------------------------|-----------------|-----------------------------------|--------------------------------------------------|----------------------------|
| PRD-BLG-001    | Product Master Governance           | TECH-02                               | PHASE 0         | Product master evidence           | Product exists with required governance fields   | BLOCKED UNTIL PHASE 0 PASS |
| PRD-BLG-002    | SKU Master Governance               | TECH-02                               | PRD-BLG-001     | SKU registry evidence             | SKU maps to product correctly                    | BLOCKED UNTIL PHASE 0 PASS |
| PRD-BLG-003    | Recipe / Formula Version Governance | TECH-02                               | PRD-BLG-001/002 | Formula version evidence          | Formula version required before production usage | BLOCKED UNTIL PHASE 0 PASS |
| PRD-BLG-004    | Formula Kind / Version Lock         | TECH-02                               | PRD-BLG-003     | Formula kind/version audit        | Formula kind/version immutable in snapshot       | BLOCKED UNTIL PHASE 0 PASS |
| PRD-BLG-005    | Product Activation Guard            | TECH-02                               | PRD-BLG-001-004 | Activation decision evidence      | Product cannot activate without required data    | BLOCKED UNTIL PHASE 0 PASS |
| PRD-BLG-006    | Product Active Not Sellable Rule    | TECH-02 / TECH-03 / TECH-04           | PRD-BLG-005     | Active vs sellable test evidence  | Product Active ≠ Sellable                        | BLOCKED UNTIL PHASE 0 PASS |
| PRD-BLG-007    | Public Product Name Policy          | TECH-02 / TECH-05 / TECH-06 / TECH-08 | PRD-BLG-002     | Public name evidence              | Public-facing name is full approved name         | BLOCKED UNTIL PHASE 0 PASS |
| PRD-BLG-008    | Internal SKU Code Privacy           | TECH-02 / TECH-05                     | PRD-BLG-002     | Internal/public boundary evidence | Internal SKU code not exposed to customer        | BLOCKED UNTIL PHASE 0 PASS |
| PRD-BLG-009    | Product Knowledge Approval          | TECH-02 / TECH-05                     | PRD-BLG-001-008 | Approved knowledge evidence       | AI cannot use unapproved product knowledge       | BLOCKED UNTIL PHASE 0 PASS |
| PRD-BLG-010    | Product/SKU/Recipe Smoke Pack       | TECH-10 / TECH-11                     | PRD-BLG-001-009 | Phase smoke output                | Product/SKU/Recipe smoke pass                    | BLOCKED UNTIL PHASE 0 PASS |

**4.3. PHASE 1 P0 Blocker**

FAIL nếu:

1.  Product Active bị hiểu là Sellable.

2.  SKU nội bộ public ra khách.

3.  Product knowledge chưa approved nhưng AI/Gateway/Live dùng.

4.  Formula không version nhưng Production Order snapshot.

5.  Product activation không có evidence/audit.

**5. FINAL PHASE BACKLOG MATRIX — PHASE 2**

**PHASE 2 — OPERATIONAL CORE**

**5.1. Mục tiêu PHASE 2**

PHASE 2 tạo nền Operational Core:

1.  Sản xuất.

2.  Kho.

3.  Tồn kho.

4.  QC.

5.  Batch release.

6.  Traceability.

7.  Public trace.

8.  Recall.

9.  Sale Lock.

**5.2. Final Backlog Matrix PHASE 2**

| **Backlog ID** | **Backlog Name**                         | **Source-of-Truth**         | **Dependency**  | **Evidence Required**                     | **Smoke Required**                           | **Initial Status**                 |
|----------------|------------------------------------------|-----------------------------|-----------------|-------------------------------------------|----------------------------------------------|------------------------------------|
| OPS-BLG-001    | Source Origin / Raw Intake Governance    | TECH-03                     | PHASE 0/1       | Intake evidence, source verification      | Unverified source blocks intake              | BLOCKED UNTIL PHASE 0/1 PASS       |
| OPS-BLG-002    | Raw QC / Raw Lot Readiness               | TECH-03                     | OPS-BLG-001     | QC result, mark-ready evidence            | QC_PASS ≠ READY_FOR_PRODUCTION               | BLOCKED UNTIL PHASE 0/1 PASS       |
| OPS-BLG-003    | Recipe Snapshot Into Production Order    | TECH-02 / TECH-03           | PRD-BLG-003/004 | Snapshot evidence                         | PO requires formula kind/version snapshot    | BLOCKED UNTIL PHASE 1 PASS         |
| OPS-BLG-004    | Material Request / Issue / Receipt       | TECH-03                     | OPS-BLG-002/003 | Ledger evidence, issue/receipt evidence   | Issue decrements raw stock once              | BLOCKED UNTIL PHASE 1 PASS         |
| OPS-BLG-005    | Batch Execution / Process Step Control   | TECH-03                     | OPS-BLG-004     | Process step evidence                     | Process steps must complete in allowed order | BLOCKED UNTIL PHASE 1 PASS         |
| OPS-BLG-006    | Packaging / QR / Print Control           | TECH-03                     | OPS-BLG-005     | QR/print evidence                         | Failed/void QR not public valid              | BLOCKED UNTIL PHASE 1 PASS         |
| OPS-BLG-007    | QC Inspection / Batch Release            | TECH-03                     | OPS-BLG-005/006 | QC/release evidence                       | QC_PASS ≠ RELEASED                           | BLOCKED UNTIL PHASE 1 PASS         |
| OPS-BLG-008    | Warehouse Receipt / Finished Goods Stock | TECH-03                     | OPS-BLG-007     | Warehouse receipt evidence                | Only RELEASED batch can enter warehouse      | BLOCKED UNTIL PHASE 1 PASS         |
| OPS-BLG-009    | Inventory Ledger Append-only             | TECH-03 / TECH-01           | OPS-BLG-004/008 | Ledger append-only evidence               | Ledger correction does not mutate history    | BLOCKED UNTIL PHASE 0 PASS         |
| OPS-BLG-010    | Traceability / Public Trace Whitelist    | TECH-03                     | OPS-BLG-006-009 | Trace evidence, public whitelist evidence | Public trace exposes whitelist only          | BLOCKED UNTIL PHASE 1 PASS         |
| OPS-BLG-011    | Recall / Sale Lock Control               | TECH-03 / TECH-04 / TECH-10 | OPS-BLG-010     | Recall/sale lock evidence                 | Recall/Sale Lock blocks downstream           | BLOCKED UNTIL PHASE 1 PASS         |
| OPS-BLG-012    | Operational Smoke / Evidence Pack        | TECH-10 / TECH-11           | OPS-BLG-001-011 | E2E operational smoke output              | Operational chain pass/fail                  | BLOCKED UNTIL OPS-BLG-001-011 PASS |

**5.3. PHASE 2 P0 Blocker**

FAIL nếu:

1.  RAW_LOT QC_PASS bị hiểu là READY_FOR_PRODUCTION.

2.  Raw lot chưa READY_FOR_PRODUCTION vẫn issue.

3.  Material Issue không phải điểm giảm tồn nguyên liệu chính.

4.  Material Receipt giảm tồn lần hai.

5.  Batch QC_PASS bị hiểu là RELEASED.

6.  Warehouse nhận batch chưa RELEASED.

7.  Public Trace không whitelist-only.

8.  Recall/Sale Lock không chặn downstream.

**6. FINAL PHASE BACKLOG MATRIX — PHASE 3**

**PHASE 3 — COMMERCE RUNTIME**

**6.1. Mục tiêu PHASE 3**

PHASE 3 xây nền Commerce Runtime:

1.  Sellable Gate.

2.  QuoteSnapshot.

3.  Cart.

4.  Order Draft.

5.  Customer Confirmation.

6.  Official Order.

7.  Payment.

8.  COD/Shipping.

9.  Verified Revenue.

10. Program/Member/Diamond benefit runtime.

**6.2. Final Backlog Matrix PHASE 3**

| **Backlog ID** | **Backlog Name**                                    | **Source-of-Truth**                   | **Dependency**  | **Evidence Required**          | **Smoke Required**                       | **Initial Status**                 |
|----------------|-----------------------------------------------------|---------------------------------------|-----------------|--------------------------------|------------------------------------------|------------------------------------|
| COM-BLG-001    | Sellable Gate From Operational                      | TECH-03 / TECH-04                     | PHASE 2         | Sellable decision evidence     | Operational blocked → Commerce blocked   | BLOCKED UNTIL PHASE 2 PASS         |
| COM-BLG-002    | QuoteSnapshot As Only Final Price Source            | TECH-04 / TECH-05 / TECH-06 / TECH-08 | COM-BLG-001     | QuoteSnapshot evidence         | AI/Gateway/Live cannot self-price        | BLOCKED UNTIL COM-BLG-001 PASS     |
| COM-BLG-003    | Cart Not Order Boundary                             | TECH-04                               | COM-BLG-002     | Cart state evidence            | Cart cannot create order_code            | BLOCKED UNTIL COM-BLG-002 PASS     |
| COM-BLG-004    | Order Draft Not Official Order Boundary             | TECH-04 / TECH-05                     | COM-BLG-002/003 | Draft evidence                 | Draft cannot trigger IVR/payment/revenue | BLOCKED UNTIL COM-BLG-002 PASS     |
| COM-BLG-005    | Customer Confirmation To Official Order             | TECH-04                               | COM-BLG-004     | Customer confirmation evidence | CONFIRMED creates official order         | BLOCKED UNTIL COM-BLG-004 PASS     |
| COM-BLG-006    | Official Order State Machine                        | TECH-04 / TECH-09                     | COM-BLG-005     | Order state evidence           | Official order state transitions valid   | BLOCKED UNTIL COM-BLG-005 PASS     |
| COM-BLG-007    | Payment Confirmation Boundary                       | TECH-04                               | COM-BLG-006     | Payment confirmation evidence  | Image transfer ≠ PAID                    | BLOCKED UNTIL COM-BLG-006 PASS     |
| COM-BLG-008    | COD / Delivery / Shipping Boundary                  | TECH-04                               | COM-BLG-006/007 | COD/delivery evidence          | COD pending ≠ revenue                    | BLOCKED UNTIL COM-BLG-006 PASS     |
| COM-BLG-009    | Verified Revenue Resolver                           | TECH-04 / TECH-07                     | COM-BLG-007/008 | Verified revenue evidence      | Ads only uses Verified Revenue           | BLOCKED UNTIL COM-BLG-007/008 PASS |
| COM-BLG-010    | Program / Member / Diamond Runtime Benefit          | TECH-04 / TECH-05 / TECH-07           | COM-BLG-002     | Runtime benefit evidence       | Benefit from runtime, no hardcode        | BLOCKED UNTIL COM-BLG-002 PASS     |
| COM-BLG-011    | Bank Account Registry / No Hardcode Payment Account | TECH-04                               | COM-BLG-007     | Bank registry evidence         | Payment account not hardcoded            | BLOCKED UNTIL COM-BLG-007 PASS     |
| COM-BLG-012    | Commerce Smoke / Evidence Pack                      | TECH-10 / TECH-11                     | COM-BLG-001-011 | Commerce smoke output          | Quote/order/payment/revenue smoke pass   | BLOCKED UNTIL COM-BLG-001-011 PASS |

**6.3. PHASE 3 P0 Blocker**

FAIL nếu:

1.  Operational blocked nhưng Commerce vẫn bán.

2.  Không QuoteSnapshot mà vẫn final price.

3.  Cart bị hiểu là Order.

4.  Order Draft bị hiểu là Official Order.

5.  CustomerConfirmation chưa CONFIRMED mà tạo official order.

6.  Ảnh chuyển khoản được coi là PAID.

7.  COD pending được coi là Verified Revenue.

8.  Verified Revenue không đến từ Commerce.

9.  Payment account hardcode.

**7. FINAL PHASE BACKLOG MATRIX — PHASE 4**

**PHASE 4 — AI ADVISOR RUNTIME**

**7.1. Mục tiêu PHASE 4**

PHASE 4 xây AI Advisor Runtime.

AI Advisor là lớp tư vấn, diễn giải, gợi ý và hỗ trợ chốt đơn có kiểm soát.

AI không phải nguồn sự thật nghiệp vụ.

**7.2. Final Backlog Matrix PHASE 4**

| **Backlog ID** | **Backlog Name**                    | **Source-of-Truth**         | **Dependency**  | **Evidence Required**        | **Smoke Required**                         | **Initial Status**                 |
|----------------|-------------------------------------|-----------------------------|-----------------|------------------------------|--------------------------------------------|------------------------------------|
| AIA-BLG-001    | Product Knowledge Resolver          | TECH-02 / TECH-05           | PHASE 1         | Approved knowledge evidence  | AI only uses approved knowledge            | BLOCKED UNTIL PHASE 1 PASS         |
| AIA-BLG-002    | Claim Guard / Public Wording Policy | TECH-05                     | AIA-BLG-001     | Claim guard evidence         | Unapproved claim blocked                   | BLOCKED UNTIL AIA-BLG-001 PASS     |
| AIA-BLG-003    | Customer Memory Resolver            | TECH-05                     | PHASE 0/3       | Customer memory evidence     | Private memory not public                  | BLOCKED UNTIL PHASE 0/3 PASS       |
| AIA-BLG-004    | QuoteSnapshot Consumption           | TECH-04 / TECH-05           | COM-BLG-002     | Quote consumption evidence   | AI cannot self-price                       | BLOCKED UNTIL COM-BLG-002 PASS     |
| AIA-BLG-005    | Order Draft Handoff                 | TECH-04 / TECH-05           | COM-BLG-004     | Order draft handoff evidence | AI cannot create official order            | BLOCKED UNTIL COM-BLG-004 PASS     |
| AIA-BLG-006    | Final Response Guard                | TECH-05 / TECH-06           | AIA-BLG-001-005 | Guard evidence               | Response not sent if guard fail            | BLOCKED UNTIL AIA-BLG-001-005 PASS |
| AIA-BLG-007    | Public/Private Data Boundary        | TECH-05 / TECH-06           | AIA-BLG-006     | Privacy evidence             | Private data blocked in public             | BLOCKED UNTIL AIA-BLG-006 PASS     |
| AIA-BLG-008    | Product Name Public Policy          | TECH-02 / TECH-05 / TECH-08 | AIA-BLG-001/006 | Public wording evidence      | Full public product name required          | BLOCKED UNTIL AIA-BLG-006 PASS     |
| AIA-BLG-009    | Runtime Unavailable Fail-safe       | TECH-05 / TECH-10           | AIA-BLG-004-007 | Fail-safe evidence           | Runtime unavailable → no guessing          | BLOCKED UNTIL AIA-BLG-004-007 PASS |
| AIA-BLG-010    | AI Advisor Smoke / Evidence Pack    | TECH-10 / TECH-11           | AIA-BLG-001-009 | AI smoke output              | AI no-price/no-order/no-payment smoke pass | BLOCKED UNTIL AIA-BLG-001-009 PASS |

**7.3. PHASE 4 P0 Blocker**

FAIL nếu:

1.  AI tự tính giá.

2.  AI tự tạo official order.

3.  AI tự xác nhận payment.

4.  AI tự xác nhận Verified Revenue.

5.  AI bán SKU not sellable/Sale Lock/Recall.

6.  AI dùng claim chưa approved.

7.  AI public dữ liệu private.

8.  AI nói chữa bệnh/điều trị/thay thuốc/cam kết hiệu quả y khoa.

**8. FINAL PHASE BACKLOG MATRIX — PHASE 5**

**PHASE 5 — FACEBOOK GATEWAY / MESSENGER / CHANNEL DELIVERY**

**8.1. Mục tiêu PHASE 5**

PHASE 5 xây Facebook Gateway / Messenger / Channel Delivery.

Gateway là lớp điều phối kênh và delivery, không phải AI, Commerce hoặc Payment.

**8.2. Final Backlog Matrix PHASE 5**

| **Backlog ID** | **Backlog Name**                     | **Source-of-Truth** | **Dependency**         | **Evidence Required**         | **Smoke Required**                         | **Initial Status**                  |
|----------------|--------------------------------------|---------------------|------------------------|-------------------------------|--------------------------------------------|-------------------------------------|
| GW-BLG-001     | Channel Identity / Page Context      | TECH-06             | PHASE 0                | Page/channel context evidence | Channel context resolved                   | BLOCKED UNTIL PHASE 0 PASS          |
| GW-BLG-002     | Public Comment Boundary              | TECH-06             | GW-BLG-001             | Public/private evidence       | Public comment no private data             | BLOCKED UNTIL GW-BLG-001 PASS       |
| GW-BLG-003     | Comment-to-Messenger Routing         | TECH-06             | GW-BLG-002             | Handoff evidence              | Price/buy/deep consult routes private      | BLOCKED UNTIL GW-BLG-002 PASS       |
| GW-BLG-004     | Messenger Private Context Handoff    | TECH-06 / TECH-05   | GW-BLG-003/AIA-BLG-006 | Messenger context evidence    | After handoff conversation private         | BLOCKED UNTIL GW-BLG-003 + AIA PASS |
| GW-BLG-005     | Final Response Guard Enforcement     | TECH-05 / TECH-06   | AIA-BLG-006            | Guard enforcement evidence    | Unguarded response not sent                | BLOCKED UNTIL AIA-BLG-006 PASS      |
| GW-BLG-006     | Typing Indicator / Response Pacing   | TECH-06             | GW-BLG-005             | Pacing evidence               | Gateway does not reply instantly like bot  | BLOCKED UNTIL GW-BLG-005 PASS       |
| GW-BLG-007     | Rate Limit / Anti-Spam               | TECH-06             | GW-BLG-001             | Rate-limit evidence           | Rate limit blocks spam                     | BLOCKED UNTIL GW-BLG-001 PASS       |
| GW-BLG-008     | Moderation / Troll / Complaint Split | TECH-06 / TECH-08   | GW-BLG-002             | Moderation evidence           | Troll not Messenger; complaint routed CSKH | BLOCKED UNTIL GW-BLG-002 PASS       |
| GW-BLG-009     | Suppression / Opt-out                | TECH-06 / TECH-10   | GW-BLG-007             | Suppression evidence          | Suppressed user not messaged               | BLOCKED UNTIL GW-BLG-007 PASS       |
| GW-BLG-010     | Gateway Smoke / Evidence Pack        | TECH-10 / TECH-11   | GW-BLG-001-009         | Gateway smoke output          | Public/private/rate/moderation smoke pass  | BLOCKED UNTIL GW-BLG-001-009 PASS   |

**8.3. PHASE 5 P0 Blocker**

FAIL nếu:

1.  Gateway public dữ liệu private.

2.  Gateway public giá cá nhân/order info sai rule.

3.  Gateway gửi response chưa qua Final Response Guard.

4.  Hỏi giá/mua/chốt trong public không kéo Messenger/private.

5.  Troll/malicious bị kéo Messenger sai policy.

6.  Complaint thật bị xử như troll.

7.  Gateway giả mạo người thật.

**9. FINAL PHASE BACKLOG MATRIX — PHASE 6**

**PHASE 6 — ADS MEASUREMENT**

**9.1. Mục tiêu PHASE 6**

PHASE 6 xây Ads Measurement / Attribution / ROAS / Scale Gate.

Ads chỉ dùng Verified Revenue từ Commerce.

**9.2. Final Backlog Matrix PHASE 6**

| **Backlog ID** | **Backlog Name**                                 | **Source-of-Truth** | **Dependency**          | **Evidence Required**   | **Smoke Required**                        | **Initial Status**                 |
|----------------|--------------------------------------------------|---------------------|-------------------------|-------------------------|-------------------------------------------|------------------------------------|
| ADS-BLG-001    | Event Taxonomy / Funnel Signal Boundary          | TECH-07             | PHASE 0/5               | Event taxonomy evidence | Funnel signal ≠ revenue                   | BLOCKED UNTIL PHASE 0 PASS         |
| ADS-BLG-002    | Pixel / CAPI Dedup / Idempotency                 | TECH-07 / TECH-01   | ADS-BLG-001/FND-BLG-005 | Dedup evidence          | Duplicate event not double counted        | BLOCKED UNTIL PHASE 0 PASS         |
| ADS-BLG-003    | Attribution Source Resolver                      | TECH-07             | ADS-BLG-001/002         | Attribution evidence    | Attribution uses valid source/bind        | BLOCKED UNTIL ADS-BLG-002 PASS     |
| ADS-BLG-004    | Verified Revenue Consumption                     | TECH-04 / TECH-07   | COM-BLG-009             | Revenue source evidence | Ads only consumes Verified Revenue        | BLOCKED UNTIL COM-BLG-009 PASS     |
| ADS-BLG-005    | Exclusion Rules: Quote/Cart/Draft/Unpaid/Pending | TECH-04 / TECH-07   | ADS-BLG-004             | Exclusion evidence      | Quote/cart/draft/unpaid/pending excluded  | BLOCKED UNTIL ADS-BLG-004 PASS     |
| ADS-BLG-006    | CPA / AOV / ROAS Computation Boundary            | TECH-07             | ADS-BLG-004/005         | Computation evidence    | ROAS computed from verified revenue only  | BLOCKED UNTIL ADS-BLG-005 PASS     |
| ADS-BLG-007    | Data Quality Gate                                | TECH-07 / TECH-10   | ADS-BLG-002-006         | Data quality evidence   | Data Quality fail blocks scale            | BLOCKED UNTIL ADS-BLG-006 PASS     |
| ADS-BLG-008    | Scale Gate / Owner Approval                      | TECH-07 / TECH-10   | ADS-BLG-007             | Owner approval evidence | No owner approval → no scale              | BLOCKED UNTIL ADS-BLG-007 PASS     |
| ADS-BLG-009    | Sale Lock / Recall / Suppression Blocks Scale    | TECH-03 / TECH-07   | OPS-BLG-011/ADS-BLG-008 | Suppression evidence    | Sale Lock/Recall blocks scale             | BLOCKED UNTIL OPS-BLG-011 PASS     |
| ADS-BLG-010    | Ads Smoke / Evidence Pack                        | TECH-10 / TECH-11   | ADS-BLG-001-009         | Ads smoke output        | No fake revenue / no bad scale smoke pass | BLOCKED UNTIL ADS-BLG-001-009 PASS |

**9.3. PHASE 6 P0 Blocker**

FAIL nếu:

1.  Ads dùng quote/cart/order draft làm revenue.

2.  Unpaid order/payment pending/COD pending được tính revenue.

3.  Verified Revenue không từ Commerce.

4.  Pixel/CAPI double count.

5.  Scale khi Data Quality fail.

6.  Scale khi Sale Lock/Recall/Suppression active.

7.  Scale chỉ vì ROAS đẹp nhưng evidence chưa accepted.

**10. FINAL PHASE BACKLOG MATRIX — PHASE 7**

**PHASE 7 — MC AI LIVE**

**10.1. Mục tiêu PHASE 7**

PHASE 7 xây MC AI Live / Live Script Runtime / Live Sales Control.

MC AI Live không phải nguồn sự thật nghiệp vụ.

**10.2. Final Backlog Matrix PHASE 7**

| **Backlog ID** | **Backlog Name**                   | **Source-of-Truth** | **Dependency**           | **Evidence Required**       | **Smoke Required**                         | **Initial Status**                  |
|----------------|------------------------------------|---------------------|--------------------------|-----------------------------|--------------------------------------------|-------------------------------------|
| LIVE-BLG-001   | Live Session Context Resolver      | TECH-08             | PHASE 5                  | Live session evidence       | Session context resolved                   | BLOCKED UNTIL PHASE 5 PASS          |
| LIVE-BLG-002   | Live Script Runtime                | TECH-08             | LIVE-BLG-001             | Script runtime evidence     | Script loaded from approved source         | BLOCKED UNTIL LIVE-BLG-001 PASS     |
| LIVE-BLG-003   | Script Guard / Claim Guard         | TECH-05 / TECH-08   | AIA-BLG-002/LIVE-BLG-002 | Guard evidence              | Unguarded script blocked                   | BLOCKED UNTIL AIA-BLG-002 PASS      |
| LIVE-BLG-004   | Live Comment Classifier            | TECH-06 / TECH-08   | GW-BLG-008               | Comment classifier evidence | Price/buy/troll/complaint classified       | BLOCKED UNTIL GW-BLG-008 PASS       |
| LIVE-BLG-005   | Comment-to-Messenger Coordination  | TECH-06 / TECH-08   | GW-BLG-003/004           | Handoff evidence            | Public reply + Messenger after handoff     | BLOCKED UNTIL GW-BLG-004 PASS       |
| LIVE-BLG-006   | Product/Price Boundary In Live     | TECH-04 / TECH-08   | COM-BLG-002              | Price boundary evidence     | Live cannot self-price                     | BLOCKED UNTIL COM-BLG-002 PASS      |
| LIVE-BLG-007   | Troll / Abuse / Malicious Handling | TECH-06 / TECH-08   | GW-BLG-008               | Moderation evidence         | Troll not pulled to Messenger              | BLOCKED UNTIL GW-BLG-008 PASS       |
| LIVE-BLG-008   | Complaint / CSKH / Quality Route   | TECH-06 / TECH-08   | GW-BLG-008               | Complaint route evidence    | Complaint not treated as troll             | BLOCKED UNTIL GW-BLG-008 PASS       |
| LIVE-BLG-009   | Ads-safe Live Signal Boundary      | TECH-07 / TECH-08   | ADS-BLG-001/004          | Signal boundary evidence    | Live signal not revenue/ROAS               | BLOCKED UNTIL ADS-BLG-004 PASS      |
| LIVE-BLG-010   | MC AI Live Smoke / Evidence Pack   | TECH-10 / TECH-11   | LIVE-BLG-001-009         | Live smoke output           | Live script/comment/suppression smoke pass | BLOCKED UNTIL LIVE-BLG-001-009 PASS |

**10.3. PHASE 7 P0 Blocker**

FAIL nếu:

1.  MC AI Live tự báo giá.

2.  MC AI Live tự tạo order.

3.  MC AI Live tự xác nhận payment/revenue.

4.  Live signal dùng làm ROAS.

5.  Script chưa guard vẫn dùng.

6.  Claim chưa approved vẫn nói.

7.  Troll/malicious bị kéo Messenger sai policy.

8.  Complaint thật bị xử như troll.

**11. FINAL PHASE BACKLOG MATRIX — PHASE 8**

**PHASE 8 — IVR ORDER CONFIRMATION**

**11.1. Mục tiêu PHASE 8**

PHASE 8 xây IVR Order Confirmation.

IVR chỉ xử lý Official Order đủ điều kiện theo Commerce.

IVR không gọi đại trà và không xác nhận payment/revenue.

**11.2. Final Backlog Matrix PHASE 8**

| **Backlog ID** | **Backlog Name**                            | **Source-of-Truth**         | **Dependency**                        | **Evidence Required**      | **Smoke Required**                               | **Initial Status**                            |
|----------------|---------------------------------------------|-----------------------------|---------------------------------------|----------------------------|--------------------------------------------------|-----------------------------------------------|
| IVR-BLG-001    | IVR Eligibility Resolver                    | TECH-09                     | COM-BLG-006                           | Eligibility evidence       | Only eligible official order enters IVR          | BLOCKED UNTIL COM-BLG-006 PASS                |
| IVR-BLG-002    | Customer Trust / Existing Trusted Exclusion | TECH-09                     | IVR-BLG-001 / TECH-05 Customer Memory | Trust evidence             | Trusted customer not called đại trà              | BLOCKED UNTIL IVR-BLG-001 PASS                |
| IVR-BLG-003    | Official Order Only Boundary                | TECH-04 / TECH-09           | COM-BLG-006                           | Official order evidence    | Quote/cart/draft cannot enter IVR                | BLOCKED UNTIL COM-BLG-006 PASS                |
| IVR-BLG-004    | Phone Validation / Invalid Phone            | TECH-09                     | IVR-BLG-003                           | Phone validation evidence  | Invalid phone ≠ no answer                        | BLOCKED UNTIL IVR-BLG-003 PASS                |
| IVR-BLG-005    | Call Attempt Policy                         | TECH-09                     | IVR-BLG-001/004                       | Attempt policy evidence    | 2 attempts baseline; spacing respected           | BLOCKED UNTIL IVR-BLG-004 PASS                |
| IVR-BLG-006    | Outcome Classification                      | TECH-09                     | IVR-BLG-005                           | Outcome evidence           | Confirm/cancel/no answer/technical separated     | BLOCKED UNTIL IVR-BLG-005 PASS                |
| IVR-BLG-007    | Customer Confirm / Cancel / Need Support    | TECH-09                     | IVR-BLG-006                           | Keypress/outcome evidence  | Confirm ≠ PAID; cancel ≠ no answer               | BLOCKED UNTIL IVR-BLG-006 PASS                |
| IVR-BLG-008    | No Answer / Max Attempts                    | TECH-09                     | IVR-BLG-005/006                       | No answer evidence         | No answer max only handoff Core                  | BLOCKED UNTIL IVR-BLG-006 PASS                |
| IVR-BLG-009    | Core Order State / Notification Handoff     | TECH-04 / TECH-09           | COM-BLG-006 / IVR-BLG-006-008         | Core/notification evidence | Notification only after Core cancellation        | BLOCKED UNTIL COM-BLG-006 + IVR OUTCOMES PASS |
| IVR-BLG-010    | IVR Evidence / Audit / Smoke Pack           | TECH-09 / TECH-10 / TECH-11 | IVR-BLG-001-009                       | IVR smoke output           | IVR official/no answer/cancel/privacy smoke pass | BLOCKED UNTIL IVR-BLG-001-009 PASS            |

**11.3. PHASE 8 P0 Blocker**

FAIL nếu:

1.  IVR gọi mọi khách.

2.  IVR gọi Quote/Cart/Order Draft.

3.  IVR tự tạo order.

4.  IVR tự hủy đơn.

5.  IVR tự gửi notification.

6.  IVR confirmation bị hiểu là PAID.

7.  Invalid phone/no answer/customer cancel/technical failure bị trộn.

8.  Notification gửi trước Core Order State Machine hủy chính thức.

**12. FINAL PHASE BACKLOG MATRIX — PHASE 9**

**PHASE 9 — GLOBAL SMOKE / UAT / RELEASE GATEWAY**

**12.1. Mục tiêu PHASE 9**

PHASE 9 xây Global Release Governance:

1.  Evidence.

2.  Smoke.

3.  UAT.

4.  Owner sign-off.

5.  P0 blocker.

6.  Cross-tech dependency.

7.  Privacy/security.

8.  Rollback/fallback.

9.  Monitoring/alert.

10. Release decision.

11. Global Gateway.

12. Post-go-live.

13. Scale approval.

**12.2. Final Backlog Matrix PHASE 9**

| **Backlog ID** | **Backlog Name**                           | **Source-of-Truth**         | **Dependency**            | **Evidence Required**        | **Smoke Required**                              | **Initial Status**                 |
|----------------|--------------------------------------------|-----------------------------|---------------------------|------------------------------|-------------------------------------------------|------------------------------------|
| REL-BLG-001    | Documentation Completion Registry          | TECH-10                     | TECH-00-12 docs           | Documentation evidence       | Documentation Complete ≠ Production Ready       | BLOCKED UNTIL TECH-12 COMPLETE     |
| REL-BLG-002    | Evidence Intake / Acceptance               | TECH-10                     | REL-BLG-001               | Evidence review evidence     | Evidence submitted ≠ accepted                   | BLOCKED UNTIL REL-BLG-001 PASS     |
| REL-BLG-003    | Global Smoke Matrix                        | TECH-10                     | REL-BLG-002               | Smoke execution evidence     | Smoke fail blocks release                       | BLOCKED UNTIL REL-BLG-002 PASS     |
| REL-BLG-004    | UAT Session Control                        | TECH-10                     | REL-BLG-003               | UAT evidence                 | Dev self-test ≠ UAT                             | BLOCKED UNTIL REL-BLG-003 PASS     |
| REL-BLG-005    | Owner Sign-off Control                     | TECH-10                     | REL-BLG-004               | Sign-off evidence            | Missing owner → no Release Approved             | BLOCKED UNTIL REL-BLG-004 PASS     |
| REL-BLG-006    | P0 Blocker Registry                        | TECH-10 / TECH-11 / TECH-12 | REL-BLG-003               | Blocker evidence             | Open P0 → Gateway blocked                       | BLOCKED UNTIL REL-BLG-003 PASS     |
| REL-BLG-007    | Cross-Tech Dependency Validator            | TECH-10                     | REL-BLG-003/006           | Dependency evidence          | Upstream fail → downstream blocked              | BLOCKED UNTIL REL-BLG-003 PASS     |
| REL-BLG-008    | Privacy / Security Release Review          | TECH-10                     | REL-BLG-002/003           | Privacy/security evidence    | Privacy fail blocks release                     | BLOCKED UNTIL REL-BLG-002 PASS     |
| REL-BLG-009    | Rollback / Fallback / Monitoring Readiness | TECH-10                     | REL-BLG-003/008           | Rollback/monitoring evidence | Missing rollback/monitoring blocks go-live      | BLOCKED UNTIL REL-BLG-008 PASS     |
| REL-BLG-010    | Release Decision / Global Gateway State    | TECH-10                     | REL-BLG-001-009           | Release decision evidence    | No release decision → no Go-live                | BLOCKED UNTIL REL-BLG-001-009 PASS |
| REL-BLG-011    | Post-Go-Live Monitoring                    | TECH-10                     | REL-BLG-010               | Post-go-live evidence        | Incident open blocks scale                      | BLOCKED UNTIL GO-LIVE DECISION     |
| REL-BLG-012    | Scale Approval Gate                        | TECH-07 / TECH-10           | REL-BLG-011 / ADS-BLG-007 | Scale evidence               | Data Quality/Verified Revenue fail blocks scale | BLOCKED UNTIL POST-GO-LIVE STABLE  |

**12.3. PHASE 9 P0 Blocker**

FAIL nếu:

1.  Documentation Complete bị gọi là Production Ready.

2.  Evidence chưa accepted nhưng Completion PASS.

3.  Smoke chưa pass nhưng Release Ready.

4.  Owner chưa sign-off nhưng Release Approved.

5.  Không release decision nhưng Go-live Approved.

6.  Global Gateway mở khi còn blocker.

7.  Post-go-live incident open nhưng scale.

8.  Data Quality/Verified Revenue fail nhưng scale.

**13. FINAL DEV TASK BREAKDOWN PACK**

**13.1. Task Breakdown Rule**

Mỗi backlog khi đưa sang TECH-11 phải được chia thành task theo nguyên tắc:

1.  Task không được mất source-of-truth.

2.  Task không được mất dependency.

3.  Task không được mất Scope Out.

4.  Task không được mất P0 blocker.

5.  Task không được mất evidence.

6.  Task không được mất smoke.

7.  Task không được biến thành code snippet.

8.  Task không được yêu cầu copy-paste code.

9.  Task không được hardcode policy.

10. Task phải có report requirement.

**13.2. Task Breakdown Template**

Mỗi dev task phải có:

1.  Task ID.

2.  Parent Backlog ID.

3.  Phase.

4.  Domain.

5.  Source-of-Truth.

6.  Requirement Summary.

7.  Scope In.

8.  Scope Out.

9.  Dependency.

10. P0 Blocker.

11. Evidence Required.

12. Smoke Required.

13. Report Required.

14. Handoff Target.

15. Status.

**13.3. Task Breakdown Initial Status**

Các task con sau TECH-12 chỉ được có trạng thái:

1.  READY FOR TECH-11 HANDOFF.

2.  BLOCKED BY SOURCE.

3.  BLOCKED BY DEPENDENCY.

4.  NEED OWNER REVIEW.

5.  NEED EVIDENCE/SMOKE REVIEW.

6.  PLANNING ONLY.

Không task nào được gọi là:

1.  DEV READY.

2.  IMPLEMENTED.

3.  RELEASE READY.

4.  PRODUCTION READY.

5.  GO-LIVE APPROVED.

**14. FINAL EVIDENCE MATRIX**

**14.1. Evidence theo phase**

| **Phase** | **Evidence bắt buộc**                                                                                     |
|-----------|-----------------------------------------------------------------------------------------------------------|
| PHASE 0   | RBAC, actor, audit, evidence registry, idempotency, correlation, override evidence                        |
| PHASE 1   | Product/SKU/Recipe/Formula/Activation evidence                                                            |
| PHASE 2   | QC, readiness, material issue, batch release, warehouse, ledger, trace, recall/sale lock evidence         |
| PHASE 3   | Sellable, QuoteSnapshot, cart/order draft/official order, payment, COD, verified revenue evidence         |
| PHASE 4   | Product knowledge, claim guard, customer memory, quote consumption, response guard evidence               |
| PHASE 5   | Public/private routing, Messenger handoff, guard enforcement, pacing, rate-limit, moderation evidence     |
| PHASE 6   | Event taxonomy, dedup, attribution, verified revenue, data quality, scale gate evidence                   |
| PHASE 7   | Live session, script guard, comment classification, Messenger coordination, live signal boundary evidence |
| PHASE 8   | IVR eligibility, phone validation, attempt policy, outcome classification, notification handoff evidence  |
| PHASE 9   | Evidence acceptance, smoke, UAT, sign-off, dependency, release decision, gateway, post-go-live evidence   |

**14.2. Evidence P0 Rule**

FAIL nếu:

1.  Evidence không map requirement.

2.  Evidence không rõ environment.

3.  Evidence không có expected/actual.

4.  Evidence không có reviewer.

5.  Evidence thiếu audit/correlation cho high-risk action.

6.  Evidence lộ dữ liệu nhạy cảm.

7.  Evidence local dùng để production-ready.

8.  Evidence chưa accepted nhưng release gate pass.

**15. FINAL SMOKE MATRIX**

**15.1. Smoke theo phase**

| **Phase** | **Smoke bắt buộc**                                                                                                                             |
|-----------|------------------------------------------------------------------------------------------------------------------------------------------------|
| PHASE 0   | Permission deny, audit creation, evidence missing blocks gate, idempotency duplicate                                                           |
| PHASE 1   | Product Active ≠ Sellable, internal SKU not public, unapproved product knowledge blocked                                                       |
| PHASE 2   | Raw QC_PASS ≠ READY, issue decrements once, QC_PASS ≠ RELEASED, recall blocks downstream                                                       |
| PHASE 3   | QuoteSnapshot only, cart not order, draft not official, image transfer not PAID, COD pending not revenue                                       |
| PHASE 4   | AI no self-price, no self-order, no self-payment, unapproved claim blocked, private data not public                                            |
| PHASE 5   | Public price intent routes Messenger, unguarded response blocked, troll not pulled Messenger, complaint routed CSKH                            |
| PHASE 6   | Quote/cart/draft/unpaid excluded revenue, dedup works, data quality fail blocks scale                                                          |
| PHASE 7   | Script guard, live no self-price/order/payment, live signal not ROAS, troll/complaint split                                                    |
| PHASE 8   | Official order only, invalid phone ≠ no answer, cancel ≠ no answer, technical failure not customer fault, notification after Core cancellation |
| PHASE 9   | Evidence accepted required, smoke pass required, owner sign-off required, release decision required, Gateway blocked by default                |

**15.2. Smoke P0 Rule**

FAIL nếu:

1.  Smoke chỉ happy path.

2.  Smoke không có Must Not.

3.  Smoke không có expected/actual.

4.  Smoke không có evidence.

5.  Smoke không test dependency.

6.  Smoke không test runtime unavailable khi cần.

7.  Smoke không test privacy boundary khi có dữ liệu khách.

8.  Smoke không test no-bypass rule.

**16. FINAL OWNER MATRIX**

| **Phase** | **Owner bắt buộc**                                                                       |
|-----------|------------------------------------------------------------------------------------------|
| PHASE 0   | Security/RBAC Owner, Audit/Evidence Owner, Dev Lead, QA Owner                            |
| PHASE 1   | Product Owner, Recipe Owner, Claim/Product Knowledge Owner, QA Owner                     |
| PHASE 2   | Production Owner, Warehouse Owner, Inventory Owner, Trace/Recall Owner, QA Owner         |
| PHASE 3   | Commerce Owner, Payment Owner, Shipping Owner, Revenue Owner, QA Owner                   |
| PHASE 4   | AI Advisor Owner, Claim Guard Owner, Commerce Owner, Privacy Owner, QA Owner             |
| PHASE 5   | Gateway Owner, Channel Owner, AI Owner, Privacy Owner, QA Owner                          |
| PHASE 6   | Ads Owner, Commerce Revenue Owner, Data Quality Owner, QA Owner                          |
| PHASE 7   | MC Live Owner, Gateway Owner, AI Owner, Commerce Owner, Ads Owner, QA Owner              |
| PHASE 8   | IVR Owner, Commerce/Core Order Owner, Notification Owner, Privacy Owner, QA Owner        |
| PHASE 9   | Release Owner, QA/UAT Owner, Privacy/Security Owner, Domain Owners, Global Gateway Owner |

FAIL nếu backlog không có owner đúng domain.

**17. FINAL DEPENDENCY MATRIX**

| **Dependency**    | **Rule**                                                             |
|-------------------|----------------------------------------------------------------------|
| PHASE 0 → All     | Foundation chưa pass thì high-risk phase chỉ planning-only           |
| PHASE 1 → PHASE 2 | Product/SKU/Recipe chưa pass thì Operational blocked                 |
| PHASE 2 → PHASE 3 | Operational/Sellable/Sale Lock/Recall chưa pass thì Commerce blocked |
| PHASE 3 → PHASE 4 | QuoteSnapshot/Order boundary chưa pass thì AI blocked                |
| PHASE 4 → PHASE 5 | Final Response Guard chưa pass thì Gateway blocked                   |
| PHASE 5 → PHASE 7 | Gateway public/private chưa pass thì MC Live blocked                 |
| PHASE 3 → PHASE 6 | Verified Revenue chưa pass thì Ads blocked                           |
| PHASE 3 → PHASE 8 | Official Order/Core Order chưa pass thì IVR blocked                  |
| PHASE 9 → Release | TECH-10 gate chưa pass thì release/go-live/scale blocked             |

FAIL nếu downstream Ready/Release khi upstream critical blocked.

**18. FINAL BLOCKED BACKLOG MATRIX**

Backlog phải BLOCKED nếu có một trong các điều kiện:

1.  Source-of-truth chưa rõ.

2.  Source conflict chưa resolved.

3.  Scope In/Out chưa rõ.

4.  Dependency chưa pass.

5.  Upstream blocked.

6.  Owner thiếu.

7.  Evidence requirement thiếu.

8.  Smoke requirement thiếu.

9.  P0 blocker mở.

10. Report requirement thiếu.

11. Change control đang mở.

12. Có risk hardcode policy.

13. Có risk copy-paste code.

14. Handoff target chưa rõ.

15. TECH-11 hoặc TECH-10 gate chưa sẵn sàng.

**19. FINAL READY BACKLOG MATRIX**

Backlog chỉ READY FOR TECH-11 HANDOFF khi có đủ:

1.  Source mapping accepted.

2.  Scope In/Out accepted.

3.  Dependency reviewed.

4.  Owner assigned.

5.  Evidence requirement accepted.

6.  Smoke requirement accepted.

7.  Report requirement accepted.

8.  P0 blocker defined.

9.  No open source conflict.

10. No upstream critical blocker.

11. Task breakdown accepted.

12. Phase backlog review pass.

13. Change control closed.

14. Handoff target clear.

READY FOR TECH-11 HANDOFF không phải Dev Ready.

TECH-11 mới kiểm tra Dev Handoff và Code Handoff Control.

**20. FINAL BACKLOG HANDOFF MATRIX SANG TECH-11**

Handoff sang TECH-11 phải có:

1.  Phase.

2.  Backlog IDs.

3.  Dev task IDs.

4.  Source-of-truth.

5.  Requirement summary.

6.  Scope In.

7.  Scope Out.

8.  Dependency.

9.  P0 blocker.

10. Evidence required.

11. Smoke required.

12. Owner.

13. Report requirement.

14. Initial status.

15. Blocked backlog list.

16. Risk list.

17. Change control status.

18. Handoff receiver.

FAIL nếu handoff thiếu bất kỳ thành phần critical nào.

**21. RELEASE BOUNDARY SANG TECH-10**

TECH-12 không trực tiếp tạo Release Ready.

TECH-12 chỉ bàn giao backlog sang TECH-11.

TECH-10 chỉ nhận release review sau khi:

1.  TECH-11 dev handoff đã hoàn tất.

2.  Code implementation thật đã làm xong.

3.  Dev report accepted.

4.  Evidence mapped.

5.  Smoke mapped.

6.  QA handoff completed nếu required.

7.  Phase exit accepted.

8.  Release handoff package created.

Do đó:

**TECH-12 → TECH-11 → Implementation → QA → TECH-10**

Không có đường:

**TECH-12 → Release Ready**

Không có đường:

**TECH-12 → Go-live Approved**

Không có đường:

**TECH-12 → Global Gateway Open**

**22. FINAL DONE GATE — TECH-12**

TECH-12 đạt **DOCUMENTATION COMPLETE** khi:

1.  PHẦN 1/4 hoàn tất.

2.  PHẦN 2/4 hoàn tất.

3.  PHẦN 3/4 hoàn tất.

4.  PHẦN 4/4 hoàn tất.

5.  Backlog Pack Principles đã khóa.

6.  No-Unmapped-Task Rule đã khóa.

7.  Source-to-Backlog Boundary đã khóa.

8.  Backlog Unit Standard đã khóa.

9.  Phase Backlog Registry đã khóa.

10. Module Contracts đã khóa.

11. Backlog Lifecycle đã khóa.

12. Task State Machine đã khóa.

13. Source Mapping State Model đã khóa.

14. Dependency Matrix State Model đã khóa.

15. Evidence Requirement State Model đã khóa.

16. Smoke Requirement State Model đã khóa.

17. Owner Assignment State Model đã khóa.

18. Backlog Readiness State Model đã khóa.

19. Blocker State Model đã khóa.

20. Task Breakdown State Model đã khóa.

21. Handoff State Model đã khóa.

22. Change Control State Model đã khóa.

23. Final Phase Backlog Matrix đã khóa.

24. Dev Task Breakdown Pack đã khóa.

25. Evidence Matrix đã khóa.

26. Smoke Matrix đã khóa.

27. Owner Matrix đã khóa.

28. Dependency Matrix đã khóa.

29. Blocked/Ready Matrix đã khóa.

30. Handoff Matrix sang TECH-11 đã khóa.

31. Release Boundary sang TECH-10 đã khóa.

32. Final Status Registry đã khóa.

33. Final Conclusion đã khóa.

**23. FINAL FAIL GATE — TECH-12**

TECH-12 FAIL nếu còn bất kỳ điểm nào sau:

1.  Backlog không có source-of-truth.

2.  Backlog không có TECH/section/requirement.

3.  Backlog mơ hồ vẫn Ready.

4.  Backlog thiếu Scope Out.

5.  Backlog thiếu dependency.

6.  Backlog thiếu owner.

7.  Backlog thiếu evidence.

8.  Backlog thiếu smoke.

9.  Backlog thiếu report requirement.

10. Backlog downstream Ready khi upstream blocked.

11. Source conflict vẫn handoff.

12. Tài liệu cũ thắng TECH mới.

13. Code cũ thắng TECH mới.

14. Task breakdown làm mất source mapping.

15. Task breakdown bỏ P0 blocker.

16. Task breakdown biến thành code snippet.

17. Evidence requirement bỏ high-risk audit.

18. Smoke requirement chỉ happy path cho backlog critical.

19. Change control sửa backlog âm thầm.

20. Backlog blocked vẫn handoff TECH-11.

21. TECH-12 gọi Backlog Ready là Dev Ready.

22. TECH-12 gọi Backlog Ready là Release Ready.

23. TECH-12 gửi backlog chưa implemented sang TECH-10 như release-ready package.

24. TECH-12 bỏ qua TECH-11.

25. TECH-12 bỏ qua TECH-10.

26. TECH-12 mở Global Gateway.

27. TECH-12 bị hiểu là tài liệu code.

28. TECH-12 cho phép copy-paste code rời rạc.

29. TECH-12 cho phép hardcode policy.

30. Không có final phase backlog matrix.

31. Không có evidence-smoke matrix.

32. Không có final status registry.

**24. RELEASE HANDOFF — SAU TECH-12**

**24.1. Trạng thái sau khi hoàn tất TECH-12**

Sau khi hoàn tất PHẦN 4/4:

**TECH-12 = DOCUMENTATION COMPLETE**

Nhưng:

**Backlog Ready = DEFINED, NOT EXECUTED**

**Dev Ready = NO**

**Implementation Ready = NO**

**Release Ready = NO**

**Production Ready = NO**

**Go-live Approved = NO**

**Scale Approved = NO**

**Global Gateway = BLOCKED**

Lý do:

TECH-12 mới là backlog pack tài liệu.

Chưa có handoff thực tế qua TECH-11.

Chưa có code implementation.

Chưa có dev report.

Chưa có evidence thực thi.

Chưa có smoke thực thi.

Chưa có QA/UAT.

Chưa có owner sign-off.

Chưa có release decision.

**24.2. Điều kiện để nâng Backlog Ready thành Dev Ready**

Muốn Dev Ready phải qua TECH-11:

1.  Backlog handoff sang TECH-11.

2.  Dev Handoff Resolver pass.

3.  Code Handoff Control pass.

4.  Architecture context rõ.

5.  DB/API/UI impact review nếu có.

6.  Test/evidence expectation rõ.

7.  No copy-paste-code rule accepted.

8.  No hardcode-policy rule accepted.

9.  Dev owner accepted.

Nếu chưa qua TECH-11:

**Dev Ready = NO**

**24.3. Điều kiện để nâng Dev Ready thành Implementation Complete**

Muốn Implementation Complete phải có:

1.  Dev implementation thật.

2.  File đã sửa.

3.  Source requirement trace.

4.  Evidence đã dùng.

5.  Lệnh đã chạy.

6.  Test result.

7.  Backend build result.

8.  Frontend build result nếu có.

9.  Cleanup result.

10. Docs update nếu có.

11. Migration/seed result nếu có.

12. Risk report.

13. Handoff update.

Nếu thiếu report:

**Implementation Complete = NO**

**24.4. Điều kiện để nâng Implementation Complete thành Ready for TECH-10 Review**

Muốn Ready for TECH-10 Review phải có:

1.  Implementation report accepted.

2.  Evidence mapped.

3.  Smoke mapped.

4.  QA handoff completed nếu required.

5.  P0 blocker closed.

6.  Cleanup/docs update pass.

7.  Dependency pass.

8.  Release handoff package complete.

Nếu thiếu bất kỳ điều kiện nào:

**Ready for TECH-10 Review = NO**

**24.5. Điều kiện để nâng lên Release Ready**

Release Ready chỉ do TECH-10 xét.

TECH-12 không có quyền xét Release Ready.

TECH-10 chỉ xét Release Ready khi có:

1.  Evidence accepted.

2.  Global smoke pass.

3.  UAT pass nếu required.

4.  Owner sign-off.

5.  No open P0 blocker.

6.  Cross-tech dependency pass.

7.  Privacy/security pass.

8.  Rollback/fallback ready nếu production.

9.  Monitoring/alert ready nếu go-live.

10. Release decision phù hợp.

Nếu chưa qua TECH-10:

**Release Ready = NO**

**25. HANDOFF SANG BƯỚC TIẾP THEO**

Sau TECH-12, bước tiếp theo hợp lý là viết bộ prompt/handoff thực thi cho dev theo từng phase.

Tên tài liệu đề xuất:

**TECH-13 — CODEX / COPILOT DEV PROMPT PACK / PHASE EXECUTION HANDOFF / IMPLEMENTATION REPORT TEMPLATE — V1.0 CLEAN FINAL**

Mục tiêu TECH-13:

1.  Viết prompt giao dev/coding agent theo PHASE 0 → PHASE 9.

2.  Mỗi prompt chỉ giao một phase hoặc một nhóm backlog rõ.

3.  Prompt không yêu cầu copy-paste code rời rạc.

4.  Prompt yêu cầu dev đọc source-of-truth.

5.  Prompt yêu cầu dev kiểm tra codebase thật.

6.  Prompt yêu cầu dev đề xuất implementation plan trước.

7.  Prompt yêu cầu dev chạy test/build.

8.  Prompt yêu cầu dev nộp evidence.

9.  Prompt yêu cầu report đúng 14 mục.

10. Prompt không cho dev gọi done là release ready.

**26. FINAL STATUS REGISTRY**

| **Hạng mục**             | **Trạng thái sau TECH-12**    |
|--------------------------|-------------------------------|
| TECH-12 Documentation    | DOCUMENTATION COMPLETE        |
| Backlog Pack             | DEFINED                       |
| Backlog Ready            | DEFINED, NOT EXECUTED         |
| Dev Ready                | NO                            |
| Implementation Ready     | NO                            |
| Implementation Complete  | NO                            |
| Ready for TECH-10 Review | NO                            |
| Release Ready            | NO                            |
| Production Ready         | NO                            |
| Go-live Approved         | NO                            |
| Scale Approved           | NO                            |
| Global Gateway           | BLOCKED                       |
| TECH-11 Dev Handoff      | REQUIRED                      |
| Code Handoff Control     | REQUIRED                      |
| Dev Report               | REQUIRED AFTER IMPLEMENTATION |
| Evidence Mapping         | REQUIRED AFTER IMPLEMENTATION |
| Smoke Mapping            | REQUIRED AFTER IMPLEMENTATION |
| QA/UAT                   | REQUIRED BY SCOPE             |
| TECH-10 Release Review   | REQUIRED BEFORE RELEASE       |

**TECH-12 FINAL CONCLUSION**

TECH-12 đã khóa lớp **Phase Backlog Pack / Dev Task Breakdown / Source-to-Backlog Matrix** cho hệ thống Ginsengfood.

TECH-12 không thay thế TECH-00 → TECH-11.

TECH-12 không viết code.

TECH-12 không thiết kế API/DB/UI chi tiết.

TECH-12 không cho phép backlog mơ hồ.

TECH-12 không cho phép task không source.

TECH-12 không cho phép copy-paste code rời rạc từ AI.

Các nguyên tắc cuối cùng đã khóa:

1.  Mọi backlog phải map source-of-truth.

2.  TECH mới thắng tài liệu cũ.

3.  TECH mới thắng code cũ.

4.  Tài liệu cũ chỉ là LEGACY_REFERENCE_ONLY.

5.  Code cũ chỉ là CURRENT_IMPLEMENTATION_STATE_ONLY.

6.  Backlog không source không Ready.

7.  Backlog thiếu Scope Out không Ready.

8.  Backlog thiếu dependency không Ready.

9.  Backlog thiếu evidence không Ready.

10. Backlog thiếu smoke không Ready.

11. Backlog thiếu owner không Ready.

12. Backlog thiếu report requirement không Ready.

13. Downstream backlog bị blocked nếu upstream chưa pass.

14. PHASE 0 là nền cho toàn bộ high-risk phase.

15. PHASE 1 là nền cho Product/SKU/Recipe.

16. PHASE 2 là nền cho Operational/Sellable/Sale Lock/Recall.

17. PHASE 3 là nền cho Commerce/Quote/Order/Payment/Verified Revenue.

18. PHASE 4 là nền cho AI Advisor.

19. PHASE 5 là nền cho Gateway/Messenger.

20. PHASE 6 phụ thuộc Verified Revenue để đo Ads.

21. PHASE 7 phụ thuộc Gateway/AI/Commerce để chạy MC AI Live.

22. PHASE 8 phụ thuộc Official Order/Core Order/Notification để chạy IVR.

23. PHASE 9 phụ thuộc TECH-10 để release/go-live/scale.

24. Task breakdown không được làm mất source/P0/evidence/smoke.

25. Task breakdown không được biến thành code snippet.

26. Evidence matrix phải có theo phase.

27. Smoke matrix phải có theo phase.

28. Owner matrix phải rõ theo domain.

29. Dependency matrix phải chặn downstream khi upstream blocked.

30. Backlog handoff chỉ sang TECH-11.

31. TECH-12 không gọi Backlog Ready là Dev Ready.

32. TECH-12 không gọi Backlog Ready là Release Ready.

33. TECH-12 không gửi backlog chưa implemented sang TECH-10 như release package.

34. TECH-12 không mở Global Gateway.

35. TECH-10 mới xét evidence accepted, global smoke pass, UAT, owner sign-off, release decision và Global Gateway.

**Trạng thái cuối cùng của tài liệu:**

**TECH-12 — DOCUMENTATION COMPLETE**

Nhưng trạng thái triển khai vẫn là:

**Dev Ready = NO**  
**Implementation Ready = NO**  
**Release Ready = NO**  
**Production Ready = NO**  
**Go-live Approved = NO**  
**Scale Approved = NO**  
**Global Gateway = BLOCKED**

Bước tiếp theo hợp lý sau TECH-12 là viết:

**TECH-13 — CODEX / COPILOT DEV PROMPT PACK / PHASE EXECUTION HANDOFF / IMPLEMENTATION REPORT TEMPLATE — V1.0 CLEAN FINAL**

để biến backlog PHASE 0 → PHASE 9 thành các prompt giao dev/coding agent theo từng phase, đúng source-of-truth, đúng boundary, đúng evidence, đúng smoke và đúng report format.
