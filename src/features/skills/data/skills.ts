import type { SkillGroup } from "@/types";

export const skills: SkillGroup[] = [
  {
    category: { es: "Frontend", en: "Frontend" },
    items: ["React.js", "Angular", "HTML5", "CSS", "SCSS"],
  },
  {
    category: { es: "Móvil", en: "Mobile" },
    items: ["Kotlin", "Flutter", "Dart"],
    highlight: true,
  },
  {
    category: { es: "Backend", en: "Backend" },
    items: ["Node.js (TypeScript)", "FastAPI", "Go (Gin)", "PHP (CodeIgniter)"],
  },
  {
    category: { es: "Bases de Datos", en: "Databases" },
    items: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    category: { es: "Despliegue y Seguridad", en: "Deployment & Security" },
    items: ["AWS", "JWT"],
  },
  {
    category: { es: "Diseño y Herramientas", en: "Design & Tools" },
    items: ["Figma", "Git", "GitHub", "Postman"],
  },
];
