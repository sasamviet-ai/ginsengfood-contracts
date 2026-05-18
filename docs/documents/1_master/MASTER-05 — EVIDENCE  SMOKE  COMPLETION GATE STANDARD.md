**MASTER-05 — EVIDENCE / SMOKE / COMPLETION GATE STANDARD**

**EVIDENCE PACKAGE / SMOKE MATRIX / COMPLETION REPORT / GATEWAY PASS / RELEASE EVIDENCE CONTROL**

**V1.0 CLEAN FINAL**

**PHẦN 1/4 — EVIDENCE PRINCIPLES / SMOKE MODEL / COMPLETION GATE BOUNDARY / RELEASE EVIDENCE RULE**

**1. MỤC ĐÍCH CỦA MASTER-05**

MASTER-05 quy định chuẩn Evidence, Smoke, Completion Gate và Release Evidence Control cho toàn bộ hệ thống Ginsengfood.

Mục tiêu của MASTER-05 là bảo đảm mọi tuyên bố PASS, READY, GATEWAY PASS, PRODUCTION READY, RELEASE APPROVED hoặc GO-LIVE APPROVED đều phải có bằng chứng hợp lệ, smoke hợp lệ, trace hợp lệ, audit hợp lệ và owner sign-off hợp lệ.

MASTER-05 không phải tài liệu code.

MASTER-05 không phải tài liệu database schema.

MASTER-05 không phải tài liệu API/DTO.

MASTER-05 không phải tài liệu UI.

MASTER-05 không phải tài liệu worker.

MASTER-05 là tài liệu governance kỹ thuật dùng để khóa nguyên tắc bằng chứng, nguyên tắc smoke, nguyên tắc completion gate, nguyên tắc release control và nguyên tắc không được gọi PASS khi chưa có evidence accepted.

**2. VAI TRÒ CỦA MASTER-05 TRONG BỘ MASTER**

MASTER-05 đứng sau MASTER-00, MASTER-01, MASTER-02, MASTER-03 và MASTER-04.

MASTER-00 quy định governance index và trạng thái tổng thể.

MASTER-01 quy định Source-of-Truth, Owner Core, Runtime Resolver, Consumer Boundary, Guard, Evidence và Release Gate.

MASTER-02 quy định Cross-Pack Dependency và 16 business domain P0.

MASTER-03 quy định Traceability ID, ID ownership, correlation, idempotency, audit và evidence trace.

MASTER-04 quy định Runtime Resolver, Guard, Priority Matrix, Suppression, Fallback, Handoff và Conflict Resolution.

MASTER-05 quy định bằng chứng nào chứng minh các rule trên đã hoạt động, smoke nào bắt buộc chạy, gate nào được quyền xét PASS và điều kiện nào mới được phép nâng trạng thái release.

Nếu MASTER-03 trả lời câu hỏi **“ID nào dùng để truy vết?”**, MASTER-04 trả lời câu hỏi **“Runtime được phép quyết định gì?”**, thì MASTER-05 trả lời câu hỏi **“Bằng chứng nào chứng minh hệ thống đã làm đúng và khi nào mới được gọi PASS?”**

**3. NGUYÊN TẮC CỐT LÕI CỦA EVIDENCE**

**3.1. Không evidence thì không PASS**

Hệ thống Ginsengfood bắt buộc áp dụng nguyên tắc:

Không có evidence hợp lệ thì không PASS.

Không có smoke hợp lệ thì không PASS.

Không có audit hợp lệ thì không PASS.

Không có owner sign-off hợp lệ thì không release approved.

Không có completion gate PASS thì không Gateway PASS.

Không được dùng lời khẳng định, checklist chữ, nội dung tài liệu, log rời rạc, ảnh rời rạc hoặc ghi chú nội bộ để thay thế evidence package hợp lệ.

**3.2. Evidence phải có ID**

Mọi evidence dùng cho smoke, gate, release, Gateway, security, App Review, UAT, production readiness hoặc owner sign-off đều phải có evidence_id.

Evidence không có ID không được dùng để xét PASS.

Evidence không trace được smoke không được dùng để xét PASS.

Evidence không trace được domain/dependency không được dùng để xét PASS.

Evidence không có audit không được dùng để xét PASS.

**3.3. Evidence phải có phạm vi**

Một evidence hợp lệ phải ghi rõ phạm vi chứng minh.

Phạm vi evidence có thể là:

- Unit evidence.

- Resolver evidence.

- Guard evidence.

- Domain evidence.

- Cross-pack evidence.

- E2E evidence.

- Security evidence.

- App Review evidence.

- UAT evidence.

- Gateway evidence.

- Payment evidence.

- Shipping evidence.

- Order evidence.

- CRM evidence.

- Production readiness evidence.

- Release evidence.

- Owner sign-off evidence.

Evidence chỉ được dùng trong phạm vi đã được khai báo và approved.

Không được lấy evidence của domain này để PASS domain khác nếu không có mapping rõ.

**3.4. Evidence phải có trạng thái**

MASTER-05 khóa bộ trạng thái evidence:

- DRAFT

- SUBMITTED

- UNDER_REVIEW

- ACCEPTED

- REJECTED

- VOID

- SUPERSEDED

Chỉ evidence ở trạng thái **ACCEPTED** mới được dùng để xét PASS.

Evidence ở trạng thái DRAFT, SUBMITTED, UNDER_REVIEW, REJECTED, VOID hoặc SUPERSEDED không được dùng để PASS smoke, gate, completion report, Gateway, release hoặc go-live.

**3.5. Evidence phải có audit**

Mọi evidence P0 phải có audit.

Audit evidence phải ghi nhận:

- Evidence được tạo bởi nguồn nào.

- Evidence thuộc domain nào.

- Evidence chứng minh smoke nào.

- Evidence gắn với dependency nào.

- Evidence được review bởi ai hoặc core nào.

- Evidence được accepted/rejected vì sao.

- Evidence có bị void/superseded không.

- Evidence đang hỗ trợ gate nào.

- Evidence có đủ phạm vi để PASS hay không.

**4. NGUYÊN TẮC CỐT LÕI CỦA SMOKE**

**4.1. Smoke là bằng chứng vận hành tối thiểu**

Smoke trong Ginsengfood là bài kiểm tra tối thiểu để chứng minh một rule, một resolver, một guard, một dependency, một domain hoặc một E2E flow hoạt động đúng theo governance.

Smoke không phải mô tả lý thuyết.

Smoke không phải checklist chữ.

Smoke không phải “dev nói đã test”.

Smoke phải có kết quả kiểm tra, evidence, audit và trace.

**4.2. Smoke phải có ID**

Mọi smoke phải có smoke_id.

Smoke không có ID không được dùng trong Completion Gate.

Smoke không có evidence không được PASS.

Smoke không có trace về domain/dependency không được dùng để xét Gateway hoặc Release.

**4.3. Smoke phải có điều kiện PASS rõ**

Một smoke hợp lệ phải có:

- Mục tiêu smoke.

- Domain liên quan.

- Dependency liên quan.

- Resolver/Guard liên quan nếu có.

- Input tối thiểu.

- Output mong đợi.

- Blocked-if-missing rule.

- Evidence bắt buộc.

- Audit bắt buộc.

- PASS condition.

- FAIL/BLOCK condition.

Không có PASS condition rõ thì smoke không đủ điều kiện làm gate evidence.

**4.4. Smoke phải kiểm tra cả PASS và BLOCK**

Smoke không chỉ kiểm tra trường hợp thành công.

Smoke bắt buộc phải kiểm tra cả trường hợp bị block, suppress, fallback, handoff hoặc review.

Ví dụ:

- Quote smoke phải kiểm tra báo giá thành công khi có QuoteSnapshot và block khi thiếu QuoteSnapshot.

- Payment smoke phải kiểm tra payment pending khi thiếu Accounting Review và không tự PAID khi khách gửi ảnh giao dịch.

- Gateway smoke phải kiểm tra handoff success và handoff fail.

- CRM smoke phải kiểm tra gửi thành công và suppression khi có complaint.

- Evidence smoke phải kiểm tra accepted evidence và rejected evidence.

- Release smoke phải kiểm tra gate PASS và gate BLOCK khi thiếu owner sign-off.

**5. NGUYÊN TẮC COMPLETION GATE**

**5.1. Completion Gate là quyết định governance, không phải báo cáo**

Completion Gate là điểm quyết định governance có ID, có evidence, có smoke, có audit và có owner sign-off nếu thuộc phạm vi release.

Completion Report chỉ là tài liệu tổng hợp trạng thái.

Completion Report không thay thế Completion Gate.

Không được gọi Gateway PASS chỉ vì Completion Report viết “xong”.

Không được gọi Production Ready chỉ vì tài liệu đã đầy đủ.

Không được gọi Release Approved nếu chưa có owner sign-off hợp lệ.

**5.2. Completion Gate phải có ID**

Mọi Completion Gate phải có completion_gate_id.

Completion Gate không có ID không được dùng để quyết định release.

Completion Gate không trace được evidence package không được PASS.

Completion Gate không trace được owner sign-off không được release approved.

**5.3. Completion Gate phải kiểm tra P0 Evidence**

Completion Gate phải kiểm tra đầy đủ P0 evidence theo domain.

Các nhóm P0 evidence tối thiểu gồm:

- Source-of-Truth evidence.

- Dependency evidence.

- Traceability ID evidence.

- Runtime Resolver evidence.

- Guard evidence.

- Suppression evidence.

- Fallback evidence.

- Handoff evidence.

- Conflict resolution evidence.

- Quote evidence.

- Order evidence.

- Payment evidence.

- Shipping evidence.

- CRM evidence.

- Member evidence.

- Diamond evidence.

- Gateway evidence.

- Official Contact evidence.

- Health/Complaint/Privacy/Counterfeit evidence.

- Security evidence.

- E2E evidence.

- Owner sign-off evidence.

Thiếu P0 evidence thì Completion Gate không PASS.

**5.4. Completion Gate không được PASS nếu còn blocker**

Completion Gate không được PASS nếu còn blocker mở.

Các blocker gồm:

- Missing evidence.

- Missing smoke.

- Missing audit.

- Missing owner sign-off.

- Missing Source-of-Truth.

- Missing Runtime Resolver.

- Missing Guard.

- Missing Traceability ID.

- Hardcode runtime data.

- Consumer tự suy luận rule.

- Security blocker.

- Gateway policy blocker.

- Payment blocker.

- Shipping blocker.

- CRM suppression blocker.

- Complaint open.

- Privacy case open.

- Health review open.

- Counterfeit case open.

- Payment dispute open.

- Delivery issue open.

- Member dispute open.

- Commission dispute open.

- P0 dependency missing.

**6. NGUYÊN TẮC RELEASE EVIDENCE CONTROL**

**6.1. Governance PASS không đồng nghĩa Release Approved**

Một MASTER hoặc PACK có thể đạt Governance PASS ở tầng tài liệu nhưng vẫn chưa được release.

Governance PASS nghĩa là tài liệu đã đủ chuẩn để làm nền cho implementation.

Release Approved chỉ hợp lệ khi có:

- Implementation theo đúng governance.

- Evidence accepted.

- Smoke PASS.

- E2E smoke PASS nếu thuộc phạm vi.

- Security evidence PASS nếu thuộc phạm vi.

- App Review evidence PASS nếu thuộc phạm vi.

- Owner sign-off hợp lệ.

- Completion Gate PASS.

- No open blocker.

- Audit đầy đủ.

**6.2. Gateway PASS có điều kiện riêng**

Gateway chỉ được xem xét PASS khi tất cả điều kiện sau đạt:

- All P0 gates PASS.

- Evidence package complete.

- E2E smoke PASS.

- Gateway smoke PASS.

- Security/App Review evidence PASS nếu thuộc phạm vi.

- Public/private boundary smoke PASS.

- Messenger handoff smoke PASS.

- Handoff delivery log smoke PASS.

- PII/payment/health public protection smoke PASS.

- Owner sign-off PASS.

- Completion Gate PASS.

- Completion Report không còn PENDING_EVIDENCE.

Nếu thiếu bất kỳ điều kiện P0 nào, Gateway vẫn BLOCKED.

**6.3. Production Ready có điều kiện riêng**

Production Ready chỉ được chuyển YES khi hệ thống đã có bằng chứng accepted cho:

- Implementation hoàn tất trong phạm vi release.

- Runtime Resolver hoạt động.

- Guard hoạt động.

- Traceability ID hoạt động.

- Audit hoạt động.

- Evidence Registry hoạt động.

- Smoke PASS.

- E2E smoke PASS.

- Security review PASS.

- Release rollback/incident handling nếu thuộc phạm vi.

- Owner sign-off PASS.

- Completion Gate PASS.

Nếu chỉ có tài liệu mà chưa có implementation/evidence, Production Ready vẫn là NO.

**6.4. Release Approved có điều kiện riêng**

Release Approved chỉ hợp lệ khi:

- Completion Gate PASS.

- Owner Sign-off PASS.

- Required P0 evidence accepted.

- Required E2E smoke PASS.

- Required security/app review/UAT PASS nếu thuộc phạm vi.

- No open blocker.

- Audit đầy đủ.

- Rollback/incident plan sẵn sàng nếu thuộc phạm vi release.

Nếu thiếu owner sign-off, Release Approved vẫn là NO.

**6.5. Go-live Approved có điều kiện riêng**

Go-live Approved là quyết định cuối cùng.

Go-live Approved chỉ được xét khi:

- Production Ready = YES.

- Release Approved = YES.

- Gateway PASS nếu thuộc phạm vi.

- Payment/Shipping/Order/CRM/Gateway P0 gates PASS nếu thuộc phạm vi.

- Security/App Review/Meta permission PASS nếu thuộc phạm vi.

- Owner phê duyệt go-live.

- Rollback plan, monitoring, incident handling đã sẵn sàng nếu thuộc phạm vi.

Nếu chưa đủ điều kiện, Go-live Approved vẫn là NO.

**7. EVIDENCE PACKAGE MODEL**

**7.1. Evidence Package là gì**

Evidence Package là tập hợp bằng chứng có ID, có trạng thái, có phạm vi, có smoke mapping, có audit và có owner review để chứng minh một domain, một dependency, một E2E flow hoặc một gate đã đạt điều kiện.

Evidence Package không phải thư mục file rời rạc.

Evidence Package không phải ảnh chụp màn hình rời.

Evidence Package không phải checklist thủ công không trace.

Evidence Package là cấu trúc governance dùng để xét PASS.

**7.2. Thành phần tối thiểu của Evidence Package**

Một Evidence Package tối thiểu phải có:

- Package scope.

- Domain scope.

- Dependency scope.

- Smoke list.

- Evidence list.

- Evidence status.

- Evidence owner.

- Reviewer/approver nếu có.

- Audit trail.

- Blocker list.

- Missing evidence list.

- Expiry/revalidation condition nếu có.

- Completion Gate mapping.

- Owner Sign-off mapping nếu thuộc release.

**7.3. Evidence Package phải map với 16 business domain**

Evidence Package phải map tối thiểu theo 16 business domain P0:

1.  Governance / Source-of-Truth.

2.  Product Knowledge / Claim / Brand / Scientific Proof.

3.  Customer Identity / Customer Memory.

4.  Segment Recommendation / Product Recommendation.

5.  CRM 12-Month / Message Trigger / Suppression.

6.  Member Lifecycle / Rights / Downgrade / Dispute.

7.  Diamond / Affiliate / Entrepreneurship / Distributor Boundary.

8.  Pricing / Program / 24/7 / Golden Hour / QuoteSnapshot.

9.  Program / Sellable / Product Activation / Production Signal.

10. Payment / Bank Transfer / Accounting Review.

11. Shipping / Tracking / ETA / COD.

12. Order / OrderDraft / CustomerConfirmation / IVR.

13. Gateway / Public Comment / Messenger Handoff / Moderation.

14. Official Contact / Phone Number Registry.

15. Health Boundary / Complaint / Priority Conflict.

16. Evidence / Completion Report / Gateway Gate / Security.

Không domain P0 nào được thiếu evidence mapping.

**8. SMOKE MODEL**

**8.1. Smoke theo tầng**

MASTER-05 quy định smoke theo 5 tầng:

**Tầng 1 — Unit Smoke**  
Kiểm tra từng resolver, guard hoặc rule riêng lẻ.

**Tầng 2 — Domain Smoke**  
Kiểm tra một business domain đầy đủ.

**Tầng 3 — Cross-Pack Smoke**  
Kiểm tra luồng đi qua nhiều pack.

**Tầng 4 — E2E Smoke**  
Kiểm tra hành trình nghiệp vụ từ event đến action cuối.

**Tầng 5 — Release Smoke**  
Kiểm tra đủ điều kiện gate, owner sign-off, rollback, security và release.

**8.2. Smoke phải kiểm tra negative path**

Mỗi smoke quan trọng phải có negative path.

Không chỉ test điều kiện đúng.

Phải test điều kiện thiếu, sai, conflict, stale, blocked, suppressed, fallback, handoff và review.

Ví dụ:

- Missing QuoteSnapshot.

- Missing CustomerConfirmation.

- Missing PaymentReference.

- Missing AccountingReview.

- Missing ShippingEvent.

- Missing CustomerIdentity.

- Missing ProductActivation.

- Missing OfficialContact.

- Missing Evidence.

- Handoff failed.

- CRM suppression active.

- Product stock = 0.

- Complaint open.

- Privacy case open.

- Evidence rejected.

- Owner sign-off missing.

**8.3. Smoke phải có accepted evidence**

Smoke chỉ PASS khi có evidence accepted.

Smoke không PASS khi:

- Evidence mới submitted.

- Evidence đang under review.

- Evidence rejected.

- Evidence void.

- Evidence superseded.

- Evidence không đúng scope.

- Evidence không trace được smoke.

- Evidence không trace được domain/dependency.

- Evidence không có audit.

**9. COMPLETION REPORT CONTROL**

**9.1. Completion Report là gì**

Completion Report là tài liệu tổng hợp trạng thái của các domain, smoke, evidence, blocker, gate và release readiness.

Completion Report không phải Completion Gate.

Completion Report không tự tạo PASS.

Completion Report không thay thế owner sign-off.

Completion Report không thay thế evidence accepted.

Completion Report không thay thế E2E smoke.

**9.2. Trạng thái chuẩn của Completion Report**

MASTER-05 khóa các trạng thái chuẩn:

- NOT_STARTED

- IN_PROGRESS

- PENDING_EVIDENCE

- UNDER_REVIEW

- BLOCKED

- GATE_REVIEW_READY

- GATE_PASS

- RELEASE_REVIEW_READY

- RELEASE_APPROVED

- GO_LIVE_APPROVED

Mặc định khi chưa đủ evidence, Completion Report phải là PENDING_EVIDENCE hoặc BLOCKED tùy điều kiện.

Không được mặc định GATE_PASS.

**9.3. Completion Report phải liệt kê blocker**

Completion Report phải thể hiện:

- Missing evidence.

- Missing smoke.

- Missing owner sign-off.

- Missing resolver.

- Missing guard.

- Missing ID trace.

- Missing audit.

- Security blocker.

- Gateway blocker.

- Payment blocker.

- Shipping blocker.

- CRM blocker.

- Open complaint/privacy/health/counterfeit/payment/delivery/member/commission dispute.

- Hardcode violation.

- Consumer inference violation.

Không được ẩn blocker để làm đẹp trạng thái.

**10. OWNER SIGN-OFF PRINCIPLES**

**10.1. Owner sign-off là điều kiện release**

Owner sign-off là bằng chứng phê duyệt của người hoặc core có thẩm quyền đối với gate hoặc release.

Owner review không đồng nghĩa owner sign-off.

Owner comment không đồng nghĩa owner sign-off.

Owner xem qua không đồng nghĩa owner sign-off.

Release Approved chỉ hợp lệ khi có owner_signoff_id hợp lệ.

**10.2. Owner sign-off phải có phạm vi**

Owner sign-off phải ghi rõ phạm vi:

- Domain nào.

- Pack nào.

- Gate nào.

- Release nào.

- Evidence package nào.

- Smoke nào.

- Thời điểm nào.

- Điều kiện nào.

- Ngoại lệ nào nếu có.

Owner sign-off không được dùng vượt phạm vi.

**10.3. Owner sign-off phải immutable**

Owner sign-off không được sửa ngược.

Nếu Owner rút lại hoặc yêu cầu review lại, phải có revocation/supersede event mới.

Không được sửa sign-off cũ để thay đổi thời điểm, phạm vi, người phê duyệt hoặc kết luận.

**11. BLOCKER CONTROL**

**11.1. Blocker là gì**

Blocker là điều kiện khiến một smoke, gate, release hoặc go-live không được PASS.

Blocker không phải ghi chú phụ.

Blocker là điều kiện chặn chính thức.

Blocker phải có ID, owner, reason, status và audit.

**11.2. Nhóm blocker chính**

MASTER-05 khóa các nhóm blocker:

- Evidence blocker.

- Smoke blocker.

- Resolver blocker.

- Guard blocker.

- ID trace blocker.

- Audit blocker.

- Security blocker.

- Gateway blocker.

- Payment blocker.

- Shipping blocker.

- CRM blocker.

- Order blocker.

- Product activation blocker.

- Member blocker.

- Diamond blocker.

- Complaint/privacy/health/counterfeit blocker.

- Owner sign-off blocker.

- Release blocker.

- Go-live blocker.

**11.3. Blocker phải được đóng bằng evidence**

Blocker không được đóng bằng lời nói.

Blocker không được đóng bằng “đã sửa” nếu chưa có evidence.

Blocker không được đóng bằng checklist text nếu thiếu smoke.

Blocker chỉ được đóng khi có:

- Root cause hoặc missing condition được xử lý.

- Evidence mới hoặc evidence accepted.

- Smoke re-run nếu cần.

- Audit closure.

- Owner review/sign-off nếu cần.

**12. RELEASE STATUS BOUNDARY**

**12.1. Các trạng thái không được dùng lẫn nhau**

MASTER-05 khóa nguyên tắc không dùng lẫn các trạng thái:

