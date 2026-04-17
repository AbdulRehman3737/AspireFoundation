import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/what-we-do", label: "What We Do" },
  { href: "/contact", label: "Contact" },
];

const programs = [
  { href: "/what-we-do#education", label: "Education" },
  { href: "/what-we-do#food", label: "Food Security" },
  { href: "/what-we-do#healthcare", label: "Healthcare" },
  { href: "/what-we-do#emergency", label: "Emergency Aid" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#103B40] border-t border-[#246B73]/30">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 overflow-hidden rounded-lg">
                <img
                  src="/logo.jpeg"
                  alt="AspireFoundation Logo"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-xl font-display font-bold text-[#F2D7B6]">
                <span className="text-[#F2856D]">Aspire</span>
                <span className="text-white">Foundation</span>
              </span>
            </Link>
            <p className="text-[#F2D7B6]/70 leading-relaxed text-sm">
              Building a world where every individual has access to education,
              healthcare, and basic human necessities.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="https://github.com/AbdulRehman3737"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#246B73]/30 flex items-center justify-center text-[#F2D7B6] hover:text-[#F2856D] hover:bg-[#F2856D]/20 transition-all"
                aria-label="GitHub"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.upwork.com/freelancers/~013eb66e648776c44d"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#246B73]/30 flex items-center justify-center text-[#F2D7B6] hover:text-[#14F195] hover:bg-[#14F195]/20 transition-all"
                aria-label="Upwork"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.335 18.153h2.213V6.51h-2.213v11.643zm-4.456 0h2.213V9.927h-2.213v8.226zm-4.192 0h2.213V7.518H9.687v10.635zm-4.14-4.463h1.88v1.077h-1.88V13.69zm0-3.26h1.88v1.078h-1.88v-1.078zM2.85 18.153h2.213V6.51H2.85v11.643zM17.92 3.897h-6.47v6.462h6.47V3.897z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/abdul-rehman-10876521b/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#246B73]/30 flex items-center justify-center text-[#F2D7B6] hover:text-[#F2856D] hover:bg-[#F2856D]/20 transition-all"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[#F2D7B6] font-display font-semibold mb-6 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#F2D7B6]/70 hover:text-[#F2856D] transition-colors text-sm inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-[#F2856D] group-hover:w-3 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#F2D7B6] font-display font-semibold mb-6 text-sm uppercase tracking-wider">
              Our Programs
            </h4>
            <ul className="space-y-4">
              {programs.map((program) => (
                <li key={program.href}>
                  <Link
                    href={program.href}
                    className="text-[#F2D7B6]/70 hover:text-[#F2856D] transition-colors text-sm inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-[#F2856D] group-hover:w-3 transition-all duration-300" />
                    {program.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#F2D7B6] font-display font-semibold mb-6 text-sm uppercase tracking-wider">
              Get In Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#F2856D] flex-shrink-0 mt-0.5" />
                <span className="text-[#F2D7B6]/70 text-sm">
                  123 Hope Street, Suite 400
                  <br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#F2856D] flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="text-[#F2D7B6]/70 hover:text-[#F2856D] transition-colors text-sm"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#F2856D] flex-shrink-0" />
                <a
                  href="mailto:info@aspirefoundation.org"
                  className="text-[#F2D7B6]/70 hover:text-[#F2856D] transition-colors text-sm"
                >
                  info@aspirefoundation.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#246B73]/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#F2D7B6]/50 text-sm">
              2024 AspireFoundation. All rights reserved.
            </p>
            <Link
              href="/donate"
              className="group relative px-8 py-3 rounded-xl font-bold text-sm uppercase tracking-wider overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#F2856D] to-[#F2C4B3] opacity-90" />
              <span className="absolute inset-0.5 bg-[#103B40] rounded-xl" />
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#F2856D] to-[#F2D7B6]">
                Make a Donation
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F2856D]/30 to-transparent" />
    </footer>
  );
}
