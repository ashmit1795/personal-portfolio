"use client";

import Image from "next/image";
import { Github } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { AnimateIn } from "@/components/ui/AnimateIn";

export function HeroSection() {
  return (
    <div className="relative w-full">
      <div className="absolute top-0 right-0 z-10 hidden md:block">
        <ThemeToggle />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
        <div className="flex flex-col items-start gap-6 order-2 lg:order-1">
          <AnimateIn>
            <div className="text-accent font-medium tracking-wide uppercase text-sm flex items-center gap-4">
              Ashmit Patra
              <span className="md:hidden"><ThemeToggle /></span>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <h1 className="text-[clamp(2.8rem,5vw,4.2rem)] font-semibold tracking-tight text-foreground leading-[1.05]">
              I started by asking how websites work.
            </h1>
          </AnimateIn>
          
          <AnimateIn delay={0.2}>
            <h2 className="text-lg md:text-xl text-foreground font-medium">
              Now I build the systems behind them.
            </h2>
          </AnimateIn>

          <AnimateIn delay={0.3}>
            <p className="text-base md:text-lg text-muted max-w-xl leading-relaxed">
              Building backend systems, APIs, and exploring DevOps & cloud infrastructure.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.4}>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="px-7 py-3 rounded-lg bg-foreground text-background font-medium hover:bg-foreground/90 hover:translate-y-[-2px] active:scale-95"
              >
                View Projects
              </a>
              <a
                href="https://github.com/ashmit1795"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3 rounded-lg bg-transparent border border-border text-foreground font-medium hover:border-muted hover:bg-card hover:translate-y-[-2px] active:scale-95 flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </AnimateIn>
        </div>

        <AnimateIn delay={0.2} className="w-full flex justify-center lg:justify-end order-1 lg:order-2">
          <div className="relative w-36 h-36 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-border/40 shadow-2xl">
            <Image
              src="/avatar-placeholder.png"
              alt="Ashmit Patra"
              fill
              className="object-cover"
              priority
            />
          </div>
        </AnimateIn>
      </div>
    </div>
  );
}
