import { BulletList, SlideTitle, StatCard } from "./shared";

const friction = [
  "Manual document flows — download, rename, upload loops",
  "Files trapped in personal inboxes and ad-hoc folders",
  "Twinfield, Bunch and internal tools don't talk to each other",
  "Repetitive legal and onboarding paperwork nobody wants to do",
];

export function SlideUnderstanding() {
  return (
    <div className="grid gap-6 lg:grid-cols-[280px_1fr] lg:gap-8">
      <aside className="flex flex-col gap-3">
        <StatCard
          variant="dark"
          label="Managed entities"
          value="40+"
          hint="Twinfield · Basecone"
        />
        <StatCard label="Core tools" value="7" hint="Bunch · Notion · SharePoint…" />
        <StatCard
          variant="blue"
          label="Fund admin / fund"
          value="€18–30k"
          hint="Annual Bunch cost"
        />
      </aside>

      <div>
        <SlideTitle
          kicker="The challenge"
          title="Growth created an admin ceiling"
          subtitle="You've outgrown start-up mode. Manual processes are now the bottleneck — not the team."
          compact
        />

        <div className="rounded-xl bg-[var(--brand-primary)] p-5 text-white sm:p-6">
          <p className="text-xs font-bold tracking-wide text-[var(--brand-accent)] uppercase">
            Core objective
          </p>
          <p className="mt-2 text-lg leading-snug font-bold sm:text-xl">
            Automate operations to free time for execution and reduce error
            margin.
          </p>
        </div>

        <div className="mt-4 rounded-xl border border-[var(--brand-border)] bg-white p-5">
          <p className="mb-3 text-xs font-bold tracking-wide text-[var(--brand-muted)] uppercase">
            Where friction shows up today
          </p>
          <BulletList items={friction} />
        </div>
      </div>
    </div>
  );
}
