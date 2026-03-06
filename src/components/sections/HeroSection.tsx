import Image from "next/image";
import { Github } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function HeroSection() {
  return (
    <section className="relative w-full py-20 min-h-screen flex items-center">
      {/* Absolute toggle button in top-right */}
      <div className="absolute top-8 right-0 md:top-12 md:right-8 z-10">
        <ThemeToggle />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center w-full">
        <div className="flex flex-col items-start order-2 lg:order-1">
          <p className="text-accent font-medium mb-4 tracking-wide uppercase text-sm">
            Ashmit Patra
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tight text-foreground mb-6 leading-[1.1]">
            I started by asking how websites work.
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-foreground font-medium mb-6">
            Now I build the systems behind them.
          </h2>

          <p className="text-lg md:text-xl text-muted mb-12 max-w-xl leading-relaxed">
            Building backend systems, APIs, and exploring DevOps & cloud infrastructure.
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <a
              href="#projects"
              className="px-8 py-3.5 rounded-lg bg-foreground text-background font-medium hover:bg-foreground/90 transition-all hover:scale-105 active:scale-95"
            >
              View Projects
            </a>
            <a
              href="https://github.com/ashmit1795"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-lg bg-transparent border border-border text-foreground font-medium hover:border-muted hover:bg-card flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>
        </div>

        <div className="w-full flex justify-center lg:justify-end order-1 lg:order-2">
          <div className="relative w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-border/40 shadow-2xl">
            <Image
              src="/avatar-placeholder.png"
              alt="Ashmit Patra"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
