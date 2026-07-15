import type { ProposalLocale } from "@/lib/proposals/locale";
import type { ProposalBundle } from "@/lib/proposals/types";
import {
  buildAdsomniaData,
  slideConfigs,
  wayOfWorkingEn,
  wayOfWorkingNl,
} from "./data";

export const meta = {
  slug: "adsomnia",
  clientName: "Adsomnia",
  clientLogo: "/adsomnia-logo.png",
  defaultLocale: "en",
} as const;

// ─── English ─────────────────────────────────────────────────────────────────

const metaEn = {
  ...meta,
  title: "Building **Adsomnia** together",
  subtitle: "Workshop · Enablement · Always-On Retainer · July 2026",
} as const;

const debriefEn = {
  quote:
    "Human-First, AI-Empowered: Shifting from Grunt Work to Strategic Impact. AI is not here to lead — it is here to empower. The human remains in the driver's seat.",
  quoteSource: "Adsomnia AI vision",
  focusAreas:
    "2 projects + ongoing partnership: AI Enablement Workshop · Project Enablement · Always-On Retainer",
  date: "July 2026",
} as const;

const accessEn = {
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

const slideCopyEn = {
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
    subtitle: "Two fixed projects and an ongoing partnership based on availability.",
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

const slideLabelsEn: Record<string, string> = {
  debrief: "Intro",
  "phase-now": "AI Workshop",
  "phase-next": "Project Enablement",
  "phase-near": "Always-On Retainer",
  investment: "Investment",
  "next-steps": "Next steps",
};

// ─── Dutch ───────────────────────────────────────────────────────────────────

const metaNl = {
  ...meta,
  title: "Samen bouwen aan **Adsomnia**",
  subtitle: "Workshop · Enablement · Always-On Retainer · juli 2026",
} as const;

const debriefNl = {
  quote:
    "Human-First, AI-Empowered: Shifting from Grunt Work to Strategic Impact. AI is not here to lead — it is here to empower. The human remains in the driver's seat.",
  quoteSource: "Adsomnia AI-visie",
  focusAreas:
    "2 projecten + doorlopende samenwerking: AI Enablement Workshop · Project Enablement · Always-On Retainer",
  date: "juli 2026",
} as const;

const accessNl = {
  landing: {
    kicker: "Voorstel voor",
    greetingTemplate: "Hoi {name},",
    clientLabel: "Klant",
    passwordLabel: "Wachtwoord",
    passwordHint: "Gebruik het wachtwoord uit je uitnodiging.",
    submit: "Open voorstel",
    submitting: "Controleren…",
    opening: "Voorstel openen…",
    sessionExpired: "Je sessie is verlopen. Log opnieuw in.",
    invalidAccessLink:
      "Deze link is ongeldig of verlopen. Vul het wachtwoord uit je uitnodiging in.",
    accessDenied: "Onjuiste klant of wachtwoord",
    genericError: "Er ging iets mis. Probeer het opnieuw.",
    confidentialNote: "Vertrouwelijk, opgesteld door blablabuild",
  },
} as const;

const slideCopyNl = {
  debriefKicker: "Intake samengevat",
  wayOfWorking: {
    kicker: "Werkwijze",
    title: "**Activeren**, niet alleen inspireren.",
    subtitle:
      "Vier principes die bepalen hoe we met Adsomnia werken. Geen standaard bureautraject.",
    aiTitle: "Wekelijkse afstemming",
    aiBody:
      "Elk project heeft een vast ritme: voortgang, open punten en wat er deze sprint wordt opgeleverd. Geen verrassingen.",
    controlTitle: "Jullie houden de regie",
    controlBody:
      "Scope per project leggen we vast vóór we starten. Jullie bepalen de volgorde en het tempo van de drie projecten.",
  },
  investment: {
    kicker: "Investering",
    title: "Investering **per project**",
    subtitle:
      "Twee vaste projecten en een doorlopende samenwerking op basis van beschikbaarheid.",
  },
  nextSteps: {
    kicker: "Volgende stappen",
    title: "Klaar wanneer **jullie** willen",
    subtitle: "Van voorstel naar uitvoering in vier stappen.",
    steps: [
      {
        n: "01",
        title: "Voorstel doorlezen",
        body: "Doorloop de drie projecten, aanpak en investering in je eigen tempo. Noteer vragen en wat je anders wil.",
      },
      {
        n: "02",
        title: "Bespreken",
        body: "Korte sessie om samen door het voorstel te lopen. Open vragen, scope aanpassen en bepalen welke projecten wanneer starten.",
      },
      {
        n: "03",
        title: "Scope per project vastleggen",
        body: "Per project sluiten we de scope: wat leveren we op, wanneer, wie is waarvoor verantwoordelijk.",
      },
      {
        n: "04",
        title: "Kickoff plannen",
        body: "Milestone #1 van de workshop staat al op 29 juli. Contract ondertekenen en starten.",
      },
    ],
  },
} as const;

const slideLabelNl: Record<string, string> = {
  debrief: "Intro",
  "phase-now": "AI Workshop",
  "phase-next": "Project Enablement",
  "phase-near": "Always-On Retainer",
  investment: "Investering",
  "next-steps": "Volgende stappen",
};

// ─── Bundle factory ───────────────────────────────────────────────────────────

function buildBundle(locale: ProposalLocale): ProposalBundle {
  const isNl = locale === "nl";
  const data = buildAdsomniaData(locale);
  const labels = isNl ? slideLabelNl : slideLabelsEn;

  return {
    meta: isNl ? metaNl : metaEn,
    access: isNl ? accessNl : accessEn,
    debrief: isNl ? debriefNl : debriefEn,
    slideCopy: isNl ? slideCopyNl : slideCopyEn,
    workflows: data.workflows,
    riceSorted: data.riceSorted,
    phases: data.phases,
    packages: data.packages,
    wayOfWorking: isNl ? wayOfWorkingNl : wayOfWorkingEn,
    slideConfigs: slideConfigs.map((c) => ({
      ...c,
      label: labels[c.sectionId] ?? c.label,
    })),
    slideLabels: slideConfigs.map((c) => labels[c.sectionId] ?? c.label),
    AI_BUILD_NOTE: data.AI_BUILD_NOTE,
  };
}

export function buildAdsomniaBundle(locale: ProposalLocale = "en"): ProposalBundle {
  return buildBundle(locale);
}

export function buildAdsomniaBundles(): Record<ProposalLocale, ProposalBundle> {
  return {
    en: buildBundle("en"),
    nl: buildBundle("nl"),
  };
}
