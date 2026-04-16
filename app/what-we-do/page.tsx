"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { GraduationCap, Utensils, Heart, Laptop, Globe, Moon, ArrowRight, Users, Shield, CheckCircle, Heart as HeartSolid } from "lucide-react";

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
    color: "from-[#246B73] to-[#103B40]",
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
    color: "from-[#246B73] to-[#00a0a8]",
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
    color: "from-[#F2D7B6] to-[#F2C4B3]",
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
  { icon: Users, value: "15,000+", label: "Lives Impacted", color: "#F2856D" },
  { icon: Globe, value: "50+", label: "Countries", color: "#246B73" },
  { icon: Shield, value: "100%", label: "Transparency", color: "#F2D7B6" },
  { icon: CheckCircle, value: "500+", label: "Projects Completed", color: "#F2C4B3" },
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
      <section className="pt-32 pb-20 bg-[#0a0a0f] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#F2856D]/10 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F2856D]/30 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="animate-fade-up animate-in opacity-0 inline-flex items-center gap-2 glass-panel px-4 py-2 rounded-full mb-6">
            <Heart className="w-4 h-4 text-[#F2856D] fill-[#F2856D]" />
            <span className="text-[#F2D7B6]/80 text-sm font-medium">Our Work</span>
          </span>
          <h1 className="animate-fade-up animate-in opacity-0 text-4xl md:text-5xl lg:text-6xl font-display text-white mb-6">
            What We Do
          </h1>
          <p className="animate-fade-up animate-in opacity-0 text-[#F2D7B6]/70 text-lg max-w-3xl mx-auto">
            Comprehensive programs designed to uplift communities and create lasting positive change.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[#103B40]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="animate-fade-up animate-in opacity-0 inline-flex items-center gap-2 glass-panel px-4 py-2 rounded-full mb-6">
              <Heart className="w-4 h-4 text-[#F2856D] fill-[#F2856D]" />
              <span className="text-[#F2D7B6]/80 text-sm font-medium">Our Programs</span>
            </span>
            <h2 className="animate-fade-up animate-in opacity-0 text-3xl md:text-4xl font-display text-white">
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
                  <h3 className="text-2xl md:text-3xl font-display font-semibold text-white mt-6 mb-2">
                    {program.title}
                  </h3>
                  <p className={`text-lg font-medium mb-4 bg-gradient-to-r ${program.color} bg-clip-text text-transparent`}>
                    {program.tagline}
                  </p>
                  <p className="text-[#F2D7B6]/60 leading-relaxed mb-6">
                    {program.description}
                  </p>
                  <div className="flex items-center gap-2 font-medium">
                    <span style={{ color: "#F2856D" }}>Impact:</span>
                    <span className="text-white">{program.impact}</span>
                  </div>
                </div>

                <div className={`glass-card rounded-2xl p-8 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h4 className="text-lg font-display font-semibold text-white mb-6">What We Offer:</h4>
                  <ul className="space-y-4">
                    {program.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#F2856D] flex-shrink-0 mt-0.5" />
                        <span className="text-[#F2D7B6]/60">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="animate-fade-up animate-in opacity-0 inline-flex items-center gap-2 glass-panel px-4 py-2 rounded-full mb-6">
              <Heart className="w-4 h-4 text-[#F2856D] fill-[#F2856D]" />
              <span className="text-[#F2D7B6]/80 text-sm font-medium">Our Reach</span>
            </span>
            <h2 className="animate-fade-up animate-in opacity-0 text-3xl md:text-4xl font-display text-white">
              Impact By The Numbers
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStats.map((stat, index) => (
              <div
                key={index}
                className="animate-fade-up animate-in opacity-0 text-center glass-card rounded-2xl p-8"
              >
                <div 
                  className="w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center"
                  style={{ background: `${stat.color}15`, border: `1px solid ${stat.color}30` }}
                >
                  <stat.icon className="w-8 h-8" style={{ color: stat.color }} />
                </div>
                <div className="text-3xl font-display font-semibold text-white mb-2">{stat.value}</div>
                <div className="text-[#F2D7B6]/50">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#103B40] via-[#246B73]/30 to-[#0a0a0f]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F2856D]/50 to-transparent" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="animate-fade-up animate-in opacity-0 text-3xl md:text-4xl font-display text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="animate-fade-up animate-in opacity-0 text-[#F2D7B6]/70 text-lg mb-10 max-w-2xl mx-auto">
            Your support enables us to continue our vital work. Every donation, no matter the size, helps us reach more people in need.
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
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
