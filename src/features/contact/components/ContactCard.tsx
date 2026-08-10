"use client";

import { Send } from "lucide-react";
import { useLanguage } from "@/components/language/LanguageProvider";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import { ContactLinks } from "./ContactLinks";

interface ContactCardProps {
  className?: string;
}

/** Tarjeta destacada de Contacto: banner ancho al cierre de la página, con degradado de acento. */
export function ContactCard({ className }: ContactCardProps) {
  const { t } = useLanguage();

  return (
    <Card
      id="contacto"
      scaleOnHover
      glow
      className={cn(
        "flex flex-col gap-4 border-accent-from/20 bg-linear-to-br from-accent-from/10 to-accent-to/5 p-6 sm:p-8",
        className,
      )}
    >
      <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
        <Send className="h-4 w-4 shrink-0" aria-hidden="true" />
        {t.headings.contact}
      </div>
      <p className="max-w-xl text-sm leading-6 text-zinc-600 dark:text-zinc-400">
        {t.contact.intro}
      </p>
      <ContactLinks className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-600 dark:text-zinc-400" />
    </Card>
  );
}
