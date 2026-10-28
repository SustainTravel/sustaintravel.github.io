import { en } from "@/i18n/dictionaries/en";
import { pt } from "@/i18n/dictionaries/pt";
import { NotFoundContent } from "./NotFoundContent";

// not-found gets no props, so the client child reads the locale from the URL; only these few strings ship to it.
export default function NotFound() {
  return <NotFoundContent strings={{ en: en.notFound, pt: pt.notFound }} />;
}
