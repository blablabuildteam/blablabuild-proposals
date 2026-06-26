"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { LanguageToggle } from "@/components/LanguageToggle";
import { LoginHeroBackground } from "@/components/LoginHeroBackground";
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

function parseHighlightedTitle(text: string) {
  const parts: { text: string; highlight: boolean }[] = [];
  const regex = /\*\*(.+?)\*\*/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push({ text: text.slice(lastIndex, match.index), highlight: false });
    }
    parts.push({ text: match[1], highlight: true });
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push({ text: text.slice(lastIndex), highlight: false });
  }

  return parts.length > 0 ? parts : [{ text, highlight: false }];
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
    if (!slugParam || !accessKey) return;
    router.replace(buildAccessLinkUrl(slugParam, accessKey, contactName));
  }, [slugParam, accessKey, contactName, router]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ client, password }),
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
    <div className="relative min-h-dvh bg-[#121212]">
      <LoginHeroBackground />

      <div className="relative z-10 flex min-h-dvh items-center justify-center px-4 py-12">
        <div className="absolute right-4 top-4 sm:right-6 sm:top-6">
          <LanguageToggle
            locale={locale}
            onChange={handleLocaleChange}
            variant="on-dark"
          />
        </div>
        <div
          className={`w-full border border-white/15 bg-black/55 p-6 backdrop-blur-sm sm:p-8 ${
            isPersonalized ? "max-w-md" : "max-w-sm"
          }`}
        >
          <div className="mb-8 flex justify-center border-b border-white/10 pb-6">
            <Image
              src="/Logowhite.svg"
              alt={brand.name}
              width={brand.logoWidth}
              height={brand.logoHeight}
              priority
              className="h-8 w-auto"
            />
          </div>

          {isPersonalized && proposal ? (
            <div className="mb-6 space-y-3 text-center">
              <p className="text-[10px] font-semibold tracking-[0.2em] text-[var(--brand-accent)] uppercase sm:text-xs">
                {copy.kicker} {proposal.clientName}
              </p>
              {greeting && (
                <p className="text-sm text-white/70">{greeting}</p>
              )}
              <h1 className="login-pixel-mosaic text-xl leading-snug font-normal text-white sm:text-2xl">
                {parseHighlightedTitle(proposal.title).map((part, index) =>
                  part.highlight ? (
                    <span
                      key={index}
                      className="font-bold text-[var(--brand-accent)]"
                    >
                      {part.text}
                    </span>
                  ) : (
                    <span key={index}>{part.text}</span>
                  ),
                )}
              </h1>
              <p className="text-sm text-white/65">{proposal.subtitle}</p>
            </div>
          ) : (
            <div className="mb-6 space-y-2 text-center">
              <h1 className="login-pixel-mosaic text-2xl leading-tight text-white">
                Private proposals
              </h1>
              <p className="text-sm text-white/65">
                Enter your client name and password to open your deck.
              </p>
            </div>
          )}

          {isPasswordlessEntry ? (
            <p className="text-center text-sm text-white/70">{copy.opening}</p>
          ) : (
            <form onSubmit={onSubmit} className="space-y-4">
              {!isPersonalized && (
                <label className="block">
                  <span className="text-xs font-medium text-white/60">
                    {copy.clientLabel}
                  </span>
                  <input
                    type="text"
                    name="client"
                    value={client}
                    onChange={(e) => setClient(e.target.value)}
                    placeholder="Client name"
                    autoComplete="organization"
                    list="proposal-clients"
                    required
                    className="mt-1.5 w-full border border-white/15 bg-black/40 px-3 py-2.5 text-sm text-white outline-none focus:border-[var(--brand-accent)]"
                  />
                  <datalist id="proposal-clients">
                    {clients.map((c) => (
                      <option key={c.slug} value={c.clientName} />
                    ))}
                  </datalist>
                </label>
              )}

              {isPersonalized && (
                <input type="hidden" name="client" value={client} />
              )}

              <label className="block">
                <span className="text-xs font-medium text-white/60">
                  {copy.passwordLabel}
                </span>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  autoComplete="current-password"
                  required
                  autoFocus={isPersonalized}
                  className="mt-1.5 w-full border border-white/15 bg-black/40 px-3 py-2.5 text-sm text-white outline-none focus:border-[var(--brand-accent)]"
                />
                {copy.passwordHint && (
                  <p className="mt-1.5 text-xs text-white/50">
                    {copy.passwordHint}
                  </p>
                )}
              </label>

              {error && (
                <p className="text-sm text-[var(--brand-accent)]">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="mt-2 w-full bg-[var(--brand-accent)] py-3 text-sm font-bold text-black hover:bg-[var(--brand-accent-hover)] disabled:opacity-50"
              >
                {loading ? copy.submitting : copy.submit}
              </button>
            </form>
          )}

          {copy.confidentialNote && (
            <p className="mt-6 text-center text-[10px] text-white/40 sm:text-xs">
              {copy.confidentialNote}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
