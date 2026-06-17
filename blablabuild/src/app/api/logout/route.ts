import { NextResponse } from "next/server";
import { sessionCookieSecure } from "@/lib/auth/cookies";
import { COOKIE_NAME } from "@/lib/auth/session";

export async function POST() {
  const response = NextResponse.json({ ok: true });
  response.cookies.set(COOKIE_NAME, "", {
    httpOnly: true,
    secure: sessionCookieSecure(),
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });
  return response;
}
