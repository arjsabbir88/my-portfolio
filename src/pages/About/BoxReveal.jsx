"use client";

import { useRef } from "react";
import { useInView, motion } from "framer-motion";

export function BoxReveal({ children, className = "", delay = 0.25, ...props }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 0px -100px 0px", // triggers early
  });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={`overflow-hidden transition-all duration-700 ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
