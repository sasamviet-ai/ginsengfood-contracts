**GINSENGFOOD — DEV EXECUTION COMMAND PACK**

**LỆNH TRIỂN KHAI THEO MASTER / PACK / EVIDENCE / GATEWAY**

**V1.0 CLEAN FINAL**

**PHẦN 1/4 — IMPLEMENTATION PRINCIPLES / NO COPY-PASTE / PACK-TO-MODULE MAPPING**

**1. MỤC ĐÍCH CỦA DEV EXECUTION COMMAND PACK**

Tài liệu này dùng để chuyển toàn bộ bộ hồ sơ MASTER / PACK của Ginsengfood thành **lệnh triển khai có kiểm soát** cho đội kỹ thuật.

Tài liệu này không phải tài liệu viết code.  
Tài liệu này không thay thế kiến trúc kỹ thuật chi tiết.  
Tài liệu này không thiết kế API, database, UI cụ thể.  
Tài liệu này không cho phép copy-paste code rời rạc.

Vai trò đúng của tài liệu này là:

1.  Khóa nguyên tắc triển khai.

2.  Quy định thứ tự đọc tài liệu.

3.  Map MASTER / PACK sang nhóm module triển khai.

4.  Chỉ rõ pack nào là source-of-truth cho module nào.

5.  Ngăn dev triển khai ngược thứ tự.

6.  Ngăn module downstream vượt pack upstream.

7.  Bắt buộc lập gap report trước khi code sâu.

8.  Bắt buộc có evidence, smoke và Done Gate.

9.  Giúp owner kiểm soát tiến độ bằng trạng thái rõ ràng.

10. Chuẩn bị nền để chuyển sang Wave 0 → Wave 9.

**2. NGUYÊN TẮC CỐT LÕI KHI TRIỂN KHAI**

**2.1. Không xây hệ thống bằng copy-paste**

Hệ thống Ginsengfood không được triển khai theo kiểu:

- copy từng đoạn code;

- lấy gợi ý AI dán vào;

- làm từng màn hình rời rạc;

- làm module nào dễ trước;

- thấy phần nào hiểu thì làm phần đó;

- bỏ qua source-of-truth;

- bỏ qua rule nghiệp vụ;

- bỏ qua evidence và smoke.

Đây là hệ thống vận hành thật, có liên quan đến:

1.  Sản xuất.

2.  Kho.

3.  Tồn.

4.  Truy xuất.

5.  Thu hồi.

6.  Khóa bán.

7.  SKU.

8.  Công thức.

9.  Nhu cầu sản xuất.

10. Thu mua.

11. Báo giá.

12. Đơn hàng.

13. Thanh toán.

14. Giao hàng.

15. AI Advisor.

16. Facebook Gateway.

17. Ads Measurement.

18. MC AI Live.

19. IVR xác nhận đơn.

20. MISA / kế toán / đối soát.

Một lỗi nhỏ ở module này có thể làm sai module khác.

Ví dụ: nếu AI tự tính giá thay Commerce Runtime, hậu quả không chỉ là sai câu trả lời. Nó có thể làm sai quote, sai order, sai member benefit, sai doanh thu, sai ROAS, sai chăm sóc khách hàng và sai đối soát kế toán.

**2.2. Tài liệu là source-of-truth nghiệp vụ, không phải code mẫu**

MASTER / PACK là nguồn quyết định:

- hệ thống cần làm gì;

- rule nào bắt buộc;

- boundary nào không được vượt;

- pack nào phụ thuộc pack nào;

- evidence nào phải nộp;

- khi nào được PASS;

- khi nào phải BLOCKED;

- khi nào phải RELEASE_HOLD;

- khi nào phải ROLLBACK.

Dev được quyền quyết định cách hiện thực kỹ thuật, nhưng không được tự ý thay đổi nghiệp vụ đã khóa.

**2.3. Người dùng / owner quyết định “muốn gì”, đội kỹ thuật quyết định “làm như thế nào”**

Owner quyết định:

1.  Quy trình vận hành.

2.  Quy tắc nghiệp vụ.

3.  Chính sách giá.

4.  Chính sách thành viên.

5.  Chính sách bán hàng.

6.  Chính sách xác nhận đơn.

7.  Điều kiện release.

8.  Điều kiện go-live.

9.  Điều kiện dừng.

10. Điều kiện rollback.

Đội kỹ thuật quyết định:

1.  Kiến trúc code.

2.  Module/service.

3.  Database schema.

4.  API.

5.  UI.

6.  Worker/job/queue.

7.  Test automation.

8.  Logging/audit implementation.

9.  Deployment pipeline.

10. Monitoring.

Nhưng mọi quyết định kỹ thuật phải phục vụ đúng rule đã khóa trong MASTER / PACK.

**3. NGUYÊN TẮC “NO COPY-PASTE IMPLEMENTATION”**

**3.1. Vì sao không được copy-paste code từ AI**

Code AI tạo ra thường là đoạn rời rạc. Nó không có đầy đủ context của:

1.  Kiến trúc repo thật.

2.  Database thật.

3.  Auth/permission thật.

4.  State machine thật.

5.  Audit thật.

6.  Runtime config thật.

7.  Error handling thật.

8.  Idempotency thật.

9.  Security thật.

10. Cross-pack dependency thật.

Một hệ thống thực tế có thể có hàng trăm file, nhiều module liên kết chặt chẽ. Không thể ghép hệ thống bằng các đoạn code rời rạc.

**3.2. Ví dụ bắt buộc: chức năng đăng nhập**

Người không kỹ thuật thường nghĩ đăng nhập chỉ là:

- form nhập số điện thoại/email;

- API login;

- trả token;

- vào hệ thống.

Thực tế đăng nhập liên quan:

1.  Thiết kế bảng user.

2.  Mã hóa mật khẩu.

3.  Session/token.

4.  Refresh token.

5.  Role/permission.

6.  Trạng thái tài khoản.

7.  Chống brute force.

8.  Chống SQL injection.

9.  Logging/audit.

10. Forgot password.

11. Reset password.

12. Multi-role user.

13. Supplier user scope nếu có.

14. Admin access boundary.

15. Security test.

Vì vậy không có chuyện “copy một đoạn login là xong”.

Ginsengfood còn phức tạp hơn đăng nhập rất nhiều vì có sản xuất, kho, truy xuất, AI, bán hàng, thanh toán, Ads, Live và IVR.

**3.3. Rủi ro nếu dev làm sai cách**

Nếu triển khai bằng copy-paste rời rạc:

1.  Hệ thống dễ lỗi.

2.  Không ổn định.

3.  Không debug được.

4.  Không bảo trì được.

5.  Dev sau không hiểu code.

6.  Logic nghiệp vụ bị lệch tài liệu.

7.  Dữ liệu bị sai.

8.  Payment có thể sai.

9.  Order có thể sai.

10. AI có thể tư vấn sai.

11. Ads có thể scale sai.

12. IVR có thể hủy đơn sai.

13. Traceability có thể không truy được.

14. Recall/Sale Lock có thể bị bỏ qua.

15. Chi phí sửa về sau cao hơn làm đúng từ đầu.

Nguyên tắc bắt buộc:

Dev không được copy-paste để “chạy trước”.  
Dev phải phân tích source-of-truth, map module, lập gap report, rồi mới triển khai.

**4. SOURCE-OF-TRUTH TRIỂN KHAI**

**4.1. Danh sách nguồn bắt buộc**

Đội kỹ thuật phải đọc theo thứ tự:

1.  MASTER-00 — Master Technical Documentation Index.

2.  MASTER-01 → MASTER-07 — Các tài liệu governance đã khóa.

3.  PACK-01 → PACK-10 — Các pack domain/technical decision.

4.  Business Pack.

5.  Functional Pack.

6.  UI Pack.

7.  Chính sách thành viên / giá / hoa hồng / chương trình.

8.  Các tài liệu bổ sung đã được owner xác nhận là nguồn chính thức.

Không được dùng code hiện tại làm source-of-truth nếu code mâu thuẫn với tài liệu đã khóa.

**4.2. Code hiện tại là implementation state, không phải business truth**

Nếu code hiện tại khác tài liệu:

- không tự sửa im lặng;

- không tự chọn theo code;

- không tự bỏ rule trong tài liệu;

- không tự “hợp lý hóa” sai lệch.

Dev phải ghi vào:

Implementation Gap Report

và đánh trạng thái:

OWNER_REVIEW_REQUIRED

**4.3. Dashboard không phải source-of-truth**

Dashboard chỉ hiển thị.

Dashboard không được quyết định:

1.  Revenue thật.

2.  Order thật.

3.  Payment thật.

4.  ROAS thật.

5.  Stock thật.

6.  Sellable thật.

7.  Release status thật.

8.  Evidence status thật.

Các quyết định thật phải đọc từ domain source tương ứng.

**5. PACK-TO-MODULE MAPPING NGUYÊN TẮC**

**5.1. Mỗi module phải map về pack chủ quản**

Không module nào được triển khai mà không biết nó thuộc pack nào.

Mỗi module phải ghi rõ:

1.  Module name.

2.  Pack owner.

3.  Source-of-truth document.

4.  Upstream dependency.

5.  Downstream dependency.

6.  P0 rules.

7.  Evidence required.

8.  Smoke required.

9.  Release status.

10. Owner decision required hay không.

**5.2. Một module có thể phụ thuộc nhiều pack**

Ví dụ: AI báo giá cho khách không chỉ thuộc AI Advisor.

Nó phụ thuộc:

1.  PACK-02 — Product / SKU.

2.  PACK-04 — Quote / Price / Order.

3.  PACK-06 — AI Advisor / Resolver / Guard.

4.  PACK-01 — Sellable / Sale Lock / Recall.

5.  PACK-10 — Evidence / Gateway / Release.

Vì vậy dev không được giao module theo tên đơn giản kiểu “làm AI báo giá” mà phải map đầy đủ dependency.

**6. MASTER / PACK → MODULE MAP**

**6.1. MASTER layer**

| **Tài liệu** | **Vai trò triển khai**                                      | **Không được hiểu sai**            |
|--------------|-------------------------------------------------------------|------------------------------------|
| MASTER-00    | Chỉ mục master, registry, trạng thái toàn cục               | Không phải module code             |
| MASTER-01    | Source-of-truth registry                                    | Không thay pack domain             |
| MASTER-02    | Dependency map                                              | Không tự làm PASS dependency       |
| MASTER-03    | Traceability ID standard                                    | Không thay thiết kế DB cụ thể      |
| MASTER-04    | Product / member / pricing / program governance nếu đã khóa | Không hardcode giá/quyền lợi       |
| MASTER-05    | Payment / accounting / MISA boundary nếu đã khóa            | Không tự mark paid                 |
| MASTER-06    | Security / data / compliance boundary nếu đã khóa           | Không thay security implementation |
| MASTER-07    | Global release / production readiness / go-live control     | Không tự approve release           |

**6.2. PACK layer**

| **Pack** | **Module triển khai chính**                                                         | **Boundary bắt buộc**                                                    |
|----------|-------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| PACK-01  | Operational Core: production, warehouse, inventory, traceability, recall, sale lock | Không bán hàng chưa RELEASED, không bypass sale lock/recall              |
| PACK-02  | Product Master, SKU, ingredient, recipe, formula version, product activation        | Không bán SKU chưa active/sellable                                       |
| PACK-03  | Demand, MRP, procurement, stock alert, material/packaging control                   | Sales/Đại lý không tự phát lệnh sản xuất                                 |
| PACK-04  | Quote, cart, order, payment, shipping, fulfillment, commerce runtime                | Quote Snapshot là nguồn báo giá, payment không mark PAID sai             |
| PACK-05  | Facebook Channel Gateway, Meta Live, Messenger, private handoff                     | Gateway không tự tạo order, không leak privacy                           |
| PACK-06  | AI Advisor, resolver, guard, claim, sales behavior                                  | AI không hardcode, không vượt claim guard                                |
| PACK-07  | Ads, ROAS, attribution, verified revenue                                            | Không có verified revenue thì không có ROAS chính thức                   |
| PACK-08  | MC AI Live, live plan, script, host cue, real-time orchestration                    | MC AI Live không chốt đơn public                                         |
| PACK-09  | IVR Order Confirmation, Internal SIM Gateway                                        | IVR result chỉ là input signal, Core Order State Machine quyết định cuối |
| PACK-10  | Completion, evidence, gateway, release readiness                                    | Không tự làm PASS pack nào                                               |

**7. MODULE GROUP TRIỂN KHAI CHUẨN**

**7.1. Foundation Module Group**

Bao gồm:

1.  Auth.

2.  User.

3.  Role.

4.  Permission.

5.  Audit.

6.  Idempotency.

7.  Config registry.

8.  Runtime registry.

9.  Evidence registry.

10. Release status registry.

Foundation phải làm trước vì các module sau đều cần quyền, audit, evidence và trạng thái.

**7.2. Product / SKU Module Group**

Bao gồm:

1.  Product Master.

2.  SKU Master.

3.  Ingredient Master.

4.  Recipe.

5.  Formula Version.

6.  Product Activation.

7.  Sellable Gate.

8.  Product Knowledge Runtime.

Phụ thuộc chính:

- PACK-02.

- PACK-01 nếu có sellable/sale lock.

- PACK-06 nếu dùng AI Advisor.

**7.3. Operational Core Module Group**

Bao gồm:

1.  Source Origin.

2.  Raw Material Intake.

3.  Incoming QC.

4.  Raw Lot Readiness.

5.  Production Order.

6.  Material Request.

7.  Material Issue.

8.  Material Receipt.

9.  Production Process.

10. Packaging / QR.

11. Batch QC.

12. Batch Release.

13. Warehouse Receipt.

14. Inventory Ledger.

15. Traceability.

16. Public Trace.

17. Recall.

18. Sale Lock.

Phụ thuộc chính:

- PACK-01.

- PACK-02.

- PACK-03.

- PACK-10.

**7.4. Demand / MRP / Procurement Module Group**

Bao gồm:

1.  Demand Resolver.

2.  Demand-to-Production Order.

3.  MRP Run.

4.  Procurement Suppression Threshold.

5.  Strategic Reserve.

6.  Company Source Harvest Exception.

7.  Material Planning.

8.  Packaging Planning.

9.  Stock Alert.

10. Disposal / Write-off Control.

Phụ thuộc chính:

- PACK-03.

- PACK-01.

- PACK-02.

**7.5. Commerce Runtime Module Group**

Bao gồm:

1.  Price Runtime.

2.  Program Runtime.

3.  Member Benefit Runtime.

4.  Quote Snapshot.

5.  Cart Draft.

6.  Official Order.

7.  Order State Machine.

8.  Payment.

9.  Direct Bank Transfer Review.

10. COD.

11. Shipping.

12. Fulfillment.

13. VAT Display.

14. Notification Boundary.

Phụ thuộc chính:

- PACK-04.

- PACK-01.

- PACK-02.

- MASTER payment / pricing governance nếu có.

- PACK-10.

**7.6. AI Advisor Module Group**

Bao gồm:

1.  Intent Recognition.

2.  Entity Capture.

3.  Variable Resolver.

4.  Product Knowledge Resolver.

5.  Price Resolver.

6.  Stock Resolver.

7.  Claim Guard.

8.  Health Guard.

9.  OOS Guard.

10. Customer Memory Boundary.

11. Quote Draft Action.

12. Order Draft Action.

13. Render Template.

14. Conversation State.

Phụ thuộc chính:

- PACK-06.

- PACK-02.

- PACK-04.

- PACK-01.

- PACK-10.

**7.7. Facebook Gateway Module Group**

Bao gồm:

1.  Page Config.

2.  Comment Listener.

3.  Messenger Handoff.

4.  Private Context Switch.

5.  Privacy Guard.

6.  Public Reply Policy.

7.  Health-sensitive Routing.

8.  Complaint Routing.

9.  Gateway Event Log.

10. AI Advisor Routing.

11. Commerce Routing.

Phụ thuộc chính:

- PACK-05.

- PACK-06.

- PACK-04.

- PACK-10.

**7.8. Ads Measurement Module Group**

Bao gồm:

1.  Ads Event Capture.

2.  Funnel Event Registry.

3.  Attribution Rule.

4.  Verified Revenue Link.

5.  Data Quality Gate.

6.  ROAS Calculation.

7.  CPA / AOV / Conversion Metrics.

8.  Scale Gate.

9.  Stop Gate.

10. Measurement Dashboard.

Phụ thuộc chính:

- PACK-07.

- PACK-04.

- PACK-05 nếu Ads đến từ Facebook.

- Payment / MISA / Accounting Review.

- PACK-10.

**7.9. MC AI Live Module Group**

Bao gồm:

1.  Live Plan.

2.  Product Scope.

3.  Run-of-Show.

4.  Script Registry.

5.  Host Cue.

6.  Live Q&A Assist.

7.  Claim Guard.

8.  Privacy Guard.

9.  Risk P0 Control.

10. Private Handoff.

11. Live Evidence.

Phụ thuộc chính:

- PACK-08.

- PACK-05.

- PACK-06.

- PACK-07.

- PACK-04.

- PACK-01.

- PACK-10.

**7.10. IVR Module Group**

Bao gồm:

1.  Internal SIM Gateway Server.

2.  SIM Capacity Control.

3.  Deadline-aware Rolling Queue.

4.  Call Attempt Scheduler.

5.  DTMF Result.

6.  Call Result Classification.

7.  Technical Exception.

8.  Capacity Incident.

9.  IVR Evidence.

10. Order State Machine Signal.

11. Notification Boundary.

Phụ thuộc chính:

- PACK-09.

- PACK-04.

- Notification owner.

- Security.

- PACK-10.

**8. START-CODE GATE**

**8.1. Dev chưa được code sâu nếu chưa có mapping**

Trước khi code sâu, đội kỹ thuật phải nộp:

1.  Pack-to-module mapping.

2.  Current implementation gap report.

3.  Dependency map.

4.  P0 blocker list.

5.  Proposed implementation sequence.

6.  Evidence plan.

7.  Smoke plan.

8.  Owner questions list nếu có điểm chưa rõ.

9.  Risk register.

10. Scope excluded list nếu có.

Nếu thiếu các mục này, trạng thái phải là:

START_CODE_GATE = BLOCKED

**8.2. Điều kiện được bắt đầu triển khai module**

Một module chỉ được bắt đầu triển khai khi có:

1.  Pack chủ quản rõ.

2.  Source-of-truth rõ.

3.  Upstream dependency rõ.

4.  P0 rule rõ.

5.  Boundary rõ.

6.  Evidence cần nộp rõ.

7.  Smoke cần chạy rõ.

8.  Owner decision không còn pending với scope đó.

9.  Không có conflict chưa xử lý.

10. Không có pack upstream BLOCKED cho phần bắt buộc.

**9. IMPLEMENTATION GAP REPORT**

**9.1. Mục đích**

Implementation Gap Report dùng để so sánh:

Tài liệu đã khóa yêu cầu gì  
Code hiện tại đang có gì  
Thiếu gì  
Sai gì  
Cái gì cần sửa  
Cái gì cần owner quyết định  
Cái gì là P0 blocker

**9.2. Cấu trúc gap report bắt buộc**

| **Cột**                 | **Nội dung**                                          |
|-------------------------|-------------------------------------------------------|
| Gap ID                  | Mã gap                                                |
| Pack                    | Pack liên quan                                        |
| Module                  | Module code liên quan                                 |
| Requirement             | Rule/tài liệu yêu cầu                                 |
| Current State           | Code hiện tại đang có gì                              |
| Gap Type                | Missing / Mismatch / Conflict / Not Started / Unknown |
| Severity                | P0 / P1 / P2                                          |
| Impact                  | Ảnh hưởng nếu không xử lý                             |
| Owner Decision Required | YES / NO                                              |
| Suggested Action        | Hướng xử lý đề xuất                                   |
| Evidence Required       | Evidence cần nộp sau khi xử lý                        |
| Status                  | OPEN / IN_PROGRESS / READY_FOR_REVIEW / CLOSED        |

