"use client";

import { brand } from "@/lib/brand";
import { useProposal } from "@/components/ProposalProvider";
import { SlideTitle } from "./shared";

const defaultSteps = [
  {
    n: "01",
    title: "Review",
    body:
      "Walk through the phase plan, workflows and investment at your own pace. Note questions, priorities and what needs to change for you.",
  },
  {
    n: "02",
    title: "Call to discuss",
    body:
      "Short session to go through open points: where the pain is highest, which phase has priority, and what should differ from this framework.",
  },
  {
    n: "03",
    title: "Adjust phases and sharpen scope",
    body:
      "Together we fine-tune the phasing: shift workflows, narrow or expand scope, and align timing with your capacity. From framework to concrete: confirmed scope per phase, line-item budget, deliverables and milestones. No more ballparks.",
  },
  {
    n: "04",
    title: "Contracting",
    body:
      "Sign the Statement of Work and plan kick-off. Start within 2 weeks of agreement.",
  },
];

const defaultCopy = {
  kicker: "Next steps",
  title: "Ready when you are",
  subtitle: "From roadmap to phased delivery: four steps to kick-off.",
  steps: defaultSteps,
};

export function SlideNextSteps() {
  const { slideCopy } = useProposal();
  const copy = slideCopy?.nextSteps ?? defaultCopy;

  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">
      <div className="lg:w-[40%]">
        <SlideTitle
          kicker={copy.kicker}
          title={copy.title}
          subtitle={copy.subtitle}
          compact
        />
        <div className="mt-6 rounded-xl bg-[var(--brand-accent)] p-5">
          <p className="text-sm font-bold text-[var(--brand-fg)]">{brand.name}</p>
          <p className="mt-2 text-sm leading-relaxed text-[var(--brand-fg)]/80">
            {brand.tagline}
          </p>
        </div>
      </div>

      <div className="flex-1 space-y-0">
        {copy.steps.map((s, i) => (
          <div key={s.n} className="flex gap-4 sm:gap-6">
            <div className="flex flex-col items-center">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--brand-primary)] font-mono text-sm font-bold text-white">
                {s.n}
              </div>
              {i < copy.steps.length - 1 && (
                <div className="my-1 w-0.5 flex-1 bg-[var(--brand-border)]" />
              )}
            </div>
            <div className="pb-8">
              <h3 className="text-lg text-[var(--brand-fg)]">{s.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-[var(--brand-muted)]">
                {s.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
