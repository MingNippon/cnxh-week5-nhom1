"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Factory,
  Wheat,
  GraduationCap,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Cpu,
  Layers,
  Activity,
  Award,
} from "lucide-react";

interface ForceItem {
  id: "cong-nhan" | "nong-dan" | "tri-thuc" | "doanh-nhan";
  roleTitle: string;
  className: string;
  missionBadge: string;
  tagline: string;
  accentColor: string;
  icon: React.ElementType;
  description: string;
  uniqueAspects: { label: string; value: string; desc: string }[];
  keyQuotes: string;
  visualType: "industrial" | "agrarian" | "scientific" | "executive";
}

const FORCES: ForceItem[] = [
  {
    id: "cong-nhan",
    roleTitle: "LỰC LƯỢNG LÃNH ĐẠO • HẠT NHÂN CHÍNH TRỊ",
    className: "Giai Cấp Công Nhân",
    missionBadge: "Phương Thức Sản Xuất Tiên Tiến",
    tagline: "Lực lượng đi đầu trong sự nghiệp CNH, HĐH và chuyển đổi số quốc gia.",
    accentColor: "amber",
    icon: Factory,
    description:
      "Giai cấp công nhân đại diện cho phương thức sản xuất tiên tiến, giữ vai trò lãnh đạo khối liên minh thông qua đội tiên phong là Đảng Cộng sản Việt Nam. Trong kỷ nguyên công nghiệp 4.0, công nhân trí thức hóa, làm chủ dây chuyền tự động hóa, robot và kinh tế dữ liệu.",
    uniqueAspects: [
      {
        label: "Địa vị chính trị",
        value: "Giữ quyền lãnh đạo",
        desc: "Thông qua Đảng Cộng sản, dẫn dắt liên minh đi đúng con đường XHCN.",
      },
      {
        label: "Phương thức lao động",
        value: "Hiện đại & Tự động",
        desc: "Lao động gắn liền với công nghệ cao, kỷ luật công nghiệp nghiêm ngặt.",
      },
      {
        label: "Sứ mệnh lịch sử",
        value: "Động lực chủ đạo",
        desc: "Xây dựng cơ sở vật chất - kỹ thuật hiện đại cho chủ nghĩa xã hội.",
      },
    ],
    keyQuotes:
      "Giai cấp công nhân là lực lượng xã hội duy nhất có đủ bản lĩnh chính trị và tổ chức để lãnh đạo toàn thể nhân dân lao động.",
    visualType: "industrial",
  },
  {
    id: "nong-dan",
    roleTitle: "LỰC LƯỢNG ĐÔNG ĐẢO NHẤT • TRỤ ĐỠ KINH TẾ",
    className: "Giai Cấp Nông Dân",
    missionBadge: "Đồng Minh Chiến Lược Tự Nhiên",
    tagline: "Chủ thể của quá trình nông nghiệp sinh thái, nông thôn văn minh và bảo đảm an ninh lương thực.",
    accentColor: "emerald",
    icon: Wheat,
    description:
      "Nông dân là lực lượng đông đảo nhất trong xã hội, là đồng minh chiến lược tự nhiên bền chặt của giai cấp công nhân. Nông dân thời kỳ mới đang vươn lên thành nông dân chuyên nghiệp, làm chủ công nghệ sinh học, nông nghiệp chính xác và chuỗi kinh tế tuần hoàn.",
    uniqueAspects: [
      {
        label: "Quy mô xã hội",
        value: "Đông đảo nhất",
        desc: "Chiếm lực lượng lao động hùng hậu và là nền tảng giữ vững ổn định xã hội.",
      },
      {
        label: "An ninh quốc gia",
        value: "Trụ đỡ vững chắc",
        desc: "Bảo đảm an ninh lương thực quốc gia ngay cả trong khủng hoảng toàn cầu.",
      },
      {
        label: "Chuyển đổi số",
        value: "Nông nghiệp 4.0",
        desc: "Chuyển từ tư duy sản xuất nông nghiệp sang tư duy kinh tế nông nghiệp giá trị cao.",
      },
    ],
    keyQuotes:
      "Nông dân là đồng minh tin cậy nhất của công nhân; không có liên minh công nông thì không có cách mạng thành công.",
    visualType: "agrarian",
  },
  {
    id: "tri-thuc",
    roleTitle: "ĐỘNG LỰC ĐỘT PHÁ • TRÍ TUỆ DÂN TỘC",
    className: "Đội Ngũ Trí Thức",
    missionBadge: "Xung Kích Sáng Tạo Tri Thức",
    tagline: "Lực lượng lao động sáng tạo đặc biệt trong nghiên cứu, ứng dụng khoa học kỹ thuật và đổi mới sáng tạo.",
    accentColor: "cyan",
    icon: GraduationCap,
    description:
      "Trí thức là tầng lớp lao động trí óc đặc biệt, có vai trò quyết định trong việc nâng cao dân trí, đào tạo nhân tài và bứt phá công nghệ. Đội ngũ trí thức là chiếc cầu nối đưa tri thức tiên tiến thế giới vào quy trình sản xuất của công nhân và nông dân.",
    uniqueAspects: [
      {
        label: "Tính chất lao động",
        value: "Sáng tạo đặc biệt",
        desc: "Tạo ra các phát minh, công nghệ, giải pháp quản lý và giá trị gia tăng vô hình.",
      },
      {
        label: "Vai trò tư vấn",
        value: "Phản biện chiến lược",
        desc: "Tham gia hoạch định đường lối, chính sách và luận cứ khoa học cho Nhà nước.",
      },
      {
        label: "Chuyển giao KH&CN",
        value: "Thương mại hóa",
        desc: "Đưa kết quả nghiên cứu trong phòng thí nghiệm ra cánh đồng và nhà máy.",
      },
    ],
    keyQuotes:
      "Trí thức là vốn quý của dân tộc; phát triển khoa học - công nghệ là quốc sách hàng đầu.",
    visualType: "scientific",
  },
  {
    id: "doanh-nhan",
    roleTitle: "TIÊN PHONG QUẢN TRỊ • KẾT NỐI TOÀN CẦU",
    className: "Đội Ngũ Doanh Nhân",
    missionBadge: "Tổ Chức Sản Xuất & Thị Trường",
    tagline: "Lực lượng năng động tổ chức nguồn lực, mở rộng thị trường và giải quyết việc làm.",
    accentColor: "rose",
    icon: Briefcase,
    description:
      "Doanh nhân là lực lượng quản lý, huy động các nguồn lực tài chính, công nghệ và con người trong nền kinh tế thị trường định hướng XHCN. Doanh nhân tạo ra việc làm, liên kết chuỗi giá trị và đưa thương hiệu sản phẩm Việt Nam vươn tầm quốc tế.",
    uniqueAspects: [
      {
        label: "Năng lực quản trị",
        value: "Khơi thông nguồn lực",
        desc: "Huy động vốn xã hội, tổ chức các cụm liên kết ngành có sức cạnh tranh cao.",
      },
      {
        label: "Liên kết chuỗi",
        value: "Bao tiêu thị trường",
        desc: "Ký hợp đồng tiêu thụ sản phẩm cho nông dân và cung ứng nguyên liệu cho công nghiệp.",
      },
      {
        label: "Văn hóa kinh doanh",
        value: "Trách nhiệm xã hội",
        desc: "Tuân thủ pháp luật, bảo vệ môi trường, chia sẻ lợi ích với người lao động.",
      },
    ],
    keyQuotes:
      "Xây dựng đội ngũ doanh nhân lớn mạnh, có tinh thần dân tộc và khát vọng cống hiến vì một Việt Nam hùng cường.",
    visualType: "executive",
  },
];

