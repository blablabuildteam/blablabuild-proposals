import type { ProposalAccess } from "./types";

export function createDefaultProposalAccess(brandName: string): ProposalAccess {
  return {
    landing: {
      kicker: "Proposal for",
      greetingTemplate: "Hi {name},",
      clientLabel: "Client",
      passwordLabel: "Password",
      passwordHint: "Use the password from your invitation email.",
      submit: "Open proposal",
      submitting: "Checking…",
      opening: "Opening proposal…",
      sessionExpired: "Session expired. Sign in again.",
      invalidAccessLink:
        "This link is invalid or expired. Enter the password from your invitation.",
      accessDenied: "Invalid client or password",
      genericError: "Something went wrong. Please try again.",
      confidentialNote: `Confidential · prepared by ${brandName}`,
    },
  };
}

export function formatAccessGreeting(
  template: string | undefined,
  name: string | null,
): string | null {
  if (!template || !name?.trim()) return null;
  return template.replaceAll("{name}", name.trim());
}
