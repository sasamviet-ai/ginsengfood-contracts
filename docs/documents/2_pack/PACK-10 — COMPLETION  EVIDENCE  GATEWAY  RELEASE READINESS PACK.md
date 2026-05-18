**PACK-10 — COMPLETION / EVIDENCE / GATEWAY / RELEASE READINESS PACK**

**COMPLETION CONTROL / EVIDENCE REGISTRY / GATEWAY DECISION / PRODUCTION READINESS / RELEASE GOVERNANCE**

**V1.0 CLEAN FINAL**

**PHẦN 1/4 — COMPLETION PRINCIPLES / PACK REGISTRY / SOURCE-OF-TRUTH / NO-BYPASS RELEASE RULE**

**1. MỤC ĐÍCH CỦA PACK-10**

PACK-10 là tài liệu khóa lớp **Completion / Evidence / Gateway / Release Readiness / Production Readiness / Go-live Control** cho toàn bộ hệ thống Ginsengfood.

PACK-10 không phải tài liệu nghiệp vụ riêng của một module.  
PACK-10 không phải tài liệu thiết kế code.  
PACK-10 không phải tài liệu API, database, UI hay workflow chi tiết.  
PACK-10 không thay thế PACK-01 đến PACK-09.

Vai trò đúng của PACK-10 là:

1.  Tổng hợp trạng thái hoàn tất của từng pack.

2.  Chuẩn hóa cách xác định một pack đã đủ điều kiện release hay chưa.

3.  Quản trị evidence, smoke result, test result, security result, owner sign-off.

4.  Khóa Gateway Status của toàn hệ thống trước khi cho phép production.

5.  Phân biệt rõ:

    - tài liệu đã viết xong;

    - dev đã triển khai xong;

    - test đã chạy;

    - smoke đã pass;

    - evidence đã được chấp nhận;

    - owner đã ký duyệt;

    - release đã được phê duyệt;

    - go-live đã được cho phép.

6.  Ngăn mọi hành vi vượt quyền giữa các pack.

7.  Ngăn mọi module downstream phụ thuộc vào pack chưa đủ điều kiện release.

8.  Ngăn việc dùng lời xác nhận miệng để gọi là PASS.

9.  Ngăn việc dùng trạng thái “documentation complete” để gọi là “production ready”.

PACK-10 là lớp khóa cuối để trả lời câu hỏi:

“Toàn bộ hệ thống đã đủ điều kiện chạy thật chưa?”

Câu trả lời chỉ được là **YES** khi có đầy đủ evidence, smoke pass, security pass, P0 blocker cleared, owner sign-off, release decision và go-live approval.

**2. NGUYÊN TẮC CỐT LÕI CỦA PACK-10**

**2.1. PACK-10 chỉ tổng hợp, không thay thế owner pack**

PACK-10 chỉ đọc trạng thái từ từng pack chủ quản.

PACK-10 không được tự sửa rule nghiệp vụ của PACK-01 đến PACK-09.  
PACK-10 không được tự làm PASS thay cho pack nghiệp vụ.  
PACK-10 không được tự hợp thức hóa module chưa có evidence.  
PACK-10 không được tự biến tài liệu đã viết xong thành hệ thống đã chạy được.

Nếu một pack chưa đủ điều kiện, PACK-10 phải giữ trạng thái BLOCKED, PENDING_EVIDENCE hoặc NOT_PRODUCTION_READY tương ứng.

**2.2. Documentation Complete không phải Production Ready**

Đây là nguyên tắc bắt buộc.

Một tài liệu có thể đã hoàn tất về mặt governance nhưng hệ thống vẫn chưa được phép chạy production.

| **Trạng thái**          | **Ý nghĩa đúng**                                          | **Không được hiểu sai thành** |
|-------------------------|-----------------------------------------------------------|-------------------------------|
| Documentation Complete  | Tài liệu đã viết xong và có thể dùng làm chuẩn triển khai | Dev đã làm xong               |
| Implementation Complete | Dev đã triển khai xong phạm vi được giao                  | Đã an toàn để go-live         |
| Test Complete           | Đã có test chạy theo scope                                | Smoke đã pass toàn hệ         |
| Smoke Pass              | Luồng trọng yếu đã chạy qua được                          | Đã đủ release                 |
| Evidence Accepted       | Bằng chứng đã được review và chấp nhận                    | Owner đã duyệt go-live        |
| Owner Sign-off          | Owner đã xác nhận phạm vi đạt yêu cầu                     | Đã có release decision        |
| Release Approved        | Được phép release theo phạm vi                            | Đã go-live chính thức         |
| Go-live Approved        | Được phép vận hành thật                                   | Không còn cần giám sát        |

PACK-10 phải luôn tách các trạng thái này thành từng cột riêng trong completion matrix.

**2.3. Không có accepted evidence thì không Completion PASS**

PACK-10 khóa nguyên tắc:

Không có evidence accepted thì không có Completion PASS.

Evidence phải là bằng chứng cụ thể, có thể kiểm tra, có nguồn phát sinh, có thời điểm, có owner review và có trạng thái.

Không chấp nhận các dạng sau để PASS:

- “Dev nói đã làm.”

- “Tôi thấy chạy được.”

- “Chắc ổn rồi.”

- “Đã test sơ bộ.”

- “Có ảnh màn hình nhưng không biết từ môi trường nào.”

- “Có log nhưng không gắn với test case.”

- “Có file nhưng chưa owner review.”

- “Có báo cáo nhưng chưa có kết quả smoke.”

- “Có tài liệu nhưng chưa có implementation.”

Evidence không rõ nguồn, không rõ môi trường, không rõ thời điểm, không rõ pack liên quan thì không được chấp nhận.

**2.4. Không có smoke pass thì không Release Ready**

Một pack hoặc toàn hệ thống chỉ được xem là Release Ready khi smoke test trọng yếu đã pass.

Smoke test phải chứng minh được luồng vận hành chính chạy qua đúng boundary đã khóa.

Ví dụ:

- Commerce không được bỏ qua Quote Snapshot.

- Payment không được tự mark PAID khi chưa có xác nhận hợp lệ.

- AI Advisor không được tự tính giá hardcode.

- Facebook Gateway không được tự tạo order ngoài Commerce Core.

- Ads Measurement không được tính ROAS khi chưa có Verified Revenue.

- MC AI Live không được chốt đơn public.

- IVR không được hủy đơn trực tiếp.

- Warehouse không được mở bán hàng chưa release.

- Recall / Sale Lock phải thắng mọi luồng bán hàng.

Nếu smoke chưa pass, trạng thái phải là:

RELEASE_READY = NO

**2.5. Không có owner sign-off thì không Release Approved**

Owner sign-off là điều kiện bắt buộc để chuyển từ trạng thái kỹ thuật đã sẵn sàng sang trạng thái được phê duyệt release.

Owner sign-off không được thay bằng lời nói miệng.  
Owner sign-off không được suy diễn từ việc tài liệu đã viết xong.  
Owner sign-off không được suy diễn từ việc dev đã báo xong.  
Owner sign-off không được suy diễn từ việc test pass một phần.

Owner sign-off phải gắn với:

1.  Pack cụ thể.

2.  Scope cụ thể.

3.  Version cụ thể.

4.  Evidence cụ thể.

5.  Smoke result cụ thể.

6.  P0 blocker status cụ thể.

7.  Release decision cụ thể.

**2.6. Không có release decision thì không Go-live Approved**

Release Approved và Go-live Approved là hai trạng thái khác nhau.

Release Approved nghĩa là phạm vi đã được phép release theo điều kiện kiểm soát.  
Go-live Approved nghĩa là được phép vận hành thật với người dùng thật, dữ liệu thật, đơn hàng thật, doanh thu thật, rủi ro thật.

PACK-10 khóa nguyên tắc:

Không có release decision thì không có Go-live Approved.

Một hệ thống có thể đã Release Approved cho staging hoặc pilot nhưng chưa Go-live Approved cho production.

**3. PHẠM VI QUẢN TRỊ CỦA PACK-10**

PACK-10 quản trị toàn bộ các nhóm sau:

1.  PACK-01 — Operational / Production / Warehouse / Inventory / Traceability / Recall / Sale Lock domain.

2.  PACK-02 — Product Master / SKU / Ingredient / Recipe / Formula Version / Product Activation.

3.  PACK-03 — Demand / MRP / Formula Scaling / Procurement / Stock Alert / Material & Packaging Control.

4.  PACK-04 — Order / Quote / Cart / Payment / Shipping / Fulfillment / Commerce Runtime.

5.  PACK-05 — Facebook Channel Gateway / Meta Live & Messenger / Private Handoff.

6.  PACK-06 — AI Advisor / Claim Guard / Runtime Resolver / Customer Consulting Boundary.

7.  PACK-07 — Ads / ROAS / Attribution / Verified Revenue Measurement.

8.  PACK-08 — MC AI Live / Live Script / Hosting Assistant / Real-Time Sales Orchestration.

9.  PACK-09 — IVR Order Confirmation / Internal SIM Gateway Governance.

10. Cross-pack Gateway.

11. Completion Report.

12. Evidence Registry.

13. Smoke Matrix.

14. P0 Blocker Registry.

15. Release Readiness.

16. Go-live Control.

17. Owner Final Decision.

PACK-10 không được mở rộng phạm vi nghiệp vụ mới nếu chưa có owner decision.

**4. PACK-10 SOURCE-OF-TRUTH BOUNDARY**

**4.1. Source-of-truth của PACK-10**

PACK-10 chỉ được dùng các nguồn sau làm căn cứ:

1.  MASTER-00 đến MASTER-07 đã khóa.

2.  PACK-01 đến PACK-09 đã khóa.

3.  Evidence được nộp theo registry.

4.  Smoke result được ghi nhận theo test matrix.

5.  Security result được xác nhận.

6.  Owner sign-off.

7.  Release decision.

8.  Go-live decision.

9.  Incident / rollback / release hold record nếu có.

PACK-10 không lấy dữ liệu từ lời nói miệng để PASS.  
PACK-10 không lấy dashboard làm source-of-truth.  
PACK-10 không lấy comment, inbox, quote, cart draft, pending order, pending revenue làm bằng chứng release.  
PACK-10 không lấy code hiện tại làm nguồn thay thế tài liệu governance đã khóa.  
PACK-10 không lấy trạng thái “dev đã làm” làm trạng thái production ready nếu thiếu test/evidence/smoke.

**4.2. PACK-10 chỉ đọc trạng thái, không tự sửa pack**

PACK-10 có quyền tổng hợp:

- pack nào đã documentation complete;

- pack nào đã implementation complete;

- pack nào đã test complete;

- pack nào đã smoke pass;

- pack nào có evidence accepted;

- pack nào còn P0 blocker;

- pack nào đã owner sign-off;

- pack nào được release approved;

- pack nào được go-live approved.

PACK-10 không có quyền:

- sửa rule nghiệp vụ của PACK-01;

- sửa SKU / recipe / product activation của PACK-02;

- sửa MRP / procurement threshold của PACK-03;

- sửa order/payment/shipping logic của PACK-04;

- sửa Facebook Gateway routing của PACK-05;

- sửa AI Advisor claim/sales logic của PACK-06;

- sửa Ads attribution rule của PACK-07;

- sửa MC AI Live script boundary của PACK-08;

- sửa IVR attempts/scheduler/call result rule của PACK-09.

Nếu có conflict giữa PACK-10 và pack chủ quản, pack chủ quản giữ quyền source-of-truth nghiệp vụ; PACK-10 chỉ ghi nhận conflict và đưa vào P0 Blocker Registry hoặc Owner Review Required.

**5. GLOBAL GATEWAY STATUS MODEL**

**5.1. Gateway Status mặc định**

Trạng thái mặc định của toàn hệ thống là:

GATEWAY_STATUS = BLOCKED

Gateway chỉ được chuyển trạng thái khi toàn bộ điều kiện tương ứng đã đủ.

Không pack nào được tự động PASS chỉ vì tài liệu đã hoàn tất.

**5.2. Danh sách trạng thái Gateway**

| **Gateway Status**    | **Ý nghĩa**                                                  | **Điều kiện**                                                                   |
|-----------------------|--------------------------------------------------------------|---------------------------------------------------------------------------------|
| BLOCKED               | Chưa đủ điều kiện đi tiếp                                    | Thiếu implementation, test, smoke, evidence, owner sign-off hoặc còn P0 blocker |
| PENDING_EVIDENCE      | Đã có triển khai/test một phần nhưng thiếu evidence accepted | Evidence chưa nộp, chưa review hoặc chưa accepted                               |
| NEEDS_RETEST          | Evidence/test có vấn đề, cần test lại                        | Có fail, stale evidence hoặc scope thay đổi                                     |
| OWNER_REVIEW_REQUIRED | Cần owner quyết định                                         | Có conflict, exception, deviation hoặc rủi ro cần duyệt                         |
| RELEASE_HOLD          | Tạm giữ release                                              | Có incident, risk, blocker hoặc owner hold                                      |
| RELEASE_READY         | Đủ điều kiện kỹ thuật để trình duyệt release                 | Smoke pass, evidence accepted, P0 clear, security pass                          |
| RELEASE_APPROVED      | Owner đã duyệt release                                       | Có owner sign-off và release decision                                           |
| GO_LIVE_APPROVED      | Được phép vận hành production                                | Có release approved, go-live decision, rollback plan, monitoring ready          |
| ROLLBACK_REQUIRED     | Phải rollback                                                | Sau release có incident hoặc điều kiện production fail                          |
| DEPRECATED            | Pack/flow không còn dùng                                     | Có owner decision thay thế chính thức                                           |

**5.3. Global status không được cao hơn pack yếu nhất**

PACK-10 khóa nguyên tắc:

Trạng thái global không được cao hơn trạng thái của pack trọng yếu yếu nhất.

Nếu một pack P0 còn BLOCKED thì toàn hệ thống không được GO_LIVE_APPROVED.

Ví dụ:

- PACK-04 Payment chưa evidence accepted thì không được gọi Commerce Production Ready.

- PACK-05 Facebook Gateway chưa smoke pass thì không được mở AI Live production routing.

- PACK-06 AI Advisor chưa claim guard pass thì không được public tư vấn tự động.

- PACK-07 chưa Verified Revenue evidence thì không được scale Ads.

- PACK-08 chưa Live Evidence accepted thì không được production live orchestration.

- PACK-09 IVR chưa smoke/security/evidence thì IVR_GATE vẫn BLOCKED.

**6. PACK REGISTRY — PACK-01 ĐẾN PACK-09**

**6.1. Bảng registry tổng hợp**

| **Pack** | **Tên pack**                                                                              | **Vai trò**                                                          | **Source-of-truth chính** | **Trạng thái release mặc định trong PACK-10**        |
|----------|-------------------------------------------------------------------------------------------|----------------------------------------------------------------------|---------------------------|------------------------------------------------------|
| PACK-01  | Operational / Production / Warehouse / Inventory / Traceability / Recall / Sale Lock      | Khóa vận hành sản xuất, kho, truy xuất, thu hồi, khóa bán            | PACK-01                   | BLOCKED cho đến khi có smoke/evidence/owner sign-off |
| PACK-02  | Product Master / SKU / Ingredient / Recipe / Formula Version / Product Activation         | Khóa sản phẩm, SKU, nguyên liệu, công thức, phiên bản, kích hoạt bán | PACK-02                   | BLOCKED/PENDING_EVIDENCE                             |
| PACK-03  | Demand / MRP / Formula Scaling / Procurement / Stock Alert / Material & Packaging Control | Khóa nhu cầu, MRP, ngưỡng tồn, thu mua, vật tư, bao bì               | PACK-03                   | BLOCKED/PENDING_EVIDENCE                             |
| PACK-04  | Order / Quote / Cart / Payment / Shipping / Fulfillment / Commerce Runtime                | Khóa báo giá, đơn hàng, thanh toán, giao hàng, runtime thương mại    | PACK-04                   | BLOCKED/PENDING_EVIDENCE                             |
| PACK-05  | Facebook Channel Gateway / Meta Live & Messenger / Private Handoff                        | Khóa routing Facebook, comment, Messenger, handoff private           | PACK-05                   | BLOCKED/PENDING_EVIDENCE                             |
| PACK-06  | AI Advisor / Claim Guard / Runtime Resolver / Customer Consulting Boundary                | Khóa AI tư vấn, claim, resolver, guard, sales behavior               | PACK-06                   | BLOCKED/PENDING_EVIDENCE                             |
| PACK-07  | Ads / ROAS / Attribution / Verified Revenue Measurement                                   | Khóa đo lường Ads, ROAS, attribution, verified revenue               | PACK-07                   | BLOCKED/PENDING_EVIDENCE                             |
| PACK-08  | MC AI Live / Live Script / Hosting Assistant / Real-Time Sales Orchestration              | Khóa trợ lý điều phối live, script, cue, incident control            | PACK-08                   | BLOCKED/PENDING_EVIDENCE                             |
| PACK-09  | IVR Order Confirmation / Internal SIM Gateway Governance                                  | Khóa gọi xác nhận đơn qua Internal SIM Gateway                       | PACK-09                   | BLOCKED/PENDING_EVIDENCE                             |

**6.2. Pack nào chưa release thì downstream không được phụ thuộc production**

Nguyên tắc bắt buộc:

Không được cho module downstream phụ thuộc production vào pack chưa release.

Ví dụ:

1.  AI Advisor không được chốt quote nếu PACK-04 chưa production ready.

2.  Facebook Gateway không được routing production nếu PACK-05 chưa release.

3.  Ads không được scale nếu PACK-07 chưa Data Quality PASS và Verified Revenue PASS.

4.  MC AI Live không được cue bán hàng thật nếu PACK-08 chưa evidence accepted.

5.  IVR không được gọi khách thật nếu PACK-09 chưa security/smoke/evidence/owner sign-off.

6.  Commerce không được mở bán SKU nếu PACK-02/PACK-01 chưa sellable/release/sale lock pass.

7.  Warehouse không được xuất bán nếu batch chưa RELEASED.

8.  Public Trace không được mở nếu whitelist/public-safe DTO chưa pass.

9.  Recall/Sale Lock chưa pass thì toàn bộ bán hàng liên quan phải bị chặn.

**7. COMPLETION LEVEL MODEL**

**7.1. Level 0 — Documentation Draft**

Tài liệu đang soạn hoặc chưa clean final.

Không được triển khai production theo trạng thái này.

**7.2. Level 1 — Documentation Complete**

Tài liệu đã viết xong, đã clean final, có thể dùng làm căn cứ triển khai.

Điều kiện:

1.  Có tên pack rõ.

2.  Có version.

3.  Có scope.

4.  Có source-of-truth boundary.

5.  Có rule bắt buộc.

6.  Có Done Gate / Fail Gate.

7.  Có smoke requirement.

8.  Có release control.

9.  Không còn phần vá lẻ/lặp/rác.

10. Không mâu thuẫn với MASTER/PACK liên quan.

Level này chưa phải production ready.

**7.3. Level 2 — Implementation Complete**

Dev đã triển khai xong phạm vi được giao theo tài liệu.

Điều kiện:

1.  Đúng scope pack.

2.  Không tự thêm đường vòng.

3.  Không hardcode runtime đáng lẽ phải lấy từ source-of-truth.

4.  Không vượt boundary pack.

5.  Có kiểm soát permission/security tương ứng.

6.  Có log/audit/evidence hook nếu pack yêu cầu.

7.  Có môi trường test/staging phù hợp.

Level này chưa đủ release nếu thiếu test/smoke/evidence.

**7.4. Level 3 — Test Complete**

Đã chạy test theo test matrix của pack.

Điều kiện:

1.  Có test case.

2.  Có kết quả pass/fail.

3.  Có môi trường chạy test.

4.  Có dữ liệu test.

5.  Có người chịu trách nhiệm test.

6.  Có thời điểm test.

7.  Có issue nếu fail.

Test Complete chưa đồng nghĩa Smoke Pass.

**7.5. Level 4 — Smoke Pass**

Luồng trọng yếu đã chạy qua theo smoke matrix.

Điều kiện:

1.  Luồng P0 pass.

2.  Không bypass owner pack.

3.  Không bypass source-of-truth.

4.  Không bypass security/permission.

5.  Không bypass evidence.

6.  Không phát sinh P0 blocker mới.

7.  Có kết quả smoke gắn với evidence.

Smoke Pass là điều kiện để Release Ready, nhưng chưa đủ nếu thiếu evidence accepted hoặc owner sign-off.

**7.6. Level 5 — Evidence Accepted**

Evidence đã được nộp, review và chấp nhận.

Điều kiện:

1.  Evidence có nguồn.

