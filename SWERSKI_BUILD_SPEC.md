# BILL SWERSKI 907 — VERSION 1 BUILD SPEC

## Repository

`kodiakstrategy-sd/Bill-Swerski-907`

The repository is already connected to a Vercel project.

Build the actual production-ready website in this repository. Do not merely provide instructions. Inspect the repo, implement the application, test it, and commit/push changes if permissions allow.

\---

# 1\. CORE CONCEPT

**BILL SWERSKI 907**  
**THE HOUSES OF THE NORTH**

Tagline:

> \*\*TEN OWNERS. ONE TROPHY. COUNTLESS BAD DECISIONS.\*\*

Bill Swerski 907 is a long-running 10-person fantasy football league based in Juneau, Alaska.

The site treats years of league history, inside jokes, rivalries, commissioners, trades, championships, and bad decisions as though historians were documenting an actual ancient northern civilization.

The presentation should be almost absurdly serious. The humor comes from giving ridiculous fantasy-football events the weight of prestige historical fantasy.

### Visual world

* Southeast Alaska
* Juneau mountains
* Douglas Island
* Gastineau Channel
* dark forests
* snow
* fog
* old banners
* weathered metal
* ancient manuscripts
* heraldry
* distant stadium lights

### Do NOT make this look like

* ESPN
* a fantasy football dashboard
* SaaS
* a Renaissance-fair template
* a goofy parody website
* a generic RPG inventory screen

Do not copy Game of Thrones or other copyrighted fantasy branding. Create an original world.

\---

# 2\. TECHNICAL DIRECTION

Use:

* Next.js App Router
* TypeScript
* Tailwind CSS
* mobile-first responsive design
* local structured data
* reusable components
* minimal dependencies
* Vercel-compatible architecture

## Important architecture rule

Separate **content** from **presentation**.

Suggested data:

* `data/houses.ts`
* `data/champions.ts`
* `data/divisions.ts`
* `data/relics.ts`
* `data/chronicles.ts`
* `data/artifacts.ts`
* `data/seasons.ts`
* `data/league.ts`

House lore and history should not be hard-coded into page components.

Future edits such as “Adam won the 2027 Crown” should normally be data edits, not component rewrites.

\---

# 3\. ROUTES

Create:

* `/` — Homepage / Enter the Realm
* `/houses` — The Ten Houses
* `/houses/\[slug]` — House profile
* `/champions` — Line of Champions
* `/relics` — The Three Great Relics
* `/chronicles` — Historical Chronicles
* `/artifacts` — Historical Evidence / Archive
* `/scroll` — The Great Scroll of Swerski
* `/season/2026` — 2026 Campaign scaffold
* `/about` — Project explanation

\---

# 4\. THE DIVISION OF THE REALM

The divisions are permanent and have never changed.

## JACKIE'S

* Angelo Katasse
* Stephen Ealy
* Daniel Teske
* Naash Richey
* Blake Galvin

## DAISEY'S

* Adam Sycks
* Ryan Fagerstrom
* Justin Sanbei
* Corey Mahar
* CJ Keys

Canonical lore:

> ## THE DIVISION OF THE REALM
>
> In the early years of the Realm, during a legendary gathering in Las Vegas, two exotic maidens—Jackie and Daisey—entered the chronicles of the 907. From that night forward, the Realm was divided beneath their names.
>
> Lords have come and gone. Houses have risen and fallen. The Crown has changed hands.
>
> \*\*Jackie’s and Daisey’s have never changed.\*\*

Present the Houses directory physically beneath these two divisions rather than alphabetically mixing all ten.

\---

# 5\. THE TEN HOUSES

Every House profile should support:

* House name
* owner
* division
* current fantasy team name labeled **CURRENT BANNER**
* subtitle
* seat where established
* title(s)
* motto / proverb
* sigil
* colors
* relic
* lore
* league sayings
* Chronicle references
* championships from the canonical list only
* Easter eggs

## HOUSE GALVIN

Owner: Blake Galvin  
House: **HOUSE GALVIN**  
Subtitle: **House of the Midway North**  
Division: Jackie’s  
Current Banner: **Premature Edraftulati…**

Primary title:

* **The Whisperer of Rules**

Other titles:

* Commissioner of the 907
* Keeper of the Bylaws
* Warden of the Waiver Wire

Motto:

> \*\*CHAOS IS A LADDER.\*\*

### Sigil

