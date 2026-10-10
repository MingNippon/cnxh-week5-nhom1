"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface NumberTickerProps {
  value: number;
  direction?: "up" | "down";
  className?: string;
  delay?: number;
  suffix?: string;
  prefix?: string;
  decimalPlaces?: number;
}

export default function NumberTicker({
  value,
  direction = "up",
  delay = 0,
  className = "",
  suffix = "",
  prefix = "",
  decimalPlaces = 0,
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 40,
    stiffness: 120,
  });
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        motionValue.set(direction === "down" ? 0 : value);
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [motionValue, isInView, delay, value, direction]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current) {
          ref.current.textContent = `${prefix}${latest.toFixed(
            decimalPlaces
          )}${suffix}`;
        }
      }),
    [springValue, decimalPlaces, prefix, suffix]
  );

  return (
    <span
      ref={ref}
      className={`inline-block tabular-nums tracking-tight ${className}`}
    >
      {prefix}
      {direction === "down" ? value : 0}
      {suffix}
    </span>
  );
}
