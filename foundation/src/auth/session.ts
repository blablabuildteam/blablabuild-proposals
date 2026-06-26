import { createHmac, timingSafeEqual } from "crypto";

const COOKIE_NAME = "proposal_session";
const MAX_AGE_SECONDS = 60 * 60 * 24 * 7;

function getSecret() {
  return process.env.PROPOSAL_SESSION_SECRET ?? "dev-proposal-secret-change-me";
}

export { COOKIE_NAME, MAX_AGE_SECONDS };

export function createSessionToken(slug: string): string {
  const exp = Date.now() + MAX_AGE_SECONDS * 1000;
  const payload = `${slug}:${exp}`;
  const sig = createHmac("sha256", getSecret()).update(payload).digest("hex");
  return `${payload}:${sig}`;
}

export function verifySessionToken(
  token: string | undefined,
  expectedSlug: string,
): boolean {
  if (!token) return false;

  const parts = token.split(":");
  if (parts.length !== 3) return false;

  const [slug, expStr, sig] = parts;
  if (slug !== expectedSlug) return false;

  const exp = Number(expStr);
  if (!Number.isFinite(exp) || exp < Date.now()) return false;

  const payload = `${slug}:${expStr}`;
  const expected = createHmac("sha256", getSecret())
    .update(payload)
    .digest("hex");

  try {
    const a = Buffer.from(sig, "hex");
    const b = Buffer.from(expected, "hex");
    if (a.length !== b.length) return false;
    return timingSafeEqual(a, b);
  } catch {
    return false;
  }
}

export function parseSessionSlug(token: string | undefined): string | null {
  if (!token) return null;
  const slug = token.split(":")[0];
  return slug || null;
}
