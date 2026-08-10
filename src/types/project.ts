export interface ProjectLinks {
  repoUrl?: string;
  demoUrl?: string;
}

export interface Project {
  id: string;
  name: string;
  role: string;
  description: string;
  /** Patrón arquitectónico de la app, mostrado como badge destacado (p. ej. "MVVM + Clean Architecture"). */
  architecture: string;
  /** Tecnologías del stack, mostradas como badges. */
  stack: string[];
  /** Puntos clave / highlights técnicos del proyecto. */
  highlights: string[];
  links?: ProjectLinks;
}
