# M3 <-> ops-core allocation: integration notes

Audience: the `ginsengfood-business-platform` (M3) owner and the ops-core owner. These are integration notes, not a new contract surface: the binding definitions are `reserveInventoryAllocationV1` and `releaseInventoryAllocationV1` in `openapi/ops-core/inventory.v1.yaml`, the x03b schemas, `enums/ops/inventory-allocation-status.yaml` and `state-machines/ops/allocation-state.md`. Where a note here and a schema disagree, the schema wins and this file is wrong.

Scope of the change these notes belong to: the allocation write surface becomes two commands (hold and self-release) plus a fourth status, `ISSUED`. See `CHANGELOG.md` (Unreleased, "additive, coordinated") and `compatibility/consumer-compatibility-matrix.md` for the deliberate exception to "business-platform must not mutate inventory".

## 1. Order identity: how M3 produces `source_object_id`

ops-core stores `source_object_id` exactly as received and requires only a non-nil UUID. It never derives or validates it, so the consumer owns the identity rules (EXT-OD-02). M3 order ids are numeric (BIGINT), so M3 derives a UUID from the order id deterministically instead of storing a second identifier.

**Rule.** For a hold with `source_object_type = EXTERNAL_ORDER`:

```
source_object_id = UUIDv5(ORDER_SOURCE_NAMESPACE_UUID, "order:" + orderId)
```

- ORDER_SOURCE_NAMESPACE_UUID = `f13ae28e-7225-4364-83ff-0d55cccf8cb7`
- This namespace is a published constant, not a secret. It was generated once as a random (version 4) UUID on 2026-11-11 and is fixed for the life of the v1 contract. Changing it changes every derived `source_object_id`, so holds already placed could no longer be found, listed or released: never rotate it.
- UUIDv5 is the RFC 4122 section 4.3 algorithm: SHA-1 over the 16 namespace bytes followed by the UTF-8 bytes of the name, first 16 bytes of the digest, version nibble set to 5, variant bits set to 10.
- `orderId` is the canonical decimal text of the M3 order id: digits only, no sign, no leading zeros, no separators, no padding. The name is the ASCII prefix `order:` followed by that text, so the same order always yields the same UUID and it can be recomputed after any incident without a lookup table.
- The derivation is the consumer's identity function. The phrase "never synthesized" in the allocation schemas forbids deriving the id from unstable or positional data (order header plus SKU plus ordinal, a hash of mutable fields, the allocation id). A fixed encoding of a stable order id is not that.

**Test vectors** (an implementation must reproduce them exactly; `contract-tests/x03b/external-allocation-write-v1.contract.test.mjs` recomputes them):

| name | UUIDv5 |
| --- | --- |
| `order:1` | `3cec2522-d110-55a0-8eac-2a898257d3ca` |
| `order:123456` | `5d65e4a9-b171-599d-ac58-c4308320bf1d` |

**One source holds one scope.** A source id can hold only one SKU, one warehouse, one unit and one quantity: asking again with the same id and a different scope is answered `409 INSUFFICIENT_STOCK`, not a second hold. An order with several lines therefore needs one `EXTERNAL_ORDER_ITEM` source per line, not one `EXTERNAL_ORDER` source per order. For lines, use the same namespace with a name built from the stable M3 order-item id, for example `order-item:<orderItemId>` with the same canonical decimal rule. That line-level name is a proposal for the M3 review and is not fixed by this contract; the contract only requires a stable UUID per line, never one built from a position in the order.

## 2. Calling the two commands

Example key shapes (not part of the contract): `m3:rsv:<orderId>:<n>` for hold and `m3:rel:<orderId>:<n>`. The contract fixes only the charset and length of `X-Idempotency-Key`: 1 to 200 characters of letters, digits and `: - _ .`. One key per intent; reuse the same key (and the same body) for every retry of that intent, never a new key for the same intent, because a new key for the same source can hold twice. A key belongs to the service principal that first used it (another principal gets `403`). The scope differs by command: for reserve it is the source (the same key with another source is a new command; the same key and source with a different body is `422`, and the body fingerprint includes `expires_at`, so a retry must resend the original `expires_at` unchanged); for release it is the key alone (the same key with another source is `422`). A repeat reserve with a new key never extends a hold: the lines keep their original `expires_at`.

