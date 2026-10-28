"use client";

import { useEffect, useRef } from "react";
import { formatLike, statTarget } from "@/lib/format";

const DURATION = 1600;

/**
 * Counts a stat up once when it scrolls into view. The server HTML holds the final value, and screen
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
        if (!entry.isIntersecting) {
          // Still below: wait at zero. Already scrolled past: keep the final value.
          if (entry.boundingClientRect.top > 0) el.textContent = formatLike(value, 0);
          return;
        }
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / DURATION, 1);
          el.textContent = formatLike(value, Math.round(target * (1 - (1 - t) ** 4)));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.75 },
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
