import type { Project } from "@/types";

/**
 * Fuente de datos centralizada de proyectos. Cada entrada alimenta una
 * `ProjectCard` en la sección Proyectos del portafolio.
 */
export const projects: Project[] = [
  {
    id: "explorachiapas",
    name: "ExploraChiapas",
    role: "Diseñador UI/UX & Desarrollador Móvil Lead",
    description:
      "Aplicación móvil multiplataforma orientada al turismo y la exploración de destinos regionales de Chiapas.",
    architecture: "Feature-First + Clean Architecture",
    stack: ["Flutter", "Dart", "Provider / BLoC", "REST API"],
    highlights: [
      "Diseño de prototipos UX/UI y sistema de componentes en Figma.",
      "Arquitectura por features con separación de capas (Clean Architecture).",
      "Gestión de estado con Provider / BLoC para flujos de exploración y búsqueda.",
      "Consumo de servicios REST para catálogo de destinos y contenido regional.",
    ],
  },
  {
    id: "monitoreo-medicamentos",
    name: "App de Monitoreo de Medicamentos",
    role: "Diseñador UI/UX & Desarrollador Móvil Lead",
    description:
      "Aplicación nativa en Kotlin para la gestión, seguimiento y alertas en tiempo real de esquemas de medicación.",
    architecture: "MVVM + Clean Architecture",
    stack: ["Kotlin", "Jetpack Compose", "Room Database", "StateFlow / Coroutines"],
    highlights: [
      "Diseño de interfaces en Jetpack Compose siguiendo lineamientos de Material Design.",
      "Persistencia local de esquemas de medicación con Room Database.",
      "Manejo de estado reactivo y asincronía con StateFlow y Coroutines.",
      "Sistema de alertas y recordatorios en tiempo real para tratamientos.",
    ],
  },
];
