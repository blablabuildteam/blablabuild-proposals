import type { ProposalBundle, PublicProposal } from "./types";
import { defaultProposalAccess } from "./access-defaults";
import type { ProposalAccess } from "./types";

const bundles: Record<string, ProposalBundle> = {};

function resolveAccess(bundle: ProposalBundle): ProposalAccess {
  if (!bundle.access) return defaultProposalAccess;
  return {
    landing: {
      ...defaultProposalAccess.landing,
      ...bundle.access.landing,
    },
  };
}

export function getProposalBundle(slug: string): ProposalBundle | undefined {
  return bundles[slug];
}

export function getPublicProposal(slug: string): PublicProposal | undefined {
  const bundle = getProposalBundle(slug);
  if (!bundle) return undefined;

  const { meta } = bundle;
  return {
    slug: meta.slug,
    clientName: meta.clientName,
    title: meta.title,
    subtitle: meta.subtitle,
    access: resolveAccess(bundle),
  };
}

export function getPublicProposals(): PublicProposal[] {
  return Object.values(bundles).map((b) => ({
    slug: b.meta.slug,
    clientName: b.meta.clientName,
    title: b.meta.title,
    subtitle: b.meta.subtitle,
    access: resolveAccess(b),
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

export { buildShareableAccessUrl } from "./access-url";
export { buildPasswordlessAccessUrl } from "../auth/access-link";
