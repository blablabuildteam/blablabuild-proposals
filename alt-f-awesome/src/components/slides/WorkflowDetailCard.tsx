"use client";

import type { Workflow } from "@/lib/types";
import { useDeckNavigation } from "@/components/DeckNavigation";
import { Badge, BulletList } from "./shared";

export function WorkflowCompact({ wf }: { wf: Workflow }) {
  const { openWorkflow } = useDeckNavigation();

  return (
    <div className="flex h-full flex-col rounded-xl border border-[var(--brand-border)] bg-white p-4 sm:p-5">
      <div className="mb-2 flex flex-wrap items-center gap-2">
        <Badge variant="black">{wf.id}</Badge>
        <span className="font-mono text-sm font-bold text-[var(--brand-primary)]">
          {wf.investment}
        </span>
        <span className="text-xs text-[var(--brand-muted)]">{wf.weeks}</span>
      </div>
      <h3 className="text-base font-bold text-[var(--brand-fg)]">{wf.title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-[var(--brand-muted)]">
        {wf.summary}
      </p>
      <div className="mt-3 flex-1 border-t border-[var(--brand-border)] pt-3">
        <BulletList items={wf.benefits.slice(0, 3)} />
      </div>
      <button
        type="button"
        onClick={() => openWorkflow(wf.id)}
        className="mt-4 w-full rounded-full bg-[var(--brand-primary)] py-2.5 text-xs font-bold text-white transition hover:opacity-90"
      >
        View approach & details →
      </button>
    </div>
  );
}

export function WorkflowDetailCard({ wf }: { wf: Workflow }) {
  const { openWorkflow } = useDeckNavigation();

  return (
    <div className="rounded-xl border border-[var(--brand-border)] bg-white p-4 sm:p-5">
      <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="black">{wf.id}</Badge>
          <Badge variant="neutral">{wf.phaseRevised}</Badge>
        </div>
        <div className="flex flex-wrap gap-3 text-xs sm:text-sm">
          <span className="font-mono font-bold text-[var(--brand-primary)]">
            {wf.investment}
          </span>
          <span className="text-[var(--brand-muted)]">{wf.weeks}</span>
        </div>
      </div>

      <h3 className="mb-1 text-base font-bold text-[var(--brand-fg)] sm:text-lg">
        {wf.title}
      </h3>
      <p className="mb-3 text-sm text-[var(--brand-muted)]">{wf.summary}</p>

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-lg bg-[var(--brand-bg)] p-3">
          <p className="text-[10px] font-semibold tracking-wide text-[var(--brand-muted)] uppercase">
            Why
          </p>
          <p className="mt-1 text-sm leading-snug text-[var(--brand-fg)]">{wf.why}</p>
        </div>
        <div className="rounded-lg bg-[var(--brand-accent)]/25 p-3">
          <p className="text-[10px] font-semibold tracking-wide text-[var(--brand-muted)] uppercase">
            Time back
          </p>
          <p className="mt-1 text-sm font-medium text-[var(--brand-fg)]">
            {wf.timeSaved}
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={() => openWorkflow(wf.id)}
        className="mt-4 text-sm font-semibold text-[var(--brand-primary)] underline-offset-2 hover:underline"
      >
        View full use case →
      </button>
    </div>
  );
}

export function WorkflowRow({ wf }: { wf: Workflow }) {
  const { openWorkflow } = useDeckNavigation();

  return (
    <div className="flex flex-col gap-2 border-b border-[var(--brand-border)] py-3 last:border-0 sm:flex-row sm:items-center sm:gap-4">
      <div className="flex w-16 shrink-0 items-center gap-2">
        <Badge variant="black">{wf.id}</Badge>
      </div>
      <div className="min-w-0 flex-1">
        <p className="font-semibold text-[var(--brand-fg)]">{wf.title}</p>
        <p className="truncate text-xs text-[var(--brand-muted)] sm:text-sm">
          {wf.summary}
        </p>
      </div>
      <div className="flex shrink-0 flex-wrap items-center gap-3 text-xs sm:text-sm">
        <Badge variant="neutral">{wf.phaseRevised}</Badge>
        <span className="font-mono font-bold text-[var(--brand-primary)]">
          {wf.investment}
        </span>
        <button
          type="button"
          onClick={() => openWorkflow(wf.id)}
          className="font-semibold text-[var(--brand-primary)] underline-offset-2 hover:underline"
        >
          Details →
        </button>
      </div>
    </div>
  );
}
