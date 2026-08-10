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
  /** Enlace `wa.me` (WhatsApp) con el número en formato internacional. Si no se define, el ícono no se renderiza. */
  whatsappUrl?: string;
  /** Ruta pública al CV en PDF (p. ej. "/CV_Wilver_Abarca.pdf"). Si no se define, el botón de descarga no se renderiza. */
  cvUrl?: string;
  /** Nombre de archivo sugerido al descargar el CV (atributo `download`). */
  cvFileName?: string;
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
