"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Crown,
  Scale,
  Handshake,
  Anchor,
  CheckCircle2,
  Sparkles,
  AlertTriangle,
} from "lucide-react";

interface PrincipleDetail {
  id: "lanh-dao" | "loi-ich" | "tu-nguyen";
  vertexNumber: string;
  name: string;
  role: string;
  tagline: string;
  icon: React.ElementType;
  accent: "amber" | "red" | "cyan";
  coreRules: string[];
  collapseRisk: string;
  authoritativeQuote: string;
}

const PRINCIPLES: PrincipleDetail[] = [
  {
    id: "lanh-dao",
    vertexNumber: "ĐỈNH 01",
    name: "Bảo Đảm Vai Trò Lãnh Đạo Của Giai Cấp Công Nhân",
    role: "NGỌN HẢI ĐĂNG CHÍNH TRỊ TỐI CAO",
    tagline: "Giữ vững vai trò lãnh đạo của Đảng Cộng sản Việt Nam đối với khối liên minh.",
    icon: Crown,
    accent: "amber",
    coreRules: [
      "Đảng Cộng sản Việt Nam là đội tiên phong của giai cấp công nhân và nhân dân lao động.",
      "Lấy chủ nghĩa Mác - Lênin và tư tưởng Hồ Chí Minh làm kim chỉ nam hành động.",
      "Lãnh đạo liên minh không phải để áp đặt đặc quyền, mà để hướng tới độc lập dân tộc và CNXH.",
      "Xây dựng giai cấp công nhân hiện đại, lớn mạnh là nhiệm vụ quan trọng có tính chiến lược.",
    ],
    collapseRisk:
      "CẢNH BÁO NGUY CƠ: Nếu đánh mất vai trò lãnh đạo của GCCN, liên minh sẽ chệch hướng XHCN, rơi vào tự phát và tan rã trước các thế lực phản động.",
    authoritativeQuote:
      "Sự lãnh đạo của Đảng Cộng sản là nhân tố quyết định bảo đảm cho khối liên minh luôn đi đúng hướng và phát huy được sức mạnh to lớn.",
  },
  {
    id: "loi-ich",
    vertexNumber: "CHÂN TRỤ 02",
    name: "Kết Hợp Đúng Đắn Các Lợi Ích (Trọng Tâm Kinh Tế)",
    role: "ĐỘNG LỰC NỘI TẠI & CHẤT KẾT DÍNH VẬT CHẤT",
    tagline: "Hài hòa giữa lợi ích người lao động, lợi ích doanh nghiệp và lợi ích toàn xã hội.",
    icon: Scale,
    accent: "red",
    coreRules: [
      "Lợi ích kinh tế là động lực trực tiếp và là chất xi măng gắn kết bền vững.",
      "Tôn trọng và bảo đảm lợi ích thiết thân của người nông dân và nhân dân lao động.",
      "Khuyến khích làm giàu hợp pháp của doanh nhân gắn với trách nhiệm xã hội.",
      "Thực hiện phân phối công bằng theo kết quả lao động và mức độ đóng góp.",
    ],
    collapseRisk:
      "CẢNH BÁO NGUY CƠ: Nếu vi phạm hoặc xem nhẹ lợi ích kinh tế, liên minh sẽ trở thành hình thức, người lao động sẽ mất động lực cống hiến.",
    authoritativeQuote:
      "V.I. Lênin nhấn mạnh: Phải xây dựng chủ nghĩa xã hội không phải bằng lòng nhiệt tình đơn thuần, mà bằng sự quan tâm đến lợi ích cá nhân.",
  },
  {
    id: "tu-nguyen",
    vertexNumber: "CHÂN TRỤ 03",
    name: "Xuất Phát Từ Sự Tự Nguyện, Tự Giác Của Các Giai Cấp",
    role: "PHƯƠNG THỨC BỀN VỮNG & DÂN CHỦ XÃ HỘI",
    tagline: "Không mệnh lệnh hành chính gượng ép; xây dựng trên cơ sở giác ngộ quyền lợi và nghĩa vụ.",
    icon: Handshake,
    accent: "cyan",
    coreRules: [
      "Tuyệt đối không áp đặt mệnh lệnh chủ quan, ép buộc các tầng lớp nhân dân.",
      "Tăng cường tuyên truyền, giáo dục, thuyết phục để các bên thấy rõ lợi ích gắn kết.",
      "Xây dựng cơ chế dân chủ minh bạch để nhân dân cùng bàn bạc và giám sát.",
      "Phát huy tinh thần tự quản và quyền làm chủ của các tổ chức đoàn thể nhân dân.",
    ],
    collapseRisk:
      "CẢNH BÁO NGUY CƠ: Nếu dùng mệnh lệnh hành chính gượng ép, liên minh sẽ sinh ra chống đối ngấm ngầm, mất lòng tin và rạn nứt khối đại đoàn kết.",
    authoritativeQuote:
      "Chủ tịch Hồ Chí Minh dạy: 'Dân vận khéo thì việc gì cũng thành công'. Sự tự nguyện xuất phát từ sự thấu hiểu và tin tưởng của nhân dân.",
  },
];

