import type { IconType } from "react-icons";

export type TechCategory = "Móvil" | "Frontend" | "Herramientas & UI/UX";

export interface Technology {
  name: string;
  icon: IconType;
  category: TechCategory;
}