2.  Evidence có thời điểm.

3.  Evidence có môi trường.

4.  Evidence gắn với pack.

5.  Evidence gắn với test/smoke.

6.  Evidence được owner hoặc reviewer có quyền chấp nhận.

7.  Evidence không stale.

8.  Evidence không mâu thuẫn với rule đã khóa.

Không có Evidence Accepted thì không Completion PASS.

**7.7. Level 6 — Owner Sign-off**

Owner xác nhận pack hoặc scope đã đạt yêu cầu.

Điều kiện:

1.  Evidence accepted.

2.  Smoke pass.

3.  P0 blocker cleared.

4.  Security pass nếu pack có rủi ro bảo mật.

5.  Không còn conflict chưa xử lý.

6.  Có release scope rõ.

7.  Có owner sign-off record.

**7.8. Level 7 — Release Approved**

Owner hoặc release authority đã phê duyệt release.

Điều kiện:

1.  Owner sign-off.

2.  Release scope rõ.

3.  Rollback plan có sẵn.

4.  Monitoring/alert readiness nếu áp dụng.

5.  No P0 blocker.

6.  No unresolved cross-pack dependency.

7.  Release decision được ghi nhận.

**7.9. Level 8 — Go-live Approved**

Được phép vận hành production thật.

Điều kiện:

1.  Release Approved.

2.  Production environment ready.

3.  Monitoring ready.

4.  Support/incident owner ready.

5.  Rollback/recovery ready.

6.  Business owner chấp thuận.

7.  Go-live decision chính thức.

**8. NO-BYPASS RELEASE RULE**

**8.1. Nguyên tắc không bypass**

Không pack nào được vượt qua pack khác để tự vận hành production.

Các hành vi sau bị cấm:

1.  AI tự tính giá thay Commerce Runtime.

2.  Ads tự tính ROAS từ pending revenue.

3.  Facebook Gateway tự tạo order ngoài Commerce Core.

4.  MC AI Live tự chốt đơn đầy đủ trên public comment.

5.  IVR tự hủy đơn ngoài Core Order State Machine.

6.  CRM dùng thông báo hủy đơn như marketing/upsell.

7.  Dashboard tự trở thành source-of-truth.

8.  Admin sửa tay result để hợp thức hóa PASS.

9.  Payment tự mark PAID khi chưa có xác nhận hợp lệ.

10. Warehouse mở bán hàng chưa RELEASED.

11. Recall/Sale Lock bị bỏ qua để tiếp tục bán.

12. Public Trace lộ dữ liệu nội bộ.

13. Dev dùng hardcode để thay runtime resolver.

14. Module downstream gọi production vào pack chưa release.

**8.2. No-bypass theo nhóm hệ thống**

| **Nhóm**         | **Không được bypass**                                                             |
|------------------|-----------------------------------------------------------------------------------|
| Commerce         | Không bypass Quote Snapshot, Payment Confirmation, Order State Machine            |
| AI Advisor       | Không bypass Product Knowledge Resolver, Price Runtime, Claim Guard, Health Guard |
| Facebook Gateway | Không bypass private handoff, Messenger routing, privacy guard                    |
| Ads              | Không bypass Verified Revenue, Attribution Rule, Data Quality                     |
| MC AI Live       | Không bypass Live Plan, Product Scope, Claim Guard, Risk P0                       |
| IVR              | Không bypass Core Order State Machine, Deadline Scheduler, Call Result Evidence   |
| Warehouse        | Không bypass Batch Release, Sale Lock, Recall Lock                                |
| Traceability     | Không bypass public whitelist, internal trace boundary                            |
| MISA             | Không bypass integration layer, accounting review, reconciliation                 |
| Payment          | Không bypass confirmed payment source, accounting review, bank transfer registry  |

**9. RELEASE BOUNDARY GIỮA CÁC PACK**

**9.1. Boundary PACK-04 với PACK-05 / PACK-06 / PACK-07**

PACK-04 là nguồn chính cho quote, cart, order, payment, shipping, fulfillment.

PACK-05 chỉ route khách từ Facebook/Messenger.  
PACK-06 chỉ tư vấn và tạo nhu cầu theo runtime.  
PACK-07 chỉ đo lường.

PACK-05, PACK-06, PACK-07 không được thay PACK-04.

Nếu PACK-04 chưa release, các module này không được chạy production đầy đủ.

**9.2. Boundary PACK-06 với PACK-02 / PACK-04**

AI Advisor chỉ tư vấn sản phẩm theo product knowledge, runtime resolver và guard.

AI Advisor không được tự quyết định:

- SKU nào sellable nếu PACK-02/PACK-01 chưa xác nhận.

- Giá nếu PACK-04 chưa cung cấp.

- Tồn kho nếu inventory runtime chưa xác nhận.

- Chương trình nếu promotion runtime chưa xác nhận.

- Claim nếu Claim Guard chưa approve.

- Đơn hàng nếu Commerce Core chưa tạo.

**9.3. Boundary PACK-07 với Commerce / Payment / MISA**

PACK-07 không tạo doanh thu.

PACK-07 chỉ được tính ROAS chính thức khi có Verified Revenue.

Verified Revenue phải đến từ nguồn đã được PACK-04 / Payment / MISA / Accounting Review xác nhận theo rule đã khóa.

Không có Verified Revenue thì không có ROAS chính thức.

**9.4. Boundary PACK-08 với PACK-05 / PACK-06 / PACK-07**

MC AI Live chỉ là trợ lý điều phối live.

MC AI Live không phải AI Advisor.  
MC AI Live không thay Facebook Gateway.  
MC AI Live không thay Commerce Runtime.  
MC AI Live không thay Ads Measurement.

MC AI Live chỉ được production khi có đủ:

1.  Live Plan.

2.  Product Scope.

3.  Claim Guard.

4.  Privacy Guard.

5.  PACK-05 private handoff.

6.  PACK-06 consult boundary.

7.  PACK-07 measurement handoff.

8.  Risk P0 control.

9.  Evidence accepted.

**9.5. Boundary PACK-09 với Commerce / Notification / AI / CRM**

IVR chỉ xác nhận đơn theo mục đích ORDER_CONFIRMATION_ONLY.

IVR không phải sales.  
IVR không phải CRM.  
IVR không phải marketing.  
IVR không phải chăm sóc khách hàng.  
IVR không phải payment.  
IVR không phải delivery.  
IVR không phải warehouse.  
IVR không phải MISA.

IVR result chỉ là input signal.  
Core Order State Machine là lớp quyết định cuối.

SIM Gateway không được cập nhật order trực tiếp.  
AI Advisor không được tự gửi tin hủy đơn.  
CRM không được biến tin hủy đơn thành upsell.  
Notification owner chỉ được gửi thông báo hợp lệ sau khi Core đã quyết định.

**10. DEFAULT GLOBAL RELEASE POSITION**

Tại thời điểm PACK-10 V1.0 CLEAN FINAL được viết, trạng thái mặc định phải được hiểu như sau:

| **Nhóm trạng thái**   | **Giá trị mặc định**                                       |
|-----------------------|------------------------------------------------------------|
| DOCUMENTATION_STATUS  | Có thể COMPLETE theo từng pack nếu tài liệu đã clean final |
| IMPLEMENTATION_STATUS | NOT_CONFIRMED nếu chưa có evidence dev                     |
| TEST_STATUS           | PENDING_EVIDENCE                                           |
| SMOKE_STATUS          | PENDING_EVIDENCE                                           |
| SECURITY_STATUS       | PENDING_EVIDENCE                                           |
| EVIDENCE_STATUS       | PENDING                                                    |
| OWNER_SIGN_OFF        | NO                                                         |
| RELEASE_APPROVED      | NO                                                         |
| GO_LIVE_APPROVED      | NO                                                         |
| PRODUCTION_READY      | NO                                                         |
| GLOBAL_GATEWAY_STATUS | BLOCKED                                                    |

PACK-10 không được tự nâng trạng thái chỉ vì PACK-01 đến PACK-09 đã được viết xong.

**11. RELEASE DECISION PRINCIPLE**

Một release decision hợp lệ phải trả lời đủ 9 câu hỏi:

1.  Release pack nào?

2.  Release version nào?

3.  Release scope nào?

4.  Evidence nào đã accepted?

5.  Smoke nào đã pass?

6.  Security nào đã pass?

7.  P0 blocker nào đã clear?

8.  Owner nào đã sign-off?

9.  Nếu fail production thì rollback/recovery như thế nào?

Nếu thiếu một trong 9 câu hỏi trên, release decision chưa hợp lệ.

**12. PRODUCTION READINESS PRINCIPLE**

Một pack hoặc toàn hệ thống chỉ được gọi là Production Ready khi thỏa toàn bộ điều kiện:

1.  Documentation Complete.

2.  Implementation Complete.

3.  Test Complete.

4.  Smoke Pass.

5.  Security Pass nếu có rủi ro bảo mật, dữ liệu, payment, customer, channel hoặc operation.

6.  Evidence Accepted.

7.  P0 Blocker Cleared.

8.  Cross-pack Dependency Cleared.

9.  Owner Sign-off.

10. Release Approved.

11. Monitoring / incident / rollback readiness.

12. Go-live decision nếu chạy thật.

Nếu thiếu bất kỳ điều kiện nào, trạng thái phải là:

PRODUCTION_READY = NO

**13. PACK-10 P0 RELEASE RULES**

Các rule sau là P0, không được hạ cấp:

**P0-REL-001 — Documentation Complete không phải Production Ready**

Không được dùng tài liệu đã hoàn tất để tuyên bố hệ thống đã sẵn sàng chạy thật.

**P0-REL-002 — Không có Evidence Accepted thì không Completion PASS**

Mọi PASS phải có evidence accepted.

**P0-REL-003 — Không có Smoke Pass thì không Release Ready**

Smoke fail hoặc smoke pending đều không được release ready.

**P0-REL-004 — Không có Owner Sign-off thì không Release Approved**

Owner sign-off là bắt buộc.

**P0-REL-005 — Không có Release Decision thì không Go-live Approved**

Go-live phải có quyết định release chính thức.

**P0-REL-006 — Không bypass source-of-truth boundary**

Mỗi pack phải giữ đúng quyền hạn đã khóa.

**P0-REL-007 — Không cho downstream phụ thuộc pack chưa release**

Pack chưa release không được dùng làm nền production cho module khác.

**P0-REL-008 — Không dùng dashboard làm source-of-truth**

Dashboard chỉ hiển thị, không quyết định trạng thái thật.

**P0-REL-009 — Không dùng lời xác nhận miệng để PASS**

Tất cả PASS phải có evidence.

**P0-REL-010 — Không release nếu còn P0 blocker**

P0 blocker chưa clear thì Gateway phải giữ BLOCKED hoặc RELEASE_HOLD.

**14. KẾT LUẬN PHẦN 1/4**

PHẦN 1/4 của PACK-10 đã khóa các nguyên tắc nền cho Completion / Evidence / Gateway / Release Readiness của toàn bộ hệ thống Ginsengfood.

Kết luận bắt buộc:

1.  PACK-10 là pack tổng hợp release readiness, không thay thế PACK-01 đến PACK-09.

2.  PACK-10 không tự làm PASS pack nào.

3.  Documentation Complete không phải Production Ready.

4.  Không có Evidence Accepted thì không Completion PASS.

5.  Không có Smoke Pass thì không Release Ready.

6.  Không có Owner Sign-off thì không Release Approved.

7.  Không có Release Decision thì không Go-live Approved.

8.  Gateway Status mặc định là BLOCKED.

9.  Không pack nào được bypass source-of-truth boundary.

10. Không downstream module nào được phụ thuộc production vào pack chưa release.

11. Toàn hệ thống vẫn giữ:

- PRODUCTION_READY = NO

- RELEASE_APPROVED = NO

- GO_LIVE_APPROVED = NO

- GLOBAL_GATEWAY_STATUS = BLOCKED  
  cho đến khi có đầy đủ implementation, test, smoke, security, accepted evidence, owner sign-off và release decision.

**KẾT THÚC PHẦN 1/4 — PACK-10 V1.0 CLEAN FINAL**

**PHẦN 2/4 — EVIDENCE REGISTRY / SMOKE STATUS / P0 BLOCKER / PACK COMPLETION MATRIX**

**15. MỤC ĐÍCH CỦA PHẦN 2/4**

PHẦN 2/4 khóa lớp quản trị bằng chứng hoàn tất của toàn bộ hệ thống Ginsengfood.

Nếu PHẦN 1/4 đã khóa nguyên tắc:

Không có evidence accepted thì không Completion PASS.

Thì PHẦN 2/4 xác định rõ:

1.  Evidence là gì.

2.  Evidence có những trạng thái nào.

3.  Evidence nào được chấp nhận.

4.  Evidence nào bị từ chối.

5.  Evidence nào hết hiệu lực.

6.  Smoke status được đọc như thế nào.

7.  P0 blocker được ghi nhận như thế nào.

8.  Pack Completion Matrix phải theo dõi những cột nào.

9.  Từng PACK-01 đến PACK-09 đang được kiểm soát theo nguyên tắc nào.

10. Khi nào một pack được xem là đủ điều kiện trình release.

PHẦN 2/4 không làm PASS cho bất kỳ pack nào.  
PHẦN 2/4 không thay thế test report.  
PHẦN 2/4 không thay thế smoke execution.  
PHẦN 2/4 không thay thế owner review.  
PHẦN 2/4 chỉ chuẩn hóa cách ghi nhận, phân loại, review và kết luận evidence.

**16. EVIDENCE REGISTRY PRINCIPLE**

**16.1. Evidence Registry là gì**

Evidence Registry là sổ đăng ký bằng chứng của toàn bộ quá trình hoàn tất, kiểm thử, smoke, security, release và go-live.

Evidence Registry không phải dashboard hiển thị.  
Evidence Registry không phải lời xác nhận miệng.  
Evidence Registry không phải tin nhắn báo đã xong.  
Evidence Registry không phải ảnh chụp rời rạc không rõ nguồn.

Evidence Registry phải cho phép truy ngược:

1.  Evidence thuộc pack nào.

2.  Evidence thuộc module/domain nào.

3.  Evidence chứng minh điều gì.

4.  Evidence phát sinh ở môi trường nào.

5.  Evidence gắn với test/smoke/security nào.

6.  Evidence do ai nộp.

7.  Evidence do ai review.

8.  Evidence đang ở trạng thái nào.

9.  Evidence có còn hiệu lực không.

10. Evidence có đủ điều kiện làm căn cứ PASS không.

**16.2. Evidence không phải là “đã làm xong”**

Trong PACK-10, câu “đã làm xong” không có giá trị PASS nếu không có evidence.

Các câu sau không được xem là evidence accepted:

- “Dev đã làm rồi.”

- “Bên kỹ thuật nói chạy được.”

- “Tôi đã kiểm tra sơ sơ.”

- “Chắc không lỗi.”

- “Ảnh này là màn hình chạy được.”

- “Có log rồi nhưng chưa đối chiếu.”

- “Có test rồi nhưng chưa smoke.”

- “Có smoke rồi nhưng chưa owner review.”

- “Có owner đồng ý miệng.”

- “Tài liệu đã hoàn tất nên coi như xong.”

PACK-10 khóa nguyên tắc:

Hoàn tất phải có bằng chứng.  
Bằng chứng phải được review.  
Review phải có trạng thái.  
Trạng thái ACCEPTED mới được dùng để PASS.

**17. EVIDENCE STATUS MODEL**

**17.1. Danh sách trạng thái evidence**

| **Evidence Status**   | **Ý nghĩa**                                  | **Có được dùng để PASS không**                         |
|-----------------------|----------------------------------------------|--------------------------------------------------------|
| PENDING               | Chưa có evidence                             | Không                                                  |
| SUBMITTED             | Đã nộp evidence nhưng chưa review            | Không                                                  |
| ACCEPTED              | Evidence đã được review và chấp nhận         | Có                                                     |
| REJECTED              | Evidence bị từ chối                          | Không                                                  |
| NEEDS_RETEST          | Cần test/smoke lại                           | Không                                                  |
| EXPIRED               | Evidence hết hiệu lực                        | Không                                                  |
| OWNER_REVIEW_REQUIRED | Cần owner quyết định                         | Không, cho đến khi owner duyệt                         |
| SUPERSEDED            | Evidence đã bị thay thế bởi evidence mới hơn | Không                                                  |
| BLOCKED_BY_DEPENDENCY | Evidence phụ thuộc pack khác chưa clear      | Không                                                  |
| PARTIAL_ACCEPTED      | Chỉ chấp nhận một phần scope                 | Chỉ dùng cho phần đã được ghi rõ, không PASS toàn pack |

**17.2. PENDING**

PENDING là trạng thái mặc định khi chưa có evidence.

Nếu một pack chưa có evidence, PACK-10 phải ghi:

EVIDENCE_STATUS = PENDING

PENDING không được diễn giải là fail kỹ thuật.  
PENDING chỉ có nghĩa là chưa đủ bằng chứng để kết luận.

Tuy nhiên, PENDING bắt buộc kéo theo:

COMPLETION_PASS = NO  
RELEASE_READY = NO  
PRODUCTION_READY = NO

**17.3. SUBMITTED**

SUBMITTED là trạng thái evidence đã được nộp nhưng chưa được review.

SUBMITTED không được dùng để PASS.

Ví dụ:

- Dev đã nộp ảnh màn hình.

- QA đã nộp file test result.

- Security đã nộp checklist.

- Operation đã nộp video smoke.

- Ads team đã nộp export số liệu.

- Payment/accounting đã nộp đối soát.

Tất cả các trường hợp trên vẫn chưa PASS nếu chưa có review accepted.

**17.4. ACCEPTED**

ACCEPTED là trạng thái duy nhất có thể dùng để xét Completion PASS.

Evidence chỉ được ACCEPTED khi đạt đủ điều kiện:

1.  Đúng pack.

2.  Đúng scope.

3.  Đúng môi trường.

4.  Đúng version.

5.  Đúng test/smoke/security case.

6.  Có thời điểm phát sinh.

7.  Có người nộp.

8.  Có người review.

9.  Không mâu thuẫn với rule đã khóa.

10. Không stale.

11. Không bị pack khác chặn.

12. Không có P0 blocker liên quan.

ACCEPTED không tự động tạo Release Approved.  
ACCEPTED chỉ là một điều kiện bắt buộc trong chuỗi release.

**17.5. REJECTED**

REJECTED là evidence bị từ chối.

Lý do REJECTED có thể gồm:

1.  Sai pack.

2.  Sai scope.

3.  Sai môi trường.

4.  Không rõ version.

5.  Không chứng minh được rule cần chứng minh.

6.  Thiếu log/test/smoke liên quan.

7.  Không có owner review.

8.  Có dấu hiệu bypass.

9.  Có dữ liệu hardcode trái rule.

10. Có rủi ro bảo mật.

11. Có mâu thuẫn với source-of-truth.

12. Evidence không thể truy ngược.

Evidence REJECTED không được tái sử dụng để PASS nếu chưa nộp lại bản mới.

**17.6. NEEDS_RETEST**

NEEDS_RETEST áp dụng khi:

1.  Test/smoke chạy sai scope.

2.  Dữ liệu test không còn phù hợp.

3.  Rule pack đã thay đổi.

4.  Version implementation đã thay đổi.

5.  Bug đã sửa nhưng chưa test lại.

6.  Evidence cũ không còn phản ánh trạng thái hiện tại.

7.  Cross-pack dependency thay đổi.

8.  Owner yêu cầu kiểm tra lại.

NEEDS_RETEST kéo theo:

COMPLETION_PASS = NO  
RELEASE_READY = NO

**17.7. EXPIRED**

Evidence bị EXPIRED khi không còn đủ tính thời điểm.

Ví dụ:

- Evidence của bản build cũ.

- Evidence trước khi sửa rule P0.

- Evidence trước khi đổi scope pack.

- Evidence trước khi thay đổi payment/shipping/AI/IVR/gateway.

- Evidence của môi trường staging cũ không còn dùng.

- Evidence trước khi xảy ra incident chưa được retest.

Evidence EXPIRED không được dùng để release.

**17.8. OWNER_REVIEW_REQUIRED**

OWNER_REVIEW_REQUIRED áp dụng khi evidence có yếu tố cần quyết định của owner.

Ví dụ:

1.  Có deviation so với pack gốc.

2.  Có exception cần chấp thuận.

3.  Có conflict giữa hai pack.

4.  Có rủi ro business cần owner cân nhắc.

5.  Có smoke partial pass nhưng chưa đủ toàn scope.

6.  Có dữ liệu thật cần phê duyệt trước khi dùng.

