import CreditsPage, { generateMetadata as localeMetadata } from "../../[locale]/credits/page";
import { en } from "../en";

export const generateMetadata = () => localeMetadata(en);

export default function EnglishCreditsPage() {
  return <CreditsPage {...en} />;
}
