import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skills } from "../data/skills";
import { SkillGroupCard } from "./SkillGroupCard";

export function SkillsSection() {
  return (
    <Section id="habilidades">
      <SectionHeading>Habilidades Técnicas</SectionHeading>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <SkillGroupCard key={group.category} group={group} />
        ))}
      </div>
    </Section>
  );
}
