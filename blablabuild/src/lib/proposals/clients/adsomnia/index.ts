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
  projects: [
    {
      title: "AI Enablement Workshop",
      description:
        "One day with your team: map AI use cases, define the roadmap, and build the foundation for a human-first way of working with AI.",
      investment: "€4.5K",
    },
    {
      title: "Project & Production Enablement",
      description:
        "Pre-exploration first, then a central project overview, the right toolstack, and the foundation for a PM / PO role.",
      investment: "€3.5K–€6K",
    },
    {
      title: "Always-On Retainer",
      description:
        "A fixed block of hours per week — flexibly deployed across Innovation, Production, and Business. Your safety net and strategic partner.",
      investment: "X hrs/week",
    },
  ],
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
    subtitle: "Three things to align on before we start.",
    steps: [
      {
        n: "01",
        title: "Read the proposal & schedule a call",
        body: "Read through the proposal at your own pace first. Then we'll quickly plan a call to walk through it together and answer any questions.",
      },
      {
        n: "02",
        title: "Schedule the pre-exploration (Project Enablement)",
        body: "A short session to map your team, current workflow, and project landscape. This determines the exact scope, setup, and investment for Project Enablement.",
      },
      {
        n: "03",
        title: "Align on Retainer terms",
        body: "Agree on hours per week, rough focus area split, and start date. Can run from day one alongside the Workshop.",
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
  projects: [
    {
      title: "AI Enablement Workshop",
      description:
        "Één dag met jullie team: AI-use cases in kaart brengen, de roadmap opstellen en het fundament leggen voor een mensgerichte manier van werken met AI.",
      investment: "€4.5K",
    },
    {
      title: "Project & Production Enablement",
      description:
        "Eerst een voorverkenning, daarna centraal projectoverzicht, de juiste toolstack en het fundament voor een PM / PO-rol.",
      investment: "€3.5K–€6K",
    },
    {
      title: "Always-On Retainer",
      description:
        "Een vast aantal uur per week — vrij inzetbaar over Innovatie, Productie en Business. Je vangnet én strategisch partner.",
      investment: "X uur/week",
    },
  ],
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
    subtitle: "Drie dingen om af te stemmen voor we starten.",
    steps: [
      {
        n: "01",
        title: "Voorstel doorlezen & afspreken",
        body: "Lees eerst in alle rust zelf het voorstel door. Daarna plannen we snel wat in om er samen doorheen te gaan en eventuele vragen te beantwoorden.",
      },
      {
        n: "02",
        title: "Voorverkenning inplannen (Project Enablement)",
        body: "Een korte sessie om team, huidige werkwijze en projectlandschap in kaart te brengen. Dit bepaalt de exacte inrichting, aanpak en investering voor Project Enablement.",
      },
      {
        n: "03",
        title: "Retainer-afspraken vastleggen",
        body: "Afstemmen over uren per week, grove verdeling over de drie gebieden en startdatum. Kan direct naast de workshop lopen vanaf dag één.",
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
