import type { Artifact } from "./types";

export const artifactCategories = ["League Relics", "Ancient Images", "Council Propaganda", "Draft Evidence", "Vegas Chronicles", "Championship Evidence", "Forbidden Documents"];

export const artifacts: Artifact[] = [
  { title: "The Championship Belt", date: "Date unknown", caption: "The metal form of the Crown.", category: "League Relics", note: "Awaiting authenticated image." },
  { title: "The Sacred Sausage", date: "Recurring", caption: "A giant hot dog no Lord wishes to inherit.", category: "League Relics", note: "Awaiting authenticated image." },
  { title: "The Commissioner’s Meme", date: "Classified", caption: "A forbidden document concerning Douglas Island.", category: "Forbidden Documents", houseSlug: "teske", note: "Archive entry reserved; original evidence not yet supplied." },
  { title: "The Vegas Record", date: "Vegas Age", caption: "Photographs from the gathering that divided the Realm.", category: "Vegas Chronicles", note: "Awaiting recovered photographs." },
];
