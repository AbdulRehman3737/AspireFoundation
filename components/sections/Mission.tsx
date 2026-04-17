"use client";

import { useEffect, useRef } from "react";
import { Target, Heart, Globe, TrendingUp, Shield, HandHeart } from "lucide-react";

const missionPoints = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To provide free education, accessible healthcare, hunger relief, and global humanitarian aid to those in need.",
    color: "#103B40",
  },
  {
    icon: HandHeart,
    title: "Empowerment",
    description: "Through vocational training and community support, we empower individuals to achieve self-sufficiency.",
    color: "#246B73",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "With the help of our team, volunteers, and supporters, we strive to bring hope, dignity, and happiness worldwide.",
    color: "#103B40",
  },
  {
    icon: TrendingUp,
    title: "Sustainability",
    description: "We focus on long-term solutions that create lasting change in communities.",
    color: "#246B73",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Every donation is handled with transparency and used efficiently for maximum impact.",
    color: "#103B40",
  },
  {
    icon: Heart,
    title: "Compassion",
    description: "We treat every individual with dignity and work from a place of genuine care.",
    color: "#246B73",
  },
];

export default function Mission() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".animate-in").forEach((el, i) => {
              setTimeout(() => {
                el.classList.add("visible");
              }, i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-[#103B40] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F2856D]/30 to-transparent" />
      
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#246B73]/20 rounded-full blur-[150px]" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-[#F2856D]/10 rounded-full blur-[120px]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="animate-fade-up animate-in opacity-0 inline-flex items-center gap-2 glass-panel px-4 py-2 rounded-full mb-6">
            <Heart className="w-4 h-4 text-[#103B40] fill-[#103B40]" />
            <span className="text-[#1a2e2f] text-sm font-medium">What Drives Us</span>
          </div>
          <h2 className="animate-fade-up animate-in opacity-0 text-3xl md:text-4xl lg:text-5xl font-display text-white">
            Mission <span className="gradient-text-coral">Statement</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {missionPoints.map((point, index) => (
            <div
              key={index}
              className="animate-fade-up animate-in opacity-0 group glass-card rounded-2xl p-8 hover:-translate-y-1 transition-all duration-300"
            >
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                style={{ background: `${point.color}20`, border: `1px solid ${point.color}40` }}
              >
                <point.icon className="w-7 h-7" style={{ color: point.color }} />
              </div>
              <h3 className="text-xl font-display font-semibold text-[#1a2e2f] mb-3">{point.title}</h3>
              <p className="text-[#4a6266] leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
