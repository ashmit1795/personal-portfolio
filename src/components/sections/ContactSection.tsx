import { SectionTitle } from "@/components/ui/SectionTitle";
import { Github, Linkedin, Mail } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 min-h-screen flex items-center justify-center w-full text-center flex-col">
      <SectionTitle className="mb-6 !text-4xl md:!text-5xl lg:!text-6xl text-center">
        Let's build something interesting.
      </SectionTitle>
      
      <p className="max-w-2xl text-lg md:text-xl text-muted mb-16 leading-relaxed">
        I am always open to exploring new engineering challenges or collaborating on complex architectural projects.
      </p>
      
      <div className="flex flex-wrap items-center justify-center gap-6">
        <a
          href="https://github.com/ashmit1795"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-8 py-4 rounded-xl bg-card border border-border text-foreground font-medium hover:border-accent hover:bg-accent/5 hover:text-accent transition-all hover:scale-105 active:scale-95 shadow-sm"
        >
          <Github className="w-5 h-5" />
          GitHub
        </a>
        <a
          href="#"
          className="flex items-center gap-3 px-8 py-4 rounded-xl bg-card border border-border text-foreground font-medium hover:border-[#0A66C2] hover:bg-[#0A66C2]/5 hover:text-[#0A66C2] transition-all hover:scale-105 active:scale-95 shadow-sm"
        >
          <Linkedin className="w-5 h-5" />
          LinkedIn
        </a>
        <a
          href="mailto:contact@example.com"
          className="flex items-center gap-3 px-8 py-4 rounded-xl bg-foreground text-background font-medium hover:bg-foreground/90 transition-all hover:scale-105 active:scale-95 shadow-sm"
        >
          <Mail className="w-5 h-5" />
          Email
        </a>
      </div>
    </section>
  );
}
