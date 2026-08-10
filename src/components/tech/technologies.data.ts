import {
  SiAndroidstudio,
  SiDart,
  SiDocker,
  SiFigma,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiGithub,
  SiKotlin,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import type { Technology } from "@/types";

/** Fuente de datos centralizada del stack tecnológico mostrado en TechnologyIcons. */
export const technologies: Technology[] = [
  { name: "Kotlin", icon: SiKotlin, category: "Móvil" },
  { name: "Flutter", icon: SiFlutter, category: "Móvil" },
  { name: "Dart", icon: SiDart, category: "Móvil" },
  { name: "React", icon: SiReact, category: "Frontend" },
  { name: "Next.js", icon: SiNextdotjs, category: "Frontend" },
  { name: "Vue.js", icon: SiVuedotjs, category: "Frontend" },
  { name: "TypeScript", icon: SiTypescript, category: "Frontend" },
  { name: "Tailwind CSS", icon: SiTailwindcss, category: "Frontend" },
  { name: "Figma", icon: SiFigma, category: "Herramientas & UI/UX" },
  { name: "Git", icon: SiGit, category: "Herramientas & UI/UX" },
  { name: "GitHub", icon: SiGithub, category: "Herramientas & UI/UX" },
  { name: "Docker", icon: SiDocker, category: "Herramientas & UI/UX" },
  { name: "Firebase", icon: SiFirebase, category: "Herramientas & UI/UX" },
  { name: "Android Studio", icon: SiAndroidstudio, category: "Herramientas & UI/UX" },
];
