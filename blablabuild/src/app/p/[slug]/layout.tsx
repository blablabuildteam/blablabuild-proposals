import { cookies } from "next/headers";
import { notFound, redirect } from "next/navigation";
import type { ReactNode } from "react";
import { verifySessionToken } from "@/lib/auth/session";
import { getProposalBundle } from "@/lib/proposals/registry";

export default async function ProposalLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!getProposalBundle(slug)) {
    notFound();
  }

  const cookieStore = await cookies();
  const token = cookieStore.get("proposal_session")?.value;

  if (!verifySessionToken(token, slug)) {
    redirect(`/?return=${slug}&error=session`);
  }

  return children;
}
