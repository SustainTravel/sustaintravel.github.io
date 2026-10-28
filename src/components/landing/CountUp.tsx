"use client";

import { useEffect, useRef } from "react";
import { formatLike, statTarget } from "@/lib/format";

const DURATION = 800;

/**
 * Counts a stat up once when it scrolls into view, on the same line as the stat's reveal (see reveal-script.ts),
 * so the fade and the count run together. The server HTML holds the final value, and screen
 * readers only ever get that value: the counting copy is aria-hidden and written straight to the DOM.
 */
export function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current!;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const target = statTarget(value);
    let frame = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        // The root reaches far above the viewport (as in reveal-script.ts), so "not intersecting" only ever means below.
        if (!entry.isIntersecting) {
          el.textContent = formatLike(value, 0);
          return;
        }
        io.disconnect();
        // Jumped past without seeing it (anchor link, fast scroll): just settle on the final value.
        if (entry.boundingClientRect.bottom < 0) {
          el.textContent = value;
          return;
        }
        // Start with the stat's own reveal. Its stagger delay is read on the first frame, not here: the order in which
        // two observers' callbacks run is not guaranteed, so the reveal observer may not have set it yet.
        let start = -1;
        const tick = (now: number) => {
          if (start < 0) start = now + parseFloat(el.closest<HTMLElement>(".reveal")?.style.animationDelay || "0");
          const t = Math.min(Math.max(now - start, 0) / DURATION, 1);
          // Ease-out quint: most of the distance in the first few frames, so the real number shows almost at once.
          el.textContent = formatLike(value, Math.round(target * (1 - (1 - t) ** 5)));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { rootMargin: "100000px 0px -8% 0px" },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
      el.textContent = value;
    };
  }, [value]);

  return (
    <>
      <span className="sr-only">{value}</span>
      <span ref={ref} aria-hidden="true">
        {value}
      </span>
    </>
  );
}
