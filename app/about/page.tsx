"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Heart, Target, Eye, Users, Star, ArrowRight } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description: "We approach every initiative with genuine care and empathy, treating each individual with dignity and respect.",
  },
  {
    icon: Target,
    title: "Impact",
    description: "We focus on measurable, sustainable outcomes that create lasting positive change in communities.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "We maintain complete transparency in our operations, finances, and decision-making processes.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in the power of working together with communities, partners, and stakeholders.",
  },
];

const milestones = [
  { year: "2010", title: "Foundation Established", description: "Hope Foundation was founded with a vision to create change." },
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
      <section className="pt-32 pb-20 bg-[#0D0829] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#246B73]/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="animate-fade-up animate-in opacity-0 inline-block text-[#246B73] text-sm font-semibold uppercase tracking-widest mb-4">
            About Us
          </span>
          <h1 className="animate-fade-up animate-in opacity-0 text-4xl md:text-5xl lg:text-6xl font-serif text-[#FAF7F2] mb-6">
            Our Story
          </h1>
          <p className="animate-fade-up animate-in opacity-0 text-[#B8B5AF] text-lg max-w-3xl mx-auto">
            Dedicated to creating meaningful change through compassion, education, and sustainable initiatives.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[#130B40]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="animate-fade-up animate-in opacity-0 inline-block text-[#246B73] text-sm font-semibold uppercase tracking-widest mb-4">
                Our Beginnings
              </span>
              <h2 className="animate-fade-up animate-in opacity-0 text-3xl md:text-4xl font-serif text-[#FAF7F2] mb-6">
                Building Hope Since 2010
              </h2>
              <div className="animate-fade-up animate-in opacity-0 space-y-6">
                <p className="text-[#B8B5AF] text-lg leading-relaxed">
                  The Hope Foundation was established with a simple yet powerful vision: to build a society where every individual has access to education, healthcare, and basic human necessities. What started as a small initiative has grown into a movement touching lives across multiple continents.
                </p>
                <p className="text-[#B8B5AF] text-lg leading-relaxed">
                  Our founder, inspired by personal experiences with hardship, believed that collective action could transform communities. Today, that belief drives everything we do, from our educational programs to our emergency relief efforts.
                </p>
                <p className="text-[#B8B5AF] text-lg leading-relaxed">
                  We work alongside local communities, understanding that sustainable change comes from within. Our role is to provide resources, support, and opportunities that empower individuals to build brighter futures for themselves and their families.
                </p>
              </div>
            </div>
            <div className="animate-fade-up animate-in opacity-0">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#F2856D]/20 to-[#246B73]/20 rounded-3xl blur-xl" />
                <div className="relative bg-gradient-to-br from-[#246B73]/30 to-[#130B40] rounded-2xl aspect-[4/3] flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#F2856D] to-[#F2C4B3] flex items-center justify-center">
                    <Heart className="w-16 h-16 text-white fill-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[#0D0829]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="animate-fade-up animate-in opacity-0 inline-block text-[#246B73] text-sm font-semibold uppercase tracking-widest mb-4">
              Our Values
            </span>
            <h2 className="animate-fade-up animate-in opacity-0 text-3xl md:text-4xl font-serif text-[#FAF7F2]">
              What We Stand For
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="animate-fade-up animate-in opacity-0 group bg-[#130B40] rounded-2xl p-8 border border-[#246B73]/20 hover:border-[#F2856D]/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#F2856D]/20 to-[#F2C4B3]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <value.icon className="w-7 h-7 text-[#F2856D]" />
                </div>
                <h3 className="text-xl font-serif text-[#FAF7F2] mb-3">{value.title}</h3>
                <p className="text-[#B8B5AF] leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[#130B40]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="animate-fade-up animate-in opacity-0 inline-block text-[#246B73] text-sm font-semibold uppercase tracking-widest mb-4">
              Our Journey
            </span>
            <h2 className="animate-fade-up animate-in opacity-0 text-3xl md:text-4xl font-serif text-[#FAF7F2]">
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
                    <div className="bg-[#0D0829] rounded-xl p-6 border border-[#246B73]/20">
                      <span className="text-[#F2856D] font-serif text-2xl">{milestone.year}</span>
                      <h3 className="text-xl font-serif text-[#FAF7F2] mt-2 mb-2">{milestone.title}</h3>
                      <p className="text-[#B8B5AF]">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#F2856D] border-4 border-[#130B40]" />
                  <div className="flex-1 hidden lg:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-gradient-to-br from-[#246B73] to-[#1a5058]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-white/10 flex items-center justify-center">
            <Star className="w-10 h-10 text-[#F2D7B6]" />
          </div>
          <h2 className="animate-fade-up animate-in opacity-0 text-3xl md:text-4xl font-serif text-white mb-6">
            Join Our Mission
          </h2>
          <p className="animate-fade-up animate-in opacity-0 text-white/90 text-lg mb-10 max-w-2xl mx-auto">
            Every contribution helps us continue our work. Whether you donate, volunteer, or simply spread the word, you become part of something meaningful.
          </p>
          <div className="animate-fade-up animate-in opacity-0 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/donate"
              className="group bg-white text-[#246B73] px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 hover:shadow-xl transition-all hover:-translate-y-1"
            >
              Donate Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#246B73] transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
