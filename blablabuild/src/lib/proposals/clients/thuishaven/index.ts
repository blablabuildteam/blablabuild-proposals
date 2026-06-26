import type { ProposalLocale } from "../../locale";
import type { ProposalBundle } from "../../types";
import {
  buildThuishavenBundle,
  buildThuishavenBundles,
} from "./build";

export { buildThuishavenBundle, buildThuishavenBundles } from "./build";

/** @deprecated Use buildThuishavenBundle(locale) or buildThuishavenBundles() */
export const bundle: ProposalBundle = buildThuishavenBundle("nl");

export function getThuishavenBundles(): Record<ProposalLocale, ProposalBundle> {
  return buildThuishavenBundles();
}
