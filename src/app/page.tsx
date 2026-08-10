import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Reveal } from "@/components/ui/Reveal";
import { About } from "@/features/about/components/About";
import { ContactSection } from "@/features/contact/components/ContactSection";
import { EducationSection } from "@/features/education/components/EducationSection";
import { LanguagesAndSoftSkills } from "@/features/education/components/LanguagesAndSoftSkills";
import { ExperienceSection } from "@/features/experience/components/ExperienceSection";
import { Hero } from "@/features/hero/components/Hero";
import { ProjectsSection } from "@/features/projects/components/ProjectsSection";
import { SkillsSection } from "@/features/skills/components/SkillsSection";

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
      <Header />
      <main className="mx-auto flex w-full max-w-4xl flex-col gap-24 px-6 py-20 lg:max-w-5xl xl:max-w-6xl">
        <Reveal>
          <Hero />
        </Reveal>
        <Reveal>
          <About />
        </Reveal>
        <Reveal>
          <SkillsSection />
        </Reveal>
        <Reveal>
          <ProjectsSection />
        </Reveal>
        <Reveal>
          <ExperienceSection />
        </Reveal>
        <Reveal>
          <EducationSection />
        </Reveal>
        <Reveal>
          <LanguagesAndSoftSkills />
        </Reveal>
        <Reveal>
          <ContactSection />
        </Reveal>
      </main>
      <Footer />
    </div>
  );
}
