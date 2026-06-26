import { buildPasswordlessAccessUrl } from "@foundation/auth/access-link";
import {
  getClientProposalMap,
  type ClientProposal,
} from "@foundation/proposals/clients";
import { createProposalRegistry } from "@foundation/proposals/registry";
import type { ProposalLocale } from "./locale";
import { CLIENT_PROPOSALS } from "./clients";
import { defaultProposalAccess } from "./access-defaults";
import type { ProposalBundle, PublicProposal } from "./types";

const registry = createProposalRegistry({
  proposals: getClientProposalMap(CLIENT_PROPOSALS),
  defaultAccess: defaultProposalAccess,
  buildPasswordlessAccessUrl,
});

export function getProposalBundles(
  slug: string,
): Record<ProposalLocale, ProposalBundle> | undefined {
  return registry.getProposalBundles(slug) as
    | Record<ProposalLocale, ProposalBundle>
    | undefined;
}

export function getProposalBundle(
  slug: string,
  locale: ProposalLocale = "nl",
): ProposalBundle | undefined {
  return registry.getProposalBundle(slug, locale) as ProposalBundle | undefined;
}

export function getPublicProposal(
  slug: string,
  locale: ProposalLocale = "nl",
): PublicProposal | undefined {
  return registry.getPublicProposal(slug, locale);
}

export function getPublicProposals(
  locale: ProposalLocale = "nl",
): PublicProposal[] {
  return registry.getPublicProposals(locale);
}

export function getPublicProposalsLocalized(): Record<
  ProposalLocale,
  PublicProposal[]
> {
  return registry.getPublicProposalsLocalized();
}

export const resolveClientSlug = registry.resolveClientSlug;
export const getPasswordForSlug = registry.getPasswordForSlug;

export { buildShareableAccessUrl } from "./access-url";
export { buildPasswordlessAccessUrl };

export type { ClientProposal };
