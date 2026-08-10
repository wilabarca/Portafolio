import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { technologies } from "./technologies.data";

/**
 * Carrusel infinito (marquee) del stack tecnológico con íconos oficiales de
 * marca (react-icons/si). Puramente CSS: se pausa en hover y no requiere
 * JavaScript en cliente.
 */
export function TechnologyIcons() {
  // Se duplica la lista para lograr un loop continuo sin salto visible.
  const track = [...technologies, ...technologies];

  return (
    <Section id="stack">
      <SectionHeading>Stack Tecnológico</SectionHeading>
      <div className="group relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-background to-transparent" />
        <div className="animate-marquee flex w-max gap-4 group-hover:[animation-play-state:paused]">
          {track.map(({ name, icon: Icon }, index) => (
            <div
              key={`${name}-${index}`}
              className="theme-transition flex items-center gap-2 rounded-full border border-border-subtle bg-surface-glass px-4 py-2 text-sm font-medium whitespace-nowrap backdrop-blur-xl"
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
              {name}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
