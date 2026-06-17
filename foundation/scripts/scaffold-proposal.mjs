#!/usr/bin/env node
/**
 * Scaffold a new client proposal from the _template folder.
 *
 * Usage:
 *   node foundation/scripts/scaffold-proposal.mjs acme-corp "Acme Corp"
 *   node foundation/scripts/scaffold-proposal.mjs acme-corp "Acme Corp" --brand alt-f-awesome
 */

import { cpSync, existsSync, readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "../..");

const [slug, clientName, ...rest] = process.argv.slice(2);
const brand = rest.includes("--brand")
  ? rest[rest.indexOf("--brand") + 1] ?? "blablabuild"
  : "blablabuild";

if (!slug || !clientName) {
  console.error(
    "Usage: node foundation/scripts/scaffold-proposal.mjs <slug> <Client Name> [--brand blablabuild|alt-f-awesome]",
  );
  process.exit(1);
}

const appDir = join(root, brand);
const templateDir = join(appDir, "src/lib/proposals/_template");
const targetDir = join(appDir, "src/lib/proposals", slug);

if (existsSync(targetDir)) {
  console.error(`Already exists: ${targetDir}`);
  process.exit(1);
}

cpSync(templateDir, targetDir, { recursive: true });

const envKey = `PROPOSAL_${slug.toUpperCase().replace(/-/g, "_")}_PASSWORD`;

for (const file of ["index.ts", "data.ts", "workflows.source.ts", "phases.source.ts"]) {
  const path = join(targetDir, file);
  let content = readFileSync(path, "utf8");
  content = content
    .replaceAll("CLIENT_SLUG", slug)
    .replaceAll("Client Name", clientName);
  writeFileSync(path, content);
}

const registryPath = join(appDir, "src/lib/proposals/registry.ts");
let registry = readFileSync(registryPath, "utf8");

const importLine = `import { bundle as ${toCamel(slug)}Bundle } from "./${slug}";`;
if (!registry.includes(importLine)) {
  registry = registry.replace(
    /^(import type \{ ProposalBundle.*\n)/m,
    `$1${importLine}\n`,
  );
  registry = registry.replace(
    /const bundles: Record<string, ProposalBundle> = \{\n/,
    `const bundles: Record<string, ProposalBundle> = {\n  "${slug}": ${toCamel(slug)}Bundle,\n`,
  );
  writeFileSync(registryPath, registry);
}

console.log(`
Created proposal: ${targetDir}

Next steps:
  1. Edit workflows.source.ts — add RICE scores, effort, cost per workflow
  2. Edit phases.source.ts — group workflows into phases & packages
  3. Edit index.ts — debrief, meta, client story
  4. Add to ${brand}/.env.local:
     ${envKey}=your-password
  5. Register env var on Vercel (production)
`);

function toCamel(slug) {
  return slug.replace(/-([a-z])/g, (_, c) => c.toUpperCase()).replace(/-/g, "");
}
