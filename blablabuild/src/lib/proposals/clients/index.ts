import { buildAdsomniaBundles } from "./adsomnia";
import type { ClientProposal } from "@foundation/proposals/clients";
import { buildAbCapitalBundles } from "./ab-capital";
import { buildThuishavenBundles } from "./thuishaven";
import { buildZappieboxBundles } from "./zappiebox";

export const CLIENT_PROPOSALS: readonly ClientProposal[] = [
  { slug: "adsomnia", bundles: buildAdsomniaBundles() },
  { slug: "ab-capital", bundles: buildAbCapitalBundles() },
  { slug: "thuishaven", bundles: buildThuishavenBundles() },
  { slug: "zappiebox", bundles: buildZappieboxBundles() },
];