// Custom Animated Dynamic Visual Silhouette per Force
function ForceKineticVisual({ type }: { type: ForceItem["visualType"] }) {
  if (type === "industrial") {
    return (
      <div className="relative w-full h-80 sm:h-96 rounded-3xl bg-gradient-to-b from-amber-950/20 to-slate-950 border border-amber-500/30 flex items-center justify-center overflow-hidden p-6">
        {/* Animated Gears & Circuit Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.12),transparent_70%)]" />

        {/* Moving Laser Scan Line */}
        <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent animate-bounce opacity-40 top-1/4" />

        {/* SVG Animated Industrial Silhouette & Gears */}
        <svg
          viewBox="0 0 400 300"
          className="w-full h-full max-h-72 text-amber-400 relative z-10"
          fill="none"
        >
          {/* Rotating Main Gear */}
          <g className="animate-spin-slow origin-[200px_140px] text-amber-500/40">
            <circle
              cx="200"
              cy="140"
              r="70"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="6 6"
            />
            <circle
              cx="200"
              cy="140"
              r="45"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
              <rect
                key={deg}
                x="195"
                y="60"
                width="10"
                height="16"
                rx="3"
                fill="currentColor"
                transform={`rotate(${deg} 200 140)`}
              />
            ))}
          </g>

          {/* Secondary Interlocking Gear */}
          <g className="animate-reverse-spin origin-[275px_195px] text-amber-400/30">
            <circle
              cx="275"
              cy="195"
              r="40"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
          </g>

          {/* Stylized Silhouette of Industrial Worker with Helmet & Digital Tablet */}
          <g className="text-amber-300">
            {/* Safety Helmet & Head */}
            <path
              d="M190 95 C190 85 210 85 210 95 L215 102 C218 104 182 104 185 102 Z"
              fill="#F59E0B"
            />
            <circle cx="200" cy="110" r="14" fill="#FEF3C7" />
            {/* Torso with High-vis Vest stripes */}
            <path
              d="M175 130 L225 130 L235 220 L165 220 Z"
              fill="#1E293B"
              stroke="#F59E0B"
              strokeWidth="2"
            />
            <path
              d="M185 130 L188 220 M215 130 L212 220"
              stroke="#FBBF24"
              strokeWidth="3"
              strokeDasharray="8 4"
            />
            {/* Digital Tablet with glowing pulse */}
            <rect
              x="185"
              y="160"
              width="30"
              height="40"
              rx="4"
              fill="#0F172A"
              stroke="#F59E0B"
              strokeWidth="1.5"
            />
            <circle cx="200" cy="180" r="6" fill="#F59E0B" className="animate-pulse" />
          </g>

          {/* Dynamic Telemetry Data Badges */}
          <text
            x="30"
            y="50"
            fill="#FBBF24"
            fontSize="10"
            fontFamily="monospace"
            letterSpacing="2"
          >
            [PROLETARIAT_VANGUARD: ACTIVE]
          </text>
          <text
            x="30"
            y="70"
            fill="#94A3B8"
            fontSize="9"
            fontFamily="monospace"
          >
            • TỰ ĐỘNG HÓA 4.0: 98.4%
          </text>
          <text
            x="30"
            y="85"
            fill="#94A3B8"
            fontSize="9"
            fontFamily="monospace"
          >
            • VAI TRÒ LÃNH ĐẠO: ĐẢNG TIỀN PHONG
          </text>
        </svg>

        {/* Bottom Status Chip */}
        <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-[11px] font-mono text-amber-300/80 border-t border-amber-500/20 pt-2">
          <span>KỸ SƯ & CÔNG NHÂN CÔNG NGHỆ CAO</span>
          <span className="flex items-center text-amber-400">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping mr-1.5" />
            Lực lượng nòng cốt
          </span>
        </div>
      </div>
    );
  }

  if (type === "agrarian") {
    return (
      <div className="relative w-full h-80 sm:h-96 rounded-3xl bg-gradient-to-b from-emerald-950/20 to-slate-950 border border-emerald-500/30 flex items-center justify-center overflow-hidden p-6">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.12),transparent_70%)]" />

        {/* SVG Animated Agrarian Silhouette & Ecological Rings */}
        <svg
          viewBox="0 0 400 300"
          className="w-full h-full max-h-72 text-emerald-400 relative z-10"
          fill="none"
        >
          {/* Circular Ecological Biosphere Loop */}
          <circle
            cx="200"
            cy="150"
            r="80"
            stroke="#10B981"
            strokeWidth="1.5"
            strokeDasharray="8 6"
            className="animate-spin-slow opacity-40"
          />

          {/* Undulating Field Waves */}
          <path
            d="M50 240 Q120 210 200 240 T350 240"
            stroke="#059669"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M30 255 Q130 230 220 255 T370 255"
            stroke="#10B981"
            strokeWidth="1.5"
            fill="none"
            opacity="0.6"
          />

          {/* Animated Wheat Stalks */}
          <g className="text-emerald-400">
            <path
              d="M100 240 C100 200 120 180 115 160"
              stroke="#34D399"
              strokeWidth="2"
            />
            <circle cx="115" cy="155" r="5" fill="#FBBF24" />
            <circle cx="118" cy="168" r="4" fill="#FBBF24" />
            <circle cx="110" cy="178" r="4" fill="#FBBF24" />

            <path
              d="M290 240 C290 195 270 175 275 155"
              stroke="#34D399"
              strokeWidth="2"
            />
            <circle cx="275" cy="150" r="5" fill="#FBBF24" />
            <circle cx="272" cy="163" r="4" fill="#FBBF24" />
            <circle cx="280" cy="173" r="4" fill="#FBBF24" />
          </g>

          {/* Smart Agriculture Drone hovering above */}
          <g className="text-emerald-300 animate-bounce" style={{ animationDuration: "4s" }}>
            <rect x="185" y="60" width="30" height="10" rx="3" fill="#047857" />
            <circle cx="175" cy="65" r="8" stroke="#34D399" strokeWidth="1" />
            <circle cx="225" cy="65" r="8" stroke="#34D399" strokeWidth="1" />
            {/* Drone Sensor Cone Scanner */}
            <path
              d="M200 70 L150 160 L250 160 Z"
              fill="url(#droneConeGrad)"
              opacity="0.3"
            />
            <defs>
              <linearGradient id="droneConeGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10B981" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
              </linearGradient>
            </defs>
          </g>

          {/* Modern Farmer Silhouette with Smart Tablet */}
          <g>
            {/* Conical Hat (Nón Lá) Stylized Modern Polyline */}
            <polygon points="200,105 165,125 235,125" fill="#F59E0B" />
            <circle cx="200" cy="132" r="11" fill="#FEF3C7" />
            <path
              d="M180 148 L220 148 L228 235 L172 235 Z"
              fill="#064E3B"
              stroke="#10B981"
              strokeWidth="1.5"
            />
          </g>

          <text
            x="30"
            y="45"
            fill="#34D399"
            fontSize="10"
            fontFamily="monospace"
            letterSpacing="2"
          >
            [AGRARIAN_STRATEGIC_ALLY: ECO-FARMING]
          </text>
          <text
            x="30"
            y="65"
            fill="#94A3B8"
            fontSize="9"
            fontFamily="monospace"
          >
            • AN NINH LƯƠNG THỰC: BỀN VỮNG
          </text>
        </svg>

        <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-[11px] font-mono text-emerald-300/80 border-t border-emerald-500/20 pt-2">
          <span>NÔNG DÂN SỐ & KINH TẾ NÔNG THÔN MỚI</span>
          <span className="flex items-center text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping mr-1.5" />
            Đồng minh tự nhiên
          </span>
        </div>
      </div>
    );
  }

  if (type === "scientific") {
    return (
      <div className="relative w-full h-80 sm:h-96 rounded-3xl bg-gradient-to-b from-cyan-950/20 to-slate-950 border border-cyan-500/30 flex items-center justify-center overflow-hidden p-6">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.12),transparent_70%)]" />

        {/* SVG Animated Scientific Orbit & Neural Nodes */}
        <svg
          viewBox="0 0 400 300"
          className="w-full h-full max-h-72 text-cyan-400 relative z-10"
          fill="none"
        >
          {/* Atomic Orbital Rings rotating */}
          <ellipse
            cx="200"
            cy="150"
            rx="95"
            ry="35"
            stroke="#06B6D4"
            strokeWidth="1.5"
            transform="rotate(30 200 150)"
            className="animate-spin-slow opacity-60"
          />
          <ellipse
            cx="200"
            cy="150"
            rx="95"
            ry="35"
            stroke="#38BDF8"
            strokeWidth="1.5"
            transform="rotate(-30 200 150)"
            className="animate-reverse-spin opacity-60"
          />
          <circle cx="200" cy="150" r="14" fill="#0891B2" className="animate-pulse" />
          <circle cx="200" cy="150" r="6" fill="#E0F2FE" />

          {/* DNA Helix or Neural Synapses */}
          {[60, 100, 140, 180, 220, 260].map((x, i) => (
            <circle
              key={x}
              cx={x}
              cy={80 + Math.sin(i) * 20}
              r="4"
              fill="#22D3EE"
              className="animate-ping"
              style={{ animationDuration: `${2 + i * 0.5}s` }}
            />
          ))}

          {/* Scientist Silhouette with Research Glasses / Lab Coat */}
          <g>
            <circle cx="200" cy="105" r="12" fill="#E0F2FE" />
            <path
              d="M192 104 L208 104"
              stroke="#0891B2"
              strokeWidth="2.5"
            />
            {/* Lab Coat */}
            <path
              d="M178 122 L222 122 L230 220 L170 220 Z"
              fill="#F8FAFC"
              stroke="#0891B2"
              strokeWidth="1.5"
            />
            {/* Tie / ID card badge */}
            <rect x="196" y="135" width="8" height="24" rx="2" fill="#0284C7" />
          </g>

          <text
            x="30"
            y="45"
            fill="#22D3EE"
            fontSize="10"
            fontFamily="monospace"
            letterSpacing="2"
          >
            [INTELLECTUAL_VECTORS: R&D 4.0]
          </text>
          <text
            x="30"
            y="65"
            fill="#94A3B8"
            fontSize="9"
            fontFamily="monospace"
          >
            • SÁNG TẠO TRI THỨC & BẰNG SÁNG CHẾ
          </text>
        </svg>

        <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-[11px] font-mono text-cyan-300/80 border-t border-cyan-500/20 pt-2">
          <span>NHÀ KHOA HỌC & ĐỘI NGŨ TRÍ THỨC</span>
          <span className="flex items-center text-cyan-400">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping mr-1.5" />
            Đột phá công nghệ
          </span>
        </div>
      </div>
    );
  }

  // Executive / Entrepreneur
  return (
    <div className="relative w-full h-80 sm:h-96 rounded-3xl bg-gradient-to-b from-rose-950/20 to-slate-950 border border-rose-500/30 flex items-center justify-center overflow-hidden p-6">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(244,63,94,0.12),transparent_70%)]" />

      {/* SVG Animated Global Trade Grid & Stock Market Wave */}
      <svg
        viewBox="0 0 400 300"
        className="w-full h-full max-h-72 text-rose-400 relative z-10"
        fill="none"
      >
        {/* Ascending Market Candlestick & Value Curve */}
        <polyline
          points="40,210 90,190 140,205 190,140 240,160 300,95 360,70"
          stroke="#FB7185"
          strokeWidth="2.5"
          fill="none"
        />
        {/* Glow below curve */}
        <polygon
          points="40,210 90,190 140,205 190,140 240,160 300,95 360,70 360,250 40,250"
          fill="url(#marketGrad)"
          opacity="0.2"
        />
        <defs>
          <linearGradient id="marketGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F43F5E" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#F43F5E" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Global Connection Nodes */}
        <circle cx="300" cy="95" r="5" fill="#FDA4AF" className="animate-ping" />
        <circle cx="360" cy="70" r="7" fill="#F43F5E" />

        {/* Entrepreneur Silhouette with Suit & Global Compass */}
        <g>
          <circle cx="200" cy="115" r="12" fill="#FFE4E6" />
          {/* Suit Silhouette */}
          <path
            d="M175 135 L225 135 L235 235 L165 235 Z"
            fill="#1E1B4B"
            stroke="#F43F5E"
            strokeWidth="1.5"
          />
          {/* Lapels & Crimson Tie */}
          <polygon points="200,140 194,185 200,200 206,185" fill="#E11D48" />
          <path d="M185 135 L196 175 M215 135 L204 175" stroke="#FDA4AF" strokeWidth="1.5" />
        </g>

        <text
          x="30"
          y="45"
          fill="#FB7185"
          fontSize="10"
          fontFamily="monospace"
          letterSpacing="2"
        >
          [ENTREPRENEUR_LEADERSHIP: MARKET INTEGRATION]
        </text>
        <text
          x="30"
          y="65"
          fill="#94A3B8"
          fontSize="9"
          fontFamily="monospace"
        >
          • HUY ĐỘNG VỐN & CHUỖI CUNG ỨNG TOÀN CẦU
        </text>
      </svg>

      <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-[11px] font-mono text-rose-300/80 border-t border-rose-500/20 pt-2">
        <span>DOANH NHÂN & NHÀ QUẢN TRỊ 4.0</span>
        <span className="flex items-center text-rose-400">
          <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-ping mr-1.5" />
          Tiên phong thị trường
        </span>
      </div>
    </div>
  );
}

