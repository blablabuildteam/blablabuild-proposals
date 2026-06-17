"use client";

import { useState } from "react";
import { useProposal } from "@/components/ProposalProvider";
import { SlideTitle } from "./shared";
import { WorkflowRow } from "./WorkflowDetailCard";

const filterOrder = [
  "ALL",
  "NOW",
  "NEXT",
  "NEAR",
  "PARALLEL",
  "BACKLOG",
] as const;
type Filter = (typeof filterOrder)[number];

export function SlideWorkflows() {
  const { workflows } = useProposal();
  const [filter, setFilter] = useState<Filter>("ALL");

  const filtered =
    filter === "ALL"
      ? workflows
      : workflows.filter((w) => w.phaseRevised === filter);

  return (
    <div>
      <SlideTitle
        kicker="Reference"
        title="All 11 workflows"
        subtitle="Full overview. Filter by phase. Detail slides above cover what matters most."
        compact
      />

      <div className="mb-4 flex flex-wrap gap-1.5">
        {filterOrder.map((p) => (
          <FilterBtn key={p} active={filter === p} onClick={() => setFilter(p)}>
            {p}
          </FilterBtn>
        ))}
      </div>

      <div className="overflow-hidden rounded-[var(--brand-radius)] border border-[var(--brand-border)] bg-white">
        <div className="hidden border-b border-[var(--brand-border)] bg-[var(--brand-bg)] px-4 py-2 text-[10px] font-semibold tracking-wide text-[var(--brand-muted)] uppercase sm:grid sm:grid-cols-[4rem_1fr_auto] sm:gap-4 sm:px-5">
          <span>ID</span>
          <span>Initiative</span>
          <span className="text-right">Phase · Invest</span>
        </div>
        <div className="px-4 sm:px-5">
          {filtered.map((wf) => (
            <WorkflowRow key={wf.id} wf={wf} />
          ))}
        </div>
      </div>

      <p className="mt-3 text-xs text-[var(--brand-muted)]">
        Showing {filtered.length} of {workflows.length} workflows
      </p>
    </div>
  );
}

function FilterBtn({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
        active
          ? "bg-[var(--brand-primary)] text-white"
          : "bg-white text-[var(--brand-muted)] ring-1 ring-[var(--brand-border)] hover:text-[var(--brand-fg)]"
      }`}
    >
      {children}
    </button>
  );
}
