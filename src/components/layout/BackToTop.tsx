"use client";

import { useEffect, useState } from "react";
import { Chevron } from "@/components/icons";

/** Mobile-only "back to top" button; appears once the visitor has scrolled past the first screen. */
export function BackToTop({ label }: { label: string }) {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const update = () => setShown(window.scrollY > window.innerHeight);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      tabIndex={shown ? 0 : -1}
      aria-hidden={!shown}
      onClick={() => {
        // No explicit behavior: the CSS scroll-behavior already turns smooth scrolling off for reduced motion.
        window.scrollTo({ top: 0 });
        document.getElementById("main")?.focus({ preventScroll: true });
      }}
      className={`to-top fixed right-4 z-40 flex size-12 items-center justify-center rounded-full bg-forest text-cream shadow-lg shadow-forest/25 transition-[opacity,translate] duration-300 ease-out active:scale-95 lg:hidden ${
        shown ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <Chevron className="size-5 -rotate-90" />
    </button>
  );
}
