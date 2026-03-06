import { SectionTitle } from "@/components/ui/SectionTitle";
import { Tag } from "@/components/ui/Tag";
import { techStack } from "@/lib/data/stack";

export function TechStackSection() {
  return (
    <section id="stack" className="py-20 md:py-32 border-t border-border/50">
      <SectionTitle>Tools I enjoy building with</SectionTitle>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
        {techStack.map((stack) => (
          <div key={stack.category} className="space-y-4">
            <h3 className="text-lg font-medium text-foreground tracking-wide uppercase text-sm border-b border-border/50 pb-2">
              {stack.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {stack.technologies.map((tech) => (
                <Tag key={tech} className="bg-card hover:bg-card/80 transition-colors">
                  {tech}
                </Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
