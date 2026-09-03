"use client";

import { useEffect, useRef, useState } from "react";

const replies = [
  "The Council has considered your question and requested a better trade offer.",
  "The numbers never lie. The Lords remain available for that service.",
  "Lord Fagerstrom will respond as soon as he returns. No date has been supplied.",
  "The Shifting Rulebook has a page for this. Its wording is currently shifting.",
  "The Crown is within reach. That is also what they told House Keys.",
  "House mahaR is in. Nobody has explained what this is yet.",
];

export function CouncilOracle() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ text: string; lord: boolean }[]>([]);
  const toggle = useRef<HTMLButtonElement>(null);
  const field = useRef<HTMLInputElement>(null);
  const log = useRef<HTMLDivElement>(null);
  useEffect(() => { if (open) field.current?.focus(); }, [open]);
  useEffect(() => { log.current?.scrollTo({ top: log.current.scrollHeight }); }, [messages]);
  return <aside className="council-oracle" aria-label="Council Oracle">
    {open && <section id="oracle-panel" className="oracle-panel" aria-label="Council banter" onKeyDown={(event) => { if (event.key === "Escape") { setOpen(false); toggle.current?.focus(); } }}>
      <header><div><h2>Council Oracle</h2><small>Preset banter · Not AI or rules advice</small></div><button type="button" aria-label="Close Oracle" onClick={() => { setOpen(false); toggle.current?.focus(); }}>×</button></header>
      <div className="oracle-log" ref={log} role="log" aria-live="polite" aria-relevant="additions"><p>The Council is listening. Helpful answers are not guaranteed.</p>{messages.map((message, index) => <p key={index} className={message.lord ? "oracle-lord" : ""}><small>{message.lord ? "You" : "Oracle"}</small>{message.text}</p>)}</div>
      <form onSubmit={(event) => { event.preventDefault(); if (!input.trim()) return; const reply = replies[Math.floor(Math.random() * replies.length)]; setMessages((previous) => [...previous.slice(-18), { text: input.trim(), lord: true }, { text: reply, lord: false }]); setInput(""); }}><label className="oracle-input-label" htmlFor="oracle-question">Address the Council</label><div><input id="oracle-question" ref={field} value={input} onChange={(event) => setInput(event.target.value)} maxLength={300} placeholder="Your question…" autoComplete="off"/><button type="submit" disabled={!input.trim()}>Send</button></div><small>Messages stay in this tab and disappear on reload.</small></form>
    </section>}
    <button ref={toggle} className="oracle-toggle" type="button" aria-expanded={open} aria-controls="oracle-panel" onClick={() => setOpen(!open)}>✦ Council Oracle</button>
  </aside>;
}
