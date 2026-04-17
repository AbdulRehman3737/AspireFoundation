"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Heart, Sparkles, Rocket, Shield, Utensils } from "lucide-react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = heroRef.current?.querySelectorAll(".animate-in");
    elements?.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add("visible");
      }, i * 150);
    });
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#F9F5F3]" />
      
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 bg-grid-pattern-hero" />
      
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#246B73]/15 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#103B40]/10 rounded-full blur-[150px] animate-float-reverse" />
      <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-[#F2856D]/10 rounded-full blur-[100px] animate-float" />
      
      <div className="absolute top-20 left-10 w-2 h-2 bg-[#103B40] rounded-full animate-pulse" />
      <div className="absolute top-40 right-20 w-1.5 h-1.5 bg-[#246B73] rounded-full animate-pulse" />
      <div className="absolute bottom-40 left-1/4 w-1 h-1 bg-[#F2856D] rounded-full animate-pulse" />
      <div className="absolute top-1/3 right-1/4 w-3 h-3 border border-[#246B73]/50 rounded-full animate-ping" />
      
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#103B40]/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#246B73]/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="animate-fade-up animate-in opacity-0 inline-flex items-center gap-3 glass-panel px-6 py-3 rounded-full mb-10">
          <div className="w-2 h-2 bg-[#103B40] rounded-full animate-pulse" />
          <Heart className="w-4 h-4 text-[#103B40] fill-[#103B40]" />
          <span className="text-[#1a2e2f] text-sm font-medium">Making an Impact Since 2010</span>
        </div>

        <h1 className="animate-fade-up animate-in opacity-0 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold mb-8 leading-[0.9] tracking-tight">
          <span className="text-[#103B40]">Building</span>
          <br />
          <span className="gradient-text">Tomorrow</span>
          <br />
          <span className="text-[#246B73]">Together</span>
        </h1>

        <p className="animate-fade-up animate-in opacity-0 text-lg md:text-xl text-[#4a6266] max-w-3xl mx-auto mb-12 leading-relaxed">
          Through sustainable initiatives in orphan care, medical aid, food distribution, and emergency relief, we strive to uplift communities and bring hope where it is needed most.
        </p>

        <div className="animate-fade-up animate-in opacity-0 flex flex-col sm:flex-row items-center justify-center gap-5 mb-16">
          <Link
            href="/donate"
            className="group relative px-10 py-5 rounded-2xl font-bold text-lg overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#103B40] via-[#246B73] to-[#103B40] animate-gradient opacity-90" />
            <span className="absolute inset-[2px] bg-[#F9F5F3] rounded-xl" />
            <span className="relative z-10 flex items-center gap-3 text-transparent bg-clip-text bg-gradient-to-r from-[#103B40] to-[#246B73] group-hover:from-[#246B73] group-hover:to-[#103B40] transition-all">
              Donate Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
          <Link
            href="/about"
            className="group glass-card px-10 py-5 rounded-2xl font-bold text-lg flex items-center gap-3 hover:border-[#103B40]/40 transition-all"
          >
            <span className="text-[#1a2e2f] group-hover:text-[#103B40] transition-colors">Learn More</span>
            <Sparkles className="w-5 h-5 text-[#103B40] group-hover:rotate-12 transition-transform" />
          </Link>
        </div>

        <div className="animate-fade-up animate-in opacity-0 flex items-center justify-center gap-10 flex-wrap">
          {[
            { icon: Rocket, label: "Education", color: "#103B40" },
            { icon: Shield, label: "Healthcare", color: "#246B73" },
            { icon: Utensils, label: "Food Security", color: "#F2856D" },
            { icon: Sparkles, label: "Emergency Aid", color: "#103B40" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 group cursor-pointer">
              <div className="w-10 h-10 rounded-xl bg-[#246B73]/15 border border-[#246B73]/25 flex items-center justify-center group-hover:border-[#103B40]/50 group-hover:bg-[#103B40]/10 transition-all">
                <item.icon className="w-5 h-5" style={{ color: item.color }} />
              </div>
              <span className="text-sm font-medium text-[#4a6266] group-hover:text-[#103B40] transition-colors">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-[#103B40]/30 flex items-start justify-center p-2 relative overflow-hidden">
          <div className="w-1.5 h-3 bg-gradient-to-b from-[#103B40] to-[#246B73] rounded-full animate-pulse" />
          <div className="absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-[#103B40]/10 to-transparent" />
        </div>
      </div>
    </section>
  );
}
