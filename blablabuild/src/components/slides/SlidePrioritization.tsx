"use client";

import { useMemo } from "react";
import { useProposal } from "@/components/ProposalProvider";
import { useProposalUi } from "@/lib/proposals/use-proposal-ui";
import { Badge, SlideTitle } from "./shared";

export function SlidePrioritization() {
  const { riceSorted, phases, getWorkflow, slideCopy } = useProposal();
  const ui = useProposalUi();
  const copy = slideCopy?.prioritization ?? {
    kicker: "Prioritisation",
    title: "Why this order?",
    subtitle: "Scored on reach, impact, confidence and effort, not gut feel.",
    startHere: "Start here",
    phaseOne: "Phase 1",
    riceNote: "roadmap priority over raw rank",
    phaseOneRationale: "",
    wf0Note:
      "RICE = (Reach × Impact × Confidence) ÷ Effort. WF0 ranks lower on raw RICE (30) but leads Phase 1: it unlocks safe AI for everything that follows. WF8 scores lower (14) due to effort but leads Phase 2 for investment team impact.",
  };

  const startIds = useMemo(
    () => new Set(phases[0]?.workflows ?? []),
    [phases],
  );

  const startWorkflows = useMemo(
    () =>
      (phases[0]?.workflows ?? [])
        .map((id) => getWorkflow(id))
        .filter(Boolean),
    [phases, getWorkflow],
  );

  const maxRice = riceSorted[0]?.riceReported ?? 1;
  const top = riceSorted.slice(0, 8);

  return (
    <div>
      <SlideTitle
        kicker={copy.kicker}
        title={copy.title}
        subtitle={copy.subtitle}
        compact
      />

      {startWorkflows.length > 0 && (
        <div className="mb-5 overflow-hidden rounded-xl border-2 border-[var(--brand-accent)] bg-[var(--brand-accent)]/15">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--brand-accent)]/50 bg-[var(--brand-accent)]/40 px-4 py-2.5 sm:px-5">
            <div className="flex items-center gap-2">
              <Badge variant="black">{copy.startHere}</Badge>
              <span className="text-xs font-semibold text-[var(--brand-fg)]">
                {copy.phaseOne} · {phases[0]?.period}
              </span>
            </div>
            <span className="font-mono text-sm font-bold text-[var(--brand-fg)]">
              {phases[0]?.invest}
            </span>
          </div>
          <div className="divide-y divide-[var(--brand-accent)]/40">
            {startWorkflows.map((wf) => {
              if (!wf) return null;
              const width = (wf.riceReported / maxRice) * 100;
              const rationale = copy.workflowRationale?.[wf.id];
              return (
                <div key={wf.id} className="px-4 py-3 sm:px-5">
                  <div className="grid grid-cols-[3rem_1fr_3rem] items-center gap-2 sm:grid-cols-[4rem_1fr_4rem]">
                    <span className="font-bold text-[var(--brand-fg)]">{wf.id}</span>
                    <div>
                      <p className="text-sm font-semibold text-[var(--brand-fg)]">
                        {wf.title}
                      </p>
                      <p className="text-xs text-[var(--brand-muted)]">
                        RICE {wf.riceReported} · {copy.riceNote}
                      </p>
                    </div>
                    <span className="text-right font-mono text-sm font-bold text-[var(--brand-primary)]">
                      {wf.riceReported}
                    </span>
                  </div>
                  {rationale && (
                    <p className="mt-2 text-xs leading-relaxed text-[var(--brand-fg)]/80 sm:pl-[4.5rem]">
                      {rationale}
                    </p>
                  )}
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/60">
                    <div
                      className="h-full rounded-full bg-[var(--brand-primary)]"
                      style={{ width: `${width}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          {"phaseOneRationale" in copy && copy.phaseOneRationale && (
            <p className="border-t border-[var(--brand-accent)]/40 px-4 py-3 text-xs leading-relaxed text-[var(--brand-fg)]/85 sm:px-5 sm:text-sm">
              {copy.phaseOneRationale}
            </p>
          )}
        </div>
      )}

      <p className="mb-3 text-sm font-semibold tracking-wide text-[var(--brand-muted)] uppercase">
        {ui.fullRiceRanking}
      </p>

      <div className="overflow-hidden rounded-xl border border-[var(--brand-border)] bg-white">
        <div className="grid grid-cols-[2rem_3rem_1fr_3rem] gap-2 border-b border-[var(--brand-border)] bg-[var(--brand-primary)] px-4 py-2.5 text-[10px] font-semibold tracking-wide text-white uppercase sm:grid-cols-[2rem_4rem_1fr_4rem] sm:px-5">
          <span>{ui.tableRank}</span>
          <span>{ui.tableId}</span>
          <span>{ui.tableInitiative}</span>
          <span className="text-right">{ui.tableRice}</span>
        </div>
        {top.map((wf, i) => {
          const width = (wf.riceReported / maxRice) * 100;
          const isStart = startIds.has(wf.id);
          return (
            <div
              key={wf.id}
              className={`border-b border-[var(--brand-border)] px-4 py-3 last:border-0 sm:px-5 ${
                isStart ? "bg-[var(--brand-accent)]/10" : ""
              }`}
            >
              <div className="grid grid-cols-[2rem_3rem_1fr_3rem] items-center gap-2 sm:grid-cols-[2rem_4rem_1fr_4rem]">
                <span className="font-mono text-xs text-[var(--brand-muted-light)]">{i + 1}</span>
                <span className="flex items-center gap-1.5 font-bold text-[var(--brand-fg)]">
                  {wf.id}
                  {isStart && (
                    <span className="hidden rounded bg-[var(--brand-accent)] px-1.5 py-0.5 text-[9px] font-bold text-[var(--brand-fg)] sm:inline">
                      {ui.phaseOneBadge}
                    </span>
                  )}
                </span>
                <span className="truncate text-sm text-[var(--brand-muted)]">{wf.title}</span>
                <span className="text-right font-mono text-sm font-bold text-[var(--brand-primary)]">
                  {wf.riceReported}
                </span>
              </div>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#E8E8E8]">
                <div
                  className={`h-full rounded-full ${isStart ? "bg-[var(--brand-primary)]" : "bg-[var(--brand-accent)]"}`}
                  style={{ width: `${width}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <p className="mt-4 text-xs leading-relaxed text-[var(--brand-muted)] sm:text-sm">
        {copy.wf0Note}
      </p>
    </div>
  );
}
