"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";

interface TextShimmerProps {
  children: string;
  as?: React.ElementType;
  className?: string;
  duration?: number;
  spread?: number;
}

export default function TextShimmer({
  children,
  as: Component = "span",
  className = "",
  duration = 3,
  spread = 2,
}: TextShimmerProps) {
  const MotionComponent = useMemo(() => motion(Component), [Component]);

  return (
    <MotionComponent
      className={`inline-block relative overflow-hidden bg-[length:250%_100%] bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 via-amber-200 via-white to-neutral-300 ${className}`}
      initial={{ backgroundPosition: "100% center" }}
      animate={{ backgroundPosition: "0% center" }}
      transition={{
        repeat: Infinity,
        duration,
        ease: "linear",
      }}
    >
      {children}
    </MotionComponent>
  );
}
