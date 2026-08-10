import type { SkillIcon } from "@/types";

interface SkillBadgeProps {
  name: string;
  icon?: SkillIcon;
}

/** Badge global de habilidad: ícono vectorial oficial (react-icons/lucide) + nombre de la tecnología. */
export function SkillBadge({ name, icon: Icon }: SkillBadgeProps) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-black/6 px-3 py-1 text-xs font-medium text-zinc-800 dark:bg-white/8 dark:text-zinc-200">
      {Icon && <Icon className="h-3.5 w-3.5 shrink-0" />}
      {name}
    </span>
  );
}
