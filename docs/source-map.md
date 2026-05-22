# Contract Source Map

This file indexes the current Markdown source documents under `docs/documents/` for contract generation and validation.

The active source folders for this pass are:

- `docs/documents/0. appendices`
- `docs/documents/1. master`
- `docs/documents/2. pack`
- `docs/documents/3. tech`

`should_generate_contracts` values:

- `yes`: source can be used to derive v1 schemas, enums, OpenAPI, AsyncAPI, events, examples, state machines, error codes, or compatibility notes.
- `no`: source is navigation, planning, or handoff guidance only.
- `needs-review`: source is usable for planning or traceability, but contract generation requires owner review or narrower source-section selection.

| document_file | document_type | main_domain | related_repo | related_contract_area | should_generate_contracts | notes |
|---|---|---|---|---|---|---|
| docs/documents/0. appendices/01-OPERATIONAL-FORMS.md | appendix specification | operational forms | ginsengfood-ops-core | ops | yes | Source for required operational forms, form boundaries, evidence, confirmations, and transition conditions. |
| docs/documents/0. appendices/02-AUTO-GENERATED-FORM-RULES.md | appendix specification | generated operational forms | ginsengfood-ops-core | ops | yes | Source for auto-generated form inheritance, generated fields, source object linkage, and no-manual-reentry constraints. |
| docs/documents/0. appendices/03-PRINTING-CODE-RULES.md | appendix specification | printing, barcode, QR, reprint | ginsengfood-ops-core | ops | yes | Source for print payload, printer boundary, QR/barcode source-of-truth, and reprint audit controls. |
| docs/documents/0. appendices/04-MISA-MAPPING-RULES.md | appendix specification | MISA mapping and accounting handoff | ginsengfood-ops-core | misa | yes | Source for MISA integration boundary, mapping, official accounting handoff, and sync status constraints. |
| docs/documents/0. appendices/05-MATERIAL-PACKAGING-TAXONOMY.md | appendix specification | material and packaging taxonomy | ginsengfood-ops-core | ops | yes | Source for material group taxonomy, planning thresholds, packaging policy, operational screens/routes, and additional form statuses. |
| docs/documents/1. master/01-MASTER-00-INDEX-REGISTRY.md | master index | documentation registry and pack catalog | cross-system | common | no | Navigation and pack registry; detailed contracts should cite specialized MASTER/PACK/TECH/appendix sources. |
| docs/documents/1. master/02-MASTER-01-SOURCE-OF-TRUTH.md | master registry | source-of-truth, owner, resolver, consumer boundary | cross-system | common | yes | Foundation source for ownership, source-of-truth, resolver, evidence, no-hardcode, and boundary constraints. |
| docs/documents/1. master/03-MASTER-02-CROSS-PACK-DEPENDENCY.md | master dependency map | cross-pack dependencies | cross-system | compatibility | yes | Source for dependency, compatibility, and consumer/provider boundary constraints. |
| docs/documents/1. master/04-MASTER-03-TRACEABILITY-ID.md | master standard | traceability ID, correlation, idempotency, evidence trace | cross-system | common | yes | Source for ID, correlation, idempotency, audit, and trace headers/fields. |
| docs/documents/1. master/05-MASTER-04-RUNTIME-RESOLUTION-GUARD.md | master standard | runtime resolver and guard control | cross-system | common | yes | Source for runtime guard, suppression, fallback, resolver, and owner-review contracts. |
| docs/documents/1. master/06-MASTER-05-EVIDENCE-SMOKE-COMPLETION-GATE.md | master standard | evidence, smoke, completion gates | cross-system | evidence-release | yes | Source for evidence package, smoke, done gate, release evidence, and PASS constraints. |
| docs/documents/1. master/07-MASTER-06-RESERVED-FUTURE-INTEGRATION.md | master governance | reserved pack and future integration boundary | cross-system | compatibility | yes | Source for future-extension compatibility constraints; do not generate inactive integration APIs. |
| docs/documents/1. master/08-MASTER-07-RELEASE-GO-LIVE-CONTROL.md | master release governance | production readiness and go-live control | cross-system | evidence-release | yes | Source for production readiness, go-live gate, stop-sale, rollback, and suppression compatibility notes. |
| docs/documents/2. pack/01-PACK-01-OPERATIONAL-CORE.md | pack specification | operational core, production, warehouse, inventory, traceability, recall, sale lock | ginsengfood-ops-core | ops | yes | Primary ops-core domain source. |
| docs/documents/2. pack/02-PACK-02-PRODUCT-MASTER-SKU-RECIPE-ACTIVATION.md | pack specification | product master, SKU, ingredient, recipe, formula, activation | ginsengfood-ops-core | product | yes | Primary product and product-activation contract source. |
| docs/documents/2. pack/03-PACK-03-DEMAND-MRP-PROCUREMENT-MATERIAL-CONTROL.md | pack specification | demand, MRP, procurement, material and packaging control | ginsengfood-ops-core | ops | yes | Primary source for demand, MRP, procurement suppression, stock alerts, and material/packaging contracts. |
| docs/documents/2. pack/04-PACK-04-MISA-ACCOUNTING-HANDOFF.md | pack specification | MISA integration and accounting handoff | ginsengfood-ops-core | misa | yes | Primary MISA/accounting integration source. |
| docs/documents/2. pack/05-PACK-05-AI-ADVISOR-CHANNEL.md | pack specification | AI advisor, product consulting, customer memory, quote/order handoff | ginsengfood-business-platform | ai | yes | Primary AI advisor source; must not bypass Product, Operational Core, or Commerce. |
| docs/documents/2. pack/06-PACK-06-FACEBOOK-CHANNEL-GATEWAY.md | pack specification | Facebook channel gateway, Meta live, Messenger, comment routing | ginsengfood-business-platform | channel | yes | Primary channel gateway source. |
| docs/documents/2. pack/07-PACK-07-ADS-ROAS-ATTRIBUTION.md | pack specification | ads measurement, attribution, ROAS, verified revenue | ginsengfood-business-platform | ads | yes | Primary ads measurement source. |
| docs/documents/2. pack/08-PACK-08-MC-AI-LIVE.md | pack specification | MC AI Live, live script, hosting assistant, live sales orchestration | ginsengfood-business-platform | live | yes | Primary live runtime source. |
| docs/documents/2. pack/09-PACK-09-IVR-ORDER-CONFIRMATION.md | pack specification | IVR order confirmation | ginsengfood-business-platform | ivr | yes | Primary IVR order confirmation source. |
| docs/documents/2. pack/10-PACK-10-COMPLETION-EVIDENCE-GATEWAY.md | pack specification | completion, evidence gateway, release readiness | cross-system | evidence-release | yes | Primary release-readiness and completion evidence source. |
| docs/documents/3. tech/01-TECH-00-GINSENGFOOD-TECHNICAL-IMPLEMENTATION-MASTER-PLAN.md | technical master plan | technical implementation roadmap | cross-system | planning | no | Planning/navigation source; contract files should cite specific TECH/PACK/MASTER/appendix docs. |
| docs/documents/3. tech/02-TECH-01-FOUNDATION-RBAC-AUDIT-IDEMPOTENCY-EVIDENCE-REGISTRY.md | technical domain spec | foundation, RBAC, audit, idempotency, evidence registry | cross-system | common | yes | Primary common foundation technical source. |
| docs/documents/3. tech/03-TECH-02-PRODUCT-SKU-INGREDIENT-RECIPE-FORMULA-PRODUCT-ACTIVATION.md | technical domain spec | product, SKU, ingredient, recipe, formula, activation | ginsengfood-ops-core | product | yes | Technical product source paired with PACK-02. |
| docs/documents/3. tech/04-TECH-03-OPERATIONAL-CORE-PRODUCTION-WAREHOUSE-INVENTORY-TRACEABILITY-RECALL-SALE-LOCK.md | technical domain spec | operational core, production, warehouse, inventory, traceability, recall, sale lock | ginsengfood-ops-core | ops | yes | Technical ops-core source paired with PACK-01. |
| docs/documents/3. tech/05-TECH-04-COMMERCE-RUNTIME-SELLABLE-GATE-QUOTE-CART-ORDER-PAYMENT-SHIPPING.md | technical domain spec | commerce runtime, sellable gate, quote, cart, order, payment, shipping | ginsengfood-business-platform | commerce | yes | Primary commerce runtime source. |
| docs/documents/3. tech/06-TECH-05-AI-ADVISOR-RUNTIME-PRODUCT-CONSULTING-CUSTOMER-MEMORY-QUOTE-SAFE-SALES-ORDER-DRAFT-HANDOFF.md | technical domain spec | AI advisor runtime, product consulting, customer memory, quote-safe sales | ginsengfood-business-platform | ai | yes | Technical AI advisor source paired with PACK-05. |
| docs/documents/3. tech/07-TECH-06-FACEBOOK-GATEWAY-META-LIVE-MESSENGER-CHANNEL-DELIVERY-COMMENT-TO-MESSENGER.md | technical domain spec | Facebook gateway, channel delivery, comment-to-Messenger | ginsengfood-business-platform | channel | yes | Technical channel source paired with PACK-06. |
| docs/documents/3. tech/08-TECH-07-ADS-MEASUREMENT-ATTRIBUTION-ROAS-CPA-AOV-VERIFIED-REVENUE-SCALE-GATE.md | technical domain spec | ads measurement, attribution, verified revenue, scale gate | ginsengfood-business-platform | ads | yes | Technical ads source paired with PACK-07. |
| docs/documents/3. tech/09-TECH-08-MC-AI-LIVE-LIVE-SCRIPT-RUNTIME-HOSTING-INTELLIGENCE-LIVE-SALES-CONTROL-ADS-SAFE-LIVE-ORCHESTRATION.md | technical domain spec | MC AI Live, live script runtime, live sales control | ginsengfood-business-platform | live | yes | Technical live runtime source paired with PACK-08. |
| docs/documents/3. tech/10-TECH-09-IVR-ORDER-CONFIRMATION-AUTO-CALL-VERIFICATION-ANTI-FAKE-ORDER-CONTROL.md | technical domain spec | IVR order confirmation and auto call verification | ginsengfood-business-platform | ivr | yes | Technical IVR source paired with PACK-09. |
| docs/documents/3. tech/11-TECH-10-GLOBAL-SMOKE-UAT-EVIDENCE-RELEASE-GATEWAY-PRODUCTION-READINESS-CONTROL.md | technical release spec | global smoke, UAT, evidence, release gateway | cross-system | evidence-release | yes | Technical release/evidence source paired with PACK-10 and MASTER-05/07. |
| docs/documents/3. tech/12-TECH-11-IMPLEMENTATION-ROADMAP-DEV-PHASE-PLAN-BACKLOG-GOVERNANCE-CODE-HANDOFF-CONTROL.md | technical implementation roadmap | implementation roadmap and handoff governance | cross-system | planning | no | Planning source; no direct contracts. |
| docs/documents/3. tech/13-TECH-12-PHASE-BACKLOG-PACK-DEV-TASK-BREAKDOWN-SOURCE-TO-BACKLOG-MATRIX.md | backlog governance pack | source-to-backlog traceability | cross-system | planning | no | Backlog source; no direct contracts. |
| docs/documents/3. tech/14-TECH-13-CODEX-COPILOT-DEV-PROMPT-PACK-PHASE-EXECUTION-HANDOFF-IMPLEMENTATION-REPORT-TEMPLATE.md | technical handoff and report template | implementation handoff and report evidence | ginsengfood-contracts | evidence-release | needs-review | Source for implementation-report shape and handoff expectations; do not generate runtime domain contracts from report templates. |
