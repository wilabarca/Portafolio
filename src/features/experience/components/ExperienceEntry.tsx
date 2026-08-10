"use client";

import { useLanguage } from "@/components/language/LanguageProvider";
import type { ExperienceItem } from "@/types";

interface ExperienceEntryProps {
  item: ExperienceItem;
}

export function ExperienceEntry({ item }: ExperienceEntryProps) {
  const { locale } = useLanguage();

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-lg font-semibold text-black dark:text-zinc-50">
          {item.title[locale]}
        </h3>
        <span className="text-sm text-zinc-500 dark:text-zinc-400">
          {item.role[locale]}
        </span>
      </div>
      <p className="text-sm text-zinc-500 dark:text-zinc-400">{item.stack}</p>
      <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
        {item.bullets[locale].map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
}
