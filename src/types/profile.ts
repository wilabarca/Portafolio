export interface NavLink {
  href: string;
  label: string;
}

export interface Profile {
  name: string;
  /** Titulación profesional (p. ej. "Ingeniero en Software"). */
  title: string;
  /** Rol / especialidad mostrada bajo el título (p. ej. "Diseñador UI/UX & Desarrollador Full-Stack / Móvil"). */
  role: string;
  email: string;
  phone: string;
  location: string;
  /** URL completa del perfil de LinkedIn. Si no se define, el botón/ícono correspondiente no se renderiza. */
  linkedinUrl?: string;
}

export interface EducationItem {
  institution: string;
  program: string;
}

export interface LanguageItem {
  name: string;
  level: string;
}
