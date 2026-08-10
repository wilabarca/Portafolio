import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { languages, softSkills } from "../data/education";

export function LanguagesAndSoftSkills() {
  return (
    <section className="grid grid-cols-1 gap-10 sm:grid-cols-2">
      <div className="flex flex-col gap-4">
        <SectionHeading>Idiomas</SectionHeading>
        <ul className="flex flex-col gap-1 text-sm text-zinc-600 dark:text-zinc-400">
          {languages.map((lang) => (
            <li key={lang.name}>
              {lang.name} — {lang.level}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-4">
        <SectionHeading>Habilidades Blandas</SectionHeading>
        <div className="flex flex-wrap gap-2">
          {softSkills.map((skill) => (
            <Badge key={skill}>{skill}</Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
