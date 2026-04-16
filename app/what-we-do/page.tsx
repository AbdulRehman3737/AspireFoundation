"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { GraduationCap, Utensils, Heart, Laptop, Globe, Moon, ArrowRight, Users, Shield, CheckCircle } from "lucide-react";

const programs = [
  {
    id: "education",
    icon: GraduationCap,
    title: "Education Programs",
    tagline: "Building Futures Through Learning",
    description: "Our education initiatives provide completely free schooling to children from disadvantaged backgrounds. We believe education is the foundation of progress and the key to breaking the cycle of poverty.",
    features: [
      "Free primary and secondary education",
      "Digital literacy training",
      "Islamic education (Nazra)",
      "Skill development workshops",
      "Scholarship programs",
      "After-school tutoring",
    ],
    impact: "5,000+ students enrolled",
    color: "from-[#F2856D] to-[#F2C4B3]",
  },
  {
    id: "food",
    icon: Utensils,
    title: "Food Security",
    tagline: "No One Should Go Hungry",
    description: "Food insecurity affects millions of families struggling with financial hardships. Through our Monthly Ration Distribution Program, we ensure that essential food supplies reach those who need them most.",
    features: [
      "Monthly ration bags distribution",
      "Ramadan food drives",
      "Emergency food relief",
      "Community kitchens",
      "Nutritional education",
      "Support for food banks",
    ],
    impact: "2M+ meals distributed",
    color: "from-[#246B73] to-[#2d8a94]",
  },
  {
    id: "healthcare",
    icon: Heart,
    title: "Healthcare Initiatives",
    tagline: "Health for All",
    description: "Access to quality healthcare is a fundamental right. Our healthcare programs provide medical aid, health awareness, and support to underserved communities who cannot afford essential medical services.",
    features: [
      "Free medical camps",
      "Health screenings",
      "Medicine distribution",
      "Maternal health support",
      "Mental health awareness",
      "Emergency medical aid",
    ],
    impact: "10,000+ patients treated",
    color: "from-[#130B40] to-[#2a1d7a]",
  },
  {
    id: "digital",
    icon: Laptop,
    title: "Digital Education",
    tagline: "Bridging the Digital Divide",
    description: "In today's digital world, access to technology and digital skills is essential. We provide underprivileged children with digital education, equipping them with tools to learn, grow, and succeed.",
    features: [
      "Computer labs access",
      "Basic computing skills",
      "Internet safety education",
      "Programming basics",
      "Digital creativity workshops",
      "Technology donations",
    ],
    impact: "2,000+ students trained",
    color: "from-[#F2D7B6] to-[#f5e4cc]",
  },
  {
    id: "global",
    icon: Globe,
    title: "Global Humanitarian Aid",
    tagline: "Humanity Knows No Boundaries",
    description: "We stand in solidarity with those facing crises worldwide. Our global aid programs support displaced and struggling families, providing emergency relief and long-term assistance.",
    features: [
      "Emergency disaster relief",
      "Refugee support programs",
      "Conflict zone assistance",
      "Reconstruction support",
      "Psychosocial support",
      "Cross-border cooperation",
    ],
    impact: "50+ countries reached",
    color: "from-[#F2C4B3] to-[#e8a999]",
  },
  {
    id: "emergency",
    icon: Moon,
    title: "Emergency Relief",
    tagline: "Rapid Response When It Matters",
    description: "When disasters strike, we respond quickly and effectively. Our emergency relief programs provide immediate assistance to affected communities, helping them recover and rebuild.",
    features: [
      "24/7 emergency hotline",
      "Rapid assessment teams",
      "Shelter provision",
      "Clean water access",
      "Temporary settlements",
      "Recovery planning",
    ],
    impact: "500+ emergencies responded",
    color: "from-[#F2856D] to-[#d66b54]",
  },
];

const impactStats = [
  { icon: Users, value: "15,000+", label: "Lives Impacted" },
  { icon: Globe, value: "50+", label: "Countries" },
  { icon: Shield, value: "100%", label: "Transparency" },
  { icon: CheckCircle, value: "500+", label: "Projects Completed" },
];

export default function WhatWeDoPage() {
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
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#F2856D]/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="animate-fade-up animate-in opacity-0 inline-block text-[#246B73] text-sm font-semibold uppercase tracking-widest mb-4">
            Our Work
          </span>
          <h1 className="animate-fade-up animate-in opacity-0 text-4xl md:text-5xl lg:text-6xl font-serif text-[#FAF7F2] mb-6">
            What We Do
          </h1>
          <p className="animate-fade-up animate-in opacity-0 text-[#B8B5AF] text-lg max-w-3xl mx-auto">
            Comprehensive programs designed to uplift communities and create lasting positive change.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[#130B40]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="animate-fade-up animate-in opacity-0 inline-block text-[#246B73] text-sm font-semibold uppercase tracking-widest mb-4">
              Our Programs
            </span>
            <h2 className="animate-fade-up animate-in opacity-0 text-3xl md:text-4xl font-serif text-[#FAF7F2]">
              Making an Impact
            </h2>
          </div>

          <div className="space-y-24">
            {programs.map((program, index) => (
              <div
                key={program.id}
                id={program.id}
                className={`animate-fade-up animate-in opacity-0 grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${program.color} bg-clip-text`}>
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${program.color} flex items-center justify-center`}>
                      <program.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif text-[#FAF7F2] mt-6 mb-2">
                    {program.title}
                  </h3>
                  <p className={`text-lg font-medium mb-4 bg-gradient-to-r ${program.color} bg-clip-text text-transparent`}>
                    {program.tagline}
                  </p>
                  <p className="text-[#B8B5AF] leading-relaxed mb-6">
                    {program.description}
                  </p>
                  <div className="flex items-center gap-2 text-[#F2856D] font-medium">
                    <span>Impact:</span>
                    <span className="text-[#FAF7F2]">{program.impact}</span>
                  </div>
                </div>

                <div className={`bg-[#0D0829] rounded-2xl p-8 border border-[#246B73]/20 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h4 className="text-lg font-semibold text-[#FAF7F2] mb-6">What We Offer:</h4>
                  <ul className="space-y-4">
                    {program.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#F2856D] flex-shrink-0 mt-0.5" />
                        <span className="text-[#B8B5AF]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[#0D0829]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="animate-fade-up animate-in opacity-0 inline-block text-[#246B73] text-sm font-semibold uppercase tracking-widest mb-4">
              Our Reach
            </span>
            <h2 className="animate-fade-up animate-in opacity-0 text-3xl md:text-4xl font-serif text-[#FAF7F2]">
              Impact By The Numbers
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div
                key={index}
                className="animate-fade-up animate-in opacity-0 text-center bg-[#130B40] rounded-2xl p-8 border border-[#246B73]/20"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-[#F2856D]/20 to-[#F2C4B3]/20 flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-[#F2856D]" />
                </div>
                <div className="text-3xl font-serif text-[#FAF7F2] mb-2">{stat.value}</div>
                <div className="text-[#B8B5AF]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-gradient-to-br from-[#246B73] to-[#1a5058]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="animate-fade-up animate-in opacity-0 text-3xl md:text-4xl font-serif text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="animate-fade-up animate-in opacity-0 text-white/90 text-lg mb-10 max-w-2xl mx-auto">
            Your support enables us to continue our vital work. Every donation, no matter the size, helps us reach more people in need.
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
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