- GOVERNANCE_PASS không phải PRODUCTION_READY.

- PRODUCTION_READY không phải RELEASE_APPROVED.

- RELEASE_APPROVED không phải GO_LIVE_APPROVED.

- COMPLETION_REPORT_DONE không phải COMPLETION_GATE_PASS.

- EVIDENCE_SUBMITTED không phải EVIDENCE_ACCEPTED.

- OWNER_REVIEWED không phải OWNER_SIGNED_OFF.

- GATE_REVIEW_READY không phải GATE_PASS.

- GATE_PASS không phải GO_LIVE_APPROVED.

- GATEWAY_REVIEW_READY không phải GATEWAY_PASS.

**12.2. Không được gọi Ready khi chưa đủ evidence**

Không được gọi Ready nếu:

- Evidence chưa accepted.

- Smoke chưa PASS.

- E2E chưa PASS.

- Security chưa PASS.

- Owner chưa sign-off.

- Completion Gate chưa PASS.

- Blocker còn mở.

- Runtime Resolver chưa hoạt động.

- Guard chưa hoạt động.

- Audit chưa hoạt động.

- Rollback/incident plan chưa sẵn sàng nếu thuộc phạm vi.

**13. NO-HARDCODE EVIDENCE RULE**

**13.1. Không hardcode trạng thái evidence/gate**

Không được hardcode:

- Evidence PASS.

- Smoke PASS.

- Completion Gate PASS.

- Gateway PASS.

- Production Ready YES.

- Release Approved YES.

- Go-live Approved YES.

- Owner sign-off.

- Security PASS.

- App Review PASS.

- UAT PASS.

Các trạng thái này phải được resolve từ Evidence / Gate / Release Core hợp lệ.

**13.2. Hardcode trạng thái PASS là blocker**

Nếu phát hiện hardcode trạng thái PASS, domain release phải BLOCKED.

Ví dụ:

- Template ghi Gateway PASS khi gate chưa PASS.

- Completion Report ghi Release Approved khi chưa có owner_signoff_id.

- Admin UI hiển thị Production Ready YES khi evidence còn pending.

- AI nói hệ thống đã sẵn sàng khi P0 gate chưa PASS.

- Gateway config mở production khi Completion Gate chưa PASS.

Các lỗi này là P0 blocker.

**14. KẾT LUẬN PHẦN 1/4**

PHẦN 1/4 của MASTER-05 khóa nền tảng Evidence, Smoke, Completion Gate và Release Evidence Control cho toàn bộ hệ thống Ginsengfood.

Từ thời điểm áp dụng MASTER-05:

- Không evidence thì không PASS.

- Evidence phải có ID.

- Evidence phải có trạng thái.

- Evidence phải có phạm vi.

- Evidence phải có audit.

- Evidence accepted mới được dùng PASS.

- Smoke phải có ID.

- Smoke phải có PASS condition rõ.

- Smoke phải kiểm tra cả PASS và BLOCK.

- Completion Gate là quyết định governance, không phải báo cáo.

- Completion Report không thay thế Completion Gate.

- Owner review không thay thế owner sign-off.

- Governance PASS không đồng nghĩa Release Approved.

- Gateway PASS có điều kiện riêng.

- Production Ready có điều kiện riêng.

- Release Approved có điều kiện riêng.

- Go-live Approved có điều kiện riêng.

- Blocker phải được đóng bằng evidence.

- Không hardcode trạng thái evidence/gate/release.

- Không gọi Ready/PASS chỉ vì tài liệu đã viết xong.

- Completion Report còn PENDING_EVIDENCE thì Gateway vẫn BLOCKED.

- Production Ready vẫn là NO nếu chưa có implementation, evidence, smoke, security, owner sign-off và gate PASS.

MASTER-05 tiếp tục ở PHẦN 2/4 với Evidence Registry by Domain, Required Evidence, Evidence Owner, Evidence Status và Blocked-if-Missing Rule.

**PHẦN 2/4 — EVIDENCE REGISTRY BY DOMAIN / REQUIRED EVIDENCE / EVIDENCE OWNER / EVIDENCE STATUS / BLOCKED-IF-MISSING RULE**

PHẦN 2/4 khóa Evidence Registry theo 16 business domain P0, bám đúng nguyên tắc: Completion Report mặc định là PENDING_EVIDENCE, Gateway chỉ được xem xét khi toàn bộ P0 gates PASS, evidence package complete, E2E smoke PASS và owner sign-off PASS; không được gọi Ready/PASS chỉ vì tài liệu đã viết xong.

**15. NGUYÊN TẮC ĐỌC EVIDENCE REGISTRY**

**15.1. Evidence Registry là chuẩn governance bắt buộc**

Evidence Registry trong MASTER-05 là chuẩn bắt buộc để xác định:

- Domain nào cần evidence.

- Evidence nào là bắt buộc.

- Evidence Owner là ai.

- Evidence đang ở trạng thái nào.

- Evidence nào được dùng để PASS.

- Evidence nào không được dùng để PASS.

- Thiếu evidence nào thì gate phải BLOCKED.

- Evidence nào cần owner review.

- Evidence nào cần owner sign-off.

- Evidence nào phục vụ Gateway Gate.

- Evidence nào phục vụ Production Ready.

- Evidence nào phục vụ Release Approved.

- Evidence nào phục vụ Go-live Approved.

Evidence Registry không phải database schema.

Evidence Registry không phải API contract.

Evidence Registry không phải nơi lưu file kỹ thuật.

Evidence Registry là chuẩn kiểm soát bằng chứng để không domain nào được tự tuyên bố PASS.

**15.2. Mỗi domain P0 phải có evidence owner**

Mỗi business domain P0 phải có Evidence Owner rõ ràng.

Evidence Owner chịu trách nhiệm:

- Xác định evidence bắt buộc.

- Kiểm tra evidence đúng scope.

- Xác nhận evidence có trace.

- Đưa evidence vào review.

- Từ chối evidence không hợp lệ.

- Đề xuất accepted evidence cho gate.

- Gắn evidence với smoke.

- Gắn evidence với audit.

- Gắn evidence với completion gate nếu thuộc phạm vi release.

Consumer Pack không được tự nhận evidence là hợp lệ.

Consumer Pack không được tự chuyển evidence sang ACCEPTED.

Consumer Pack không được tự dùng ảnh/log/file rời rạc để PASS gate.

**15.3. Evidence phải có trạng thái thống nhất**

Toàn bộ evidence trong Ginsengfood dùng bộ trạng thái chuẩn:

- DRAFT

- SUBMITTED

- UNDER_REVIEW

- ACCEPTED

- REJECTED

- VOID

- SUPERSEDED

Chỉ evidence ở trạng thái **ACCEPTED** mới được dùng để xét PASS.

Các trạng thái còn lại không được dùng để PASS smoke, gate, Gateway, release hoặc go-live.

**15.4. Evidence phải có blocked-if-missing rule**

Mỗi domain phải quy định rõ: thiếu evidence nào thì action/gate nào bị chặn.

Không được để trạng thái thiếu evidence nhưng vẫn cho phép:

- Gateway PASS.

- Production Ready.

- Release Approved.

- Go-live Approved.

- Quote PASS.

- Order PASS.

- Payment PASS.

- Shipping PASS.

- CRM PASS.

- Diamond Commission PASS.

- Member Rights PASS.

- Official Contact PASS.

- Public Comment Gateway PASS.

- Health/Complaint/Privacy Guard PASS.

- Evidence Gate PASS.

**16. DOMAIN-01 — GOVERNANCE / SOURCE-OF-TRUTH EVIDENCE**

**16.1. Evidence Purpose**

Domain này chứng minh hệ thống có Source-of-Truth, Owner Core, Dependency Registry, Consumer Boundary, Release Gate và Audit Control rõ ràng.

Nếu domain này thiếu evidence, toàn bộ các domain downstream không được xem là có governance nền hợp lệ.

**16.2. Required Evidence**

Evidence bắt buộc:

- Evidence chứng minh source_id tồn tại cho từng nguồn dữ liệu chính.

- Evidence chứng minh domain_id tồn tại cho 16 business domain.

- Evidence chứng minh dependency_id được map đúng Owner Core và Consumer Pack.

- Evidence chứng minh Owner Core không bị trùng quyền.

- Evidence chứng minh Consumer chỉ tiêu thụ trong boundary.

- Evidence chứng minh Release Gate không bị bypass.

- Evidence chứng minh hardcode runtime data bị chặn.

- Evidence chứng minh audit ghi source/dependency/gate decision.

- Evidence chứng minh Completion Report không tự tạo PASS.

**16.3. Evidence Owner**

Evidence Owner:

- Master Governance Owner.

- Source-of-Truth Registry Owner.

- Dependency Registry Owner.

- Audit Owner.

- Release Gate Owner.

- Completion Report Owner.

**16.4. Evidence Status Rule**

Evidence chỉ được ACCEPTED khi:

- Source rõ.

- Domain rõ.

- Dependency rõ.

- Owner rõ.

- Consumer boundary rõ.

- Audit đầy đủ.

- Không có hardcode runtime data.

- Không có Consumer tự suy luận rule.

- Gate không bị pass khi thiếu evidence.

**16.5. Blocked-if-Missing Rule**

Nếu thiếu Governance / Source-of-Truth Evidence:

- Không domain nào được tuyên bố governance complete.

- Không dependency nào được xem là PASS.

- Completion Gate không PASS.

- Gateway vẫn BLOCKED.

- Production Ready vẫn NO.

- Release Approved vẫn NO.

- Go-live Approved vẫn NO.

**17. DOMAIN-02 — PRODUCT KNOWLEDGE / CLAIM / BRAND / SCIENTIFIC PROOF EVIDENCE**

**17.1. Evidence Purpose**

Domain này chứng minh tri thức sản phẩm, claim, brand wording, scientific proof và public-safe wording được lấy từ nguồn hợp lệ, không bịa claim, không thuốc hóa sản phẩm và không vượt ranh giới pháp lý/truyền thông.

**17.2. Required Evidence**

Evidence bắt buộc:

- Evidence Product Knowledge Source cho từng nhóm sản phẩm/SKU.

- Evidence Claim Whitelist.

- Evidence Claim Blocklist.

- Evidence Public-safe Wording.

- Evidence Brand Voice “Ngon như Mẹ nấu — thương ngay từ vị đầu tiên”.

- Evidence Sâm Savigin / Vietnam Ocean Ginseng là dược liệu trung tâm trong nội dung được phép.

- Evidence Scientific Proof approved nếu dùng chứng cứ khoa học.

- Evidence chứng minh không bịa link/kết luận khoa học.

- Evidence chứng minh không dùng claim điều trị/thay thuốc/chữa bệnh.

- Evidence Health Boundary khi khách nêu bệnh.

- Evidence Product Effectiveness được dùng đúng scope.

- Evidence public/private wording không lộ nội dung nội bộ.

**17.3. Evidence Owner**

Evidence Owner:

- Product Knowledge Owner.

- Claim Whitelist Owner.

- Brand Voice Owner.

- Scientific Evidence Owner.

- Public Wording Guard Owner.

- Health Boundary Owner nếu claim liên quan sức khỏe.

**17.4. Evidence Status Rule**

Evidence chỉ ACCEPTED khi:

- Claim có nguồn rõ.

- Wording được public-safe.

- Scientific proof đã được owner approved.

- Không có nội dung thuốc hóa.

- Không bịa nghiên cứu.

- Không dùng bằng chứng ngoài phạm vi.

- Có audit claim decision.

**17.5. Blocked-if-Missing Rule**

Nếu thiếu Product Knowledge / Claim Evidence:

- AI không được dùng claim sâu.

- CRM không được dùng claim bán hàng.

- Gateway không được trả lời claim public.

- Landing Page/ADS/MC AI không được dùng claim đó.

- Scientific proof không được nhắc nếu chưa approved.

- Health-sensitive response phải fallback hoặc handoff.

- Gate claim không PASS.

**18. DOMAIN-03 — CUSTOMER IDENTITY / CUSTOMER MEMORY EVIDENCE**

**18.1. Evidence Purpose**

Domain này chứng minh hệ thống biết khách là ai trước khi cá nhân hóa, báo quyền lợi, gửi CRM, gợi ý sản phẩm, áp Diamond/referral hoặc nhắc lịch sử mua.

**18.2. Required Evidence**

Evidence bắt buộc:

- Evidence Customer Identity Resolution.

- Evidence Customer Type Resolution: NEW / EXISTING / MEMBER / DIAMOND / buyer_from_diamond_link nếu có.

- Evidence Customer Memory Snapshot.

- Evidence last purchase trace nếu AI nhắc lịch sử mua.

- Evidence open case check.

- Evidence privacy boundary check.

- Evidence customer context trước quote/member/Diamond/CRM.

- Evidence care-before-next-sale với khách cũ.

- Evidence không cá nhân hóa khi thiếu identity.

- Evidence không nhắc lịch sử mua khi thiếu memory snapshot.

- Evidence audit cho identity resolution.

**18.3. Evidence Owner**

Evidence Owner:

- Customer Identity Owner.

- Customer Memory Owner.

- Privacy Owner.

- Customer Context Resolver Owner.

- CRM Owner nếu evidence dùng cho CRM.

- AI Advisor Owner nếu evidence dùng cho tư vấn cá nhân hóa.

**18.4. Evidence Status Rule**

Evidence chỉ ACCEPTED khi:

- Có customer_identity_resolution_id.

- Có customer_memory_snapshot_id nếu dùng lịch sử.

- Có correlation nếu flow đa pack.

- Không vi phạm privacy.

- Không có open case bị bỏ qua.

- Audit ghi rõ quyết định cá nhân hóa/pass/block.

**18.5. Blocked-if-Missing Rule**

Nếu thiếu Customer Identity / Memory Evidence:

- Không cá nhân hóa.

- Không nói khách là member/Diamond.

- Không nhắc lịch sử mua.

- Không gửi CRM cá nhân hóa.

- Không báo quyền lợi.

- Không áp Diamond bind.

- Không tạo quote cá nhân hóa.

- Domain Customer Context không PASS.

**19. DOMAIN-04 — SEGMENT RECOMMENDATION / PRODUCT RECOMMENDATION EVIDENCE**

**19.1. Evidence Purpose**

Domain này chứng minh gợi ý sản phẩm có căn cứ, có segment, có Product Effectiveness, có product activation và không ép combo trái ngữ cảnh.

**19.2. Required Evidence**

Evidence bắt buộc:

- Evidence Segment Resolution.

- Evidence Product Triad Recommendation.

- Evidence 3 trụ gợi ý: mùa, chức năng, bổ dưỡng.

- Evidence sản phẩm chăm sóc người thân nếu có ngữ cảnh.

- Evidence Product Effectiveness từng item.

- Evidence Product Activation trước khi gợi ý theo hướng mua.

- Evidence Program Eligibility nếu gợi ý theo chương trình.

- Evidence Health Boundary nếu khách nêu bệnh.

- Evidence Dietary Boundary nếu có ăn chay/kiêng/thành phần.

- Evidence không ép combo.

- Evidence fallback khi sản phẩm không sellable.

- Evidence audit recommendation decision.

**19.3. Evidence Owner**

Evidence Owner:

- Segment Recommendation Owner.

- Product Recommendation Owner.

- Product Knowledge Owner.

- Product Activation Owner.

- Health Boundary Owner nếu có ngữ cảnh sức khỏe.

- AI Advisor Owner nếu evidence dùng cho tư vấn.

**19.4. Evidence Status Rule**

Evidence chỉ ACCEPTED khi:

- Recommendation có lý do rõ.

- Product Effectiveness có source hợp lệ.

- SKU được gợi ý theo hướng bán phải active/sellable.

- Không có health/dietary conflict chưa xử lý.

- Có audit cho recommendation.

**19.5. Blocked-if-Missing Rule**

Nếu thiếu Recommendation Evidence:

- Không được gợi ý sâu.

- Không được lập proposal bán hàng.

- Không được dùng Product Effectiveness.

- Không được gợi ý combo theo hướng chốt.

- Không được đưa SKU chưa active vào tư vấn mua.

- Domain Recommendation không PASS.

**20. DOMAIN-05 — CRM 12-MONTH / MESSAGE TRIGGER / SUPPRESSION EVIDENCE**

**20.1. Evidence Purpose**

Domain này chứng minh CRM là chăm sóc vòng đời có trigger, suppression, quiet hours, frequency cap, dedup, idempotency, immutable message text và audit; không phải spam khuyến mãi.

**20.2. Required Evidence**

Evidence bắt buộc:

- Evidence CRM lifecycle stages D0, D1, D3, D7, D14, D21, D30, M2–M12.

- Evidence Message Trigger.

- Evidence CRM Message Job.

- Evidence Customer Identity trước khi gửi.

- Evidence Customer Memory Snapshot nếu dùng lịch sử mua.

- Evidence Suppression Guard.

- Evidence Quiet Hours.

- Evidence Frequency Cap.

- Evidence Opt-out.

- Evidence Dedup.

- Evidence Idempotency.

- Evidence immutable message text.

- Evidence complaint/privacy/payment/delivery/health conflict suppression.

- Evidence CRM không gửi trùng do retry.

- Evidence audit sent/suppressed/no-action.

**20.3. Evidence Owner**

Evidence Owner:

- CRM Owner.

- Message Trigger Owner.

- Suppression Guard Owner.

- Customer Memory Owner.

- Frequency Cap Owner.

- Quiet Hours Owner.

- Opt-out Owner.

- Audit Owner.

**20.4. Evidence Status Rule**

Evidence chỉ ACCEPTED khi:

- CRM có trigger hợp lệ.

- CRM có job hợp lệ.

- Có customer identity.

- Có suppression check.

- Có dedup/idempotency.

- Message text immutable.

- Có audit cho sent/suppressed.

- Negative path được chứng minh.

**20.5. Blocked-if-Missing Rule**

Nếu thiếu CRM Evidence:

- CRM không được production ready.

- CRM outbound không được PASS.

- CRM sales không được bật tự động.

- Gateway/AI không được dựa vào CRM result.

- Completion Gate liên quan CRM không PASS.

- Gateway vẫn BLOCKED nếu CRM là P0 scope của release.

**21. DOMAIN-06 — MEMBER LIFECYCLE / RIGHTS / DOWNGRADE / DISPUTE EVIDENCE**

**21.1. Evidence Purpose**

Domain này chứng minh hệ thống quản lý hạng thành viên, quyền lợi, chu kỳ 12 tháng, duy trì hạng, ân hạng, hạ hạng và tranh chấp member đúng rule, không để AI/CRM tự tính.

**21.2. Required Evidence**

Evidence bắt buộc:

- Evidence Member Identity.

- Evidence Member Tier Resolution.

- Evidence Member Lifecycle Event.

- Evidence Member Rights Eligibility.

- Evidence 12-month cycle.

- Evidence duy trì hạng = 50% chuẩn hạng hiện tại.

- Evidence ân hạng 60 ngày.

- Evidence hạ hạng an toàn, không làm khách xấu hổ.

- Evidence Member Grace Event nếu có.

- Evidence Member Dispute Case nếu có tranh chấp.

- Evidence quote áp quyền lợi member.

- Evidence CRM member message suppression khi dispute mở.

- Evidence không tự tính doanh số/số còn thiếu nếu thiếu resolver.

- Evidence audit member decision.

**21.3. Evidence Owner**

Evidence Owner:

- Member Lifecycle Owner.

- Member Rights Owner.

- Member Tier Resolver Owner.

- Member Grace Owner.

- Member Dispute Owner.

- Customer Identity Owner.

- Quote Owner nếu quyền lợi member dùng trong quote.

**21.4. Evidence Status Rule**

Evidence chỉ ACCEPTED khi:

- Có member_lifecycle_event_id.

- Member tier được resolve từ Owner Core.

- Quyền lợi member trace được vào quote/order nếu dùng.

- Grace/downgrade có audit.

- Dispute được suppress đúng.

- Không có AI/CRM tự tính quyền lợi.

**21.5. Blocked-if-Missing Rule**

Nếu thiếu Member Evidence:

- Không được nói hạng/quyền lợi cá nhân.

- Không được báo doanh số còn thiếu.

- Không được áp quyền lợi member vào quote.

- Không được gửi CRM nâng hạng/hạ hạng.

- Không được gọi Member Gate PASS.

- Nếu dispute mở, sales/CRM liên quan phải suppress.

**22. DOMAIN-07 — DIAMOND / AFFILIATE / ENTREPRENEURSHIP / DISTRIBUTOR BOUNDARY EVIDENCE**

**22.1. Evidence Purpose**

Domain này chứng minh Diamond/referral/affiliate/khởi nghiệp được xử lý đúng, không nhầm với đại lý/nhà phân phối/mua sỉ, không hardcode hoa hồng và không tạo commission khi thiếu eligibility.

**22.2. Required Evidence**

Evidence bắt buộc:

- Evidence Diamond Eligibility.

- Evidence Diamond Referral Link.

- Evidence Diamond Bind.

- Evidence buyer_from_diamond_link chỉ khi bind hợp lệ.

- Evidence Ads/Diamond conflict decision.

- Evidence self-purchase policy.

- Evidence eligible order.

- Evidence payment/accounting eligibility.

- Evidence Commission Event.

- Evidence commission not payable khi chưa PAID/Accounting confirmed.

- Evidence commission dispute handling.

- Evidence distributor boundary.

- Evidence không hardcode hoa hồng.

- Evidence audit attribution/commission decision.

**22.3. Evidence Owner**

Evidence Owner:

- Diamond Referral Owner.

- Affiliate Attribution Owner.

- Diamond Bind Owner.

- Commission Eligibility Owner.

- Order Owner.

- Payment / Accounting Owner.

- Member Owner.

- Distributor Boundary Owner.

- Dispute Owner.

**22.4. Evidence Status Rule**

Evidence chỉ ACCEPTED khi:

- Referral link hợp lệ.

- Bind hợp lệ.

- Order eligible.

- Payment/accounting eligibility rõ.

- Commission event trace được order/payment.

- Ads/Diamond conflict được audit.

- Không nhầm domain đại lý.

