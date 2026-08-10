"use client";

import { useLanguage } from "@/components/language/LanguageProvider";
import { Card } from "@/components/ui/Card";
import type { ExperienceItem } from "@/types";

interface ExperienceEntryProps {
  item: ExperienceItem;
}

export function ExperienceEntry({ item }: ExperienceEntryProps) {
  const { locale } = useLanguage();

  return (
    <Card hover glow className="flex flex-col gap-3 p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-black dark:text-zinc-50">
          {item.title[locale]}
        </h3>
        {/* Badge lateral con la especialidad (Frontend / Backend / etc.). */}
        <span className="theme-transition inline-flex shrink-0 items-center rounded-full border border-accent-from/30 bg-linear-to-r from-accent-from/10 to-accent-to/10 px-3 py-1 text-xs font-medium text-accent-from dark:text-accent-to">
          {item.role[locale]}
        </span>
      </div>
      <p className="text-sm text-zinc-500 dark:text-zinc-400">{item.stack}</p>
      <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
        {item.bullets[locale].map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </Card>
  );
}
