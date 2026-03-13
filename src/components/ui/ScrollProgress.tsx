"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [activeHash, setActiveHash] = useState<string>("");

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section[id]"));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHash(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const sectionsList = [
    { id: "hero", label: "Hero" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "journey", label: "Journey" },
    { id: "education", label: "Education" },
    { id: "stack", label: "Stack" },
    { id: "github", label: "GitHub" },
    { id: "learning", label: "Learning" },
    { id: "contact", label: "Contact" },
  ];

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed right-6 md:right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-3">
      {sectionsList.map((section) => {
        const isActive = activeHash === section.id;
        return (
          <button
            key={section.id}
            onClick={() => handleScrollTo(section.id)}
            className="group p-1.5 flex items-center justify-center relative cursor-pointer"
            aria-label={`Scroll to ${section.label}`}
          >
            <span
              className={`block rounded-full ${
                isActive
                  ? "w-[6px] h-[6px] bg-accent scale-[1.4]"
                  : "w-[6px] h-[6px] bg-muted/30 group-hover:bg-muted/60"
              }`}
              style={{ transition: "all 0.3s ease" }}
            />
          </button>
        );
      })}
    </div>
  );
}
