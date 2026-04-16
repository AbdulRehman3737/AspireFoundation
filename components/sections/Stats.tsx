"use client";

import { useEffect, useRef, useState } from "react";
import { Users, Heart, DollarSign, Utensils, Heart as HeartSolid } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: 500,
    suffix: "+",
    label: "Volunteers",
    color: "#246B73",
  },
  {
    icon: Heart,
    value: 15,
    suffix: "K+",
    label: "Children Helped",
    color: "#F2856D",
  },
  {
    icon: DollarSign,
    value: 3,
    prefix: "$",
    suffix: "M+",
    label: "Funds Raised",
    color: "#F2D7B6",
  },
  {
    icon: Utensils,
    value: 2,
    suffix: "M+",
    label: "Meals Provided",
    color: "#F2C4B3",
  },
];

function Counter({ value, prefix = "", suffix = "", color }: { value: number; prefix?: string; suffix: string; color: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            const duration = 2000;
            const steps = 60;
            const increment = value / steps;
            let current = 0;
            
            const timer = setInterval(() => {
              current += increment;
              if (current >= value) {
                setCount(value);
                clearInterval(timer);
              } else {
                setCount(Math.floor(current));
              }
            }, duration / steps);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <span ref={ref} className="font-display text-4xl md:text-5xl lg:text-6xl text-white" style={{ textShadow: `0 0 30px ${color}40` }}>
      {prefix}{count}{suffix}
    </span>
  );
}

export default function Stats() {
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
    <section ref={sectionRef} className="py-20 md:py-32 bg-[#0a0a0f] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#F2856D]/30 to-transparent" />
      
      <div className="absolute top-1/4 left-1/3 w-[400px] h-[400px] bg-[#246B73]/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-[#F2856D]/10 rounded-full blur-[120px]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="animate-fade-up animate-in opacity-0 inline-flex items-center gap-2 glass-panel px-4 py-2 rounded-full mb-6">
            <Heart className="w-4 h-4 text-[#F2856D] fill-[#F2856D]" />
            <span className="text-[#F2D7B6]/80 text-sm font-medium">Our Impact</span>
          </div>
          <h2 className="animate-fade-up animate-in opacity-0 text-3xl md:text-4xl lg:text-5xl font-display text-white mb-4">
            Numbers That <span className="gradient-text-coral">Speak</span>
          </h2>
          <p className="animate-fade-up animate-in opacity-0 text-[#F2D7B6]/50 text-lg max-w-2xl mx-auto">
            We have numbers that push us to give our best and make sure that we break our own records. We are happy to be growing and helping more each day.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="animate-fade-up animate-in opacity-0 text-center group"
            >
              <div 
                className="w-20 h-20 mx-auto mb-6 rounded-2xl glass-card flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                style={{ boxShadow: `0 0 30px ${stat.color}20` }}
              >
                <stat.icon className="w-10 h-10" style={{ color: stat.color }} />
              </div>
              <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} color={stat.color} />
              <p className="text-[#F2D7B6]/50 mt-3 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
