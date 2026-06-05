# MASTER-08 - CROSS-SYSTEM DECISION LOG

## Mục Đích

MASTER-08 khóa danh sách owner decision bắt buộc sau vòng bổ sung tài liệu Facebook Ads, Live Commerce, AI Advisor Facebook Completion, SKU/BOM/G1, phiếu vận hành, thành viên, Diamond, Finance và IVR.

Tài liệu này không tự chọn thay owner. Vai trò của MASTER-08 là ghi rõ điểm đang xung đột, trạng thái runtime tạm thời, phạm vi bị chặn và gói bằng chứng cần có trước khi dev được triển khai hoặc mở gateway.

## Trạng Thái

| Nhóm | Trạng thái |
| --- | --- |
| Document status | DOCUMENTATION_ACTIVE |
| Direct implementation status | BLOCKED_FOR_OWNER_DECISIONS |
| Gateway status | BLOCKED |
| Completion report status | PENDING_EVIDENCE |
| Production claim | NOT_ALLOWED |

## Nguyên Tắc Áp Dụng

1. P0 decision chưa chốt thì downstream không được tự chọn một nhánh.
2. Nếu giá, giờ live, vegan, formula active hoặc Page registry chưa sạch, AI/Gateway/CRM/Ads/Live/IVR không được hardcode runtime rule.
3. Quote, order, member benefit, Diamond commission, Ads/ROAS và MISA handoff chỉ được dùng policy version đã owner-approved.
4. Completion Report hoặc tài liệu gate chỉ được PASS khi có evidence thật, không PASS bằng câu kết luận tài liệu.
5. Gateway production chỉ được mở khi tất cả P0 gate trong AI Advisor Facebook Completion Report PASS và owner sign-off PASS.

## Source Evidence Đã Rà

| Nhóm source | File nguồn |
| --- | --- |
| Financial baseline | `4. phase/phase-5/TÀI LIỆU BỔ SUNG/00. GINSENGFOOD — BUSINESS & ADS FINANCIAL BASELINE LOCK.md` |
| Pricing / Golden Hour / Diamond model mới | `4. phase/phase-5/TÀI LIỆU BỔ SUNG/GINSENGFOOD — MÔ HÌNH GIÁ - GIỜ VÀNG TRI ÂN - DOANH THU LIVE - ADS - DIAMOND.md` |
| Gateway completion gate | `4. phase/phase-5/TÀI LIỆU BỔ SUNG/AI_ADVISOR_FACEBOOK_COMPLETION_REPORT.md` |
| Facebook page list | `4. phase/phase-5/TÀI LIỆU BỔ SUNG/DANH SÁCH FACEBOOK (AI).md` |
| Facebook implementation sequence | `4. phase/phase-5/TÀI LIỆU BỔ SUNG/TRÌNH TỰ TRIỂN KHAI TIẾP THEO.md` |
| Member / 24/7 / Golden Hour policy cũ | `5. bo sung/4. chính sách và hoa hồng thành viên.md` |
| Product / formula / vegan source | `4. phase/phase-1/BỘ KHÓA 5 BƯỚC.md` và `4. phase/phase-1/CÔNG THỨC VẬN HÀNH 20 SKU MỚI.MD` |
| Product master formula governance | `2. pack/02-PACK-02-PRODUCT-MASTER-SKU-RECIPE-ACTIVATION.md` |
| IVR source | `2. pack/09-PACK-09-IVR-ORDER-CONFIRMATION.md` và `4. phase/phase-8/*` |

## P0 Owner Decision Register

