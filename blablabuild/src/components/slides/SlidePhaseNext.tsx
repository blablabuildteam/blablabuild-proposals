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
      <div className="mb-6 rounded-xl bg-[var(--brand-primary)] px-5 py-6 text-white sm:px-8 sm:py-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-bold tracking-wide text-[var(--brand-accent)] uppercase">
              {phase.label} · {phase.period}
            </p>
            <h1 className="mt-1 text-2xl font-bold sm:text-3xl">
              {phase.headline}
            </h1>
          </div>
          <p className="font-mono text-2xl font-bold sm:text-3xl">
            {phase.invest}
          </p>
        </div>
        <div className="mt-4 border-t border-white/20 pt-4">
          <BulletList onDark items={[...phase.outcomes]} />
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {items.map((wf) => wf && <WorkflowCompact key={wf.id} wf={wf} />)}
      </div>

      {wf9 && (
        <div className="mt-5 rounded-xl border border-dashed border-[var(--brand-primary)]/30 bg-white p-4">
          <p className="text-xs font-bold text-[var(--brand-primary)] uppercase">
            {parallel.label} · {parallel.invest}
          </p>
          <div className="mt-3">
            <WorkflowCompact wf={wf9} />
          </div>
        </div>
      )}
    </div>
  );
}
