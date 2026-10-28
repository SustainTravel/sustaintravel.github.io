// Flat, hand-drawn-style icons redrawn from the logo (sun, birds, sprout, basket, village) plus UI glyphs.
// All are decorative by default (aria-hidden); give the surrounding control an accessible name.
import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;
const base = { "aria-hidden": true, focusable: false } as const;

/** The logo's open circle: an arc that leaves a gap at the lower right. */
export function Arc(props: P) {
  return (
    <svg viewBox="0 0 200 200" fill="none" {...base} {...props}>
      <path d="M168 150A86 86 0 1 1 182 82" pathLength={1} stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

export function Sun(props: P) {
  return (
    <svg viewBox="0 0 40 40" {...base} {...props}>
      <circle cx="20" cy="20" r="18" fill="#edab4b" />
    </svg>
  );
}

export function Birds(props: P) {
  return (
    <svg viewBox="0 0 64 32" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...base} {...props}>
      <path d="M30 8c4-4 8-4 10 1 3-5 8-6 12-3" />
      <path d="M6 24c4-4 8-4 10 1 3-5 8-6 12-3" />
    </svg>
  );
}

export function Sprout(props: P) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <path d="M24 44V20" stroke="#2f5d3a" strokeWidth="3" strokeLinecap="round" />
      <path d="M24 24C24 12 32 6 42 6c0 12-8 18-18 18z" fill="#495e35" />
      <path d="M24 30C24 20 16 14 6 14c0 10 8 16 18 16z" fill="#8baa6b" />
      <path d="M12 44h24" stroke="#9a6a3a" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

export function Basket(props: P) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <path d="M12 22c0-9 5-14 12-14s12 5 12 14" fill="none" stroke="#9a6a3a" strokeWidth="3" strokeLinecap="round" />
      <circle cx="19" cy="20" r="5" fill="#c8693a" />
      <rect x="25" y="12" width="5" height="12" rx="2" fill="#2f5d3a" />
      <path d="M6 22h36l-4 18a3 3 0 0 1-3 2H13a3 3 0 0 1-3-2z" fill="#9a6a3a" />
      <path d="M10 29h28M11 35h26" stroke="#f9f7eb" strokeOpacity=".45" strokeWidth="2" />
    </svg>
  );
}

export function Village(props: P) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <path d="M2 40c10-8 34-8 44 0v4H2z" fill="#8baa6b" />
      <rect x="8" y="22" width="14" height="14" fill="#f9f7eb" stroke="#2f5d3a" strokeWidth="2" />
      <path d="M6 23l9-8 9 8z" fill="#c8693a" />
      <rect x="24" y="16" width="16" height="20" fill="#f9f7eb" stroke="#2f5d3a" strokeWidth="2" />
      <path d="M22 17l10-9 10 9z" fill="#c8693a" />
      <rect x="13" y="29" width="4" height="7" fill="#2f5d3a" />
      <rect x="30" y="22" width="4" height="5" fill="#2f5d3a" />
    </svg>
  );
}

export function WinterSun(props: P) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <circle cx="24" cy="28" r="12" fill="#edab4b" />
      <path d="M2 34h44v12H2z" fill="#f9f7eb" />
      <path d="M4 36c8-4 16-4 20 0s12 4 20 0" fill="none" stroke="#2f5d3a" strokeWidth="3" strokeLinecap="round" />
      <path d="M8 42c6-3 12-3 16 0s10 3 16 0" fill="none" stroke="#8baa6b" strokeWidth="3" strokeLinecap="round" />
      <path d="M24 6v6M10 12l4 4M38 12l-4 4" stroke="#edab4b" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function Hands(props: P) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <circle cx="16" cy="14" r="6" fill="#c8693a" />
      <circle cx="32" cy="14" r="6" fill="#495e35" />
      <path d="M6 40c0-9 4-16 10-16s10 7 10 16z" fill="#c8693a" />
      <path d="M22 40c0-9 4-16 10-16s10 7 10 16z" fill="#495e35" />
    </svg>
  );
}

/** A dotted trail over a hill to a map pin: planning and running the journeys. */
export function Route(props: P) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <path d="M2 40c10-8 34-8 44 0v4H2z" fill="#8baa6b" />
      <path d="M9 37c6-7 15-2 18-9s7-6 11-6" fill="none" stroke="#2f5d3a" strokeWidth="3" strokeLinecap="round" strokeDasharray="0.5 6" />
      <circle cx="9" cy="37" r="3.5" fill="#edab4b" />
      <path d="M38 23s-8-7-8-12.5a8 8 0 0 1 16 0C46 16 38 23 38 23z" fill="#c8693a" />
      <circle cx="38" cy="10.5" r="3" fill="#f9f7eb" />
    </svg>
  );
}

/** A heart with a leaf: the bond with travellers. */
export function Heart(props: P) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <path d="M24 43S5 32 5 19a9.5 9.5 0 0 1 19-3 9.5 9.5 0 0 1 19 3c0 13-19 24-19 24z" fill="#c8693a" />
      <path d="M24 17c0-7 5-12 12-12 0 7-5 12-12 12z" fill="#495e35" />
    </svg>
  );
}

/** A wooden signpost: the ways people reach us. */
export function Signpost(props: P) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <rect x="21" y="6" width="5" height="38" rx="1.5" fill="#9a6a3a" />
      <path d="M8 10h25l6 5.5-6 5.5H8z" fill="#edab4b" />
      <path d="M40 25H15l-6 5.5 6 5.5h25z" fill="#8baa6b" />
      <path d="M12 44h24" stroke="#2f5d3a" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

