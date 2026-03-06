"use client";

import { Container } from "@/components/ui/Container";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { JourneySection } from "@/components/sections/JourneySection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { GithubSection } from "@/components/sections/GithubSection";
import { LearningSection } from "@/components/sections/LearningSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FloatingDock } from "@/components/sections/FloatingDock";

export default function Home() {
  return (
    <main className="min-h-screen relative pb-24">
      <Container>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <JourneySection />
        <TechStackSection />
        <GithubSection />
        <LearningSection />
        <ContactSection />
      </Container>
      
      <FloatingDock />
    </main>
  );
}
