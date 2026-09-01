# BILL SWERSKI 907 — APPROVED VISUAL ASSET SPEC

## Purpose

This file defines the approved visual identity for the Bill Swerski 907 website and the exact original art assets the site should be designed around.

This is not permission to rewrite the league canon. The website already has the correct data architecture and routes. The goal is to replace the generic AI-generated visual language with bespoke, physical, house-specific artwork.

The site should feel like a prestige-fantasy historical archive from an ancient northern civilization rooted specifically in Juneau, Alaska.

The design principle is:

> **PHYSICAL, NOT DIGITAL.**

The user should feel like they are looking at banners, shields, battle-worn helmets, carved inscriptions, relics, old photographs, rulebooks, trophies, maps, and historical records — not cards, icons, generic UI components, or a luxury editorial template.

---

# 1. ASSET SYSTEM TO BUILD AROUND

For each of the ten active Houses, the final site should support three primary original assets:

1. **Primary Crest / Sigil**
   - transparent PNG or WebP
   - portrait-ish shield/crest composition
   - used in the Houses directory, navigation details, and House page identity
   - should feel like an actual heraldic object, not a line icon

2. **Vertical House Banner**
   - tall composition, ideally around 4:5 or 3:4
   - house colors, crest, weathered cloth, subtle secondary symbols
   - used in Jackie’s/Daisey’s great-hall presentation and responsive House sections

3. **House Hero / Profile Artwork**
   - wide 16:9 or 3:2 composition
   - cinematic environment representing the House’s lore
   - may include a character silhouette/portrait if original art is supplied later
   - must leave safe negative space for HTML text overlays
   - should not bake long text into the artwork

Recommended asset folders:

```text
/public/world/
/public/houses/galvin/
/public/houses/sycks/
/public/houses/keys/
/public/houses/katasse/
/public/houses/sanbei/
/public/houses/teske/
/public/houses/ealy/
/public/houses/mahar/
/public/houses/richey/
/public/houses/fagerstrom/
/public/relics/
/public/artifacts/
```

Recommended file naming:

```text
crest.webp
banner.webp
hero.webp
```

The website components should expect those paths and gracefully fall back to the current temporary SVG treatment when an asset has not yet been supplied.

Do not use Lucide-style icons as primary House identity once original assets exist.

---

# 2. GLOBAL WORLD ART

Before polishing every interior page, the site should support the following original world assets.

## WORLD-01 — ENTER THE NORTH

File:
`/public/world/enter-the-north.webp`

Aspect:
16:9 / wide desktop hero with mobile crop support.

Scene:
Juneau, Alaska transformed into the capital of the Bill Swerski realm.

Must visually evoke:
- steep Juneau mountains
- Gastineau Channel
- Douglas Island across the water
- dark Southeast Alaska evergreen forest
- cold mist and low cloud
- scattered harbor lights
- very distant football-stadium lighting
- snow/frost on the highest ridges
- dark blue-black twilight

It should feel naturalistic and cinematic rather than geometric or vector-like.

Do not place the title into the artwork. The HTML should render:

BILL SWERSKI 907  
THE HOUSES OF THE NORTH  
TEN OWNERS. ONE TROPHY. COUNTLESS BAD DECISIONS.

Leave usable negative space for that title.

## WORLD-02 — THE GREAT HALL

File:
`/public/world/great-hall.webp`

Scene:
A northern stone hall whose two wings belong permanently to Jackie’s and Daisey’s.

Must support ten hanging House banners — five per side.

The environment should feel:
- cold stone
- dark timber
- iron brackets
- aged banners
- mountain/harbor light entering through openings or narrow windows
- slight fog/cold air
- not a medieval throne-room cliché

The two divisions should feel ancient, permanent, and roughly equal in importance.

## WORLD-03 — SUCCESSION WALL

File:
`/public/world/succession-wall.webp`

Scene:
A carved stone / bronze historical record where champions can be displayed using live HTML.

No names baked into the image.

