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
    specialty: { es: "Móvil", en: "Mobile" },
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
        "Diseño de interfaz intuitiva enfocada en el usuario, validada con prototipos en Figma.",
        "Arquitectura por features con separación de capas (Clean Architecture), pensada para escalar.",
        "Integración con servicios web (REST) para el catálogo de destinos y contenido regional.",
        "Gestión de estado con Provider / BLoC para los flujos de exploración y búsqueda.",
      ],
      en: [
        "Intuitive, user-focused interface design, validated with Figma prototypes.",
        "Feature-based architecture with layered separation (Clean Architecture), built to scale.",
        "Web service (REST) integration for the destinations catalog and regional content.",
        "State management with Provider / BLoC for exploration and search flows.",
      ],
    },
  },
  {
    id: "monitoreo-medicamentos",
    name: "App de Monitoreo de Medicamentos",
    specialty: { es: "Móvil", en: "Mobile" },
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
        "Prototipado de interfaces en Figma siguiendo lineamientos de Material Design.",
        "Gestión offline-first de los esquemas de medicación con Room Database.",
        "Arquitectura modular por capas (MVVM + Clean Architecture).",
        "Sistema de alertas y recordatorios en tiempo real para los tratamientos.",
      ],
      en: [
        "UI prototyping in Figma following Material Design guidelines.",
        "Offline-first management of medication schedules with Room Database.",
        "Modular, layered architecture (MVVM + Clean Architecture).",
        "Real-time alerts and reminders system for treatments.",
      ],
    },
  },
];
