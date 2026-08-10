import type { Profile } from "@/types";

/** Fuente de datos centralizada del perfil, reutilizada por Hero, Navbar y Contact. */
export const profile: Profile = {
  name: "Wilver Abarca Sánchez",
  title: {
    es: "Ingeniero en Software",
    en: "Software Engineer",
  },
  role: {
    es: "Diseñador UI/UX & Desarrollador Full-Stack / Móvil",
    en: "UI/UX Designer & Full-Stack / Mobile Developer",
  },
  email: "wilverabarcasanchez9@gmail.com",
  phone: "961 667 4443",
  location: "Suchiapa, Chiapas",
  linkedinUrl: "https://www.linkedin.com/in/wilver-abarca-sanchez-4749a33a2",
  // Número mexicano (961 667 4443) con lada país (+52), formato requerido por wa.me.
  whatsappUrl: "https://wa.me/529616674443",
};