7.  Có vấn đề payment/accounting/shipping/customer data.

8.  Có khả năng ảnh hưởng go-live.

Trong trạng thái này, PACK-10 không được tự kết luận PASS.

**18. EVIDENCE CLASSIFICATION**

**18.1. Nhóm evidence bắt buộc**

PACK-10 phân evidence thành các nhóm sau:

| **Nhóm evidence**       | **Mục đích**                                                      | **Bắt buộc khi nào**                                       |
|-------------------------|-------------------------------------------------------------------|------------------------------------------------------------|
| Documentation Evidence  | Chứng minh tài liệu clean final đã được khóa                      | Mọi pack                                                   |
| Implementation Evidence | Chứng minh đã triển khai đúng scope                               | Khi xét implementation complete                            |
| Test Evidence           | Chứng minh test case đã chạy                                      | Khi xét test complete                                      |
| Smoke Evidence          | Chứng minh luồng P0 chạy qua                                      | Khi xét release ready                                      |
| Security Evidence       | Chứng minh không vi phạm bảo mật/quyền/dữ liệu                    | Với payment, AI, gateway, IVR, customer data, admin, trace |
| Runtime Evidence        | Chứng minh lấy dữ liệu từ runtime/source-of-truth, không hardcode | Với price, stock, product, claim, payment, quote, ads      |
| Audit Evidence          | Chứng minh có log/truy vết/sự kiện kiểm soát                      | Với order, payment, warehouse, recall, IVR, gateway        |
| Integration Evidence    | Chứng minh liên kết cross-pack đúng boundary                      | Với downstream dependency                                  |
| Owner Evidence          | Chứng minh owner đã review/sign-off                               | Khi xét release approved                                   |
| Rollback Evidence       | Chứng minh có phương án rollback/recovery                         | Khi xét release/go-live                                    |

**18.2. Evidence tối thiểu theo pack**

| **Pack** | **Evidence tối thiểu bắt buộc**                                                                                                                        |
|----------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| PACK-01  | Smoke vận hành sản xuất/kho/truy xuất/thu hồi/sale lock; evidence batch release; evidence inventory/sale lock; evidence public trace không leak nội bộ |
| PACK-02  | Evidence SKU/Product/Ingredient/Recipe/Formula Version/Product Activation; evidence sellable gate; evidence không bán SKU chưa active                  |
| PACK-03  | Evidence Demand/MRP/Procurement Threshold/Strategic Reserve/Material & Packaging Control; evidence không tạo thu mua vượt rule                         |
| PACK-04  | Evidence Quote Snapshot/Cart/Order/Payment/Shipping/Fulfillment; evidence không mark paid sai; evidence không hardcode tài khoản/giá                   |
| PACK-05  | Evidence Facebook comment→Messenger/private handoff; evidence privacy guard; evidence không tạo order ngoài Commerce                                   |
| PACK-06  | Evidence AI Advisor resolver/guard/claim/product/runtime; evidence không nói sai claim; evidence không tự tính giá hardcode                            |
| PACK-07  | Evidence Ads attribution/data quality/verified revenue; evidence không tính ROAS từ pending revenue                                                    |
| PACK-08  | Evidence Live Plan/Product Scope/Claim Guard/Private Handoff/Risk P0; evidence không chốt đơn public                                                   |
| PACK-09  | Evidence IVR call result/scheduler/attempt rule/security/capacity; evidence SIM Gateway không cập nhật order trực tiếp                                 |

**19. EVIDENCE ACCEPTANCE RULE**

**19.1. Điều kiện ACCEPTED**

Một evidence được ACCEPTED khi đạt đủ 12 điều kiện:

1.  Có mã evidence hoặc định danh rõ.

2.  Có pack liên quan.

3.  Có scope liên quan.

4.  Có môi trường phát sinh.

5.  Có version hoặc mốc triển khai.

6.  Có thời điểm tạo evidence.

7.  Có người nộp evidence.

8.  Có người review evidence.

9.  Có kết quả review rõ.

10. Có liên kết với test/smoke/security case.

11. Không có P0 blocker liên quan.

12. Không bị pack khác phủ quyết.

Nếu thiếu một điều kiện, evidence không được ACCEPTED.

**19.2. Evidence không được chấp nhận nếu có bypass**

Evidence phải bị REJECTED nếu phát hiện một trong các dấu hiệu sau:

1.  AI hardcode giá/chương trình/tồn kho.

2.  Ads tự tính ROAS từ pending revenue.

3.  Facebook Gateway tự tạo order.

4.  MC AI Live chốt đơn public.

5.  IVR tự hủy đơn.

6.  SIM Gateway cập nhật order trực tiếp.

7.  Payment tự mark PAID không có xác nhận.

8.  Dashboard được dùng làm source-of-truth.

9.  Admin sửa tay trạng thái để hợp thức hóa.

10. Warehouse mở bán batch chưa release.

11. Public Trace lộ dữ liệu nội bộ.

12. Recall/Sale Lock bị bỏ qua.

13. Pack downstream dùng pack upstream chưa release.

**20. SMOKE STATUS MODEL**

**20.1. Smoke Status là gì**

Smoke Status là trạng thái kiểm tra luồng trọng yếu của pack hoặc toàn hệ thống.

Smoke không phải test đơn vị nhỏ.  
Smoke không phải kiểm tra giao diện sơ bộ.  
Smoke không phải ảnh chụp màn hình.  
Smoke không phải demo miệng.

Smoke phải chứng minh rằng luồng P0 thật sự chạy qua đúng rule.

**20.2. Danh sách Smoke Status**

| **Smoke Status**      | **Ý nghĩa**                         | **Có được Release Ready không** |
|-----------------------|-------------------------------------|---------------------------------|
| NOT_STARTED           | Chưa chạy smoke                     | Không                           |
| IN_PROGRESS           | Đang chạy smoke                     | Không                           |
| PASS                  | Smoke pass đúng scope               | Có thể xét tiếp                 |
| PARTIAL_PASS          | Chỉ pass một phần                   | Không pass toàn pack            |
| FAIL                  | Smoke fail                          | Không                           |
| BLOCKED               | Không chạy được do thiếu dependency | Không                           |
| NEEDS_RETEST          | Cần chạy lại                        | Không                           |
| EXPIRED               | Smoke cũ hết hiệu lực               | Không                           |
| OWNER_REVIEW_REQUIRED | Cần owner xem xét                   | Không cho đến khi owner duyệt   |

**20.3. Smoke PASS không tự động Release Approved**

Smoke PASS chỉ chứng minh luồng trọng yếu chạy được.

Smoke PASS không tự động tạo:

- Evidence Accepted;

- Owner Sign-off;

- Release Approved;

- Go-live Approved.

Smoke PASS chỉ là điều kiện bắt buộc để xét Release Ready.

**20.4. Smoke FAIL kéo Gateway về BLOCKED hoặc RELEASE_HOLD**

Nếu smoke fail trước release:

GATEWAY_STATUS = BLOCKED

Nếu smoke fail sau khi đã release:

GATEWAY_STATUS = RELEASE_HOLD hoặc ROLLBACK_REQUIRED

Nếu smoke fail liên quan P0:

P0_BLOCKER_STATUS = OPEN

**21. P0 BLOCKER REGISTRY**

**21.1. P0 Blocker là gì**

P0 Blocker là lỗi, thiếu sót, conflict hoặc rủi ro đủ nghiêm trọng để chặn release hoặc go-live.

P0 Blocker không phải góp ý nhỏ.  
P0 Blocker không phải lỗi giao diện không ảnh hưởng vận hành.  
P0 Blocker không phải vấn đề có thể bỏ qua để xử lý sau nếu nó chạm vào an toàn, doanh thu, dữ liệu, order, payment, sản xuất, traceability, recall, AI claim hoặc khách hàng thật.

**21.2. Nhóm P0 Blocker**

| **Nhóm P0** | **Mô tả**                    | **Ví dụ**                                                  |
|-------------|------------------------------|------------------------------------------------------------|
| P0-SOT      | Sai source-of-truth          | Dashboard được dùng thay Payment/MISA/Commerce             |
| P0-BYPASS   | Vượt boundary pack           | AI tự tính giá, IVR tự hủy đơn                             |
| P0-SEC      | Rủi ro bảo mật/dữ liệu       | Public Trace lộ dữ liệu nội bộ                             |
| P0-PAY      | Rủi ro thanh toán            | Mark PAID khi chưa có xác nhận                             |
| P0-ORD      | Rủi ro đơn hàng              | Cart draft bị tính như official order                      |
| P0-REV      | Rủi ro doanh thu             | Pending revenue bị tính vào ROAS                           |
| P0-STOCK    | Rủi ro tồn kho/sellable      | Bán hàng chưa release hoặc đang sale lock                  |
| P0-TRACE    | Rủi ro truy xuất/thu hồi     | Không trace được lô hoặc bỏ qua recall                     |
| P0-CLAIM    | Rủi ro claim/sức khỏe        | AI nói claim vượt whitelist                                |
| P0-CRM      | Rủi ro nhắn tin sai mục đích | Tin hủy đơn bị dùng upsell                                 |
| P0-IVR      | Rủi ro gọi xác nhận          | No answer bị nhầm invalid phone hoặc technical error       |
| P0-ADS      | Rủi ro scale sai             | Scale Ads khi Data Quality chưa PASS                       |
| P0-LIVE     | Rủi ro live public           | MC AI Live fake scarcity hoặc chốt đơn public              |
| P0-DEP      | Rủi ro dependency            | Downstream chạy production trên pack upstream chưa release |

**21.3. Trạng thái P0 Blocker**

| **P0 Status**         | **Ý nghĩa**              | **Release impact**                   |
|-----------------------|--------------------------|--------------------------------------|
| OPEN                  | Đang mở                  | Chặn release                         |
| INVESTIGATING         | Đang phân tích           | Chặn release                         |
| FIX_IN_PROGRESS       | Đang xử lý               | Chặn release                         |
| READY_FOR_RETEST      | Đã sửa, chờ retest       | Chặn release                         |
| RETEST_FAILED         | Retest fail              | Chặn release                         |
| RETEST_PASS           | Retest pass              | Chưa tự clear nếu chưa review        |
| OWNER_REVIEW_REQUIRED | Cần owner xác nhận       | Chặn release                         |
| CLEARED               | Đã clear hợp lệ          | Có thể xét tiếp                      |
| WAIVED_BY_OWNER       | Owner chấp nhận ngoại lệ | Chỉ hợp lệ nếu có risk acceptance rõ |
| REOPENED              | Mở lại                   | Chặn release                         |

**21.4. P0 chỉ được clear khi có evidence**

P0 Blocker không được clear bằng lời nói.

Muốn clear P0 phải có:

1.  Mô tả nguyên nhân.

2.  Cách xử lý.

3.  Evidence sửa lỗi.

4.  Retest evidence.

5.  Smoke evidence nếu ảnh hưởng luồng P0.

6.  Reviewer xác nhận.

7.  Owner sign-off nếu có rủi ro business.

8.  Không phát sinh blocker mới.

Nếu thiếu một trong các điều kiện trên, P0 không được clear.

**22. PACK COMPLETION MATRIX — NGUYÊN TẮC CHUNG**

**22.1. Mỗi pack phải có đủ cột trạng thái**

PACK-10 bắt buộc theo dõi tối thiểu các cột sau cho từng pack:

1.  Documentation Status.

2.  Implementation Status.

3.  Test Status.

4.  Smoke Status.

5.  Security Status.

6.  Evidence Status.

7.  P0 Blocker Status.

8.  Owner Sign-off Status.

9.  Release Status.

10. Go-live Status.

11. Production Ready Status.

Thiếu một cột thì matrix chưa đạt.

**22.2. Không được gộp cột để làm đẹp báo cáo**

Không được gộp các trạng thái sau thành một:

- Documentation Complete và Implementation Complete.

- Test Pass và Smoke Pass.

- Smoke Pass và Evidence Accepted.

- Evidence Accepted và Owner Sign-off.

- Owner Sign-off và Release Approved.

- Release Approved và Go-live Approved.

Gộp cột sẽ làm mất kiểm soát release.

**23. PACK COMPLETION MATRIX — PACK-01 ĐẾN PACK-09**

**23.1. Matrix trạng thái mặc định**

Bảng dưới đây là matrix kiểm soát của PACK-10.  
Giá trị mặc định khi chưa có evidence accepted là **NO / PENDING / BLOCKED**.

| **Pack** | **Documentation**                                  | **Implementation**             | **Test**         | **Smoke**        | **Security**     | **Evidence** | **P0 Blocker**    | **Owner Sign-off** | **Release** | **Go-live** | **Production Ready** |
|----------|----------------------------------------------------|--------------------------------|------------------|------------------|------------------|--------------|-------------------|--------------------|-------------|-------------|----------------------|
| PACK-01  | Theo owner pack                                    | PENDING_EVIDENCE               | PENDING_EVIDENCE | PENDING_EVIDENCE | PENDING_EVIDENCE | PENDING      | OPEN_IF_UNCLEARED | NO                 | NO          | NO          | NO                   |
| PACK-02  | Theo owner pack                                    | PENDING_EVIDENCE               | PENDING_EVIDENCE | PENDING_EVIDENCE | PENDING_EVIDENCE | PENDING      | OPEN_IF_UNCLEARED | NO                 | NO          | NO          | NO                   |
| PACK-03  | Theo owner pack                                    | PENDING_EVIDENCE               | PENDING_EVIDENCE | PENDING_EVIDENCE | PENDING_EVIDENCE | PENDING      | OPEN_IF_UNCLEARED | NO                 | NO          | NO          | NO                   |
| PACK-04  | Theo owner pack                                    | PENDING_EVIDENCE               | PENDING_EVIDENCE | PENDING_EVIDENCE | PENDING_EVIDENCE | PENDING      | OPEN_IF_UNCLEARED | NO                 | NO          | NO          | NO                   |
| PACK-05  | Theo owner pack                                    | PENDING_EVIDENCE               | PENDING_EVIDENCE | PENDING_EVIDENCE | PENDING_EVIDENCE | PENDING      | OPEN_IF_UNCLEARED | NO                 | NO          | NO          | NO                   |
| PACK-06  | Theo owner pack                                    | PENDING_EVIDENCE               | PENDING_EVIDENCE | PENDING_EVIDENCE | PENDING_EVIDENCE | PENDING      | OPEN_IF_UNCLEARED | NO                 | NO          | NO          | NO                   |
| PACK-07  | DOCUMENTATION_COMPLETE nếu bản clean final đã khóa | PENDING_EVIDENCE               | PENDING_EVIDENCE | PENDING_EVIDENCE | PENDING_EVIDENCE | PENDING      | OPEN_IF_UNCLEARED | NO                 | NO          | NO          | NO                   |
| PACK-08  | DOCUMENTATION_COMPLETE nếu bản clean final đã khóa | PENDING_EVIDENCE               | PENDING_EVIDENCE | PENDING_EVIDENCE | PENDING_EVIDENCE | PENDING      | OPEN_IF_UNCLEARED | NO                 | NO          | NO          | NO                   |
| PACK-09  | DOCUMENTATION_COMPLETE nếu bản clean final đã khóa | NOT_STARTED / PENDING_EVIDENCE | PENDING_EVIDENCE | PENDING_EVIDENCE | PENDING_EVIDENCE | PENDING      | OPEN_IF_UNCLEARED | NO                 | NO          | NO          | NO                   |

**23.2. Giải thích matrix**

Matrix trên không có nghĩa PACK-01 đến PACK-09 chưa viết xong.  
Matrix trên chỉ khẳng định:

Dù tài liệu đã hoàn tất, nếu chưa có implementation evidence, test evidence, smoke evidence, security evidence, owner sign-off và release decision thì Production Ready vẫn là NO.

Đây là nguyên tắc bắt buộc của PACK-10.

**24. PACK-SPECIFIC COMPLETION CONTROL**

**24.1. PACK-01 Completion Control**

PACK-01 chỉ được xét Release Ready khi chứng minh được:

1.  Production flow không bypass batch release.

2.  Warehouse không nhận hàng chưa RELEASED.

3.  Inventory ledger không bị sửa lịch sử.

4.  Traceability chạy được từ nguồn đến thành phẩm.

5.  Public Trace không lộ dữ liệu nội bộ.

6.  Recall/Sale Lock chặn bán đúng.

7.  Sale Lock thắng AI, Ads, CRM, Live, Gateway.

8.  Smoke operational chain pass.

9.  Evidence accepted.

10. Owner sign-off.

Nếu thiếu một điều kiện, PACK-01 Release Ready = NO.

**24.2. PACK-02 Completion Control**

PACK-02 chỉ được xét Release Ready khi chứng minh được:

1.  SKU/Product Master đúng source-of-truth.

2.  Ingredient/Recipe/Formula Version đúng version.

3.  G1/G2 hoặc formula version không ghi đè lịch sử.

4.  Product Activation không bypass sellable gate.

5.  SKU chưa active không được bán.

6.  Product runtime không hardcode sai.

7.  AI Advisor dùng product knowledge đúng runtime.

8.  Commerce không bán SKU chưa đủ điều kiện.

9.  Evidence accepted.

10. Owner sign-off.

**24.3. PACK-03 Completion Control**

PACK-03 chỉ được xét Release Ready khi chứng minh được:

1.  Demand-to-Production Order không cho Sales/Đại lý tự phát lệnh sản xuất trực tiếp.

2.  MRP tôn trọng ngưỡng tồn kho đã khóa.

3.  Procurement Suppression Threshold hoạt động đúng.

4.  Strategic Reserve cho Sâm Savigin không bị nhầm với mua ngoài.

5.  Company Source Harvest Exception được bảo vệ.

6.  Formula Scaling dùng đúng anchor và snapshot.

7.  Material/Packaging Disposal & Write-off có kiểm soát.

8.  Phiếu mua/nhập không tự sinh vượt rule.

9.  Evidence accepted.

10. Owner sign-off.

**24.4. PACK-04 Completion Control**

PACK-04 chỉ được xét Release Ready khi chứng minh được:

1.  Quote Snapshot là nguồn báo giá duy nhất.

2.  AI/Facebook/Live không tự tính giá ngoài Commerce Runtime.

3.  Cart draft không bị xem là official order.

4.  Order state machine quyết định trạng thái đơn.

5.  Payment không mark PAID nếu chưa có xác nhận hợp lệ.

6.  Chuyển khoản trực tiếp phải có payment reference/transfer memo hoặc accounting review.

7.  Không hardcode tài khoản ngân hàng ở AI/Gateway/CRM/Admin/frontend/static template.

8.  Shipping eligibility rõ.

9.  VAT display rõ theo runtime.

10. Evidence accepted.

11. Owner sign-off.

**24.5. PACK-05 Completion Control**

PACK-05 chỉ được xét Release Ready khi chứng minh được:

1.  Public comment không báo giá chi tiết nếu phải kéo private.

2.  Messenger/private handoff hoạt động đúng.

3.  Sau handoff, ngữ cảnh tiếp theo ở private.

4.  Facebook Gateway không tự tạo order ngoài Commerce.

5.  Privacy Guard chặn lộ thông tin cá nhân.

6.  Health-sensitive chuyển private.

7.  Complaint không bị xử lý như lead bán hàng.

8.  Gateway không spam, không vi phạm policy.

9.  Evidence accepted.

10. Owner sign-off.

**24.6. PACK-06 Completion Control**

PACK-06 chỉ được xét Release Ready khi chứng minh được:

1.  AI Advisor dùng Intent → Entity → Variable → Resolver → Guard → Action → Render.

2.  Product/price/stock/link/policy/payment đều lấy runtime/registry/config/resolver.

3.  AI không hardcode giá, tồn kho, tài khoản, quyền lợi.

4.  Claim Guard chặn claim vượt whitelist.

5.  Health Sensitive Template hoạt động đúng.

6.  OOS không chốt SKU hết hàng.

7.  Khách cũ phải hỏi trải nghiệm trước khi bán tiếp.

8.  Quote/order draft đi qua Commerce Runtime.

9.  Evidence accepted.

10. Owner sign-off.

**24.7. PACK-07 Completion Control**

PACK-07 chỉ được xét Release Ready khi chứng minh được:

1.  Comment không phải order.

2.  Inbox không phải revenue.

3.  Quote không phải revenue.

4.  Cart draft không phải official order.

5.  Pending revenue không tính ROAS chính thức.

6.  Verified Revenue đến từ nguồn hợp lệ.

7.  Attribution Rule rõ.

8.  Data Quality PASS trước scale.

9.  Scale qua Stock/Sellable/Fulfillment/Owner Decision.

10. Dashboard không phải source-of-truth.

