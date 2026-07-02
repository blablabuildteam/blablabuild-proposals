export type Bucket = "Quick Win" | "Incremental" | "Big Bet";
export type Phase = "NOW" | "NEXT" | "NEAR" | "BACKLOG" | "PARALLEL";
export type ImpactLevel = "Massive" | "High" | "Medium" | "Low";
export type WorkflowDomain = "Operations" | "Marketing" | "Sales";

/** RICE inputs — Reach × Impact × Confidence ÷ Effort */
export type RiceInput = {
  reach: number;
  /** Numeric impact (e.g. 3 = Massive, 2.5 = High, 1 = Medium, 0.5 = Low) */
  impact: number;
  confidencePct: number;
  /** Person-months on 1–5 scale */
  effort: number;
};

export type ImpactLabel = ImpactLevel;

export const IMPACT_SCALE: Record<ImpactLevel, number> = {
  Massive: 3,
  High: 2.5,
  Medium: 1,
  Low: 0.5,
};

export type EurRange = {
  min: number;
  max: number;
};

/** Widen min/max for pre-scope proposals (e.g. −25% min, +30% max) */
export type CostScopeBuffer = {
  lowerPct: number;
  upperPct: number;
};

export type EffortEstimate = {
  daysMin: number;
  daysMax: number;
  /** Display label, e.g. "2–3" */
  weeks: string;
  /** Display label, e.g. "8–10 days" */
  daysLabel: string;
};

/** Indicative follow-on phase (excluded from phase/package totals) */
export type ImplementationEstimate = {
  label: string;
  effort: EffortEstimate;
  cost: EurRange;
  /** When set, shown instead of formatted cost (e.g. "Nader te bepalen") */
  investmentLabel?: string;
};

/** Link to another workflow — optional qualifier adds context (e.g. "schonere data voor reporting") */
export type WorkflowRelation = {
  workflowId: string;
  qualifier?: string;
};

/** Source definition for a workflow — narrative + scoring + cost */
export type WorkflowSource = {
  id: string;
  title: string;
  bucket: Bucket;
  rice: RiceInput;
  impactLabel: ImpactLevel;
  phaseOriginal: Phase;
  phaseRevised: Phase;
  effort: EffortEstimate;
  cost: EurRange;
  /** When set, shown instead of formatted cost; use with excludeFromTotals for TBD pricing */
  investmentLabel?: string;
  /** Omit workflow cost from phase and package totals */
  excludeFromTotals?: boolean;
  /** Hide duration on cards and detail slides (e.g. discovery-only backlog items) */
  hideTimeline?: boolean;
  summary: string;
  why: string;
  benefits: string[];
  prerequisites?: WorkflowRelation[];
  unlocks?: WorkflowRelation[];
  timeSaved: string;
  deliverables: string[];
  /** Full expected value narrative shown under ballpark in detail view */
  expectedValue?: string;
  /** Footnote under ballpark (e.g. hardware excluded) */
  investmentNote?: string;
  /** Optional later-phase estimate (e.g. WF10 build after discovery) */
  implementationEstimate?: ImplementationEstimate;
  /** Shared platform bundle id when workflow is cheaper on combined build */
  platformId?: string;
  /** Operations, marketing or sales focus — shown on detail views */
  domainLabels?: readonly WorkflowDomain[];
};

export type PhaseCompanionSource = {
  /** Phase whose workflows appear alongside on this phase's detail slide */
  phaseId: string;
  style?: "highlight";
};

export type PhaseSource = {
  id: string;
  label: string;
  period: string;
  headline: string;
  workflows: readonly string[];
  outcomes: readonly string[];
  companions?: readonly PhaseCompanionSource[];
};

export type PackageSource = {
  name: string;
  tag: string;
  workflows: string;
  workflowIds: readonly string[];
  weeks: string;
  description: string;
  recommended?: boolean;
};

export type RateCard = {
  currency: "EUR";
  /** Billable day rate (AI-assisted delivery) */
  dayRateMin: number;
  dayRateMax: number;
  /** Working days per RICE effort point (person-month ≈ 20 days) */
  daysPerEffortMonth: number;
  /**
   * Delivery speed vs. traditional estimates (e.g. 5 = five times faster with AI-assisted build).
   * Discovery and integration-heavy work use a lower per-workflow multiplier instead.
   */
  aiSpeedMultiplier?: number;
};

/** compact = €5–7k; ballpark = €4.500 - €6.500 */
export type InvestmentFormat = "compact" | "ballpark";

export type ProposalContentConfig = {
  rateCard: RateCard;
  aiBuildNote: string;
  /** Optional widening of workflow cost ranges before display and rollups */
  costScopeBuffer?: CostScopeBuffer;
  investmentFormat?: InvestmentFormat;
};

/** Shared data platform — multiple workflows on one foundation (bundle pricing) */
export type PlatformLayerSource = {
  workflowId: string;
  label: string;
  effort: EffortEstimate;
  cost: EurRange;
};

export type PlatformBundleSource = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  workflowIds: readonly string[];
  foundation: { effort: EffortEstimate; cost: EurRange };
  layers: readonly PlatformLayerSource[];
  deliverables: readonly string[];
};
