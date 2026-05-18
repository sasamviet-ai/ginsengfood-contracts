#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

const IGNORE_DIRS = new Set([
  ".git",
  "node_modules",
  ".next",
  "dist",
  "build",
  "coverage",
  ".codex-doc-memory",
]);

function parseArgs(argv) {
  const args = {
    root: null,
    out: null,
    maxFiles: Infinity,
    jsonOnly: false,
  };

  for (let i = 2; i < argv.length; i += 1) {
    const value = argv[i];
    if (value === "--out") {
      args.out = argv[++i];
    } else if (value === "--max-files") {
      const parsed = Number.parseInt(argv[++i], 10);
      if (!Number.isFinite(parsed) || parsed < 1) {
        throw new Error("--max-files must be a positive integer");
      }
      args.maxFiles = parsed;
    } else if (value === "--json-only") {
      args.jsonOnly = true;
    } else if (!args.root) {
      args.root = value;
    } else {
      throw new Error(`Unknown argument: ${value}`);
    }
  }

  if (!args.root) {
    throw new Error("Usage: md_doc_map.js <docs-root> [--out <out-dir>] [--max-files N] [--json-only]");
  }

  args.root = path.resolve(args.root);
  args.out = path.resolve(args.out || path.join(args.root, ".codex-doc-memory"));
  return args;
}

function toPosix(filePath) {
  return filePath.split(path.sep).join("/");
}

function normalizeRel(filePath) {
  return toPosix(filePath).replace(/^\.\//, "");
}

function normalizeKey(filePath) {
  return normalizeRel(filePath).toLowerCase();
}

function isMarkdown(filePath) {
  return /\.md$/i.test(filePath);
}

function walk(dir, root, acc, maxFiles) {
  if (acc.length >= maxFiles) {
    return;
  }

  const entries = fs.readdirSync(dir, { withFileTypes: true })
    .sort((a, b) => a.name.localeCompare(b.name));

  for (const entry of entries) {
    if (acc.length >= maxFiles) {
      return;
    }

    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!IGNORE_DIRS.has(entry.name)) {
        walk(fullPath, root, acc, maxFiles);
      }
    } else if (entry.isFile() && isMarkdown(entry.name)) {
      acc.push(fullPath);
    }
  }
}

