import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "../data/experience";
import { ExperienceEntry } from "./ExperienceEntry";

export function ExperienceSection() {
  return (
    <Section id="experiencia">
      <SectionHeading>Experiencia</SectionHeading>
      <div className="flex flex-col gap-8">
        {experience.map((item) => (
          <ExperienceEntry key={item.title} item={item} />
        ))}
      </div>
    </Section>
  );
}
