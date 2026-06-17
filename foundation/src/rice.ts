import type { Bucket, ImpactLevel, RiceInput } from "./types";
import { IMPACT_SCALE } from "./types";

/** Standard RICE: (Reach × Impact × Confidence) ÷ Effort */
export function computeRice(
  reach: number,
  impact: number,
  confidencePct: number,
  effort: number,
): number {
  if (effort <= 0) return 0;
  const confidence = confidencePct / 100;
  return (reach * impact * confidence) / effort;
}

export function computeRiceFromInput(rice: RiceInput): number {
  return computeRice(rice.reach, rice.impact, rice.confidencePct, rice.effort);
}

export function roundRice(value: number): number {
  return Math.round(value);
}

export function impactFromLabel(label: ImpactLevel): number {
  return IMPACT_SCALE[label];
}

/** Suggest bucket from RICE score (override in source when workshop says otherwise) */
export function suggestBucket(riceScore: number): Bucket {
  if (riceScore >= 25) return "Quick Win";
  if (riceScore >= 10) return "Incremental";
  return "Big Bet";
}

export function sortByRice<T extends { riceReported: number }>(items: T[]): T[] {
  return [...items].sort((a, b) => b.riceReported - a.riceReported);
}

export function validateRice(
  rice: RiceInput,
  reported: number,
  tolerance = 1,
): { ok: boolean; computed: number; reported: number } {
  const computed = roundRice(computeRiceFromInput(rice));
  return {
    ok: Math.abs(computed - reported) <= tolerance,
    computed,
    reported,
  };
}
