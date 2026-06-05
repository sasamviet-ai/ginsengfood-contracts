# P4 - Addendum AI Advisor Practical Runtime Lock

Ngày lập: 2026-06-05  
Phạm vi đọc: PACK-05, TECH-05, Phase 4 AI Advisor Runtime và 6 file bổ sung trong `docs/documents/5. bo sung/`.  
Mục tiêu: đánh giá tài liệu hiện tại đã đáp ứng đến mức nào so với yêu cầu tư vấn bán hàng thực chiến, đồng thời khóa thêm những phần dev phải có để triển khai không hiểu sai.

## 1. Kết luận ngắn

Tài liệu hiện tại đã đạt mức **khóa chính sách và nghiệp vụ khá mạnh**. Bộ tài liệu đã có runtime-first, Customer Memory, QuoteSnapshot, Order Draft, member lifecycle, quy tắc 3 trụ sản phẩm, shipping/payment guard, privacy guard, tách affiliate với đại lý, và trạng thái Gateway blocked.

Tuy nhiên, tài liệu **chưa đủ mức implementation-ready hoàn chỉnh** cho toàn bộ yêu cầu thực chiến. Lý do là nhiều nội dung đang ở mức rule, lock hoặc mẫu tin nhắn, nhưng chưa đủ contract dữ liệu, state machine, input/output resolver, bảng ưu tiên, template render và P0 test matrix để dev code đúng ngay.

Đánh giá mức độ hiện tại:

| Nhóm năng lực | Mức đạt hiện tại | Kết luận |
| --- | ---: | --- |
| Nguồn sản phẩm, giá, chương trình, tồn trong ngày | 65% | Đã có runtime và QuoteSnapshot, nhưng thiếu DailySalesContext contract |
| Biết khách là ai: mới/cũ, đã mua gì, hạng gì, quyền lợi gì | 75% | Nền tốt trong PACK/TECH/Phase 4, cần bổ sung payload tối thiểu và fallback |
| Hiểu nhu cầu và gợi ý combo theo 3 trụ | 70% | Đã khóa rule, cần ma trận vai trò 20 sản phẩm và decision tree |
| Chay/mặn, người già, trẻ em, biếu tặng, dân văn phòng, du lịch, Việt kiều, học sinh/sinh viên/du học sinh | 60% | Đã có situation locks, nhưng chưa đủ product-role matrix |
| Phân biệt người mua nhiều với người muốn làm đại lý/nhà phân phối | 70% | Đã có rule tách Affiliate/Diamond/đại lý, cần threshold và handoff contract |
| Lập báo giá tạm tính, lập đơn, chúc mừng, chăm sóc sau mua | 75% | Quote/Order và CRM có nền tốt, còn thiếu transition đầy đủ đến fulfillment |
| Vận chuyển, ETA, tracking | 65% | Có ShippingResolver/Delivery Runtime, thiếu response map theo trạng thái |
| Chốt đơn khi nào, chuyển xuất kho/giao hàng ra sao | 45% | Có IVR/payment/fulfillment guard, nhưng thiếu state machine từ quote đến warehouse/carrier |
| Cụm 3 chấm đang gõ theo độ dài nội dung | 20% | Mới có ý tưởng chung, chưa có policy tính thời gian |
| Không lộ nội bộ, không nói "hệ thống", không nói SKU với khách | 60% | Rule đã có, nhưng file message 3 và 6 vẫn còn text customer-facing vi phạm |

Kết luận giao dev: **chưa nên để dev build thẳng Gateway/production flow từ bộ tài liệu hiện tại**. Nên giao theo từng lane: cập nhật FILE 01/02/03/04/05/07/09/10/12 và Phase 4, kèm P0 smoke bắt buộc.

## 2. Những phần hiện đã khóa tốt

