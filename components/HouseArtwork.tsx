"use client";

import Image from "next/image";
import { useState } from "react";
import type { House } from "@/data/types";
import { Sigil } from "./Sigil";

type HouseAssetKind = "crest" | "banner" | "hero";

export function HouseArtwork({ house, kind, priority = false }: { house: House; kind: HouseAssetKind; priority?: boolean }) {
  const [missing, setMissing] = useState(false);
  const portrait = kind !== "hero";
  return <div className={`house-art house-art--${kind} ${missing ? "is-fallback" : ""}`} style={{ "--house-a": house.colors[0], "--house-b": house.colors[1], "--house-c": house.colors[2] } as React.CSSProperties}>
    {!missing && <Image src={`/houses/${house.slug}/${kind}.webp`} alt={`${house.name} ${kind} artwork`} fill sizes={portrait ? "(max-width: 760px) 42vw, 18vw" : "100vw"} className="house-art__image" priority={priority} onError={() => setMissing(true)} />}
    {!missing && kind === "banner" && <span className="house-art__inscription"><b>{house.name}</b><small>{house.motto}</small></span>}
    {missing && <div className="house-art__fallback" aria-label={`${house.name} temporary heraldic treatment`}><span className="cloth-seam"/><Sigil kind={house.sigil} label={house.name}/><small>Original {kind}<br/>awaiting the armory</small></div>}
  </div>;
}
