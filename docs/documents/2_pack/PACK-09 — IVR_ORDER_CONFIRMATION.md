**PACK-09 — IVR_ORDER_CONFIRMATION**

**IVR ORDER CONFIRMATION / INTERNAL SIM GATEWAY GOVERNANCE**

**V1.1 CLEAN FINAL**

**CHANGE LOCK V1.1**

V1.1 khóa các thay đổi sau:

1.  Bổ sung phân biệt rõ:

    - INVALID_PHONE

    - NO_ANSWER

    - TECHNICAL_EXCEPTION

    - CUSTOMER_CANCELLED

2.  Giữ rule **Giờ Vàng**:

    - PROGRAM = GOLDEN_HOUR

    - IVR_CONFIRMATION_WINDOW = 5_MINUTES

    - MAX_ATTEMPT = 2

    - ATTEMPT_1 = T0

    - ATTEMPT_2 = T0 + 2_MINUTES_30_SECONDS

    - WINDOW_EXPIRES = T0 + 5_MINUTES

3.  Điều chỉnh rule **24/7**:

    - PROGRAM = TWENTY_FOUR_SEVEN

    - IVR_CONFIRMATION_WINDOW = 15_MINUTES

    - MAX_ATTEMPT = 3

    - ATTEMPT_1 = T0

    - ATTEMPT_2 = T0 + 5_MINUTES

    - ATTEMPT_3 = T0 + 10_MINUTES

    - WINDOW_EXPIRES = T0 + 15_MINUTES

4.  Bổ sung **POST-IVR CANCELLATION NOTICE RULE**.

5.  Tin nhắn giải thích hủy đơn chỉ được gửi sau khi **Core Order State Machine đã hủy đơn chính thức**.

6.  SIM Gateway không được tự gửi tin nhắn hủy đơn.

7.  AI Advisor không được tự gửi tin nhắn hủy đơn.

8.  CRM không được dùng tin nhắn hủy đơn như marketing, chăm sóc lại hoặc upsell.

9.  Facebook Gateway / Messenger chỉ là channel gửi nếu Notification owner phát hành message hợp lệ.

10. Technical exception không được tính là khách không nghe.

11. Capacity incident không được tính là khách không nghe.

12. Invalid phone không được nhầm với no answer.

13. IVR vẫn là ORDER_CONFIRMATION_ONLY, không phải sales, CRM, marketing, payment, delivery, warehouse, MISA hay ROAS.

**PHẦN 1/4 — IVR ORDER CONFIRMATION PRINCIPLES / INTERNAL SIM GATEWAY / SOURCE-OF-TRUTH BOUNDARY / NO-BYPASS RULE**

**1. DOCUMENT STATUS**

**1.1. Tên tài liệu**

PACK-09 — IVR_ORDER_CONFIRMATION  
IVR ORDER CONFIRMATION / INTERNAL SIM GATEWAY GOVERNANCE  
V1.1 CLEAN FINAL

**1.2. Vai trò tài liệu**

PACK-09 là tài liệu quản trị cấp pack cho hợp phần **IVR Order Confirmation** của hệ thống Ginsengfood.

PACK-09 chuẩn hóa:

1.  Cuộc gọi tự động xác nhận đơn hàng.

2.  Mô hình triển khai bằng **Internal SIM Gateway Server**.

3.  Ranh giới giữa IVR và Core Order State Machine.

4.  Ranh giới giữa IVR và AI Advisor.

5.  Ranh giới giữa IVR và Facebook Gateway / Messenger / Live.

6.  Ranh giới giữa IVR và CRM / Member Lifecycle.

7.  Ranh giới giữa IVR và Payment / Warehouse / MISA / Traceability.

8.  Ranh giới giữa IVR và Notification owner.

9.  Nguyên tắc SIM vật lý.

10. Nguyên tắc call job.

11. Nguyên tắc DTMF.

12. Nguyên tắc audit/evidence.

13. Nguyên tắc gửi tin nhắn giải thích sau khi đơn bị Core hủy.

14. Điều kiện triển khai, test, smoke, security và release gate.

PACK-09 không phải tài liệu marketing.

PACK-09 không phải tài liệu CRM.

PACK-09 không phải tài liệu chăm sóc khách hàng.

PACK-09 không phải tài liệu bán hàng.

PACK-09 là lớp xác nhận đơn hàng bằng cuộc gọi tự động có kiểm soát, phục vụ Core Order State Machine ra quyết định tiếp tục xử lý hoặc hủy đơn theo rule.

**2. PACK STATUS**

**2.1. Trạng thái pack**

PACK_09_NAME = IVR_ORDER_CONFIRMATION  
PACK_09_STATUS = DOCUMENTATION_ACTIVE  
PACK_09_VERSION = V1.1_CLEAN_FINAL  
PACK_09_IMPLEMENTATION_STATUS = NOT_STARTED  
PACK_09_PRODUCTION_STATUS = NOT_READY

PACK-09 đã được mở ở tầng tài liệu governance.

PACK-09 chưa được triển khai production.

PACK-09 chưa được gọi khách thật.

PACK-09 chưa được cập nhật trạng thái đơn thật.

PACK-09 chưa được cho phép downstream phụ thuộc IVR result.

PACK-09 chưa được cho phép gửi post-IVR cancellation notice production.

**2.2. Trạng thái gate**

IVR_GATE = BLOCKED  
IVR_PRODUCTION_READY = NO  
CALLABLE_IVR_API_ALLOWED_IN_PRODUCTION = NO  
IVR_RESULT_SIMULATION_ALLOWED = NO  
DOWNSTREAM_IVR_DEPENDENCY_ALLOWED = NO  
POST_IVR_CANCELLATION_NOTICE_ALLOWED_IN_PRODUCTION = NO

Ý nghĩa:

1.  IVR chưa được mở production.

2.  Không module nào được gọi IVR production.

3.  Không được giả lập IVR result để downstream dùng như dữ liệu thật.

4.  Không được để Order, AI, Facebook Gateway, CRM, Admin, Warehouse, Payment hoặc MISA phụ thuộc IVR result trước khi PACK-09 release.

5.  Không được để Notification owner gửi tin nhắn hủy đơn production nếu chưa có release decision.

6.  IVR chỉ được chuẩn bị kỹ thuật nội bộ trong phạm vi test/sandbox theo rule.

**2.3. Trạng thái toàn hệ**

GATEWAY_STATUS = BLOCKED  
COMPLETION_REPORT_STATUS = PENDING_EVIDENCE  
PRODUCTION_READY = NO  
RELEASE_APPROVED = NO  
GO_LIVE_APPROVED = NO

PACK-09 hoàn tất tài liệu không đồng nghĩa hệ thống được go-live.

Không được gọi:

1.  Gateway PASS.

2.  Completion PASS.

3.  Production Ready.

4.  Release Approved.

5.  Go-live Approved.

nếu chưa có implementation, test, smoke, security, evidence accepted, owner sign-off và release decision.

**3. PACK PURPOSE**

**3.1. Mục đích duy nhất**

PACK-09 phục vụ một nghiệp vụ duy nhất:

CALL_PURPOSE = ORDER_CONFIRMATION_ONLY

Mục tiêu:

1.  Gọi tự động xác nhận đơn hàng.

2.  Giảm đơn ảo.

3.  Giảm đơn sai số điện thoại.

4.  Giảm đơn đặt nhầm.

5.  Giảm đơn khách không xác nhận.

6.  Hỗ trợ Core Order State Machine quyết định tiếp tục xử lý hoặc hủy đơn theo rule.

7.  Tạo audit/evidence cho trạng thái xác nhận đơn.

8.  Bảo vệ quy trình vận hành khỏi đơn hàng không chắc chắn.

9.  Tạo cơ sở hợp lệ để Notification owner gửi tin nhắn giải thích sau khi Core đã hủy đơn, nếu đúng điều kiện.

**3.2. IVR không phải kênh bán hàng**

PACK-09 không được biến IVR thành:

1.  Kênh bán hàng.

2.  Kênh tư vấn sản phẩm.

3.  Kênh upsell.

4.  Kênh cross-sell.

5.  Kênh CRM.

6.  Kênh chăm sóc khách hàng.

7.  Kênh nhắc mua lại.

8.  Kênh thông báo chương trình.

9.  Kênh mời thành viên.

10. Kênh mời Diamond.

11. Kênh marketing.

12. Kênh khảo sát.

13. Kênh thu thập dữ liệu khách hàng ngoài phạm vi xác nhận đơn.

IVR chỉ được gọi để xác nhận đơn hàng theo rule.

**3.3. IVR không thay thế xác nhận đơn của Core**

IVR result chỉ là tín hiệu đầu vào.

Core Order State Machine mới là lớp quyết định cuối.

IVR không tự quyết định đơn được tiếp tục.

IVR không tự hủy đơn.

IVR không tự chuyển đơn sang kho.

IVR không tự cho giao vận.

IVR không tự xác nhận doanh thu.

IVR không tự cập nhật order state.

IVR không tự phát hành tin nhắn hủy đơn.

**4. DEPLOYMENT MODEL**

**4.1. Mô hình triển khai chính thức**

Mô hình triển khai chính thức của PACK-09:

IVR_DEPLOYMENT_MODEL = INTERNAL_SIM_GATEWAY_SERVER

Hệ thống sử dụng:

1.  SIM Gateway nội bộ.

2.  SIM vật lý.

3.  Server nội bộ điều phối cuộc gọi.

4.  Call scheduler nội bộ.

5.  DTMF capture nội bộ.

6.  Call result normalizer nội bộ.

7.  Audit/evidence nội bộ.

8.  Core Order State Machine xử lý kết quả cuối.

9.  Notification owner xử lý tin nhắn sau Core cancellation, nếu đúng điều kiện.

**4.2. Các mô hình không dùng làm mặc định**

Các mô hình sau không được dùng làm mặc định:

VOICE_BRANDNAME_PROVIDER_MODEL = NOT_DEFAULT  
SIP_TRUNK_PROVIDER_MODEL = NOT_DEFAULT  
CLOUD_IVR_PROVIDER_MODEL = NOT_DEFAULT  
TELECOM_PROVIDER_MANAGED_IVR = NOT_DEFAULT

Điều này không có nghĩa là vĩnh viễn cấm các mô hình trên.

Điều này có nghĩa là nếu sau này muốn chuyển sang Voice Brandname, SIP Trunk, Cloud IVR hoặc nhà mạng quản lý IVR, phải có owner decision riêng, tài liệu riêng, security review riêng, cost review riêng, smoke riêng và release decision riêng.

Không được để dev tự chọn cloud IVR hoặc provider ngoài làm mặc định.

**4.3. Nguyên tắc SIM channel**

Nguyên tắc bắt buộc:

1 SIM = 1 ACTIVE OUTBOUND CALL

Một SIM chỉ được xử lý một cuộc gọi outbound đang active tại một thời điểm.

Không được assign nhiều call job vào cùng một SIM đang bận.

Không được tính năng lực IVR theo số lượng call job trong queue mà phải tính theo số SIM active khả dụng.

| **Cấu hình SIM** | **Số cuộc gọi đồng thời tối đa** |
|------------------|----------------------------------|
| 12 SIM           | 12 cuộc gọi                      |
| 24 SIM           | 24 cuộc gọi                      |
| 32 SIM           | 32 cuộc gọi                      |

Nếu scheduler giao trùng SIM channel, PACK-09 Fail Gate.

**5. IVR CORE PRINCIPLES**

**5.1. IVR là lớp xác nhận, không phải lớp xử lý đơn**

IVR chỉ trả về kết quả xác nhận.

Các kết quả IVR không được tự động đổi trạng thái đơn nếu chưa đi qua Core Order State Machine.

Nguyên tắc:

IVR_RESULT_IS_INPUT_SIGNAL_ONLY  
ORDER_STATE_MACHINE_IS_FINAL_DECISION_LAYER

IVR có thể báo:

1.  Khách xác nhận đơn.

2.  Khách bấm hủy / không đặt.

3.  Khách không nghe.

4.  Khách không bấm phím.

5.  Sai phím.

6.  Lỗi DTMF.

7.  Lỗi SIM Gateway.

8.  Lỗi server.

9.  Hết confirmation window.

10. Cần Admin Review.

11. Capacity incident.

12. Notification pending sau khi Core đã hủy đơn.

Nhưng Core Order State Machine mới quyết định:

1.  Tiếp tục xử lý đơn.

2.  Hủy đơn.

3.  Giữ đơn chờ review.

4.  Chuyển Admin Review.

5.  Chặn đơn do lỗi kỹ thuật.

6.  Không cập nhật nếu input không hợp lệ.

7.  Có phát hành trigger hợp lệ cho Notification owner hay không.

**5.2. IVR không được tự tạo call ngoài rule**

IVR chỉ được tạo call job khi có rule hợp lệ.

Không được gọi khách nếu:

1.  Chưa có order_code.

2.  Đơn chưa đến trạng thái cần IVR.

3.  Đơn đã có kết quả cuối.

4.  Đơn đã hủy.

5.  Đơn đã hết confirmation window.

6.  Số điện thoại không hợp lệ theo rule.

7.  Khách nằm trong nhóm không được gọi theo policy nếu có.

8.  IVR Gate chưa release.

9.  Production SIM Gateway chưa được duyệt.

10. Downstream chưa được phép phụ thuộc IVR.

**5.3. Một đơn không được gọi vô hạn**

IVR phải có giới hạn attempt theo từng chương trình.

Nguyên tắc nền:

MAX_ATTEMPT_PER_ORDER = PROGRAM_BASED

Program-based attempt rule:

1.  GOLDEN_HOUR: MAX_ATTEMPT = 2 trong IVR_CONFIRMATION_WINDOW = 5_MINUTES.

2.  TWENTY_FOUR_SEVEN: MAX_ATTEMPT = 3 trong IVR_CONFIRMATION_WINDOW = 15_MINUTES.

Không được gọi lại vô hạn.

Không được gọi dồn liên tục.

Không được gọi ngoài confirmation window.

Không được tạo manual retry ngoài rule nếu chưa có owner-approved exception.

Nếu một cuộc gọi đã có kết quả cuối, không gọi các cuộc tiếp theo.

Kết quả cuối gồm:

1.  IVR_CONFIRMED.

2.  IVR_CUSTOMER_CANCELLED.

3.  INVALID_PHONE_FINAL nếu rule xác nhận.

4.  IVR_NO_ANSWER_FINAL.

5.  IVR_CONFIRMATION_WINDOW_EXPIRED.

6.  TECHNICAL_EXCEPTION_FINAL nếu rule xác nhận.

Important:

1.  Giờ Vàng giữ 2 cuộc gọi.

2.  24/7 dùng 3 cuộc gọi.

3.  Technical exception không được tính là no answer.

4.  Capacity incident không được tính là no answer.

5.  Post-IVR cancellation notice không được gửi cho từng attempt, chỉ được gửi sau khi Core đã hủy đơn chính thức.

**5.4. IVR phải tôn trọng program window**

PACK-09 có rule riêng cho:

1.  Giờ Vàng.

2.  24/7.

Giờ Vàng có confirmation window riêng.

24/7 có confirmation window riêng.

IVR không được dùng một window chung cho mọi chương trình nếu tài liệu đã khóa khác nhau.

IVR không được kéo dài thời gian xác nhận sau khi quote/chương trình hết hiệu lực.

IVR không được gọi sau window rồi vẫn coi kết quả là hợp lệ.

**6. SOURCE-OF-TRUTH BOUNDARY**

**6.1. Bảng ranh giới source-of-truth**

| **Lớp nghiệp vụ**             | **Source-of-truth owner**    | **PACK-09 được làm gì**               | **PACK-09 không được làm gì**                  |
|-------------------------------|------------------------------|---------------------------------------|------------------------------------------------|
| Official Order / order_code   | Core Order / Commerce        | Nhận đơn đủ điều kiện IVR             | Không tự tạo order                             |
| Order State Machine           | Core Order                   | Gửi IVR result làm input signal       | Không tự đổi order state                       |
| Giá trị đơn / tổng thanh toán | Commerce Runtime             | Đọc biến được phép cho call script    | Không tự tính giá                              |
| Chương trình Giờ Vàng / 24/7  | Commerce Runtime             | Dùng program window đã khóa           | Không tự mở/kéo dài chương trình               |
| Payment                       | Payment owner                | Không can thiệp                       | Không xác nhận paid                            |
| COD / Delivery                | Delivery / Fulfillment owner | Không can thiệp                       | Không xác nhận giao hàng/COD success           |
| AI Advisor                    | PACK-05                      | Không nhận lệnh gọi trực tiếp từ AI   | AI không tạo IVR call job                      |
| Facebook/Messenger/Live       | PACK-06 / PACK-08            | Không nhận raw comment làm IVR result | Gateway/Live không gọi IVR trực tiếp           |
| Ads/ROAS                      | PACK-07                      | Cung cấp evidence nếu owner cho phép  | Không tự tính ROAS                             |
| Notification                  | Notification owner           | Nhận trigger sau khi Core đã hủy đơn  | SIM Gateway/AI/CRM không tự gửi tin nhắn       |
| CRM / Member                  | CRM/Commerce owner           | Không dùng IVR cho CRM                | Không nhắc mua lại/chăm sóc                    |
| MISA / Accounting             | PACK-04 / Finance            | Không can thiệp                       | Không sync MISA                                |
| Warehouse / Traceability      | Operational Core             | Không can thiệp                       | Không cho xuất kho, không tác động lô/batch/QR |

**6.2. Không tạo parallel order truth**

PACK-09 không được tạo nguồn sự thật song song cho:

1.  Order status.

2.  Order cancellation.

3.  Order release.

4.  Order hold.

5.  Payment status.

6.  Delivery status.

7.  Revenue status.

8.  Warehouse release.

9.  MISA accounting.

10. CRM eligibility.

11. Customer profile.

12. Member status.

13. Diamond/referral.

14. Verified revenue.

15. Notification eligibility.

IVR result là tín hiệu xác nhận, không phải trạng thái đơn cuối cùng.

**6.3. Không downstream dependency trước release**

Nguyên tắc:

DOWNSTREAM_IVR_DEPENDENCY_ALLOWED = NO

Khi IVR chưa release, các module sau không được phụ thuộc IVR result như dữ liệu production:

1.  Order.

2.  AI Advisor.

3.  Facebook Gateway.

4.  Messenger.

5.  Live.

6.  CRM.

7.  Admin.

8.  Warehouse.

9.  Payment.

10. Delivery.

11. MISA.

12. Ads/ROAS.

13. Notification.

14. Completion Report.

Nếu module nào dùng IVR result trước khi IVR test/smoke/evidence pass, PACK-09 Fail Gate.

**7. ORDER STATE MACHINE BOUNDARY**

**7.1. IVR không cập nhật đơn trực tiếp**

Nguyên tắc bắt buộc:

IVR_CAN_TRIGGER_CANCEL_REQUEST = YES  
IVR_CAN_DIRECTLY_CANCEL_ORDER = NO  
SIM_GATEWAY_CAN_CANCEL_ORDER = NO  
CORE_ORDER_STATE_MACHINE_CANCEL_REQUIRED = YES

IVR có thể gửi tín hiệu:

1.  Khách bấm 1.

2.  Khách bấm 0.

3.  Không nghe sau attempts theo program.

4.  Hết window.

5.  Invalid phone nếu rule xác nhận.

6.  Technical exception.

7.  Capacity exception.

Nhưng IVR không được:

1.  Hủy đơn trực tiếp.

2.  Cho đơn tiếp tục trực tiếp.

3.  Chuyển đơn sang kho.

4.  Chuyển đơn sang giao vận.

5.  Đánh dấu đơn verified.

6.  Đánh dấu doanh thu verified.

7.  Tự đóng order issue.

8.  Tự phát hành notification.

Core Order State Machine xử lý kết quả cuối.

**7.2. IVR result không phải order action**

IVR result là input signal.

Order action là quyết định của Core.

| **IVR result**                  | **Ý nghĩa**                             | **Core mới được quyết định**                    |
|---------------------------------|-----------------------------------------|-------------------------------------------------|
| IVR_CONFIRMED                   | Khách bấm 1 xác nhận                    | Tiếp tục xử lý đơn nếu các điều kiện khác pass  |
| IVR_CUSTOMER_CANCELLED          | Khách bấm 0                             | Hủy đơn qua state machine                       |
| IVR_NO_ANSWER_FINAL             | Không nghe sau đủ attempts theo program | Hủy/hold theo rule đã khóa                      |
| IVR_CONFIRMATION_WINDOW_EXPIRED | Hết window                              | Hủy/quote hết hiệu lực theo rule                |
| IVR_TECHNICAL_EXCEPTION         | Lỗi kỹ thuật                            | Admin Review, không tính khách không nghe       |
| IVR_CAPACITY_EXCEPTION          | Không đủ năng lực gọi đúng hạn          | Owner/Admin Review, không tính khách không nghe |

Không được map IVR result trực tiếp thành update order state ngoài Core.

**7.3. Reason code phải do Core ghi nhận**

Các reason code hủy đơn liên quan IVR phải được Core Order State Machine ghi nhận, không phải SIM Gateway tự ghi vào order.

Reason code nền:

1.  CUSTOMER_CANCELLED_BY_IVR_KEY_0.

2.  IVR_NO_ANSWER_AFTER_PROGRAM_ATTEMPTS.

3.  IVR_CONFIRMATION_WINDOW_EXPIRED.

4.  IVR_INVALID_PHONE_IF_RULE_CONFIRMED.

Program-specific reason mapping:

1.  GOLDEN_HOUR: IVR_NO_ANSWER_AFTER_2_ATTEMPTS.

2.  TWENTY_FOUR_SEVEN: IVR_NO_ANSWER_AFTER_3_ATTEMPTS.

Important:

1.  IVR_NO_ANSWER_AFTER_PROGRAM_ATTEMPTS chỉ được dùng khi các cuộc gọi là attempts hợp lệ và khách không nghe máy.

2.  Không dùng reason này cho lỗi kỹ thuật.

3.  Không dùng reason này cho capacity incident.

4.  Không dùng reason này cho invalid phone.

5.  Không dùng reason này cho khách bấm phím 0.

6.  SIM Gateway không tự ghi order cancel reason trực tiếp.

**8. TECHNICAL EXCEPTION / POST-IVR NOTICE BOUNDARY**

**8.1. Lỗi kỹ thuật không phải khách không nghe**

Các lỗi kỹ thuật sau không được xử lý như NO_ANSWER:

1.  SIM_GATEWAY_ERROR.

2.  SERVER_ERROR.

3.  DTMF_CAPTURE_ERROR.

4.  AUDIO_PLAYBACK_ERROR.

5.  SIM_CHANNEL_FAILURE.

6.  INTERNAL_CALLBACK_ERROR.

7.  SCHEDULER_ERROR.

Các lỗi này phải đi vào:

IVR_TECHNICAL_EXCEPTION  
ADMIN_REVIEW_REQUIRED

Nếu SIM lỗi nhưng order bị hủy bằng IVR_NO_ANSWER_AFTER_PROGRAM_ATTEMPTS, PACK-09 Fail Gate.

**8.2. Technical exception không được làm mất quyền khách**

Khi lỗi kỹ thuật xảy ra, hệ thống không được kết luận khách không nghe.

Không được hủy đơn chỉ vì:

1.  SIM lỗi.

2.  Server lỗi.

3.  Không phát được audio.

4.  Không bắt được DTMF.

5.  Scheduler lỗi.

6.  Callback lỗi.

7.  SIM channel lỗi.

Technical exception cần Admin Review hoặc retry theo rule kỹ thuật được owner phê duyệt.

**8.3. Post-IVR cancellation notice boundary**

POST_IVR_CANCELLATION_NOTICE_ALLOWED = YES  
NOTICE_TRIGGER = AFTER_CORE_ORDER_CANCELLED_ONLY  
NOTICE_OWNER = NOTIFICATION_OWNER  
NOTICE_TYPE = TRANSACTIONAL_ORDER_STATUS_NOTICE  
  
SIM_GATEWAY_CAN_SEND_NOTICE = NO  
AI_ADVISOR_CAN_SELF_SEND_NOTICE = NO  
CRM_MARKETING_CAN_SEND_NOTICE = NO  
FACEBOOK_GATEWAY_CAN_SELF_SEND_NOTICE = NO

Rule:

1.  Tin nhắn giải thích hủy đơn chỉ được gửi sau khi Core Order State Machine đã hủy đơn chính thức.

2.  SIM Gateway không được gửi tin nhắn.

3.  AI Advisor không được tự phát tin nhắn.

4.  CRM không được dùng tin nhắn này như marketing, chăm sóc lại hoặc upsell.

5.  Facebook Gateway / Messenger chỉ là channel gửi nếu Notification owner phát hành message hợp lệ.

6.  Notification phải có audit/evidence.

7.  Tin nhắn không được chứa full address.

8.  Tin nhắn không được chứa payment detail.

9.  Tin nhắn không được chứa member tier.

10. Tin nhắn không được chứa Diamond/referral info.

11. Tin nhắn không được chứa health/sensitive note.

12. Tin nhắn không được cam kết giữ giá cũ khi quote/window đã hết.

13. Tin nhắn có thể hướng dẫn khách phản hồi để tạo đơn mới theo chương trình hiện hành.

Allowed trigger reasons:

1.  IVR_NO_ANSWER_AFTER_2_ATTEMPTS for GOLDEN_HOUR.

2.  IVR_NO_ANSWER_AFTER_3_ATTEMPTS for TWENTY_FOUR_SEVEN.

3.  IVR_CONFIRMATION_WINDOW_EXPIRED.

Conditional trigger:

1.  IVR_INVALID_PHONE_IF_RULE_CONFIRMED chỉ gửi qua channel gốc nếu số điện thoại không hợp lệ nhưng vẫn còn channel hợp lệ như Messenger / Website / Facebook.

2.  Không gửi SMS vào số đã xác định không có thật.

Blocked trigger:

1.  IVR_TECHNICAL_EXCEPTION không được gửi tin nhắn hủy đơn.

2.  IVR_CAPACITY_EXCEPTION không được gửi tin nhắn hủy đơn như lỗi khách.

3.  ORDER_NOT_CANCELLED_BY_CORE không được gửi tin nhắn hủy đơn.