**9.3. Gap P0 phải chặn triển khai downstream**

Nếu gap là P0, các module downstream không được production.

Ví dụ:

1.  Chưa có Quote Snapshot → AI/Facebook/Live không được chốt quote production.

2.  Chưa có Payment Confirmation → không được mark PAID.

3.  Chưa có Sale Lock → không được mở bán production.

4.  Chưa có Product Activation → không được bán SKU.

5.  Chưa có Verified Revenue → không được tính ROAS chính thức.

6.  Chưa có IVR scheduler đúng → không được gọi khách thật.

**10. DEPENDENCY CONTROL**

**10.1. Không có upstream thì downstream không được tự thay thế**

Nếu upstream chưa có, downstream không được tự tạo bản giả để chạy production.

Ví dụ:

- AI không được tự tạo price table.

- Ads không được tự tạo verified revenue.

- Facebook Gateway không được tự tạo order.

- MC AI Live không được tự lấy sản phẩm ngoài Product Scope.

- IVR không được tự hủy đơn.

- CRM không được tự gửi tin hủy đơn.

- Dashboard không được tự quyết định source-of-truth.

**10.2. Dependency phải có trạng thái**

Mỗi dependency phải có trạng thái:

| **Dependency Status**    | **Ý nghĩa**                            |
|--------------------------|----------------------------------------|
| NOT_STARTED              | Chưa bắt đầu                           |
| IN_PROGRESS              | Đang triển khai                        |
| IMPLEMENTED_PENDING_TEST | Có triển khai, chờ test                |
| TEST_PENDING             | Chưa test                              |
| SMOKE_PENDING            | Chưa smoke                             |
| EVIDENCE_PENDING         | Chưa evidence accepted                 |
| RELEASE_READY            | Đủ điều kiện trình release             |
| RELEASE_APPROVED         | Đã duyệt release                       |
| BLOCKED                  | Bị chặn                                |
| EXCLUDED_FROM_SCOPE      | Không nằm trong scope release hiện tại |

**11. P0 RULES CHO ĐỘI KỸ THUẬT**

Các hành vi sau là P0, phải chặn ngay:

1.  Hardcode giá, tồn kho, quyền lợi, tài khoản thanh toán, chương trình.

2.  AI tự tạo order hoặc payment status.

3.  Facebook Gateway tự tạo order ngoài Commerce.

4.  Ads tính ROAS từ pending revenue.

5.  MC AI Live chốt đơn public.

6.  IVR tự hủy đơn.

7.  SIM Gateway cập nhật trực tiếp order.

8.  Payment mark PAID khi chưa có xác nhận.

9.  Warehouse bán batch chưa RELEASED.

10. Public Trace lộ dữ liệu nội bộ.

11. Recall/Sale Lock bị bypass.

12. Dashboard được dùng làm source-of-truth.

13. Admin sửa tay trạng thái để hợp thức hóa PASS.

14. Downstream production trên upstream chưa release.

15. Dùng lời xác nhận miệng để PASS.

**12. EVIDENCE-FIRST IMPLEMENTATION**

**12.1. Mỗi module phải thiết kế cách nộp evidence**

Khi triển khai module, đội kỹ thuật phải nghĩ trước:

1.  Module này sẽ chứng minh đã làm xong bằng gì?

2.  Test nào chứng minh rule P0?

3.  Smoke nào chứng minh luồng chính?

4.  Log nào chứng minh không bypass?

5.  Evidence lưu ở đâu?

6.  Ai review evidence?

7.  Khi evidence fail thì xử lý thế nào?

Nếu không trả lời được, module chưa đủ điều kiện Done.

**12.2. Evidence tối thiểu theo module**

| **Module Group** | **Evidence tối thiểu**                                                 |
|------------------|------------------------------------------------------------------------|
| Foundation       | Role/permission/audit/idempotency evidence                             |
| Product/SKU      | Product activation, SKU sellable, recipe version evidence              |
| Operational      | Batch release, warehouse, inventory, trace, recall, sale lock evidence |
| Demand/MRP       | MRP threshold, procurement suppression, demand-to-PO evidence          |
| Commerce         | Quote snapshot, order state, payment, shipping evidence                |
| AI Advisor       | Resolver, guard, claim, runtime, OOS evidence                          |
| Facebook Gateway | Public/private handoff, privacy, no-order-creation evidence            |
| Ads              | Data quality, attribution, verified revenue, ROAS evidence             |
| MC AI Live       | Live plan, product scope, script, claim/privacy guard evidence         |
| IVR              | Scheduler, attempts, call result, no-direct-order-update evidence      |
| Release          | Completion report, smoke matrix, owner sign-off evidence               |

**13. CONFLICT HANDLING**

**13.1. Khi tài liệu và code mâu thuẫn**

Nếu tài liệu và code mâu thuẫn:

1.  Không sửa im lặng.

2.  Không chọn theo code vì code đang chạy.

3.  Không bỏ rule vì khó làm.

4.  Không đổi rule trong tài liệu nếu chưa có owner decision.

5.  Ghi conflict vào gap report.

6.  Đánh OWNER_REVIEW_REQUIRED.

7.  Chờ quyết định trước khi release.

**13.2. Khi hai pack có vẻ mâu thuẫn**

Nếu dev thấy hai pack có vẻ mâu thuẫn:

1.  Ghi rõ pack A nói gì.

2.  Pack B nói gì.

3.  Module nào bị ảnh hưởng.

4.  Rủi ro nếu chọn A.

5.  Rủi ro nếu chọn B.

6.  Đề xuất hướng xử lý.

7.  Chuyển owner quyết định.

Không tự chọn.

**14. OUTPUT BẮT BUỘC SAU PHẦN 1/4**

Sau khi đội kỹ thuật nhận PHẦN 1/4, output đầu tiên phải nộp là:

**14.1. Pack-to-Module Map**

Bảng map:

- Pack;

- module;

- owner kỹ thuật;

- dependency;

- P0 rule;

- evidence;

- smoke;

- status.

**14.2. Current Implementation Gap Report**

Báo cáo:

- đã có gì;

- thiếu gì;

- sai gì;

- chưa rõ gì;

- blocker gì;

- cần owner quyết định gì.

**14.3. Dependency Map**

Bảng phụ thuộc:

- upstream;

- downstream;

- status;

- blocker;

- release impact.

**14.4. P0 Blocker List**

Danh sách P0:

- blocker ID;

- pack;

- module;

- impact;

- owner;

- status;

- evidence required.

**14.5. Implementation Wave Proposal**

Đề xuất thứ tự triển khai:

1.  Wave 0 — Foundation.

2.  Wave 1 — Product / SKU / Recipe.

3.  Wave 2 — Operational Core.

4.  Wave 3 — Commerce Runtime.

5.  Wave 4 — AI Advisor.

6.  Wave 5 — Facebook Gateway.

7.  Wave 6 — Ads Measurement.

8.  Wave 7 — MC AI Live.

9.  Wave 8 — IVR.

10. Wave 9 — Completion / Release.

**15. DONE GATE CỦA PHẦN 1/4**

PHẦN 1/4 được xem là hoàn tất khi đội kỹ thuật hiểu và chấp nhận các điểm sau:

1.  Không copy-paste code rời rạc.

2.  Không code sâu trước khi mapping.

3.  MASTER / PACK là source-of-truth nghiệp vụ.

4.  Code hiện tại không được vượt tài liệu.

5.  Mỗi module phải map về pack chủ quản.

6.  Mỗi module phải có dependency rõ.

7.  Mỗi module phải có evidence plan.

8.  P0 blocker phải chặn downstream.

9.  Dashboard không phải source-of-truth.

10. Documentation Complete không phải Production Ready.

11. Implementation Complete không phải Release Ready.

12. Không có Evidence Accepted thì không Completion PASS.

13. Không có Smoke Pass thì không Release Ready.

14. Không có Owner Sign-off thì không Release Approved.

15. Không có Release Decision thì không Go-live Approved.

**16. FAIL GATE CỦA PHẦN 1/4**

PHẦN 1/4 fail nếu đội kỹ thuật:

1.  Bắt đầu code ngay mà chưa mapping.

2.  Chỉ đọc một vài pack rồi tự suy diễn.

3.  Không lập gap report.

4.  Không lập dependency map.

5.  Không ghi P0 blocker.

6.  Không có evidence plan.

7.  Dùng code hiện tại làm source-of-truth.

8.  Hardcode runtime.

9.  Tự bỏ qua upstream chưa release.

10. Tự hợp thức hóa conflict.

11. Gọi module là “xong” khi chưa có test/evidence/smoke.

12. Gọi hệ thống là production ready vì tài liệu đã hoàn tất.

Nếu xảy ra một trong các điều trên:

START_CODE_GATE = BLOCKED  
OWNER_REVIEW_REQUIRED = YES

**17. KẾT LUẬN PHẦN 1/4**

PHẦN 1/4 đã khóa nguyên tắc triển khai cho đội kỹ thuật:

1.  Ginsengfood không được xây bằng copy-paste rời rạc.

2.  Đội kỹ thuật phải triển khai theo source-of-truth MASTER / PACK.

3.  Mỗi module phải map về pack chủ quản.

4.  Mỗi dependency phải có trạng thái.

5.  Mỗi P0 blocker phải chặn downstream.

6.  Mỗi module phải có evidence và smoke.

7.  Không được code sâu trước khi có Pack-to-Module Map và Gap Report.

8.  Không được dùng documentation complete để gọi production ready.

9.  Không được bypass Commerce, Operational Core, AI Guard, Facebook Gateway, Ads Verified Revenue, MC Live Boundary, IVR Order State Machine hoặc PACK-10 Release Gateway.

Trạng thái sau PHẦN 1/4:

DEV_EXECUTION_COMMAND_PACK_PART_1 = DOCUMENTATION_COMPLETE  
START_CODE_GATE = BLOCKED_UNTIL_PACK_TO_MODULE_MAP_AND_GAP_REPORT_SUBMITTED  
PRODUCTION_READY = NO  
RELEASE_APPROVED = NO  
GO_LIVE_APPROVED = NO

**KẾT THÚC PHẦN 1/4 — DEV EXECUTION COMMAND PACK V1.0 CLEAN FINAL**

**PHẦN 2/4 — WAVE 0–3: FOUNDATION / PRODUCT / OPERATIONAL / COMMERCE**

**18. MỤC ĐÍCH CỦA PHẦN 2/4**

PHẦN 2/4 dùng để khóa thứ tự triển khai 4 wave nền tảng đầu tiên của hệ thống Ginsengfood:

1.  **Wave 0 — Foundation / Governance / Security / Evidence Base**

2.  **Wave 1 — Product / SKU / Ingredient / Recipe / Formula / Product Activation**

3.  **Wave 2 — Operational Core / Production / Warehouse / Inventory / Traceability / Recall / Sale Lock**

4.  **Wave 3 — Commerce Runtime / Quote / Cart / Order / Payment / Shipping / Fulfillment**

Đây là 4 wave nền bắt buộc trước khi triển khai sâu AI Advisor, Facebook Gateway, Ads Measurement, MC AI Live và IVR.

Không được triển khai Wave 4–8 theo production scope nếu Wave 0–3 chưa đạt tối thiểu các điều kiện nền tương ứng.

**19. NGUYÊN TẮC TRIỂN KHAI WAVE 0–3**

**19.1. Wave 0–3 là nền sống còn của toàn hệ**

Wave 0–3 quyết định:

1.  Ai được quyền làm gì.

2.  Dữ liệu nào là source-of-truth.

3.  Sản phẩm nào được bán.

4.  Công thức nào được dùng.

5.  Lô nào được sản xuất.

6.  Batch nào được release.

7.  Kho nào có tồn thật.

8.  Hàng nào sellable.

9.  Hàng nào bị khóa bán.

10. Quote nào hợp lệ.

11. Order nào là official order.

12. Payment nào được xác nhận.

13. Revenue nào có thể được verified.

14. AI/Facebook/Ads/Live/IVR được phép phụ thuộc vào đâu.

Nếu Wave 0–3 chưa chắc, các wave phía sau sẽ dễ sai toàn bộ.

**19.2. Không được làm AI / Ads / Live / IVR trước nền Commerce và Operational**

Không được ưu tiên làm các phần nhìn thấy bên ngoài trước khi nền vận hành bên trong chưa đạt.

Cấm các cách triển khai sau:

1.  Làm AI báo giá khi chưa có Quote Snapshot.

2.  Làm Ads ROAS khi chưa có Verified Revenue.

3.  Làm Facebook chốt đơn khi chưa có Order State Machine.

4.  Làm MC AI Live nói giá khi chưa có Commerce Runtime.

5.  Làm IVR xác nhận đơn khi chưa có Core Order State Machine.

6.  Làm Public Trace khi chưa có traceability whitelist.

7.  Làm bán hàng khi chưa có Sellable Gate / Sale Lock.

8.  Làm Payment khi chưa có payment confirmation rule.

9.  Làm MISA sync khi chưa có accounting boundary.

10. Làm dashboard khi source-of-truth chưa rõ.

**19.3. Wave nào cũng phải có evidence**

Mỗi wave khi hoàn tất phải nộp:

1.  Implementation evidence.

2.  Test evidence.

3.  Smoke evidence.

4.  Security evidence nếu có rủi ro.

5.  P0 blocker report.

6.  Dependency status.

7.  Owner review request.

8.  Release readiness note.

Không có evidence accepted thì wave không được PASS.

**20. WAVE 0 — FOUNDATION / GOVERNANCE / SECURITY / EVIDENCE BASE**

**20.1. Mục tiêu Wave 0**

Wave 0 tạo nền quản trị kỹ thuật để các wave sau không triển khai rời rạc.

Wave 0 phải bảo đảm hệ thống có tối thiểu:

1.  Cấu trúc dự án rõ.

2.  Phạm vi module rõ.

3.  Quyền truy cập rõ.

4.  Audit/log nền rõ.

5.  Idempotency cho thao tác quan trọng.

6.  Runtime/config registry nền.

7.  Evidence registry nền.

8.  P0 blocker registry nền.

9.  Release status registry nền.

10. Environment DEV/STAGING/PROD hoặc ít nhất DEV/STAGING rõ ràng.

11. Quy ước test/smoke/evidence.

12. Quy ước owner review.

Wave 0 không nhằm tạo chức năng bán hàng.  
Wave 0 nhằm tạo nền để triển khai đúng và kiểm soát được.

**20.2. Source-of-truth chính của Wave 0**

Wave 0 phải đọc tối thiểu:

1.  MASTER-00 — Master documentation index.

2.  MASTER-01 — Global source-of-truth registry.

3.  MASTER-02 — Cross-pack dependency.

4.  MASTER-06 — Security / data / compliance nếu đã khóa.

5.  MASTER-07 — Global release / production readiness / go-live control.

6.  PACK-10 — Completion / Evidence / Gateway / Release Readiness.

7.  Business Pack — Role / permission / audit rules.

8.  Functional Pack — Module dependency / acceptance criteria.

9.  UI Pack — chỉ dùng để hiểu surface, không dùng làm business truth.

**20.3. Module scope Wave 0**

Wave 0 bao gồm các nhóm nền:

| **Nhóm**                        | **Mục tiêu**                                  |
|---------------------------------|-----------------------------------------------|
| Project Structure               | Xác định module, boundary, ownership          |
| Environment                     | DEV / STAGING / PROD hoặc ít nhất DEV/STAGING |
| Auth / User / Role / Permission | Nền phân quyền                                |
| Audit Base                      | Ghi nhận hành động quan trọng                 |
| Idempotency Base                | Chống thao tác lặp ở command quan trọng       |
| Runtime Config Base             | Không hardcode dữ liệu nghiệp vụ              |
| Evidence Registry Base          | Lưu bằng chứng test/smoke/release             |
| P0 Blocker Registry Base        | Quản trị blocker                              |
| Release Status Base             | Quản trị trạng thái pack/module               |
| Security Baseline               | Chặn lộ dữ liệu, quyền sai, bypass            |
| Owner Review Flow               | Cơ chế trình owner quyết định                 |

**20.4. Wave 0 — nguyên tắc triển khai**

Dev phải khóa các nguyên tắc sau trước khi đi tiếp:

1.  Không có module nào không có owner.

2.  Không có action quan trọng nào không có permission.

3.  Không có command quan trọng nào thiếu audit.

4.  Không có command rủi ro nào thiếu idempotency.

5.  Không có runtime data nào bị hardcode.

6.  Không có evidence nào không gắn pack/module.

7.  Không có PASS nào không có evidence accepted.

8.  Không có release nào không có owner sign-off.

9.  Không có production ready nào chỉ dựa vào tài liệu.

10. Không có downstream nào vượt upstream.

**20.5. Wave 0 — output bắt buộc**

Dev phải nộp:

| **Output** | **Nội dung**                      |
|------------|-----------------------------------|
| W0-OUT-001 | Project/module map                |
| W0-OUT-002 | Environment map                   |
| W0-OUT-003 | Role/permission baseline map      |
| W0-OUT-004 | Audit action baseline             |
| W0-OUT-005 | Idempotency command list          |
| W0-OUT-006 | Runtime/config registry plan      |
| W0-OUT-007 | Evidence registry plan            |
| W0-OUT-008 | P0 blocker registry plan          |
| W0-OUT-009 | Release status registry plan      |
| W0-OUT-010 | Security baseline checklist       |
| W0-OUT-011 | Pack-to-module mapping bản đầu    |
| W0-OUT-012 | Implementation Gap Report bản đầu |

**20.6. Wave 0 — smoke tối thiểu**

Wave 0 phải có smoke chứng minh:

| **Smoke ID** | **Luồng kiểm tra**       | **Điều kiện PASS**                                      |
|--------------|--------------------------|---------------------------------------------------------|
| W0-SMK-001   | User/role/permission nền | User không có quyền không thực hiện được action bị chặn |
| W0-SMK-002   | Audit nền                | Action quan trọng có audit record                       |
| W0-SMK-003   | Idempotency nền          | Command gửi lặp không tạo kết quả trùng                 |
| W0-SMK-004   | Runtime config nền       | Dữ liệu runtime không hardcode trực tiếp trong logic    |
| W0-SMK-005   | Evidence registry nền    | Evidence có pack/module/scope/status                    |
| W0-SMK-006   | P0 blocker registry nền  | P0 blocker chặn release status                          |
| W0-SMK-007   | Release status nền       | Module chưa đủ evidence không được Release Ready        |
| W0-SMK-008   | Security baseline        | Không truy cập trái quyền vào nhóm dữ liệu nhạy cảm     |

**20.7. Wave 0 — Done Gate**

Wave 0 chỉ được Done khi:

1.  Pack-to-module mapping bản đầu đã có.

2.  Implementation Gap Report bản đầu đã có.

3.  Dependency map bản đầu đã có.

4.  P0 blocker list bản đầu đã có.

5.  Role/permission baseline rõ.

6.  Audit baseline rõ.

7.  Evidence registry baseline rõ.

8.  Release status baseline rõ.

9.  Smoke tối thiểu PASS.

10. Evidence được nộp và review.

11. Không có P0 nền chưa xử lý.

12. Owner cho phép chuyển sang Wave 1.

**20.8. Wave 0 — Fail Gate**

Wave 0 fail nếu:

1.  Không có pack-to-module mapping.

2.  Không có gap report.

3.  Không có permission baseline.

4.  Không có audit baseline.

5.  Không có evidence registry.

6.  Không có P0 blocker registry.

7.  Không có release status registry.

8.  Dev bắt đầu làm sâu Product/Commerce/AI khi Foundation chưa rõ.

9.  Có hardcode dữ liệu nghiệp vụ trong nền.

10. Không phân biệt DEV/STAGING/PROD hoặc môi trường test.

