import type { ProposalBundle, ProposalSlideCopy } from "./types";

/** Strip non-serializable fields before passing a bundle to client components. */
export function prepareBundleForClient(bundle: ProposalBundle): ProposalBundle {
  if (!bundle.slideCopy?.ui) return bundle;

  const ui = { ...bundle.slideCopy.ui } as Record<string, unknown>;
  delete ui.showingWorkflows;

  return {
    ...bundle,
    slideCopy: {
      ...bundle.slideCopy,
      ui: ui as ProposalSlideCopy["ui"],
    },
  };
}
