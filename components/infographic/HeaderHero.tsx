"use client";

import { motion } from "framer-motion";
import {
  Compass,
  ArrowDown,
  Sparkles,
  ShieldCheck,
  Cpu,
  Layers,
  Flame,
} from "lucide-react";
import { useState } from "react";

export default function HeaderHero() {
  const [hoveredPillar, setHoveredPillar] = useState<number | null>(null);

  const scrollToFirst = () => {
    const el = document.getElementById("class-structure");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const corePillars = [
    { label: "Giai Cấp Công Nhân", role: "Hạt nhân lãnh đạo", accent: "from-amber-400 to-amber-600" },
    { label: "Giai Cấp Nông Dân", role: "Đồng minh chiến lược", accent: "from-emerald-400 to-emerald-600" },
    { label: "Đội Ngũ Trí Thức", role: "Xung kích sáng tạo 4.0", accent: "from-cyan-400 to-cyan-600" },
    { label: "Đội Ngũ Doanh Nhân", role: "Tiên phong chuỗi giá trị", accent: "from-rose-400 to-rose-600" },
  ];

  return (
    <header className="relative min-h-[100dvh] flex flex-col justify-between items-center px-4 sm:px-6 lg:px-12 pt-8 pb-12 overflow-hidden">
      {/* Subtle Warm Backdrop Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[360px] bg-amber-500/[0.04] rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Top Meta Bar */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-7xl flex flex-wrap items-center justify-between gap-4 border-b border-slate-800/60 pb-5"
      >
        <div className="flex items-center space-x-3.5">
          <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <Compass className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[11px] font-mono tracking-widest uppercase text-amber-400 font-bold block">
              CHỦ NGHĨA XÃ HỘI KHOA HỌC • CHƯƠNG 5
            </span>
            <span className="text-xs text-slate-400">
              Bản Đồ Tri Thức Biện Chứng Số Hóa
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-red-950/40 text-red-300 border border-red-500/25">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 mr-2 animate-ping" />
            Nhiệm Vụ 5 • Nhóm 1
          </span>
          <span className="hidden sm:inline-block text-xs font-mono text-slate-500">
            Đại học Quốc Gia / HV Báo chí
          </span>
        </div>
      </motion.div>

      {/* Main Editorial Hero Centerpiece */}
      <div className="w-full max-w-6xl mx-auto my-auto py-12 flex flex-col items-center text-center">
        {/* Editorial Sub-badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-amber-500/30 text-amber-300 text-xs font-mono mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(245,158,11,0.15)]"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <span className="tracking-wider uppercase font-semibold">
            ĐỒ HỌA TRI THỨC TƯƠNG TÁC ĐA CHIỀU
          </span>
        </motion.div>

        {/* Dynamic Stylized Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] text-white">
            LIÊN MINH GIAI CẤP, TẦNG LỚP
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100 font-extrabold">
              TRONG THỜI KỲ QUÁ ĐỘ LÊN CHỦ NGHĨA XÃ HỘI
            </span>
            <br />
            <span className="text-xl sm:text-3xl md:text-4xl text-slate-400 font-light tracking-wide mt-2 block">
              Ở VIỆT NAM
            </span>
          </h1>
        </motion.div>

        {/* Dynamic Animated Central Crest Symbol (SVG Kinetic Emblem) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.45 }}
          className="my-10 relative flex items-center justify-center"
        >
          {/* Animated SVG Ring representing the 4 integrated sectors */}
          <div className="relative w-44 h-44 flex items-center justify-center">
            <svg
              className="absolute inset-0 w-full h-full animate-spin-slow text-amber-500/20"
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="46"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
            </svg>
            <svg
              className="absolute inset-2 w-40 h-40 animate-reverse-spin text-red-500/20"
              style={{ animationDuration: "25s" }}
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="42"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.8"
                strokeDasharray="2 6"
              />
            </svg>

            {/* Core Center Emblem */}
            <div className="relative z-10 w-24 h-24 rounded-full bg-slate-950/80 border border-amber-500/40 flex flex-col items-center justify-center backdrop-blur-xl shadow-[0_0_40px_rgba(245,158,11,0.2)]">
              <Flame className="w-8 h-8 text-amber-400 mb-0.5 animate-pulse" />
              <span className="text-[9px] font-mono uppercase font-black tracking-widest text-amber-300">
                KHỐI ĐOÀN KẾT
              </span>
            </div>
          </div>
        </motion.div>

        {/* Narrative Lead Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed font-normal mb-10"
        >
          Khối liên minh giữa{" "}
          <span className="text-amber-300 font-semibold">Công nhân</span>,{" "}
          <span className="text-emerald-300 font-semibold">Nông dân</span>,{" "}
          <span className="text-cyan-300 font-semibold">Trí thức</span> và{" "}
          <span className="text-rose-300 font-semibold">Doanh nhân</span> là quy
          luật khách quan của nền sản xuất lớn hiện đại, bảo đảm độc lập dân tộc
          và kiến tạo sự thịnh vượng xã hội chủ nghĩa.
        </motion.p>

        {/* Interactive 4 Pillars Floating Preview Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-3 mb-10"
        >
          {corePillars.map((pillar, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredPillar(idx)}
              onMouseLeave={() => setHoveredPillar(null)}
              className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-amber-500/50 backdrop-blur-md transition-all duration-300 text-left group cursor-pointer"
              onClick={scrollToFirst}
            >
              <span className="text-[10px] font-mono text-slate-500 block mb-1">
                0{idx + 1} • TRỤ CỘT
              </span>
              <h4 className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors">
                {pillar.label}
              </h4>
              <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                {pillar.role}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Scroll CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <button
            onClick={scrollToFirst}
            className="group relative inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-slate-900 border border-amber-500/40 text-amber-300 hover:text-slate-950 hover:bg-amber-400 font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_0_25px_rgba(245,158,11,0.2)] hover:shadow-[0_0_35px_rgba(245,158,11,0.5)]"
          >
            <span>Bắt Đầu Khám Phá Từng Lực Lượng</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* Bottom Architectural Rule Bar */}
      <div className="w-full max-w-7xl flex items-center justify-between text-[11px] font-mono text-slate-500 border-t border-slate-800/60 pt-4">
        <span>© 2026 NHÓM 1 • HỌC PHẦN CNXHKH</span>
        <span className="hidden sm:inline">CUỘN CHUỘT ĐỂ XEM QUÁ TRÌNH BIẾN ĐỔI CHUYỂN HÓA</span>
        <span>TRƯỞNG NHÓM: ĐÀO ĐỨC MINH</span>
      </div>
    </header>
  );
}
