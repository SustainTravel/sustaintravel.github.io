import TourPage, { generateMetadata as localeMetadata } from "../../../[locale]/tours/[slug]/page";
import { tours } from "@/content/tours";

export const dynamicParams = false;

export function generateStaticParams() {
  return tours.map((tour) => ({ slug: tour.slug }));
}

type Props = { params: Promise<{ slug: string }> };

const withEn = async ({ params }: Props) => ({ params: Promise.resolve({ ...(await params), locale: "en" }) });

export async function generateMetadata(props: Props) {
  return localeMetadata(await withEn(props));
}

export default async function EnglishTourPage(props: Props) {
  return <TourPage {...await withEn(props)} />;
}
