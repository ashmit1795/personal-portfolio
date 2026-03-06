import { SectionTitle } from "@/components/ui/SectionTitle";
import { Github, Linkedin, Mail } from "lucide-react";

export function ContactSection() {
  return (
    <div className="w-full">
      <div className="max-w-xl mx-auto text-center flex flex-col items-center">
        <SectionTitle className="mb-6">Get In Touch</SectionTitle>
        
        <p className="text-lg md:text-xl text-muted mb-12">
          I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
          <a
            href="mailto:hello@ashmitpatra.com"
            className="px-8 py-4 rounded-lg bg-foreground text-background font-medium hover:bg-foreground/90 flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95"
          >
            <Mail className="w-5 h-5" />
            Say Hello
          </a>
          
          <a
            href="https://linkedin.com/in/ashmitpatra"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-lg bg-transparent border border-border text-foreground font-medium hover:border-muted hover:bg-card flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
