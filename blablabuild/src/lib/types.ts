export type Bucket = "Quick Win" | "Incremental" | "Big Bet";
export type Phase = "NOW" | "NEXT" | "NEAR" | "BACKLOG" | "PARALLEL";
export type ImpactLevel = "Massive" | "High" | "Medium" | "Low";

export type Workflow = {
  id: string;
  title: string;
  bucket: Bucket;
  reach: number;
  impact: number;
  impactLabel: ImpactLevel;
  confidencePct: number;
  effort: number;
  riceReported: number;
  phaseOriginal: Phase;
  phaseRevised: Phase;
  weeks: string;
  effortDays: string;
  investment: string;
  summary: string;
  why: string;
  benefits: string[];
  foundationFor?: string[];
  timeSaved: string;
  deliverables: string[];
};

export type SlideVariant = "light" | "blue";

export type SlideConfig = {
  label: string;
  variant: SlideVariant;
};
