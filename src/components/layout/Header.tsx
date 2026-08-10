import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { profile } from "@/features/hero/data/profile";
import { NAV_LINKS } from "./nav-links";

export function Header() {
  return (
    <header className="theme-transition sticky top-0 z-20 border-b border-border-subtle bg-surface-glass backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-4xl items-center justify-between px-6 py-4 lg:max-w-5xl xl:max-w-6xl">
        <a href="#" className="text-sm font-semibold tracking-tight">
          {profile.name}
        </a>
        <div className="flex items-center gap-6">
          <ul className="hidden gap-6 text-sm text-zinc-600 sm:flex dark:text-zinc-400">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-black dark:hover:text-zinc-50"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
