"use client";

import { createContext, useContext, useEffect, useMemo, useSyncExternalStore } from "react";
import { dictionaries, type Dictionary } from "@/lib/i18n/dictionaries";
import {
  getServerSnapshot,
  getSnapshot,
  setStoredLocale,
  subscribe,
} from "@/lib/i18n/language-store";
import type { Locale } from "@/types";

interface LanguageContextValue {
  locale: Locale;
  t: Dictionary;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

/**
 * Provee el idioma activo (ES/EN) a todo el árbol vía Context, respaldado
 * por un store externo persistido en `localStorage`. El idioma por defecto
 * en el primer render (servidor y cliente) es español; tras la hidratación,
 * `useSyncExternalStore` sincroniza la preferencia guardada sin recurrir a
 * `setState` dentro de un efecto.
 */
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const locale = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  // Sincroniza el atributo `lang` del documento con el idioma activo
  // (efecto legítimo: actualiza un sistema externo, el DOM, a partir del
  // estado de React; no llama a setState).
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      t: dictionaries[locale],
      setLocale: setStoredLocale,
      toggleLocale: () => setStoredLocale(locale === "es" ? "en" : "es"),
    }),
    [locale],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage debe usarse dentro de <LanguageProvider>");
  }
  return ctx;
}
