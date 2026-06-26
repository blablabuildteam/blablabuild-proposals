"use client";

import type { Workflow, WorkflowRelation } from "@/lib/types";
import { useProposal } from "@/components/ProposalProvider";
import { useDeckNavigation } from "@/components/DeckNavigation";
import { useProposalUi } from "@/lib/proposals/use-proposal-ui";
import { Badge } from "./shared";

function RelationSection({
  title,
  items,
  variant,
  onOpen,
  resolveTitle,
}: {
  title: string;
  items: WorkflowRelation[];
  variant: "prerequisite" | "unlock";
  onOpen: (id: string) => void;
  resolveTitle: (id: string) => string | undefined;
}) {
  const isPrereq = variant === "prerequisite";

  return (
    <section
      className={`rounded-xl border p-5 sm:p-6 ${
        isPrereq
          ? "border-[var(--brand-border)] bg-[var(--brand-bg)]"
          : "border-[var(--brand-primary)]/20 bg-[var(--brand-primary)]/5"
      }`}
    >
      <p
        className={`text-[10px] font-bold tracking-wide uppercase ${
          isPrereq ? "text-[var(--brand-muted)]" : "text-[var(--brand-primary)]"
        }`}
      >
        {title}
      </p>
      <ul className="mt-3 space-y-2">
        {items.map((item) => {
          const linkedTitle = resolveTitle(item.workflowId);
          const label = linkedTitle ?? item.workflowId;

          return (
            <li key={`${item.workflowId}-${item.qualifier ?? ""}`}>
              <button
                type="button"
                onClick={() => onOpen(item.workflowId)}
                className="group w-full rounded-lg border border-transparent px-2 py-1.5 text-left transition hover:border-[var(--brand-primary)]/25 hover:bg-white/80"
              >
                <span className="flex flex-wrap items-center gap-2">
                  <Badge variant="black">{item.workflowId}</Badge>
                  <span className="text-sm font-medium text-[var(--brand-fg)] group-hover:text-[var(--brand-primary)]">
                    {label}
                  </span>
                </span>
                {item.qualifier && (
                  <span className="mt-1 block pl-0.5 text-xs leading-snug text-[var(--brand-muted)]">
                    {item.qualifier}
                  </span>
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export function WorkflowRelations({ wf }: { wf: Workflow }) {
  const { getWorkflow } = useProposal();
  const { openWorkflow } = useDeckNavigation();
  const ui = useProposalUi();

  const prerequisites = wf.prerequisites ?? [];
  const unlocks = wf.unlocks ?? [];

  if (prerequisites.length === 0 && unlocks.length === 0) {
    return null;
  }

  const resolveTitle = (id: string) => getWorkflow(id)?.title;

  return (
    <div className="flex min-w-[220px] flex-col gap-4">
      {prerequisites.length > 0 && (
        <RelationSection
          title={ui.prerequisites}
          items={prerequisites}
          variant="prerequisite"
          onOpen={openWorkflow}
          resolveTitle={resolveTitle}
        />
      )}
      {unlocks.length > 0 && (
        <RelationSection
          title={ui.unlocks}
          items={unlocks}
          variant="unlock"
          onOpen={openWorkflow}
          resolveTitle={resolveTitle}
        />
      )}
    </div>
  );
}
