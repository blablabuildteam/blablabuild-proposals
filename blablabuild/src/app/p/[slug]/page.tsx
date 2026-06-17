import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SlideDeck } from "@/components/SlideDeck";
import { ProposalProvider } from "@/components/ProposalProvider";
import { brand } from "@/lib/brand";
import { prepareBundleForClient } from "@/lib/proposals/prepare-bundle";
import { getProposalBundle } from "@/lib/proposals/registry";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const bundle = getProposalBundle(slug);
  if (!bundle) return { title: `Proposal · ${brand.name}` };

  return {
    title: `${bundle.meta.clientName} · ${bundle.meta.title} | ${brand.name}`,
    description: bundle.meta.subtitle,
  };
}

export default async function ProposalPage({ params }: Props) {
  const { slug } = await params;
  const bundle = getProposalBundle(slug);

  if (!bundle) notFound();

  return (
    <ProposalProvider bundle={prepareBundleForClient(bundle)}>
      <SlideDeck />
    </ProposalProvider>
  );
}