**9. PRIVACY / DATA MINIMIZATION PRINCIPLES**

**9.1. IVR chỉ đọc thông tin tối thiểu**

Call script chỉ được đọc những biến được phép.

Các biến được phép ở mức nền:

1.  order_code_short.

2.  total_amount_display.

3.  customer_name_short nếu có và policy cho phép.

4.  program_name nếu cần và policy cho phép.

Không đọc:

1.  Full customer profile.

2.  Full address.

3.  Member tier.

4.  Diamond referral info.

5.  Payment detail.

6.  Order history.

7.  AI consultation content.

8.  CRM content.

9.  Health or sensitive note.

Nguyên tắc: IVR xác nhận đơn, không public dữ liệu riêng qua cuộc gọi tự động quá mức cần thiết.

**9.2. IVR không xác minh thông tin nhạy cảm**

IVR không dùng để hỏi:

1.  Địa chỉ đầy đủ.

2.  Bệnh nền.

3.  Thông tin sức khỏe.

4.  Lịch sử mua hàng.

5.  Thành viên hạng nào.

6.  Diamond/referral relationship.

7.  Nội dung tư vấn AI.

8.  Thông tin thanh toán chi tiết.

9.  Thông tin người nhận nhạy cảm.

Nếu cần xử lý thông tin riêng, phải chuyển sang luồng human/admin theo owner policy.

**10. CROSS-PACK NO-BYPASS RULE**

**10.1. Với AI Advisor**

AI Advisor không được:

1.  Tạo IVR call job.

2.  Gọi SIM Gateway.

3.  Hiển thị IVR result như dữ liệu production khi IVR chưa release.

4.  Tự nói đơn đã IVR xác nhận nếu Core chưa công nhận.

5.  Dùng tin nhắn khách để giả lập IVR result.

6.  Dùng AI confirmation thay IVR nếu order rule yêu cầu IVR.

7.  Tự hủy đơn do IVR.

8.  Tự gửi tin nhắn hủy đơn sau IVR.

AI Advisor chỉ được consume trạng thái đã được owner runtime công nhận nếu được phép.

**10.2. Với Facebook Gateway / Messenger / Live**

Facebook Gateway, Messenger và Live không được:

1.  Gọi IVR trực tiếp.

2.  Tạo call job.

3.  Dùng comment làm IVR result.

4.  Dùng Messenger text làm IVR result.

5.  Dùng live comment làm IVR confirmation.

6.  Thay IVR bằng tin nhắn xác nhận không có rule.

7.  Tự hủy đơn do khách comment “hủy” nếu chưa qua owner state machine.

8.  Tự gửi tin nhắn hủy đơn nếu Notification owner chưa phát hành message hợp lệ.

Facebook Gateway chỉ là channel.

Messenger chỉ là channel/private conversation.

Live chỉ là channel/tương tác public.

IVR confirmation là pack riêng, và Core mới quyết định order state.

**10.3. Với CRM / Member Lifecycle**

CRM không được dùng IVR cho:

1.  Tin nhắn chăm sóc.

2.  Nhắc mua lại.

3.  Nhắc quyền lợi thành viên.

4.  Chúc mừng sinh nhật.

5.  Nhắc Giờ Vàng.

6.  Mời Diamond.

7.  Mời chương trình khởi nghiệp.

8.  Khảo sát marketing.

9.  Upsell.

10. Cross-sell.

CRM không được dùng post-IVR cancellation notice như marketing, chăm sóc lại hoặc upsell.

PACK-09 không phải CRM calling system.

**10.4. Với Payment**

IVR không được:

1.  Xác nhận thanh toán.

2.  Đối chiếu chuyển khoản.

3.  Đọc chi tiết giao dịch.

4.  Đánh dấu paid.

5.  Đánh dấu payment failed.

6.  Xử lý tranh chấp thanh toán.

7.  Thay Payment Core.

Khách bấm 1 chỉ xác nhận tiếp tục xử lý đơn, không phải xác nhận đã thanh toán.

**10.5. Với Warehouse / Delivery**

IVR không được:

1.  Cho xuất kho.

2.  Cho đóng hàng.

3.  Cho giao vận.

4.  Xác nhận giao hàng.

5.  Xác nhận COD success.

6.  Tác động shipment.

7.  Tác động warehouse picking.

8.  Tác động inventory.

Warehouse/Delivery chỉ consume trạng thái hợp lệ từ Core/Fulfillment owner, không consume raw IVR result trực tiếp nếu chưa được owner rule cho phép.

**10.6. Với MISA / Accounting**

IVR không được:

1.  Tạo chứng từ kế toán.

2.  Sync MISA.

3.  Xác nhận doanh thu.

4.  Xác nhận công nợ.

5.  Xác nhận thanh toán.

6.  Tạo accounting event.

7.  Tác động báo cáo tài chính.

MISA chỉ đi qua PACK-04 / Finance owner.

IVR không có quyền kế toán.

**10.7. Với PACK-07 Ads / ROAS**

PACK-07 có thể dùng IVR result như một evidence/risk signal sau khi PACK-09 release và owner cho phép.

PACK-07 không được dùng IVR result khi:

1.  IVR chưa release.

2.  IVR evidence chưa accepted.

3.  IVR result là simulation.

4.  IVR result chưa được Core công nhận.

5.  IVR technical exception chưa xử lý.

6.  Order chưa đạt verified revenue.

IVR confirmation không phải verified revenue.

Post-IVR cancellation notice không phải revenue event.

**11. PRODUCTION BLOCK PRINCIPLES**

**11.1. Những gì chưa được phép ở production**

Khi PACK-09 chưa release, các hành động sau bị cấm:

REAL_CUSTOMER_CALL_ALLOWED = NO  
REAL_ORDER_STATE_UPDATE_ALLOWED = NO  
PRODUCTION_SIM_GATEWAY_ALLOWED = NO  
PRODUCTION_ORDER_CANCEL_BY_IVR_ALLOWED = NO  
POST_IVR_CANCELLATION_NOTICE_ALLOWED_IN_PRODUCTION = NO

Không được gọi khách thật.

Không được cập nhật đơn thật.

Không được dùng SIM Gateway production.

Không được hủy đơn thật bằng IVR.

Không được cho downstream dùng IVR result thật.

Không được gửi cancellation notice production từ rule IVR nếu chưa release.

**11.2. Những gì được phép chuẩn bị nội bộ**

Đội kỹ thuật được phép chuẩn bị nội bộ:

1.  Khảo sát SIM Gateway.

2.  Test server kết nối SIM Gateway.

3.  Test số nội bộ.

4.  Test DTMF nội bộ.

5.  Draft skeleton backend.

6.  Draft Admin UI.

7.  Draft test matrix.

8.  Test scheduler trong sandbox.

9.  Test call result normalizer bằng dữ liệu giả lập nội bộ.

10. Test audit/evidence trong môi trường không production.

11. Test notification owner handoff bằng dữ liệu giả lập.

Nhưng mọi chuẩn bị này không được gọi khách thật và không được cập nhật đơn thật.

**12. FAIL-CLOSED PRINCIPLES**

PACK-09 phải fail-closed trong các trường hợp:

1.  Không có order_code.

2.  Không có order đủ điều kiện IVR.

3.  Không có confirmation window.

4.  Không có program rule hợp lệ.

5.  Không có SIM channel khả dụng.

6.  SIM channel đang bận.

7.  Scheduler không xác định được deadline.

8.  DTMF mapping không đúng phím 1/phím 0.

9.  Technical exception xảy ra.

10. Core Order State Machine không khả dụng.

11. IVR Gate chưa release.

12. Evidence capture không hoạt động.

13. Downstream cố dùng IVR result khi chưa release.

14. Admin cố sửa IVR result giả.

15. SIM Gateway cố cập nhật order trực tiếp.

16. Notification cố gửi tin nhắn hủy trước khi Core hủy đơn.

17. AI/CRM/Gateway tự gửi cancellation notice.

Fail-closed nghĩa là:

1.  Không gọi production.

2.  Không cập nhật order.

3.  Không hủy đơn.

4.  Không tính khách không nghe nếu là lỗi kỹ thuật.

5.  Không gửi tin nhắn hủy đơn nếu Core chưa hủy.

6.  Chuyển Admin Review nếu cần.

7.  Ghi audit/evidence.

8.  Chặn downstream dependency nếu chưa release.

**13. PACK-09 DOCUMENT SET**

PACK-09 gồm các file chính:

1.  IVR-00 — IVR ORDER CONFIRMATION MASTER README.

2.  IVR-01 — ORDER RISK RULE / CUSTOMER TRUST / CALL ELIGIBILITY.

3.  IVR-02 — IVR CALL JOB / INTERNAL SIM GATEWAY / SCHEDULER / DTMF.

4.  IVR-03 — CALL RESULT / ORDER STATE / CANCEL / RELEASE BOUNDARY.

5.  IVR-04 — ADMIN UI / MONITORING / AUDIT / EVIDENCE.

6.  IVR-05 — IVR TEST MATRIX / SMOKE / SECURITY / RELEASE GATE.

PACK-09 hiện là pack governance cấp cha.

Các file IVR-00 → IVR-05 là bộ tài liệu triển khai chi tiết tiếp theo, nhưng vẫn phải tuân thủ ranh giới đã khóa trong PACK-09.

V1.1 inheritance note:

1.  IVR-00 phải ghi PACK_09_VERSION = V1.1_CLEAN_FINAL.

2.  IVR-01 phải bổ sung eligibility/risk rule cho INVALID_PHONE / NO_ANSWER / TECHNICAL_EXCEPTION / CUSTOMER_CANCELLED.

3.  IVR-02 phải sửa 24/7 scheduler thành 3 attempts: T0 / T0 + 5 phút / T0 + 10 phút.

4.  IVR-03 phải bổ sung Post-IVR Cancellation Notice Trigger sau khi Core hủy đơn.

5.  IVR-04 phải bổ sung monitoring/evidence cho cancellation notice.

6.  IVR-05 phải bổ sung smoke IVR-SMK-021 → IVR-SMK-025.

**14. CẤU TRÚC PACK-09**

PACK-09 được viết thành 4 phần:

1.  **PHẦN 1/4 — IVR ORDER CONFIRMATION PRINCIPLES / INTERNAL SIM GATEWAY / SOURCE-OF-TRUTH BOUNDARY / NO-BYPASS RULE**  
    Khóa mục tiêu, trạng thái pack, mô hình Internal SIM Gateway, source-of-truth boundary, Core Order State Machine boundary, post-IVR notice boundary, production block và no-bypass rule.

2.  **PHẦN 2/4 — CALL SCRIPT / DTMF / PROGRAM WINDOW / GOLDEN HOUR / 24-7 / DEADLINE-AWARE SCHEDULER**  
    Khóa nội dung cuộc gọi, biến được phép đọc, phím 1/phím 0, rule Giờ Vàng, rule 24/7, attempt, window, rolling queue và deadline-aware scheduler.

3.  **PHẦN 3/4 — CALL RESULT / TECHNICAL EXCEPTION / CAPACITY BASELINE / CROSS-PACK CONTROL / ENGINEER HANDOFF**  
    Khóa result normalization, lỗi kỹ thuật, capacity theo SIM, không batch cuối phiên, cross-pack boundary chi tiết, notification boundary và engineer handoff model.

4.  **PHẦN 4/4 — P0 RULES / SMOKE MATRIX / IVR EVIDENCE / DONE GATE / FAIL GATE / RELEASE CONTROL / FINAL CONCLUSION**  
    Khóa P0 MUST/MUST NOT/FAIL IF, smoke matrix, evidence, done/fail gate, release readiness và kết luận cuối PACK-09.

**15. DONE CONDITION CỦA PHẦN 1/4**

PHẦN 1/4 được xem là hoàn thành về mặt tài liệu khi đã khóa được:

1.  Tên tài liệu PACK-09.

2.  Vai trò PACK-09.

3.  Trạng thái DOCUMENTATION_ACTIVE.

4.  Trạng thái NOT_STARTED / NOT_READY.

5.  IVR_GATE = BLOCKED.

6.  Production not allowed.

7.  CALL_PURPOSE = ORDER_CONFIRMATION_ONLY.

8.  IVR không phải sales/CRM/marketing.

9.  Mô hình Internal SIM Gateway Server.

10. Không dùng cloud/SIP/voice brandname làm mặc định.

11. Nguyên tắc 1 SIM = 1 active outbound call.

12. IVR là input signal only.

13. Core Order State Machine là final decision layer.

14. IVR không cập nhật order trực tiếp.

15. Lỗi kỹ thuật không phải khách không nghe.

16. Data minimization/privacy principle.

17. Cross-pack no-bypass với AI, Facebook, CRM, Payment, Warehouse, MISA, PACK-07.

18. Post-IVR cancellation notice boundary.

19. Production block principles.

20. Fail-closed principles.

21. Document set IVR-00 → IVR-05.

22. Cấu trúc 4 phần của PACK-09.

**KẾT LUẬN PHẦN 1/4**

PACK-09 là pack chính thức cho **IVR_ORDER_CONFIRMATION** của hệ thống Ginsengfood.

PACK-09 đã được mở tài liệu ở trạng thái **DOCUMENTATION_ACTIVE**, nhưng implementation chưa bắt đầu, production chưa sẵn sàng và IVR Gate vẫn **BLOCKED**.

PACK-09 dùng mô hình triển khai chính thức là **Internal SIM Gateway Server**.

PACK-09 phục vụ một mục đích duy nhất:

**ORDER_CONFIRMATION_ONLY**

IVR không phải kênh bán hàng.

IVR không phải CRM.

IVR không phải chăm sóc khách hàng.

IVR không phải marketing.

IVR không phải Payment.

IVR không phải Delivery.

IVR không phải Warehouse.

IVR không phải MISA.

IVR không phải AI Advisor.

IVR không phải Facebook Gateway.

IVR không phải Ads/ROAS.

IVR chỉ tạo tín hiệu xác nhận đơn hàng.

Core Order State Machine mới là lớp quyết định cuối.

Notification owner chỉ được gửi tin nhắn giải thích sau khi Core Order State Machine đã hủy đơn chính thức.

Nguyên tắc khóa của PHẦN 1/4 là:

**Internal SIM Gateway là mô hình chính thức.**  
**1 SIM = 1 active outbound call.**  
**IVR chỉ xác nhận đơn hàng.**  
**IVR result chỉ là input signal.**  
**Core Order State Machine là final decision layer.**  
**SIM Gateway không cập nhật order trực tiếp.**  
**Lỗi kỹ thuật không phải khách không nghe.**  
**Capacity incident không phải khách không nghe.**  
**Invalid phone không được nhầm với no answer.**  
**AI / Facebook / CRM / Admin / Payment / Warehouse / MISA không được bypass IVR boundary.**  
**Notification owner mới được gửi transactional notice sau Core cancellation.**  
**Chưa release thì không gọi khách thật.**  
**Chưa release thì không cập nhật order thật.**  
**Chưa release thì downstream không được phụ thuộc IVR result.**  
**Không có evidence thì không PASS.**

**PHẦN 2/4 — CALL SCRIPT / DTMF / PROGRAM WINDOW / GOLDEN HOUR / 24-7 / DEADLINE-AWARE SCHEDULER**

**16. MỤC TIÊU CỦA PHẦN 2/4**

PHẦN 2/4 khóa lớp vận hành cuộc gọi IVR, bao gồm nội dung cuộc gọi, biến được phép đọc, phím xác nhận/hủy, rule gọi theo chương trình Giờ Vàng và 24/7, confirmation window, attempt interval, call scheduling và deadline-aware rolling queue.

Mục tiêu của phần này là xác định rõ:

1.  IVR được phép nói gì trong cuộc gọi.

2.  IVR không được phép đọc thông tin gì.

3.  Khách bấm phím nào để xác nhận đơn.

4.  Khách bấm phím nào để hủy đơn.

5.  Không bấm phím xử lý ra sao.

6.  Sai phím xử lý ra sao.

7.  Lỗi DTMF xử lý ra sao.

8.  Giờ Vàng được gọi trong bao lâu.

9.  24/7 được gọi trong bao lâu.

10. Mỗi đơn được gọi tối đa mấy lần theo từng program.

11. Khi nào không được gọi tiếp.

12. Khi nào IVR result được xem là kết quả cuối.

13. Khi nào phải chuyển technical exception.

14. Scheduler phải phân bổ cuộc gọi như thế nào để không dồn cuối phiên.

15. Vì sao SIM Gateway không được cập nhật order trực tiếp.

16. Khi nào được gửi post-IVR cancellation notice.

PHẦN 2/4 không thiết kế API, database, UI hoặc code.

PHẦN 2/4 chỉ khóa logic governance/domain để đội kỹ thuật triển khai đúng.

**17. CALL SCRIPT GOVERNANCE**

**17.1. Nguyên tắc call script**

Call script của PACK-09 phải ngắn, rõ, đúng mục đích và chỉ phục vụ xác nhận đơn hàng.

Call script không được biến thành:

1.  Nội dung bán hàng.

2.  Nội dung giới thiệu sản phẩm.

3.  Nội dung upsell.

4.  Nội dung chăm sóc khách hàng.

5.  Nội dung nhắc mua lại.

6.  Nội dung mời thành viên.

7.  Nội dung mời Diamond.

8.  Nội dung quảng cáo chương trình ngoài phạm vi đơn.

9.  Nội dung thu thập thêm dữ liệu khách.

10. Nội dung tư vấn sản phẩm.

IVR chỉ gọi để xác nhận khách có tiếp tục xử lý đơn hàng hay không.

**17.2. Nội dung cuộc gọi chuẩn**

Call script chuẩn:

Ginsengfood kính chào Mình.

Ginsengfood cảm ơn Mình đã chọn Cháo Sâm Savigin.

Đơn hàng {{order_code_short}} của Mình có tổng thanh toán {{total_amount_display}}.

Để xác nhận tiếp tục xử lý đơn hàng, Mình vui lòng bấm phím 1.

Nếu Mình không đặt hoặc muốn hủy đơn này, Mình vui lòng bấm phím 0.

Ginsengfood trân trọng cảm ơn ạ.

Script này là script nền.

Không được tự ý thêm câu bán hàng.

Không được tự ý thêm câu mời mua thêm.

Không được tự ý thêm câu nhắc chương trình nếu không có runtime và owner rule.

Không được tự ý thêm thông tin cá nhân.

Không được tự ý đọc địa chỉ đầy đủ.

Không được tự ý đọc nội dung tư vấn AI.

Không được tự ý đọc ghi chú sức khỏe.

Không được tự ý đọc quyền lợi thành viên.

Không được tự ý đọc Diamond/referral.

Không được tự ý đọc thông tin thanh toán chi tiết.

**17.3. Lý do call script phải ngắn**

Call script phải ngắn vì:

1.  Khách cần hiểu ngay đây là cuộc gọi xác nhận đơn.

2.  Giảm thời lượng cuộc gọi để tăng năng lực SIM Gateway.

3.  Giảm rủi ro khách cúp máy giữa chừng.

4.  Giảm rủi ro hiểu sai nội dung.

5.  Giảm rủi ro lộ dữ liệu cá nhân.

6.  Giữ IVR đúng vai trò xác nhận đơn, không thành kênh marketing.

7.  Giúp DTMF bấm phím 1/0 rõ ràng.

8.  Giúp scheduler tính tải chính xác.

9.  Giúp evidence/audit rõ ràng.

10. Giảm rủi ro khách hiểu IVR là cuộc gọi tư vấn/bán hàng.

PACK-09 khóa thời lượng gọi trung bình nền là 35 giây, và dùng chu kỳ bảo thủ 50 giây/cuộc/SIM để tính capacity ở PHẦN 3/4.

**18. CALL SCRIPT VARIABLE GOVERNANCE**

**18.1. Biến được phép dùng**

| **Biến**             | **Ý nghĩa**             | **Trạng thái** |
|----------------------|-------------------------|----------------|
| order_code_short     | Mã đơn rút gọn          | ALLOWED        |
| total_amount_display | Tổng thanh toán         | ALLOWED        |
| customer_name_short  | Tên gọi ngắn nếu có     | OPTIONAL       |
| program_name         | Giờ Vàng / 24/7 nếu cần | OPTIONAL       |

Chỉ các biến trên được phép đưa vào call script nền.

Các biến optional chỉ được dùng khi policy cho phép và runtime cung cấp dữ liệu hợp lệ.

**18.2. Biến bắt buộc**

Biến bắt buộc cho call script chuẩn:

1.  order_code_short.

2.  total_amount_display.

Nếu thiếu order_code_short, không được gọi IVR.

Nếu thiếu total_amount_display, không được gọi IVR.

Nếu tổng tiền chưa được Commerce Runtime xác nhận, không được đọc tổng thanh toán trong cuộc gọi.

Nếu order chưa có official order/order_code, không được tạo IVR call job.

Nếu order đã hết hiệu lực, không được tạo IVR call job.

Nếu order đã bị Core hủy, không được tạo IVR call job.

**18.3. Biến optional**

Các biến optional:

1.  customer_name_short.

2.  program_name.

Chỉ được dùng khi:

1.  Có runtime hợp lệ.

2.  Có policy cho phép.

3.  Không vi phạm privacy.

4.  Không làm dài script quá mức cần thiết.

5.  Không khiến khách hiểu IVR là cuộc gọi marketing.

6.  Không khiến khách hiểu chương trình cũ vẫn còn hiệu lực nếu đã hết window.

Ví dụ: program_name chỉ nên dùng để nhắc đơn thuộc Giờ Vàng hoặc 24/7 nếu cần phân biệt confirmation window, không dùng để quảng cáo chương trình.

**18.4. Thông tin không được đọc trong cuộc gọi**

IVR không được đọc:

1.  Full customer profile.

2.  Full address.

3.  Member tier.

4.  Diamond referral info.

5.  Payment detail.

6.  Order history.

7.  AI consultation content.

8.  CRM content.

9.  Health or sensitive note.

10. Ghi chú nội bộ.

11. Nội dung khiếu nại.

12. Số điểm tích lũy.

13. Quyền lợi cá nhân.

14. Lịch sử mua lại.

15. Thông tin người nhận đầy đủ.

16. Mã vận đơn.

17. Trạng thái thanh toán chi tiết.

18. Thông tin MISA/kế toán.

19. Thông tin lô hàng/batch/traceability.

20. Thông tin nội bộ về stock/kho.

Nguyên tắc:

IVR chỉ đọc đủ thông tin để khách nhận diện đơn và xác nhận tiếp tục xử lý.

**18.5. Không đọc full address**

Full address không được đọc trong cuộc gọi vì:

1.  Có thể người nghe không phải khách đặt hàng.

2.  Dễ lộ dữ liệu cá nhân.

3.  Làm dài cuộc gọi.

4.  Không cần thiết cho mục đích bấm 1/0.

5.  Có thể gây rủi ro privacy nếu điện thoại bật loa ngoài.

Nếu cần xác minh địa chỉ, phải chuyển qua luồng human/admin hoặc order confirmation policy khác, không đưa vào script IVR nền.

**18.6. Không đọc member / Diamond / referral**

IVR không được đọc:

1.  Khách là Silver/Gold/Platinum/Diamond.

2.  Quyền lợi thành viên.

3.  Diamond referral info.

4.  Commission.

5.  Referral owner.

6.  Link giới thiệu.

7.  Trạng thái nâng hạng.

8.  Số tiền còn thiếu để lên hạng.

Lý do:

1.  Đây là dữ liệu cá nhân/kinh doanh.

2.  IVR không phải CRM.

3.  IVR không phải kênh member care.

4.  IVR không phải kênh Diamond/referral.

5.  IVR chỉ xác nhận đơn.

**18.7. Không đọc payment detail**

IVR không được đọc:

1.  Khách đã chuyển khoản hay chưa.

2.  Số tài khoản.

3.  Nội dung chuyển khoản.

4.  Thời điểm chuyển khoản.

5.  Mã giao dịch.

6.  Trạng thái đối chiếu ngân hàng.

7.  Thông tin COD chi tiết vượt script.

8.  Lỗi thanh toán.

Khách bấm 1 không đồng nghĩa đã thanh toán.

Khách bấm 1 chỉ đồng nghĩa khách xác nhận tiếp tục xử lý đơn.

Payment vẫn do Payment owner/Core xử lý.

**19. DTMF KEY RULE**

**19.1. Phím xác nhận/hủy đơn**

| **Phím**  | **Ý nghĩa**                | **Hành động**                              |
|-----------|----------------------------|--------------------------------------------|
| 1         | Khách xác nhận đơn         | Core tiếp tục xử lý đơn theo state machine |
| 0         | Khách không đặt / muốn hủy | Core hủy đơn qua state machine             |
| Không bấm | Không có xác nhận hợp lệ   | Xử lý theo attempt/window                  |
| Sai phím  | Không có input hợp lệ      | Xử lý theo rule IVR                        |
| Lỗi DTMF  | Lỗi kỹ thuật               | Không tính là khách không nghe             |

Mapping khóa:

KEY_1 = CONFIRM_ORDER  
KEY_0 = CANCEL_ORDER_BY_CUSTOMER  
KEY_9_HUMAN_SUPPORT = NOT_ENABLED

Phím 1 và phím 0 là hai phím duy nhất trong scope hiện tại.

Không tự thêm phím 9.

Không tự thêm phím 2/3/4.

Không tự thêm menu nhiều tầng.

Không biến IVR thành tổng đài CSKH.

**19.2. Phím 1 — CONFIRM_ORDER**

Khi khách nghe cuộc gọi và bấm phím 1:

IVR_RESULT = IVR_CONFIRMED

Ý nghĩa:

1.  Khách xác nhận có đơn.

2.  Khách đồng ý tiếp tục xử lý đơn.

3.  IVR result được gửi về Core làm input signal.

4.  Core Order State Machine quyết định bước tiếp theo.

5.  Không gọi attempt tiếp theo.

6.  Không gọi lại khách cho cùng confirmation window.

Phím 1 không có nghĩa:

1.  Khách đã thanh toán.

2.  Đơn đã giao.

3.  Đơn đã verified revenue.

4.  Đơn đã được xuất kho.

5.  Đơn đã được MISA ghi nhận.

6.  Đơn đã hoàn tất.

7.  Đơn đủ điều kiện commission.

8.  Đơn đủ điều kiện ROAS verified.

