import type { House } from "./types";

export const houses: House[] = [
  {
    slug: "galvin", name: "HOUSE GALVIN", owner: "Blake Galvin", division: "Jackie’s",
    banner: "Premature Edraftulati…", subtitle: "House of the Midway North", seat: "Juneau, by way of Chicago",
    primaryTitle: "The Whisperer of Rules", titles: ["Commissioner of the 907", "Keeper of the Bylaws", "Warden of the Waiver Wire"],
    motto: "CHAOS IS A LADDER.", colors: ["#101a2d", "#a34f28", "#d8ceb8"], sigil: "bear", relics: ["The Shifting Rulebook", "Baron Chin"],
    character: "From Chicago came Lord Galvin, founder of the Realm, loyal son of the Ditkas and first keeper of the Council’s laws. He built the table at which the Ten Lords gather, then gave himself the commissioner’s seat at its head and assured them all that the arrangement was impartial.",
    lore: ["In his hands rests the Shifting Rulebook, an ancient volume whose pages possess the remarkable ability to clarify themselves precisely when their keeper requires clarification. Thus he became the Whisperer of Rules: warden of the waiver wire, guardian of procedure and the only Lord who can amend an argument while it is still being made.", "Yet the Commissioner’s court has never felt whole since Baron Chin departed the Council. Some say Galvin lost a brother. Others say he lost his most reliable trading partner. The Realm records only that chaos remains a ladder, and Lord Galvin is usually standing nearest the next rung."],
    chronicle: "THE FALL OF BARON CHIN",
  },
  {
    slug: "sycks", name: "HOUSE SYCKS", owner: "Adam Sycks", division: "Daisey’s", banner: "Anchorage Aces",
    subtitle: "House of the Ledger", seat: "The Counting House", primaryTitle: "Master of Coin", titles: ["Auditor of Everything"],
    motto: "THE NUMBERS NEVER LIE.", saying: "LOVER OF COIN. HATER OF FUN.", colors: ["#17372b", "#687276", "#b69552"], sigil: "scales", relics: ["The Ledger"],
    character: "Lord Sycks presides over the Counting House with the patience of an accountant and the instincts of a merchant who has already calculated what everyone else is worth.",
    lore: ["He is a perennial contender because he wastes little and gives away less. Every trade is measured, every offer audited and every imbalance noted.", "Though his shrewdness is the talk of every tavern, the results engraved beside his name cannot be ignored. Yet even the Ledger’s perfect columns could not prevent the Las Vegas Purse Raiders from taking his wallet. The scream heard across the strip has left his legend tainted."], chronicle: "THE LAS VEGAS PURSE RAIDERS",
  },
  {
    slug: "keys", name: "HOUSE KEYS", owner: "CJ Keys", division: "Daisey’s", banner: "Arby’s, We Have The…",
    subtitle: "House of the Stag", seat: "The Green Court", primaryTitle: "Protector of the Crown", titles: ["The King’s Hand", "Keeper of the Crown"],
    motto: "THE CROWN MUST ENDURE.", saying: "ALWAYS THE HAND OF THE KING. NEVER THE KING.", colors: ["#173829", "#a25d3c", "#826a47"], sigil: "stag", relics: ["The Crown"],
    character: "Although coming from a questionable past among the lords of the deep valley, Lord Keys has long stood among the Realm’s most consistent competitors, season after season advancing within reach of glory—yet still without the Crown. He is the Protector of the Crown, the King’s Hand and keeper of the prize he has never been permitted to call his own.",
    lore: ["Like the noble stag without a mate, he keeps his vigil over a Crown forever close and forever just beyond reach. Other Lords rise in chaos and fall in ruin; Keys simply returns to the hunt, steady and prepared, only to find the final ground denied him once again.", "So the Green Court endures beneath its cruelest truth: no House has guarded the idea of the Crown more faithfully, and no Lord has spent longer close enough to see his reflection in its gold without ever wearing it."], chronicle: "THE CURSE OF THE KING’S HAND",
  },
  {
    slug: "katasse", name: "HOUSE KATASSE", owner: "Angelo Katasse", division: "Jackie’s", banner: "Damm Daniels, Back…",
    subtitle: "House of the Raven", seat: "The Copper Rookery", primaryTitle: "LORD OF THE FLEA MARKET DEAL", titles: ["The Raven of Many Deals", "The Unpredictable"],
    motto: "NOTHING IS UNTOUCHABLE.", colors: ["#111214", "#792b2b", "#a9673f"], sigil: "raven", relics: ["The Trade Scroll"],
    character: "Lord Katasse is the Realm’s great trader, a restless Raven for whom no roster is sacred and no player truly beyond reach. The army he drafts is merely the first version of the army he intends to command.",
    lore: ["When the Trade Tempest gathers over the Copper Rookery, offers cross the Realm faster than ravens before a storm. Every player has a price, every rival is a possible partner and every agreement creates the conditions for the next.", "By season’s end his banner may stand near the Crown or sink toward the Sausage with equal conviction. The outcome changes; the dealing does not. House Katasse survives by its oldest law: nothing is untouchable, and nothing remains where it began. Current legend states he is passing the lakes of twins."], chronicle: "THE TRADE TEMPEST",
  },
  {
    slug: "sanbei", name: "HOUSE SANBEI", owner: "Justin Sanbei", division: "Daisey’s", banner: "Duuuuuvaaaaal",
    subtitle: "HOUSE OF THE MOUNTAIN RUNNERS", seat: "The High Pass", primaryTitle: "The Beast", titles: ["Keeper of the High Pass", "Royal Physician"],
    motto: "JUDGE NOT A MOUNTAIN BY ITS SHADOW.", colors: ["#555b59", "#e5e5dc", "#17372d"], sigil: "mountain", relics: ["The High-Pass Staff"],
    character: "From the highest passes came Lord Sanbei, the slight warrior whose courage always cast the greater shadow. Long before he kept the health of the Realm, the football fields named him The Beast—and the mountains accepted the title as truth.",
    lore: ["He climbed where larger men faltered, carrying the High-Pass Staff through snow, wind and seasons of doubt. At the summit stands the mountain goat: small against the range, immovable before it. Thus House Sanbei teaches that legends are measured not by the size of the warrior, but by the height of the ground he conquers."], chronicle: "THE NAMING OF THE BEAST",
    disputedTitle: { title: "LICKER OF STRIPPERS", note: "No credible evidence exists that Lord Sanbei ever committed the act from which the title derives. This has done nothing to prevent its continued use by the Council." },
  },
  {
    slug: "teske", name: "HOUSE TESKE", owner: "Daniel Teske", division: "Jackie’s", banner: "Salmon Bellies",
    subtitle: "House of Douglas", seat: "Douglas Island", primaryTitle: "Master of Douglas", titles: ["Keeper of the Old Ways", "The Silent Mariner"],
    motto: "THE OLD WAYS ENDURE.", colors: ["#12243b", "#3f6962", "#77756e"], sigil: "vessel", relics: ["The Ancient Draft Manuscript", "The Flip Phone"],
    character: "The league’s eldest member, Lord Teske keeps the ancient manuscripts and guards the remembered history of the Ten Lords from Douglas Island.",
    lore: ["He first arrived at the founding table carrying a printed draft manuscript, following its counsel as though it were sacred text.", "His boat failed on the very day it was meant to carry the league fishing during a draft trip. The Broken Voyage has never been forgiven."], chronicle: "THE BROKEN VOYAGE", easterEgg: "F— Teske, reads one forbidden marginal note.",
  },
  {
    slug: "ealy", name: "HOUSE EALY", owner: "Stephen Ealy", division: "Jackie’s", banner: "Kaaron Rodgers",
    subtitle: "House of Nine Lives", seat: "The Last Call", primaryTitle: "The Wildcard", titles: ["The Fool King", "Lord of the Last Call", "2025 League Champion"],
    motto: "ANYTHING CAN HAPPEN.", colors: ["#3b3229", "#b08c53", "#7d302d"], sigil: "cat", relics: ["The Crooked Crown"],
    character: "Class clown, willing reveler and human variable. House Ealy may touch the Sacred Sausage, spend a life, and return wearing the Crown.",
    lore: ["Nine lives are alleged. No auditor has successfully counted them. In 2025, one of those lives ended in a championship.", "Even his championship reign left the beloved belt carrying the unmistakable scent of sausage. Which sausage, the Council has wisely chosen never to ask."], chronicle: "THE CROWN & THE SAUSAGE",
  },
  {
    slug: "mahar", name: "HOUSE mahaR", owner: "Corey Mahar", division: "Daisey’s", banner: "Cook’n the Books",
    subtitle: "House of the Arcane Banner", seat: "The Western Tower, Idaho", primaryTitle: "THE ONE WHO IS IN", titles: ["Keeper of the Hard R", "High Wizard of the Western Tower", "First to Reply"],
    motto: "I’M IN.", colors: ["#302243", "#9b7541", "#49605a"], sigil: "wizard", relics: ["The Arcane Banner"],
    character: "From the Western Tower in Idaho, Lord Mahar keeps watch over the Council thread with an attention no other Lord can match. Before a proposal has finished echoing through the hall, the Arcane Banner is raised and his answer has already arrived: “I’m in.”",
    lore: ["No journey is too uncertain, no scheme too loosely described and no gathering too distant for the High Wizard’s immediate assent. The speed of the Wizard’s Reply is rivaled only by the certainty of its wording.", "Thus he became the One Who Is In, First to Reply, Lord of the He/Hims, and keeper of the hard R. While the other Lords debate terms, inspect calendars or ask what they have agreed to, House mahaR has already committed itself and begun waiting for everyone else."], chronicle: "THE WIZARD’S REPLY", easterEgg: "CorHe/Him",
  },
  {
    slug: "richey", name: "HOUSE RICHEY", owner: "Naash Richey", division: "Jackie’s", banner: "4 Da(jon) Luv of dag…",
    subtitle: "House of Two Banners", seat: "The Divided Coast", primaryTitle: "Lord of Two Banners", titles: ["The Contrarian"],
    motto: "WHY CHOOSE A SIDE?", saying: "LOYAL TO BOTH. TRUSTED BY NEITHER.", colors: ["#122640", "#73ba43", "#a5232f"], sigil: "two-banners", relics: ["The Divided Shield", "The Exalted Charlatan"],
    character: "While he was of the lands first people Lord Richey came later to the Council than many of the Ten, yet entered as though the argument had been waiting specifically for him. Vocal, certain and instinctively contrary, he bears two banners that were never meant to share the same hall.",
    lore: ["He is sworn to both Seattle and San Francisco despite the ancient inconvenience of their rivalry. Storm and ocean contest one half of the Divided Shield; crimson sun and golden towers claim the other. Neither half appears pleased, and their bearer refuses to surrender either.", "So House Richey has made contradiction into inheritance. He chooses both sides, disputes the premise and marches beneath colors trusted by neither camp. The company he keeps would furrow even the most liberal a man, as the Exalted Charlatan Jake Paul has taken his place at court and has been given Lord Richeys ear."], chronicle: "THE TWO BANNERS", easterEgg: "PICK A TEAM.",
  },
  {
    slug: "fagerstrom", name: "HOUSE FAGERSTROM", owner: "Ryan Fagerstrom", division: "Daisey’s", banner: "black HILL state",
    subtitle: "House of AFK", seat: "The Empty War Room", primaryTitle: "General of the Assigned Army", titles: [],
    motto: "A GREAT WARRIOR DOES NOT ALWAYS A GREAT GENERAL MAKE.", saying: "HE APPEARS. HE SPEAKS. HE VANISHES.", colors: ["#161616", "#c19a3b", "#57534b"], sigil: "helmet", relics: ["THE EMPTY THRONE"],
    character: "As the most battle-tested warrior among the Ten, Lord Fagerstrom’s rise to Swerski glory once seemed inevitable. Yet the taverns soon learned an old truth: “A great warrior does not always a great general make.”",
    lore: ["Now known as the Lord of AFK and General of the Assigned Army, his Swerski legacy is defined less by defeat than by absence. Some years he drafts. Some years the machine drafts. Once, the other Lords simply assembled his army for him.", "The banners are raised. The army stands ready. The throne sits AFK."], chronicle: "THE DRAFT WITHOUT A LORD",
  },
];

export const houseBySlug = (slug: string) => houses.find((house) => house.slug === slug);
