#!/usr/bin/env node
/**
 * Scaffold a new client proposal from the _template folder.
 *
 * Usage:
 *   node foundation/scripts/scaffold-proposal.mjs acme-corp "Acme Corp"
 *   node foundation/scripts/scaffold-proposal.mjs acme-corp "Acme Corp" --brand alt-f-awesome
 */

import { cpSync, existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
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
const clientsDir = join(appDir, "src/lib/proposals/clients");
const targetDir = join(clientsDir, slug);

if (existsSync(targetDir)) {
  console.error(`Already exists: ${targetDir}`);
  process.exit(1);
}

mkdirSync(clientsDir, { recursive: true });

const clientsIndexPath = join(clientsDir, "index.ts");
if (!existsSync(clientsIndexPath)) {
  writeFileSync(
    clientsIndexPath,
    `import type { ClientProposal } from "@foundation/proposals/clients";\n\nexport const CLIENT_PROPOSALS: readonly ClientProposal[] = [];\n`,
  );
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

const importLine = `import { build${toPascal(slug)}Bundles } from "./${slug}";`;
const entryLine = `  { slug: "${slug}", bundles: build${toPascal(slug)}Bundles() },`;

let registry = readFileSync(clientsIndexPath, "utf8");

if (!registry.includes(importLine)) {
  registry = `${importLine}\n${registry}`;
}

if (!registry.includes(entryLine)) {
  if (registry.includes("CLIENT_PROPOSALS: readonly ClientProposal[] = [];")) {
    registry = registry.replace(
      "export const CLIENT_PROPOSALS: readonly ClientProposal[] = [];",
      `export const CLIENT_PROPOSALS: readonly ClientProposal[] = [\n${entryLine}\n];`,
    );
  } else {
    registry = registry.replace(
      /export const CLIENT_PROPOSALS: readonly ClientProposal\[\] = \[\n/,
      `export const CLIENT_PROPOSALS: readonly ClientProposal[] = [\n${entryLine}\n`,
    );
  }
  writeFileSync(clientsIndexPath, registry);
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

function toPascal(slug) {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}
