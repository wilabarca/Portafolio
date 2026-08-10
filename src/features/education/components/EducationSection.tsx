import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { education } from "../data/education";

export function EducationSection() {
  return (
    <Section id="educacion" className="gap-4">
      <SectionHeading>Educación</SectionHeading>
      <div>
        <h3 className="text-base font-semibold text-black dark:text-zinc-50">
          {education.institution}
        </h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          {education.program}
        </p>
      </div>
    </Section>
  );
}
