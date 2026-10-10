"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import NavbarPill from "@/components/dial/NavbarPill";
import HeroSection from "@/components/dial/HeroSection";
import CoreForcesVisualShowcase from "@/components/dial/CoreForcesVisualShowcase";
import EditorialOffWhiteSection from "@/components/dial/EditorialOffWhiteSection";
import AllianceOSDashboard from "@/components/dial/AllianceOSDashboard";
import StrategicSolutionsSection from "@/components/dial/StrategicSolutionsSection";
import StudyGuideComparisonTable from "@/components/dial/StudyGuideComparisonTable";
import MinimalistFeatureGrid from "@/components/dial/MinimalistFeatureGrid";
import FooterDial from "@/components/dial/FooterDial";

export default function Home() {
  const editorialRef = useRef<HTMLDivElement>(null);

  // Dynamic scroll background interpolation strictly bound to Editorial Section's DOM position
  const { scrollYProgress } = useScroll({
    target: editorialRef,
    offset: ["start end", "end start"],
  });

  // Smooth color morphing on scroll:
  // Starts pure black (#000000).
  // As editorial enters (0.05 -> 0.28), seamlessly morphs into off-white (#F4F4F6).
  // Stays off-white (0.28 -> 0.72) while reading editorial text.
  // As editorial leaves (0.72 -> 0.95), seamlessly morphs back to pure black (#000000).
  const backgroundColor = useTransform(
    scrollYProgress,
    [0.05, 0.28, 0.72, 0.95],
    ["#000000", "#F4F4F6", "#F4F4F6", "#000000"]
  );

  return (
    <main className="relative min-h-screen text-white selection:bg-white selection:text-black antialiased print:bg-white print:text-black bg-transparent">
      {/* Dynamic Smooth Background Canvas: Smooth gradual color morphing without cut lines */}
      <motion.div
        className="fixed inset-0 pointer-events-none -z-30 will-change-transform"
        style={{ backgroundColor }}
      />

      {/* Floating Navigation Pill */}
      <NavbarPill />

      {/* Part 1: Hero & Metric Strip (Pure Black #000000) */}
      <HeroSection />

      {/* Part 1.5: Core Forces Visual Showcase (4 Descriptive Photos & Academic Theory) */}
      <CoreForcesVisualShowcase />

      {/* Part 2: Editorial Scrollytelling Section (Smooth gradual shift to Off-White #F4F4F6) */}
      <div ref={editorialRef} className="relative z-10">
        <EditorialOffWhiteSection />
      </div>

      {/* Part 3: macOS / Dial Widget "Alliance OS" with 4.0 Logistics Photo (#000000) */}
      <AllianceOSDashboard />

      {/* Part 4: 5 Strategic Solutions from 13th CPV Congress */}
      <StrategicSolutionsSection />

      {/* Part 5: Interactive Study Guide & Comparison Table & FAQs */}
      <StudyGuideComparisonTable />

      {/* Part 6: Minimalist Feature Grid ("The rest of it, without the noise") */}
      <MinimalistFeatureGrid />

      {/* Part 7: Footer & Official PDF Download (Nhóm 1 Colophon) */}
      <FooterDial />
    </main>
  );
}
