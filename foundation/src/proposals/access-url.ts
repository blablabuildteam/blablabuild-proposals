const SLUG_PARAMS = ["p", "return", "proposal"] as const;

export function resolveAccessSlug(
  params: Pick<URLSearchParams, "get">,
): string | null {
  for (const key of SLUG_PARAMS) {
    const value = params.get(key)?.trim();
    if (value) return value;
  }
  return null;
}

export function resolveContactName(
  params: Pick<URLSearchParams, "get">,
): string | null {
  const name = params.get("naam") ?? params.get("name");
  return name?.trim() || null;
}

export function resolveAccessKey(
  params: Pick<URLSearchParams, "get">,
): string | null {
  const key = params.get("key") ?? params.get("token");
  return key?.trim() || null;
}

/** Build a login URL with proposal context (password still required). */
export function buildShareableAccessUrl(
  slug: string,
  options?: { name?: string; basePath?: string },
): string {
  const url = new URL(options?.basePath ?? "/", "http://local");
  url.searchParams.set("p", slug);
  if (options?.name?.trim()) {
    url.searchParams.set("naam", options.name.trim());
  }
  return `${url.pathname}${url.search}`;
}