11. Không có smoke evidence.

Nếu Wave 0 fail:

WAVE_0_STATUS = BLOCKED  
WAVE_1_START = BLOCKED  
OWNER_REVIEW_REQUIRED = YES

**21. WAVE 1 — PRODUCT / SKU / INGREDIENT / RECIPE / FORMULA / PRODUCT ACTIVATION**

**21.1. Mục tiêu Wave 1**

Wave 1 tạo nền sản phẩm cho toàn bộ hệ thống.

Không có Wave 1 đúng, các module sau sẽ sai vì:

1.  AI không biết tư vấn sản phẩm nào.

2.  Commerce không biết bán SKU nào.

3.  Ads không biết đo SKU nào.

4.  Live không biết cue sản phẩm nào.

5.  MRP không biết tính nguyên liệu nào.

6.  Production không biết sản xuất theo công thức nào.

7.  Warehouse không biết batch thuộc SKU nào.

8.  Traceability không biết public trace cho sản phẩm nào.

9.  Sale Lock không biết khóa bán theo SKU/lô nào.

10. Member/program không biết áp dụng sản phẩm nào.

**21.2. Source-of-truth chính của Wave 1**

Wave 1 phải đọc tối thiểu:

1.  PACK-02 — Product Master / SKU / Ingredient / Recipe / Formula Version / Product Activation.

2.  PACK-01 — Sellable / Sale Lock / Batch Release liên quan.

3.  PACK-03 — BOM / formula scaling / material planning liên quan.

4.  PACK-04 — Quote/order cần SKU sellable.

5.  PACK-06 — AI Advisor product knowledge.

6.  Business Pack — Product/business rule liên quan.

7.  Functional Pack — AC liên quan SKU/recipe/activation.

8.  Các file chính sách sản phẩm/giá/thành viên nếu có liên quan.

**21.3. Module scope Wave 1**

Wave 1 bao gồm:

| **Nhóm module**           | **Nội dung**                                |
|---------------------------|---------------------------------------------|
| Product Master            | Thông tin sản phẩm cấp thương mại           |
| SKU Master                | SKU bán hàng / vận hành                     |
| Ingredient Master         | Nguyên liệu chính/phụ/bổ sung               |
| Recipe                    | Công thức sản phẩm                          |
| Formula Version           | Phiên bản công thức                         |
| G1 Formula Lock           | Công thức nền go-live                       |
| Future Formula Version    | G2/G3 mở rộng có kiểm soát                  |
| Product Activation        | Điều kiện sản phẩm được kích hoạt           |
| Sellable Gate Link        | Kết nối với tồn kho/batch release/sale lock |
| Product Knowledge Runtime | Dữ liệu cho AI Advisor dùng                 |
| Product Scope Registry    | Dữ liệu cho Live/Ads/Commerce dùng          |

**21.4. Wave 1 — nguyên tắc triển khai**

Dev phải giữ các nguyên tắc:

1.  SKU chưa active không được bán.

2.  Product active không đồng nghĩa sellable nếu chưa có tồn/batch release/sale lock clear.

3.  Recipe version không được ghi đè lịch sử.

4.  G1 công thức go-live phải được khóa.

5.  G2/G3 tương lai phải coexist, không phá dữ liệu cũ.

6.  Product Knowledge cho AI phải lấy từ source hợp lệ, không viết tự do trong AI.

7.  Product Scope cho Live phải lấy từ registry/runtime, không nhập tay tùy ý.

8.  Product cho Ads phải map được tới Commerce/Revenue.

9.  Product cho MRP phải map được tới BOM/formula.

10. Product cho Traceability phải map được batch/QR/public trace.

**21.5. Wave 1 — output bắt buộc**

Dev phải nộp:

| **Output** | **Nội dung**                      |
|------------|-----------------------------------|
| W1-OUT-001 | Product/SKU master gap report     |
| W1-OUT-002 | Ingredient master gap report      |
| W1-OUT-003 | Recipe/formula version gap report |
| W1-OUT-004 | G1 formula lock confirmation plan |
| W1-OUT-005 | Product activation rule map       |
| W1-OUT-006 | Sellable gate dependency map      |
| W1-OUT-007 | Product knowledge runtime map     |
| W1-OUT-008 | SKU-to-Commerce dependency map    |
| W1-OUT-009 | SKU-to-Operational dependency map |
| W1-OUT-010 | SKU-to-AI/Live/Ads dependency map |
| W1-OUT-011 | P0 blocker list for product/SKU   |
| W1-OUT-012 | Wave 1 evidence package           |

**21.6. Wave 1 — smoke tối thiểu**

| **Smoke ID** | **Luồng kiểm tra**     | **Điều kiện PASS**                                                   |
|--------------|------------------------|----------------------------------------------------------------------|
| W1-SMK-001   | Tạo/đọc product master | Product có trạng thái rõ, không mơ hồ                                |
| W1-SMK-002   | SKU activation         | SKU chưa active không được sellable                                  |
| W1-SMK-003   | Recipe version         | Formula version mới không ghi đè version cũ                          |
| W1-SMK-004   | G1 lock                | G1 formula được nhận diện là baseline go-live                        |
| W1-SMK-005   | Sellable dependency    | Product active nhưng batch chưa RELEASED thì chưa sellable           |
| W1-SMK-006   | Product Knowledge      | AI chỉ đọc dữ liệu product đã được approve                           |
| W1-SMK-007   | Product Scope          | Live chỉ cue SKU trong product scope hợp lệ                          |
| W1-SMK-008   | SKU blocked            | SKU bị lock/recall/not sellable không được đưa sang Commerce/AI/Live |

**21.7. Wave 1 — P0 Blocker**

Các lỗi sau là P0:

1.  SKU chưa active vẫn bán được.

2.  Product active bị hiểu nhầm là sellable.

3.  Recipe version ghi đè lịch sử.

4.  G1 formula không khóa được.

5.  AI dùng product content ngoài approved source.

6.  Live cue sản phẩm ngoài Product Scope.

7.  Commerce quote SKU chưa đủ điều kiện.

8.  Ads đo SKU không map được revenue.

9.  Product bị recall/sale lock vẫn hiển thị sellable.

10. Công thức/MRP không map được nguyên liệu.

**21.8. Wave 1 — Done Gate**

Wave 1 chỉ Done khi:

1.  Product/SKU/Ingredient/Recipe/Formula baseline rõ.

2.  Product activation rule rõ.

3.  Sellable dependency rõ.

4.  Product Knowledge runtime rõ.

5.  SKU-to-Commerce map rõ.

6.  SKU-to-Operational map rõ.

7.  SKU-to-AI/Live/Ads map rõ.

8.  Smoke tối thiểu PASS.

9.  Evidence accepted.

10. P0 blocker cleared.

11. Owner cho phép chuyển sang Wave 2.

**21.9. Wave 1 — Fail Gate**

Wave 1 fail nếu:

1.  Không xác định được SKU master.

2.  Không xác định được công thức baseline.

3.  Không phân biệt active và sellable.

4.  Không có formula version control.

5.  Không có Product Knowledge source cho AI.

6.  Không có Product Scope cho Live.

7.  Không có evidence.

8.  Có SKU bị bán khi chưa đủ điều kiện.

9.  Có conflict product/recipe chưa owner quyết định.

Nếu Wave 1 fail:

WAVE_1_STATUS = BLOCKED  
WAVE_2_START = BLOCKED_FOR_PRODUCT_DEPENDENT_SCOPE  
COMMERCE_SKU_RELEASE = BLOCKED  
AI_PRODUCT_ADVICE_SCOPE = BLOCKED

**22. WAVE 2 — OPERATIONAL CORE / PRODUCTION / WAREHOUSE / INVENTORY / TRACEABILITY / RECALL / SALE LOCK**

**22.1. Mục tiêu Wave 2**

Wave 2 tạo nền vận hành thật cho sản xuất, kho, tồn, truy xuất, thu hồi và khóa bán.

Wave 2 trả lời:

1.  Nguyên liệu đến từ đâu.

2.  Lô nguyên liệu nào đủ điều kiện sản xuất.

3.  Lệnh sản xuất nào hợp lệ.

4.  Vật tư nào được xuất.

5.  Bán thành phẩm/thành phẩm nào được tạo.

6.  Batch nào qua QC.

7.  Batch nào được release.

8.  Batch nào được nhập kho.

9.  Tồn nào được tính.

10. Sản phẩm nào được sellable.

11. Lô nào bị recall.

12. Lô nào phải khóa bán.

13. Public trace được hiển thị gì.

14. Internal trace giữ dữ liệu gì.

**22.2. Source-of-truth chính của Wave 2**

Wave 2 phải đọc tối thiểu:

1.  PACK-01 — Operational / Production / Warehouse / Inventory / Traceability / Recall / Sale Lock.

2.  PACK-02 — SKU / Ingredient / Recipe / Formula.

3.  PACK-03 — Demand / MRP / Material / Packaging Control.

4.  Functional Pack — Operational flow, use case, acceptance criteria.

5.  Business Pack — Operational rule, audit, role/permission.

6.  UI Pack — chỉ để hiểu màn hình/surface, không thay rule.

7.  MASTER-03 — Traceability ID Standard nếu đã khóa.

8.  PACK-10 — Evidence / Gateway / Release.

**22.3. Module scope Wave 2**

Wave 2 bao gồm:

| **Nhóm module**     | **Nội dung**                      |
|---------------------|-----------------------------------|
| Source Origin       | Nguồn trồng/mua/nguyên liệu       |
| Raw Material Intake | Tiếp nhận nguyên liệu             |
| Incoming QC         | QC đầu vào                        |
| Raw Lot Readiness   | Đánh dấu lô sẵn sàng sản xuất     |
| Production Order    | Lệnh sản xuất                     |
| Material Request    | Đề nghị xuất vật tư/nguyên liệu   |
| Material Issue      | Xuất vật tư/nguyên liệu           |
| Material Receipt    | Nhận vật tư vào sản xuất          |
| Production Process  | Sơ chế / cấp đông / sấy thăng hoa |
| Packaging / QR      | Đóng gói / in / QR                |
| Batch QC            | QC thành phẩm                     |
| Batch Release       | Release batch                     |
| Warehouse Receipt   | Nhập kho thành phẩm               |
| Inventory Ledger    | Sổ kho / tồn                      |
| Traceability        | Truy xuất nội bộ                  |
| Public Trace        | Truy xuất công khai               |
| Recall              | Thu hồi                           |
| Sale Lock           | Khóa bán                          |

**22.4. Wave 2 — operational flow bắt buộc**

Wave 2 phải giữ flow nền:

1.  Source Origin Verification.

2.  Raw Material Intake.

3.  Incoming QC.

4.  Raw Lot Mark Ready.

5.  Raw Lot Ready For Production.

6.  Production Order Snapshot.

7.  Material Request.

8.  Material Issue.

9.  Material Receipt.

10. Production Process.

11. Packaging / QR.

12. Finished QC.

13. Batch Release.

14. Warehouse Receipt.

15. Inventory Ledger.

16. Trace / Public Trace.

17. Recall / Recovery.

18. Sale Lock / Stop Sale.

Không được bỏ qua Batch Release.  
Không được bán hàng chưa Warehouse/Sellable clear.  
Không được cho Sale Lock / Recall bị bypass.

**22.5. Wave 2 — nguyên tắc triển khai**

Dev phải giữ:

1.  QC_PASS không đồng nghĩa RELEASED.

2.  READY_FOR_PRODUCTION không đồng nghĩa QC_PASS nếu chưa mark-ready đúng rule.

3.  Warehouse chỉ nhận batch RELEASED.

4.  Material issue mới làm giảm tồn; material receipt không được giảm tồn lần hai.

5.  Inventory ledger phải append-only theo nguyên tắc nghiệp vụ.

6.  Public Trace chỉ hiển thị whitelist.

7.  Public Trace không lộ supplier detail, operator, approver, costing, accounting, MISA, QC defect, loss, waste, internal trace IDs.

8.  Recall snapshot không ghi đè lịch sử.

9.  Sale Lock thắng Commerce, AI, Ads, Live, CRM.

10. Không có batch release thì không sellable.

11. Không có trace chain thì không public trace.

12. Không có recall/sale lock smoke thì không mở bán production.

**22.6. Wave 2 — output bắt buộc**

| **Output** | **Nội dung**                         |
|------------|--------------------------------------|
| W2-OUT-001 | Operational module map               |
| W2-OUT-002 | Raw material intake gap report       |
| W2-OUT-003 | QC/readiness gap report              |
| W2-OUT-004 | Production order snapshot gap report |
| W2-OUT-005 | Material issue/receipt gap report    |
| W2-OUT-006 | Production process gap report        |
| W2-OUT-007 | Packaging/QR gap report              |
| W2-OUT-008 | Batch QC/release gap report          |
| W2-OUT-009 | Warehouse/inventory gap report       |
| W2-OUT-010 | Trace/public trace gap report        |
| W2-OUT-011 | Recall/sale lock gap report          |
| W2-OUT-012 | Operational P0 blocker list          |
| W2-OUT-013 | Wave 2 evidence package              |

**22.7. Wave 2 — smoke tối thiểu**

| **Smoke ID** | **Luồng kiểm tra**        | **Điều kiện PASS**                                                     |
|--------------|---------------------------|------------------------------------------------------------------------|
| W2-SMK-001   | Raw intake → Incoming QC  | Lô nguyên liệu chỉ đi tiếp khi đúng trạng thái                         |
| W2-SMK-002   | QC_PASS → Mark Ready      | QC_PASS không tự động thành READY_FOR_PRODUCTION                       |
| W2-SMK-003   | Production Order Snapshot | Lệnh sản xuất giữ snapshot, không phụ thuộc live data thay đổi lịch sử |
| W2-SMK-004   | Material Issue            | Xuất nguyên liệu làm giảm tồn đúng một lần                             |
| W2-SMK-005   | Material Receipt          | Nhận vào sản xuất không làm giảm tồn lần hai                           |
| W2-SMK-006   | Production Process        | Flow sản xuất đi đúng chuỗi đã khóa                                    |
| W2-SMK-007   | Packaging / QR            | QR gắn đúng batch/scope, không tạo mã thương mại sai                   |
| W2-SMK-008   | QC_PASS vs RELEASED       | QC_PASS không đồng nghĩa Batch Release                                 |
| W2-SMK-009   | Warehouse Receipt         | Kho chỉ nhận batch RELEASED                                            |
| W2-SMK-010   | Inventory Ledger          | Ledger không sửa lịch sử                                               |
| W2-SMK-011   | Traceability              | Trace được source → raw lot → production → batch → QR                  |
| W2-SMK-012   | Public Trace              | Chỉ hiển thị whitelist, không leak nội bộ                              |
| W2-SMK-013   | Recall                    | Recall chặn được batch/SKU liên quan                                   |
| W2-SMK-014   | Sale Lock                 | Sale Lock chặn Commerce/AI/Ads/Live                                    |

**22.8. Wave 2 — P0 Blocker**

Các lỗi sau là P0:

1.  QC_PASS bị hiểu là RELEASED.

2.  Warehouse nhận batch chưa RELEASED.

3.  Raw lot chưa READY_FOR_PRODUCTION vẫn được issue.

4.  Material issue giảm tồn sai hoặc giảm nhiều lần.

5.  Inventory ledger bị sửa lịch sử.

6.  Production order không có snapshot.

7.  QR không trace được batch.

8.  Public Trace leak dữ liệu nội bộ.

9.  Recall không chặn bán.

10. Sale Lock không chặn Commerce/AI/Ads/Live.

11. Batch chưa release vẫn sellable.

12. Trace chain không đầy đủ nhưng vẫn public trace.

13. Operator/admin bypass trạng thái không audit.

14. Không có evidence vận hành.

**22.9. Wave 2 — Done Gate**

Wave 2 chỉ Done khi:

1.  Operational flow chạy đúng.

2.  QC/readiness/release tách rõ.

3.  Warehouse/inventory hoạt động đúng rule.

4.  Trace/public trace đạt whitelist.

5.  Recall/sale lock chặn được bán.

6.  Operational smoke PASS.

7.  Evidence accepted.

8.  P0 cleared.

9.  Dependency với PACK-02/PACK-03 clear theo scope.

10. Owner cho phép chuyển sang Wave 3.

**22.10. Wave 2 — Fail Gate**

Wave 2 fail nếu:

1.  Không tách QC_PASS và RELEASED.

2.  Không tách READY_FOR_PRODUCTION và QC_PASS.

3.  Không có sale lock.

4.  Không có recall lock.

5.  Không có trace chain.

6.  Không có public whitelist.

7.  Không có inventory ledger đúng.

8.  Không có batch release.

9.  Không có evidence.

10. Có batch chưa release vẫn bán được.

Nếu Wave 2 fail:

WAVE_2_STATUS = BLOCKED  
COMMERCE_SELLABLE_SCOPE = BLOCKED  
AI_SELLABLE_ADVICE_SCOPE = BLOCKED  
ADS_SCALE_FOR_AFFECTED_SKU = BLOCKED  
LIVE_PRODUCT_SCOPE = BLOCKED

**23. WAVE 3 — COMMERCE RUNTIME / QUOTE / CART / ORDER / PAYMENT / SHIPPING / FULFILLMENT**

**23.1. Mục tiêu Wave 3**

Wave 3 tạo lõi thương mại để AI, Facebook, Ads, Live, IVR và CRM không tự xử lý sai logic bán hàng.

Wave 3 phải trả lời:

1.  Giá nào là giá đang áp dụng.

2.  Chương trình nào đang chạy.

3.  Thành viên được quyền lợi gì.

4.  Quote nào được snapshot.

5.  Cart nào chỉ là draft.

6.  Order nào là official order.

7.  Payment nào được xác nhận.

8.  Chuyển khoản nào cần accounting review.

9.  COD nào hợp lệ.

10. Shipping nào áp dụng.

11. VAT hiển thị thế nào.

12. Fulfillment đi theo trạng thái nào.

13. Revenue nào đủ điều kiện verified.

14. IVR signal được đưa vào order state thế nào.

15. Notification nào được phép phát hành.

**23.2. Source-of-truth chính của Wave 3**

Wave 3 phải đọc tối thiểu:

1.  PACK-04 — Order / Quote / Cart / Payment / Shipping / Fulfillment / Commerce Runtime.

2.  MASTER-04 — Product / Member / Pricing / Program Governance nếu đã khóa.

3.  MASTER-05 — Payment / Accounting / MISA Boundary nếu đã khóa.

4.  PACK-01 — Sellable / Sale Lock / Recall.

5.  PACK-02 — Product / SKU / Activation.

6.  PACK-07 — Verified Revenue dependency.

7.  PACK-09 — IVR signal dependency nếu scope có IVR.

8.  PACK-10 — Evidence / Gateway / Release.

9.  Chính sách thành viên / giá / hoa hồng / chương trình đã owner xác nhận.

**23.3. Module scope Wave 3**

Wave 3 bao gồm:

| **Nhóm module**             | **Nội dung**                          |
|-----------------------------|---------------------------------------|
| Price Runtime               | Giá niêm yết / chương trình / runtime |
| Member Benefit Runtime      | Quyền lợi thành viên                  |
| Program Runtime             | 24/7 / Giờ Vàng / chương trình khác   |
| Quote Snapshot              | Nguồn báo giá duy nhất                |
| Cart Draft                  | Giỏ nháp, chưa phải order             |
| Official Order              | Đơn chính thức                        |
| Order State Machine         | Trạng thái đơn                        |
| Payment                     | COD / chuyển khoản / cổng thanh toán  |
| Direct Bank Transfer Review | Đối soát chuyển khoản                 |
| Shipping Eligibility        | Điều kiện giao hàng                   |
| VAT Display                 | Hiển thị VAT rõ                       |
| Fulfillment Boundary        | Ranh giới xử lý giao hàng             |
| Notification Boundary       | Ai được gửi thông báo giao dịch       |
| Verified Revenue Link       | Nền cho Ads/ROAS                      |
| IVR Signal Input            | Tín hiệu IVR nếu dùng xác nhận đơn    |