Provide plaque/inscription architecture with room for a chronological lineage.

## WORLD-04 — 2026 CAMPAIGN

File:
`/public/world/campaign-2026.webp`

Scene:
A dark northern war-room / mountain overlook / gathering of ten distant banners before a new campaign.

Should feel anticipatory rather than violent.

No player names or draft picks inside image.

---

# 3. THE THREE GREAT RELICS

The relics must be original physical-object art. They should all receive the same absurd ceremonial seriousness.

## RELIC-01 — THE CROWN

File:
`/public/relics/crown.webp`

A weathered championship Crown displayed as a legendary northern relic.

Suggested treatment:
- dark carved stone pedestal
- aged gold/bronze
- light wear from many campaigns
- restrained warm directional light
- cold northern darkness surrounding it

No fantasy jewel overload.

## RELIC-02 — THE SACRED SAUSAGE

File:
`/public/relics/sacred-sausage.webp`

A ridiculous last-place sausage trophy treated with EXACTLY the same reverence as the Crown.

This contrast is essential.

Suggested treatment:
- ceremonial pedestal
- dark stone and iron
- spotlight / warm directional light
- possibly an ornate holder, case, or ridiculous pseudo-reliquary

It must remain obviously a sausage.

Do not turn it into a monster or abstract symbol.

Canonical feeling:

> No Lord seeks it. All Lords eventually fear it.

## RELIC-03 — THE GREAT SCROLL / SHIFTING RULEBOOK

File:
`/public/relics/great-scroll.webp`

A chained, ancient rulebook / scroll whose law is supposedly absolute and whose actual location is uncertain.

Physical cues:
- leather
- brass corners
- wax seals
- marginal amendments
- loose inserts
- subtly mismatched pages
- one or two suspiciously fresh edits

The image should visually connect the Great Scroll to House Galvin’s Shifting Rulebook without making them literally the same object if the UI distinguishes them.

---

# 4. HOUSE GALVIN — LOCKED DIRECTION

Owner:
Blake Galvin

House:
**HOUSE GALVIN**

Subtitle:
**House of the Midway North**

Division:
Jackie’s

Current Banner:
**Premature Edraftulati…**

Primary title:
**The Whisperer of Rules**

Other titles:
- Commissioner of the 907
- Keeper of the Bylaws
- Warden of the Waiver Wire

Motto:
**CHAOS IS A LADDER.**

Relic:
**THE SHIFTING RULEBOOK**

Lore:
Founder and commissioner. Chicago native and Bears fan who moved to Alaska and founded the league. Frequently changes rules. Claims impartiality. The Council remains unconvinced.

Important additional lore:
The Whisperer of Rules has not been quite the same since the loss of his old co-conspirator:

**BARON CHIN — also of House Galvin**

Baron Chin was Blake’s brother and formerly sat in the league. League mythology remembers the pair as suspiciously effective trading partners.

This is exaggerated league folklore, not a factual allegation.

Suggested line:

> The Whisperer of Rules has never been quite the same since Baron Chin departed the Council. Some say he lost a brother. Others say he lost his most reliable trading partner.

Possible Chronicle:
**THE FALL OF BARON CHIN**

### GALVIN CREST — LOCKED

The primary sigil is an **ancient bear**.

Do NOT use:
- a modern mascot
- a clean sports logo
- a coach portrait as the primary crest

Desired appearance:
- front-facing or three-quarter northern bear
- carved bronze / blackened iron / worn enamel
- deep navy and burnt orange accents
- battle-worn edges
- subtle football/playbook marks may appear as tiny secondary details
- absolutely no official Chicago Bears logo

It should look like a centuries-old House relic that happens to carry Midway colors.

### GALVIN BANNER

Deep navy, burnt orange, weathered bone.

Primary bear crest centered.

Secondary motifs can include:
- rolled amendment
- raven carrying a trade notice
- wax seal
- tiny open rulebook
- a barely visible paired mark representing the absent Baron Chin

Do not make it comedic at first glance.

### GALVIN HERO

