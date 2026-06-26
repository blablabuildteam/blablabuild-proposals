import type { ProposalLocale } from "../../locale";
import type { ProposalBundle } from "../../types";
import { buildAbCapitalBundle, buildAbCapitalBundles } from "./build";

export { buildAbCapitalBundle, buildAbCapitalBundles } from "./build";

/** @deprecated Use buildAbCapitalBundle(locale) or buildAbCapitalBundles() */
export const bundle: ProposalBundle = buildAbCapitalBundle("nl");

export function getAbCapitalBundles(): Record<ProposalLocale, ProposalBundle> {
  return buildAbCapitalBundles();
}
