"use client";

import { useState, useEffect, useRef } from "react";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, User, FileText, Heart } from "lucide-react";

export default function ContactPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      details: ["123 Hope Street, Suite 400", "New York, NY 10001", "United States"],
      color: "#F2856D",
    },
    {
      icon: Phone,
      title: "Phone Number",
      details: ["+1 (234) 567-890", "+1 (234) 567-891", "Mon-Fri: 9am - 6pm EST"],
      color: "#246B73",
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["info@aspirefoundation.org", "support@aspirefoundation.org", "We reply within 24 hours"],
      color: "#F2C4B3",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Monday - Friday: 9am - 6pm", "Saturday: 10am - 4pm", "Sunday: Closed"],
      color: "#F2D7B6",
    },
  ];

  return (
    <div ref={sectionRef}>
      <section className="pt-32 pb-20 bg-[#0a0a0f] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#246B73]/10 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F2856D]/30 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="animate-fade-up animate-in opacity-0 inline-flex items-center gap-2 glass-panel px-4 py-2 rounded-full mb-6">
            <Heart className="w-4 h-4 text-[#F2856D] fill-[#F2856D]" />
            <span className="text-[#F2D7B6]/80 text-sm font-medium">Get In Touch</span>
          </span>
          <h1 className="animate-fade-up animate-in opacity-0 text-4xl md:text-5xl lg:text-6xl font-display text-white mb-6">
            Contact Us
          </h1>
          <p className="animate-fade-up animate-in opacity-0 text-[#F2D7B6]/70 text-lg max-w-3xl mx-auto">
            Have questions or want to get involved? We would love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[#103B40]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <span className="animate-fade-up animate-in opacity-0 inline-flex items-center gap-2 glass-panel px-4 py-2 rounded-full mb-6">
                <Heart className="w-4 h-4 text-[#F2856D] fill-[#F2856D]" />
                <span className="text-[#F2D7B6]/80 text-sm font-medium">Send Us a Message</span>
              </span>
              <h2 className="animate-fade-up animate-in opacity-0 text-3xl font-display font-semibold text-white mb-6">
                We would love to hear from you
              </h2>
              <p className="animate-fade-up animate-in opacity-0 text-[#F2D7B6]/60 mb-8">
                Whether you have a question about our programs, want to volunteer, or just want to say hello, feel free to reach out. Our team is here to help.
              </p>

              {submitted ? (
                <div className="animate-fade-up animate-in opacity-0 glass-card rounded-xl p-8 text-center">
                  <MessageCircle className="w-16 h-16 text-[#F2856D] mx-auto mb-4" />
                  <h3 className="text-xl font-display font-semibold text-white mb-2">Message Sent!</h3>
                  <p className="text-[#F2D7B6]/60">
                    Thank you for reaching out. We will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-[#F2856D] hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="animate-fade-up animate-in opacity-0 space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#F2D7B6]/50" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                        className="w-full bg-[#0a0a0f] border border-[#246B73]/30 rounded-lg pl-12 pr-4 py-3 text-white placeholder-[#F2D7B6]/40 focus:outline-none focus:border-[#F2856D] transition-colors"
                      />
                    </div>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#F2D7B6]/50" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        required
                        className="w-full bg-[#0a0a0f] border border-[#246B73]/30 rounded-lg pl-12 pr-4 py-3 text-white placeholder-[#F2D7B6]/40 focus:outline-none focus:border-[#F2856D] transition-colors"
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <FileText className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#F2D7B6]/50" />
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      required
                      className="w-full bg-[#0a0a0f] border border-[#246B73]/30 rounded-lg pl-12 pr-4 py-3 text-white placeholder-[#F2D7B6]/40 focus:outline-none focus:border-[#F2856D] transition-colors"
                    />
                  </div>
                  <div className="relative">
                    <MessageCircle className="absolute left-4 top-4 w-5 h-5 text-[#F2D7B6]/50" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      rows={5}
                      required
                      className="w-full bg-[#0a0a0f] border border-[#246B73]/30 rounded-lg pl-12 pr-4 py-3 text-white placeholder-[#F2D7B6]/40 focus:outline-none focus:border-[#F2856D] transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#F2856D] to-[#F2C4B3] text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-[#F2856D]/30 transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            <div className="space-y-6">
              <span className="animate-fade-up animate-in opacity-0 inline-flex items-center gap-2 glass-panel px-4 py-2 rounded-full mb-4">
                <Heart className="w-4 h-4 text-[#F2856D] fill-[#F2856D]" />
                <span className="text-[#F2D7B6]/80 text-sm font-medium">Contact Information</span>
              </span>
              <h2 className="animate-fade-up animate-in opacity-0 text-3xl font-display font-semibold text-white mb-8">
                Find us at our office
              </h2>

              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="animate-fade-up animate-in opacity-0 glass-card rounded-xl p-6"
                  >
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                      style={{ background: `${info.color}15`, border: `1px solid ${info.color}30` }}
                    >
                      <info.icon className="w-6 h-6" style={{ color: info.color }} />
                    </div>
                    <h3 className="text-lg font-display font-semibold text-white mb-2">{info.title}</h3>
                    <ul className="space-y-1">
                      {info.details.map((detail, i) => (
                        <li key={i} className="text-[#F2D7B6]/50 text-sm">{detail}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="animate-fade-up animate-in opacity-0 mt-8">
                <div className="glass-card rounded-2xl p-8">
                  <h3 className="text-xl font-display font-semibold text-white mb-4">Follow Us</h3>
                  <p className="text-[#F2D7B6]/60 mb-6">
                    Stay connected with us on social media for updates, stories, and ways to get involved.
                  </p>
                  <div className="flex gap-4">
                    <a 
                      href="https://github.com/AbdulRehman3737" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-[#246B73]/30 flex items-center justify-center text-[#F2D7B6] hover:text-[#F2856D] hover:bg-[#F2856D]/20 transition-all"
                      aria-label="GitHub"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/abdul-rehman-10876521b/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-[#246B73]/30 flex items-center justify-center text-[#F2D7B6] hover:text-[#F2856D] hover:bg-[#F2856D]/20 transition-all"
                      aria-label="LinkedIn"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    </a>
                    <a 
                      href="https://www.upwork.com/freelancers/~013eb66e648776c44d" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-[#246B73]/30 flex items-center justify-center text-[#F2D7B6] hover:text-[#14F195] hover:bg-[#14F195]/20 transition-all"
                      aria-label="Upwork"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.335 18.153h2.213V6.51h-2.213v11.643zm-4.456 0h2.213V9.927h-2.213v8.226zm-4.192 0h2.213V7.518H9.687v10.635zm-4.14-4.463h1.88v1.077h-1.88V13.69zm0-3.26h1.88v1.078h-1.88v-1.078zM2.85 18.153h2.213V6.51H2.85v11.643zM17.92 3.897h-6.47v6.462h6.47V3.897z"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-3xl p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-display font-semibold text-white mb-4">
                  Can not find what you are looking for?
                </h3>
                <p className="text-[#F2D7B6]/60 mb-6">
                  Check out our FAQ section or reach out to us directly. We are here to help and answer any questions you may have.
                </p>
              </div>
              <div className="text-center lg:text-right">
                <a
                  href="mailto:info@aspirefoundation.org"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#F2856D] to-[#F2C4B3] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-[#F2856D]/30 transition-all"
                >
                  <Mail className="w-5 h-5" />
                  Email Us Directly
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
