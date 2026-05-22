# IVR CapacityIncident State Machine v1

## Scope

The CapacityIncident machine governs queue/SIM/adapter capacity events that can pause or hold IVR calls.

## States

| state | description |
|---|---|
| `CAPACITY_NORMAL` | No active capacity incident. |
| `CAPACITY_DEGRADED` | Capacity degraded but calls may continue within policy. |
| `CAPACITY_HELD` | Calls must be held to prevent unsafe execution. |
| `CAPACITY_ESCALATED` | Admin/owner review is required. |
| `CAPACITY_RESOLVED` | Incident is resolved and queue can resume with audit. |

## Allowed Transitions

| from | to | guard | evidence/audit |
|---|---|---|---|
| `CAPACITY_NORMAL` | `CAPACITY_DEGRADED` | Health check detects reduced throughput. | Health evidence. |
| `CAPACITY_DEGRADED` | `CAPACITY_HELD` | Unsafe queue/SIM threshold reached. | Capacity evidence. |
| `CAPACITY_HELD` | `CAPACITY_ESCALATED` | Admin/owner review required. | Escalation audit. |
| `CAPACITY_DEGRADED` | `CAPACITY_RESOLVED` | Health returns to accepted threshold. | Health evidence. |
| `CAPACITY_ESCALATED` | `CAPACITY_RESOLVED` | Authorized review approves resume. | Admin action evidence. |
| `CAPACITY_RESOLVED` | `CAPACITY_NORMAL` | Queue resumes without active incident. | Resume audit. |

## Blocked Transitions

| transition | reason |
|---|---|
| `CAPACITY_HELD` to customer no-answer | Capacity hold is not a customer attempt. |
| `CAPACITY_HELD` to queue resume without admin evidence | Resume requires permission, reason, audit, and evidence. |
| Any state to real-customer-call release | Release gate remains separate and must pass IVR-09. |
