"use client";

import { GraduationCap } from "lucide-react";
import { useLanguage } from "@/components/language/LanguageProvider";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import { education } from "../data/education";

interface EducationCardProps {
  className?: string;
}

/** Tarjeta compacta de Educación: institución + título, con ícono. */
export function EducationCard({ className }: EducationCardProps) {
  const { locale, t } = useLanguage();

  return (
    <Card hover glow className={cn("flex h-full flex-col gap-3 p-6", className)}>
      <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
        <GraduationCap className="h-4 w-4 shrink-0" aria-hidden="true" />
        {t.headings.education}
      </div>
      <div>
        <h3 className="text-base font-semibold text-black dark:text-zinc-50">
          {education.institution}
        </h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          {education.program[locale]}
        </p>
      </div>
    </Card>
  );
}
