# P5 - Analysis Only

**PROMPT-P5 - FACEBOOK GATEWAY / MESSENGER / CHANNEL DELIVERY ANALYSIS HANDOFF**

## Mode

ANALYSIS ONLY. Khong sua code, khong tao migration, khong seed, khong format file, khong mo Gateway.

## Entry Gate

Chi bat dau Phase 5 Analysis khi:

- Phase 4 co evidence Final Response Guard pass.
- Phase 4 co evidence AI khong tu tinh gia, khong tu tao order, khong tu xac nhan payment.
- Phase 3 co evidence QuoteSnapshot / Order Draft / Payment boundary du de Gateway consume.
- Neu chua du, ghi blocker `P5-ENTRY-BLOCKED-BY-P4-AI-GATEWAY-DEPENDENCY`.

**GLOBAL GATEWAY:** BLOCKED.

## Source Of Truth

- `docs/documents/3. tech/07-TECH-06-FACEBOOK-GATEWAY-META-LIVE-MESSENGER-CHANNEL-DELIVERY-COMMENT-TO-MESSENGER.md`
- `docs/documents/2. pack/06-PACK-06-FACEBOOK-CHANNEL-GATEWAY.md`
- `docs/documents/3. tech/06-TECH-05-AI-ADVISOR-RUNTIME-PRODUCT-CONSULTING-CUSTOMER-MEMORY-QUOTE-SAFE-SALES-ORDER-DRAFT-HANDOFF.md`
- `docs/documents/3. tech/05-TECH-04-COMMERCE-RUNTIME-SELLABLE-GATE-QUOTE-CART-ORDER-PAYMENT-SHIPPING.md`
- `docs/documents/3. tech/13-TECH-12-PHASE-BACKLOG-PACK-DEV-TASK-BREAKDOWN-SOURCE-TO-BACKLOG-MATRIX.md`
- `docs/documents/2. pack/10-PACK-10-COMPLETION-EVIDENCE-GATEWAY.md`

Chua thay source-of-truth `docs/docs-ginsengfood-project/` trong workspace hien tai. Neu sau nay file do xuat hien, phai doi chieu lai truoc khi sua backend that.

## Scope Can Phan Tich

1. Channel identity / Page context / app permission.
2. Webhook intake / signature / idempotency / correlation.
3. Public comment boundary.
4. Comment-to-Messenger routing.
5. Messenger private context handoff.
6. AI Final Response Guard enforcement.
7. Typing indicator / response pacing / no-instant-bot-reply.
8. Rate limit / anti-spam / moderation / complaint split.
9. Suppression / opt-out / recall / sale lock.
10. Evidence / app review / smoke readiness.

## Khong Duoc Lam

- Gateway khong duoc la AI Advisor.
- Gateway khong duoc la Commerce Runtime.
- Gateway khong duoc tinh gia, tao order, xac nhan payment.
- Gateway khong duoc gui response chua qua Final Response Guard.
- Gateway khong duoc public private data: dia chi, phone, payment, order, member tier.
- Gateway khong duoc keo troll/malicious vao Messenger nhu lead ban hang.

## Output Bat Buoc

- Current-state map: module/file/API/schema/test/log/evidence hien co.
- Gap matrix theo GW-BLG-001 -> GW-BLG-010.
- Conflict matrix voi TECH-05/TECH-06/TECH-04.
- API/DTO/event impact neu co.
- Privacy/public-private risk register.
- Proposed smoke matrix.
- Blocker register va owner decision required.

## Done Gate

Analysis chi duoc ket thuc khi co report du evidence path hoac missing evidence ro rang. Khong duoc ket luan Phase 5 ready.

# P5.1 - Technical Design Only

**PROMPT-P5.1 - FACEBOOK GATEWAY TECHNICAL DESIGN HANDOFF**

## Mode

TECHNICAL DESIGN ONLY. Khong implement, khong migration, khong seed, khong doi contract khi chua co approval.

## Input Bat Buoc

