"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionWrapperProps {
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
  id?: string;
  noPadding?: boolean;
}

export default function SectionWrapper({
  children,
  dark = false,
  className = "",
  id,
  noPadding = false,
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`
        ${dark ? "bg-charcoal text-alabaster" : "bg-alabaster text-charcoal"}
        ${noPadding ? "" : "px-6 md:px-16 py-20 md:py-32"}
        ${className}
      `}
    >
      <div className="mx-auto max-w-[1600px]">{children}</div>
    </motion.section>
  );
}
