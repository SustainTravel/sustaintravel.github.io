import BusinessModelPage, { generateMetadata as localeMetadata } from "../../[locale]/business-model/page";
import { en } from "../en";

export const generateMetadata = () => localeMetadata(en);

export default function EnglishBusinessModelPage() {
  return <BusinessModelPage {...en} />;
}
