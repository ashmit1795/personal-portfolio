import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";
import { education } from "@/lib/data/education";
import { BookOpen } from "lucide-react";

export function EducationSection() {
  return (
    <div className="w-full">
      <SectionTitle>Education</SectionTitle>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {education.map((edu) => (
          <Card key={edu.id} className="flex flex-col h-full bg-card/40 hover:bg-card/80 transition-colors border-border/60 hover:border-accent/30 pointer-events-auto shadow-sm hover:shadow-md backdrop-blur-sm">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-accent/10 rounded-lg text-accent">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground leading-tight mb-1">
                  {edu.degree}
                </h3>
                <p className="text-lg text-foreground/80 font-medium">
                  {edu.institution}
                </p>
              </div>
            </div>
            
            <div className="mt-auto pt-6 border-t border-border/40">
              <span className="text-sm font-mono text-muted bg-background/50 px-3 py-1 rounded-md">
                {edu.years}
              </span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
