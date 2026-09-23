import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  withArrow?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  withArrow = false,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium font-mono text-xs uppercase tracking-wider rounded-md transition-all duration-200 cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-zinc-950 active:scale-[0.98]";

  const sizeStyles = {
    sm: "px-3.5 py-2 text-xs gap-1.5",
    md: "px-5 py-2.5 text-xs gap-2",
    lg: "px-7 py-3.5 text-sm gap-2.5 font-semibold",
  };

  const variantStyles = {
    primary:
      "bg-sky-500 hover:bg-sky-400 text-zinc-950 font-bold shadow-[0_0_20px_rgba(56,189,248,0.25)] hover:shadow-[0_0_25px_rgba(56,189,248,0.4)] border border-sky-400/50",
    secondary:
      "bg-zinc-800/90 hover:bg-zinc-700 text-zinc-100 border border-zinc-700 hover:border-zinc-500",
    outline:
      "bg-transparent hover:bg-zinc-900/60 text-zinc-200 border border-zinc-700 hover:border-sky-400/80 hover:text-sky-300",
    ghost:
      "bg-transparent hover:bg-zinc-900/50 text-zinc-400 hover:text-zinc-100 border border-transparent",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        <span>{children}</span>
        {withArrow && <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      <span>{children}</span>
      {withArrow && <ArrowUpRight className="w-3.5 h-3.5" />}
    </button>
  );
}
