const houseNames = ["Galvin", "Sycks", "Keys", "Katasse", "Sanbei", "Teske", "Ealy", "mahaR", "Richey", "Fagerstrom"];

export const oracleReplies = [
  "Your confidence has marched considerably farther than your understanding.",
  "A bold question from a House with such negotiable achievements.",
  "The Council expected little. You have found room beneath it.",
  "You possess the certainty of a man who has never consulted the record.",
  "The ravens carried your question back. Even they refused responsibility.",
  "You would struggle to pour ale from a boot with instructions upon the sole.",
  "There is a place for your wisdom. We have not discovered it.",
  "Lord Katasse has already traded your question for a worse one.",
  "House Galvin assures you this was always the rule. The ink remains wet.",
  "House Sycks has valued your opinion. You now owe him coin.",
  "House Keys has advised me to keep this answer close, but forever beyond your reach.",
  "By the frozen gods, what a question. This must be House [HOUSE].",
  "Your countenance promises wisdom your tongue has yet to deliver.",
  "Given the chronicles of your House, I would speak more softly.",
  "Lord Teske warned me you might ask that.",
  "Do not compel me to summon Tony.",
  "It is impossible to underestimate you.",
  "Speak your question once more.",
  "After this exchange, an audience with your mother seems in order.",
  "I know not. A rare admission in this chamber.",
  "This audience could have been a raven.",
  "Tread carefully. By decree, I am forbidden to answer questions of that nature.",
  "Let us return to this matter when your humours have settled.",
];

const normalize = (question: string) => question.toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, "").replace(/\s+/g, " ").trim();

export const oracleOpening = "Approach, Lord. Ask of trades, the draft, the Crown, the Council’s laws, or the failings of another House. I am still deciphering the wisdom of this wretched league—a task made difficult by its scarcity. In time, my counsel may improve. Your judgment remains your own burden.";

export type OracleMemory = { pendingQuestion: string | null; lastReply: number | null; frozenUsed: boolean };
const general = [0, 1, 2, 3, 4, 5, 6, 12, 13, 15, 16, 18, 19, 20, 22];
const topics = [
  { pattern: /\b(trade|trades|trading|offer|offers|swap)\b/i, opening: "You seek counsel on an exchange of armies.", replies: [7, 9, 1] },
  { pattern: /\b(rule|rules|law|laws|legal|illegal|commissioner|waiver|waivers)\b/i, opening: "You seek certainty in the laws of the Realm.", replies: [8, 3, 21] },
  { pattern: /\b(draft|drafting|pick|picks|roster|lineup|start|sit)\b/i, opening: "You seek guidance in assembling your army.", replies: [0, 3, 6] },
  { pattern: /\b(crown|win|wins|winning|champion|championship|glory)\b/i, opening: "You ask whether the Crown awaits you.", replies: [10, 0, 1] },
];

export function getOracleReply(question: string, memory: OracleMemory, random = Math.random) {
  const normalized = normalize(question);
  if (memory.pendingQuestion !== null && normalized === memory.pendingQuestion) {
    return { text: "I heard you the first time.", memory: { ...memory, pendingQuestion: null, lastReply: -1 } };
  }
  const namedHouse = houseNames.find((name) => new RegExp(`\\b${name}\\b`, "i").test(question));
  const topic = topics.find(({ pattern }) => pattern.test(question));
  const houseReply: Record<string, number> = { Galvin: 8, Sycks: 9, Keys: 10, Katasse: 7, Teske: 14 };
  const specific = namedHouse && houseReply[namedHouse] !== undefined ? [houseReply[namedHouse], 1, 13] : general;
  const candidates = [...(topic?.replies ?? specific), 17, ...(!memory.frozenUsed ? [11] : [])].filter((index) => index !== memory.lastReply);
  const index = candidates[Math.floor(random() * candidates.length)];
  const reply = oracleReplies[index];
  const opening = topic?.opening ?? (namedHouse ? `You bring House ${namedHouse} before the Oracle.` : "Your petition has reached the chamber.");
  const text = reply.includes("[HOUSE]") ? reply.replace("[HOUSE]", houseNames[Math.floor(random() * houseNames.length)]) : reply;
  return {
    text: [11, 15, 17].includes(index) ? text : `${opening} ${text}`,
    memory: { pendingQuestion: index === 17 ? normalized : null, lastReply: index, frozenUsed: memory.frozenUsed || index === 11 },
  };
}
