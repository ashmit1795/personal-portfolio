import { useState, useEffect } from "react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";
import { Github } from "lucide-react";

export function GithubSection() {
  const [heatmapData, setHeatmapData] = useState<number[]>([]);

  useEffect(() => {
    // Generate data on the client side only
    const data = Array.from({ length: 154 }).map(() => Math.random());
    setHeatmapData(data);
  }, []);

  return (
    <div className="w-full">
      <SectionTitle>Code Activity</SectionTitle>
      
      <Card className="flex flex-col items-center justify-center p-12 bg-card/30 border-dashed border-2">
        <Github className="w-12 h-12 text-muted mb-6 opacity-50" />
        
        {/* Simulated Heatmap */}
        <div className="flex gap-1 mb-6 overflow-hidden max-w-full opacity-60">
          {heatmapData.length > 0 ? (
            Array.from({ length: 22 }).map((_, colIndex) => (
              <div key={colIndex} className="flex flex-col gap-1">
                {Array.from({ length: 7 }).map((_, rowIndex) => {
                  const dataIndex = colIndex * 7 + rowIndex;
                  const opacity = heatmapData[dataIndex];
                  return (
                    <div 
                      key={rowIndex}
                      className="w-3 h-3 rounded-sm bg-accent transition-opacity duration-300"
                      style={{ opacity: opacity < 0.2 ? 0.1 : opacity }}
                    />
                  );
                })}
              </div>
            ))
          ) : (
            // Fallback empty grid for initial server render to match client structure
            Array.from({ length: 22 }).map((_, colIndex) => (
              <div key={colIndex} className="flex flex-col gap-1">
                {Array.from({ length: 7 }).map((_, rowIndex) => (
                  <div key={rowIndex} className="w-3 h-3 rounded-sm bg-accent opacity-10" />
                ))}
              </div>
            ))
          )}
        </div>

        <p className="text-muted font-medium text-center">
          GitHub contribution graph integration coming soon.
        </p>
      </Card>
    </div>
  );
}
