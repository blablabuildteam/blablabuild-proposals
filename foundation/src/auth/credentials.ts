export type CredentialsVerifier = {
  resolveClientSlug: (clientInput: string) => string | null;
  getPasswordForSlug: (slug: string) => string | undefined;
};

export function createCredentialsVerifier({
  resolveClientSlug,
  getPasswordForSlug,
}: CredentialsVerifier) {
  return function verifyCredentials(
    clientInput: string,
    password: string,
  ): string | null {
    const slug = resolveClientSlug(clientInput);
    if (!slug) return null;

    const expected = getPasswordForSlug(slug);
    if (!expected) return null;

    if (password !== expected) return null;

    return slug;
  };
}
