"use client";

import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { projects } from "@/lib/data/projects";
import { AnimateIn } from "@/components/ui/AnimateIn";

export function ProjectsSection() {
  return (
    <div className="w-full">
      <AnimateIn>
        <SectionTitle>Selected Projects</SectionTitle>
      </AnimateIn>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => {
          const isFeatured = index === 0;
          return (
            <AnimateIn key={project.id} delay={index * 0.1}>
              <Card 
                className={`group flex flex-col overflow-hidden p-0 border-border/80 hover:border-accent/50 hover:translate-y-[-4px] hover:shadow-xl ${isFeatured ? 'md:col-span-2 md:flex-row' : 'h-full'}`}
              >
                <div className={`relative w-full overflow-hidden bg-card/50 ${isFeatured ? 'md:w-3/5 min-h-[280px]' : 'aspect-video'}`}>
                  <Image 
                    src={project.imageUrl || "/avatar-placeholder.png"} 
                    alt={project.title} 
                    fill 
                    className="object-cover group-hover:scale-105"
                    style={{ transition: "transform 0.7s ease" }}
                  />
                  <div 
                    className="absolute inset-0 bg-background/10 group-hover:bg-transparent"
                    style={{ transition: "background-color 0.5s ease" }}
                  />
                </div>
                
                <div className={`flex flex-col flex-1 p-8 md:p-10 ${isFeatured ? 'md:w-2/5 justify-center' : ''}`}>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>
                  
                  <div className="space-y-6 mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <Tag key={tech} className="bg-background">{tech}</Tag>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-6 pt-4 border-t border-border/40">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-foreground hover:text-accent flex items-center gap-2"
                      >
                        <Github className="w-4 h-4" />
                        Source
                      </a>
                      <button
                        className="text-sm font-medium text-muted hover:text-foreground flex items-center gap-2 cursor-not-allowed"
                        title="Live demo coming soon"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Visit
                      </button>
                    </div>
                  </div>
                </div>
              </Card>
            </AnimateIn>
          );
        })}
      </div>
    </div>
  );
}
