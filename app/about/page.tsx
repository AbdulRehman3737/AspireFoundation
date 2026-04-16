"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Heart, Target, Eye, Users, Star, ArrowRight } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description: "We approach every initiative with genuine care and empathy, treating each individual with dignity and respect.",
    color: "#F2856D",
  },
  {
    icon: Target,
    title: "Impact",
    description: "We focus on measurable, sustainable outcomes that create lasting positive change in communities.",
    color: "#246B73",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "We maintain complete transparency in our operations, finances, and decision-making processes.",
    color: "#F2C4B3",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in the power of working together with communities, partners, and stakeholders.",
    color: "#F2D7B6",
  },
];

const milestones = [
  { year: "2010", title: "Foundation Established", description: "AspireFoundation was founded with a vision to create change." },
  { year: "2015", title: "Education Initiative Launch", description: "Started our first free education program for underprivileged children." },
  { year: "2018", title: "Global Expansion", description: "Expanded operations to support communities worldwide." },
  { year: "2022", title: "10,000 Lives Impacted", description: "Reached a significant milestone of helping thousands of families." },
  { year: "2024", title: "Continuing the Mission", description: "Growing stronger and reaching more people every day." },
];

export default function AboutPage() {
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
    <div ref={sectionRef}>
      <section className="pt-32 pb-20 bg-[#0a0a0f] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#246B73]/10 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F2856D]/30 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="animate-fade-up animate-in opacity-0 inline-block text-[#F2856D] text-sm font-display font-semibold uppercase tracking-widest mb-4">
            About Us
          </span>
          <h1 className="animate-fade-up animate-in opacity-0 text-4xl md:text-5xl lg:text-6xl font-display text-white mb-6">
            Our Story
          </h1>
          <p className="animate-fade-up animate-in opacity-0 text-[#F2D7B6]/70 text-lg max-w-3xl mx-auto">
            Dedicated to creating meaningful change through compassion, education, and sustainable initiatives.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[#103B40]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="animate-fade-up animate-in opacity-0 inline-flex items-center gap-2 glass-panel px-4 py-2 rounded-full mb-6">
                <Heart className="w-4 h-4 text-[#F2856D] fill-[#F2856D]" />
                <span className="text-[#F2D7B6]/80 text-sm font-medium">Our Beginnings</span>
              </span>
              <h2 className="animate-fade-up animate-in opacity-0 text-3xl md:text-4xl font-display text-white mb-6">
                Building Hope Since 2010
              </h2>
              <div className="animate-fade-up animate-in opacity-0 space-y-6">
                <p className="text-[#F2D7B6]/60 text-lg leading-relaxed">
                  The AspireFoundation was established with a simple yet powerful vision: to build a society where every individual has access to education, healthcare, and basic human necessities. What started as a small initiative has grown into a movement touching lives across multiple continents.
                </p>
                <p className="text-[#F2D7B6]/60 text-lg leading-relaxed">
                  Our founder, inspired by personal experiences with hardship, believed that collective action could transform communities. Today, that belief drives everything we do, from our educational programs to our emergency relief efforts.
                </p>
                <p className="text-[#F2D7B6]/60 text-lg leading-relaxed">
                  We work alongside local communities, understanding that sustainable change comes from within. Our role is to provide resources, support, and opportunities that empower individuals to build brighter futures for themselves and their families.
                </p>
              </div>
            </div>
            <div className="animate-fade-up animate-in opacity-0">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#F2856D]/20 to-[#246B73]/20 rounded-3xl blur-xl" />
                <div className="relative glass-card rounded-2xl aspect-[4/3] flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#F2856D] to-[#F2C4B3] flex items-center justify-center animate-pulse-glow">
                    <Heart className="w-16 h-16 text-white fill-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="animate-fade-up animate-in opacity-0 inline-flex items-center gap-2 glass-panel px-4 py-2 rounded-full mb-6">
              <Heart className="w-4 h-4 text-[#F2856D] fill-[#F2856D]" />
              <span className="text-[#F2D7B6]/80 text-sm font-medium">Our Values</span>
            </span>
            <h2 className="animate-fade-up animate-in opacity-0 text-3xl md:text-4xl font-display text-white">
              What We Stand For
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="animate-fade-up animate-in opacity-0 group glass-card rounded-2xl p-8 hover:-translate-y-1 transition-all duration-300"
              >
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                  style={{ background: `${value.color}15`, border: `1px solid ${value.color}30` }}
                >
                  <value.icon className="w-7 h-7" style={{ color: value.color }} />
                </div>
                <h3 className="text-xl font-display font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-[#F2D7B6]/50 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[#103B40]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="animate-fade-up animate-in opacity-0 inline-flex items-center gap-2 glass-panel px-4 py-2 rounded-full mb-6">
              <Heart className="w-4 h-4 text-[#F2856D] fill-[#F2856D]" />
              <span className="text-[#F2D7B6]/80 text-sm font-medium">Our Journey</span>
            </span>
            <h2 className="animate-fade-up animate-in opacity-0 text-3xl md:text-4xl font-display text-white">
              Milestones
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-[#F2856D] to-[#246B73]" />
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`animate-fade-up animate-in opacity-0 relative flex items-center ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "lg:pr-12 lg:text-right" : "lg:pl-12"}`}>
                    <div className="glass-card rounded-xl p-6">
                      <span className="font-display text-2xl" style={{ color: "#F2856D" }}>{milestone.year}</span>
                      <h3 className="text-xl font-display font-semibold text-white mt-2 mb-2">{milestone.title}</h3>
                      <p className="text-[#F2D7B6]/50">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#F2856D] border-4 border-[#103B40]" />
                  <div className="flex-1 hidden lg:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#103B40] via-[#246B73]/30 to-[#0a0a0f]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F2856D]/50 to-transparent" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-[#F2856D]/20 to-[#F2C4B3]/20 flex items-center justify-center">
            <Star className="w-10 h-10 text-[#F2D7B6]" />
          </div>
          <h2 className="animate-fade-up animate-in opacity-0 text-3xl md:text-4xl font-display text-white mb-6">
            Join Our Mission
          </h2>
          <p className="animate-fade-up animate-in opacity-0 text-[#F2D7B6]/70 text-lg mb-10 max-w-2xl mx-auto">
            Every contribution helps us continue our work. Whether you donate, volunteer, or simply spread the word, you become part of something meaningful.
          </p>
          <div className="animate-fade-up animate-in opacity-0 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/donate"
              className="group relative px-8 py-4 rounded-xl font-bold text-lg overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#F2856D] to-[#F2C4B3] opacity-90" />
              <span className="absolute inset-[2px] bg-[#0a0a0f] rounded-lg" />
              <span className="relative z-10 flex items-center gap-2 text-transparent bg-clip-text bg-gradient-to-r from-[#F2856D] to-[#F2D7B6]">
                Donate Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              href="/contact"
              className="glass-card px-8 py-4 rounded-xl font-bold text-lg text-[#F2D7B6] hover:text-white hover:border-[#F2856D]/40 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
