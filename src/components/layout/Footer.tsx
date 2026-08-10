import { profile } from "@/features/hero/data/profile";

export function Footer() {
  return (
    <footer className="theme-transition border-t border-border-subtle py-8 text-center text-xs text-zinc-500 dark:text-zinc-400">
      © 2026 {profile.name}. Todos los derechos reservados.
    </footer>
  );
}