**23.4. Wave 3 — nguyên tắc triển khai**

Dev phải giữ các nguyên tắc:

1.  Quote Snapshot là nguồn báo giá duy nhất.

2.  AI không tự tính giá.

3.  Facebook Gateway không tự tính giá.

4.  MC AI Live không tự tính giá.

5.  Ads không tự tính revenue.

6.  Cart draft không phải official order.

7.  Order chưa chắc là paid revenue.

8.  Pending revenue không tính ROAS chính thức.

9.  Payment không mark PAID nếu chưa có xác nhận hợp lệ.

10. Direct bank transfer không hardcode tài khoản trong AI/Gateway/CRM/Admin/frontend/static template.

11. Chuyển khoản cần payment reference/transfer memo hoặc accounting review.

12. VAT phải hiển thị trạng thái rõ theo runtime.

13. Shipping phải theo runtime/policy, không hỏi vòng.

14. Order State Machine là final decision cho trạng thái đơn.

15. IVR chỉ gửi input signal nếu scope có IVR.

16. Notification owner mới phát hành thông báo giao dịch hợp lệ.

17. Không có Commerce Runtime thì các wave sau không được production quote/order đầy đủ.

**23.5. Wave 3 — output bắt buộc**

| **Output** | **Nội dung**                               |
|------------|--------------------------------------------|
| W3-OUT-001 | Commerce module map                        |
| W3-OUT-002 | Price/program/member runtime gap report    |
| W3-OUT-003 | Quote Snapshot gap report                  |
| W3-OUT-004 | Cart draft vs official order gap report    |
| W3-OUT-005 | Order State Machine gap report             |
| W3-OUT-006 | Payment/COD/direct transfer gap report     |
| W3-OUT-007 | Shipping/VAT/fulfillment gap report        |
| W3-OUT-008 | Notification boundary gap report           |
| W3-OUT-009 | Verified revenue dependency map            |
| W3-OUT-010 | IVR signal dependency map nếu scope có IVR |
| W3-OUT-011 | Commerce P0 blocker list                   |
| W3-OUT-012 | Wave 3 evidence package                    |

**23.6. Wave 3 — smoke tối thiểu**

| **Smoke ID** | **Luồng kiểm tra**          | **Điều kiện PASS**                                      |
|--------------|-----------------------------|---------------------------------------------------------|
| W3-SMK-001   | SKU active/sellable → quote | Chỉ SKU sellable mới được quote                         |
| W3-SMK-002   | Price runtime               | Giá lấy từ runtime, không hardcode                      |
| W3-SMK-003   | Member benefit runtime      | Quyền lợi thành viên tính theo rule/runtime             |
| W3-SMK-004   | Program runtime             | Giờ Vàng/24-7 đúng điều kiện runtime                    |
| W3-SMK-005   | Quote Snapshot              | Quote giữ snapshot, không bị đổi bởi runtime sau đó     |
| W3-SMK-006   | Cart draft                  | Cart draft không tự thành official order                |
| W3-SMK-007   | Official order              | Order chính thức đi qua state machine                   |
| W3-SMK-008   | Payment confirmation        | Không mark PAID nếu chưa có xác nhận hợp lệ             |
| W3-SMK-009   | Direct bank transfer        | Không hardcode tài khoản, có reference/review           |
| W3-SMK-010   | Shipping eligibility        | Shipping đúng policy/runtime                            |
| W3-SMK-011   | VAT display                 | VAT hiển thị rõ: áp dụng / không áp dụng / theo runtime |
| W3-SMK-012   | Fulfillment boundary        | Chỉ đơn đủ điều kiện mới chuyển fulfillment             |
| W3-SMK-013   | Verified revenue            | Chỉ revenue xác nhận hợp lệ mới dùng cho đo lường       |
| W3-SMK-014   | Sale Lock impact            | Sản phẩm bị sale lock không quote/order được            |
| W3-SMK-015   | IVR signal nếu có           | IVR result chỉ là input, không tự đổi trạng thái đơn    |

**23.7. Wave 3 — P0 Blocker**

Các lỗi sau là P0:

1.  AI/Facebook/Live tự tính giá ngoài Commerce Runtime.

2.  Quote không snapshot.

3.  Cart draft bị xem là official order.

4.  Order state bị sửa trực tiếp ngoài state machine.

5.  Payment mark PAID sai.

6.  Direct bank transfer hardcode tài khoản ở nơi bị cấm.

7.  Không có payment reference hoặc accounting review cho chuyển khoản khi cần.

8.  Shipping/VAT mơ hồ.

9.  Pending revenue bị dùng làm verified revenue.

10. Order unpaid bị tính doanh thu chính thức.

11. Sale Lock / Recall không chặn quote/order.

12. IVR result tự hủy đơn nếu scope có IVR.

13. Notification không đúng owner.

14. Không có evidence commerce smoke.

**23.8. Wave 3 — Done Gate**

Wave 3 chỉ Done khi:

1.  Price/program/member runtime rõ.

2.  Quote Snapshot hoạt động đúng.

3.  Cart draft và official order tách rõ.

4.  Order State Machine rõ.

5.  Payment confirmation rõ.

6.  Direct bank transfer review rõ.

7.  Shipping/VAT rõ.

8.  Fulfillment boundary rõ.

9.  Verified revenue dependency rõ.

10. Sale Lock/Recall chặn quote/order.

11. Smoke tối thiểu PASS.

12. Evidence accepted.

13. P0 cleared.

14. Owner cho phép chuyển sang Wave 4.

**23.9. Wave 3 — Fail Gate**

Wave 3 fail nếu:

1.  Không có Quote Snapshot.

2.  Không có Order State Machine.

3.  Payment có thể mark PAID sai.

4.  Direct bank transfer bị hardcode tài khoản.

5.  Cart draft bị xem là order.

6.  Order unpaid bị xem là revenue.

7.  Shipping/VAT không rõ.

8.  Sale Lock không chặn order.

9.  Không có verified revenue boundary.

10. Không có evidence.

Nếu Wave 3 fail:

WAVE_3_STATUS = BLOCKED  
AI_QUOTE_PRODUCTION = BLOCKED  
FACEBOOK_ORDER_ROUTING = BLOCKED  
ADS_VERIFIED_REVENUE = BLOCKED  
MC_LIVE_PRICE_CUE = BLOCKED  
IVR_ORDER_CONFIRMATION = BLOCKED_FOR_ORDER_DEPENDENT_SCOPE

**24. WAVE 0–3 CROSS-DEPENDENCY CONTROL**

**24.1. Dependency tổng hợp**

| **Downstream**   | **Phụ thuộc Wave 0**          | **Phụ thuộc Wave 1**                | **Phụ thuộc Wave 2**                    | **Phụ thuộc Wave 3** |
|------------------|-------------------------------|-------------------------------------|-----------------------------------------|----------------------|
| AI Advisor       | Permission, runtime, evidence | Product Knowledge, SKU              | Sellable/Sale Lock                      | Quote/Price/Order    |
| Facebook Gateway | Security, audit, evidence     | Product scope nếu có reply sản phẩm | Sale Lock nếu bán                       | Commerce routing     |
| Ads Measurement  | Evidence, release status      | SKU/product mapping                 | Sellable/fulfillment                    | Verified Revenue     |
| MC AI Live       | Permission/evidence           | Product Scope                       | Sale Lock/Recall                        | Commerce Runtime     |
| IVR              | Security/evidence             | Không trực tiếp                     | Không trực tiếp, trừ fulfillment impact | Order State Machine  |
| MISA/Accounting  | Audit/evidence                | SKU/product mapping                 | Inventory/warehouse                     | Payment/revenue      |
| Public Trace     | Security/evidence             | Product public data                 | Trace chain                             | Không trực tiếp      |

**24.2. Nguyên tắc chặn downstream**

Nếu Wave 0 fail:

Không triển khai production scope cho Wave 1–8.

Nếu Wave 1 fail:

Không bán SKU liên quan.  
Không tư vấn AI sản phẩm đó.  
Không cue live sản phẩm đó.  
Không đo Ads theo SKU đó.

Nếu Wave 2 fail:

Không mở sellable production.  
Không cho Commerce order sản phẩm liên quan.  
Không cho AI/Ads/Live bán sản phẩm liên quan.

Nếu Wave 3 fail:

Không cho AI/Facebook/Live/IVR chốt quote/order production.  
Không tính Ads ROAS chính thức.  
Không gọi revenue là verified.

**25. WAVE 0–3 RELEASE STATUS MẶC ĐỊNH**

Trước khi có evidence accepted, trạng thái mặc định là:

| **Wave** | **Documentation** | **Implementation** | **Smoke**        | **Evidence** | **Release Ready** | **Production Ready** |
|----------|-------------------|--------------------|------------------|--------------|-------------------|----------------------|
| Wave 0   | Theo tài liệu     | PENDING_EVIDENCE   | PENDING_EVIDENCE | PENDING      | NO                | NO                   |
| Wave 1   | Theo tài liệu     | PENDING_EVIDENCE   | PENDING_EVIDENCE | PENDING      | NO                | NO                   |
| Wave 2   | Theo tài liệu     | PENDING_EVIDENCE   | PENDING_EVIDENCE | PENDING      | NO                | NO                   |
| Wave 3   | Theo tài liệu     | PENDING_EVIDENCE   | PENDING_EVIDENCE | PENDING      | NO                | NO                   |

Không được nâng trạng thái nếu thiếu evidence accepted.

**26. OWNER DECISION POINTS CHO WAVE 0–3**

**26.1. Owner decision sau Wave 0**

Owner cần quyết định:

1.  Foundation baseline đã đủ để chuyển Wave 1 chưa.

2.  Role/permission baseline có cần chỉnh không.

3.  Evidence registry dùng cách nào.

4.  P0 blocker registry đã đủ chưa.

5.  Release status registry có dùng làm gate chính không.

6.  Module map có đúng hướng không.

**26.2. Owner decision sau Wave 1**

Owner cần quyết định:

1.  SKU/Product baseline có đúng chưa.

2.  G1 formula lock đã đủ chưa.

3.  Product activation rule đã đúng chưa.

4.  Product Knowledge cho AI đã được phép dùng chưa.

5.  SKU nào thuộc release scope đầu tiên.

6.  SKU nào excluded khỏi release scope.

**26.3. Owner decision sau Wave 2**

Owner cần quyết định:

1.  Operational flow đã đúng thực tế nhà máy/kho chưa.

2.  Batch release/sellable gate đã đủ chặt chưa.

3.  Public Trace whitelist đã an toàn chưa.

4.  Recall/Sale Lock đã đủ chặn chưa.

5.  SKU/lô nào được phép bán thử nếu có limited release.

6.  Scope nào chưa đủ phải excluded.

**26.4. Owner decision sau Wave 3**

Owner cần quyết định:

1.  Quote Snapshot đã đủ làm nguồn báo giá duy nhất chưa.

2.  Payment/COD/direct transfer scope nào làm trước.

3.  Shipping/VAT rule đã đủ rõ chưa.

4.  Verified Revenue boundary đã đủ cho Ads chưa.

5.  Order State Machine đã đủ cho IVR/Notification chưa.

6.  Commerce có được cho Wave 4–8 phụ thuộc chưa.

**27. DEV DELIVERY CHECKLIST CHO WAVE 0–3**

Trước khi báo xong Wave 0–3, dev phải nộp checklist:

| **Nhóm**          | **Wave 0**     | **Wave 1**     | **Wave 2**     | **Wave 3**     |
|-------------------|----------------|----------------|----------------|----------------|
| Module map        | Có             | Có             | Có             | Có             |
| Gap report        | Có             | Có             | Có             | Có             |
| Dependency map    | Có             | Có             | Có             | Có             |
| P0 blocker list   | Có             | Có             | Có             | Có             |
| Test evidence     | Có             | Có             | Có             | Có             |
| Smoke evidence    | Có             | Có             | Có             | Có             |
| Security evidence | Có nếu áp dụng | Có nếu áp dụng | Có nếu áp dụng | Có nếu áp dụng |
| Owner review      | Có             | Có             | Có             | Có             |
| Release status    | Có             | Có             | Có             | Có             |
| Excluded scope    | Có nếu có      | Có nếu có      | Có nếu có      | Có nếu có      |

**28. DONE GATE TỔNG HỢP PHẦN 2/4**

PHẦN 2/4 được xem là đạt khi đội kỹ thuật hiểu và triển khai theo nguyên tắc:

1.  Wave 0 phải đi trước Wave 1–8.

2.  Wave 1 phải đủ trước khi bán/tư vấn/cue/đo SKU.

3.  Wave 2 phải đủ trước khi mở sellable/warehouse/trace/recall/sale lock.

4.  Wave 3 phải đủ trước khi AI/Facebook/Live/IVR chốt quote/order production.

5.  Không wave nào PASS nếu thiếu evidence accepted.

6.  Không downstream nào được vượt upstream.

7.  Không được dùng dữ liệu hardcode thay runtime.

8.  Không được gọi revenue là verified nếu chưa qua Commerce/Payment/Accounting boundary.

9.  Không được gọi hệ thống production ready nếu chỉ mới documentation/implementation.

10. Owner phải quyết định trước khi chuyển wave production scope.

**29. FAIL GATE TỔNG HỢP PHẦN 2/4**

PHẦN 2/4 fail nếu:

1.  Dev làm Wave 4–8 trước khi Wave 0–3 đủ nền.

2.  Không có Foundation evidence.

3.  Không có Product/SKU activation evidence.

4.  Không có Operational smoke evidence.

5.  Không có Commerce quote/order/payment evidence.

6.  SKU chưa active vẫn bán.

7.  Batch chưa RELEASED vẫn sellable.

8.  Quote không snapshot.

9.  Payment mark PAID sai.

10. Sale Lock / Recall không chặn bán.

11. AI/Facebook/Live tự tính giá.

12. Ads tính ROAS từ pending revenue.

13. IVR phụ thuộc order state chưa sẵn sàng.

14. Owner chưa review nhưng vẫn chuyển production scope.

Nếu có một trong các lỗi trên:

WAVE_0_3_GATE = BLOCKED  
WAVE_4_8_PRODUCTION_SCOPE = BLOCKED  
OWNER_REVIEW_REQUIRED = YES

**30. KẾT LUẬN PHẦN 2/4**

PHẦN 2/4 đã khóa thứ tự triển khai Wave 0–3 cho Ginsengfood:

1.  Wave 0 tạo nền governance, security, permission, audit, evidence và release status.

2.  Wave 1 tạo nền Product / SKU / Ingredient / Recipe / Formula / Product Activation.

3.  Wave 2 tạo nền Operational Core / Production / Warehouse / Inventory / Traceability / Recall / Sale Lock.

4.  Wave 3 tạo nền Commerce Runtime / Quote / Cart / Order / Payment / Shipping / Fulfillment.

5.  AI Advisor, Facebook Gateway, Ads Measurement, MC AI Live và IVR chỉ được production theo scope khi phụ thuộc Wave 0–3 đã clear.

6.  Không có evidence accepted thì không wave nào PASS.

7.  Không có smoke pass thì không Release Ready.

8.  Không có owner decision thì không chuyển wave production scope.

9.  Không được dùng documentation complete để gọi production ready.

10. Không được cho downstream phụ thuộc pack/wave chưa release.

Trạng thái sau PHẦN 2/4:

DEV_EXECUTION_COMMAND_PACK_PART_2 = DOCUMENTATION_COMPLETE  
WAVE_0_3_EXECUTION_STATUS = PENDING_IMPLEMENTATION_EVIDENCE  
WAVE_4_8_PRODUCTION_SCOPE = BLOCKED_UNTIL_WAVE_0_3_DEPENDENCIES_CLEAR  
RELEASE_READY = NO  
PRODUCTION_READY = NO  
GO_LIVE_APPROVED = NO

**KẾT THÚC PHẦN 2/4 — DEV EXECUTION COMMAND PACK V1.0 CLEAN FINAL**

**PHẦN 3/4 — WAVE 4–8: AI ADVISOR / FACEBOOK GATEWAY / ADS MEASUREMENT / MC AI LIVE / IVR**

**31. MỤC ĐÍCH CỦA PHẦN 3/4**

PHẦN 3/4 khóa thứ tự triển khai các wave bên ngoài lõi vận hành và thương mại:

1.  **Wave 4 — AI Advisor / Runtime Resolver / Claim Guard / Sales Boundary**

2.  **Wave 5 — Facebook Channel Gateway / Meta Live / Messenger / Private Handoff**

3.  **Wave 6 — Ads Measurement / Attribution / Verified Revenue / ROAS / Scale Gate**

4.  **Wave 7 — MC AI Live / Live Script / Hosting Assistant / Real-time Orchestration**

5.  **Wave 8 — IVR Order Confirmation / Internal SIM Gateway**

Đây là các wave có khả năng tiếp xúc trực tiếp với khách hàng, doanh thu, dữ liệu, quảng cáo, live và xác nhận đơn. Vì vậy không được triển khai tự do, không được hardcode, không được vượt source-of-truth và không được production nếu Wave 0–3 chưa đủ điều kiện tương ứng.

**32. NGUYÊN TẮC CHUNG CHO WAVE 4–8**

**32.1. Wave 4–8 là downstream, không phải lõi quyết định cuối**

Các wave này không được thay thế lõi:

| **Wave**         | **Không được thay thế**                                                                      |
|------------------|----------------------------------------------------------------------------------------------|
| AI Advisor       | Không thay Commerce Runtime, Product Master, Claim Guard owner, Payment, Order State Machine |
| Facebook Gateway | Không thay AI Advisor, Commerce, Order, Payment                                              |
| Ads Measurement  | Không thay Commerce, Payment, MISA, Verified Revenue                                         |
| MC AI Live       | Không thay AI Advisor, Facebook Gateway, Commerce, Ads Measurement                           |
| IVR              | Không thay Core Order State Machine, Payment, Delivery, CRM, Notification Owner              |

Nguyên tắc bắt buộc:

Wave 4–8 chỉ được sử dụng dữ liệu, tín hiệu và trạng thái từ upstream đã được release theo scope. Không được tự tạo source-of-truth mới.

**32.2. Không có Wave 0–3 thì Wave 4–8 không được production**

Nếu Wave 0 chưa clear:

Không có nền permission, audit, evidence, security, release status.

Nếu Wave 1 chưa clear:

Không có nền sản phẩm, SKU, công thức, activation, product knowledge.

Nếu Wave 2 chưa clear:

Không có sellable, stock, batch release, recall, sale lock, trace.

Nếu Wave 3 chưa clear:

Không có quote, order, payment, shipping, verified revenue boundary.

Vì vậy Wave 4–8 không được production nếu thiếu dependency bắt buộc.

**33. WAVE 4 — AI ADVISOR / RUNTIME RESOLVER / CLAIM GUARD / SALES BOUNDARY**

**33.1. Mục tiêu Wave 4**

Wave 4 triển khai AI Advisor như lớp tư vấn, bắt nhu cầu, chọn sản phẩm, dùng runtime resolver, dùng guard và render câu trả lời đúng quy tắc.

AI Advisor không phải module tự quyết định giá, tồn kho, payment, order, claim khoa học hay trạng thái bán hàng.

AI Advisor phải vận hành theo chuỗi:

Intent → Entity → Variable → Resolver → Guard → Action → Render

Không được trả lời tự do ngoài guard.

**33.2. Source-of-truth chính của Wave 4**

Wave 4 phải đọc tối thiểu:

1.  PACK-06 — AI Advisor / Claim Guard / Runtime Resolver / Customer Consulting Boundary.

2.  PACK-02 — Product / SKU / Product Knowledge.

3.  PACK-04 — Quote / Order / Payment / Commerce Runtime.

