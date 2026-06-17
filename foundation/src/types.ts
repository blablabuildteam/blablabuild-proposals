export type Bucket = "Quick Win" | "Incremental" | "Big Bet";
export type Phase = "NOW" | "NEXT" | "NEAR" | "BACKLOG" | "PARALLEL";
export type ImpactLevel = "Massive" | "High" | "Medium" | "Low";

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

export type EffortEstimate = {
  daysMin: number;
  daysMax: number;
  /** Display label, e.g. "2–3" */
  weeks: string;
  /** Display label, e.g. "8–10 days" */
  daysLabel: string;
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
  summary: string;
  why: string;
  benefits: string[];
  foundationFor?: string[];
  timeSaved: string;
  deliverables: string[];
};

export type PhaseSource = {
  id: string;
  label: string;
  period: string;
  headline: string;
  workflows: readonly string[];
  outcomes: readonly string[];
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
};

export type ProposalContentConfig = {
  rateCard: RateCard;
  aiBuildNote: string;
};