1. PACK-05 đã xác định AI Advisor là lớp tư vấn, bán hàng, chăm sóc và chốt đơn có kiểm soát. AI phải dùng Product Knowledge, Customer Memory, Runtime Pricing/Promotion/Stock/Member Benefit và Quote/Order Handoff.
2. TECH-05 đã khóa AI Advisor Runtime là downstream của Product, Operational và Commerce. AI không được tự tính giá, tồn, trạng thái bán được, đơn hàng, thanh toán, vận chuyển hoặc hoa hồng.
3. Phase 4 đã có thứ tự handoff: runtime consumer contract, customer memory resolver, product orchestrator, quote/order draft, safety wording guard, channel handoff và smoke evidence.
4. File bổ sung 1 đã khóa CORE-01 đến CORE-20, đặc biệt là customer context first, QuoteSnapshot, OrderConfirmationDraft, CRM 12 tháng, member lifecycle, 3 trụ cộng người thân, cross-channel dedup và outcome logger.
5. File bổ sung 2 đã mở rộng các tình huống đời sống AI-TEST-NOTE-076 đến 096: sức khỏe, biếu tặng, văn phòng/sinh viên, overseas, sản phẩm chay, inventory priority, IVR fake order, shipping ETA, payment, hướng dẫn dùng/bảo quản, đổi trả/hoàn tiền, sửa đơn, VAT, mua nhiều, privacy, hàng giả.
6. File bổ sung 4 đã khóa chính sách member: chu kỳ 12 tháng, ngưỡng hạng, 50% duy trì, ân hạng 60 ngày, 24/7, Giờ Vàng, quyền lợi Diamond, hoa hồng, không cộng dồn và QuoteSnapshot.
7. File bổ sung 5 đã khóa CRM 12 tháng và member lifecycle automation, gồm runtime variables, event registry, quiet hours, frequency cap, retry/fail policy và P0 matrix.

## 3. Khoảng trống cần khóa thêm

### 3.1. DailySalesContext - sản phẩm, tồn, giá, chương trình trong ngày

Tài liệu hiện tại đã nói AI không được tự tính giá/tồn và phải dùng runtime. Nhưng vẫn chưa có contract rõ cho câu hỏi: "Hôm nay đang bán gì, còn gì, giá niêm yết bao nhiêu, giá chương trình thế nào, quyền lợi thành viên nào áp dụng?"

Cần thêm lock:

```yaml
DAILY_SALES_CONTEXT_LOCK:
  source: Commerce Runtime + Product Public Catalog + Operational Sellable
  required_fields:
    - business_date
    - channel
    - active_programs
    - program_time_window
    - product_public_name
    - public_category
    - dietary_type: vegan | non_vegan | mixed | unknown
    - target_roles: seasonal | functional | nourishing | gift | elderly | child | office | travel | overseas
    - listed_price_display
    - program_price_display
    - member_benefit_eligible
    - diamond_benefit_eligible
    - sellable_status
    - public_stock_state: available | low | sold_out | not_sellable
    - quote_eligible
  fail_closed:
    - Không báo giá nếu thiếu QuoteSnapshot
    - Không nói còn hàng nếu thiếu sellable_status
    - Không nói "SKU"; chỉ nói product_public_name hoặc tên sản phẩm công khai
```

P0 tests cần có:

- Khách hỏi "hôm nay bán gì" thì AI chỉ trả danh sách sản phẩm public và sellable.
- Khách hỏi "giá hôm nay" thì AI route QuoteSnapshot, có giá niêm yết, giá chương trình, quyền lợi member, ship, VAT và tổng cuối khi đủ dữ liệu.
- Chương trình đã hết hạn thì AI không dùng giá cũ.
- Stock low/sold out thì AI gợi ý sản phẩm thay thế cùng vai trò, không bán sản phẩm bị khóa.

### 3.2. CustomerAdvisoryContext - biết khách là ai trước khi tư vấn

Tài liệu đã có Customer Memory, nhưng cần đóng gói payload tối thiểu để dev không hỏi vòng, không hỏi lại dữ liệu đã có, và không để AI tự suy diễn lịch sử mua.

Cần thêm lock:

