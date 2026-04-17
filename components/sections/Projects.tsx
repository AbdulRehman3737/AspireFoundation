"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { GraduationCap, Utensils, Heart, Laptop, Globe, Moon, ArrowRight } from "lucide-react";

const projects = [
  {
    icon: Heart,
    title: "Orphan Care",
    description: "A safe and nurturing environment providing education, digital literacy, skill development, and daily nutrition for orphans. Our mission is to build confidence and dignity.",
    color: "from-[#103B40] to-[#246B73]",
    bgColor: "bg-[#103B40]/5",
  },
  {
    icon: Utensils,
    title: "Food Distribution",
    description: "Monthly ration distribution program providing essential food supplies to families struggling with financial hardships. Ensuring no family goes hungry.",
    color: "from-[#246B73] to-[#103B40]",
    bgColor: "bg-[#246B73]/5",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Completely free education for children from disadvantaged backgrounds. Building the foundation for a successful future through quality learning.",
    color: "from-[#103B40] to-[#00a0a8]",
    bgColor: "bg-[#103B40]/5",
  },
  {
    icon: Laptop,
    title: "Digital Education",
    description: "Equipping underprivileged children with digital skills and technology access. Preparing them for success in today's digital world.",
    color: "from-[#246B73] to-[#00a0a8]",
    bgColor: "bg-[#246B73]/5",
  },
  {
    icon: Globe,
    title: "Global Aid",
    description: "Supporting displaced and struggling families worldwide. Humanity knows no boundaries, and we stand in solidarity with those facing crises.",
    color: "from-[#103B40] to-[#246B73]",
    bgColor: "bg-[#103B40]/5",
  },
  {
    icon: Moon,
    title: "Ramadan Drive",
    description: "Special initiatives during the holy month of Ramadan to support underprivileged families. Reflecting values of generosity, reflection, and unity.",
    color: "from-[#246B73] to-[#103B40]",
    bgColor: "bg-[#246B73]/5",
  },
];

export default function Projects() {
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
    <section ref={sectionRef} className="py-20 md:py-32 bg-[#F9F5F3] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#246B73]/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-[#103B40]/10 rounded-full blur-[120px]" />
      
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#103B40]/20 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="animate-fade-up animate-in opacity-0 inline-flex items-center gap-2 glass-panel px-4 py-2 rounded-full mb-6">
            <Heart className="w-4 h-4 text-[#103B40] fill-[#103B40]" />
            <span className="text-[#1a2e2f] text-sm font-medium">Our Initiatives</span>
          </div>
          <h2 className="animate-fade-up animate-in opacity-0 text-3xl md:text-4xl lg:text-5xl font-display text-[#103B40] mb-4">
            Our Projects
          </h2>
          <p className="animate-fade-up animate-in opacity-0 text-[#4a6266] text-lg max-w-2xl mx-auto">
            Discover the various programs and initiatives that are making a real difference in communities around the world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="animate-fade-up animate-in opacity-0 group relative glass-card rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-500"
            >
              <div className={`absolute inset-0 ${project.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className={`h-1 bg-gradient-to-r ${project.color}`} />
              
              <div className="p-8">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg ${project.color.includes('#103B40') ? 'shadow-[#103B40]/20' : 'shadow-[#246B73]/20'}`}>
                  <project.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-display font-semibold text-[#1a2e2f] mb-3">{project.title}</h3>
                
                <p 
                  className="text-[#4a6266] leading-relaxed mb-6"
                  dangerouslySetInnerHTML={{ __html: project.description }}
                />
                
                <Link
                  href="/what-we-do"
                  className="inline-flex items-center gap-2 text-[#103B40] font-medium hover:gap-3 transition-all group/link"
                >
                  Learn More 
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
