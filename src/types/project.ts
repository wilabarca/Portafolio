import type { Localized } from "./locale";

export interface ProjectLinks {
  repoUrl?: string;
  demoUrl?: string;
}

export interface Project {
  id: string;
  /** Nombre del proyecto: no se traduce. */
  name: string;
  role: Localized;
  description: Localized;
  /** Patrón arquitectónico de la app (p. ej. "MVVM + Clean Architecture"): término técnico, no se traduce. */
  architecture: string;
  /** Tecnologías del stack, mostradas como badges: no se traducen. */
  stack: string[];
  /** Puntos clave / highlights técnicos del proyecto. */
  highlights: Localized<string[]>;
  links?: ProjectLinks;
}
