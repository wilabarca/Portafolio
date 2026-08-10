import type { Profile } from "@/types";

/** Fuente de datos centralizada del perfil, reutilizada por Hero, Navbar y Contact. */
export const profile: Profile = {
  name: "Wilver Abarca Sánchez",
  title: "Ingeniero en Software",
  role: "Diseñador UI/UX & Desarrollador Full-Stack / Móvil",
  email: "wilverabarcasanchez9@gmail.com",
  phone: "961 667 4443",
  location: "Suchiapa, Chiapas",
  // TODO: reemplazar con la URL real del perfil de LinkedIn.
  // Mientras esté vacío, el botón de LinkedIn no se muestra.
  linkedinUrl: undefined,
};
