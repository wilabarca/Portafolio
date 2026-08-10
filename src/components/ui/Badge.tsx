import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "architecture";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const VARIANT_STYLES: Record<BadgeVariant, string> = {
  default: "bg-black/6 text-zinc-800 dark:bg-white/8 dark:text-zinc-200",
  architecture:
    "border border-accent-from/30 bg-linear-to-r from-accent-from/10 to-accent-to/10 text-accent-from dark:text-accent-to",
};

/** Pastilla de texto reutilizable para stacks, arquitecturas y etiquetas sueltas. */
export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        VARIANT_STYLES[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