11. Evidence accepted.

12. Owner sign-off.

**24.8. PACK-08 Completion Control**

PACK-08 chỉ được xét Release Ready khi chứng minh được:

1.  Có Live Plan.

2.  Có Product Scope.

3.  Có Run-of-Show.

4.  Có Script Registry.

5.  Có Claim Guard.

6.  Có Privacy Guard.

7.  Có PACK-05 private handoff.

8.  Có PACK-06 consult boundary.

9.  Có PACK-07 measurement handoff.

10. MC AI Live không tự tính giá, không tạo quote, không tạo order.

11. Không fake urgency, không fake scarcity.

12. Sale Lock / Recall / Not Sellable thắng mọi script.

13. Evidence accepted.

14. Owner sign-off.

**24.9. PACK-09 Completion Control**

PACK-09 chỉ được xét Release Ready khi chứng minh được:

1.  CALL_PURPOSE = ORDER_CONFIRMATION_ONLY.

2.  1 SIM = 1 ACTIVE OUTBOUND CALL.

3.  Scheduler là DEADLINE_AWARE_ROLLING_QUEUE.

4.  Golden Hour dùng đúng 5 phút / 2 attempts / 2 phút 30 giây.

5.  24/7 dùng đúng 15 phút / 3 attempts / T0, T0+5, T0+10.

6.  Invalid phone không nhầm no answer.

7.  Technical error không nhầm khách không nghe.

8.  Capacity overload không nhầm lỗi khách.

9.  IVR result chỉ là input signal.

10. Core Order State Machine là final decision layer.

11. SIM Gateway không cập nhật order trực tiếp.

12. Post-IVR cancellation notice chỉ gửi sau khi Core đã hủy đơn chính thức.

13. AI Advisor không tự gửi tin hủy đơn.

14. CRM không dùng tin hủy đơn để marketing/upsell.

15. Security/smoke/evidence accepted.

16. Owner sign-off.

**25. P0 BLOCKER REGISTRY — TEMPLATE QUẢN TRỊ**

**25.1. Cấu trúc P0 Blocker Record**

Mỗi P0 blocker phải có tối thiểu các trường quản trị sau:

| **Trường**       | **Ý nghĩa**                          |
|------------------|--------------------------------------|
| Blocker ID       | Mã blocker                           |
| Pack             | Pack bị ảnh hưởng                    |
| Domain           | Nhóm nghiệp vụ/kỹ thuật bị ảnh hưởng |
| Severity         | Mức độ, mặc định P0                  |
| Description      | Mô tả blocker                        |
| Source Rule      | Rule bị vi phạm                      |
| Impact           | Ảnh hưởng nếu release                |
| Detection Source | Nguồn phát hiện                      |
| Owner            | Người chịu trách nhiệm xử lý         |
| Status           | Trạng thái blocker                   |
| Fix Evidence     | Evidence xử lý                       |
| Retest Evidence  | Evidence retest                      |
| Reviewer         | Người review                         |
| Owner Decision   | Quyết định owner nếu cần             |
| Cleared At       | Thời điểm clear                      |
| Release Impact   | Có chặn release không                |

**25.2. P0 Blocker phải chặn release mặc định**

Khi một P0 blocker được tạo, trạng thái release mặc định phải là:

RELEASE_READY = NO  
GATEWAY_STATUS = BLOCKED hoặc RELEASE_HOLD

Chỉ khi P0 được CLEARED hợp lệ mới được xét tiếp.

**26. CROSS-PACK BLOCKER CONTROL**

**26.1. Blocker một pack có thể chặn nhiều pack**

Một blocker ở pack upstream có thể chặn nhiều pack downstream.

Ví dụ:

- PACK-04 Payment blocker có thể chặn PACK-05, PACK-06, PACK-07, PACK-08, PACK-09.

- PACK-01 Sale Lock blocker có thể chặn AI, Ads, Live, Commerce, CRM.

- PACK-02 Product Activation blocker có thể chặn quote/order/AI/live/ads.

- PACK-07 Verified Revenue blocker có thể chặn Ads scale nhưng không chặn production order.

- PACK-09 IVR blocker chỉ chặn IVR confirmation flow, không được chặn toàn bộ commerce nếu commerce có luồng confirmation khác được owner duyệt.

**26.2. Downstream không được tự bỏ qua blocker upstream**

Nếu upstream pack còn blocker, downstream phải giữ BLOCKED cho phần phụ thuộc.

Ví dụ:

1.  AI không được bán SKU khi Product Activation chưa clear.

2.  Live không được cue sản phẩm khi Product Scope chưa clear.

3.  Ads không được scale sản phẩm khi Sellable Gate chưa clear.

4.  IVR không được gọi khách thật khi Security Evidence chưa accepted.

5.  Facebook Gateway không được production routing nếu Privacy Guard chưa pass.

**27. EVIDENCE EXPIRY / STALE CONTROL**

**27.1. Evidence bị stale khi nào**

Evidence bị stale khi không còn phản ánh trạng thái hiện tại.

Các trường hợp stale:

1.  Code/implementation đã thay đổi sau evidence.

2.  Rule pack đã thay đổi sau evidence.

3.  Config runtime đã thay đổi sau evidence.

4.  Promotion/price/payment/shipping policy đã thay đổi sau evidence.

5.  Meta/Facebook permission hoặc channel config đã thay đổi.

6.  IVR scheduler/attempt rule đã thay đổi.

7.  Product/SKU/recipe/stock/sellable rule đã thay đổi.

8.  Security issue mới phát sinh.

9.  Incident xảy ra sau evidence.

10. Owner yêu cầu retest.

Evidence stale phải chuyển:

EVIDENCE_STATUS = EXPIRED hoặc NEEDS_RETEST

**27.2. Không dùng evidence cũ cho release mới**

Evidence của release trước không tự động hợp lệ cho release sau.

Muốn tái sử dụng evidence phải có:

1.  Scope không đổi.

2.  Implementation không đổi.

3.  Runtime config không đổi.

4.  Risk không đổi.

5.  Owner/reviewer xác nhận evidence còn hiệu lực.

Nếu không, phải retest.

**28. EVIDENCE CONFLICT CONTROL**

**28.1. Conflict giữa evidence và rule pack**

Nếu evidence cho thấy hệ thống chạy khác rule pack đã khóa, kết luận phải là:

EVIDENCE_STATUS = REJECTED  
P0_BLOCKER_STATUS = OPEN  
OWNER_REVIEW_REQUIRED = YES

Không được sửa diễn giải để hợp thức hóa sai lệch.

**28.2. Conflict giữa hai evidence**

Nếu có hai evidence mâu thuẫn:

- một evidence báo pass;

- một evidence báo fail;

thì trạng thái mặc định phải là:

OWNER_REVIEW_REQUIRED hoặc NEEDS_RETEST

Không được chọn evidence thuận lợi hơn để PASS.

**29. COMPLETION PASS RULE**

Một pack chỉ được Completion PASS khi đạt đồng thời:

1.  Documentation Complete.

2.  Implementation Complete.

3.  Test Complete.

4.  Smoke Pass.

5.  Security Pass nếu áp dụng.

6.  Evidence Accepted.

7.  P0 Blocker Cleared.

8.  Cross-pack dependency cleared.

9.  Owner sign-off nếu pack chạm production.

10. Không có evidence conflict.

11. Không có stale evidence.

12. Không có release hold.

Nếu thiếu một điều kiện:

COMPLETION_PASS = NO

**30. RELEASE READY RULE TỪ PHẦN 2**

Một pack chỉ được Release Ready khi:

1.  Completion PASS.

2.  Smoke PASS.

3.  Evidence ACCEPTED.

4.  P0 CLEARED.

5.  Security PASS.

6.  Dependency CLEARED.

7.  Owner review không còn pending.

Nếu một pack chỉ mới Documentation Complete:

RELEASE_READY = NO

Nếu một pack chỉ mới Implementation Complete:

RELEASE_READY = NO

Nếu một pack chỉ mới Test Complete nhưng chưa Smoke Pass:

RELEASE_READY = NO

Nếu một pack Smoke Pass nhưng Evidence chưa Accepted:

RELEASE_READY = NO

Nếu Evidence Accepted nhưng Owner Sign-off chưa có:

RELEASE_READY = NO hoặc OWNER_REVIEW_REQUIRED tùy scope

**31. KẾT LUẬN PHẦN 2/4**

PHẦN 2/4 đã khóa Evidence Registry, Smoke Status, P0 Blocker Registry và Pack Completion Matrix cho PACK-01 đến PACK-09.

Kết luận bắt buộc:

1.  Evidence là điều kiện bắt buộc để PASS.

2.  Evidence chỉ được dùng khi trạng thái là ACCEPTED.

3.  SUBMITTED không phải ACCEPTED.

4.  PENDING không phải PASS.

5.  Smoke PASS không tự động Release Approved.

6.  Owner Sign-off không được thay bằng lời nói miệng.

7.  P0 Blocker chưa clear thì không Release Ready.

8.  Evidence stale, expired hoặc conflict thì không dùng để release.

9.  Pack Completion Matrix phải tách riêng Documentation, Implementation, Test, Smoke, Security, Evidence, Owner Sign-off, Release và Go-live.

10. PACK-01 đến PACK-09 dù đã có tài liệu clean final vẫn không được gọi Production Ready nếu thiếu implementation/test/smoke/security/evidence/owner sign-off/release decision.

11. Trạng thái mặc định toàn hệ vẫn là:

GLOBAL_GATEWAY_STATUS = BLOCKED  
COMPLETION_PASS = NO  
RELEASE_READY = NO  
PRODUCTION_READY = NO  
RELEASE_APPROVED = NO  
GO_LIVE_APPROVED = NO

cho đến khi toàn bộ điều kiện trong PACK-10 được đáp ứng bằng evidence accepted và owner decision hợp lệ.

**KẾT THÚC PHẦN 2/4 — PACK-10 V1.0 CLEAN FINAL**

**PHẦN 3/4 — GATEWAY DECISION / PRODUCTION READINESS / RELEASE READINESS / GO-LIVE CONTROL**

**32. MỤC ĐÍCH CỦA PHẦN 3/4**

PHẦN 3/4 khóa lớp ra quyết định cuối trước khi một pack, một nhóm module hoặc toàn bộ hệ thống Ginsengfood được phép chuyển trạng thái từ **đã làm tài liệu / đã triển khai / đã test** sang **đủ điều kiện release / đủ điều kiện production / đủ điều kiện go-live**.

PHẦN 3/4 trả lời các câu hỏi sau:

1.  Khi nào Gateway được mở?

2.  Khi nào Completion Report được xem là hợp lệ?

3.  Khi nào một pack được gọi là Production Ready?

4.  Khi nào một pack được gọi là Release Ready?

5.  Khi nào được Release Approved?

6.  Khi nào được Go-live Approved?

7.  Ai được quyền quyết định?

8.  Khi nào phải giữ release?

9.  Khi nào phải rollback?

10. Khi nào downstream module được phép phụ thuộc upstream pack?

11. Khi nào cross-pack dependency được xem là clear?

12. Khi nào toàn hệ thống vẫn phải giữ BLOCKED dù tài liệu đã clean final?

PHẦN 3/4 không thay đổi rule nghiệp vụ của PACK-01 đến PACK-09.  
PHẦN 3/4 không tự làm PASS cho bất kỳ pack nào.  
PHẦN 3/4 không thay thế evidence registry.  
PHẦN 3/4 không thay thế smoke matrix.  
PHẦN 3/4 không thay thế owner sign-off.  
PHẦN 3/4 chỉ khóa cách ra quyết định release dựa trên evidence đã được chấp nhận.

**33. GATEWAY DECISION MODEL**

**33.1. Gateway là gì**

Gateway là lớp quyết định kiểm soát việc một pack hoặc một nhóm chức năng có được đi tiếp sang giai đoạn release, production hoặc go-live hay không.

Gateway không phải là dashboard.  
Gateway không phải là báo cáo tiến độ.  
Gateway không phải là cảm nhận “đã ổn”.  
Gateway không phải là lời xác nhận miệng.  
Gateway không phải là trạng thái tài liệu đã viết xong.

Gateway là kết luận có điều kiện, dựa trên:

1.  Documentation status.

2.  Implementation status.

3.  Test status.

4.  Smoke status.

5.  Security status.

6.  Evidence status.

7.  P0 blocker status.

8.  Cross-pack dependency status.

9.  Owner sign-off.

10. Release decision.

11. Rollback/recovery readiness.

12. Go-live approval.

**33.2. Gateway Decision Inputs**

Một quyết định Gateway hợp lệ phải đọc tối thiểu các đầu vào sau:

| **Nhóm đầu vào** | **Nội dung bắt buộc**                                 |
|------------------|-------------------------------------------------------|
| Pack Scope       | Pack nào, version nào, phạm vi nào                    |
| Documentation    | Tài liệu đã clean final chưa                          |
| Implementation   | Implementation đã hoàn tất chưa                       |
| Test             | Test case đã chạy chưa                                |
| Smoke            | Smoke P0 đã pass chưa                                 |
| Security         | Security/data/permission/payment/channel đã pass chưa |
| Evidence         | Evidence đã ACCEPTED chưa                             |
| P0 Blocker       | Còn P0 mở không                                       |
| Dependency       | Có phụ thuộc pack khác chưa release không             |
| Owner Review     | Owner đã review chưa                                  |
| Release Decision | Đã có quyết định release chưa                         |
| Rollback Plan    | Có phương án rollback/recovery chưa                   |
| Monitoring       | Có giám sát/alert/incident owner chưa                 |

Nếu thiếu bất kỳ nhóm đầu vào nào, Gateway không được chuyển PASS.

**33.3. Gateway Decision States**

| **Gateway Decision**  | **Ý nghĩa**                            | **Điều kiện**                                     |
|-----------------------|----------------------------------------|---------------------------------------------------|
| BLOCKED               | Không được đi tiếp                     | Thiếu điều kiện bắt buộc hoặc còn P0              |
| PENDING_EVIDENCE      | Chờ evidence                           | Chưa có evidence accepted                         |
| NEEDS_RETEST          | Cần test lại                           | Evidence/test/smoke không còn hợp lệ              |
| OWNER_REVIEW_REQUIRED | Cần owner quyết định                   | Có conflict, exception hoặc risk                  |
| RELEASE_HOLD          | Tạm giữ release                        | Có incident, blocker hoặc owner hold              |
| RELEASE_READY         | Đủ điều kiện trình release             | Smoke pass, evidence accepted, P0 clear           |
| RELEASE_APPROVED      | Đã được duyệt release                  | Có owner sign-off và release decision             |
| GO_LIVE_APPROVED      | Được phép chạy production thật         | Có release approved + go-live decision            |
| ROLLBACK_REQUIRED     | Phải rollback                          | Production có incident/risk vượt ngưỡng           |
| REJECTED              | Không được release theo scope hiện tại | Evidence fail hoặc vi phạm P0 không thể chấp nhận |

**33.4. Gateway Decision Rule**

Một Gateway Decision chỉ được nâng trạng thái theo chiều tiến lên khi có đủ bằng chứng.

Không được nhảy trạng thái.

Ví dụ:

- Không được từ Documentation Complete nhảy thẳng lên Release Approved.

- Không được từ Smoke Pass nhảy thẳng lên Go-live Approved.

- Không được từ Evidence Submitted nhảy lên Production Ready.

- Không được từ Owner Review Required nhảy lên Release Approved nếu chưa có owner decision.

- Không được từ P0 Open nhảy lên Release Ready.

- Không được từ Release Ready nhảy lên Go-live Approved nếu chưa có release decision và go-live decision.

Gateway phải đi theo chuỗi kiểm soát:

Documentation Complete → Implementation Complete → Test Complete → Smoke Pass → Evidence Accepted → P0 Cleared → Owner Sign-off → Release Approved → Go-live Approved

**34. GATEWAY DECISION RECORD**

**34.1. Mỗi quyết định Gateway phải có record**

Mỗi lần thay đổi trạng thái Gateway phải có record.

Gateway Decision Record là bằng chứng quản trị cho việc:

1.  Ai đề xuất mở Gateway.

2.  Gateway mở cho pack nào.

3.  Scope nào được xét.

4.  Evidence nào được dùng.

5.  Smoke nào đã pass.

6.  P0 nào đã clear.

7.  Dependency nào đã clear.

8.  Owner nào đã sign-off.

9.  Release decision là gì.

10. Nếu fail thì rollback như thế nào.

Không có Gateway Decision Record thì không được xem là quyết định hợp lệ.

**34.2. Cấu trúc Gateway Decision Record**

| **Trường**               | **Ý nghĩa**                         |
|--------------------------|-------------------------------------|
| Gateway Decision ID      | Mã quyết định Gateway               |
| Pack / Pack Group        | Pack hoặc nhóm pack được xét        |
| Version / Scope          | Version và phạm vi release          |
| Current Status           | Trạng thái hiện tại                 |
| Target Status            | Trạng thái muốn chuyển              |
| Evidence References      | Danh sách evidence accepted         |
| Smoke References         | Kết quả smoke liên quan             |
| Security References      | Kết quả security nếu có             |
| P0 Blocker Status        | Tình trạng P0 blocker               |
| Dependency Status        | Tình trạng phụ thuộc cross-pack     |
| Owner Sign-off           | Owner đã ký duyệt hay chưa          |
| Release Decision         | Quyết định release                  |
| Rollback / Recovery Plan | Phương án rollback/recovery         |
| Decision Owner           | Người có quyền quyết định           |
| Decision Time            | Thời điểm quyết định                |
| Decision Result          | Approved / Rejected / Hold / Retest |
| Notes                    | Ghi chú điều kiện nếu có            |

**34.3. Gateway Decision không được sửa lịch sử**

Gateway Decision Record là lịch sử quản trị.

Không được sửa record cũ để làm đẹp báo cáo.

Nếu quyết định sai, phải tạo record mới:

- RELEASE_HOLD;

- ROLLBACK_REQUIRED;

- NEEDS_RETEST;

- OWNER_REVIEW_REQUIRED;

- REJECTED;

- SUPERSEDED_BY_NEW_DECISION.

Nguyên tắc:

Không sửa lịch sử release.  
Chỉ được tạo quyết định mới để thay thế quyết định cũ.

**35. COMPLETION REPORT CONTROL**

**35.1. Completion Report là gì**

Completion Report là báo cáo tổng hợp trạng thái hoàn tất của pack hoặc toàn hệ thống.

Completion Report không phải tài liệu nghiệp vụ.  
Completion Report không phải bằng chứng duy nhất.  
Completion Report không tự làm PASS.  
Completion Report chỉ hợp lệ khi tham chiếu được evidence accepted.

Completion Report phải trả lời:

1.  Pack nào đã hoàn tất tài liệu?

2.  Pack nào đã triển khai?

3.  Pack nào đã test?

4.  Pack nào đã smoke pass?

5.  Pack nào có evidence accepted?

6.  Pack nào còn P0 blocker?

7.  Pack nào đã owner sign-off?

8.  Pack nào release approved?

9.  Pack nào go-live approved?

10. Pack nào vẫn blocked?

**35.2. Completion Report không được hợp thức hóa thiếu evidence**

Completion Report không được ghi:

- “PASS” nếu Evidence Status chưa ACCEPTED.

- “Release Ready” nếu Smoke Status chưa PASS.

- “Production Ready” nếu chưa có Owner Sign-off và Release Decision.

- “Go-live Approved” nếu chưa có Go-live Decision.

- “Completed” một cách chung chung không tách trạng thái.

- “Done” nếu chỉ mới Documentation Complete.

Nếu Completion Report dùng chữ “hoàn tất”, phải ghi rõ hoàn tất ở tầng nào:

1.  Hoàn tất tài liệu.

2.  Hoàn tất triển khai.

3.  Hoàn tất test.

4.  Hoàn tất smoke.

5.  Hoàn tất evidence review.

6.  Hoàn tất owner sign-off.

7.  Hoàn tất release approval.

8.  Hoàn tất go-live approval.

**35.3. Completion Report bắt buộc có ma trận trạng thái**

Completion Report hợp lệ phải có tối thiểu các cột:

| **Cột**              | **Bắt buộc**   |
|----------------------|----------------|
| Pack                 | Có             |
| Scope                | Có             |
| Documentation        | Có             |
| Implementation       | Có             |
| Test                 | Có             |
| Smoke                | Có             |
| Security             | Có nếu áp dụng |
| Evidence             | Có             |
| P0 Blocker           | Có             |
| Dependency           | Có             |
| Owner Sign-off       | Có             |
| Release              | Có             |
| Go-live              | Có             |
| Production Ready     | Có             |
| Final Gateway Status | Có             |

