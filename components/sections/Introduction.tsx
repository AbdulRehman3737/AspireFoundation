"use client";

import { useEffect, useRef } from "react";
import { GraduationCap, Heart, Users } from "lucide-react";

export default function Introduction() {
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
      
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#103B40]/20 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div className="animate-fade-up animate-in opacity-0 inline-flex items-center gap-2 glass-panel px-4 py-2 rounded-full mb-6">
              <Heart className="w-4 h-4 text-[#103B40] fill-[#103B40]" />
              <span className="text-[#1a2e2f] text-sm font-medium">Who We Are</span>
            </div>
            <h2 className="animate-fade-up animate-in opacity-0 text-3xl md:text-4xl lg:text-5xl font-display text-[#103B40] mb-8">
              Introduction
            </h2>
            <div className="animate-fade-up animate-in opacity-0 space-y-6">
              <p className="text-[#4a6266] text-lg leading-relaxed">
                The AspireFoundation is a community-driven organization dedicated to spreading hope, support, and opportunities to underprivileged individuals. Founded on the principles of compassion, equality, and empowerment, our society works tirelessly to improve lives through education, healthcare, food security, and social welfare initiatives.
              </p>
              <p className="text-[#4a6266] text-lg leading-relaxed">
                We believe in creating meaningful change by providing essential resources and establishing long-term solutions that uplift communities. From free education to healthcare services, monthly ration distribution, and global humanitarian efforts, every program is designed to build sustainable impact.
              </p>
            </div>
          </div>

          <div className="animate-fade-up animate-in opacity-0 grid grid-cols-2 gap-5">
            <div className="glass-card rounded-2xl p-6 text-center hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-[#103B40]/20 to-[#103B40]/5 flex items-center justify-center border border-[#103B40]/20">
                <GraduationCap className="w-8 h-8 text-[#103B40]" />
              </div>
              <h3 className="text-lg font-display font-semibold text-[#1a2e2f] mb-2">Education</h3>
              <p className="text-[#4a6266] text-sm">Free schooling for underprivileged children</p>
            </div>
            <div className="glass-card rounded-2xl p-6 text-center hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-[#246B73]/20 to-[#246B73]/5 flex items-center justify-center border border-[#246B73]/20">
                <Heart className="w-8 h-8 text-[#246B73]" />
              </div>
              <h3 className="text-lg font-display font-semibold text-[#1a2e2f] mb-2">Healthcare</h3>
              <p className="text-[#4a6266] text-sm">Medical aid and health awareness</p>
            </div>
            <div className="col-span-2 glass-card rounded-2xl p-6 text-center hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-[#F2856D]/20 to-[#F2856D]/5 flex items-center justify-center border border-[#F2856D]/20">
                <Users className="w-8 h-8 text-[#F2856D]" />
              </div>
              <h3 className="text-lg font-display font-semibold text-[#1a2e2f] mb-2">Community Support</h3>
              <p className="text-[#4a6266] text-sm">Building stronger communities through collective action</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
