"use client";

import { motion } from "framer-motion";
import {
  Factory,
  Wheat,
  FlaskConical,
  Briefcase,
  Command,
  Zap,
  CheckCircle2,
  ArrowDown,
  Download,
  Calendar,
} from "lucide-react";
import NumberTicker from "@/components/motion/NumberTicker";
import TextShimmer from "@/components/motion/TextShimmer";
import Magnetic from "@/components/motion/Magnetic";
import SpotlightCard from "@/components/motion/SpotlightCard";

export default function HeroSection() {
  const scrollToForces = () => {
    const el = document.getElementById("core-forces");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadPdf = () => {
    const link = document.createElement("a");
    link.href = "/NHIEM_VU_5_NHOM_1_LIEN_MINH_GIAI_CAP.pdf";
    link.download = "NHIEM_VU_5_NHOM_1_LIEN_MINH_GIAI_CAP.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative min-h-[100dvh] text-white flex flex-col justify-between px-6 sm:px-12 pt-32 pb-16 overflow-hidden">
      {/* Subtle Dial-style Ambient Radial Vignette */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[360px] bg-neutral-900/40 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Hero Container with Floating Pills */}
      <div className="relative max-w-5xl mx-auto my-auto text-center w-full z-10 flex flex-col items-center">
        {/* Subtle Eyebrow Badge & Deadline Tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-8"
        >
          <span className="inline-flex items-center space-x-2 rounded-full px-3 py-1 bg-neutral-950/80 border border-neutral-800 text-neutral-300 font-mono text-[11px] shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Nhiệm vụ 5 — Học phần CNXHKH</span>
          </span>

          <span className="inline-flex items-center space-x-1.5 rounded-full px-3 py-1 bg-amber-950/40 border border-amber-500/30 text-amber-300 font-mono text-[11px]">
            <Calendar className="w-3 h-3 text-amber-400" />
            <span>Hạn nộp: Trước 17h00 ngày 12/10/2026</span>
          </span>
        </motion.div>

        {/* Headline with Floating Pills Container */}
        <div className="relative w-full">
          {/* Floating Pill: Công nhân (Top Left) */}
          <motion.div
            animate={{ y: [0, -7, 0] }}
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 left-4 sm:-top-8 sm:left-12 hidden sm:flex items-center space-x-1.5 rounded-full bg-neutral-900/90 border border-neutral-800 text-neutral-200 text-xs px-3.5 py-1.5 shadow-xl backdrop-blur-md cursor-default"
          >
            <Factory className="w-3.5 h-3.5 text-sky-400" />
            <span className="font-medium tracking-tight">Công nhân</span>
          </motion.div>

          {/* Floating Pill: Nông dân (Top Right) */}
          <motion.div
            animate={{ y: [0, -9, 0] }}
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -top-12 right-6 sm:-top-8 sm:right-16 hidden sm:flex items-center space-x-1.5 rounded-full bg-neutral-900/90 border border-neutral-800 text-neutral-200 text-xs px-3.5 py-1.5 shadow-xl backdrop-blur-md cursor-default"
          >
            <Wheat className="w-3.5 h-3.5 text-emerald-400" />
            <span className="font-medium tracking-tight">Nông dân</span>
          </motion.div>

          {/* Floating Pill: Trí thức (Bottom Left) */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-14 left-8 sm:-bottom-12 sm:left-20 hidden sm:flex items-center space-x-1.5 rounded-full bg-neutral-900/90 border border-neutral-800 text-neutral-200 text-xs px-3.5 py-1.5 shadow-xl backdrop-blur-md cursor-default"
          >
            <FlaskConical className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-medium tracking-tight">Trí thức</span>
          </motion.div>

          {/* Floating Pill: Doanh nhân (Bottom Right) */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 5.1, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute -bottom-16 right-4 sm:-bottom-12 sm:right-24 hidden sm:flex items-center space-x-1.5 rounded-full bg-neutral-900/90 border border-neutral-800 text-neutral-200 text-xs px-3.5 py-1.5 shadow-xl backdrop-blur-md cursor-default"
          >
            <Briefcase className="w-3.5 h-3.5 text-rose-400" />
            <span className="font-medium tracking-tight">Doanh nhân</span>
          </motion.div>

          {/* Additional Dial Context Chips */}
          <motion.div
            animate={{ y: [0, -5, 0] }}
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            className="absolute top-1/2 -left-6 -translate-y-1/2 hidden lg:flex items-center space-x-1.5 rounded-full bg-neutral-950/80 border border-neutral-800/80 text-neutral-400 text-[11px] px-2.5 py-1 backdrop-blur-sm cursor-default"
          >
            <Zap className="w-3 h-3 text-amber-400" />
            <span>Công nghiệp 4.0</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, -6, 0] }}
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
            className="absolute top-1/2 -right-8 -translate-y-1/2 hidden lg:flex items-center space-x-1.5 rounded-full bg-neutral-950/80 border border-neutral-800/80 text-neutral-400 text-[11px] px-2.5 py-1 backdrop-blur-sm cursor-default"
          >
            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
            <span>100% Đồng thuận</span>
          </motion.div>

          {/* Main Massive Headline with Text Shimmer Motion */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.05]"
          >
            <TextShimmer duration={3.5}>
              Liên minh, vận hành trong thực tế.
            </TextShimmer>
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="text-neutral-400 text-base sm:text-lg md:text-xl max-w-2xl mt-8 font-normal leading-relaxed tracking-tight"
        >
          Sản phẩm đồ họa tri thức (Infographic) số hóa toàn diện: Cơ cấu giai
          cấp, tính tất yếu khách quan, nội dung toàn diện và chuỗi liên kết 4
          Nhà trong thời kỳ quá độ lên CNXH ở Việt Nam.
        </motion.p>

        {/* Action Buttons with Magnetic cursor tracking */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Magnetic strength={0.25}>
            <button
              onClick={scrollToForces}
              className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-neutral-300 hover:text-white px-5 py-3 rounded-full bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-all group shadow-sm active:scale-95"
            >
              <span>Khám phá bản đồ tri thức</span>
              <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" />
            </button>
          </Magnetic>

          <Magnetic strength={0.3}>
            <button
              onClick={handleDownloadPdf}
              className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-black bg-white hover:bg-neutral-200 px-6 py-3 rounded-full font-bold shadow-xl transition-all active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Tải Báo Cáo PDF (Nộp Bài Ngay)</span>
            </button>
          </Magnetic>
        </motion.div>
      </div>

      {/* Metric Strip (4-column metric grid with NumberTicker & SpotlightCard) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="w-full max-w-5xl mx-auto border-t border-neutral-800/80 pt-8 mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left"
      >
        <SpotlightCard
          className="p-4 rounded-xl bg-neutral-950/40 border border-neutral-800/60"
          spotlightColor="rgba(56, 189, 248, 0.12)"
        >
          <span className="text-3xl sm:text-4xl font-semibold tracking-tight text-white block">
            <NumberTicker value={4} delay={0.2} />
          </span>
          <p className="text-xs text-neutral-400 mt-1 tracking-tight leading-snug">
            Lực lượng nòng cốt trong thời kỳ quá độ.
          </p>
        </SpotlightCard>

        <SpotlightCard
          className="p-4 rounded-xl bg-neutral-950/40 border border-neutral-800/60"
          spotlightColor="rgba(245, 158, 11, 0.12)"
        >
          <span className="text-3xl sm:text-4xl font-semibold tracking-tight text-white block">
            <NumberTicker value={3} delay={0.4} />
          </span>
          <p className="text-xs text-neutral-400 mt-1 tracking-tight leading-snug">
            Trụ cột nội dung liên minh toàn diện.
          </p>
        </SpotlightCard>

        <SpotlightCard
          className="p-4 rounded-xl bg-neutral-950/40 border border-neutral-800/60"
          spotlightColor="rgba(239, 68, 68, 0.12)"
        >
          <span className="text-3xl sm:text-4xl font-semibold tracking-tight text-white block">
            <NumberTicker value={3} delay={0.6} />
          </span>
          <p className="text-xs text-neutral-400 mt-1 tracking-tight leading-snug">
            Nguyên tắc bất biến bảo đảm liên minh.
          </p>
        </SpotlightCard>

        <SpotlightCard
          className="p-4 rounded-xl bg-neutral-950/40 border border-neutral-800/60"
          spotlightColor="rgba(52, 211, 153, 0.12)"
        >
          <span className="text-3xl sm:text-4xl font-semibold tracking-tight text-white block">
            <NumberTicker value={100} suffix="%" delay={0.8} />
          </span>
          <p className="text-xs text-neutral-400 mt-1 tracking-tight leading-snug">
            Thỏa mãn và hài hòa lợi ích kinh tế.
          </p>
        </SpotlightCard>
      </motion.div>
    </section>
  );
}