export default function ClassStructure() {
  const [activeForceId, setActiveForceId] =
    useState<ForceItem["id"]>("cong-nhan");

  const currentForce =
    FORCES.find((f) => f.id === activeForceId) || FORCES[0];

  const CurrentIcon = currentForce.icon;

  const accentStyles = {
    amber: {
      activeTab: "bg-amber-400 text-slate-950 font-black shadow-[0_0_20px_rgba(245,158,11,0.4)]",
      badge: "bg-amber-950/60 text-amber-300 border-amber-500/40",
      border: "border-amber-500/40",
      accentText: "text-amber-400",
      bulletBg: "bg-amber-500/10 text-amber-300 border-amber-500/30",
    },
    emerald: {
      activeTab: "bg-emerald-400 text-slate-950 font-black shadow-[0_0_20px_rgba(16,185,129,0.4)]",
      badge: "bg-emerald-950/60 text-emerald-300 border-emerald-500/40",
      border: "border-emerald-500/40",
      accentText: "text-emerald-400",
      bulletBg: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
    },
    cyan: {
      activeTab: "bg-cyan-400 text-slate-950 font-black shadow-[0_0_20px_rgba(6,182,212,0.4)]",
      badge: "bg-cyan-950/60 text-cyan-300 border-cyan-500/40",
      border: "border-cyan-500/40",
      accentText: "text-cyan-400",
      bulletBg: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
    },
    rose: {
      activeTab: "bg-rose-400 text-slate-950 font-black shadow-[0_0_20px_rgba(244,63,94,0.4)]",
      badge: "bg-rose-950/60 text-rose-300 border-rose-500/40",
      border: "border-rose-500/40",
      accentText: "text-rose-400",
      bulletBg: "bg-rose-500/10 text-rose-300 border-rose-500/30",
    },
  }[currentForce.accentColor as "amber" | "emerald" | "cyan" | "rose"];

  return (
    <section
      id="class-structure"
      className="relative py-28 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto scroll-mt-12"
    >
      {/* Section Editorial Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-xs font-mono mb-4">
          <Layers className="w-3.5 h-3.5 text-amber-400" />
          <span>PHẦN 1: CƠ CẤU XÃ HỘI - GIAI CẤP</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">
          Bốn Lực Lượng Nòng Cốt Của Khối Liên Minh
        </h2>

        <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
          Mỗi lực lượng mang một bản sắc lao động, vị trí chính trị và sứ mệnh
          lịch sử riêng biệt. Chọn từng lực lượng bên dưới để theo dõi mô phỏng
          chuyển động và bản đồ phân tích biện chứng độc bản.
        </p>
      </div>

      {/* Interactive Force Switcher Tabs */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex p-1.5 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-xl shadow-2xl overflow-x-auto max-w-full">
          {FORCES.map((force) => {
            const isActive = force.id === activeForceId;
            const ForceIcon = force.icon;

            return (
              <button
                key={force.id}
                onClick={() => setActiveForceId(force.id)}
                className={`px-5 py-3 rounded-xl text-xs sm:text-sm tracking-wide transition-all duration-300 flex items-center space-x-2.5 whitespace-nowrap ${
                  isActive
                    ? "bg-slate-100 text-slate-950 font-black shadow-lg"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/50 font-medium"
                }`}
              >
                <ForceIcon className="w-4 h-4 flex-shrink-0" />
                <span>{force.className}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Dynamic Animated Persona Stage Viewport */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentForce.id}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -25 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl p-6 sm:p-10 lg:p-12 bg-slate-900/70 border border-slate-800/90 backdrop-blur-2xl shadow-2xl"
        >
          {/* Top Identifier Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-slate-800">
            <div>
              <span className="text-[11px] font-mono tracking-widest uppercase font-bold text-slate-500 block mb-1">
                {currentForce.roleTitle}
              </span>
              <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                {currentForce.className}
              </h3>
            </div>

            <span
              className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border ${accentStyles.badge}`}
            >
              <CurrentIcon className="w-4 h-4 mr-2" />
              {currentForce.missionBadge}
            </span>
          </div>

          {/* Main Stage: Asymmetric Split Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center my-10">
            {/* Left Column (5 Cols): Custom Animated Vector Figure */}
            <div className="lg:col-span-5">
              <ForceKineticVisual type={currentForce.visualType} />
            </div>

            {/* Right Column (7 Cols): Deep Academic Matrix */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div>
                <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal mb-6">
                  {currentForce.description}
                </p>

                {/* 3 Asymmetric Dimension Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-6">
                  {currentForce.uniqueAspects.map((aspect, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 hover:border-slate-700 transition-colors"
                    >
                      <span className="text-[10px] font-mono text-slate-400 uppercase block mb-1">
                        {aspect.label}
                      </span>
                      <h5 className="text-sm font-bold text-white mb-1">
                        {aspect.value}
                      </h5>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {aspect.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Philosophical Axiom Box */}
              <div className="p-5 rounded-2xl bg-slate-950/90 border border-slate-800/90 flex items-start space-x-3.5">
                <Sparkles
                  className={`w-5 h-5 flex-shrink-0 mt-0.5 ${accentStyles.accentText}`}
                />
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block mb-1">
                    LUẬN ĐIỂM KHOA HỌC TRỌNG TÂM
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                    "{currentForce.keyQuotes}"
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Force Summary Strip */}
          <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-xs text-slate-400">
            <span className="font-mono text-slate-500">
              CHƯƠNG 5 • GIÁO TRÌNH CHỦ NGHĨA XÃ HỘI KHOA HỌC (2021)
            </span>
            <span className="text-slate-300 font-medium">
              Tính tất yếu khách quan của khối liên minh giai cấp, tầng lớp
            </span>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
