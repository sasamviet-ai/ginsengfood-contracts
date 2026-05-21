# Print Job State Machine v1

Sources:

- `docs/documents/0. appendices/03-PRINTING-CODE-RULES.md`
- `docs/documents/0. appendices/05-MATERIAL-PACKAGING-TAXONOMY.md`

States:

- `PAYLOAD_GENERATED`
- `SENT_TO_PRINTER`
- `PRINTED`
- `PRINT_CONFIRMED`
- `REPRINT_REQUESTED`
- `REPRINT_APPROVED`
- `REPRINTED`
- `PRINT_ERROR`
- `CANCELLED`

Allowed transitions:

| From | To | Required guard |
|---|---|---|
| `PAYLOAD_GENERATED` | `SENT_TO_PRINTER` | System-generated payload exists with source object, batch, and audit reference. |
| `SENT_TO_PRINTER` | `PRINTED` | Printer/callback or controlled operator confirmation is recorded. |
| `PRINTED` | `PRINT_CONFIRMED` | Print result is confirmed and linked to batch/QR/barcode source. |
| `SENT_TO_PRINTER` | `PRINT_ERROR` | Error reason is recorded. |
| `PRINT_ERROR` | `REPRINT_REQUESTED` | Reprint reason and actor are recorded. |
| `PRINT_CONFIRMED` | `REPRINT_REQUESTED` | Reprint reason and permission are recorded. |
| `REPRINT_REQUESTED` | `REPRINT_APPROVED` | Reprint approval is recorded. |
| `REPRINT_APPROVED` | `REPRINTED` | Reprint payload and audit are recorded. |
| any non-terminal | `CANCELLED` | Cancellation is permission-checked and audited. |

Compatibility:

- Printer-side QR/barcode generation is breaking.
- Reprint without reason, permission, and audit is breaking.
- Barcode/QR payloads not tied to real batch/source records are breaking.

