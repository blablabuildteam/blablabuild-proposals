import {
  getPasswordForSlug,
  resolveClientSlug,
} from "@/lib/proposals/registry";

export function verifyCredentials(
  clientInput: string,
  password: string,
): string | null {
  const slug = resolveClientSlug(clientInput);
  if (!slug) return null;

  const expected = getPasswordForSlug(slug);
  if (!expected) return null;

  if (password !== expected) return null;

  return slug;
}
