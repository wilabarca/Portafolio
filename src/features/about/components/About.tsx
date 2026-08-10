import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { bio } from "../data/bio";

export function About() {
  return (
    <Section id="sobre-mi" className="gap-4">
      <SectionHeading>Sobre mí</SectionHeading>
      <p className="max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
        {bio}
      </p>
    </Section>
  );
}
