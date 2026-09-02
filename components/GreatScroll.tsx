"use client";

import { useEffect, useRef } from "react";

export function GreatScroll({ articles }: { articles: string[] }) {
  const stageRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const update = () => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const rect = stage.getBoundingClientRect();
      const distance = Math.max(1, rect.height - window.innerHeight);
      const progress = reduced ? 0 : Math.min(1, Math.max(0, -rect.top / distance));
      const unroll = reduced ? 1 : Math.min(1, progress / .16);
      const travel = reduced ? 0 : Math.min(1, Math.max(0, (progress - .16) / .84));
      const viewport = stage.querySelector<HTMLElement>(".great-scroll__viewport");
      const content = stage.querySelector<HTMLElement>(".great-scroll__inscription");
      const object = stage.querySelector<HTMLElement>(".great-scroll__object");
      const openHeight = Math.max(0, (object?.clientHeight ?? 64) - 64) * unroll;
      const overflow = Math.max(0, (content?.scrollHeight ?? 0) - (viewport?.clientHeight ?? 0) + 80);
      stage.style.setProperty("--scroll-unroll", String(unroll));
      stage.style.setProperty("--scroll-height", `${openHeight}px`);
      stage.style.setProperty("--scroll-bottom", `${32 + openHeight}px`);
      stage.style.setProperty("--scroll-turn", `${progress * 1080}deg`);
      stage.style.setProperty("--scroll-travel", `${-travel * overflow}px`);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => { window.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, []);

  return <section className="great-scroll-stage" ref={stageRef}>
    <div className="great-scroll__sticky">
      <div className="great-scroll__object">
        <div className="great-scroll__roller great-scroll__roller--top"><i/><span/><i/></div>
        <div className="great-scroll__viewport">
          <div className="great-scroll__leather">
            <div className="great-scroll__inscription"><div className="scroll-seal">907</div>{articles.map((article, i) => <article key={article}><span>Article {toRoman(i + 1)}</span><h2>{article}</h2><p>Awaiting Inscription</p></article>)}</div>
          </div>
        </div>
        <div className="great-scroll__roller great-scroll__roller--bottom"><i/><span/><i/></div>
      </div>
      <p className="great-scroll__cue">Continue downward to unroll</p>
    </div>
  </section>;
}

function toRoman(n: number) { return ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"][n - 1]; }
