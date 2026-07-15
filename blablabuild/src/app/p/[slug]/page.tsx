import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SlideDeck } from "@/components/SlideDeck";
import { ProposalProvider } from "@/components/ProposalProvider";
import { brand } from "@/lib/brand";
import { prepareBundleForClient } from "@/lib/proposals/prepare-bundle";
import { getProposalBundles } from "@/lib/proposals/registry";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const bundles = getProposalBundles(slug);
  const bundle = bundles?.nl ?? bundles?.en;
  if (!bundle) return { title: `Proposal · ${brand.name}` };

  return {
    title: `${bundle.meta.clientName} · ${bundle.meta.title} | ${brand.name}`,
    description: bundle.meta.subtitle,
  };
}

export default async function ProposalPage({ params }: Props) {
  const { slug } = await params;
  const bundles = getProposalBundles(slug);

  if (!bundles) notFound();

  const defaultLocale = bundles.en?.meta.defaultLocale ?? bundles.nl?.meta.defaultLocale;

  return (
    <ProposalProvider
      bundles={{
        en: prepareBundleForClient(bundles.en),
        nl: prepareBundleForClient(bundles.nl),
      }}
      initialLocale={defaultLocale}
    >
      <SlideDeck />
    </ProposalProvider>
  );
}
