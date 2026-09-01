import type { House } from "./types";

export const houses: House[] = [
  {
    slug: "galvin", name: "HOUSE GALVIN", owner: "Blake Galvin", division: "Jackie’s",
    banner: "Premature Edraftulati…", subtitle: "House of the Midway North", seat: "Juneau, by way of Chicago",
    primaryTitle: "The Whisperer of Rules", titles: ["Commissioner of the 907", "Keeper of the Bylaws", "Warden of the Waiver Wire"],
    motto: "CHAOS IS A LADDER.", colors: ["#101a2d", "#a34f28", "#d8ceb8"], sigil: "bear", relics: ["The Shifting Rulebook"],
    character: "Founder, commissioner, Chicago native and Bears loyalist. He modifies the laws with suspicious frequency, claims impartiality and awaits the Council’s belief.",
    lore: ["The pages of the Shifting Rulebook have an uncanny tendency to change as circumstances require.", "The Whisperer of Rules has never been quite the same since Baron Chin—his brother and old co-conspirator—departed the Council. Some say he lost a brother. Others say he lost his most reliable trading partner. The tale is Council mythology, not an allegation."],
    chronicle: "THE FALL OF BARON CHIN",
  },
  {
    slug: "sycks", name: "HOUSE SYCKS", owner: "Adam Sycks", division: "Daisey’s", banner: "Anchorage Aces",
    subtitle: "House of the Ledger", seat: "The Counting House", primaryTitle: "Master of Coin", titles: ["Auditor of Everything"],
    motto: "THE NUMBERS NEVER LIE.", saying: "LOVER OF COIN. HATER OF FUN.", colors: ["#17372b", "#687276", "#b69552"], sigil: "scales", relics: ["The Ledger"],
    character: "An accountant, perennial competitor and exacting trader who rarely accepts an offer unless the arithmetic bends decisively toward his House.",
    lore: ["In Las Vegas, a band remembered as the Purse Raiders made off with his wallet. The Realm preserved the episode as comedy, not danger."], chronicle: "THE LAS VEGAS PURSE RAIDERS",
  },
  {
    slug: "keys", name: "HOUSE KEYS", owner: "CJ Keys", division: "Daisey’s", banner: "Arby’s, We Have The…",
    subtitle: "House of the Stag", seat: "The Green Court", primaryTitle: "Protector of the Crown", titles: ["The King’s Hand", "Keeper of the Crown"],
    motto: "THE CROWN MUST ENDURE.", saying: "ALWAYS THE HAND OF THE KING. NEVER THE KING.", colors: ["#173829", "#a25d3c", "#826a47"], sigil: "stag", relics: ["The Crown"],
    character: "A beloved former athlete, consistently competitive and frequently within reach of glory—yet still without the Crown.",
    lore: ["The noble stag keeps watch over a Crown forever close and forever just beyond reach."], chronicle: "THE CURSE OF THE KING’S HAND",
  },
  {
    slug: "katasse", name: "HOUSE KATASSE", owner: "Angelo Katasse", division: "Jackie’s", banner: "Damm Daniels, Back…",
    subtitle: "House of the Raven", seat: "The Copper Rookery", primaryTitle: "LORD OF THE FLEA MARKET DEAL", titles: ["The Raven of Many Deals", "The Unpredictable"],
    motto: "NOTHING IS UNTOUCHABLE.", colors: ["#111214", "#792b2b", "#a9673f"], sigil: "raven", relics: ["The Trade Scroll"],
    character: "The Realm’s great trader. His final army rarely resembles the one drafted, and it may finish near the Crown or the Sausage with equal conviction.",
    lore: ["When the Trade Tempest arrives, every player has a price and every roster is temporary."], chronicle: "THE TRADE TEMPEST",
  },
  {
    slug: "sanbei", name: "HOUSE SANBEI", owner: "Justin Sanbei", division: "Daisey’s", banner: "Duuuuuvaaaaal",
    subtitle: "HOUSE OF THE MOUNTAIN RUNNERS", seat: "The High Pass", primaryTitle: "The Beast", titles: ["Keeper of the High Pass", "Royal Physician"],
    motto: "JUDGE NOT A MOUNTAIN BY ITS SHADOW.", colors: ["#555b59", "#e5e5dc", "#17372d"], sigil: "mountain", relics: ["The High-Pass Staff"],
    character: "A dentist known as The Beast since high-school football, when roughly one hundred pounds of athlete acquired a name far larger than himself.",
    lore: ["A small mountain goat stands confidently over an enormous summit. The proportions are the point."], chronicle: "THE NAMING OF THE BEAST",
    disputedTitle: { title: "LICKER OF STRIPPERS", note: "No credible evidence exists that Lord Sanbei ever committed the act from which the title derives. This has done nothing to prevent its continued use by the Council." },
  },
  {
    slug: "teske", name: "HOUSE TESKE", owner: "Daniel Teske", division: "Jackie’s", banner: "Salmon Bellies",
    subtitle: "House of Douglas", seat: "Douglas Island", primaryTitle: "Master of Douglas", titles: ["Keeper of the Old Ways", "The Silent Mariner"],
    motto: "THE OLD WAYS ENDURE.", colors: ["#12243b", "#3f6962", "#77756e"], sigil: "vessel", relics: ["The Ancient Draft Magazine", "The Flip Phone"],
    character: "The league’s eldest member, drafting by old magazine, speaking rarely in the Council thread and keeping the old ways from Douglas Island.",
    lore: ["His boat failed on the very day it was meant to carry the league fishing during a draft trip. The Broken Voyage has never been forgiven."], chronicle: "THE BROKEN VOYAGE", easterEgg: "F— Teske, reads one forbidden marginal note.",
  },
  {
    slug: "ealy", name: "HOUSE EALY", owner: "Stephen Ealy", division: "Jackie’s", banner: "Kaaron Rodgers",
    subtitle: "House of Nine Lives", seat: "The Last Call", primaryTitle: "The Wildcard", titles: ["The Fool King", "Lord of the Last Call", "2025 League Champion"],
    motto: "ANYTHING CAN HAPPEN.", colors: ["#3b3229", "#b08c53", "#7d302d"], sigil: "cat", relics: ["The Crooked Crown"],
    character: "Class clown, willing reveler and human variable. House Ealy may touch the Sacred Sausage, spend a life, and return wearing the Crown.",
    lore: ["Nine lives are alleged. No auditor has successfully counted them. In 2025, one of those lives ended in a championship."], chronicle: "THE CROWN & THE SAUSAGE",
  },
  {
    slug: "mahar", name: "HOUSE mahaR", owner: "Corey Mahar", division: "Daisey’s", banner: "Cook’n the Books",
    subtitle: "House of the Arcane Banner", seat: "The Western Tower, Idaho", primaryTitle: "THE ONE WHO IS IN", titles: ["Keeper of the Hard R", "High Wizard of the Western Tower", "First to Reply"],
    motto: "I’M IN.", colors: ["#302243", "#9b7541", "#49605a"], sigil: "wizard", relics: ["The Arcane Banner"],
    character: "From his western tower in Idaho, he answers nearly every Council proposal before the echoes fade: “I’m in.”",
    lore: ["The speed of the Wizard’s Reply is rivaled only by the certainty of its wording."], chronicle: "THE WIZARD’S REPLY", easterEgg: "CorHe/Him",
  },
  {
    slug: "richey", name: "HOUSE RICHEY", owner: "Naash Richey", division: "Jackie’s", banner: "4 Da(jon) Luv of dag…",
    subtitle: "House of Two Banners", seat: "The Divided Coast", primaryTitle: "Lord of Two Banners", titles: ["The Contrarian"],
    motto: "WHY CHOOSE A SIDE?", saying: "LOYAL TO BOTH. TRUSTED BY NEITHER.", colors: ["#122640", "#73ba43", "#a5232f"], sigil: "two-banners", relics: ["The Divided Shield"],
    character: "A vocal newer Lord and enthusiastic contrarian, sworn somehow to both Seattle and San Francisco despite the small matter of their rivalry.",
    lore: ["Storm and ocean contest one half of the shield; crimson sun and golden towers claim the other. Neither half appears pleased."], chronicle: "THE TWO BANNERS", easterEgg: "PICK A TEAM.",
  },
  {
    slug: "fagerstrom", name: "HOUSE FAGERSTROM", owner: "Ryan Fagerstrom", division: "Daisey’s", banner: "black HILL state",
    subtitle: "HOUSE OF THE MISSING", seat: "The Empty War Room", primaryTitle: "THE ABSENT GENERAL", titles: ["Veteran of the Field", "Lord of the Empty War Room"],
    motto: "A GREAT WARRIOR DOES NOT ALWAYS A GREAT GENERAL MAKE.", saying: "HE APPEARS. HE SPEAKS. HE VANISHES.", colors: ["#161616", "#c19a3b", "#57534b"], sigil: "helmet", relics: ["THE EMPTY CHAIR"],
    character: "A formidable player in his youth who discovered that understanding the battlefield does not necessarily translate to managing a fantasy army.",
    lore: ["House Fagerstrom remains remarkably committed to the middle. Some years he drafts. Some years the machine drafts. Once, the other Lords assembled his army for him.", "Most weeks the War Room stands empty. Then the Absent General returns, offers an observation or unnecessary joke, and disappears again."], chronicle: "THE DRAFT WITHOUT A LORD",
  },
];

export const houseBySlug = (slug: string) => houses.find((house) => house.slug === slug);