/** Two grown-ups and a child, in the same shapes as Hands. */
export function Family(props: P) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <circle cx="13" cy="12" r="5.5" fill="#495e35" />
      <path d="M4 42c0-10 4-18 9-18s9 8 9 18z" fill="#495e35" />
      <circle cx="35" cy="12" r="5.5" fill="#c8693a" />
      <path d="M26 42c0-10 4-18 9-18s9 8 9 18z" fill="#c8693a" />
      <circle cx="24" cy="25" r="4.5" fill="#edab4b" stroke="#f9f7eb" strokeWidth="2" />
      <path d="M17 43c0-7 3-12 7-12s7 5 7 12z" fill="#edab4b" stroke="#f9f7eb" strokeWidth="2" />
    </svg>
  );
}

/** A stack of coins: what it takes to run. */
export function Coins(props: P) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <rect x="6" y="35" width="28" height="8" rx="4" fill="#9a6a3a" />
      <rect x="10" y="27" width="28" height="8" rx="4" fill="#edab4b" />
      <rect x="6" y="19" width="28" height="8" rx="4" fill="#9a6a3a" />
      <circle cx="37" cy="11" r="7" fill="#edab4b" />
      <circle cx="37" cy="11" r="3.5" fill="none" stroke="#f9f7eb" strokeOpacity=".7" strokeWidth="2" />
    </svg>
  );
}

/** A coin with a sprout growing from it: income that comes back to the land. */
export function CoinSprout(props: P) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...props}>
      <path d="M24 26V12" stroke="#2f5d3a" strokeWidth="3" strokeLinecap="round" />
      <path d="M24 16c0-7 5-11 12-11 0 7-5 11-12 11z" fill="#495e35" />
      <path d="M24 21c0-6-4-10-10-10 0 6 4 10 10 10z" fill="#8baa6b" />
      <circle cx="24" cy="34" r="11" fill="#edab4b" />
      <circle cx="24" cy="34" r="6" fill="none" stroke="#f9f7eb" strokeOpacity=".7" strokeWidth="2" />
    </svg>
  );
}

export function Bus(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...base} {...props}>
      <rect x="3" y="4" width="18" height="13" rx="3" />
      <path d="M3 11h18M8 17v2M16 17v2" />
      <path d="M12.5 5.5l-2 3h3l-2 3" />
    </svg>
  );
}

export function Bike(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...base} {...props}>
      <circle cx="5.5" cy="16" r="3.5" />
      <circle cx="18.5" cy="16" r="3.5" />
      <path d="M5.5 16l4-7h6l3 7M9.5 9L12 16h-6.5M14 6h2.5l-1 3" />
    </svg>
  );
}

export function BasketLine(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...base} {...props}>
      <path d="M6 11c0-4 2.5-7 6-7s6 3 6 7" />
      <path d="M3 11h18l-2 9H5z" />
      <path d="M9 14v3M15 14v3M12 14v3" />
    </svg>
  );
}

export function Leaf(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...base} {...props}>
      <path d="M5 19C5 10 10 5 20 4c0 10-5 15-14 15z" />
      <path d="M5 19l8-8" />
    </svg>
  );
}

export function Moon(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...base} {...props}>
      <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z" />
    </svg>
  );
}

export function Home(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...base} {...props}>
      <path d="M3 11l9-7 9 7" />
      <path d="M5 10v10h14V10M10 20v-5h4v5" />
    </svg>
  );
}

export function Tree(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...base} {...props}>
      <path d="M12 21v-7M12 14c-4 0-7-2-7-5.5S8 3 12 3s7 2 7 5.5S16 14 12 14z" />
      <path d="M12 11l-2.5-2M12 12l3-2.5M8 21h8" />
    </svg>
  );
}

export function Menu(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...base} {...props}>
      <path d="M4 7h16M4 12h16M4 17h10" />
    </svg>
  );
}

export function Close(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...base} {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function Plus(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...base} {...props}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function Check(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...base} {...props}>
      <path d="M5 12.5l4.5 4.5L19 7" />
    </svg>
  );
}

export function Chevron(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...base} {...props}>
      <path d="M9 5l7 7-7 7" />
    </svg>
  );
}

export function Instagram(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Facebook(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...base} {...props}>
      <path d="M13.5 21v-7.5H16l.5-3h-3V8.6c0-.9.3-1.6 1.6-1.6h1.5V4.3A20 20 0 0 0 14.4 4c-2.3 0-3.9 1.4-3.9 4v2.5H8v3h2.5V21z" />
    </svg>
  );
}

export function Mail(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

export function Pin(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...base} {...props}>
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}

/** Layered rolling hills used as a section edge. `colors` go back-to-front; the last one should match the next section. */
export function Hills({ colors, className }: { colors: [string, string, string]; className?: string }) {
  return (
    <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className={`hill-drift ${className ?? ""}`} {...base}>
      <path d="M0 70C180 30 360 20 560 48s420 40 600 6 240-30 280-24v90H0z" fill={colors[0]} />
      <path d="M0 92c200-34 420-40 640-14s400 30 560 4 220-14 240-10v48H0z" fill={colors[1]} />
      <path d="M0 108c240-18 480-22 720-6s480 16 720-2v20H0z" fill={colors[2]} />
    </svg>
  );
}