**19.3. Phím 0 — CANCEL_ORDER_BY_CUSTOMER**

Khi khách nghe cuộc gọi và bấm phím 0:

IVR_RESULT = IVR_CUSTOMER_CANCELLED

Ý nghĩa:

1.  Khách xác nhận không đặt hoặc muốn hủy đơn.

2.  IVR gửi cancel request signal về Core.

3.  Core Order State Machine xử lý hủy đơn.

4.  SIM Gateway không tự hủy đơn.

5.  Không gọi attempt tiếp theo.

6.  Không tiếp tục xử lý đơn nếu Core hủy thành công.

Reason code nền:

ORDER_CANCEL_REASON = CUSTOMER_CANCELLED_BY_IVR_KEY_0

Reason code phải do Core ghi nhận.

SIM Gateway không ghi thẳng reason vào order.

**19.4. Không bấm phím**

Nếu khách nghe nhưng không bấm phím, kết quả chưa phải xác nhận hợp lệ.

Không bấm phím có thể do:

1.  Khách không hiểu.

2.  Khách nghe nhưng chưa quyết định.

3.  Khách nghe máy nhưng không thao tác.

4.  DTMF không ghi nhận.

5.  Máy khách không gửi tone.

6.  Cuộc gọi bị cúp giữa chừng.

7.  Lỗi kỹ thuật.

Cần phân biệt:

1.  NO_INPUT do khách không bấm.

2.  DTMF_CAPTURE_ERROR do lỗi kỹ thuật.

3.  CALL_DROPPED do cuộc gọi rớt.

4.  AUDIO_PLAYBACK_ERROR do không phát được nội dung.

Không được gom tất cả thành khách không nghe.

**19.5. Sai phím**

Nếu khách bấm sai phím, ví dụ phím 2/3/4/5/6/7/8/9/\*/#, trạng thái là input không hợp lệ.

Sai phím không được hiểu là xác nhận.

Sai phím không được hiểu là hủy.

Sai phím không tự tạo order action.

Tùy rule, sai phím có thể:

1.  Được xem là invalid input trong attempt hiện tại.

2.  Chờ khách bấm lại nếu còn trong call script.

3.  Kết thúc attempt nếu không có input hợp lệ.

4.  Chuyển retry theo window.

5.  Chuyển Admin Review nếu lặp nhiều hoặc nghi ngờ lỗi DTMF.

Không được tự thêm phím 9 hỗ trợ người thật khi rule đã khóa NOT_ENABLED.

**19.6. Lỗi DTMF**

Lỗi DTMF là lỗi kỹ thuật.

Các tình huống:

1.  DTMF_CAPTURE_ERROR.

2.  Tone không nhận diện được.

3.  DTMF handler lỗi.

4.  Callback DTMF lỗi.

5.  SIM Gateway không trả input.

6.  Server không ghi được input.

7.  Call result normalizer lỗi.

Lỗi DTMF không phải khách không nghe.

Lỗi DTMF không được hủy đơn theo reason no-answer.

Lỗi DTMF phải đi vào:

IVR_TECHNICAL_EXCEPTION  
ADMIN_REVIEW_REQUIRED

**20. CALL RESULT CLASSIFICATION**

**20.1. Nhóm kết quả hợp lệ cuối**

Các kết quả cuối hợp lệ:

1.  IVR_CONFIRMED.

2.  IVR_CUSTOMER_CANCELLED.

3.  IVR_NO_ANSWER_FINAL.

4.  IVR_CONFIRMATION_WINDOW_EXPIRED.

5.  INVALID_PHONE_FINAL nếu rule xác nhận.

6.  TECHNICAL_EXCEPTION_FINAL nếu rule xác nhận.

Khi đã có kết quả cuối, không gọi tiếp attempt còn lại.

**20.2. Nhóm kết quả tạm thời**

Các kết quả tạm thời:

1.  ATTEMPT_1_NO_ANSWER.

2.  ATTEMPT_1_NO_INPUT.

3.  ATTEMPT_1_INVALID_INPUT.

4.  ATTEMPT_1_BUSY.

5.  ATTEMPT_1_CALL_DROPPED nếu không phải lỗi kỹ thuật final.

6.  ATTEMPT_2_NO_ANSWER.

7.  ATTEMPT_2_NO_INPUT.

8.  ATTEMPT_2_INVALID_INPUT.

9.  ATTEMPT_2_BUSY.

10. ATTEMPT_3_NO_ANSWER nếu program là TWENTY_FOUR_SEVEN.

11. ATTEMPT_3_NO_INPUT nếu program là TWENTY_FOUR_SEVEN.

12. ATTEMPT_3_INVALID_INPUT nếu program là TWENTY_FOUR_SEVEN.

13. RETRY_PENDING.

14. CALL_PENDING.

15. CALL_SCHEDULED.

Kết quả tạm thời không được làm thay đổi order state cuối.

Kết quả tạm thời chỉ dùng để scheduler quyết định attempt tiếp theo trong confirmation window.

**20.3. Nhóm lỗi kỹ thuật**

Các lỗi kỹ thuật:

1.  SIM_GATEWAY_ERROR.

2.  SERVER_ERROR.

3.  DTMF_CAPTURE_ERROR.

4.  AUDIO_PLAYBACK_ERROR.

5.  SIM_CHANNEL_FAILURE.

6.  INTERNAL_CALLBACK_ERROR.

7.  SCHEDULER_ERROR.

8.  CALL_RESULT_NORMALIZER_ERROR.

9.  AUDIT_WRITE_ERROR.

10. EVIDENCE_WRITE_ERROR.

Các lỗi kỹ thuật phải đi vào technical exception.

Không được tính là khách không nghe.

Không được làm hủy đơn tự động như no answer.

Không được kích hoạt post-IVR cancellation notice.

**21. PROGRAM-BASED CALL RULE**

**21.1. Rule chung**

Rule chung cho PACK-09:

MAX_ATTEMPT_PER_ORDER = PROGRAM_BASED  
ATTEMPT_INTERVAL = PROGRAM_BASED  
SIM_GATEWAY_DIRECT_ORDER_UPDATE = NO  
ORDER_STATE_CHANGE_MUST_PASS_CORE_STATE_MACHINE = YES

Program-based rule:

1.  GOLDEN_HOUR:

    - IVR_CONFIRMATION_WINDOW = 5_MINUTES

    - MAX_ATTEMPT = 2

    - ATTEMPT_1 = T0

    - ATTEMPT_2 = T0 + 2_MINUTES_30_SECONDS

    - WINDOW_EXPIRES = T0 + 5_MINUTES

2.  TWENTY_FOUR_SEVEN:

    - IVR_CONFIRMATION_WINDOW = 15_MINUTES

    - MAX_ATTEMPT = 3

    - ATTEMPT_1 = T0

    - ATTEMPT_2 = T0 + 5_MINUTES

    - ATTEMPT_3 = T0 + 10_MINUTES

    - WINDOW_EXPIRES = T0 + 15_MINUTES

Ý nghĩa:

1.  Số lần gọi tối đa phụ thuộc chương trình.

2.  Giờ Vàng giữ 2 cuộc.

3.  24/7 dùng 3 cuộc.

4.  SIM Gateway không cập nhật order trực tiếp.

5.  Mọi thay đổi trạng thái đơn phải qua Core Order State Machine.

**21.2. Không gọi cuộc tiếp theo nếu cuộc trước đã có kết quả cuối**

Nếu một attempt đã có kết quả cuối, không gọi các attempts còn lại.

Kết quả cuối gồm:

1.  IVR_CONFIRMED.

2.  IVR_CUSTOMER_CANCELLED.

3.  INVALID_PHONE_FINAL.

4.  IVR_NO_ANSWER_FINAL.

5.  IVR_CONFIRMATION_WINDOW_EXPIRED.

6.  TECHNICAL_EXCEPTION_FINAL nếu rule xác định không retry tự động.

Ví dụ:

1.  Khách bấm 1 ở cuộc 1 → không gọi các cuộc tiếp theo.

2.  Khách bấm 0 ở cuộc 1 → không gọi các cuộc tiếp theo.

3.  Số điện thoại invalid final → không gọi các cuộc tiếp theo.

4.  Technical exception final → không gọi các cuộc tiếp theo, chuyển Admin Review.

5.  Với 24/7, nếu khách xác nhận ở cuộc 2 thì không gọi cuộc 3.

**21.3. Attempt interval không được tùy tiện**

Attempt interval phải theo từng program.

GOLDEN_HOUR:

1.  Attempt interval = 2 phút 30 giây.

2.  Attempt 2 = T0 + 2 phút 30 giây.

3.  Window expires = T0 + 5 phút.

TWENTY_FOUR_SEVEN:

1.  Attempt interval = 5 phút.

2.  Attempt 2 = T0 + 5 phút.

3.  Attempt 3 = T0 + 10 phút.

4.  Window expires = T0 + 15 phút.

Không được gọi lại ngay sau 5 giây.

Không được gọi liên tục gây phiền khách.

Không được gọi sau khi window hết hạn.

Không được gọi dồn cuối window nếu attempt đã quá hạn.

Không được để Admin bấm gọi lại ngoài rule nếu chưa có owner-approved exception.

**21.4. Confirmation window là giới hạn cứng**

Confirmation window là thời gian tối đa để nhận xác nhận hợp lệ.

Khi window hết:

1.  Không tạo attempt mới.

2.  Không nhận kết quả muộn như xác nhận hợp lệ nếu policy không cho phép.

3.  Không tiếp tục giữ quote/chương trình quá hạn.

4.  Core xử lý hủy đơn / quote hết hiệu lực theo rule.

5.  Ghi IVR_CONFIRMATION_WINDOW_EXPIRED.

Không được kéo dài window bằng manual thao tác nếu không có owner-approved override.

**22. GOLDEN HOUR RULE**

**22.1. Cấu hình Giờ Vàng**

Rule Giờ Vàng:

PROGRAM = GOLDEN_HOUR  
IVR_CONFIRMATION_WINDOW = 5_MINUTES  
MAX_ATTEMPT = 2  
ATTEMPT_INTERVAL = 2_MINUTES_30_SECONDS

Lịch gọi:

T0 = thời điểm đơn cần xác nhận IVR  
  
ATTEMPT_1 = T0  
ATTEMPT_2 = T0 + 2 phút 30 giây  
WINDOW_EXPIRES = T0 + 5 phút

Giờ Vàng có cửa sổ xác nhận ngắn vì quote/giá/chương trình có tính thời điểm.

IVR không được gọi sau 5 phút rồi vẫn coi đơn là xác nhận trong phiên.

**22.2. Mapping kết quả Giờ Vàng**

| **Tình huống**                  | **IVR Result**                  | **Core Action**                                     |
|---------------------------------|---------------------------------|-----------------------------------------------------|
| Cuộc 1 nghe + bấm 1             | IVR_CONFIRMED                   | Tiếp tục xử lý đơn qua Core Order State Machine     |
| Cuộc 1 nghe + bấm 0             | IVR_CUSTOMER_CANCELLED          | Core hủy đơn                                        |
| Cuộc 1 không nghe               | ATTEMPT_1_NO_ANSWER             | Gọi cuộc 2 sau 2 phút 30 giây                       |
| Cuộc 1 lỗi kỹ thuật             | IVR_TECHNICAL_EXCEPTION         | Không tính là khách không nghe, chuyển Admin Review |
| Cuộc 2 nghe + bấm 1             | IVR_CONFIRMED                   | Tiếp tục xử lý đơn qua Core Order State Machine     |
| Cuộc 2 nghe + bấm 0             | IVR_CUSTOMER_CANCELLED          | Core hủy đơn                                        |
| Cuộc 2 không nghe               | IVR_NO_ANSWER_FINAL             | Core hủy đơn theo rule                              |
| Cuộc 2 lỗi kỹ thuật             | IVR_TECHNICAL_EXCEPTION         | Không tính là khách không nghe, chuyển Admin Review |
| Hết 5 phút chưa xác nhận hợp lệ | IVR_CONFIRMATION_WINDOW_EXPIRED | Core hủy đơn / quote hết hiệu lực                   |

**22.3. Giờ Vàng không được gọi dồn cuối phiên**

Trong Giờ Vàng, scheduler không được dồn toàn bộ cuộc gọi cuối phiên.

Không được để hàng trăm call job nằm chờ rồi đến cuối 5 phút mới gọi.

Nếu call job không thể thực hiện trong window, phải đánh dấu theo rule capacity/deadline.

Không được giả lập đã gọi nếu SIM không đủ năng lực.

Không được kéo dài xác nhận ngoài 5 phút vì nghẽn SIM.

**22.4. Giờ Vàng không được tự kéo dài quote**

IVR không có quyền kéo dài quote.

Nếu window hết:

1.  IVR_CONFIRMATION_WINDOW_EXPIRED.

2.  Core xử lý theo rule.

3.  Quote hết hiệu lực nếu policy quy định.

4.  Không được nói khách vẫn giữ giá.

5.  Không được tự tạo quote mới.

Quote/giá/chương trình do Commerce Runtime quyết định.

**22.5. Golden Hour post-IVR cancellation notice**

POST_IVR_CANCELLATION_NOTICE_ALLOWED = YES  
NOTICE_TRIGGER = AFTER_CORE_ORDER_CANCELLED_ONLY  
NOTICE_TYPE = TRANSACTIONAL_ORDER_STATUS_NOTICE  
SIM_GATEWAY_CAN_SEND_NOTICE = NO  
AI_ADVISOR_CAN_SELF_SEND_NOTICE = NO  
CRM_MARKETING_CAN_SEND_NOTICE = NO  
NOTIFICATION_OWNER_REQUIRED = YES

Rule:

1.  Nếu khách không nghe sau đủ 2 attempts hợp lệ trong Golden Hour, IVR tạo IVR_NO_ANSWER_FINAL.

2.  IVR_NO_ANSWER_FINAL chỉ là input signal.

3.  Core Order State Machine xử lý hủy đơn / quote hết hiệu lực theo rule.

4.  Chỉ sau khi Core đã hủy đơn chính thức, Notification owner mới được gửi tin nhắn giao dịch giải thích.

5.  Không gửi tin nhắn hủy sau attempt 1.

6.  Không gửi tin nhắn hủy trước khi Core hủy đơn.

7.  Không hứa giữ lại giá Giờ Vàng nếu window đã hết.

8.  Không dùng tin nhắn này để upsell, CRM hoặc marketing.

Golden Hour cancellation notice template:

Ginsengfood kính chào Mình.

Đơn hàng {{order_code_short}} của Mình chưa được xác nhận qua cuộc gọi tự động trong thời gian giữ đơn Giờ Vàng, nên đơn hàng đã hết hiệu lực và được hủy theo quy trình.

Nếu Mình vẫn có nhu cầu, Mình vui lòng phản hồi lại tin nhắn này để được hỗ trợ tạo đơn mới theo chương trình hiện hành ạ.

Ginsengfood trân trọng cảm ơn Mình.

**23. 24/7 RULE**

**23.1. Cấu hình 24/7**

Rule 24/7:

PROGRAM = TWENTY_FOUR_SEVEN  
IVR_CONFIRMATION_WINDOW = 15_MINUTES  
MAX_ATTEMPT = 3  
ATTEMPT_INTERVAL = 5_MINUTES

Lịch gọi:

T0 = thời điểm đơn cần xác nhận IVR  
  
ATTEMPT_1 = T0  
ATTEMPT_2 = T0 + 5 phút  
ATTEMPT_3 = T0 + 10 phút  
WINDOW_EXPIRES = T0 + 15 phút

24/7 có confirmation window 15 phút và được phép gọi tối đa 3 attempts.

Không được gọi sau 15 phút rồi vẫn coi xác nhận là hợp lệ nếu rule không cho phép.

**23.2. Mapping kết quả 24/7**

| **Tình huống**                   | **IVR Result**                  | **Core Action**                                     |
|----------------------------------|---------------------------------|-----------------------------------------------------|
| Cuộc 1 nghe + bấm 1              | IVR_CONFIRMED                   | Tiếp tục xử lý đơn qua Core Order State Machine     |
| Cuộc 1 nghe + bấm 0              | IVR_CUSTOMER_CANCELLED          | Core hủy đơn                                        |
| Cuộc 1 không nghe                | ATTEMPT_1_NO_ANSWER             | Gọi cuộc 2 sau 5 phút                               |
| Cuộc 1 lỗi kỹ thuật              | IVR_TECHNICAL_EXCEPTION         | Không tính là khách không nghe, chuyển Admin Review |
| Cuộc 2 nghe + bấm 1              | IVR_CONFIRMED                   | Tiếp tục xử lý đơn qua Core Order State Machine     |
| Cuộc 2 nghe + bấm 0              | IVR_CUSTOMER_CANCELLED          | Core hủy đơn                                        |
| Cuộc 2 không nghe                | ATTEMPT_2_NO_ANSWER             | Gọi cuộc 3 sau 5 phút                               |
| Cuộc 2 lỗi kỹ thuật              | IVR_TECHNICAL_EXCEPTION         | Không tính là khách không nghe, chuyển Admin Review |
| Cuộc 3 nghe + bấm 1              | IVR_CONFIRMED                   | Tiếp tục xử lý đơn qua Core Order State Machine     |
| Cuộc 3 nghe + bấm 0              | IVR_CUSTOMER_CANCELLED          | Core hủy đơn                                        |
| Cuộc 3 không nghe                | IVR_NO_ANSWER_FINAL             | Core hủy đơn theo rule                              |
| Cuộc 3 lỗi kỹ thuật              | IVR_TECHNICAL_EXCEPTION         | Không tính là khách không nghe, chuyển Admin Review |
| Hết 15 phút chưa xác nhận hợp lệ | IVR_CONFIRMATION_WINDOW_EXPIRED | Core hủy đơn / quote hết hiệu lực                   |

**23.3. 24/7 không được gọi ngoài window**

Không được tạo attempt sau 15 phút.

Không được tạo attempt 4.

Không được reset window bằng thao tác Admin nếu không có owner-approved rule.

Không được gọi lại nhiều lần vì khách chưa nghe.

Không được biến IVR thành kênh follow-up.

Nếu hết window, Core xử lý theo state machine.

**23.4. 24/7 post-IVR cancellation notice**

POST_IVR_CANCELLATION_NOTICE_ALLOWED = YES  
NOTICE_TRIGGER = AFTER_CORE_ORDER_CANCELLED_ONLY  
NOTICE_TYPE = TRANSACTIONAL_ORDER_STATUS_NOTICE  
SIM_GATEWAY_CAN_SEND_NOTICE = NO  
AI_ADVISOR_CAN_SELF_SEND_NOTICE = NO  
CRM_MARKETING_CAN_SEND_NOTICE = NO  
NOTIFICATION_OWNER_REQUIRED = YES

Rule:

1.  Nếu khách không nghe sau đủ 3 attempts hợp lệ trong 24/7, IVR tạo IVR_NO_ANSWER_FINAL.

2.  IVR_NO_ANSWER_FINAL chỉ là input signal.

3.  Core Order State Machine xử lý hủy đơn theo rule.

4.  Chỉ sau khi Core đã hủy đơn chính thức, Notification owner mới được gửi tin nhắn giao dịch giải thích.

5.  Không gửi tin nhắn hủy sau attempt 1 hoặc attempt 2.

6.  Không gửi tin nhắn hủy trước khi Core hủy đơn.

7.  Không dùng tin nhắn này để upsell, CRM hoặc marketing.

24/7 cancellation notice template:

Ginsengfood kính chào Mình.

Đơn hàng {{order_code_short}} của Mình chưa được xác nhận qua cuộc gọi tự động trong thời gian xác nhận đơn, nên đơn hàng đã được hủy theo quy trình.

Nếu Mình vẫn có nhu cầu đặt Cháo Sâm Savigin, Mình vui lòng phản hồi lại tin nhắn này để được hỗ trợ tạo đơn mới theo chương trình hiện hành ạ.

Ginsengfood trân trọng cảm ơn Mình.

**24. INVALID PHONE / BUSY / NO ANSWER / NO INPUT GOVERNANCE**

**24.1. No Answer**

No Answer là khi cuộc gọi được thực hiện hợp lệ, có tín hiệu gọi/đổ chuông hoặc không kết nối được theo rule nhà mạng/SIM Gateway, nhưng khách không nghe máy hoặc không có xác nhận hợp lệ.

No Answer sau attempt 1:

ATTEMPT_1_NO_ANSWER

No Answer sau attempt 2:

ATTEMPT_2_NO_ANSWER

Final No Answer:

IVR_NO_ANSWER_FINAL

Program-specific final rule:

1.  GOLDEN_HOUR: IVR_NO_ANSWER_FINAL sau 2 attempts hợp lệ.

2.  TWENTY_FOUR_SEVEN: IVR_NO_ANSWER_FINAL sau 3 attempts hợp lệ.

Program-specific reason code:

1.  GOLDEN_HOUR: ORDER_CANCEL_REASON = IVR_NO_ANSWER_AFTER_2_ATTEMPTS.

2.  TWENTY_FOUR_SEVEN: ORDER_CANCEL_REASON = IVR_NO_ANSWER_AFTER_3_ATTEMPTS.

Important:

1.  Chỉ dùng nếu thực sự là no answer.

2.  Không dùng cho technical exception.

3.  Không dùng cho capacity incident.

4.  Không dùng cho invalid phone.

5.  Không dùng cho khách bấm phím 0.

6.  Không gửi tin nhắn hủy đơn ngay sau từng attempt.

7.  Chỉ sau khi Core Order State Machine hủy đơn chính thức, Notification owner mới được gửi transactional order status notice.

**24.2. Busy**

Busy là khi số khách bận máy.

Busy không tự động là khách từ chối.

Busy có thể xử lý như retry pending nếu còn window và attempt.

Nếu hết attempts/window, Core xử lý theo rule tương ứng.

Busy không được xem là khách bấm 0.

Busy không được xem là technical exception nếu SIM Gateway trả busy hợp lệ.

**24.3. No Input**

No Input là khi cuộc gọi kết nối nhưng không có phím hợp lệ.

No Input không phải xác nhận.

No Input không phải hủy.

No Input có thể được xử lý tương tự invalid input hoặc no confirmation theo rule.

Nếu còn attempt/window, scheduler có thể gọi attempt tiếp theo.

Nếu hết attempts/window, Core xử lý theo rule.

**24.4. Invalid Input**

Invalid Input là khi khách bấm phím ngoài 1/0.

Invalid Input không được map thành confirm.

Invalid Input không được map thành cancel.

Invalid Input không được tạo order action.

Nếu invalid input xảy ra do DTMF lỗi kỹ thuật, phải chuyển technical exception.

Nếu invalid input là phím sai do khách bấm, xử lý theo rule IVR và window.

**24.5. Invalid Phone**

Invalid Phone có thể gồm:

1.  Số sai định dạng.

2.  Số không gọi được.

3.  Số không tồn tại theo phản hồi kỹ thuật đáng tin cậy.

4.  Số bị chặn.

5.  Số không đủ điều kiện gọi.

Invalid Phone final chỉ được kết luận khi rule xác nhận rõ.

Không được kết luận invalid phone chỉ vì một lần không nghe.

Invalid Phone final có thể dẫn tới:

ORDER_CANCEL_REASON = IVR_INVALID_PHONE_IF_RULE_CONFIRMED

Core mới ghi nhận action cuối.

Nếu số điện thoại đã xác định không có thật, không gửi SMS vào chính số đó.

Nếu vẫn còn channel gốc hợp lệ như Messenger / Website / Facebook, Notification owner có thể gửi thông báo qua channel gốc theo policy.

**25. DEADLINE-AWARE ROLLING QUEUE**

**25.1. Scheduler model chính thức**

Scheduler model bắt buộc:

ROLLING_REAL_TIME_IVR = REQUIRED  
BATCH_AFTER_SESSION_CALLING = PROHIBITED  
SCHEDULER_MODEL = DEADLINE_AWARE_ROLLING_QUEUE

Ý nghĩa:

1.  Call job được đưa vào queue ngay khi đơn cần IVR.

2.  Scheduler phải xét deadline của từng order.

3.  Scheduler phải xét số SIM khả dụng.

4.  Scheduler phải xét attempt number.

5.  Scheduler phải xét confirmation window.

6.  Scheduler phải xét program type.

7.  Scheduler không được gom cuối phiên.

8.  Scheduler không được gọi sau deadline.

9.  Scheduler không được assign call vào SIM đang bận.

10. Scheduler phải ghi evidence nếu không đủ capacity.

**25.2. Không batch cuối phiên**

Batch cuối phiên bị cấm.

Không được dồn toàn bộ cuộc gọi sau live hoặc cuối Giờ Vàng.

Ví dụ lỗi:

1.  Giờ Vàng có 800 đơn cần IVR trong 5 phút.

2.  Hệ thống chỉ có 32 SIM.

3.  Scheduler dồn 800 cuộc vào cuối 5 phút.

4.  Nhiều cuộc gọi quá hạn.

5.  Hệ thống vẫn coi như gọi hợp lệ.

Đây là Fail Gate.

Với 32 SIM, năng lực 5 phút chỉ khoảng 192 cuộc theo baseline bảo thủ. Nếu có 800–1.200 cuộc cần IVR trong 5 phút, hệ thống phải tạo capacity incident, không được giả lập gọi thành công.

**25.3. Deadline-aware nghĩa là gì**

Deadline-aware nghĩa là mỗi call job phải biết:

1.  T0.

2.  Program type.

3.  Confirmation window.

4.  Attempt deadline.

5.  Next attempt time.

6.  Window expiry.

7.  Remaining time.

8.  SIM availability.

9.  Retry eligibility.

10. Finalization rule.

Scheduler phải ưu tiên job có deadline gần hơn nếu rule cho phép.

Scheduler phải tránh tạo attempt không còn đủ thời gian.

Scheduler phải không tạo attempt tiếp theo nếu attempt trước đã final.

**25.4. Rolling queue nghĩa là gì**

Rolling queue nghĩa là hệ thống gọi liên tục theo thời gian thực khi đơn phát sinh, không đợi cuối phiên.

Ví dụ với Giờ Vàng:

1.  Đơn phát sinh tại T0.

2.  Attempt 1 gọi ngay tại T0 nếu có SIM.

3.  Nếu không nghe, attempt 2 được lên lịch T0 + 2 phút 30 giây.

