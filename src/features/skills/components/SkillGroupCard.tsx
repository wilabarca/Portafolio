"use client";

import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { useLanguage } from "@/components/language/LanguageProvider";
import { cn } from "@/lib/utils";
import type { SkillGroup } from "@/types";

interface SkillGroupCardProps {
  group: SkillGroup;
}

export function SkillGroupCard({ group }: SkillGroupCardProps) {
  const { locale } = useLanguage();

  return (
    <Card
      hover
      className={cn(
        "p-5",
        group.highlight && "border-accent-from/30 bg-linear-to-br from-accent-from/10 to-accent-to/10",
      )}
    >
      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
        {group.category[locale]}
      </h3>
      <div className="flex flex-wrap gap-2">
        {group.items.map((item) => (
          <Badge key={item}>{item}</Badge>
        ))}
      </div>
    </Card>
  );
}
