# events/business-platform/ivr

Thư mục này dành cho IVR events phát ra từ `ginsengfood-business-platform`.

Consumer chính là ops-core hoặc workflow liên quan đơn hàng khi cần call result/cancellation signal. Không đặt telephony provider code, credential, audio file hoặc call routing implementation vào đây.

Ví dụ file sau này: `call-job-created-v1.schema.json`, `call-result-recorded-v1.schema.json`, `call-cancelled-v1.schema.json`. Event payload phải versioned.