Thiếu các cột trên thì Completion Report chưa đủ điều kiện làm căn cứ release.

**36. PRODUCTION READY RULE**

**36.1. Production Ready là gì**

Production Ready nghĩa là pack hoặc nhóm chức năng đã đủ điều kiện kỹ thuật, vận hành, bảo mật, evidence và owner decision để có thể chạy trên môi trường production theo phạm vi đã duyệt.

Production Ready không có nghĩa là:

- tài liệu đã viết xong;

- dev đã báo xong;

- test một phần đã pass;

- demo chạy được;

- owner nói miệng là ổn;

- dashboard hiển thị xanh;

- chưa thấy lỗi nên cho chạy.

Production Ready phải có đầy đủ điều kiện kiểm soát.

**36.2. Điều kiện Production Ready**

Một pack chỉ được ghi:

PRODUCTION_READY = YES

khi đạt đồng thời:

1.  Documentation Complete.

2.  Implementation Complete.

3.  Test Complete.

4.  Smoke Pass.

5.  Security Pass nếu có rủi ro bảo mật/dữ liệu/payment/channel/customer/admin.

6.  Evidence Accepted.

7.  P0 Blocker Cleared.

8.  Cross-pack Dependency Cleared.

9.  Owner Sign-off.

10. Release Approved.

11. Rollback/Recovery Ready.

12. Monitoring/Incident Owner Ready.

13. Không có Release Hold.

14. Không có stale evidence.

15. Không có unresolved conflict.

16. Không có downstream bypass.

17. Không có source-of-truth violation.

Nếu thiếu bất kỳ điều kiện nào:

PRODUCTION_READY = NO

**36.3. Production Ready theo phạm vi, không phải toàn hệ tự động**

Một pack có thể Production Ready theo phạm vi nhỏ nhưng không làm toàn hệ Production Ready.

Ví dụ:

- PACK-07 có thể ready cho pilot measurement nhưng chưa ready cho Ads scale.

- PACK-08 có thể ready cho internal rehearsal nhưng chưa ready cho live production.

- PACK-09 có thể ready cho simulation nhưng chưa ready gọi khách thật.

- PACK-06 có thể ready cho test private nhưng chưa ready cho customer-facing production.

- PACK-04 có thể ready cho COD nhưng chưa ready cho direct bank transfer nếu evidence payment chưa accepted.

Production Ready phải luôn ghi scope.

Không được ghi chung chung:

“PACK đã sẵn sàng.”

Phải ghi:

“PACK sẵn sàng cho scope nào, môi trường nào, điều kiện nào, chưa sẵn sàng phần nào.”

**36.4. Production Ready bị thu hồi khi điều kiện thay đổi**

Production Ready không phải trạng thái vĩnh viễn.

Production Ready phải bị đưa về REVIEW / HOLD / BLOCKED nếu:

1.  Có P0 blocker mới.

2.  Có incident production.

3.  Evidence bị stale.

4.  Rule pack thay đổi.

5.  Runtime config thay đổi.

6.  Payment/shipping/price/promotion thay đổi.

7.  Meta/Facebook permission thay đổi.

8.  AI claim whitelist thay đổi.

9.  IVR scheduler/attempt/capacity rule thay đổi.

10. Product/sellable/recall/sale lock thay đổi.

11. Security issue mới phát hiện.

12. Owner yêu cầu hold.

**37. RELEASE READY RULE**

**37.1. Release Ready là gì**

Release Ready nghĩa là pack đã đủ điều kiện để trình release decision.

Release Ready chưa phải Release Approved.  
Release Ready chưa phải Go-live Approved.  
Release Ready chưa phải được chạy production thật.

Release Ready chỉ nói rằng:

Về evidence, smoke, P0, dependency và security, pack đã đủ điều kiện để owner xem xét release.

**37.2. Điều kiện Release Ready**

Một pack chỉ được ghi:

RELEASE_READY = YES

khi đạt đủ:

1.  Documentation Complete.

2.  Implementation Complete.

3.  Test Complete.

4.  Smoke Pass.

5.  Evidence Accepted.

6.  P0 Blocker Cleared.

7.  Security Pass nếu áp dụng.

8.  Cross-pack Dependency Cleared.

9.  No Evidence Conflict.

10. No Stale Evidence.

11. No Release Hold.

12. Owner Review không còn pending technical blocker.

Release Ready không tự động tạo Release Approved.

**37.3. Release Ready theo pack group**

Một nhóm pack chỉ được Release Ready khi toàn bộ pack P0 trong nhóm đạt điều kiện.

Ví dụ nhóm **Live Commerce Launch** phụ thuộc:

1.  PACK-01 — Sellable / Sale Lock / Recall.

2.  PACK-02 — Product Activation.

3.  PACK-04 — Quote / Order / Payment / Shipping.

4.  PACK-05 — Facebook Gateway / Messenger Handoff.

5.  PACK-06 — AI Advisor / Claim Guard.

6.  PACK-07 — Measurement nếu có Ads scale.

7.  PACK-08 — MC AI Live nếu có live orchestration.

8.  PACK-09 — IVR nếu dùng gọi xác nhận đơn.

Nếu một pack P0 trong nhóm chưa release ready thì nhóm không được Release Ready.

**38. RELEASE APPROVED RULE**

**38.1. Release Approved là gì**

Release Approved nghĩa là owner hoặc release authority đã phê duyệt cho release theo scope cụ thể.

Release Approved không tự sinh từ Release Ready.

Release Approved phải có:

1.  Release Ready status.

2.  Owner sign-off.

3.  Release decision record.

4.  Release scope rõ.

5.  Rollback plan.

6.  Monitoring plan.

7.  Incident owner.

8.  Effective time.

9.  Release condition nếu có.

**38.2. Release Approved không đồng nghĩa Go-live Approved**

Một release có thể được approved cho:

- staging;

- pilot nội bộ;

- pilot giới hạn;

- rehearsal;

- soft launch;

- production limited;

- production full.

Chỉ khi release decision ghi rõ được phép chạy production thật với khách thật thì mới xét Go-live Approved.

Nếu chỉ ghi:

“Release Approved for internal pilot”

thì không được suy diễn thành:

“Go-live Approved.”

**38.3. Release Approved bị chặn bởi P0**

Nếu còn P0 blocker, không được Release Approved.

Ngoại lệ duy nhất là owner chấp nhận rủi ro có kiểm soát, nhưng phải có:

1.  WAIVED_BY_OWNER rõ.

2.  Risk Acceptance rõ.

3.  Phạm vi waiver rõ.

4.  Thời hạn waiver rõ.

5.  Monitoring bắt buộc.

6.  Rollback bắt buộc.

7.  Không được waiver các lỗi vi phạm pháp lý, bảo mật nghiêm trọng, payment sai, dữ liệu khách hàng, trace/recall, hoặc claim sức khỏe nguy hiểm.

**39. GO-LIVE APPROVED RULE**

**39.1. Go-live Approved là gì**

Go-live Approved nghĩa là hệ thống, pack hoặc nhóm chức năng được phép vận hành thật với:

1.  Khách hàng thật.

2.  Đơn hàng thật.

3.  Thanh toán thật.

4.  Dữ liệu thật.

5.  Doanh thu thật.

6.  Rủi ro vận hành thật.

7.  Trách nhiệm owner thật.

Go-live Approved là trạng thái cao nhất trong PACK-10.

**39.2. Điều kiện Go-live Approved**

Một pack hoặc nhóm chức năng chỉ được ghi:

GO_LIVE_APPROVED = YES

khi đạt đủ:

1.  Production Ready = YES.

2.  Release Approved = YES.

3.  Go-live Decision Record có hiệu lực.

4.  Owner cuối cùng đã duyệt.

5.  Support/incident owner đã sẵn sàng.

6.  Monitoring/alert đã sẵn sàng.

7.  Rollback/recovery đã sẵn sàng.

8.  Data protection/security đã pass nếu áp dụng.

9.  Không có P0 blocker.

10. Không có release hold.

11. Không có dependency blocked.

12. Không có pack upstream chưa release.

13. Không có conflict source-of-truth.

14. Không có evidence stale.

15. Phạm vi go-live được ghi rõ.

**39.3. Go-live có thể theo từng phạm vi**

Không bắt buộc toàn hệ go-live cùng lúc.

Có thể chia theo phạm vi:

| **Go-live Scope**        | **Ví dụ**                                          |
|--------------------------|----------------------------------------------------|
| Internal Pilot           | Chỉ đội nội bộ dùng thử                            |
| Staging Pilot            | Chạy trên dữ liệu giả/lập                          |
| Limited Production       | Chạy thật nhưng giới hạn page/SKU/khung giờ/số đơn |
| Channel-specific Go-live | Chỉ mở Messenger, chưa mở Live                     |
| Product-specific Go-live | Chỉ mở một số SKU đã active                        |
| Payment-specific Go-live | Chỉ mở COD, chưa mở chuyển khoản                   |
| IVR Simulation           | Chỉ mô phỏng, chưa gọi khách thật                  |
| IVR Production           | Gọi khách thật theo rule đã duyệt                  |
| Ads Measurement Pilot    | Đo lường nhưng chưa scale                          |
| Ads Scale Go-live        | Được scale theo rule PACK-07                       |

Mỗi phạm vi phải có decision riêng.

**40. OWNER DECISION MODEL**

**40.1. Owner Decision là gì**

Owner Decision là quyết định chính thức của người/chức năng có thẩm quyền để:

1.  Chấp nhận evidence.

2.  Clear P0.

3.  Approve release.

4.  Hold release.

5.  Yêu cầu retest.

6.  Chấp nhận risk có kiểm soát.

7.  Rollback.

8.  Go-live.

9.  Dừng go-live.

Owner Decision không được thay bằng tin nhắn không rõ scope.  
Owner Decision không được suy diễn từ việc owner im lặng.  
Owner Decision không được suy diễn từ việc owner từng đồng ý ở bản cũ.  
Owner Decision phải gắn với version/scope/evidence cụ thể.

**40.2. Các loại Owner Decision**

| **Decision Type**          | **Ý nghĩa**                   |
|----------------------------|-------------------------------|
| ACCEPT_EVIDENCE            | Chấp nhận evidence            |
| REJECT_EVIDENCE            | Từ chối evidence              |
| REQUIRE_RETEST             | Yêu cầu test lại              |
| CLEAR_P0                   | Xác nhận P0 đã clear          |
| HOLD_RELEASE               | Tạm giữ release               |
| APPROVE_RELEASE            | Duyệt release                 |
| APPROVE_LIMITED_GO_LIVE    | Duyệt go-live giới hạn        |
| APPROVE_FULL_GO_LIVE       | Duyệt go-live đầy đủ          |
| REQUIRE_ROLLBACK           | Yêu cầu rollback              |
| ACCEPT_RISK_WITH_CONDITION | Chấp nhận rủi ro có điều kiện |
| REJECT_RELEASE             | Không cho release             |
| SUPERSEDE_DECISION         | Thay thế quyết định cũ        |

**40.3. Owner Decision Record bắt buộc**

Mỗi owner decision phải có:

1.  Decision ID.

2.  Owner.

3.  Role/authority.

4.  Pack/scope.

5.  Version.

6.  Evidence liên quan.

7.  Smoke result liên quan.

8.  P0 status.

9.  Dependency status.

10. Decision result.

11. Điều kiện kèm theo nếu có.

12. Thời điểm hiệu lực.

13. Thời điểm hết hiệu lực nếu là quyết định có điều kiện.

14. Rollback/recovery condition nếu có.

**41. RELEASE HOLD CONTROL**

**41.1. Release Hold là gì**

Release Hold là trạng thái tạm giữ không cho release hoặc go-live tiếp tục.

Release Hold được dùng khi chưa đủ căn cứ rollback nhưng cũng không đủ an toàn để tiếp tục release.

**41.2. Khi nào phải Release Hold**

Phải chuyển RELEASE_HOLD khi có một trong các điều kiện:

1.  P0 blocker mới.

2.  Evidence conflict.

3.  Smoke fail.

4.  Security issue.

5.  Payment mismatch.

6.  Order state mismatch.

7.  Ads attribution sai.

8.  Verified revenue sai.

9.  AI claim vượt whitelist.

10. Facebook privacy issue.

11. MC Live fake urgency/scarcity.

12. IVR gọi sai deadline/attempt.

13. SIM Gateway có dấu hiệu cập nhật order trực tiếp.

14. Public Trace leak dữ liệu nội bộ.

15. Recall/Sale Lock không chặn được bán.

16. Owner yêu cầu dừng.

17. Incident production chưa phân loại xong.

**41.3. Release Hold không phải rollback**

Release Hold là tạm giữ.

Rollback là hành động đưa hệ thống về trạng thái an toàn trước đó.

Một release có thể:

- HOLD để phân tích;

- tiếp tục nếu evidence bổ sung PASS;

- rollback nếu incident nghiêm trọng;

- retest nếu nguyên nhân chưa rõ;

- reject nếu vi phạm P0 không thể chấp nhận.

**42. ROLLBACK / RECOVERY CONTROL**

**42.1. Rollback là gì**

Rollback là hành động rút lại release hoặc đưa phạm vi đã release về trạng thái an toàn trước đó.

Rollback không phải thất bại quản trị.  
Rollback là cơ chế bảo vệ hệ thống khi production có rủi ro.

**42.2. Khi nào bắt buộc rollback**

Phải rollback khi có một trong các điều kiện:

1.  Payment bị ghi nhận sai.

2.  Order bị chuyển trạng thái sai.

3.  PAID bị mark sai.

4.  SKU không sellable vẫn bán được.

5.  Sale Lock / Recall Lock bị bypass.

6.  AI nói claim nguy hiểm hoặc vượt whitelist nghiêm trọng.

7.  Public Trace lộ dữ liệu nội bộ.

8.  Facebook Gateway spam/vi phạm chính sách nghiêm trọng.

9.  Ads scale dựa trên revenue sai.

10. IVR gọi sai khách, sai deadline, sai mục đích hoặc gây hủy đơn sai.

11. SIM Gateway cập nhật trực tiếp order.

12. Warehouse xuất hàng chưa release.

13. MISA/accounting sync sai làm lệch doanh thu/kế toán.

14. Security breach hoặc rủi ro dữ liệu khách hàng.

15. Owner yêu cầu rollback.

**42.3. Recovery là gì**

Recovery là quá trình đưa hệ thống trở lại trạng thái vận hành an toàn sau hold/rollback/incident.

Recovery phải có:

1.  Root cause.

2.  Fix evidence.

3.  Retest evidence.

4.  Smoke evidence.

5.  Security evidence nếu có.

6.  Data correction evidence nếu có.

7.  Owner review.

8.  Release decision mới.

9.  Monitoring sau recovery.

Không được recovery bằng cách “bật lại” nếu chưa có evidence.

**42.4. Rollback Decision Record**

Rollback phải có record:

| **Trường**           | **Ý nghĩa**                    |
|----------------------|--------------------------------|
| Rollback ID          | Mã rollback                    |
| Release ID           | Release bị rollback            |
| Pack / Scope         | Pack/phạm vi bị ảnh hưởng      |
| Trigger              | Lý do rollback                 |
| Severity             | Mức độ                         |
| Impact               | Ảnh hưởng                      |
| Decision Owner       | Người quyết định               |
| Rollback Action      | Hành động rollback             |
| Recovery Requirement | Điều kiện phục hồi             |
| Evidence Required    | Evidence cần nộp lại           |
| Status               | Open / In Progress / Completed |
| Final Review         | Owner review sau rollback      |

**43. DOWNSTREAM DEPENDENCY CONTROL**

**43.1. Downstream Dependency là gì**

Downstream Dependency là quan hệ một pack/module phụ thuộc vào trạng thái release của pack/module khác.

Ví dụ:

- AI Advisor phụ thuộc Product Knowledge, Price Runtime, Stock/Sellable, Claim Guard.

- Facebook Gateway phụ thuộc AI Advisor, Commerce Runtime, Privacy Guard.

- Ads Measurement phụ thuộc Verified Revenue từ Commerce/Payment/MISA.

- MC AI Live phụ thuộc Live Plan, Product Scope, AI Claim Guard, Facebook Gateway, Ads measurement.

- IVR phụ thuộc Order State Machine và Notification boundary.

- Commerce phụ thuộc Product Activation, Inventory/Sellable, Payment, Shipping.

- Sale Lock/Recall phụ thuộc Traceability và Inventory.

**43.2. Nguyên tắc Downstream Block**

Nếu upstream pack chưa release, downstream pack không được production ở phần phụ thuộc.

Nguyên tắc:

Upstream chưa clear thì downstream phải BLOCKED cho scope phụ thuộc.

Không được ghi:

“Downstream ready, chỉ chờ upstream.”

Thay vào đó phải ghi:

“Downstream implementation có thể hoàn tất, nhưng production dependency vẫn BLOCKED do upstream chưa Release Approved.”

**43.3. Downstream không được tự tạo nguồn thay thế**

Nếu upstream chưa sẵn sàng, downstream không được tự tạo nguồn tạm trái rule.

Ví dụ:

1.  AI không được hardcode giá khi Commerce Runtime chưa sẵn sàng.

2.  Ads không được dùng đơn pending thay Verified Revenue.

3.  Facebook Gateway không được tự tạo order khi Commerce chưa sẵn sàng.

4.  MC AI Live không được tự nói giá khi runtime chưa sẵn sàng.

5.  IVR không được tự hủy đơn khi Order State Machine chưa quyết định.

6.  CRM không được tự gửi thông báo hủy đơn khi Notification owner chưa phát hành.

7.  Admin không được sửa tay trạng thái để vượt Gateway.

8.  Dashboard không được thay source-of-truth.

**44. CROSS-PACK RELEASE DEPENDENCY MATRIX**

**44.1. Ma trận phụ thuộc release**

| **Pack / Nhóm chức năng** | **Phụ thuộc P0**                                                                | **Nếu phụ thuộc chưa release**                               |
|---------------------------|---------------------------------------------------------------------------------|--------------------------------------------------------------|
| PACK-04 Commerce Runtime  | PACK-01, PACK-02, Payment, Shipping, MISA boundary nếu áp dụng                  | Không được chốt order/payment production đầy đủ              |
| PACK-05 Facebook Gateway  | PACK-04, PACK-06, Privacy Guard, Channel Config                                 | Không được routing production đầy đủ                         |
| PACK-06 AI Advisor        | PACK-02, PACK-04, Claim Guard, Runtime Resolver, Customer Memory nếu áp dụng    | Không được tư vấn/chốt quote production đầy đủ               |
| PACK-07 Ads Measurement   | PACK-04, Payment, MISA/Accounting Review, PACK-05 nếu ads từ Facebook           | Không được tính ROAS chính thức hoặc scale                   |
| PACK-08 MC AI Live        | PACK-05, PACK-06, PACK-07, PACK-04, PACK-01/PACK-02                             | Không được live orchestration production                     |
| PACK-09 IVR               | PACK-04 Order State Machine, Notification Owner, Security, SIM Gateway Capacity | Không được gọi khách thật                                    |
| Public Trace              | PACK-01 Traceability, Public Whitelist, Security                                | Không được public trace production                           |
| Recall / Sale Lock        | PACK-01, Traceability, Inventory, Commerce                                      | Không được mở bán nếu recall/sale lock chưa pass             |
| Payment                   | PACK-04, Accounting Review, Bank Registry, Security                             | Không được mark PAID tự động                                 |
| MISA Integration          | PACK-04, PACK-01, Accounting Mapping, Reconciliation                            | Không được dùng làm verified accounting source nếu chưa pass |

**44.2. Cross-pack dependency không clear thì không release group**

Một release group chỉ được Release Ready khi toàn bộ dependency bắt buộc clear.

Ví dụ nhóm **Facebook Live Commerce Production** cần tối thiểu:

1.  PACK-01 Sellable / Sale Lock / Recall clear.

2.  PACK-02 Product Activation clear.

3.  PACK-04 Quote / Order / Payment / Shipping clear.

4.  PACK-05 Facebook Gateway clear.

5.  PACK-06 AI Advisor clear.

6.  PACK-07 Measurement clear nếu có ads/ROAS.

7.  PACK-08 MC AI Live clear nếu dùng host assistant.

8.  PACK-09 IVR clear nếu dùng gọi xác nhận đơn.

Nếu PACK-09 chưa clear nhưng IVR chưa nằm trong release scope, release group phải ghi rõ:

IVR excluded from this release scope.

Không được để hiểu nhầm rằng IVR đã production ready.

**45. GATEWAY DECISION THEO PACK**

**45.1. PACK-01 Gateway Decision**

