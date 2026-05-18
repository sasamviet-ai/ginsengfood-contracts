---
name: markdown-doc-reader
description: Read, map, remember, and review Markdown documentation sets. Use when Codex needs to work across many .md files, build a durable documentation memory or index, trace how Markdown files link to each other, summarize a docs corpus, audit broken links, duplicate docs, encoding-name anomalies, inconsistencies, evidence gaps, or review release-readiness packs and specs stored as Markdown.
---

# Markdown Doc Reader

Use this skill to work across a Markdown corpus without losing structure. Treat "remember all docs" as durable external memory: create or update an index in the docs tree, then use that index to choose what to read deeply.

## Core Workflow

1. Establish the docs root. If the user gives open files but no root, use the closest shared folder that contains the relevant `.md` files.
2. Run the mapper before reading deeply:

```powershell
node "<skill-dir>\scripts\md_doc_map.js" "<docs-root>" --out "<docs-root>\.codex-doc-memory"
```

3. Read `<docs-root>/.codex-doc-memory/markdown-doc-map.md` first. Use the JSON only when you need exact graph data:

```powershell
Get-Content -Path "<docs-root>\.codex-doc-memory\markdown-doc-map.json"
```

4. Read full source files selectively:
   - Small corpus, about 20 files or fewer: read all relevant files.
   - Larger corpus: start with high-link files, root index files, files named like `README`, `INDEX`, `PACK-*`, specs, release packs, and files the user names.
5. When the user asks to "remember" or maintain continuity, create or update `<docs-root>/.codex-doc-memory/memory.md` with:
   - Corpus purpose and scope
   - Key documents and their roles
   - Relationship model between document groups
   - Decisions, requirements, evidence, risks, and open questions
   - Last scan timestamp and source root
6. Re-run the mapper after file additions, renames, or link edits.

## Review Modes

Choose the review mode that matches the request. Combine modes when useful.

- Structure review: document hierarchy, naming consistency, navigation, missing table of contents, orphan docs.
- Link review: broken Markdown links, unresolved wiki links, suspicious external placeholders, missing backlinks.
- Evidence review: claims without proof, release gates without artifacts, completion statements without acceptance evidence.
- Consistency review: contradictory statuses, dates, owners, terminology, requirements, or numbering across files.
- Readiness review: blockers, missing approvals, incomplete sections, unresolved TODOs, risk statements without mitigation.
- Encoding cleanup review: duplicated files caused by mojibake names such as `ΓÇ`, replacement characters, or visually similar filenames.

For review output, lead with findings ordered by severity. Include clickable file references and concrete evidence. Keep summaries secondary.

## Relationship Mapping Rules

Use the mapper output to reason about relationships:

- Outgoing links show what a file depends on or references.
- Incoming links show what depends on a file.
- Files with many incoming links are likely anchors or shared contracts.
- Files with many outgoing links are likely gateway, checklist, or orchestration docs.
- Unresolved links are defects unless the document intentionally references future work.
- Duplicate titles or nearly duplicate filenames can signal drift; inspect before proposing deletion.

When Markdown links are ambiguous, resolve conservatively and state the ambiguity. Do not rename, delete, or merge files unless the user explicitly asks.

## Reading Strategy

Do not paste or summarize the entire corpus by default. Build a compressed mental model from:

- H1 titles, headings, frontmatter, and file paths
- Link graph and backlinks
- Repeated terms, status words, evidence markers, owners, and dates
- The full text of hub documents and user-named files

When deeper accuracy matters, quote or reference the exact source lines from the source `.md` files rather than the generated map.

## Useful Commands

Scan the active `2_pack` folder:

```powershell
node "<skill-dir>\scripts\md_doc_map.js" "2_pack" --out "2_pack\.codex-doc-memory"
```

Generate only JSON:

```powershell
node "<skill-dir>\scripts\md_doc_map.js" "<docs-root>" --out "<out-dir>" --json-only
```

Limit the scan when exploring a large tree:

```powershell
node "<skill-dir>\scripts\md_doc_map.js" "<docs-root>" --max-files 500
```
