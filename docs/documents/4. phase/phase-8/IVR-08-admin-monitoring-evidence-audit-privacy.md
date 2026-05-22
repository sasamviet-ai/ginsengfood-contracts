# IVR-08 - Admin Monitoring / Evidence / Audit / Privacy

Trạng thái: `SRS_BASELINE`  
Phase: 8 - IVR Order Confirmation  
Mục tiêu: Khóa yêu cầu Admin Monitoring, RBAC, evidence, audit, privacy và retention cho IVR.

## 1. Mục tiêu

Admin/Ops có thể quan sát và xử lý vận hành IVR, nhưng mọi hành động rủi ro phải đi qua permission, reason, evidence và audit. Privacy là gate bắt buộc vì IVR xử lý số điện thoại, call log và DTMF.

## 2. Nguồn tham chiếu

| Nguồn | Vai trò |
| --- | --- |
| `docs/documents/3. tech/02-TECH-01-FOUNDATION-RBAC-AUDIT-IDEMPOTENCY-EVIDENCE-REGISTRY.md` | RBAC, audit, evidence registry, idempotency. |
| `docs/documents/1. master/06-MASTER-05-EVIDENCE-SMOKE-COMPLETION-GATE.md` | Evidence status, smoke mapping, owner sign-off. |
| `docs/documents/2. pack/10-PACK-10-COMPLETION-EVIDENCE-GATEWAY.md` | Completion/evidence gateway. |
| `docs/documents/3. tech/10-TECH-09-IVR-ORDER-CONFIRMATION-AUTO-CALL-VERIFICATION-ANTI-FAKE-ORDER-CONTROL.md` | IVR privacy/evidence/admin override. |
| `docs/documents/4. phase/phase-8/ivr-pre-srs-gap-closure.md` | Permission matrix, retention/privacy baseline. |

## 3. Phạm vi giám sát admin

Admin/Ops UI được phép hiển thị:

- Queue status.
- CallJob status.
- Attempt status.
- SIM channel health.
- Capacity incident.
- Technical exception.
- Result callback status.
- Evidence/audit refs.
- Masked phone/contact.
- Program policy và attempt count.

Admin/Ops UI không được hiển thị mặc định:

- Full phone number nếu chưa có permission.
- Full address.
- Payment detail.
- Member/Diamond/referral details.
- Health note.
- CRM/private consultation content.
- Raw recording/transcript nếu chưa được privacy/legal approve.

## 4. Ma trận quyền

| Action | Permission | Role tối thiểu | Evidence required | Hard block |
| --- | --- | --- | --- | --- |
| Xem queue | `ivr.queue.read` | Ops Viewer | Access audit | Không lộ PII thô. |
| Xem call detail | `ivr.call.read` | IVR Operator | Access audit | Không xem recording nếu chưa approved. |
| Retry lỗi kỹ thuật | `ivr.call.retry_technical` | IVR Operator | Reason, exception id | Không kéo dài window. |
| Retry customer attempt | `ivr.call.retry_customer` | Admin | Owner reason, Core approval | Không vượt max attempt/call restriction. |
| Pause queue | `ivr.queue.pause` | Admin/Incident Manager | Reason, scope, duration | Không silent miss SLA. |
| Resume queue | `ivr.queue.resume` | Admin/Incident Manager | Before/after metrics | Re-check windows. |
| Disable SIM | `ivr.sim.disable` | IVR Operator | SIM id, health reason | Không mất in-flight audit. |
| Enable SIM | `ivr.sim.enable` | Admin | Health evidence | Không enable SIM failing health. |
| Sửa script/template | `ivr.script.update` | IVR Owner/Admin | Approval, version, privacy review | Không dùng script tự sinh chưa duyệt. |
| Review outcome | `ivr.outcome.review` | Admin/Auditor | Reason, before/after | Không force paid/revenue. |
| Override outcome | `ivr.outcome.override` | Restricted Admin + Core approval | Dual evidence, Core transition | Không bypass Sale Lock/Recall/Suppression. |
| Export evidence | `ivr.evidence.export` | Auditor/Admin | Export audit, purpose | Không dùng marketing. |
| Production enable | `ivr.production.enable` | Release Owner | Full release evidence | Không gọi khách thật nếu gate chưa pass. |

