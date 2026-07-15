"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { LanguageToggle } from "@/components/LanguageToggle";
import {
  HighlightedTitle,
  KickerPill,
} from "@/components/slides/shared";
import { brand } from "@/lib/brand";
import {
  defaultProposalAccess,
  formatAccessGreeting,
} from "@/lib/proposals/access-defaults";
import {
  resolveAccessKey,
  resolveAccessSlug,
  resolveContactName,
} from "@/lib/proposals/access-url";
import {
  DEFAULT_PROPOSAL_LOCALE,
  LOCALE_STORAGE_KEY,
  resolveProposalLocale,
  type ProposalLocale,
} from "@/lib/proposals/locale";
import type { PublicProposal } from "@/lib/proposals/types";

function buildAccessLinkUrl(
  slug: string,
  key: string,
  name: string | null,
): string {
  const params = new URLSearchParams({ p: slug, key });
  if (name) params.set("naam", name);
  return `/api/access/link?${params}`;
}

export function LandingScreen({
  clientsByLocale,
}: {
  clientsByLocale: Record<ProposalLocale, PublicProposal[]>;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const slugParam = resolveAccessSlug(searchParams);
  const accessKey = resolveAccessKey(searchParams);
  const contactName = resolveContactName(searchParams);
  const errorParam = searchParams.get("error");

  const [locale, setLocale] = useState<ProposalLocale>(DEFAULT_PROPOSAL_LOCALE);

  useEffect(() => {
    setLocale(resolveProposalLocale(localStorage.getItem(LOCALE_STORAGE_KEY)));
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const handleLocaleChange = (next: ProposalLocale) => {
    setLocale(next);
    localStorage.setItem(LOCALE_STORAGE_KEY, next);
  };

  const clients = clientsByLocale[locale];

  const proposal = useMemo(
    () => clients.find((c) => c.slug === slugParam),
    [clients, slugParam],
  );

  const copy = proposal?.access.landing ?? defaultProposalAccess.landing;
  const greeting = formatAccessGreeting(copy.greetingTemplate, contactName);
  const isPersonalized = Boolean(proposal);
  const isPasswordlessEntry = Boolean(slugParam && accessKey);

  const defaultClient = proposal?.clientName ?? "";

  const [client, setClient] = useState(defaultClient);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(isPasswordlessEntry);
  const [error, setError] = useState<string | null>(() => {
    if (errorParam === "session") return copy.sessionExpired;
    if (errorParam === "access") return copy.invalidAccessLink;
    return null;
  });

  useEffect(() => {
    if (proposal?.clientName) {
      setClient(proposal.clientName);
    }
  }, [proposal?.clientName]);

  useEffect(() => {
    if (!slugParam || !accessKey) return;
    router.replace(buildAccessLinkUrl(slugParam, accessKey, contactName));
  }, [slugParam, accessKey, contactName, router]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const clientForAuth =
        isPersonalized && proposal ? proposal.clientName : client;

      const res = await fetch("/api/access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ client: clientForAuth, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? copy.accessDenied);
        setLoading(false);
        return;
      }

      router.push(data.redirect as string);
      router.refresh();
    } catch {
      setError(copy.genericError);
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-dvh items-center justify-center bg-[var(--brand-bg)] px-4 py-12">
      <div
        className={`w-full rounded-2xl border border-[var(--brand-border)] bg-white p-6 sm:p-8 ${
          isPersonalized ? "max-w-md" : "max-w-sm"
        }`}
      >
        <div className="mb-6 flex items-center justify-between gap-4 border-b border-[var(--brand-border)] pb-6">
          <div className="flex flex-1 justify-center">
            <Image
              src={brand.logo}
              alt={brand.name}
              width={brand.logoWidth}
              height={brand.logoHeight}
              priority
              className="h-8 w-auto"
            />
          </div>
          {proposal?.showLocaleSwitcher !== false && (
            <LanguageToggle locale={locale} onChange={handleLocaleChange} />
          )}
        </div>

        {isPersonalized && proposal && (
          <div className="mb-6 space-y-3 text-center">
            <div className="flex justify-center">
              <KickerPill>
                {copy.kicker} {proposal.clientName}
              </KickerPill>
            </div>
            {greeting && (
              <p className="text-sm text-[var(--brand-muted)]">{greeting}</p>
            )}
            <h1 className="text-xl font-semibold leading-snug text-[var(--brand-fg)] sm:text-2xl">
              <HighlightedTitle text={proposal.title} variant="light" />
            </h1>
            <p className="text-sm text-[var(--brand-muted)]">
              {proposal.subtitle}
            </p>
          </div>
        )}

        {isPasswordlessEntry ? (
          <p className="text-center text-sm text-[var(--brand-muted)]">
            {copy.opening}
          </p>
        ) : (
          <form onSubmit={onSubmit} className="space-y-4">
            {!isPersonalized && (
              <label className="block">
                <span className="text-xs font-medium text-[var(--brand-muted)]">
                  {copy.clientLabel}
                </span>
                <input
                  type="text"
                  name="client"
                  value={client}
                  onChange={(e) => setClient(e.target.value)}
                  placeholder="ABCapital"
                  autoComplete="organization"
                  list="proposal-clients"
                  required
                  className="mt-1.5 w-full rounded-lg border border-[var(--brand-border)] bg-[var(--brand-bg)] px-3 py-2.5 text-sm text-[var(--brand-fg)] outline-none focus:border-[var(--brand-primary)] focus:bg-white"
                />
                <datalist id="proposal-clients">
                  {clients.map((c) => (
                    <option key={c.slug} value={c.clientName} />
                  ))}
                </datalist>
              </label>
            )}

            <label className="block">
              <span className="text-xs font-medium text-[var(--brand-muted)]">
                {copy.passwordLabel}
              </span>
              <input
                type={copy.passwordInputType ?? "password"}
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder=""
                autoComplete="off"
                required
                autoFocus={isPersonalized}
                className="mt-1.5 w-full rounded-lg border border-[var(--brand-border)] bg-[var(--brand-bg)] px-3 py-2.5 text-sm text-[var(--brand-fg)] outline-none focus:border-[var(--brand-primary)] focus:bg-white"
              />
              {copy.passwordHint && (
                <p className="mt-1.5 text-xs text-[var(--brand-muted)]">
                  {copy.passwordHint}
                </p>
              )}
            </label>

            {error && (
              <p className="text-sm text-[var(--brand-primary)]">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="mt-2 w-full rounded-full bg-[var(--brand-accent)] py-3 text-sm font-bold text-[var(--brand-fg)] hover:bg-[var(--brand-accent-hover)] disabled:opacity-50"
            >
              {loading ? copy.submitting : copy.submit}
            </button>
          </form>
        )}

        {copy.confidentialNote && (
          <p className="mt-6 text-center text-[10px] text-[var(--brand-muted)] sm:text-xs">
            {copy.confidentialNote}
          </p>
        )}
      </div>
    </div>
  );
}