```yaml
CUSTOMER_ADVISORY_CONTEXT_LOCK:
  identity:
    - customer_type: guest | new_unregistered_buyer | registered_new | returning_buyer | member | diamond | agency_candidate
    - verified_contact_level
    - channel_identity
  purchase_memory:
    - has_verified_purchase
    - last_purchase_date_display
    - last_purchase_product_public_names
    - last_purchase_recipient_profile
    - last_purchase_purpose
    - last_feedback_summary_public_safe
  member_memory:
    - member_tier_display
    - accumulated_valid_revenue_display
    - amount_to_next_tier_display
    - amount_to_maintain_tier_display
    - days_to_cycle_end_display
    - grace_status
  guards:
    - privacy_allowed
    - open_case_status
    - opt_out_status
    - dietary_allergy_flags
  fail_closed:
    - Nếu thiếu member runtime thì không nói quyền lợi member
    - Nếu thiếu lịch sử mua thì không nói "lần trước"
    - Nếu ở public channel thì không lộ lịch sử mua, số điện thoại hoặc địa chỉ
```

P0 tests cần có:

- Khách cũ từng mua cho mẹ: AI hỏi thăm sản phẩm trước có hợp không, rồi mới gợi ý tiếp.
- Khách mới chưa mua: AI không giả lập lịch sử.
- Khách có doanh số nhưng chưa đăng ký: AI chỉ nói doanh số/quyền lợi khi runtime có biến hợp lệ.
- Khách có open complaint/refund/privacy case: AI dừng bán hàng và dừng CRM push.

### 3.3. ProductRoleMatrix cho 20 sản phẩm

Quy tắc 3 trụ đã có, nhưng từng sản phẩm cần có ma trận vai trò rõ. Nếu không, dev hoặc model sẽ phải đoán "mua cho ai thì gợi ý sản phẩm gì".

Cần thêm file hoặc section:

```yaml
PRODUCT_ROLE_MATRIX_LOCK:
  per_product_required_fields:
    - product_public_name
    - public_category
    - pillar_role: seasonal | functional | nourishing
    - dietary_type
    - suitable_for:
        - elderly
        - child
        - office_worker
        - travel
        - gift
        - overseas_vietnamese
        - student
        - international_student
        - recovery
    - gender_family_addon:
        female_context: tissue_nourishing | beauty_support | gentle_nourish
        male_context: vitality_support | energy_support
        elderly_context: calcium_support | recovery_support
    - eastern_effectiveness_summary
    - avoid_if
    - substitute_products
```

P0 tests cần có:

- Khách hỏi sản phẩm chay: AI chỉ gợi ý sản phẩm có dietary_type vegan.
- Người già: AI gợi ý nhóm bổ dưỡng/phục hồi/canxi nếu Product Knowledge công khai cho phép.
- Trẻ em: AI phải qua HealthSafetyGuard và child-sensitive guard trước khi gợi ý.
- Dân văn phòng: AI gợi ý sản phẩm tiện, nhẹ bụng, hỗ trợ năng lượng; không nói claim y khoa.
- Việt kiều/du học sinh: AI xét hương vị quê nhà, tính tiện mang đi, shipping/export eligibility.
- Biếu/tặng doanh nghiệp: AI phân biệt quà tặng số lượng lớn với đại lý/nhà phân phối.

### 3.4. RecommendationDecisionTree - không chỉ là slogan 3 trụ

Cần thêm decision tree:

1. Resolve identity/context.
2. Resolve nhu cầu, người nhận và mục đích mua.
3. Apply safety guard: health, child, pregnancy, allergy, dietary.
4. Get DailySalesContext.
5. Filter sellable và public-safe.
6. Select 3 trụ:
   - 1 sản phẩm theo mùa.
   - 1 sản phẩm chức năng.
   - 1 sản phẩm bổ dưỡng.
7. Add family/gender/age context nếu có:
   - Nữ: dưỡng mô, chăm sóc sắc vóc, bổ nhẹ.
   - Nam: hỗ trợ sinh lực/năng lượng nếu public-safe.
   - Người già: hỗ trợ canxi, phục hồi, bổ dưỡng nếu product role cho phép.
