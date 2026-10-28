import type { Dictionary } from "@/i18n/get-dictionary";
import { Mail } from "@/components/icons";
import { ContactForm } from "./ContactForm";

/**
 * The form sits on the logo's picnic gingham. The negative bottom margin runs the cloth under the footer's hills:
 * -mb-16/sm:-mb-24 must equal the footer's mt-16/sm:mt-24 (Footer.tsx), or a cream strip shows between them.
 */
export function Contact({ dict }: { dict: Dictionary }) {
  const t = dict.contact;
  return (
    <section id="contact" aria-labelledby="contact-title" className="gingham -mb-16 pt-16 pb-32 sm:-mb-24 sm:pb-44 lg:pt-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-16">
        <div>
          <h2 id="contact-title" className="font-display text-4xl leading-tight text-balance sm:text-5xl">
            {t.title}
          </h2>
          <p className="mt-4 max-w-lg text-lg leading-relaxed">{t.lead}</p>
          <a
            href={`mailto:${dict.footer.email}`}
            className="mt-6 inline-flex min-h-11 items-center gap-2 font-semibold underline decoration-sun decoration-2 underline-offset-4"
          >
            <Mail className="size-5" />
            {dict.footer.email}
          </a>
        </div>
        <div className="rounded-3xl bg-cream p-6 shadow-[0_2px_0_#c9d8b0,0_18px_40px_-24px_rgb(47_93_58/0.45)] sm:p-10">
          <ContactForm t={t} />
        </div>
      </div>
    </section>
  );
}
