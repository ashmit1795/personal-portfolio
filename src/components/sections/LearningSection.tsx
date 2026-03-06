import { SectionTitle } from "@/components/ui/SectionTitle";
import { Check } from "lucide-react";

const learningTopics = [
  "DevOps fundamentals",
  "Linux systems",
  "AWS infrastructure",
  "Backend scalability",
  "Automation workflows",
  "System design",
  "Generative AI",
];

export function LearningSection() {
  return (
    <section id="learning" className="py-20 min-h-screen flex items-center w-full">
      <div className="w-full">
        <SectionTitle>Currently Exploring</SectionTitle>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {learningTopics.map((topic) => (
            <div key={topic} className="flex items-center gap-4 bg-card/30 p-4 rounded-xl border border-border/50 hover:border-accent/40 hover:bg-card/60 transition-all hover:-translate-y-1">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
                <Check className="w-4 h-4 text-accent" />
              </div>
              <span className="text-foreground text-lg font-medium">{topic}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