- P5 Analysis report.
- P4 Final Response Guard evidence.
- P3 QuoteSnapshot / Order Draft / Payment boundary evidence.
- TECH-06 / PACK-06.

Neu thieu P5 Analysis report, ghi `BLOCKED_NEED_P5_ANALYSIS_REPORT`.

## Design Boundary

Gateway la channel delivery runtime. Gateway chi:

- Nhan event tu Meta/Live/Messenger/Web/Landing/CRM.
- Resolve channel/page/session context.
- Route public comment sang private/Messenger khi can.
- Goi AI Advisor hoac Commerce theo contract duoc phep.
- Enforce Final Response Guard truoc khi send.
- Delivery message theo pacing/rate-limit/platform policy.
- Ghi audit/evidence.

Gateway khong:

- Tu viet noi dung ban hang de them gia/claim/urgency.
- Tu tinh final price.
- Tu tao official order/order_code.
- Tu set PAID.
- Tu bo qua recall/sale lock/suppression.

## Workstreams

| Slice | Backlog        | Muc tieu                                       |
| ----- | -------------- | ---------------------------------------------- |
| P5.2A | GW-BLG-001     | Channel Identity / Page Context                |
| P5.2B | GW-BLG-002/003 | Public Comment Boundary + Comment-to-Messenger |
| P5.2C | GW-BLG-004/005 | Messenger Context + Final Response Guard       |
| P5.2D | GW-BLG-006     | Typing Indicator / Response Pacing             |
| P5.2E | GW-BLG-007/008 | Rate Limit / Anti-Spam / Moderation            |
| P5.2F | GW-BLG-009     | Suppression / Opt-out                          |
| P5.2G | GW-BLG-010     | Smoke / Evidence Pack                          |

## Contract Can Khoa

- Inbound event envelope.
- Channel/page/session identity.
- Public/private visibility flag.
- Comment intent classification result.
- Messenger handoff request.
- AI request/response envelope.
- Final Response Guard result.
- Delivery command.
- Suppression decision.
- Audit/evidence record.

## API/DTO Impact

Moi thay doi API/DTO/event/OpenAPI phai ghi:

- Endpoint/event name.
- Request/response fields.
- Backward compatibility.
- FE/channel consumer can update.
- Test/smoke can bo sung.

## P0 Design Blockers

- Public comment co private data.
- Gateway send unguarded AI response.
- Gateway public final price ca nhan sai policy.
- Comment "gia/mua/chot" khong route private.
- Payment WAITING bi noi PAID.
- Suppression active nhung van gui sales message.

## Final Status

Trang thai toi da: **P5 TECHNICAL DESIGN HANDOFF COMPLETED - NOT RELEASE READY**.

**GLOBAL GATEWAY: BLOCKED**

# P5.2A - Channel Identity / Page Context

**BACKLOG:** GW-BLG-001  
**MODE:** LIMITED IMPLEMENTATION HANDOFF  
**GLOBAL GATEWAY:** BLOCKED

## Muc Tieu

Khoa boundary cho page/channel/session identity de moi inbound event deu biet den tu page nao, channel nao, live/session nao va co du permission hay khong.

## Entry Gate

- P5.1 technical design accepted.
- Phase 0 audit/idempotency/correlation foundation pass.
- Meta/Page/App permission duoc map trong analysis.

Neu thieu, ghi `GW-BLG-001-BLOCKED-BY-CHANNEL-IDENTITY`.

## Implementation Scope

- Channel identity resolver.
- Page context resolver.
- Session correlation.
- Webhook event normalization.
- Permission/config validation.
- Audit evidence cho inbound event.

## Not Allowed

- Khong hardcode page id/token trong logic.
- Khong bo qua signature/permission.
- Khong gop chung public comment va private Messenger session.
- Khong gui message neu chua resolve page/channel.

## Acceptance Criteria

- Moi event co `channel`, `page_context`, `conversation_context`, `correlation_id`.
- Unknown page/channel bi reject hoac quarantine.
- Permission missing khong duoc delivery.
- Evidence co sample event da mask token/secret.

