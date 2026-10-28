import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import "../globals.css";

export const metadata: Metadata = { title: "Sustain" };
export const viewport: Viewport = { themeColor: "#f9f7eb" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
