"use client";

import { useLanguage } from "@/components/language/LanguageProvider";
import { Card } from "@/components/ui/Card";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { cn } from "@/lib/utils";
import type { SkillGroup } from "@/types";

interface SkillCardProps {
  group: SkillGroup;
}

export function SkillCard({ group }: SkillCardProps) {
  const { locale } = useLanguage();

  return (
    <Card
      hover
      glow
      className={cn(
        "p-5",
        group.highlight && "border-accent-from/30 bg-linear-to-br from-accent-from/10 to-accent-to/10",
      )}
    >
      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
        {group.category[locale]}
      </h3>
      {group.description && (
        <p className="mb-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          {group.description[locale]}
        </p>
      )}
      <div className="flex flex-wrap gap-2">
        {group.items.map((item) => (
          <SkillBadge key={item.name} name={item.name} icon={item.icon} />
        ))}
      </div>
    </Card>
  );
}
