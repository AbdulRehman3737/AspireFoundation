"use client";

import { useState, useEffect, useRef } from "react";
import { Heart, Shield, CreditCard, Check, ArrowRight, RefreshCw, Gift, Users } from "lucide-react";

const presetAmounts = [
  { amount: 25, impact: "Provides school supplies for 1 child for a month" },
  { amount: 50, impact: "Feeds a family of 4 for one week" },
  { amount: 100, impact: "Covers medical treatment for 1 patient" },
  { amount: 250, impact: "Sponsors a child&apos;s education for 3 months" },
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
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const donationAmount = customAmount ? parseInt(customAmount) : selectedAmount || 0;

  return (
    <div ref={sectionRef}>
      <section className="pt-32 pb-20 bg-[#0D0829] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#F2856D]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#246B73]/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="animate-fade-up animate-in opacity-0 inline-block text-[#F2856D] text-sm font-semibold uppercase tracking-widest mb-4">
            Make a Difference
          </span>
          <h1 className="animate-fade-up animate-in opacity-0 text-4xl md:text-5xl lg:text-6xl font-serif text-[#FAF7F2] mb-6">
            Donate Now
          </h1>
          <p className="animate-fade-up animate-in opacity-0 text-[#B8B5AF] text-lg max-w-3xl mx-auto">
            Your generous contribution helps us continue our mission to create positive change in communities around the world.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[#130B40]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <div className="animate-fade-up animate-in opacity-0 bg-[#0D0829] rounded-2xl p-8 border border-[#246B73]/20">
                <h2 className="text-2xl font-serif text-[#FAF7F2] mb-2">Select Amount</h2>
                <p className="text-[#B8B5AF] mb-8">Choose a preset amount or enter a custom donation</p>

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
                          ? "border-[#F2856D] bg-[#F2856D]/10"
                          : "border-[#246B73]/30 bg-[#130B40] hover:border-[#246B73]/50"
                      }`}
                    >
                      <div className="text-2xl font-serif text-[#FAF7F2] mb-2">${preset.amount}</div>
                      <div className="text-sm text-[#B8B5AF]">{preset.impact}</div>
                      {selectedAmount === preset.amount && !customAmount && (
                        <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-[#F2856D] flex items-center justify-center">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>

                <div className="mb-8">
                  <label className="block text-[#B8B5AF] mb-2">Or enter custom amount</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#B8B5AF] text-xl">$</span>
                    <input
                      type="number"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setSelectedAmount(null);
                      }}
                      placeholder="Enter amount"
                      className="w-full bg-[#130B40] border border-[#246B73]/30 rounded-lg pl-10 pr-4 py-4 text-[#FAF7F2] text-xl placeholder-[#B8B5AF]/50 focus:outline-none focus:border-[#F2856D] transition-colors"
                    />
                  </div>
                </div>

                <div className="mb-8">
                  <button
                    onClick={() => setIsRecurring(!isRecurring)}
                    className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all w-full ${
                      isRecurring
                        ? "border-[#F2856D] bg-[#F2856D]/10"
                        : "border-[#246B73]/30 bg-[#130B40] hover:border-[#246B73]/50"
                    }`}
                  >
                    <RefreshCw className={`w-6 h-6 ${isRecurring ? "text-[#F2856D]" : "text-[#B8B5AF]"}`} />
                    <div className="text-left">
                      <div className="text-[#FAF7F2] font-medium">Make this a monthly donation</div>
                      <div className="text-sm text-[#B8B5AF]">Your support will continue to make an impact</div>
                    </div>
                    {isRecurring && (
                      <div className="ml-auto w-6 h-6 rounded-full bg-[#F2856D] flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </button>
                </div>

                <form onSubmit={handleSubmit}>
                  <h3 className="text-xl font-serif text-[#FAF7F2] mb-4">Your Information</h3>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      required
                      className="bg-[#130B40] border border-[#246B73]/30 rounded-lg px-4 py-3 text-[#FAF7F2] placeholder-[#B8B5AF]/50 focus:outline-none focus:border-[#F2856D] transition-colors"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      required
                      className="bg-[#130B40] border border-[#246B73]/30 rounded-lg px-4 py-3 text-[#FAF7F2] placeholder-[#B8B5AF]/50 focus:outline-none focus:border-[#F2856D] transition-colors"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    className="w-full bg-[#130B40] border border-[#246B73]/30 rounded-lg px-4 py-3 text-[#FAF7F2] placeholder-[#B8B5AF]/50 focus:outline-none focus:border-[#F2856D] transition-colors mb-4"
                  />
                  
                  <button
                    type="submit"
                    disabled={!donationAmount || isSubmitting}
                    className="w-full bg-gradient-to-r from-[#F2856D] to-[#F2C4B3] text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-[#F2856D]/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        Donate ${donationAmount || 0} {isRecurring ? "Monthly" : ""}
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="animate-fade-up animate-in opacity-0 bg-gradient-to-br from-[#246B73]/30 to-[#130B40] rounded-2xl p-8 border border-[#246B73]/20">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#F2856D]/20 to-[#F2C4B3]/20 flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 text-[#F2856D]" />
                </div>
                <h3 className="text-xl font-serif text-[#FAF7F2] mb-4">Your Impact</h3>
                <div className="text-3xl font-serif text-[#F2856D] mb-4">
                  ${donationAmount || 0}
                  {isRecurring && <span className="text-lg text-[#B8B5AF]">/month</span>}
                </div>
                <p className="text-[#B8B5AF]">
                  {donationAmount >= 250
                    ? "Your donation will sponsor a child&apos;s education for 3 months, providing school supplies, meals, and learning materials."
                    : donationAmount >= 100
                    ? "Your donation will cover medical treatment for a patient in need, including medicines and follow-up care."
                    : donationAmount >= 50
                    ? "Your donation will feed a family of 4 for one week with nutritious food supplies."
                    : donationAmount >= 25
                    ? "Your donation will provide school supplies for one child for an entire month."
                    : "Select an amount above to see your impact."}
                </p>
              </div>

              <div className="animate-fade-up animate-in opacity-0 bg-[#0D0829] rounded-2xl p-6 border border-[#246B73]/20">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6 text-[#246B73]" />
                  <h3 className="text-lg font-semibold text-[#FAF7F2]">Trust & Security</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "100% secure SSL encrypted donation",
                    "Tax-deductible receipts provided",
                    "92% of funds go directly to programs",
                    "Verified 501(c)(3) nonprofit organization",
                    "Regular impact reports published",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[#B8B5AF] text-sm">
                      <Check className="w-4 h-4 text-[#F2856D] flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="animate-fade-up animate-in opacity-0 bg-[#0D0829] rounded-2xl p-6 border border-[#246B73]/20">
                <div className="flex items-center gap-3 mb-4">
                  <CreditCard className="w-6 h-6 text-[#246B73]" />
                  <h3 className="text-lg font-semibold text-[#FAF7F2]">Payment Methods</h3>
                </div>
                <div className="flex gap-4">
                  {["Visa", "MC", "Amex", "PayPal"].map((method) => (
                    <div
                      key={method}
                      className="px-4 py-2 bg-[#130B40] rounded-lg text-[#B8B5AF] text-sm font-medium"
                    >
                      {method}
                    </div>
                  ))}
                </div>
              </div>

              <div className="animate-fade-up animate-in opacity-0 bg-gradient-to-r from-[#F2856D]/10 to-[#F2C4B3]/10 rounded-2xl p-6 border border-[#F2856D]/20">
                <div className="flex items-center gap-3 mb-3">
                  <Gift className="w-6 h-6 text-[#F2856D]" />
                  <span className="text-[#FAF7F2] font-medium">Give as a Gift</span>
                </div>
                <p className="text-[#B8B5AF] text-sm">
                  Honor someone special with a donation in their name. We will send a printable card to your recipient.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {submitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="bg-[#130B40] rounded-2xl p-12 max-w-md mx-4 text-center border border-[#246B73]/20">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#F2856D] to-[#F2C4B3] flex items-center justify-center">
              <Heart className="w-10 h-10 text-white fill-white" />
            </div>
            <h2 className="text-2xl font-serif text-[#FAF7F2] mb-4">Thank You!</h2>
            <p className="text-[#B8B5AF] mb-8">
              Your generous donation of ${donationAmount} {isRecurring ? "monthly " : ""}will help us continue our mission to make a difference.
            </p>
            <p className="text-[#B8B5AF] text-sm mb-8">
              A confirmation email has been sent to your inbox with your donation receipt.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="bg-gradient-to-r from-[#F2856D] to-[#F2C4B3] text-white px-8 py-3 rounded-lg font-semibold hover:shadow-xl hover:shadow-[#F2856D]/30 transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <section className="py-20 md:py-32 bg-[#0D0829]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="animate-fade-up animate-in opacity-0 inline-block text-[#246B73] text-sm font-semibold uppercase tracking-widest mb-4">
              Other Ways to Help
            </span>
            <h2 className="animate-fade-up animate-in opacity-0 text-3xl md:text-4xl font-serif text-[#FAF7F2]">
              Get Involved
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Volunteer",
                description: "Share your time and skills to make a direct impact in your community.",
                button: "Join as Volunteer",
              },
              {
                icon: Gift,
                title: "Fundraise",
                description: "Start a fundraiser for Hope Foundation and rally your network to support our cause.",
                button: "Start Fundraising",
              },
              {
                icon: Heart,
                title: "Corporate Giving",
                description: "Partner with us to create meaningful social impact through corporate social responsibility.",
                button: "Partner With Us",
              },
            ].map((option, index) => (
              <div
                key={index}
                className="animate-fade-up animate-in opacity-0 bg-[#130B40] rounded-2xl p-8 border border-[#246B73]/20 hover:border-[#F2856D]/50 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#F2856D]/20 to-[#F2C4B3]/20 flex items-center justify-center mb-6">
                  <option.icon className="w-7 h-7 text-[#F2856D]" />
                </div>
                <h3 className="text-xl font-serif text-[#FAF7F2] mb-3">{option.title}</h3>
                <p className="text-[#B8B5AF] mb-6">{option.description}</p>
                <button className="w-full border-2 border-[#F2856D] text-[#F2856D] px-6 py-3 rounded-lg font-semibold hover:bg-[#F2856D] hover:text-white transition-all">
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