A **weathered medieval bear sigil**. It must feel like an ancient northern relic: carved bronze, iron, worn enamel, battle-damaged heraldry.

Do not use a modern sports-logo-looking bear.

Colors:

* deep navy
* burnt orange
* weathered bone

### Relic

**THE SHIFTING RULEBOOK**

Its pages have an uncanny tendency to change as circumstances require.

### Character

Founder and commissioner. Originally from Chicago. Bears fan. Moved to Alaska and founded the league. Frequently modifies league rules. Claims impartiality. The Council remains unconvinced.

### Baron Chin

The Whisperer of Rules has not been quite the same since losing his old co-conspirator:

**BARON CHIN — also of House Galvin**

Baron Chin was Blake’s brother and formerly sat in the league. Long-running Council folklore suggests trades between the brothers occasionally benefited the Commissioner in mysterious ways.

Treat this as exaggerated league mythology, not actual misconduct.

Possible Chronicle:
**THE FALL OF BARON CHIN**

Suggested line:

> The Whisperer of Rules has never been quite the same since Baron Chin departed the Council. Some say he lost a brother. Others say he lost his most reliable trading partner.

\---

## HOUSE SYCKS

Owner: Adam Sycks  
House: **HOUSE SYCKS**  
Subtitle: **House of the Ledger**  
Division: Daisey’s  
Current Banner: **Anchorage Aces**

Primary title:

* **Master of Coin**

Secondary title:

* **Auditor of Everything**

Motto:

> \*\*THE NUMBERS NEVER LIE.\*\*

Unofficial creed:

> \*\*LOVER OF COIN. HATER OF FUN.\*\*

### Sigil — LOCK THIS CONCEPT

Use the original heraldic concept:

* balanced scales
* football ledger
* crossed quills
* ornate abacus
* symmetrical classical heraldry

Do not use Adam’s portrait as the sigil.

Colors:

* forest green
* steel gray
* antique gold

Relic:

* **The Ledger**

Character:
Accountant. Nearly always competitive. Confident. Extremely selective about trades. Almost never accepts a trade unless he believes he clearly wins.

Lore:
**THE LEGEND OF THE LAS VEGAS PURSE RAIDERS**

During a Vegas trip, a group of women stole his wallet. This is remembered as comedy, not danger.

\---

## HOUSE KEYS

Owner: CJ Keys  
House: **HOUSE KEYS**  
Subtitle: **House of the Stag**  
Division: Daisey’s  
Current Banner: **Arby’s, We Have The…**

Primary title:

* **Protector of the Crown**

Secondary:

* The King’s Hand
* Keeper of the Crown

League saying:

> \*\*ALWAYS THE HAND OF THE KING. NEVER THE KING.\*\*

Preferred motto:

> \*\*THE CROWN MUST ENDURE.\*\*

### Sigil — LOCK THIS CONCEPT

Keep the stag.

A noble stag gazes upward toward the Crown. The Crown remains visibly close but always just beyond reach.

Colors:

* forest green
* copper
* weathered bronze

Relic:

* **The Crown**

Character:
Beloved league member. Former athlete. Consistently competitive. Frequently close to championships. Has never won the Crown.

Lore:
**THE CURSE OF THE KING’S HAND**

\---

## HOUSE KATASSE

Owner: Angelo Katasse  
House: **HOUSE KATASSE**  
Subtitle: **House of the Raven**  
Division: Jackie’s  
Current Banner: **Damm Daniels, Back…**

Primary title:

* **LORD OF THE FLEA MARKET DEAL**

Keep this exact. It is one of the core jokes.

Secondary:

* The Raven of Many Deals
* The Unpredictable

Motto:

> \*\*NOTHING IS UNTOUCHABLE.\*\*

### Sigil — KEEP AS IS

* dark raven
* trade scroll
* football
* weathered chains
* black/red/copper heraldry

Do not substantially redesign it.

Character:
The league’s great trader. Always willing to make a blockbuster deal. Final roster rarely resembles drafted roster. Can end a season near either the Crown or the Sausage.

Lore:
**THE TRADE TEMPEST**

Do not make Native heritage the joke.

\---

## HOUSE SANBEI

Owner: Justin Sanbei  
House: **HOUSE SANBEI**  
Subtitle: **HOUSE OF THE MOUNTAIN RUNNERS**  
Division: Daisey’s  
Current Banner: **Duuuuuvaaaaal**