4.  Nếu hết 5 phút, window expired.

5.  Không gọi sau T0 + 5 phút.

Ví dụ với 24/7:

1.  Đơn phát sinh tại T0.

2.  Attempt 1 gọi ngay tại T0 nếu có SIM.

3.  Nếu không nghe, attempt 2 lên lịch T0 + 5 phút.

4.  Nếu tiếp tục không nghe, attempt 3 lên lịch T0 + 10 phút.

5.  Nếu hết 15 phút, window expired.

6.  Không gọi sau T0 + 15 phút.

**25.5. SIM allocation rule**

Scheduler chỉ được assign call job vào SIM channel:

1.  Đang available.

2.  Không có active outbound call.

3.  Health check pass.

4.  Không bị lỗi SIM_CHANNEL_FAILURE.

5.  Không bị cooldown nếu rule kỹ thuật yêu cầu.

6.  Không vượt capacity limit.

7.  Không bị owner/admin disable.

Không được assign hai cuộc gọi cùng lúc vào một SIM.

Nếu SIM health fail, job phải được chuyển SIM khác nếu còn thời gian và có SIM.

Nếu không còn SIM, ghi capacity issue.

**25.6. Capacity incident**

Capacity incident xảy ra khi:

1.  Số call job vượt năng lực SIM trong window.

2.  Không đủ SIM để gọi attempt đúng hạn.

3.  Queue backlog làm nhiều order hết window.

4.  SIM failure làm capacity giảm mạnh.

5.  Scheduler không đáp ứng deadline.

6.  Live/Golden Hour tạo lượng đơn vượt baseline.

7.  IVR job không thể xử lý real-time.

Capacity incident phải ghi evidence.

Capacity incident không được che giấu.

Capacity incident không được biến thành khách không nghe.

Capacity incident không được tự động hủy đơn như lỗi khách nếu nguyên nhân là năng lực hệ thống.

Capacity incident không được kích hoạt post-IVR cancellation notice.

Core/Owner cần rule xử lý capacity incident.

**26. CALL JOB LIFECYCLE GOVERNANCE**

**26.1. Vòng đời call job**

Call job nên đi qua các trạng thái logic:

1.  CALL_JOB_CREATED.

2.  CALL_JOB_ELIGIBILITY_CHECKED.

3.  CALL_JOB_SCHEDULED.

4.  SIM_CHANNEL_ASSIGNED.

5.  CALL_ATTEMPT_STARTED.

6.  CALL_CONNECTED hoặc CALL_NOT_CONNECTED.

7.  AUDIO_PLAYED.

8.  DTMF_WAITING.

9.  DTMF_CAPTURED hoặc NO_INPUT.

10. RESULT_NORMALIZED.

11. IVR_RESULT_RECORDED.

12. CORE_SIGNAL_SENT.

13. EVIDENCE_WRITTEN.

14. CALL_JOB_FINALIZED.

Các trạng thái lỗi:

1.  CALL_JOB_BLOCKED.

2.  CALL_JOB_EXPIRED.

3.  SIM_CHANNEL_FAILURE.

4.  DTMF_CAPTURE_ERROR.

5.  AUDIO_PLAYBACK_ERROR.

6.  SCHEDULER_ERROR.

7.  RESULT_NORMALIZER_ERROR.

8.  EVIDENCE_WRITE_ERROR.

9.  ADMIN_REVIEW_REQUIRED.

**26.2. Không tạo call job nếu order chưa đủ điều kiện**

Không tạo call job nếu:

1.  Chưa có official order/order_code.

2.  Order chưa cần IVR.

3.  Order đã hủy.

4.  Order đã xác nhận IVR.

5.  Order đã hết confirmation window.

6.  Order không thuộc chương trình cần IVR theo rule.

7.  Thiếu số điện thoại hợp lệ.

8.  Thiếu total_amount_display.

9.  Thiếu order_code_short.

10. IVR_GATE = BLOCKED ở production.

11. Production SIM Gateway chưa được release.

12. Evidence writer không sẵn sàng nếu production.

**26.3. Không tạo duplicate call job**

Một order không được có nhiều call job active cùng lúc trong cùng confirmation window.

Duplicate call job có thể gây:

1.  Gọi khách nhiều lần.

2.  Khách bấm phím nhiều kết quả khác nhau.

3.  Race condition với Core.

4.  Sai evidence.

5.  Sai order state.

6.  Khiếu nại.

7.  Sai ROAS/risk measurement nếu downstream dùng evidence.

Scheduler phải chống duplicate.

Duplicate call job là Fail Gate.

**26.4. Call job expiry**

Call job phải hết hiệu lực khi:

1.  Window expired.

2.  Order đã final.

3.  Khách đã bấm 1.

4.  Khách đã bấm 0.

5.  Core đã hủy đơn.

6.  Technical exception final.

7.  Owner/admin block theo rule.

8.  Order không còn đủ điều kiện IVR.

Call job expired không được gọi tiếp.

**27. RESULT NORMALIZATION GOVERNANCE**

**27.1. Vì sao cần result normalizer**

SIM Gateway có thể trả nhiều loại kết quả kỹ thuật.

PACK-09 cần call result normalizer để chuyển kết quả kỹ thuật thành IVR result chuẩn.

Normalizer phải phân biệt:

1.  Khách xác nhận.

2.  Khách hủy.

3.  Không nghe.

4.  Máy bận.

5.  Không bấm phím.

6.  Sai phím.

7.  Lỗi DTMF.

8.  Lỗi audio.

9.  Lỗi SIM.

10. Lỗi server.

11. Lỗi scheduler.

12. Hết window.

13. Capacity incident.

14. Notification after Core cancellation.

Nếu không normalize đúng, Core có thể hủy nhầm đơn hoặc xử lý sai.

**27.2. Normalized IVR result tối thiểu**

Các normalized result tối thiểu:

1.  IVR_CONFIRMED.

2.  IVR_CUSTOMER_CANCELLED.

3.  ATTEMPT_1_NO_ANSWER.

4.  ATTEMPT_1_NO_INPUT.

5.  ATTEMPT_1_INVALID_INPUT.

6.  ATTEMPT_2_NO_ANSWER.

7.  ATTEMPT_2_NO_INPUT.

8.  ATTEMPT_2_INVALID_INPUT.

9.  ATTEMPT_3_NO_ANSWER.

10. ATTEMPT_3_NO_INPUT.

11. ATTEMPT_3_INVALID_INPUT.

12. IVR_NO_ANSWER_FINAL.

13. IVR_CONFIRMATION_WINDOW_EXPIRED.

14. IVR_INVALID_PHONE_FINAL.

15. IVR_TECHNICAL_EXCEPTION.

16. IVR_ADMIN_REVIEW_REQUIRED.

17. IVR_RESULT_INVALID.

18. IVR_RESULT_DUPLICATE_BLOCKED.

19. IVR_CAPACITY_EXCEPTION.

20. IVR_POST_CANCEL_NOTICE_PENDING.

21. IVR_POST_CANCEL_NOTICE_SENT.

22. IVR_POST_CANCEL_NOTICE_BLOCKED.

**27.3. Result normalizer không được đổi order state**

Call result normalizer chỉ chuẩn hóa kết quả.

Normalizer không được:

1.  Hủy đơn.

2.  Tiếp tục đơn.

3.  Cho xuất kho.

4.  Cho giao hàng.

5.  Đánh dấu verified revenue.

6.  Ghi MISA.

7.  Tạo payment status.

8.  Tạo delivery status.

9.  Tự gửi cancellation notice.

Normalizer chỉ gửi result về Core Order State Machine qua boundary hợp lệ.

**28. ADMIN / MANUAL CONTROL PRINCIPLES TRONG PHẦN CALL**

**28.1. Admin không được sửa IVR result giả**

Admin không được sửa IVR result để làm như khách đã bấm phím.

Không được tạo:

1.  Fake IVR_CONFIRMED.

2.  Fake IVR_CUSTOMER_CANCELLED.

3.  Fake NO_ANSWER.

4.  Fake DTMF result.

5.  Fake call evidence.

6.  Fake post-cancel notice sent.

Nếu cần xử lý thủ công, phải dùng Admin Review / Manual Review flow riêng, có reason, permission và audit.

Manual review không được giả danh IVR.

**28.2. Admin không được tạo retry ngoài rule**

Admin không được bấm gọi lại ngoài rule nếu:

1.  Đã hết confirmation window.

2.  Đã có result final.

3.  Đơn đã hủy.

4.  Đơn không còn eligible.

5.  Retry vượt attempt theo program.

6.  Owner rule không cho phép exception.

Nếu có trường hợp ngoại lệ, phải có owner-approved override, audit và evidence.

**29. DONE CONDITION CỦA PHẦN 2/4**

PHẦN 2/4 được xem là hoàn thành về mặt tài liệu khi đã khóa được:

1.  Call script governance.

2.  Nội dung cuộc gọi chuẩn.

3.  Biến được phép dùng.

4.  Biến không được đọc.

5.  Data minimization trong cuộc gọi.

6.  DTMF key rule.

7.  Phím 1 = CONFIRM_ORDER.

8.  Phím 0 = CANCEL_ORDER_BY_CUSTOMER.

9.  Phím 9 = NOT_ENABLED.

10. Không bấm phím / sai phím / lỗi DTMF.

11. Call result classification.

12. Program-based call rule.

13. MAX_ATTEMPT_PER_ORDER = PROGRAM_BASED.

14. ATTEMPT_INTERVAL = PROGRAM_BASED.

15. Giờ Vàng: 5 phút, 2 attempts, 2 phút 30 giây.

16. 24/7: 15 phút, 3 attempts, T0 / T0 + 5 phút / T0 + 10 phút.

17. Post-IVR cancellation notice chỉ gửi sau khi Core đã hủy đơn chính thức.

18. Confirmation window là giới hạn cứng.

19. No Answer / Busy / No Input / Invalid Input / Invalid Phone.

20. Deadline-aware rolling queue.

21. Không batch cuối phiên.

22. SIM allocation rule.

23. Capacity incident.

24. Call job lifecycle.

25. Duplicate call job block.

26. Result normalization.

27. Admin/manual control principles.

PHẦN 2/4 chưa viết chi tiết capacity baseline theo 12/24/32 SIM, engineer handoff, cross-pack implementation boundary, P0 MUST/MUST NOT/FAIL IF, Smoke Matrix, Evidence, Done Gate tổng thể, Fail Gate tổng thể và Release Control. Các nội dung đó thuộc PHẦN 3/4 và PHẦN 4/4.

**KẾT LUẬN PHẦN 2/4**

PACK-09 dùng call script ngắn, rõ và chỉ phục vụ xác nhận đơn hàng.

IVR chỉ được đọc mã đơn rút gọn và tổng thanh toán, có thể dùng tên ngắn hoặc tên chương trình nếu policy cho phép.

IVR không được đọc full profile, full address, member tier, Diamond referral, payment detail, order history, AI consultation, CRM content hoặc health/sensitive note.

DTMF chỉ có hai phím trong scope hiện tại:

**Phím 1 = xác nhận tiếp tục xử lý đơn.**  
**Phím 0 = khách không đặt hoặc muốn hủy đơn.**

Phím 9 hỗ trợ người thật hiện **NOT_ENABLED**.

Giờ Vàng có confirmation window 5 phút, tối đa 2 cuộc, attempt 2 cách attempt 1 đúng 2 phút 30 giây.

24/7 có confirmation window 15 phút, tối đa 3 cuộc, lịch gọi T0 / T0 + 5 phút / T0 + 10 phút.

Scheduler bắt buộc là:

**DEADLINE_AWARE_ROLLING_QUEUE**

Không được batch toàn bộ cuộc gọi cuối phiên.

Không được gọi sau khi window hết hạn.

Không được gọi lại vô hạn.

Không được tạo duplicate call job.

Không được tính lỗi kỹ thuật là khách không nghe.

Không được để SIM Gateway hoặc IVR normalizer cập nhật order trực tiếp.

Post-IVR cancellation notice chỉ được gửi sau khi Core Order State Machine đã hủy đơn chính thức.

Nguyên tắc khóa của PHẦN 2/4 là:

**Call script chỉ xác nhận đơn.**  
**IVR không phải marketing.**  
**IVR không phải CRM.**  
**Phím 1 xác nhận, phím 0 hủy.**  
**Không có phím 9 trong scope hiện tại.**  
**Giờ Vàng 5 phút / 2 attempts.**  
**24/7 15 phút / 3 attempts.**  
**Attempt interval theo program: Giờ Vàng cách 2 phút 30 giây; 24/7 cách 5 phút.**  
**Confirmation window là giới hạn cứng.**  
**Rolling queue là bắt buộc.**  
**Batch cuối phiên bị cấm.**  
**Technical error không phải No Answer.**  
**Capacity incident không phải No Answer.**  
**Core Order State Machine mới là lớp quyết định cuối.**  
**Tin nhắn giải thích hủy đơn chỉ gửi sau khi Core đã hủy đơn.**

**PHẦN 3/4 — CALL RESULT / TECHNICAL EXCEPTION / CAPACITY BASELINE / CROSS-PACK CONTROL / ENGINEER HANDOFF**

**30. MỤC TIÊU CỦA PHẦN 3/4**

PHẦN 3/4 khóa lớp xử lý kết quả cuộc gọi IVR, phân biệt lỗi nghiệp vụ và lỗi kỹ thuật, xác định năng lực SIM Gateway, kiểm soát biên tích hợp với các pack khác và chuẩn hóa handoff cho đội kỹ thuật triển khai.

Mục tiêu của phần này là xác định rõ:

1.  IVR result là gì.

2.  IVR result không phải là order state cuối.

3.  Call result phải được normalize trước khi gửi Core.

4.  Lỗi kỹ thuật không được tính là khách không nghe.

5.  SIM Gateway không được hủy đơn trực tiếp.

6.  Core Order State Machine là lớp quyết định cuối.

7.  Năng lực gọi phải tính theo số SIM vật lý.

8.  Một SIM chỉ có một active outbound call.

9.  Không được batch toàn bộ cuộc gọi cuối phiên.

10. Capacity incident phải được ghi nhận.

11. AI Advisor không được tạo call job.

12. Facebook Gateway / Messenger / Live không được gọi IVR trực tiếp.

13. CRM không được dùng IVR cho chăm sóc/marketing.

14. Notification owner là bên duy nhất được gửi post-IVR cancellation notice sau khi Core đã hủy đơn.

15. Payment / MISA / Warehouse / Traceability không được consume sai IVR result.

16. Kỹ sư backend/SIM Gateway và kỹ sư Admin UI/Monitoring/Evidence phải có ranh giới nhiệm vụ rõ.

PHẦN 3/4 không thiết kế code, API, database hoặc UI chi tiết.

PHẦN 3/4 chỉ khóa governance/domain và handoff kỹ thuật ở mức định hướng triển khai.

**31. CALL RESULT GOVERNANCE**

**31.1. IVR result là input signal**

Nguyên tắc khóa:

IVR_RESULT_IS_INPUT_SIGNAL_ONLY  
ORDER_STATE_MACHINE_IS_FINAL_DECISION_LAYER

IVR result chỉ là tín hiệu đầu vào cho Core Order State Machine.

IVR result không tự động là order state.

IVR result không tự động hủy đơn.

IVR result không tự động xác nhận đơn hoàn tất.

IVR result không tự động cho xuất kho.

IVR result không tự động xác nhận thanh toán.

IVR result không tự động xác nhận giao hàng.

IVR result không tự động tạo verified revenue.

IVR result không tự động kích hoạt notification nếu Core chưa quyết định.

**31.2. Call result phải được normalize**

SIM Gateway có thể trả về nhiều kết quả kỹ thuật khác nhau.

Các kết quả này phải được **Call Result Normalizer** chuẩn hóa thành IVR result hợp lệ trước khi gửi về Core.

Không được gửi raw SIM Gateway result trực tiếp vào Core Order State Machine.

Không được để Core phải tự hiểu từng loại lỗi kỹ thuật của SIM Gateway.

Không được để Admin UI tự diễn giải raw call result thành trạng thái đơn.

Call Result Normalizer là lớp chuẩn hóa kết quả kỹ thuật thành ngôn ngữ nghiệp vụ IVR.

**31.3. Nhóm IVR result hợp lệ**

| **Nhóm**                | **IVR result**                                                  | **Ý nghĩa**                                                 |
|-------------------------|-----------------------------------------------------------------|-------------------------------------------------------------|
| Xác nhận                | IVR_CONFIRMED                                                   | Khách bấm phím 1 xác nhận tiếp tục xử lý đơn                |
| Hủy bởi khách           | IVR_CUSTOMER_CANCELLED                                          | Khách bấm phím 0, không đặt hoặc muốn hủy                   |
| Không nghe tạm thời     | ATTEMPT_1_NO_ANSWER / ATTEMPT_2_NO_ANSWER / ATTEMPT_3_NO_ANSWER | Attempt chưa final, còn quyền gọi tiếp nếu program cho phép |
| Không nghe cuối         | IVR_NO_ANSWER_FINAL                                             | Hết attempts theo program, không có xác nhận hợp lệ         |
| Hết thời gian           | IVR_CONFIRMATION_WINDOW_EXPIRED                                 | Hết window 5 phút hoặc 15 phút                              |
| Sai số / không gọi được | IVR_INVALID_PHONE_FINAL                                         | Số điện thoại không hợp lệ nếu rule xác nhận                |
| Lỗi kỹ thuật            | IVR_TECHNICAL_EXCEPTION                                         | Lỗi SIM/server/DTMF/audio/scheduler/callback                |
| Cần Admin review        | ADMIN_REVIEW_REQUIRED                                           | Cần người có quyền xem xét                                  |
| Quá tải năng lực        | IVR_CAPACITY_EXCEPTION                                          | Không đủ SIM/capacity trong window                          |
| Duplicate               | IVR_RESULT_DUPLICATE_BLOCKED                                    | Kết quả bị chặn do trùng                                    |
| Notice pending          | IVR_POST_CANCEL_NOTICE_PENDING                                  | Chờ Notification owner gửi notice sau Core cancellation     |
| Notice sent             | IVR_POST_CANCEL_NOTICE_SENT                                     | Notification owner đã gửi transactional notice              |
| Notice blocked          | IVR_POST_CANCEL_NOTICE_BLOCKED                                  | Notice bị chặn do chưa đủ điều kiện                         |

**31.4. IVR_CONFIRMED**

Khi khách bấm phím 1, IVR result là:

IVR_CONFIRMED

Ý nghĩa:

1.  Khách xác nhận tiếp tục xử lý đơn.

2.  Không gọi attempt tiếp theo.

3.  IVR gửi signal về Core.

4.  Core Order State Machine quyết định trạng thái tiếp theo.

5.  Evidence phải được ghi nhận.

IVR_CONFIRMED không đồng nghĩa:

1.  Đã thanh toán.

2.  Đã giao hàng.

3.  Đã xuất kho.

4.  Đã hoàn tất đơn.

5.  Đã verified revenue.

6.  Đã đủ điều kiện commission.

7.  Đã đủ điều kiện ROAS.

8.  Đã sync MISA.

**31.5. IVR_CUSTOMER_CANCELLED**

Khi khách bấm phím 0, IVR result là:

IVR_CUSTOMER_CANCELLED

Ý nghĩa:

1.  Khách xác nhận không đặt hoặc muốn hủy đơn.

2.  IVR gửi cancel request signal về Core.

3.  Core Order State Machine mới được xử lý hủy đơn.

4.  SIM Gateway không được hủy đơn trực tiếp.

5.  Evidence phải được ghi nhận.

Reason code nền:

ORDER_CANCEL_REASON = CUSTOMER_CANCELLED_BY_IVR_KEY_0

Reason code phải do Core ghi nhận.

Nếu Core chưa hủy đơn, không được gửi tin nhắn nói đơn đã hủy.

**31.6. IVR_NO_ANSWER_FINAL**

Khi đã gọi đủ số attempts hợp lệ theo program mà khách không nghe hoặc không có xác nhận hợp lệ, IVR result có thể là:

IVR_NO_ANSWER_FINAL

Program-specific final rule:

1.  GOLDEN_HOUR: đủ 2 attempts hợp lệ trong 5 phút.

2.  TWENTY_FOUR_SEVEN: đủ 3 attempts hợp lệ trong 15 phút.

Program-specific reason code:

1.  GOLDEN_HOUR: ORDER_CANCEL_REASON = IVR_NO_ANSWER_AFTER_2_ATTEMPTS.

2.  TWENTY_FOUR_SEVEN: ORDER_CANCEL_REASON = IVR_NO_ANSWER_AFTER_3_ATTEMPTS.

Điều kiện bắt buộc:

1.  Các attempts đã diễn ra hợp lệ theo program.

2.  Không có xác nhận phím 1.

3.  Không có phím 0.

4.  Không có technical exception.

5.  Không có capacity incident gây thất bại gọi.

6.  Confirmation window đã xử lý đúng rule.

7.  Core Order State Machine là bên quyết định hủy đơn cuối cùng.

Không được dùng IVR_NO_ANSWER_FINAL nếu nguyên nhân là lỗi kỹ thuật.

Không được dùng IVR_NO_ANSWER_FINAL nếu nguyên nhân là capacity incident.

Không được gửi tin nhắn hủy đơn trước khi Core hủy đơn chính thức.

**31.7. IVR_CONFIRMATION_WINDOW_EXPIRED**

Khi hết confirmation window nhưng chưa có xác nhận hợp lệ:

IVR_CONFIRMATION_WINDOW_EXPIRED

Core Action:

1.  Core hủy đơn theo rule.

2.  Quote hết hiệu lực nếu policy quy định.

3.  Không nhận kết quả IVR muộn như xác nhận hợp lệ.

4.  Không gọi thêm attempt ngoài window.

5.  Không kéo dài quote bằng IVR.

Reason code nền:

ORDER_CANCEL_REASON = IVR_CONFIRMATION_WINDOW_EXPIRED

Notification owner chỉ được gửi tin nhắn giải thích nếu Core đã hủy đơn chính thức và policy cho phép.

**31.8. IVR_INVALID_PHONE_FINAL**

Invalid phone chỉ được kết luận nếu rule xác nhận rõ.

Không được kết luận invalid phone chỉ vì một lần không nghe.

Không được kết luận invalid phone chỉ vì SIM Gateway lỗi.

Không được kết luận invalid phone nếu lỗi thuộc nhà mạng/SIM/server không chắc chắn.

Reason code nền:

ORDER_CANCEL_REASON = IVR_INVALID_PHONE_IF_RULE_CONFIRMED

Core mới được ghi reason code.

Nếu số điện thoại invalid, không gửi SMS vào chính số đó.

Nếu còn channel gốc hợp lệ, Notification owner có thể gửi transactional notice qua channel gốc theo policy.

**31.9. IVR_CAPACITY_EXCEPTION**

IVR_CAPACITY_EXCEPTION xảy ra khi hệ thống không đủ năng lực gọi đúng deadline.

Ví dụ:

1.  Số call job vượt năng lực SIM trong window.

2.  Queue backlog làm attempt 1, attempt 2 hoặc attempt 3 quá hạn.

3.  SIM failure làm năng lực giảm đột ngột.

4.  Scheduler không thể assign SIM trước khi window hết.

5.  Live/Giờ Vàng phát sinh số đơn vượt capacity baseline.

6.  Hệ thống không thể gọi rolling real-time.

Capacity exception không phải khách không nghe.

Capacity exception không được dùng để hủy đơn như lỗi khách.

Capacity exception không được kích hoạt post-IVR cancellation notice.

Capacity exception phải chuyển owner/admin review hoặc xử lý theo rule Core đã được phê duyệt.

**31.10. Duplicate IVR result**

Một order không được có nhiều IVR result final cạnh tranh nhau.

Ví dụ lỗi:

1.  Một call job trả IVR_CONFIRMED.

2.  Call job duplicate khác trả IVR_CUSTOMER_CANCELLED.

3.  Scheduler tạo 2 cuộc gọi cùng order.

4.  Callback retry tạo duplicate result.

5.  Admin thao tác trùng.

Duplicate phải bị chặn và đưa vào review.

Trạng thái:

IVR_RESULT_DUPLICATE_BLOCKED  
ADMIN_REVIEW_REQUIRED

Không được để duplicate result tự cập nhật Core.

Không được gửi notification dựa trên duplicate result chưa được Core công nhận.

**32. CORE ORDER STATE MACHINE BOUNDARY**

**32.1. Core là final decision layer**

Core Order State Machine chịu trách nhiệm:

1.  Tiếp nhận IVR result.

2.  Kiểm tra order còn đủ điều kiện xử lý không.

3.  Kiểm tra order đã final chưa.

4.  Kiểm tra order có bị hủy/hold/sale lock/risk không.

5.  Kiểm tra result có hợp lệ không.

6.  Quyết định tiếp tục xử lý đơn.

7.  Quyết định hủy đơn.

8.  Quyết định Admin Review.

9.  Ghi state transition.

10. Ghi audit.

11. Phát hành trigger hợp lệ cho Notification owner nếu đơn đã hủy và policy cho phép.

IVR không làm thay các bước này.

**32.2. IVR không được cancel order trực tiếp**

Nguyên tắc khóa:

IVR_CAN_TRIGGER_CANCEL_REQUEST = YES  
IVR_CAN_DIRECTLY_CANCEL_ORDER = NO  
SIM_GATEWAY_CAN_CANCEL_ORDER = NO  
CORE_ORDER_STATE_MACHINE_CANCEL_REQUIRED = YES

IVR có thể gửi tín hiệu khách bấm phím 0.

IVR có thể gửi tín hiệu no answer final.

IVR có thể gửi tín hiệu window expired.

Nhưng IVR không được trực tiếp đổi order state sang cancelled.

Mọi hủy đơn phải đi qua Core Order State Machine.

**32.3. IVR không được release order trực tiếp**

IVR_CONFIRMED không đồng nghĩa order được release.

Sau IVR_CONFIRMED, Core vẫn có thể cần kiểm tra:

1.  Payment status.

2.  COD/payment method.

3.  Stock/sellable status.

4.  Sale Lock.

5.  Fraud/risk.

6.  Address validity.

7.  Warehouse readiness.

8.  Delivery eligibility.

9.  Program/quote validity.

