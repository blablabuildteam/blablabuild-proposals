"use client";

import { useProposal } from "@/components/ProposalProvider";
import type { Workflow } from "@/lib/types";
import { WorkflowWeekLabel } from "./WorkflowDetailCard";
import { Badge, SlideTitle, StatCard } from "./shared";

const phaseNums = ["01", "02", "03"] as const;
const phaseIndices = [0, 1, 3] as const;

function PhaseInvestBlock({
  num,
  phase,
  workflows,
  accent,
}: {
  num: string;
  phase: {
    label: string;
    period: string;
    invest: string;
    headline: string;
  };
  workflows: Workflow[];
  accent: "lime" | "blue" | "neutral";
}) {
  const headerBg =
    accent === "lime"
      ? "bg-[var(--brand-accent)]"
      : accent === "blue"
        ? "bg-[var(--brand-primary)]"
        : "bg-[var(--brand-fg)]";
  const headerText =
    accent === "lime" ? "text-[var(--brand-fg)]" : "text-white";
  const headerMuted =
    accent === "lime" ? "text-[var(--brand-fg)]/70" : "text-white/70";

  return (
    <div className="overflow-hidden rounded-xl border border-[var(--brand-border)] bg-white">
      <div
        className={`flex flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5 ${headerBg}`}
      >
        <div>
          <p className={`font-mono text-3xl font-bold leading-none ${headerText}`}>
            {num}
          </p>
          <p
            className={`mt-2 text-[10px] font-bold tracking-wide uppercase sm:text-xs ${headerText}`}
          >
            {phase.label}
          </p>
          <p className={`mt-0.5 text-xs ${headerMuted}`}>{phase.period}</p>
        </div>
        <p className={`font-mono text-xl font-bold sm:text-2xl ${headerText}`}>
          {phase.invest}
        </p>
      </div>

      <div className="p-4 sm:p-5">
        <p className="text-sm font-bold text-[var(--brand-fg)]">{phase.headline}</p>

        <div className="mt-4 divide-y divide-[var(--brand-border)] rounded-lg border border-[var(--brand-border)]">
          {workflows.map((wf) => (
            <div
              key={wf.id}
              className="flex flex-col gap-2 px-4 py-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4"
            >
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-3">
                  <Badge variant="black">{wf.id}</Badge>
                  <WorkflowWeekLabel weeks={wf.weeks} />
                </div>
                <p className="mt-1.5 text-sm font-semibold text-[var(--brand-fg)]">
                  {wf.title}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-[var(--brand-muted)]">
                  {wf.summary}
                </p>
              </div>
              <p className="shrink-0 font-mono text-sm font-bold text-[var(--brand-primary)] sm:pt-0.5 sm:text-base">
                {wf.investment}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SlideInvestment() {
  const { phases, getWorkflow, AI_BUILD_NOTE, slideCopy } = useProposal();
  const copy = slideCopy?.investment ?? {
    kicker: "Investment",
    title: "Investment by phase",
    subtitle: AI_BUILD_NOTE,
  };
  const parallelLabel = slideCopy?.approach?.parallelLabel ?? "Parallel";

  const blocks = phaseIndices.map((phaseIndex, i) => {
    const phase = phases[phaseIndex];
    const workflows = phase.workflows
      .map((id) => getWorkflow(id))
      .filter((wf): wf is Workflow => Boolean(wf));
    const accent = (i === 0 ? "lime" : i === 1 ? "blue" : "neutral") as
      | "lime"
      | "blue"
      | "neutral";
    return { num: phaseNums[i], phase, workflows, accent };
  });

  return (
    <div>
      <SlideTitle
        kicker={copy.kicker}
        title={copy.title}
        subtitle={copy.subtitle ?? AI_BUILD_NOTE}
        compact
      />

      <div className="space-y-4">
        {blocks.map((block) => (
          <PhaseInvestBlock key={block.phase.label} {...block} />
        ))}
      </div>

      <div className="mt-4 rounded-lg border border-dashed border-[var(--brand-primary)]/40 bg-[var(--brand-primary)]/5 px-4 py-3">
        <p className="text-xs font-bold text-[var(--brand-primary)] uppercase">
          {parallelLabel} · {phases[2].period}
        </p>
        <p className="mt-1 text-sm text-[var(--brand-fg-secondary)]">
          <strong>WF9 Website</strong> · {phases[2].invest}. Loopt naast fase 2, zonder
          ops-automatisering te blokkeren.
        </p>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <StatCard
          variant="lime"
          label="Volledig programma (excl. WF10 build)"
          value="€180–260k"
          hint="12+ maanden · alle workflows"
        />
        <StatCard
          label="Tijd terug fase 1–2"
          value="~20–30 uur/mnd"
          hint="Conservatieve schatting"
        />
      </div>
    </div>
  );
}