- Không hardcode hoa hồng.

**22.5. Blocked-if-Missing Rule**

Nếu thiếu Diamond / Affiliate Evidence:

- Không áp Diamond attribution.

- Không tạo commission event.

- Không nói commission payable.

- Không xác nhận khởi nghiệp Diamond.

- Không route khách mua sỉ/đại lý sang Diamond.

- Diamond Gate không PASS.

**23. DOMAIN-08 — PRICING / PROGRAM / 24/7 / GOLDEN HOUR / QUOTESNAPSHOT EVIDENCE**

**23.1. Evidence Purpose**

Domain này chứng minh giá, chương trình 24/7, Giờ Vàng, quyền lợi member, quyền lợi Diamond link, QuoteSnapshot và QuoteCart được resolve đúng thời điểm, không hardcode và không báo giá khi thiếu snapshot.

**23.2. Required Evidence**

Evidence bắt buộc:

- Evidence Listed Price.

- Evidence Program Activation.

- Evidence 24/7 pricing rule.

- Evidence Golden Hour session.

- Evidence Golden Hour stock/session/quota rule.

- Evidence Early Access Window nếu có.

- Evidence Member Benefit trong quote nếu có.

- Evidence Diamond Benefit trong quote nếu có.

- Evidence QuoteSnapshot.

- Evidence QuoteCart.

- Evidence Quote Expiry.

- Evidence quote refresh khi hết hạn.

- Evidence không báo giá public.

- Evidence không báo giá khi thiếu QuoteSnapshot.

- Evidence không hardcode giá/chương trình.

- Evidence audit quote decision.

**23.3. Evidence Owner**

Evidence Owner:

- Pricing Owner.

- Program Owner.

- Golden Hour Owner.

- Quote Owner.

- Product Activation Owner.

- Member Benefit Owner.

- Diamond Benefit Owner.

- Audit Owner.

**23.4. Evidence Status Rule**

Evidence chỉ ACCEPTED khi:

- Quote có quote_snapshot_id.

- Quote trace được product/program/customer context.

- Quote có expiry.

- Quote cũ không bị sửa ngược.

- Program/Giờ Vàng có activation ID.

- Member/Diamond benefit có resolver context.

- Public channel không báo giá.

**23.5. Blocked-if-Missing Rule**

Nếu thiếu Pricing / Quote Evidence:

- AI không được báo giá.

- CRM không được gửi giá.

- Gateway không được quote public.

- Landing/ADS không được hiển thị giá cá nhân hóa.

- OrderDraft không được tạo.

- Quote Gate không PASS.

- Gateway release không PASS nếu quote là P0 scope.

**24. DOMAIN-09 — PROGRAM / SELLABLE / PRODUCT ACTIVATION / PRODUCTION SIGNAL EVIDENCE**

**24.1. Evidence Purpose**

Domain này chứng minh sản phẩm chỉ được nói/bán khi active, sellable, có giá, đúng board, đúng chương trình, đúng channel và không bị stock/hold/recall/sale lock/channel block.

**24.2. Required Evidence**

Evidence bắt buộc:

- Evidence Product Activation.

- Evidence Sellable Status.

- Evidence stock_available \> 0.

- Evidence listed_price_status = ACTIVE.

- Evidence không quality hold.

- Evidence không recall hold.

- Evidence không sale lock.

- Evidence không channel block.

- Evidence Auto Stop Sale.

- Evidence Program Activation.

- Evidence Daily Live Product Board.

- Evidence MC AI Script Brief.

- Evidence Golden Hour opening condition.

- Evidence SKU ngoài board không được nói/bán.

- Evidence Sales/Stock Movement → Production Planning Signal nhưng không tự thành Production Order.

- Evidence audit activation/sellable decision.

**24.3. Evidence Owner**

Evidence Owner:

- Product Activation Owner.

- Sellable Gate Owner.

- Inventory / Stock Owner.

- Program Owner.

- Live Board Owner.

- MC AI Brief Owner.

- Operational Signal Owner.

- Audit Owner.

**24.4. Evidence Status Rule**

Evidence chỉ ACCEPTED khi:

- Product activation trace được sellable status.

- Stock/hold/recall/sale lock/channel block được kiểm tra.

- SKU chỉ được nói/bán đúng board/channel/program.

- Auto Stop Sale hoạt động.

- Negative path được chứng minh.

- Audit đầy đủ.

**24.5. Blocked-if-Missing Rule**

Nếu thiếu Product Activation / Sellable Evidence:

- AI không được bán SKU.

- Gateway không được nói SKU theo hướng mua.

- CRM không được gợi ý mua SKU.

- Landing/ADS không được đẩy SKU.

- MC AI không được nói SKU.

- Quote không được tạo cho SKU.

- Program/Sellable Gate không PASS.

**25. DOMAIN-10 — PAYMENT / BANK TRANSFER / ACCOUNTING REVIEW EVIDENCE**

**25.1. Evidence Purpose**

Domain này chứng minh payment phải đi qua Payment Core, Bank Registry, Bank Transfer Queue và Accounting Review khi cần; không hardcode tài khoản ngân hàng và không chuyển PAID dựa trên lời khách/ảnh giao dịch.

**25.2. Required Evidence**

Evidence bắt buộc:

- Evidence Payment Method Eligibility.

- Evidence Payment Reference.

- Evidence Company Bank Account Registry.

- Evidence không hardcode tài khoản ngân hàng.

- Evidence Bank Transfer Queue.

- Evidence Accounting Review.

- Evidence customer claim “đã chuyển khoản” không tự PAID.

- Evidence ảnh giao dịch không tự PAID.

- Evidence pending review.

- Evidence rejected review.

- Evidence PAID confirmation từ Payment Core/Accounting Review.

- Evidence payment dispute handling.

- Evidence commission not payable khi payment chưa confirmed.

- Evidence audit payment decision.

**25.3. Evidence Owner**

Evidence Owner:

- Payment Owner.

- Bank Registry Owner.

- Bank Transfer Queue Owner.

- Accounting Review Owner.

- Order Owner.

- Finance/Accounting Owner.

- Audit Owner.

**25.4. Evidence Status Rule**

Evidence chỉ ACCEPTED khi:

- PaymentReference có trace.

- Bank Registry hợp lệ.

- Accounting Review có kết quả trong luồng cần đối soát.

- PAID status có nguồn hợp lệ.

- Negative path chứng minh không tự PAID.

- Không hardcode bank account.

- Audit đầy đủ.

**25.5. Blocked-if-Missing Rule**

Nếu thiếu Payment Evidence:

- Không được hướng dẫn chuyển khoản chính thức.

- Không được hiển thị tài khoản ngân hàng.

- Không được chuyển PAID.

- Không được release Payment Gate.

- Không được tính commission payable.

- Không được Gateway/Order production ready nếu payment thuộc P0 scope.

**26. DOMAIN-11 — SHIPPING / TRACKING / ETA / COD EVIDENCE**

**26.1. Evidence Purpose**

Domain này chứng minh ETA, COD, phí ship, tracking và trạng thái vận chuyển đến từ Shipping Core, không bịa trạng thái và không hỏi lại địa chỉ khi order đã có shipping info.

**26.2. Required Evidence**

Evidence bắt buộc:

- Evidence Shipping Eligibility.

- Evidence Shipping Info.

- Evidence Shipping Fee.

- Evidence ETA.

- Evidence COD status.

- Evidence Tracking Event.

- Evidence latest shipping event.

- Evidence delivery issue handling.

- Evidence không bịa trạng thái vận chuyển.

- Evidence không tự đoán ETA.

- Evidence không hỏi lại địa chỉ nếu order đã có shipping info.

- Evidence CRM sales suppression khi delivery issue mở.

- Evidence audit shipping decision.

**26.3. Evidence Owner**

Evidence Owner:

- Shipping Owner.

- Shipping Eligibility Owner.

- Tracking Owner.

- COD Owner.

- Order Owner.

- Customer Care Owner.

- Audit Owner.

**26.4. Evidence Status Rule**

Evidence chỉ ACCEPTED khi:

- Shipping status trace được shipping_tracking_event_id.

- ETA/phí ship/COD từ Shipping Core.

- Delivery issue có case/suppression nếu cần.

- Không có fabricated shipping status.

- Negative path được chứng minh.

- Audit đầy đủ.

**26.5. Blocked-if-Missing Rule**

Nếu thiếu Shipping Evidence:

- AI không được nói trạng thái vận chuyển cụ thể.

- CRM không được gửi tracking cụ thể.

- Gateway không được trả lời ETA cụ thể.

- Không được production ready cho shipping scope.

- Shipping Gate không PASS.

- MAS-SMK-006 Shipping eligibility không PASS nếu thiếu pack links/evidence liên quan.

**27. DOMAIN-12 — ORDER / ORDERDRAFT / CUSTOMERCONFIRMATION / IVR EVIDENCE**

**27.1. Evidence Purpose**

Domain này chứng minh order chỉ được tạo sau QuoteSnapshot, QuoteCart, OrderDraft và CustomerConfirmation; Order Success chỉ khi có order_code; IVR chỉ xác nhận đơn, không đổi order state.

**27.2. Required Evidence**

Evidence bắt buộc:

- Evidence QuoteSnapshot before OrderDraft.

- Evidence QuoteCart.

- Evidence OrderConfirmationDraft.

- Evidence CustomerConfirmation.

- Evidence OrderCode.

- Evidence order success chỉ khi có order_code.

- Evidence draft revision/supersede nếu có sửa.

- Evidence idempotency chống double confirm.

- Evidence duplicate confirmation NO_ACTION.

- Evidence IVR_ORDER_CONFIRMATION chỉ ORDER_CONFIRMATION_ONLY.

- Evidence IVR không upsell.

- Evidence IVR không đổi order state ngoài phạm vi.

- Evidence audit order decision.

**27.3. Evidence Owner**

Evidence Owner:

- Quote Owner.

- Cart Owner.

- Order Draft Owner.

- Customer Confirmation Owner.

- Order Owner.

- IVR Order Confirmation Owner.

- Idempotency Owner.

- Audit Owner.

**27.4. Evidence Status Rule**

Evidence chỉ ACCEPTED khi:

- Order trace đầy đủ từ quote đến confirmation.

- order_code chỉ phát sinh sau CustomerConfirmation.

- Double confirm không tạo nhiều order.

- IVR đúng boundary.

- Negative path được chứng minh.

- Audit đầy đủ.

**27.5. Blocked-if-Missing Rule**

Nếu thiếu Order Evidence:

- Không được nói đặt hàng thành công.

- Không được tạo order chính thức.

- Không được chạy IVR production.

- Không được chuyển sang payment/shipping như order hợp lệ.

- Order Gate không PASS.

- Gateway/Commerce release không PASS nếu order thuộc scope.

**28. DOMAIN-13 — GATEWAY / PUBLIC COMMENT / MESSENGER HANDOFF / MODERATION EVIDENCE**

**28.1. Evidence Purpose**

Domain này chứng minh Gateway giữ đúng public/private boundary, không báo giá public, không chốt đơn public, không lặp PII, không gửi payment instruction public, handoff Messenger có delivery log và moderation hoạt động đúng.

**28.2. Required Evidence**

Evidence bắt buộc:

- Evidence Public Comment Event.

- Evidence Channel Policy.

- Evidence Public/Private Boundary.

- Evidence hỏi giá/mua/PII/payment/health/Diamond được handoff private nếu policy cho phép.

- Evidence Messenger Handoff Event.

- Evidence Handoff Delivery Log.

- Evidence handoff success.

- Evidence handoff fail.

- Evidence không nói đã gửi Messenger khi delivery log không success.

- Evidence Public Fallback khi handoff fail.

- Evidence PII Guard.

- Evidence Payment Instruction Block public.

- Evidence Health Detail Block public.

- Evidence Live Moderation Event.

- Evidence troll/abuse/spam handling nếu thuộc scope.

- Evidence Dedup.

- Evidence Idempotency.

- Evidence audit gateway decision.

**28.3. Evidence Owner**

Evidence Owner:

- Gateway Owner.

- Public Comment Owner.

- Messenger Handoff Owner.

- Handoff Delivery Log Owner.

- Public/Private Boundary Owner.

- PII Guard Owner.

- Moderation Owner.

- Dedup/Idempotency Owner.

- Audit Owner.

**28.4. Evidence Status Rule**

Evidence chỉ ACCEPTED khi:

- Public comment policy được chứng minh.

- Handoff success/fail đều được test.

- Delivery log là nguồn xác nhận handoff.

- Public fallback đúng rule.

- Không có public price/payment/PII violation.

- Dedup/idempotency hoạt động.

- Audit đầy đủ.

**28.5. Blocked-if-Missing Rule**

Nếu thiếu Gateway Evidence:

- Gateway không PASS.

- Public auto-reply không được production ready.

- Messenger handoff không được coi là ready.

- Live moderation không được coi là ready.

- Completion Gate không PASS nếu Gateway thuộc scope.

- Completion Report vẫn PENDING_EVIDENCE.

- Gateway vẫn BLOCKED.

**29. DOMAIN-14 — OFFICIAL CONTACT / PHONE NUMBER REGISTRY EVIDENCE**

**29.1. Evidence Purpose**

Domain này chứng minh số điện thoại/kênh liên hệ chính thức chỉ được hiển thị qua Official Contact Registry, không hardcode trong AI, CRM, Gateway, Landing Page, template hoặc script.

**29.2. Required Evidence**

Evidence bắt buộc:

- Evidence Official Contact Registry.

- Evidence Contact Intent Resolver.

- Evidence contact mapping theo intent.

- Evidence tham quan/gặp công ty/lãnh đạo dùng đúng contact registry.

- Evidence đại lý/nhà phân phối/hợp tác/mua số lượng nhiều dùng đúng contact registry.

- Evidence không cung cấp số cá nhân lãnh đạo.

- Evidence không hardcode số điện thoại.

- Evidence public/private display boundary.

- Evidence contact fallback khi intent chưa rõ.

- Evidence audit contact decision.

**29.3. Evidence Owner**

Evidence Owner:

- Official Contact Registry Owner.

- Contact Policy Owner.

- Intent Contact Resolver Owner.

- AI Advisor Owner nếu AI hiển thị contact.

- Gateway/CRM/Landing Owner nếu các kênh hiển thị contact.

- Audit Owner.

**29.4. Evidence Status Rule**

Evidence chỉ ACCEPTED khi:

- Contact có official_contact_id.

- Intent-contact mapping rõ.

- Không hardcode.

- Không public sai số.

- Không cung cấp số cá nhân lãnh đạo.

- Audit đầy đủ.

**29.5. Blocked-if-Missing Rule**

Nếu thiếu Official Contact Evidence:

- AI không được gửi số điện thoại.

- CRM không được gửi số.

- Gateway không được trả lời contact.

- Landing Page/template không được hardcode contact.

- Official Contact Gate không PASS.

**30. DOMAIN-15 — HEALTH BOUNDARY / COMPLAINT / PRIORITY CONFLICT EVIDENCE**

**30.1. Evidence Purpose**

Domain này chứng minh health boundary, complaint, refund, privacy, payment dispute, delivery issue, counterfeit, member dispute và commission dispute thắng sales/CRM.

**30.2. Required Evidence**

Evidence bắt buộc:

- Evidence Health Boundary.

- Evidence khách không nêu bệnh thì AI không tự hỏi bệnh.

- Evidence khách nêu bệnh thì kích hoạt Health Guard.

- Evidence không claim điều trị/thay thuốc/chữa bệnh.

- Evidence Complaint Case.

- Evidence Privacy Case.

- Evidence Counterfeit Case.

- Evidence Payment Dispute suppression.

- Evidence Delivery Issue suppression.

- Evidence Member Dispute suppression.

- Evidence Commission Dispute suppression.

- Evidence Priority Conflict thắng sales/CRM.

- Evidence CSKH/QA/Accounting/Privacy/Legal handoff nếu cần.

- Evidence case closure.

- Evidence audit suppression/escalation/closure.

**30.3. Evidence Owner**

Evidence Owner:

- Health Boundary Owner.

- Complaint Owner.

- Privacy Owner.

- Counterfeit / Brand Protection Owner.

- Payment Dispute Owner.

- Shipping / Delivery Issue Owner.

- Member Dispute Owner.

- Commission Dispute Owner.

- Customer Care Owner.

- Audit Owner.

**30.4. Evidence Status Rule**

Evidence chỉ ACCEPTED khi:

- Case ID rõ.

- Suppression trace được case.

- Sales/CRM bị chặn đúng phạm vi.

- Handoff/escalation đúng target.

- Closure có audit/evidence nếu cần.

- Không có claim vượt ranh giới.

- Negative path được chứng minh.

**30.5. Blocked-if-Missing Rule**

Nếu thiếu Health / Complaint / Priority Evidence:

- Sales/CRM không được production ready.

- Health-sensitive flow không được tự động tư vấn sâu.

- Complaint flow không PASS.

- Privacy flow không PASS.

- Counterfeit flow không PASS.

- Gateway/CRM/AI release không PASS nếu priority conflict thuộc scope.

- Completion Gate không PASS.

**31. DOMAIN-16 — EVIDENCE / COMPLETION REPORT / GATEWAY GATE / SECURITY EVIDENCE**

**31.1. Evidence Purpose**

Domain này chứng minh chính lớp Evidence / Completion / Gateway / Security được vận hành đúng: evidence có ID, smoke có ID, completion gate có ID, owner sign-off hợp lệ, security/app review/UAT/E2E được kiểm tra khi thuộc phạm vi.

**31.2. Required Evidence**

Evidence bắt buộc:

- Evidence Registry hoạt động.

- Evidence ID trace.

- Evidence status lifecycle.

- Evidence review workflow.

- Evidence accepted/rejected/void/superseded.

- Evidence Smoke Mapping.

- Evidence Completion Gate.

- Evidence Owner Sign-off.

- Evidence Completion Report không tự PASS.

- Evidence Gateway Gate.

- Evidence Security Review nếu thuộc scope.

- Evidence App Review nếu thuộc scope.

- Evidence UAT nếu thuộc scope.

- Evidence E2E Smoke.

- Evidence blocker list.

- Evidence missing evidence list.

- Evidence no hardcoded PASS status.

- Evidence audit gate/release decision.

**31.3. Evidence Owner**

Evidence Owner:

- Evidence Registry Owner.

- Smoke Registry Owner.

- Completion Gate Owner.

- Completion Report Owner.

- Gateway Gate Owner.

- Security Owner.

- App Review Owner nếu thuộc scope.

- UAT Owner nếu thuộc scope.

- Owner Sign-off Authority.

- Release Control Owner.

- Audit Owner.

**31.4. Evidence Status Rule**

Evidence chỉ ACCEPTED khi:

- Evidence trace được smoke.

- Smoke trace được domain/dependency.

- Completion Gate trace được P0 evidence.

- Owner sign-off trace được Completion Gate.

- Security/App Review/UAT/E2E có status rõ nếu thuộc scope.

- Completion Report không tự tạo PASS.

- Không còn P0 blocker nếu gate PASS.

- Audit đầy đủ.

**31.5. Blocked-if-Missing Rule**

Nếu thiếu Evidence / Completion / Security Evidence:

- Không smoke PASS.

- Không Completion Gate PASS.

- Không Gateway PASS.

- Không Production Ready.

- Không Release Approved.

- Không Go-live Approved.

- Completion Report vẫn PENDING_EVIDENCE hoặc BLOCKED.

- Gateway vẫn BLOCKED.

**32. CROSS-DOMAIN REQUIRED EVIDENCE PACKAGE**

**32.1. Evidence Package cho Public Comment → Messenger → Quote**

Required Evidence:

- Public Comment Event Evidence.

- Public/Private Boundary Evidence.

- Messenger Handoff Evidence.

- Handoff Delivery Log Evidence.

- Handoff Success/Fail Evidence.

- Customer Identity Evidence.

- Product Activation Evidence.

- Program/Pricing Evidence.

- QuoteSnapshot Evidence.

- Audit Evidence.

Blocked-if-missing:

- Thiếu handoff delivery log thì không nói đã gửi Messenger.

- Thiếu product activation thì không quote.

- Thiếu QuoteSnapshot thì không báo giá.

- Thiếu public/private boundary evidence thì Gateway không PASS.

**32.2. Evidence Package cho Quote → Order**

Required Evidence:

- QuoteSnapshot Evidence.

- QuoteCart Evidence.

- OrderConfirmationDraft Evidence.

- CustomerConfirmation Evidence.

- OrderCode Evidence.

- Idempotency Evidence.

- Duplicate Confirmation NO_ACTION Evidence.

- Audit Evidence.

Blocked-if-missing:

- Thiếu QuoteSnapshot thì không lập draft.

- Thiếu CustomerConfirmation thì không tạo order.

- Thiếu OrderCode thì không nói order success.

- Thiếu idempotency thì không production ready cho order flow.

**32.3. Evidence Package cho Order → Payment → Accounting**

Required Evidence:

- OrderCode Evidence.

- PaymentReference Evidence.

- Bank Registry Evidence.

- BankTransferQueue Evidence.

- AccountingReview Evidence.

- Pending/Rejected/Paid Evidence.

- No-auto-PAID Evidence.

- No-hardcoded-bank Evidence.

- Audit Evidence.

Blocked-if-missing:

- Thiếu PaymentReference thì không hướng dẫn chuyển khoản.

- Thiếu Bank Registry thì không hiển thị tài khoản.

- Thiếu AccountingReview trong luồng cần đối soát thì không PAID.

- Thiếu no-auto-PAID evidence thì Payment Gate không PASS.

**32.4. Evidence Package cho Order → Shipping → CSKH**

Required Evidence:

- OrderCode Evidence.

- Shipping Eligibility Evidence.

- Shipping Fee Evidence.

- ETA Evidence.

- COD Evidence.

- Tracking Event Evidence.

- Delivery Issue Evidence.

- No-fabricated-status Evidence.

- Audit Evidence.

Blocked-if-missing:

- Thiếu shipping event thì không nói trạng thái cụ thể.

- Thiếu ETA evidence thì không nói ETA.

