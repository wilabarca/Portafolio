"use client";

import { Languages as LanguagesIcon } from "lucide-react";
import { useLanguage } from "@/components/language/LanguageProvider";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import { languages } from "../data/education";

interface LanguagesCardProps {
  className?: string;
}

/** Tarjeta compacta de Idiomas: insignias con idioma + nivel de dominio. */
export function LanguagesCard({ className }: LanguagesCardProps) {
  const { locale, t } = useLanguage();

  return (
    <Card hover glow className={cn("flex h-full flex-col gap-3 p-6", className)}>
      <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
        <LanguagesIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
        {t.headings.languages}
      </div>
      <div className="flex flex-wrap gap-2">
        {languages.map((lang) => (
          <span
            key={lang.name.es}
            className="inline-flex items-center gap-1.5 rounded-full bg-black/6 px-3 py-1.5 text-sm font-medium text-zinc-800 dark:bg-white/8 dark:text-zinc-200"
          >
            {lang.name[locale]}
            <span className="text-xs font-normal text-zinc-500 dark:text-zinc-400">
              · {lang.level[locale]}
            </span>
          </span>
        ))}
      </div>
    </Card>
  );
}
