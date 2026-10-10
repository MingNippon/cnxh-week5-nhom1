"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Landmark,
  Microscope,
  Building2,
  Tractor,
  Network,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  TrendingUp,
} from "lucide-react";

interface CaseStudy {
  id: "lua-st25" | "ca-phe" | "sua-organic";
  title: string;
  region: string;
  scaleMetric: string;
  summary: string;
  chainRoles: {
    stateRole: string;
    scientistRole: string;
    businessRole: string;
    farmerRole: string;
  };
  economicImpact: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "lua-st25",
    title: "Chuỗi Giá Trị Lúa Gạo ST25 & Đề Án 1 Triệu Ha Lúa ĐBSCL",
    region: "Đồng Bằng Sông Cửu Long (Sóc Trăng, An Giang, Kiên Giang)",
    scaleMetric: "Kim ngạch xuất khẩu > 4.6 tỷ USD • Giảm 20% phát thải carbon",
    summary:
      "Mô hình điển hình cho sự phối hợp 4 nhà trong việc nâng tầm hạt gạo Việt Nam đạt danh hiệu 'Gạo ngon nhất thế giới' và xây dựng thương hiệu quốc gia.",
    chainRoles: {
      stateRole:
        "Bộ NN&PTNT phê duyệt Đề án 1 triệu ha lúa chất lượng cao phát thải thấp; đầu tư hệ thống cống ngăn mặn và đê bao thủy lợi.",
      scientistRole:
        "Kỹ sư Hồ Quang Cua và nhóm cộng sự dành hơn 20 năm lai tạo giống lúa ST25 kháng rầy, chịu mặn và cho phẩm chất cơm tuyệt hảo.",
      businessRole:
        "Tập đoàn Lộc Trời, Tân Long ký hợp đồng bao tiêu lúa tươi tại ruộng, đầu tư silo bảo quản và xuất khẩu sang EU, Nhật Bản, Hoa Kỳ.",
      farmerRole:
        "Hàng vạn hộ nông dân tham gia HTX kiểu mới, tuân thủ quy trình '1 phải 5 giảm', canh tác theo tiêu chuẩn SRP bền vững.",
    },
    economicImpact:
      "Tăng lợi nhuận cho người trồng lúa lên trên 35%, bảo vệ đất đai và bảo đảm an ninh lương thực toàn cầu.",
  },
  {
    id: "ca-phe",
    title: "Chuỗi Cà Phê Chế Biến Sâu Tây Nguyên Vươn Ra Toàn Cầu",
    region: "Tây Nguyên (Đắk Lắk, Lâm Đồng, Gia Lai)",
    scaleMetric: "Xuất khẩu đạt 5.4 tỷ USD • Tỷ lệ chế biến sâu tăng trên 30%",
    summary:
      "Chuyển dịch từ xuất khẩu cà phê nhân thô sang chế biến sâu giá trị cao, đưa Việt Nam thành cường quốc cà phê Robusta số 1 thế giới.",
    chainRoles: {
      stateRole:
        "Quy hoạch vùng chỉ dẫn địa lý Cà phê Buôn Ma Thuột; hỗ trợ xúc tiến thương mại tại các hội chợ quốc tế.",
      scientistRole:
        "Viện KHKT Nông Lâm nghiệp Tây Nguyên (WASI) chuyển giao kỹ thuật ghép chồi giống mới cao sản và quy trình lên men vi sinh.",
      businessRole:
        "Trung Nguyên Legend, Vĩnh Hiệp đầu tư nhà máy chế biến cà phê hòa tan hiện đại đạt chứng nhận hữu cơ quốc tế USDA/EU.",
      farmerRole:
        "Đồng bào các dân tộc thiểu số liên kết sản xuất cà phê cảnh quan, hái chín 100%, bảo vệ nguồn nước ngầm.",
    },
    economicImpact:
      "Giá bán cà phê đạt đỉnh lịch sử, người nông dân Tây Nguyên làm giàu chính đáng trên mảnh đất quê hương.",
  },
  {
    id: "sua-organic",
    title: "Tổ Hợp Nông Nghiệp Tuần Hoàn Công Nghệ Cao TH & Vinamilk",
    region: "Nghệ An, Tuyên Quang, Lâm Đồng",
    scaleMetric: "Quy mô hàng trăm ngàn con bò sữa • Năng suất 35 lít sữa/con/ngày",
    summary:
      "Ứng dụng chuyển đổi số toàn diện từ cánh đồng cỏ đến ly sữa sạch, hình thành mô hình kinh tế xanh tuần hoàn không phát thải.",
    chainRoles: {
      stateRole:
        "Chính quyền giao đất tập trung quy mô lớn, tạo hành lang pháp lý ưu đãi phát triển nông nghiệp công nghệ cao.",
      scientistRole:
        "Chuyên gia thú y, dinh dưỡng quốc tế và trong nước lập trình khẩu phần ăn TMR, gắn chip IoT theo dõi sức khỏe từng cá thể bò.",
      businessRole:
        "Đầu tư hàng trăm triệu USD xây dựng nhà máy chế biến sữa thông minh, hệ thống kho tự động và phân phối bán lẻ toàn quốc.",
      farmerRole:
        "Nông dân chuyển sang trồng ngô sinh khối và cỏ làm thức ăn cho bò sữa theo hợp đồng bao tiêu ổn định với doanh nghiệp.",
    },
    economicImpact:
      "Tạo sinh kế bền vững cho hàng vạn hộ nông dân vệ tinh, thay thế hoàn toàn sữa bột nhập khẩu.",
  },
];

