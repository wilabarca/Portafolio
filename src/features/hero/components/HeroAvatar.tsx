"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SiFlutter, SiKotlin, SiReact } from "react-icons/si";

const FLOATING_BADGES = [
  { Icon: SiKotlin, label: "Kotlin", position: "-left-2 top-8 sm:-left-6", delay: 0 },
  { Icon: SiFlutter, label: "Flutter", position: "-right-2 top-1/3 sm:-right-8", delay: 0.7 },
  {
    Icon: SiReact,
    label: "React",
    position: "left-1/2 -bottom-2 -translate-x-1/2",
    delay: 1.4,
  },
] as const;

/**
 * Ilustración del Hero: avatar 3D dentro de un anillo degradado con glow
 * pulsante (estilo "cyberpunk elegante"), rodeado de badges de stack
 * flotantes con microinteracción continua.
 */
export function HeroAvatar() {
  return (
    <div className="relative mx-auto flex h-56 w-56 items-center justify-center sm:h-64 sm:w-64 lg:h-72 lg:w-72">
      <div
        aria-hidden="true"
        className="animate-glow-pulse absolute inset-0 rounded-full bg-linear-to-br from-accent-from to-accent-to blur-3xl"
      />

      <div className="relative flex h-full w-full items-center justify-center rounded-full bg-linear-to-br from-accent-from to-accent-to p-[3px] shadow-[0_0_25px_-2px_var(--accent-glow)]">
        <div className="h-full w-full overflow-hidden rounded-full bg-surface">
          <Image
            src="/A_3D_avatar_render_of_a_young_male_software_developer_based.jpg"
            alt="Wilver Abarca Sánchez - Avatar 3D"
            width={288}
            height={288}
            preload
            sizes="(min-width: 1024px) 288px, (min-width: 640px) 256px, 224px"
            className="h-full w-full rounded-full object-cover"
          />
        </div>
      </div>

      {FLOATING_BADGES.map(({ Icon, label, position, delay }) => (
        <motion.div
          key={label}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay, ease: "easeInOut" }}
          className={`theme-transition absolute flex items-center gap-1.5 rounded-full border border-border-subtle bg-surface-glass px-3 py-1.5 text-xs font-medium text-foreground shadow-lg backdrop-blur-xl ${position}`}
        >
          <Icon className="h-3.5 w-3.5" aria-hidden="true" />
          {label}
        </motion.div>
      ))}
    </div>
  );
}
