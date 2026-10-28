import type { ReactNode } from "react";
import LocaleLayout, { generateMetadata as localeMetadata } from "../[locale]/layout";
import { en } from "./en";

export { viewport } from "../[locale]/layout";
export const generateMetadata = () => localeMetadata(en);

export default function EnglishLayout({ children }: { children: ReactNode }) {
  return <LocaleLayout {...en}>{children}</LocaleLayout>;
}
