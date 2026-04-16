"use client";

import { useState, useEffect, useRef } from "react";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, User, FileText } from "lucide-react";

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
    },
    {
      icon: Phone,
      title: "Phone Number",
      details: ["+1 (234) 567-890", "+1 (234) 567-891", "Mon-Fri: 9am - 6pm EST"],
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["info@hopefoundation.org", "support@hopefoundation.org", "We reply within 24 hours"],
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Monday - Friday: 9am - 6pm", "Saturday: 10am - 4pm", "Sunday: Closed"],
    },
  ];

  return (
    <div ref={sectionRef}>
      <section className="pt-32 pb-20 bg-[#0D0829] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#246B73]/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="animate-fade-up animate-in opacity-0 inline-block text-[#246B73] text-sm font-semibold uppercase tracking-widest mb-4">
            Get In Touch
          </span>
          <h1 className="animate-fade-up animate-in opacity-0 text-4xl md:text-5xl lg:text-6xl font-serif text-[#FAF7F2] mb-6">
            Contact Us
          </h1>
          <p className="animate-fade-up animate-in opacity-0 text-[#B8B5AF] text-lg max-w-3xl mx-auto">
            Have questions or want to get involved? We would love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[#130B40]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <span className="animate-fade-up animate-in opacity-0 inline-block text-[#246B73] text-sm font-semibold uppercase tracking-widest mb-4">
                Send Us a Message
              </span>
              <h2 className="animate-fade-up animate-in opacity-0 text-3xl font-serif text-[#FAF7F2] mb-6">
                We would love to hear from you
              </h2>
              <p className="animate-fade-up animate-in opacity-0 text-[#B8B5AF] mb-8">
                Whether you have a question about our programs, want to volunteer, or just want to say hello, feel free to reach out. Our team is here to help.
              </p>

              {submitted ? (
                <div className="animate-fade-up animate-in opacity-0 bg-[#246B73]/20 border border-[#246B73] rounded-xl p-8 text-center">
                  <MessageCircle className="w-16 h-16 text-[#F2856D] mx-auto mb-4" />
                  <h3 className="text-xl font-serif text-[#FAF7F2] mb-2">Message Sent!</h3>
                  <p className="text-[#B8B5AF]">
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
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#B8B5AF]" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                        className="w-full bg-[#0D0829] border border-[#246B73]/30 rounded-lg pl-12 pr-4 py-3 text-[#FAF7F2] placeholder-[#B8B5AF]/50 focus:outline-none focus:border-[#F2856D] transition-colors"
                      />
                    </div>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#B8B5AF]" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        required
                        className="w-full bg-[#0D0829] border border-[#246B73]/30 rounded-lg pl-12 pr-4 py-3 text-[#FAF7F2] placeholder-[#B8B5AF]/50 focus:outline-none focus:border-[#F2856D] transition-colors"
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <FileText className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#B8B5AF]" />
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      required
                      className="w-full bg-[#0D0829] border border-[#246B73]/30 rounded-lg pl-12 pr-4 py-3 text-[#FAF7F2] placeholder-[#B8B5AF]/50 focus:outline-none focus:border-[#F2856D] transition-colors"
                    />
                  </div>
                  <div className="relative">
                    <MessageCircle className="absolute left-4 top-4 w-5 h-5 text-[#B8B5AF]" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      rows={5}
                      required
                      className="w-full bg-[#0D0829] border border-[#246B73]/30 rounded-lg pl-12 pr-4 py-3 text-[#FAF7F2] placeholder-[#B8B5AF]/50 focus:outline-none focus:border-[#F2856D] transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#F2856D] to-[#F2C4B3] text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-[#F2856D]/30 transition-all disabled:opacity-50"
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
              <span className="animate-fade-up animate-in opacity-0 inline-block text-[#246B73] text-sm font-semibold uppercase tracking-widest mb-4">
                Contact Information
              </span>
              <h2 className="animate-fade-up animate-in opacity-0 text-3xl font-serif text-[#FAF7F2] mb-8">
                Find us at our office
              </h2>

              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="animate-fade-up animate-in opacity-0 bg-[#0D0829] rounded-xl p-6 border border-[#246B73]/20"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#F2856D]/20 to-[#F2C4B3]/20 flex items-center justify-center mb-4">
                      <info.icon className="w-6 h-6 text-[#F2856D]" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#FAF7F2] mb-2">{info.title}</h3>
                    <ul className="space-y-1">
                      {info.details.map((detail, i) => (
                        <li key={i} className="text-[#B8B5AF] text-sm">{detail}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="animate-fade-up animate-in opacity-0 mt-8">
                <div className="bg-gradient-to-br from-[#246B73]/30 to-[#130B40] rounded-2xl p-8 border border-[#246B73]/20">
                  <h3 className="text-xl font-serif text-[#FAF7F2] mb-4">Follow Us</h3>
                  <p className="text-[#B8B5AF] mb-6">
                    Stay connected with us on social media for updates, stories, and ways to get involved.
                  </p>
                  <div className="flex gap-4">
                    {["Facebook", "Instagram", "Twitter", "YouTube"].map((platform) => (
                      <a
                        key={platform}
                        href="#"
                        className="w-10 h-10 rounded-full bg-[#246B73]/30 flex items-center justify-center text-[#F2D7B6] hover:bg-[#F2856D] hover:text-white transition-colors"
                      >
                        <span className="text-xs font-medium">{platform[0]}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[#0D0829]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#130B40] rounded-3xl p-8 md:p-12 border border-[#246B73]/20">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-serif text-[#FAF7F2] mb-4">
                  Can not find what you are looking for?
                </h3>
                <p className="text-[#B8B5AF] mb-6">
                  Check out our FAQ section or reach out to us directly. We are here to help and answer any questions you may have.
                </p>
              </div>
              <div className="text-center lg:text-right">
                <a
                  href="mailto:info@hopefoundation.org"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#F2856D] to-[#F2C4B3] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl hover:shadow-[#F2856D]/30 transition-all"
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
