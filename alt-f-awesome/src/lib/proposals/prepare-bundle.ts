import { prepareBundleForClient as prepareBundle } from "@foundation/proposals/prepare-bundle";
import type { ProposalBundle } from "./types";

export function prepareBundleForClient(bundle: ProposalBundle): ProposalBundle {
  return prepareBundle(bundle) as ProposalBundle;
}