## Smoke

| Smoke ID      | Scenario           | Expected                          |
| ------------- | ------------------ | --------------------------------- |
| P5.2A-SMK-001 | Known page comment | Resolve dung page/channel/session |
| P5.2A-SMK-002 | Unknown page id    | Reject/quarantine                 |
| P5.2A-SMK-003 | Missing permission | No delivery                       |
| P5.2A-SMK-004 | Duplicate webhook  | Idempotent, no double processing  |

## Final Status

**LIMITED IMPLEMENTATION REPORT ONLY**  
**NOT RELEASE READY**  
**GLOBAL GATEWAY: BLOCKED**

# P5.2B - Public Comment Boundary / Comment-to-Messenger

**BACKLOG:** GW-BLG-002 / GW-BLG-003  
**MODE:** LIMITED IMPLEMENTATION HANDOFF  
**GLOBAL GATEWAY:** BLOCKED

## Muc Tieu

Khoa public/private boundary cho comment public va route dung intent can tu van sau sang Messenger/private.

## Entry Gate

- GW-BLG-001 pass.
- P4 Final Response Guard available.
- Public/private policy da duoc design accepted.

## Implementation Scope

- Public comment classifier: price, buy, consult, complaint, troll, spam, generic.
- Public short response policy.
- Comment-to-Messenger routing.
- Private reply handoff.
- Evidence cho no-private-data public reply.

## Not Allowed

- Public dia chi, phone, order, payment, member tier.
- Public final price ca nhan neu policy yeu cau private.
- Keo troll/malicious vao Messenger nhu lead mua hang.
- Xu ly complaint that nhu spam/troll.

## Acceptance Criteria

- Comment "gia", "mua", "1 hop", "ib" route Messenger/private.
- Public reply chi la public-safe short response.
- Complaint route CSKH/human handoff.
- Troll/spam route moderation, khong tao lead ban hang.

## Smoke

| Smoke ID      | Scenario                   | Expected                          |
| ------------- | -------------------------- | --------------------------------- |
| P5.2B-SMK-001 | Public comment hoi gia     | Reply public-safe + route private |
| P5.2B-SMK-002 | Comment chua phone/address | Mask/block public private data    |
| P5.2B-SMK-003 | Troll comment              | Moderation, no Messenger lead     |
| P5.2B-SMK-004 | Complaint chat luong       | Route CSKH/human                  |

## Final Status

**LIMITED IMPLEMENTATION REPORT ONLY**  
**NOT RELEASE READY**  
**GLOBAL GATEWAY: BLOCKED**

# P5.2C - Messenger Context / Final Response Guard

**BACKLOG:** GW-BLG-004 / GW-BLG-005  
**MODE:** LIMITED IMPLEMENTATION HANDOFF  
**GLOBAL GATEWAY:** BLOCKED

## Muc Tieu

Dam bao sau khi handoff sang Messenger, conversation chay nhu private context va moi response truoc khi delivery deu pass Final Response Guard.

## Entry Gate

- GW-BLG-003 pass.
- AIA-BLG-006 Final Response Guard pass.
- AI Advisor runtime envelope accepted.

## Implementation Scope

- Messenger private context resolver.
- Context handoff payload.
- AI request binding.
- Final Response Guard enforcement before delivery.
- Unguarded response quarantine.
- Guard evidence logging.

## Not Allowed

- Gui AI draft response truc tiep.
- Tu sua response de them gia/claim/order.
- Noi official order khi chi co draft.
- Noi PAID khi runtime chua xac nhan.

## Acceptance Criteria

- Messenger context khong lap lai public-comment mode.
- Moi outbound response co guard decision.
- Guard fail thi no delivery hoac human handoff.
- Evidence co trace request -> guard -> delivery.

## Smoke

