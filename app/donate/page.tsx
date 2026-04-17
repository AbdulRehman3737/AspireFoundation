"use client";

import { useState, useEffect, useRef } from "react";
import {
  Heart,
  Shield,
  CreditCard,
  Check,
  ArrowRight,
  RefreshCw,
  Gift,
  Users,
} from "lucide-react";

const presetAmounts = [
  { amount: 25, impact: "Provides school supplies for 1 child for a month" },
  { amount: 50, impact: "Feeds a family of 4 for one week" },
  { amount: 100, impact: "Covers medical treatment for 1 patient" },
  { amount: 250, impact: "Sponsors a child's education for 3 months" },
];

export default function DonatePage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(100);
  const [customAmount, setCustomAmount] = useState("");
  const [isRecurring, setIsRecurring] = useState(false);
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
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const donationAmount = customAmount
    ? parseInt(customAmount)
    : selectedAmount || 0;

  return (
    <div ref={sectionRef}>
      <section className="pt-32 pb-20 bg-[#F9F5F3] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#246B73]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#103B40]/10 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#103B40]/30 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="animate-fade-up animate-in opacity-0 inline-flex items-center gap-2 glass-panel px-4 py-2 rounded-full mb-6">
            <Heart className="w-4 h-4 text-[#103B40] fill-[#103B40]" />
            <span className="text-[#1a2e2f] text-sm font-medium">
              Make a Difference
            </span>
          </span>
          <h1 className="animate-fade-up animate-in opacity-0 text-4xl md:text-5xl lg:text-6xl font-display text-[#103B40] mb-6">
            Donate Now
          </h1>
          <p className="animate-fade-up animate-in opacity-0 text-[#4a6266] text-lg max-w-3xl mx-auto">
            Your generous contribution helps us continue our mission to create
            positive change in communities around the world.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[#F9F5F3]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <div className="animate-fade-up animate-in opacity-0 glass-card rounded-2xl p-8">
                <h2 className="text-2xl font-display font-semibold text-[#1a2e2f] mb-2">
                  Select Amount
                </h2>
                <p className="text-[#4a6266] mb-8">
                  Choose a preset amount or enter a custom donation
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {presetAmounts.map((preset) => (
                    <button
                      key={preset.amount}
                      onClick={() => {
                        setSelectedAmount(preset.amount);
                        setCustomAmount("");
                      }}
                      className={`relative p-6 rounded-xl border-2 transition-all text-left ${
                        selectedAmount === preset.amount && !customAmount
                          ? "border-[#103B40] bg-[#103B40]/10"
                          : "border-[#103B40]/20 bg-white hover:border-[#103B40]/40"
                      }`}
                    >
                      <div className="text-2xl font-display font-semibold text-[#1a2e2f] mb-2">
                        ${preset.amount}
                      </div>
                      <div className="text-sm text-[#4a6266]">
                        {preset.impact}
                      </div>
                      {selectedAmount === preset.amount && !customAmount && (
                        <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-[#103B40] flex items-center justify-center">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>

                <div className="mb-8">
                  <label className="block text-[#4a6266] mb-2">
                    Or enter custom amount
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#4a6266]/50 text-xl">
                      $
                    </span>
                    <input
                      type="number"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setSelectedAmount(null);
                      }}
                      placeholder="Enter amount"
                      className="w-full bg-white border border-[#103B40]/20 rounded-lg pl-10 pr-4 py-4 text-[#1a2e2f] text-xl placeholder-[#4a6266]/40 focus:outline-none focus:border-[#103B40] transition-colors"
                    />
                  </div>
                </div>

                <div className="mb-8">
                  <button
                    onClick={() => setIsRecurring(!isRecurring)}
                    className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all w-full ${
                      isRecurring
                        ? "border-[#103B40] bg-[#103B40]/10"
                        : "border-[#103B40]/20 bg-white hover:border-[#103B40]/40"
                    }`}
                  >
                    <RefreshCw
                      className={`w-6 h-6 ${isRecurring ? "text-[#103B40]" : "text-[#4a6266]"}`}
                    />
                    <div className="text-left">
                      <div className="text-[#1a2e2f] font-medium">
                        Make this a monthly donation
                      </div>
                      <div className="text-sm text-[#4a6266]">
                        Your support will continue to make an impact
                      </div>
                    </div>
                    {isRecurring && (
                      <div className="ml-auto w-6 h-6 rounded-full bg-[#103B40] flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </button>
                </div>

                <form onSubmit={handleSubmit}>
                  <h3 className="text-xl font-display font-semibold text-[#1a2e2f] mb-4">
                    Your Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      required
                      className="bg-white border border-[#103B40]/20 rounded-lg px-4 py-3 text-[#1a2e2f] placeholder-[#4a6266]/40 focus:outline-none focus:border-[#103B40] transition-colors"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      required
                      className="bg-white border border-[#103B40]/20 rounded-lg px-4 py-3 text-[#1a2e2f] placeholder-[#4a6266]/40 focus:outline-none focus:border-[#103B40] transition-colors"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    className="w-full bg-white border border-[#103B40]/20 rounded-lg px-4 py-3 text-[#1a2e2f] placeholder-[#4a6266]/40 focus:outline-none focus:border-[#103B40] transition-colors mb-4"
                  />

                  <button
                    type="submit"
                    disabled={!donationAmount || isSubmitting}
                    className="w-full bg-gradient-to-r from-[#103B40] to-[#246B73] text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-[#103B40]/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        Donate ${donationAmount || 0}{" "}
                        {isRecurring ? "Monthly" : ""}
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="animate-fade-up animate-in opacity-0 glass-card rounded-2xl p-8">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#103B40]/20 to-[#246B73]/20 flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 text-[#103B40]" />
                </div>
                <h3 className="text-xl font-display font-semibold text-[#1a2e2f] mb-4">
                  Your Impact
                </h3>
                <div className="text-3xl font-display font-semibold text-[#103B40] mb-4">
                  ${donationAmount || 0}
                  {isRecurring && (
                    <span className="text-lg text-[#4a6266]">/month</span>
                  )}
                </div>
                <p className="text-[#4a6266]">
                  {donationAmount >= 250
                    ? "Your donation will sponsor a child's education for 3 months, providing school supplies, meals, and learning materials."
                    : donationAmount >= 100
                      ? "Your donation will cover medical treatment for a patient in need, including medicines and follow-up care."
                      : donationAmount >= 50
                        ? "Your donation will feed a family of 4 for one week with nutritious food supplies."
                        : donationAmount >= 25
                          ? "Your donation will provide school supplies for one child for an entire month."
                          : "Select an amount above to see your impact."}
                </p>
              </div>

              <div className="animate-fade-up animate-in opacity-0 glass-card rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6 text-[#103B40]" />
                  <h3 className="text-lg font-display font-semibold text-[#1a2e2f]">
                    Trust & Security
                  </h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "100% secure SSL encrypted donation",
                    "Tax-deductible receipts provided",
                    "92% of funds go directly to programs",
                    "Verified 501(c)(3) nonprofit organization",
                    "Regular impact reports published",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-[#4a6266] text-sm"
                    >
                      <Check className="w-4 h-4 text-[#103B40] flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="animate-fade-up animate-in opacity-0 glass-card rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <CreditCard className="w-6 h-6 text-[#103B40]" />
                  <h3 className="text-lg font-display font-semibold text-[#1a2e2f]">
                    Payment Methods
                  </h3>
                </div>
                <div className="flex gap-4">
                  {["Visa", "MC", "Amex", "PayPal"].map((method) => (
                    <div
                      key={method}
                      className="px-4 py-2 bg-white rounded-lg text-[#4a6266] text-sm font-medium shadow-sm"
                    >
                      {method}
                    </div>
                  ))}
                </div>
              </div>

              <div className="animate-fade-up animate-in opacity-0 glass-card rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Gift className="w-6 h-6 text-[#103B40]" />
                  <span className="text-[#1a2e2f] font-medium">
                    Give as a Gift
                  </span>
                </div>
                <p className="text-[#4a6266] text-sm">
                  Honor someone special with a donation in their name. We will
                  send a printable card to your recipient.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {submitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1a2e2f]/50 backdrop-blur-sm">
          <div className="glass-card rounded-2xl p-12 max-w-md mx-4 text-center shadow-2xl">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#103B40] to-[#246B73] flex items-center justify-center animate-pulse-glow">
              <Heart className="w-10 h-10 text-white fill-white" />
            </div>
            <h2 className="text-2xl font-display font-semibold text-[#1a2e2f] mb-4">
              Thank You!
            </h2>
            <p className="text-[#4a6266] mb-8">
              Your generous donation of ${donationAmount}{" "}
              {isRecurring ? "monthly " : ""}will help us continue our mission
              to make a difference.
            </p>
            <p className="text-[#4a6266]/70 text-sm mb-8">
              A confirmation email has been sent to your inbox with your
              donation receipt.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="bg-gradient-to-r from-[#103B40] to-[#246B73] text-white px-8 py-3 rounded-xl font-semibold hover:shadow-xl hover:shadow-[#103B40]/30 transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <section className="py-20 md:py-32 bg-[#103B40]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="animate-fade-up animate-in opacity-0 inline-flex items-center gap-2 glass-panel px-4 py-2 rounded-full mb-6">
              <Heart className="w-4 h-4 text-[#103B40] fill-[#103B40]" />
              <span className="text-[#1a2e2f] text-sm font-medium">
                Other Ways to Help
              </span>
            </span>
            <h2 className="animate-fade-up animate-in opacity-0 text-3xl md:text-4xl font-display text-white">
              Get Involved
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Volunteer",
                description:
                  "Share your time and skills to make a direct impact in your community.",
                button: "Join as Volunteer",
                color: "#103B40",
              },
              {
                icon: Gift,
                title: "Fundraise",
                description:
                  "Start a fundraiser for AspireFoundation and rally your network to support our cause.",
                button: "Start Fundraising",
                color: "#246B73",
              },
              {
                icon: Heart,
                title: "Corporate Giving",
                description:
                  "Partner with us to create meaningful social impact through corporate social responsibility.",
                button: "Partner With Us",
                color: "#103B40",
              },
            ].map((option, index) => (
              <div
                key={index}
                className="flex flex-col justify-between animate-fade-up animate-in opacity-0 glass-card rounded-2xl p-8 hover:-translate-y-1 transition-all"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{
                    background: `${option.color}15`,
                    border: `1px solid ${option.color}30`,
                  }}
                >
                  <option.icon
                    className="w-7 h-7"
                    style={{ color: option.color }}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold text-[#1a2e2f] mb-3">
                    {option.title}
                  </h3>
                  <p className="text-[#4a6266] mb-6">{option.description}</p>
                </div>
                <button
                  className="w-full border-2 rounded-xl px-6 py-3 font-semibold transition-all hover:bg-[#103B40] hover:border-[#103B40] hover:text-white!"
                  style={{ borderColor: "#103B40", color: "#103B40" }}
                >
                  {option.button}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
