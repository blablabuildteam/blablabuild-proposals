"use client";

import { useProposal } from "@/components/ProposalProvider";
import { StepFlow, SlideTitle } from "./shared";

export function SlideWayOfWorking() {
  const { wayOfWorking } = useProposal();

  return (
    <div>
      <SlideTitle
        kicker="Way of working"
        title="Discovery in. Working software out."
        subtitle="Four principles that shape how we build with you — not a generic agency playbook."
      />

      <StepFlow steps={wayOfWorking} />

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        <div className="rounded-[var(--brand-radius)] bg-[var(--brand-fg)] p-5 text-white">
          <p className="text-xs font-bold text-[var(--brand-accent)] uppercase">
            AI-assisted delivery
          </p>
          <p className="mt-2 text-sm leading-relaxed text-white/85">
            We build with AI — shorter timelines, leaner estimates, working
            software at each gate.
          </p>
        </div>
        <div className="rounded-[var(--brand-radius)] border-2 border-[var(--brand-primary)] p-5">
          <p className="text-xs font-bold text-[var(--brand-primary)] uppercase">
            You stay in control
          </p>
          <p className="mt-2 text-sm leading-relaxed text-[var(--brand-fg-secondary)]">
            Scope validated before build. Clear deliverables per phase. You
            choose how far to go.
          </p>
        </div>
      </div>
    </div>
  );
}
