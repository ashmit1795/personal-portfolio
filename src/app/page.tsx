"use client";

import { Container } from "@/components/ui/Container";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { JourneySection } from "@/components/sections/JourneySection";
import { EducationSection } from "@/components/sections/EducationSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { GithubSection } from "@/components/sections/GithubSection";
import { LearningSection } from "@/components/sections/LearningSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FloatingDock } from "@/components/sections/FloatingDock";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { BackgroundGrid } from "@/components/ui/BackgroundGrid";
import { CursorGlow } from "@/components/ui/CursorGlow";

export default function Home() {
  return (
    <div className="w-full relative">
      <BackgroundGrid />
      <CursorGlow />

      <main className="flex flex-col">
        <section id="hero" className="pt-32 pb-24">
          <Container>
            <HeroSection />
          </Container>
        </section>

        <section id="about" className="py-24 md:py-32">
          <Container>
            <AboutSection />
          </Container>
        </section>

        <section id="projects" className="py-24 md:py-32">
          <Container>
            <ProjectsSection />
          </Container>
        </section>

        <section id="journey" className="py-24 md:py-32">
          <Container>
            <JourneySection />
          </Container>
        </section>

        <section id="education" className="py-24 md:py-32">
          <Container>
            <EducationSection />
          </Container>
        </section>

        <section id="stack" className="py-24 md:py-32">
          <Container>
            <TechStackSection />
          </Container>
        </section>

        <section id="github" className="py-24 md:py-32">
          <Container>
            <GithubSection />
          </Container>
        </section>

        <section id="learning" className="py-24 md:py-32">
          <Container>
            <LearningSection />
          </Container>
        </section>

        <section id="contact" className="py-24 md:py-32 pb-32">
          <Container>
            <ContactSection />
          </Container>
        </section>
      </main>

      <ScrollProgress />
      <FloatingDock />
    </div>
  );
}
