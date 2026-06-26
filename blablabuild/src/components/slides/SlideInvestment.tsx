"use client";

import { useProposal } from "@/components/ProposalProvider";
import type { PlatformBundle, Workflow } from "@/lib/types";
import { WorkflowWeekLabel } from "./WorkflowDetailCard";
import { PlatformBundleCard } from "./PlatformBundleCard";
import { Badge, HighlightedTitle, SlideTitle } from "./shared";

const phaseNums = ["01", "02", "03"] as const;
const phaseIndices = [0, 1, 3] as const;

type PhaseRow =
  | { kind: "workflow"; wf: Workflow }
  | { kind: "platform"; bundle: PlatformBundle };

function buildPhaseRows(
  phaseWorkflowIds: readonly string[],
  getWorkflow: (id: string) => Workflow | undefined,
  platformBundles?: readonly PlatformBundle[],
): PhaseRow[] {
  const bundle = platformBundles?.find((b) =>
    b.workflowIds.every((id) => phaseWorkflowIds.includes(id)),
  );
  const bundledIds = new Set(bundle?.workflowIds ?? []);
  const rows: PhaseRow[] = [];

  for (const id of phaseWorkflowIds) {
    if (bundle && bundledIds.has(id)) {
      if (id === bundle.workflowIds[0]) {
        rows.push({ kind: "platform", bundle });
      }
      continue;
    }
    const wf = getWorkflow(id);
    if (wf) rows.push({ kind: "workflow", wf });
  }

  return rows;
}

function PhaseInvestBlock({
  num,
  phase,
  rows,
  accent,
  bundleNote,
}: {
  num: string;
  phase: {
    label: string;
    period: string;
    invest: string;
    investStandalone?: string;
    headline: string;
  };
  rows: PhaseRow[];
  accent: "lime" | "blue" | "neutral";
  bundleNote?: string;
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
          {phase.investStandalone && (
            <p className={`mt-1 text-[10px] ${headerMuted}`}>incl. combinatievoordeel</p>
          )}
        </div>
        <div className="shrink-0 text-right">
          {phase.investStandalone && (
            <p className={`font-mono text-sm line-through ${headerMuted}`}>
              {phase.investStandalone}
            </p>
          )}
          <p className={`font-mono text-xl font-bold sm:text-2xl ${headerText}`}>
            {phase.invest}
          </p>
        </div>
      </div>

      <div className="p-4 sm:p-5">
        <p className="text-sm font-bold text-[var(--brand-fg)]">
          <HighlightedTitle text={phase.headline} />
        </p>

        <div className="mt-4 divide-y divide-[var(--brand-border)] rounded-lg border border-[var(--brand-border)]">
          {rows.map((row) =>
            row.kind === "workflow" ? (
              <div
                key={row.wf.id}
                className="flex flex-col gap-2 px-4 py-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4"
              >
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <Badge variant="black">{row.wf.id}</Badge>
                    <WorkflowWeekLabel
                      effortDays={row.wf.effortDays}
                      weeks={row.wf.weeks}
                    />
                  </div>
                  <p className="mt-1.5 text-sm font-semibold text-[var(--brand-fg)]">
                    {row.wf.title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--brand-muted)]">
                    {row.wf.summary}
                  </p>
                </div>
                <p className="shrink-0 font-mono text-sm font-bold text-[var(--brand-primary)] sm:pt-0.5 sm:text-base">
                  {row.wf.investment}
                </p>
              </div>
            ) : (
              <div
                key={row.bundle.id}
                className="flex flex-col gap-2 bg-[var(--brand-accent)]/15 px-4 py-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4"
              >
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-[var(--brand-fg)] px-2 py-0.5 text-[10px] font-bold text-[var(--brand-accent)] uppercase">
                      Combinatievoordeel
                    </span>
                    <Badge variant="black">{row.bundle.workflowIds.join(" + ")}</Badge>
                  </div>
                  <p className="mt-1.5 text-sm font-semibold text-[var(--brand-fg)]">
                    {row.bundle.name}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--brand-muted)]">
                    {row.bundle.tagline}
                  </p>
                </div>
                <div className="shrink-0 text-right sm:pt-0.5">
                  <p className="font-mono text-xs text-[var(--brand-muted)] line-through">
                    {row.bundle.standaloneInvest}
                  </p>
                  <p className="font-mono text-sm font-bold text-[var(--brand-primary)] sm:text-base">
                    {row.bundle.combinedInvest}
                  </p>
                </div>
              </div>
            ),
          )}
        </div>

        {bundleNote && (
          <p className="mt-3 text-xs text-[var(--brand-muted)]">{bundleNote}</p>
        )}
      </div>
    </div>
  );
}

export function SlideInvestment() {
  const { phases, getWorkflow, AI_BUILD_NOTE, slideCopy, platformBundles } =
    useProposal();
  const copy = slideCopy?.investment ?? {
    kicker: "Investment",
    title: "Investment by phase",
    subtitle: AI_BUILD_NOTE,
  };
  const parallelLabel = slideCopy?.approach?.parallelLabel ?? "Parallel";

  const blocks = phaseIndices.map((phaseIndex, i) => {
    const phase = phases[phaseIndex];
    const rows = buildPhaseRows(phase.workflows, getWorkflow, platformBundles);
    const accent = (i === 0 ? "lime" : i === 1 ? "blue" : "neutral") as
      | "lime"
      | "blue"
      | "neutral";
    const bundleNote =
      phase.investStandalone && i === 2
        ? (slideCopy?.investment?.platformNote ??
          "Faseprijs is gebaseerd op het Smart Data Platform voor WF2 + WF4.")
        : undefined;
    return { num: phaseNums[i], phase, rows, accent, bundleNote };
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

      {(() => {
        const backlog = phases.find((p) => p.id === "backlog");
        const wf10 = backlog ? getWorkflow("WF10") : undefined;
        if (!backlog || !wf10) return null;
        return (
          <div className="mt-3 overflow-hidden rounded-xl border border-dashed border-[var(--brand-border)] bg-[var(--brand-bg)]">
            <div className="flex flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
              <div>
                <p className="text-[10px] font-bold tracking-wide text-[var(--brand-muted)] uppercase sm:text-xs">
                  Backlog · {backlog.period}
                </p>
                <p className="mt-1 text-sm font-bold text-[var(--brand-fg)]">
                  <HighlightedTitle text={backlog.headline} />
                </p>
              </div>
              <p className="font-mono text-xl font-bold text-[var(--brand-fg)] sm:text-2xl">
                {backlog.invest}
              </p>
            </div>
            <div className="border-t border-dashed border-[var(--brand-border)] p-4 sm:p-5">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                <div className="min-w-0 flex-1">
                  <Badge variant="black">{wf10.id}</Badge>
                  <p className="mt-1.5 text-sm font-semibold text-[var(--brand-fg)]">{wf10.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--brand-muted)]">
                    {wf10.summary}
                  </p>
                </div>
                <p className="shrink-0 font-mono text-sm font-bold text-[var(--brand-primary)] sm:text-base">
                  {!wf10.hideTimeline && wf10.investment}
                </p>
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
}
