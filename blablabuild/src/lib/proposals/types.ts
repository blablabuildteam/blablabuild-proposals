export type {
  ImpactMatrixData,
  ImpactMatrixPostIt,
  ProposalAccess,
  ProposalAccessLanding,
  ProposalDebrief,
  ProposalGoal,
  ProposalMeta,
  ProposalSlideCopy,
  ProposalUiCopy,
  ProposalUiCopyOverride,
  ProposalUnderstanding,
  ProposalUnderstandingGrowth,
  PublicProposal,
  SlideVariant,
} from "@foundation/proposals/types";

import type {
  ProposalBundle as FoundationProposalBundle,
} from "@foundation/proposals/types";
import type { SlideVariant } from "@foundation/proposals/types";
import type { BuiltPlatformBundle } from "@foundation/platform";
import type { BuiltWorkflow } from "@foundation/workflow";
import type { ProposalSectionId } from "@/components/proposal-library/types";

export type Workflow = BuiltWorkflow;
export type PlatformBundle = BuiltPlatformBundle;

export type SlideConfig = {
  sectionId: ProposalSectionId;
  label: string;
  variant: SlideVariant;
};

export type ProposalBundle = Omit<FoundationProposalBundle, "slideConfigs"> & {
  slideConfigs: SlideConfig[];
};

export type ProposalContextValue = ProposalBundle & {
  getWorkflow: (id: string) => Workflow | undefined;
};
