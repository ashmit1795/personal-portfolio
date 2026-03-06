import { SectionTitle } from "@/components/ui/SectionTitle";

export function GithubSection() {
  return (
    <section id="github" className="py-20 md:py-32 border-t border-border/50">
      <SectionTitle>GitHub Contributions</SectionTitle>
      
      <div className="w-full h-[200px] md:h-[300px] border border-dashed border-border/70 rounded-xl bg-card/30 flex items-center justify-center p-6 text-center">
        <p className="text-muted font-mono text-sm">
          GitHub contribution graph will appear here.
        </p>
      </div>
    </section>
  );
}