4.  PACK-01 — Sellable / Sale Lock / Recall.

5.  PACK-05 — Facebook/Messenger handoff nếu AI chạy trên kênh Facebook.

6.  PACK-10 — Evidence / Gateway / Release.

7.  Chính sách giá, thành viên, chương trình, hoa hồng nếu AI có tư vấn quote/quyền lợi.

**33.3. Module scope Wave 4**

| **Nhóm module**            | **Nội dung**                                                             |
|----------------------------|--------------------------------------------------------------------------|
| Intent Recognition         | Nhận diện ý định khách                                                   |
| Entity Capture             | Bắt sản phẩm, nhu cầu, người dùng, chế độ ăn, bệnh nền, dị ứng, số lượng |
| Variable Resolver          | Lấy biến runtime thay vì hardcode                                        |
| Product Knowledge Resolver | Lấy dữ liệu sản phẩm approved                                            |
| Price / Program Resolver   | Lấy giá, chương trình, quyền lợi theo Commerce Runtime                   |
| Stock / Sellable Resolver  | Kiểm tra còn hàng, sellable, sale lock                                   |
| Claim Guard                | Chặn claim vượt whitelist                                                |
| Health Guard               | Xử lý tình huống nhạy cảm sức khỏe                                       |
| OOS Guard                  | Chặn bán SKU hết hàng                                                    |
| Customer Memory Boundary   | Khách cũ phải hỏi trải nghiệm trước khi bán tiếp                         |
| Quote Draft Action         | Chỉ tạo draft/quote qua Commerce Runtime                                 |
| Render Template            | Trả lời đúng tone, đúng boundary                                         |

**33.4. Nguyên tắc triển khai Wave 4**

Dev phải giữ:

1.  AI không hardcode giá.

2.  AI không hardcode tồn kho.

3.  AI không hardcode tài khoản thanh toán.

4.  AI không hardcode quyền lợi thành viên.

5.  AI không hardcode chương trình.

6.  AI không tự tạo official order.

7.  AI không tự xác nhận payment.

8.  AI không tự gửi thông báo hủy đơn.

9.  AI không chốt SKU hết hàng.

10. AI không nói claim điều trị/thay thuốc/chữa bệnh.

11. AI không nói SKU nội bộ với khách.

12. AI phải dùng public product name.

13. Khách cũ quay lại phải hỏi trải nghiệm sản phẩm trước.

14. Health-sensitive phải đi qua Health Guard.

15. OOS phải đề xuất sản phẩm thay thế đúng chay/mặn/nhu cầu.

16. Quote/order phải đi qua Commerce Runtime.

**33.5. Output bắt buộc Wave 4**

| **Output** | **Nội dung**                                |
|------------|---------------------------------------------|
| W4-OUT-001 | AI Advisor module map                       |
| W4-OUT-002 | Intent/entity/variable/resolver map         |
| W4-OUT-003 | Product Knowledge dependency map            |
| W4-OUT-004 | Price/program/member runtime dependency map |
| W4-OUT-005 | Claim Guard test list                       |
| W4-OUT-006 | Health Guard test list                      |
| W4-OUT-007 | OOS Guard test list                         |
| W4-OUT-008 | Customer Care Before Next Sale test list    |
| W4-OUT-009 | Quote/order draft dependency map            |
| W4-OUT-010 | AI P0 blocker list                          |
| W4-OUT-011 | Wave 4 evidence package                     |

**33.6. Smoke tối thiểu Wave 4**

| **Smoke ID** | **Luồng kiểm tra**         | **Điều kiện PASS**                                       |
|--------------|----------------------------|----------------------------------------------------------|
| W4-SMK-001   | Khách hỏi sản phẩm         | AI lấy Product Knowledge approved                        |
| W4-SMK-002   | Khách hỏi giá              | AI lấy giá từ Commerce Runtime                           |
| W4-SMK-003   | Khách hỏi chương trình     | AI lấy chương trình runtime, không tự suy diễn           |
| W4-SMK-004   | Khách muốn mua             | AI tạo quote/order draft qua Commerce Runtime            |
| W4-SMK-005   | SKU hết hàng               | AI không chốt SKU hết hàng, đề xuất thay thế đúng rule   |
| W4-SMK-006   | Claim sức khỏe             | Claim Guard chặn claim điều trị/thay thuốc               |
| W4-SMK-007   | Bệnh nền/nhạy cảm sức khỏe | Health Guard hoạt động                                   |
| W4-SMK-008   | Khách cũ quay lại          | AI hỏi trải nghiệm sản phẩm trước                        |
| W4-SMK-009   | Sale Lock/Recall           | AI không bán sản phẩm bị khóa                            |
| W4-SMK-010   | Payment                    | AI không xác nhận đã thanh toán nếu chưa có nguồn hợp lệ |

**33.7. P0 Blocker Wave 4**

Các lỗi sau là P0:

1.  AI tự tính giá.

2.  AI tự xác nhận tồn kho.

3.  AI bán SKU hết hàng.

4.  AI bán SKU bị sale lock/recall.

5.  AI nói claim điều trị.

6.  AI tự tạo official order.

7.  AI tự mark paid.

8.  AI tự gửi tin hủy đơn.

9.  AI hỏi vòng khi runtime đã có dữ liệu.

10. AI bỏ qua khách cũ cần hỏi trải nghiệm trước.

11. AI tư vấn sai chay/mặn/dị ứng.

12. AI dùng tên SKU nội bộ với khách.

**33.8. Done Gate Wave 4**

Wave 4 chỉ Done khi:

1.  Resolver map hoàn tất.

2.  Guard map hoàn tất.

3.  Product Knowledge dependency clear.

4.  Commerce Runtime dependency clear theo scope.

5.  Claim Guard smoke PASS.

6.  Health Guard smoke PASS.

7.  OOS Guard smoke PASS.

8.  Quote/order draft smoke PASS.

9.  Evidence accepted.

10. Owner cho phép chuyển sang Wave 5 nếu chạy Facebook/Messenger.

**33.9. Fail Gate Wave 4**

Wave 4 fail nếu:

1.  AI còn hardcode runtime.

2.  AI vượt Claim Guard.

3.  AI tự tính giá.

4.  AI tự tạo order.

5.  AI bán hàng bị khóa.

6.  AI không có evidence.

7.  Commerce Runtime chưa clear nhưng AI vẫn quote production.

Nếu Wave 4 fail:

AI_ADVISOR_PRODUCTION_SCOPE = BLOCKED  
FACEBOOK_AI_ROUTING = BLOCKED  
MC_AI_LIVE_CONSULT_HANDOFF = BLOCKED  
OWNER_REVIEW_REQUIRED = YES

**34. WAVE 5 — FACEBOOK CHANNEL GATEWAY / META LIVE / MESSENGER / PRIVATE HANDOFF**

**34.1. Mục tiêu Wave 5**

Wave 5 triển khai lớp Gateway cho Facebook, Meta Live, comment, Messenger và private handoff.

Facebook Gateway không phải AI Advisor.  
Facebook Gateway không phải Commerce Runtime.  
Facebook Gateway không phải Order System.  
Facebook Gateway không phải Ads Measurement.

Vai trò đúng:

1.  Nhận event từ Facebook/Meta.

2.  Phân loại public/private.

3.  Chuyển comment phù hợp sang Messenger.

4.  Giữ privacy.

5.  Gọi AI Advisor đúng boundary.

6.  Gọi Commerce đúng boundary.

7.  Ghi evidence/log sự kiện.

8.  Không tự tạo order.

**34.2. Source-of-truth chính Wave 5**

Wave 5 phải đọc:

1.  PACK-05 — Facebook Channel Gateway / Meta Live & Messenger / Private Handoff.

2.  PACK-06 — AI Advisor boundary.

3.  PACK-04 — Commerce Runtime.

4.  PACK-01 — Sale Lock / Recall nếu có bán hàng.

5.  PACK-08 — MC AI Live nếu có live orchestration.

6.  PACK-10 — Evidence / Gateway / Release.

7.  Meta/Facebook page/app policy thực tế nếu triển khai production.

**34.3. Module scope Wave 5**

| **Nhóm module**          | **Nội dung**                                       |
|--------------------------|----------------------------------------------------|
| Page Config              | Page nào được bật                                  |
| Comment Intake           | Nhận comment                                       |
| Intent Classification    | Nhận diện hỏi giá, mua, khiếu nại, sức khỏe, mơ hồ |
| Public Reply Boundary    | Trả lời public an toàn                             |
| Messenger Handoff        | Chuyển private                                     |
| Private Context          | Giữ ngữ cảnh sau handoff                           |
| Privacy Guard            | Chặn lộ thông tin cá nhân                          |
| Complaint Routing        | Khiếu nại không xử lý như lead bán hàng            |
| Health-sensitive Routing | Chuyển private                                     |
| AI Advisor Routing       | Gọi AI đúng boundary                               |
| Commerce Routing         | Không tự tạo order                                 |
| Event Evidence           | Log/evidence gateway                               |

**34.4. Nguyên tắc triển khai Wave 5**

Dev phải giữ:

1.  Comment public không phải order.

2.  Comment public không được hỏi lộ thông tin cá nhân.

3.  Public comment mơ hồ phải kéo private nếu cần tư vấn sâu.

4.  Sau handoff thành công, ngữ cảnh tiếp theo mặc định private.

5.  Gateway không tự tạo order.

6.  Gateway không tự báo giá nếu phải lấy Commerce Runtime.

7.  Gateway không tự xác nhận payment.

8.  Gateway không tự gửi tin hủy đơn.

9.  Health-sensitive phải chuyển private.

10. Complaint không phải lead bán hàng.

11. Gateway không spam.

12. Gateway phải tôn trọng Meta policy.

13. Gateway phải ghi evidence cho routing quan trọng.

**34.5. Output bắt buộc Wave 5**

| **Output** | **Nội dung**                       |
|------------|------------------------------------|
| W5-OUT-001 | Facebook Gateway module map        |
| W5-OUT-002 | Page config scope                  |
| W5-OUT-003 | Public/private boundary map        |
| W5-OUT-004 | Messenger handoff map              |
| W5-OUT-005 | Privacy Guard test list            |
| W5-OUT-006 | Complaint routing test list        |
| W5-OUT-007 | Health-sensitive routing test list |
| W5-OUT-008 | AI Advisor dependency map          |
| W5-OUT-009 | Commerce dependency map            |
| W5-OUT-010 | Gateway P0 blocker list            |
| W5-OUT-011 | Wave 5 evidence package            |

**34.6. Smoke tối thiểu Wave 5**

| **Smoke ID** | **Luồng kiểm tra**           | **Điều kiện PASS**                          |
|--------------|------------------------------|---------------------------------------------|
| W5-SMK-001   | Public comment hỏi giá       | Không trả sai boundary; chuyển private đúng |
| W5-SMK-002   | Comment muốn mua             | Gateway không tự tạo order                  |
| W5-SMK-003   | Comment có thông tin cá nhân | Privacy Guard xử lý đúng                    |
| W5-SMK-004   | Sau private handoff          | Ngữ cảnh tiếp theo giữ private              |
| W5-SMK-005   | Health-sensitive comment     | Không tư vấn sâu public                     |
| W5-SMK-006   | Complaint                    | Không xử lý như lead bán hàng               |
| W5-SMK-007   | AI routing                   | Gọi AI Advisor đúng scope                   |
| W5-SMK-008   | Commerce routing             | Quote/order đi qua Commerce Runtime         |
| W5-SMK-009   | Sale Lock                    | Gateway không đẩy bán sản phẩm bị khóa      |
| W5-SMK-010   | Evidence                     | Gateway event có log/evidence               |

**34.7. P0 Blocker Wave 5**

Các lỗi sau là P0:

1.  Gateway tự tạo order.

2.  Gateway lộ thông tin cá nhân public.

3.  Gateway báo giá hardcode.

4.  Gateway bỏ qua private handoff.

5.  Gateway xử lý complaint như lead bán hàng.

6.  Gateway tư vấn sức khỏe sâu ở public.

7.  Gateway spam/vi phạm policy.

8.  Gateway route vào AI chưa release.

9.  Gateway route vào Commerce chưa release.

10. Gateway tiếp tục bán sản phẩm bị sale lock/recall.

**34.8. Done Gate Wave 5**

Wave 5 chỉ Done khi:

1.  Public/private boundary rõ.

2.  Messenger handoff PASS.

3.  Privacy Guard PASS.

4.  Health-sensitive routing PASS.

5.  Complaint routing PASS.

6.  AI Advisor dependency clear.

7.  Commerce dependency clear.

8.  Evidence accepted.

9.  P0 cleared.

10. Owner cho phép chuyển sang Wave 6 hoặc Wave 7 theo scope.

**34.9. Fail Gate Wave 5**

Wave 5 fail nếu:

1.  Public leak dữ liệu.

2.  Gateway tạo order.

3.  Gateway hardcode giá.

4.  Private handoff fail.

5.  Complaint bị bán hàng tiếp.

6.  Không có evidence.

7.  AI/Commerce upstream chưa clear nhưng Gateway vẫn production.

Nếu Wave 5 fail:

FACEBOOK_GATEWAY_PRODUCTION = BLOCKED  
LIVE_COMMENT_ROUTING = BLOCKED  
ADS_FACEBOOK_ATTRIBUTION_SCOPE = BLOCKED_IF_DEPENDENT  
OWNER_REVIEW_REQUIRED = YES

**35. WAVE 6 — ADS MEASUREMENT / ATTRIBUTION / VERIFIED REVENUE / ROAS / SCALE GATE**

**35.1. Mục tiêu Wave 6**

Wave 6 triển khai lớp đo lường quảng cáo, attribution, verified revenue, ROAS, CPA, AOV, scale gate và stop gate.

Ads Measurement không tạo doanh thu.  
Ads Measurement không quyết định order.  
Ads Measurement không xác nhận payment.  
Ads Measurement không thay MISA/kế toán.  
Ads Measurement không thay Commerce Runtime.

Vai trò đúng:

1.  Ghi nhận event marketing.

2.  Gắn attribution theo rule.

3.  Đọc revenue đã verified.

4.  Tính metric.

5.  Kiểm soát data quality.

6.  Đề xuất scale/stop theo gate.

7.  Không tự gọi revenue khi chưa verified.

**35.2. Source-of-truth chính Wave 6**

Wave 6 phải đọc:

1.  PACK-07 — Ads / ROAS / Attribution / Verified Revenue.

2.  PACK-04 — Commerce / Order / Payment / Verified Revenue boundary.

3.  PACK-05 — Facebook Gateway nếu Ads từ Facebook.

4.  PACK-02 — Product/SKU mapping.

5.  PACK-01 — Sellable / Fulfillment / Sale Lock.

6.  MASTER payment/accounting/MISA nếu có.

7.  PACK-10 — Evidence / Gateway / Release.

**35.3. Module scope Wave 6**

| **Nhóm module**       | **Nội dung**                             |
|-----------------------|------------------------------------------|
| Ads Event Registry    | Lưu event marketing                      |
| Funnel Metrics        | Comment, inbox, quote, cart, order, paid |
| Attribution Rule      | Quy tắc gán nguồn                        |
| Verified Revenue Link | Chỉ lấy doanh thu đã xác nhận            |
| Data Quality Gate     | Kiểm tra chất lượng dữ liệu              |
| ROAS Calculation      | Chỉ tính từ verified revenue             |
| CPA / AOV             | Tính từ nguồn hợp lệ                     |
| Scale Gate            | Điều kiện tăng ngân sách                 |
| Stop Gate             | Điều kiện dừng                           |
| Dashboard             | Hiển thị, không làm source-of-truth      |
| Evidence Package      | Bằng chứng đo lường                      |

**35.4. Nguyên tắc triển khai Wave 6**

Dev phải giữ:

1.  Comment không phải order.

2.  Inbox không phải revenue.

3.  Quote không phải revenue.

4.  Cart draft không phải official order.

5.  Order chưa paid không phải verified revenue.

6.  Pending revenue không tính ROAS chính thức.

7.  Verified Revenue phải đến từ nguồn hợp lệ.

8.  Attribution Rule phải rõ trước khi kết luận nguồn doanh thu.

9.  Dashboard không phải source-of-truth.

10. Không có Data Quality PASS thì không scale.

11. Không có Stock/Sellable/Fulfillment clear thì không scale.

12. Scale phải có owner decision.

**35.5. Output bắt buộc Wave 6**

| **Output** | **Nội dung**                      |
|------------|-----------------------------------|
| W6-OUT-001 | Ads measurement module map        |
| W6-OUT-002 | Event taxonomy map                |
| W6-OUT-003 | Funnel metric definition          |
| W6-OUT-004 | Attribution rule proposal         |
| W6-OUT-005 | Verified revenue dependency map   |
| W6-OUT-006 | Data quality checklist            |
| W6-OUT-007 | ROAS/CPA/AOV calculation boundary |
| W6-OUT-008 | Scale/stop gate rule map          |
| W6-OUT-009 | Ads P0 blocker list               |
| W6-OUT-010 | Wave 6 evidence package           |

**35.6. Smoke tối thiểu Wave 6**

| **Smoke ID** | **Luồng kiểm tra** | **Điều kiện PASS**                           |
|--------------|--------------------|----------------------------------------------|
| W6-SMK-001   | Comment → Funnel   | Comment chỉ là event, không phải order       |
| W6-SMK-002   | Inbox → Funnel     | Inbox không phải revenue                     |
| W6-SMK-003   | Quote/cart         | Quote/cart không phải verified revenue       |
| W6-SMK-004   | Paid order         | Chỉ paid/verified mới vào revenue chính thức |
| W6-SMK-005   | Attribution        | Có rule rõ, không gán nguồn tùy tiện         |
| W6-SMK-006   | ROAS               | ROAS chỉ tính từ verified revenue            |
| W6-SMK-007   | Data Quality       | Data Quality Gate PASS trước scale           |
| W6-SMK-008   | Scale Gate         | Scale cần owner decision                     |
| W6-SMK-009   | Stop Gate          | Stop khi fail threshold/risk                 |
| W6-SMK-010   | Sale Lock          | Không scale sản phẩm bị khóa bán             |

**35.7. P0 Blocker Wave 6**

Các lỗi sau là P0:

1.  Tính ROAS từ pending revenue.

2.  Dùng inbox/comment làm revenue.

3.  Attribution không rõ.

4.  Dashboard làm source-of-truth.

5.  Scale khi Data Quality chưa PASS.

6.  Scale khi stock/sellable/fulfillment chưa clear.

7.  Scale sản phẩm bị sale lock/recall.

8.  Dùng order unpaid làm revenue.

9.  Không có verified revenue evidence.

10. Không có owner decision nhưng vẫn scale.

**35.8. Done Gate Wave 6**

Wave 6 chỉ Done khi:

1.  Event taxonomy rõ.

2.  Attribution Rule rõ.

3.  Verified Revenue dependency clear.

4.  Data Quality Gate PASS.

5.  ROAS/CPA/AOV boundary rõ.

6.  Scale/Stop Gate rõ.

7.  Smoke PASS.

8.  Evidence accepted.

9.  P0 cleared.

10. Owner cho phép scale/pilot theo scope.

**35.9. Fail Gate Wave 6**

Wave 6 fail nếu:

1.  Không có verified revenue.

2.  Dùng pending revenue tính ROAS.

3.  Attribution mơ hồ.

4.  Dashboard làm nguồn thật.

5.  Data Quality fail.

6.  Không có evidence.

7.  Owner chưa duyệt scale nhưng vẫn scale.

Nếu Wave 6 fail:

ADS_MEASUREMENT_RELEASE = BLOCKED  
ADS_SCALE_GATE = BLOCKED  
OFFICIAL_ROAS_REPORTING = BLOCKED  
OWNER_REVIEW_REQUIRED = YES

