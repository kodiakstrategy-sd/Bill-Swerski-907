"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function CouncilEasterEgg() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", close);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", close); document.body.style.overflow = ""; };
  }, [open]);

  return <>
    <button className="council-seal" type="button" aria-label="Press the unmarked Council seal" onClick={() => setOpen(true)}>
      <span className="council-seal__rune">907</span>
      <span className="council-seal__instruction">Press</span>
    </button>
    {open && <div className="council-reveal" role="dialog" aria-modal="true" aria-label="Council seal reveal" onClick={() => setOpen(false)}>
      <button className="council-reveal__close" type="button" aria-label="Close" onClick={() => setOpen(false)}>×</button>
      <div className="council-reveal__frame" onClick={(event) => event.stopPropagation()}>
        <Image src="/artifacts/council-easter-egg.jpg" alt="" width={1320} height={702} priority sizes="min(92vw, 1320px)"/>
      </div>
    </div>}
  </>;
}