Primary title:

* **The Beast**

Secondary:

* Keeper of the High Pass
* Royal Physician

Motto:

> \*\*JUDGE NOT A MOUNTAIN BY ITS SHADOW.\*\*

### Sigil

A small mountain goat confidently climbing or standing high on an enormous mountain.

The visual joke is scale:
tiny Beast / huge mountain.

Colors:

* granite
* alpine white
* deep evergreen
* restrained crimson

Character:
Dentist. Known as The Beast since high-school football despite being around 100 pounds at the time.

Lore:
**THE NAMING OF THE BEAST**

Disputed lesser title:
**LICKER OF STRIPPERS**

This did not actually happen.

Include:

> ### ON THE DISPUTED TITLE “LICKER OF STRIPPERS”
> No credible evidence exists that Lord Sanbei ever committed the act from which the title derives. This has done nothing to prevent its continued use by the Council.

\---

## HOUSE TESKE

Owner: Daniel Teske  
House: **HOUSE TESKE**  
Subtitle: **House of Douglas**  
Division: Jackie’s  
Current Banner: **Salmon Bellies**

Titles:

* Master of Douglas
* Keeper of the Old Ways
* The Silent Mariner

Motto:

> \*\*THE OLD WAYS ENDURE.\*\*

### Sigil

Weathered fishing boat / northern vessel, Douglas Island, rough water, optional lighthouse.

Colors:

* deep navy
* weathered sea green
* driftwood gray

Relics:

* **The Ancient Draft Magazine**
* **The Flip Phone**

Character:
Oldest member of the league. Historically used a flip phone. Drafts from an outdated fantasy magazine. Rarely appears in group chat. Lives on Douglas Island.

Lore:
**THE BROKEN VOYAGE**

His boat broke down when he was supposed to take the league fishing during a draft trip. The league has never forgotten.

“Fuck Teske” exists as ancient Council folklore but should be a hidden Easter egg rather than his defining identity.

\---

## HOUSE EALY

Owner: Stephen Ealy  
House: **HOUSE EALY**  
Preferred subtitle: **House of Nine Lives**  
Division: Jackie’s  
Current Banner: **Kaaron Rodgers**

Primary title:

* **The Wildcard**

Other titles:

* The Fool King
* Lord of the Last Call

Motto:

> \*\*ANYTHING CAN HAPPEN.\*\*

### Sigil

Cats are the dominant imagery.

Possible concepts:

* crowned cat
* two cats guarding a crooked Crown
* cat with nine-life symbolism
* subtle sausage imagery

The jester motif may remain as a small secondary Easter egg but must not dominate the House.

Character:
Absurd human. Class clown. Always ready to party. Highly unpredictable.

Important:
**2025 LEAGUE CHAMPION**

Also frequently near the Sacred Sausage.

Mythology:
House Ealy somehow possesses nine lives.

Lore:
**THE CROWN \& THE SAUSAGE**

\---

## HOUSE mahaR

Owner: Corey Mahar

Important typographic identity:

> \*\*mahaR\*\*

Lowercase `maha`, uppercase final `R`.

House label:
**HOUSE mahaR**

Subtitle:
**House of the Arcane Banner**

Division: Daisey’s  
Current Banner: **Cook’n the Books**

Primary title:

* **THE ONE WHO IS IN**

Secondary titles:

* **Keeper of the Hard R**
* High Wizard of the Western Tower
* First to Reply

Motto:

> \*\*I’M IN.\*\*

### Sigil

Keep wizard / arcane banner concept.

Possible elements:

* wizard hat
* staff
* scroll
* battle banner
* mystical books

Character:
Lives in Idaho. Whenever almost anything is proposed in the group thread, he is usually first to reply:

> “I’m in.”

Hidden honorary title:
**CorHe/Him**

Lore:
**THE WIZARD’S REPLY**

\---

## HOUSE RICHEY

Owner: Naash Richey  
House: **HOUSE RICHEY**  
Subtitle: **House of Two Banners**  
Division: Jackie’s  
Current Banner: **4 Da(jon) Luv of dag…**

Primary title:

* **Lord of Two Banners**

Motto:

> \*\*WHY CHOOSE A SIDE?\*\*

League saying:

> \*\*LOYAL TO BOTH. TRUSTED BY NEITHER.\*\*

The central joke must be immediately understandable:

He is simultaneously a **Seattle Seahawks fan** and a **San Francisco 49ers fan** even though they are division rivals.

Do not copy official NFL logos, but make the references obvious through original heraldic cues.

### Seattle side

* deep navy
* action green
* storm
* ocean
* Pacific Northwest
* hawk imagery

### San Francisco side

* crimson
* old gold
* western sun
* Golden Gate-inspired towers
* miner / gold-rush motifs

### Sigil

A divided heraldic shield or two-headed hawk representing the rival allegiances.

The two halves should visually look like they barely tolerate sharing the same shield.

Hidden Council commentary:

> \*\*PICK A TEAM.\*\*

Character:
Vocal newer league member. Contrarian. Enjoys stirring debate. Impossible to ignore.

\---

## HOUSE FAGERSTROM

Owner: Ryan Fagerstrom  
House: **HOUSE FAGERSTROM**  
Subtitle: **HOUSE OF THE MISSING**  
Division: Daisey’s  
Current Banner: **black HILL state**

Primary title:

* **THE ABSENT GENERAL**

Secondary titles:

* Veteran of the Field
* Lord of the Empty War Room

League saying:

> \*\*HE APPEARS. HE SPEAKS. HE VANISHES.\*\*

Primary proverb:

> \*\*A GREAT WARRIOR DOES NOT ALWAYS A GREAT GENERAL MAKE.\*\*

### Sigil — LOCK THIS CONCEPT

The House sigil is the old **Black Hills State football helmet** treated like an ancient battle helm / relic.

Do not use complicated play-diagram sigils.
Do not use swords, ghosts, crowns, X-and-O shields, or generic war imagery.

The helmet itself is the House symbol.

If exact trademarked artwork cannot be reproduced, use a weathered fictionalized black-and-gold collegiate battle helmet with `black HILL state` treatment that evokes the old football helmet without copying protected artwork.

### Relic

**THE EMPTY CHAIR**

An empty commander's chair in an otherwise prepared War Room.

### Lore — preserve this tone

> In his youth, Lord Fagerstrom was a formidable warrior of the field. Years spent in battle sharpened his understanding of formations, leverage, deception and the movement of men. Yet when age delivered him to the strange wars of Bill Swerski 907, an unfortunate truth revealed itself: mastery of the battlefield did not necessarily make one a master of fantasy.
>
> Thus arose an old saying in the Realm:
>
> \*\*“A great warrior does not always a great general make.”\*\*
>
> While Keys has lived within arm’s reach of the Crown and Katasse has somehow traded his way into glory, House Fagerstrom has remained remarkably committed to the middle.
>
> Some years he drafts.  
> Some years the machine drafts.  
> Once, the other Lords simply assembled his army for him.
>
> Most weeks the War Room stands empty.
>
> Then, without warning, the Absent General returns, delivers some observation or completely unnecessary joke to the Council…and disappears again.

Important:
This House must remain self-deprecating. Ryan is not the heroic protagonist. The football background is the setup. Mediocre fantasy management and frequent absence are the punchline.

\---

# 6\. THE THREE GREAT RELICS

Build a major section/page around:

## THE CROWN

Victory.

## THE SACRED SAUSAGE

Last place.

Canonical line:

> The Sacred Sausage passes each year to the least fortunate House. No Lord seeks it. All Lords eventually fear it.

## THE GREAT SCROLL OF SWERSKI

League law.

Canonical:

> \*\*THE GREAT SCROLL OF SWERSKI\*\*  
> \*The Laws and Customs of the 907\*
>
> When disputes arise, the Lords demand the Scroll. Its authority is absolute. Its location is unknown.

### Scroll page

Create placeholder Articles but do not invent real league rules:

* ARTICLE I — THE DRAFT
* ARTICLE II — ROSTERS
* ARTICLE III — WAIVERS
* ARTICLE IV — TRADES
* ARTICLE V — SCORING
* ARTICLE VI — THE SACRED SAUSAGE
* ARTICLE VII — COMMISSIONER AUTHORITY
* ARTICLE VIII — AMENDMENTS

Mark unfinished rules as **Awaiting Inscription** or equivalent.

Support future amendment records with:

* date
* article
* amendment
* ruling
* commissioner note

\---

# 7\. LINE OF CHAMPIONS — ABSOLUTE CANON

This year-by-year list is authoritative. Do not infer owner championships from franchise stats.

