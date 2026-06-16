"use client";

import { useState } from "react";
import type { Workflow } from "@/lib/types";
import { Badge, BulletList } from "./shared";

function WorkflowExpandedDetails({ wf }: { wf: Workflow }) {
  return (
    <div className="space-y-3 border-t border-[var(--brand-border)] pt-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-lg bg-[var(--brand-bg)] p-3">
          <p className="text-[10px] font-semibold tracking-wide text-[var(--brand-muted)] uppercase">
            Why this matters
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

      {wf.foundationFor && wf.foundationFor.length > 0 && (
        <div className="rounded-lg border border-[var(--brand-primary)]/15 bg-[var(--brand-primary)]/5 p-3">
          <p className="text-[10px] font-semibold tracking-wide text-[var(--brand-muted)] uppercase">
            Unlocks
          </p>
          <ul className="mt-1.5 space-y-1">
            {wf.foundationFor.map((item) => (
              <li key={item} className="text-sm text-[var(--brand-fg-secondary)]">
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div>
        <p className="mb-2 text-[10px] font-semibold tracking-wide text-[var(--brand-muted)] uppercase">
          Deliverables
        </p>
        <BulletList items={wf.deliverables} />
      </div>

      <div className="flex flex-wrap gap-3 text-xs text-[var(--brand-muted)]">
        <span>
          Effort: <strong className="text-[var(--brand-fg)]">{wf.effortDays}</strong>
        </span>
        <span>
          Phase:{" "}
          <strong className="text-[var(--brand-fg)]">{wf.phaseRevised}</strong>
        </span>
      </div>
    </div>
  );
}

export function WorkflowCompact({
  wf,
  defaultExpanded = false,
}: {
  wf: Workflow;
  defaultExpanded?: boolean;
}) {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const panelId = `wf-detail-${wf.id}`;

  return (
    <div
      className={`rounded-xl border bg-white p-4 transition-shadow sm:p-5 ${
        expanded
          ? "border-[var(--brand-primary)]/40 shadow-sm ring-1 ring-[var(--brand-primary)]/10"
          : "border-[var(--brand-border)]"
      }`}
    >
      <div className="mb-2 flex flex-wrap items-center gap-2">
        <Badge variant="black">{wf.id}</Badge>
        <span className="font-mono text-sm font-bold text-[var(--brand-primary)]">
          {wf.investment}
        </span>
        <span className="text-xs text-[var(--brand-muted)]">
          {wf.weeks} · {wf.timeSaved}
        </span>
      </div>
      <h3 className="text-base font-bold text-[var(--brand-fg)]">{wf.title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-[var(--brand-muted)]">{wf.summary}</p>
      <div className="mt-3 border-t border-[var(--brand-border)] pt-3">
        <BulletList items={wf.benefits.slice(0, 3)} />
      </div>

      {expanded && <WorkflowExpandedDetails wf={wf} />}

      <button
        type="button"
        onClick={() => setExpanded((open) => !open)}
        aria-expanded={expanded}
        aria-controls={panelId}
        className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-lg border border-[var(--brand-border)] bg-[var(--brand-bg)] px-3 py-2 text-xs font-semibold text-[var(--brand-primary)] transition hover:border-[var(--brand-primary)]/30 hover:bg-[var(--brand-primary)]/5"
      >
        {expanded ? "Hide approach & details" : "View approach & details"}
        <span
          aria-hidden
          className={`inline-block transition-transform ${expanded ? "rotate-180" : ""}`}
        >
          ▾
        </span>
      </button>
      <div id={panelId} className="sr-only">
        {expanded ? "Expanded" : "Collapsed"}
      </div>
    </div>
  );
}

export function WorkflowDetailCard({ wf }: { wf: Workflow }) {
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

      <div className="mt-3">
        <BulletList items={wf.benefits} />
      </div>
    </div>
  );
}

export function WorkflowRow({ wf }: { wf: Workflow }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border-b border-[var(--brand-border)] py-3 last:border-0">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
        <div className="flex w-16 shrink-0 items-center gap-2">
          <Badge variant="black">{wf.id}</Badge>
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-semibold text-[var(--brand-fg)]">{wf.title}</p>
          <p className="truncate text-xs text-[var(--brand-muted)] sm:text-sm">{wf.summary}</p>
        </div>
        <div className="flex shrink-0 flex-wrap items-center gap-3 text-xs sm:text-sm">
          <Badge variant="neutral">{wf.phaseRevised}</Badge>
          <span className="font-mono font-bold text-[var(--brand-primary)]">
            {wf.investment}
          </span>
          <button
            type="button"
            onClick={() => setExpanded((open) => !open)}
            aria-expanded={expanded}
            className="text-xs font-semibold text-[var(--brand-primary)] underline-offset-2 hover:underline"
          >
            {expanded ? "Less" : "Details"}
          </button>
        </div>
      </div>
      {expanded && (
        <div className="mt-3 pl-0 sm:pl-20">
          <WorkflowExpandedDetails wf={wf} />
        </div>
      )}
    </div>
  );
}
