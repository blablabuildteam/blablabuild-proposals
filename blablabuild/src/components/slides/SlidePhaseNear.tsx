"use client";

import { useProposal } from "@/components/ProposalProvider";
import { WorkflowRow } from "./WorkflowDetailCard";

export function SlidePhaseNear() {
  const { phases, getWorkflow } = useProposal();
  const phase = phases[3];
  const items = phase.workflows
    .map((id) => getWorkflow(id))
    .filter(Boolean);

  return (
    <div>
      <div className="mb-6 flex items-start gap-4">
        <p className="font-mono text-5xl font-bold text-[var(--brand-fg)]/15 sm:text-7xl">
          03
        </p>
        <div>
          <p className="text-xs font-bold tracking-wide text-[var(--brand-primary)] uppercase">
            {phase.label} · {phase.period}
          </p>
          <h1 className="text-2xl font-bold text-[var(--brand-fg)] sm:text-3xl">
            {phase.headline}
          </h1>
          <p className="mt-1 font-mono text-lg font-bold text-[var(--brand-primary)]">
            {phase.invest}
          </p>
        </div>
      </div>

      <div className="mb-5 flex flex-wrap gap-2">
        {phase.outcomes.map((o) => (
          <span
            key={o}
            className="rounded-full bg-[#E8E8E8] px-3 py-1 text-xs font-medium text-[var(--brand-fg-secondary)]"
          >
            {o}
          </span>
        ))}
      </div>

      <div className="rounded-xl border border-[var(--brand-border)] bg-white px-4 sm:px-5">
        {items.map((wf) => wf && <WorkflowRow key={wf.id} wf={wf} />)}
      </div>

      <p className="mt-4 text-xs text-[var(--brand-muted)]">
        WF10 starts with discovery only — build scope decided after deep-dive.
      </p>
    </div>
  );
}
