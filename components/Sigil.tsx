import type { SigilKind } from "@/data/types";

const marks: Record<SigilKind, React.ReactNode> = {
  bear: <><path d="M34 71 20 55l7-30 15 8 8-8 8 8 15-8 7 30-14 16-16 7Z"/><path d="m36 50 9-4 5 5 5-5 9 4-6 12H42Z"/></>,
  scales: <><path d="M50 20v57M32 31h36M22 61l10-30 10 30M58 61l10-30 10 30"/><path d="M18 61q14 15 28 0M54 61q14 15 28 0M35 77h30"/></>,
  stag: <><path d="M50 75V45M50 47 34 30M50 47l16-17M34 30 24 21M34 30l-2-15M66 30l10-9M66 30l2-15"/><path d="M39 52q11-12 22 0v17L50 79 39 69Z"/></>,
  raven: <><path d="M20 61q23-35 55-27L60 46l20 8-22 5 10 22-22-15-16 9 5-17Z"/><circle cx="60" cy="40" r="2"/></>,
  mountain: <><path d="m12 78 28-45 10 14 10-20 28 51Z"/><path d="m33 43 7-10 6 9-6 5ZM54 37l6-10 9 16-9-5Z"/><path d="M48 29q-3-8 4-8l5 6-4 6Z"/></>,
  vessel: <><path d="M17 62h66L70 77H30Z"/><path d="M44 23v39M44 28l27 23H44M28 53l16-25"/><path d="M12 83q10-6 20 0t20 0 20 0 20 0"/></>,
  cat: <><path d="m30 35 4-16 14 11h4l14-11 4 16v31q-20 22-40 0Z"/><path d="m37 49 8 3M63 49l-8 3M44 64h12l-6 6Z"/><path d="m39 25 11-10 11 10"/></>,
  wizard: <><path d="m21 69 29-51 29 51-15-4 12 17H24l12-17Z"/><path d="M38 48h24M45 72l5-12 5 12M68 18v24M61 25h14"/></>,
  "two-banners": <><path d="M50 15 79 25v25q0 21-29 35Q21 71 21 50V25Z"/><path d="M50 15v70M24 29l23 15-23 15M76 29 53 44l23 15"/></>,
  helmet: <><path d="M22 56q0-34 31-37 28 4 28 31H50v27H30q-8-9-8-21Z"/><path d="M50 50h38v12H65M40 29v26M33 33h14"/></>,
};

export function Sigil({ kind, label, large = false }: { kind: SigilKind; label: string; large?: boolean }) {
  return (
    <div className={`sigil ${large ? "sigil--large" : ""}`} aria-label={`${label} sigil`} role="img">
      <svg viewBox="0 0 100 100" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">{marks[kind]}</svg>
    </div>
  );
}
