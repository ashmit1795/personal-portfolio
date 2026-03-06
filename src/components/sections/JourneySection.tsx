import { SectionTitle } from "@/components/ui/SectionTitle";
import { journey } from "@/lib/data/journey";
import { Hammer, Lightbulb, Rocket, Monitor, Code } from "lucide-react";

const getIcon = (index: number) => {
  const icons = [Lightbulb, Hammer, Code, Monitor, Rocket];
  const Icon = icons[index % icons.length];
  return <Icon className="w-5 h-5" />;
};

export function JourneySection() {
  return (
    <section id="journey" className="py-20 min-h-screen flex items-center w-full">
      <div className="w-full">
        <SectionTitle>Engineering Journey</SectionTitle>
        
        <div className="relative py-12">
          {/* Central Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-border md:-translate-x-1/2 rounded-full" />
          
          <div className="flex flex-col gap-12">
            {journey.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={item.id} className="relative flex flex-col md:flex-row items-start md:items-center group">
                  
                  {/* Left Side Content (Desktop Only) */}
                  <div className={`hidden md:flex flex-1 justify-end pr-12 ${!isEven ? 'md:order-1' : 'md:order-3 invisible'}`}>
                    <div className="text-right flex flex-col items-end">
                      <span className="text-accent font-mono text-sm block mb-2 px-3 py-1 bg-accent/10 rounded-md">
                        {item.year}
                      </span>
                      <p className="text-foreground text-lg max-w-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Icon Node */}
                  <div className={`absolute left-0 md:static md:flex-shrink-0 w-10 h-10 rounded-full border-2 border-border bg-background flex items-center justify-center z-10 transition-colors group-hover:border-accent group-hover:text-accent ${isEven ? 'md:order-2' : 'md:order-2'}`}>
                    {getIcon(index)}
                  </div>

                  {/* Right Side Content (Desktop) / All Content (Mobile) */}
                  <div className={`flex-1 pl-16 md:pl-12 w-full ${isEven ? 'md:order-3' : 'md:order-1 invisible md:flex md:justify-end md:pr-12'}`}>
                     <div className={`flex flex-col items-start ${!isEven ? 'md:items-end md:text-right' : ''}`}>
                      <span className={`text-accent font-mono text-sm block mb-2 px-3 py-1 bg-accent/10 rounded-md ${!isEven ? 'md:hidden' : ''}`}>
                        {item.year}
                      </span>
                      {/* For the layout to work consistently, we only render the paragraph on the appropriate side visually */}
                      <p className={`text-foreground text-lg max-w-sm ${!isEven ? 'md:hidden' : ''}`}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

