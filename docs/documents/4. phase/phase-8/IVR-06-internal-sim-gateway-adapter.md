# IVR-06 - Internal SIM Gateway Adapter

Trạng thái: `SRS_BASELINE`  
Phase: 8 - IVR Order Confirmation  
Mục tiêu: Khóa ranh giới kỹ thuật của Internal SIM Gateway Adapter.

## 1. Mục tiêu

Internal SIM Gateway Adapter là lớp duy nhất được phép giao tiếp với SIM Gateway phần cứng/API. Adapter chỉ dial, phát script, capture call status/DTMF và báo lỗi kỹ thuật. Adapter không biết business state và không được cập nhật order.

## 2. Nguồn tham chiếu

| Nguồn | Vai trò |
| --- | --- |
| `docs/documents/2. pack/09-PACK-09-IVR-ORDER-CONFIRMATION.md` | Deployment model và SIM capacity. |
| `docs/documents/4. phase/phase-8/ivr-input-baseline.md` | SIM Gateway, call execution, DTMF capture. |
| `docs/documents/3. tech/10-TECH-09-IVR-ORDER-CONFIRMATION-AUTO-CALL-VERIFICATION-ANTI-FAKE-ORDER-CONTROL.md` | Technical failure không phải customer fault. |

## 3. Trách nhiệm của adapter

Adapter được phép:

- Quản lý SIM channel pool.
- Reserve/release SIM channel.
- Dial official contact token/phone theo task hợp lệ.
- Phát approved call script.
- Capture call status.
- Capture DTMF.
- Báo technical error code.
- Ghi SIM health metrics.
- Trả raw adapter result về IVR Runtime.

Adapter không được:

- Tạo/cập nhật/hủy order.
- Gửi SMS hoặc notification.
- Tự retry ngoài scheduler policy.
- Tự xác định khách trusted/untrusted.
- Tự bỏ qua blocker.
- Ghi evidence accepted/pass.

## 4. SIM channel model

| Rule | Yêu cầu |
| --- | --- |
| `ONE_SIM_ONE_ACTIVE_CALL` | Một SIM chỉ xử lý một outbound call active. |
| `CHANNEL_HEALTH_REQUIRED` | Chỉ SIM healthy mới được reserve. |
| `CHANNEL_RELEASE_REQUIRED` | Mọi call kết thúc/lỗi phải release channel. |
| `IN_FLIGHT_AUDIT_REQUIRED` | Mọi in-flight call có audit/correlation. |

## 5. Dữ liệu vào của adapter

Adapter chỉ nhận từ IVR Runtime:

- `call_job_id`.
- `attempt_id`.
- `correlation_id`.
- `sim_channel_id` nếu đã reserve.
- `phone_adapter_token` hoặc dialing material được privacy/security duyệt.
- `call_script_template_id`.
- `call_script_version`.
- `allowed_script_variables`.
- `attempt_deadline`.

## 6. Dữ liệu ra của adapter

Adapter trả:

- `adapter_result_id`.
- `attempt_id`.
- `sim_channel_id`.
- `call_started_at`.
- `call_ended_at`.
- `call_duration_seconds`.
- `raw_call_status`.
- `raw_dtmf_key`.
- `technical_error_code` nếu có.
- `adapter_trace_ref`.

Raw result chưa được dùng trực tiếp cho Order Core. Phải qua Result Normalizer ở `IVR-07`.

## 7. Phân loại lỗi kỹ thuật

| Error | Ý nghĩa | Counted customer attempt? |
| --- | --- | --- |
| `SIM_GATEWAY_ERROR` | Gateway/hardware lỗi | Không |
| `SIM_CHANNEL_FAILURE` | SIM lỗi hoặc mất channel | Không |
| `SERVER_ERROR` | Server/adaptor lỗi | Không |
| `AUDIO_PLAYBACK_ERROR` | Không phát được script | Không |
| `DTMF_CAPTURE_ERROR` | Không capture được phím | Không |
| `SCHEDULER_ERROR` | Lỗi trước dispatch | Không |
| `INTERNAL_CALLBACK_ERROR` | Lỗi callback Core | Không |
| `EVIDENCE_WRITE_ERROR` | Không ghi được evidence | Không |

## 8. Retry kỹ thuật

Technical retry phải:

- Có giới hạn.
- Không kéo dài program window.
- Không tăng customer attempt count.
- Không gọi duplicate callback.
- Có evidence/incident metrics.

`Owner Decision Required`:

- `MAX_TECHNICAL_RETRY_PER_ATTEMPT`.
- `TECHNICAL_RETRY_BACKOFF_SECONDS`.
- Mapping `BUSY`, `REJECTED`, `UNREACHABLE`, `CALL_DROPPED` theo tín hiệu SIM Gateway thực tế.
- Production SIM Gateway hardware/API protocol.

## 9. Giám sát sức khỏe hệ thống

Adapter phải expose trạng thái:

- SIM healthy/degraded/disabled.
- Active call count.
- Channel reserve failure.
- DTMF capture failure rate.
- Audio playback failure rate.
- Callback failure rate.
- Capacity risk.

Disable/enable SIM phải đi qua permission trong `IVR-08`.

## 10. Tiêu chí chấp nhận

- Adapter không có quyền update order.
- Adapter không gửi notification.
- Technical failure được tách khỏi no-answer.
- SIM health và channel lifecycle có audit.
- Các owner decision kỹ thuật còn thiếu được đánh dấu rõ.
