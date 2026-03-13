"use client";

import Image from "next/image";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimateIn } from "@/components/ui/AnimateIn";

export function AboutSection() {
  return (
    <div className="w-full">
      <AnimateIn>
        <SectionTitle>I like understanding how systems work.</SectionTitle>
      </AnimateIn>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <AnimateIn delay={0.1} className="order-2 lg:order-1 space-y-6 text-base md:text-lg text-muted leading-relaxed">
          <p>
            My journey started during the 2020 lockdown when I was in 10th grade. While distributing educational resources through Telegram and running a peer learning community called &quot;Easy Learning&quot;, I got curious about building a dedicated website for the group. That curiosity led me to WordPress, where I first learned about domains, SSL, SEO, and the basics of getting a site on the internet.
          </p>
          <p>
            As I transitioned to studying Computer Science formally at university, my focus shifted from website builders to writing real code. I started with HTML, CSS, and JavaScript, but quickly found myself drawn to the deeper mechanics of how web applications run. Today, my core focus is backend development—building APIs, understanding database optimizations, and exploring the scalable architecture involved in DevOps and cloud systems.
          </p>
        </AnimateIn>
        
        <AnimateIn delay={0.2} className="order-1 lg:order-2 relative w-full aspect-square md:aspect-video lg:aspect-square rounded-2xl overflow-hidden border border-border bg-card">
          <Image
            src="/childhood-placeholder.jpg"
            alt="My early journey"
            fill
            className="object-cover opacity-80 hover:opacity-100"
            style={{ transition: "opacity 0.5s ease" }}
          />
        </AnimateIn>
      </div>
    </div>
  );
}
