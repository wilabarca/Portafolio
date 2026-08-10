import type { Localized } from "./locale";

export interface NavLink {
  href: string;
  label: Localized;
}

export interface Profile {
  name: string;
  /** Titulación profesional (p. ej. "Ingeniero en Software" / "Software Engineer"). */
  title: Localized;
  /** Rol / especialidad mostrada bajo el título. */
  role: Localized;
  email: string;
  phone: string;
  location: string;
  /** URL completa del perfil de LinkedIn. Si no se define, el botón/ícono correspondiente no se renderiza. */
  linkedinUrl?: string;
}

export interface EducationItem {
  /** Nombre de la institución: no se traduce (nombre propio). */
  institution: string;
  program: Localized;
}

export interface LanguageItem {
  name: Localized;
  level: Localized;
}
