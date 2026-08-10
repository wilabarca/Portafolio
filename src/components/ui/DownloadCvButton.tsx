"use client";

import { FileDown } from "lucide-react";
import { useLanguage } from "@/components/language/LanguageProvider";
import { profile } from "@/features/hero/data/profile";
import { cn } from "@/lib/utils";

interface DownloadCvButtonProps {
  className?: string;
}

/**
 * Botón de descarga del CV en PDF. Usa `download` (guarda el archivo
 * directamente) en lugar de `target="_blank"`, ya que el propósito es
 * descargar el currículum, no previsualizarlo en una pestaña nueva.
 * No se renderiza si `profile.cvUrl` no está definido.
 */
export function DownloadCvButton({ className }: DownloadCvButtonProps) {
  const { t } = useLanguage();

  if (!profile.cvUrl) return null;

  return (
    <a
      href={profile.cvUrl}
      download={profile.cvFileName ?? true}
      className={cn(
        "theme-transition inline-flex h-11 items-center justify-center gap-2 rounded-full border border-border-subtle bg-surface-glass px-6 text-sm font-medium backdrop-blur-xl transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.02] hover:border-transparent hover:bg-black/4 hover:shadow-[0_0_20px_-4px_var(--accent-glow)] dark:border-slate-700 dark:hover:border-slate-600 dark:hover:bg-slate-800",
        className,
      )}
    >
      <FileDown className="h-4 w-4 shrink-0" aria-hidden="true" />
      {t.hero.ctaDownloadCv}
    </a>
  );
}
