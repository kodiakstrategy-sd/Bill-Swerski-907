export type DivisionName = "Jackie’s" | "Daisey’s";

export type SigilKind =
  | "bear" | "scales" | "stag" | "raven" | "mountain" | "vessel"
  | "cat" | "wizard" | "two-banners" | "helmet";

export interface House {
  slug: string;
  name: string;
  owner: string;
  division: DivisionName;
  banner: string;
  subtitle: string;
  seat: string;
  primaryTitle: string;
  titles: string[];
  motto: string;
  saying?: string;
  colors: [string, string, string];
  sigil: SigilKind;
  relics: string[];
  character: string;
  lore: string[];
  chronicle: string;
  easterEgg?: string;
  disputedTitle?: { title: string; note: string };
}

export interface Champion { year: number; owner: string; houseSlug?: string }
export interface Chronicle { slug: string; title: string; era: string; summary: string; houseSlugs: string[] }
export interface Artifact { title: string; date: string; caption: string; category: string; imagePath?: string; houseSlug?: string; note: string }
