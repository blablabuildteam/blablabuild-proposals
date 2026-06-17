import type { Metadata } from "next";
import { LibraryShowcase } from "./LibraryShowcase";
import { brand } from "@/lib/brand";
import { prepareBundleForClient } from "@/lib/proposals/prepare-bundle";
import { getProposalBundle } from "@/lib/proposals/registry";

export const metadata: Metadata = {
  title: `Component Library · ${brand.name}`,
  description:
    "Proposal section library — all deck components with AB Capital preview data.",
};

export default function LibraryPage() {
  const bundle = getProposalBundle("ab-capital");

  if (!bundle) {
    return (
      <div className="flex min-h-dvh items-center justify-center bg-[var(--brand-bg)]">
        <p className="text-sm text-[var(--brand-muted)]">
          AB Capital bundle not found.
        </p>
      </div>
    );
  }

  return <LibraryShowcase bundle={prepareBundleForClient(bundle)} />;
}
