import type { SlideConfig, Workflow } from "@/lib/types";

export type ProposalMeta = {
  slug: string;
  clientName: string;
  title: string;
  subtitle: string;
};

export type ProposalAccessLanding = {
  kicker: string;
  greetingTemplate?: string;
  clientLabel: string;
  passwordLabel: string;
  passwordHint?: string;
  submit: string;
  submitting: string;
  opening: string;
  sessionExpired: string;
  invalidAccessLink: string;
  accessDenied: string;
  genericError: string;
  confidentialNote?: string;
};

export type ProposalAccess = {
  landing: ProposalAccessLanding;
};

export type ImpactMatrixPostIt = {
  id: string;
  label: string;
  x: number;
  y: number;
  rotation?: number;
};

export type ImpactMatrixData = {
  quadrants: {
    quickWins: string;
    bigBets: string;
    incremental: string;
    moneySinks: string;
  };
  postIts: readonly ImpactMatrixPostIt[];
  axisX: { low: string; high: string };
  axisY: { low: string; high: string };
  caption?: string;
};

export type ProposalDebrief = {
  quote: string;
  quoteSource: string;
  summary?: string;
  focusAreas: string;
  ecosystem?: string;
  date: string;
};

export type ProposalGoal = {
  title: string;
  body?: string;
};

export type ProposalUnderstanding = {
  klanten: { label: string; value: string; hint?: string };
  tools?: { label: string; value: string; hint?: string };
  pillarsLabel: string;
  pillars: readonly string[];
  kicker: string;
  title: string;
  subtitle: string;
  goalsLabel: string;
  goals: readonly ProposalGoal[];
  frictionLabel: string;
  friction: readonly string[];
};

export type ProposalUiCopy = {
  proposalFor: string;
  weekPrefix: string;
  outcomes: string;
  why: string;
  timeBack: string;
  openUseCase: string;
  useCase: string;
  backToOverview: string;
  whyThisMatters: string;
  whatYouGet: string;
  whatWeDeliver: string;
  unlocks: string;
  impactSuffix: string;
  exit: string;
  previous: string;
  next: string;
  useCaseFallback: string;
  tableRank: string;
  tableId: string;
  tableInitiative: string;
  tablePhaseInvest: string;
  tableRice: string;
  fullRiceRanking: string;
  phaseOneBadge: string;
  showingWorkflows: (filtered: number, total: number) => string;
  filterByPhase: string;
  phaseFilters: Record<string, string>;
  phaseLabels: Record<string, string>;
  bucketLabels: Record<string, string>;
  impactLabels: Record<string, string>;
};

export type ProposalUiCopyOverride = Omit<ProposalUiCopy, "showingWorkflows"> & {
  /** Serializable pattern for client-side formatting, e.g. "{filtered} of {total} workflows" */
  showingWorkflowsTemplate?: string;
};

export type ProposalSlideCopy = {
  ui?: Partial<ProposalUiCopyOverride> & {
    phaseFilters?: Partial<Record<string, string>>;
    phaseLabels?: Partial<Record<string, string>>;
    bucketLabels?: Partial<Record<string, string>>;
    impactLabels?: Partial<Record<string, string>>;
  };
  debriefKicker?: string;
  wayOfWorking?: {
    kicker: string;
    title: string;
    subtitle: string;
    aiTitle: string;
    aiBody: string;
    controlTitle: string;
    controlBody: string;
  };
  approach?: {
    kicker: string;
    title: string;
    subtitle: string;
    parallelLabel: string;
    parallelBody: string;
  };
  workflows?: { kicker: string; title: string; subtitle: string };
  prioritization?: {
    kicker: string;
    title: string;
    subtitle: string;
    startHere: string;
    phaseOne: string;
    riceNote: string;
    phaseOneRationale: string;
    workflowRationale?: Partial<Record<string, string>>;
    wf0Note: string;
  };
  investment?: { kicker: string; title: string; subtitle?: string };
  nextSteps?: {
    kicker: string;
    title: string;
    subtitle: string;
    steps: readonly { n: string; title: string; body: string }[];
  };
  phaseNear?: { wf10Note: string };
};

export type ProposalBundle = {
  meta: ProposalMeta;
  access?: ProposalAccess;
  debrief: ProposalDebrief;
  impactMatrix?: ImpactMatrixData;
  understanding?: ProposalUnderstanding;
  slideCopy?: ProposalSlideCopy;
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
  title: string;
  subtitle: string;
  access: ProposalAccess;
};