* 2025 — Stephen Ealy
* 2024 — Angelo Katasse
* 2023 — Adam Sycks
* 2022 — Blake Galvin
* 2021 — Corey Mahar
* 2020 — Daniel Teske
* 2019 — Adam Sycks
* 2018 — Blake Galvin
* 2017 — Kevin Sellers
* 2016 — Daniel Teske
* 2015 — TJ
* 2014 — Angelo Katasse

Current two-time champions:

* Angelo Katasse
* Adam Sycks
* Blake Galvin
* Daniel Teske

Current one-time champions:

* Corey Mahar
* Stephen Ealy

Current Houses without Crown:

* CJ Keys
* Ryan Fagerstrom
* Justin Sanbei
* Naash Richey

Build `/champions` as a dramatic chronological lineage.

\---

# 8\. BANNERS OF THE OLD REALM

Intro:

> \*\*Not every House that shaped the Realm still holds a seat upon its Council.\*\*

## KEVIN SELLERS

Champion — 2017

Title:
**The Jester of the Old Realm**

Character:
Absolute wildcard. Spoke in an often indecipherable style referred to as **Kevinese**.

Legend:
His son, known as **THE ORACLE**, would sometimes draft for him.

Historical note:
Scholars remain divided over who truly commanded House Sellers during the championship campaign.

## TJ

Champion — 2015

Title:
**The Prophet of Treadwell**

Historical event:
**THE PROPHECY OF TREADWELL**

Ancient draft-scroll gag:

> \*\*I — LAQUON TREADWELL\*\*

Canonical line:

> He did not suggest it. He did not speculate. He knew. The years that followed were less certain.

\---

# 9\. CHRONICLES

Build an editorial historical archive, not a generic blog.

Initial Chronicle titles:

* THE FOUNDING OF THE REALM
* THE DIVISION OF THE REALM
* THE BROTHER TRADE CONSPIRACY
* THE FALL OF BARON CHIN
* THE LAS VEGAS PURSE RAIDERS
* THE CURSE OF THE KING’S HAND
* THE TRADE TEMPEST
* THE NAMING OF THE BEAST
* THE BROKEN VOYAGE
* THE CROWN \& THE SAUSAGE
* THE WIZARD’S REPLY
* THE TWO BANNERS
* THE DRAFT WITHOUT A LORD
* THE PROPHECY OF TREADWELL
* THE ORACLE

\---

# 10\. ARTIFACT ARCHIVE

Create architecture for historical evidence. Do not invent fake photos.

Artifact categories:

* League Relics
* Ancient Images
* Council Propaganda
* Draft Evidence
* Vegas Chronicles
* Championship Evidence
* Forbidden Documents

Known artifact concepts:

* Swerski 907 championship belt
* Sacred Sausage / giant hot dog imagery
* old group photographs
* “Fuck Teske” commissioner meme
* reaction memes
* hockey/team photograph
* Vegas photographs
* league dinner/group photographs

Artifact records should support:

* title
* year/date
* caption
* category
* image path
* associated House
* historical note

Use elegant placeholders until actual images are added under `/public/artifacts`.

\---

# 11\. 2026 CAMPAIGN — SCAFFOLD ONLY FOR V1

Create `/season/2026` with the structure ready for:

* current banners
* standings
* draft order
* 160-pick draft board
* season chronicles
* champion
* Sacred Sausage holder

Do not spend significant time entering all 160 draft picks in Version 1. That will be supplied in a later update.

Current draft/team order for reference:

1. Blake Galvin — Premature Edraftulati…
2. Stephen Ealy — Kaaron Rodgers
3. Justin Sanbei — Duuuuuvaaaaal
4. Adam Sycks — Anchorage Aces
5. CJ Keys — Arby’s, We Have The…
6. Corey Mahar — Cook’n the Books
7. Naash Richey — 4 Da(jon) Luv of dag…
8. Daniel Teske — Salmon Bellies
9. Angelo Katasse — Damm Daniels, Back…
10. Ryan Fagerstrom — black HILL state

\---

# 12\. VISUAL SYSTEM

Overall palette:

* near-black
* charcoal
* iron gray
* bone / parchment
* weathered silver
* muted bronze
* restrained warm gold

Each House may introduce its own accent palette.

Typography:

* elegant cinematic serif for major titles
* highly readable serif/sans for body
* small tracked uppercase labels
* do not imitate Game of Thrones typography

Textures:

