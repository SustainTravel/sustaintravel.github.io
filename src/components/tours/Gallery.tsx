"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Chevron } from "@/components/icons";

type Labels = { label: string; previous: string; next: string; photoOf: string };

/**
 * A row of arched "village windows": scroll-snap swipe on small screens, all four side by side from lg.
 * While it overflows, the strip is focusable so arrow keys scroll it; the buttons step one photo at a time.
 */
export function Gallery({ images, title, t }: { images: string[]; title: string; t: Labels }) {
  const ref = useRef<HTMLUListElement>(null);
  const [edge, setEdge] = useState({ start: true, end: false, scrollable: true });

  const onScroll = () => {
    const el = ref.current;
    if (!el) return;
    setEdge({
      start: el.scrollLeft <= 2,
      end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 2,
      scrollable: el.scrollWidth > el.clientWidth + 2,
    });
  };

  // From lg all four photos fit and nothing scrolls, so the strip leaves the tab order.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(onScroll);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const step = (dir: 1 | -1) => {
    const el = ref.current;
    const slide = el?.firstElementChild as HTMLElement | null;
    // Smoothness comes from the strip's CSS scroll-behavior, which reduced-motion turns off globally.
    if (el && slide) el.scrollBy({ left: dir * (slide.offsetWidth + 16) });
  };

  // aria-disabled, not disabled: a disabled button drops keyboard focus at the end of the strip.
  const button =
    "grid size-12 place-items-center rounded-full border-2 border-forest/20 bg-cream text-forest press hover:border-forest hover:bg-sage-pale/50 aria-disabled:cursor-default aria-disabled:border-forest/10 aria-disabled:text-forest/35 aria-disabled:hover:border-forest/10 aria-disabled:hover:bg-cream";

  return (
    <div>
      <ul
        ref={ref}
        onScroll={onScroll}
        tabIndex={edge.scrollable ? 0 : undefined}
        aria-label={t.label}
        className="flex snap-x focus-visible:outline-offset-[-3px] snap-mandatory scroll-px-5 gap-4 overflow-x-auto overscroll-x-contain scroll-smooth px-5 pb-2 [scrollbar-width:none] sm:scroll-px-8 sm:px-8 lg:mx-auto lg:max-w-7xl lg:items-end lg:overflow-visible [&::-webkit-scrollbar]:hidden"
      >
        {images.map((src, i) => (
          <li
            key={src}
            className="relative w-[82%] shrink-0 snap-start overflow-hidden rounded-t-full rounded-b-2xl bg-sage-pale sm:w-[calc(50%-0.5rem)] lg:w-[calc(25%-0.75rem)] aspect-[4/5] lg:even:aspect-[4/4.6]"
          >
            <Image
              src={src}
              alt={`${title}. ${t.photoOf.replace("{n}", String(i + 1)).replace("{total}", String(images.length))}`}
              width={1600}
              height={1067}
              preload={i === 0}
              sizes="(min-width: 1024px) 300px, (min-width: 640px) 46vw, 82vw"
              className="absolute inset-0 size-full object-cover"
            />
          </li>
        ))}
      </ul>
      <div className="mt-3 flex justify-end gap-2 px-5 sm:px-8 lg:hidden">
        <button type="button" aria-label={t.previous} aria-disabled={edge.start} onClick={() => !edge.start && step(-1)} className={button}>
          <Chevron className="size-5 rotate-180" />
        </button>
        <button type="button" aria-label={t.next} aria-disabled={edge.end} onClick={() => !edge.end && step(1)} className={button}>
          <Chevron className="size-5" />
        </button>
      </div>
    </div>
  );
}
