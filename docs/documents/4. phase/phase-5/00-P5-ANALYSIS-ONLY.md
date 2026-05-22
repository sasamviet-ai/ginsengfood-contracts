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

