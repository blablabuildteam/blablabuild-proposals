/** Secure cookies only on HTTPS deploys (e.g. Vercel). Local `next start` stays HTTP. */
export function sessionCookieSecure(): boolean {
  return process.env.VERCEL === "1";
}
