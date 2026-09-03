"use client";

import { useEffect, useRef, useState } from "react";
import { getOracleReply, oracleOpening, type OracleMemory } from "@/data/oracle";

export function CouncilOracle() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ text: string; lord: boolean }[]>([]);
  const toggle = useRef<HTMLButtonElement>(null);
  const field = useRef<HTMLInputElement>(null);
  const log = useRef<HTMLDivElement>(null);
  const memory = useRef<OracleMemory>({ pendingQuestion: null, lastReply: null, frozenUsed: false });
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [thinking, setThinking] = useState(false);
  function submitQuestion(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const question = input.trim();
    if (!question || timer.current !== null) return;
    const reply = getOracleReply(question, memory.current);
    memory.current = reply.memory;
    setMessages((previous) => [...previous.slice(-18), { text: question, lord: true }]);
    setInput("");
    setThinking(true);
    timer.current = setTimeout(() => {
      setMessages((previous) => [...previous, { text: reply.text, lord: false }]);
      setThinking(false);
      timer.current = null;
    }, 1500 + Math.random() * 1000);
  }
  useEffect(() => () => { if (timer.current !== null) clearTimeout(timer.current); }, []);
  useEffect(() => { if (open) field.current?.focus(); }, [open]);
  useEffect(() => { log.current?.scrollTo({ top: log.current.scrollHeight }); }, [messages]);
  return <aside className="council-oracle" aria-label="Council Oracle">
    {open && <section id="oracle-panel" className="oracle-panel" aria-label="Council banter" onKeyDown={(event) => { if (event.key === "Escape") { setOpen(false); toggle.current?.focus(); } }}>
      <header><div><h2>Council Oracle</h2><small>Scripted Council banter · More counsel to come</small></div><button type="button" aria-label="Close Oracle" onClick={() => { setOpen(false); toggle.current?.focus(); }}>×</button></header>
      <div className="oracle-log" ref={log} role="log" aria-live="polite" aria-relevant="additions"><p>{oracleOpening}</p>{messages.map((message, index) => <p key={index} className={message.lord ? "oracle-lord" : ""}><small>{message.lord ? "You" : "Oracle"}</small>{message.text}</p>)}{thinking && <p>The Oracle considers your petition…</p>}</div>
      <form onSubmit={submitQuestion}><label className="oracle-input-label" htmlFor="oracle-question">Address the Council</label><div><input id="oracle-question" ref={field} value={input} onChange={(event) => setInput(event.target.value)} maxLength={300} placeholder="Your question…" autoComplete="off"/><button type="submit" disabled={thinking || !input.trim()}>Send</button></div><small>Not AI or rules advice. Messages disappear on reload.</small></form>
    </section>}
    <button ref={toggle} className="oracle-toggle" type="button" aria-expanded={open} aria-controls="oracle-panel" onClick={() => setOpen(!open)}>✦ Council Oracle</button>
  </aside>;
}