- Thiếu Delivery Issue suppression evidence thì CRM Gate không PASS nếu thuộc scope.

**32.5. Evidence Package cho CRM Lifecycle → Recommendation → Quote**

Required Evidence:

- CRM Trigger Evidence.

- CRM Message Job Evidence.

- Customer Identity Evidence.

- Customer Memory Evidence.

- Suppression Evidence.

- Quiet Hours Evidence.

- Frequency Cap Evidence.

- Dedup Evidence.

- Idempotency Evidence.

- Product Recommendation Evidence.

- Product Activation Evidence.

- QuoteSnapshot Evidence nếu báo giá.

- Audit Evidence.

Blocked-if-missing:

- Thiếu trigger thì không gửi CRM.

- Thiếu suppression thì CRM không production ready.

- Thiếu dedup/idempotency thì không bật automation.

- Thiếu QuoteSnapshot thì không báo giá qua CRM.

**32.6. Evidence Package cho Diamond Link → Commission**

Required Evidence:

- Diamond Referral Link Evidence.

- Diamond Bind Evidence.

- Customer Identity Evidence.

- Member/Diamond Eligibility Evidence.

- Ads/Diamond Conflict Evidence.

- Self-purchase Policy Evidence.

- Eligible Order Evidence.

- Payment/Accounting Evidence.

- Commission Event Evidence.

- Commission Dispute Evidence.

- Audit Evidence.

Blocked-if-missing:

- Thiếu bind thì không attribution.

- Thiếu eligible order thì không commission.

- Thiếu payment/accounting confirmation thì commission không payable.

- Thiếu conflict evidence thì Diamond Gate không PASS.

**32.7. Evidence Package cho Health / Complaint / Privacy / Counterfeit**

Required Evidence:

- Case ID Evidence.

- Health Boundary Evidence.

- Complaint Evidence.

- Privacy Evidence.

- Counterfeit Evidence.

- Suppression Evidence.

- Handoff/Escalation Evidence.

- Safe Response Evidence.

- Closure Evidence nếu đóng case.

- Audit Evidence.

Blocked-if-missing:

- Thiếu case evidence thì không suppress hợp lệ.

- Thiếu health evidence thì không tư vấn health-sensitive.

- Thiếu complaint/privacy/counterfeit evidence thì Priority Conflict Gate không PASS.

- Case mở thì sales/CRM phải suppress.

**32.8. Evidence Package cho Evidence → Smoke → Completion Gate → Owner Sign-off**

Required Evidence:

- Evidence Registry Evidence.

- Smoke ID Evidence.

- Smoke Result Evidence.

- Evidence Accepted Evidence.

- Completion Gate Evidence.

- Owner Sign-off Evidence.

- P0 Gate Status Evidence.

- Blocker List Evidence.

- Missing Evidence List Evidence.

- Release Decision Audit Evidence.

Blocked-if-missing:

- Thiếu evidence accepted thì không smoke PASS.

- Thiếu smoke PASS thì không completion gate PASS.

- Thiếu owner sign-off thì không release approved.

- Completion Report còn PENDING_EVIDENCE thì Gateway không PASS.

**33. EVIDENCE OWNER RESPONSIBILITY MATRIX**

**33.1. Owner không được tự PASS khi thiếu evidence**

Evidence Owner có quyền review evidence trong phạm vi của mình nhưng không được tự PASS gate nếu thiếu điều kiện liên domain.

Ví dụ:

- Payment Owner có thể accepted payment evidence nhưng không tự Gateway PASS.

- Gateway Owner có thể accepted handoff evidence nhưng không tự Production Ready.

- CRM Owner có thể accepted CRM evidence nhưng không tự Release Approved.

- Product Owner có thể accepted product evidence nhưng không tự Go-live Approved.

Completion Gate phải tổng hợp toàn bộ P0 evidence liên quan.

**33.2. Evidence Owner phải từ chối evidence sai scope**

Evidence sai scope phải REJECTED hoặc yêu cầu bổ sung.

Ví dụ:

- Evidence CRM không thay thế evidence payment.

- Evidence quote không thay thế evidence order.

- Evidence handoff không thay thế evidence private quote.

- Evidence shipping không thay thế evidence delivery issue resolution.

- Evidence submitted không thay thế evidence accepted.

- Evidence owner review không thay thế owner sign-off.

**33.3. Evidence Owner phải bảo vệ audit**

Evidence Owner không được accepted evidence nếu thiếu audit.

Audit phải thể hiện:

- Evidence được tạo khi nào.

- Evidence thuộc domain nào.

- Evidence chứng minh smoke nào.

- Evidence được review bởi ai/core nào.

- Evidence được accepted/rejected vì sao.

- Evidence đang map với gate nào.

- Evidence có blocker nào còn mở không.

**34. EVIDENCE STATUS ENFORCEMENT**

**34.1. DRAFT**

DRAFT là evidence đang soạn hoặc đang gom.

DRAFT không được dùng để PASS.

**34.2. SUBMITTED**

SUBMITTED là evidence đã gửi review.

SUBMITTED không được dùng để PASS.

**34.3. UNDER_REVIEW**

UNDER_REVIEW là evidence đang được owner hoặc reviewer kiểm tra.

UNDER_REVIEW không được dùng để PASS.

**34.4. ACCEPTED**

ACCEPTED là evidence đã được review và chấp nhận đúng scope.

Chỉ ACCEPTED evidence mới được dùng để xét smoke PASS, gate PASS hoặc release condition.

**34.5. REJECTED**

REJECTED là evidence không đạt.

REJECTED không được dùng để PASS.

Phải có reason và audit.

**34.6. VOID**

VOID là evidence bị hủy hiệu lực.

VOID không được dùng để PASS.

Phải có lý do void và audit.

**34.7. SUPERSEDED**

SUPERSEDED là evidence đã được thay thế bởi evidence mới.

SUPERSEDED không được dùng để PASS trừ khi gate yêu cầu lịch sử tham chiếu, nhưng không dùng làm evidence hiện hành.

**35. BLOCKED-IF-MISSING MASTER RULE**

**35.1. Thiếu evidence P0 thì không PASS**

Nếu một domain P0 thiếu evidence bắt buộc, domain đó không PASS.

Nếu một domain P0 không PASS, Completion Gate liên quan không PASS.

Nếu Completion Gate không PASS, Gateway không PASS.

Nếu Gateway không PASS, Production Ready hoặc Go-live liên quan không được mở theo scope Gateway.

**35.2. Thiếu accepted evidence thì giữ PENDING_EVIDENCE**

Nếu evidence chưa ACCEPTED, trạng thái đúng là:

- PENDING_EVIDENCE nếu đang thiếu bằng chứng.

- UNDER_REVIEW nếu đã gửi chờ review.

- BLOCKED nếu evidence thiếu P0 hoặc có blocker nghiêm trọng.

Không được chuyển GATE_PASS.

**35.3. Thiếu owner sign-off thì không Release Approved**

Nếu thiếu owner_signoff_id, release không approved.

Owner review, owner comment hoặc owner đã xem không thay thế owner sign-off.

**35.4. Thiếu E2E smoke thì không Production Ready**

Nếu E2E smoke chưa PASS trong phạm vi release, Production Ready vẫn là NO.

Không được chuyển Production Ready chỉ vì unit/domain smoke PASS.

**36. KẾT LUẬN PHẦN 2/4**

PHẦN 2/4 của MASTER-05 đã khóa Evidence Registry theo 16 business domain P0.

Từ thời điểm áp dụng MASTER-05:

- Mỗi domain P0 phải có Required Evidence.

- Mỗi evidence phải có Evidence Owner.

- Mỗi evidence phải có status.

- Chỉ ACCEPTED evidence mới được dùng để PASS.

- Evidence phải trace được smoke.

- Smoke phải trace được domain/dependency.

- Completion Gate phải trace được P0 evidence.

- Owner sign-off phải trace được gate.

- Thiếu evidence thì không PASS.

- Thiếu audit thì không PASS.

- Thiếu owner sign-off thì không release.

- Thiếu E2E smoke thì không Production Ready.

- Completion Report PENDING_EVIDENCE thì Gateway vẫn BLOCKED.

- Không domain nào được tự gọi PASS.

- Không Consumer nào được dùng evidence rời rạc để bypass gate.

- Không hardcode trạng thái evidence/gate/release.

MASTER-05 tiếp tục ở PHẦN 3/4 với Smoke Matrix / E2E Evidence Package / Negative Path Evidence / Security Evidence / Gateway Evidence Control.

**PHẦN 3/4 — SMOKE MATRIX / E2E EVIDENCE PACKAGE / NEGATIVE PATH EVIDENCE / SECURITY EVIDENCE / GATEWAY EVIDENCE CONTROL**

PHẦN 3/4 khóa chuẩn Smoke Matrix, E2E Evidence Package, Negative Path Evidence, Security Evidence và Gateway Evidence Control. Phần này tiếp tục kế thừa nguyên tắc đã khóa: Completion Report mặc định PENDING_EVIDENCE, Gateway chỉ được xem xét khi all P0 gates PASS, evidence package complete, E2E smoke PASS, owner sign-off PASS, và không gọi Ready/PASS chỉ vì tài liệu đã viết xong.

**37. MỤC TIÊU CỦA PHẦN 3/4**

PHẦN 3/4 quy định hệ thống smoke và bằng chứng bắt buộc để kiểm tra các domain P0 của Ginsengfood.

Mục tiêu của PHẦN 3/4 là bảo đảm:

- Mỗi domain P0 có smoke rõ.

- Mỗi smoke có evidence rõ.

- Mỗi evidence có owner rõ.

- Mỗi smoke kiểm tra cả positive path và negative path.

- Mỗi luồng E2E quan trọng có evidence package riêng.

- Security evidence được tách thành nhóm kiểm soát riêng.

- Gateway evidence được kiểm soát riêng vì liên quan public comment, Messenger handoff, PII, policy platform, quote, order và release.

- Không có smoke/evidence thì không PASS.

- Không có accepted evidence thì không Gateway PASS.

- Không có E2E smoke PASS thì không Production Ready.

- Không có owner sign-off thì không Release Approved.

**38. SMOKE MATRIX PRINCIPLES**

**38.1. Smoke Matrix là gì**

Smoke Matrix là bảng kiểm tra tối thiểu để chứng minh một domain, một resolver, một guard, một dependency hoặc một E2E flow hoạt động đúng theo governance.

Smoke Matrix không phải checklist chữ.

Smoke Matrix không phải tuyên bố “đã test”.

Smoke Matrix không phải danh sách việc đã làm.

Smoke Matrix phải có smoke ID, mục tiêu smoke, domain, input, output kỳ vọng, negative path, evidence bắt buộc, owner, status và blocked-if-missing rule.

**38.2. Smoke Matrix phải bao phủ 16 business domain P0**

Smoke Matrix của MASTER-05 bắt buộc bao phủ đủ 16 business domain P0:

1.  Governance / Source-of-Truth.

2.  Product Knowledge / Claim / Brand / Scientific Proof.

3.  Customer Identity / Customer Memory.

4.  Segment Recommendation / Product Recommendation.

5.  CRM 12-Month / Message Trigger / Suppression.

6.  Member Lifecycle / Rights / Downgrade / Dispute.

7.  Diamond / Affiliate / Entrepreneurship / Distributor Boundary.

8.  Pricing / Program / 24/7 / Golden Hour / QuoteSnapshot.

9.  Program / Sellable / Product Activation / Production Signal.

10. Payment / Bank Transfer / Accounting Review.

11. Shipping / Tracking / ETA / COD.

12. Order / OrderDraft / CustomerConfirmation / IVR.

13. Gateway / Public Comment / Messenger Handoff / Moderation.

14. Official Contact / Phone Number Registry.

15. Health Boundary / Complaint / Priority Conflict.

16. Evidence / Completion Report / Gateway Gate / Security.

Không domain nào được bỏ trống smoke.

Không domain nào được đánh PASS nếu thiếu smoke evidence accepted.

**38.3. Smoke Matrix phải có positive path và negative path**

Mỗi smoke quan trọng phải kiểm tra cả hai hướng:

**Positive Path**  
Điều kiện đầy đủ, resolver/guard hoạt động đúng, action được phép, evidence accepted.

**Negative Path**  
Thiếu điều kiện, dữ liệu stale, conflict, missing ID, missing evidence, policy block, suppression, fallback, handoff fail hoặc review pending.

Nếu smoke chỉ kiểm tra thành công mà không kiểm tra block/fail/suppress/fallback/handoff, smoke đó chưa đủ để dùng trong Completion Gate.

**38.4. Smoke Matrix phải map với Evidence Package**

Mỗi smoke phải map với một hoặc nhiều evidence_id.

Smoke không có evidence không PASS.

Evidence không map smoke không dùng PASS.

Evidence sai scope không dùng PASS.

Evidence chưa ACCEPTED không dùng PASS.

**38.5. Smoke Matrix phải có blocked-if-missing rule**

Mỗi smoke phải nêu rõ nếu thiếu smoke/evidence thì gate nào bị chặn.

Ví dụ:

- Thiếu QuoteSnapshot Smoke → Quote Gate không PASS.

- Thiếu CustomerConfirmation Smoke → Order Gate không PASS.

- Thiếu Accounting Review Smoke → Payment Gate không PASS.

- Thiếu Shipping Event Smoke → Shipping Gate không PASS.

- Thiếu Gateway Handoff Smoke → Gateway Gate không PASS.

- Thiếu Security Smoke → Production Ready không YES.

- Thiếu Owner Sign-off Smoke → Release Approved không YES.

**39. SMOKE ID NAMING STANDARD**

**39.1. Tiền tố smoke của MASTER-05**

MASTER-05 quy định tiền tố smoke:

**M05-EV-SMK-xxx**

Trong đó:

- M05 là MASTER-05.

- EV là Evidence / Smoke / Completion Gate.

- SMK là Smoke.

- xxx là số thứ tự smoke.

Ví dụ:

- M05-EV-SMK-001 — Governance / Source-of-Truth Smoke.

- M05-EV-SMK-008 — Pricing / QuoteSnapshot Smoke.

- M05-EV-SMK-013 — Gateway / Handoff Smoke.

- M05-EV-SMK-016 — Evidence / Completion Gate Smoke.

**39.2. Tiền tố E2E smoke**

E2E smoke dùng tiền tố:

**M05-EV-E2E-xxx**

Ví dụ:

- M05-EV-E2E-001 — Public Comment → Messenger → Quote.

- M05-EV-E2E-002 — Quote → Order.

- M05-EV-E2E-003 — Order → Payment → Accounting.

- M05-EV-E2E-004 — Order → Shipping → CSKH.

- M05-EV-E2E-005 — CRM → Recommendation → Quote.

- M05-EV-E2E-006 — Diamond Link → Commission.

- M05-EV-E2E-007 — Complaint / Health / Privacy Suppression.

- M05-EV-E2E-008 — Evidence → Completion Gate → Owner Sign-off.

**39.3. Tiền tố Security smoke**

Security smoke dùng tiền tố:

**M05-EV-SEC-xxx**

Ví dụ:

- M05-EV-SEC-001 — PII Protection Evidence.

- M05-EV-SEC-002 — Payment Data Protection Evidence.

- M05-EV-SEC-003 — Secret / Token / Bank Account No-hardcode Evidence.

- M05-EV-SEC-004 — Public Comment Safety Evidence.

- M05-EV-SEC-005 — Gateway Platform Policy Evidence.

**39.4. Tiền tố Gateway smoke**

Gateway smoke dùng tiền tố:

**M05-EV-GW-xxx**

Ví dụ:

- M05-EV-GW-001 — Public Comment Boundary.

- M05-EV-GW-002 — Messenger Handoff Success.

- M05-EV-GW-003 — Messenger Handoff Fail.

- M05-EV-GW-004 — No Public Price Quote.

- M05-EV-GW-005 — PII / Payment / Health Public Guard.

- M05-EV-GW-006 — Live Moderation.

- M05-EV-GW-007 — Gateway Dedup / Idempotency.

- M05-EV-GW-008 — Gateway Release Gate.

**40. MASTER-05 DOMAIN SMOKE MATRIX**

**40.1. M05-EV-SMK-001 — Governance / Source-of-Truth Smoke**

**Mục tiêu**

Chứng minh Source-of-Truth, Owner Core, Dependency Registry, Consumer Boundary, Evidence và Release Gate hoạt động đúng governance.

**Required Evidence**

- Evidence source_id.

- Evidence domain_id.

- Evidence dependency_id.

- Evidence Owner Core mapping.

- Evidence Consumer Boundary.

- Evidence Release Gate mapping.

- Evidence Audit.

- Evidence no-hardcode runtime data.

- Evidence no-consumer-inference.

**Positive Path**

PASS khi:

- Source-of-Truth rõ.

- Owner Core rõ.

- Dependency rõ.

- Consumer chỉ tiêu thụ trong boundary.

- Audit ghi quyết định.

- Evidence ACCEPTED.

**Negative Path**

BLOCK khi:

- Thiếu source.

- Thiếu owner.

- Thiếu dependency.

- Consumer tự dùng dữ liệu ngoài boundary.

- Dữ liệu hardcode.

- Completion Gate không trace evidence.

**Blocked-if-Missing Rule**

Nếu smoke này không PASS, toàn bộ Completion Gate nền không PASS.

**40.2. M05-EV-SMK-002 — Product Knowledge / Claim / Brand / Scientific Proof Smoke**

**Mục tiêu**

Chứng minh claim sản phẩm, brand wording và scientific proof được kiểm soát đúng, không bịa claim, không thuốc hóa, không dùng evidence chưa approved.

**Required Evidence**

- Product Knowledge Evidence.

- Claim Whitelist Evidence.

- Claim Blocklist Evidence.

- Brand Voice Evidence.

- Public-safe Wording Evidence.

- Scientific Evidence Approved nếu dùng.

- Health Boundary Evidence nếu liên quan sức khỏe.

- Audit claim decision.

**Positive Path**

PASS khi:

- Claim có source.

- Wording public-safe.

- Scientific proof chỉ dùng khi evidence approved.

- Brand soul được dùng đúng.

- Product Effectiveness đúng scope.

**Negative Path**

BLOCK khi:

- Claim chưa approved.

- Bịa link/kết luận khoa học.

- Thuốc hóa sản phẩm.

- Nói chữa bệnh/thay thuốc.

- Dùng scientific proof khi evidence chưa ACCEPTED.

**Blocked-if-Missing Rule**

Thiếu smoke này thì Product Claim Gate không PASS; AI/CRM/Gateway/Landing/ADS/MC AI không được dùng claim sâu.

**40.3. M05-EV-SMK-003 — Customer Identity / Customer Memory Smoke**

**Mục tiêu**

Chứng minh hệ thống biết khách là ai trước khi cá nhân hóa, báo quyền lợi, quote, CRM, Diamond/referral hoặc nhắc lịch sử mua.

**Required Evidence**

- Customer Identity Resolution Evidence.

- Customer Memory Snapshot Evidence.

- Open Case Evidence.

- Privacy Boundary Evidence.

- Care-before-next-sale Evidence.

- Audit customer context.

**Positive Path**

PASS khi:

- Khách mới/cũ/member/Diamond/buyer_from_diamond_link/open case được resolve đúng.

- Khách cũ có memory snapshot khi nhắc lịch sử mua.

- AI hỏi thăm trải nghiệm trước khi bán tiếp.

- Privacy boundary được tôn trọng.

**Negative Path**

BLOCK khi:

- Thiếu identity nhưng vẫn cá nhân hóa.

- Thiếu memory nhưng vẫn nhắc lịch sử mua.

- Privacy case mở nhưng vẫn outbound.

- Open complaint bị bỏ qua để bán hàng.

**Blocked-if-Missing Rule**

Thiếu smoke này thì Customer Context Gate không PASS; không cá nhân hóa, không CRM cá nhân hóa, không quote quyền lợi, không Diamond attribution.

**40.4. M05-EV-SMK-004 — Segment / Product Recommendation Smoke**

**Mục tiêu**

Chứng minh recommendation có segment, product triad, Product Effectiveness, activation và health/dietary boundary.

**Required Evidence**

- Segment Resolution Evidence.

- Product Triad Recommendation Evidence.

- Product Effectiveness Evidence.

- Product Activation Evidence.

- Program Eligibility Evidence nếu có.

- Health/Dietary Boundary Evidence nếu có.

- Audit recommendation.

**Positive Path**

PASS khi:

- Gợi ý theo 3 trụ: mùa, chức năng, bổ dưỡng.

- Có sản phẩm chăm sóc người thân nếu có ngữ cảnh.

- Mỗi item có Product Effectiveness.

- SKU hướng bán phải active/sellable.

- Không ép combo.

**Negative Path**

BLOCK khi:

- Gợi ý SKU không active.

- Thiếu Product Effectiveness.

- Khách nêu bệnh nhưng không có Health Guard.

- Ép combo trái ngữ cảnh.

- Gợi ý sản phẩm không phù hợp dietary/kiêng.

**Blocked-if-Missing Rule**

Thiếu smoke này thì Recommendation Gate không PASS; không dùng recommendation để chốt mua.

**40.5. M05-EV-SMK-005 — CRM Trigger / Suppression Smoke**

**Mục tiêu**

Chứng minh CRM 12 tháng có trigger, suppression, quiet hours, frequency cap, opt-out, dedup, idempotency và immutable message text.

**Required Evidence**

- CRM Lifecycle Evidence.

- Message Trigger Evidence.

- CRM Message Job Evidence.

- Customer Identity Evidence.

- Suppression Evidence.

- Quiet Hours Evidence.

- Frequency Cap Evidence.

- Opt-out Evidence.

- Dedup Evidence.

- Idempotency Evidence.

- Immutable Message Text Evidence.

- Audit sent/suppressed/no-action.

**Positive Path**

PASS khi:

- CRM gửi đúng trigger.

- CRM có customer context.

- CRM không gửi trùng.

- CRM tuân thủ quiet hours/frequency cap.

- Message text immutable.

- Suppression chạy đúng.

**Negative Path**

BLOCK hoặc SUPPRESS khi:

- Thiếu trigger.

- Thiếu customer identity.

- Opt-out.

- Quiet hours.

- Frequency cap.

- Complaint/privacy/payment/delivery/health case mở.

- Retry gây duplicate.

**Blocked-if-Missing Rule**

Thiếu smoke này thì CRM Gate không PASS; CRM automation không production ready.

**40.6. M05-EV-SMK-006 — Member Lifecycle / Rights Smoke**

**Mục tiêu**

Chứng minh member lifecycle, quyền lợi, chu kỳ 12 tháng, duy trì, ân hạng, hạ hạng và dispute được kiểm soát đúng.

**Required Evidence**

- Member Identity Evidence.

- Member Tier Evidence.

- Member Lifecycle Event Evidence.

- Member Rights Evidence.

- Grace Event Evidence nếu có.

- Downgrade Safety Evidence.

- Member Dispute Evidence.

- Quote Member Benefit Evidence.

- Audit member decision.

**Positive Path**

PASS khi:

- Member tier resolve từ Owner Core.

- Quyền lợi member trace vào quote/order nếu dùng.

- Duy trì hạng và ân hạng đúng rule.

- Hạ hạng wording an toàn.

- Dispute suppress đúng.

**Negative Path**

BLOCK/SUPPRESS khi:

- AI tự tính hạng.

- AI tự nói số còn thiếu.

- Thiếu member_lifecycle_event_id nhưng vẫn áp quyền lợi.

- Member dispute mở nhưng CRM vẫn upsell.

**Blocked-if-Missing Rule**

Thiếu smoke này thì Member Gate không PASS; không dùng quyền lợi member trong quote/CRM.

**40.7. M05-EV-SMK-007 — Diamond / Affiliate / Distributor Boundary Smoke**

**Mục tiêu**

Chứng minh Diamond/referral/affiliate/commission đúng bind, đúng eligible order, đúng payment/accounting và không nhầm đại lý/nhà phân phối.

**Required Evidence**

- Diamond Eligibility Evidence.

- Referral Link Evidence.

- Diamond Bind Evidence.

- Ads/Diamond Conflict Evidence.

- Self-purchase Policy Evidence.

- Eligible Order Evidence.

- Payment/Accounting Eligibility Evidence.

- Commission Event Evidence.

- Distributor Boundary Evidence.

- Commission Dispute Evidence.

- Audit attribution/commission.

**Positive Path**

PASS khi:

- Referral link hợp lệ.

- Bind hợp lệ.

- Eligible order hợp lệ.

- Payment/accounting confirmed trước payable.

- Commission event trace đúng.

- Distributor boundary không nhầm.

**Negative Path**

BLOCK/REVIEW khi:

- No bind.

- No eligible order.

- Payment chưa confirmed.

- Ads/Diamond conflict.

- Self-purchase conflict.

- Khách hỏi đại lý nhưng route nhầm Diamond.

- Hardcode hoa hồng.

**Blocked-if-Missing Rule**

Thiếu smoke này thì Diamond Gate không PASS; không commission payable.

**40.8. M05-EV-SMK-008 — Pricing / Program / QuoteSnapshot Smoke**

**Mục tiêu**

Chứng minh giá, chương trình 24/7, Giờ Vàng, quyền lợi member/Diamond, QuoteSnapshot và QuoteCart được resolve đúng, không hardcode.

**Required Evidence**

- Listed Price Evidence.

- Program Activation Evidence.

- 24/7 Rule Evidence.

- Golden Hour Session Evidence.

- Golden Hour Stock/Quota Evidence.

- Early Access Evidence nếu có.

- Member Benefit Evidence nếu có.

- Diamond Benefit Evidence nếu có.

- QuoteSnapshot Evidence.

- QuoteCart Evidence.

- Quote Expiry Evidence.

- Public No-price Evidence.

- Audit quote decision.

**Positive Path**

PASS khi:

- Quote có quote_snapshot_id.

- Quote trace product/program/customer.

- Program có activation.

- Giờ Vàng có session.

- Quote expiry rõ.

- QuoteCart trace QuoteSnapshot.

**Negative Path**

BLOCK/HANDOFF khi:

- Thiếu QuoteSnapshot.

- Public comment hỏi giá.

- Program inactive.

- Golden Hour không có session.

- Quote hết hạn.

- Product không sellable.

- Member/Diamond benefit thiếu context.

- Giá hardcode.

**Blocked-if-Missing Rule**

Thiếu smoke này thì Quote Gate không PASS; AI/CRM/Gateway/Landing không được báo giá.

**40.9. M05-EV-SMK-009 — Program / Sellable / Product Activation Smoke**

**Mục tiêu**

Chứng minh SKU chỉ được nói/bán khi active, sellable, stock_available \> 0, price active, không hold/recall/sale lock/channel block.

**Required Evidence**

- Product Activation Evidence.

- Sellable Status Evidence.

- Stock Evidence.

- Listed Price Active Evidence.

- Quality Hold Evidence.

- Recall Hold Evidence.

- Sale Lock Evidence.

- Channel Block Evidence.

- Auto Stop Sale Evidence.

- Daily Live Product Board Evidence.

- MC AI Script Brief Evidence.

- Production Planning Signal Evidence.

- Audit activation decision.

**Positive Path**

PASS khi:

- SKU active/sellable.

- Stock \> 0.

- Price active.

- Đúng chương trình/kênh/board.

- MC AI nói đúng brief.

- Sales/stock signal không tự thành Production Order.

**Negative Path**

BLOCK/FALLBACK khi:

- Stock = 0.

- Quality hold.

- Recall hold.

- Sale lock.

- Channel block.

- Price inactive.

- SKU ngoài board.

- MC AI tự chọn SKU.

**Blocked-if-Missing Rule**

Thiếu smoke này thì Product Activation/Sellable Gate không PASS; không bán SKU.

**40.10. M05-EV-SMK-010 — Payment / Bank Transfer / Accounting Review Smoke**

**Mục tiêu**

Chứng minh payment đi qua Payment Core / Bank Registry / Accounting Review; không hardcode tài khoản ngân hàng; ảnh giao dịch/lời khách nói không tự PAID.

**Required Evidence**

- Payment Method Evidence.

- PaymentReference Evidence.

- Company Bank Account Registry Evidence.

- No-hardcoded-bank Evidence.

- BankTransferQueue Evidence.

- AccountingReview Evidence.

- Pending Review Evidence.

- Rejected Review Evidence.

- PAID Confirmation Evidence.

- Payment Dispute Evidence.

- Audit payment decision.

**Positive Path**

PASS khi:

- Chuyển khoản có payment_reference.

- Bank account từ registry.

- Accounting Review quyết định PAID trong luồng cần đối soát.

- Audit đầy đủ.

**Negative Path**

BLOCK/REVIEW/SUPPRESS khi:

- Thiếu payment_reference.

- Thiếu Bank Registry.

- Khách nói đã chuyển.

- Có ảnh giao dịch nhưng chưa accounting review.

- Payment dispute mở.

- Hardcode tài khoản ngân hàng.

**Blocked-if-Missing Rule**

Thiếu smoke này thì Payment Gate không PASS; không PAID; không commission payable.

**40.11. M05-EV-SMK-011 — Shipping / Tracking / ETA / COD Smoke**

**Mục tiêu**

Chứng minh ETA, COD, phí ship và tracking đến từ Shipping Core; không bịa trạng thái; delivery issue suppress CRM sales.

**Required Evidence**

- Shipping Eligibility Evidence.

- Shipping Info Evidence.

- Shipping Fee Evidence.

- ETA Evidence.

- COD Evidence.

- Tracking Event Evidence.

- Delivery Issue Evidence.

- No-fabricated-status Evidence.

- No-repeat-address Evidence.

- CRM suppression Evidence nếu delivery issue mở.

- Audit shipping decision.

**Positive Path**

PASS khi:

- Shipping event trace order.

- ETA/phí/COD từ Shipping Core.

- Tracking status có event.

- Không hỏi lại địa chỉ nếu order có shipping info.

**Negative Path**

BLOCK/FALLBACK/SUPPRESS khi:

- Thiếu shipping event.

- Thiếu ETA.

- Shipping data conflict.

- Delivery issue mở.

- Khách hỏi trạng thái nhưng Shipping Core chưa có cập nhật.

**Blocked-if-Missing Rule**

Thiếu smoke này thì Shipping Gate không PASS; không trả trạng thái vận chuyển cụ thể.

**40.12. M05-EV-SMK-012 — Order / OrderDraft / CustomerConfirmation / IVR Smoke**

**Mục tiêu**

Chứng minh order chỉ tạo sau QuoteSnapshot, QuoteCart, OrderDraft và CustomerConfirmation; IVR chỉ xác nhận đơn.

**Required Evidence**

- QuoteSnapshot Evidence.

- QuoteCart Evidence.

- OrderConfirmationDraft Evidence.

- CustomerConfirmation Evidence.

- OrderCode Evidence.

- Draft Revision/Supersede Evidence.

- Idempotency Evidence.

- Duplicate Confirmation Evidence.

- IVR ORDER_CONFIRMATION_ONLY Evidence.

- IVR no-upsell Evidence.

- IVR no-state-change Evidence.

- Audit order decision.

**Positive Path**

PASS khi:

- OrderDraft trace QuoteCart.

- CustomerConfirmation trace Draft.

- OrderCode chỉ sinh sau CustomerConfirmation.

- Double confirm không tạo nhiều order.

- IVR đúng boundary.

**Negative Path**

BLOCK/NO_ACTION khi:

- Thiếu QuoteSnapshot.

- Thiếu OrderDraft.

- Thiếu CustomerConfirmation.

- Duplicate confirmation.

- Draft conflict.

- IVR upsell hoặc đổi order state.

**Blocked-if-Missing Rule**

Thiếu smoke này thì Order Gate không PASS; không order success; không IVR production ready.

**40.13. M05-EV-SMK-013 — Gateway / Public Comment / Messenger Handoff / Moderation Smoke**

**Mục tiêu**

Chứng minh Gateway giữ đúng public/private boundary, handoff Messenger, delivery log, moderation, PII guard, dedup và idempotency.

**Required Evidence**

- Public Comment Event Evidence.

- Channel Policy Evidence.

- Public/Private Boundary Evidence.

- Messenger Handoff Evidence.

- Handoff Delivery Log Evidence.

- Handoff Success Evidence.

- Handoff Fail Evidence.

- Public Fallback Evidence.

- PII Guard Evidence.

- Payment Public Block Evidence.

- Health Public Block Evidence.

- Live Moderation Evidence.

- Dedup Evidence.

- Idempotency Evidence.

- Audit gateway decision.

**Positive Path**

PASS khi:

- Public comment không báo giá/chốt đơn.

- Handoff success được delivery log xác nhận.

- Private flow tiếp tục đúng correlation.

- Dedup/idempotency hoạt động.

- Moderation hoạt động khi cần.

**Negative Path**

BLOCK/FALLBACK/SUPPRESS khi:

- Handoff fail.

- Comment chứa PII.

- Comment hỏi giá/mua/payment/health/Diamond.

- Duplicate comment.

- Troll/abuse/spam theo policy.

- Delivery log conflict.

**Blocked-if-Missing Rule**

Thiếu smoke này thì Gateway Gate không PASS; public auto-reply không production ready.

**40.14. M05-EV-SMK-014 — Official Contact Registry Smoke**

**Mục tiêu**

Chứng minh số điện thoại/kênh liên hệ chỉ được resolve qua Official Contact Registry, không hardcode.

**Required Evidence**

- Official Contact Registry Evidence.

- Contact Intent Resolver Evidence.

- Contact Mapping Evidence.

- Contact Display Eligibility Evidence.

- No-personal-leader-contact Evidence.

- No-hardcoded-contact Evidence.

- Public/private contact boundary Evidence.

- Audit contact decision.

**Positive Path**

PASS khi:

- Intent rõ.

- Contact có official_contact_id.

- Contact đúng loại intent.

- Không hardcode.

- Không gửi số cá nhân lãnh đạo.

**Negative Path**

BLOCK/FALLBACK khi:

- Thiếu official_contact_id.

- Intent chưa rõ.

- Consumer tự chọn số.

- Template hardcode số.

- Contact không được phép public.

**Blocked-if-Missing Rule**

Thiếu smoke này thì Official Contact Gate không PASS; AI/CRM/Gateway/Landing không được gửi contact.

**40.15. M05-EV-SMK-015 — Health Boundary / Complaint / Priority Conflict Smoke**

**Mục tiêu**

Chứng minh health boundary, complaint, refund, privacy, counterfeit, payment dispute, delivery issue, member dispute và commission dispute thắng sales/CRM.

**Required Evidence**

- Health Boundary Evidence.

- No-unprompted-health-question Evidence.

- No-treatment-claim Evidence.

- Complaint Case Evidence.

- Privacy Case Evidence.

- Counterfeit Case Evidence.

- Payment Dispute Suppression Evidence.

- Delivery Issue Suppression Evidence.

- Member Dispute Suppression Evidence.

- Commission Dispute Suppression Evidence.

- Handoff/Escalation Evidence.

- Closure Evidence.

- Audit suppression/escalation.

**Positive Path**

PASS khi:

- Khách không nêu bệnh thì AI không tự hỏi bệnh.

- Khách nêu bệnh thì Health Guard kích hoạt.

- Priority conflict suppress sales/CRM.

- Case có owner và status.

- Handoff/escalation đúng target.

**Negative Path**

BLOCK/SUPPRESS/ESCALATE khi:

- Health-sensitive thiếu guard.

- Complaint mở nhưng vẫn upsell.

- Privacy case mở nhưng outbound.

- Counterfeit case mở nhưng sales tiếp tục.

- Payment/delivery/member/commission dispute bị bỏ qua.

**Blocked-if-Missing Rule**

Thiếu smoke này thì Priority Conflict Gate không PASS; sales/CRM không production ready trong phạm vi liên quan.

**40.16. M05-EV-SMK-016 — Evidence / Completion Report / Gateway Gate / Security Smoke**

**Mục tiêu**

Chứng minh chính hệ thống evidence, smoke, completion gate, owner sign-off, security và release control hoạt động đúng.

**Required Evidence**

- Evidence Registry Evidence.

- Evidence ID Evidence.

- Evidence Lifecycle Evidence.

- Evidence Review Evidence.

- Smoke Mapping Evidence.

- Completion Gate Evidence.

- Completion Report Evidence.

- Owner Sign-off Evidence.

- Gateway Gate Evidence.

- Security Review Evidence nếu thuộc scope.

- App Review Evidence nếu thuộc scope.

- UAT Evidence nếu thuộc scope.

- E2E Smoke Evidence.

- Blocker List Evidence.

- No-hardcoded-PASS Evidence.

- Audit gate/release decision.

**Positive Path**

PASS khi:

- Evidence accepted.

- Smoke PASS.

- Completion Gate trace P0 evidence.

- Owner sign-off hợp lệ.

- Completion Report không tự PASS.

- Gateway chỉ được xét khi all P0 evidence đủ.

**Negative Path**

BLOCK/REVIEW khi:

- Evidence DRAFT/SUBMITTED/UNDER_REVIEW.

- Evidence REJECTED/VOID/SUPERSEDED.

- Missing smoke.

- Missing owner sign-off.

- Completion Report PENDING_EVIDENCE.

- Security blocker.

- Hardcoded PASS.

**Blocked-if-Missing Rule**

Thiếu smoke này thì Completion Gate không PASS; Gateway vẫn BLOCKED; Production Ready vẫn NO.

**41. E2E EVIDENCE PACKAGE MODEL**

**41.1. Nguyên tắc E2E Evidence Package**

E2E Evidence Package chứng minh một hành trình nghiệp vụ đi xuyên nhiều domain và nhiều pack hoạt động đúng từ đầu đến cuối.

Một E2E Evidence Package phải có:

- E2E smoke ID.

- Domain list.

- Resolver/Guard list.

- Required ID list.

- Positive path evidence.

- Negative path evidence.

- Audit evidence.

- Evidence owner.

- Blocker list.

- PASS condition.

- BLOCK condition.

- Release mapping nếu thuộc gate.

**41.2. E2E Evidence không được thay bằng unit smoke**

Unit smoke chứng minh một phần nhỏ.

E2E Evidence chứng minh toàn bộ hành trình.

Không được dùng unit smoke thay thế E2E smoke nếu release yêu cầu E2E.

Ví dụ:

- QuoteSnapshot unit smoke không chứng minh order flow hoàn chỉnh.

- PaymentReference unit smoke không chứng minh Accounting Review.

- Handoff unit smoke không chứng minh Gateway → Messenger → Quote.

- CRM trigger unit smoke không chứng minh suppression + recommendation + quote.

- Evidence upload unit smoke không chứng minh Completion Gate PASS.

**42. M05-EV-E2E-001 — PUBLIC COMMENT → MESSENGER → QUOTE EVIDENCE PACKAGE**

**42.1. Scope**

Luồng kiểm tra:

Public comment hỏi giá/mua → Gateway nhận comment → Public/Private Guard → Messenger Handoff → Handoff Delivery Log → Private AI flow → Customer Context → Product Activation → Pricing Resolver → QuoteSnapshot.

**42.2. Required Evidence**

Evidence bắt buộc:

- Public Comment Event Evidence.

- Intent Classification Evidence.

- Public/Private Boundary Evidence.

- Messenger Handoff Evidence.

- Handoff Delivery Log Evidence.

- Handoff Success Evidence.

- Handoff Fail Evidence.

- Customer Identity Evidence.

- Product Activation Evidence.

- Program/Pricing Evidence.

- QuoteSnapshot Evidence.

- Audit Evidence.

- Correlation Evidence.

**42.3. Positive Path**

PASS khi:

- Public comment không báo giá.

- Public comment không chốt đơn.

- Handoff Messenger được thực hiện.

- Delivery log xác nhận success.

- Private flow có customer context.

- Product active/sellable.

- QuoteSnapshot được tạo trong private.

- Audit đầy đủ.

**42.4. Negative Path**

BLOCK/FALLBACK khi:

- Handoff fail.

- Delivery log không success.

- Product không sellable.

- Thiếu customer identity cho quote cá nhân hóa.

- Thiếu program activation.

- Thiếu QuoteSnapshot.

- Public comment chứa PII/payment/health.

**42.5. Blocked-if-Missing Rule**

Thiếu E2E này thì Gateway Quote Flow không PASS.

Không được gọi Gateway ready cho luồng hỏi giá/mua từ public comment.

**43. M05-EV-E2E-002 — QUOTE → ORDER EVIDENCE PACKAGE**

**43.1. Scope**

Luồng kiểm tra:

QuoteSnapshot → QuoteCart → OrderConfirmationDraft → CustomerConfirmation → OrderCode.

**43.2. Required Evidence**

Evidence bắt buộc:

- QuoteSnapshot Evidence.

- QuoteCart Evidence.

- Quote Expiry Evidence.

- OrderConfirmationDraft Evidence.

- CustomerConfirmation Evidence.

- OrderCode Evidence.

- Draft Revision/Supersede Evidence nếu có.

- Idempotency Evidence.

- Duplicate Confirmation Evidence.

- Audit Evidence.

- Correlation Evidence.

**43.3. Positive Path**

PASS khi:

- Quote còn hiệu lực.

- QuoteCart trace đúng QuoteSnapshot.

- OrderDraft trace QuoteCart.

- CustomerConfirmation trace OrderDraft.

- OrderCode sinh sau confirmation.

- Double confirm không tạo nhiều order.

**43.4. Negative Path**

BLOCK/NO_ACTION khi:

- Quote hết hạn.

- Thiếu QuoteSnapshot.

- Thiếu OrderDraft.

- Thiếu CustomerConfirmation.

- Duplicate confirmation.

- Draft bị superseded.

- Draft conflict với confirmation.

**43.5. Blocked-if-Missing Rule**

Thiếu E2E này thì Order Gate không PASS.

Không được nói Order Success nếu thiếu OrderCode evidence.

**44. M05-EV-E2E-003 — ORDER → PAYMENT → ACCOUNTING REVIEW EVIDENCE PACKAGE**

**44.1. Scope**

Luồng kiểm tra:

OrderCode → PaymentReference → BankTransferQueue → AccountingReview → PaymentStatus.

**44.2. Required Evidence**

Evidence bắt buộc:

- OrderCode Evidence.

- PaymentReference Evidence.

- Company Bank Account Registry Evidence.

- No-hardcoded-bank Evidence.

- BankTransferQueue Evidence.

- Customer Transaction Claim Evidence.

- AccountingReview Evidence.

- Pending/Rejected/Paid Evidence.

- Payment Dispute Evidence.

- Audit Evidence.

- Correlation Evidence.

**44.3. Positive Path**

PASS khi:

- PaymentReference trace OrderCode.

- Bank account từ registry.

- BankTransferQueue ghi nhận đúng.

- AccountingReview xác nhận payment trong luồng cần đối soát.

- PAID chỉ khi Payment Core/AccountingReview xác nhận.

- Audit đầy đủ.

**44.4. Negative Path**

BLOCK/REVIEW/SUPPRESS khi:

- Thiếu PaymentReference.

- Thiếu Bank Registry.

- Khách nói đã chuyển nhưng chưa review.

- Có ảnh giao dịch nhưng chưa review.

- Số tiền/nội dung chuyển khoản không khớp.

- Payment dispute mở.

- Hardcode bank account.

**44.5. Blocked-if-Missing Rule**

Thiếu E2E này thì Payment Gate không PASS.

Không được Production Ready cho payment scope.

**45. M05-EV-E2E-004 — ORDER → SHIPPING → CUSTOMER CARE EVIDENCE PACKAGE**

**45.1. Scope**

Luồng kiểm tra:

OrderCode → Shipping Eligibility → Shipping Event → ETA / COD / Tracking → Customer Care response.

**45.2. Required Evidence**

Evidence bắt buộc:

- OrderCode Evidence.

- Shipping Eligibility Evidence.

- Shipping Info Evidence.

- Shipping Fee Evidence.

- ETA Evidence.

- COD Evidence.

- Tracking Event Evidence.