Scene:
The Commissioner’s Keep.

Show:
- northern stone chamber
- shifting rulebook on a table
- fresh amendment ink
- stacked trade scrolls
- empty second chair / missing counterpart implying Baron Chin
- ravens/messages
- navy/orange banner light
- Juneau cold visible beyond chamber

The joke should emerge from details, not from cartoon expression.

---

# 5. HOUSE SYCKS — LOCKED DIRECTION

Owner:
Adam Sycks

House:
**HOUSE SYCKS**

Subtitle:
**House of the Ledger**

Division:
Daisey’s

Current Banner:
**Anchorage Aces**

Primary title:
**Master of Coin**

Secondary title:
**Auditor of Everything**

Motto:
**THE NUMBERS NEVER LIE.**

Unofficial creed:
**LOVER OF COIN. HATER OF FUN.**

Relic:
**The Ledger**

Lore:
Accountant. Nearly always competitive. Confident. Extremely selective about trades. Rarely accepts a trade unless he believes he clearly wins.

Chronicle:
**THE LEGEND OF THE LAS VEGAS PURSE RAIDERS**

During a Vegas trip, a group of women stole his wallet. The memory is comic, not dangerous.

### SYCKS CREST — LOCKED ORIGINAL CONCEPT

Use:
- balanced scales
- football ledger
- crossed quills
- ornate abacus
- highly symmetrical classical heraldry

Do not use:
- Adam’s portrait
- a large letter S as the main visual
- generic coins alone

Colors:
- forest green
- steel gray
- antique gold

The sigil should communicate precision, accounting, and judgment before it communicates wealth.

### SYCKS BANNER

Forest green cloth with aged gold and steel detail.

Scales and ledger dominate.

Small hidden detail:
a chained or absent wallet.

### SYCKS HERO

The Counting Hall.

Physical environment:
- stone counting chamber
- ledger open
- trade offers stacked and stamped DECLINED
- scales perfectly balanced
- abacus
- locked coin chest
- one conspicuously missing wallet hook or purse

Tone:
controlled, expensive, meticulous, humorless in the funniest possible way.

---

# 6. HOUSE KEYS — LOCKED DIRECTION

Owner:
CJ Keys

House:
**HOUSE KEYS**

Subtitle:
**House of the Stag**

Division:
Daisey’s

Current Banner:
**Arby’s, We Have The…**

Primary title:
**Protector of the Crown**

Secondary:
- The King’s Hand
- Keeper of the Crown

League saying:
**ALWAYS THE HAND OF THE KING. NEVER THE KING.**

Motto:
**THE CROWN MUST ENDURE.**

Relic:
**The Crown**

Lore:
Beloved league member. Former athlete. Frequently in the hunt. Multiple championship appearances. Never won the Crown.

Chronicle:
**THE CURSE OF THE KING’S HAND**

### KEYS CREST — LOCKED

A noble stag gazing upward toward the Crown.

The Crown must be:
- close
- clearly visible
- always just beyond reach

Do not put the Crown on the stag.

Colors:
- forest green
- copper
- weathered bronze

This sigil should feel noble, restrained, and a little tragic.

### KEYS BANNER

Dark forest green.

Stag and unreachable Crown.

Subtle lower border motif may show repeated near-misses / empty championship space, but keep it elegant.

### KEYS HERO

A great hall or forested northern keep.

CJ’s House should visually place the Crown near him without ever allowing him to possess it.

Possible staging:
- Crown on pedestal
- stag banner behind
- empty throne/chair not used
- House figure or silhouette within arm’s reach
- fingertips / antlers visually aligned close to the Crown

The humor is proximity.

---

# 7. HOUSE KATASSE — LOCKED DIRECTION

Owner:
Angelo Katasse

House:
**HOUSE KATASSE**

Subtitle:
**House of the Raven**

Division:
Jackie’s

Current Banner:
**Damm Daniels, Back…**

Primary title:
**LORD OF THE FLEA MARKET DEAL**

