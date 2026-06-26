# Proposals Template

Monorepo for password-protected client proposal decks, split by brand.

## Structure

| Folder | Brand | Style |
|--------|-------|-------|
| [`blablabuild/`](blablabuild/) | blablabuild | Lime `#CEFF00` + blue `#1125FF`, Geist fonts |
| [`alt-f-awesome/`](alt-f-awesome/) | Alt F Awesome | Yellow `#EEFF00` + purple `#8885FF`, PP Gosha Sans + Hybi11 Amigo, sharp corners |

Each folder is a standalone Next.js app. Deploy them as separate Vercel projects.

Client proposals live under `src/lib/proposals/clients/<client-slug>/` inside each app. Register new clients in `clients/index.ts`.

Shared proposal infrastructure (registry, locale, auth, types) lives in [`foundation/src/proposals/`](foundation/src/proposals/) and [`foundation/src/auth/`](foundation/src/auth/). Both apps import via `@foundation/*`.

## Quick start

```bash
cd blablabuild   # or alt-f-awesome
cp .env.example .env.local
npm install
npm run dev
```

Set proposal passwords in `.env.local`:

```env
PROPOSAL_AB_CAPITAL_PASSWORD=your-password
```

## Adding a proposal

**blablabuild / alt-f-awesome:** copy `src/lib/proposals/clients/ab-capital/` (blablabuild) and register in `src/lib/proposals/clients/index.ts`, or run the scaffold script.

## Briefing source

Client briefing notes live in [`briefing.md`](briefing.md) at the repo root.

## Proposal foundation (`foundation/`)

Shared RICE scoring, cost calculation, and proposal builder used by both apps.

| Module | Purpose |
|--------|---------|
| `foundation/src/rice.ts` | RICE formula, impact scale, sorting |
| `foundation/src/cost.ts` | Day-rate estimates, € range formatting, phase/package totals |
| `foundation/src/proposal.ts` | `buildProposalContent()` — workflows → deck data |
| `foundation/src/config.ts` | Rate cards per brand (blablabuild / Alt F Awesome) |
| `foundation/src/proposals/` | Shared locale, registry, types, access URLs, UI defaults |
| `foundation/src/auth/` | Session tokens, passwordless links, credential verification |

### New client proposal

```bash
node foundation/scripts/scaffold-proposal.mjs acme-corp "Acme Corp"
# or for Alt F Awesome brand:
node foundation/scripts/scaffold-proposal.mjs acme-corp "Acme Corp" --brand alt-f-awesome
```

Then edit `workflows.source.ts` (RICE + cost per workflow), `phases.source.ts` (phases & packages), and `index.ts` (debrief + meta).

**Workflow source fields:** `rice` (reach, impact, confidence, effort), `effort` (days + weeks), `cost` (min/max EUR). Phase and package investments are computed automatically from workflow costs.

### Component library

All proposal deck sections live in `blablabuild/src/components/proposal-library/`. Preview them at `/library` (ABCapital sample data).

| Section ID | Component |
|------------|-----------|
| `debrief` | Discovery debrief + impact matrix |
| `understanding` | Challenge, goals, friction |
| `way-of-working` | Delivery principles (blue variant) |
| `approach` | Three-phase roadmap |
| `phase-now` / `phase-next` / `phase-near` | Phase detail slides |
| `workflows` | Filterable workflow table |
| `prioritization` | RICE ranking |
| `investment` | Cost breakdown per phase |
| `next-steps` | Kick-off steps |

New proposals pick sections via `sectionId` in `slideConfigs` — see `ab-capital/data.ts` for the full set.
