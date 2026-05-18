# Versioning Policy

Tất cả API, event và schema trong `ginsengfood-contracts` phải được versioned để `ginsengfood-ops-core` và `ginsengfood-business-platform` có thể nâng cấp có kiểm soát.

## API Version

- REST API dùng `v1`, `v2` trong path hoặc file name.
- Không thay đổi meaning của field, status code hoặc behavior trong cùng major version nếu consumer có thể bị ảnh hưởng.
- Breaking change phải tăng major version.

## Event Version

- Event phải có `eventVersion`.
- Consumer không được giả định event payload không đổi nếu version thay đổi.
- Breaking change của event phải publish version mới và có migration note.

## Schema Version

- JSON Schema dùng cho request, response và event payload phải có version trong file name, path hoặc metadata phù hợp.
- Additive field có thể là minor change nếu backward compatible.
- Không xóa field đang dùng nếu chưa deprecate và chưa có thời gian migration hợp lý.

## Breaking Change

Breaking change bao gồm nhưng không giới hạn: xóa field, đổi type, đổi enum value đã publish, đổi semantic của status, đổi required field, đổi event name hoặc đổi error contract. Breaking change phải được review bởi provider và consumer owner trước khi merge.
