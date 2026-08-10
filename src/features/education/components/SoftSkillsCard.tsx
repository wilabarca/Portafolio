"use client";

import { Puzzle, Sparkles, Users, Zap } from "lucide-react";
import { useLanguage } from "@/components/language/LanguageProvider";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import { softSkills } from "../data/education";

interface SoftSkillsCardProps {
  className?: string;
}

// Ícono por posición: el orden de `softSkills` es estable en ambos idiomas
// (Trabajo en Equipo, Resolución de Problemas, Adaptabilidad, Aprendizaje Rápido).
const SOFT_SKILL_ICONS = [Users, Puzzle, Sparkles, Zap];

/** Tarjeta compacta de Habilidades Blandas: píldoras interactivas con ícono. */
export function SoftSkillsCard({ className }: SoftSkillsCardProps) {
  const { locale, t } = useLanguage();

  return (
    <Card hover glow className={cn("flex h-full flex-col gap-3 p-6", className)}>
      <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
        <Sparkles className="h-4 w-4 shrink-0" aria-hidden="true" />
        {t.headings.softSkills}
      </div>
      <div className="flex flex-wrap gap-2">
        {softSkills[locale].map((skill, index) => {
          const Icon = SOFT_SKILL_ICONS[index % SOFT_SKILL_ICONS.length];
          return (
            <span
              key={skill}
              className="inline-flex items-center gap-1.5 rounded-full bg-black/6 px-3 py-1.5 text-sm font-medium text-zinc-800 transition-transform duration-150 hover:scale-[1.05] dark:bg-white/8 dark:text-zinc-200"
            >
              <Icon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              {skill}
            </span>
          );
        })}
      </div>
    </Card>
  );
}