8. Explain reason bằng tên sản phẩm và hiệu dụng public-safe.
9. Nếu khách hỏi giá hoặc muốn chốt: tạo QuoteSnapshot.
10. Nếu khách đồng ý: render Order Draft và capture thông tin còn thiếu.

Priority bắt buộc:

```yaml
RECOMMENDATION_PRIORITY:
  1_health_safety
  2_privacy_open_case
  3_dietary_allergy
  4_sellable_sale_lock_recall
  5_customer_need
  6_product_role_fit
  7_inventory_priority
  8_business_campaign
```

Inventory priority không được thắng health, dietary hoặc safety.

### 3.5. Quote -> Order -> Fulfillment state machine

Tài liệu có QuoteSnapshot và OrderDraft, nhưng cần khóa trạng thái từ "chốt đơn" đến "xuất kho" và "giao hàng" để AI không nói sai.

Cần thêm state lock:

```yaml
QUOTE_ORDER_FULFILLMENT_LOCK:
  states:
    - CUSTOMER_INTERESTED
    - QUOTE_REQUESTED
    - QUOTE_SNAPSHOT_CREATED
    - ORDER_DRAFT_RENDERED
    - CUSTOMER_CONFIRMED
    - ORDER_CODE_CREATED
    - PAYMENT_PENDING
    - PAYMENT_CONFIRMED
    - FULFILLMENT_NOT_RELEASED
    - READY_FOR_FULFILLMENT
    - WAREHOUSE_RELEASED
    - HANDED_TO_CARRIER
    - IN_DELIVERY
    - DELIVERED
    - DELIVERY_EXCEPTION
    - CANCELLED
  forbidden_ai_claims:
    - Không nói "đã đặt đơn" nếu chưa có order_code
    - Không nói "đã thanh toán" nếu Payment Core chưa confirmed
    - Không nói "đã xuất kho" nếu Warehouse/Fulfillment Runtime chưa released
    - Không nói "đang giao" hoặc "đã giao" nếu Delivery Runtime chưa có state tương ứng
```

Chốt đơn bắt buộc:

- Nếu khách nói "mua", "chốt", "lấy combo này": render QuoteSnapshot và OrderDraft.
- Nếu khách cũ có saved_address_permission: render form prefill với CTA Xác nhận đơn và Sửa thông tin.
- Nếu khách mới hoặc thiếu thông tin: capture tên người nhận, số điện thoại, địa chỉ và phương thức thanh toán.
- Sau customer confirmation: mới tạo official order/order_code qua Commerce.
- Sau payment/IVR/confirmation pass: mới release fulfillment theo policy.

### 3.6. Shipping ETA response map

File bổ sung 2 đã khóa ShippingResolver, DeliveryTrackingResolver và DeliveryETAResolver, nhưng cần response map theo state.

Cần thêm:

```yaml
SHIPPING_RESPONSE_LOCK:
  states:
    SHIPPING_INFO_MISSING:
      action: hỏi thông tin địa chỉ tối thiểu ở private channel
    SHIPPING_INFO_AVAILABLE_NO_TRACKING:
      action: trả ETA fallback theo DeliveryRegionFallbackResolver
    TRACKING_AVAILABLE:
      action: trả trạng thái giao hàng public-safe và ETA
    HANDED_TO_CARRIER:
      action: chỉ nói đơn đã bàn giao vận chuyển nếu runtime xác nhận
    DELIVERY_EXCEPTION:
      action: route delivery support, không đổ lỗi cho khách hoặc đơn vị vận chuyển
  must_not:
    - Không hỏi lại địa chỉ nếu đơn đã có shipping info
    - Không hứa giao trong X giờ nếu ETA resolver không có dữ liệu
    - Không public mã đơn, địa chỉ hoặc số điện thoại ở public comment
```

### 3.7. Message canonicalization và cấm từ customer-facing

