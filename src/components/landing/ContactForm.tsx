"use client";

import { useEffect, useRef, useState, type FormEvent, type InputHTMLAttributes } from "react";
import type { Dictionary } from "@/i18n/get-dictionary";
import { Basket } from "@/components/icons";

type Field = "name" | "email" | "message";
type Errors = Partial<Record<Field, string>>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Demo form: validates in the page language, then shows a thank-you. Nothing is sent or stored. */
export function ContactForm({ t }: { t: Dictionary["contact"] }) {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const thanks = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    if (sent) thanks.current?.focus();
  }, [sent]);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const value = (f: Field) => (form.elements.namedItem(f) as HTMLInputElement).value.trim();
    const next: Errors = {};
    for (const f of ["name", "email", "message"] as const) if (!value(f)) next[f] = t.errors.required;
    if (!next.email && !EMAIL.test(value("email"))) next.email = t.errors.email;
    setErrors(next);
    const first = (["name", "email", "message"] as const).find((f) => next[f]);
    if (first) {
      (form.elements.namedItem(first) as HTMLElement).focus();
      return;
    }
    setSent(true);
  }

  if (sent)
    return (
      <div role="status" className="flex flex-col items-start gap-3 py-6">
        <Basket className="size-16" />
        <h3 ref={thanks} tabIndex={-1} className="font-display text-3xl outline-none">
          {t.successTitle}
        </h3>
        <p className="text-lg leading-relaxed">{t.success}</p>
      </div>
    );

  const input =
    "mt-1.5 block w-full rounded-xl border-2 border-forest/70 bg-white/70 px-4 py-3 text-base text-bark placeholder:text-leaf/70 focus:border-forest focus-visible:outline-offset-1 aria-[invalid=true]:border-terracotta";
  const field = (f: Field, label: string, props: InputHTMLAttributes<HTMLInputElement> = {}) => (
    <div>
      <label htmlFor={`contact-${f}`} className="font-semibold">
        {label}
      </label>
      <input
        id={`contact-${f}`}
        name={f}
        className={`${input} min-h-12`}
        aria-invalid={!!errors[f]}
        aria-describedby={errors[f] ? `contact-${f}-error` : undefined}
        {...props}
      />
      {errors[f] && <ErrorText id={`contact-${f}-error`}>{errors[f]}</ErrorText>}
    </div>
  );

  return (
    <form noValidate onSubmit={onSubmit} className="grid gap-5">
      {field("name", t.fields.name, { autoComplete: "name" })}
      {field("email", t.fields.email, { type: "email", autoComplete: "email", inputMode: "email" })}
      <div>
        <label htmlFor="contact-message" className="font-semibold">
          {t.fields.message}
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          className={`${input} resize-y`}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
        />
        {errors.message && <ErrorText id="contact-message-error">{errors.message}</ErrorText>}
      </div>
      <label className="flex cursor-pointer items-start gap-3 py-1">
        <input type="checkbox" name="newsletter" className="mt-0.5 size-6 shrink-0 accent-forest" />
        <span className="leading-snug">{t.fields.newsletter}</span>
      </label>
      <button
        type="submit"
        className="inline-flex min-h-12 items-center justify-center justify-self-start rounded-full bg-sun px-8 text-lg font-semibold text-bark transition-colors hover:bg-[#e39d36]"
      >
        {t.submit}
      </button>
    </form>
  );
}

function ErrorText({ id, children }: { id: string; children: string }) {
  return (
    <p id={id} className="mt-1.5 text-sm font-semibold text-[#9c4220]">
      {children}
    </p>
  );
}
