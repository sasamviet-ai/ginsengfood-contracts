# generated

Thư mục này dành cho generated client/model nếu sau này repo có policy commit generated artifacts.

Mặc định không commit generated client thật khi chưa có policy. Không đặt build output tạm, dependency package, secret, migration, service logic hoặc hand-written implementation vào đây.

Có thể sinh client sau từ contract v1 cho:

- .NET
- Java
- TypeScript

Nếu generated artifact được commit trong tương lai, artifact phải ghi rõ source contract, version, generator version, lệnh tái tạo và compatibility note. Breaking change trong generated client phải tham chiếu `compatibility/`.

TODO: Chưa có policy commit generated client, generator chuẩn, package naming, publishing flow hoặc ownership cho từng language target.