File 1 và Phase 4 đã khóa "không dùng từ nội bộ với khách". Nhưng file message 3 và 6 vẫn còn nhiều customer-facing text dùng "hệ thống", "SKU" hoặc biến nội bộ. Trước khi giao dev render tin nhắn, phải chọn một nguồn message canonical và chạy Final Customer-Facing Language Guard.

Cần thêm:

```yaml
CUSTOMER_FACING_LANGUAGE_GUARD_LOCK:
  banned_customer_terms:
    - hệ thống
    - SKU
    - resolver
    - runtime
    - core
    - gateway
    - QuoteSnapshot
    - internal
    - nội bộ
    - cost
    - supplier
    - MISA
    - audit
  replacements:
    hệ_thống: "bên Em" | "Em kiểm tra theo hồ sơ của Mình" | "theo chính sách hiện hành"
    SKU: product_public_name
  enforce_on:
    - live_comment
    - messenger
    - web_chat
    - CRM_message
    - IVR_text
    - notification
```

Việc cần làm với file 3 và file 6:

- File 3 và 6 đang trùng tiêu đề "Hệ thống tin nhắn Giờ Vàng".
- Chọn 1 file làm canonical, file còn lại chuyển thành phụ lục/reference.
- Mỗi message cần gắn `message_code`, `trigger`, `eligible_segment`, `required_variables`, `frequency_cap`, `quiet_hour_policy`, `public_private_scope`, `language_guard_status`.
- Thay thế toàn bộ câu customer-facing có "hệ thống".
- Không render `quota_per_sku` thành "SKU"; nếu cần nói với khách thì dùng "mỗi sản phẩm", "mỗi dòng sản phẩm" hoặc tên sản phẩm cụ thể.

### 3.8. Typing indicator / cụm 3 chấm đang gõ

Phase 4 hiện chỉ nói có thể dùng typing indicator/delay theo độ dài nội dung nếu channel policy cho phép. Phần này chưa đủ để dev triển khai.

Cần thêm:

```yaml
TYPING_DELAY_POLICY_LOCK:
  enabled_if:
    - channel_supports_typing_indicator = true
    - channel_policy_allows_delay = true
    - message_is_customer_facing = true
  formula:
    base_ms: 1200
    per_character_ms: 28
    min_ms: 1500
    max_ms: 9000
    long_message_chunk_threshold_chars: 650
  behavior:
    - Chia message dài thành 2-3 chunk khi cần
    - Hủy typing indicator khi khách gửi tin mới
    - Không delay lâu cho lỗi, thanh toán, khiếu nại, privacy hoặc health-sensitive context
    - Log typing_delay_decision_ms vào audit/evidence
  fail_safe:
    - Nếu channel không hỗ trợ typing indicator thì gửi bình thường
    - Không giả lập typing trong public comment nếu policy không cho phép
```

P0 tests:

- Message ngắn dưới 120 ký tự: 1.5-3 giây.
- Message tư vấn combo dài: 5-9 giây hoặc chia chunk.
- Khách gửi tin mới khi đang typing: cancel và recompute.
- Complaint/payment/privacy: ưu tiên trả lời nhanh, không câu giờ.

## 4. Mapping cần giao dev vào file nào

| Cần bổ sung | File đích |
| --- | --- |
| DailySalesContext | FILE 03 data contract, FILE 04 resolver/runtime contract, FILE 09 tests |
| CustomerAdvisoryContext minimum payload | FILE 01 parent logic, FILE 03 schema, FILE 04 resolver, Phase 4 P4-2B |
| ProductRoleMatrix 20 sản phẩm | FILE 02 Product Knowledge, FILE 03 schema, FILE 04 ProductRecommendationResolver |
| RecommendationDecisionTree + priority | FILE 01, FILE 04, FILE 10 Situation Registry, FILE 12 Human-level Sales |
| Quote/Order/Fulfillment state machine | FILE 04, FILE 05 implementation DTO/state, FILE 09 tests, Phase 4 P4-2D |
| Shipping ETA response map | FILE 04, FILE 05, FILE 07 template, FILE 09 tests |
| Customer-facing language guard | FILE 06 Safety/Public Wording, FILE 07 content blocks, FILE 09 exact-match tests |
| CRM/message canonicalization | FILE 07, FILE 10, FILE 09, CRM worker |
| Typing indicator policy | FILE 07/Channel behavior, Phase 4 P4-2F, FILE 09 tests |

