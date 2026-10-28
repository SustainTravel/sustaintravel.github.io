import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import Image from "next/image";
import { licenseUrl, photoCredits } from "@/content/photo-credits";
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
  const dict = getDictionary(locale);
  const t = dict.credits;
  const link = "inline-flex min-h-11 min-w-11 items-center underline underline-offset-2 hover:decoration-2";

  const groups = [
    { heading: t.general, credits: photoCredits.filter((c) => !c.file.startsWith("/images/tours/")) },
    ...tours.map((tour) => ({
      heading: tour.title[locale],
      credits: photoCredits.filter((c) => tour.images.includes(c.file)),
    })),
  ];

  return (
    <div className="mx-auto max-w-4xl px-5 py-12 text-forest">
      <h1 className="font-display text-4xl text-balance sm:text-5xl">{t.title}</h1>
      <p className="mt-4 max-w-2xl text-lg text-pretty">{t.lead}</p>
      {groups.map(({ heading, credits }) => (
        <section key={heading} className="mt-10">
          <h2 className="font-display text-2xl">{heading}</h2>
          <ul className="mt-4 divide-y divide-sage-pale border-y border-sage-pale">
            {credits.map((c) => {
              const deed = licenseUrl(c.license);
              return (
                <li key={c.file} className="flex gap-4 py-4">
                  <Image
                    src={c.file}
                    alt=""
                    width={96}
                    height={72}
                    sizes="96px"
                    className="h-18 w-24 shrink-0 rounded-lg bg-sage-pale object-cover"
                  />
                  <dl className="grid min-w-0 content-start gap-x-4 gap-y-1 sm:grid-cols-[auto_1fr]">
                    <dt className="font-semibold">{t.author}</dt>
                    <dd className="break-words">{c.author}</dd>
                    <dt className="font-semibold">{t.license}</dt>
                    <dd>
                      {deed ? (
                        <a className={link} href={deed} target="_blank" rel="noopener noreferrer license">
                          {c.license}
                          <span className="sr-only"> {dict.common.newTab}</span>
                        </a>
                      ) : (
                        c.license
                      )}
                      {/* BY licences ask that changes are indicated; every photo was resized to 1600 px. */}
                      {c.license.includes("BY") && <span className="block pb-1 text-sm text-leaf">{t.resized}</span>}
                    </dd>
                    <dt className="font-semibold">{t.source}</dt>
                    <dd>
                      <a className={link} href={c.source} target="_blank" rel="noopener noreferrer">
                        {t.viewSource}
                        <span className="sr-only"> {dict.common.newTab}</span>
                      </a>
                    </dd>
                  </dl>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </div>
  );
}
