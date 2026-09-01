import type { Chronicle } from "./types";

export const chronicles: Chronicle[] = [
  ["founding", "THE FOUNDING OF THE REALM", "The First Age", "How ten seats came to face one another beneath the northern sky.", ["galvin"]],
  ["division", "THE DIVISION OF THE REALM", "The Vegas Age", "The night Jackie’s and Daisey’s became names no Lord could undo.", []],
  ["brother-trade", "THE BROTHER TRADE CONSPIRACY", "Council Folklore", "A suspiciously favorable wind between two related Houses—at least in the telling.", ["galvin"]],
  ["baron-chin", "THE FALL OF BARON CHIN", "The Departed Seats", "The Commissioner loses a brother and, perhaps, his most reliable trading partner.", ["galvin"]],
  ["purse-raiders", "THE LAS VEGAS PURSE RAIDERS", "The Vegas Age", "The Master of Coin meets the only transaction he could not audit.", ["sycks"]],
  ["kings-hand", "THE CURSE OF THE KING’S HAND", "The Long Near-Victory", "Forever beside the Crown; never beneath it.", ["keys"]],
  ["trade-tempest", "THE TRADE TEMPEST", "Recurring Weather", "The Raven makes every roster temporary.", ["katasse"]],
  ["beast", "THE NAMING OF THE BEAST", "The Schoolboy Age", "A title far larger than the warrior who first carried it.", ["sanbei"]],
  ["broken-voyage", "THE BROKEN VOYAGE", "The Draft Expeditions", "The fishing fleet that never left the shore.", ["teske"]],
  ["crown-sausage", "THE CROWN & THE SAUSAGE", "The Nine Lives", "House Ealy’s improbable intimacy with both ends of history.", ["ealy"]],
  ["wizards-reply", "THE WIZARD’S REPLY", "The Thread Age", "Before the proposal is finished, the answer arrives: I’m in.", ["mahar"]],
  ["two-banners", "THE TWO BANNERS", "The Divided Allegiance", "A Seattle storm and a San Francisco sun forced onto one shield.", ["richey"]],
  ["draft-without-lord", "THE DRAFT WITHOUT A LORD", "The Empty War Room", "Nine Lords assemble the army of the tenth.", ["fagerstrom"]],
  ["treadwell", "THE PROPHECY OF TREADWELL", "The Old Realm", "He did not speculate. He knew.", []],
  ["oracle", "THE ORACLE", "The Old Realm", "A son drafts; scholars debate who truly commanded.", []],
].map(([slug, title, era, summary, houseSlugs]) => ({ slug, title, era, summary, houseSlugs })) as Chronicle[];
