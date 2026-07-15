import type { ProposalLocale } from "@/lib/proposals/locale";
import type { ProposalBundle } from "@/lib/proposals/types";
import * as data from "./data";

export const meta = {
  slug: "adsomnia",
  clientName: "Adsomnia",
  clientLogo: "/adsomnia-logo.png",
  title: "Building **Adsomnia** together",
  subtitle: "Workshop · Enablement · Always-On Retainer · July 2026",
  defaultLocale: "en",
  showLocaleSwitcher: false,
} as const;

export const debrief = {
  quote:
    "Human-First, AI-Empowered: Shifting from Grunt Work to Strategic Impact. AI is not here to lead — it is here to empower. The human remains in the driver's seat.",
  quoteSource: "Adsomnia AI vision",
  focusAreas: "2 projects + ongoing partnership: AI Enablement Workshop · Project Enablement · Always-On Retainer",
  date: "July 2026",
} as const;

export const access = {
  landing: {
    kicker: "Proposal for",
    greetingTemplate: "Hi {name},",
    clientLabel: "Client",
    passwordLabel: "Password",
    passwordHint: "Use the password from your invitation.",
    submit: "Open proposal",
    submitting: "Checking…",
    opening: "Opening proposal…",
    sessionExpired: "Your session has expired. Please sign in again.",
    invalidAccessLink:
      "This link is invalid or has expired. Enter the password from your invitation.",
    accessDenied: "Invalid client or password",
    genericError: "Something went wrong. Please try again.",
    confidentialNote: "Confidential, prepared by blablabuild",
  },
} as const;

export const slideCopy = {
  debriefKicker: "Intake summary",
  wayOfWorking: {
    kicker: "Way of working",
    title: "**Activate**, not just inspire.",
    subtitle:
      "Four principles that shape how we work with Adsomnia. Not a standard agency playbook.",
    aiTitle: "Weekly alignment",
    aiBody:
      "Each project has a fixed rhythm: progress, open items, and what gets delivered this sprint. No surprises.",
    controlTitle: "You stay in control",
    controlBody:
      "Scope per project is locked before we start. You decide the order and pace of the three projects.",
  },
  investment: {
    kicker: "Investment",
    title: "Investment **per project**",
    subtitle:
      "Two fixed projects and an ongoing partnership based on availability.",
  },
  nextSteps: {
    kicker: "Next steps",
    title: "Ready when **you** are",
    subtitle: "From proposal to execution in four steps.",
    steps: [
      {
        n: "01",
        title: "Review the proposal",
        body: "Walk through the three projects, approach, and investment at your own pace. Note questions and anything you'd like to change.",
      },
      {
        n: "02",
        title: "Discuss together",
        body: "A short session to go through the proposal together. Open questions, adjust scope, and decide which projects start when.",
      },
      {
        n: "03",
        title: "Lock scope per project",
        body: "Per project we align on deliverables, timeline, and responsibilities.",
      },
      {
        n: "04",
        title: "Plan kick-off",
        body: "Milestone #1 of the workshop is already set for 29 July. Sign and start.",
      },
    ],
  },
} as const;

const slideLabels: Record<string, string> = {
  debrief: "Intro",
  "way-of-working": "Way of working",
  "phase-now": "AI Workshop",
  "phase-next": "Project Enablement",
  "phase-near": "Always-On Retainer",
  investment: "Investment",
  "next-steps": "Next steps",
};

const bundle: ProposalBundle = {
  meta,
  access,
  debrief,
  slideCopy,
  workflows: data.workflows,
  riceSorted: data.riceSorted,
  phases: data.phases,
  packages: data.packages,
  wayOfWorking: data.wayOfWorking,
  slideConfigs: data.slideConfigs.map((c) => ({
    ...c,
    label: slideLabels[c.sectionId] ?? c.label,
  })),
  slideLabels: data.slideConfigs.map(
    (c) => slideLabels[c.sectionId] ?? c.label,
  ),
  AI_BUILD_NOTE: data.AI_BUILD_NOTE,
};

export function buildAdsomniaBundle(_locale: ProposalLocale = "nl"): ProposalBundle {
  return bundle;
}

export function buildAdsomniaBundles(): Record<ProposalLocale, ProposalBundle> {
  return { nl: bundle, en: bundle };
}
