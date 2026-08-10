"use client";

import { useLanguage } from "@/components/language/LanguageProvider";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactLinks } from "./ContactLinks";

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <Section id="contacto">
      <Card className="flex flex-col gap-4 p-8">
        <SectionHeading>{t.headings.contact}</SectionHeading>
        <p className="max-w-xl text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          {t.contact.intro}
        </p>
        <ContactLinks
          className="flex flex-col gap-2 text-sm text-zinc-600 dark:text-zinc-400"
          itemClassName="w-fit"
        />
      </Card>
    </Section>
  );
}