10. Other owner rules.

IVR không được cho phép xuất kho trực tiếp.

IVR không được cho phép giao hàng trực tiếp.

**32.4. State transition phải audit**

Mọi thay đổi trạng thái order do IVR signal dẫn đến phải có audit.

Audit tối thiểu:

1.  Order ID/order_code.

2.  IVR result.

3.  Call job reference.

4.  Attempt number.

5.  DTMF key nếu có.

6.  Core decision.

7.  State before.

8.  State after.

9.  Reason code.

10. Timestamp.

11. Correlation ID.

12. Actor/system.

13. Evidence reference.

14. Notification trigger nếu có.

Không có audit thì không được coi là xử lý hợp lệ.

**33. TECHNICAL EXCEPTION GOVERNANCE**

**33.1. Lỗi kỹ thuật không phải lỗi khách**

Nguyên tắc khóa:

**Lỗi kỹ thuật không được xử lý như khách không nghe.**

Các lỗi kỹ thuật gồm:

1.  SIM_GATEWAY_ERROR.

2.  SERVER_ERROR.

3.  DTMF_CAPTURE_ERROR.

4.  AUDIO_PLAYBACK_ERROR.

5.  SIM_CHANNEL_FAILURE.

6.  INTERNAL_CALLBACK_ERROR.

7.  SCHEDULER_ERROR.

8.  RESULT_NORMALIZER_ERROR.

9.  AUDIT_WRITE_ERROR.

10. EVIDENCE_WRITE_ERROR.

Các lỗi này phải đi vào:

IVR_TECHNICAL_EXCEPTION  
ADMIN_REVIEW_REQUIRED

**33.2. SIM_GATEWAY_ERROR**

SIM Gateway error có thể gồm:

1.  Gateway không phản hồi.

2.  Gateway mất kết nối.

3.  Gateway trả lỗi không xác định.

4.  Gateway không tạo được cuộc gọi.

5.  Gateway reset.

6.  Gateway quá tải.

7.  Gateway lỗi firmware/phần cứng.

SIM Gateway error không được tính là no answer.

SIM Gateway error không được hủy đơn theo lý do khách không nghe.

SIM Gateway error không được kích hoạt cancellation notice.

**33.3. SERVER_ERROR**

Server error có thể gồm:

1.  Server điều phối cuộc gọi lỗi.

2.  Server không ghi được call job.

3.  Server không xử lý callback.

4.  Server timeout.

5.  Server mất kết nối với SIM Gateway.

6.  Server lỗi internal.

7.  Server không ghi được audit.

Server error phải chuyển technical exception.

Không được dùng server error để tạo IVR result final theo hướng khách không xác nhận.

Server error không được kích hoạt cancellation notice.

**33.4. DTMF_CAPTURE_ERROR**

DTMF capture error xảy ra khi hệ thống không ghi nhận được phím bấm do lỗi kỹ thuật.

DTMF_CAPTURE_ERROR không phải khách không bấm phím.

DTMF_CAPTURE_ERROR không phải khách không nghe.

DTMF_CAPTURE_ERROR không được map thành NO_INPUT nếu nguyên nhân là lỗi capture.

DTMF_CAPTURE_ERROR phải đi vào technical exception.

**33.5. AUDIO_PLAYBACK_ERROR**

Audio playback error xảy ra khi hệ thống không phát được nội dung cuộc gọi.

Nếu khách không nghe được nội dung, không thể coi là khách đã nhận thông tin xác nhận.

AUDIO_PLAYBACK_ERROR không được tính là no answer.

AUDIO_PLAYBACK_ERROR không được tính là no input.

AUDIO_PLAYBACK_ERROR phải đi vào technical exception.

**33.6. SIM_CHANNEL_FAILURE**

SIM channel failure xảy ra khi SIM cụ thể bị lỗi.

Ví dụ:

1.  SIM mất sóng.

2.  SIM bị khóa.

3.  SIM không gọi ra được.

4.  SIM đang treo trạng thái bận.

5.  SIM bị lỗi phần cứng.

6.  SIM không trả kết quả.

7.  SIM bị nhà mạng chặn.

SIM channel failure không phải khách không nghe.

Call job có thể được chuyển SIM khác nếu còn window và rule cho phép.

Nếu không còn thời gian hoặc không còn SIM, ghi capacity/technical exception.

**33.7. SCHEDULER_ERROR**

Scheduler error xảy ra khi:

1.  Scheduler không tính đúng deadline.

2.  Scheduler không assign SIM được.

3.  Scheduler assign trùng SIM.

4.  Scheduler gọi ngoài window.

5.  Scheduler tạo duplicate call job.

6.  Scheduler không tạo attempt đúng thời điểm.

7.  Scheduler batch cuối phiên trái rule.

8.  Scheduler tạo attempt vượt program rule.

Scheduler error là lỗi kỹ thuật nghiêm trọng.

Không được che scheduler error bằng no answer.

Scheduler error không được kích hoạt cancellation notice.

**33.8. Technical exception final**

Technical exception có thể trở thành final nếu:

1.  Không thể retry an toàn.

2.  Lỗi lặp lại.

3.  Window đã hết nhưng nguyên nhân là lỗi hệ thống.

4.  Evidence writer không ghi được.

5.  SIM Gateway không đủ trạng thái xác nhận.

6.  Owner rule yêu cầu Admin Review.

Trạng thái:

TECHNICAL_EXCEPTION_FINAL  
ADMIN_REVIEW_REQUIRED

Core xử lý theo rule riêng, không dùng reason khách không nghe.

Technical exception final không kích hoạt post-IVR cancellation notice.

**34. CAPACITY BASELINE GOVERNANCE**

**34.1. Nguyên tắc tính capacity**

Năng lực IVR phải tính theo số SIM vật lý và chu kỳ cuộc gọi.

Baseline khóa:

AVERAGE_CALL_DURATION = 35_SECONDS  
CONSERVATIVE_CALL_CYCLE = 50_SECONDS_PER_CALL_PER_SIM

Ý nghĩa:

1.  Trung bình một cuộc gọi khoảng 35 giây.

2.  Tính bảo thủ 50 giây/cuộc/SIM.

3.  Mỗi SIM xử lý tuần tự từng cuộc.

4.  Không tính một SIM có thể gọi song song.

5.  Không tính theo số call job trong queue.

6.  Không tính theo mong muốn vận hành.

7.  Không giả định SIM có thể vượt capacity vật lý.

**34.2. Năng lực trong 5 phút**

| **Số SIM** | **Năng lực 5 phút** |
|------------|---------------------|
| 12 SIM     | ~72 cuộc            |
| 24 SIM     | ~144 cuộc           |
| 32 SIM     | ~192 cuộc           |

Ý nghĩa:

1.  Giờ Vàng window 5 phút rất ngắn.

2.  12 SIM không thể xử lý hàng trăm đơn trong 5 phút.

3.  32 SIM cũng chỉ xử lý khoảng 192 cuộc trong 5 phút theo baseline.

4.  Nếu số đơn cần IVR vượt capacity, phải tạo capacity incident.

5.  Không được giả lập đã gọi đủ nếu SIM không đủ.

**34.3. Năng lực trong 15 phút**

| **Số SIM** | **Năng lực 15 phút** |
|------------|----------------------|
| 12 SIM     | ~216 cuộc            |
| 24 SIM     | ~432 cuộc            |
| 32 SIM     | ~576 cuộc            |

Ý nghĩa:

1.  24/7 window 15 phút rộng hơn Giờ Vàng.

2.  24/7 có thể có tối đa 3 attempts/order.

3.  Capacity planning phải tính theo tổng số call attempts, không chỉ số order.

4.  Nếu demand vượt capacity, scheduler phải ghi capacity incident.

5.  Không được gọi trễ ngoài 15 phút rồi vẫn coi là hợp lệ.

**34.4. Năng lực trong phiên 45 phút nếu rolling queue**

| **Số SIM** | **Năng lực 45 phút** |
|------------|----------------------|
| 12 SIM     | ~648 cuộc            |
| 24 SIM     | ~1.296 cuộc          |
| 32 SIM     | ~1.728 cuộc          |

Ý nghĩa:

1.  Rolling queue giúp phân tán tải trong toàn phiên.

2.  Không dồn toàn bộ cuộc gọi cuối phiên.

3.  Không lấy capacity 45 phút để hợp thức hóa window 5 phút.

4.  Đơn Giờ Vàng vẫn phải theo window 5 phút của từng order.

5.  Đơn 24/7 vẫn phải theo window 15 phút của từng order.

6.  24/7 3 attempts làm tăng tổng call load nếu khách không nghe attempt 1/2.

**34.5. Khuyến nghị cấu hình SIM**

PILOT_SIM_COUNT = 12  
MINIMUM_LAUNCH_SIM_COUNT = 24  
RECOMMENDED_MONTH_1_2_SIM_COUNT = 32  
RECOMMENDED_MONTH_3_4_SIM_COUNT = 64  
RECOMMENDED_MONTH_5_6_SIM_COUNT = 96

Ý nghĩa:

1.  12 SIM phù hợp pilot nội bộ.

2.  24 SIM là mức tối thiểu launch.

3.  32 SIM phù hợp tháng 1–2 nếu volume chưa quá lớn.

4.  64 SIM phù hợp giai đoạn tăng tải tháng 3–4.

5.  96 SIM phù hợp giai đoạn scale mạnh tháng 5–6.

6.  Mọi mức cấu hình vẫn phải theo test/smoke/capacity evidence thực tế.

**34.6. Capacity không thay thế release gate**

Có đủ SIM không đồng nghĩa IVR production ready.

Ngoài capacity, vẫn phải có:

1.  Implementation complete.

2.  Scheduler đúng rule.

3.  DTMF pass.

4.  Result normalizer pass.

5.  Core boundary pass.

6.  Technical exception pass.

7.  Admin monitoring pass.

8.  Evidence pass.

9.  Security pass.

10. Owner sign-off.

11. Release decision.

Capacity chỉ là một điều kiện trong release readiness.

**35. CAPACITY INCIDENT GOVERNANCE**

**35.1. Khi nào tạo capacity incident**

Capacity incident bắt buộc khi:

1.  Call job vượt năng lực SIM trong window.

2.  Scheduler không gọi kịp attempt 1.

3.  Scheduler không gọi kịp attempt 2.

4.  Scheduler không gọi kịp attempt 3 của 24/7.

5.  Queue backlog vượt ngưỡng.

6.  SIM failure làm giảm năng lực.

7.  Live/Giờ Vàng phát sinh đơn quá nhanh.

8.  32 SIM bị giao xử lý 800–1.200 cuộc trong 5 phút.

9.  Batch cuối phiên khiến nhiều cuộc hết hạn.

10. Rolling queue không hoạt động.

11. Scheduler không tính được deadline.

**35.2. Capacity incident không phải no answer**

Nếu hệ thống không đủ năng lực gọi, không được kết luận khách không nghe.

Không được map capacity incident thành:

IVR_NO_ANSWER_FINAL

Không được hủy đơn theo reason:

IVR_NO_ANSWER_AFTER_PROGRAM_ATTEMPTS

hoặc bất kỳ reason no-answer theo program nào khi nguyên nhân là capacity.

Cụ thể:

1.  Không dùng IVR_NO_ANSWER_AFTER_2_ATTEMPTS cho Golden Hour nếu nguyên nhân là capacity.

2.  Không dùng IVR_NO_ANSWER_AFTER_3_ATTEMPTS cho 24/7 nếu nguyên nhân là capacity.

3.  Capacity incident không được kích hoạt post-IVR cancellation notice.

Capacity incident phải chuyển:

1.  ADMIN_REVIEW_REQUIRED.

2.  OWNER_REVIEW_REQUIRED nếu ảnh hưởng nhiều đơn.

3.  CAPACITY_INCIDENT_MONITOR.

4.  Core handling theo rule riêng.

**35.3. Capacity evidence**

Capacity incident phải ghi evidence:

1.  Thời điểm.

2.  Program.

3.  Window.

4.  Số call job.

5.  Số SIM active.

6.  Số SIM available.

7.  Số SIM lỗi.

8.  Queue backlog.

9.  Số job quá deadline.

10. Số job chưa gọi.

11. Số job bị expired.

12. Scheduler status.

13. Owner review status.

Không có capacity evidence thì không được đóng incident.

**36. SCHEDULER GOVERNANCE**

**36.1. Deadline-aware rolling queue là bắt buộc**

Nguyên tắc khóa:

ROLLING_REAL_TIME_IVR = REQUIRED  
BATCH_AFTER_SESSION_CALLING = PROHIBITED  
SCHEDULER_MODEL = DEADLINE_AWARE_ROLLING_QUEUE

Scheduler phải:

1.  Nhận call job theo thời gian thực.

2.  Xác định program window.

3.  Xác định T0.

4.  Tính attempt 1.

5.  Tính attempt 2.

6.  Tính attempt 3 nếu program là TWENTY_FOUR_SEVEN.

7.  Tính window expiry.

8.  Xếp queue theo deadline.

9.  Kiểm tra SIM available.

10. Không assign SIM đang bận.

11. Không gọi sau deadline.

12. Không batch cuối phiên.

13. Ghi capacity incident nếu quá tải.

**36.2. Scheduler không được làm gì**

Scheduler không được:

1.  Gọi ngoài confirmation window.

2.  Tạo attempt vượt rule theo program.

3.  Gọi dồn liên tục.

4.  Gọi lại ngay sau vài giây.

5.  Gọi sau khi đã có final result.

6.  Gọi order đã hủy.

7.  Gọi order không còn eligible.

8.  Assign nhiều call vào một SIM.

9.  Batch toàn bộ cuối phiên.

10. Tự gia hạn window.

11. Tự giả lập result khi không gọi được.

12. Tự cập nhật order state.

13. Tự kích hoạt cancellation notice.

Important:

1.  Với GOLDEN_HOUR, tạo attempt 3 là sai.

2.  Với TWENTY_FOUR_SEVEN, attempt 3 là hợp lệ nếu đúng lịch T0 + 10 phút và còn trong 15 phút.

3.  Với TWENTY_FOUR_SEVEN, tạo attempt 4 là sai.

**36.3. Scheduler phải chống duplicate**

Scheduler phải chống:

1.  Duplicate call job.

2.  Duplicate attempt.

3.  Duplicate callback.

4.  Duplicate DTMF result.

5.  Duplicate Core signal.

6.  Duplicate evidence.

7.  Duplicate cancellation notice.

Một order trong một confirmation window không được có nhiều call job active.

Nếu duplicate phát hiện, phải block và review.

**37. CROSS-PACK BOUNDARY**

**37.1. Với Operational Core / Core Order**

Operational Core / Core Order sở hữu:

1.  Order State Machine.

2.  Order cancellation.

3.  Order release.

4.  Order hold.

5.  Order audit state.

6.  Order state transition.

7.  Order risk decision.

8.  Order final action.

PACK-09 chỉ cung cấp IVR result như input signal.

Không được để IVR thay Core.

Không được để SIM Gateway đổi order state.

Không được để Admin UI IVR hủy đơn ngoài Core State Machine.

**37.2. Với AI Advisor**

AI Advisor không được:

1.  Tạo IVR call job.

2.  Gọi SIM Gateway.

3.  Gọi số khách.

4.  Hiển thị IVR result như production data khi IVR chưa release.

5.  Tự nói đơn đã IVR xác nhận nếu Core chưa công nhận.

6.  Dùng nội dung chat để giả lập phím 1.

7.  Dùng nội dung chat để giả lập phím 0.

8.  Tự hủy đơn do khách nói trong chat.

9.  Tự retry IVR.

10. Tự gửi post-IVR cancellation notice.

AI Advisor chỉ được consume trạng thái đã được Core/owner runtime công nhận nếu policy cho phép.

**37.3. Với Facebook Gateway / Messenger / Live**

Facebook Gateway / Messenger / Live không được:

1.  Gọi IVR trực tiếp.

2.  Tạo IVR call job.

3.  Gọi SIM Gateway.

4.  Dùng comment làm IVR result.

5.  Dùng Messenger text làm IVR result.

6.  Dùng live comment làm IVR confirmation.

7.  Thay IVR bằng tin nhắn xác nhận không có rule.

8.  Hủy đơn ngoài Core State Machine.

9.  Hiển thị IVR result chưa release như production truth.

10. Tự gửi cancellation notice nếu Notification owner chưa phát hành message hợp lệ.

PACK-06 là channel gateway.

PACK-08 là live orchestration.

PACK-09 là IVR order confirmation.

Các pack này không được lẫn vai trò.

**37.4. Với CRM / Member Lifecycle**

CRM không được dùng IVR cho:

1.  Tin nhắn chăm sóc.

2.  Nhắc mua lại.

3.  Nhắc quyền lợi thành viên.

4.  Chúc mừng sinh nhật.

5.  Nhắc Giờ Vàng.

6.  Mời Diamond.

7.  Nhắc nâng hạng.

8.  Nhắc duy trì hạng.

9.  Chăm sóc sau mua.

10. Quảng bá sản phẩm mới.

11. Mời chương trình khởi nghiệp.

12. Survey marketing.

CRM không được dùng post-IVR cancellation notice như marketing/upsell.

PACK-09 không phải CRM call center.

IVR call chỉ để xác nhận đơn.

**37.5. Với Notification owner**

Notification owner là bên duy nhất được phát hành post-IVR cancellation notice sau khi Core đã hủy đơn chính thức.

Notification owner phải:

1.  Nhận trigger hợp lệ từ Core/Order owner.

2.  Dùng template transactional.

3.  Không biến notice thành marketing.

4.  Không chứa dữ liệu bị cấm.

5.  Ghi audit/evidence.

6.  Gửi qua channel hợp lệ.

7.  Không gửi nếu reason là technical exception.

8.  Không gửi nếu reason là capacity incident.

9.  Không gửi nếu order chưa cancelled bởi Core.

**37.6. Với Payment**

Payment owner sở hữu:

1.  Payment confirmation.

2.  Bank transfer reconciliation.

3.  COD payment status nếu thuộc payment layer.

4.  Payment failed.

5.  Payment dispute.

6.  Payment evidence.

IVR không được:

1.  Xác nhận thanh toán.

2.  Đánh dấu paid.

3.  Xác nhận chuyển khoản.

4.  Xử lý ảnh chuyển khoản.

5.  Đối chiếu ngân hàng.

6.  Đánh dấu COD success.

7.  Tạo payment evidence.

8.  Đọc payment detail.

Khách bấm 1 chỉ xác nhận tiếp tục xử lý đơn.

**37.7. Với Warehouse / Delivery**

Warehouse / Delivery owner sở hữu:

1.  Xuất kho.

2.  Đóng gói giao hàng.

3.  Bàn giao vận chuyển.

4.  Trạng thái giao hàng.

5.  COD success nếu thuộc delivery flow.

6.  Delivery fail.

7.  Return.

8.  Fulfillment issue.

IVR không được:

1.  Cho xuất kho trực tiếp.

2.  Cho giao hàng trực tiếp.

3.  Đánh dấu delivery success.

4.  Đánh dấu COD success.

5.  Tạo shipment.

6.  Tác động warehouse ledger.

7.  Tác động inventory.

8.  Tác động lô/batch/QR/truy vết.

**37.8. Với MISA / Accounting**

MISA / Accounting thuộc PACK-04 / Finance.

IVR không được:

1.  Tạo chứng từ kế toán.

2.  Sync MISA.

3.  Đối chiếu MISA.

4.  Tạo doanh thu kế toán.

5.  Xác nhận công nợ.

6.  Tạo accounting event.

7.  Ghi nhận thanh toán.

8.  Ghi nhận hóa đơn.

9.  Tác động báo cáo tài chính.

Nếu sau này cần dùng IVR result làm evidence hỗ trợ kiểm soát đơn, phải qua owner policy, không sync trực tiếp MISA.

**37.9. Với Traceability / Recall**

Traceability / Recall thuộc Operational Core.

IVR không được:

1.  Tác động lô sản xuất.

2.  Tác động batch.

3.  Tác động QR.

4.  Tác động public trace.

5.  Tác động recall.

6.  Tác động sale lock.

7.  Tác động recovery/CAPA.

8.  Tác động warehouse trace.

Nếu đơn bị recall/sale lock, Core/Operational owner quyết định, không phải IVR.

**37.10. Với PACK-07 Ads / ROAS**

PACK-07 có thể đo IVR như một evidence/risk signal sau khi PACK-09 release.

Nhưng PACK-07 không được:

1.  Dùng IVR result khi IVR chưa release.

2.  Dùng simulated IVR result như production evidence.

3.  Gọi IVR_CONFIRMED là verified revenue.

4.  Gọi IVR_CONFIRMED là paid revenue.

5.  Gọi IVR_CONFIRMED là delivered revenue.

6.  Gọi IVR_NO_ANSWER_FINAL là cancel final nếu Core chưa công nhận.

7.  Tính ROAS dựa trên IVR result thay verified revenue.

IVR chỉ hỗ trợ order confirmation evidence, không thay revenue verification.

**38. IMPLEMENTATION BOUNDARY**

**38.1. Trạng thái triển khai**

PACK_09_IMPLEMENTATION_STATUS = NOT_STARTED  
PRODUCTION_IMPLEMENTATION_ALLOWED = NO

Ý nghĩa:

1.  Chưa triển khai production.

2.  Chưa gọi khách thật.

3.  Chưa cập nhật đơn thật.

4.  Chưa hủy đơn thật bằng IVR.

5.  Chưa cho downstream phụ thuộc IVR.

6.  Chưa release SIM Gateway production.

**38.2. Được phép chuẩn bị kỹ thuật nội bộ**

Đội kỹ thuật được phép chuẩn bị:

1.  Khảo sát SIM Gateway.

2.  Test server kết nối SIM Gateway.

3.  Test số nội bộ.

4.  Test DTMF nội bộ.

5.  Draft skeleton backend.

6.  Draft Admin UI.

7.  Draft test matrix.

8.  Test call scheduler nội bộ.

9.  Test call result normalizer nội bộ.

10. Test audit/evidence writer nội bộ.

11. Test sim health monitor nội bộ.

12. Test capacity incident monitor nội bộ.

13. Test notification owner handoff bằng dữ liệu giả lập.

**38.3. Các hành động bị cấm trước release**

Trước release, bắt buộc khóa:

REAL_CUSTOMER_CALL_ALLOWED = NO  
REAL_ORDER_STATE_UPDATE_ALLOWED = NO  
PRODUCTION_SIM_GATEWAY_ALLOWED = NO  
PRODUCTION_ORDER_CANCEL_BY_IVR_ALLOWED = NO  
POST_IVR_CANCELLATION_NOTICE_ALLOWED_IN_PRODUCTION = NO

Không được:

1.  Gọi khách thật.

2.  Gọi số khách thật.

3.  Dùng đơn thật để test gọi.

4.  Hủy đơn thật bằng IVR.

5.  Cập nhật order state thật.

6.  Cho Admin thao tác IVR production.

7.  Cho AI/FB/CRM gọi IVR.

8.  Cho downstream dùng IVR result.

9.  Cho Notification gửi cancellation notice production.

10. Cho Completion Report PASS dựa trên IVR chưa có evidence.

**39. ENGINEER HANDOFF MODEL**

**39.1. Nguyên tắc handoff kỹ sư**

PACK-09 cần phân tách rõ nhiệm vụ để tránh một người hoặc một module vượt quyền.

Không để kỹ sư SIM Gateway tự quyết định order state.

Không để kỹ sư Admin UI tạo nút hủy đơn ngoài Core.

Không để kỹ sư backend thêm phím mới ngoài rule.

Không để kỹ sư monitoring sửa IVR result giả.

Không để kỹ sư notification gửi tin nhắn hủy đơn trước khi Core hủy.

Không để kỹ sư nào mở production khi chưa đủ gate.

**39.2. Kỹ sư 1 — IVR Backend / SIM Gateway**

Kỹ sư 1 phụ trách lớp IVR Backend / SIM Gateway.

Phạm vi phụ trách:

1.  SimChannelManager.

2.  CallJobQueue.

3.  DeadlineAwareScheduler.

4.  CallExecutionAdapter.

5.  DtmfCaptureHandler.

6.  CallResultNormalizer.

7.  OrderStateMachineAdapter.

8.  AuditEvidenceWriter.

9.  CapacityIncidentMonitor.

10. SimHealthMonitor.

**39.3. Kỹ sư 1 không được làm**

Kỹ sư 1 không được:

1.  Gọi khách thật khi chưa release.

2.  Tự hủy đơn trực tiếp.

3.  Tự cập nhật order state.

4.  Tự mở API production.

5.  Tự đổi rule gọi.

6.  Tự thêm phím 9.

7.  Tự thêm menu IVR mới.

8.  Tính lỗi kỹ thuật là khách không nghe.

9.  Gọi ngoài confirmation window.

10. Assign nhiều cuộc vào một SIM.

11. Batch cuối phiên.

12. Tự bỏ qua evidence writer.

13. Tự cho downstream dùng IVR result.

14. Tự sửa result để test PASS.

15. Tự gửi cancellation notice.

**39.4. Kỹ sư 2 — Admin UI / Monitoring / Evidence / Test**

Kỹ sư 2 phụ trách lớp Admin UI / Monitoring / Evidence / Test.

Phạm vi phụ trách:

1.  /admin/ivr/dashboard.

2.  /admin/ivr/call-jobs.

3.  /admin/ivr/call-jobs/{id}.

4.  /admin/ivr/sim-channels.

5.  /admin/ivr/capacity-incidents.

6.  /admin/ivr/audit-evidence.

7.  Monitoring status.

8.  Evidence review view.

9.  Test matrix view nếu có.

10. Smoke result display nếu có.

11. Post-IVR cancellation notice evidence view.

**39.5. Kỹ sư 2 không được làm**

Kỹ sư 2 không được:

1.  Cho Admin sửa IVR result giả.

2.  Cho Admin hủy đơn ngoài Core State Machine.

3.  Hiển thị dữ liệu nhạy cảm không cần thiết.

4.  Tạo button gọi lại ngoài retry rule.

5.  Tạo action chưa có permission.

6.  Cho phép manual retry sau window nếu không có owner rule.

7.  Cho phép fake IVR_CONFIRMED.

8.  Cho phép fake IVR_CUSTOMER_CANCELLED.

