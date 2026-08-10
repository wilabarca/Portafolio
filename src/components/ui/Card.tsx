import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  /** Microinteracción hover/lift, usada en tarjetas interactivas (proyectos, experiencia). */
  hover?: boolean;
  /** Microinteracción hover/scale (`hover:scale-[1.02]`), alternativa a `hover` para grids compactos (bento). */
  scaleOnHover?: boolean;
  /** Resplandor de borde (glow effect) al pasar el cursor, combinable con `hover`/`scaleOnHover`. */
  glow?: boolean;
}

/**
 * Contenedor "glass" reutilizable: fondo semi-transparente + backdrop-blur,
 * borde tenue y transición fluida de tema. Base de las tarjetas de
 * proyectos, habilidades, experiencia y contacto.
 */
export function Card({
  children,
  className,
  id,
  hover = false,
  scaleOnHover = false,
  glow = false,
}: CardProps) {
  return (
    <div
      id={id}
      className={cn(
        "theme-transition relative rounded-2xl border border-border-subtle bg-surface-glass shadow-sm backdrop-blur-xl transition-all duration-200",
        hover && "hover:-translate-y-1 hover:shadow-lg",
        scaleOnHover && "hover:scale-[1.02] hover:shadow-lg",
        glow && "hover:border-accent-from/50 hover:shadow-[0_0_28px_-6px_var(--accent-glow)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
