import type { Metadata } from "next";
import { LibraryShowcase } from "./LibraryShowcase";
import { brand } from "@/lib/brand";
import { prepareBundleForClient } from "@/lib/proposals/prepare-bundle";
import { getProposalBundles } from "@/lib/proposals/registry";

export const metadata: Metadata = {
  title: `Component Library · ${brand.name}`,
  description:
    "Proposal section library — all deck components with ABCapital preview data.",
};

export default function LibraryPage() {
  const bundles = getProposalBundles("ab-capital");

  if (!bundles) {
    return (
      <div className="flex min-h-dvh items-center justify-center bg-[var(--brand-bg)]">
        <p className="text-sm text-[var(--brand-muted)]">
          ABCapital bundle not found.
        </p>
      </div>
    );
  }

  return (
    <LibraryShowcase
      bundles={{
        en: prepareBundleForClient(bundles.en),
        nl: prepareBundleForClient(bundles.nl),
      }}
    />
  );
}