PACK-01 chỉ được Gateway PASS khi:

1.  Production/warehouse/inventory/trace/recall/sale lock smoke pass.

2.  Batch release hoạt động đúng.

3.  Warehouse không nhận batch chưa RELEASED.

4.  Sale Lock / Recall Lock chặn bán thật.

5.  Public Trace không leak dữ liệu nội bộ.

6.  Inventory ledger không sửa lịch sử.

7.  Evidence accepted.

8.  Owner sign-off.

9.  Release decision.

Nếu PACK-01 fail, các pack bán hàng downstream phải bị chặn ở phần sellable/order/ads/live.

**45.2. PACK-02 Gateway Decision**

PACK-02 chỉ được Gateway PASS khi:

1.  Product/SKU/Ingredient/Recipe/Formula Version đúng source.

2.  Product Activation hoạt động đúng.

3.  SKU chưa active không bán được.

4.  Formula snapshot không ghi đè lịch sử.

5.  Runtime product knowledge dùng đúng dữ liệu.

6.  Evidence accepted.

7.  Owner sign-off.

8.  Release decision.

Nếu PACK-02 fail, AI/Commerce/Live/Ads không được production cho SKU liên quan.

**45.3. PACK-03 Gateway Decision**

PACK-03 chỉ được Gateway PASS khi:

1.  Demand-to-Production Order không cho Sales/Đại lý tự phát lệnh sản xuất.

2.  MRP/Procurement Threshold đúng rule.

3.  Strategic Reserve cho Sâm Savigin đúng boundary.

4.  Company Source Harvest Exception đúng.

5.  Material/Packaging Control có evidence.

6.  Evidence accepted.

7.  Owner sign-off.

8.  Release decision.

Nếu PACK-03 fail, hệ thống không được tự động đề xuất thu mua/sản xuất theo scope bị ảnh hưởng.

**45.4. PACK-04 Gateway Decision**

PACK-04 chỉ được Gateway PASS khi:

1.  Quote Snapshot hoạt động đúng.

2.  Cart draft không thành official order.

3.  Order State Machine đúng.

4.  Payment confirmation đúng.

5.  Direct bank transfer không hardcode tài khoản.

6.  Shipping/VAT display đúng runtime.

7.  Fulfillment boundary rõ.

8.  Evidence accepted.

9.  Owner sign-off.

10. Release decision.

Nếu PACK-04 fail, PACK-05/06/07/08/09 không được chạy production đầy đủ.

**45.5. PACK-05 Gateway Decision**

PACK-05 chỉ được Gateway PASS khi:

1.  Comment public xử lý đúng.

2.  Messenger/private handoff đúng.

3.  Privacy Guard pass.

4.  Gateway không tự tạo order.

5.  Gateway không spam/vi phạm policy.

6.  Health-sensitive chuyển private.

7.  Evidence accepted.

8.  Owner sign-off.

9.  Release decision.

Nếu PACK-05 fail, Live/AI/Ads trên Facebook phải bị giới hạn hoặc hold.

**45.6. PACK-06 Gateway Decision**

PACK-06 chỉ được Gateway PASS khi:

1.  AI Advisor đi đúng Intent → Entity → Variable → Resolver → Guard → Action → Render.

2.  Product/price/stock/policy/payment lấy runtime.

3.  Claim Guard pass.

4.  Health Guard pass.

5.  OOS Guard pass.

6.  Customer Care Before Next Sale pass.

7.  Quote/order draft đi qua PACK-04.

8.  Evidence accepted.

9.  Owner sign-off.

10. Release decision.

Nếu PACK-06 fail, AI không được tư vấn production tự động cho khách thật theo scope bị ảnh hưởng.

**45.7. PACK-07 Gateway Decision**

PACK-07 chỉ được Gateway PASS khi:

1.  Data Quality PASS.

2.  Attribution Rule rõ.

3.  Verified Revenue hợp lệ.

4.  Pending revenue không tính ROAS.

5.  Dashboard không làm source-of-truth.

6.  Scale Gate có owner decision.

7.  Stop Gate hoạt động.

8.  Evidence accepted.

9.  Owner sign-off.

10. Release decision.

Nếu PACK-07 fail, Ads không được scale dựa trên số liệu đó.

**45.8. PACK-08 Gateway Decision**

PACK-08 chỉ được Gateway PASS khi:

1.  Live Plan có.

2.  Product Scope có.

3.  Run-of-Show có.

4.  Script Registry có.

5.  Claim Guard pass.

6.  Privacy Guard pass.

7.  Private handoff pass.

8.  Measurement handoff pass.

9.  Risk P0 control pass.

10. Không fake urgency/scarcity.

11. Evidence accepted.

12. Owner sign-off.

13. Release decision.

Nếu PACK-08 fail, không được dùng MC AI Live cho production live orchestration.

**45.9. PACK-09 Gateway Decision**

PACK-09 chỉ được Gateway PASS khi:

1.  CALL_PURPOSE = ORDER_CONFIRMATION_ONLY.

2.  1 SIM = 1 ACTIVE OUTBOUND CALL.

3.  DEADLINE_AWARE_ROLLING_QUEUE pass.

4.  Golden Hour attempt rule pass.

5.  24/7 attempt rule pass.

6.  Invalid phone / no answer / technical error / capacity overload phân biệt đúng.

7.  IVR result chỉ là input signal.

8.  Core Order State Machine là final decision.

9.  SIM Gateway không cập nhật order trực tiếp.

10. Post-IVR cancellation notice chỉ sau Core cancel.

11. AI/CRM không tự gửi tin hủy đơn.

12. Security pass.

13. Capacity smoke pass.

14. Evidence accepted.

15. Owner sign-off.

16. Release decision.

Nếu PACK-09 fail, IVR_GATE = BLOCKED và không được gọi khách thật.

**46. COMPLETION REPORT DECISION FLOW**

**46.1. Luồng quyết định Completion Report**

Completion Report phải đi theo luồng:

1.  Thu thập trạng thái từng pack.

2.  Kiểm tra documentation status.

3.  Kiểm tra implementation status.

4.  Kiểm tra test status.

5.  Kiểm tra smoke status.

6.  Kiểm tra security status.

7.  Kiểm tra evidence status.

8.  Kiểm tra P0 blocker.

9.  Kiểm tra cross-pack dependency.

10. Kiểm tra owner sign-off.

11. Kiểm tra release decision.

12. Kết luận Gateway Status.

Không được bỏ qua bước.

**46.2. Kết luận Completion Report**

Completion Report chỉ có thể kết luận một trong các nhóm sau:

| **Kết luận**                | **Ý nghĩa**                   |
|-----------------------------|-------------------------------|
| DOCUMENTATION_COMPLETE_ONLY | Mới hoàn tất tài liệu         |
| IMPLEMENTATION_PENDING      | Chưa có bằng chứng triển khai |
| TEST_PENDING                | Chưa có bằng chứng test       |
| SMOKE_PENDING               | Chưa có smoke pass            |
| EVIDENCE_PENDING            | Chưa có evidence accepted     |
| P0_BLOCKED                  | Còn P0 blocker                |
| DEPENDENCY_BLOCKED          | Còn phụ thuộc chưa release    |
| OWNER_REVIEW_REQUIRED       | Cần owner quyết định          |
| RELEASE_READY               | Đủ điều kiện trình release    |
| RELEASE_APPROVED            | Được duyệt release            |
| GO_LIVE_APPROVED            | Được duyệt vận hành thật      |
| RELEASE_HOLD                | Đang giữ release              |
| ROLLBACK_REQUIRED           | Cần rollback                  |

Không được dùng kết luận mơ hồ như:

- “Gần xong.”

- “Cơ bản xong.”

- “Có thể chạy.”

- “Tạm ổn.”

- “Đã hoàn tất” nhưng không ghi tầng nào.

**47. FINAL OWNER DECISION CONTROL**

**47.1. Owner cuối có quyền khóa trạng thái**

Owner cuối có quyền:

1.  Không duyệt release dù test pass nếu business risk chưa rõ.

2.  Yêu cầu retest dù evidence đã submitted.

3.  Giữ release nếu có dependency chưa clear.

4.  Giới hạn scope go-live.

5.  Chỉ cho pilot, chưa cho full production.

6.  Bắt rollback nếu production có rủi ro.

7.  Từ chối PASS nếu evidence không đủ tin cậy.

PACK-10 phải tôn trọng owner decision.

**47.2. Owner không được bỏ qua P0 nghiêm trọng**

Owner có thể chấp nhận một số rủi ro có điều kiện, nhưng không được hợp thức hóa các lỗi nghiêm trọng sau:

1.  Payment sai.

2.  Dữ liệu khách hàng bị lộ.

3.  Public Trace leak dữ liệu nội bộ.

4.  AI claim nguy hiểm.

5.  Recall/Sale Lock bị bypass.

6.  Hàng chưa release vẫn bán.

7.  IVR hủy đơn sai.

8.  Ads scale bằng revenue sai.

9.  Order state sai.

10. Bảo mật nghiêm trọng.

Các nhóm này phải xử lý, retest và có evidence accepted trước khi release.

**48. RELEASE SCOPE CONTROL**

**48.1. Release phải có scope rõ**

Không được release chung chung “toàn hệ” nếu chưa đủ evidence toàn hệ.

Release scope phải ghi rõ:

1.  Pack nào.

2.  Module nào.

3.  Kênh nào.

4.  SKU nào nếu liên quan.

5.  Chương trình nào nếu liên quan.

6.  Payment method nào nếu liên quan.

7.  Shipping scope nào nếu liên quan.

8.  User group nào nếu liên quan.

9.  Môi trường nào.

10. Thời điểm hiệu lực.

11. Giới hạn nếu có.

**48.2. Không dùng release giới hạn để quảng bố full release**

Nếu chỉ release scope giới hạn, Completion Report phải ghi đúng.

Ví dụ:

- “PACK-06 approved for internal test” không phải “AI Advisor production ready”.

- “PACK-07 measurement pilot approved” không phải “Ads scale approved”.

- “PACK-09 simulation approved” không phải “IVR production approved”.

- “PACK-04 COD approved” không phải “all payment methods approved”.

- “PACK-08 rehearsal approved” không phải “MC AI Live production approved”.

**49. RELEASE HOLD / ROLLBACK / RETEST DECISION TREE**

**49.1. Decision Tree tổng quát**

Khi phát hiện vấn đề sau release hoặc trước go-live:

1.  Có P0 nghiêm trọng không?

    - Có → RELEASE_HOLD ngay.

    - Không → đánh giá impact.

2.  Có ảnh hưởng payment/order/customer data/claim/recall/sale lock không?

    - Có → RELEASE_HOLD hoặc ROLLBACK_REQUIRED.

    - Không → có thể NEEDS_RETEST.

3.  Có evidence conflict không?

    - Có → OWNER_REVIEW_REQUIRED + NEEDS_RETEST.

4.  Có dependency chưa clear không?

    - Có → DEPENDENCY_BLOCKED.

5.  Có thể giới hạn scope không?

    - Có → APPROVE_LIMITED_GO_LIVE nếu owner duyệt.

    - Không → BLOCKED.

6.  Có evidence fix/retest accepted không?

    - Có → xét lại Release Ready.

    - Không → giữ BLOCKED/HOLD.

**49.2. Không được tiếp tục production khi chưa phân loại incident**

Nếu có incident chưa phân loại, trạng thái phải là:

OWNER_REVIEW_REQUIRED hoặc RELEASE_HOLD

Không được tiếp tục scale hoặc mở rộng production khi incident chưa rõ nguyên nhân.

**50. GLOBAL GATEWAY DECISION**

**50.1. Global Gateway chỉ được mở khi pack trọng yếu clear**

Global Gateway của toàn hệ thống chỉ được chuyển khỏi BLOCKED khi toàn bộ pack trọng yếu trong release scope đạt điều kiện.

Nếu release scope là toàn bộ hệ thống, cần tối thiểu:

1.  PACK-01 Release Approved.

2.  PACK-02 Release Approved.

3.  PACK-03 Release Approved nếu có demand/MRP/procurement automation trong scope.

4.  PACK-04 Release Approved.

5.  PACK-05 Release Approved nếu dùng Facebook/Messenger.

6.  PACK-06 Release Approved nếu dùng AI Advisor.

7.  PACK-07 Release Approved nếu dùng Ads/ROAS/Attribution.

8.  PACK-08 Release Approved nếu dùng MC AI Live.

9.  PACK-09 Release Approved nếu dùng IVR.

10. Cross-pack dependency cleared.

11. Monitoring/incident/rollback ready.

12. Final owner go-live decision.

**50.2. Nếu một pack không nằm trong scope phải ghi EXCLUDED**

Nếu một pack chưa được release nhưng không nằm trong scope go-live, Completion Report phải ghi rõ:

EXCLUDED_FROM_RELEASE_SCOPE

Không được để trạng thái mơ hồ.

Ví dụ:

- IVR chưa production, nhưng release commerce không dùng IVR.

- Ads measurement chưa scale, nhưng release chỉ mở bán organic.

- MC AI Live chưa dùng, nhưng Messenger tư vấn private đã release.

- Direct bank transfer chưa auto-confirm, nhưng chỉ mở COD.

Việc EXCLUDED phải có owner decision và không được làm ảnh hưởng source-of-truth boundary.

**51. GATEWAY DECISION OUTPUT**

**51.1. Gateway Decision Output bắt buộc**

Mỗi quyết định Gateway phải trả ra kết luận rõ:

| **Output**              | **Giá trị hợp lệ**                                                                                                  |
|-------------------------|---------------------------------------------------------------------------------------------------------------------|
| Completion Pass         | YES / NO                                                                                                            |
| Release Ready           | YES / NO                                                                                                            |
| Production Ready        | YES / NO                                                                                                            |
| Release Approved        | YES / NO                                                                                                            |
| Go-live Approved        | YES / NO                                                                                                            |
| Gateway Status          | BLOCKED / PENDING_EVIDENCE / RELEASE_READY / RELEASE_APPROVED / GO_LIVE_APPROVED / RELEASE_HOLD / ROLLBACK_REQUIRED |
| Scope                   | Full / Limited / Excluded / Pilot / Internal                                                                        |
| Conditions              | Điều kiện kèm theo nếu có                                                                                           |
| Next Action             | Evidence / Retest / Owner Review / Release / Hold / Rollback                                                        |
| Owner Decision Required | YES / NO                                                                                                            |

**51.2. Không được dùng output mơ hồ**

Các output sau bị cấm:

- “Được rồi.”

- “Tạm được.”

- “Có thể triển khai.”

- “Đã ổn.”

- “Dev kiểm tra thêm.”

- “Chạy thử xem.”

- “Cơ bản pass.”

- “Không thấy lỗi.”

- “Go-live thử.”

PACK-10 yêu cầu output phải rõ trạng thái, rõ scope, rõ điều kiện.

**52. KẾT LUẬN PHẦN 3/4**

PHẦN 3/4 đã khóa mô hình Gateway Decision, Completion Report Control, Production Ready, Release Ready, Release Approved, Go-live Approved, Owner Decision, Release Hold, Rollback/Recovery và Cross-pack Dependency Control.

Kết luận bắt buộc:

1.  Gateway không được mở nếu thiếu evidence accepted.

2.  Completion Report không tự làm PASS.

3.  Production Ready không được suy diễn từ Documentation Complete.

4.  Release Ready chưa phải Release Approved.

5.  Release Approved chưa chắc là Go-live Approved.

6.  Go-live Approved chỉ hợp lệ khi có production scope, owner decision, rollback/recovery, monitoring và không còn P0/dependency blocker.

7.  Owner Decision phải có record, scope, version và evidence.

8.  Release Hold phải được kích hoạt khi có P0, incident, evidence conflict hoặc risk chưa rõ.

9.  Rollback là cơ chế bảo vệ bắt buộc khi production có rủi ro nghiêm trọng.

10. Downstream không được production nếu upstream chưa release.

11. Cross-pack dependency phải clear trước khi release group.

12. Nếu pack không nằm trong release scope phải ghi EXCLUDED rõ ràng.

13. Trạng thái toàn hệ vẫn giữ:

GLOBAL_GATEWAY_STATUS = BLOCKED  
COMPLETION_PASS = NO  
RELEASE_READY = NO  
PRODUCTION_READY = NO  
RELEASE_APPROVED = NO  
GO_LIVE_APPROVED = NO

cho đến khi toàn bộ điều kiện evidence, smoke, security, owner sign-off, release decision và go-live decision được đáp ứng theo đúng scope.

**KẾT THÚC PHẦN 3/4 — PACK-10 V1.0 CLEAN FINAL**

**PHẦN 4/4 — FINAL SMOKE MATRIX / DONE GATE / FAIL GATE / RELEASE CONTROL / PACK-10 FINAL CONCLUSION**

**53. MỤC ĐÍCH CỦA PHẦN 4/4**

PHẦN 4/4 là phần khóa cuối của PACK-10.

Nếu PHẦN 1/4 đã khóa nguyên tắc Completion / Gateway / No-bypass, PHẦN 2/4 đã khóa Evidence Registry / P0 Blocker / Pack Completion Matrix, PHẦN 3/4 đã khóa Gateway Decision / Production Readiness / Go-live Control, thì PHẦN 4/4 khóa lớp kết luận cuối:

1.  Smoke Matrix tổng thể.

2.  Done Gate tổng thể.

3.  Fail Gate tổng thể.

4.  Evidence Acceptance Gate.

5.  Release Control.

6.  Final Release Status.

7.  Final Conclusion của PACK-10.

PHẦN 4/4 không làm PASS cho bất kỳ pack nào.  
PHẦN 4/4 không thay thế PACK-01 đến PACK-09.  
PHẦN 4/4 không tự xác nhận hệ thống đã Production Ready.  
PHẦN 4/4 chỉ xác định điều kiện bắt buộc để một pack hoặc toàn hệ thống được phép đi từ **BLOCKED** sang **Release Ready / Release Approved / Go-live Approved**.

**54. FINAL SMOKE MATRIX PRINCIPLE**

**54.1. Smoke Matrix tổng thể là gì**

Final Smoke Matrix là ma trận kiểm tra các luồng sống còn của toàn bộ hệ thống Ginsengfood trước release.

Smoke Matrix không phải danh sách test nhỏ.  
Smoke Matrix không phải kiểm tra giao diện.  
Smoke Matrix không phải demo.  
Smoke Matrix không phải ảnh chụp màn hình.  
Smoke Matrix không phải lời xác nhận “đã chạy”.

Smoke Matrix phải chứng minh rằng các luồng P0 vận hành đúng theo source-of-truth đã khóa.

**54.2. Smoke Matrix phải kiểm tra đúng boundary**

Smoke Matrix phải kiểm tra rằng:

1.  AI không vượt Commerce Runtime.

2.  Facebook Gateway không tự tạo order.

3.  Ads không tự tính ROAS từ pending revenue.

4.  MC AI Live không tự chốt đơn public.

5.  IVR không tự hủy đơn.

6.  Payment không mark PAID sai.

7.  Warehouse không xuất hàng chưa RELEASED.

8.  Public Trace không lộ dữ liệu nội bộ.

9.  Sale Lock / Recall Lock thắng mọi luồng bán hàng.

10. Dashboard không trở thành source-of-truth.

11. Admin không sửa tay trạng thái để hợp thức hóa PASS.

12. Downstream không chạy production trên pack upstream chưa release.

**54.3. Smoke PASS phải có evidence**

Một smoke chỉ được xem là PASS khi có đủ:

1.  Smoke case rõ.

2.  Pack/scope rõ.

3.  Môi trường rõ.

4.  Dữ liệu test rõ.

5.  Kết quả rõ.

6.  Người thực hiện rõ.

7.  Thời điểm rõ.

8.  Evidence đính kèm rõ.

9.  Reviewer rõ.

10. Không có P0 blocker liên quan.

11. Không có conflict với pack khác.

12. Evidence được ACCEPTED.

Nếu chỉ “chạy thấy được” nhưng không có evidence accepted thì Smoke Status vẫn không đủ làm căn cứ Release Ready.

**55. FINAL SMOKE MATRIX — PACK-01 ĐẾN PACK-09**

**55.1. Ma trận smoke tổng hợp theo pack**

