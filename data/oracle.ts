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

export function getOracleReply(question: string, pendingQuestion: string | null, random = Math.random) {
  const normalized = normalize(question);
  if (pendingQuestion !== null && normalized === pendingQuestion) {
    return { text: "I heard you the first time.", pendingQuestion: null };
  }
  const reply = oracleReplies[Math.floor(random() * oracleReplies.length)];
  return {
    text: reply.includes("[HOUSE]") ? reply.replace("[HOUSE]", houseNames[Math.floor(random() * houseNames.length)]) : reply,
    pendingQuestion: reply === "Speak your question once more." ? normalized : null,
  };
}
