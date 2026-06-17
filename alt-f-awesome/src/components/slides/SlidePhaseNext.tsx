"use client";

import { useProposal } from "@/components/ProposalProvider";
import { BulletList } from "./shared";
import { WorkflowCompact } from "./WorkflowDetailCard";

export function SlidePhaseNext() {
  const { phases, getWorkflow } = useProposal();
  const phase = phases[1];
  const parallel = phases[2];
  const items = phase.workflows.map((id) => getWorkflow(id)).filter(Boolean);
  const wf9 = getWorkflow("WF9");

  return (
    <div>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-6xl font-bold leading-none text-[var(--brand-accent)] [-webkit-text-stroke:1.5px_var(--brand-fg)] sm:text-8xl">
            02
          </p>
          <p className="mt-2 text-xs font-bold tracking-wide text-[var(--brand-primary)] uppercase">
            {phase.label}
          </p>
          <h1 className="mt-1 text-2xl font-bold text-[var(--brand-fg)] sm:text-3xl">
            {phase.headline}
          </h1>
        </div>
        <div className="rounded-[var(--brand-radius)] bg-[var(--brand-accent)] px-5 py-3 text-right">
          <p className="font-mono text-xl font-bold text-[var(--brand-fg)] sm:text-2xl">
            {phase.invest}
          </p>
          <p className="text-xs font-medium text-[var(--brand-fg)]/70">{phase.period}</p>
        </div>
      </div>

      <div className="mb-5 rounded-[var(--brand-radius)] border border-[var(--brand-border)] bg-white p-4 sm:p-5">
        <p className="mb-2 text-xs font-bold text-[var(--brand-muted)] uppercase">Outcomes</p>
        <BulletList items={[...phase.outcomes]} />
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {items.map((wf) => wf && <WorkflowCompact key={wf.id} wf={wf} />)}
      </div>

      {wf9 && (
        <div className="mt-5 rounded-[var(--brand-radius)] border border-dashed border-[var(--brand-primary)]/30 bg-white p-4 sm:p-5">
          <p className="mb-3 text-xs font-bold text-[var(--brand-muted)] uppercase">
            {parallel.label} · {parallel.invest}
          </p>
          <WorkflowCompact wf={wf9} />
        </div>
      )}
    </div>
  );
}
