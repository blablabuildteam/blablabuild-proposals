"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { brand } from "@/lib/brand";
import type { PublicProposal } from "@/lib/proposals/types";

export function LandingScreen({ clients }: { clients: PublicProposal[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const returnSlug = searchParams.get("return");
  const errorParam = searchParams.get("error");

  const defaultClient =
    clients.find((c) => c.slug === returnSlug)?.clientName ?? "";

  const [client, setClient] = useState(defaultClient);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(
    errorParam === "session"
      ? "Session expired. Sign in again."
      : null,
  );

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
        setError(data.error ?? "Access denied");
        setLoading(false);
        return;
      }

      router.push(data.redirect as string);
      router.refresh();
    } catch {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-dvh items-center justify-center bg-[var(--brand-bg)] px-4 py-12">
      <div className="w-full max-w-sm rounded-2xl border border-[var(--brand-border)] bg-white p-6 sm:p-8">
        <div className="mb-8 flex justify-center border-b border-[var(--brand-border)] pb-6">
          <Image
            src={brand.logo}
            alt={brand.name}
            width={brand.logoWidth}
            height={brand.logoHeight}
            priority
            className="h-8 w-auto"
          />
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <label className="block">
            <span className="text-xs font-medium text-[var(--brand-muted)]">Client</span>
            <input
              type="text"
              name="client"
              value={client}
              onChange={(e) => setClient(e.target.value)}
              placeholder="AB Capital"
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

          <label className="block">
            <span className="text-xs font-medium text-[var(--brand-muted)]">Password</span>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              autoComplete="current-password"
              required
              className="mt-1.5 w-full rounded-lg border border-[var(--brand-border)] bg-[var(--brand-bg)] px-3 py-2.5 text-sm text-[var(--brand-fg)] outline-none focus:border-[var(--brand-primary)] focus:bg-white"
            />
          </label>

          {error && (
            <p className="text-sm text-[var(--brand-primary)]">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-2 w-full rounded-full bg-[var(--brand-accent)] py-3 text-sm font-bold text-[var(--brand-fg)] hover:bg-[var(--brand-accent-hover)] disabled:opacity-50"
          >
            {loading ? "Checking…" : "Open"}
          </button>
        </form>
      </div>
    </div>
  );
}