- Delivery Issue Evidence.

- No-fabricated-shipping-status Evidence.

- No-repeat-address Evidence.

- CRM suppression Evidence nếu delivery issue mở.

- Audit Evidence.

- Correlation Evidence.

**45.3. Positive Path**

PASS khi:

- Shipping event trace OrderCode.

- ETA/phí/COD từ Shipping Core.

- Customer Care dùng latest shipping event.

- Không hỏi lại địa chỉ nếu order đã có shipping info.

- Audit đầy đủ.

**45.4. Negative Path**

BLOCK/FALLBACK/SUPPRESS khi:

- Thiếu shipping event.

- Thiếu ETA.

- Shipping data conflict.

- Delivery issue mở.

- CRM rebuy/upsell bị suppress.

- Khách hỏi trạng thái nhưng chưa có dữ liệu từ Shipping Core.

**45.5. Blocked-if-Missing Rule**

Thiếu E2E này thì Shipping Gate không PASS.

Không được trả lời trạng thái vận chuyển cụ thể trong production.

**46. M05-EV-E2E-005 — CRM → RECOMMENDATION → QUOTE EVIDENCE PACKAGE**

**46.1. Scope**

Luồng kiểm tra:

CRM Trigger → Customer Identity → Customer Memory → Suppression Guard → Product Recommendation → Product Activation → QuoteSnapshot nếu khách có nhu cầu mua.

**46.2. Required Evidence**

Evidence bắt buộc:

- CRM Trigger Evidence.

- CRM Message Job Evidence.

- Customer Identity Evidence.

- Customer Memory Evidence.

- Suppression Evidence.

- Quiet Hours Evidence.

- Frequency Cap Evidence.

- Opt-out Evidence.

- Dedup Evidence.

- Idempotency Evidence.

- Recommendation Evidence.

- Product Activation Evidence.

- QuoteSnapshot Evidence nếu báo giá.

- Audit Evidence.

- Correlation Evidence.

**46.3. Positive Path**

PASS khi:

- CRM trigger hợp lệ.

- Customer context hợp lệ.

- Suppression clear.

- Message không trùng.

- Recommendation có Product Effectiveness.

- Product active/sellable.

- QuoteSnapshot chỉ tạo khi khách có nhu cầu mua.

**46.4. Negative Path**

SUPPRESS/BLOCK/NO_ACTION khi:

- Thiếu trigger.

- Thiếu customer identity.

- Quiet hours.

- Frequency cap.

- Opt-out.

- Complaint/privacy/payment/delivery/health case mở.

- Duplicate job.

- Product không active.

- Thiếu QuoteSnapshot.

**46.5. Blocked-if-Missing Rule**

Thiếu E2E này thì CRM Automation Gate không PASS.

Không được bật CRM production automation.

**47. M05-EV-E2E-006 — DIAMOND LINK → COMMISSION EVIDENCE PACKAGE**

**47.1. Scope**

Luồng kiểm tra:

DiamondReferralLink → DiamondBind → Customer Identity → Quote → Order → Payment/Accounting → CommissionEligibility → CommissionEvent.

**47.2. Required Evidence**

Evidence bắt buộc:

- Diamond Referral Link Evidence.

- Diamond Bind Evidence.

- Customer Identity Evidence.

- Member/Diamond Eligibility Evidence.

- Ads/Diamond Conflict Evidence.

- Self-purchase Policy Evidence.

- Quote Evidence.

- Eligible Order Evidence.

- Payment/Accounting Evidence.

- Commission Eligibility Evidence.

- Commission Event Evidence.

- Commission Dispute Evidence.

- Audit Evidence.

- Correlation Evidence.

**47.3. Positive Path**

PASS khi:

- Referral link hợp lệ.

- Bind hợp lệ.

- Buyer context hợp lệ.

- Order eligible.

- Payment/accounting confirmed.

- Commission event trace order/payment/bind.

- Không self-purchase violation.

**47.4. Negative Path**

BLOCK/REVIEW/SUPPRESS khi:

- No bind.

- No eligible order.

- Payment chưa confirmed.

- Ads/Diamond conflict.

- Self-purchase.

- Commission dispute.

- Buyer identity conflict.

- Hardcode commission.

**47.5. Blocked-if-Missing Rule**

Thiếu E2E này thì Diamond / Commission Gate không PASS.

Không được commission payable.

**48. M05-EV-E2E-007 — HEALTH / COMPLAINT / PRIVACY / COUNTERFEIT SUPPRESSION EVIDENCE PACKAGE**

**48.1. Scope**

Luồng kiểm tra:

Customer issue → Health/Complaint/Privacy/Counterfeit Resolver → Priority Conflict Guard → Suppression → Handoff/Escalation → Resolution/Closure.

**48.2. Required Evidence**

Evidence bắt buộc:

- Customer Context Evidence.

- Health Boundary Evidence.

- Complaint Case Evidence.

- Privacy Case Evidence.

- Counterfeit Case Evidence.

- Payment Dispute Evidence nếu có.

- Delivery Issue Evidence nếu có.

- Member/Commission Dispute Evidence nếu có.

- Suppression Evidence.

- Handoff/Escalation Evidence.

- Safe Response Evidence.

- Closure Evidence nếu đóng case.

- Audit Evidence.

- Correlation Evidence.

**48.3. Positive Path**

PASS khi:

- Case ID được tạo đúng.

- Sales/CRM bị suppress đúng phạm vi.

- Safe response đúng boundary.

- Handoff đúng target.

- Closure có audit/evidence nếu cần.

**48.4. Negative Path**

BLOCK/SUPPRESS/ESCALATE khi:

- Health-sensitive thiếu guard.

- Complaint mở nhưng vẫn upsell.

- Privacy case mở nhưng outbound vẫn chạy.

- Counterfeit case mở nhưng vẫn chốt bán.

- Payment dispute mở nhưng vẫn nhắc thanh toán cứng.

- Delivery issue mở nhưng vẫn CRM bán hàng.

**48.5. Blocked-if-Missing Rule**

Thiếu E2E này thì Priority Conflict Gate không PASS.

Sales/CRM/Gateway/AI không được production ready trong các flow liên quan.

**49. M05-EV-E2E-008 — EVIDENCE → SMOKE → COMPLETION GATE → OWNER SIGN-OFF PACKAGE**

**49.1. Scope**

Luồng kiểm tra:

Evidence Created → Evidence Submitted → Evidence Review → Evidence Accepted → Smoke PASS → Completion Gate Review → Owner Sign-off → Release Decision.

**49.2. Required Evidence**

Evidence bắt buộc:

- Evidence ID Evidence.

- Evidence Lifecycle Evidence.

- Evidence Review Evidence.

- Evidence Accepted Evidence.

- Evidence Rejected Evidence.

- Evidence Void/Superseded Evidence.

- Smoke ID Evidence.

- Smoke Result Evidence.

- Completion Gate Evidence.

- Owner Sign-off Evidence.

- Blocker List Evidence.

- Missing Evidence List Evidence.

- Release Decision Audit Evidence.

- Correlation Evidence.

**49.3. Positive Path**

PASS khi:

- Evidence ACCEPTED.

- Smoke trace evidence.

- Smoke PASS.

- Completion Gate trace P0 evidence.

- Owner sign-off hợp lệ.

- No open blocker.

- Audit đầy đủ.

**49.4. Negative Path**

BLOCK/REVIEW khi:

- Evidence DRAFT/SUBMITTED/UNDER_REVIEW.

- Evidence REJECTED.

- Evidence VOID.

- Evidence SUPERSEDED.

- Missing smoke.

- Missing owner sign-off.

- Completion Report PENDING_EVIDENCE.

- Security blocker.

- P0 blocker.

**49.5. Blocked-if-Missing Rule**

Thiếu E2E này thì Completion Gate không PASS.

Không Gateway PASS.

Không Production Ready.

Không Release Approved.

**50. NEGATIVE PATH EVIDENCE CONTROL**

**50.1. Negative Path Evidence là bắt buộc**

Negative Path Evidence chứng minh hệ thống biết chặn khi thiếu điều kiện.

Không có Negative Path Evidence thì smoke chưa đủ.

Một hệ thống chỉ chứng minh “làm được khi đúng” chưa đủ điều kiện production.

Hệ thống Ginsengfood phải chứng minh “không làm sai khi thiếu điều kiện”.

**50.2. Nhóm Negative Path bắt buộc**

MASTER-05 khóa các nhóm negative path bắt buộc:

1.  Missing Source-of-Truth.

2.  Missing Owner Core.

3.  Missing Runtime Resolver.

4.  Missing Guard.

5.  Missing Customer Identity.

6.  Missing Customer Memory Snapshot.

7.  Missing Product Activation.

8.  Missing Sellable Status.

9.  Missing QuoteSnapshot.

10. Expired QuoteSnapshot.

11. Missing OrderDraft.

12. Missing CustomerConfirmation.

13. Duplicate CustomerConfirmation.

14. Missing PaymentReference.

15. Missing AccountingReview.

16. Customer says paid but not confirmed.

17. Customer sends transaction image but not confirmed.

18. Missing ShippingEvent.

19. Missing ETA.

20. Delivery Issue open.

21. Complaint open.

22. Privacy case open.

23. Health-sensitive without guard.

24. Counterfeit case open.

25. Member dispute open.

26. Commission dispute open.

27. Handoff fail.

28. Handoff delivery log conflict.

29. Public PII.

30. Public payment instruction attempted.

31. Public price quote attempted.

32. CRM opt-out.

33. CRM quiet hours.

34. CRM frequency cap.

35. CRM duplicate job.

36. Evidence not accepted.

37. Owner sign-off missing.

38. Completion Report PENDING_EVIDENCE.

39. Security blocker.

40. Hardcoded runtime data.

**50.3. Negative Path Evidence phải có audit**

Mỗi negative path phải có audit.

Audit phải ghi:

- Điều kiện thiếu/sai.

- Resolver status.

- Guard decision.

- Action bị block.

- Fallback/handoff nếu có.

- Suppression reason nếu có.

- Correlation ID.

- Evidence ID.

- Smoke ID.

- Domain.

- Owner.

- Thời điểm kiểm tra.

**50.4. Negative Path không được biến thành PASS**

Negative path không phải lỗi cần che.

Negative path là bằng chứng hệ thống chặn đúng.

Một negative path PASS nghĩa là hệ thống đã chặn đúng hành động sai.

Ví dụ:

- Thiếu QuoteSnapshot → AI không báo giá → Negative Path PASS.

- Khách nói đã chuyển → hệ thống không PAID → Negative Path PASS.

- Handoff fail → AI không nói đã gửi Messenger → Negative Path PASS.

- Evidence under review → Gateway không PASS → Negative Path PASS.

**50.5. Negative Path phải map Gate**

Mỗi negative path phải map với gate liên quan.

Ví dụ:

- Missing QuoteSnapshot → Quote Gate.

- Missing CustomerConfirmation → Order Gate.

- Missing AccountingReview → Payment Gate.

- Missing ShippingEvent → Shipping Gate.

- Complaint open → Priority Conflict Gate.

- Handoff fail → Gateway Gate.

- Missing evidence accepted → Completion Gate.

- Missing owner sign-off → Release Gate.

**51. SECURITY EVIDENCE CONTROL**

**51.1. Security Evidence là nhóm P0 riêng**

Security Evidence là nhóm bằng chứng bắt buộc khi hệ thống có:

- Customer data.

- PII.

- Payment instruction.

- Bank transfer.

- Messenger/Gateway.

- CRM outbound.

- Admin/release action.

- Evidence storage.

- Owner sign-off.

- Public comment automation.

- Platform/App Review scope.

Security Evidence không được gộp chung mơ hồ vào evidence thường.

**51.2. Security Evidence Scope**

Security Evidence phải bao phủ:

- PII protection.

- Payment data protection.

- No hardcoded bank account.

- No hardcoded secret/token.

- No public PII exposure.

- Public/private boundary.

- Access control evidence nếu thuộc scope.

- Audit evidence.

- Evidence integrity.

- Owner sign-off protection.

- Gateway policy safety.

- CRM opt-out / consent boundary nếu thuộc scope.

- Data deletion/privacy request nếu thuộc scope.

- App Review / platform permission nếu thuộc scope.

**51.3. M05-EV-SEC-001 — PII Protection Evidence**

Required Evidence:

- PII detection evidence.

- PII public block evidence.

- Private handoff evidence.

- Privacy case evidence.

- Audit evidence.

PASS khi:

- PII không bị lặp public.

- PII không bị gửi sai kênh.

- Privacy case suppress outbound đúng.

- Audit đầy đủ.

BLOCKED nếu:

- Public reply lộ PII.

- CRM gửi khi privacy case mở.

- Evidence thiếu audit.

**51.4. M05-EV-SEC-002 — Payment Data Protection Evidence**

Required Evidence:

- PaymentReference evidence.

- Bank Registry evidence.

- No-hardcoded-bank evidence.

- Accounting Review evidence.

- Payment dispute evidence.

- Audit evidence.

PASS khi:

- Không hardcode tài khoản ngân hàng.

- Payment instruction đúng registry.

- PAID không dựa vào ảnh/lời khách nói.

- Payment dispute suppress đúng.

BLOCKED nếu:

- AI/Gateway/CRM/Admin UI/frontend/template hardcode bank account.

- Khách nói đã chuyển là PAID.

- Thiếu Accounting Review trong luồng cần đối soát.

**51.5. M05-EV-SEC-003 — Secret / Token / Internal Data Evidence**

Required Evidence:

- No secret exposure evidence.

- No token exposure evidence.

- No internal ID public exposure evidence.

- No supplier/internal/private data exposure evidence nếu thuộc scope.

- Audit evidence.

PASS khi:

- Public response không lộ token/secret.

- Gateway không public internal trace.

- Evidence package không lộ dữ liệu nhạy cảm ngoài boundary.

BLOCKED nếu:

- Lộ secret/token.

- Lộ internal private data.

- Evidence chứa dữ liệu nhạy cảm không được bảo vệ.

**51.6. M05-EV-SEC-004 — Public / Private Boundary Evidence**

Required Evidence:

- Public comment boundary evidence.

- Private handoff evidence.

- Payment public block evidence.

- Price public block evidence.

- Health public block evidence.

- PII public block evidence.

- Audit evidence.

PASS khi:

- Public không báo giá.

- Public không payment.

- Public không PII.

- Public không health detail dài.

- Private flow tiếp nhận đúng.

BLOCKED nếu:

- Public báo giá.

- Public chốt đơn.

- Public payment instruction.

- Public health-sensitive detail.

- Public PII exposure.

**51.7. M05-EV-SEC-005 — Gateway Platform / App Review Evidence**

Required Evidence nếu thuộc Gateway/Meta/App scope:

- Permission scope evidence.

- Webhook handling evidence.

- Public comment policy evidence.

- Messenger handoff evidence.

- Dedup/idempotency evidence.

- Rate/abuse control evidence nếu thuộc scope.

- App Review evidence nếu cần.

- Security review evidence.

- Audit evidence.

PASS khi:

- Gateway không vi phạm policy.

- Public/private boundary đúng.

- Handoff đúng.

- Dedup/idempotency đúng.

- Security review PASS.

- App Review PASS nếu thuộc scope.

BLOCKED nếu:

- App Review blocker.

- Platform policy blocker.

- Handoff evidence thiếu.

- Public content vi phạm policy.

**52. GATEWAY EVIDENCE CONTROL**

**52.1. Gateway Evidence là gate độc lập**

Gateway Evidence phải được kiểm soát riêng vì Gateway là nơi tiếp xúc public, live comment, Messenger handoff, PII, payment boundary, health boundary, moderation và automation scale.

Gateway không được PASS chỉ vì AI Advisor hoặc CRM đã có evidence.

Gateway cần evidence riêng cho toàn bộ public/private flow.

**52.2. Gateway Evidence Package tối thiểu**

Gateway Evidence Package tối thiểu phải có:

- Public Comment Event Evidence.

- Comment Intent Classification Evidence.

- Public/Private Boundary Evidence.

- Messenger Handoff Evidence.

- Handoff Delivery Log Evidence.

- Handoff Success Evidence.

- Handoff Fail Evidence.

- Public Fallback Evidence.

- PII Guard Evidence.

- Payment Public Block Evidence.

- Price Public Block Evidence.

- Health Public Block Evidence.

- Diamond/Public Boundary Evidence nếu thuộc scope.

- Moderation Evidence.

- Dedup Evidence.

- Idempotency Evidence.

- Rate/duplicate protection evidence nếu thuộc scope.

- Private Quote Handoff Evidence nếu có quote.

- OrderDraft Private Evidence nếu Gateway hỗ trợ order flow.

- Audit Evidence.

- Security Evidence.

- Owner Sign-off Evidence.

- Completion Gate Evidence.

**52.3. Gateway Evidence Positive Path**

Gateway Positive Path PASS khi:

- Comment được nhận thành event.

- Intent được phân loại đúng.

- Public reply đúng boundary.

- Handoff được tạo khi cần private.

- Delivery log xác nhận success.

- Private flow nối đúng correlation.

- Quote/order nếu có đều đi trong private.

- Audit đầy đủ.

- Evidence ACCEPTED.

**52.4. Gateway Evidence Negative Path**

Gateway Negative Path PASS khi hệ thống chặn đúng các lỗi sau:

- Public quote attempt bị block.

- Public order closing bị block.

- Public PII repeat bị block.

- Public payment instruction bị block.

- Public health detail dài bị block.

- Handoff fail không nói đã gửi Messenger.

- Duplicate comment không trả lời trùng.

- Troll/abuse/spam được moderation theo policy.

- Gateway không tự mở production nếu Completion Gate chưa PASS.

**52.5. Gateway Evidence Blocked-if-Missing Rule**

Nếu thiếu Gateway Evidence:

- Gateway Gate không PASS.

- Public auto-reply không production ready.

- Messenger handoff không production ready.

- Live moderation không production ready.

- Gateway Completion Report vẫn PENDING_EVIDENCE.

- GATEWAY_STATUS vẫn BLOCKED.

- Production Ready vẫn NO nếu Gateway thuộc release scope.

- Release Approved vẫn NO nếu Gateway là P0 scope của release.

**53. GATEWAY SMOKE MATRIX**

**53.1. M05-EV-GW-001 — Public Comment Boundary**

PASS khi:

- Public reply không báo giá.

- Public reply không chốt đơn.

- Public reply không PII.

- Public reply không payment.

- Public reply không health detail dài.

BLOCKED nếu:

- Có bất kỳ public violation nào.

**53.2. M05-EV-GW-002 — Messenger Handoff Success**

PASS khi:

- Handoff event được tạo.

- Delivery log success.

- Private flow nối correlation.

- AI chỉ nói đã gửi Messenger khi delivery success.

BLOCKED nếu:

- Không có delivery log.

- Delivery không success nhưng nói đã gửi.

**53.3. M05-EV-GW-003 — Messenger Handoff Fail**

PASS khi:

- Handoff fail được ghi log.

- AI không nói đã gửi Messenger.

- Public fallback an toàn.

- Audit ghi reason.

BLOCKED nếu:

- Fail bị xem như success.

- Không có fallback/audit.

- Public fallback báo giá hoặc payment.

**53.4. M05-EV-GW-004 — No Public Price Quote**

PASS khi:

- Hỏi giá ở public được handoff private.

- Không trả giá cụ thể public.

- Không trả final payable public.

- Không quote member/Diamond public.

BLOCKED nếu:

- Public có giá cụ thể.

- Public có discount/quyền lợi cá nhân.

- Public có quote snapshot detail.

**53.5. M05-EV-GW-005 — PII / Payment / Health Public Guard**

PASS khi:

- PII không lặp public.

- Payment instruction không public.

- Health-sensitive detail không public.

- Handoff private nếu policy cho phép.

- Audit đầy đủ.

BLOCKED nếu:

- Lộ PII.

- Lộ payment instruction.

- Health detail dài public.

- Không có audit.

**53.6. M05-EV-GW-006 — Live Moderation**

PASS khi:

- Troll/abuse/spam được nhận diện theo policy.

- Comment bị ẩn/block theo rule nếu đủ điều kiện.

- Không kéo Messenger với user bị xác nhận troll/abuse/malicious theo policy.

- Complaint thật có bằng chứng không bị xử nhầm troll.

- Audit moderation đầy đủ.

BLOCKED nếu:

- Abuse public được AI tranh cãi.

- Troll vẫn được tạo quote/order.

- Complaint thật bị chặn sai không review.

**53.7. M05-EV-GW-007 — Gateway Dedup / Idempotency**

PASS khi:

- Duplicate comment không trả lời trùng.

- Webhook retry không tạo handoff trùng.

- Handoff retry không tạo success giả.

- Audit duplicate/no-action đầy đủ.

BLOCKED nếu:

- Live reply trùng hàng loạt.

- Handoff duplicate.

- Delivery log conflict không xử lý.

**53.8. M05-EV-GW-008 — Gateway Release Gate**

PASS khi:

- Gateway Evidence Package complete.

- Gateway smoke PASS.

- E2E Gateway flow PASS.

- Security evidence PASS.

- Owner sign-off PASS.

- Completion Gate PASS.

- No open blocker.

BLOCKED nếu:

- Completion Report PENDING_EVIDENCE.

- Missing P0 evidence.

- Missing security evidence.

- Missing owner sign-off.

- Public/private violation còn mở.

**54. SECURITY + GATEWAY RELEASE DEPENDENCY**

**54.1. Gateway không được PASS nếu Security Evidence thiếu**

Gateway liên quan public/private data, PII, Messenger handoff, payment boundary, health boundary, comment automation và platform policy.

Vì vậy, Gateway Gate không được PASS nếu thiếu security evidence thuộc scope.

**54.2. Gateway không được PASS nếu App Review/Platform Evidence thiếu**

Nếu release scope yêu cầu App Review hoặc platform permission, Gateway không được PASS khi:

- Permission chưa approved.

- App Review blocker mở.

- Webhook policy chưa chứng minh.

- Platform policy risk chưa xử lý.

- Public/Private boundary chưa test.