| Decision ID | Domain | Conflict / Gap | Runtime stance trước khi owner chốt | Downstream bị chặn |
| --- | --- | --- | --- | --- |
| PRICE-POLICY-DECISION-001 | 24/7 pricing | Member policy cũ khóa 24/7 mở bán 9%, dưới 50 sản phẩm/ngày 12%, từ 50 trở lên 9%; pricing model mới khóa dưới 50 hộp/ngày 9%, từ 50 trở lên 5%. | Không hardcode 12/9 hoặc 9/5. ProgramPriceResolver phải trả `POLICY_PENDING` nếu chưa có `price_policy_version` owner-approved. | Commerce quote, AI báo giá, CRM reorder, Gateway quote, Ads financial model, Diamond buyer benefit. |
| GOLDEN-HOUR-TIME-DECISION-001 | Golden Hour schedule | Member policy cũ khóa 12h15-13h00 và 20h15-21h00; pricing model mới khóa 12h00-12h45 và 20h00-20h45. | Không schedule live/reminder/early access/quote hold theo một nhánh rời rạc. GoldenHourResolver phải cần `golden_hour_policy_version`. | Ads schedule, Live board, CRM reminder, member early access, Gateway context, IVR timing assumptions, QuoteSnapshot expiry. |
| VEGAN-FORMULA-DECISION-001 | Vegan / dietary claim | Một số SKU ghi Thuần chay/vegan nhưng G1 formula có lòng trắng trứng; nhiều nền nước hầm có xương heo/lòng trắng trứng. | SKU có claim vegan phải bị `DIETARY_CLAIM_BLOCKED` nếu ingredient list hoặc broth base chứa thành phần động vật chưa được owner sửa. | Product Master, AI recommendation, claim guard, label/packaging, Live script, Ads claim, public wording. |
| FORMULA-VERSION-DECISION-001 | G0/G1 active formula | Bộ khóa 5 bước dùng G0/ACTIVE_PILOT cho operational config; công thức vận hành mới dùng FML-*-G1; Product Master governance nói G0 là research/history, không dùng trực tiếp cho sản xuất thường. | Không tạo production order từ G0. G1 có thể là candidate/pilot source nhưng chỉ active production khi có approval và evidence. | Phase 1 Product Master, Phase 2 Production Dossier, BOM snapshot, Material Issue, MRP, costing, MISA boundary. |
| FB-PAGE-REGISTRY-CLEAN-001 | Facebook Page Registry | Page list đang trộn Page ID, Profile ID, Business ID; App ID nhiều dòng là chưa tạo; một số Business ID trùng Page ID hoặc trùng nhau. | Chỉ dùng registry normalized, không dùng raw table để bật webhook/token/outbound. Production allowed mặc định `false` cho mọi page nếu thiếu field bắt buộc. | Meta App setup, webhook subscription, Messenger handoff, source attribution, CRM suppression, Ads/Live attribution. |
| GATEWAY-PRODUCTION-GATE-001 | Facebook Gateway | Completion Report mặc định PENDING_EVIDENCE - NOT GATEWAY PASS; các P0 gate còn PENDING. | Gateway production blocked. Không bật quote/order/live auto-reply production. | Facebook Gateway, Messenger quote/order, Live auto-reply, Ads scale, owner release. |

## P1 / Cross-Phase Decision Register

| Decision ID | Domain | Nội dung cần chốt | Runtime stance trước khi owner chốt |
| --- | --- | --- | --- |
| IVR-ATTEMPT-POLICY-DECISION-001 | IVR | Pack 09 và Phase 8 hiện thống nhất Giờ Vàng 10 phút / 2 attempts, 24/7 15 phút / 3 attempts. Owner cần xác nhận rule này có còn đúng sau khi chốt lại khung giờ Giờ Vàng hay không. | Giữ rule attempt hiện hành ở mức documentation, nhưng không bật real customer call nếu Golden Hour schedule hoặc Order Core policy chưa owner-approved. |
| MEMBER-BENEFIT-GOLDEN-HOUR-DECISION-001 | Member benefit | Cần chốt thành viên có được giảm thêm trong Giờ Vàng hay chỉ có quyền mua sớm. Source hiện nghiêng về quyền mua sớm, không cộng dồn tùy tiện. | Không cộng member discount vào Giờ Vàng nếu chưa có policy priority approved trong QuoteSnapshot. |
| DIAMOND-SELF-PURCHASE-DECISION-001 | Diamond | Financial baseline yêu cầu không tính hoa hồng cho self-purchase nếu policy chặn, nhưng cần owner chốt rule self-purchase chính thức. | Commission eligibility phải pending/review nếu self-purchase chưa có rule. |
| MISA-PAYOUT-DECISION-001 | Finance / MISA | Cần chốt Diamond payout, PIT withholding, payable checkpoint và MISA mapping owner trước khi gọi finance canonical done. | Không sync payout/commission official nếu thiếu owner mapping và accounting evidence. |

