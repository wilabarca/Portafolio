"use client";

import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { ExternalLinkIcon } from "@/components/icons/ExternalLinkIcon";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { useLanguage } from "@/components/language/LanguageProvider";
import type { Project } from "@/types";
import { ArchitectureBadge } from "./ArchitectureBadge";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { locale, t } = useLanguage();
  const hasLinks = project.links?.repoUrl || project.links?.demoUrl;

  return (
    <Card hover className="flex flex-col gap-4 p-6">
      <div className="flex flex-col gap-1">
        <h3 className="text-lg font-semibold text-black dark:text-zinc-50">
          {project.name}
        </h3>
        <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
          {project.role[locale]}
        </p>
      </div>

      <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
        {project.description[locale]}
      </p>

      <ArchitectureBadge architecture={project.architecture} />

      <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
        {project.highlights[locale].map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>

      {hasLinks && (
        <div className="flex flex-wrap gap-4 pt-1 text-sm font-medium">
          {project.links?.repoUrl && (
            <a
              href={project.links.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-zinc-950 hover:underline dark:text-zinc-50"
            >
              <GithubIcon className="h-4 w-4" />
              {t.projectCard.repo}
            </a>
          )}
          {project.links?.demoUrl && (
            <a
              href={project.links.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-zinc-950 hover:underline dark:text-zinc-50"
            >
              <ExternalLinkIcon className="h-4 w-4" />
              {t.projectCard.demo}
            </a>
          )}
        </div>
      )}
    </Card>
  );
}
