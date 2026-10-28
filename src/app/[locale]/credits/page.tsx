import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { photoCredits, type PhotoCredit } from "@/content/photo-credits";
import { tours } from "@/content/tours";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return { title: getDictionary(locale).credits.meta.title };
}

export default async function CreditsPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale).credits;

  const groups = [
    { heading: t.general, credits: photoCredits.filter((c) => !c.file.startsWith("/images/tours/")) },
    ...tours.map((tour) => ({
      heading: tour.title[locale],
      credits: photoCredits.filter((c) => tour.images.includes(c.file)),
    })),
  ];

  return (
    <main className="mx-auto max-w-4xl px-5 py-12 text-forest">
      <h1 className="font-display text-4xl">{t.title}</h1>
      <p className="mt-4 max-w-2xl text-lg">{t.lead}</p>
      {groups.map(({ heading, credits }) => (
        <section key={heading} className="mt-10">
          <h2 className="font-display text-2xl">{heading}</h2>
          <ul className="mt-4 divide-y divide-sage-pale border-y border-sage-pale">
            {credits.map((c: PhotoCredit, i) => (
              <li key={c.file} className="py-3">
                <p className="font-semibold">
                  {t.photo} {i + 1}
                </p>
                <dl className="mt-1 grid gap-x-4 gap-y-1 sm:grid-cols-[auto_1fr]">
                  <dt className="font-semibold">{t.author}</dt>
                  <dd>{c.author}</dd>
                  <dt className="font-semibold">{t.license}</dt>
                  <dd>{c.license}</dd>
                  <dt className="font-semibold">{t.source}</dt>
                  <dd className="break-all">
                    <a className="underline underline-offset-2" href={c.source} target="_blank" rel="noopener noreferrer">
                      {c.source}
                    </a>
                  </dd>
                </dl>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}
