import type { ProposalLocale } from "./locale";
import type { ProposalBundle } from "./types";

export type ClientProposal = {
  slug: string;
  bundles: Record<ProposalLocale, ProposalBundle>;
};

export function getClientProposalMap(
  clients: readonly ClientProposal[],
): Record<string, { bundles: Record<ProposalLocale, ProposalBundle> }> {
  return Object.fromEntries(
    clients.map(({ slug, bundles }) => [slug, { bundles }]),
  );
}
