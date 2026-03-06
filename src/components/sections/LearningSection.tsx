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
    <section id="learning" className="py-20 md:py-32 border-t border-border/50">
      <SectionTitle>Currently Exploring</SectionTitle>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl">
        {learningTopics.map((topic) => (
          <div key={topic} className="flex items-center gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
              <Check className="w-3.5 h-3.5 text-accent" />
            </div>
            <span className="text-foreground text-lg">{topic}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
