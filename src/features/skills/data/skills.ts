import type { SkillGroup } from "@/types";

export const skills: SkillGroup[] = [
  {
    category: "Frontend",
    items: ["React.js", "Angular", "HTML5", "CSS", "SCSS"],
  },
  {
    category: "Móvil",
    items: ["Kotlin", "Flutter", "Dart"],
    highlight: true,
  },
  {
    category: "Backend",
    items: ["Node.js (TypeScript)", "FastAPI", "Go (Gin)", "PHP (CodeIgniter)"],
  },
  {
    category: "Bases de Datos",
    items: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    category: "Despliegue y Seguridad",
    items: ["AWS", "JWT"],
  },
  {
    category: "Diseño y Herramientas",
    items: ["Figma", "Git", "GitHub", "Postman"],
  },
];