* stone
* aged parchment
* fog
* snow
* weathered metal
* subtle topographic lines
* subtle grain

Motion:
Use sparingly.

Good:

* slow fog
* subtle light movement
* banner movement
* small parallax
* hover reveals
* gentle fade/scroll effects

Bad:

* excessive particle effects
* flashy transitions
* gimmicky animation
* anything that hurts phone performance

House pages should feel like interactive heraldic dossiers / historical codex entries, but remain highly readable.

Do not cram long prose into tiny faux-parchment boxes.

### House sigils

Version 1 may use refined SVG/CSS/illustrative placeholders that can later be replaced with final artwork without restructuring the site.

\---

# 13\. HOMEPAGE

Hero:

**BILL SWERSKI 907**

**THE HOUSES OF THE NORTH**

**TEN OWNERS. ONE TROPHY. COUNTLESS BAD DECISIONS.**

Use a cinematic Juneau-inspired northern atmosphere.

Suggested primary homepage sections:

* Enter the Realm
* The Division of the Realm
* The Ten Houses
* The Three Great Relics
* Line of Champions
* Chronicles
* The 2026 Campaign

Canonical intro:

> For more than a decade, ten Houses have gathered in the North to compete for the Crown. Alliances have formed. Trades have collapsed. Rules have mysteriously changed. And every Lord knows that failure carries a price.

The homepage should feel editorial and cinematic, not like a giant grid of cards.

\---

# 14\. MOBILE EXPERIENCE

Mobile is a primary requirement. This website will often be opened from a fantasy-football group chat.

Test around:

* 390px
* 768px
* 1440px

Requirements:

* no accidental horizontal overflow
* intuitive one-handed navigation
* large readable titles
* usable tap targets
* cinematic House pages that do not feel cramped
* fast load time
* responsive image treatment
* draft-board architecture ready for intentional horizontal interaction later

\---

# 15\. ABOUT PAGE

Use:

> I gave years of Bill Swerski 907 league history, group-chat lore, running jokes, rivalries and whatever evidence could be recovered to AI and asked it to analyze the league as if it were an actual civilization.
>
> \*\*It got a little out of hand.\*\*

Keep the page short.

\---

# 16\. VERSION 1 SCOPE

## Fully build

* homepage
* navigation
* Houses directory
* all ten House profile pages
* division presentation
* Champions
* Relics
* Scroll structure
* Chronicles index
* About page

## Scaffold

* Artifacts archive
* 2026 season page
* full draft board

The first deployment is primarily to establish the world, visual system, navigation, and House presentation.

\---

# 17\. DATA INTEGRITY RULES

1. The championship list in this document is authoritative.
2. Do not invent league rules.
3. Do not invent championship results.
4. Do not invent factual personal details.
5. Do not “correct” funny current team names.
6. Native heritage is never the joke.
7. Do not falsely state that Sanbei actually committed the act behind his disputed title.
8. Keep House Fagerstrom self-deprecating.
9. Keep House Galvin scheming but humorous rather than genuinely malicious.
10. Do not portray real people as copyrighted fantasy characters.
11. Use original House artwork/archetypes.
12. Treat Baron Chin trade lore as exaggerated league mythology, not a factual allegation.

\---

# 18\. README

Expand the repository README with:

* what the project is
* tech stack
* local development
* content architecture
* where House data lives
* where champion history lives
* how to add an artifact
* how to add a Chronicle
* how to add a new season
* Vercel deployment notes

Include a section:

## UPDATING THE REALM WITH AI

Explain that future maintainers can ask an AI coding agent to edit structured league data.

Example:

> Adam Sycks won the 2027 Crown. Stephen Ealy received the Sacred Sausage. Add the 2027 season and update their House records.

\---

# 19\. QUALITY CHECK

Before completion:

* install dependencies
* run lint
* run TypeScript checks
* run production build
* fix errors
* verify all routes
* verify mobile layouts
* ensure content is data-driven
* ensure Vercel compatibility
* avoid hydration issues
* avoid obvious console errors

Do not stop for minor visual questions. Make strong design decisions based on this specification.

\---

# 20\. DELIVERY

When finished:

1. Explain what was built.
2. Report build/test results.
3. Report branch and commit.
4. Push changes if permissions allow.
5. State whether Vercel should automatically deploy.
6. If direct push is not available, give the exact next action required.

Start by inspecting the repository and then build Version 1.

