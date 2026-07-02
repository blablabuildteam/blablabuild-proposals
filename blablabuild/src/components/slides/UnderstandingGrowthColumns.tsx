import type { ProposalUnderstandingGrowth } from "@/lib/proposals/types";

export function UnderstandingGrowthColumns({
  growth,
}: {
  growth: ProposalUnderstandingGrowth;
}) {
  return (
    <div className="grid gap-3 md:grid-cols-3">
      {(
        [
          {
            label: growth.strengthsLabel,
            items: growth.strengths,
            accent: "bg-[var(--brand-fg)] text-white",
            body: "text-white/85",
          },
          {
            label: growth.ambitionLabel,
            items: growth.ambition,
            accent: "bg-[var(--brand-accent)]",
            body: "text-[var(--brand-fg-secondary)]",
          },
          {
            label: growth.gapLabel,
            items: growth.gap,
            accent: "border-2 border-[var(--brand-primary)] bg-white",
            body: "text-[var(--brand-fg-secondary)]",
          },
        ] as const
      ).map((column) => (
        <div
          key={column.label}
          className={`flex flex-col overflow-hidden rounded-xl ${column.accent}`}
        >
          <p className="px-4 py-3 text-xs font-bold tracking-wide uppercase">
            {column.label}
          </p>
          <ul className={`space-y-2 px-4 pb-4 text-sm leading-relaxed ${column.body}`}>
            {column.items.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="opacity-60">·</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
