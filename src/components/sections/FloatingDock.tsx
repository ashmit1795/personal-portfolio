import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function FloatingDock() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 px-4 py-3 rounded-full bg-background/60 backdrop-blur-md border border-border/60 shadow-lg">
        <a
          href="https://github.com/ashmit1795"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full text-muted hover:text-foreground hover:bg-foreground/10 transition-colors"
          title="GitHub"
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href="#"
          className="p-2 rounded-full text-muted hover:text-foreground hover:bg-foreground/10 transition-colors"
          title="LinkedIn"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a
          href="#"
          className="p-2 rounded-full text-muted hover:text-foreground hover:bg-foreground/10 transition-colors"
          title="Twitter/X"
        >
          <Twitter className="w-5 h-5" />
        </a>
        <div className="w-[1px] h-6 bg-border/80 mx-1" />
        <a
          href="mailto:contact@example.com"
          className="p-2 rounded-full text-muted hover:text-foreground hover:bg-foreground/10 transition-colors"
          title="Email"
        >
          <Mail className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
