import ToursPage, { generateMetadata as localeMetadata } from "../../[locale]/tours/page";
import { en } from "../en";

export const generateMetadata = () => localeMetadata(en);

export default function EnglishToursPage() {
  return <ToursPage {...en} />;
}
