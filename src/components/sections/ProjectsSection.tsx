import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { projects } from "@/lib/data/projects";

export function ProjectsSection() {
  return (
    <div className="w-full">
      <SectionTitle>Selected Projects</SectionTitle>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => {
          const isFeatured = index === 0;
          return (
            <Card 
              key={project.id} 
              className={`group flex flex-col overflow-hidden p-0 border-border/80 hover:border-accent/50 ${isFeatured ? 'md:col-span-2 md:flex-row' : ''}`}
            >
              <div className={`relative w-full overflow-hidden bg-card/50 ${isFeatured ? 'md:w-3/5 min-h-[300px]' : 'aspect-video'}`}>
                <Image 
                  src={project.imageUrl || "/avatar-placeholder.png"} 
                  alt={project.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-background/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              
              <div className={`flex flex-col flex-1 p-8 md:p-10 ${isFeatured ? 'md:w-2/5 justify-center' : ''}`}>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  {project.title}
                </h3>
                <p className="text-muted leading-relaxed mb-8 flex-1">
                  {project.description}
                </p>
                
                <div className="space-y-8 mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <Tag key={tech} className="bg-background">{tech}</Tag>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-6 pt-6 border-t border-border/40">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-foreground hover:text-accent flex items-center gap-2 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      Source
                    </a>
                    <button
                      className="text-sm font-medium text-muted hover:text-foreground flex items-center gap-2 transition-colors cursor-not-allowed"
                      title="Live demo coming soon"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Visit
                    </button>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
