import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function FloatingDock() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-1.5 px-3 py-2.5 rounded-full bg-background/70 backdrop-blur-xl border border-border/60 shadow-xl transition-all hover:border-accent/40 group">
        <a
          href="https://github.com/ashmit1795"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-full text-muted hover:text-foreground hover:bg-muted/10 transition-all hover:-translate-y-1 hover:scale-110 active:scale-95"
          title="GitHub"
        >
          <Github className="w-4 h-4" />
        </a>
        <a
          href="#"
          className="p-2.5 rounded-full text-muted hover:text-[#0A66C2] hover:bg-[#0A66C2]/10 transition-all hover:-translate-y-1 hover:scale-110 active:scale-95"
          title="LinkedIn"
        >
          <Linkedin className="w-4 h-4" />
        </a>
        <a
          href="#"
          className="p-2.5 rounded-full text-muted hover:text-foreground hover:bg-muted/10 transition-all hover:-translate-y-1 hover:scale-110 active:scale-95"
          title="Twitter/X"
        >
          <Twitter className="w-4 h-4" />
        </a>
        <div className="w-[1px] h-5 bg-border/80 mx-1 group-hover:bg-border transition-colors text-transparent" />
        <a
          href="mailto:contact@example.com"
          className="p-2.5 rounded-full text-muted hover:text-foreground hover:bg-muted/10 transition-all hover:-translate-y-1 hover:scale-110 active:scale-95"
          title="Email"
        >
          <Mail className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