Secondary:
- The Raven of Many Deals
- The Unpredictable

Motto:
**NOTHING IS UNTOUCHABLE.**

Lore:
The league’s great trader. Always willing to make a blockbuster deal. Final roster rarely resembles drafted roster. Can end a season near either the Crown or the Sausage.

Chronicle:
**THE TRADE TEMPEST**

Native heritage is not the joke.

### KATASSE CREST — LOCKED / KEEP EXISTING CONCEPT

Use:
- dark raven
- trade scroll
- football
- weathered chains
- black / deep red / copper heraldry

This concept was approved. Do not replace it with a different bird or generic trade imagery.

### KATASSE BANNER

Black and deep red cloth with copper.

Raven holding or standing on a trade scroll.

Small pieces of rival House colors may be stitched into border like acquired banners.

### KATASSE HERO

Raven’s Bluff / market of deals.

Physical scene:
- ravens arriving with trade offers
- satchel or table overflowing with scrolls
- names crossed out and replaced
- chain links opened
- hints of many House colors from exchanged warriors
- Crown visible in one direction
- Sacred Sausage hinted in another

The whole House should feel constantly in motion without looking chaotic in a cheesy way.

---

# 8. HOUSE SANBEI — LOCKED DIRECTION

Owner:
Justin Sanbei

House:
**HOUSE SANBEI**

Subtitle:
**HOUSE OF THE MOUNTAIN RUNNERS**

Division:
Daisey’s

Current Banner:
**Duuuuuvaaaaal**

Primary title:
**The Beast**

Secondary:
- Keeper of the High Pass
- Royal Physician

Motto:
**JUDGE NOT A MOUNTAIN BY ITS SHADOW.**

Lore:
Dentist. Nicknamed The Beast since high-school football despite being around 100 pounds at the time.

Chronicle:
**THE NAMING OF THE BEAST**

Disputed lesser title:
**LICKER OF STRIPPERS**

This did not happen.

Required clarification:

> No credible evidence exists that Lord Sanbei ever committed the act from which the title derives. This has done nothing to prevent its continued use by the Council.

### SANBEI CREST — LOCKED

A **small mountain goat** confidently climbing or standing high on an **enormous mountain**.

The scale joke is the entire point:
tiny Beast / huge mountain.

Colors:
- granite gray
- alpine white
- deep evergreen
- restrained crimson

Do not make the goat monstrous.

### SANBEI BANNER

Mountain-runner aesthetic.

Goat, towering mountain, high-pass path.

Subtle physician/dentist element may appear only as a tiny secondary detail.

### SANBEI HERO

High alpine pass above the northern realm.

Possible Easter eggs:
- absurdly oversized ceremonial warhammer leaning nearby
- physician’s satchel
- old “100 lbs.” inscription carved into stone
- small runner moving up a huge slope

Tone:
heroic scale with a deliberately tiny protagonist.

---

# 9. HOUSE TESKE — LOCKED DIRECTION

Owner:
Daniel Teske

House:
**HOUSE TESKE**

Subtitle:
**House of Douglas**

Division:
Jackie’s

Current Banner:
**Salmon Bellies**

Titles:
- Master of Douglas
- Keeper of the Old Ways
- The Silent Mariner

Motto:
**THE OLD WAYS ENDURE.**

Relics:
- **The Ancient Draft Magazine**
- **The Flip Phone**

Lore:
Oldest member of the league. Historically used a flip phone. Drafts from an outdated fantasy magazine. Rarely appears in group chat. Lives on Douglas Island.

Chronicle:
**THE BROKEN VOYAGE**

His boat broke down when he was supposed to take the league fishing during a draft trip. The league has never forgotten.

“Fuck Teske” is hidden archival folklore, not his defining identity.

### TESKE CREST — LOCKED

A weathered northern fishing vessel / longship-like work boat in rough water.

Douglas Island atmosphere.

Optional:
- distant lighthouse
- fish/salmon secondary motif

Colors:
- deep navy
- weathered sea green
- driftwood gray

