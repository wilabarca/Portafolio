export interface SkillGroup {
  category: string;
  items: string[];
  /** Marca el grupo como destacado en la UI (p. ej. la nueva categoría Móvil). */
  highlight?: boolean;
}
