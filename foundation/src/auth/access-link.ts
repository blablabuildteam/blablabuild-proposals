import { createHmac, timingSafeEqual } from "crypto";

const DEFAULT_LINK_MAX_AGE_SECONDS = 60 * 60 * 24 * 30;

function getSecret() {
  return process.env.PROPOSAL_SESSION_SECRET ?? "dev-proposal-secret-change-me";
}

function signPayload(payload: string): string {
  return createHmac("sha256", getSecret()).update(payload).digest("hex");
}

function verifySignature(payload: string, sig: string): boolean {
  const expected = signPayload(payload);
  try {
    const a = Buffer.from(sig, "hex");
    const b = Buffer.from(expected, "hex");
    if (a.length !== b.length) return false;
    return timingSafeEqual(a, b);
  } catch {
    return false;
  }
}

export function createAccessLinkToken(
  slug: string,
  maxAgeSeconds = DEFAULT_LINK_MAX_AGE_SECONDS,
): string {
  const exp = Date.now() + maxAgeSeconds * 1000;
  const payload = `access:${slug}:${exp}`;
  const sig = signPayload(payload);
  return Buffer.from(JSON.stringify({ slug, exp, sig })).toString("base64url");
}

export function verifyAccessLinkToken(token: string): string | null {
  try {
    const parsed = JSON.parse(
      Buffer.from(token, "base64url").toString("utf8"),
    ) as { slug?: string; exp?: number; sig?: string };

    const { slug, exp, sig } = parsed;
    if (!slug || !exp || !sig) return null;
    if (!Number.isFinite(exp) || exp < Date.now()) return null;

    const payload = `access:${slug}:${exp}`;
    if (!verifySignature(payload, sig)) return null;

    return slug;
  } catch {
    return null;
  }
}

export function isProposalAuthDisabled(): boolean {
  return (
    process.env.NODE_ENV === "development" &&
    process.env.PROPOSAL_AUTH_DISABLED === "true"
  );
}

/** Build a passwordless share link with signed key (server-only). */
export function buildPasswordlessAccessUrl(
  slug: string,
  options?: { name?: string; basePath?: string; maxAgeDays?: number },
): string {
  const maxAgeSeconds = (options?.maxAgeDays ?? 30) * 60 * 60 * 24;
  const url = new URL(options?.basePath ?? "/", "http://local");
  url.searchParams.set("p", slug);
  url.searchParams.set("key", createAccessLinkToken(slug, maxAgeSeconds));
  if (options?.name?.trim()) {
    url.searchParams.set("naam", options.name.trim());
  }
  return `${url.pathname}${url.search}`;
}