9.  Cho phép xóa evidence lỗi.

10. Cho phép sửa call result history.

11. Cho phép ẩn capacity incident.

12. Cho phép ẩn technical exception.

13. Cho phép bật production từ UI khi gate blocked.

14. Cho phép fake post-cancel notice sent.

**39.6. Phân tách trách nhiệm giữa hai kỹ sư**

| **Hạng mục**    | **Kỹ sư 1 — Backend/SIM**  | **Kỹ sư 2 — Admin/Evidence**  |
|-----------------|----------------------------|-------------------------------|
| SIM channel     | Thiết kế quản lý SIM       | Hiển thị trạng thái           |
| Call job        | Queue/scheduler/execution  | Xem job, không sửa result giả |
| DTMF            | Capture/normalize          | Hiển thị kết quả              |
| Result          | Normalize, gửi Core signal | Audit/evidence view           |
| Core boundary   | Adapter gửi signal         | Không hủy đơn ngoài Core      |
| Capacity        | Monitor incident           | Dashboard incident            |
| Evidence        | Ghi evidence               | Hiển thị/review evidence      |
| Retry           | Theo rule scheduler        | Không tạo retry ngoài rule    |
| Notification    | Không tự gửi notice        | Hiển thị evidence notice      |
| Production gate | Không tự mở                | Không tạo nút bypass gate     |

**40. ADMIN UI / MONITORING GOVERNANCE Ở MỨC PACK**

**40.1. Admin UI chỉ để quan sát và review**

Admin UI trong PACK-09 dùng để:

1.  Xem dashboard IVR.

2.  Xem call job.

3.  Xem attempt.

4.  Xem SIM channel.

5.  Xem capacity incident.

6.  Xem technical exception.

7.  Xem audit/evidence.

8.  Xem trạng thái handoff Core.

9.  Xem smoke/test result nếu có.

10. Xem trạng thái post-cancel notice nếu có.

Admin UI không phải nơi sửa sự thật IVR.

Admin UI không phải nơi hủy đơn trực tiếp.

Admin UI không phải nơi giả lập xác nhận khách.

Admin UI không phải nơi tự gửi tin nhắn hủy đơn.

**40.2. Admin action phải có permission**

Nếu Admin UI có action, action phải có permission.

Các action nhạy cảm cần kiểm soát:

1.  Mark Admin Review.

2.  Request manual review.

3.  Disable SIM channel.

4.  Re-enable SIM channel.

5.  Acknowledge capacity incident.

6.  Acknowledge technical exception.

7.  Request retest.

8.  Close evidence review.

9.  Export audit.

10. Escalate owner review.

11. Review notification evidence.

Không có permission thì không được thao tác.

**40.3. Admin không được thấy dữ liệu không cần thiết**

Admin UI IVR không nên hiển thị dữ liệu nhạy cảm không cần cho xác nhận cuộc gọi.

Không hiển thị nếu không cần:

1.  Full address.

2.  Full customer profile.

3.  Member tier.

4.  Diamond referral info.

5.  Health/sensitive note.

6.  AI consultation content.

7.  CRM content.

8.  Payment detail.

9.  Order history toàn bộ.

10. MISA/accounting data.

Admin UI phải tuân thủ data minimization.

**41. AUDIT / EVIDENCE GOVERNANCE Ở MỨC PACK**

**41.1. Evidence bắt buộc**

Mỗi call job production sau này phải có evidence.

Evidence tối thiểu:

1.  Order reference.

2.  Call job reference.

3.  Program.

4.  T0.

5.  Confirmation window.

6.  Attempt number.

7.  SIM channel.

8.  Call start time.

9.  Call end time.

10. Call result raw nếu được phép lưu.

11. Normalized IVR result.

12. DTMF key nếu có.

13. Technical exception nếu có.

14. Capacity incident nếu có.

15. Core signal sent status.

16. Core response status.

17. Post-cancel notice trigger nếu có.

18. Notification owner event nếu có.

19. Audit timestamp.

20. Correlation ID.

**41.2. Evidence không được sửa/xóa tùy tiện**

Evidence phải append-only hoặc có version/audit nếu điều chỉnh metadata.

Không được:

1.  Xóa evidence lỗi.

2.  Sửa result cho đẹp.

3.  Sửa DTMF key.

4.  Sửa timestamp.

5.  Sửa SIM channel.

6.  Sửa technical exception thành no answer.

7.  Sửa capacity incident thành khách không nghe.

8.  Xóa duplicate result.

9.  Xóa failed smoke.

10. Xóa rejected evidence.

11. Sửa notice chưa gửi thành đã gửi.

12. Sửa notice bị chặn thành đã gửi.

Nếu cần correction, phải tạo correction record, không sửa mất lịch sử.

**41.3. Evidence cho Core signal**

Khi gửi result sang Core, phải có evidence:

1.  IVR result.

2.  Order reference.

3.  Call job reference.

4.  Result final hay temporary.

5.  Technical exception flag.

6.  Capacity incident flag.

7.  Duplicate blocked flag.

8.  Timestamp.

9.  Correlation ID.

10. Core response.

Không có Core response evidence thì không được gọi signal đã xử lý thành công.

**41.4. Evidence cho Post-IVR cancellation notice**

Khi gửi tin nhắn giải thích hủy đơn, phải có evidence:

1.  Core cancellation evidence.

2.  Cancel reason.

3.  Notification owner event.

4.  Message template used.

5.  Channel used.

6.  Timestamp.

7.  Delivery status nếu có.

8.  Audit/correlation ID.

9.  Block reason nếu không gửi.

Không có evidence thì không được gọi notice đã gửi.

**42. SECURITY / PRIVACY GOVERNANCE**

**42.1. IVR phải bảo vệ dữ liệu khách**

PACK-09 phải bảo vệ:

1.  Số điện thoại.

2.  Mã đơn.

3.  Tổng thanh toán.

4.  Nội dung call result.

5.  DTMF input.

6.  Lịch sử gọi.

7.  Technical exception.

8.  Admin review.

9.  Evidence.

10. Notification evidence.

Không hiển thị dữ liệu vượt nhu cầu.

Không xuất dữ liệu không có quyền.

Không dùng IVR data cho marketing.

**42.2. Không dùng IVR cho mục đích ngoài xác nhận đơn**

IVR data không được dùng cho:

1.  CRM chăm sóc.

2.  Retargeting.

3.  Ads audience.

4.  Diamond recruitment.

5.  Member lifecycle.

6.  Survey.

7.  Upsell.

8.  Cross-sell.

9.  Product recommendation.

10. Health profiling.

PACK-09 chỉ phục vụ xác nhận đơn.

**43. DONE CONDITION CỦA PHẦN 3/4**

PHẦN 3/4 được xem là hoàn thành về mặt tài liệu khi đã khóa được:

1.  Call Result Governance.

2.  IVR result là input signal only.

3.  Core Order State Machine là final decision layer.

4.  IVR_CONFIRMED.

5.  IVR_CUSTOMER_CANCELLED.

6.  IVR_NO_ANSWER_FINAL theo program.

7.  IVR_CONFIRMATION_WINDOW_EXPIRED.

8.  IVR_INVALID_PHONE_FINAL.

9.  IVR_CAPACITY_EXCEPTION.

10. Post-IVR cancellation notice result.

11. Duplicate IVR result handling.

12. Core Order State Machine Boundary.

13. Technical Exception Governance.

14. SIM Gateway error.

15. Server error.

16. DTMF capture error.

17. Audio playback error.

18. SIM channel failure.

19. Scheduler error.

20. Technical exception final.

21. Capacity baseline 5 phút.

22. Capacity baseline 15 phút.

23. Capacity baseline 45 phút.

24. Khuyến nghị cấu hình SIM.

25. Capacity incident governance.

26. Scheduler governance.

27. Cross-pack boundary với Operational Core.

28. Cross-pack boundary với AI Advisor.

29. Cross-pack boundary với Facebook/Messenger/Live.

30. Cross-pack boundary với CRM.

31. Cross-pack boundary với Notification owner.

32. Cross-pack boundary với Payment.

33. Cross-pack boundary với Warehouse/Delivery.

34. Cross-pack boundary với MISA.

35. Cross-pack boundary với PACK-07.

36. Implementation boundary.

37. Engineer handoff model.

38. Admin UI / Monitoring Governance.

39. Audit / Evidence Governance.

40. Security / Privacy Governance.

PHẦN 3/4 chưa viết P0 Rules, Smoke Matrix, Done Gate tổng thể, Fail Gate tổng thể, Evidence Acceptance, Release Control và Final Conclusion. Các nội dung đó thuộc PHẦN 4/4.

**KẾT LUẬN PHẦN 3/4**

PACK-09 chỉ tạo IVR result.

IVR result chỉ là input signal.

Core Order State Machine mới là final decision layer.

SIM Gateway không được cập nhật order trực tiếp.

Call Result Normalizer chỉ chuẩn hóa kết quả, không đổi trạng thái đơn.

Technical exception không phải khách không nghe.

Capacity incident không phải khách không nghe.

Một SIM chỉ có một active outbound call.

Năng lực IVR phải tính theo số SIM vật lý và chu kỳ 50 giây/cuộc/SIM.

Trong 5 phút, 12 SIM xử lý khoảng 72 cuộc, 24 SIM khoảng 144 cuộc, 32 SIM khoảng 192 cuộc.

Trong 15 phút, 12 SIM xử lý khoảng 216 cuộc, 24 SIM khoảng 432 cuộc, 32 SIM khoảng 576 cuộc.

Trong 45 phút rolling queue, 12 SIM xử lý khoảng 648 cuộc, 24 SIM khoảng 1.296 cuộc, 32 SIM khoảng 1.728 cuộc.

Scheduler bắt buộc là deadline-aware rolling queue.

Batch cuối phiên bị cấm.

AI Advisor không được tạo IVR call job.

Facebook Gateway / Messenger / Live không được gọi IVR trực tiếp.

CRM không được dùng IVR cho chăm sóc, nhắc mua lại hoặc marketing.

Notification owner là bên duy nhất được gửi post-IVR cancellation notice sau khi Core đã hủy đơn chính thức.

Payment không được dùng IVR để xác nhận paid.

Warehouse/Delivery không được dùng IVR để cho xuất kho/giao hàng.

MISA không được dùng IVR để ghi nhận kế toán.

PACK-07 không được dùng IVR result như verified revenue.

Nguyên tắc khóa của PHẦN 3/4 là:

**IVR result không phải order state.**  
**Core mới quyết định đơn.**  
**Technical error không phải No Answer.**  
**Capacity overload không phải lỗi khách.**  
**SIM Gateway không được hủy đơn.**  
**Admin không được sửa IVR result giả.**  
**Notification owner chỉ gửi notice sau Core cancellation.**  
**Engineer không được mở production khi gate blocked.**  
**Không có audit/evidence thì không PASS.**

**PHẦN 4/4 — P0 RULES / SMOKE MATRIX / IVR EVIDENCE / DONE GATE / FAIL GATE / RELEASE CONTROL / FINAL CONCLUSION**

**44. MỤC TIÊU CỦA PHẦN 4/4**

PHẦN 4/4 thiết lập lớp kiểm soát cuối cho PACK-09, bao gồm P0 Rules, Smoke Matrix, IVR Evidence, Done Gate, Fail Gate, Release Control và kết luận cuối.

Mục tiêu của phần này là khóa rõ:

1.  Rule nào là P0 bắt buộc.

2.  Rule nào tuyệt đối không được vi phạm.

3.  Điều kiện nào làm PACK-09 fail.

4.  Smoke nào bắt buộc trước khi release.

5.  Evidence nào phải có.

6.  Khi nào IVR Governance được xem là done.

7.  Khi nào IVR Implementation được xem là done.

8.  Khi nào IVR được phép production.

9.  Khi nào IVR bị blocked.

10. Khi nào Completion Report không được PASS.

11. Khi nào Gateway / Production / Go-live vẫn phải giữ BLOCKED.

12. Cách handoff PACK-09 sang bộ file IVR-00 → IVR-05.

PHẦN 4/4 không thiết kế code, API, database hoặc UI chi tiết.

PHẦN 4/4 là lớp governance cuối để ngăn việc triển khai IVR bằng cách “làm cho có”, thiếu evidence, thiếu smoke hoặc vượt ranh giới Core Order State Machine.

**45. P0 RULE REGISTRY**

**45.1. Nguyên tắc P0**

P0 Rule là rule bắt buộc.

P0 Rule không phải khuyến nghị.

P0 Rule không được override tùy tiện.

P0 Rule không được bỏ qua để chạy nhanh.

P0 Rule không được xử lý bằng lời hứa “sẽ sửa sau”.

Nếu vi phạm P0, PACK-09 phải chuyển trạng thái:

IVR_GATE = BLOCKED  
IVR_PRODUCTION_READY = NO  
RELEASE_APPROVED = NO

**45.2. P0-01 — Internal SIM Gateway**

**MUST**

PACK-09 dùng mô hình:

INTERNAL_SIM_GATEWAY_SERVER

Hệ thống dùng SIM Gateway nội bộ, SIM vật lý, server nội bộ, call scheduler nội bộ, DTMF capture nội bộ, result normalizer nội bộ và audit/evidence nội bộ.

**MUST NOT**

Không mặc định dùng:

1.  Cloud IVR.

2.  SIP Trunk.

3.  Voice Brandname Provider.

4.  Telecom Provider Managed IVR.

5.  Third-party calling platform.

6.  External marketing call center.

**FAIL IF**

1.  Tài liệu hoặc triển khai lấy provider bên ngoài làm mặc định khi chưa có quyết định riêng.

2.  Dev tự chọn Cloud IVR vì dễ làm hơn.

3.  Provider ngoài được gắn vào production mà chưa có security review.

4.  Call result từ provider ngoài được coi là source-of-truth khi chưa có owner approval.

**Evidence bắt buộc**

1.  SIM Gateway deployment decision.

2.  Internal SIM Gateway test evidence.

3.  SIM channel list.

4.  Server internal routing evidence.

5.  Owner approval cho mô hình triển khai.

**45.3. P0-02 — One SIM One Active Call**

**MUST**

Một SIM chỉ xử lý một cuộc gọi outbound đang active tại một thời điểm.

1 SIM = 1 ACTIVE OUTBOUND CALL

**MUST NOT**

1.  Không assign nhiều call job vào cùng một SIM đang bận.

2.  Không tính một SIM gọi song song nhiều cuộc.

3.  Không giả định SIM Gateway có thể vượt giới hạn vật lý.

4.  Không tính capacity theo số call job trong queue.

**FAIL IF**

1.  Scheduler giao trùng SIM channel.

2.  Một SIM có 2 active outbound call.

3.  Dashboard báo capacity cao hơn số SIM vật lý hợp lệ.

4.  Call result lẫn giữa hai cuộc gọi cùng SIM.

**Evidence bắt buộc**

1.  SIM channel state log.

2.  Active call tracking.

3.  Scheduler assignment log.

4.  SimHealthMonitor evidence.

5.  Duplicate assignment test evidence.

**45.4. P0-03 — Program Window**

**MUST**

Giờ Vàng:

1.  Confirmation window = 5 phút.

2.  Max attempt = 2.

3.  Attempt 1 = T0.

4.  Attempt 2 = T0 + 2 phút 30 giây.

5.  Window expires = T0 + 5 phút.

24/7:

1.  Confirmation window = 15 phút.

2.  Max attempt = 3.

3.  Attempt 1 = T0.

4.  Attempt 2 = T0 + 5 phút.

5.  Attempt 3 = T0 + 10 phút.

6.  Window expires = T0 + 15 phút.

**MUST NOT**

1.  Không gọi dồn liên tục.

2.  Không gọi attempt sai thời điểm.

3.  Không gọi sau khi hết window.

4.  Không tự gia hạn window.

5.  Không tạo attempt vượt số lần đã khóa theo program.

6.  Không reset window bằng thao tác Admin nếu không có owner-approved rule.

7.  Không gửi tin nhắn hủy đơn trước khi Core Order State Machine hủy đơn chính thức.

**FAIL IF**

1.  Giờ Vàng attempt 2 không ở T0 + 2 phút 30 giây.

2.  Giờ Vàng có attempt 3.

3.  24/7 attempt 2 không ở T0 + 5 phút.

4.  24/7 attempt 3 không ở T0 + 10 phút.

5.  24/7 có attempt 4.

6.  Có cuộc gọi sau window expiry.

7.  Có tin nhắn hủy đơn được gửi trước khi Core hủy đơn.

8.  Technical exception bị tính là no answer.

9.  Capacity incident bị tính là no answer.

**Evidence bắt buộc**

1.  T0.

2.  Program type.

3.  Attempt 1 timestamp.

4.  Attempt 2 timestamp.

5.  Attempt 3 timestamp nếu program là TWENTY_FOUR_SEVEN.

6.  Window expiry timestamp.

7.  Scheduler decision log.

8.  Final IVR result.

9.  Core response.

10. Notification evidence nếu có post-IVR cancellation notice.

**45.5. P0-04 — Key Mapping**

**MUST**

DTMF mapping khóa:

1.  Phím 1 = CONFIRM_ORDER.

2.  Phím 0 = CANCEL_ORDER_BY_CUSTOMER.

**MUST NOT**

1.  Không tự thêm phím 9.

2.  Không tự thêm phím hỗ trợ người thật.

3.  Không tự thêm menu nhiều tầng.

4.  Không tự thêm phím upsell.

5.  Không tự thêm phím khảo sát.

6.  Không tự thêm phím CRM.

**FAIL IF**

1.  DTMF mapping sai rule.

2.  Phím 0 bị hiểu thành xác nhận.

3.  Phím 1 bị hiểu thành hủy.

4.  Phím 9 được bật khi rule đang khóa NOT_ENABLED.

5.  Sai phím được tự động hiểu thành xác nhận/hủy.

**Evidence bắt buộc**

1.  DTMF test result.

2.  Key 1 test.

3.  Key 0 test.

4.  Invalid key test.

5.  No input test.

6.  DTMF error test.

7.  Normalized result evidence.

**45.6. P0-05 — Core State Machine**

**MUST**

Mọi hủy đơn hoặc tiếp tục xử lý đơn phải đi qua Core Order State Machine.

**MUST NOT**

1.  SIM Gateway không cập nhật order trực tiếp.

2.  IVR callback không đổi order state trực tiếp.

3.  Admin UI IVR không hủy đơn ngoài Core.

4.  Call Result Normalizer không release order.

5.  Scheduler không hủy order.

6.  Notification không được gửi tin nhắn hủy nếu chưa có Core cancellation.

**FAIL IF**

1.  SIM Gateway đổi order state trực tiếp.

2.  IVR callback đổi order state trực tiếp.

3.  Admin UI tạo nút hủy đơn không qua Core.

4.  IVR_CONFIRMED tự chuyển order sang trạng thái xử lý tiếp.

5.  IVR_CUSTOMER_CANCELLED tự hủy order ngoài Core.

6.  IVR_NO_ANSWER_FINAL tự hủy order ngoài Core.

7.  Notification gửi tin nhắn hủy trước khi Core hủy đơn.

**Evidence bắt buộc**

1.  Core signal evidence.

2.  Core response evidence.

3.  State transition log.

4.  Order state before/after.

5.  Reason code.

6.  Audit correlation.

7.  Notification trigger evidence nếu có.

**45.7. P0-06 — Technical Error Boundary**

**MUST**

Lỗi kỹ thuật đi vào:

IVR_TECHNICAL_EXCEPTION  
ADMIN_REVIEW_REQUIRED

**MUST NOT**

1.  Không tính lỗi kỹ thuật là khách không nghe.

2.  Không hủy đơn vì SIM lỗi.

3.  Không hủy đơn vì server lỗi.

4.  Không hủy đơn vì DTMF lỗi.

5.  Không hủy đơn vì audio playback lỗi.

6.  Không hủy đơn vì scheduler lỗi.

7.  Không hủy đơn vì callback lỗi.

8.  Không gửi cancellation notice do lỗi kỹ thuật.

**FAIL IF**

1.  SIM lỗi nhưng order bị cancel bằng IVR_NO_ANSWER_AFTER_PROGRAM_ATTEMPTS.

2.  DTMF_CAPTURE_ERROR bị tính là NO_INPUT.

3.  AUDIO_PLAYBACK_ERROR bị tính là khách không nghe.

4.  SCHEDULER_ERROR bị che giấu.

5.  TECHNICAL_EXCEPTION không vào Admin Review.

6.  Technical exception kích hoạt post-IVR cancellation notice.

**Evidence bắt buộc**

1.  Technical error log.

2.  Error type.

3.  Attempt context.

4.  Result normalizer output.

5.  Admin Review status.

6.  Core handling evidence.

7.  Notice blocked evidence nếu có.

**45.8. P0-07 — Rolling Queue**

**MUST**

Dùng:

DEADLINE_AWARE_ROLLING_QUEUE

**MUST NOT**

1.  Không batch toàn bộ cuộc gọi cuối phiên.

2.  Không dồn tất cả cuộc gọi sau live.

3.  Không gọi ngoài window.

4.  Không bỏ qua deadline.

5.  Không assign job theo FIFO mù nếu deadline khác nhau.

6.  Không để queue backlog bị che giấu.

7.  Không giả lập result khi không gọi kịp.

**FAIL IF**

1.  32 SIM bị giao xử lý 800–1.200 cuộc trong 5 phút.

2.  Scheduler dồn call cuối Giờ Vàng.

3.  Attempt quá hạn nhưng vẫn gọi.

4.  Hệ thống giả lập gọi thành công khi SIM không đủ.

5.  Capacity incident không được tạo.

6.  24/7 attempt 3 bị batch cuối window sai rule.

**Evidence bắt buộc**

1.  Queue snapshot.

2.  Deadline calculation.

3.  SIM availability.

4.  Attempt schedule.

5.  Backlog count.

6.  Capacity incident evidence.

7.  Expired job evidence.

**45.9. P0-08 — No Downstream Dependency**

**MUST**

Downstream chưa được phụ thuộc IVR result khi chưa release.

**MUST NOT**

Các module sau không được dùng IVR result như production data khi IVR chưa pass test/smoke/evidence:

1.  Order.

2.  CRM.

3.  AI Advisor.

4.  Facebook Gateway.

5.  Messenger.

6.  Live.

7.  Admin.

8.  Warehouse.

9.  Payment.

10. MISA.

11. PACK-07 Ads/ROAS.

12. Notification.

13. Completion Report.

**FAIL IF**

1.  Có module dùng IVR result trước khi IVR test/smoke/evidence pass.

2.  AI nói đơn đã IVR xác nhận khi Core chưa công nhận.

3.  Warehouse cho xuất kho theo raw IVR result.

4.  PACK-07 dùng IVR result chưa release làm evidence ROAS.

5.  Admin hiển thị IVR simulation như production truth.

6.  Notification gửi notice production khi IVR/Order gate chưa cho phép.

**Evidence bắt buộc**

1.  Dependency review.

2.  Feature flag status.

3.  Downstream usage check.

4.  Integration smoke.

5.  Release gate evidence.

**45.10. P0-09 — No Release Without Evidence**

**MUST**

Test, smoke, security và evidence là bắt buộc.

**MUST NOT**

1.  Không release bằng lời xác nhận miệng.

2.  Không release vì “dev nói chạy được”.

3.  Không release vì demo nội bộ một lần.

4.  Không Completion Report PASS nếu thiếu evidence.

5.  Không Production Ready nếu evidence pending.

6.  Không Owner sign-off nếu smoke fail chưa retest.

**FAIL IF**

1.  Completion Report PASS nhưng thiếu evidence.

2.  IVR_GATE PASS nhưng smoke chưa chạy.

3.  Production enabled nhưng evidence rejected.

4.  Release decision không có audit.

5.  Security/privacy chưa kiểm tra nhưng go-live.

**Evidence bắt buộc**

1.  Test result.

2.  Smoke result.

3.  Security review.

4.  Evidence accepted.

5.  Owner sign-off.

6.  Release decision.

**45.11. P0-10 — Post-IVR Cancellation Notice**

**MUST**

Tin nhắn giải thích hủy đơn chỉ được gửi sau khi Core Order State Machine đã hủy đơn chính thức.

Tin nhắn này là:

TRANSACTIONAL_ORDER_STATUS_NOTICE

Notification owner là bên phát hành tin nhắn.

**MUST NOT**

1.  SIM Gateway không được tự gửi tin nhắn.

2.  AI Advisor không được tự gửi tin nhắn.

3.  CRM marketing không được gửi tin nhắn này như chăm sóc hoặc upsell.

4.  Facebook Gateway không được tự quyết định gửi tin nhắn này.

5.  Không gửi tin nhắn sau từng attempt không nghe.

6.  Không gửi tin nhắn khi lỗi kỹ thuật.

7.  Không gửi tin nhắn khi capacity incident.

8.  Không gửi tin nhắn nếu Core chưa hủy đơn.

9.  Không chứa full address.

10. Không chứa payment detail.

11. Không chứa member tier.

12. Không chứa Diamond/referral info.

13. Không chứa health/sensitive note.

14. Không cam kết giữ giá cũ khi quote/window đã hết.

**FAIL IF**

1.  Có tin nhắn hủy đơn gửi sau attempt 1 hoặc attempt 2 khi chưa có Core cancellation.

2.  SIM Gateway tự gửi tin nhắn.

3.  AI Advisor tự phát tin nhắn.

4.  CRM dùng tin nhắn này để marketing.

5.  Facebook Gateway tự phát tin nhắn khi chưa có Notification owner event.

6.  Tin nhắn chứa dữ liệu bị cấm.

7.  Tin nhắn được gửi do IVR_TECHNICAL_EXCEPTION.

8.  Tin nhắn được gửi do IVR_CAPACITY_EXCEPTION.

9.  Tin nhắn được gửi khi order chưa có trạng thái cancelled từ Core.

**Evidence bắt buộc**

1.  Core cancellation evidence.

2.  Cancel reason.

3.  Notification owner event.

4.  Message template used.

5.  Channel used.

6.  Timestamp.

7.  Delivery status nếu có.

8.  Audit/correlation ID.

**46. SMOKE GOVERNANCE PRINCIPLES**

**46.1. Smoke không phải chạy thử hình thức**

Smoke PACK-09 phải chứng minh IVR vận hành đúng nghiệp vụ.

