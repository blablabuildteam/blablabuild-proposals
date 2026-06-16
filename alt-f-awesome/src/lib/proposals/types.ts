import type { SlideConfig, Workflow } from "@/lib/types";

export type ProposalMeta = {
  slug: string;
  clientName: string;
  title: string;
  subtitle: string;
};

export type ProposalDebrief = {
  quote: string;
  quoteSource: string;
  summary: string;
  ecosystem: string;
  focusAreas: string;
  date: string;
};

export type ProposalBundle = {
  meta: ProposalMeta;
  debrief: ProposalDebrief;
  workflows: Workflow[];
  riceSorted: Workflow[];
  phases: readonly {
    id: string;
    label: string;
    period: string;
    invest: string;
    headline: string;
    workflows: readonly string[];
    outcomes: readonly string[];
  }[];
  packages: readonly {
    name: string;
    tag: string;
    workflows: string;
    weeks: string;
    invest: string;
    description: string;
    recommended?: boolean;
  }[];
  wayOfWorking: readonly { title: string; body: string }[];
  slideConfigs: SlideConfig[];
  slideLabels: string[];
  AI_BUILD_NOTE: string;
};

export type ProposalContextValue = ProposalBundle & {
  getWorkflow: (id: string) => Workflow | undefined;
};

export type PublicProposal = {
  slug: string;
  clientName: string;
};
