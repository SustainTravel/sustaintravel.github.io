import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary, type Dictionary } from "@/i18n/get-dictionary";
import { Basket, Birds, CoinSprout, Coins, Family, Hands, Heart, Hills, Route, Signpost, Sprout, Sun } from "@/components/icons";

type Props = { params: Promise<{ locale: string }> };
type BlockKey = keyof Dictionary["businessModel"]["blocks"];

/**
 * DOM order is the phone reading order: the offer first, then who it is for and how they reach it, then what
 * runs it, then the money. From lg each block is placed on the classic canvas: five columns over a 50/50 base row
 * (a 10-column grid, so both rows share the same edges).
 */
const blocks: { key: BlockKey; Icon: typeof Sprout; place: string }[] = [
  { key: "valueProposition", Icon: Sprout, place: "md:col-span-2 lg:col-start-5 lg:row-span-2 lg:row-start-1" },
  { key: "customerSegments", Icon: Family, place: "lg:col-span-2 lg:col-start-9 lg:row-span-2 lg:row-start-1" },
  { key: "customerRelationships", Icon: Heart, place: "lg:col-span-2 lg:col-start-7 lg:row-start-1" },
  { key: "channels", Icon: Signpost, place: "lg:col-span-2 lg:col-start-7 lg:row-start-2" },
  { key: "keyActivities", Icon: Route, place: "lg:col-span-2 lg:col-start-3 lg:row-start-1" },
  { key: "keyResources", Icon: Basket, place: "lg:col-span-2 lg:col-start-3 lg:row-start-2" },
  { key: "keyPartners", Icon: Hands, place: "lg:col-span-2 lg:col-start-1 lg:row-span-2 lg:row-start-1" },
  { key: "revenueStreams", Icon: CoinSprout, place: "lg:col-span-5 lg:col-start-6 lg:row-start-3" },
  { key: "costStructure", Icon: Coins, place: "lg:col-span-5 lg:col-start-1 lg:row-start-3" },
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return getDictionary(locale).businessModel.meta;
}

export default async function BusinessModelPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale).businessModel;
  return (
    <>
      <section aria-labelledby="bmc-title" className="relative bg-meadow">
        <div className="relative mx-auto max-w-7xl px-5 pt-10 pb-16 sm:px-8 sm:pb-24 lg:pt-16">
          <Sun className="absolute top-6 right-5 size-10 sm:top-8 sm:right-10 sm:size-20 lg:top-14" />
          <Birds className="absolute top-32 right-36 hidden w-16 text-forest lg:block" />
          <p className="enter flex items-center gap-2 pr-12 font-semibold text-leaf sm:pr-0">
            <Sprout className="size-7 shrink-0" />
            {t.eyebrow}
          </p>
          <h1
            id="bmc-title"
            style={{ animationDelay: "60ms" }}
            className="enter mt-4 max-w-3xl font-display text-[2.25rem] leading-[1.05] text-balance text-bark sm:pr-24 sm:text-6xl lg:pr-0 lg:text-7xl"
          >
            {t.title}
          </h1>
          <p style={{ animationDelay: "140ms" }} className="enter mt-5 max-w-2xl text-lg leading-relaxed text-pretty text-bark sm:text-xl sm:leading-relaxed">
            {t.lead}
          </p>
        </div>
      </section>

      <div className="relative">
        <Hills colors={["#c9d8b0", "#ebeedb", "#f9f7eb"]} className="absolute bottom-full h-10 w-full sm:h-16" />
        <div className="mx-auto grid max-w-7xl gap-4 px-5 pt-4 pb-20 sm:px-8 md:grid-cols-2 lg:grid-cols-10 lg:pb-28">
          {blocks.map(({ key, Icon, place }) => {
            const block = t.blocks[key];
            const heart = key === "valueProposition";
            const wide = place.includes("col-span-5");
            // lg–xl the canvas columns are under 180 px wide, so the icon moves above the heading there.
            // The other full-height columns get a soft hill base on the canvas, so the three tall blocks read as one landscape.
            const tall = !heart && place.includes("row-span-2");
            return (
              <section
                key={key}
                aria-labelledby={`bmc-${key}`}
                className={`reveal reveal-card relative overflow-hidden rounded-3xl p-6 lg:max-xl:px-5 ${place} ${
                  heart ? "on-dark bg-forest pb-24 text-cream sm:pb-28 lg:pb-24" : "bg-meadow text-bark"
                } ${tall ? "lg:pb-20" : ""}`}
              >
                <div className={`flex items-center gap-3 ${heart ? "lg:flex-col lg:items-start" : wide ? "" : "lg:max-xl:flex-col lg:max-xl:items-start"}`}>
                  <span className="grid size-12 shrink-0 place-items-center rounded-full bg-cream ring-2 ring-forest/10">
                    <Icon className="size-8" />
                  </span>
                  <h2 id={`bmc-${key}`} className={`font-display leading-snug text-balance ${heart ? "text-3xl lg:max-xl:text-[1.375rem]" : "text-xl lg:max-xl:text-lg"}`}>
                    {block.title}
                  </h2>
                </div>
                <ul role="list" className={`mt-4 leading-snug ${heart ? "text-lg md:columns-2 lg:columns-1 lg:text-base" : ""} ${wide ? "sm:columns-2 md:columns-1 lg:columns-2" : ""}`}>
                  {block.items.map((item) => (
                    <li key={item} className="flex break-inside-avoid gap-2.5 py-1">
                      <span aria-hidden className={`mt-[0.5em] size-2 shrink-0 rounded-full ${heart ? "bg-sun" : "bg-sage"}`} />
                      {item}
                    </li>
                  ))}
                </ul>
                {heart && (
                  <Hills colors={["#495e35", "#8baa6b", "#c9d8b0"]} className="absolute inset-x-0 bottom-0 h-16 w-full sm:h-20" />
                )}
                {tall && (
                  <Hills colors={["#d4dfbe", "#c9d8b0", "#8baa6b"]} className="absolute inset-x-0 bottom-0 hidden h-16 w-full lg:block" />
                )}
              </section>
            );
          })}
        </div>
      </div>
    </>
  );
}
