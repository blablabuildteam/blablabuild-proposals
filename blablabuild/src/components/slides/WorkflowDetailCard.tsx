"use client";

import type { Workflow } from "@/lib/types";
import { useDeckNavigation } from "@/components/DeckNavigation";
import { labelFor, useProposalUi } from "@/lib/proposals/use-proposal-ui";
import { Badge, BulletList } from "./shared";

/** Full inline project detail — used when a phase has exactly one workflow. */
export function WorkflowInlinePanel({ wf }: { wf: Workflow }) {
  const ui = useProposalUi();
  return (
    <div className="space-y-3">
      <div className="rounded-xl bg-[var(--brand-primary)] p-5 text-white sm:p-6">
        <h2 className="text-xl leading-snug sm:text-2xl">{wf.title}</h2>
        <p className="mt-1.5 text-sm leading-relaxed text-white/80">{wf.summary}</p>
      </div>

      <div className="rounded-xl bg-[var(--brand-bg)] p-4">
        <p className="mb-2 text-[10px] font-bold tracking-wide text-[var(--brand-primary)] uppercase">
          {ui.whyThisMatters}
        </p>
        <p className="text-sm leading-relaxed text-[var(--brand-fg)]">{wf.why}</p>
      </div>

      <div className="rounded-xl border border-[var(--brand-border)] bg-white p-4">
        <p className="mb-2 text-[10px] font-bold tracking-wide text-[var(--brand-muted)] uppercase">
          {ui.whatWeDeliver}
        </p>
        <BulletList items={wf.deliverables} />
      </div>
    </div>
  );
}

function phaseBadgeVariant(
  phase: string,
): "lime" | "blue" | "black" | "neutral" {
  switch (phase) {
    case "NOW":
      return "lime";
    case "NEXT":
      return "blue";
    case "NEAR":
      return "black";
    default:
      return "neutral";
  }
}

const detailsButtonClass =
  "inline-flex w-full items-center justify-center rounded-full bg-[var(--brand-bg)] py-2.5 text-xs font-bold text-[var(--brand-fg)] ring-1 ring-[var(--brand-border)] transition group-hover:bg-[#E8E8E8]";

const detailsButtonInlineClass =
  "rounded-full bg-[var(--brand-bg)] px-3 py-1.5 text-xs font-bold text-[var(--brand-fg)] ring-1 ring-[var(--brand-border)] transition hover:bg-[#E8E8E8]";

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

export function WorkflowCompactCard({ wf }: { wf: Workflow }) {
  if (wf.cardVariant === "highlight") {
    return <WorkflowCompactHighlight wf={wf} />;
  }
  return <WorkflowCompact wf={wf} />;
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
      <span className={`mt-4 ${detailsButtonClass}`}>
        {ui.openUseCase}
      </span>
    </button>
  );
}

export function WorkflowCompactHighlight({ wf }: { wf: Workflow }) {
  const { openWorkflow } = useDeckNavigation();
  const ui = useProposalUi();

  return (
    <button
      type="button"
      onClick={() => openWorkflow(wf.id)}
      className="group flex h-full w-full flex-col rounded-xl border border-[var(--brand-highlight)] bg-[var(--brand-highlight)] p-4 text-left transition hover:border-[var(--brand-accent)] hover:shadow-lg sm:p-5"
    >
      <div className="mb-2 flex items-start justify-between gap-3">
        <div className="flex min-w-0 flex-wrap items-center gap-2">
          <Badge variant="glass">{wf.id}</Badge>
          <span className="font-mono text-sm font-bold text-[var(--brand-accent)]">
            {wf.investment}
          </span>
        </div>
        {!wf.hideTimeline && (
          <WorkflowWeekLabel
            effortDays={wf.effortDays}
            weeks={wf.weeks}
            tone="light"
          />
        )}
      </div>
      <h3 className="text-base text-white">{wf.title}</h3>
      <p className="mt-1.5 flex-1 text-sm leading-relaxed text-white/70">
        {wf.summary}
      </p>
      <span className={`mt-4 ${detailsButtonClass}`}>
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
        className={`mt-4 ${detailsButtonInlineClass}`}
      >
        {ui.openUseCase}
      </button>
    </div>
  );
}

export function WorkflowRow({ wf }: { wf: Workflow }) {
  const { openWorkflow } = useDeckNavigation();
  const ui = useProposalUi();
  const isHighlight = wf.cardVariant === "highlight";

  return (
    <div
      className={`flex flex-col gap-2 border-b px-4 py-3 sm:flex-row sm:items-center sm:gap-4 sm:px-5 ${
        isHighlight
          ? "border-[var(--brand-highlight)] bg-[var(--brand-highlight)] text-white last:border-[var(--brand-highlight)]"
          : "border-[var(--brand-border)] last:border-0"
      }`}
    >
      <div className="flex w-16 shrink-0 items-center gap-2">
        <Badge variant={isHighlight ? "glass" : "black"}>{wf.id}</Badge>
      </div>
      <div className="min-w-0 flex-1">
        <p
          className={`font-semibold ${
            isHighlight ? "text-white" : "text-[var(--brand-fg)]"
          }`}
        >
          {wf.title}
        </p>
        <p
          className={`truncate text-xs sm:text-sm ${
            isHighlight ? "text-white/70" : "text-[var(--brand-muted)]"
          }`}
        >
          {wf.summary}
        </p>
      </div>
      <div className="flex shrink-0 flex-wrap items-center justify-end gap-3 text-xs sm:text-sm">
        {!wf.hideTimeline && (
          <WorkflowWeekLabel
            effortDays={wf.effortDays}
            weeks={wf.weeks}
            tone={isHighlight ? "light" : "muted"}
          />
        )}
        <Badge variant={phaseBadgeVariant(wf.phaseRevised)}>
          {labelFor(ui.phaseLabels, wf.phaseRevised)}
        </Badge>
        {!wf.hideTimeline && (
          <span
            className={`font-mono font-bold ${
              isHighlight
                ? "text-[var(--brand-accent)]"
                : "text-[var(--brand-primary)]"
            }`}
          >
            {wf.investment}
          </span>
        )}
        <button
          type="button"
          onClick={() => openWorkflow(wf.id)}
          className={detailsButtonInlineClass}
        >
          {ui.useCase}
        </button>
      </div>
    </div>
  );
}
