import type { EurRange, RateCard, WorkflowSource } from "./types";

const EUR = new Intl.NumberFormat("nl-NL", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

/** Format €6000 → "€6k", €12500 → "€13k" (rounded to nearest k) */
export function formatEurK(amount: number): string {
  const k = Math.round(amount / 1000);
  return `€${k}k`;
}

export function formatEurRange(range: EurRange): string {
  return `${formatEurK(range.min)}–${formatEurK(range.max)}`;
}

/** Investment string for proposals: "€14–21k" */
export function formatInvestment(range: EurRange): string {
  const minK = Math.round(range.min / 1000);
  const maxK = Math.round(range.max / 1000);
  return `€${minK}–${maxK}k`;
}

/** Estimate cost from day range × rate card */
export function estimateCostFromDays(
  daysMin: number,
  daysMax: number,
  rateCard: RateCard,
): EurRange {
  return {
    min: Math.round(daysMin * rateCard.dayRateMin),
    max: Math.round(daysMax * rateCard.dayRateMax),
  };
}

/** Estimate days from RICE effort (person-months) */
export function estimateDaysFromEffort(
  effortMonths: number,
  rateCard: RateCard,
  spread = 0.2,
): { daysMin: number; daysMax: number } {
  const base = effortMonths * rateCard.daysPerEffortMonth;
  return {
    daysMin: Math.max(1, Math.round(base * (1 - spread))),
    daysMax: Math.max(1, Math.round(base * (1 + spread))),
  };
}

export function formatDaysLabel(daysMin: number, daysMax: number): string {
  return `${daysMin}–${daysMax} days`;
}

export function sumRanges(ranges: EurRange[]): EurRange {
  return ranges.reduce(
    (acc, r) => ({
      min: acc.min + r.min,
      max: acc.max + r.max,
    }),
    { min: 0, max: 0 },
  );
}

export function sumWorkflowCosts(
  workflowIds: readonly string[],
  workflows: WorkflowSource[],
): EurRange {
  const byId = new Map(workflows.map((w) => [w.id, w]));
  const ranges = workflowIds
    .map((id) => byId.get(id)?.cost)
    .filter((c): c is EurRange => c !== undefined);
  return sumRanges(ranges);
}

/** Check hand-tuned cost is within ~15% of day-rate estimate */
export function costWithinEstimate(
  cost: EurRange,
  estimate: EurRange,
  tolerancePct = 0.15,
): boolean {
  const midCost = (cost.min + cost.max) / 2;
  const midEst = (estimate.min + estimate.max) / 2;
  if (midEst === 0) return true;
  return Math.abs(midCost - midEst) / midEst <= tolerancePct;
}
