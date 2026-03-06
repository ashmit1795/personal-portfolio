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
      <main className="snap-container pb-24 md:pb-0">
        <section id="hero" className="snap-section">
          <Container>
            <HeroSection />
          </Container>
        </section>
        
        <section id="about" className="snap-section">
          <Container>
            <AboutSection />
          </Container>
        </section>
        
        <section id="projects" className="snap-section">
          <Container>
            <ProjectsSection />
          </Container>
        </section>
        
        <section id="journey" className="snap-section">
          <Container>
            <JourneySection />
          </Container>
        </section>

        <section id="education" className="snap-section">
          <Container>
            <EducationSection />
          </Container>
        </section>
        
        <section id="stack" className="snap-section">
          <Container>
            <TechStackSection />
          </Container>
        </section>
        
        <section id="github" className="snap-section">
          <Container>
            <GithubSection />
          </Container>
        </section>

        <section id="learning" className="snap-section">
          <Container>
            <LearningSection />
          </Container>
        </section>
        
        <section id="contact" className="snap-section">
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
