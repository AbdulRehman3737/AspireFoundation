"use client";

import { useEffect, useRef } from "react";
import { Quote, Heart } from "lucide-react";

export default function Vision() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".animate-in").forEach((el, i) => {
              setTimeout(() => {
                el.classList.add("visible");
              }, i * 150);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-[#F9F5F3] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#103B40]/30 to-transparent" />
      
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#246B73]/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#103B40]/10 rounded-full blur-[120px]" />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-up animate-in opacity-0 inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[#103B40]/10 to-[#246B73]/10 mb-10 border border-[#103B40]/20">
          <Quote className="w-10 h-10 text-[#103B40]" />
        </div>
        
        <span className="animate-fade-up animate-in opacity-0 inline-block text-[#103B40] text-sm font-display font-semibold uppercase tracking-widest mb-8">
          Our Vision
        </span>
        
        <blockquote className="animate-fade-up animate-in opacity-0 text-2xl md:text-3xl lg:text-4xl text-[#1a2e2f] leading-relaxed mb-10 font-display italic">
          &ldquo;To build a society where every individual, regardless of their background, has access to education, healthcare, and basic human necessities leading to a future full of hope, dignity, and happiness.&rdquo;
        </blockquote>
        
        <div className="animate-fade-up animate-in opacity-0 flex items-center justify-center gap-4">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#103B40]" />
          <Heart className="w-5 h-5 text-[#103B40] fill-[#103B40]" />
          <span className="text-[#4a6266] font-display font-medium text-sm uppercase tracking-wider">AspireFoundation</span>
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#103B40]" />
        </div>
      </div>
    </section>
  );
}
