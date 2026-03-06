import { SectionTitle } from "@/components/ui/SectionTitle";
import { journey } from "@/lib/data/journey";

export function JourneySection() {
  return (
    <section id="journey" className="py-20 md:py-32 border-t border-border/50">
      <SectionTitle>Engineering Journey</SectionTitle>
      
      <div className="relative border-l border-border pl-8 ml-4 md:ml-6 space-y-12">
        {journey.map((item) => (
          <div key={item.id} className="relative">
            <div className="absolute -left-[41px] bg-background border border-border w-5 h-5 rounded-full mt-1.5" />
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
              <span className="text-accent font-mono text-sm block min-w-[60px]">
                {item.year}
              </span>
              <p className="text-foreground text-lg">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
