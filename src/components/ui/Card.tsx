import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  /** Microinteracción hover/lift, usada en tarjetas interactivas (proyectos, habilidades). */
  hover?: boolean;
}

/**
 * Contenedor "glass" reutilizable: fondo semi-transparente + backdrop-blur,
 * borde tenue y transición fluida de tema. Base de las tarjetas de
 * proyectos, habilidades y contacto.
 */
export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        "theme-transition rounded-2xl border border-border-subtle bg-surface-glass shadow-sm backdrop-blur-xl transition-transform duration-200",
        hover && "hover:-translate-y-1 hover:shadow-lg",
        className,
      )}
    >
      {children}
    </div>
  );
}
