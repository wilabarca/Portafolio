"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";

/** Selector ES/EN con microinteracción de cambio, junto al ThemeToggle en el Navbar. */
export function LanguageToggle() {
  const { locale, toggleLocale, t } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label={t.languageToggle.label}
      className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-border-subtle bg-surface-glass text-xs font-semibold text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-zinc-50"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={locale}
          initial={{ y: 8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -8, opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          {locale.toUpperCase()}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
