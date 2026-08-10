import type { Locale } from "@/types";

const STORAGE_KEY = "portfolio-locale";
export const DEFAULT_LOCALE: Locale = "es";

type Listener = () => void;

let currentLocale: Locale = DEFAULT_LOCALE;
let hydratedFromStorage = false;
const listeners = new Set<Listener>();

function readStoredLocale(): Locale {
  if (typeof window === "undefined") return DEFAULT_LOCALE;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "en" ? "en" : DEFAULT_LOCALE;
}

/**
 * Store externo mínimo (patrón `useSyncExternalStore`) para el idioma
 * activo. Se evita el patrón `useState` + `setState` en un `useEffect` de
 * "montaje" (ver `react-hooks/set-state-in-effect`): la hidratación desde
 * `localStorage` ocurre de forma perezosa dentro de `getSnapshot`.
 */
export function subscribe(listener: Listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function getSnapshot(): Locale {
  if (!hydratedFromStorage) {
    currentLocale = readStoredLocale();
    hydratedFromStorage = true;
  }
  return currentLocale;
}

export function getServerSnapshot(): Locale {
  return DEFAULT_LOCALE;
}

export function setStoredLocale(locale: Locale) {
  currentLocale = locale;
  hydratedFromStorage = true;
  if (typeof window !== "undefined") {
    window.localStorage.setItem(STORAGE_KEY, locale);
  }
  listeners.forEach((listener) => listener());
}
