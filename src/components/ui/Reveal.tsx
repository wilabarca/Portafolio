"use client";

import { motion } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  /** Retraso en segundos, útil para escalonar (stagger) secciones consecutivas. */
  delay?: number;
  className?: string;
}

/**
 * Envuelve una sección con una animación de entrada progresiva al hacer
 * scroll: fade-in + desplazamiento vertical sutil, disparada una sola vez
 * al entrar en el viewport.
 */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
