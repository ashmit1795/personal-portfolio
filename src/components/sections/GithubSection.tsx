import { useState, useEffect } from "react";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function GithubSection() {
  const [heatmap, setHeatmap] = useState<number[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Generate an array of random opacities to simulate a heatmap
    const generateMap = () => {
      return Array.from({ length: 140 }).map(() => {
        // 70% chance of being empty/low, 30% chance of random high opacity
        return Math.random() > 0.7 ? Math.random() * 0.8 + 0.2 : 0.05;
      });
    };
    
    setHeatmap(generateMap());
    setMounted(true);
  }, []);

  return (
    <section id="github" className="py-20 min-h-screen flex items-center w-full">
      <div className="w-full">
        <SectionTitle>GitHub Contributions</SectionTitle>
        
        <div className="w-full bg-card/40 border border-border/60 hover:border-accent/30 transition-colors duration-500 rounded-2xl p-6 md:p-10 relative overflow-hidden group">
          
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-background/80 z-10 pointer-events-none" />
          
          <div className="grid grid-cols-20 sm:grid-cols-[repeat(28,minmax(0,1fr))] gap-1 md:gap-1.5 opacity-60 group-hover:opacity-100 transition-opacity duration-700 blur-[0.5px] group-hover:blur-none">
            {mounted ? heatmap.map((opacity, i) => (
              <div 
                key={i} 
                className="aspect-square rounded-[2px]"
                style={{
                  backgroundColor: `rgba(99, 102, 241, ${opacity})`,
                  border: `1px solid rgba(99, 102, 241, ${opacity > 0.1 ? opacity + 0.2 : 0.1})`
                }}
              />
            )) : Array.from({ length: 140 }).map((_, i) => (
              <div 
                key={i} 
                className="aspect-square rounded-[2px]"
                style={{
                  backgroundColor: `rgba(99, 102, 241, 0.05)`,
                  border: `1px solid rgba(99, 102, 241, 0.1)`
                }}
              />
            ))}
          </div>
          
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="bg-background/80 backdrop-blur-md px-6 py-3 rounded-xl border border-border shadow-2xl">
              <p className="text-foreground font-medium flex items-center gap-2">
                GitHub contribution graph coming soon.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
