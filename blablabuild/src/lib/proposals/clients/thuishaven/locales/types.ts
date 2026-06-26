import type { ProposalSectionId } from "@/components/proposal-library/types";
import type {
  ImpactMatrixData,
  ProposalAccess,
  ProposalDebrief,
  ProposalMeta,
  ProposalSlideCopy,
  ProposalUnderstanding,
} from "../../../types";
import type { WorkflowLocaleText } from "../workflows.base";
import type {
  PackageSource,
  PhaseSource,
  PlatformBundleSource,
} from "@foundation/types";

export type ThuishavenLocaleContent = {
  meta: ProposalMeta;
  debrief: ProposalDebrief;
  impactMatrix: ImpactMatrixData;
  understanding: ProposalUnderstanding;
  access: ProposalAccess;
  slideCopy: ProposalSlideCopy;
  wayOfWorking: readonly { title: string; body: string }[];
  slideLabels: Record<ProposalSectionId, string>;
  aiBuildNote: string;
  phases: readonly PhaseSource[];
  packages: readonly PackageSource[];
  platformBundles: readonly PlatformBundleSource[];
  workflows: Record<string, WorkflowLocaleText>;
};
