"use client";

import { useLanguage } from "@/components/language/LanguageProvider";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { bio } from "../data/bio";

export function About() {
  const { locale, t } = useLanguage();

  return (
    <Section id="sobre-mi" className="gap-4">
      <SectionHeading>{t.headings.about}</SectionHeading>
      <p className="max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
        {bio[locale]}
      </p>
    </Section>
  );
}
