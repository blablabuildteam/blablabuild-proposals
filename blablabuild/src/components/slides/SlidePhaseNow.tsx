"use client";

import { useProposal } from "@/components/ProposalProvider";
import { useProposalUi } from "@/lib/proposals/use-proposal-ui";
import { BulletList, HighlightedTitle } from "./shared";
import { WorkflowCompact, WorkflowCompactHighlight } from "./WorkflowDetailCard";

export function SlidePhaseNow() {
  const { phases, getWorkflow } = useProposal();
  const ui = useProposalUi();
  const phase = phases.find((p) => p.id === "now") ?? phases[0];
  const items = phase.workflows.map((id) => getWorkflow(id)).filter(Boolean);

  const companionSections =
    phase.companions?.map((companion) => {
      const companionPhase = phases.find((p) => p.id === companion.phaseId);
      if (!companionPhase) return null;

      const companionItems = companionPhase.workflows
        .map((id) => getWorkflow(id))
        .filter(Boolean);

      if (companionItems.length === 0) return null;

      return { companion, companionPhase, companionItems };
    }).filter(Boolean) ?? [];

  return (
    <div>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-6xl font-bold leading-none text-[var(--brand-accent)] [-webkit-text-stroke:1.5px_var(--brand-fg)] sm:text-8xl">
            01
          </p>
          <p className="mt-2 text-xs font-bold tracking-wide text-[var(--brand-primary)] uppercase">
            {phase.label}
          </p>
          <h1 className="mt-1 text-2xl text-[var(--brand-fg)] sm:text-3xl">
            <HighlightedTitle text={phase.headline} variant="light" />
          </h1>
        </div>
        <div className="rounded-xl bg-[var(--brand-accent)] px-5 py-3 text-right">
          <p className="font-mono text-xl font-bold text-[var(--brand-fg)] sm:text-2xl">
            {phase.invest}
          </p>
          <p className="text-xs font-medium text-[var(--brand-fg)]/70">{phase.period}</p>
        </div>
      </div>

      <div className="mb-5 rounded-xl border border-[var(--brand-border)] bg-white p-4 sm:p-5">
        <p className="mb-2 text-xs font-bold text-[var(--brand-muted)] uppercase">{ui.outcomes}</p>
        <BulletList items={[...phase.outcomes]} />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((wf) => wf && <WorkflowCompact key={wf.id} wf={wf} />)}
      </div>

      {companionSections.map((section) => {
        if (!section) return null;
        const { companion, companionPhase, companionItems } = section;
        const isHighlight = companion.style === "highlight";

        return (
          <div
            key={companion.phaseId}
            className={`mt-6 ${isHighlight ? "" : "rounded-xl border border-dashed border-[var(--brand-primary)]/30 bg-white p-4 sm:p-5"}`}
          >
            <p
              className={`mb-3 text-xs font-bold tracking-wide uppercase ${
                isHighlight
                  ? "text-[var(--brand-fg)]"
                  : "text-[var(--brand-muted)]"
              }`}
            >
              {companionPhase.label} · {companionPhase.period}
            </p>
            <div
              className={`grid gap-4 ${companionItems.length > 1 ? "sm:grid-cols-2" : "sm:grid-cols-1"}`}
            >
              {companionItems.map(
                (wf) =>
                  wf &&
                  (isHighlight ? (
                    <WorkflowCompactHighlight key={wf.id} wf={wf} />
                  ) : (
                    <WorkflowCompact key={wf.id} wf={wf} />
                  )),
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