| Smoke ID      | Scenario                       | Expected                  |
| ------------- | ------------------------------ | ------------------------- |
| P5.2C-SMK-001 | AI response pass guard         | Delivery allowed          |
| P5.2C-SMK-002 | Unguarded response             | Block/quarantine          |
| P5.2C-SMK-003 | Response co private leak       | Guard fail, no send       |
| P5.2C-SMK-004 | Messenger after public handoff | Private context preserved |

## Final Status

**LIMITED IMPLEMENTATION REPORT ONLY**  
**NOT RELEASE READY**  
**GLOBAL GATEWAY: BLOCKED**

# P5.2D - Typing Indicator / Response Pacing

**BACKLOG:** GW-BLG-006  
**MODE:** LIMITED IMPLEMENTATION HANDOFF  
**GLOBAL GATEWAY:** BLOCKED

## Muc Tieu

Thiet ke va implement delivery pacing de Gateway khong tra loi bat ngay nhu bot may moc, dong thoi khong spam va khong vuot policy kenh.

## Entry Gate

- GW-BLG-005 pass.
- Delivery command contract accepted.
- Platform policy / rate constraint da duoc analysis.

## Implementation Scope

- Typing indicator command.
- Response pacing by message length/type.
- Chunking/multi-message delivery.
- Delivery retry policy.
- Delivery evidence.

## Not Allowed

- Reply instant cho moi comment/inbox.
- Split message lam mat y nghia hoac lo data.
- Retry vo han.
- Pacing bypass guard decision.

## Acceptance Criteria

- Short/medium/long response co pacing rule.
- Typing indicator khong gui neu channel khong support.
- Chunking giu dung public/private boundary.
- Retry co limit va audit.

## Smoke

| Smoke ID      | Scenario                     | Expected              |
| ------------- | ---------------------------- | --------------------- |
| P5.2D-SMK-001 | Short reply                  | Pacing dung rule      |
| P5.2D-SMK-002 | Long reply                   | Chunking safe         |
| P5.2D-SMK-003 | Unsupported typing indicator | Skip safely           |
| P5.2D-SMK-004 | Delivery fail                | Retry bounded + audit |

## Final Status

**LIMITED IMPLEMENTATION REPORT ONLY**  
**NOT RELEASE READY**  
**GLOBAL GATEWAY: BLOCKED**

# P5.2E - Rate Limit / Anti-Spam / Moderation

**BACKLOG:** GW-BLG-007 / GW-BLG-008  
**MODE:** LIMITED IMPLEMENTATION HANDOFF  
**GLOBAL GATEWAY:** BLOCKED

## Muc Tieu

Khoa gate chong spam, rate-limit, moderation va tach complaint that voi troll/malicious.

## Entry Gate

- GW-BLG-001 pass.
- Public/private classifier co evidence.
- Moderation policy accepted.

## Implementation Scope

- Rate-limit per user/page/channel.
- Anti-spam detector.
- Moderation route.
- Complaint route CSKH/human.
- Abuse/malicious handling.
- Evidence for blocked/suppressed delivery.

## Not Allowed

- Gui Messenger hang loat khi user spam.
- Xu ly complaint nghiem trong nhu sales objection.
- Cho troll vao sales funnel.
- Bo qua opt-out/suppression vi live dang chay.

## Acceptance Criteria

- Spam bi block/rate-limited.
- Complaint route CSKH/human.
- Troll/malicious khong tao quote/order lead.
- Audit co reason code.

## Smoke

| Smoke ID      | Scenario             | Expected                       |
| ------------- | -------------------- | ------------------------------ |
| P5.2E-SMK-001 | 20 comments lap lai  | Rate-limit active              |
| P5.2E-SMK-002 | Complaint chat luong | Human/CSKH route               |
| P5.2E-SMK-003 | Troll abusive        | Moderation, no Messenger sales |
| P5.2E-SMK-004 | Malicious link       | Block/quarantine               |

## Final Status

**LIMITED IMPLEMENTATION REPORT ONLY**  
**NOT RELEASE READY**  
**GLOBAL GATEWAY: BLOCKED**

# P5.2F - Suppression / Opt-out / Human Handoff

