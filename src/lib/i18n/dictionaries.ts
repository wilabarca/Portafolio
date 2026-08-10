import type { Locale } from "@/types";

export interface Dictionary {
  nav: {
    sobreMi: string;
    stack: string;
    habilidades: string;
    proyectos: string;
    experiencia: string;
    contacto: string;
  };
  hero: {
    ctaProjects: string;
    ctaContact: string;
  };
  headings: {
    stack: string;
    about: string;
    skills: string;
    projects: string;
    experience: string;
    education: string;
    languages: string;
    softSkills: string;
    contact: string;
  };
  contact: {
    intro: string;
    linkedin: string;
    whatsapp: string;
  };
  projectCard: {
    repo: string;
    demo: string;
  };
  footer: {
    rights: string;
  };
  themeToggle: {
    toLight: string;
    toDark: string;
  };
  languageToggle: {
    label: string;
  };
  linkedinButton: {
    ariaLabel: string;
  };
}

export const dictionaries: Record<Locale, Dictionary> = {
  es: {
    nav: {
      sobreMi: "Sobre mí",
      stack: "Stack",
      habilidades: "Habilidades",
      proyectos: "Proyectos",
      experiencia: "Experiencia",
      contacto: "Contacto",
    },
    hero: {
      ctaProjects: "Ver proyectos",
      ctaContact: "Contactarme",
    },
    headings: {
      stack: "Stack Tecnológico",
      about: "Sobre mí",
      skills: "Habilidades Técnicas",
      projects: "Proyectos",
      experience: "Experiencia",
      education: "Educación",
      languages: "Idiomas",
      softSkills: "Habilidades Blandas",
      contact: "Contacto",
    },
    contact: {
      intro:
        "¿Interesado en colaborar o tienes una oportunidad para conversar? Escríbeme.",
      linkedin: "LinkedIn",
      whatsapp: "Escribir por WhatsApp",
    },
    projectCard: {
      repo: "Repositorio",
      demo: "Demo",
    },
    footer: {
      rights: "Todos los derechos reservados.",
    },
    themeToggle: {
      toLight: "Cambiar a tema claro",
      toDark: "Cambiar a tema oscuro",
    },
    languageToggle: {
      label: "Cambiar idioma",
    },
    linkedinButton: {
      ariaLabel: "Abrir perfil de LinkedIn en una nueva pestaña",
    },
  },
  en: {
    nav: {
      sobreMi: "About",
      stack: "Stack",
      habilidades: "Skills",
      proyectos: "Projects",
      experiencia: "Experience",
      contacto: "Contact",
    },
    hero: {
      ctaProjects: "View projects",
      ctaContact: "Contact me",
    },
    headings: {
      stack: "Tech Stack",
      about: "About me",
      skills: "Technical Skills",
      projects: "Projects",
      experience: "Experience",
      education: "Education",
      languages: "Languages",
      softSkills: "Soft Skills",
      contact: "Contact",
    },
    contact: {
      intro:
        "Interested in collaborating or have an opportunity to discuss? Reach out.",
      linkedin: "LinkedIn",
      whatsapp: "Message on WhatsApp",
    },
    projectCard: {
      repo: "Repository",
      demo: "Demo",
    },
    footer: {
      rights: "All rights reserved.",
    },
    themeToggle: {
      toLight: "Switch to light theme",
      toDark: "Switch to dark theme",
    },
    languageToggle: {
      label: "Switch language",
    },
    linkedinButton: {
      ariaLabel: "Open LinkedIn profile in a new tab",
    },
  },
};
