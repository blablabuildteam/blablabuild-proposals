#!/usr/bin/env node
/**
 * Generate a passwordless proposal share link.
 * Usage: node scripts/proposal-link.mjs ab-capital [name]
 */
import { createHmac } from "node:crypto";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

function loadEnvLocal() {
  try {
    const envPath = resolve(process.cwd(), ".env.local");
    const content = readFileSync(envPath, "utf8");
    for (const line of content.split("\n")) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const eq = trimmed.indexOf("=");
      if (eq === -1) continue;
      const key = trimmed.slice(0, eq);
      const value = trimmed.slice(eq + 1);
      if (!process.env[key]) process.env[key] = value;
    }
  } catch {
    // optional
  }
}

function signPayload(payload, secret) {
  return createHmac("sha256", secret).update(payload).digest("hex");
}

function createAccessLinkToken(slug, maxAgeSeconds, secret) {
  const exp = Date.now() + maxAgeSeconds * 1000;
  const payload = `access:${slug}:${exp}`;
  const sig = signPayload(payload, secret);
  return Buffer.from(JSON.stringify({ slug, exp, sig })).toString("base64url");
}

loadEnvLocal();

const slug = process.argv[2];
const name = process.argv[3];
const secret =
  process.env.PROPOSAL_SESSION_SECRET ?? "dev-proposal-secret-change-me";

if (!slug) {
  console.error("Usage: npm run proposal:link -- <slug> [name]");
  process.exit(1);
}

const key = createAccessLinkToken(slug, 30 * 24 * 60 * 60, secret);
const params = new URLSearchParams({ p: slug, key });
if (name) params.set("naam", name);

const base = process.env.PROPOSAL_BASE_URL ?? "http://localhost:3000";
console.log(`${base}/?${params}`);