## 5. Evidence bắt buộc

| Evidence | Khi nào ghi | Nội dung tối thiểu |
| --- | --- | --- |
| `IVR_TASK_INTAKE_EVIDENCE` | Khi nhận task | task id, order id, decision, policy version. |
| `IVR_ELIGIBILITY_EVIDENCE` | Khi xét eligibility | trust, risk, blocker, contact, phone status. |
| `IVR_ATTEMPT_EVIDENCE` | Mỗi attempt | attempt no, schedule, SIM channel, result. |
| `IVR_DTMF_EVIDENCE` | Khi capture DTMF | key normalized, timestamp, script version. |
| `IVR_TECH_EXCEPTION_EVIDENCE` | Khi lỗi kỹ thuật | error code, adapter trace, not-counted flag. |
| `IVR_CALLBACK_EVIDENCE` | Khi callback Core | callback id, idempotency, result type. |
| `IVR_ADMIN_ACTION_EVIDENCE` | Admin action | actor, permission, reason, before/after. |
| `IVR_RELEASE_EVIDENCE` | Release gate | smoke result, owner sign-off, blockers. |

Evidence phải có trạng thái. Evidence `DRAFT` hoặc `SUBMITTED` không đủ để gọi PASS nếu gate yêu cầu `ACCEPTED`.

## 6. Audit requirements

Audit bắt buộc cho:

- Task intake/reject.
- Eligibility decision.
- Attempt dispatch.
- SIM channel reserve/release.
- DTMF capture.
- Result normalization.
- Callback sent/accepted/rejected.
- Technical retry.
- Queue pause/resume.
- SIM disable/enable.
- Admin review/override.
- Script version change.
- Evidence export.
- Production enable/disable.

Audit tối thiểu gồm:

- `actor_type`.
- `actor_id` hoặc system actor.
- `permission`.
- `action`.
- `target_ref`.
- `reason`.
- `before_state`.
- `after_state`.
- `correlation_id`.
- `evidence_ref`.
- timestamp.

## 7. Chính sách privacy

| Data | Classification | Default rule |
| --- | --- | --- |
| Full phone number | PII | Dùng token/ref nếu có thể; mask trên UI. |
| `phone_masked` | Operational PII | Chỉ role được phép xem. |
| `official_contact_id` | Internal reference | Được lưu evidence. |
| Call status | Operational evidence | Lưu theo retention policy. |
| DTMF key | Order confirmation evidence | Không public. |
| Call recording | Sensitive evidence | Disabled until approved. |
| Transcript | Sensitive evidence | Not required V1.0. |
| SIM channel id | Technical evidence | Được dùng troubleshooting. |
| Admin comment | Operational evidence | Required cho manual action. |

## 8. Recording và retention

Baseline V1.0:

- `CALL_RECORDING_ENABLED = NO_UNTIL_OWNER_APPROVED`.
- `CALL_TRANSCRIPT_ENABLED = NO_UNTIL_OWNER_APPROVED`.
- Retention duration là `Owner Decision Required`.

Nếu sau này bật recording, SRS/contract phải bổ sung:

- Legal/consent basis.
- Recording start/stop rule.
- Retention duration.
- Access roles.
- Export restriction.
- Deletion/anonymization rule.
- Incident handling nếu rò rỉ.

## 9. Cổng chặn lỗi

IVR-08 FAIL nếu:

- Admin action không có permission server-side.
- Manual retry vượt policy/window.
- Override bypass Sale Lock/Recall/Suppression.
- Evidence thiếu audit hoặc sai scope.
- UI/log lộ PII ngoài policy.
- Recording bật khi chưa có privacy/legal approval.
- Evidence bị dùng cho marketing.

## 10. Tiêu chí chấp nhận

- Permission matrix đủ cho review, retry, pause queue, disable SIM, evidence export, production enable.
- Evidence/audit model đủ trace.
- Privacy/retention ghi rõ điều đã khóa và điều cần owner decision.
- Không có đường admin override trực tiếp sang paid/revenue/order completed.
