/** Standard RICE: (Reach × Impact × Confidence) ÷ Effort */
export function computeRice(
  reach: number,
  impact: number,
  confidencePct: number,
  effort: number,
): number {
  const confidence = confidencePct / 100;
  return (reach * impact * confidence) / effort;
}

export function roundRice(value: number): number {
  return Math.round(value);
}
