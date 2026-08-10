"use client";

import { useLanguage } from "@/components/language/LanguageProvider";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { languages, softSkills } from "../data/education";

export function LanguagesAndSoftSkills() {
  const { locale, t } = useLanguage();

  return (
    <section className="grid grid-cols-1 gap-10 sm:grid-cols-2">
      <div className="flex flex-col gap-4">
        <SectionHeading>{t.headings.languages}</SectionHeading>
        <ul className="flex flex-col gap-1 text-sm text-zinc-600 dark:text-zinc-400">
          {languages.map((lang) => (
            <li key={lang.name.es}>
              {lang.name[locale]} — {lang.level[locale]}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-4">
        <SectionHeading>{t.headings.softSkills}</SectionHeading>
        <div className="flex flex-wrap gap-2">
          {softSkills[locale].map((skill) => (
            <Badge key={skill}>{skill}</Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
