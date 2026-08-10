import type { ExperienceItem } from "@/types";

export const experience: ExperienceItem[] = [
  {
    title: { es: "Punto de Venta - Ropa", en: "Clothing Point of Sale" },
    role: { es: "Frontend", en: "Frontend" },
    stack: "React.js, CSS, Figma",
    bullets: {
      es: [
        "Creación de prototipos interactivos en Figma para validación de UX/UI.",
        "Diseño responsivo y optimización de interfaces.",
        "Implementación de componentes React.js basados en diseños Figma.",
        "Despliegue seguro del frontend en AWS.",
      ],
      en: [
        "Built interactive Figma prototypes for UX/UI validation.",
        "Responsive design and interface optimization.",
        "Implemented React.js components based on Figma designs.",
        "Secure frontend deployment on AWS.",
      ],
    },
  },
  {
    title: { es: "Administrador de Tareas", en: "Task Manager" },
    role: { es: "Backend", en: "Backend" },
    stack: "FastAPI, JWT, MongoDB, PostgreSQL",
    bullets: {
      es: [
        "Desarrollo de API RESTful.",
        "Implementación de autenticación con JWT.",
        "Despliegue de la API y su base de datos en AWS.",
        "Pruebas de API con Postman.",
      ],
      en: [
        "Developed a RESTful API.",
        "Implemented JWT authentication.",
        "Deployed the API and its database on AWS.",
        "API testing with Postman.",
      ],
    },
  },
  {
    title: {
      es: "CRUD de Usuarios con PHP + CodeIgniter",
      en: "User CRUD with PHP + CodeIgniter",
    },
    role: { es: "Backend y Frontend", en: "Backend & Frontend" },
    stack: "PHP (CodeIgniter), MySQL, HTML, CSS",
    bullets: {
      es: [
        "Desarrollo completo del backend y frontend para gestión de usuarios.",
        "Uso de patrón MVC con controladores, modelos y vistas.",
        "Validación de formularios y conexión a base de datos MySQL.",
        "Diseño responsivo con HTML y CSS sin frameworks externos.",
      ],
      en: [
        "Full backend and frontend development for user management.",
        "Used the MVC pattern with controllers, models and views.",
        "Form validation and MySQL database connection.",
        "Responsive design with plain HTML and CSS, no external frameworks.",
      ],
    },
  },
  {
    title: {
      es: "Mantenimiento y Optimización de Código",
      en: "Code Maintenance & Optimization",
    },
    role: { es: "Optimización de Código", en: "Code Optimization" },
    stack: "PHP",
    bullets: {
      es: [
        "Corrección de errores en aplicaciones web desarrolladas en PHP.",
        "Refactorización y mejora del código para optimizar rendimiento y mantenimiento.",
        "Actualización y adaptación de funcionalidades según requerimientos del equipo.",
        "Trabajo colaborativo con desarrolladores para aplicar buenas prácticas en el código.",
      ],
      en: [
        "Bug fixing in PHP-based web applications.",
        "Refactored and improved code to optimize performance and maintainability.",
        "Updated and adapted features according to team requirements.",
        "Collaborated with developers to apply coding best practices.",
      ],
    },
  },
];
