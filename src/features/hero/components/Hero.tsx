"use client";

import { useLanguage } from "@/components/language/LanguageProvider";
import { DownloadCvButton } from "@/components/ui/DownloadCvButton";
import { ContactLinks } from "@/features/contact/components/ContactLinks";
import { profile } from "../data/profile";
import { HeroAvatar } from "./HeroAvatar";

/** Sección de apertura: titulación, rol, contacto rápido e ilustración con glow. */
export function Hero() {
  const { locale, t } = useLanguage();

  return (
    <section className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
      <div className="flex flex-col gap-4 text-center lg:text-left">
        <span className="theme-transition mx-auto inline-flex w-fit items-center rounded-full border border-border-subtle bg-surface-glass px-3 py-1 text-xs font-medium uppercase tracking-widest text-zinc-500 backdrop-blur-xl lg:mx-0 dark:text-zinc-400">
          {profile.title[locale]}
        </span>
        <h1 className="bg-linear-to-r from-accent-from to-accent-to bg-clip-text text-4xl font-semibold tracking-tight text-transparent sm:text-5xl">
          {profile.name}
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">{profile.role[locale]}</p>
        <ContactLinks className="flex flex-wrap justify-center gap-4 pt-2 text-sm text-zinc-500 lg:justify-start dark:text-zinc-400" />
        <div className="flex flex-wrap justify-center gap-3 pt-4 lg:justify-start">
          <a
            href="#proyectos"
            className="flex h-11 items-center justify-center rounded-full bg-linear-to-r from-accent-from to-accent-to px-6 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent-glow"
          >
            {t.hero.ctaProjects}
          </a>
          <a
            href="#contacto"
            className="theme-transition flex h-11 items-center justify-center rounded-full border border-border-subtle bg-surface-glass px-6 text-sm font-medium backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:border-transparent hover:bg-black/4 dark:hover:bg-white/8"
          >
            {t.hero.ctaContact}
          </a>
          <DownloadCvButton />
        </div>
      </div>

      <HeroAvatar />
    </section>
  );
}
