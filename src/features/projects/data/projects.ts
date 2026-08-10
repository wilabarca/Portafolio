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
    role: {
      es: "Diseñador UI/UX & Desarrollador Móvil",
      en: "UI/UX Designer & Mobile Developer",
    },
    description: {
      es: "Aplicación móvil multiplataforma para el descubrimiento de destinos turísticos y experiencias regionales de Chiapas.",
      en: "Cross-platform mobile app for discovering tourist destinations and regional experiences in Chiapas.",
    },
    architecture: "Feature-First + Clean Architecture",
    stack: ["Flutter", "Dart", "Provider / BLoC", "REST API"],
    highlights: {
      es: [
        "Diseño de prototipos UX/UI y sistema de componentes en Figma.",
        "Arquitectura por features con separación de capas (Clean Architecture).",
        "Gestión de estado con Provider / BLoC para flujos de exploración y búsqueda.",
        "Consumo de servicios REST para catálogo de destinos y contenido regional.",
      ],
      en: [
        "UX/UI prototyping and component system design in Figma.",
        "Feature-based architecture with layered separation (Clean Architecture).",
        "State management with Provider / BLoC for exploration and search flows.",
        "REST service consumption for the destinations catalog and regional content.",
      ],
    },
  },
  {
    id: "monitoreo-medicamentos",
    name: "App de Monitoreo de Medicamentos",
    role: {
      es: "Diseñador UI/UX & Desarrollador Móvil",
      en: "UI/UX Designer & Mobile Developer",
    },
    description: {
      es: "Aplicación nativa en Kotlin orientada al seguimiento riguroso de esquemas médicos, con alertas y recordatorios locales.",
      en: "Native Kotlin app focused on rigorous tracking of medication schedules, with local alerts and reminders.",
    },
    architecture: "MVVM + Clean Architecture",
    stack: ["Kotlin", "Jetpack Compose", "Room Database", "StateFlow / Coroutines"],
    highlights: {
      es: [
        "Diseño de interfaces en Jetpack Compose siguiendo lineamientos de Material Design.",
        "Persistencia local de esquemas de medicación con Room Database.",
        "Manejo de estado reactivo y asincronía con StateFlow y Coroutines.",
        "Sistema de alertas y recordatorios en tiempo real para tratamientos.",
      ],
      en: [
        "UI design in Jetpack Compose following Material Design guidelines.",
        "Local persistence of medication schedules with Room Database.",
        "Reactive state and asynchrony handling with StateFlow and Coroutines.",
        "Real-time alerts and reminders system for treatments.",
      ],
    },
  },
];
