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
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 left-4 sm:-top-8 sm:left-12 hidden sm:flex items-center space-x-1.5 rounded-full bg-neutral-900/90 border border-neutral-800 text-neutral-200 text-xs px-3 py-1.5 shadow-xl backdrop-blur-md"
          >
            <Factory className="w-3.5 h-3.5 text-neutral-400" />
            <span className="font-medium tracking-tight">Công nhân</span>
          </motion.div>

          {/* Floating Pill: Nông dân (Top Right) */}
          <motion.div
            animate={{ y: [0, -9, 0] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -top-12 right-6 sm:-top-8 sm:right-16 hidden sm:flex items-center space-x-1.5 rounded-full bg-neutral-900/90 border border-neutral-800 text-neutral-200 text-xs px-3 py-1.5 shadow-xl backdrop-blur-md"
          >
            <Wheat className="w-3.5 h-3.5 text-neutral-400" />
            <span className="font-medium tracking-tight">Nông dân</span>
          </motion.div>

          {/* Floating Pill: Trí thức (Bottom Left) */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-14 left-8 sm:-bottom-12 sm:left-20 hidden sm:flex items-center space-x-1.5 rounded-full bg-neutral-900/90 border border-neutral-800 text-neutral-200 text-xs px-3 py-1.5 shadow-xl backdrop-blur-md"
          >
            <FlaskConical className="w-3.5 h-3.5 text-neutral-400" />
            <span className="font-medium tracking-tight">Trí thức</span>
          </motion.div>

          {/* Floating Pill: Doanh nhân (Bottom Right) */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5.1, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute -bottom-16 right-4 sm:-bottom-12 sm:right-24 hidden sm:flex items-center space-x-1.5 rounded-full bg-neutral-900/90 border border-neutral-800 text-neutral-200 text-xs px-3 py-1.5 shadow-xl backdrop-blur-md"
          >
            <Briefcase className="w-3.5 h-3.5 text-neutral-400" />
            <span className="font-medium tracking-tight">Doanh nhân</span>
          </motion.div>

          {/* Additional Dial Context Chips */}
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            className="absolute top-1/2 -left-6 -translate-y-1/2 hidden lg:flex items-center space-x-1.5 rounded-full bg-neutral-950/80 border border-neutral-800/80 text-neutral-400 text-[11px] px-2.5 py-1 backdrop-blur-sm"
          >
            <Zap className="w-3 h-3 text-neutral-400" />
            <span>Công nghiệp 4.0</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
            className="absolute top-1/2 -right-8 -translate-y-1/2 hidden lg:flex items-center space-x-1.5 rounded-full bg-neutral-950/80 border border-neutral-800/80 text-neutral-400 text-[11px] px-2.5 py-1 backdrop-blur-sm"
          >
            <CheckCircle2 className="w-3 h-3 text-neutral-400" />
            <span>100% Đồng thuận</span>
          </motion.div>

          {/* Main Massive Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.05] text-white"
          >
            Liên minh, vận hành trong thực tế.
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

        {/* Action Buttons: Khám phá + Tải file PDF nộp ngay */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={scrollToForces}
            className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-neutral-300 hover:text-white px-5 py-3 rounded-full bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-all group"
          >
            <span>Khám phá bản đồ tri thức</span>
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" />
          </button>

          <button
            onClick={handleDownloadPdf}
            className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-black bg-white hover:bg-neutral-200 px-6 py-3 rounded-full font-bold shadow-lg transition-all"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Tải Báo Cáo PDF (Nộp Bài Ngay)</span>
          </button>
        </motion.div>
      </div>

      {/* Metric Strip (Hairline 4-column metric grid) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="w-full max-w-5xl mx-auto border-t border-neutral-800/80 pt-10 mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 text-left"
      >
        <div>
          <span className="text-3xl sm:text-4xl font-semibold tracking-tight text-white block">
            4
          </span>
          <p className="text-xs text-neutral-400 mt-1 tracking-tight leading-snug">
            Lực lượng nòng cốt trong thời kỳ quá độ.
          </p>
        </div>

        <div>
          <span className="text-3xl sm:text-4xl font-semibold tracking-tight text-white block">
            3
          </span>
          <p className="text-xs text-neutral-400 mt-1 tracking-tight leading-snug">
            Trụ cột nội dung liên minh toàn diện.
          </p>
        </div>

        <div>
          <span className="text-3xl sm:text-4xl font-semibold tracking-tight text-white block">
            3
          </span>
          <p className="text-xs text-neutral-400 mt-1 tracking-tight leading-snug">
            Nguyên tắc bất biến bảo đảm liên minh.
          </p>
        </div>

        <div>
          <span className="text-3xl sm:text-4xl font-semibold tracking-tight text-white block">
            100%
          </span>
          <p className="text-xs text-neutral-400 mt-1 tracking-tight leading-snug">
            Thỏa mãn và hài hòa lợi ích kinh tế.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
