import { NextResponse } from "next/server";
import { verifyCredentials } from "@/lib/auth/credentials";
import {
  COOKIE_NAME,
  MAX_AGE_SECONDS,
  createSessionToken,
} from "@/lib/auth/session";

export async function POST(request: Request) {
  let body: { client?: string; password?: string };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const client = body.client?.trim() ?? "";
  const password = body.password ?? "";

  if (!client || !password) {
    return NextResponse.json(
      { error: "Client and password are required" },
      { status: 400 },
    );
  }

  const slug = verifyCredentials(client, password);

  if (!slug) {
    return NextResponse.json(
      { error: "Invalid client or password" },
      { status: 401 },
    );
  }

  const token = createSessionToken(slug);
  const response = NextResponse.json({ slug, redirect: `/p/${slug}` });

  response.cookies.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: MAX_AGE_SECONDS,
  });

  return response;
}
