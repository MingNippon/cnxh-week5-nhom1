"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Coins,
  Landmark,
  HeartHandshake,
  CheckCircle2,
  Sparkles,
  PieChart,
  Layers,
  ArrowRight,
} from "lucide-react";

interface AllianceRealm {
  id: "kinh-te" | "chinh-tri" | "van-hoa";
  tierLevel: string;
  name: string;
  subtitle: string;
  badge: string;
  icon: React.ElementType;
  accent: "amber" | "red" | "cyan";
  headline: string;
  narrative: string;
  structuralPoints: { title: string; desc: string }[];
  policyMatrix: string[];
  philosophicalVerdict: string;
}

const REALMS: AllianceRealm[] = [
  {
    id: "kinh-te",
    tierLevel: "TẦNG 1: ĐẾ MÓNG NỀN TẢNG",
    name: "Nội Dung Kinh Tế",
    subtitle: "Cơ sở vật chất - kỹ thuật & Động lực trực tiếp",
    badge: "Quan Trọng Nhất & Quyết Định Nhất",
    icon: Coins,
    accent: "amber",
    headline: "Hợp Tác Sản Xuất & Hài Hòa Lợi Ích Kinh Tế Thiết Thân",
    narrative:
      "Nội dung kinh tế giữ vai trò nền tảng quyết định nhất của toàn bộ khối liên minh. Mục tiêu là thỏa mãn nhu cầu vật chất chính đáng của các giai cấp, kết hợp phân công lao động xã hội hiện đại và đẩy mạnh CNH - HĐH gắn với nông thôn mới.",
    structuralPoints: [
      {
        title: "Tổ chức lại nền sản xuất lớn hiện đại",
        desc: "Gắn kết chuỗi giá trị Công nghiệp - Nông nghiệp - Dịch vụ logistics và thương mại điện tử.",
      },
      {
        title: "Chuyển giao khoa học công nghệ vào đời sống",
        desc: "Ứng dụng công nghệ sinh học, tự động hóa và kinh tế số nhằm gia tăng năng suất lao động xã hội.",
      },
      {
        title: "Bảo hộ quyền sở hữu và tự do kinh doanh",
        desc: "Tạo hành lang minh bạch cho kinh tế tư nhân, kinh tế hợp tác và doanh nghiệp nhà nước cùng phát triển.",
      },
    ],
    policyMatrix: [
      "Đẩy mạnh CNH, HĐH nông nghiệp nông thôn và xây dựng nông thôn mới nâng cao.",
      "Hoàn thiện thể chế kinh tế thị trường định hướng XHCN, chống độc quyền và lũng đoạn.",
      "Hỗ trợ tín dụng xanh, bảo hiểm nông nghiệp và quỹ ươm tạo doanh nghiệp khởi nghiệp sáng tạo.",
      "Phát triển các vùng kinh tế trọng điểm kết nối hành lang kinh tế khu vực và quốc tế.",
    ],
    philosophicalVerdict:
      "V.I. Lênin chỉ rõ: Lợi ích kinh tế là chất xi măng gắn kết bền chặt các giai cấp; không giải quyết được lợi ích kinh tế thì liên minh sẽ chỉ là hình thức.",
  },
  {
    id: "chinh-tri",
    tierLevel: "TẦNG 2: KHUNG ĐỊNH HƯỚNG",
    name: "Nội Dung Chính Trị",
    subtitle: "Bảo đảm độc lập dân tộc & Vai trò lãnh đạo của Đảng",
    badge: "Nguyên Tắc Định Hướng XHCN",
    icon: Landmark,
    accent: "red",
    headline: "Giữ Vững Bản Quyền Lãnh Đạo & Quyền Lực Nhà Nước",
    narrative:
      "Nội dung chính trị bảo đảm định hướng XHCN cho liên minh kinh tế; củng cố vai trò lãnh đạo duy nhất của Đảng Cộng sản Việt Nam; phát huy dân chủ XHCN và quyền làm chủ thực chất của nhân dân lao động.",
    structuralPoints: [
      {
        title: "Vai trò tiên phong của Đảng Cộng sản",
        desc: "Đề ra cương lĩnh, đường lối chiến lược dẫn dắt toàn thể nhân dân lao động đi đúng con đường XHCN.",
      },
      {
        title: "Xây dựng Nhà nước pháp quyền xã hội chủ nghĩa",
        desc: "Nhà nước của dân, do dân, vì dân; kiểm soát quyền lực và bảo vệ quyền con người, quyền công dân.",
      },
      {
        title: "Thực hành dân chủ cơ sở sâu rộng",
        desc: "Phương châm: 'Dân biết, dân bàn, dân làm, dân kiểm tra, dân giám sát, dân thụ hưởng'.",
      },
    ],
    policyMatrix: [
      "Nâng cao năng lực lãnh đạo và sức chiến đấu của tổ chức cơ sở Đảng.",
      "Phòng chống quan liêu, tham nhũng, lãng phí và tiêu cực trong bộ máy công quyền.",
      "Xây dựng Mặt trận Tổ quốc và các tổ chức chính trị - xã hội vững mạnh, làm cầu nối với nhân dân.",
      "Kiên quyết đấu tranh chống các luận điệu xuyên tạc, chia rẽ khối đại đoàn kết toàn dân tộc.",
    ],
    philosophicalVerdict:
      "Khối liên minh là cơ sở chính trị vững chắc nhất của hệ thống chính trị và Nhà nước pháp quyền XHCN Việt Nam.",
  },
  {
    id: "van-hoa",
    tierLevel: "TẦNG 3: MÁI VÒM MỤC TIÊU",
    name: "Nội Dung Văn Hóa - Xã Hội",
    subtitle: "Nâng cao dân trí, an sinh xã hội & Bản sắc dân tộc",
    badge: "Mục Tiêu Phát Triển Vì Con Người",
    icon: HeartHandshake,
    accent: "cyan",
    headline: "Xây Dựng Văn Hóa Tiên Tiến & Thực Hiện Tiến Bộ Công Bằng Xã Hội",
    narrative:
      "Nội dung văn hóa - xã hội hướng đến con người là trung tâm của sự phát triển; xây dựng nền văn hóa Việt Nam tiên tiến đậm đà bản sắc dân tộc; bảo đảm an sinh xã hội, xóa đói giảm nghèo và thu hẹp khoảng cách phát triển giữa các vùng miền.",
    structuralPoints: [
      {
        title: "Nâng cao dân trí & Nguồn nhân lực chất lượng cao",
        desc: "Đổi mới căn bản, toàn diện giáo dục đào tạo, phổ cập kỹ năng số cho công nhân và nông dân.",
      },
      {
        title: "Bảo đảm an sinh xã hội & Y tế toàn dân",
        desc: "Mở rộng độ bao phủ bảo hiểm xã hội, bảo hiểm y tế và phát triển nhà ở xã hội cho công nhân.",
      },
      {
        title: "Bảo tồn bản sắc và gắn kết văn hóa dân tộc",
        desc: "Xây dựng môi trường văn hóa lành mạnh, phát huy truyền thống yêu nước và đạo lý tương thân tương ái.",
      },
    ],
    policyMatrix: [
      "Thực hiện tiến bộ và công bằng xã hội ngay trong từng bước đi và từng chính sách phát triển.",
      "Chương trình mục tiêu quốc gia giảm nghèo bền vững và phát triển kinh tế - xã hội vùng đồng bào thiểu số.",
      "Đầu tư thiết chế văn hóa, nhà trẻ, khu thể thao tại các khu công nghiệp tập trung.",
      "Bảo vệ môi trường sinh thái, ứng phó hiệu quả với biến đổi khí hậu và nước biển dâng.",
    ],
    philosophicalVerdict:
      "Văn hóa là nền tảng tinh thần của xã hội, là mục tiêu và động lực nội sinh bảo đảm sự phát triển bền vững của quốc gia.",
  },
];

