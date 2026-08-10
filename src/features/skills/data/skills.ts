import { Cloud, Database, ShieldCheck, Webhook } from "lucide-react";
import {
  SiAndroidstudio,
  SiCss,
  SiDart,
  SiDocker,
  SiFastapi,
  SiFigma,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiGithub,
  SiGo,
  SiHtml5,
  SiJetpackcompose,
  SiJsonwebtokens,
  SiKotlin,
  SiKubernetes,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiOwasp,
  SiPhp,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiScrumalliance,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import type { SkillGroup } from "@/types";

/** Fuente de datos centralizada de habilidades técnicas, agrupadas por categoría. */
export const skills: SkillGroup[] = [
  {
    category: { es: "Desarrollo Móvil", en: "Mobile Development" },
    highlight: true,
    items: [
      { name: "Kotlin", icon: SiKotlin },
      { name: "Flutter", icon: SiFlutter },
      { name: "Dart", icon: SiDart },
      { name: "Jetpack Compose", icon: SiJetpackcompose },
    ],
  },
  {
    category: { es: "Frontend Web", en: "Frontend Web" },
    items: [
      { name: "React.js", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Vue.js", icon: SiVuedotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    category: { es: "Backend & APIs", en: "Backend & APIs" },
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Python", icon: SiPython },
      { name: "FastAPI", icon: SiFastapi },
      { name: "Go (Gin)", icon: SiGo },
      { name: "PHP (CodeIgniter)", icon: SiPhp },
      { name: "REST APIs", icon: Webhook },
      { name: "JWT", icon: SiJsonwebtokens },
    ],
  },
  {
    category: { es: "Diseño UI/UX", en: "UI/UX Design" },
    description: {
      es: "Prototipado interactivo, diseño de interfaces responsivas y sistemas de diseño.",
      en: "Interactive prototyping, responsive interface design and design systems.",
    },
    items: [{ name: "Figma", icon: SiFigma }],
  },
  {
    category: { es: "Ciberseguridad", en: "Cybersecurity" },
    description: {
      es: "Implementación de controles de seguridad y mejores prácticas de autenticación.",
      en: "Implementation of security controls and authentication best practices.",
    },
    items: [
      { name: "JWT", icon: SiJsonwebtokens },
      { name: "OWASP", icon: SiOwasp },
      { name: "Auth segura", icon: ShieldCheck },
    ],
  },
  {
    category: { es: "Bases de Datos & Persistencia", en: "Databases & Persistence" },
    items: [
      { name: "Room Database", icon: Database },
      { name: "Firebase", icon: SiFirebase },
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
    ],
  },
  {
    category: { es: "Herramientas, DevOps & Metodologías", en: "Tools, DevOps & Methodologies" },
    items: [
      { name: "Docker", icon: SiDocker },
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Postman", icon: SiPostman },
      { name: "Android Studio", icon: SiAndroidstudio },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "AWS", icon: Cloud },
      { name: "CachyOS / Linux", icon: SiLinux },
      { name: "Scrum / Ágil", icon: SiScrumalliance },
    ],
  },
];