export default function PrinciplesSection() {
  const [selectedPrincipleId, setSelectedPrincipleId] =
    useState<PrincipleDetail["id"]>("lanh-dao");

  const currentPrinciple =
    PRINCIPLES.find((p) => p.id === selectedPrincipleId) || PRINCIPLES[0];

  const CurrentIcon = currentPrinciple.icon;

  return (
    <section
      id="principles"
      className="relative py-28 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto scroll-mt-12"
    >
      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-xs font-mono mb-4">
          <Anchor className="w-3.5 h-3.5 text-amber-400" />
          <span>PHẦN 4: NGUYÊN TẮC CƠ BẢN</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">
          Thế "Kiềng Ba Chân" Vững Chắc Của Khối Liên Minh
        </h2>

        <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
          Ba nguyên tắc vàng có mối quan hệ hữu cơ mật thiết. Thiếu bất kỳ
          nguyên tắc nào, toàn bộ thế cân bằng lịch sử của khối liên minh đều sẽ
          lung lay.
        </p>
      </div>

      {/* Interactive Sacred Tripod Visual & Details */}
      <div className="rounded-3xl p-6 sm:p-10 lg:p-12 bg-slate-900/60 border border-slate-800/80 backdrop-blur-2xl shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Interactive Tripod SVG Diagram */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-sm h-80 sm:h-96 rounded-3xl bg-slate-950 border border-slate-800 p-6 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.1),transparent_70%)]" />

              {/* Animated Tripod SVG */}
              <svg viewBox="0 0 300 280" className="w-full h-full relative z-10" fill="none">
                {/* Connecting Struts (Tension Lines) */}
                <line
                  x1="150"
                  y1="50"
                  x2="60"
                  y2="220"
                  stroke="#F59E0B"
                  strokeWidth="2.5"
                  strokeDasharray="4 4"
                  className="opacity-70"
                />
                <line
                  x1="150"
                  y1="50"
                  x2="240"
                  y2="220"
                  stroke="#EF4444"
                  strokeWidth="2.5"
                  strokeDasharray="4 4"
                  className="opacity-70"
                />
                <line
                  x1="60"
                  y1="220"
                  x2="240"
                  y2="220"
                  stroke="#06B6D4"
                  strokeWidth="2.5"
                  strokeDasharray="4 4"
                  className="opacity-70"
                />

                {/* Central Equilibrium Node */}
                <circle cx="150" cy="160" r="22" fill="#1E293B" stroke="#FBBF24" strokeWidth="2" />
                <text x="150" y="163" fill="#FDE68A" fontSize="8" fontWeight="bold" textAnchor="middle">
                  CÂN BẰNG
                </text>

                {/* Vertex 1: Lãnh đạo GCCN (Top) */}
                <g
                  onClick={() => setSelectedPrincipleId("lanh-dao")}
                  className="cursor-pointer group"
                >
                  <circle
                    cx="150"
                    cy="50"
                    r={selectedPrincipleId === "lanh-dao" ? "24" : "18"}
                    fill={selectedPrincipleId === "lanh-dao" ? "#F59E0B" : "#78350F"}
                    stroke="#FDE68A"
                    strokeWidth="2.5"
                  />
                  <text
                    x="150"
                    y="54"
                    fill={selectedPrincipleId === "lanh-dao" ? "#0F172A" : "#FEF3C7"}
                    fontSize="9"
                    fontWeight="bold"
                    textAnchor="middle"
                  >
                    01
                  </text>
                  <text x="150" y="20" fill="#FBBF24" fontSize="9" fontWeight="bold" textAnchor="middle">
                    LÃNH ĐẠO GCCN
                  </text>
                </g>

                {/* Vertex 2: Lợi ích kinh tế (Bottom Left) */}
                <g
                  onClick={() => setSelectedPrincipleId("loi-ich")}
                  className="cursor-pointer group"
                >
                  <circle
                    cx="60"
                    cy="220"
                    r={selectedPrincipleId === "loi-ich" ? "24" : "18"}
                    fill={selectedPrincipleId === "loi-ich" ? "#EF4444" : "#7F1D1D"}
                    stroke="#FECACA"
                    strokeWidth="2.5"
                  />
                  <text
                    x="60"
                    y="224"
                    fill={selectedPrincipleId === "loi-ich" ? "#FFFFFF" : "#FEE2E2"}
                    fontSize="9"
                    fontWeight="bold"
                    textAnchor="middle"
                  >
                    02
                  </text>
                  <text x="60" y="255" fill="#F87171" fontSize="9" fontWeight="bold" textAnchor="middle">
                    LỢI ÍCH KINH TẾ
                  </text>
                </g>

                {/* Vertex 3: Tự nguyện tự giác (Bottom Right) */}
                <g
                  onClick={() => setSelectedPrincipleId("tu-nguyen")}
                  className="cursor-pointer group"
                >
                  <circle
                    cx="240"
                    cy="220"
                    r={selectedPrincipleId === "tu-nguyen" ? "24" : "18"}
                    fill={selectedPrincipleId === "tu-nguyen" ? "#06B6D4" : "#164E63"}
                    stroke="#CFFAFE"
                    strokeWidth="2.5"
                  />
                  <text
                    x="240"
                    y="224"
                    fill={selectedPrincipleId === "tu-nguyen" ? "#0F172A" : "#ECFEFF"}
                    fontSize="9"
                    fontWeight="bold"
                    textAnchor="middle"
                  >
                    03
                  </text>
                  <text x="240" y="255" fill="#38BDF8" fontSize="9" fontWeight="bold" textAnchor="middle">
                    TỰ NGUYỆN
                  </text>
                </g>
              </svg>
            </div>
            <span className="text-xs text-slate-500 font-mono mt-3">
              * Nhấp vào 3 đỉnh kiềng để khảo sát độ cân bằng
            </span>
          </div>

          {/* Right Column: In-depth Principle Inspector */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPrinciple.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold block mb-1">
                    {currentPrinciple.vertexNumber} • {currentPrinciple.role}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2">
                    {currentPrinciple.name}
                  </h3>
                  <p className="text-sm text-slate-400 italic">
                    "{currentPrinciple.tagline}"
                  </p>
                </div>

                {/* Core Rules List */}
                <div className="space-y-2.5">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">
                    CÁC YÊU CẦU NGUYÊN TẮC BẮT BUỘC:
                  </h4>
                  {currentPrinciple.coreRules.map((rule, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300 leading-relaxed flex items-start space-x-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span>{rule}</span>
                    </div>
                  ))}
                </div>

                {/* Risk Warning Box */}
                <div className="p-4 rounded-xl bg-red-950/30 border border-red-500/30 flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-red-200/90 leading-relaxed">
                    {currentPrinciple.collapseRisk}
                  </p>
                </div>

                {/* Authoritative Quote */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 italic">
                  "{currentPrinciple.authoritativeQuote}"
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
