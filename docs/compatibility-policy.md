# Compatibility Policy

Tài liệu này mô tả nguyên tắc compatibility cho contract changes.

Additive optional field thường backward compatible. Xóa field, đổi type, đổi enum value, đổi required field, đổi event name hoặc đổi semantic là breaking change và phải được review.

Chi tiết version matrix và deprecation cụ thể thuộc `compatibility/`.
