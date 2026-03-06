import { SectionTitle } from "@/components/ui/SectionTitle";
import { Github, Linkedin, Mail } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32 border-t border-border/50 text-center flex flex-col items-center">
      <SectionTitle className="mb-4">Let's build something interesting.</SectionTitle>
      
      <p className="max-w-xl text-lg text-muted mb-12">
        I am always open to exploring new engineering challenges or collaborating on complex architectural projects.
      </p>
      
      <div className="flex flex-wrap items-center justify-center gap-4">
        <a
          href="https://github.com/ashmit1795"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 rounded-md bg-card border border-border text-foreground font-medium hover:border-muted hover:bg-muted/10 transition-colors"
        >
          <Github className="w-5 h-5" />
          GitHub
        </a>
        <a
          href="#"
          className="flex items-center gap-2 px-6 py-3 rounded-md bg-card border border-border text-foreground font-medium hover:border-muted hover:bg-muted/10 transition-colors"
        >
          <Linkedin className="w-5 h-5" />
          LinkedIn
        </a>
        <a
          href="mailto:contact@example.com"
          className="flex items-center gap-2 px-6 py-3 rounded-md bg-card border border-border text-foreground font-medium hover:border-muted hover:bg-muted/10 transition-colors"
        >
          <Mail className="w-5 h-5" />
          Email
        </a>
      </div>
    </section>
  );
}
