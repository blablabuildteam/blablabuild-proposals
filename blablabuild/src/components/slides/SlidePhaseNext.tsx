"use client";

import { useProposal } from "@/components/ProposalProvider";
import { useProposalUi } from "@/lib/proposals/use-proposal-ui";
import { BulletList, HighlightedTitle } from "./shared";
import { WorkflowCompact, WorkflowInlinePanel } from "./WorkflowDetailCard";

export function SlidePhaseNext() {
  const { phases, getWorkflow } = useProposal();
  const ui = useProposalUi();
  const phase = phases[1];
  const parallel = phases.find((p) => p.id === "parallel");
  const items = phase.workflows.map((id) => getWorkflow(id)).filter(Boolean);
  const parallelWf = parallel
    ? parallel.workflows.map((id) => getWorkflow(id)).filter(Boolean)[0]
    : undefined;

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
          <h1 className="mt-1 text-2xl text-[var(--brand-fg)] sm:text-3xl">
            <HighlightedTitle text={phase.headline} variant="light" />
          </h1>
        </div>
        <div className="shrink-0 rounded-xl bg-[var(--brand-accent)] px-5 py-3 text-right">
          <p className="whitespace-nowrap font-mono text-xl font-bold text-[var(--brand-fg)] sm:text-2xl">
            {phase.invest}
          </p>
          <p className="whitespace-nowrap text-xs font-medium text-[var(--brand-fg)]/70">{phase.period}</p>
        </div>
      </div>

      {items.length === 1 && items[0]?.expectedValue && (
        <div className="mb-5 rounded-xl border-l-4 border-[var(--brand-primary)] bg-[var(--brand-bg)] p-4">
          <p className="mb-1.5 text-[10px] font-bold tracking-wide text-[var(--brand-primary)] uppercase">
            Pre-exploration
          </p>
          <p className="text-sm leading-relaxed text-[var(--brand-fg)]">
            {items[0].expectedValue}
          </p>
        </div>
      )}

      <div className="mb-5 rounded-xl border border-[var(--brand-border)] bg-white p-4 sm:p-5">
        <p className="mb-2 text-xs font-bold text-[var(--brand-muted)] uppercase">{ui.outcomes}</p>
        <BulletList items={[...phase.outcomes]} />
      </div>

      {items.length === 1 && items[0] && (
        <div className="mb-5 rounded-xl bg-[var(--brand-primary)] p-5 text-white sm:p-6">
          <h2 className="text-xl leading-snug sm:text-2xl">{items[0].title}</h2>
          <p className="mt-1.5 text-sm leading-relaxed text-white/80">{items[0].summary}</p>
        </div>
      )}

      {items.length === 1 && items[0] ? (
        <WorkflowInlinePanel wf={items[0]} showHeader={false} />
      ) : (
        <div className="grid gap-4 sm:grid-cols-3">
          {items.map((wf) => wf && <WorkflowCompact key={wf.id} wf={wf} />)}
        </div>
      )}

      {parallel && parallelWf && (
        <div className="mt-5 rounded-xl border border-dashed border-[var(--brand-primary)]/30 bg-white p-4 sm:p-5">
          <p className="mb-3 text-xs font-bold text-[var(--brand-muted)] uppercase">
            {parallel.label} · {parallel.invest}
          </p>
          <WorkflowCompact wf={parallelWf} />
        </div>
      )}
    </div>
  );
}