Do not make the ship grand or royal. It should feel old, useful, stubborn, and seaworthy-ish.

### TESKE BANNER

Sea-worn cloth.

Boat crest with rope / net / Douglas coastline.

Small hidden `FT` can be scratched into a dock-like border detail.

### TESKE HERO

Douglas waterfront in bad weather.

Include:
- broken or disabled boat at dock
- old draft magazine
- flip phone
- raven/message waiting unanswered
- weathered dock sign suggesting the draft fishing excursion is delayed

No cartoon comedy. The objects themselves tell the joke.

---

# 10. HOUSE EALY — APPROVED DIRECTION, CREST STILL FLEXIBLE WITHIN THIS SYSTEM

Owner:
Stephen Ealy

House:
**HOUSE EALY**

Subtitle:
**House of Nine Lives**

Division:
Jackie’s

Current Banner:
**Kaaron Rodgers**

Primary title:
**The Wildcard**

Secondary:
- The Fool King
- Lord of the Last Call

Motto:
**ANYTHING CAN HAPPEN.**

Important:
**2025 LEAGUE CHAMPION**

Lore:
Class clown. Absurd human. Always ready to party. Frequently somehow near both championship glory and Sacred Sausage danger.

Chronicle:
**THE CROWN & THE SAUSAGE**

### EALY CREST — APPROVED DIRECTION

Cats are dominant.

Jester imagery must be secondary.

Preferred visual language:
- one crowned cat OR two cats guarding a crooked Crown
- nine-lives symbolism
- subtle sausage reference
- tiny jester bell/cap element may appear only as a secondary Easter egg

Do not make “jester” the central House identity.

Colors:
- deep green or midnight tone
- championship gold
- restrained purple/crimson accents

The crest should feel mischievous but still prestigious.

### EALY BANNER

Cat imagery first.

Possible motifs:
- nine small marks/stars/paw emblems
- crooked Crown
- tiny sausage/jester secondary detail

### EALY HERO

The Laughing Keep / House of Nine Lives.

Tone:
the one House allowed to look slightly more alive and celebratory.

Possible visual details:
- cats occupying ceremonial furniture they should not be on
- crooked championship Crown
- overflowing ale
- Sacred Sausage somewhere nearby
- subtle cards/fireworks
- one small jester relic tucked away rather than center stage

Do not turn it into a cartoon cat page.

---

# 11. HOUSE mahaR — LOCKED DIRECTION

Owner:
Corey Mahar

Display name:
**mahaR**

Exact casing:
lowercase `maha`, uppercase final `R`.

House label:
**HOUSE mahaR**

Subtitle:
**House of the Arcane Banner**

Division:
Daisey’s

Current Banner:
**Cook’n the Books**

Primary title:
**THE ONE WHO IS IN**

Secondary titles:
- **Keeper of the Hard R**
- High Wizard of the Western Tower
- First to Reply

Motto:
**I’M IN.**

Hidden honorary title:
**CorHe/Him**

Lore:
Lives in Idaho. Whenever almost anything is proposed in the league thread, he is usually first to reply: “I’m in.”

Chronicle:
**THE WIZARD’S REPLY**

### mahaR CREST — LOCKED DIRECTION

Arcane banner / wizard identity.

Use some combination of:
- wizard hat
- staff
- open mystical book
- battle banner
- raven
- small scroll reading “I’M IN.”

Do not use a generic wizard portrait as the crest.

Colors:
- deep purple
- black
- crimson
- silver / aged bronze

### mahaR BANNER

Arcane battle standard with clear `mahaR` identity.

The uppercase final R should be visually noticeable without becoming a typography gimmick.

### mahaR HERO

Western Tower / Idaho portal myth.

Include:
- mystical books titled WAIVERS, TRADES, PROPHECIES
- a banner planted before anyone else arrives
- portal/road toward Idaho
- a message/scroll reading “I’m in.”

Tone:
wizardry treated as completely normal league logistics.

---

