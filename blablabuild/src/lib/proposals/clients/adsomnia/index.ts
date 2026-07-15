import type { ProposalLocale } from "@/lib/proposals/locale";
import type { ProposalBundle } from "@/lib/proposals/types";
import * as data from "./data";

export const meta = {
  slug: "adsomnia",
  clientName: "Adsomnia",
  clientLogo: "/adsomnia-logo.png",
  title: "Samen bouwen aan **Adsomnia**",
  subtitle: "Workshop · Enablement · Samenwerking · juli 2026",
} as const;

export const debrief = {
  quote:
    "Human-First, AI-Empowered: Shifting from Grunt Work to Strategic Impact. AI is not here to lead — it is here to empower. The human remains in the driver's seat.",
  quoteSource: "Adsomnia AI-visie",
  focusAreas: "2 projecten + doorlopende samenwerking: AI Enablement Workshop · Project Enablement · Retainer",
  date: "juli 2026",
} as const;

export const access = {
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

export const slideCopy = {
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

const slideLabels: Record<string, string> = {
  debrief: "Intro",
  "way-of-working": "Werkwijze",
  "phase-now": "AI Workshop",
  "phase-next": "Project Enablement",
  "phase-near": "Samenwerking",
  investment: "Investering",
  "next-steps": "Volgende stappen",
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
