"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/what-we-do", label: "What We Do" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-[#103B40]/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 overflow-hidden rounded-lg">
                <img
                  src="/logo.jpeg"
                  alt="AspireFoundation Logo"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-xl font-display font-bold tracking-tight">
                <span className="text-[#103B40]">Aspire</span>
                <span className="text-[#246B73]">Foundation</span>
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-[#1a2e2f]/80 hover:text-[#103B40] transition-colors font-medium text-sm uppercase tracking-wider group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#103B40] to-[#246B73] group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </nav>

            <div className="hidden md:block">
              <Link
                href="/donate"
                className="relative group px-8 py-3 rounded-xl font-bold text-sm uppercase tracking-wider overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#103B40] via-[#246B73] to-[#103B40] animate-gradient opacity-90" />
                <span className="absolute inset-0.5 bg-white rounded-xl" />
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#103B40] to-[#246B73] group-hover:from-[#246B73] group-hover:to-[#103B40] transition-all">
                  Donate Now
                </span>
              </Link>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-[#103B40] p-2 hover:text-[#246B73] transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        <div
          className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#103B40]/50 to-transparent ${isScrolled ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}
        />
      </header>

      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-[#1a2e2f]/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-80 bg-white shadow-2xl shadow-[#103B40]/10 transform transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#103B40]/50 to-transparent" />
          <div className="p-6 pt-24">
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[#1a2e2f] hover:text-[#103B40] transition-colors font-medium text-lg"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/donate"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 bg-gradient-to-r from-[#103B40] to-[#246B73] text-white px-6 py-4 rounded-xl font-bold text-center"
              >
                Donate Now
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
