"use client";

import { useLanguage } from "@/components/language/LanguageProvider";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "../data/experience";
import { ExperienceEntry } from "./ExperienceEntry";

export function ExperienceSection() {
  const { t } = useLanguage();

  return (
    <Section id="experiencia">
      <SectionHeading>{t.headings.experience}</SectionHeading>
      <div className="flex flex-col gap-8">
        {experience.map((item) => (
          // Clave estable (es) independiente del idioma activo.
          <ExperienceEntry key={item.title.es} item={item} />
        ))}
      </div>
    </Section>
  );
}
