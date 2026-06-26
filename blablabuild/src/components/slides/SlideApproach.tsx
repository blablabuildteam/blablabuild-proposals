"use client";

import { useProposal } from "@/components/ProposalProvider";
import { PhaseTimeline, SlideTitle } from "./shared";

const defaultCopy = {
  kicker: "Roadmap",
  title: "Three phases, one programme",
  subtitle:
    "Each phase delivers usable value before the next starts. WF9 (website) runs in parallel during Phase 2, separate track, same timeline.",
  parallelLabel: "Parallel",
  parallelBody: "Marketingupdates zonder ops-automatisering te blokkeren.",
  backlogLabel: "Backlog",
  backlogBody:
    "Bunch-vervanging start met discovery; implementatie volgt pas na een onderbouwde beslissing.",
};

const timelineAccents = ["lime", "blue", "neutral"] as const;

export function SlideApproach() {
  const { phases, getWorkflow, slideCopy } = useProposal();
  const copy = slideCopy?.approach ?? defaultCopy;

  const nearPhase = phases.find((p) => p.id === "near");
  const parallelPhase = phases.find((p) => p.id === "parallel");
  const backlogPhase = phases.find((p) => p.id === "backlog");

  const timeline = ["now", "next", "near"]
    .map((id) => phases.find((p) => p.id === id))
    .filter((phase): phase is NonNullable<typeof phase> => Boolean(phase))
    .map((phase, index) => ({
      num: String(index + 1).padStart(2, "0"),
      label: phase.label,
      period: phase.period,
      invest: phase.invest,
      investStandalone: phase.investStandalone,
      headline: phase.headline,
      workflows: phase.workflows,
      accent: timelineAccents[index] ?? "neutral",
    }));

  const backlogWorkflowLabel = backlogPhase?.workflows
    .map((id) => getWorkflow(id)?.title ?? id)
    .join(" · ");

  const parallelWorkflowLabel = parallelPhase?.workflows
    .map((id) => getWorkflow(id)?.title ?? id)
    .join(" · ");

  return (
    <div>
      <SlideTitle kicker={copy.kicker} title={copy.title} subtitle={copy.subtitle} />

      <PhaseTimeline phases={timeline} />

      {parallelPhase ? (
        <div className="mt-5 rounded-lg border border-dashed border-[var(--brand-primary)]/40 bg-[var(--brand-primary)]/5 px-4 py-3">
          <p className="text-xs font-bold text-[var(--brand-primary)] uppercase">
            {copy.parallelLabel} · {parallelPhase.period}
          </p>
          <p className="mt-1 text-sm text-[var(--brand-fg-secondary)]">
            <strong>{parallelWorkflowLabel}</strong> · {parallelPhase.invest}.{" "}
            {copy.parallelBody}
          </p>
        </div>
      ) : null}

      {backlogPhase ? (
        <div className="mt-3 rounded-lg border border-dashed border-[var(--brand-border)] bg-[var(--brand-bg)] px-4 py-3">
          <p className="text-xs font-bold text-[var(--brand-muted)] uppercase">
            {copy.backlogLabel ?? "Backlog"} · {backlogPhase.period}
          </p>
          <p className="mt-1 text-sm text-[var(--brand-fg-secondary)]">
            <strong>{backlogWorkflowLabel}</strong>
            {backlogPhase.invest ? ` · ${backlogPhase.invest}` : null}.{" "}
            {copy.backlogBody ??
              "Discovery eerst; implementatie volgt na expliciete go/no-go."}
          </p>
        </div>
      ) : null}
    </div>
  );
}