| **Pack** | **Smoke mục tiêu**                                                          | **Điều kiện PASS**                                                                                                  | **Fail impact**                                                    |
|----------|-----------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------|
| PACK-01  | Production / Warehouse / Inventory / Traceability / Recall / Sale Lock      | Batch release đúng, warehouse chỉ nhận RELEASED batch, trace/public trace đúng whitelist, sale lock/recall chặn bán | Chặn Commerce, AI, Ads, Live, Fulfillment liên quan                |
| PACK-02  | Product Master / SKU / Ingredient / Recipe / Formula Version / Activation   | SKU active đúng, recipe/formula version không ghi đè lịch sử, product activation/sellable gate đúng                 | Chặn bán SKU liên quan                                             |
| PACK-03  | Demand / MRP / Procurement / Formula Scaling / Material & Packaging Control | Demand-to-PO có guard, MRP threshold đúng, procurement suppression đúng, strategic reserve đúng                     | Chặn tự động sản xuất/thu mua theo scope                           |
| PACK-04  | Quote / Cart / Order / Payment / Shipping / Fulfillment                     | Quote Snapshot đúng, cart draft không thành order, payment không mark PAID sai, shipping/VAT runtime đúng           | Chặn AI quote, Facebook order, Ads revenue, IVR order confirmation |
| PACK-05  | Facebook Gateway / Meta Live / Messenger / Private Handoff                  | Comment public xử lý đúng, private handoff đúng, privacy guard pass, không tạo order ngoài Commerce                 | Chặn production Facebook/Messenger routing                         |
| PACK-06  | AI Advisor / Resolver / Guard / Claim / Sales Boundary                      | AI đi đúng Intent → Entity → Variable → Resolver → Guard → Action → Render; không hardcode; claim guard pass        | Chặn AI tư vấn/chốt quote production                               |
| PACK-07  | Ads / ROAS / Attribution / Verified Revenue                                 | Data Quality PASS, Attribution Rule rõ, Verified Revenue hợp lệ, không tính ROAS từ pending revenue                 | Chặn Ads scale và ROAS chính thức                                  |
| PACK-08  | MC AI Live / Live Script / Hosting Assistant                                | Có Live Plan, Product Scope, Claim Guard, Privacy Guard, handoff và risk P0 control                                 | Chặn MC AI Live production orchestration                           |
| PACK-09  | IVR Order Confirmation / Internal SIM Gateway                               | Deadline-aware scheduler đúng, attempts đúng, call result đúng, Core Order State Machine quyết định cuối            | Chặn IVR gọi khách thật                                            |

**55.2. Smoke fail ở pack upstream phải chặn downstream**

Nếu pack upstream smoke fail, downstream phụ thuộc phải bị chặn.

Ví dụ:

1.  PACK-04 smoke fail thì PACK-05, PACK-06, PACK-07, PACK-08, PACK-09 không được production đầy đủ.

2.  PACK-01 sale lock smoke fail thì AI, Ads, Live, Commerce không được bán sản phẩm liên quan.

3.  PACK-02 activation smoke fail thì không được bán SKU liên quan.

4.  PACK-07 verified revenue smoke fail thì không được scale Ads.

5.  PACK-09 IVR smoke fail thì không được gọi khách thật.

Không được ghi downstream là Production Ready nếu upstream P0 còn fail.

**56. FINAL CROSS-PACK SMOKE MATRIX**

**56.1. Smoke chuỗi Commerce Core**

| **Smoke ID** | **Luồng kiểm tra**                                            | **Điều kiện PASS**                                                                    |
|--------------|---------------------------------------------------------------|---------------------------------------------------------------------------------------|
| SMK-COM-001  | Product active → Quote Snapshot → Cart draft → Official order | SKU phải active/sellable; quote lấy runtime; cart draft không tự thành official order |
| SMK-COM-002  | Order → Payment confirmation → Paid status                    | Không mark PAID nếu chưa có xác nhận hợp lệ hoặc accounting review                    |
| SMK-COM-003  | Order → Shipping eligibility → Fulfillment                    | Shipping/VAT/payment method phải theo runtime, không hardcode                         |
| SMK-COM-004  | Direct bank transfer                                          | Không hardcode tài khoản; phải có reference/transfer memo/accounting review theo rule |
| SMK-COM-005  | Order state machine                                           | Trạng thái đơn phải do core quyết định, không do AI/Gateway/IVR tự sửa                |

**56.2. Smoke chuỗi AI Advisor**

| **Smoke ID** | **Luồng kiểm tra**          | **Điều kiện PASS**                                                      |
|--------------|-----------------------------|-------------------------------------------------------------------------|
| SMK-AI-001   | Khách hỏi sản phẩm          | AI dùng Product Knowledge Resolver, không nói SKU nội bộ cho khách      |
| SMK-AI-002   | Khách hỏi giá               | AI lấy giá/chương trình từ runtime, không hardcode                      |
| SMK-AI-003   | Khách có tín hiệu mua       | AI tạo draft/quote theo Commerce Runtime, không tự tạo order ngoài core |
| SMK-AI-004   | Khách hỏi claim sức khỏe    | Claim Guard pass, không nói điều trị/thay thuốc/chữa bệnh               |
| SMK-AI-005   | Khách hỏi sản phẩm hết hàng | Không chốt SKU hết hàng; đề xuất thay thế đúng chay/mặn/nhu cầu         |
| SMK-AI-006   | Khách cũ quay lại           | Hỏi trải nghiệm sản phẩm trước trước khi bán tiếp                       |
| SMK-AI-007   | Khách nhạy cảm sức khỏe     | Chuyển theo Health Sensitive Template và guard phù hợp                  |

**56.3. Smoke chuỗi Facebook Gateway / Messenger**

| **Smoke ID** | **Luồng kiểm tra**        | **Điều kiện PASS**                                                  |
|--------------|---------------------------|---------------------------------------------------------------------|
| SMK-FB-001   | Comment public hỏi giá    | Không báo giá chi tiết sai boundary; kéo private đúng cách          |
| SMK-FB-002   | Comment public mơ hồ      | Nhận diện và chuyển Messenger/private nếu cần                       |
| SMK-FB-003   | Sau handoff private       | Ngữ cảnh tiếp theo mặc định private, không quay lại public nhạy cảm |
| SMK-FB-004   | Health-sensitive comment  | Không tư vấn sâu public; chuyển private                             |
| SMK-FB-005   | Complaint                 | Không xử lý như lead bán hàng; chuyển đúng flow khiếu nại           |
| SMK-FB-006   | Order intent từ Messenger | Gateway không tự tạo order ngoài Commerce Core                      |

**56.4. Smoke chuỗi Ads / ROAS / Attribution**

| **Smoke ID** | **Luồng kiểm tra**      | **Điều kiện PASS**                                                          |
|--------------|-------------------------|-----------------------------------------------------------------------------|
| SMK-ADS-001  | Ads click/comment/inbox | Không xem comment/inbox là revenue                                          |
| SMK-ADS-002  | Quote/cart/order        | Không xem quote/cart draft/order unpaid là verified revenue                 |
| SMK-ADS-003  | Verified Revenue        | Revenue phải đến từ nguồn hợp lệ đã xác nhận                                |
| SMK-ADS-004  | Attribution             | Attribution Rule rõ trước khi kết luận nguồn doanh thu                      |
| SMK-ADS-005  | ROAS dashboard          | Dashboard chỉ hiển thị, không làm source-of-truth                           |
| SMK-ADS-006  | Scale decision          | Chỉ scale khi Data Quality PASS, Verified Revenue PASS, owner decision PASS |

**56.5. Smoke chuỗi MC AI Live**

| **Smoke ID** | **Luồng kiểm tra** | **Điều kiện PASS**                                                 |
|--------------|--------------------|--------------------------------------------------------------------|
| SMK-LIVE-001 | Live Plan          | Có Live Plan trước production                                      |
| SMK-LIVE-002 | Product Scope      | Chỉ cue sản phẩm trong Product Scope và sellable                   |
| SMK-LIVE-003 | Script Registry    | Cue đúng script, không nói ngoài claim guard                       |
| SMK-LIVE-004 | Public Q&A         | Không chốt đơn đầy đủ ở public                                     |
| SMK-LIVE-005 | Private handoff    | Chuyển đúng PACK-05/PACK-06 khi cần tư vấn cá nhân                 |
| SMK-LIVE-006 | Urgency/scarcity   | Không fake urgency, không fake scarcity                            |
| SMK-LIVE-007 | Risk P0            | Complaint/health-sensitive/recall/sale lock thắng mọi cue bán hàng |

**56.6. Smoke chuỗi IVR Order Confirmation**

| **Smoke ID** | **Luồng kiểm tra**         | **Điều kiện PASS**                                                          |
|--------------|----------------------------|-----------------------------------------------------------------------------|
| SMK-IVR-001  | Call purpose               | CALL_PURPOSE = ORDER_CONFIRMATION_ONLY                                      |
| SMK-IVR-002  | SIM capacity               | 1 SIM = 1 ACTIVE OUTBOUND CALL                                              |
| SMK-IVR-003  | Golden Hour schedule       | 5 phút / 2 attempts / interval 2 phút 30 giây                               |
| SMK-IVR-004  | 24/7 schedule              | 15 phút / 3 attempts / T0, T0+5, T0+10                                      |
| SMK-IVR-005  | Call result classification | Invalid phone, no answer, technical error, capacity overload tách rõ        |
| SMK-IVR-006  | DTMF result                | Phím 1/0/9 xử lý đúng rule; phím 9 NOT_ENABLED nếu chưa bật                 |
| SMK-IVR-007  | Order decision             | IVR result chỉ là input; Core Order State Machine quyết định cuối           |
| SMK-IVR-008  | Cancellation notice        | Chỉ gửi sau khi Core đã hủy đơn chính thức                                  |
| SMK-IVR-009  | No bypass                  | SIM Gateway không cập nhật order trực tiếp; AI/CRM không tự gửi tin hủy đơn |

**56.7. Smoke chuỗi Sale Lock / Recall / Traceability**

| **Smoke ID** | **Luồng kiểm tra**     | **Điều kiện PASS**                                                                |
|--------------|------------------------|-----------------------------------------------------------------------------------|
| SMK-LOCK-001 | Batch release          | Chỉ RELEASED batch mới được vào warehouse/sellable                                |
| SMK-LOCK-002 | Sale Lock              | SKU/lô bị sale lock không thể bán                                                 |
| SMK-LOCK-003 | Recall Lock            | Lô/sản phẩm recall chặn được bán hàng                                             |
| SMK-LOCK-004 | Traceability           | Trace được nguồn → raw lot → production → batch → QR/public trace                 |
| SMK-LOCK-005 | Public Trace           | Chỉ hiển thị whitelist, không leak supplier/personnel/cost/QC defect/internal IDs |
| SMK-LOCK-006 | Downstream suppression | AI/Ads/Live/Commerce phải ngưng bán nếu sale lock/recall active                   |

**57. EVIDENCE ACCEPTANCE GATE**

**57.1. Evidence Acceptance Gate là gì**

Evidence Acceptance Gate là cổng quyết định một evidence có được dùng làm căn cứ PASS hay không.

Evidence Acceptance Gate không xét cảm tính.  
Evidence Acceptance Gate không dựa vào lời nói.  
Evidence Acceptance Gate không dựa vào dashboard.  
Evidence Acceptance Gate không dựa vào tài liệu đã viết.

Evidence Acceptance Gate chỉ chấp nhận evidence khi evidence đủ điều kiện truy vết, đủ scope, đúng pack, đúng môi trường, đúng version và đã được review.

**57.2. Điều kiện evidence được ACCEPTED**

Evidence chỉ được ACCEPTED khi đạt đủ:

1.  Có Evidence ID.

2.  Có pack/scope rõ.

3.  Có môi trường rõ.

4.  Có version/build/config liên quan.

5.  Có thời điểm phát sinh.

6.  Có người nộp.

7.  Có người review.

8.  Có test/smoke/security case liên quan.

9.  Có kết quả rõ.

10. Không có conflict với rule pack.

11. Không có P0 blocker liên quan.

12. Không stale/expired.

13. Không bypass source-of-truth.

14. Không phụ thuộc pack chưa release trừ khi scope ghi rõ excluded/pilot.

15. Được reviewer/owner có thẩm quyền chấp nhận.

**57.3. Evidence phải REJECTED nếu vi phạm P0**

Evidence phải bị REJECTED nếu phát hiện:

1.  AI hardcode giá, tồn kho, chính sách, tài khoản, quyền lợi.

2.  Gateway tự tạo order ngoài Commerce.

3.  Ads tính ROAS từ pending revenue.

4.  MC AI Live fake urgency/scarcity hoặc chốt đơn public.

5.  IVR tự hủy đơn hoặc SIM Gateway cập nhật order trực tiếp.

6.  Payment mark PAID sai.

7.  Warehouse bán hàng chưa RELEASED.

8.  Public Trace leak dữ liệu nội bộ.

9.  Recall/Sale Lock bị bypass.

10. Dashboard được dùng làm source-of-truth.

11. Admin sửa tay trạng thái để hợp thức hóa PASS.

12. Downstream production trên upstream chưa release.

**57.4. Evidence Acceptance không tự tạo Release Approved**

Evidence Accepted là điều kiện bắt buộc, nhưng chưa đủ để Release Approved.

Sau Evidence Accepted vẫn cần:

1.  Smoke Pass.

2.  P0 Cleared.

3.  Security Pass nếu áp dụng.

4.  Dependency Cleared.

5.  Owner Sign-off.

6.  Release Decision.

7.  Rollback/Recovery Readiness.

8.  Monitoring/Incident Readiness.

9.  Go-live Decision nếu chạy production thật.

**58. DONE GATE TỔNG THỂ**

**58.1. Done Gate là gì**

Done Gate là tập điều kiện bắt buộc để kết luận một pack, một nhóm pack hoặc toàn hệ thống đã hoàn tất đúng tầng.

PACK-10 yêu cầu không được dùng chữ “Done” chung chung.

Mỗi Done Gate phải ghi rõ:

1.  Documentation Done.

2.  Implementation Done.

3.  Test Done.

4.  Smoke Done.

5.  Evidence Done.

6.  Security Done.

7.  Owner Done.

8.  Release Done.

9.  Go-live Done.

**58.2. Documentation Done Gate**

Một pack chỉ được Documentation Done khi:

1.  Có bản clean final.

2.  Có version rõ.

3.  Có scope rõ.

4.  Có source-of-truth boundary.

5.  Có no-bypass rule.

6.  Có Done Gate / Fail Gate.

7.  Có Smoke Matrix hoặc smoke requirement.

8.  Có release control.

9.  Không còn phần vá lẻ/lặp/rác.

10. Không mâu thuẫn với MASTER/PACK liên quan.

Documentation Done không phải Production Ready.

**58.3. Implementation Done Gate**

Một pack chỉ được Implementation Done khi:

1.  Đã triển khai đúng scope.

2.  Không tự thêm đường vòng.

3.  Không hardcode dữ liệu runtime.

4.  Không bypass pack khác.

5.  Có kiểm soát permission/security theo scope.

6.  Có log/audit/evidence hook nếu yêu cầu.

7.  Có môi trường test/staging.

8.  Có implementation evidence.

9.  Evidence được review.

10. Không có P0 implementation blocker.

Implementation Done không phải Release Ready nếu chưa test/smoke/evidence accepted.

**58.4. Test Done Gate**

Một pack chỉ được Test Done khi:

1.  Có test matrix.

2.  Test case phủ rule P0.

3.  Có kết quả test.

4.  Có fail issue nếu test fail.

5.  Có retest evidence nếu đã sửa.

6.  Có môi trường test rõ.

7.  Có dữ liệu test rõ.

8.  Có người thực hiện.

9.  Có reviewer.

10. Test evidence được ACCEPTED.

**58.5. Smoke Done Gate**

Một pack chỉ được Smoke Done khi:

1.  Smoke P0 chạy qua đúng scope.

2.  Smoke không bypass rule.

3.  Smoke không dùng dữ liệu giả sai bản chất nếu scope yêu cầu runtime thật.

4.  Smoke có evidence.

5.  Smoke có reviewer.

6.  Smoke không conflict với pack khác.

7.  Smoke không còn P0 blocker.

8.  Smoke evidence được ACCEPTED.

**58.6. Security Done Gate**

Security Done Gate bắt buộc với các pack có rủi ro:

1.  Payment.

2.  Order.

3.  Customer data.

4.  AI Advisor.

5.  Facebook Gateway.

6.  Messenger/private handoff.

7.  Admin/system control.

8.  IVR/SIM Gateway.

9.  Public Trace.

10. MISA/accounting.

11. Recall/Sale Lock.

12. Evidence upload nếu có.

Security Done chỉ đạt khi có security evidence accepted.

**58.7. Evidence Done Gate**

Evidence Done chỉ đạt khi:

1.  Tất cả evidence bắt buộc đã nộp.

2.  Evidence đã review.

3.  Evidence status = ACCEPTED.

4.  Không có evidence conflict.

5.  Không có stale evidence.

6.  Không có evidence bị rejected chưa xử lý.

7.  Không có P0 blocker liên quan.

8.  Owner không yêu cầu retest.

**58.8. Owner Done Gate**

Owner Done chỉ đạt khi:

1.  Owner có thẩm quyền đã review.

2.  Owner sign-off đúng scope.

3.  Owner decision có record.

4.  Version/scope/evidence rõ.

5.  P0 status rõ.

6.  Dependency status rõ.

7.  Nếu có risk acceptance thì có điều kiện, thời hạn và phạm vi rõ.

**58.9. Release Done Gate**

Release Done chỉ đạt khi:

1.  Release Ready = YES.

2.  Owner Sign-off = YES.

3.  Release Approved = YES.

4.  Release scope rõ.

5.  Rollback plan rõ.

6.  Monitoring/incident owner rõ.

7.  Release decision record có hiệu lực.

8.  Không có release hold.

9.  Không có P0 blocker.

10. Không có dependency blocker.

**58.10. Go-live Done Gate**

Go-live Done chỉ đạt khi:

1.  Production Ready = YES.

2.  Release Approved = YES.

3.  Go-live Approved = YES.

4.  Go-live scope rõ.

5.  Production environment ready.

6.  Monitoring/alert ready.

7.  Incident/support owner ready.

8.  Rollback/recovery ready.

9.  Không có P0 blocker.

10. Không có unresolved risk.

11. Final owner decision có hiệu lực.

**59. FAIL GATE TỔNG THỂ**

**59.1. Fail Gate là gì**

Fail Gate là tập điều kiện khiến một pack hoặc toàn hệ thống không được release.

Fail Gate phải thắng mọi mong muốn đẩy nhanh tiến độ.

Không được vì cần chạy live, cần chạy ads, cần bán hàng, cần test khách thật mà bỏ qua Fail Gate.

**59.2. Fail Gate bắt buộc**

Một pack hoặc release group phải FAIL nếu có một trong các điều kiện:

1.  Chưa có evidence accepted.

2.  Smoke chưa pass.

3.  P0 blocker còn open.

4.  Security fail.

5.  Owner chưa sign-off.

6.  Release decision chưa có.

7.  Go-live decision chưa có nhưng đã muốn chạy production.

8.  Upstream pack chưa release.

9.  Downstream bypass upstream.

10. Source-of-truth bị bypass.

11. Dashboard bị dùng làm nguồn thật.

12. Admin sửa tay để hợp thức hóa.

13. AI hardcode runtime.

14. Payment mark PAID sai.

15. Order state sai.

16. Ads tính ROAS từ pending revenue.

17. IVR tự quyết định hủy đơn.

18. MC AI Live chốt đơn public.

19. Facebook Gateway leak privacy.

20. Public Trace leak internal data.

21. Warehouse bán hàng chưa RELEASED.

22. Recall/Sale Lock không chặn bán.

23. Evidence stale/expired/conflict.

24. Release scope mơ hồ.

25. Rollback plan không có.

26. Monitoring/incident owner không rõ.

**59.3. Fail Gate theo từng nhóm pack**

| **Nhóm**                | **Fail Gate chính**                                                                     |
|-------------------------|-----------------------------------------------------------------------------------------|
| Operational / Warehouse | Batch chưa RELEASED vẫn vào bán; inventory ledger sửa lịch sử; sale lock fail           |
| Product / SKU           | SKU chưa active vẫn sellable; recipe version ghi đè lịch sử                             |
| Demand / MRP            | Sales/Đại lý tự phát lệnh sản xuất; procurement vượt suppression threshold              |
| Commerce                | Quote không snapshot; cart draft thành order; payment mark PAID sai                     |
| Facebook Gateway        | Public leak thông tin; Gateway tự tạo order; handoff fail                               |
| AI Advisor              | Claim vượt whitelist; hardcode giá/tồn kho; chốt SKU hết hàng                           |
| Ads                     | Tính ROAS từ pending revenue; scale khi Data Quality chưa PASS                          |
| MC AI Live              | Fake urgency/scarcity; chốt đơn public; cue sản phẩm not sellable                       |
| IVR                     | SIM Gateway cập nhật order; phân loại sai no answer/invalid/technical; gọi sai deadline |
| Trace / Recall          | Public Trace leak; recall không chặn bán; trace chain thiếu                             |
| Payment / MISA          | Không đối soát; nguồn revenue không verified; accounting mismatch                       |

