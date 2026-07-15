import type { BuiltPhase } from "../proposal";
import type { BuiltPlatformBundle } from "../platform";
import type { BuiltWorkflow } from "../workflow";

export type SlideVariant = "light" | "blue";

export type SlideConfig = {
  sectionId: string;
  label: string;
  variant: SlideVariant;
};

export type ProposalMeta = {
  slug: string;
  clientName: string;
  clientLogo?: string;
  title: string;
  subtitle: string;
  /** Override the locale shown on first visit (before localStorage is set). */
  defaultLocale?: "en" | "nl";
  /** Hide the language switcher (e.g. for single-language proposals). */
  showLocaleSwitcher?: boolean;
};

export type ProposalAccessLanding = {
  kicker: string;
  greetingTemplate?: string;
  clientLabel: string;
  passwordLabel: string;
  passwordHint?: string;
  /** Use "text" for quiz-style answers instead of masked passwords */
  passwordInputType?: "text" | "password";
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

export type ProposalDebriefProject = {
  title: string;
  description: string;
  investment: string;
  /** Slide index to navigate to when the card is clicked */
  slideIndex?: number;
};

export type ProposalDebrief = {
  quote: string;
  quoteSource: string;
  summary?: string;
  focusAreas: string;
  ecosystem?: string;
  date: string;
  /** Optional GIF shown top-right on the debrief slide */
  heroGif?: string;
  /** When provided, replaces the quote block with project overview cards */
  projects?: readonly ProposalDebriefProject[];
};

export type ProposalGoal = {
  title: string;
  body?: string;
};

export type ProposalUnderstandingGrowth = {
  strengthsLabel: string;
  strengths: readonly string[];
  ambitionLabel: string;
  ambition: readonly string[];
  gapLabel: string;
  gap: readonly string[];
  opportunitiesLabel?: string;
  opportunities?: readonly ProposalGoal[];
};

export type ProposalUnderstanding = {
  layout?: "default" | "growth";
  growth?: ProposalUnderstandingGrowth;
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
  expectedValue: string;
  prerequisites: string;
  unlocks: string;
  interconnectivity: string;
  interconnectivityHint: string;
  feedsFrom: string;
  feedsInto: string;
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
  prioScoreLabel?: string;
  fullRiceRanking: string;
  phaseOneBadge: string;
  showingWorkflows: (filtered: number, total: number) => string;
  filterByPhase: string;
  phaseFilters: Record<string, string>;
  phaseLabels: Record<string, string>;
  bucketLabels: Record<string, string>;
  impactLabels: Record<string, string>;
  domainLabels?: Record<string, string>;
};

export type ProposalUiCopyOverride = Omit<ProposalUiCopy, "showingWorkflows"> & {
  showingWorkflowsTemplate?: string;
};

export type ProposalSlideCopy = {
  ui?: Partial<ProposalUiCopyOverride> & {
    phaseFilters?: Partial<Record<string, string>>;
    phaseLabels?: Partial<Record<string, string>>;
    bucketLabels?: Partial<Record<string, string>>;
    impactLabels?: Partial<Record<string, string>>;
    domainLabels?: Partial<Record<string, string>>;
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
    backlogLabel?: string;
    backlogBody?: string;
    connectionHint?: string;
    connectionTitle?: string;
    connectionFallback?: string;
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
    phaseRationales?: Partial<Record<string, string>>;
    workflowRationale?: Partial<Record<string, string>>;
    riceBreakdown?: {
      title: string;
      reach: string;
      impact: string;
      confidence: string;
      effort: string;
    };
    wf0Note: string;
  };
  investment?: {
    kicker: string;
    title: string;
    subtitle?: string;
    platformBundleTitle?: string;
    platformStandaloneLabel?: string;
    platformCombinedLabel?: string;
    platformSavingsLabel?: string;
    platformFoundationLabel?: string;
    platformLayersLabel?: string;
    platformNote?: string;
  };
  nextSteps?: {
    kicker: string;
    title: string;
    subtitle: string;
    steps: readonly { n: string; title: string; body: string }[];
  };
  phaseBacklog?: { note: string };
};

export type ProposalBundle = {
  meta: ProposalMeta;
  access?: ProposalAccess;
  debrief: ProposalDebrief;
  /** When "combined", debrief slide includes understanding content (no separate tab). */
  debriefVariant?: "default" | "combined";
  impactMatrix?: ImpactMatrixData;
  understanding?: ProposalUnderstanding;
  slideCopy?: ProposalSlideCopy;
  workflows: BuiltWorkflow[];
  riceSorted: BuiltWorkflow[];
  phases: readonly BuiltPhase[];
  packages: readonly {
    name: string;
    tag: string;
    workflows: string;
    weeks: string;
    invest: string;
    description: string;
    recommended?: boolean;
  }[];
  platformBundles?: readonly BuiltPlatformBundle[];
  wayOfWorking: readonly { title: string; body: string }[];
  slideConfigs: SlideConfig[];
  slideLabels: string[];
  AI_BUILD_NOTE: string;
};

export type ProposalContextValue = ProposalBundle & {
  getWorkflow: (id: string) => BuiltWorkflow | undefined;
};

export type PublicProposal = {
  slug: string;
  clientName: string;
  title: string;
  subtitle: string;
  access: ProposalAccess;
  showLocaleSwitcher?: boolean;
};
