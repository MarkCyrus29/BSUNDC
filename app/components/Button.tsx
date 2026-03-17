"use client";

import React from "react";

type ButtonVariant = "primary" | "secondary" | "link";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-10 px-6 text-[10px]",
  md: "h-12 px-8 text-xs",
  lg: "h-14 px-10 text-xs",
};

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseClasses =
    "relative inline-flex items-center justify-center font-body font-medium uppercase tracking-[0.2em] transition-all duration-500 ease-out cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-charcoal disabled:opacity-50 disabled:pointer-events-none";

  if (variant === "link") {
    return (
      <button
        className={`font-body text-xs font-medium uppercase tracking-[0.2em] text-charcoal hover:text-gold transition-colors duration-500 cursor-pointer focus-visible:outline-none ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }

  if (variant === "secondary") {
    return (
      <button
        className={`${baseClasses} ${sizeClasses[size]} border border-charcoal bg-transparent text-charcoal hover:bg-charcoal hover:text-alabaster ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }

  // Primary — with gold slide animation
  return (
    <button
      className={`group ${baseClasses} ${sizeClasses[size]} bg-charcoal text-alabaster overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.25)] ${className}`}
      {...props}
    >
      {/* Gold overlay slides from left */}
      <span
        className="absolute inset-0 bg-gold -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
        aria-hidden="true"
      />
      <span className="relative z-10">{children}</span>
    </button>
  );
}
