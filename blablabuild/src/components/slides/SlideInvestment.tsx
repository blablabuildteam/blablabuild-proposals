"use client";

import { useProposal } from "@/components/ProposalProvider";
import type { PlatformBundle, Workflow } from "@/lib/types";
import { PlatformBundleCard } from "./PlatformBundleCard";
import { Badge, HighlightedTitle, SlideTitle } from "./shared";

const mainPhaseIds = new Set(["now", "next", "near"]);

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
  companionSections,
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
  companionSections?: Array<{
    label: string;
    period: string;
    workflows: Workflow[];
    highlight?: boolean;
  }>;
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
                className={`flex flex-col gap-2 px-4 py-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4 ${
                  row.wf.cardVariant === "highlight"
                    ? "bg-[var(--brand-highlight)] text-white"
                    : ""
                }`}
              >
                <div className="min-w-0 flex-1">
                  <p
                    className={`text-sm font-semibold ${
                      row.wf.cardVariant === "highlight"
                        ? "text-white"
                        : "text-[var(--brand-fg)]"
                    }`}
                  >
                    {row.wf.title}
                  </p>
                  <p
                    className={`mt-1 text-sm leading-relaxed ${
                      row.wf.cardVariant === "highlight"
                        ? "text-white/70"
                        : "text-[var(--brand-muted)]"
                    }`}
                  >
                    {row.wf.summary}
                  </p>
                </div>
                {!row.wf.excludeFromTotals && (
                  <p
                    className={`shrink-0 font-mono text-sm font-bold sm:pt-0.5 sm:text-base ${
                      row.wf.cardVariant === "highlight"
                        ? "text-[var(--brand-accent)]"
                        : "text-[var(--brand-primary)]"
                    }`}
                  >
                    {row.wf.investment}
                  </p>
                )}
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

        {companionSections?.map((section) => (
          <div key={`${section.label}-${section.period}`} className="mt-4">
            <p
              className={`mb-2 text-[10px] font-bold tracking-wide uppercase sm:text-xs ${
                section.highlight
                  ? "text-[var(--brand-fg)]"
                  : "text-[var(--brand-muted)]"
              }`}
            >
              {section.label} · {section.period}
            </p>
            <div
              className={`divide-y rounded-lg border ${
                section.highlight
                  ? "divide-white/10 border-[var(--brand-highlight)] bg-[var(--brand-highlight)]"
                  : "divide-[var(--brand-border)] border-[var(--brand-border)]"
              }`}
            >
              {section.workflows.map((wf) => (
                <div
                  key={wf.id}
                  className={`flex flex-col gap-2 px-4 py-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4 ${
                    section.highlight ? "text-white" : ""
                  }`}
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start gap-3">
                      <Badge variant={section.highlight ? "glass" : "black"}>
                        {wf.id}
                      </Badge>
                    </div>
                    <p
                      className={`mt-1.5 text-sm font-semibold ${
                        section.highlight
                          ? "text-white"
                          : "text-[var(--brand-fg)]"
                      }`}
                    >
                      {wf.title}
                    </p>
                    <p
                      className={`mt-1 text-sm leading-relaxed ${
                        section.highlight
                          ? "text-white/70"
                          : "text-[var(--brand-muted)]"
                      }`}
                    >
                      {wf.summary}
                    </p>
                  </div>
                  {!wf.hideTimeline && (
                    <p
                      className={`shrink-0 font-mono text-sm font-bold sm:pt-0.5 sm:text-base ${
                        section.highlight
                          ? "text-[var(--brand-accent)]"
                          : "text-[var(--brand-primary)]"
                      }`}
                    >
                      {wf.investment}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

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

  const mainPhases = phases.filter((p) => mainPhaseIds.has(p.id));
  const parallelPhase = phases.find((p) => p.id === "parallel");
  const backlogPhase = phases.find((p) => p.id === "backlog");

  const accents: Array<"lime" | "blue" | "neutral"> = ["lime", "blue", "neutral"];
  const inlineCompanionPhaseIds = new Set<string>();

  const blocks = mainPhases.map((phase, i) => {
    const rows = buildPhaseRows(phase.workflows, getWorkflow, platformBundles);
    const accent = accents[i] ?? "neutral";
    const bundleNote = phase.investStandalone
      ? (slideCopy?.investment?.platformNote ??
        "Faseprijs is gebaseerd op het combinatievoordeel.")
      : undefined;

    const companionSections =
      phase.companions
        ?.map((companion) => {
          const companionPhase = phases.find((p) => p.id === companion.phaseId);
          if (!companionPhase) return null;

          const companionWorkflows = companionPhase.workflows
            .map((id) => getWorkflow(id))
            .filter((wf): wf is Workflow => Boolean(wf));

          if (companionWorkflows.length === 0) return null;

          inlineCompanionPhaseIds.add(companion.phaseId);

          return {
            label: companionPhase.label,
            period: companionPhase.period,
            workflows: companionWorkflows,
            highlight: companion.style === "highlight",
          };
        })
        .filter(
          (
            section,
          ): section is NonNullable<typeof section> => section !== null,
        ) ?? [];

    return {
      num: String(i + 1).padStart(2, "0"),
      phase,
      rows,
      accent,
      bundleNote,
      companionSections,
    };
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

      {parallelPhase && (
        <div className="mt-4 rounded-lg border border-dashed border-[var(--brand-primary)]/40 bg-[var(--brand-primary)]/5 px-4 py-3">
          <p className="text-xs font-bold text-[var(--brand-primary)] uppercase">
            {parallelLabel} · {parallelPhase.period}
          </p>
          <p className="mt-1 text-sm text-[var(--brand-fg-secondary)]">
            <strong>
              {parallelPhase.workflows
                .map((id) => getWorkflow(id)?.title ?? id)
                .join(" · ")}
            </strong>{" "}
            · {parallelPhase.invest}
          </p>
        </div>
      )}

      {(() => {
        if (!backlogPhase || inlineCompanionPhaseIds.has(backlogPhase.id)) {
          return null;
        }
        const backlogWorkflows = backlogPhase.workflows
          .map((id) => getWorkflow(id))
          .filter(Boolean);
        if (backlogWorkflows.length === 0) return null;
        return (
          <div className="mt-3 overflow-hidden rounded-xl border border-dashed border-[var(--brand-border)] bg-[var(--brand-bg)]">
            <div className="flex flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
              <div>
                <p className="text-[10px] font-bold tracking-wide text-[var(--brand-muted)] uppercase sm:text-xs">
                  {backlogPhase.label} · {backlogPhase.period}
                </p>
                <p className="mt-1 text-sm font-bold text-[var(--brand-fg)]">
                  <HighlightedTitle text={backlogPhase.headline} />
                </p>
              </div>
              <p className="font-mono text-xl font-bold text-[var(--brand-fg)] sm:text-2xl">
                {backlogPhase.invest}
              </p>
            </div>
            {backlogWorkflows.map((wf) =>
              wf ? (
                <div
                  key={wf.id}
                  className="border-t border-dashed border-[var(--brand-border)] p-4 sm:p-5"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                    <div className="min-w-0 flex-1">
                      <Badge variant="black">{wf.id}</Badge>
                      <p className="mt-1.5 text-sm font-semibold text-[var(--brand-fg)]">
                        {wf.title}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-[var(--brand-muted)]">
                        {wf.summary}
                      </p>
                    </div>
                    <p className="shrink-0 font-mono text-sm font-bold text-[var(--brand-primary)] sm:text-base">
                      {!wf.hideTimeline && wf.investment}
                    </p>
                  </div>
                </div>
              ) : null,
            )}
          </div>
        );
      })()}
    </div>
  );
}
