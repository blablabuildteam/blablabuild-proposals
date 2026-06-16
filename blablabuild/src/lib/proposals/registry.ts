import { bundle as abCapitalBundle } from "./ab-capital";
import type { ProposalBundle, PublicProposal } from "./types";

const bundles: Record<string, ProposalBundle> = {
  "ab-capital": abCapitalBundle,
};

export function getProposalBundle(slug: string): ProposalBundle | undefined {
  return bundles[slug];
}

export function getPublicProposals(): PublicProposal[] {
  return Object.values(bundles).map((b) => ({
    slug: b.meta.slug,
    clientName: b.meta.clientName,
  }));
}

export function resolveClientSlug(clientInput: string): string | null {
  const normalized = clientInput.trim().toLowerCase();
  if (!normalized) return null;

  for (const bundle of Object.values(bundles)) {
    const { slug, clientName } = bundle.meta;
    if (
      normalized === slug ||
      normalized === clientName.toLowerCase() ||
      normalized.replace(/\s+/g, "-") === slug
    ) {
      return slug;
    }
  }
  return null;
}

export function getPasswordForSlug(slug: string): string | undefined {
  const envKey = `PROPOSAL_${slug.toUpperCase().replace(/-/g, "_")}_PASSWORD`;
  return process.env[envKey];
}
