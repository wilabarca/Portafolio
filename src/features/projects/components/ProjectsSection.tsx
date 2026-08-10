"use client";

import { useLanguage } from "@/components/language/LanguageProvider";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectsSection() {
  const { t } = useLanguage();

  return (
    <Section id="proyectos">
      <SectionHeading>{t.headings.projects}</SectionHeading>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}
