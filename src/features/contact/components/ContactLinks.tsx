"use client";

import { Mail, MapPin } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { useLanguage } from "@/components/language/LanguageProvider";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { cn } from "@/lib/utils";
import { profile } from "@/features/hero/data/profile";

interface ContactLinksProps {
  className?: string;
  itemClassName?: string;
  iconClassName?: string;
}

/**
 * Fila reutilizable de contacto rápido (correo, WhatsApp, ubicación,
 * LinkedIn) con íconos, compartida entre Hero y ContactSection. El correo
 * abre el cliente de mail, WhatsApp abre un chat directo al número
 * (`wa.me`) y LinkedIn abre el perfil en una nueva pestaña.
 */
export function ContactLinks({ className, itemClassName, iconClassName }: ContactLinksProps) {
  const { t } = useLanguage();
  const iconClasses = cn("h-4 w-4 shrink-0", iconClassName);
  const linkClasses = cn(
    "inline-flex items-center gap-1.5 transition-colors hover:text-black dark:hover:text-zinc-50",
    itemClassName,
  );

  return (
    <div className={className}>
      <a href={`mailto:${profile.email}`} className={linkClasses}>
        <Mail className={iconClasses} aria-hidden="true" />
        {profile.email}
      </a>

      {profile.whatsappUrl && (
        <a
          href={profile.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          title={t.contact.whatsapp}
          aria-label={t.contact.whatsapp}
          className={linkClasses}
        >
          <SiWhatsapp className={cn(iconClasses, "text-[#25D366]")} aria-hidden="true" />
          {profile.phone}
        </a>
      )}

      <span className={cn("inline-flex items-center gap-1.5", itemClassName)}>
        <MapPin className={iconClasses} aria-hidden="true" />
        {profile.location}
      </span>

      {profile.linkedinUrl && (
        <a
          href={profile.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          title={`${profile.name} — LinkedIn`}
          className={linkClasses}
        >
          <LinkedInIcon className={iconClasses} aria-hidden="true" />
          {t.contact.linkedin}
        </a>
      )}
    </div>
  );
}
