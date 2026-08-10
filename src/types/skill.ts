import type { ComponentType } from "react";
import type { Localized } from "./locale";

/** Ícono de habilidad: acepta tanto componentes de react-icons como de lucide-react. */
export type SkillIcon = ComponentType<{ className?: string }>;

export interface SkillItem {
  /** Nombre de la tecnología: no se traduce (nombre propio/marca). */
  name: string;
  icon?: SkillIcon;
}

export interface SkillGroup {
  category: Localized;
  /** Texto descriptivo opcional para categorías sin badges puntuales de tecnología (p. ej. Ciberseguridad, Diseño UI/UX). */
  description?: Localized;
  items: SkillItem[];
  /** Marca el grupo como destacado en la UI (p. ej. la categoría Móvil). */
  highlight?: boolean;
}
