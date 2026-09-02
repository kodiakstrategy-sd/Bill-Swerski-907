# BILL SWERSKI 907 — 2026 CAMPAIGN

Build `/season/2026` from `data/draft2026.json`.

Do not redesign the approved homepage, House Commune, navigation, or House pages.

## Required sections
1. Campaign hero using the approved 2026 world art.
2. Order of Battle: draft slots 1–10 with House crest, owner, Current Banner, division, House links.
3. Draft views:
   - BOARD: desktop 10-column snake board.
   - BY ROUND: mobile-friendly round view.
   - BY HOUSE: one House and its 16 picks.
4. House filter using approved crests.
5. Round filter for rounds 1–16.
6. Complete drafted roster for each House.
7. Factual draft facts only.

## Mobile
At ~390px, default to BY ROUND or another readable layout. Do not shrink a desktop 10-column board into unreadable text. Local horizontal scrolling is acceptable only for BOARD.

## Data rules
`data/draft2026.json` is authoritative.
Do not correct player/team strings using outside football knowledge.
Do not duplicate the 160 picks in components.
Validate:
- 160 unique overall picks
- 16 rounds
- 10 picks per round
- 16 picks per House
- correct snake mapping

## No analysis yet
Do not grade drafts, declare winners/losers, project standings, or invent opinions.

## Visual direction
Use the approved physical-art-first system: war table, campaign ledger, House standards, dark stone, iron, aged paper, restrained northern atmosphere. Readability wins over decoration.

Remember: written references to “The Crown” remain. When physically depicted, The Crown is the Bill Swerski 907 championship belt.

## Verification
Test at 390 / 768 / 1440.
Run lint, typecheck, production build.
Work on a feature branch such as `codex/2026-campaign`.
Push a Vercel preview. Do not merge to main automatically.
