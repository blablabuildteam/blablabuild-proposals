import { NextResponse } from "next/server";
import { verifyAccessLinkToken } from "@/lib/auth/access-link";
import { sessionCookieSecure } from "@/lib/auth/cookies";
import {
  COOKIE_NAME,
  MAX_AGE_SECONDS,
  createSessionToken,
} from "@/lib/auth/session";
import { getProposalBundle } from "@/lib/proposals/registry";
import {
  resolveAccessKey,
  resolveAccessSlug,
  resolveContactName,
} from "@/lib/proposals/access-url";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const slug = resolveAccessSlug(url.searchParams);
  const key = resolveAccessKey(url.searchParams);
  const name = resolveContactName(url.searchParams);

  if (!slug || !getProposalBundle(slug)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (!key) {
    const login = new URL("/", request.url);
    login.searchParams.set("p", slug);
    if (name) login.searchParams.set("naam", name);
    return NextResponse.redirect(login);
  }

  const verifiedSlug = verifyAccessLinkToken(key);
  if (verifiedSlug !== slug) {
    const login = new URL("/", request.url);
    login.searchParams.set("p", slug);
    login.searchParams.set("error", "access");
    if (name) login.searchParams.set("naam", name);
    return NextResponse.redirect(login);
  }

  const response = NextResponse.redirect(new URL(`/p/${slug}`, request.url));
  response.cookies.set(COOKIE_NAME, createSessionToken(slug), {
    httpOnly: true,
    secure: sessionCookieSecure(),
    sameSite: "lax",
    path: "/",
    maxAge: MAX_AGE_SECONDS,
  });

  return response;
}
