import { SectionTitle } from "@/components/ui/SectionTitle";

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32">
      <SectionTitle>I like understanding how systems work.</SectionTitle>
      
      <div className="max-w-3xl space-y-6 text-lg text-muted leading-relaxed">
        <p>
          My journey started during the 2020 lockdown when I was in 10th grade. While distributing educational resources through Telegram and running a peer learning community called "Easy Learning", I got curious about building a dedicated website for the group. That curiosity led me to WordPress, where I first learned about domains, SSL, SEO, and the basics of getting a site on the internet.
        </p>
        <p>
          As I transitioned to studying Computer Science formally at university, my focus shifted from website builders to writing real code. I started with HTML, CSS, and JavaScript, but quickly found myself drawn to the deeper mechanics of how web applications run. Today, my core focus is backend development—building APIs, understanding database optimizations, and exploring the scalable architecture involved in DevOps and cloud systems.
        </p>
      </div>
    </section>
  );
}