**36. WAVE 7 — MC AI LIVE / LIVE SCRIPT / HOSTING ASSISTANT / REAL-TIME ORCHESTRATION**

**36.1. Mục tiêu Wave 7**

Wave 7 triển khai MC AI Live như trợ lý điều phối live, hỗ trợ run-of-show, script, host cue, Q&A, claim guard, privacy guard, risk P0 và handoff.

MC AI Live không phải AI Advisor.  
MC AI Live không phải Facebook Gateway.  
MC AI Live không phải Commerce Runtime.  
MC AI Live không phải Ads Measurement.  
MC AI Live không chốt đơn public.

**36.2. Source-of-truth chính Wave 7**

Wave 7 phải đọc:

1.  PACK-08 — MC AI Live.

2.  PACK-05 — Facebook Gateway / handoff.

3.  PACK-06 — AI Advisor / Claim Guard.

4.  PACK-07 — Ads / measurement handoff.

5.  PACK-04 — Commerce Runtime.

6.  PACK-01 — Sellable / Sale Lock / Recall.

7.  PACK-02 — Product Scope.

8.  PACK-10 — Evidence / Gateway / Release.

**36.3. Module scope Wave 7**

| **Nhóm module** | **Nội dung**                           |
|-----------------|----------------------------------------|
| Live Plan       | Kế hoạch live                          |
| Product Scope   | SKU/sản phẩm được nói trong live       |
| Run-of-Show     | Kịch bản vận hành live                 |
| Script Registry | Bộ script approved                     |
| Host Cue        | Gợi ý cho host                         |
| Live Q&A Assist | Hỗ trợ trả lời live                    |
| Claim Guard     | Chặn claim sai                         |
| Privacy Guard   | Chặn public privacy issue              |
| Private Handoff | Chuyển Messenger/private               |
| Risk P0 Control | Khiếu nại, sức khỏe, recall, sale lock |
| Live Evidence   | Bằng chứng vận hành live               |

**36.4. Nguyên tắc triển khai Wave 7**

Dev phải giữ:

1.  Không có Live Plan thì không production.

2.  Không có Product Scope thì không cue sản phẩm.

3.  Không có Claim Guard thì không cue sức khỏe/khoa học.

4.  Không có Privacy Guard thì không xử lý comment nhạy cảm public.

5.  Không có PACK-05 handoff thì không chuyển private production.

6.  Không có PACK-06 consult boundary thì không tư vấn cá nhân hóa.

7.  Không có PACK-07 measurement handoff thì live thiếu evidence đo lường.

8.  MC AI Live không tự tính giá.

9.  MC AI Live không tạo quote.

10. MC AI Live không tạo order.

11. MC AI Live không xác nhận payment.

12. Không fake urgency.

13. Không fake scarcity.

14. Sale Lock / Recall / Not Sellable thắng mọi script.

15. Complaint không phải lead bán hàng.

16. Risk P0 thắng mọi cue bán hàng.

**36.5. Output bắt buộc Wave 7**

| **Output** | **Nội dung**                   |
|------------|--------------------------------|
| W7-OUT-001 | MC AI Live module map          |
| W7-OUT-002 | Live Plan template             |
| W7-OUT-003 | Product Scope map              |
| W7-OUT-004 | Run-of-Show map                |
| W7-OUT-005 | Script Registry map            |
| W7-OUT-006 | Claim Guard dependency map     |
| W7-OUT-007 | Privacy Guard dependency map   |
| W7-OUT-008 | Private handoff dependency map |
| W7-OUT-009 | Measurement handoff map        |
| W7-OUT-010 | Live P0 blocker list           |
| W7-OUT-011 | Wave 7 evidence package        |

**36.6. Smoke tối thiểu Wave 7**

| **Smoke ID** | **Luồng kiểm tra** | **Điều kiện PASS**                          |
|--------------|--------------------|---------------------------------------------|
| W7-SMK-001   | Live Plan          | Có Live Plan trước production               |
| W7-SMK-002   | Product Scope      | Chỉ cue SKU trong scope và sellable         |
| W7-SMK-003   | Script Registry    | Cue đúng script approved                    |
| W7-SMK-004   | Claim Guard        | Không cue claim vượt whitelist              |
| W7-SMK-005   | Privacy Guard      | Không xử lý dữ liệu cá nhân public          |
| W7-SMK-006   | Private Handoff    | Chuyển đúng Messenger/private               |
| W7-SMK-007   | Price cue          | Không tự nói giá khi thiếu Commerce Runtime |
| W7-SMK-008   | Urgency/scarcity   | Không fake urgency/scarcity                 |
| W7-SMK-009   | Complaint          | Không bán tiếp trên complaint               |
| W7-SMK-010   | Recall/Sale Lock   | Chặn cue sản phẩm bị khóa                   |

**36.7. P0 Blocker Wave 7**

Các lỗi sau là P0:

1.  Live không có Live Plan.

2.  Cue sản phẩm ngoài Product Scope.

3.  Cue sản phẩm not sellable.

4.  Cue claim vượt whitelist.

5.  Nói giá không qua Commerce Runtime.

6.  Tạo quote/order trực tiếp.

7.  Fake urgency/scarcity.

8.  Bán tiếp trên complaint.

9.  Không private handoff khi cần.

10. Bỏ qua sale lock/recall.

11. Không có live evidence.

12. Ads/measurement handoff fail nếu live có đo lường.

**36.8. Done Gate Wave 7**

Wave 7 chỉ Done khi:

1.  Live Plan rõ.

2.  Product Scope rõ.

3.  Script Registry rõ.

4.  Claim Guard PASS.

5.  Privacy Guard PASS.

6.  Private handoff PASS.

7.  Risk P0 Control PASS.

8.  Measurement handoff rõ nếu có Ads.

9.  Evidence accepted.

10. Owner cho phép live production theo scope.

**36.9. Fail Gate Wave 7**

Wave 7 fail nếu:

1.  Không có Live Plan.

2.  Không có Product Scope.

3.  Cue sản phẩm bị khóa.

4.  Fake urgency/scarcity.

5.  Tạo quote/order trực tiếp.

6.  Không có Claim Guard.

7.  Không có private handoff.

8.  Không có evidence.

Nếu Wave 7 fail:

MC_AI_LIVE_PRODUCTION = BLOCKED  
LIVE_ORCHESTRATION_SCOPE = BLOCKED  
OWNER_REVIEW_REQUIRED = YES

**37. WAVE 8 — IVR ORDER CONFIRMATION / INTERNAL SIM GATEWAY**

**37.1. Mục tiêu Wave 8**

Wave 8 triển khai IVR Order Confirmation bằng Internal SIM Gateway theo đúng mục đích:

CALL_PURPOSE = ORDER_CONFIRMATION_ONLY

IVR không phải sales.  
IVR không phải CRM.  
IVR không phải marketing.  
IVR không phải chăm sóc khách hàng.  
IVR không phải payment.  
IVR không phải delivery.  
IVR không phải warehouse.  
IVR không phải MISA.  
IVR không phải AI Advisor.  
IVR không phải Facebook Gateway.

IVR chỉ tạo tín hiệu xác nhận đơn. Core Order State Machine là lớp quyết định cuối.

**37.2. Source-of-truth chính Wave 8**

Wave 8 phải đọc:

1.  PACK-09 — IVR Order Confirmation / Internal SIM Gateway.

2.  PACK-04 — Order State Machine / Commerce Runtime.

3.  PACK-10 — Evidence / Gateway / Release.

4.  Security/Data policy liên quan số điện thoại, call logs.

5.  Notification boundary liên quan thông báo sau khi Core hủy đơn.

6.  PACK-05 / PACK-06 nếu kênh thông báo dùng Messenger/AI context.

**37.3. Module scope Wave 8**

| **Nhóm module**              | **Nội dung**                                                          |
|------------------------------|-----------------------------------------------------------------------|
| Internal SIM Gateway Server  | Server gọi qua SIM nội bộ                                             |
| SIM Capacity Control         | 1 SIM = 1 active outbound call                                        |
| Deadline-aware Rolling Queue | Scheduler theo hạn xác nhận                                           |
| Program Window Scheduler     | Giờ Vàng / 24-7                                                       |
| Call Attempt Policy          | Số lần gọi theo chương trình                                          |
| DTMF Handler                 | Phím 1 / 0 / 9                                                        |
| Call Result Classification   | Confirmed / cancel / no answer / invalid / technical error / capacity |
| Technical Exception          | Lỗi kỹ thuật không nhầm lỗi khách                                     |
| Capacity Incident            | Quá tải không nhầm khách không nghe                                   |
| Order Signal Input           | IVR result chỉ là input signal                                        |
| Notification Boundary        | Tin hủy chỉ sau Core cancel                                           |
| IVR Evidence                 | Bằng chứng cuộc gọi/scheduler/result                                  |

**37.4. Nguyên tắc triển khai Wave 8**

Dev phải giữ:

1.  CALL_PURPOSE = ORDER_CONFIRMATION_ONLY.

2.  1 SIM = 1 ACTIVE OUTBOUND CALL.

3.  Scheduler bắt buộc là DEADLINE_AWARE_ROLLING_QUEUE.

4.  Golden Hour: 5 phút / 2 attempts / interval 2 phút 30 giây.

5.  24/7: 15 phút / 3 attempts / T0, T0+5, T0+10.

6.  BATCH_AFTER_SESSION_CALLING = PROHIBITED.

7.  Technical error không phải khách không nghe.

8.  Capacity overload không phải lỗi khách.

9.  Invalid phone không được nhầm với no answer.

10. No answer là máy có tín hiệu gọi hợp lệ nhưng khách không nghe sau đủ attempts.

11. IVR result chỉ là input signal.

12. Core Order State Machine là final decision layer.

13. SIM Gateway không cập nhật order trực tiếp.

14. Admin không sửa giả IVR result.

15. Phím 1 = khách xác nhận tiếp tục xử lý đơn.

16. Phím 0 = khách không đặt hoặc muốn hủy đơn.

17. Phím 9 hỗ trợ người thật hiện NOT_ENABLED nếu chưa bật.

18. Post-IVR cancellation notice chỉ gửi sau khi Core đã hủy đơn chính thức.

19. SIM Gateway không gửi tin nhắn hủy đơn.

20. AI Advisor không tự gửi tin hủy đơn.

21. CRM không dùng tin hủy đơn như marketing/upsell.

**37.5. Output bắt buộc Wave 8**

| **Output** | **Nội dung**                            |
|------------|-----------------------------------------|
| W8-OUT-001 | IVR module map                          |
| W8-OUT-002 | SIM capacity plan                       |
| W8-OUT-003 | Deadline-aware scheduler plan           |
| W8-OUT-004 | Program window attempt map              |
| W8-OUT-005 | DTMF result map                         |
| W8-OUT-006 | Call result classification map          |
| W8-OUT-007 | Technical exception map                 |
| W8-OUT-008 | Capacity incident map                   |
| W8-OUT-009 | Core Order State Machine dependency map |
| W8-OUT-010 | Notification boundary map               |
| W8-OUT-011 | IVR P0 blocker list                     |
| W8-OUT-012 | Wave 8 evidence package                 |

**37.6. Smoke tối thiểu Wave 8**

| **Smoke ID** | **Luồng kiểm tra**   | **Điều kiện PASS**                                            |
|--------------|----------------------|---------------------------------------------------------------|
| W8-SMK-001   | Call purpose         | Chỉ ORDER_CONFIRMATION_ONLY                                   |
| W8-SMK-002   | SIM capacity         | 1 SIM chỉ có 1 active outbound call                           |
| W8-SMK-003   | Golden Hour attempts | 5 phút / 2 attempts / 2 phút 30 giây                          |
| W8-SMK-004   | 24/7 attempts        | 15 phút / 3 attempts / T0, T0+5, T0+10                        |
| W8-SMK-005   | DTMF 1               | Ghi nhận khách xác nhận tiếp tục xử lý đơn                    |
| W8-SMK-006   | DTMF 0               | Ghi nhận khách không đặt/muốn hủy, nhưng Core quyết định cuối |
| W8-SMK-007   | DTMF 9               | NOT_ENABLED nếu chưa bật hỗ trợ người thật                    |
| W8-SMK-008   | Invalid phone        | Tách khỏi no answer                                           |
| W8-SMK-009   | No answer            | Chỉ sau đủ attempts hợp lệ                                    |
| W8-SMK-010   | Technical error      | Không kích hoạt cancellation notice                           |
| W8-SMK-011   | Capacity overload    | Không xem là lỗi khách                                        |
| W8-SMK-012   | Core decision        | IVR không tự đổi trạng thái đơn                               |
| W8-SMK-013   | Cancellation notice  | Chỉ sau khi Core Order State Machine đã hủy đơn               |
| W8-SMK-014   | No bypass            | SIM Gateway không cập nhật order trực tiếp                    |

**37.7. P0 Blocker Wave 8**

Các lỗi sau là P0:

1.  IVR dùng cho sales/CRM/marketing.

2.  SIM Gateway cập nhật order trực tiếp.

3.  IVR tự hủy đơn.

4.  Admin sửa giả IVR result.

5.  Sai số attempt Giờ Vàng.

6.  Sai số attempt 24/7.

7.  Gọi sau deadline theo batch after session.

8.  No answer nhầm invalid phone.

9.  Technical error bị xem như khách không nghe.

10. Capacity overload bị xem như lỗi khách.

11. Tin hủy gửi trước khi Core hủy đơn.

12. AI/CRM tự gửi tin hủy đơn.

13. Không có security evidence.

14. Không có call/scheduler evidence.

15. Không có Core Order State Machine dependency clear.

**37.8. Done Gate Wave 8**

Wave 8 chỉ Done khi:

1.  Internal SIM Gateway scope rõ.

2.  SIM capacity control PASS.

3.  Deadline-aware scheduler PASS.

4.  Golden Hour attempt rule PASS.

5.  24/7 attempt rule PASS.

6.  Call result classification PASS.

7.  Technical exception PASS.

8.  Capacity incident PASS.

9.  Core Order State Machine dependency clear.

10. Notification boundary clear.

11. Security smoke PASS.

12. Evidence accepted.

13. Owner cho phép IVR production theo scope.

**37.9. Fail Gate Wave 8**

Wave 8 fail nếu:

1.  IVR tự cập nhật order.

2.  IVR tự hủy đơn.

3.  Sai attempt/deadline.

4.  Sai phân loại call result.

5.  Gửi tin hủy sai owner hoặc sai thời điểm.

6.  Chưa có Order State Machine.

7.  Chưa có evidence.

8.  Chưa có security review.

9.  Chưa có owner sign-off.

Nếu Wave 8 fail:

IVR_GATE = BLOCKED  
IVR_PRODUCTION_READY = NO  
RELEASE_APPROVED = NO  
GO_LIVE_APPROVED = NO  
OWNER_REVIEW_REQUIRED = YES

**38. WAVE 4–8 CROSS-DEPENDENCY CONTROL**

**38.1. Ma trận phụ thuộc chính**

| **Wave**                  | **Phụ thuộc bắt buộc**                                                     | **Nếu chưa clear**          |
|---------------------------|----------------------------------------------------------------------------|-----------------------------|
| Wave 4 — AI Advisor       | Wave 1 Product, Wave 2 Sellable/Sale Lock, Wave 3 Commerce Runtime         | AI production blocked       |
| Wave 5 — Facebook Gateway | Wave 4 AI nếu dùng AI, Wave 3 Commerce nếu routing order, Privacy/Security | Gateway production blocked  |
| Wave 6 — Ads Measurement  | Wave 3 Verified Revenue, Wave 5 event nếu Facebook Ads, Wave 1 SKU mapping | Official ROAS/Scale blocked |
| Wave 7 — MC AI Live       | Wave 5 Gateway, Wave 4 AI, Wave 6 measurement nếu đo Ads, Wave 3 Commerce  | Live orchestration blocked  |
| Wave 8 — IVR              | Wave 3 Order State Machine, Notification owner, Security, SIM capacity     | IVR production blocked      |

**38.2. Downstream không được tự thay upstream**

Các hành vi bị cấm:

1.  AI tự thay Commerce Runtime.

2.  Facebook Gateway tự thay AI Advisor.

3.  Ads tự thay Verified Revenue.

4.  MC AI Live tự thay Commerce Runtime.

5.  IVR tự thay Order State Machine.

6.  Notification tự thay Core cancellation decision.

7.  Dashboard tự thay evidence registry.

**39. OWNER DECISION POINTS CHO WAVE 4–8**

**39.1. Owner decision sau Wave 4**

Owner cần quyết định:

1.  AI Advisor đã đủ chạy kênh nào.

2.  Claim Guard đã đủ chưa.

3.  Health Guard đã đủ chưa.

4.  OOS Guard đã đúng thực tế bán hàng chưa.

5.  AI có được tạo quote/order draft theo scope không.

6.  SKU/nhóm sản phẩm nào được AI tư vấn production.

7.  Kênh nào excluded.

**39.2. Owner decision sau Wave 5**

Owner cần quyết định:

1.  Page nào được bật Gateway.

2.  Comment public xử lý mức nào.

3.  Messenger handoff đã đạt chưa.

4.  Health-sensitive/complaint routing đã an toàn chưa.

5.  Gateway có được production routing vào AI/Commerce không.

6.  Page/test scope nào excluded.

**39.3. Owner decision sau Wave 6**

Owner cần quyết định:

1.  Attribution Rule có được chấp nhận không.

2.  Verified Revenue source đã đủ tin cậy chưa.

3.  Data Quality Gate đã PASS chưa.

4.  ROAS có được xem là official chưa.

5.  Ads có được scale không.

6.  Scale theo ngân sách/kênh/SKU nào.

7.  Stop Gate kích hoạt khi nào.

**39.4. Owner decision sau Wave 7**

Owner cần quyết định:

1.  Live Plan có đủ production không.

2.  Product Scope đã đúng chưa.

3.  Script Registry được duyệt chưa.

4.  MC AI Live có được cue real-time không.

5.  Có được mở live production hay chỉ rehearsal.

6.  SKU nào không được nói.

7.  Rủi ro nào phải handoff human.

**39.5. Owner decision sau Wave 8**

Owner cần quyết định:

1.  IVR chỉ simulation hay gọi khách thật.

2.  Số SIM/capacity có đủ không.

3.  Giữ 24/7 = 3 attempts theo PACK-09 hay cần owner decision mới.

4.  Notification owner là ai.

5.  Cancellation notice template có được duyệt không.

6.  IVR scope áp dụng cho Giờ Vàng, 24/7 hay cả hai.

7.  Khi overload thì xử lý theo incident hay mở rộng capacity.

**40. WAVE 4–8 RELEASE STATUS MẶC ĐỊNH**

Trước khi có evidence accepted, trạng thái mặc định là:

| **Wave**                  | **Implementation**             | **Smoke**        | **Evidence** | **Release Ready** | **Production Ready** | **Go-live** |
|---------------------------|--------------------------------|------------------|--------------|-------------------|----------------------|-------------|
| Wave 4 — AI Advisor       | PENDING_EVIDENCE               | PENDING_EVIDENCE | PENDING      | NO                | NO                   | NO          |
| Wave 5 — Facebook Gateway | PENDING_EVIDENCE               | PENDING_EVIDENCE | PENDING      | NO                | NO                   | NO          |
| Wave 6 — Ads Measurement  | PENDING_EVIDENCE               | PENDING_EVIDENCE | PENDING      | NO                | NO                   | NO          |
| Wave 7 — MC AI Live       | PENDING_EVIDENCE               | PENDING_EVIDENCE | PENDING      | NO                | NO                   | NO          |
| Wave 8 — IVR              | PENDING_EVIDENCE / NOT_STARTED | PENDING_EVIDENCE | PENDING      | NO                | NO                   | NO          |

Không được nâng trạng thái nếu thiếu evidence accepted, smoke pass, owner sign-off và release decision.

**41. DEV DELIVERY CHECKLIST CHO WAVE 4–8**

