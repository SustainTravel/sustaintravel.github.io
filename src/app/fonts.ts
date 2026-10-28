import { Figtree, Young_Serif } from "next/font/google";

// Young Serif: warm, chunky, hand-cut serif with a village-signage feel; Figtree: friendly, very legible body.
export const display = Young_Serif({ subsets: ["latin", "latin-ext"], weight: "400", variable: "--nf-display" });
export const body = Figtree({ subsets: ["latin", "latin-ext"], variable: "--nf-body" });
