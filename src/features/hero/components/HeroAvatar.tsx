"use client";

import { motion } from "framer-motion";
import { SiFlutter, SiKotlin, SiReact } from "react-icons/si";
import { profile } from "../data/profile";

const initials = profile.name
  .split(" ")
  .filter(Boolean)
  .slice(0, 2)
  .map((part) => part[0])
  .join("")
  .toUpperCase();

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
 * Ilustración original del Hero: avatar de iniciales con anillo degradado y
 * glow pulsante (estilo "cyberpunk elegante"), rodeado de badges de stack
 * flotantes con microinteracción continua.
 */
export function HeroAvatar() {
  return (
    <div className="relative mx-auto flex h-56 w-56 items-center justify-center sm:h-64 sm:w-64 lg:h-72 lg:w-72">
      <div
        aria-hidden="true"
        className="animate-glow-pulse absolute inset-0 rounded-full bg-linear-to-br from-accent-from to-accent-to blur-3xl"
      />

      <div className="relative flex h-full w-full items-center justify-center rounded-full bg-linear-to-br from-accent-from to-accent-to p-[3px] shadow-2xl shadow-accent-glow">
        <div className="flex h-full w-full items-center justify-center rounded-full bg-surface">
          <span className="bg-linear-to-br from-accent-from to-accent-to bg-clip-text text-5xl font-bold text-transparent sm:text-6xl">
            {initials}
          </span>
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