# 12. HOUSE RICHEY — LOCKED DIRECTION

Owner:
Naash Richey

House:
**HOUSE RICHEY**

Subtitle:
**House of Two Banners**

Division:
Jackie’s

Current Banner:
**4 Da(jon) Luv of dag…**

Primary title:
**Lord of Two Banners**

Motto:
**WHY CHOOSE A SIDE?**

League saying:
**LOYAL TO BOTH. TRUSTED BY NEITHER.**

Hidden Council commentary:
**PICK A TEAM.**

Lore:
Vocal newer member. Contrarian. Enjoys stirring debate. Simultaneously a Seattle Seahawks fan and a San Francisco 49ers fan despite the teams being division rivals.

### RICHEY CREST — LOCKED CONCEPT

The split allegiance must be immediately obvious without copying NFL logos.

Preferred:
a divided heraldic shield or two-headed hawk.

#### Seattle-inspired side
- deep ocean navy
- bright action green
- storm
- waves
- Pacific Northwest
- aggressive hawk imagery
- rainy skyline / tower reference may be used if original

#### San Francisco-inspired side
- crimson
- old gold
- western sun
- Golden Gate-inspired towers
- gold-rush / miner motif
- California hills / bay reference

The two sides should look like they barely tolerate sharing the same shield.

Do not use official Seahawks or 49ers logos.

### RICHEY BANNER

Actually make it look like TWO banners forced into one House.

The rivalry should read immediately from color and motifs alone.

### RICHEY HERO

The Borderlands.

A divided environment:
one half stormy Pacific Northwest coastline,
one half golden western/bay landscape.

Two rival standards planted absurdly close together.

Tone:
internal contradiction presented as ancient heraldic legitimacy.

---

# 13. HOUSE FAGERSTROM — LOCKED DIRECTION

Owner:
Ryan Fagerstrom

House:
**HOUSE FAGERSTROM**

Subtitle:
**HOUSE OF THE MISSING**

Division:
Daisey’s

Current Banner:
**black HILL state**

Primary title:
**THE ABSENT GENERAL**

Secondary titles:
- Veteran of the Field
- Lord of the Empty War Room

League saying:
**HE APPEARS. HE SPEAKS. HE VANISHES.**

Proverb:
**A GREAT WARRIOR DOES NOT ALWAYS A GREAT GENERAL MAKE.**

Relic:
**THE EMPTY CHAIR**

### FAGERSTROM CREST — LOCKED

The sigil is the old **Black Hills State football helmet** treated like an ancient battle helm / relic.

This should be the simplest and clearest House symbol.

Do not replace it with:
- X/O diagrams
- swords
- ghosts
- crowns
- generic battle symbols

If exact school trademark artwork is not supplied, use an original black-and-gold collegiate-style battle helmet with a `black HILL state` treatment that evokes the old helmet without copying protected artwork.

Colors:
- black
- weathered gold
- limited deep northern green if useful
- bone / steel secondary

### FAGERSTROM BANNER

The old battle helmet alone is the primary mark.

House subtitle:
**HOUSE OF THE MISSING**

Possible small secondary motif:
an empty chair beneath the helmet.

No heroic crown imagery.

### FAGERSTROM HERO

The empty War Room is more important than a warrior portrait.

Scene:
- northern war room fully prepared
- large empty command chair
- old black-and-gold battle helmet resting nearby
- unread messages/ravens
- draft board partially filled
- maybe a door or corridor implying the commander is gone again

The real-world football background is the setup; absentee fantasy ownership is the punchline.

Preserve this lore tone:

> In his youth, Lord Fagerstrom was a formidable warrior of the field. Years spent in battle sharpened his understanding of formations, leverage, deception and the movement of men. Yet when age delivered him to the strange wars of Bill Swerski 907, an unfortunate truth revealed itself: mastery of the battlefield did not necessarily make one a master of fantasy.
>
> Thus arose an old saying in the Realm:
>
> **“A great warrior does not always a great general make.”**
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

Keep it self-deprecating. He is not the protagonist of the Realm.