Smoke không chỉ kiểm tra gọi được một cuộc.

Smoke phải chứng minh:

1.  Gọi đúng order đủ điều kiện.

2.  Không gọi order chưa đủ điều kiện.

3.  Phím 1 đúng.

4.  Phím 0 đúng.

5.  Không bấm phím đúng rule.

6.  Sai phím đúng rule.

7.  Lỗi DTMF đúng technical exception.

8.  Giờ Vàng đúng 5 phút.

9.  24/7 đúng 15 phút với 3 attempts.

10. Scheduler không batch cuối phiên.

11. Một SIM chỉ một active call.

12. Technical error không thành no answer.

13. Capacity incident không thành lỗi khách.

14. Core Order State Machine là final decision.

15. Evidence ghi đầy đủ.

16. Downstream không phụ thuộc khi chưa release.

17. Post-IVR cancellation notice chỉ gửi sau khi Core đã hủy đơn.

18. Technical exception không kích hoạt cancellation notice.

19. Capacity incident không kích hoạt cancellation notice.

**46.2. Smoke phải có positive path và negative path**

Positive path chứng minh luồng đúng chạy được.

Negative path chứng minh hệ thống chặn đúng.

PACK-09 không đủ Done Gate nếu chỉ test khách bấm 1.

Bắt buộc test:

1.  Khách bấm 1.

2.  Khách bấm 0.

3.  Không nghe cuộc 1, nghe cuộc sau.

4.  Không nghe đủ attempts theo program: Giờ Vàng 2 cuộc, 24/7 3 cuộc.

5.  Hết window.

6.  Sai phím.

7.  DTMF lỗi.

8.  SIM lỗi.

9.  Scheduler quá tải.

10. Core unavailable.

11. Duplicate call job.

12. Admin cố sửa result.

13. Downstream cố consume IVR result khi chưa release.

14. Post-IVR cancellation notice chỉ gửi sau khi Core đã hủy đơn.

15. Technical exception không kích hoạt cancellation notice.

16. Capacity incident không kích hoạt cancellation notice.

**47. SMOKE MATRIX TỔNG THỂ**

**47.1. IVR-SMK-001 — Internal SIM Gateway Smoke**

| **Hạng mục**    | **Nội dung**                                                                  |
|-----------------|-------------------------------------------------------------------------------|
| Smoke ID        | IVR-SMK-001                                                                   |
| Mục tiêu        | Kiểm tra mô hình Internal SIM Gateway Server                                  |
| Input           | SIM Gateway nội bộ, SIM vật lý, server nội bộ                                 |
| Expected result | Hệ thống gọi qua Internal SIM Gateway, không dùng provider ngoài làm mặc định |
| Negative path   | Cấu hình Cloud IVR / SIP / Voice Brandname làm default                        |
| Fail condition  | Provider ngoài được dùng làm default khi chưa owner decision                  |
| Evidence        | Deployment model snapshot, SIM Gateway test, owner approval                   |

**47.2. IVR-SMK-002 — One SIM One Active Call Smoke**

| **Hạng mục**    | **Nội dung**                                         |
|-----------------|------------------------------------------------------|
| Smoke ID        | IVR-SMK-002                                          |
| Mục tiêu        | Kiểm tra 1 SIM chỉ có 1 active outbound call         |
| Input           | Nhiều call job đồng thời                             |
| Expected result | Scheduler chỉ assign mỗi SIM một cuộc active         |
| Negative path   | Cố assign 2 call vào cùng SIM                        |
| Fail condition  | Một SIM có nhiều active call                         |
| Evidence        | SIM channel log, assignment log, active call monitor |

**47.3. IVR-SMK-003 — Call Script Smoke**

| **Hạng mục**    | **Nội dung**                                                 |
|-----------------|--------------------------------------------------------------|
| Smoke ID        | IVR-SMK-003                                                  |
| Mục tiêu        | Kiểm tra call script đúng nội dung chuẩn                     |
| Input           | Order có order_code_short và total_amount_display            |
| Expected result | IVR đọc đúng script, không thêm nội dung marketing/CRM       |
| Negative path   | Script đọc địa chỉ, member tier, Diamond, payment detail     |
| Fail condition  | IVR đọc thông tin không được phép                            |
| Evidence        | Script version, audio playback log, variable render evidence |

**47.4. IVR-SMK-004 — Allowed Variables Smoke**

| **Hạng mục**    | **Nội dung**                                                          |
|-----------------|-----------------------------------------------------------------------|
| Smoke ID        | IVR-SMK-004                                                           |
| Mục tiêu        | Kiểm tra chỉ biến được phép được dùng                                 |
| Input           | Order có nhiều dữ liệu khách hàng                                     |
| Expected result | Chỉ dùng order_code_short, total_amount_display, optional đúng policy |
| Negative path   | Full address, payment detail, health note xuất hiện trong script      |
| Fail condition  | Script render biến bị cấm                                             |
| Evidence        | Variable render log, data minimization result                         |

**47.5. IVR-SMK-005 — DTMF Key 1 Smoke**

| **Hạng mục**    | **Nội dung**                               |
|-----------------|--------------------------------------------|
| Smoke ID        | IVR-SMK-005                                |
| Mục tiêu        | Kiểm tra phím 1 xác nhận đơn               |
| Input           | Khách nghe và bấm 1                        |
| Expected result | IVR_CONFIRMED, gửi signal về Core          |
| Negative path   | Phím 1 bị map sai hoặc đổi order trực tiếp |
| Fail condition  | SIM Gateway tự chuyển order state          |
| Evidence        | DTMF log, normalized result, Core response |

**47.6. IVR-SMK-006 — DTMF Key 0 Smoke**

| **Hạng mục**    | **Nội dung**                                             |
|-----------------|----------------------------------------------------------|
| Smoke ID        | IVR-SMK-006                                              |
| Mục tiêu        | Kiểm tra phím 0 là khách không đặt/muốn hủy              |
| Input           | Khách nghe và bấm 0                                      |
| Expected result | IVR_CUSTOMER_CANCELLED, Core xử lý hủy qua state machine |
| Negative path   | SIM Gateway tự hủy order                                 |
| Fail condition  | Order bị hủy ngoài Core                                  |
| Evidence        | DTMF log, cancel signal, Core transition evidence        |

**47.7. IVR-SMK-007 — Key 9 Not Enabled Smoke**

| **Hạng mục**    | **Nội dung**                                    |
|-----------------|-------------------------------------------------|
| Smoke ID        | IVR-SMK-007                                     |
| Mục tiêu        | Kiểm tra phím 9 chưa được bật                   |
| Input           | Khách bấm 9                                     |
| Expected result | Invalid input / no valid confirmation theo rule |
| Negative path   | Hệ thống chuyển human support bằng phím 9       |
| Fail condition  | Phím 9 được enable khi rule đang NOT_ENABLED    |
| Evidence        | DTMF mapping evidence, invalid key result       |

**47.8. IVR-SMK-008 — No Input / Invalid Input Smoke**

| **Hạng mục**    | **Nội dung**                                           |
|-----------------|--------------------------------------------------------|
| Smoke ID        | IVR-SMK-008                                            |
| Mục tiêu        | Kiểm tra không bấm/sai phím không thành confirm/cancel |
| Input           | Không bấm phím hoặc bấm phím ngoài 1/0                 |
| Expected result | No valid input, xử lý theo attempt/window              |
| Negative path   | Sai phím được hiểu thành xác nhận                      |
| Fail condition  | Invalid input tạo order action                         |
| Evidence        | DTMF event, normalized result, scheduler next step     |

**47.9. IVR-SMK-009 — Golden Hour Window Smoke**

| **Hạng mục**    | **Nội dung**                                                   |
|-----------------|----------------------------------------------------------------|
| Smoke ID        | IVR-SMK-009                                                    |
| Mục tiêu        | Kiểm tra Giờ Vàng 5 phút, 2 attempts, cách 2 phút 30 giây      |
| Input           | Order thuộc GOLDEN_HOUR                                        |
| Expected result | Attempt 1 tại T0, attempt 2 tại T0 + 2:30, hết T0 + 5:00       |
| Negative path   | Attempt 2 sai thời gian, gọi sau 5 phút, có attempt 3          |
| Fail condition  | Xác nhận sau window vẫn được coi hợp lệ; Giờ Vàng có attempt 3 |
| Evidence        | Attempt timeline, window expiry, Core action                   |

**47.10. IVR-SMK-010 — 24/7 Window Smoke**

| **Hạng mục**    | **Nội dung**                                                                                         |
|-----------------|------------------------------------------------------------------------------------------------------|
| Smoke ID        | IVR-SMK-010                                                                                          |
| Mục tiêu        | Kiểm tra 24/7 15 phút, 3 attempts, lịch gọi T0 / T0 + 5 phút / T0 + 10 phút                          |
| Input           | Order thuộc TWENTY_FOUR_SEVEN                                                                        |
| Expected result | Attempt 1 tại T0, attempt 2 tại T0 + 5 phút, attempt 3 tại T0 + 10 phút, hết window tại T0 + 15 phút |
| Negative path   | Attempt 2 sai thời gian, attempt 3 sai thời gian, gọi ngoài 15 phút, tạo attempt 4                   |
| Fail condition  | Gọi sau window nhưng vẫn coi xác nhận hợp lệ; 24/7 không tạo attempt 3 đúng rule; tạo attempt 4      |
| Evidence        | Attempt timeline, window expiry, Core action, scheduler decision log                                 |

**47.11. IVR-SMK-011 — No Answer After Program Attempts Smoke**

| **Hạng mục**    | **Nội dung**                                                                                                               |
|-----------------|----------------------------------------------------------------------------------------------------------------------------|
| Smoke ID        | IVR-SMK-011                                                                                                                |
| Mục tiêu        | Kiểm tra không nghe đủ attempts theo program tạo IVR_NO_ANSWER_FINAL                                                       |
| Input           | Golden Hour: attempt 1 no answer, attempt 2 no answer. 24/7: attempt 1 no answer, attempt 2 no answer, attempt 3 no answer |
| Expected result | IVR_NO_ANSWER_FINAL, Core xử lý theo program-specific reason code                                                          |
| Negative path   | Một trong các attempts là technical error hoặc capacity incident                                                           |
| Fail condition  | Technical error/capacity incident bị tính là no answer; 24/7 không test attempt 3                                          |
| Evidence        | Attempt logs, result normalizer, Core reason code, Core cancellation evidence                                              |

**47.12. IVR-SMK-012 — Technical Exception Smoke**

| **Hạng mục**    | **Nội dung**                                                |
|-----------------|-------------------------------------------------------------|
| Smoke ID        | IVR-SMK-012                                                 |
| Mục tiêu        | Kiểm tra lỗi kỹ thuật đi vào IVR_TECHNICAL_EXCEPTION        |
| Input           | SIM_GATEWAY_ERROR, DTMF_CAPTURE_ERROR, AUDIO_PLAYBACK_ERROR |
| Expected result | IVR_TECHNICAL_EXCEPTION, ADMIN_REVIEW_REQUIRED              |
| Negative path   | Lỗi kỹ thuật bị map thành NO_ANSWER                         |
| Fail condition  | Order bị hủy do lỗi kỹ thuật                                |
| Evidence        | Error log, normalized result, admin review record           |

**47.13. IVR-SMK-013 — Core State Machine Boundary Smoke**

| **Hạng mục**    | **Nội dung**                                                 |
|-----------------|--------------------------------------------------------------|
| Smoke ID        | IVR-SMK-013                                                  |
| Mục tiêu        | Kiểm tra mọi order action đi qua Core                        |
| Input           | IVR_CONFIRMED / IVR_CUSTOMER_CANCELLED / IVR_NO_ANSWER_FINAL |
| Expected result | IVR gửi signal, Core quyết định state transition             |
| Negative path   | SIM Gateway hoặc callback đổi order trực tiếp                |
| Fail condition  | Order state thay đổi ngoài Core                              |
| Evidence        | Core signal, Core transition log, audit                      |

**47.14. IVR-SMK-014 — Deadline-Aware Rolling Queue Smoke**

| **Hạng mục**    | **Nội dung**                                         |
|-----------------|------------------------------------------------------|
| Smoke ID        | IVR-SMK-014                                          |
| Mục tiêu        | Kiểm tra scheduler dùng rolling queue theo deadline  |
| Input           | Nhiều order phát sinh theo thời gian                 |
| Expected result | Job được gọi rolling real-time, không dồn cuối phiên |
| Negative path   | Batch cuối phiên                                     |
| Fail condition  | Scheduler gọi hàng loạt cuối window                  |
| Evidence        | Queue timeline, job schedule, deadline calculation   |

**47.15. IVR-SMK-015 — Capacity Incident Smoke**

| **Hạng mục**    | **Nội dung**                                               |
|-----------------|------------------------------------------------------------|
| Smoke ID        | IVR-SMK-015                                                |
| Mục tiêu        | Kiểm tra quá tải tạo capacity incident                     |
| Input           | 32 SIM, 800–1.200 job trong 5 phút                         |
| Expected result | Capacity incident, không giả lập gọi đủ                    |
| Negative path   | Hệ thống coi toàn bộ no answer hoặc called                 |
| Fail condition  | Overcapacity bị che giấu                                   |
| Evidence        | SIM count, job count, backlog, expired job, capacity event |

**47.16. IVR-SMK-016 — Duplicate Call Job Smoke**

| **Hạng mục**    | **Nội dung**                                      |
|-----------------|---------------------------------------------------|
| Smoke ID        | IVR-SMK-016                                       |
| Mục tiêu        | Kiểm tra một order không có nhiều call job active |
| Input           | Cố tạo duplicate call job cho cùng order/window   |
| Expected result | Duplicate bị block, Admin Review nếu cần          |
| Negative path   | Hai call job cùng gọi một order                   |
| Fail condition  | Duplicate final result cạnh tranh nhau            |
| Evidence        | Duplicate detection log, blocked result, audit    |

**47.17. IVR-SMK-017 — Admin Manual Control Smoke**

| **Hạng mục**    | **Nội dung**                                            |
|-----------------|---------------------------------------------------------|
| Smoke ID        | IVR-SMK-017                                             |
| Mục tiêu        | Kiểm tra Admin không sửa IVR result giả                 |
| Input           | Admin cố mark fake confirmed/cancelled                  |
| Expected result | Action bị chặn hoặc đi qua manual review riêng có audit |
| Negative path   | Admin sửa result trực tiếp                              |
| Fail condition  | Fake IVR result được ghi như khách bấm phím             |
| Evidence        | Permission log, rejected action, audit                  |

**47.18. IVR-SMK-018 — Downstream Dependency Smoke**

| **Hạng mục**    | **Nội dung**                                                   |
|-----------------|----------------------------------------------------------------|
| Smoke ID        | IVR-SMK-018                                                    |
| Mục tiêu        | Kiểm tra downstream không consume IVR result trước release     |
| Input           | AI/FB/CRM/Admin/Warehouse/PACK-07 cố đọc IVR result production |
| Expected result | Blocked khi IVR_GATE chưa PASS                                 |
| Negative path   | Downstream dùng simulated IVR result                           |
| Fail condition  | Module phụ thuộc IVR result trước release                      |
| Evidence        | Dependency block log, feature flag, integration test           |

**47.19. IVR-SMK-019 — Evidence Write Smoke**

| **Hạng mục**    | **Nội dung**                             |
|-----------------|------------------------------------------|
| Smoke ID        | IVR-SMK-019                              |
| Mục tiêu        | Kiểm tra mọi call job/result có evidence |
| Input           | Call job hoàn tất hoặc lỗi               |
| Expected result | Evidence record có metadata đầy đủ       |
| Negative path   | Evidence writer fail                     |
| Fail condition  | Result không có evidence nhưng vẫn PASS  |
| Evidence        | Evidence record, metadata, review status |

**47.20. IVR-SMK-020 — Release Gate Smoke**

| **Hạng mục**    | **Nội dung**                                                            |
|-----------------|-------------------------------------------------------------------------|
| Smoke ID        | IVR-SMK-020                                                             |
| Mục tiêu        | Kiểm tra release không được PASS khi thiếu test/smoke/security/evidence |
| Input           | Release request                                                         |
| Expected result | Release blocked nếu thiếu accepted evidence hoặc còn P0                 |
| Negative path   | Owner/developer xác nhận miệng                                          |
| Fail condition  | RELEASE_APPROVED khi evidence chưa accepted                             |
| Evidence        | Release checklist, smoke result, evidence accepted, owner sign-off      |

**47.21. IVR-SMK-021 — 24/7 Three-Attempt Schedule Smoke**

| **Hạng mục**    | **Nội dung**                                                         |
|-----------------|----------------------------------------------------------------------|
| Smoke ID        | IVR-SMK-021                                                          |
| Mục tiêu        | Kiểm tra 24/7 gọi đúng T0 / T0 + 5 phút / T0 + 10 phút               |
| Input           | Order 24/7 không có final result ở attempt 1 và attempt 2            |
| Expected result | 24/7 có đủ attempt 3 nếu attempt 1 và attempt 2 chưa có final result |
| Negative path   | Không tạo attempt 3 hoặc tạo attempt 3 sai thời điểm                 |
| Fail condition  | Attempt 3 không đúng lịch hoặc gọi sau T0 + 15 phút                  |
| Evidence        | Attempt timeline, scheduler log, window expiry                       |

**47.22. IVR-SMK-022 — Post-IVR Cancellation Notice Smoke**

| **Hạng mục**    | **Nội dung**                                                                     |
|-----------------|----------------------------------------------------------------------------------|
| Smoke ID        | IVR-SMK-022                                                                      |
| Mục tiêu        | Kiểm tra tin nhắn giải thích chỉ gửi sau khi Core Order State Machine đã hủy đơn |
| Input           | IVR_NO_ANSWER_FINAL và Core cancellation                                         |
| Expected result | Core hủy đơn trước, Notification owner phát hành transactional notice sau        |
| Negative path   | Tin nhắn gửi sau từng attempt không nghe hoặc trước khi Core hủy                 |
| Fail condition  | Tin nhắn gửi trước Core cancellation                                             |
| Evidence        | Core cancellation evidence, notification owner event, message template           |

**47.23. IVR-SMK-023 — Invalid Phone vs No Answer Smoke**

| **Hạng mục**    | **Nội dung**                                                                                                      |
|-----------------|-------------------------------------------------------------------------------------------------------------------|
| Smoke ID        | IVR-SMK-023                                                                                                       |
| Mục tiêu        | Phân biệt số không có thật với máy đổ chuông không nghe                                                           |
| Input           | Case invalid phone và case ringing no answer                                                                      |
| Expected result | Invalid phone chỉ dùng khi rule xác nhận rõ. No answer dùng khi gọi hợp lệ nhưng khách không nghe sau đủ attempts |
| Negative path   | Một lần không nghe bị kết luận invalid phone                                                                      |
| Fail condition  | Invalid phone vẫn gửi SMS vào số không có thật                                                                    |
| Evidence        | Call result, normalized result, channel policy, notice block evidence                                             |

**47.24. IVR-SMK-024 — Technical Exception No-Notice Smoke**

| **Hạng mục**    | **Nội dung**                                                           |
|-----------------|------------------------------------------------------------------------|
| Smoke ID        | IVR-SMK-024                                                            |
| Mục tiêu        | Technical exception không được kích hoạt tin nhắn hủy đơn              |
| Input           | SIM/server/DTMF/audio/scheduler error                                  |
| Expected result | Technical exception đi vào Admin Review, không gửi cancellation notice |
| Negative path   | Technical exception bị map thành no answer                             |
| Fail condition  | Technical exception làm gửi cancellation notice                        |
| Evidence        | Technical error log, admin review, notice blocked evidence             |

**47.25. IVR-SMK-025 — Notification Owner Boundary Smoke**

| **Hạng mục**    | **Nội dung**                                                                   |
|-----------------|--------------------------------------------------------------------------------|
| Smoke ID        | IVR-SMK-025                                                                    |
| Mục tiêu        | Kiểm tra Notification owner là bên phát hành transactional notice              |
| Input           | Core cancellation trigger                                                      |
| Expected result | Notification owner phát hành notice; SIM Gateway, AI Advisor, CRM không tự gửi |
| Negative path   | SIM Gateway / AI / CRM tự gửi                                                  |
| Fail condition  | SIM Gateway, AI Advisor hoặc CRM tự gửi tin nhắn hủy đơn                       |
| Evidence        | Notification event, actor/source, audit/correlation ID                         |

**48. IVR EVIDENCE GOVERNANCE**

**48.1. Không có evidence thì không PASS**

PACK-09 không được gọi PASS nếu thiếu evidence.

Evidence bắt buộc cho:

1.  Internal SIM Gateway.

2.  SIM channel.

3.  Call job.

4.  Attempt.

5.  DTMF.

6.  Result normalizer.

7.  Technical exception.

8.  Capacity incident.

9.  Core signal.

10. Core response.

11. Admin review.

12. Post-IVR cancellation notice.

13. Smoke result.

14. Security review.

15. Release decision.

Không có evidence accepted thì không Release Ready.

**48.2. Evidence Registry tối thiểu**

PACK-09 cần Evidence Registry cho:

1.  IVR Deployment Evidence.

2.  SIM Channel Evidence.

3.  Call Script Evidence.

4.  Variable Rendering Evidence.

5.  DTMF Mapping Evidence.

6.  Golden Hour Window Evidence.

7.  24/7 Window Evidence.

8.  Scheduler Evidence.

9.  Rolling Queue Evidence.

10. Capacity Incident Evidence.

11. Technical Exception Evidence.

12. Call Result Normalization Evidence.

13. Core Signal Evidence.

14. Core State Transition Evidence.

15. Post-IVR Cancellation Notice Evidence.

16. Admin Review Evidence.

17. Security/Privacy Evidence.

18. Smoke Evidence.

19. Release Evidence.

**48.3. Evidence status**

Evidence phải có trạng thái:

1.  EVIDENCE_PENDING.

2.  EVIDENCE_SUBMITTED.

3.  EVIDENCE_ACCEPTED.

4.  EVIDENCE_REJECTED.

5.  EVIDENCE_NEEDS_RETEST.

6.  EVIDENCE_EXPIRED.

7.  EVIDENCE_SUPERSEDED.

8.  EVIDENCE_OWNER_REVIEW_REQUIRED.

Chỉ **EVIDENCE_ACCEPTED** mới được dùng cho PASS.

Evidence pending không được dùng cho PASS.

Evidence rejected phải sửa và retest.

Evidence expired phải review lại.

**48.4. Evidence metadata**

Mỗi evidence record cần có:

1.  Evidence ID.

2.  Pack ID.

3.  Smoke ID hoặc Gate ID.

4.  Order reference nếu có.

5.  Call job reference nếu có.

6.  Program.

7.  Environment.

8.  Timestamp.

9.  Source system.

10. Result.

11. Reviewer.

12. Review status.

13. Correlation ID.

14. Audit reference.

15. Retest reference nếu có.

Không có metadata thì evidence chưa đủ chuẩn governance.

**48.5. Evidence không được sửa/xóa tùy tiện**

Không được:

1.  Xóa failed evidence.

2.  Xóa technical exception.

3.  Xóa capacity incident.

4.  Sửa DTMF key.

5.  Sửa timestamp.

6.  Sửa SIM channel.

7.  Sửa result để PASS.

8.  Sửa no answer thành confirmed.

9.  Sửa technical exception thành no answer.

10. Sửa smoke fail thành smoke pass.

11. Sửa notice blocked thành notice sent.

Nếu cần correction, tạo correction record.

Không ghi đè lịch sử.

**49. DONE GATE — GOVERNANCE**

**49.1. PACK-09 Governance Done Gate**

PACK-09 governance chỉ PASS khi có đủ:

1.  Mô hình Internal SIM Gateway.

2.  Call script chuẩn.

3.  Phím 1/phím 0.

4.  Phím 9 NOT_ENABLED.

5.  Rule Giờ Vàng 5 phút / 2 attempts.

6.  Rule 24/7 15 phút / 3 attempts.

7.  Capacity baseline.

8.  Cross-pack boundary.

9.  Core State Machine boundary.

10. Technical exception boundary.

11. Post-IVR cancellation notice boundary.

12. Engineer handoff model.

13. P0 MUST / MUST NOT / FAIL IF.

14. Smoke Matrix IVR-SMK-001 → IVR-SMK-025.

15. Evidence Governance.

16. Không có nội dung nào cho phép production runtime khi chưa release.

Trạng thái:

PACK_09_GOVERNANCE_DONE_GATE = PASS

**49.2. Governance Fail Gate**

Governance phải FAIL nếu:

1.  Tài liệu cho phép IVR làm CRM.

2.  Tài liệu cho phép IVR làm marketing.

3.  Tài liệu cho phép IVR gọi chăm sóc khách hàng.

4.  Tài liệu không khóa Internal SIM Gateway.

5.  Tài liệu cho phép cloud IVR mặc định.

6.  Tài liệu thiếu Core State Machine boundary.

7.  Tài liệu cho phép SIM Gateway hủy đơn trực tiếp.

8.  Tài liệu thiếu technical exception boundary.

9.  Tài liệu thiếu capacity baseline.

10. Tài liệu thiếu post-IVR cancellation notice boundary.

11. Tài liệu thiếu P0 rules.

12. Tài liệu cho phép production runtime khi implementation chưa có.

**50. DONE GATE — IMPLEMENTATION**

**50.1. Implementation Done Gate**

Implementation Done chỉ được gọi khi:

1.  Internal SIM Gateway kết nối pass.

2.  SIM channel manager pass.

3.  Call job queue pass.

4.  Deadline-aware scheduler pass.

5.  DTMF capture pass.

6.  Call execution adapter pass.

7.  Call result normalizer pass.

8.  Order State Machine adapter pass.

9.  Audit/evidence writer pass.

10. Capacity incident monitor pass.

11. SIM health monitor pass.

12. Notification owner handoff pass.

13. Admin monitoring pass.

14. Security/privacy pass.

15. All P0 smoke pass.

16. Evidence accepted.

**50.2. Implementation Fail Gate**

Implementation phải FAIL nếu:

1.  SIM Gateway gọi được nhưng DTMF fail.

2.  DTMF pass nhưng Core boundary fail.

