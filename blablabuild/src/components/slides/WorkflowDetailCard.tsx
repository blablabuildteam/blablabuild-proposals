"use client";

import type { Workflow } from "@/lib/types";
import { useDeckNavigation } from "@/components/DeckNavigation";
import { labelFor, useProposalUi } from "@/lib/proposals/use-proposal-ui";
import { Badge, BulletList } from "./shared";

export function formatWeeksNl(weeks: string): string {
  const cleaned = weeks.replace(/\bwk\b/gi, "").trim();
  const match = cleaned.match(/^([\d.]+(?:\s*[–-]\s*[\d.]+)?)(?:\s*(.*))?$/);
  if (!match) return weeks;

  const [, range, rest] = match;
  const parts = range.split(/\s*[–-]\s*/).map((n) => n.replace(".", ","));
  const asNumber = (n: string) => parseFloat(n.replace(",", "."));

  const label =
    parts.length === 2
      ? `${parts[0]}–${parts[1]} weken`
      : `${parts[0]} ${asNumber(parts[0]) === 1 ? "week" : "weken"}`;

  const suffix = rest?.trim();
  return suffix ? `${label} · ${suffix}` : label;
}

/** Duration on workflow cards — prefers billable days (e.g. "5–7 dagen") */
export function WorkflowWeekLabel({
  effortDays,
  weeks,
  tone = "muted",
}: {
  effortDays?: string;
  weeks?: string;
  tone?: "muted" | "light";
}) {
  const label = effortDays ?? (weeks ? formatWeeksNl(weeks) : "");
  return (
    <span
      className={`shrink-0 text-[10px] font-light sm:text-xs ${
        tone === "light" ? "text-white/75" : "text-[var(--brand-muted)]"
      }`}
    >
      {label}
    </span>
  );
}

export function WorkflowCompact({ wf }: { wf: Workflow }) {
  const { openWorkflow } = useDeckNavigation();
  const ui = useProposalUi();

  return (
    <button
      type="button"
      onClick={() => openWorkflow(wf.id)}
      className="group flex h-full w-full flex-col rounded-xl border border-[var(--brand-border)] bg-white p-4 text-left transition hover:border-[var(--brand-primary)]/40 hover:shadow-sm sm:p-5"
    >
      <div className="mb-2 flex items-start justify-between gap-3">
        <div className="flex min-w-0 flex-wrap items-center gap-2">
          <Badge variant="black">{wf.id}</Badge>
          {!wf.hideTimeline && (
            <span className="font-mono text-sm font-bold text-[var(--brand-primary)]">
              {wf.investment}
            </span>
          )}
        </div>
        {!wf.hideTimeline && (
          <WorkflowWeekLabel effortDays={wf.effortDays} weeks={wf.weeks} />
        )}
      </div>
      <h3 className="text-base text-[var(--brand-fg)]">{wf.title}</h3>
      <p className="mt-1.5 flex-1 text-sm leading-relaxed text-[var(--brand-muted)]">
        {wf.summary}
      </p>
      <span className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-[var(--brand-primary)] py-2.5 text-xs font-bold text-white transition group-hover:opacity-90">
        {ui.openUseCase}
      </span>
    </button>
  );
}

export function WorkflowDetailCard({ wf }: { wf: Workflow }) {
  const { openWorkflow } = useDeckNavigation();
  const ui = useProposalUi();

  return (
    <div className="rounded-xl border border-[var(--brand-border)] bg-white p-4 sm:p-5">
      <div className="mb-3 flex items-start justify-between gap-3">
        <div className="flex min-w-0 flex-wrap items-center gap-2">
          <Badge variant="black">{wf.id}</Badge>
          <Badge variant="neutral">
            {labelFor(ui.phaseLabels, wf.phaseRevised)}
          </Badge>
          <span className="font-mono text-xs font-bold text-[var(--brand-primary)] sm:text-sm">
            {wf.investment}
          </span>
        </div>
        {!wf.hideTimeline && (
          <WorkflowWeekLabel effortDays={wf.effortDays} weeks={wf.weeks} />
        )}
      </div>

      <h3 className="mb-1 text-base text-[var(--brand-fg)] sm:text-lg">
        {wf.title}
      </h3>
      <p className="mb-3 text-sm text-[var(--brand-muted)]">{wf.summary}</p>

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-lg bg-[var(--brand-bg)] p-3">
          <p className="text-[10px] font-semibold tracking-wide text-[var(--brand-muted)] uppercase">
            {ui.why}
          </p>
          <p className="mt-1 text-sm leading-snug text-[var(--brand-fg)]">{wf.why}</p>
        </div>
        <div className="rounded-lg bg-[var(--brand-accent)]/25 p-3">
          <p className="text-[10px] font-semibold tracking-wide text-[var(--brand-muted)] uppercase">
            {ui.timeBack}
          </p>
          <p className="mt-1 text-sm font-medium text-[var(--brand-fg)]">
            {wf.timeSaved}
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={() => openWorkflow(wf.id)}
        className="mt-4 rounded-full bg-[var(--brand-primary)] px-4 py-2 text-sm font-bold text-white transition hover:opacity-90"
      >
        {ui.openUseCase}
      </button>
    </div>
  );
}

export function WorkflowRow({ wf }: { wf: Workflow }) {
  const { openWorkflow } = useDeckNavigation();
  const ui = useProposalUi();

  return (
    <div className="flex flex-col gap-2 border-b border-[var(--brand-border)] px-4 py-3 last:border-0 sm:flex-row sm:items-center sm:gap-4">
      <div className="flex w-16 shrink-0 items-center gap-2">
        <Badge variant="black">{wf.id}</Badge>
      </div>
      <div className="min-w-0 flex-1">
        <p className="font-semibold text-[var(--brand-fg)]">{wf.title}</p>
        <p className="truncate text-xs text-[var(--brand-muted)] sm:text-sm">
          {wf.summary}
        </p>
      </div>
      <div className="flex shrink-0 flex-wrap items-center justify-end gap-3 text-xs sm:text-sm">
        {!wf.hideTimeline && (
          <WorkflowWeekLabel effortDays={wf.effortDays} weeks={wf.weeks} />
        )}
        <Badge variant="neutral">
          {labelFor(ui.phaseLabels, wf.phaseRevised)}
        </Badge>
        {!wf.hideTimeline && (
          <span className="font-mono font-bold text-[var(--brand-primary)]">
            {wf.investment}
          </span>
        )}
        <button
          type="button"
          onClick={() => openWorkflow(wf.id)}
          className="rounded-full bg-[var(--brand-primary)] px-3 py-1.5 text-xs font-bold text-white transition hover:opacity-90"
        >
          {ui.useCase}
        </button>
      </div>
    </div>
  );
}