**BACKLOG:** GW-BLG-009  
**MODE:** LIMITED IMPLEMENTATION HANDOFF  
**GLOBAL GATEWAY:** BLOCKED

## Muc Tieu

Dam bao Gateway ton trong recall, sale lock, channel suppression, user opt-out, policy block va human handoff.

## Entry Gate

- GW-BLG-007 pass.
- Operational suppression / AI suppression / Commerce suppression contract available.
- Opt-out policy accepted.

## Implementation Scope

- Suppression resolver.
- Opt-out resolver.
- Recall/sale-lock blocking.
- Human handoff route.
- Suppression evidence.

## Not Allowed

- Gui sales message cho user opt-out.
- Ban SKU bi recall/sale lock.
- Bypass suppression vi comment dang co intent mua.
- Handoff human ma khong ghi reason/evidence.

## Acceptance Criteria

- Suppression thang AI/Commerce/Gateway template.
- Opt-out user khong bi proactive message.
- Sale lock/recall chan quote/order/sales message.
- Human handoff co trace va owner queue.

## Smoke

| Smoke ID      | Scenario      | Expected              |
| ------------- | ------------- | --------------------- |
| P5.2F-SMK-001 | User opt-out  | No message            |
| P5.2F-SMK-002 | SKU sale lock | No sales reply        |
| P5.2F-SMK-003 | Recall active | Block + safe response |
| P5.2F-SMK-004 | Need human    | Handoff with reason   |

## Final Status

**LIMITED IMPLEMENTATION REPORT ONLY**  
**NOT RELEASE READY**  
**GLOBAL GATEWAY: BLOCKED**

# P5.2G - Gateway Smoke / Evidence Report

**BACKLOG:** GW-BLG-010  
**MODE:** SMOKE / EVIDENCE / REPORT ONLY  
**GLOBAL GATEWAY:** BLOCKED

## Muc Tieu

Chay smoke cho Phase 5, gom evidence, lap report 14 muc. Khong sua code trong file nay.

## Entry Gate

- GW-BLG-001 -> GW-BLG-009 da co implementation report.
- P4 Final Response Guard evidence co the doi chieu.
- P3 Commerce boundary evidence co the doi chieu.

## Smoke Matrix Toi Thieu

| Smoke ID    | Scenario                  | Expected                      |
| ----------- | ------------------------- | ----------------------------- |
| P5-GSMK-001 | Known page comment        | Resolve channel/page/session  |
| P5-GSMK-002 | Unknown page/comment      | Reject/quarantine             |
| P5-GSMK-003 | Public comment hoi gia    | Public-safe + route Messenger |
| P5-GSMK-004 | Comment co phone/address  | No public leak                |
| P5-GSMK-005 | Messenger private handoff | Context private preserved     |
| P5-GSMK-006 | Unguarded AI response     | No delivery                   |
| P5-GSMK-007 | Guard fail response       | Block/handoff                 |
| P5-GSMK-008 | Typing/pacing             | No instant bot reply          |
| P5-GSMK-009 | Spam burst                | Rate-limit                    |
| P5-GSMK-010 | Troll/malicious           | Moderation, no sales lead     |
| P5-GSMK-011 | Complaint                 | CSKH/human route              |
| P5-GSMK-012 | User opt-out              | No proactive message          |
| P5-GSMK-013 | Recall/sale lock          | Sales suppressed              |
| P5-GSMK-014 | Payment WAITING           | Not PAID                      |

## Evidence Bat Buoc

- Commit hash/build version/environment.
- Masked webhook samples.
- Guard trace.
- Public/private examples.
- Rate-limit/moderation logs.
- Suppression/opt-out logs.
- Owner review request.

## Report 14 Muc

1. Scope and environment.
2. Source-of-truth checked.
3. Phase entry evidence.
4. Channel identity findings.
5. Public/private boundary findings.
6. Comment-to-Messenger findings.
7. Final Response Guard enforcement.
8. Delivery pacing/rate-limit findings.
9. Moderation/complaint findings.
10. Suppression/opt-out findings.
11. API/DTO/event impact.
12. Smoke result matrix.
13. Blocker/risk register.
14. Owner decision request.

