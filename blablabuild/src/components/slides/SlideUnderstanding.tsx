"use client";

import { useProposal } from "@/components/ProposalProvider";
import { BulletList, SlideTitle, StatCard } from "./shared";

const defaultFriction = [
  "Manual document flows: download, rename, upload loops",
  "Files trapped in personal inboxes and ad-hoc folders",
  "Twinfield, Bunch and internal tools don't talk to each other",
  "Repetitive legal and onboarding paperwork nobody wants to do",
];

const defaultUnderstanding = {
  klanten: { label: "Managed entities", value: "40+" },
  tools: {
    label: "Core tools",
    value: "7",
    hint: "Bunch · Notion · SharePoint…",
  },
  pillarsLabel: "Focus areas",
  pillars: ["Fund operations", "Group finance", "Family office", "New investments"],
  kicker: "The challenge",
  title: "Growth created an admin ceiling",
  subtitle:
    "You've outgrown start-up mode. Manual processes are now the bottleneck, not the team.",
  goalsLabel: "Goals",
  goals: [
    {
      title: "Time saved",
      body: "High-value hours back for execution, deal work and strategic growth.",
    },
    {
      title: "More insights",
      body: "Real-time visibility into performance, cash positions and LP structures.",
    },
    {
      title: "Break the silos",
      body: "One shared operational backbone across ops, finance and investments.",
    },
  ],
  frictionLabel: "Where friction shows up today",
  friction: defaultFriction,
};

export function SlideUnderstanding() {
  const { understanding } = useProposal();
  const copy = understanding ?? defaultUnderstanding;

  return (
    <div className="flex flex-col gap-4 lg:grid lg:grid-cols-[280px_1fr] lg:gap-8">
      <div className="order-1 lg:order-2">
        <SlideTitle
          kicker={copy.kicker}
          title={copy.title}
          subtitle={copy.subtitle}
          compact
        />

        <div className="space-y-3">
          <p className="text-xs font-bold tracking-wide text-[var(--brand-muted)] uppercase">
            {copy.goalsLabel}
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            {copy.goals.map((goal) => (
              <div
                key={goal.title}
                className="flex flex-col overflow-hidden rounded-xl border border-[var(--brand-border)] bg-white"
              >
                <div className="bg-[var(--brand-accent)] px-4 py-3">
                  <p className="text-xs font-bold text-[var(--brand-fg)]">
                    {goal.title}
                  </p>
                </div>
                {goal.body ? (
                  <p className="flex-1 p-4 text-sm leading-relaxed text-[var(--brand-fg-secondary)]">
                    {goal.body}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 rounded-xl border border-[var(--brand-border)] bg-white p-4 sm:p-5">
          <p className="mb-3 text-xs font-bold tracking-wide text-[var(--brand-muted)] uppercase">
            {copy.frictionLabel}
          </p>
          <BulletList items={[...copy.friction]} />
        </div>
      </div>

      <aside className="order-2 grid grid-cols-2 gap-2 lg:order-1 lg:flex lg:flex-col lg:gap-3">
        <StatCard
          compact
          variant="dark"
          label={copy.klanten.label}
          value={copy.klanten.value}
          hint={"hint" in copy.klanten ? copy.klanten.hint : undefined}
        />
        {copy.tools ? (
          <StatCard
            compact
            label={copy.tools.label}
            value={copy.tools.value}
            hint={copy.tools.hint}
          />
        ) : null}
        <div className="col-span-2 rounded-xl border border-[var(--brand-border)] bg-white p-3 sm:p-4 lg:col-span-1 lg:p-5">
          <p className="text-[9px] font-medium tracking-wide text-[var(--brand-muted)] uppercase sm:text-[10px] lg:text-xs">
            {copy.pillarsLabel}
          </p>
          <ul className="mt-2 grid grid-cols-2 gap-1.5 lg:mt-3 lg:block lg:space-y-2">
            {copy.pillars.map((pillar) => (
              <li
                key={pillar}
                className="rounded-lg bg-[var(--brand-bg)] px-2.5 py-1.5 text-xs font-semibold text-[var(--brand-fg)] lg:px-3 lg:py-2 lg:text-sm"
              >
                {pillar}
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}
