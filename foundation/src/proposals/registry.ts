import type { ProposalLocale } from "./locale";
import { DEFAULT_PROPOSAL_LOCALE } from "./locale";
import type { ProposalAccess, ProposalBundle, PublicProposal } from "./types";

export type LocalizedProposalMap = Record<
  string,
  { bundles: Record<ProposalLocale, ProposalBundle> }
>;

export type ProposalRegistryOptions = {
  proposals: LocalizedProposalMap;
  defaultAccess: ProposalAccess;
  buildPasswordlessAccessUrl: (
    slug: string,
    options?: { name?: string; basePath?: string; maxAgeDays?: number },
  ) => string;
};

function resolveAccess(
  bundle: ProposalBundle,
  defaultAccess: ProposalAccess,
): ProposalAccess {
  if (!bundle.access) return defaultAccess;
  return {
    landing: {
      ...defaultAccess.landing,
      ...bundle.access.landing,
    },
  };
}

export function createProposalRegistry({
  proposals,
  defaultAccess,
  buildPasswordlessAccessUrl,
}: ProposalRegistryOptions) {
  function getProposalBundles(
    slug: string,
  ): Record<ProposalLocale, ProposalBundle> | undefined {
    return proposals[slug]?.bundles;
  }

  function getProposalBundle(
    slug: string,
    locale: ProposalLocale = DEFAULT_PROPOSAL_LOCALE,
  ): ProposalBundle | undefined {
    return getProposalBundles(slug)?.[locale];
  }

  function getPublicProposal(
    slug: string,
    locale: ProposalLocale = DEFAULT_PROPOSAL_LOCALE,
  ): PublicProposal | undefined {
    const bundle = getProposalBundle(slug, locale);
    if (!bundle) return undefined;

    const { meta } = bundle;
    return {
      slug: meta.slug,
      clientName: meta.clientName,
      title: meta.title,
      subtitle: meta.subtitle,
      access: resolveAccess(bundle, defaultAccess),
    };
  }

  function getPublicProposals(
    locale: ProposalLocale = DEFAULT_PROPOSAL_LOCALE,
  ): PublicProposal[] {
    return Object.keys(proposals)
      .map((slug) => getPublicProposal(slug, locale))
      .filter((p): p is PublicProposal => Boolean(p));
  }

  function getPublicProposalsLocalized(): Record<
    ProposalLocale,
    PublicProposal[]
  > {
    return {
      en: getPublicProposals("en"),
      nl: getPublicProposals("nl"),
    };
  }

  function resolveClientSlug(clientInput: string): string | null {
    const normalized = clientInput.trim().toLowerCase();
    if (!normalized) return null;

    for (const slug of Object.keys(proposals)) {
      const bundle = getProposalBundle(slug);
      if (!bundle) continue;
      const { clientName } = bundle.meta;
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

  function getPasswordForSlug(slug: string): string | undefined {
    const envKey = `PROPOSAL_${slug.toUpperCase().replace(/-/g, "_")}_PASSWORD`;
    return process.env[envKey];
  }

  return {
    getProposalBundles,
    getProposalBundle,
    getPublicProposal,
    getPublicProposals,
    getPublicProposalsLocalized,
    resolveClientSlug,
    getPasswordForSlug,
    buildPasswordlessAccessUrl,
  };
}