export default function VietnamPractice() {
  const [activeCaseId, setActiveCaseId] =
    useState<CaseStudy["id"]>("lua-st25");

  const currentCase =
    CASE_STUDIES.find((c) => c.id === activeCaseId) || CASE_STUDIES[0];

  return (
    <section
      id="vietnam-practice"
      className="relative py-28 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto scroll-mt-12"
    >
      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-xs font-mono mb-4">
          <Network className="w-3.5 h-3.5 text-emerald-400" />
          <span>PHẦN 5: THỰC TIỄN VIỆT NAM THỜI ĐẠI 4.0</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">
          Chuỗi Giá Trị Khép Kín: Mô Hình "4 Nhà" 4.0
        </h2>

        <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
          Hiện thực hóa sinh động khối liên minh Công - Nông - Trí thức - Doanh
          nhân thông qua chuỗi tuần hoàn giá trị: Nhà nước kiến tạo $\rightarrow$ Nhà khoa
          học giải mã $\rightarrow$ Doanh nghiệp dẫn dắt $\rightarrow$ Nhà nông làm chủ.
        </p>
      </div>

      {/* Main Interactive Circuit Stage */}
      <div className="rounded-3xl p-6 sm:p-10 lg:p-12 bg-slate-900/60 border border-slate-800/80 backdrop-blur-2xl shadow-2xl">
        {/* Animated Closed-Loop Circuit Diagram (SVG Vector) */}
        <div className="mb-12">
          <div className="max-w-4xl mx-auto rounded-3xl bg-slate-950 border border-slate-800 p-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.08),transparent_70%)]" />

            <svg viewBox="0 0 600 320" className="w-full h-full relative z-10" fill="none">
              {/* Outer Value Chain Loop */}
              <rect
                x="60"
                y="40"
                width="480"
                height="240"
                rx="30"
                stroke="#334155"
                strokeWidth="2"
                strokeDasharray="6 6"
              />

              {/* Animated Glowing Circuit Electron Packets */}
              <circle cx="300" cy="40" r="4" fill="#F59E0B" className="animate-ping" />
              <circle cx="540" cy="160" r="4" fill="#06B6D4" className="animate-ping" />
              <circle cx="300" cy="280" r="4" fill="#F43F5E" className="animate-ping" />
              <circle cx="60" cy="160" r="4" fill="#10B981" className="animate-ping" />

              {/* Node 1: NHÀ NƯỚC (Top Left Center) */}
              <g transform="translate(140, 20)">
                <rect x="0" y="0" width="140" height="40" rx="10" fill="#78350F" stroke="#F59E0B" strokeWidth="1.5" />
                <text x="70" y="24" fill="#FEF3C7" fontSize="11" fontWeight="bold" textAnchor="middle">
                  1. NHÀ NƯỚC
                </text>
              </g>

              {/* Node 2: NHÀ KHOA HỌC (Top Right Center) */}
              <g transform="translate(320, 20)">
                <rect x="0" y="0" width="140" height="40" rx="10" fill="#164E63" stroke="#06B6D4" strokeWidth="1.5" />
                <text x="70" y="24" fill="#ECFEFF" fontSize="11" fontWeight="bold" textAnchor="middle">
                  2. NHÀ KHOA HỌC
                </text>
              </g>

              {/* Node 3: DOANH NGHIỆP (Bottom Right Center) */}
              <g transform="translate(320, 260)">
                <rect x="0" y="0" width="140" height="40" rx="10" fill="#4C0519" stroke="#F43F5E" strokeWidth="1.5" />
                <text x="70" y="24" fill="#FFF1F2" fontSize="11" fontWeight="bold" textAnchor="middle">
                  3. DOANH NGHIỆP
                </text>
              </g>

              {/* Node 4: NHÀ NÔNG (Bottom Left Center) */}
              <g transform="translate(140, 260)">
                <rect x="0" y="0" width="140" height="40" rx="10" fill="#064E3B" stroke="#10B981" strokeWidth="1.5" />
                <text x="70" y="24" fill="#ECFDF5" fontSize="11" fontWeight="bold" textAnchor="middle">
                  4. NHÀ NÔNG
                </text>
              </g>

              {/* Center Heart: THỊNH VƯỢNG XÃ HỘI CHỦ NGHĨA */}
              <g transform="translate(200, 110)">
                <rect x="0" y="0" width="200" height="100" rx="20" fill="#0F172A" stroke="#FBBF24" strokeWidth="2" />
                <text x="100" y="42" fill="#FDE68A" fontSize="11" fontWeight="bold" textAnchor="middle">
                  CHUỖI GIÁ TRỊ 4.0
                </text>
                <text x="100" y="62" fill="#94A3B8" fontSize="9" textAnchor="middle">
                  Tuần hoàn khép kín
                </text>
                <text x="100" y="80" fill="#34D399" fontSize="9" fontWeight="bold" textAnchor="middle">
                  • CÔNG - NÔNG - TRÍ - DOANH •
                </text>
              </g>

              {/* Interactive Flow Arrows */}
              <path d="M280 40 L320 40" stroke="#F59E0B" strokeWidth="2" markerEnd="url(#arrow)" />
              <path d="M460 40 L540 40 L540 280 L460 280" stroke="#06B6D4" strokeWidth="2" />
              <path d="M320 280 L280 280" stroke="#F43F5E" strokeWidth="2" />
              <path d="M140 280 L60 280 L60 40 L140 40" stroke="#10B981" strokeWidth="2" />
            </svg>
          </div>
        </div>

        {/* Case Study Selector Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {CASE_STUDIES.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCaseId(c.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                activeCaseId === c.id
                  ? "bg-amber-400 text-slate-950 font-black shadow-lg"
                  : "bg-slate-950 border border-slate-800 text-slate-400 hover:text-white"
              }`}
            >
              {c.title}
            </button>
          ))}
        </div>

        {/* Active Case Study Details Matrix */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCase.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
          >
            {/* Header Banner */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold block mb-1">
                  ĐỊA BÀN THỰC TIỄN: {currentCase.region}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  {currentCase.title}
                </h3>
              </div>

              <div className="px-4 py-2 rounded-xl bg-emerald-950/50 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-bold">
                {currentCase.scaleMetric}
              </div>
            </div>

            {/* 4 Roles Grid In This Specific Case */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 rounded-2xl bg-slate-950/80 border border-amber-500/20">
                <span className="text-[11px] font-mono font-bold text-amber-400 block mb-2">
                  1. NHÀ NƯỚC (THỂ CHẾ):
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {currentCase.chainRoles.stateRole}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-950/80 border border-cyan-500/20">
                <span className="text-[11px] font-mono font-bold text-cyan-400 block mb-2">
                  2. NHÀ KHOA HỌC (R&D):
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {currentCase.chainRoles.scientistRole}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-950/80 border border-rose-500/20">
                <span className="text-[11px] font-mono font-bold text-rose-400 block mb-2">
                  3. DOANH NGHIỆP (TIÊU THỤ):
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {currentCase.chainRoles.businessRole}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-950/80 border border-emerald-500/20">
                <span className="text-[11px] font-mono font-bold text-emerald-400 block mb-2">
                  4. NHÀ NÔNG (SẢN XUẤT):
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {currentCase.chainRoles.farmerRole}
                </p>
              </div>
            </div>

            {/* Impact Metric Bar */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-950/40 via-slate-900 to-amber-950/40 border border-slate-800 flex items-center justify-between text-xs">
              <span className="font-bold text-slate-200">
                KẾT QUẢ THỰC TIỄN ĐẠT ĐƯỢC:
              </span>
              <span className="text-emerald-300 font-semibold">
                {currentCase.economicImpact}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