## Final Status

**PHASE 5 VALIDATION REPORT ONLY**  
**EVIDENCE SUBMITTED ONLY**  
**NOT RELEASE READY**  
**GLOBAL GATEWAY: BLOCKED**

# P5 - README HANDOFF INDEX

## Update 2026-05-22 - Phase 5 Plan

Dung thu muc chinh thuc: `docs/documents/4. phase/phase-5/`.

Phase 5 la Facebook Gateway / Messenger / Channel Delivery. Gateway la channel delivery runtime, khong phai AI Advisor, Commerce, Payment hay noi quyet dinh sellable.

## Entry Gate

Chi duoc bat dau Phase 5 khi:

- P4 Final Response Guard co evidence submitted/accepted de Gateway enforce.
- P4 AI Advisor khong tu tinh gia/order/payment.
- P3 QuoteSnapshot, Order Draft, Official Order, Payment boundary co evidence du de channel consume.
- Khong con P0 blocker ve public/private leak hoac unguarded AI response.

Neu chua du, ghi `P5-ENTRY-BLOCKED-BY-P4-AI-GATEWAY-DEPENDENCY`.

**Global Gateway:** `BLOCKED` den TECH-10.

## Source Of Truth

- TECH-06 Facebook Gateway / Meta Live / Messenger.
- PACK-06 Facebook Channel Gateway.
- TECH-05 AI Advisor Final Response Guard.
- TECH-04 Commerce Runtime.
- TECH-11/12 phase governance/backlog.
- PACK-10 evidence gateway.

## Execution Order

1. `00-P5-ANALYSIS-ONLY.md`: inspect backend/channel code that, map API/schema/event/test.
2. `01-P5-1-TECHNICAL-DESIGN-ONLY.md`: khoa Gateway contract va API/DTO/event impact.
3. `02-P5-2A-CHANNEL-IDENTITY-PAGE-CONTEXT.md`: GW-BLG-001.
4. `03-P5-2B-PUBLIC-COMMENT-COMMENT-TO-MESSENGER.md`: GW-BLG-002/003.
5. `04-P5-2C-MESSENGER-CONTEXT-FINAL-RESPONSE-GUARD.md`: GW-BLG-004/005.
6. `05-P5-2D-TYPING-INDICATOR-RESPONSE-PACING.md`: GW-BLG-006.
7. `06-P5-2E-RATE-LIMIT-ANTI-SPAM-MODERATION.md`: GW-BLG-007/008.
8. `07-P5-2F-SUPPRESSION-OPT-OUT-HUMAN-HANDOFF.md`: GW-BLG-009.
9. `08-P5-2G-SMOKE-EVIDENCE-REPORT.md`: GW-BLG-010.

## Core Rules

- Khong co Final Response Guard pass thi Gateway khong gui response.
- Khong co QuoteSnapshot thi Gateway khong hien thi final price.
- Khong co Customer Confirmation thi Gateway khong tao official order.
- Khong co Payment Confirmation thi Gateway khong noi PAID.
- Public channel khong hien thi private data.
- Sale Lock / Recall / Suppression thang moi template ban hang.

## P0 Blockers

- Public private data.
- Public gia/order/payment ca nhan sai policy.
- Gui response chua guard.
- Hoi gia/mua/chot trong public khong route Messenger.
- Troll/malicious bi keo vao Messenger sai policy.
- Complaint that bi xu ly nhu troll.
- Gateway gia mao nguoi that.

## Downstream

Phase 7 MC AI Live phu thuoc Phase 5 Gateway public/private, comment classification va Messenger handoff evidence.

Phase 6 Ads co the can Phase 5 event identity cho paid/social signal, nhung scale van phu thuoc P3 Verified Revenue.

**NOT RELEASE READY**  
**GLOBAL GATEWAY: BLOCKED**
