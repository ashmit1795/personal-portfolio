import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";
import { BookOpen } from "lucide-react";

export function LearningSection() {
  return (
    <div className="w-full">
      <SectionTitle>Currently Learning</SectionTitle>
      
      <Card className="bg-gradient-to-br from-card to-background border-border/60 backdrop-blur-sm">
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start p-6">
          <div className="p-4 bg-accent/10 rounded-2xl text-accent">
            <BookOpen className="w-8 h-8" />
          </div>
          
          <div className="flex-1 space-y-4 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-foreground">
              Deepening knowledge in Cloud Architecture & Go
            </h3>
            <p className="text-lg text-muted leading-relaxed max-w-2xl">
              Exploring advanced patterns in backend services, microservices architecture, and utilizing container orchestration to build more resilient systems.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
