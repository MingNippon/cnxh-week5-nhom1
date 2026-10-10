"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Factory,
  Wheat,
  FlaskConical,
  Briefcase,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Shield,
  Zap,
  Layers,
  BookOpen,
} from "lucide-react";

interface ForceVisual {
  id: "cong-nhan" | "nong-dan" | "tri-thuc" | "doanh-nhan";
  title: string;
  roleBadge: string;
  techChip: string;
  icon: React.ElementType;
  image: string;
  headline: string;
  description: string;
  specs: { label: string; value: string }[];
  deepAcademicDetail: string;
}

const FORCES: ForceVisual[] = [
  {
    id: "cong-nhan",
    title: "Giai cấp Công nhân",
    roleBadge: "Lực lượng lãnh đạo liên minh",
    techChip: "Công nghiệp & Tự động hóa 4.0",
    icon: Factory,
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    headline: "Hạt nhân chính trị, đại diện phương thức sản xuất tiên tiến.",
    description:
      "Giai cấp công nhân giữ vai trò lãnh đạo khối liên minh thông qua đội tiên phong là Đảng Cộng sản Việt Nam. Công nhân hiện đại làm chủ các dây chuyền tự động hóa, robot công nghiệp và kinh tế dữ liệu số.",
    specs: [
      { label: "Địa vị chính trị", value: "Lãnh đạo toàn diện" },
      { label: "Phương thức", value: "Công nghiệp 4.0" },
      { label: "Sứ mệnh", value: "Đầu tàu phát triển" },
    ],
    deepAcademicDetail:
      "Giai cấp công nhân là sản phẩm trực tiếp của nền đại công nghiệp. Dù tỷ lệ dân số không chiếm đa số nhưng là giai cấp duy nhất có đủ bản lĩnh chính trị, tính kỷ luật và hệ tư tưởng khoa học (chủ nghĩa Mác - Lênin) để dẫn dắt toàn thể nhân dân lao động xây dựng CNXH.",
  },
  {
    id: "nong-dan",
    title: "Giai cấp Nông dân",
    roleBadge: "Đồng minh chiến lược tự nhiên",
    techChip: "Nông nghiệp sinh thái & Kinh tế số",
    icon: Wheat,
    image:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1200&q=80",
    headline: "Lực lượng đông đảo nhất, bảo đảm an ninh lương thực quốc gia.",
    description:
      "Nông dân là nền tảng xã hội vững chắc của khối liên minh. Trong thời kỳ mới, người nông dân chuyển đổi từ sản xuất truyền thống sang nông nghiệp công nghệ cao, kinh tế tuần hoàn và chuỗi giá trị nông sản sạch.",
    specs: [
      { label: "Quy mô", value: "Đông đảo nhất xã hội" },
      { label: "Trụ đỡ", value: "An ninh lương thực" },
      { label: "Chuyển đổi", value: "Nông thôn mới 4.0" },
    ],
    deepAcademicDetail:
      "Không có sự ủng hộ và liên minh tự nguyện của giai cấp nông dân thì cách mạng không thể thắng lợi và chế độ xã hội chủ nghĩa không thể đứng vững. Nông dân là lực lượng cung cấp nguồn nhân lực, lương thực thực phẩm và gìn giữ văn hóa truyền thống của dân tộc.",
  },
  {
    id: "tri-thuc",
    title: "Đội ngũ Trí thức",
    roleBadge: "Lực lượng lao động sáng tạo đặc biệt",
    techChip: "R&D & Đột phá khoa học công nghệ",
    icon: FlaskConical,
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80",
    headline: "Hạt nhân sáng tạo tri thức, cầu nối công nghệ với thực tiễn.",
    description:
      "Tầng lớp lao động trí óc đặc biệt, có vai trò quyết định trong việc nghiên cứu, sáng tạo và chuyển giao tiến bộ khoa học kỹ thuật vào sản xuất công nghiệp và đời sống nông thôn.",
    specs: [
      { label: "Bản chất", value: "Sáng tạo tri thức" },
      { label: "Động lực", value: "Khoa học & Đổi mới" },
      { label: "Ứng dụng", value: "Chuyển giao số hóa" },
    ],
    deepAcademicDetail:
      "Trong thời đại kinh tế tri thức và cuộc CMCN 4.0, trí thức không chỉ nghiên cứu cơ bản mà trực tiếp trở thành lực lượng sản xuất trực tiếp. Trí thức đóng vai trò tư vấn chính sách, phản biện xã hội và đào tạo nguồn nhân lực chất lượng cao cho đất nước.",
  },
  {
    id: "doanh-nhan",
    title: "Đội ngũ Doanh nhân",
    roleBadge: "Tiên phong quản trị & Thị trường",
    techChip: "Huy động nguồn lực & Hội nhập toàn cầu",
    icon: Briefcase,
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    headline: "Tổ chức sản xuất, khơi thông nguồn vốn và chuỗi cung ứng.",
    description:
      "Doanh nhân quản lý, huy động các nguồn lực phát triển kinh tế thị trường định hướng XHCN. Tạo việc làm, tiêu thụ nông sản và đưa thương hiệu quốc gia vươn tầm thị trường quốc tế.",
    specs: [
      { label: "Chức năng", value: "Tổ chức chuỗi giá trị" },
      { label: "Thị trường", value: "Bao tiêu & Xuất khẩu" },
      { label: "Trách nhiệm", value: "An sinh xã hội" },
    ],
    deepAcademicDetail:
      "Đại hội XIII của Đảng khẳng định vai trò của đội ngũ doanh nhân là lực lượng nòng cốt phát triển kinh tế, thúc đẩy đổi mới sáng tạo và tạo công ăn việc làm cho xã hội. Doanh nhân kết nối bằng sáng chế của trí thức với công nhân và nông dân trong chuỗi cung ứng toàn cầu.",
  },
];

