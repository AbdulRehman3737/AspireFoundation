"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";

export default function CTASection() {
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
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 relative overflow-hidden bg-[#246B73]"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F2856D]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F2856D]/30 to-transparent" />

      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#103B40]/30 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#F2856D]/20 rounded-full blur-[150px]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="animate-fade-up animate-in opacity-0 text-3xl md:text-4xl lg:text-5xl font-display text-white mb-8">
          Let's Make People <span className="gradient-text-coral">Smile</span>
        </h2>

        <p className="animate-fade-up animate-in opacity-0 text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-12">
          Join us in our mission to bring hope and happiness to those who have
          been deprived by unfortunate circumstances. Your support can change
          lives.
        </p>

        <div className="animate-fade-up animate-in opacity-0 flex flex-col sm:flex-row items-center justify-center gap-5">
          <Link
            href="/donate"
            className="group relative px-10 py-5 rounded-2xl font-bold text-lg overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#F2856D] to-[#F2C4B3] opacity-90" />
            <span className="absolute inset-[2px] bg-[#246B73] rounded-xl" />
            <span className="relative z-10 flex items-center gap-3 text-transparent bg-clip-text bg-gradient-to-r from-white to-[#F2D7B6]">
              Make a Donation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
          <Link
            href="/contact"
            className="glass-card px-10 py-5 rounded-2xl font-bold text-lg text-[#1a2e2f] hover:border-[#103B40]/40 transition-all"
          >
            Get Involved
          </Link>
        </div>
      </div>
    </section>
  );
}