function stripCodeFenceLines(text) {
  const lines = text.split(/\r?\n/);
  let fenced = false;
  return lines.map((line) => {
    if (/^\s*(```|~~~)/.test(line)) {
      fenced = !fenced;
      return "";
    }
    return fenced ? "" : line;
  }).join("\n");
}

function parseFrontmatter(text) {
  const result = {};
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
  if (!match) {
    return result;
  }

  for (const line of match[1].split(/\r?\n/)) {
    const item = line.match(/^([A-Za-z0-9_.-]+):\s*(.*?)\s*$/);
    if (item) {
      result[item[1]] = item[2].replace(/^["']|["']$/g, "");
    }
  }
  return result;
}

function slugify(text) {
  return text
    .trim()
    .toLowerCase()
    .replace(/[^\p{Letter}\p{Number}\s-]/gu, "")
    .replace(/\s+/g, "-");
}

function parseHeadings(text) {
  const headings = [];
  const lines = stripCodeFenceLines(text).split(/\r?\n/);

  lines.forEach((line, index) => {
    const match = line.match(/^(#{1,6})\s+(.+?)\s*#*\s*$/);
    if (match) {
      const title = match[2].trim();
      headings.push({
        depth: match[1].length,
        text: title,
        line: index + 1,
        slug: slugify(title),
      });
    }
  });

  return headings;
}

function extractMarkdownTarget(rawTarget) {
  let target = rawTarget.trim();
  if (target.startsWith("<")) {
    const end = target.indexOf(">");
    if (end > 0) {
      return target.slice(1, end).trim();
    }
  }
  return target.replace(/\s+(?:"[^"]*"|'[^']*'|\([^)]*\))\s*$/, "").trim();
}

function parseLinks(text) {
  const body = stripCodeFenceLines(text);
  const links = [];
  const markdownLink = /!?\[([^\]]*)\]\(([^)]*)\)/g;
  const wikiLink = /\[\[([^\]|#]+)(?:#[^\]|]+)?(?:\|[^\]]+)?\]\]/g;
  let match;

  while ((match = markdownLink.exec(body)) !== null) {
    const rawTarget = extractMarkdownTarget(match[2]);
    links.push({
      kind: "markdown",
      text: match[1],
      rawTarget,
      line: body.slice(0, match.index).split(/\r?\n/).length,
    });
  }

  while ((match = wikiLink.exec(body)) !== null) {
    links.push({
      kind: "wiki",
      text: match[1],
      rawTarget: match[1],
      line: body.slice(0, match.index).split(/\r?\n/).length,
    });
  }

  return links;
}

function cleanTarget(rawTarget) {
  let target = rawTarget.trim();
  if (!target || target.startsWith("#")) {
    return null;
  }
  if (/^[a-z][a-z0-9+.-]*:/i.test(target)) {
    return null;
  }
  target = target.split("#")[0].split("?")[0];
  try {
    target = decodeURIComponent(target);
  } catch (_error) {
    // Keep the raw target when it is not valid percent-encoding.
  }
  return target.replace(/\\/g, "/");
}

function titleFromFile(filePath) {
  return path.basename(filePath, path.extname(filePath))
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function wordCount(text) {
  return text
    .replace(/```[\s\S]*?```/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;
}

function hasEncodingAnomaly(relPath) {
  return /ΓÇ|Ã|Â|â|áº|á»|Ä|Æ|�/.test(relPath);
}

function readFileInfo(fullPath, root) {
  const raw = fs.readFileSync(fullPath, "utf8");
  const rel = normalizeRel(path.relative(root, fullPath));
  const frontmatter = parseFrontmatter(raw);
  const headings = parseHeadings(raw);
  const firstH1 = headings.find((heading) => heading.depth === 1);
  const firstHeading = headings[0];
  const title = frontmatter.title || (firstH1 && firstH1.text) || (firstHeading && firstHeading.text) || titleFromFile(fullPath);

  return {
    path: rel,
    title,
    frontmatter,
    headings,
    links: parseLinks(raw),
    lines: raw.split(/\r?\n/).length,
    words: wordCount(raw),
    encodingNameAnomaly: hasEncodingAnomaly(rel),
  };
}

function buildLookups(files) {
  const byPath = new Map();
  const byBasename = new Map();
  const byTitle = new Map();

  for (const file of files) {
    byPath.set(normalizeKey(file.path), file);

    const basename = path.basename(file.path, path.extname(file.path)).toLowerCase();
    if (!byBasename.has(basename)) {
      byBasename.set(basename, []);
    }
    byBasename.get(basename).push(file);

    const titleKey = file.title.toLowerCase();
    if (!byTitle.has(titleKey)) {
      byTitle.set(titleKey, []);
    }
    byTitle.get(titleKey).push(file);
  }

  return { byPath, byBasename, byTitle };
}

function resolveTarget(file, rawTarget, lookups) {
  const cleaned = cleanTarget(rawTarget);
  if (!cleaned) {
    return null;
  }

  const fromDir = path.posix.dirname(file.path);
  const relativeCandidate = normalizeRel(path.posix.normalize(path.posix.join(fromDir, cleaned)));
  const candidates = [relativeCandidate];

  if (!/\.md$/i.test(relativeCandidate)) {
    candidates.push(`${relativeCandidate}.md`);
    candidates.push(path.posix.join(relativeCandidate, "index.md"));
  }

  for (const candidate of candidates) {
    const found = lookups.byPath.get(normalizeKey(candidate));
    if (found) {
      return found.path;
    }
  }

  const basename = path.posix.basename(cleaned, path.posix.extname(cleaned)).toLowerCase();
  const byBasename = lookups.byBasename.get(basename);
  if (byBasename && byBasename.length === 1) {
    return byBasename[0].path;
  }

  const titleKey = cleaned.replace(/[_-]+/g, " ").trim().toLowerCase();
  const byTitle = lookups.byTitle.get(titleKey);
  if (byTitle && byTitle.length === 1) {
    return byTitle[0].path;
  }

  return null;
}

function analyze(files) {
  const lookups = buildLookups(files);
  const incoming = new Map(files.map((file) => [file.path, []]));
  const edges = [];
  const unresolved = [];

  for (const file of files) {
    file.resolvedLinks = [];
    file.unresolvedLinks = [];

    for (const link of file.links) {
      const resolved = resolveTarget(file, link.rawTarget, lookups);
      if (resolved) {
        const edge = {
          from: file.path,
          to: resolved,
          kind: link.kind,
          rawTarget: link.rawTarget,
          line: link.line,
        };
        edges.push(edge);
        file.resolvedLinks.push(edge);
        incoming.get(resolved).push(edge);
      } else if (cleanTarget(link.rawTarget)) {
        const issue = {
          file: file.path,
          line: link.line,
          kind: link.kind,
          rawTarget: link.rawTarget,
        };
        unresolved.push(issue);
        file.unresolvedLinks.push(issue);
      }
    }
  }

  for (const file of files) {
    file.incomingLinks = incoming.get(file.path);
  }

  const duplicateTitles = Array.from(buildLookups(files).byTitle.entries())
    .filter(([, group]) => group.length > 1)
    .map(([title, group]) => ({ title, files: group.map((file) => file.path) }));

  const encodingNameAnomalies = files
    .filter((file) => file.encodingNameAnomaly)
    .map((file) => file.path);

  const orphanCandidates = files
    .filter((file) => file.incomingLinks.length === 0 && file.resolvedLinks.length === 0)
    .map((file) => file.path);

  return {
    edges,
    issues: {
      unresolvedLinks: unresolved,
      duplicateTitles,
      encodingNameAnomalies,
      orphanCandidates,
    },
  };
}

function mdEscape(value) {
  return String(value).replace(/\|/g, "\\|").replace(/\r?\n/g, " ");
}

function renderMarkdown(report) {
  const lines = [];
  const files = report.files;
  const issues = report.issues;

  lines.push("# Markdown Documentation Map");
  lines.push("");
  lines.push(`Generated: ${report.generatedAt}`);
  lines.push(`Root: ${report.root}`);
  lines.push("");
  lines.push("## Summary");
  lines.push("");
  lines.push(`- Markdown files: ${files.length}`);
  lines.push(`- Links resolved: ${report.edges.length}`);
  lines.push(`- Unresolved links: ${issues.unresolvedLinks.length}`);
  lines.push(`- Duplicate titles: ${issues.duplicateTitles.length}`);
  lines.push(`- Encoding/name anomalies: ${issues.encodingNameAnomalies.length}`);
  lines.push(`- Orphan candidates: ${issues.orphanCandidates.length}`);
  lines.push("");

  lines.push("## High Link Documents");
  lines.push("");
  lines.push("| File | Title | Incoming | Outgoing | Words |");
  lines.push("| --- | --- | ---: | ---: | ---: |");
  [...files]
    .sort((a, b) => (b.incomingLinks.length + b.resolvedLinks.length) - (a.incomingLinks.length + a.resolvedLinks.length))
    .slice(0, 25)
    .forEach((file) => {
      lines.push(`| ${mdEscape(file.path)} | ${mdEscape(file.title)} | ${file.incomingLinks.length} | ${file.resolvedLinks.length} | ${file.words} |`);
    });
  lines.push("");

  if (issues.unresolvedLinks.length > 0) {
    lines.push("## Unresolved Links");
    lines.push("");
    lines.push("| File | Line | Target | Kind |");
    lines.push("| --- | ---: | --- | --- |");
    issues.unresolvedLinks.slice(0, 200).forEach((issue) => {
      lines.push(`| ${mdEscape(issue.file)} | ${issue.line} | ${mdEscape(issue.rawTarget)} | ${issue.kind} |`);
    });
    if (issues.unresolvedLinks.length > 200) {
      lines.push("");
      lines.push(`Only the first 200 unresolved links are shown. See JSON for all ${issues.unresolvedLinks.length}.`);
    }
    lines.push("");
  }

  if (issues.duplicateTitles.length > 0) {
    lines.push("## Duplicate Titles");
    lines.push("");
    issues.duplicateTitles.forEach((group) => {
      lines.push(`- ${group.title}: ${group.files.join(", ")}`);
    });
    lines.push("");
  }

  if (issues.encodingNameAnomalies.length > 0) {
    lines.push("## Encoding Or Name Anomalies");
    lines.push("");
    issues.encodingNameAnomalies.forEach((filePath) => {
      lines.push(`- ${filePath}`);
    });
    lines.push("");
  }

  if (issues.orphanCandidates.length > 0) {
    lines.push("## Orphan Candidates");
    lines.push("");
    issues.orphanCandidates.slice(0, 200).forEach((filePath) => {
      lines.push(`- ${filePath}`);
    });
    lines.push("");
  }

  lines.push("## File Inventory");
  lines.push("");
  lines.push("| File | Title | H1/Headings | Incoming | Outgoing | Unresolved | Words |");
  lines.push("| --- | --- | ---: | ---: | ---: | ---: | ---: |");
  files.forEach((file) => {
    const h1Count = file.headings.filter((heading) => heading.depth === 1).length;
    lines.push(`| ${mdEscape(file.path)} | ${mdEscape(file.title)} | ${h1Count}/${file.headings.length} | ${file.incomingLinks.length} | ${file.resolvedLinks.length} | ${file.unresolvedLinks.length} | ${file.words} |`);
  });
  lines.push("");

  return `${lines.join("\n")}\n`;
}

function main() {
  const args = parseArgs(process.argv);
  if (!fs.existsSync(args.root) || !fs.statSync(args.root).isDirectory()) {
    throw new Error(`Docs root is not a directory: ${args.root}`);
  }

  const markdownFiles = [];
  walk(args.root, args.root, markdownFiles, args.maxFiles);
  const files = markdownFiles.map((filePath) => readFileInfo(filePath, args.root));
  const analysis = analyze(files);
  const report = {
    generatedAt: new Date().toISOString(),
    root: args.root,
    files,
    edges: analysis.edges,
    issues: analysis.issues,
  };

  fs.mkdirSync(args.out, { recursive: true });
  const jsonPath = path.join(args.out, "markdown-doc-map.json");
  fs.writeFileSync(jsonPath, `${JSON.stringify(report, null, 2)}\n`, "utf8");

  if (!args.jsonOnly) {
    const mdPath = path.join(args.out, "markdown-doc-map.md");
    fs.writeFileSync(mdPath, `\ufeff${renderMarkdown(report)}`, "utf8");
    console.log(`Wrote ${mdPath}`);
  }
  console.log(`Wrote ${jsonPath}`);
}

try {
  main();
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