export default function CoreForcesVisualShowcase() {
  const [activeForceId, setActiveForceId] =
    useState<ForceVisual["id"]>("cong-nhan");

  const currentForce =
    FORCES.find((f) => f.id === activeForceId) || FORCES[0];

  const CurrentIcon = currentForce.icon;

  return (
    <section
      id="core-forces"
      className="relative text-white py-28 px-6 sm:px-12 transition-colors duration-700"
    >
      <div className="max-w-6xl mx-auto">
        {/* Academic Overview Box: Vị trí trung tâm của Cơ cấu xã hội - giai cấp */}
        <div className="mb-20 p-8 rounded-3xl bg-neutral-950/70 border border-neutral-800/80 backdrop-blur-xl">
          <div className="flex items-center space-x-2.5 text-xs font-mono text-amber-400 uppercase tracking-widest mb-3">
            <BookOpen className="w-4 h-4" />
            <span>CHUYÊN ĐỀ 1: CƠ CẤU XÃ HỘI - GIAI CẤP TRONG THỜI KỲ QUÁ ĐỘ</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-white mb-4">
            Vị trí trung tâm và quy luật biến đổi khách quan
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-neutral-300 text-sm leading-relaxed">
            <div>
              <h4 className="font-semibold text-white mb-1.5 flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Vị trí trung tâm chi phối:</span>
              </h4>
              <p className="text-neutral-400">
                Trong hệ thống các cơ cấu xã hội (dân tộc, tôn giáo, nghề
                nghiệp, dân số), cơ cấu xã hội - giai cấp giữ vị trí trung tâm,
                quy định tính chất của các quan hệ xã hội khác, vì nó gắn liền trực
                tiếp với sở hữu tư liệu sản xuất và quyền lực nhà nước.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-1.5 flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Quy luật biến đổi đa dạng & thống nhất:</span>
              </h4>
              <p className="text-neutral-400">
                Cơ cấu giai cấp biến đổi theo quy luật: nền kinh tế nhiều thành
                phần sinh ra cơ cấu giai cấp đa dạng, đan xen; nhưng lại thống
                nhất dưới mục tiêu chung: độc lập dân tộc gắn liền với CNXH do Đảng
                lãnh đạo.
              </p>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-3">
              TRỰC QUAN HÓA THỰC TIỄN
            </span>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-tight">
              Bốn lực lượng nòng cốt của liên minh.
            </h2>
          </div>
          <p className="text-neutral-400 text-sm sm:text-base max-w-md font-normal leading-relaxed tracking-tight">
            Mỗi giai cấp, tầng lớp giữ một vị trí kinh tế - xã hội đặc thù, bổ sung
            cho nhau tạo thành khối sức mạnh tổng hợp của đất nước.
          </p>
        </div>

        {/* Dial-style Segmented Force Switcher Pills */}
        <div className="flex justify-start sm:justify-center mb-10 overflow-x-auto pb-2 scrollbar-none">
          <div className="inline-flex rounded-full bg-neutral-900/90 p-1.5 border border-neutral-800 text-xs font-medium backdrop-blur-md">
            {FORCES.map((force) => {
              const isActive = force.id === activeForceId;
              const Icon = force.icon;

              return (
                <button
                  key={force.id}
                  onClick={() => setActiveForceId(force.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all whitespace-nowrap ${
                    isActive
                      ? "bg-white text-black font-semibold shadow-md"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{force.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Cinematic Visual Frame with Dial Floating Pills */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentForce.id}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-3xl border border-neutral-800 overflow-hidden bg-neutral-950 shadow-[0_20px_70px_rgba(0,0,0,0.9)] group"
          >
            {/* Cinematic 16:9 Image Container */}
            <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[560px] overflow-hidden">
              <img
                src={currentForce.image}
                alt={currentForce.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
              />

              {/* Dark Gradient Overlay for Maximum Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />

              {/* Dial Floating Pill: Top Left (Role Badge) */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-6 left-6 flex items-center space-x-2 rounded-full bg-black/80 border border-neutral-700/80 text-white text-xs px-3.5 py-1.5 shadow-xl backdrop-blur-md"
              >
                <CurrentIcon className="w-3.5 h-3.5 text-neutral-300" />
                <span className="font-medium tracking-tight">
                  {currentForce.roleBadge}
                </span>
              </motion.div>

              {/* Dial Floating Pill: Top Right (Tech Chip) */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                className="absolute top-6 right-6 hidden sm:flex items-center space-x-1.5 rounded-full bg-neutral-950/80 border border-neutral-800 text-neutral-300 text-xs px-3.5 py-1.5 shadow-xl backdrop-blur-md"
              >
                <Zap className="w-3 h-3 text-neutral-400" />
                <span>{currentForce.techChip}</span>
              </motion.div>

              {/* Bottom Information Anchor */}
              <div className="absolute bottom-8 left-6 sm:left-10 right-6 sm:right-10 z-10 max-w-3xl">
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-1">
                  {currentForce.title.toUpperCase()}
                </span>
                <h3 className="text-2xl sm:text-4xl font-semibold tracking-tight text-white leading-tight mb-3">
                  {currentForce.headline}
                </h3>
                <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed max-w-2xl font-normal mb-3">
                  {currentForce.description}
                </p>
                <p className="text-neutral-400 text-xs italic leading-relaxed max-w-2xl border-l-2 border-amber-500/60 pl-3">
                  {currentForce.deepAcademicDetail}
                </p>

                {/* Micro Specs */}
                <div className="flex flex-wrap gap-5 mt-6 pt-5 border-t border-white/10">
                  {currentForce.specs.map((sp, idx) => (
                    <div key={idx} className="flex flex-col">
                      <span className="text-[10px] font-mono text-neutral-400 uppercase">
                        {sp.label}
                      </span>
                      <span className="text-xs font-semibold text-white tracking-tight">
                        {sp.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* 4 Thumbnails Strip Below for Quick Switching */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
          {FORCES.map((force) => {
            const isSelected = force.id === activeForceId;

            return (
              <button
                key={force.id}
                onClick={() => setActiveForceId(force.id)}
                className={`relative rounded-2xl overflow-hidden border p-2 text-left transition-all group ${
                  isSelected
                    ? "border-white bg-neutral-900"
                    : "border-neutral-800/80 bg-neutral-950/70 hover:border-neutral-700"
                }`}
              >
                <div className="w-full h-20 rounded-xl overflow-hidden mb-2 relative">
                  <img
                    src={force.image}
                    alt={force.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                </div>
                <span className="text-xs font-semibold text-white block truncate">
                  {force.title}
                </span>
                <span className="text-[10px] text-neutral-400 font-mono block truncate">
                  {force.roleBadge}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
