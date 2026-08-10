import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
}

/** Envoltorio estándar de sección (espaciado vertical consistente entre módulos de la página). */
export function Section({ id, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("flex flex-col gap-6", className)}>
      {children}
    </section>
  );
}