Trước khi báo xong Wave 4–8, dev phải nộp:

| **Nhóm**          | **Wave 4 AI**  | **Wave 5 FB** | **Wave 6 Ads**     | **Wave 7 Live**    | **Wave 8 IVR** |
|-------------------|----------------|---------------|--------------------|--------------------|----------------|
| Module map        | Có             | Có            | Có                 | Có                 | Có             |
| Dependency map    | Có             | Có            | Có                 | Có                 | Có             |
| Guard/rule map    | Có             | Có            | Có                 | Có                 | Có             |
| P0 blocker list   | Có             | Có            | Có                 | Có                 | Có             |
| Test evidence     | Có             | Có            | Có                 | Có                 | Có             |
| Smoke evidence    | Có             | Có            | Có                 | Có                 | Có             |
| Security evidence | Có nếu áp dụng | Có            | Có nếu dữ liệu Ads | Có nếu live/public | Có             |
| Owner review      | Có             | Có            | Có                 | Có                 | Có             |
| Release status    | Có             | Có            | Có                 | Có                 | Có             |
| Excluded scope    | Có nếu có      | Có nếu có     | Có nếu có          | Có nếu có          | Có nếu có      |

**42. DONE GATE TỔNG HỢP PHẦN 3/4**

PHẦN 3/4 được xem là đạt khi đội kỹ thuật hiểu và triển khai theo nguyên tắc:

1.  AI Advisor không được hardcode runtime.

2.  AI Advisor không vượt Claim Guard / Commerce Runtime.

3.  Facebook Gateway không tự tạo order.

4.  Facebook Gateway giữ đúng public/private/privacy boundary.

5.  Ads Measurement không tính ROAS từ pending revenue.

6.  Ads không scale nếu Data Quality / Verified Revenue / Owner Decision chưa PASS.

7.  MC AI Live không chốt đơn public.

8.  MC AI Live không fake urgency/scarcity.

9.  IVR chỉ dùng ORDER_CONFIRMATION_ONLY.

10. IVR không tự hủy đơn.

11. SIM Gateway không cập nhật order trực tiếp.

12. Wave 4–8 không được production nếu Wave 0–3 dependency chưa clear.

13. Không có evidence accepted thì không wave nào PASS.

14. Không có smoke pass thì không Release Ready.

15. Không có owner decision thì không Go-live Approved.

**43. FAIL GATE TỔNG HỢP PHẦN 3/4**

PHẦN 3/4 fail nếu:

1.  AI tự tính giá/tồn kho/quyền lợi.

2.  AI tự tạo official order.

3.  AI nói claim điều trị/thay thuốc.

4.  Facebook Gateway leak privacy.

5.  Facebook Gateway tạo order ngoài Commerce.

6.  Ads tính ROAS từ pending revenue.

7.  Ads scale khi Data Quality chưa PASS.

8.  MC AI Live chốt đơn public.

9.  MC AI Live fake urgency/scarcity.

10. MC AI Live cue sản phẩm bị khóa.

11. IVR gọi sai deadline/attempt.

12. IVR tự hủy đơn.

13. SIM Gateway cập nhật order trực tiếp.

14. Notification gửi tin hủy trước khi Core hủy đơn.

15. Wave 4–8 production trên upstream chưa release.

16. Không có evidence.

17. Owner chưa sign-off nhưng vẫn release.

Nếu có một trong các lỗi trên:

WAVE_4_8_GATE = BLOCKED  
RELEASE_READY = NO  
PRODUCTION_READY = NO  
GO_LIVE_APPROVED = NO  
OWNER_REVIEW_REQUIRED = YES

**44. KẾT LUẬN PHẦN 3/4**

PHẦN 3/4 đã khóa thứ tự triển khai Wave 4–8:

1.  Wave 4 triển khai AI Advisor theo runtime resolver, guard và Commerce boundary.

2.  Wave 5 triển khai Facebook Gateway theo public/private/privacy handoff.

3.  Wave 6 triển khai Ads Measurement theo Verified Revenue, Attribution và Data Quality.

4.  Wave 7 triển khai MC AI Live theo Live Plan, Product Scope, Script Registry và Risk P0 Control.

5.  Wave 8 triển khai IVR Order Confirmation theo Internal SIM Gateway và Core Order State Machine.

6.  Wave 4–8 đều là downstream, không được thay thế Wave 0–3.

7.  Không có Wave 3 Commerce Runtime thì AI/Facebook/Live/IVR không được chốt quote/order production.

8.  Không có Verified Revenue thì Ads không có ROAS chính thức.

9.  Không có Claim Guard thì AI/Live không được nói claim sức khỏe/khoa học.

10. Không có Privacy Guard thì Facebook/Live không được xử lý public production.

11. Không có Order State Machine thì IVR không được production.

12. Không có evidence accepted, smoke pass, owner sign-off và release decision thì không wave nào được gọi Production Ready.

Trạng thái sau PHẦN 3/4:

DEV_EXECUTION_COMMAND_PACK_PART_3 = DOCUMENTATION_COMPLETE  
WAVE_4_8_EXECUTION_STATUS = PENDING_IMPLEMENTATION_EVIDENCE  
WAVE_4_8_PRODUCTION_SCOPE = BLOCKED_UNTIL_DEPENDENCIES_CLEAR  
RELEASE_READY = NO  
PRODUCTION_READY = NO  
GO_LIVE_APPROVED = NO

**KẾT THÚC PHẦN 3/4 — DEV EXECUTION COMMAND PACK V1.0 CLEAN FINAL**

**PHẦN 4/4 — EVIDENCE / SMOKE / DONE GATE / DEV DELIVERY CHECKLIST / FINAL EXECUTION CONTROL**

**45. MỤC ĐÍCH CỦA PHẦN 4/4**

PHẦN 4/4 khóa lớp kiểm soát cuối cho quá trình triển khai kỹ thuật Ginsengfood.

Nếu PHẦN 1/4 đã khóa nguyên tắc triển khai, PHẦN 2/4 đã khóa Wave 0–3, PHẦN 3/4 đã khóa Wave 4–8, thì PHẦN 4/4 khóa các nội dung:

1.  Evidence Package bắt buộc.

2.  Smoke Matrix theo từng wave.

3.  Done Gate theo từng wave.

4.  Fail Gate theo từng wave.

5.  Dev Delivery Checklist.

6.  Owner Review Checklist.

7.  Release Readiness Checklist.

8.  Gateway Status sau triển khai.

9.  Điều kiện chuyển từ “đã làm” sang “được release”.

10. Kết luận cuối cho DEV EXECUTION COMMAND PACK.

PHẦN 4/4 không viết code.  
PHẦN 4/4 không thay thế thiết kế API/DB/UI.  
PHẦN 4/4 không tự làm PASS bất kỳ wave nào.  
PHẦN 4/4 chỉ quy định đội kỹ thuật phải nộp gì, smoke gì, evidence gì, gate nào phải PASS trước khi được trình owner xét release.

**46. EVIDENCE-FIRST DELIVERY PRINCIPLE**

**46.1. Nguyên tắc giao việc theo evidence**

Mọi hạng mục triển khai trong Ginsengfood phải đi theo nguyên tắc:

Làm xong chưa đủ.  
Test xong chưa đủ.  
Demo chạy được chưa đủ.  
Phải có evidence accepted mới được xem xét PASS.

Đội kỹ thuật không được báo “xong” theo cảm tính.

Mỗi module, mỗi wave, mỗi release scope phải có:

1.  Requirement source.

2.  Implementation evidence.

3.  Test evidence.

4.  Smoke evidence.

5.  Security evidence nếu áp dụng.

6.  P0 blocker status.

7.  Dependency status.

8.  Owner review.

9.  Release status.

**46.2. Evidence phải gắn với pack, wave và module**

Không chấp nhận evidence rời rạc.

Mỗi evidence phải trả lời được:

1.  Evidence này thuộc pack nào?

2.  Thuộc wave nào?

3.  Thuộc module nào?

4.  Chứng minh rule nào?

5.  Chạy ở môi trường nào?

6.  Chạy lúc nào?

7.  Ai thực hiện?

8.  Ai review?

9.  Kết quả là gì?

10. Có blocker không?

11. Có dependency chưa clear không?

12. Có đủ điều kiện accepted không?

**47. DEV EVIDENCE PACKAGE STRUCTURE**

**47.1. Cấu trúc Evidence Package bắt buộc**

Mỗi wave phải nộp một Evidence Package theo cấu trúc sau:

| **Mục**               | **Nội dung bắt buộc**                                    |
|-----------------------|----------------------------------------------------------|
| Evidence Package ID   | Mã gói evidence                                          |
| Wave                  | Wave 0–8                                                 |
| Pack liên quan        | PACK/Master liên quan                                    |
| Module scope          | Module được chứng minh                                   |
| Environment           | DEV / STAGING / PILOT / PROD                             |
| Version / Build       | Version hoặc mốc triển khai                              |
| Requirement source    | Rule/tài liệu làm căn cứ                                 |
| Test result           | Kết quả test                                             |
| Smoke result          | Kết quả smoke                                            |
| Security result       | Nếu áp dụng                                              |
| P0 blocker status     | OPEN / CLEARED / OWNER_REVIEW_REQUIRED                   |
| Dependency status     | Clear / Blocked / Excluded                               |
| Evidence files        | Log, screenshot, report, export, video, test result      |
| Reviewer              | Người review                                             |
| Owner decision        | Nếu có                                                   |
| Final evidence status | PENDING / SUBMITTED / ACCEPTED / REJECTED / NEEDS_RETEST |

**47.2. Trạng thái evidence hợp lệ**

| **Trạng thái**        | **Ý nghĩa**            | **Được dùng để PASS không**    |
|-----------------------|------------------------|--------------------------------|
| PENDING               | Chưa nộp evidence      | Không                          |
| SUBMITTED             | Đã nộp, chưa review    | Không                          |
| ACCEPTED              | Đã review và chấp nhận | Có                             |
| REJECTED              | Bị từ chối             | Không                          |
| NEEDS_RETEST          | Cần test lại           | Không                          |
| EXPIRED               | Evidence hết hiệu lực  | Không                          |
| OWNER_REVIEW_REQUIRED | Cần owner quyết định   | Không, cho đến khi owner quyết |

**47.3. Evidence bị từ chối nếu thiếu truy vết**

Evidence phải bị REJECTED nếu:

1.  Không rõ pack.

2.  Không rõ wave.

3.  Không rõ module.

4.  Không rõ môi trường.

5.  Không rõ version.

6.  Không rõ người thực hiện.

7.  Không rõ test/smoke case.

8.  Không có kết quả cụ thể.

9.  Không chứng minh được rule.

10. Có dấu hiệu bypass.

11. Có P0 blocker chưa clear.

12. Có conflict với tài liệu đã khóa.

**48. SMOKE MATRIX TỔNG HỢP WAVE 0–8**

**48.1. Smoke Matrix tổng quan**

| **Wave** | **Smoke trọng yếu**                                              | **Điều kiện PASS**                                                                    |
|----------|------------------------------------------------------------------|---------------------------------------------------------------------------------------|
| Wave 0   | Foundation / Permission / Audit / Evidence / Release Status      | Có permission, audit, idempotency, evidence registry, P0 registry, release status nền |
| Wave 1   | Product / SKU / Recipe / Formula / Activation                    | SKU active đúng, recipe version không ghi đè, product knowledge đúng source           |
| Wave 2   | Operational / Warehouse / Inventory / Trace / Recall / Sale Lock | Batch release đúng, kho/tồn đúng, trace đúng, sale lock/recall chặn bán               |
| Wave 3   | Commerce Runtime / Quote / Order / Payment / Shipping            | Quote snapshot, order state, payment confirmation, shipping/VAT đúng runtime          |
| Wave 4   | AI Advisor / Resolver / Guard / Claim / OOS                      | AI không hardcode, không vượt claim guard, không tự tạo order                         |
| Wave 5   | Facebook Gateway / Messenger / Private Handoff                   | Public/private đúng, privacy guard pass, gateway không tạo order                      |
| Wave 6   | Ads Measurement / Attribution / Verified Revenue                 | Không tính ROAS từ pending revenue, data quality pass, attribution rõ                 |
| Wave 7   | MC AI Live / Script / Product Scope / Risk Control               | Có live plan, product scope, claim/privacy guard, không fake urgency                  |
| Wave 8   | IVR / SIM Gateway / Scheduler / Call Result                      | ORDER_CONFIRMATION_ONLY, đúng attempt, IVR không hủy đơn trực tiếp                    |

**48.2. Smoke chain bắt buộc trước release nhóm bán hàng**

Trước khi mở bất kỳ scope bán hàng production nào, phải smoke chuỗi sau:

1.  Product active.

2.  Product sellable.

3.  Batch released.

4.  Inventory available.

5.  Sale Lock clear.

6.  Recall clear.

7.  Quote Snapshot.

8.  Cart draft.

9.  Official order.

10. Payment confirmation.

11. Shipping eligibility.

12. Fulfillment boundary.

13. Verified revenue boundary.

14. AI Advisor không hardcode.

15. Facebook Gateway không tạo order.

16. Ads không tính ROAS từ pending revenue.

17. MC AI Live không chốt đơn public.

18. IVR không tự hủy đơn.

Nếu một mắt xích fail, release scope bán hàng phải BLOCKED.

**49. WAVE-SPECIFIC DONE GATE**

**49.1. Wave 0 Done Gate**

Wave 0 chỉ DONE khi:

1.  Project/module map có.

2.  Environment map có.

3.  Role/permission baseline có.

4.  Audit baseline có.

5.  Idempotency baseline có.

6.  Evidence registry có.

7.  P0 blocker registry có.

8.  Release status registry có.

9.  Pack-to-module mapping có.

10. Gap report bản đầu có.

11. Smoke W0 PASS.

12. Evidence W0 ACCEPTED.

13. Owner cho phép chuyển Wave 1.

Nếu thiếu một mục:

WAVE_0_DONE = NO

**49.2. Wave 1 Done Gate**

Wave 1 chỉ DONE khi:

1.  Product master rõ.

2.  SKU master rõ.

3.  Ingredient master rõ.

4.  Recipe/formula version rõ.

5.  G1 formula lock rõ.

6.  Product activation rule rõ.

7.  Product knowledge source rõ.

8.  Product scope cho Commerce/AI/Live/Ads rõ.

9.  Smoke W1 PASS.

10. Evidence W1 ACCEPTED.

11. P0 product blocker CLEARED.

12. Owner cho phép chuyển Wave 2.

**49.3. Wave 2 Done Gate**

Wave 2 chỉ DONE khi:

1.  Raw intake/QC/readiness đúng.

2.  Production order snapshot đúng.

3.  Material issue/receipt đúng.

4.  Production process đúng.

5.  Packaging/QR đúng.

6.  Batch QC và Batch Release tách rõ.

7.  Warehouse receipt chỉ nhận RELEASED batch.

8.  Inventory ledger đúng.

9.  Traceability đúng.

10. Public Trace whitelist-only.

11. Recall/Sale Lock chặn được bán.

12. Smoke W2 PASS.

13. Evidence W2 ACCEPTED.

14. Owner cho phép chuyển Wave 3.

**49.4. Wave 3 Done Gate**

Wave 3 chỉ DONE khi:

1.  Price runtime rõ.

2.  Program runtime rõ.

3.  Member benefit runtime rõ.

4.  Quote Snapshot đúng.

5.  Cart draft không phải official order.

6.  Order State Machine đúng.

7.  Payment confirmation đúng.

8.  Direct bank transfer không hardcode tài khoản.

9.  Shipping/VAT rõ.

10. Fulfillment boundary rõ.

11. Verified revenue boundary rõ.

12. Smoke W3 PASS.

13. Evidence W3 ACCEPTED.

14. Owner cho phép chuyển Wave 4.

**49.5. Wave 4 Done Gate**

Wave 4 chỉ DONE khi:

1.  Intent/entity/variable/resolver map rõ.

2.  Product Knowledge Resolver đúng source.

3.  Price/stock/program resolver đúng runtime.

4.  Claim Guard pass.

5.  Health Guard pass.

6.  OOS Guard pass.

7.  Customer Care Before Next Sale pass.

8.  Quote/order draft đi qua Commerce Runtime.

9.  Smoke W4 PASS.

10. Evidence W4 ACCEPTED.

11. Owner cho phép chạy AI theo scope.

**49.6. Wave 5 Done Gate**

Wave 5 chỉ DONE khi:

1.  Page config scope rõ.

2.  Public/private boundary rõ.

3.  Messenger handoff pass.

4.  Privacy Guard pass.

5.  Health-sensitive routing pass.

6.  Complaint routing pass.

7.  Gateway không tự tạo order.

8.  Gateway gọi AI/Commerce đúng boundary.

9.  Smoke W5 PASS.

10. Evidence W5 ACCEPTED.

11. Owner cho phép chạy Gateway theo scope.

**49.7. Wave 6 Done Gate**

Wave 6 chỉ DONE khi:

1.  Event taxonomy rõ.

2.  Funnel metric rõ.

3.  Attribution Rule rõ.

4.  Verified Revenue source rõ.

5.  Data Quality Gate PASS.

6.  ROAS chỉ tính từ verified revenue.

7.  Scale Gate rõ.

8.  Stop Gate rõ.

9.  Smoke W6 PASS.

10. Evidence W6 ACCEPTED.

11. Owner cho phép measurement/scale theo scope.

**49.8. Wave 7 Done Gate**

Wave 7 chỉ DONE khi:

1.  Live Plan rõ.

2.  Product Scope rõ.

3.  Run-of-Show rõ.

4.  Script Registry approved.

5.  Claim Guard pass.

6.  Privacy Guard pass.

7.  Private Handoff pass.

8.  Risk P0 Control pass.

9.  Không fake urgency/scarcity.

10. Smoke W7 PASS.

11. Evidence W7 ACCEPTED.

12. Owner cho phép live orchestration theo scope.

**49.9. Wave 8 Done Gate**

Wave 8 chỉ DONE khi:

1.  CALL_PURPOSE = ORDER_CONFIRMATION_ONLY.

2.  Internal SIM Gateway scope rõ.

3.  1 SIM = 1 ACTIVE OUTBOUND CALL.

4.  Deadline-aware rolling queue pass.

5.  Golden Hour attempt rule pass.

6.  24/7 attempt rule pass.

7.  DTMF result pass.

8.  Call result classification pass.

9.  Technical exception pass.

10. Capacity incident pass.

11. Core Order State Machine dependency clear.

12. Notification boundary clear.

13. Security evidence accepted.

14. Smoke W8 PASS.

15. Owner cho phép IVR theo scope.

**50. WAVE-SPECIFIC FAIL GATE**

**50.1. Wave 0 Fail Gate**

Wave 0 FAIL nếu:

1.  Không có module map.

2.  Không có permission baseline.

3.  Không có audit baseline.

4.  Không có evidence registry.

5.  Không có P0 blocker registry.

6.  Không có release status registry.

7.  Không có environment boundary.

8.  Không có smoke evidence.

Kết quả:

WAVE_0_STATUS = BLOCKED  
ALL_DOWNSTREAM_PRODUCTION_SCOPE = BLOCKED

**50.2. Wave 1 Fail Gate**

Wave 1 FAIL nếu:

1.  SKU chưa active vẫn bán được.

2.  Product active bị hiểu nhầm là sellable.

3.  Recipe version ghi đè lịch sử.

4.  G1 formula không khóa được.

5.  Product Knowledge không có approved source.

6.  Product Scope mơ hồ.

7.  Không có evidence.

Kết quả:

PRODUCT_RELEASE_SCOPE = BLOCKED  
AI_PRODUCT_SCOPE = BLOCKED  
COMMERCE_SKU_SCOPE = BLOCKED  
LIVE_PRODUCT_SCOPE = BLOCKED

