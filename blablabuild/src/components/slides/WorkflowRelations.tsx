"use client";

import type { Workflow, WorkflowRelation } from "@/lib/types";
import { useProposal } from "@/components/ProposalProvider";
import { useDeckNavigation } from "@/components/DeckNavigation";
import { useProposalUi } from "@/lib/proposals/use-proposal-ui";
import { Badge } from "./shared";

type Connection = WorkflowRelation & {
  direction: "in" | "out";
};

function ConnectionRow({
  connection,
  directionLabel,
  onOpen,
  resolveTitle,
}: {
  connection: Connection;
  directionLabel: string;
  onOpen: (id: string) => void;
  resolveTitle: (id: string) => string | undefined;
}) {
  const linkedTitle = resolveTitle(connection.workflowId);
  const label = linkedTitle ?? connection.workflowId;
  const arrow = connection.direction === "in" ? "←" : "→";

  return (
    <li>
      <button
        type="button"
        onClick={() => onOpen(connection.workflowId)}
        className="group w-full rounded-xl border border-[var(--brand-border)]/70 bg-white px-3 py-3 text-left transition hover:border-[var(--brand-primary)]/35 hover:shadow-sm sm:px-4"
      >
        <div className="flex flex-wrap items-center gap-2">
          <span
            className="font-mono text-sm font-bold text-[var(--brand-primary)]"
            aria-hidden
          >
            {arrow}
          </span>
          <Badge variant="black">{connection.workflowId}</Badge>
          <span className="text-sm font-semibold text-[var(--brand-fg)] group-hover:text-[var(--brand-primary)]">
            {label}
          </span>
          <span className="text-[10px] font-bold tracking-wide text-[var(--brand-muted)] uppercase">
            {directionLabel}
          </span>
        </div>
        {connection.qualifier ? (
          <p className="mt-2 pl-6 text-xs leading-relaxed text-[var(--brand-fg-secondary)] sm:pl-7 sm:text-sm">
            {connection.qualifier}
          </p>
        ) : null}
      </button>
    </li>
  );
}

export function WorkflowRelations({ wf }: { wf: Workflow }) {
  const { getWorkflow } = useProposal();
  const { openWorkflow } = useDeckNavigation();
  const ui = useProposalUi();

  const connections: Connection[] = [
    ...(wf.prerequisites ?? []).map((item) => ({
      ...item,
      direction: "in" as const,
    })),
    ...(wf.unlocks ?? []).map((item) => ({
      ...item,
      direction: "out" as const,
    })),
  ];

  if (connections.length === 0) {
    return null;
  }

  const resolveTitle = (id: string) => getWorkflow(id)?.title;

  return (
    <section className="rounded-xl border border-[var(--brand-primary)]/25 bg-[var(--brand-primary)]/5 p-5 sm:p-6">
      <p className="text-[10px] font-bold tracking-wide text-[var(--brand-primary)] uppercase">
        {ui.interconnectivity}
      </p>
      <p className="mt-1 max-w-2xl text-sm leading-relaxed text-[var(--brand-fg-secondary)]">
        {ui.interconnectivityHint}
      </p>
      <ul className="mt-4 space-y-2.5">
        {connections.map((connection) => (
          <ConnectionRow
            key={`${connection.direction}-${connection.workflowId}-${connection.qualifier ?? ""}`}
            connection={connection}
            directionLabel={
              connection.direction === "in" ? ui.feedsFrom : ui.feedsInto
            }
            onOpen={openWorkflow}
            resolveTitle={resolveTitle}
          />
        ))}
      </ul>
    </section>
  );
}
