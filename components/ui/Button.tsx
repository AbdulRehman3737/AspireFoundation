import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  download?: boolean;
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  download,
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all hover:-translate-y-0.5";
  
  const variants = {
    primary: "bg-gradient-to-r from-[#F2856D] to-[#F2C4B3] text-white hover:shadow-lg hover:shadow-[#F2856D]/30",
    secondary: "bg-[#246B73] text-white hover:bg-[#246B73]/90 hover:shadow-lg hover:shadow-[#246B73]/30",
    outline: "border-2 border-[#F2856D] text-[#F2856D] hover:bg-[#F2856D] hover:text-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const styles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={styles} download={download}>
        {children}
        {variant === "primary" && <ArrowRight className="w-4 h-4" />}
        {download && <Download className="w-4 h-4" />}
      </Link>
    );
  }

  return <button className={styles}>{children}</button>;
}
