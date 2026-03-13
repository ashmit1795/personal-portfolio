"use client";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";
import { education } from "@/lib/data/education";
import { BookOpen } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";

export function EducationSection() {
  return (
    <div className="w-full">
      <AnimateIn>
        <SectionTitle>Education</SectionTitle>
      </AnimateIn>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {education.map((edu, index) => (
          <AnimateIn key={edu.id} delay={index * 0.1}>
            <Card className="flex flex-col h-full bg-card/40 hover:bg-card/80 border-border/60 hover:border-accent/30 hover:translate-y-[-4px] hover:shadow-lg backdrop-blur-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-accent/10 rounded-lg text-accent">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground leading-tight mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-base text-foreground/80 font-medium">
                    {edu.institution}
                  </p>
                </div>
              </div>
              
              <div className="mt-auto pt-4 border-t border-border/40">
                <span className="text-sm font-mono text-muted bg-background/50 px-3 py-1 rounded-md">
                  {edu.years}
                </span>
              </div>
            </Card>
          </AnimateIn>
        ))}
      </div>
    </div>
  );
}
