"use client";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { Mail, Linkedin } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";

export function ContactSection() {
  return (
    <div className="w-full">
      <AnimateIn>
        <div className="max-w-xl mx-auto text-center flex flex-col items-center">
          <SectionTitle className="mb-6">Get In Touch</SectionTitle>
          
          <p className="text-base md:text-lg text-muted mb-10">
            I&apos;m currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, I&apos;ll try my best to get back to you!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
            <a
              href="mailto:hello@ashmitpatra.com"
              className="px-7 py-3.5 rounded-lg bg-foreground text-background font-medium hover:bg-foreground/90 hover:translate-y-[-2px] active:scale-95 flex items-center justify-center gap-3"
            >
              <Mail className="w-4 h-4" />
              Say Hello
            </a>
            
            <a
              href="https://linkedin.com/in/ashmitpatra"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-lg bg-transparent border border-border text-foreground font-medium hover:border-muted hover:bg-card hover:translate-y-[-2px] active:scale-95 flex items-center justify-center gap-3"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </AnimateIn>
    </div>
  );
}
