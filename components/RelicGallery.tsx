"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const relicImages: Record<string, string> = {
  "The Shifting Rulebook": "/house-relics/shifting-rulebook.webp",
  "The Ledger": "/house-relics/ledger.webp",
  "The Crown": "/relics/crown.webp",
  "The Trade Scroll": "/house-relics/trade-scroll.webp",
  "The High-Pass Staff": "/house-relics/high-pass-staff.webp",
  "The Ancient Draft Magazine": "/house-relics/ancient-draft-magazine.webp",
  "The Flip Phone": "/house-relics/flip-phone.webp",
  "The Crooked Crown": "/house-relics/crooked-crown.webp",
  "The Arcane Banner": "/house-relics/arcane-banner.webp",
  "The Divided Shield": "/house-relics/divided-shield.webp",
  "The Empty Throne": "/houses/fagerstrom/hero.webp",
};

export function RelicGallery({ relics, houseName }: { relics: string[]; houseName: string }) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (!active) return;
    const close = (event: KeyboardEvent) => event.key === "Escape" && setActive(null);
    document.addEventListener("keydown", close);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", close); document.body.style.overflow = ""; };
  }, [active]);

  return <>
    <ul className="house-relic-links">{relics.map((relic) => <li key={relic}><button type="button" onClick={() => setActive(relic)}>{relic}<span aria-hidden="true">View artifact ↗</span></button></li>)}</ul>
    {active && <div className="relic-lightbox" role="dialog" aria-modal="true" aria-label={`${active}, relic of ${houseName}`} onClick={() => setActive(null)}>
      <button className="relic-lightbox__close" type="button" onClick={() => setActive(null)} aria-label="Close relic image">×</button>
      <figure onClick={(event) => event.stopPropagation()}>
        <div className="relic-lightbox__image"><Image src={relicImages[active]} alt={`${active}, relic of ${houseName}`} fill sizes="min(92vw, 900px)" priority/></div>
        <figcaption><span>Relic of {houseName}</span><strong>{active}</strong></figcaption>
      </figure>
    </div>}
  </>;
}