3.  Scheduler gọi ngoài window.

4.  Scheduler batch cuối phiên.

5.  Scheduler assign trùng SIM.

6.  Technical error bị tính no answer.

7.  Capacity overload bị che giấu.

8.  Admin có thể fake result.

9.  Evidence writer không hoạt động.

10. Notification gửi notice trước Core cancellation.

11. Downstream dùng IVR trước release.

12. Security/privacy chưa kiểm tra.

13. P0 smoke fail.

**51. DONE GATE — CALL SCRIPT / DTMF**

**51.1. Call Script Done Gate**

Call Script chỉ PASS khi:

1.  Script đúng nội dung chuẩn.

2.  Chỉ đọc biến được phép.

3.  Không đọc full address.

4.  Không đọc member tier.

5.  Không đọc Diamond/referral.

6.  Không đọc payment detail.

7.  Không đọc AI/CRM content.

8.  Không đọc health/sensitive note.

9.  Không có nội dung marketing/CRM/upsell.

10. Evidence accepted.

**51.2. DTMF Done Gate**

DTMF chỉ PASS khi:

1.  Phím 1 map đúng IVR_CONFIRMED.

2.  Phím 0 map đúng IVR_CUSTOMER_CANCELLED.

3.  Phím 9 NOT_ENABLED.

4.  Sai phím không tạo order action.

5.  No input không tạo confirm/cancel.

6.  DTMF error đi technical exception.

7.  Evidence accepted.

**52. DONE GATE — SCHEDULER / CAPACITY**

**52.1. Scheduler Done Gate**

Scheduler chỉ PASS khi:

1.  Deadline-aware rolling queue hoạt động.

2.  Attempt 1 đúng T0.

3.  Attempt schedule đúng theo program.

4.  Golden Hour attempt 2 đúng T0 + 2 phút 30 giây.

5.  24/7 attempt 2 đúng T0 + 5 phút.

6.  24/7 attempt 3 đúng T0 + 10 phút.

7.  Không gọi ngoài window.

8.  Không tạo attempt vượt rule theo program.

9.  Không batch cuối phiên.

10. Không assign trùng SIM.

11. Duplicate job bị block.

12. Capacity incident được tạo khi quá tải.

13. Evidence accepted.

**52.2. Capacity Done Gate**

Capacity chỉ PASS khi:

1.  Capacity tính theo số SIM vật lý.

2.  1 SIM = 1 active call.

3.  5 phút capacity đúng baseline.

4.  15 phút capacity đúng baseline.

5.  45 phút rolling capacity đúng baseline.

6.  24/7 3 attempts được tính vào call load.

7.  SIM failure làm giảm capacity đúng.

8.  Overload tạo capacity incident.

9.  Capacity incident không bị map thành no answer.

10. Capacity incident không kích hoạt cancellation notice.

11. Evidence accepted.

**53. DONE GATE — CORE / EXCEPTION**

**53.1. Core Boundary Done Gate**

Core boundary chỉ PASS khi:

1.  IVR chỉ gửi signal.

2.  Core quyết định order state.

3.  SIM Gateway không đổi order state.

4.  Callback không đổi order state.

5.  Admin UI không hủy order ngoài Core.

6.  Reason code do Core ghi nhận.

7.  State transition có audit.

8.  Post-IVR cancellation notice trigger chỉ phát hành sau Core cancellation.

9.  Evidence accepted.

**53.2. Technical Exception Done Gate**

Technical exception chỉ PASS khi:

1.  SIM error → IVR_TECHNICAL_EXCEPTION.

2.  Server error → IVR_TECHNICAL_EXCEPTION.

3.  DTMF error → IVR_TECHNICAL_EXCEPTION.

4.  Audio error → IVR_TECHNICAL_EXCEPTION.

5.  Scheduler error → IVR_TECHNICAL_EXCEPTION.

6.  Technical exception không map no answer.

7.  Technical exception không kích hoạt cancellation notice.

8.  Admin Review được tạo khi cần.

9.  Evidence accepted.

**54. DONE GATE — CROSS-PACK / SECURITY**

**54.1. Cross-Pack Done Gate**

Cross-pack boundary chỉ PASS khi:

1.  AI Advisor không tạo call job.

2.  AI Advisor không tự gửi cancellation notice.

3.  Facebook Gateway không gọi IVR trực tiếp.

4.  Facebook Gateway không tự gửi cancellation notice.

5.  Messenger text không giả lập IVR result.

6.  Live comment không giả lập IVR confirmation.

7.  CRM không dùng IVR cho chăm sóc/marketing.

8.  CRM không dùng cancellation notice như upsell/marketing.

9.  Payment không dùng IVR xác nhận paid.

10. Warehouse không dùng raw IVR để xuất kho.

11. MISA không sync IVR.

12. PACK-07 không dùng IVR result làm verified revenue.

13. Notification owner boundary pass.

14. Downstream dependency bị chặn khi IVR chưa release.

15. Evidence accepted.

**54.2. Security / Privacy Done Gate**

Security / Privacy chỉ PASS khi:

1.  IVR data minimization pass.

2.  Không đọc dữ liệu bị cấm.

3.  Admin UI không hiển thị dữ liệu không cần thiết.

4.  Cancellation notice không chứa dữ liệu bị cấm.

5.  Role/permission pass.

6.  Evidence access controlled.

7.  Call result protected.

8.  DTMF result protected.

9.  Audit immutable hoặc có correction record.

10. No unauthorized export.

11. Evidence accepted.

**55. FAIL GATE TỔNG THỂ**

PACK-09 phải FAIL hoặc BLOCKED nếu có bất kỳ điều kiện sau:

1.  IVR được dùng cho mục đích ngoài xác nhận đơn.

2.  IVR trở thành kênh sales/CRM/marketing.

3.  Cloud IVR/provider ngoài được dùng làm default khi chưa có owner decision.

4.  Một SIM xử lý nhiều active call.

5.  Scheduler assign trùng SIM.

6.  Call script đọc full address.

7.  Call script đọc member tier.

8.  Call script đọc Diamond/referral.

9.  Call script đọc payment detail.

10. Call script đọc health/sensitive note.

11. Phím 1/phím 0 map sai.

12. Phím 9 được bật ngoài rule.

13. Giờ Vàng không đúng 5 phút.

14. 24/7 không đúng 15 phút.

15. Attempt schedule không đúng theo program.

16. Giờ Vàng attempt 2 không đúng T0 + 2 phút 30 giây.

17. Giờ Vàng tạo attempt 3.

18. 24/7 attempt 2 không đúng T0 + 5 phút.

19. 24/7 attempt 3 không đúng T0 + 10 phút.

20. 24/7 tạo attempt 4.

21. Gọi ngoài confirmation window.

22. Batch toàn bộ cuộc gọi cuối phiên.

23. Scheduler không deadline-aware.

24. Technical error bị tính no answer.

25. Capacity overload bị tính no answer.

26. SIM Gateway hủy đơn trực tiếp.

27. IVR callback đổi order state trực tiếp.

28. Admin sửa IVR result giả.

29. Admin hủy đơn ngoài Core.

30. AI Advisor tạo IVR call job.

31. AI Advisor tự gửi cancellation notice.

32. Facebook/Messenger/Live gọi IVR trực tiếp.

33. Facebook Gateway tự gửi cancellation notice.

34. CRM dùng IVR cho chăm sóc.

35. CRM dùng cancellation notice như marketing/upsell.

36. Payment dùng IVR xác nhận paid.

37. Warehouse dùng IVR cho xuất kho.

38. MISA dùng IVR để ghi kế toán.

39. PACK-07 dùng IVR result như verified revenue.

40. Downstream phụ thuộc IVR result khi IVR chưa release.

41. Tin nhắn hủy đơn được gửi trước khi Core Order State Machine hủy đơn chính thức.

42. SIM Gateway tự gửi cancellation notice.

43. Technical exception kích hoạt cancellation notice.

44. Capacity incident kích hoạt cancellation notice.

45. Evidence thiếu.

46. Evidence rejected.

47. P0 smoke fail.

48. Security/privacy chưa pass.

49. Owner sign-off thiếu.

50. Release decision thiếu.

51. Completion Report PASS khi thiếu evidence.

Fail Gate ưu tiên an toàn nghiệp vụ, bảo vệ khách hàng, bảo vệ order state, bảo vệ privacy và bảo vệ audit hơn tốc độ triển khai.

**56. RELEASE CONTROL GOVERNANCE**

**56.1. PACK-09 không được Release Ready chỉ vì tài liệu xong**

Hoàn tất tài liệu không đồng nghĩa production ready.

PACK-09 chỉ Release Ready khi có đủ:

1.  Governance complete.

2.  IVR-00 → IVR-05 complete nếu scope yêu cầu.

3.  Implementation complete.

4.  Test complete.

5.  Smoke complete.

6.  Security review complete.

7.  Evidence accepted.

8.  No P0 open.

9.  Downstream dependency review pass.

10. Notification owner boundary pass.

11. Owner sign-off.

12. Release decision approved.

Trước khi đạt đủ, trạng thái vẫn là:

IVR_GATE = BLOCKED  
IVR_PRODUCTION_READY = NO

**56.2. Release status registry**

Các trạng thái release tối thiểu:

1.  RELEASE_NOT_STARTED.

2.  DOCUMENTATION_ACTIVE.

3.  GOVERNANCE_DOCUMENTATION_COMPLETE.

4.  IMPLEMENTATION_NOT_STARTED.

5.  IMPLEMENTATION_IN_PROGRESS.

6.  IMPLEMENTATION_COMPLETE_PENDING_TEST.

7.  TEST_PENDING.

8.  TEST_FAILED.

9.  SMOKE_PENDING.

10. SMOKE_FAILED.

11. SMOKE_PASS_PENDING_EVIDENCE.

12. SECURITY_REVIEW_PENDING.

13. SECURITY_REVIEW_FAILED.

14. EVIDENCE_PENDING.

15. EVIDENCE_REJECTED.

16. EVIDENCE_ACCEPTED.

17. OWNER_REVIEW_PENDING.

18. OWNER_SIGNED_OFF.

19. RELEASE_DECISION_PENDING.

20. RELEASE_APPROVED.

21. RELEASE_BLOCKED.

22. ROLLBACK_REQUIRED nếu có sự cố sau release.

PACK-09 không được nhảy trạng thái.

**56.3. Release blockers P0**

Release bị BLOCKED nếu có một trong các blocker:

1.  Không có Internal SIM Gateway evidence.

2.  Không có DTMF evidence.

3.  Không có Scheduler evidence.

4.  Không có Core boundary evidence.

5.  Không có technical exception evidence.

6.  Không có capacity evidence.

7.  Không có security/privacy evidence.

8.  Không có notification boundary evidence.

9.  Không có smoke evidence.

10. Không có owner sign-off.

11. Có P0 issue open.

12. Có downstream dependency chưa được chặn.

13. Có module dùng IVR result trước release.

14. Có quyền Admin có thể fake result.

15. Có scheduler batch cuối phiên.

16. Có technical error bị map thành no answer.

17. Có cancellation notice gửi trước Core cancellation.

**56.4. Production enablement rule**

Chỉ được bật production khi:

1.  IVR_GATE chuyển từ BLOCKED sang PASS theo release decision.

2.  CALLABLE_IVR_API_ALLOWED_IN_PRODUCTION = YES theo release decision.

3.  REAL_CUSTOMER_CALL_ALLOWED = YES theo release decision.

4.  PRODUCTION_SIM_GATEWAY_ALLOWED = YES theo release decision.

5.  PRODUCTION_ORDER_CANCEL_BY_IVR_ALLOWED = YES theo release decision và Core boundary.

6.  DOWNSTREAM_IVR_DEPENDENCY_ALLOWED = YES theo scope được phê duyệt.

7.  POST_IVR_CANCELLATION_NOTICE_ALLOWED_IN_PRODUCTION = YES theo release decision.

8.  Monitoring active.

9.  Alert active.

10. Rollback plan active.

11. Owner sign-off active.

Nếu chưa có release decision, tất cả vẫn là NO.

**57. ROLLBACK / RECOVERY GOVERNANCE**

**57.1. Rollback không được xóa lịch sử IVR**

Nếu IVR lỗi sau release, rollback không được xóa evidence.

Rollback chỉ được:

1.  Tắt call job mới.

2.  Disable production SIM Gateway.

3.  Stop scheduler.

4.  Disable downstream dependency.

5.  Disable post-cancel notice nếu lỗi liên quan notification.

6.  Chuyển Core handling sang safe mode.

7.  Đưa affected orders vào Admin Review.

8.  Ghi incident.

9.  Giữ toàn bộ call/result/evidence.

10. Retest.

11. Owner review.

Không được xóa log lỗi để làm sạch hệ thống.

**57.2. Khi nào rollback bắt buộc**

Rollback bắt buộc khi:

1.  SIM Gateway gọi sai khách hàng.

2.  Script đọc dữ liệu bị cấm.

3.  Phím 1/0 map sai.

4.  Technical error bị hủy đơn hàng loạt.

5.  Capacity overload bị tính no answer.

6.  Scheduler gọi ngoài window.

7.  Scheduler batch cuối phiên.

8.  Admin sửa được result giả.

9.  SIM Gateway đổi order state trực tiếp.

10. Downstream dùng IVR result sai.

11. Cancellation notice gửi sai điều kiện.

12. Cancellation notice chứa dữ liệu bị cấm.

13. Privacy/security incident.

14. Evidence writer mất dữ liệu.

15. P0 issue phát sinh production.

**57.3. Recovery Done Gate**

Recovery chỉ done khi:

1.  Nguyên nhân lỗi được xác định.

2.  Phạm vi order/call/notice bị ảnh hưởng được khoanh vùng.

3.  Dữ liệu evidence được giữ.

4.  Affected orders được đưa Admin Review nếu cần.

5.  Scheduler/DTMF/Core/Notification boundary được sửa.

6.  Smoke liên quan retest pass.

7.  Evidence mới accepted.

8.  Owner sign-off recovery.

9.  Release/resume decision rõ.

10. No P0 open.

**58. COMPLETION REPORT CONTROL**

**58.1. Completion Report không được PASS nếu PACK-09 thiếu evidence**

Completion Report không được PASS nếu:

1.  PACK-09 là dependency production mà chưa release.

2.  IVR smoke chưa pass.

3.  IVR evidence chưa accepted.

4.  IVR security chưa pass.

5.  IVR Core boundary chưa pass.

6.  IVR technical exception chưa pass.

7.  IVR capacity chưa pass.

8.  Post-IVR cancellation notice smoke chưa pass nếu scope dùng.

9.  Downstream dependency chưa review.

10. Owner sign-off thiếu.

Không được ghi Completion PASS bằng lời xác nhận miệng.

**58.2. Gateway / Production / Go-live status**

Khi PACK-09 chưa đủ release:

GATEWAY_STATUS = BLOCKED  
COMPLETION_REPORT_STATUS = PENDING_EVIDENCE  
PRODUCTION_READY = NO  
RELEASE_APPROVED = NO  
GO_LIVE_APPROVED = NO

Không được dùng PACK-09 documentation complete để gọi toàn hệ production ready.

**59. HANDOFF SANG IVR-00 → IVR-05**

**59.1. IVR-00 — IVR ORDER CONFIRMATION MASTER README**

IVR-00 phải kế thừa:

1.  PACK_09_VERSION = V1.1_CLEAN_FINAL.

2.  Mục tiêu ORDER_CONFIRMATION_ONLY.

3.  Internal SIM Gateway model.

4.  Production blocked.

5.  Source-of-truth boundary.

6.  Core State Machine boundary.

7.  P0 rules.

8.  Release gate.

9.  Evidence requirement.

10. Post-IVR cancellation notice boundary.

**59.2. IVR-01 — ORDER RISK RULE / CUSTOMER TRUST / CALL ELIGIBILITY**

IVR-01 phải khóa:

1.  Đơn nào cần IVR.

2.  Đơn nào không cần IVR.

3.  Điều kiện có order_code.

4.  Điều kiện chương trình Giờ Vàng.

5.  Điều kiện chương trình 24/7.

6.  Điều kiện số điện thoại hợp lệ.

7.  Điều kiện không gọi.

8.  Invalid phone rule.

9.  No answer rule.

10. Technical exception rule.

11. Customer trust/risk rule.

12. Call eligibility gate.

13. Post-IVR cancellation notice eligibility.

**59.3. IVR-02 — IVR CALL JOB / INTERNAL SIM GATEWAY / SCHEDULER / DTMF**

IVR-02 phải khóa:

1.  Call job lifecycle.

2.  SIM channel manager.

3.  One SIM one active call.

4.  Deadline-aware rolling queue.

5.  Golden Hour schedule.

6.  24/7 schedule 3 attempts: T0 / T0 + 5 phút / T0 + 10 phút.

7.  DTMF key 1/0.

8.  Phím 9 NOT_ENABLED.

9.  No duplicate call job.

10. Capacity incident.

**59.4. IVR-03 — CALL RESULT / ORDER STATE / CANCEL / RELEASE BOUNDARY**

IVR-03 phải khóa:

1.  IVR result taxonomy.

2.  Result normalization.

3.  Core signal.

4.  Core response.

5.  Cancel reason.

6.  IVR_CONFIRMED.

7.  IVR_CUSTOMER_CANCELLED.

8.  IVR_NO_ANSWER_FINAL.

9.  IVR_CONFIRMATION_WINDOW_EXPIRED.

10. Technical exception boundary.

11. Order state transition audit.

12. Post-IVR Cancellation Notice Trigger.

13. Notification owner boundary.

14. No-answer vs invalid-phone vs technical-exception distinction.

**59.5. IVR-04 — ADMIN UI / MONITORING / AUDIT / EVIDENCE**

IVR-04 phải khóa:

1.  Admin dashboard.

2.  Call job view.

3.  SIM channel view.

4.  Capacity incident view.

5.  Technical exception view.

6.  Audit evidence.

7.  Permission.

8.  Không fake result.

9.  Không hủy đơn ngoài Core.

10. Evidence review.

11. Post-IVR cancellation notice evidence.

12. Notification owner audit.

13. Cancellation notice delivery status nếu có.

**59.6. IVR-05 — IVR TEST MATRIX / SMOKE / SECURITY / RELEASE GATE**

IVR-05 phải khóa:

1.  IVR-SMK-001 → IVR-SMK-025.

2.  Positive path.

3.  Negative path.

4.  Security test.

5.  Privacy test.

6.  Capacity test.

7.  DTMF test.

8.  Core boundary test.

9.  Downstream dependency test.

10. Release gate.

11. Post-IVR cancellation notice smoke.

12. Technical exception no-notice smoke.

13. Notification owner boundary smoke.

14. 24/7 three-attempt schedule smoke.

**60. PACK-09 FINAL DONE GATE**

**60.1. Documentation Done**

PACK-09 được xem là hoàn tất tài liệu khi có đủ 4 phần:

1.  PHẦN 1/4 — IVR Order Confirmation Principles / Internal SIM Gateway / Source-of-Truth Boundary / No-Bypass Rule.

2.  PHẦN 2/4 — Call Script / DTMF / Program Window / Golden Hour / 24-7 / Deadline-Aware Scheduler.

3.  PHẦN 3/4 — Call Result / Technical Exception / Capacity Baseline / Cross-Pack Control / Engineer Handoff.

4.  PHẦN 4/4 — P0 Rules / Smoke Matrix / IVR Evidence / Done Gate / Fail Gate / Release Control / Final Conclusion.

Trạng thái:

PACK_09_GOVERNANCE_STATUS = CLEAN_FINAL

**60.2. Implementation Done**

Implementation Done chỉ được gọi khi:

1.  Internal SIM Gateway triển khai xong.

2.  SIM channel manager triển khai xong.

3.  Call job queue triển khai xong.

4.  Deadline-aware scheduler triển khai xong.

5.  DTMF capture triển khai xong.

6.  Call result normalizer triển khai xong.

7.  Order State Machine adapter triển khai xong.

8.  Audit/evidence writer triển khai xong.

9.  Capacity incident monitor triển khai xong.

10. Admin monitoring triển khai xong.

11. Notification owner handoff triển khai xong nếu scope dùng.

12. Security/privacy pass.

13. Smoke pass.

14. Evidence accepted.

**60.3. Smoke Done**

Smoke Done chỉ được gọi khi:

1.  IVR-SMK-001 đến IVR-SMK-025 được test.

2.  Positive path pass.

3.  Negative path pass.

4.  No P0 smoke fail.

5.  Retest pass nếu có lỗi.

6.  Evidence accepted cho từng smoke.

7.  Owner review pass.

**60.4. IVR PASS**

IVR PASS chỉ được gọi khi:

1.  Governance Done Gate pass.

2.  Implementation Done Gate pass.

3.  Call Script Done Gate pass.

4.  DTMF Done Gate pass.

5.  Scheduler Done Gate pass.

6.  Capacity Done Gate pass.

7.  Core Boundary Done Gate pass.

8.  Technical Exception Done Gate pass.

9.  Cross-Pack Done Gate pass.

10. Security/Privacy Done Gate pass.

11. Post-IVR cancellation notice gate pass nếu scope dùng.

12. Smoke Done.

13. Evidence accepted.

14. No P0 open.

15. Owner sign-off.

**60.5. Release Ready**

PACK-09 Release Ready chỉ được gọi khi:

1.  IVR PASS.

2.  IVR-00 → IVR-05 hoàn tất theo scope.

3.  Production SIM Gateway ready.

4.  Real customer call policy approved.

5.  Monitoring/alert active.

6.  Rollback plan active.

7.  Downstream dependency approved theo scope.

8.  Notification owner production policy approved nếu scope dùng.

9.  Completion evidence accepted.

10. Owner sign-off.

11. Release decision approved.

**61. FINAL STATUS**

**61.1. Trạng thái cuối tài liệu**

PACK_09_GOVERNANCE_STATUS = CLEAN_FINAL  
PACK_09_NAME = IVR_ORDER_CONFIRMATION  
PACK_09_VERSION = V1.1_CLEAN_FINAL  
PACK_09_DEPLOYMENT_MODEL = INTERNAL_SIM_GATEWAY_SERVER

**61.2. Trạng thái triển khai**

PACK_09_IMPLEMENTATION_STATUS = NOT_STARTED

**61.3. Trạng thái gate**

IVR_GATE = BLOCKED  
IVR_PRODUCTION_READY = NO  
CALLABLE_IVR_API_ALLOWED_IN_PRODUCTION = NO  
DOWNSTREAM_IVR_DEPENDENCY_ALLOWED = NO

**61.4. Trạng thái toàn hệ**

GATEWAY_STATUS = BLOCKED  
COMPLETION_REPORT_STATUS = PENDING_EVIDENCE  
PRODUCTION_READY = NO  
RELEASE_APPROVED = NO  
GO_LIVE_APPROVED = NO

**KẾT LUẬN CUỐI PACK-09**

PACK-09 là pack chính thức cho **IVR_ORDER_CONFIRMATION** của hệ thống Ginsengfood.

PACK-09 triển khai theo mô hình:

INTERNAL_SIM_GATEWAY_SERVER

PACK-09 phục vụ một mục đích duy nhất:

ORDER_CONFIRMATION_ONLY

PACK-09 không phải kênh bán hàng.

PACK-09 không phải CRM.

PACK-09 không phải chăm sóc khách hàng.

PACK-09 không phải marketing.

PACK-09 không phải Payment Core.

PACK-09 không phải Delivery Core.

PACK-09 không phải Warehouse.

PACK-09 không phải MISA.

PACK-09 không phải AI Advisor.

PACK-09 không phải Facebook Gateway.

PACK-09 không phải Ads/ROAS.

PACK-09 chỉ gọi tự động xác nhận đơn hàng bằng SIM Gateway nội bộ.

PACK-09 dùng phím:

**1 = khách xác nhận tiếp tục xử lý đơn.**  
**0 = khách không đặt hoặc muốn hủy đơn.**

Phím 9 hỗ trợ người thật hiện:

NOT_ENABLED

Giờ Vàng:

**5 phút / 2 attempts / attempt interval 2 phút 30 giây.**

24/7:

**15 phút / 3 attempts / lịch gọi T0, T0 + 5 phút, T0 + 10 phút.**

Scheduler bắt buộc:

DEADLINE_AWARE_ROLLING_QUEUE

Batch cuối phiên:

PROHIBITED

Nguyên tắc khóa cuối cùng của PACK-09:

**Internal SIM Gateway là mô hình chính thức.**  
**1 SIM = 1 active outbound call.**  
**IVR chỉ xác nhận đơn hàng.**  
**IVR result chỉ là input signal.**  
**Core Order State Machine là final decision layer.**  
**SIM Gateway không cập nhật order trực tiếp.**  
**Admin không được sửa IVR result giả.**  
**Phím 1 xác nhận, phím 0 hủy.**  
**Phím 9 không bật trong scope hiện tại.**  
**Giờ Vàng 5 phút / 2 attempts.**  
**24/7 15 phút / 3 attempts.**  
**Attempt schedule theo program: Giờ Vàng 2 phút 30 giây; 24/7 mỗi 5 phút.**  
**Technical error không phải khách không nghe.**  
**Capacity overload không phải lỗi khách.**  
**Invalid phone không được nhầm với no answer.**  
**No answer là máy có tín hiệu gọi hợp lệ nhưng khách không nghe sau đủ attempts theo program.**  
**Không batch cuối phiên.**  
**Không downstream dependency trước release.**  
**Post-IVR cancellation notice chỉ được gửi sau khi Core Order State Machine đã hủy đơn chính thức.**  
**SIM Gateway không được gửi tin nhắn hủy đơn.**  
**AI Advisor không được tự gửi tin nhắn hủy đơn.**  
**CRM không được dùng tin nhắn hủy đơn như marketing hoặc upsell.**  
**Technical exception không kích hoạt cancellation notice.**  
**Capacity incident không kích hoạt cancellation notice.**  
**Không có test/smoke/security/evidence thì không release.**  
**Không có evidence accepted thì không PASS.**

PACK-09 hoàn tất về mặt governance/documentation, nhưng chưa được gọi là triển khai xong, chưa được gọi là IVR PASS, chưa được gọi là Release Approved và chưa được gọi là Production Ready nếu chưa có implementation, test, smoke, security, accepted evidence, owner sign-off và release decision.
