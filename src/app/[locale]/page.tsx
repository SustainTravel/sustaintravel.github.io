import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { Hero } from "@/components/landing/Hero";
import { Different } from "@/components/landing/Different";
import { FeaturedTours } from "@/components/landing/FeaturedTours";
import { Values } from "@/components/landing/Values";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Impact } from "@/components/landing/Impact";
import { About } from "@/components/landing/About";
import { Testimonials } from "@/components/landing/Testimonials";
import { Faq } from "@/components/landing/Faq";
import { Contact } from "@/components/landing/Contact";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  return (
    <>
      <Hero locale={locale} dict={dict} />
      <Different dict={dict} />
      <FeaturedTours locale={locale} dict={dict} />
      <Values dict={dict} />
      <HowItWorks dict={dict} />
      <Impact dict={dict} />
      <About dict={dict} />
      <Testimonials dict={dict} />
      <Faq dict={dict} />
      <Contact dict={dict} />
    </>
  );
}