**54.3. Gateway không được PASS nếu E2E chưa PASS**

Gateway unit smoke không đủ.

Gateway chỉ được xem xét khi E2E liên quan PASS, bao gồm tối thiểu:

- Public Comment → Messenger → Quote.

- Public Comment → Handoff fail → Safe Fallback.

- Public PII → Private Handoff.

- Public Payment → Block/Handoff.

- Public Health → Block/Handoff.

- Live Moderation → No Sales to Abuse/Troll.

- Gateway → CRM/AI/Order boundary nếu thuộc scope.

**55. EVIDENCE ACCEPTANCE CONTROL FOR SMOKE**

**55.1. Evidence accepted mới được dùng PASS**

Mọi smoke trong PHẦN 3/4 chỉ PASS khi evidence ở trạng thái ACCEPTED.

Smoke không PASS nếu evidence:

- DRAFT.

- SUBMITTED.

- UNDER_REVIEW.

- REJECTED.

- VOID.

- SUPERSEDED.

- Sai scope.

- Thiếu audit.

- Thiếu trace.

- Thiếu owner.

**55.2. Evidence phải còn hiệu lực**

Evidence ACCEPTED nhưng đã cũ hoặc bị ảnh hưởng bởi thay đổi hệ thống phải được review lại nếu:

- Source-of-Truth thay đổi.

- Runtime Resolver thay đổi.

- Guard rule thay đổi.

- Payment rule thay đổi.

- Shipping rule thay đổi.

- Gateway policy thay đổi.

- CRM suppression rule thay đổi.

- Product activation rule thay đổi.

- Security scope thay đổi.

- Release scope thay đổi.

Evidence không được tự động giữ PASS nếu điều kiện P0 đã thay đổi.

**55.3. Evidence revalidation**

Evidence cần revalidation khi:

- Có thay đổi code/runtime sau này.

- Có thay đổi policy.

- Có blocker mới.

- Có incident.

- Có owner yêu cầu review lại.

- Có security concern.

- Có platform/App Review change.

- Có payment/shipping/CRM/Gateway rule change.

- Có domain P0 dependency mới.

Revalidation phải có audit.

**56. COMPLETION GATE EVIDENCE CONTROL**

**56.1. Completion Gate chỉ dùng accepted evidence**

Completion Gate chỉ được xét PASS khi tất cả evidence bắt buộc trong scope đều ACCEPTED.

Nếu một P0 evidence còn pending, gate không PASS.

Nếu một P0 evidence bị rejected, gate BLOCKED.

Nếu một P0 evidence thiếu audit, gate BLOCKED.

**56.2. Completion Gate phải kiểm tra E2E**

Completion Gate không được chỉ dựa trên domain smoke.

Nếu release scope có flow E2E, Completion Gate phải kiểm tra E2E smoke.

Ví dụ:

- Gateway release cần Gateway E2E.

- Payment release cần Order → Payment → Accounting E2E.

- CRM release cần CRM → Suppression → Recommendation E2E.

- Diamond release cần Diamond Link → Commission E2E.

- Shipping release cần Order → Shipping → CSKH E2E.

**56.3. Completion Gate phải kiểm tra negative path**

Completion Gate không PASS nếu chỉ có positive path.

Completion Gate phải có negative path evidence cho các blocker quan trọng.

Không có negative path evidence nghĩa là hệ thống chưa chứng minh được khả năng chặn lỗi.

**56.4. Completion Gate phải kiểm tra security evidence**

Completion Gate liên quan Gateway, CRM, Payment, Customer Identity, Privacy hoặc public channel phải kiểm tra security evidence.

Thiếu security evidence thì không Production Ready.

**57. PHẦN 3/4 DONE GATE**

PHẦN 3/4 được xem là đạt governance khi:

- Smoke Matrix bao phủ đủ 16 business domain P0.

- Mỗi smoke có required evidence.

- Mỗi smoke có positive path.

- Mỗi smoke có negative path.

- Mỗi smoke có blocked-if-missing rule.

- E2E Evidence Package được định nghĩa cho các luồng trọng yếu.

- Negative Path Evidence Control được khóa.

- Security Evidence Control được khóa.

- Gateway Evidence Control được khóa.

- Gateway Smoke Matrix được khóa.

- Completion Gate chỉ dùng accepted evidence.

- Không có evidence thì không PASS.

- Không có E2E smoke thì không Production Ready.

- Không có Security Evidence thì không Gateway/Production Ready nếu thuộc scope.

- Không có Owner Sign-off thì không Release Approved.

- Completion Report PENDING_EVIDENCE thì Gateway vẫn BLOCKED.

**58. KẾT LUẬN PHẦN 3/4**

PHẦN 3/4 của MASTER-05 đã khóa Smoke Matrix, E2E Evidence Package, Negative Path Evidence, Security Evidence và Gateway Evidence Control.

Từ thời điểm áp dụng MASTER-05:

- Mọi domain P0 phải có smoke.

- Mọi smoke phải có evidence.

- Mọi evidence phải có status.

- Chỉ ACCEPTED evidence mới được dùng PASS.

- Smoke phải kiểm tra cả positive path và negative path.

- E2E Evidence Package phải chứng minh luồng xuyên domain.

- Unit smoke không thay thế E2E smoke.

- Negative path là bắt buộc để chứng minh hệ thống chặn sai đúng cách.

- Security evidence là nhóm P0 riêng.

- Gateway evidence là nhóm P0 riêng.

- Gateway không PASS nếu thiếu handoff evidence, public/private boundary evidence, security evidence, E2E evidence hoặc owner sign-off.

- Completion Gate không PASS nếu thiếu P0 evidence.

- Completion Report không thay thế Completion Gate.

- Owner review không thay thế Owner Sign-off.

- Production Ready vẫn là NO nếu thiếu implementation, E2E smoke, security evidence, owner sign-off hoặc gate PASS.

- Release Approved vẫn là NO nếu thiếu owner sign-off.

- Go-live Approved vẫn là NO nếu chưa đủ Production Ready, Release Approved và Owner approval.

MASTER-05 tiếp tục ở PHẦN 4/4 với Final Evidence Done Gate, Completion Gate Matrix, Release Control và MASTER-05 Final Conclusion.

**PHẦN 4/4 — FINAL EVIDENCE DONE GATE / COMPLETION GATE MATRIX / RELEASE CONTROL / MASTER-05 FINAL CONCLUSION**

PHẦN 4/4 hoàn tất MASTER-05 bằng lớp Final Evidence Done Gate, Completion Gate Matrix, Release Control và kết luận trạng thái cuối. Phần này giữ đúng nguyên tắc đã khóa: Completion Report mặc định PENDING_EVIDENCE, Gateway chỉ được xem xét khi all P0 gates PASS, evidence package complete, E2E smoke PASS, owner sign-off PASS, và không được gọi Ready/PASS chỉ vì tài liệu đã viết xong.

**59. MỤC TIÊU CỦA FINAL EVIDENCE DONE GATE**

Final Evidence Done Gate của MASTER-05 quy định điều kiện cuối cùng để lớp Evidence / Smoke / Completion Gate được xem là hoàn chỉnh ở tầng governance.

Final Evidence Done Gate không xác nhận hệ thống đã triển khai xong.

Final Evidence Done Gate không xác nhận code đã chạy.

Final Evidence Done Gate không xác nhận database, API, DTO, UI hoặc worker đã hoàn tất.

Final Evidence Done Gate không xác nhận Gateway PASS.

Final Evidence Done Gate không xác nhận Production Ready.

Final Evidence Done Gate chỉ xác nhận rằng chuẩn bằng chứng, smoke, evidence package, negative path, security evidence, Gateway evidence, completion gate, owner sign-off và release control đã đủ rõ để các pack implementation phía sau không tự gọi PASS khi chưa có evidence accepted.

**60. PHẠM VI CỦA FINAL EVIDENCE DONE GATE**

Final Evidence Done Gate áp dụng cho toàn bộ 16 business domain P0:

1.  Governance / Source-of-Truth.

2.  Product Knowledge / Claim / Brand / Scientific Proof.

3.  Customer Identity / Customer Memory.

4.  Segment Recommendation / Product Recommendation.

5.  CRM 12-Month / Message Trigger / Suppression.

6.  Member Lifecycle / Rights / Downgrade / Dispute.

7.  Diamond / Affiliate / Entrepreneurship / Distributor Boundary.

8.  Pricing / Program / 24/7 / Golden Hour / QuoteSnapshot.

9.  Program / Sellable / Product Activation / Production Signal.

10. Payment / Bank Transfer / Accounting Review.

11. Shipping / Tracking / ETA / COD.

12. Order / OrderDraft / CustomerConfirmation / IVR.

13. Gateway / Public Comment / Messenger Handoff / Moderation.

14. Official Contact / Phone Number Registry.

15. Health Boundary / Complaint / Priority Conflict.

16. Evidence / Completion Report / Gateway Gate / Security.

Final Evidence Done Gate kiểm soát:

- Evidence Registry.

- Required Evidence.

- Evidence Owner.

- Evidence Status.

- Smoke Matrix.

- E2E Evidence Package.

- Negative Path Evidence.

- Security Evidence.

- Gateway Evidence.

- Completion Gate.

- Owner Sign-off.

- Release Control.

- Go-live Control.

**61. NGUYÊN TẮC FINAL EVIDENCE DONE GATE**

**61.1. Evidence Done Gate không dựa trên tài liệu đã viết xong**

MASTER-05 quy định rõ: tài liệu hoàn thành không đồng nghĩa evidence đã đủ.

Một file governance có thể đạt trạng thái CLEAN FINAL, nhưng nếu implementation chưa có, evidence chưa accepted, smoke chưa PASS, owner chưa sign-off và completion gate chưa PASS thì Gateway vẫn BLOCKED, Production Ready vẫn NO, Release Approved vẫn NO và Go-live Approved vẫn NO.

**61.2. Evidence Done Gate phải kiểm tra cả bằng chứng thành công và bằng chứng chặn lỗi**

Một hệ thống chỉ chứng minh “làm được khi đúng” chưa đủ.

Hệ thống Ginsengfood phải chứng minh “không làm sai khi thiếu điều kiện”.

Vì vậy, Final Evidence Done Gate bắt buộc kiểm tra:

- Positive Path Evidence.

- Negative Path Evidence.

- Suppression Evidence.

- Fallback Evidence.

- Handoff Evidence.

- Conflict Evidence.

- Security Evidence.

- Audit Evidence.

- Owner Sign-off Evidence.

- Completion Gate Evidence.

**61.3. Evidence Done Gate phải chặn mọi PASS không có evidence accepted**

Không có evidence accepted thì không PASS.

Evidence DRAFT không PASS.

Evidence SUBMITTED không PASS.

Evidence UNDER_REVIEW không PASS.

Evidence REJECTED không PASS.

Evidence VOID không PASS.

Evidence SUPERSEDED không PASS.

Evidence sai scope không PASS.

Evidence thiếu audit không PASS.

Evidence không trace smoke không PASS.

Evidence không trace domain/dependency không PASS.

**61.4. Evidence Done Gate phải chặn mọi Completion Report tự PASS**

Completion Report là tài liệu tổng hợp trạng thái.

Completion Report không tự tạo PASS.

Completion Report không thay thế Completion Gate.

Completion Report không thay thế evidence accepted.

Completion Report không thay thế owner sign-off.

Completion Report không thay thế E2E smoke.

Nếu Completion Report còn PENDING_EVIDENCE thì Gateway vẫn BLOCKED.

**62. FINAL EVIDENCE DONE GATE CHECKLIST**

**62.1. Gate 01 — Evidence Registry Gate**

Điều kiện PASS:

- Evidence Registry bao phủ đủ 16 business domain P0.

- Mỗi evidence có evidence_id.

- Mỗi evidence có owner.

- Mỗi evidence có status.

- Mỗi evidence có scope.

- Mỗi evidence có audit.

- Mỗi evidence trace được smoke/domain/dependency.

Trạng thái BLOCKED nếu:

- Evidence không có ID.

- Evidence không có owner.

- Evidence không có status.

- Evidence không có audit.

- Evidence không trace được smoke.

- Evidence sai scope nhưng vẫn dùng PASS.

**62.2. Gate 02 — Evidence Status Gate**

Điều kiện PASS:

- Chỉ ACCEPTED evidence được dùng PASS.

- Evidence lifecycle rõ: DRAFT, SUBMITTED, UNDER_REVIEW, ACCEPTED, REJECTED, VOID, SUPERSEDED.

- Evidence rejected/void/superseded không được dùng cho gate hiện hành.

- Evidence stale phải được revalidation nếu scope thay đổi.

Trạng thái BLOCKED nếu:

- DRAFT evidence dùng PASS.

- SUBMITTED evidence dùng PASS.

- UNDER_REVIEW evidence dùng PASS.

- REJECTED evidence dùng PASS.

- VOID evidence dùng PASS.

- SUPERSEDED evidence dùng PASS.

- Evidence cũ không revalidate sau thay đổi P0.

**62.3. Gate 03 — Smoke Matrix Gate**

Điều kiện PASS:

- Smoke Matrix bao phủ đủ 16 business domain P0.

- Mỗi smoke có smoke ID.

- Mỗi smoke có mục tiêu rõ.

- Mỗi smoke có required evidence.

- Mỗi smoke có positive path.

- Mỗi smoke có negative path.

- Mỗi smoke có blocked-if-missing rule.

- Mỗi smoke trace được domain/dependency.

Trạng thái BLOCKED nếu:

- Domain P0 thiếu smoke.

- Smoke thiếu evidence.

- Smoke chỉ có positive path.

- Smoke không có negative path.

- Smoke không có blocked-if-missing rule.

- Smoke không trace được domain/dependency.

**62.4. Gate 04 — E2E Evidence Gate**

Điều kiện PASS:

- Các luồng E2E trọng yếu có evidence package.

- E2E evidence chứng minh luồng xuyên domain.

- Unit smoke không thay thế E2E smoke.

- E2E smoke có positive path và negative path.

- E2E smoke có audit và correlation.

- E2E evidence được ACCEPTED.

Trạng thái BLOCKED nếu:

- Gateway thiếu E2E Public Comment → Messenger → Quote.

- Order thiếu E2E Quote → Order.

- Payment thiếu E2E Order → Payment → Accounting.

- Shipping thiếu E2E Order → Shipping → CSKH.

- CRM thiếu E2E CRM → Recommendation → Quote.

- Diamond thiếu E2E Diamond Link → Commission.

- Priority Conflict thiếu E2E Suppression.

- Release thiếu E2E Evidence → Gate → Sign-off.

**62.5. Gate 05 — Negative Path Evidence Gate**

Điều kiện PASS:

- Negative path evidence được định nghĩa cho mọi P0 blocker.

- Missing condition được test.

- Conflict condition được test.

- Suppression được test.

- Fallback được test.

- Handoff fail được test.

- Evidence under review/rejected/void/superseded được test.

- Negative path có audit.

Trạng thái BLOCKED nếu:

- Thiếu negative path cho QuoteSnapshot.

- Thiếu negative path cho CustomerConfirmation.

- Thiếu negative path cho Accounting Review.

- Thiếu negative path cho Shipping Event.

- Thiếu negative path cho Handoff Fail.

- Thiếu negative path cho Complaint/Privacy/Health.

- Thiếu negative path cho Evidence Not Accepted.

- Thiếu negative path cho Owner Sign-off Missing.

**62.6. Gate 06 — Security Evidence Gate**

Điều kiện PASS:

- Security Evidence đúng scope.

- PII protection có evidence.

- Payment data protection có evidence.

- No-hardcoded-bank có evidence.

- No-secret/token exposure có evidence.

- Public/private boundary có evidence.

- Gateway platform policy có evidence nếu thuộc scope.

- App Review evidence có nếu thuộc scope.

- Security audit đầy đủ.

Trạng thái BLOCKED nếu:

- Public PII exposure.

- Public payment instruction.

- Hardcoded bank account.

- Secret/token exposure.

- App Review blocker.

- Gateway platform policy blocker.

- Security evidence chưa accepted.

- Security audit thiếu.

**62.7. Gate 07 — Gateway Evidence Gate**

Điều kiện PASS:

- Gateway Evidence Package complete.

- Public Comment Boundary PASS.

- Messenger Handoff Success PASS.

- Messenger Handoff Fail PASS.

- No Public Price Quote PASS.

- PII / Payment / Health Public Guard PASS.

- Live Moderation PASS nếu thuộc scope.

- Dedup / Idempotency PASS.

- Gateway E2E PASS.

- Security Evidence PASS.

- Owner Sign-off PASS.

- Completion Gate PASS.

Trạng thái BLOCKED nếu:

- Public báo giá.

- Public chốt đơn.

- Public lặp PII.

- Public payment instruction.

- Public health detail dài.

- Handoff fail nhưng nói đã gửi Messenger.

- Missing handoff delivery log.

- Missing Gateway E2E.

- Missing security evidence.

- Completion Report PENDING_EVIDENCE.

- Owner chưa sign-off.

**62.8. Gate 08 — Owner Sign-off Gate**

Điều kiện PASS:

- Có owner_signoff_id.

- Owner sign-off đúng phạm vi.

- Owner sign-off trace được completion gate.

- Owner sign-off trace được evidence package.

- Owner sign-off immutable.

- Owner sign-off có audit.

Trạng thái BLOCKED nếu:

- Chỉ có owner review.

- Chỉ có owner comment.

- Chỉ có owner đã xem.

- Thiếu owner_signoff_id.

- Sign-off sai scope.

- Sign-off không trace gate.

- Sign-off bị sửa ngược.

**62.9. Gate 09 — Completion Gate Integrity Gate**

Điều kiện PASS:

- Completion Gate có completion_gate_id.

- Completion Gate trace được domain/dependency.

- Completion Gate trace được P0 evidence.

- Completion Gate kiểm tra evidence status.

- Completion Gate kiểm tra smoke PASS.

- Completion Gate kiểm tra E2E smoke nếu thuộc scope.

- Completion Gate kiểm tra security evidence nếu thuộc scope.

- Completion Gate kiểm tra owner sign-off nếu thuộc release scope.

- Completion Gate kiểm tra blocker list.

- Completion Gate có audit.

Trạng thái BLOCKED nếu:

- Completion Gate thiếu ID.

- Completion Gate thiếu P0 evidence.

- Completion Gate dùng evidence chưa accepted.

- Completion Gate thiếu E2E.

- Completion Gate thiếu security evidence.

- Completion Gate thiếu owner sign-off.

- Completion Gate bỏ qua blocker.

- Completion Gate không có audit.

**62.10. Gate 10 — Release Evidence Gate**

Điều kiện PASS:

- Required evidence ACCEPTED.

- Required smoke PASS.

- Required E2E smoke PASS.

- Required security evidence PASS.

- Required Gateway evidence PASS nếu thuộc scope.

- Owner Sign-off PASS.

- Completion Gate PASS.

- No open blocker.

- Release audit đầy đủ.

Trạng thái BLOCKED nếu:

- Missing evidence.

- Missing smoke.

- Missing E2E.

- Missing security.

- Missing Gateway evidence nếu thuộc scope.

- Missing owner sign-off.

- Completion Report PENDING_EVIDENCE.

- Open blocker.

- Release audit thiếu.

**63. COMPLETION GATE MATRIX**

**63.1. Mục tiêu của Completion Gate Matrix**

Completion Gate Matrix quy định điều kiện tối thiểu để một domain, một pack, một flow E2E hoặc một release scope được xét PASS.

Completion Gate Matrix không thay thế implementation test.

Completion Gate Matrix là chuẩn governance để chặn việc tự tuyên bố PASS khi chưa đủ evidence.

**63.2. Completion Gate cấp Domain**

Completion Gate cấp Domain áp dụng cho từng business domain P0.

Một Domain Gate chỉ PASS khi:

- Domain có Source-of-Truth.

- Domain có Owner Core.

- Domain có Runtime Resolver nếu thuộc runtime.

- Domain có Guard nếu có action P0.

- Domain có Traceability ID.

- Domain có Required Evidence ACCEPTED.

- Domain có Domain Smoke PASS.

- Domain có negative path evidence.

- Domain có audit.

- Không có blocker mở.

Nếu thiếu một điều kiện P0, Domain Gate không PASS.

**63.3. Completion Gate cấp Cross-Pack**

Cross-Pack Gate áp dụng khi một flow đi qua nhiều pack.

Một Cross-Pack Gate chỉ PASS khi:

- Tất cả domain liên quan PASS.

- Dependency giữa pack có evidence.

- Correlation trace không đứt.

- Runtime Resolver chain hoạt động.

- Guard chain hoạt động.

- E2E evidence ACCEPTED.

- Negative path evidence đầy đủ.

- Audit xuyên pack đầy đủ.

- Không có conflict chưa xử lý.

Ví dụ:

- Gateway → AI Advisor → Quote.

- Quote → Order.

- Order → Payment.

- Order → Shipping.

- CRM → Recommendation → Quote.

- Diamond → Order → Commission.

- Evidence → Smoke → Gate → Sign-off.

**63.4. Completion Gate cấp E2E**

E2E Gate chỉ PASS khi toàn bộ hành trình nghiệp vụ được chứng minh từ event đầu vào đến action cuối.

Một E2E Gate phải có:

- E2E smoke ID.

- Event đầu vào.

- Resolver chain.

- Guard chain.

- Required ID.

- Positive path evidence.

- Negative path evidence.

- Audit.

- Correlation.

- Evidence owner.

- No open blocker.

Nếu chỉ có unit/domain smoke mà thiếu E2E, E2E Gate không PASS.

**63.5. Completion Gate cấp Gateway**

Gateway Gate là gate P0 riêng.

Gateway Gate chỉ PASS khi:

- Gateway Domain Smoke PASS.

- Gateway E2E PASS.

- Public/Private Boundary Evidence ACCEPTED.

- Messenger Handoff Evidence ACCEPTED.

- Handoff Fail Evidence ACCEPTED.

- PII/Payment/Health Public Guard Evidence ACCEPTED.

- Moderation Evidence ACCEPTED nếu thuộc scope.

