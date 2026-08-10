import type { Localized } from "./locale";

export interface ExperienceItem {
  title: Localized;
  role: Localized;
  /** Tecnologías del stack: no se traducen. */
  stack: string;
  bullets: Localized<string[]>;
}
