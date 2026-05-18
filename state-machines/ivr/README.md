# state-machines/ivr

Thư mục này chứa state machine contract cho IVR.

Người dùng chính là business-platform IVR và consumer cần hiểu call lifecycle. Không đặt telephony implementation, provider config, credential hoặc audio asset vào đây.

Ví dụ file sau này: `call-job-status-v1.md`, `call-attempt-status-v1.md`. State machine phải versioned khi publish.