## Decision Packet Chuẩn

Mỗi owner decision phải được ghi lại tối thiểu:

| Field | Bắt buộc | Ghi chú |
| --- | --- | --- |
| decision_id | Yes | Dùng ID trong register này. |
| selected_option | Yes | Không dùng mô tả mơ hồ. |
| policy_version | Yes | Ví dụ `PRICE_POLICY_V2026_06_OWNER_001`. |
| effective_from | Yes | Thời điểm áp dụng cho runtime. |
| owner | Yes | Người hoặc nhóm có quyền chốt. |
| sign_off_evidence | Yes | Link/ảnh/chữ ký/evidence packet. |
| affected_docs | Yes | Danh sách file phải cập nhật. |
| affected_runtime | Yes | Resolver/guard/smoke/evidence liên quan. |
| migration_note | Conditional | Bắt buộc nếu thay đổi rule đang tồn tại. |

## Fail-Closed Runtime Rules

| Nếu thiếu | Runtime phải làm |
| --- | --- |
| Price policy version | Không trả final price; không tạo QuoteSnapshot final. |
| Golden Hour policy version | Không nói Giờ Vàng đang active; không gửi reminder/early access theo giờ cứng. |
| Vegan formula proof | Không claim vegan; không gợi ý cho khách ăn chay. |
| Active formula approval | Không tạo production order/material issue/BOM snapshot production. |
| Page registry normalized | Không bật webhook, token, outbound, CRM hoặc production_allowed. |
| Completion Report PASS | Không mở Gateway production. |
| Owner sign-off | Không gọi Done/Production Ready/Go-live. |

## Work Queue Sau Decision Log

| Thứ tự | Artifact cần viết / sửa | Điều kiện bắt đầu |
| --- | --- | --- |
| 1 | MASTER-09 Cross-Phase Runtime Lock Addendum | Có decision log này để làm blocker map. |
| 2 | Commerce Addendum | Cần chốt hoặc ghi rõ pending cho PRICE-POLICY-DECISION-001 và GOLDEN-HOUR-TIME-DECISION-001. |
| 3 | AI Advisor Addendum | Cần VEGAN-FORMULA-DECISION-001 hoặc fail-closed dietary guard. |
| 4 | Facebook Gateway FB-00 -> FB-08 | Cần FB-PAGE-REGISTRY-CLEAN-001 và Gateway P0 evidence plan. |
| 5 | Operational Config Addendum | Cần FORMULA-VERSION-DECISION-001 và vegan/broth split decision. |
| 6 | Finance Canonical Registry | Cần Diamond payout/MISA decisions. |
| 7 | Evidence / Smoke Matrix | Cần tất cả P0 decision IDs map vào smoke/evidence. |

## Done Gate Của MASTER-08

MASTER-08 đạt yêu cầu khi:

1. Mọi conflict P0 được ghi bằng decision ID.
2. Mọi downstream bị chặn được chỉ rõ.
3. Runtime stance trước owner sign-off là fail-closed.
4. Không có nội dung nào tự tuyên bố Gateway PASS hoặc Production Ready.
5. Có Decision Packet chuẩn để owner chốt và trace vào implementation.

## Final Lock

Tại thời điểm viết MASTER-08:

| Scope | Kết luận |
| --- | --- |
| Business / technical foundation | STRONG FOUNDATION |
| Direct full implementation | NOT READY |
| Gateway production | BLOCKED |
| Next required work | Owner decisions + MASTER-09 + phase addendums + evidence matrix |
