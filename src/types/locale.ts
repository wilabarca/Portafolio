export type Locale = "es" | "en";

/** Valor con una variante por idioma soportado (ES/EN). */
export type Localized<T = string> = Record<Locale, T>;
