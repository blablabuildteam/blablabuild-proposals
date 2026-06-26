import type { ClientProposal } from "@foundation/proposals/clients";
import { buildAbCapitalBundles } from "./ab-capital";
import { buildThuishavenBundles } from "./thuishaven";

export const CLIENT_PROPOSALS: readonly ClientProposal[] = [
  { slug: "ab-capital", bundles: buildAbCapitalBundles() },
  { slug: "thuishaven", bundles: buildThuishavenBundles() },
];