export default function AllianceContent() {
  const [activeRealmId, setActiveRealmId] =
    useState<AllianceRealm["id"]>("kinh-te");

  const currentRealm =
    REALMS.find((r) => r.id === activeRealmId) || REALMS[0];

  const CurrentIcon = currentRealm.icon;

  return (
    <section
      id="alliance-content"
      className="relative py-28 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto scroll-mt-12"
    >
      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-xs font-mono mb-4">
          <PieChart className="w-3.5 h-3.5 text-cyan-400" />
          <span>PHẦN 3: NỘI DUNG LIÊN MINH TOÀN DIỆN</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">
          Cấu Trúc Ba Tầng Không Gian Toàn Diện
        </h2>

        <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
          Liên minh giai cấp, tầng lớp ở Việt Nam được triển khai đồng bộ trên cả
          ba lĩnh vực trọng yếu của đời sống xã hội: Kinh tế, Chính trị và Văn
          hóa - Xã hội.
        </p>
      </div>

      {/* 3D Isometric / Tiered Architecture Selector */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        {REALMS.map((realm) => {
          const isSelected = realm.id === activeRealmId;
          const RealmIcon = realm.icon;

          return (
            <button
              key={realm.id}
              onClick={() => setActiveRealmId(realm.id)}
              className={`p-6 rounded-3xl border text-left transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                isSelected
                  ? "bg-slate-900 border-amber-400/80 shadow-[0_0_30px_rgba(245,158,11,0.2)]"
                  : "bg-slate-950/70 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/60"
              }`}
            >
              {isSelected && (
                <div className="absolute top-0 right-0 w-28 h-28 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />
              )}

              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">
                    {realm.tierLevel}
                  </span>
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center border ${
                      isSelected
                        ? "border-amber-400 text-amber-400 bg-amber-500/10"
                        : "border-slate-800 text-slate-500 bg-slate-900"
                    }`}
                  >
                    <RealmIcon className="w-4 h-4" />
                  </div>
                </div>

                <h4 className="text-xl font-black text-white tracking-tight mb-1">
                  {realm.name}
                </h4>
                <p className="text-xs text-slate-400 line-clamp-2">
                  {realm.subtitle}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                <span
                  className={
                    isSelected ? "text-amber-300 font-bold" : "text-slate-500"
                  }
                >
                  {realm.badge}
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
              </div>
            </button>
          );
        })}
      </div>

      {/* Deep Interactive Realm Inspector */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentRealm.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.45 }}
          className="rounded-3xl p-6 sm:p-10 lg:p-12 bg-slate-900/70 border border-slate-800/90 backdrop-blur-2xl shadow-2xl"
        >
          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-slate-800">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <CurrentIcon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono tracking-widest uppercase text-slate-400">
                  {currentRealm.tierLevel}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  {currentRealm.headline}
                </h3>
              </div>
            </div>

            <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-950/60 text-amber-300 border border-amber-500/30">
              {currentRealm.badge}
            </span>
          </div>

          {/* Narrative Overview */}
          <p className="text-base text-slate-300 leading-relaxed my-8 font-normal max-w-4xl">
            {currentRealm.narrative}
          </p>

          {/* 3 Structural Columns & Policy Matrix */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Left: Structural Architecture */}
            <div className="space-y-4">
              <h4 className="text-xs uppercase font-mono tracking-wider text-amber-400 font-bold">
                TRỤ CỘT CẤU TRÚC:
              </h4>
              {currentRealm.structuralPoints.map((point, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80"
                >
                  <h5 className="text-sm font-bold text-white mb-1">
                    0{idx + 1}. {point.title}
                  </h5>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Right: Concrete Policies & Solutions */}
            <div className="space-y-4">
              <h4 className="text-xs uppercase font-mono tracking-wider text-cyan-400 font-bold">
                CHÍNH SÁCH & GIẢI PHÁP THỰC THI:
              </h4>
              <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800/80 space-y-3">
                {currentRealm.policyMatrix.map((pol, idx) => (
                  <div key={idx} className="flex items-start text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{pol}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Philosophical Quote */}
          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 flex items-start space-x-3.5">
            <Sparkles className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block mb-1">
                LUẬN ĐIỂM CHỈ ĐẠO
              </span>
              <p className="text-xs sm:text-sm text-amber-200/90 italic leading-relaxed">
                "{currentRealm.philosophicalVerdict}"
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