**60. RELEASE CONTROL**

**60.1. Release Control là gì**

Release Control là cơ chế quyết định một pack hoặc release group được phép chuyển trạng thái nào.

Release Control không chỉ trả lời “được hay không”.  
Release Control phải trả lời:

1.  Được release scope nào?

2.  Chưa được release scope nào?

3.  Điều kiện kèm theo là gì?

4.  Evidence nào làm căn cứ?

5.  Owner nào quyết định?

6.  Nếu fail thì rollback thế nào?

7.  Sau release ai giám sát?

8.  Khi nào phải stop/hold/rollback?

**60.2. Các tầng release hợp lệ**

| **Tầng release**        | **Ý nghĩa**                          |
|-------------------------|--------------------------------------|
| NO_RELEASE              | Chưa được release                    |
| INTERNAL_REVIEW         | Chỉ review nội bộ                    |
| INTERNAL_PILOT          | Chạy nội bộ giới hạn                 |
| STAGING_PILOT           | Chạy staging có kiểm soát            |
| LIMITED_PRODUCTION      | Chạy production giới hạn             |
| CHANNEL_LIMITED_RELEASE | Chỉ mở kênh cụ thể                   |
| SKU_LIMITED_RELEASE     | Chỉ mở SKU cụ thể                    |
| PAYMENT_LIMITED_RELEASE | Chỉ mở phương thức thanh toán cụ thể |
| FULL_PRODUCTION_RELEASE | Mở production đầy đủ theo scope      |
| RELEASE_HOLD            | Tạm giữ release                      |
| ROLLBACK_REQUIRED       | Phải rollback                        |

**60.3. Không được nhầm pilot với production**

Pilot không phải production đầy đủ.

Ví dụ:

1.  AI Advisor internal pilot không phải AI customer-facing production.

2.  Ads measurement pilot không phải Ads scale.

3.  MC AI Live rehearsal không phải live production.

4.  IVR simulation không phải gọi khách thật.

5.  COD-only release không phải all payment release.

6.  SKU-limited release không phải toàn bộ 20 SKU release.

7.  Messenger-only release không phải Live + Messenger + CRM full release.

Completion Report phải ghi đúng scope.

**60.4. Release Package bắt buộc**

Một release package hợp lệ phải gồm:

1.  Release scope.

2.  Pack list.

3.  Version list.

4.  Documentation status.

5.  Implementation status.

6.  Test result.

7.  Smoke result.

8.  Security result.

9.  Evidence references.

10. P0 blocker status.

11. Dependency status.

12. Owner sign-off.

13. Release decision.

14. Rollback/recovery plan.

15. Monitoring/incident owner.

16. Go-live decision nếu có.

17. Excluded scope nếu có.

18. Known risk nếu có.

19. Conditions nếu có.

20. Effective time.

Thiếu release package thì không được Release Approved.

**61. FINAL RELEASE STATUS REGISTRY**

**61.1. Trạng thái cuối được phép dùng**

PACK-10 chỉ cho phép dùng các trạng thái cuối sau:

| **Final Status**            | **Ý nghĩa**                            |
|-----------------------------|----------------------------------------|
| DOCUMENTATION_COMPLETE_ONLY | Chỉ hoàn tất tài liệu                  |
| IMPLEMENTATION_PENDING      | Chưa có evidence triển khai            |
| TEST_PENDING                | Chưa có evidence test                  |
| SMOKE_PENDING               | Chưa smoke pass                        |
| EVIDENCE_PENDING            | Chưa evidence accepted                 |
| SECURITY_PENDING            | Chưa security pass                     |
| P0_BLOCKED                  | Còn P0 blocker                         |
| DEPENDENCY_BLOCKED          | Còn phụ thuộc chưa clear               |
| OWNER_REVIEW_REQUIRED       | Cần owner quyết định                   |
| RELEASE_READY               | Đủ điều kiện trình release             |
| RELEASE_APPROVED            | Được duyệt release                     |
| GO_LIVE_APPROVED            | Được duyệt vận hành thật               |
| RELEASE_HOLD                | Đang giữ release                       |
| ROLLBACK_REQUIRED           | Phải rollback                          |
| REJECTED                    | Không được release theo scope hiện tại |
| EXCLUDED_FROM_RELEASE_SCOPE | Không nằm trong scope release này      |

**61.2. Trạng thái bị cấm**

PACK-10 không cho phép dùng các trạng thái mơ hồ sau:

1.  Gần xong.

2.  Cơ bản xong.

3.  Tạm ổn.

4.  Đã chạy được.

5.  Có thể dùng.

6.  Go-live thử.

7.  Chờ dev kiểm tra thêm nhưng vẫn release.

8.  PASS tạm.

9.  PASS miệng.

10. PASS nội bộ nhưng không evidence.

11. Production Ready vì tài liệu đã xong.

12. Release vì owner đồng ý miệng.

**62. GLOBAL FINAL STATUS — MẶC ĐỊNH SAU PACK-10**

**62.1. Trạng thái mặc định của toàn hệ**

Sau khi PACK-10 V1.0 CLEAN FINAL hoàn tất về mặt tài liệu governance, trạng thái toàn hệ vẫn phải ghi:

| **Nhóm trạng thái**          | **Giá trị**            |
|------------------------------|------------------------|
| PACK-10_DOCUMENTATION_STATUS | DOCUMENTATION_COMPLETE |
| GLOBAL_IMPLEMENTATION_STATUS | PENDING_EVIDENCE       |
| GLOBAL_TEST_STATUS           | PENDING_EVIDENCE       |
| GLOBAL_SMOKE_STATUS          | PENDING_EVIDENCE       |
| GLOBAL_SECURITY_STATUS       | PENDING_EVIDENCE       |
| GLOBAL_EVIDENCE_STATUS       | PENDING                |
| GLOBAL_P0_STATUS             | OPEN_IF_UNCLEARED      |
| GLOBAL_OWNER_SIGN_OFF        | NO                     |
| GLOBAL_RELEASE_READY         | NO                     |
| GLOBAL_PRODUCTION_READY      | NO                     |
| GLOBAL_RELEASE_APPROVED      | NO                     |
| GLOBAL_GO_LIVE_APPROVED      | NO                     |
| GLOBAL_GATEWAY_STATUS        | BLOCKED                |

**62.2. Ý nghĩa của trạng thái này**

Trạng thái trên không phủ nhận việc PACK-01 đến PACK-10 đã được viết tài liệu.

Trạng thái trên chỉ khẳng định:

Hoàn tất tài liệu không đồng nghĩa hoàn tất triển khai.  
Hoàn tất triển khai không đồng nghĩa production ready.  
Không có smoke/evidence/owner sign-off/release decision thì toàn hệ không được gọi là go-live.

Đây là điểm khóa bắt buộc của PACK-10.

**63. FINAL DONE GATE — TOÀN HỆ GINSENGFOOD**

**63.1. Điều kiện toàn hệ được Completion PASS**

Toàn hệ Ginsengfood chỉ được Completion PASS khi:

1.  PACK-01 đến PACK-09 có Documentation Complete theo scope.

2.  Implementation evidence accepted cho các pack trong release scope.

3.  Test evidence accepted.

4.  Smoke evidence accepted.

5.  Security evidence accepted nếu áp dụng.

6.  P0 blocker cleared.

7.  Cross-pack dependency cleared.

8.  Evidence không stale.

9.  Evidence không conflict.

10. Owner sign-off đầy đủ.

11. Completion Report hợp lệ.

12. Release package hợp lệ.

Nếu thiếu bất kỳ điều kiện nào:

GLOBAL_COMPLETION_PASS = NO

**63.2. Điều kiện toàn hệ được Release Ready**

Toàn hệ chỉ được Release Ready khi:

1.  Completion PASS.

2.  Final Smoke Matrix PASS.

3.  Evidence Acceptance Gate PASS.

4.  Security Gate PASS.

5.  P0 Blocker Registry clear.

6.  Cross-pack dependency clear.

7.  Release scope rõ.

8.  Rollback/recovery ready.

9.  Monitoring/incident ready.

10. Owner review không còn pending.

Nếu thiếu một điều kiện:

GLOBAL_RELEASE_READY = NO

**63.3. Điều kiện toàn hệ được Production Ready**

Toàn hệ chỉ được Production Ready khi:

1.  Release Ready = YES.

2.  Release Approved = YES.

3.  Production environment ready.

4.  Production config ready.

5.  Production data boundary ready.

6.  Monitoring/alert ready.

7.  Incident/support owner ready.

8.  Rollback/recovery ready.

9.  Security/data protection ready.

10. No release hold.

11. No P0 blocker.

12. No dependency blocked.

13. Final owner sign-off có hiệu lực.

Nếu thiếu một điều kiện:

GLOBAL_PRODUCTION_READY = NO

**63.4. Điều kiện toàn hệ được Go-live Approved**

Toàn hệ chỉ được Go-live Approved khi:

1.  Production Ready = YES.

2.  Release Approved = YES.

3.  Go-live decision record có hiệu lực.

4.  Owner cuối cùng duyệt.

5.  Scope go-live rõ.

6.  Kênh go-live rõ.

7.  SKU/payment/shipping/AI/Ads/Live/IVR scope rõ.

8.  Rollback condition rõ.

9.  Monitoring owner rõ.

10. Incident path rõ.

11. Không có P0/dependency/evidence conflict.

12. Không có pack upstream chưa release trong scope.

Nếu thiếu một điều kiện:

GLOBAL_GO_LIVE_APPROVED = NO

**64. FINAL FAIL GATE — TOÀN HỆ GINSENGFOOD**

**64.1. Toàn hệ phải BLOCKED nếu có lỗi P0**

Toàn hệ hoặc release scope phải BLOCKED nếu có một trong các lỗi:

1.  Payment sai.

2.  Order state sai.

3.  AI hardcode giá/tồn kho/chính sách.

4.  Gateway tự tạo order.

5.  Ads scale trên revenue chưa verified.

6.  MC AI Live chốt đơn public.

7.  IVR tự hủy đơn.

8.  SIM Gateway cập nhật order.

9.  Warehouse bán hàng chưa release.

10. Public Trace leak nội bộ.

11. Recall/Sale Lock fail.

12. Evidence thiếu hoặc chưa accepted.

13. Smoke fail.

14. Security fail.

15. Owner chưa sign-off.

16. Release decision chưa có.

17. Go-live decision chưa có.

18. Downstream phụ thuộc upstream chưa release.

**64.2. Toàn hệ phải RELEASE_HOLD nếu có incident chưa rõ**

Nếu đã release một phần nhưng phát sinh incident chưa phân loại, trạng thái phải chuyển:

GLOBAL_GATEWAY_STATUS = RELEASE_HOLD

Không được tiếp tục mở rộng production, scale ads, mở live, mở IVR hoặc mở thêm SKU khi incident chưa được phân tích và owner chưa quyết định.

**64.3. Toàn hệ phải ROLLBACK_REQUIRED nếu incident nghiêm trọng**

Nếu incident chạm vào payment, order, dữ liệu khách hàng, claim sức khỏe, trace/recall, sale lock, IVR hủy sai, hoặc public trace leak, trạng thái phải chuyển:

GLOBAL_GATEWAY_STATUS = ROLLBACK_REQUIRED

Rollback phải có evidence và owner decision.

**65. RELEASE CONTROL BY DOMAIN**

**65.1. Operational Core Release Control**

Operational Core chỉ được release khi:

1.  Production / warehouse / inventory / trace / recall / sale lock smoke pass.

2.  Batch release đúng.

3.  Warehouse receipt đúng.

4.  Inventory ledger append-only.

5.  Public Trace whitelist-only.

6.  Recall/Sale Lock chặn bán thật.

7.  Evidence accepted.

8.  Owner sign-off.

**65.2. Commerce Runtime Release Control**

Commerce Runtime chỉ được release khi:

1.  Quote Snapshot đúng.

2.  Cart draft không thành official order.

3.  Order State Machine đúng.

4.  Payment confirmation đúng.

5.  Shipping/VAT/payment method runtime đúng.

6.  Direct bank transfer không hardcode tài khoản.

7.  Evidence accepted.

8.  Owner sign-off.

**65.3. AI Advisor Release Control**

AI Advisor chỉ được release khi:

1.  Product resolver pass.

2.  Price/program/stock/policy runtime pass.

3.  Claim Guard pass.

4.  Health Guard pass.

5.  OOS Guard pass.

6.  Customer Care Before Next Sale pass.

7.  Quote/order draft qua Commerce Runtime.

8.  Evidence accepted.

9.  Owner sign-off.

**65.4. Facebook Gateway Release Control**

Facebook Gateway chỉ được release khi:

1.  Public/private boundary pass.

2.  Messenger handoff pass.

3.  Privacy Guard pass.

4.  No order creation outside Commerce pass.

5.  Health-sensitive routing pass.

6.  Complaint routing pass.

7.  Policy/spam guard pass.

8.  Evidence accepted.

9.  Owner sign-off.

**65.5. Ads Measurement Release Control**

Ads Measurement chỉ được release khi:

1.  Data Quality PASS.

2.  Attribution Rule PASS.

3.  Verified Revenue PASS.

4.  ROAS official rule PASS.

5.  Scale Gate PASS.

6.  Stop Gate PASS.

7.  Evidence accepted.

8.  Owner sign-off.

**65.6. MC AI Live Release Control**

MC AI Live chỉ được release khi:

1.  Live Plan pass.

2.  Product Scope pass.

3.  Script Registry pass.

4.  Claim Guard pass.

5.  Privacy Guard pass.

6.  Private handoff pass.

7.  Risk P0 pass.

8.  No fake urgency/scarcity pass.

9.  Evidence accepted.

10. Owner sign-off.

**65.7. IVR Release Control**

IVR chỉ được release khi:

1.  CALL_PURPOSE = ORDER_CONFIRMATION_ONLY.

2.  SIM capacity pass.

3.  Deadline-aware scheduler pass.

4.  Golden Hour attempt rule pass.

5.  24/7 attempt rule pass.

6.  Call result classification pass.

7.  Core Order State Machine final decision pass.

8.  No direct order update from SIM Gateway pass.

9.  Cancellation notice boundary pass.

10. Security/capacity smoke pass.

11. Evidence accepted.

12. Owner sign-off.

**66. PACK-10 FINAL ACCEPTANCE CRITERIA**

**66.1. PACK-10 được xem là Documentation Complete khi**

PACK-10 V1.0 CLEAN FINAL được xem là Documentation Complete khi có đủ:

1.  Completion Principles.

2.  Pack Registry.

3.  Source-of-truth Boundary.

4.  No-bypass Release Rule.

5.  Evidence Registry.

6.  Smoke Status Model.

7.  P0 Blocker Registry.

8.  Pack Completion Matrix.

9.  Gateway Decision Model.

10. Completion Report Control.

11. Production Ready Rule.

12. Release Ready Rule.

13. Go-live Approved Rule.

14. Owner Decision Model.

15. Rollback/Recovery Control.

16. Downstream Dependency Control.

17. Final Smoke Matrix.

18. Done Gate.

19. Fail Gate.

20. Final Release Status.

21. Final Conclusion.

**66.2. PACK-10 Documentation Complete không làm toàn hệ Production Ready**

PACK-10 hoàn tất tài liệu chỉ có nghĩa:

Bộ governance release readiness đã được khóa.

PACK-10 hoàn tất không có nghĩa:

- PACK-01 đến PACK-09 đã implementation complete.

- Smoke đã pass.

- Evidence đã accepted.

- Security đã pass.

- Owner đã sign-off.

- Release đã approved.

- Go-live đã approved.

- Production đã ready.

**67. PACK-10 FINAL RELEASE STATUS**

**67.1. Trạng thái PACK-10**

| **Trạng thái**                      | **Giá trị**                                                    |
|-------------------------------------|----------------------------------------------------------------|
| PACK-10_DOCUMENTATION_STATUS        | COMPLETE                                                       |
| PACK-10_VERSION                     | V1.0 CLEAN FINAL                                               |
| PACK-10_ROLE                        | Completion / Evidence / Gateway / Release Readiness Governance |
| PACK-10_SCOPE                       | Governance / Domain / Technical Decision                       |
| PACK-10_REPLACES_PACK_01_TO_09      | NO                                                             |
| PACK-10_CAN_PASS_OTHER_PACKS        | NO                                                             |
| PACK-10_CAN_APPROVE_GO_LIVE         | NO, chỉ khóa điều kiện go-live                                 |
| PACK-10_CAN_SUMMARIZE_EVIDENCE      | YES                                                            |
| PACK-10_CAN_OVERRIDE_OWNER_PACK     | NO                                                             |
| PACK-10_CAN_OVERRIDE_OWNER_DECISION | NO                                                             |

**67.2. Trạng thái toàn hệ sau PACK-10**

| **Trạng thái toàn hệ**  | **Giá trị mặc định** |
|-------------------------|----------------------|
| GLOBAL_COMPLETION_PASS  | NO                   |
| GLOBAL_RELEASE_READY    | NO                   |
| GLOBAL_PRODUCTION_READY | NO                   |
| GLOBAL_RELEASE_APPROVED | NO                   |
| GLOBAL_GO_LIVE_APPROVED | NO                   |
| GLOBAL_GATEWAY_STATUS   | BLOCKED              |
| GLOBAL_EVIDENCE_STATUS  | PENDING              |
| GLOBAL_SMOKE_STATUS     | PENDING_EVIDENCE     |
| GLOBAL_SECURITY_STATUS  | PENDING_EVIDENCE     |
| GLOBAL_OWNER_SIGN_OFF   | NO                   |

**68. PACK-10 FINAL CONCLUSION**

PACK-10 — COMPLETION / EVIDENCE / GATEWAY / RELEASE READINESS PACK — V1.0 CLEAN FINAL đã hoàn tất vai trò governance/domain/technical decision cho lớp release readiness của toàn bộ hệ thống Ginsengfood.

PACK-10 đã khóa:

1.  PACK-10 là pack tổng hợp release readiness, không thay thế PACK-01 đến PACK-09.

2.  PACK-10 không tự làm PASS bất kỳ pack nào.

3.  PACK-10 chỉ tổng hợp evidence accepted, smoke result, P0 blocker, owner sign-off và release decision.

4.  Documentation Complete không phải Production Ready.

5.  Implementation Complete không phải Release Ready.

6.  Smoke Pass không phải Release Approved.

7.  Evidence Accepted không phải Go-live Approved.

8.  Không có Evidence Accepted thì không Completion PASS.

9.  Không có Smoke Pass thì không Release Ready.

10. Không có Owner Sign-off thì không Release Approved.

11. Không có Release Decision thì không Go-live Approved.

12. Không được dùng lời xác nhận miệng để PASS.

13. Không được dùng dashboard làm source-of-truth.

14. Không được cho downstream phụ thuộc production vào pack upstream chưa release.

15. Không được cho AI / Ads / CRM / Gateway / IVR / MC Live / Commerce vượt source-of-truth boundary.

16. Không được release nếu còn P0 blocker.

17. Không được go-live nếu thiếu rollback/recovery/monitoring/incident owner.

18. Nếu evidence stale/conflict/expired thì phải retest hoặc owner review.

19. Nếu incident chưa rõ thì RELEASE_HOLD.

20. Nếu incident nghiêm trọng thì ROLLBACK_REQUIRED.

Kết luận cuối cùng:

PACK-10 V1.0 CLEAN FINAL hoàn tất về mặt tài liệu governance.  
Tuy nhiên toàn bộ hệ thống Ginsengfood vẫn chưa được gọi là Production Ready, Release Approved hoặc Go-live Approved nếu chưa có đầy đủ implementation, test, smoke, security, accepted evidence, P0 cleared, owner sign-off, release decision và go-live decision theo đúng scope.

Trạng thái cuối phải giữ:

GLOBAL_GATEWAY_STATUS = BLOCKED  
GLOBAL_COMPLETION_PASS = NO  
GLOBAL_RELEASE_READY = NO  
GLOBAL_PRODUCTION_READY = NO  
GLOBAL_RELEASE_APPROVED = NO  
GLOBAL_GO_LIVE_APPROVED = NO

cho đến khi toàn bộ điều kiện của PACK-10 được đáp ứng bằng evidence accepted và owner decision hợp lệ.

**KẾT THÚC PACK-10**

**COMPLETION / EVIDENCE / GATEWAY / RELEASE READINESS PACK**

**V1.0 CLEAN FINAL**
