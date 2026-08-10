import type { Localized } from "./locale";

export interface SkillGroup {
  category: Localized;
  /** Nombres de tecnologías: no se traducen (nombres propios/marcas). */
  items: string[];
  /** Marca el grupo como destacado en la UI (p. ej. la nueva categoría Móvil). */
  highlight?: boolean;
}