## 5. Done gate tối thiểu trước khi được coi là đạt yêu cầu

Không được gọi "đạt" nếu thiếu bất kỳ P0 nào sau:

1. AI đọc được DailySalesContext và trả lời hôm nay bán sản phẩm gì, giá nào, chương trình nào, public stock state nào.
2. AI resolve được CustomerAdvisoryContext cho guest, khách mới, khách cũ, member, Diamond, và khách có doanh số nhưng chưa đăng ký.
3. AI không hỏi lại thông tin runtime đã có.
4. AI không biết thì fail-safe, không bịa giá, hàng, quyền lợi, lịch sử mua, ETA, payment hoặc xuất kho.
5. AI gợi ý theo 3 trụ cộng addon giới tính/người thân/người nhận khi có context.
6. AI lọc chay/mặn, tuổi, người già, trẻ em, health-sensitive, allergy/dietary trước khi gợi ý.
7. AI phân biệt mua lẻ, mua nhiều, quà tặng doanh nghiệp, ý định làm đại lý/nhà phân phối, affiliate và Diamond.
8. QuoteSnapshot có line-by-line: tên sản phẩm, giá niêm yết, giá chương trình, quyền lợi member/Diamond, ship/COD/VAT, tổng, hạn giữ giá.
9. Order Draft có prefill/capture, CTA Xác nhận đơn/Sửa thông tin, và không tạo đơn nếu thiếu customer confirmation.
10. State machine có proof: order_code, payment status, fulfillment release, warehouse/carrier/delivery status.
11. Shipping response dùng ShippingResolver/Delivery Runtime, không hỏi lại địa chỉ nếu đã có shipping info.
12. CRM sau mua chạy theo delivered/paid policy, opt-out, frequency cap, quiet hours và open-case suppression.
13. Customer-facing output không có "hệ thống", "SKU", "runtime", "resolver", "QuoteSnapshot", "nội bộ".
14. Typing indicator có delay policy, max cap, cancel/recompute và evidence log.
15. Gateway vẫn BLOCKED cho đến khi evidence và owner sign-off pass.

## 6. Đề xuất phạm vi giao dev ngay

Không nên gộp toàn bộ vào một PR. Nên chia thành 4 PR/lane:

1. **Context + Daily Runtime PR**: DailySalesContext, CustomerAdvisoryContext, public-safe filters, fail-closed behavior.
2. **Recommendation PR**: ProductRoleMatrix 20 sản phẩm, 3-trụ decision tree, dietary/health/gift/office/overseas locks.
3. **Quote/Order/Shipping PR**: QuoteSnapshot renderer, OrderDraft, fulfillment state, shipping ETA response map.
4. **CRM/Message/Language/Typing PR**: canonical message registry, no-internal-term guard, CRM frequency/suppression, typing delay policy.

Mỗi PR phải có P0 test riêng. Không cho pass bằng doc-only statement.

## 7. Verdict cuối

Các tài liệu bổ sung hiện tại **đủ làm nguyên liệu để viết lại tài liệu kỹ thuật**, nhưng **chưa đủ cho dev triển khai sản xuất nếu chỉ đọc nguyên 6 file ban đầu**.

Cần khóa thêm các mục trên vào FILE 01/02/03/04/05/07/09/10/12 và Phase 4. Sau khi có contract, test matrix và evidence, mới có thể nói AI Advisor đạt yêu cầu: biết sản phẩm/giá/tồn trong ngày, biết khách là ai, tư vấn theo hành trình mua, gợi ý combo đúng quy tắc, lập báo giá/đơn hàng, trả lời vận chuyển, chuyển fulfillment đúng trạng thái, chăm sóc sau mua và không lộ nội bộ.
