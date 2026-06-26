import { Suspense } from "react";
import { LandingScreen } from "@/components/LandingScreen";
import { getPublicProposalsLocalized } from "@/lib/proposals/registry";

function LandingFallback() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-[var(--brand-bg)]">
      <p className="text-sm text-[var(--brand-muted)]">Loading…</p>
    </div>
  );
}

export default function Home() {
  const clientsByLocale = getPublicProposalsLocalized();

  return (
    <Suspense fallback={<LandingFallback />}>
      <LandingScreen clientsByLocale={clientsByLocale} />
    </Suspense>
  );
}
