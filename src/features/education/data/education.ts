import type { EducationItem, Localized, LanguageItem } from "@/types";

export const education: EducationItem = {
  institution: "Universidad Politécnica de Chiapas",
  program: { es: "Ingeniería en Software", en: "Software Engineering" },
};

export const languages: LanguageItem[] = [
  { name: { es: "Español", en: "Spanish" }, level: { es: "Nativo", en: "Native" } },
  { name: { es: "Inglés", en: "English" }, level: { es: "Intermedio", en: "Intermediate" } },
];

export const softSkills: Localized<string[]> = {
  es: ["Trabajo en Equipo", "Resolución de Problemas", "Adaptabilidad", "Aprendizaje Rápido"],
  en: ["Teamwork", "Problem Solving", "Adaptability", "Fast Learning"],
};