- Dedup/Idempotency Evidence ACCEPTED.

- Security Evidence ACCEPTED.

- App Review/Platform Evidence ACCEPTED nếu thuộc scope.

- Owner Sign-off PASS.

- Completion Gate PASS.

- Completion Report không còn PENDING_EVIDENCE.

- Không có Gateway blocker mở.

Nếu thiếu bất kỳ điều kiện nào, Gateway vẫn BLOCKED.

**63.6. Completion Gate cấp Payment**

Payment Gate chỉ PASS khi:

- PaymentReference Evidence ACCEPTED.

- Company Bank Account Registry Evidence ACCEPTED.

- No-hardcoded-bank Evidence ACCEPTED.

- BankTransferQueue Evidence ACCEPTED nếu thuộc chuyển khoản.

- AccountingReview Evidence ACCEPTED nếu cần đối soát.

- No-auto-PAID Negative Path Evidence ACCEPTED.

- Payment Dispute Evidence ACCEPTED.

- Audit Evidence ACCEPTED.

- Payment E2E PASS.

- Không có payment blocker mở.

Nếu thiếu Accounting Review trong luồng cần đối soát, Payment Gate không PASS.

**63.7. Completion Gate cấp Shipping**

Shipping Gate chỉ PASS khi:

- Shipping Eligibility Evidence ACCEPTED.

- Shipping Info Evidence ACCEPTED.

- Shipping Fee Evidence ACCEPTED nếu thuộc scope.

- ETA Evidence ACCEPTED nếu trả ETA.

- COD Evidence ACCEPTED nếu thuộc COD.

- Tracking Event Evidence ACCEPTED.

- Delivery Issue Suppression Evidence ACCEPTED.

- No-fabricated-status Evidence ACCEPTED.

- Shipping E2E PASS.

- Không có shipping blocker mở.

Nếu thiếu Shipping Core evidence, AI/CRM/Gateway không được trả trạng thái vận chuyển cụ thể.

**63.8. Completion Gate cấp Order**

Order Gate chỉ PASS khi:

- QuoteSnapshot Evidence ACCEPTED.

- QuoteCart Evidence ACCEPTED.

- OrderConfirmationDraft Evidence ACCEPTED.

- CustomerConfirmation Evidence ACCEPTED.

- OrderCode Evidence ACCEPTED.

- Idempotency Evidence ACCEPTED.

- Duplicate Confirmation Negative Path Evidence ACCEPTED.

- IVR Boundary Evidence ACCEPTED nếu IVR thuộc scope.

- Order E2E PASS.

- Không có order blocker mở.

Nếu thiếu CustomerConfirmation, Order Gate không PASS.

**63.9. Completion Gate cấp CRM**

CRM Gate chỉ PASS khi:

- CRM Trigger Evidence ACCEPTED.

- CRM Message Job Evidence ACCEPTED.

- Customer Identity Evidence ACCEPTED.

- Suppression Evidence ACCEPTED.

- Quiet Hours Evidence ACCEPTED.

- Frequency Cap Evidence ACCEPTED.

- Opt-out Evidence ACCEPTED.

- Dedup Evidence ACCEPTED.

- Idempotency Evidence ACCEPTED.

- Immutable Message Text Evidence ACCEPTED.

- CRM Negative Path Evidence ACCEPTED.

- CRM E2E PASS.

- Không có CRM blocker mở.

Nếu thiếu suppression evidence, CRM không production ready.

**63.10. Completion Gate cấp Diamond / Commission**

Diamond / Commission Gate chỉ PASS khi:

- Diamond Referral Link Evidence ACCEPTED.

- Diamond Bind Evidence ACCEPTED.

- Ads/Diamond Conflict Evidence ACCEPTED.

- Self-purchase Policy Evidence ACCEPTED.

- Eligible Order Evidence ACCEPTED.

- Payment/Accounting Eligibility Evidence ACCEPTED.

- Commission Event Evidence ACCEPTED.

- Commission Dispute Evidence ACCEPTED.

- No-hardcoded-commission Evidence ACCEPTED.

- Diamond E2E PASS.

- Không có Diamond/commission blocker mở.

Nếu thiếu bind hoặc eligible order, không commission PASS.

**63.11. Completion Gate cấp Priority Conflict**

Priority Conflict Gate chỉ PASS khi:

- Health Boundary Evidence ACCEPTED.

- Complaint Evidence ACCEPTED.

- Privacy Evidence ACCEPTED.

- Counterfeit Evidence ACCEPTED.

- Payment Dispute Evidence ACCEPTED nếu thuộc scope.

- Delivery Issue Evidence ACCEPTED nếu thuộc scope.

- Member Dispute Evidence ACCEPTED nếu thuộc scope.

- Commission Dispute Evidence ACCEPTED nếu thuộc scope.

- Suppression Evidence ACCEPTED.

- Handoff/Escalation Evidence ACCEPTED.

- Negative Path Evidence ACCEPTED.

- Không có unresolved case blocker nếu release cần đóng.

Nếu case mở trong phạm vi release, sales/CRM/Gateway related flow không PASS.

**63.12. Completion Gate cấp Security**

Security Gate chỉ PASS khi:

- PII Protection Evidence ACCEPTED.

- Payment Data Protection Evidence ACCEPTED.

- No Secret/Token Exposure Evidence ACCEPTED.

- No Hardcoded Bank Evidence ACCEPTED.

- Public/Private Boundary Evidence ACCEPTED.

- Access Control Evidence ACCEPTED nếu thuộc scope.

- Privacy Request Evidence ACCEPTED nếu thuộc scope.

- App Review / Platform Evidence ACCEPTED nếu thuộc scope.

- Security Audit Evidence ACCEPTED.

- No open security blocker.

Nếu security blocker mở, Production Ready không YES.

**64. RELEASE CONTROL MODEL**

**64.1. Các cấp release control**

MASTER-05 khóa 5 cấp release control:

1.  Governance PASS.

2.  Evidence Ready.

3.  Completion Gate PASS.

4.  Release Approved.

5.  Go-live Approved.

Các cấp này không được dùng lẫn nhau.

**64.2. Governance PASS**

Governance PASS nghĩa là tài liệu governance đã đủ chuẩn để làm nền.

Governance PASS không đồng nghĩa:

- Implementation done.

- Evidence accepted.

- Smoke PASS.

- E2E PASS.

- Security PASS.

- Gateway PASS.

- Production Ready.

- Release Approved.

- Go-live Approved.

MASTER-05 có thể Governance PASS nhưng hệ thống vẫn chưa production ready.

**64.3. Evidence Ready**

Evidence Ready nghĩa là evidence package đã được gom đủ để review hoặc đã đủ ACCEPTED theo scope.

Evidence Ready không đồng nghĩa Release Approved.

Evidence Ready không thay thế Owner Sign-off.

Evidence Ready không tự tạo Gateway PASS.

**64.4. Completion Gate PASS**

Completion Gate PASS nghĩa là gate đã kiểm tra đủ evidence, smoke, E2E, security, blocker và audit trong phạm vi của gate.

Completion Gate PASS vẫn cần owner sign-off nếu muốn release approved.

**64.5. Release Approved**

Release Approved chỉ hợp lệ khi:

- Completion Gate PASS.

- Owner Sign-off PASS.

- Required evidence ACCEPTED.

- Required smoke PASS.

- Required E2E PASS.

- Required security/app review/UAT PASS nếu thuộc scope.

- No open blocker.

- Release audit đầy đủ.

- Rollback/incident handling sẵn sàng nếu thuộc scope.

**64.6. Go-live Approved**

Go-live Approved chỉ hợp lệ khi:

- Production Ready = YES.

- Release Approved = YES.

- Gateway PASS nếu thuộc scope.

- Payment/Shipping/Order/CRM/Gateway P0 gates PASS nếu thuộc scope.

- Security/App Review/Meta permission PASS nếu thuộc scope.

- Owner phê duyệt go-live.

- Rollback plan, monitoring, incident handling đã sẵn sàng nếu thuộc scope.

Nếu chưa đủ điều kiện, Go-live Approved vẫn là NO.

**65. PRODUCTION READY CONTROL**

**65.1. Production Ready không được bật bằng tài liệu**

Production Ready không được chuyển YES chỉ vì:

- MASTER đã viết xong.

- PACK đã viết xong.

- Dev nói đã làm.

- Checklist nội bộ ghi xong.

- Completion Report ghi đầy đủ.

- Có một phần smoke PASS.

- Có một phần evidence accepted.

Production Ready chỉ được chuyển YES khi implementation thực tế và evidence accepted chứng minh hệ thống vận hành đúng trong phạm vi release.

**65.2. Điều kiện Production Ready tối thiểu**

Production Ready chỉ được xét khi có:

- Implementation đúng scope.

- Source-of-Truth hoạt động.

- Runtime Resolver hoạt động.

- Guard hoạt động.

- Traceability ID hoạt động.

- Audit hoạt động.

- Evidence Registry hoạt động.

- Smoke PASS.

- E2E Smoke PASS.

- Negative Path Evidence ACCEPTED.

- Security Evidence ACCEPTED.

- Owner Sign-off PASS.

- Completion Gate PASS.

- No P0 blocker.

- Rollback/incident handling nếu thuộc scope.

**65.3. Production Ready phải theo scope**

Production Ready phải ghi rõ scope.

Không được nói toàn hệ thống production ready nếu chỉ một pack đã sẵn sàng.

Ví dụ:

- Gateway production ready không đồng nghĩa Payment production ready.

- CRM production ready không đồng nghĩa Order production ready.

- Quote production ready không đồng nghĩa Shipping production ready.

- Product Knowledge ready không đồng nghĩa Gateway ready.

- Governance ready không đồng nghĩa runtime ready.

**66. GATEWAY RELEASE CONTROL**

**66.1. Gateway Release là P0 Release**

Gateway Release là P0 vì liên quan trực tiếp đến public comment, Messenger handoff, PII, giá, payment, health, moderation, CRM, AI Advisor và customer-facing automation.

Gateway không được mở production nếu thiếu Gateway Evidence Package.

**66.2. Gateway Release điều kiện tối thiểu**

Gateway Release chỉ được xem xét khi:

- Gateway Domain Smoke PASS.

- Gateway E2E PASS.

- Security Evidence PASS.

- Public/Private Boundary PASS.

- Messenger Handoff Success PASS.

- Messenger Handoff Fail PASS.

- Handoff Delivery Log PASS.

- No Public Price PASS.

- No Public Payment PASS.

- No Public PII PASS.

- No Public Health Detail PASS.

- Moderation PASS nếu thuộc scope.

- Dedup / Idempotency PASS.

- Owner Sign-off PASS.

- Completion Gate PASS.

- Completion Report không còn PENDING_EVIDENCE.

- No open Gateway blocker.

**66.3. Gateway Release vẫn BLOCKED nếu thiếu một P0 điều kiện**

Gateway vẫn BLOCKED nếu:

- Thiếu evidence.

- Thiếu E2E.

- Thiếu security.

- Thiếu handoff delivery log.

- Thiếu negative path.

- Thiếu owner sign-off.

- Có public/private violation.

- Có app/platform policy blocker.

- Completion Report còn PENDING_EVIDENCE.

- Có P0 dependency missing.

**67. COMPLETION REPORT CONTROL**

**67.1. Completion Report phải phản ánh đúng gate**

Completion Report phải phản ánh trạng thái thật của gate.

Completion Report không được che blocker.

Completion Report không được ghi PASS khi gate chưa PASS.

Completion Report không được ghi Production Ready khi chưa đủ evidence.

Completion Report không được ghi Release Approved khi thiếu owner sign-off.

Completion Report không được ghi Go-live Approved khi chưa đủ điều kiện cuối.

**67.2. Completion Report phải có status đúng**

Completion Report phải dùng trạng thái đúng:

- NOT_STARTED.

- IN_PROGRESS.

- PENDING_EVIDENCE.

- UNDER_REVIEW.

- BLOCKED.

- GATE_REVIEW_READY.

- GATE_PASS.

- RELEASE_REVIEW_READY.

- RELEASE_APPROVED.

- GO_LIVE_APPROVED.

Nếu thiếu evidence thì PENDING_EVIDENCE.

Nếu có blocker P0 thì BLOCKED.

Nếu đang chờ review thì UNDER_REVIEW.

Nếu đủ evidence nhưng chưa gate review thì GATE_REVIEW_READY.

Nếu gate đã PASS thì GATE_PASS.

Không được dùng trạng thái mơ hồ như “gần xong”, “cơ bản pass”, “có thể chạy”, “tạm ready”.

**67.3. Completion Report phải liệt kê blocker**

Completion Report bắt buộc liệt kê:

- Missing evidence.

- Missing smoke.

- Missing E2E.

- Missing negative path.

- Missing security.

- Missing owner sign-off.

- Missing resolver.

- Missing guard.

- Missing audit.

- Hardcode violation.

- Consumer inference violation.

- Open complaint/privacy/health/counterfeit/payment/delivery/member/commission dispute.

- Gateway policy blocker.

- App Review blocker.

- Release blocker.

Không được ẩn blocker để tạo cảm giác sẵn sàng.

**68. OWNER SIGN-OFF CONTROL**

**68.1. Owner Sign-off là bằng chứng release**

Owner Sign-off là điều kiện bắt buộc cho Release Approved.

Owner Sign-off phải có ID, scope, gate, evidence package, thời điểm, người/cơ chế phê duyệt và audit.

Owner review không thay thế Owner Sign-off.

Owner comment không thay thế Owner Sign-off.

Owner đã xem không thay thế Owner Sign-off.

**68.2. Owner Sign-off không được dùng vượt scope**

Owner Sign-off phải đúng phạm vi.

Ví dụ:

- Sign-off CRM không thay thế sign-off Gateway.

- Sign-off Payment không thay thế sign-off Order.

- Sign-off Evidence Package không thay thế sign-off Go-live.

- Sign-off Governance không thay thế sign-off Production Ready.

- Sign-off UAT không thay thế sign-off Security nếu security thuộc scope.

**68.3. Owner Sign-off phải immutable**

Owner Sign-off không được sửa ngược.

Nếu cần rút lại, phải có revocation/supersede event mới.

Không được sửa sign-off cũ để đổi phạm vi, đổi thời điểm, đổi người phê duyệt hoặc đổi kết luận.

**69. BLOCKER CLOSURE CONTROL**

**69.1. Blocker chỉ được đóng bằng evidence**

Blocker không được đóng bằng lời nói.

Blocker không được đóng bằng “đã sửa” nếu chưa có evidence.

Blocker không được đóng bằng checklist không trace.

Blocker chỉ được đóng khi có:

- Root cause hoặc missing condition đã xử lý.

- Evidence mới hoặc evidence accepted.

- Smoke re-run nếu cần.

- Audit closure.

- Owner review/sign-off nếu cần.

**69.2. Blocker closure phải có audit**

Audit closure phải ghi:

- Blocker ID hoặc blocker reference.

- Domain.

- Root cause.

- Evidence dùng để đóng.

- Smoke re-run nếu có.

- Người/core review.

- Kết quả closure.

- Thời điểm closure.

- Gate bị ảnh hưởng.

- Release impact.

**69.3. Blocker closure không tự động release**

Blocker đóng không đồng nghĩa gate PASS.

Sau khi blocker đóng, gate phải được xét lại.

Release chỉ được xét khi toàn bộ gate conditions PASS.

**70. FINAL RELEASE STATUS FOR MASTER-05**

Sau khi PHẦN 1/4, PHẦN 2/4, PHẦN 3/4 và PHẦN 4/4 được thống nhất, trạng thái governance của MASTER-05 như sau:

MASTER-05 GOVERNANCE STATUS = PASS  
MASTER-05 CLEAN FINAL = YES  
MASTER-05 EVIDENCE / SMOKE / COMPLETION GATE STANDARD = LOCKED  
IMPLEMENTATION DETAIL = NOT INCLUDED  
CODE = NOT INCLUDED  
DATABASE SCHEMA = NOT INCLUDED  
API CONTRACT = NOT INCLUDED  
DTO CONTRACT = NOT INCLUDED  
UI CONTRACT = NOT INCLUDED  
WORKER IMPLEMENTATION = NOT INCLUDED

GATEWAY_STATUS = BLOCKED  
COMPLETION_REPORT_STATUS = PENDING_EVIDENCE  
PRODUCTION_READY = NO  
RELEASE_APPROVED = NO  
GO_LIVE_APPROVED = NO

**71. MASTER-05 FINAL DONE GATE SUMMARY**

MASTER-05 được xem là đạt Final Evidence Done Gate ở tầng governance khi toàn bộ điều kiện sau được khóa:

1.  Evidence Registry bao phủ đủ 16 business domain P0.

2.  Mỗi evidence có ID.

3.  Mỗi evidence có owner.

4.  Mỗi evidence có scope.

5.  Mỗi evidence có status.

6.  Mỗi evidence có audit.

7.  Chỉ ACCEPTED evidence mới được dùng PASS.

8.  Evidence DRAFT/SUBMITTED/UNDER_REVIEW/REJECTED/VOID/SUPERSEDED không được dùng PASS.

9.  Smoke Matrix bao phủ đủ 16 domain.

10. Mỗi smoke có required evidence.

11. Mỗi smoke có positive path.

12. Mỗi smoke có negative path.

13. Mỗi smoke có blocked-if-missing rule.

14. E2E Evidence Package được định nghĩa cho các luồng trọng yếu.

15. Unit smoke không thay thế E2E smoke.

16. Negative Path Evidence là bắt buộc.

17. Security Evidence là P0 nếu thuộc scope.

18. Gateway Evidence là P0 nếu thuộc scope.

19. Completion Gate phải trace được P0 evidence.

20. Completion Gate phải kiểm tra evidence status.

21. Completion Gate phải kiểm tra smoke.

22. Completion Gate phải kiểm tra E2E nếu thuộc scope.

23. Completion Gate phải kiểm tra security nếu thuộc scope.

24. Completion Gate phải kiểm tra blocker list.

25. Completion Report không thay thế Completion Gate.

26. Owner review không thay thế Owner Sign-off.

27. Owner Sign-off phải có ID, scope, audit và trace gate.

28. Blocker chỉ được đóng bằng evidence.

29. Governance PASS không đồng nghĩa Production Ready.

30. Production Ready không đồng nghĩa Release Approved.

31. Release Approved không đồng nghĩa Go-live Approved.

32. Gateway không PASS nếu Completion Report còn PENDING_EVIDENCE.

33. Không gọi Ready/PASS chỉ vì tài liệu đã viết xong.

**72. MASTER-05 FINAL CONCLUSION**

MASTER-05 quy định chuẩn Evidence, Smoke, Completion Gate và Release Evidence Control cho hệ thống Ginsengfood.

Từ thời điểm MASTER-05 được áp dụng, toàn bộ hệ thống Ginsengfood bắt buộc tuân thủ:

- Không evidence thì không PASS.

- Không smoke thì không PASS.

- Không audit thì không PASS.

- Không owner sign-off thì không Release Approved.

- Không Completion Gate PASS thì không Gateway PASS.

- Không E2E smoke PASS thì không Production Ready trong scope cần E2E.

- Không security evidence PASS thì không Production Ready trong scope có security.

- Không Gateway evidence PASS thì không Gateway Release.

- Không accepted evidence thì không gate PASS.

- Không negative path evidence thì smoke chưa đủ.

- Không blocker closure evidence thì blocker chưa đóng.

- Không được dùng tài liệu hoàn thành thay evidence.

- Không được dùng Completion Report thay Completion Gate.

- Không được dùng Owner Review thay Owner Sign-off.

- Không được dùng unit smoke thay E2E smoke.

- Không được dùng evidence sai scope để PASS domain khác.

- Không được hardcode trạng thái evidence/gate/release.

- Không được gọi Gateway PASS khi Completion Report còn PENDING_EVIDENCE.

- Không được gọi Production Ready khi implementation, evidence, smoke, E2E, security, owner sign-off hoặc P0 gate chưa đủ.

- Không được gọi Release Approved khi thiếu Owner Sign-off.

- Không được gọi Go-live Approved khi Production Ready hoặc Release Approved chưa đạt.

MASTER-05 hoàn tất vai trò khóa lớp bằng chứng và cổng hoàn tất của hệ thống Ginsengfood, bảo đảm mọi trạng thái PASS/READY/RELEASE/GO-LIVE đều phải dựa trên evidence accepted, smoke PASS, audit đầy đủ, owner sign-off hợp lệ và completion gate đúng scope.

**73. MASTER-05 HANDOFF NOTE**

MASTER-05 được dùng làm governance reference cho các tài liệu tiếp theo.

Khi các pack sau thiết kế database, API, DTO, UI, worker, resolver, guard, audit, evidence registry, smoke test, E2E test hoặc release gate, bắt buộc đối chiếu MASTER-05 để bảo đảm:

- Evidence đúng domain.

- Evidence đúng owner.

- Evidence đúng scope.

- Evidence đúng status.

- Evidence có audit.

- Evidence trace được smoke.

- Smoke trace được domain/dependency.

- Smoke có positive path.

- Smoke có negative path.

- E2E evidence có đủ các domain liên quan.

- Security evidence không bị bỏ qua.

- Gateway evidence không bị gộp chung mơ hồ.

- Completion Gate không PASS khi thiếu P0 evidence.

- Completion Report không tự tạo PASS.

- Owner Sign-off không bị thay bằng review/comment.

- Release Control không bị bypass.

- Gateway không được mở khi còn PENDING_EVIDENCE.

- Production Ready không được bật khi chưa có implementation/evidence/smoke/security/sign-off/gate.

MASTER-05 kế thừa governance từ MASTER-00, Source-of-Truth từ MASTER-01, Dependency Control từ MASTER-02, Traceability ID từ MASTER-03 và Runtime Resolver / Guard Control từ MASTER-04.

MASTER-05 không yêu cầu sửa lại các MASTER trước đó.

MASTER-05 trở thành chuẩn bắt buộc cho mọi tài liệu implementation liên quan đến evidence, smoke, completion report, gateway gate, security evidence, owner sign-off, release control và go-live approval.