---

# 14. VISUAL RULES FOR ALL HOUSE ART

All House imagery must feel like it belongs to one world.

Shared visual language:
- worn bronze
- blackened iron
- old cloth
- dark northern stone
- carved wood
- cold ambient light
- restrained warm highlights
- real depth and texture
- small scratches / age / wear

Avoid:
- polished esports logos
- neon
- glossy 3D game icons
- modern vector badges
- cheesy medieval clip art
- generic fantasy runes everywhere
- overly ornate gold
- massive embedded text
- fake parchment UI panels inside the actual art

Humor should usually be hidden in secondary objects and environmental details.

The sigil must be readable at thumbnail size.

The hero artwork can contain more narrative detail.

---

# 15. WEBSITE IMPLEMENTATION INSTRUCTIONS

The website should be refactored so original assets are first-class, not decoration placed behind generic components.

## Houses directory

Replace tiny circular icons with:
- large crest artwork
- meaningful vertical banner presence
- House name
- owner
- primary title
- Current Banner

Jackie’s and Daisey’s should feel like two wings of a Great Hall.

Do not use a white background.

## Individual House pages

Preferred structure:

- full-width House hero artwork
- crest overlapping/anchored to hero
- House name and subtitle
- owner + Current Banner
- primary title
- motto / proverb
- relic
- lore in readable editorial layout
- Chronicle links
- championship record
- hidden “Council Notes” / Easter eggs
- banner / secondary artwork further down page

Do not put all lore into one card.

## Relics

Use actual relic artwork as the focal point.

## Champions

Use succession-wall art with live HTML names/dates.

## Homepage

Use world art and actual House assets.

Avoid generic iconography entirely where an original asset exists.

---

# 16. APPROVED CANON — DO NOT CHANGE

Champions:

- 2025 — Stephen Ealy
- 2024 — Angelo Katasse
- 2023 — Adam Sycks
- 2022 — Blake Galvin
- 2021 — Corey Mahar
- 2020 — Daniel Teske
- 2019 — Adam Sycks
- 2018 — Blake Galvin
- 2017 — Kevin Sellers
- 2016 — Daniel Teske
- 2015 — TJ
- 2014 — Angelo Katasse

Permanent divisions:

## Jackie’s
- Angelo Katasse
- Stephen Ealy
- Daniel Teske
- Naash Richey
- Blake Galvin

## Daisey’s
- Adam Sycks
- Ryan Fagerstrom
- Justin Sanbei
- Corey Mahar
- CJ Keys

Division lore:

> In the early years of the Realm, during a legendary gathering in Las Vegas, two exotic maidens—Jackie and Daisey—entered the chronicles of the 907. From that night forward, the Realm was divided beneath their names.
>
> Lords have come and gone. Houses have risen and fallen. The Crown has changed hands.
>
> **Jackie’s and Daisey’s have never changed.**

The Three Great Relics:
- The Crown
- The Sacred Sausage
- The Great Scroll of Swerski

Sacred Sausage:

> The Sacred Sausage passes each year to the least fortunate House. No Lord seeks it. All Lords eventually fear it.

Great Scroll:

> When disputes arise, the Lords demand the Scroll. Its authority is absolute. Its location is unknown.

---

# 17. NEXT IMPLEMENTATION STEP FOR CODEX

Do not attempt another generic full-site redesign from prose alone.

First:

1. Read this complete asset specification.
2. Refactor the site’s asset architecture and components so these real original images can be dropped in under the specified paths.
3. Redesign only the homepage + global navigation to use this physical-art-first system.
4. Use graceful placeholders only where actual image files are not yet present.
5. Do not use generic line icons in place of House art.
6. Do not rewrite canonical data.
7. Push the homepage redesign to a feature branch for Vercel preview review before propagating it across all routes.

Acceptance question:

> If all Bill Swerski text were removed, would the art direction still clearly feel like a specific northern Juneau-based fantasy-football civilization?

If not, it is still too generic.
