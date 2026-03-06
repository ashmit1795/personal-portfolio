import Image from "next/image";
import { Github } from "lucide-react";

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 flex flex-col items-start">
      <div className="mb-8 relative w-20 h-20 rounded-full overflow-hidden border border-border">
        <Image
          src="/avatar-placeholder.png"
          alt="Ashmit Patra"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground mb-6">
        Ashmit Patra
      </h1>
      
      <p className="text-xl md:text-2xl text-foreground font-medium mb-4 max-w-2xl leading-relaxed">
        Building backend systems, APIs, and exploring DevOps & cloud infrastructure.
      </p>
      
      <p className="text-lg md:text-xl text-muted mb-10 max-w-2xl leading-relaxed">
        Computer Science student passionate about designing scalable systems and application workflows.
      </p>
      
      <div className="flex flex-wrap items-center gap-4">
        <a
          href="#projects"
          className="px-6 py-3 rounded-md bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors"
        >
          View Projects
        </a>
        <a
          href="https://github.com/ashmit1795"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-md bg-transparent border border-border text-foreground font-medium hover:border-muted flex items-center gap-2 transition-colors"
        >
          <Github className="w-5 h-5" />
          GitHub
        </a>
      </div>
    </section>
  );
}
