import { profile } from "../data/profile";

/** Sección de apertura con nombre, título profesional y accesos rápidos. */
export function Hero() {
  return (
    <section className="flex flex-col gap-4">
      <p className="text-sm font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
        Portafolio
      </p>
      <h1 className="bg-linear-to-r from-accent-from to-accent-to bg-clip-text text-4xl font-semibold tracking-tight text-transparent sm:text-5xl">
        {profile.name}
      </h1>
      <p className="text-lg text-zinc-600 dark:text-zinc-400">{profile.title}</p>
      <div className="flex flex-wrap gap-4 pt-2 text-sm text-zinc-500 dark:text-zinc-400">
        <span>{profile.email}</span>
        <span>{profile.phone}</span>
        <span>{profile.location}</span>
      </div>
      <div className="flex flex-wrap gap-3 pt-4">
        <a
          href="#proyectos"
          className="flex h-11 items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-all hover:-translate-y-0.5 hover:bg-[#383838] hover:shadow-lg dark:hover:bg-[#ccc]"
        >
          Ver proyectos
        </a>
        <a
          href="#contacto"
          className="theme-transition flex h-11 items-center justify-center rounded-full border border-border-subtle bg-surface-glass px-6 text-sm font-medium backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:border-transparent hover:bg-black/4 dark:hover:bg-white/8"
        >
          Contactarme
        </a>
      </div>
    </section>
  );
}
