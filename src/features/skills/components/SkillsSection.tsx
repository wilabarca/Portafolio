"use client";

import { useLanguage } from "@/components/language/LanguageProvider";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skills } from "../data/skills";
import { SkillGroupCard } from "./SkillGroupCard";

export function SkillsSection() {
  const { t } = useLanguage();

  return (
    <Section id="habilidades">
      <SectionHeading>{t.headings.skills}</SectionHeading>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          // Clave estable (es) independiente del idioma activo, para no
          // remontar la tarjeta al alternar ES/EN.
          <SkillGroupCard key={group.category.es} group={group} />
        ))}
      </div>
    </Section>
  );
}
