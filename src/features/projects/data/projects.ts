import type { Project } from "@/types";

/**
 * Fuente de datos centralizada de proyectos. Cada entrada alimenta una
 * `ProjectCard` en la sección Proyectos del portafolio.
 *
 * `links.repoUrl` / `links.demoUrl` son opcionales: cuando se agregan, la
 * tarjeta muestra el acceso directo correspondiente; mientras no existan,
 * `ProjectCard` los omite en vez de enlazar a un destino inválido.
 * TODO: agregar los repositorios reales de ExploraChiapas y de la app de
 * Monitoreo de Medicamentos en cuanto estén disponibles.
 */
export const projects: Project[] = [
  {
    id: "explorachiapas",
    name: "ExploraChiapas",
    role: "Diseñador UI/UX & Desarrollador Móvil",
    description:
      "Aplicación móvil multiplataforma para el descubrimiento de destinos turísticos y experiencias regionales de Chiapas.",
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
    role: "Diseñador UI/UX & Desarrollador Móvil",
    description:
      "Aplicación nativa en Kotlin orientada al seguimiento riguroso de esquemas médicos, con alertas y recordatorios locales.",
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
