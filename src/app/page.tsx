import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { TechnologyIcons } from "@/components/tech/TechnologyIcons";
import { Reveal } from "@/components/ui/Reveal";
import { About } from "@/features/about/components/About";
import { ContactCard } from "@/features/contact/components/ContactCard";
import { EducationCard } from "@/features/education/components/EducationCard";
import { LanguagesCard } from "@/features/education/components/LanguagesCard";
import { SoftSkillsCard } from "@/features/education/components/SoftSkillsCard";
import { ExperienceSection } from "@/features/experience/components/ExperienceSection";
import { Hero } from "@/features/hero/components/Hero";
import { ProjectsSection } from "@/features/projects/components/ProjectsSection";
import { SkillsGrid } from "@/features/skills/components/SkillsGrid";

export default function Home() {
  return (
    <div className="theme-transition relative flex flex-1 flex-col overflow-x-hidden bg-background font-sans">
      {/* Halos de acento decorativos: fijos, difuminados y fuera del flujo de interacción. */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-accent-from/20 blur-3xl" />
        <div className="absolute top-1/3 -right-32 h-96 w-96 rounded-full bg-accent-to/20 blur-3xl" />
      </div>
      <Navbar />
      <main className="mx-auto flex w-full max-w-4xl flex-col gap-24 px-6 py-20 lg:max-w-5xl xl:max-w-6xl">
        <Reveal>
          <Hero />
        </Reveal>
        <Reveal>
          <TechnologyIcons />
        </Reveal>
        <Reveal>
          <About />
        </Reveal>
        <Reveal>
          <SkillsGrid />
        </Reveal>
        <Reveal>
          <ProjectsSection />
        </Reveal>
        <Reveal>
          <ExperienceSection />
        </Reveal>
        {/* Bento grid compacto: Educación, Idiomas, Habilidades Blandas + banner de Contacto. */}
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 lg:gap-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            <Reveal delay={0} className="h-full">
              <EducationCard />
            </Reveal>
            <Reveal delay={0.08} className="h-full">
              <LanguagesCard />
            </Reveal>
            <Reveal delay={0.16} className="h-full sm:col-span-2 lg:col-span-1">
              <SoftSkillsCard />
            </Reveal>
          </div>
          <Reveal delay={0.24}>
            <ContactCard />
          </Reveal>
        </div>
      </main>
      <Footer />
    </div>
  );
}
