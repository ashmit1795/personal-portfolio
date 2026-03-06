import Image from "next/image";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function AboutSection() {
  return (
    <section id="about" className="py-20 min-h-screen flex items-center w-full">
      <div className="w-full">
        <SectionTitle>I like understanding how systems work.</SectionTitle>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1 space-y-8 text-lg text-muted leading-relaxed">
            <p>
              My journey started during the 2020 lockdown when I was in 10th grade. While distributing educational resources through Telegram and running a peer learning community called "Easy Learning", I got curious about building a dedicated website for the group. That curiosity led me to WordPress, where I first learned about domains, SSL, SEO, and the basics of getting a site on the internet.
            </p>
            <p>
              As I transitioned to studying Computer Science formally at university, my focus shifted from website builders to writing real code. I started with HTML, CSS, and JavaScript, but quickly found myself drawn to the deeper mechanics of how web applications run. Today, my core focus is backend development—building APIs, understanding database optimizations, and exploring the scalable architecture involved in DevOps and cloud systems.
            </p>
          </div>
          
          <div className="order-1 lg:order-2 relative w-full aspect-square md:aspect-video lg:aspect-square rounded-2xl overflow-hidden border border-border bg-card">
            <Image
              src="/childhood-placeholder.jpg"
              alt="My early journey"
              fill
              className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

