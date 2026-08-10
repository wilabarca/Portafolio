import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/features/hero/data/profile";

export function ContactSection() {
  return (
    <Section id="contacto">
      <Card className="flex flex-col gap-4 p-8">
        <SectionHeading>Contacto</SectionHeading>
        <p className="max-w-xl text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          ¿Interesado en colaborar o tienes una oportunidad para conversar?
          Escríbeme.
        </p>
        <div className="flex flex-col gap-1 text-sm text-zinc-600 dark:text-zinc-400">
          <a
            href={`mailto:${profile.email}`}
            className="font-medium text-zinc-950 hover:underline dark:text-zinc-50"
          >
            {profile.email}
          </a>
          <span>{profile.phone}</span>
          <span>{profile.location}</span>
        </div>
      </Card>
    </Section>
  );
}
