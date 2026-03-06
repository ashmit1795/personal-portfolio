import Image from "next/image";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { techStack } from "@/lib/data/stack";

export function TechStackSection() {
  return (
    <section id="stack" className="py-20 min-h-screen flex items-center w-full">
      <div className="w-full">
        <SectionTitle>Tools I enjoy building with</SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {techStack.map((stack) => (
            <div key={stack.category} className="space-y-6">
              <h3 className="text-sm font-medium text-foreground tracking-widest uppercase border-b border-border/50 pb-3">
                {stack.category}
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {stack.technologies.map((tech) => (
                  <div key={tech} className="flex flex-col items-center justify-center gap-3 p-4 bg-card border border-border rounded-xl hover:border-accent/40 hover:bg-card/80 transition-all group">
                    <div className="relative w-8 h-8 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all">
                      <Image
                        src={`/logos/${tech.toLowerCase().replace(/[\s\.]/g, '')}.svg`}
                        alt={tech}
                        fill
                        className="object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                    <span className="text-sm font-medium text-foreground">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