**50.3. Wave 2 Fail Gate**

Wave 2 FAIL nếu:

1.  QC_PASS bị hiểu là RELEASED.

2.  Warehouse nhận batch chưa RELEASED.

3.  Batch chưa release vẫn sellable.

4.  Inventory ledger sửa lịch sử.

5.  Public Trace leak dữ liệu nội bộ.

6.  Recall/Sale Lock không chặn bán.

7.  Trace chain thiếu.

8.  Không có evidence.

Kết quả:

SELLABLE_SCOPE = BLOCKED  
COMMERCE_ORDER_SCOPE = BLOCKED  
AI_SELLING_SCOPE = BLOCKED  
ADS_SCALE_SCOPE = BLOCKED  
LIVE_CUE_SCOPE = BLOCKED

**50.4. Wave 3 Fail Gate**

Wave 3 FAIL nếu:

1.  Không có Quote Snapshot.

2.  Cart draft bị xem là official order.

3.  Order State Machine không rõ.

4.  Payment mark PAID sai.

5.  Direct bank transfer hardcode tài khoản.

6.  Shipping/VAT mơ hồ.

7.  Pending revenue bị xem là verified revenue.

8.  Không có evidence.

Kết quả:

COMMERCE_RUNTIME = BLOCKED  
AI_QUOTE_SCOPE = BLOCKED  
FACEBOOK_ORDER_ROUTING = BLOCKED  
ADS_VERIFIED_REVENUE = BLOCKED  
IVR_ORDER_CONFIRMATION = BLOCKED

**50.5. Wave 4 Fail Gate**

Wave 4 FAIL nếu:

1.  AI hardcode giá.

2.  AI hardcode tồn kho.

3.  AI hardcode quyền lợi/chương trình.

4.  AI tự tạo official order.

5.  AI tự xác nhận payment.

6.  AI nói claim điều trị/thay thuốc.

7.  AI bán SKU hết hàng hoặc bị sale lock.

8.  AI không có evidence.

Kết quả:

AI_ADVISOR_PRODUCTION = BLOCKED  
FACEBOOK_AI_ROUTING = BLOCKED  
MC_LIVE_AI_HANDOFF = BLOCKED

**50.6. Wave 5 Fail Gate**

Wave 5 FAIL nếu:

1.  Public leak thông tin cá nhân.

2.  Gateway tạo order ngoài Commerce.

3.  Gateway báo giá hardcode.

4.  Handoff private fail.

5.  Complaint bị xử lý như lead bán hàng.

6.  Health-sensitive tư vấn sâu public.

7.  Gateway spam hoặc vi phạm policy.

8.  Không có evidence.

Kết quả:

FACEBOOK_GATEWAY_PRODUCTION = BLOCKED  
LIVE_COMMENT_ROUTING = BLOCKED  
FACEBOOK_ADS_ATTRIBUTION_SCOPE = BLOCKED_IF_DEPENDENT

**50.7. Wave 6 Fail Gate**

Wave 6 FAIL nếu:

1.  Không có Verified Revenue.

2.  Dùng pending revenue tính ROAS.

3.  Dùng comment/inbox làm revenue.

4.  Attribution mơ hồ.

5.  Dashboard làm source-of-truth.

6.  Scale khi Data Quality chưa PASS.

7.  Scale sản phẩm bị sale lock.

8.  Không có owner decision.

Kết quả:

OFFICIAL_ROAS = BLOCKED  
ADS_SCALE_GATE = BLOCKED  
ADS_DASHBOARD_ONLY = DISPLAY_NOT_SOURCE_OF_TRUTH

**50.8. Wave 7 Fail Gate**

Wave 7 FAIL nếu:

1.  Không có Live Plan.

2.  Không có Product Scope.

3.  Cue sản phẩm not sellable.

4.  Cue claim vượt whitelist.

5.  Nói giá không qua Commerce Runtime.

6.  Tạo quote/order trực tiếp.

7.  Fake urgency/scarcity.

8.  Không có private handoff.

9.  Không có evidence.

Kết quả:

MC_AI_LIVE_PRODUCTION = BLOCKED  
LIVE_ORCHESTRATION = BLOCKED

**50.9. Wave 8 Fail Gate**

Wave 8 FAIL nếu:

1.  IVR dùng cho sales/CRM/marketing.

2.  SIM Gateway cập nhật order trực tiếp.

3.  IVR tự hủy đơn.

4.  Sai attempt/deadline.

5.  Invalid phone/no answer/technical/capacity phân loại sai.

6.  Tin hủy gửi trước khi Core hủy đơn.

7.  AI/CRM tự gửi tin hủy đơn.

8.  Không có security evidence.

9.  Không có call/scheduler evidence.

Kết quả:

IVR_GATE = BLOCKED  
IVR_PRODUCTION_READY = NO  
RELEASE_APPROVED = NO  
GO_LIVE_APPROVED = NO

**51. DEV DELIVERY CHECKLIST TỔNG THỂ**

**51.1. Checklist bắt buộc cho mỗi wave**

Mỗi wave phải nộp đủ:

| **Checklist**             | **Bắt buộc**   |
|---------------------------|----------------|
| Module map                | Có             |
| Pack dependency map       | Có             |
| Requirement source map    | Có             |
| Gap report                | Có             |
| P0 blocker list           | Có             |
| Test plan                 | Có             |
| Smoke plan                | Có             |
| Evidence package          | Có             |
| Security checklist        | Có nếu áp dụng |
| Owner review request      | Có             |
| Release status proposal   | Có             |
| Excluded scope list       | Có nếu có      |
| Risk register             | Có nếu có      |
| Next wave dependency note | Có             |

**51.2. Checklist bắt buộc trước khi báo “xong”**

Đội kỹ thuật chỉ được báo một wave “xong” khi có đủ:

1.  Requirement implemented.

2.  Test passed.

3.  Smoke passed.

4.  Evidence submitted.

5.  Evidence accepted.

6.  P0 cleared.

7.  Dependency clear.

8.  Owner reviewed.

9.  Release status updated.

10. No unresolved conflict.

Nếu mới chỉ code xong:

IMPLEMENTATION_COMPLETE_ONLY

Không được gọi:

DONE

**52. OWNER REVIEW PACKAGE**

**52.1. Nội dung trình owner sau mỗi wave**

Mỗi wave khi trình owner phải có:

1.  Wave summary.

2.  Scope đã làm.

3.  Scope chưa làm.

4.  Scope excluded.

5.  Requirement source.

6.  Test result.

7.  Smoke result.

8.  Evidence list.

9.  P0 blocker status.

10. Dependency status.

11. Risk nếu có.

12. Đề xuất trạng thái.

13. Câu hỏi cần owner quyết định.

14. Điều kiện để chuyển wave tiếp theo.

**52.2. Owner decision hợp lệ**

Owner decision phải ghi rõ:

1.  Chấp nhận hay không.

2.  Chấp nhận scope nào.

3.  Không chấp nhận scope nào.

4.  Cần retest phần nào.

5.  Cần bổ sung evidence nào.

6.  Có cho chuyển wave tiếp theo không.

7.  Có cho release không.

8.  Có cho production không.

9.  Có điều kiện kèm theo không.

Không được dùng câu mơ hồ:

- “Ổn rồi.”

- “Cứ làm tiếp.”

- “Chạy thử đi.”

- “Tạm được.”

- “Có vẻ xong.”

**53. RELEASE READINESS CHECKLIST**

**53.1. Trước khi trình Release Ready**

Một wave hoặc release group chỉ được trình Release Ready khi có:

1.  Documentation clear.

2.  Implementation complete.

3.  Test complete.

4.  Smoke pass.

5.  Evidence accepted.

6.  P0 cleared.

7.  Security pass nếu áp dụng.

8.  Dependency clear.

9.  Owner review complete.

10. Release scope rõ.

11. Rollback/recovery note.

12. Monitoring/incident owner rõ.

**53.2. Release Ready không phải Release Approved**

Nếu đủ điều kiện trên, trạng thái chỉ là:

RELEASE_READY = YES

Chưa được hiểu là:

RELEASE_APPROVED = YES

Release Approved cần owner decision riêng.

**54. PRODUCTION READINESS CHECKLIST**

**54.1. Điều kiện Production Ready**

Một scope chỉ được Production Ready khi:

1.  Release Ready = YES.

2.  Release Approved = YES.

3.  Production environment/config ready.

4.  Monitoring ready.

5.  Incident owner ready.

6.  Rollback/recovery ready.

7.  Security/data protection ready.

8.  No P0 blocker.

9.  No dependency blocked.

10. No stale evidence.

11. Owner final decision có hiệu lực.

**54.2. Production Ready theo scope**

Không được ghi chung:

“Hệ thống đã production ready.”

Phải ghi cụ thể:

1.  Production ready cho wave nào.

2.  Module nào.

3.  Kênh nào.

4.  SKU nào.

5.  Payment method nào.

6.  User group nào.

7.  Thời điểm nào.

8.  Điều kiện nào.

9.  Scope nào excluded.

**55. GO-LIVE CHECKLIST**

**55.1. Điều kiện Go-live Approved**

Go-live Approved chỉ đạt khi:

1.  Production Ready = YES.

2.  Release Approved = YES.

3.  Go-live decision record có.

4.  Owner cuối duyệt.

5.  Scope go-live rõ.

6.  Monitoring active.

7.  Support/incident owner active.

8.  Rollback path active.

9.  Customer/data/payment/channel risk clear.

10. Không có P0 blocker.

11. Không có dependency blocked.

12. Không có unresolved risk.

**55.2. Không được go-live thử**

Không dùng các khái niệm:

- go-live thử;

- chạy đại;

- mở tạm;

- mở một chút xem sao;

- cho khách thật test trước;

- vừa chạy vừa sửa nếu chưa có release scope.

Nếu muốn thử thật với giới hạn, phải gọi đúng:

LIMITED_PRODUCTION_SCOPE

và vẫn cần owner decision.

**56. RELEASE STATUS OUTPUT CHUẨN**

**56.1. Các trạng thái được phép dùng**

| **Status**                   | **Ý nghĩa**                                            |
|------------------------------|--------------------------------------------------------|
| NOT_STARTED                  | Chưa bắt đầu                                           |
| IN_PROGRESS                  | Đang triển khai                                        |
| IMPLEMENTATION_COMPLETE_ONLY | Code/triển khai xong nhưng chưa đủ test/smoke/evidence |
| TEST_PENDING                 | Chưa test đủ                                           |
| SMOKE_PENDING                | Chưa smoke đủ                                          |
| EVIDENCE_PENDING             | Chưa accepted evidence                                 |
| P0_BLOCKED                   | Có P0 blocker                                          |
| DEPENDENCY_BLOCKED           | Bị chặn bởi upstream                                   |
| OWNER_REVIEW_REQUIRED        | Cần owner quyết định                                   |
| RELEASE_READY                | Đủ điều kiện trình release                             |
| RELEASE_APPROVED             | Owner duyệt release                                    |
| PRODUCTION_READY             | Đủ điều kiện production theo scope                     |
| GO_LIVE_APPROVED             | Được vận hành thật theo scope                          |
| RELEASE_HOLD                 | Tạm giữ release                                        |
| ROLLBACK_REQUIRED            | Phải rollback                                          |
| EXCLUDED_FROM_SCOPE          | Không nằm trong scope hiện tại                         |

**56.2. Trạng thái bị cấm**

Không dùng:

1.  Gần xong.

2.  Cơ bản xong.

3.  Tạm ổn.

4.  Chạy được.

5.  Pass miệng.

6.  Dev nói xong.

7.  Owner nói ok nhưng không record.

8.  Có vẻ ổn.

9.  Production ready vì đã viết tài liệu.

10. Release vì đã demo được.

**57. DAILY / WEEKLY EXECUTION REPORT FORMAT**

**57.1. Báo cáo ngày**

Báo cáo ngày của đội kỹ thuật phải gồm:

1.  Wave đang làm.

2.  Module đang làm.

3.  Pack liên quan.

4.  Việc đã hoàn tất.

5.  Việc đang bị chặn.

6.  P0 blocker mới.

7.  Evidence đã nộp.

8.  Evidence bị reject nếu có.

9.  Dependency cần owner quyết định.

10. Việc tiếp theo.

Không báo cáo kiểu chung chung “đang làm tiếp”.

**57.2. Báo cáo tuần**

Báo cáo tuần phải gồm:

1.  Completion status theo wave.

2.  P0 blocker status.

3.  Evidence acceptance status.

4.  Smoke status.

5.  Dependency status.

6.  Owner decision pending.

7.  Scope có thể release.

8.  Scope phải excluded.

9.  Rủi ro tuần tới.

10. Đề xuất quyết định owner.

**58. FINAL CROSS-WAVE RELEASE CONTROL**

**58.1. Không release theo module đơn lẻ nếu chuỗi phụ thuộc chưa clear**

Một module có thể test pass riêng nhưng không được release nếu chuỗi phụ thuộc chưa clear.

Ví dụ:

1.  AI Product Advice pass nhưng Product Knowledge chưa approved → không release.

2.  Facebook Handoff pass nhưng AI/Commerce chưa clear → chỉ release handoff limited, không release order routing.

3.  Ads dashboard chạy được nhưng Verified Revenue chưa clear → chỉ display, không official ROAS.

4.  MC Live script pass nhưng Product Scope/Sale Lock chưa clear → không live production.

5.  IVR call success nhưng Order State Machine chưa clear → không gọi khách thật.

**58.2. Release group phải khai báo dependency**

Mỗi release group phải ghi:

1.  Wave nào nằm trong scope.

2.  Wave nào excluded.

3.  Dependency nào clear.

4.  Dependency nào blocked.

5.  Rủi ro nào còn lại.

6.  Owner có chấp nhận không.

7.  Rollback nếu fail.

**59. FINAL DEV EXECUTION DONE GATE**

DEV EXECUTION COMMAND PACK chỉ được xem là hoàn tất về mặt tài liệu khi đã khóa đủ:

1.  Implementation Principles.

2.  No Copy-Paste Rule.

3.  Source-of-truth Rule.

4.  Pack-to-Module Mapping Rule.

5.  Wave 0–3 Execution Plan.

6.  Wave 4–8 Execution Plan.

7.  Evidence Package Rule.

8.  Smoke Matrix.

9.  Done Gate.

10. Fail Gate.

11. Dev Delivery Checklist.

12. Owner Review Checklist.

13. Release Readiness Checklist.

14. Production Readiness Checklist.

15. Go-live Checklist.

16. Release Status Output.

17. Daily/Weekly Report Format.

18. Cross-wave Release Control.

19. Final Gateway Status.

**60. FINAL DEV EXECUTION FAIL GATE**

Toàn bộ quá trình triển khai phải bị chặn nếu có một trong các lỗi:

1.  Dev bắt đầu code sâu khi chưa có mapping.

2.  Không có gap report.

3.  Không có dependency map.

4.  Không có P0 blocker list.

5.  Không có evidence plan.

6.  Không có smoke plan.

7.  Dùng code hiện tại làm business truth.

8.  Bỏ qua tài liệu MASTER/PACK.

9.  Hardcode runtime.

10. Downstream vượt upstream.

11. Gọi module xong khi chưa evidence accepted.

12. Gọi release ready khi chưa smoke pass.

13. Gọi production ready khi chỉ mới documentation complete.

14. Go-live khi chưa owner decision.

15. Không có rollback/recovery/monitoring cho production scope.

Nếu có lỗi trên:

DEV_EXECUTION_GATE = BLOCKED  
OWNER_REVIEW_REQUIRED = YES  
RELEASE_READY = NO  
PRODUCTION_READY = NO  
GO_LIVE_APPROVED = NO

**61. FINAL EXECUTION STATUS SAU DEV EXECUTION COMMAND PACK**

Sau khi tài liệu này hoàn tất, trạng thái đúng phải là:

| **Nhóm trạng thái**               | **Giá trị**            |
|-----------------------------------|------------------------|
| DEV_EXECUTION_COMMAND_PACK_STATUS | DOCUMENTATION_COMPLETE |
| IMPLEMENTATION_STATUS             | PENDING_EVIDENCE       |
| TEST_STATUS                       | PENDING_EVIDENCE       |
| SMOKE_STATUS                      | PENDING_EVIDENCE       |
| EVIDENCE_STATUS                   | PENDING                |
| RELEASE_READY                     | NO                     |
| PRODUCTION_READY                  | NO                     |
| RELEASE_APPROVED                  | NO                     |
| GO_LIVE_APPROVED                  | NO                     |
| GLOBAL_GATEWAY_STATUS             | BLOCKED                |

Tài liệu này chỉ cho phép đội kỹ thuật bắt đầu triển khai có kiểm soát, không cho phép kết luận hệ thống đã production ready.

**62. FINAL CONCLUSION — DEV EXECUTION COMMAND PACK**

DEV EXECUTION COMMAND PACK V1.0 CLEAN FINAL đã khóa cách triển khai kỹ thuật cho Ginsengfood theo 9 wave:

1.  Wave 0 — Foundation / Governance / Security / Evidence Base.

2.  Wave 1 — Product / SKU / Ingredient / Recipe / Formula / Product Activation.

3.  Wave 2 — Operational Core / Production / Warehouse / Inventory / Traceability / Recall / Sale Lock.

4.  Wave 3 — Commerce Runtime / Quote / Cart / Order / Payment / Shipping / Fulfillment.

5.  Wave 4 — AI Advisor / Runtime Resolver / Claim Guard / Sales Boundary.

6.  Wave 5 — Facebook Channel Gateway / Meta Live / Messenger / Private Handoff.

7.  Wave 6 — Ads Measurement / Attribution / Verified Revenue / ROAS / Scale Gate.

8.  Wave 7 — MC AI Live / Live Script / Hosting Assistant / Real-time Orchestration.

9.  Wave 8 — IVR Order Confirmation / Internal SIM Gateway.

Tài liệu này khóa các nguyên tắc cuối:

1.  Không triển khai bằng copy-paste rời rạc.

2.  Không code sâu trước khi có Pack-to-Module Map.

3.  Không bỏ qua Implementation Gap Report.

4.  Không bỏ qua Dependency Map.

5.  Không bỏ qua P0 Blocker Registry.

6.  Không có evidence accepted thì không PASS.

7.  Không có smoke pass thì không Release Ready.

8.  Không có owner sign-off thì không Release Approved.

9.  Không có release decision thì không Go-live Approved.

10. Không dùng documentation complete để gọi production ready.

11. Không dùng dashboard làm source-of-truth.

12. Không cho AI/Facebook/Ads/MC Live/IVR vượt Commerce, Operational Core hoặc PACK-10 Gateway.

13. Không cho downstream production khi upstream chưa release.

14. Không go-live nếu thiếu rollback, monitoring, incident owner và owner final decision.

Kết luận cuối:

DEV EXECUTION COMMAND PACK V1.0 CLEAN FINAL hoàn tất về mặt tài liệu điều phối triển khai.  
Đội kỹ thuật có thể dùng tài liệu này để bắt đầu lập mapping, gap report, dependency report, evidence plan, smoke plan và triển khai theo wave.  
Tuy nhiên toàn hệ thống vẫn giữ trạng thái BLOCKED cho production cho đến khi từng wave có implementation, test, smoke, security, evidence accepted, P0 cleared, owner sign-off, release decision và go-live decision hợp lệ.

Trạng thái cuối bắt buộc:

DEV_EXECUTION_COMMAND_PACK = DOCUMENTATION_COMPLETE  
START_IMPLEMENTATION = ALLOWED_WITH_CONTROL  
RELEASE_READY = NO  
PRODUCTION_READY = NO  
RELEASE_APPROVED = NO  
GO_LIVE_APPROVED = NO  
GLOBAL_GATEWAY_STATUS = BLOCKED

**KẾT THÚC**

**GINSENGFOOD — DEV EXECUTION COMMAND PACK**

**V1.0 CLEAN FINAL**
