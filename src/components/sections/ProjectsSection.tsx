import { Github, ArrowRight } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { projects } from "@/lib/data/projects";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-32 border-t border-border/50">
      <SectionTitle>Selected Projects</SectionTitle>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="flex flex-col h-full group">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {project.title}
              </h3>
              <p className="text-muted leading-relaxed mb-6">
                {project.description}
              </p>
            </div>
            
            <div className="space-y-6 mt-auto">
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>
              
              <div className="flex items-center gap-4 pt-4 border-t border-border/40">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-foreground hover:text-accent flex items-center gap-1.5 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
                <button
                  className="text-sm font-medium text-muted hover:text-foreground flex items-center gap-1 transition-colors cursor-not-allowed"
                  title="Coming soon"
                >
                  Details
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
