"use client";

import { useProposal } from "@/components/ProposalProvider";
import { StepFlow, SlideTitle } from "./shared";
import { useSlideTheme } from "./SlideTheme";

const STEP_ICONS = [
  "/werkwijze/discovery.png",
  "/werkwijze/ai-delivery.png",
  "/werkwijze/phased.png",
  "/werkwijze/security.png",
] as const;

const defaultCopy = {
  kicker: "Way of working",
  title: "Discovery in. Working software out.",
  subtitle:
    "Four principles that shape how we build with you, not a generic agency playbook.",
  aiTitle: "Weekly syncs",
  aiBody:
    "A fixed weekly check-in: progress, blockers, and priorities, so you always know where we stand and what comes next.",
  controlTitle: "You stay in control",
  controlBody:
    "Scope validated before build. Clear deliverables per phase. You choose how far to go.",
};

export function SlideWayOfWorking() {
  const { wayOfWorking, slideCopy } = useProposal();
  const copy = slideCopy?.wayOfWorking ?? defaultCopy;
  const theme = useSlideTheme();
  const isBlue = theme === "blue";

  return (
    <div className="flex min-h-full flex-col justify-center gap-5 md:gap-6">
      <SlideTitle
        kicker={copy.kicker}
        title={copy.title}
        subtitle={copy.subtitle}
        balanced
      />

      <StepFlow
        steps={wayOfWorking}
        icons={isBlue ? STEP_ICONS : undefined}
        balanced
      />

      <div className="grid gap-3 sm:grid-cols-2">
        {isBlue ? (
          <>
            <div className="rounded-xl border border-white/25 bg-white/10 p-4 backdrop-blur-sm md:p-5">
              <p className="text-xs font-bold text-[var(--brand-accent)] uppercase">
                {copy.aiTitle}
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-white/85 sm:text-sm">
                {copy.aiBody}
              </p>
            </div>
            <div className="rounded-xl border border-white/25 bg-white/10 p-4 backdrop-blur-sm md:p-5">
              <p className="text-xs font-bold text-[var(--brand-accent)] uppercase">
                {copy.controlTitle}
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-white/85 sm:text-sm">
                {copy.controlBody}
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="rounded-xl bg-[var(--brand-fg)] p-4 text-white md:p-5">
              <p className="text-xs font-bold text-[var(--brand-accent)] uppercase">
                {copy.aiTitle}
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-white/85 sm:text-sm">
                {copy.aiBody}
              </p>
            </div>
            <div className="rounded-xl border-2 border-[var(--brand-primary)] p-4 md:p-5">
              <p className="text-xs font-bold text-[var(--brand-primary)] uppercase">
                {copy.controlTitle}
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-[var(--brand-fg-secondary)] sm:text-sm">
                {copy.controlBody}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
