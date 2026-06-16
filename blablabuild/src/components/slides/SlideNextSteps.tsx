import { brand } from "@/lib/brand";
import { SlideTitle } from "./shared";

const steps = [
  {
    n: "01",
    title: "Choose a package",
    body: "Foundation, Momentum (recommended) or Full Phase 1–2.",
  },
  {
    n: "02",
    title: "Discovery deep-dive",
    body: "Map Bunch naming rules, investment thesis, legal templates and data sources.",
  },
  {
    n: "03",
    title: "Statement of Work",
    body: "Budget, milestones and kick-off within 2 weeks of agreement.",
  },
];

export function SlideNextSteps() {
  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">
      <div className="lg:w-[40%]">
        <SlideTitle
          kicker="Next steps"
          title="Ready when you are"
          subtitle="Three steps from here to kick-off."
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
        {steps.map((s, i) => (
          <div key={s.n} className="flex gap-4 sm:gap-6">
            <div className="flex flex-col items-center">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--brand-primary)] font-mono text-sm font-bold text-white">
                {s.n}
              </div>
              {i < steps.length - 1 && (
                <div className="my-1 w-0.5 flex-1 bg-[var(--brand-border)]" />
              )}
            </div>
            <div className="pb-8">
              <h3 className="text-lg font-bold text-[var(--brand-fg)]">{s.title}</h3>
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