| Call | Answer | Meaning | What the consumer does |
| --- | --- | --- | --- |
| reserve | `201` `RESERVED` | New hold created | Store `allocation_id` of each line. |
| reserve | `200` `ALREADY_RESERVED` | An equivalent hold of this principal already exists; nothing created, nothing extended | Same as `201`. |
| reserve | `409` `INSUFFICIENT_STOCK` | One code for five causes: short stock, lots blocked, different scope held for this source, source held by another principal (any state, `ISSUED` included; the holder is never disclosed), more than 20 lots | Do not show "out of stock"; call `POST /v1/availability/check` for the reason. |
| reserve | `409` `ALLOCATION_CONFLICT` | The hold of this key is no longer held (expired, or released by the warehouse or by your own release call), or the source was already `ISSUED` for an allocation of your own principal | Read `GET /v1/inventory/allocations?sourceObjectId=` once. An `ISSUED` row of your own: stop, never reserve it again. No holding row: the hold ended (expired, or released by the warehouse or by your own release call), send a new key if the order is still live. |
| release | `200` `RELEASED` | Every RESERVED line of this principal for the source was released | Order is free of the hold. A replay with the same key returns the same body. |
| release | `409` `ALLOCATION_NOT_HELD` | Already released, or expired and waiting for the expiry worker | Treat as success: nothing is held. |
| release | `409` `ALLOCATION_CONFLICT` | The warehouse already confirmed or issued stock of the source (nothing released), or the allocation changed mid-call | Do not loop. Read `GET /v1/inventory/allocations?sourceObjectId=` once; `CONFIRMED` or `ISSUED` means the warehouse owns it, contact the warehouse. |
| release | `404` `NOT_FOUND` | This principal holds nothing for the source (an unknown source and another principal's source look the same) | Treat as nothing to release; check the id derivation if unexpected. |
| reserve | `422` `VALIDATION_FAILED` | Bad, missing or over-long key; the key already used for this source with a different body (`expires_at` included); bad body field; `details[]` names it | Fix the request; do not retry unchanged. |
| release | `422` `VALIDATION_FAILED` | Bad, missing or over-long key; the key already used for a different source; bad body field; `details[]` names it | Fix the request; do not retry unchanged. |
| either | `403` `FORBIDDEN` | Missing permission or audience, a token without subject, or a key first used by another service principal | Do not retry; check the credentials and that keys are never shared between principals. |
| either | `429` `RATE_LIMITED` | The `ExternalAllocationWrite` bucket (5 per second, burst 10) is empty, or a call with the same key is still running (`Retry-After: 1`) | Wait `Retry-After`, repeat with the same key and body. |

The consumer cannot confirm or issue an allocation, and cannot release a `CONFIRMED` one.

## 3. Status values the consumer must tolerate

`GET /v1/inventory/allocations` returns `status` in `RESERVED`, `CONFIRMED`, `ISSUED`, `RELEASED`. `ISSUED` is new, so a parser written against the three-value schema from 2026-09-21 must accept it and, in general, any value it does not know, without mapping it to another status. `ISSUED` adds no field: the row looks like a `CONFIRMED` one. Expiry, warehouse release and consumer self-release all read `RELEASED`.

The snapshot lists only allocations created by the calling service principal; rows of another principal are not visible. `allocated_quantity` is written without trailing zeros there (`"5"`), while reserve and release lines always carry three decimals (`"5.000"`): compare quantities as decimals, never as strings between the two.

## 4. Webhooks are a hint, not the source of truth

The pull model (reading `GET` snapshots and `POST /v1/availability/check` before committing an order) decides. Allocation events (hold, release, issue) are not routed to M3 at all, so a hold that expired or was issued is learned by reading allocations. The transport of the 13 event types that are routed is specified in `docs/webhook-transport.md`.

## 5. Review checklist before the provider turns the new surface on in a shared environment

1. M3 parser accepts `ISSUED` and unknown `status` values.
2. M3 derives `source_object_id` with the rule above and reproduces both vectors.
3. M3 cancellation flow calls release, treats `ALLOCATION_NOT_HELD` and `404` as done, and routes `ALLOCATION_CONFLICT` to the warehouse instead of re-reserving.
4. M3 never builds a new idempotency key for a retry of the same intent.
5. M3 pins a contracts revision that contains these files.
