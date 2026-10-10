"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Shield,
  Workflow,
  Sparkles,
  ArrowRightLeft,
  CheckCircle2,
  Cpu,
  Layers,
} from "lucide-react";

export default function NecessitySection() {
  const [activeEngine, setActiveEngine] = useState<"kinh-te" | "chinh-tri">(
    "kinh-te"
  );

  return (
    <section
      id="necessity"
      className="relative py-28 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto scroll-mt-12"
    >
      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-xs font-mono mb-4">
          <Workflow className="w-3.5 h-3.5 text-red-400" />
          <span>PHẦN 2: TÍNH TẤT YẾU KHÁCH QUAN</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">
          Cơ Chế Biện Chứng: Lực Đẩy Kép Của Khối Liên Minh
        </h2>

        <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
          Liên minh giai cấp không phải ý muốn chủ quan hay sách lược tình thế,
          mà là đòi hỏi khách quan bắt buộc từ hai cỗ máy vận động lịch sử: Nền
          sản xuất lớn hiện đại và Sự sống còn của chính quyền nhân dân.
        </p>
      </div>

      {/* Interactive Dialectic Apparatus (Split Kinetic Engine) */}
      <div className="rounded-3xl p-6 sm:p-10 lg:p-12 bg-slate-900/60 border border-slate-800/80 backdrop-blur-2xl shadow-2xl">
        {/* Top Engine Toggle Selector */}
        <div className="flex flex-col sm:flex-row items-center justify-between pb-8 border-b border-slate-800 gap-4">
          <div className="flex items-center space-x-3">
            <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
              CHỌN CƠ CHẾ KHẢO SÁT:
            </span>
            <div className="flex rounded-xl bg-slate-950 p-1 border border-slate-800">
              <button
                onClick={() => setActiveEngine("kinh-te")}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  activeEngine === "kinh-te"
                    ? "bg-amber-400 text-slate-950 shadow-md font-black"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Góc Độ Kinh Tế (Cơ Sở)
              </button>
              <button
                onClick={() => setActiveEngine("chinh-tri")}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  activeEngine === "chinh-tri"
                    ? "bg-red-500 text-white shadow-md font-black"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Góc Độ Chính Trị (Bảo Đảm)
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-2 text-xs font-mono text-amber-400/90">
            <ArrowRightLeft className="w-4 h-4" />
            <span>Mối quan hệ biện chứng cơ sở hạ tầng & kiến trúc thượng tầng</span>
          </div>
        </div>

        {/* Engine Body Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center my-10">
          {/* Left Visual Diagram (Animated SVG Dialectic Core) */}
          <div className="lg:col-span-5">
            <div className="relative w-full h-80 sm:h-96 rounded-3xl bg-slate-950 border border-slate-800 flex items-center justify-center p-6 overflow-hidden">
              {/* Subtle background glow */}
              <div
                className={`absolute inset-0 transition-opacity duration-700 ${
                  activeEngine === "kinh-te"
                    ? "bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.15),transparent_70%)]"
                    : "bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.15),transparent_70%)]"
                }`}
              />

              {activeEngine === "kinh-te" ? (
                /* Economic Production Flow SVG */
                <svg
                  viewBox="0 0 320 280"
                  className="w-full h-full text-amber-400 relative z-10"
                  fill="none"
                >
                  {/* Concentric Supply Chain Loops */}
                  <circle
                    cx="160"
                    cy="140"
                    r="85"
                    stroke="#F59E0B"
                    strokeWidth="1.5"
                    strokeDasharray="6 6"
                    className="animate-spin-slow opacity-50"
                  />
                  <circle
                    cx="160"
                    cy="140"
                    r="55"
                    stroke="#FBBF24"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    className="animate-reverse-spin opacity-70"
                  />

                  {/* Core Value Hub */}
                  <circle cx="160" cy="140" r="28" fill="#78350F" stroke="#F59E0B" strokeWidth="2" />
                  <text
                    x="160"
                    y="144"
                    fill="#FEF3C7"
                    fontSize="10"
                    fontWeight="bold"
                    textAnchor="middle"
                  >
                    GIÁ TRỊ
                  </text>

                  {/* 3 Radiating Pillars */}
                  {/* Công nghiệp */}
                  <circle cx="160" cy="50" r="18" fill="#1E293B" stroke="#F59E0B" strokeWidth="2" />
                  <text x="160" y="53" fill="#FDE68A" fontSize="8" fontWeight="bold" textAnchor="middle">
                    CÔNG NGHIỆP
                  </text>

                  {/* Nông nghiệp */}
                  <circle cx="80" cy="190" r="18" fill="#1E293B" stroke="#10B981" strokeWidth="2" />
                  <text x="80" y="193" fill="#A7F3D0" fontSize="8" fontWeight="bold" textAnchor="middle">
                    NÔNG NGHIỆP
                  </text>

                  {/* Dịch vụ & KH&CN */}
                  <circle cx="240" cy="190" r="18" fill="#1E293B" stroke="#06B6D4" strokeWidth="2" />
                  <text x="240" y="193" fill="#BAE6FD" fontSize="8" fontWeight="bold" textAnchor="middle">
                    KH&CN
                  </text>

                  {/* Pulsing Energy Rays */}
                  <line x1="160" y1="68" x2="160" y2="112" stroke="#F59E0B" strokeWidth="2" strokeDasharray="3 3" />
                  <line x1="95" y1="180" x2="135" y2="155" stroke="#10B981" strokeWidth="2" strokeDasharray="3 3" />
                  <line x1="225" y1="180" x2="185" y2="155" stroke="#06B6D4" strokeWidth="2" strokeDasharray="3 3" />

                  <text x="20" y="260" fill="#94A3B8" fontSize="9" fontFamily="monospace">
                    • CHUỖI SẢN XUẤT LỚN THỐNG NHẤT
                  </text>
                </svg>
              ) : (
                /* Political Fortress Sovereignty SVG */
                <svg
                  viewBox="0 0 320 280"
                  className="w-full h-full text-red-400 relative z-10"
                  fill="none"
                >
                  {/* Layered Sovereign Shield Polyline */}
                  <polygon
                    points="160,35 240,65 240,165 160,235 80,165 80,65"
                    stroke="#EF4444"
                    strokeWidth="2"
                    fill="#450A0A"
                    fillOpacity="0.4"
                  />
                  <polygon
                    points="160,55 220,80 220,155 160,210 100,155 100,80"
                    stroke="#F87171"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    fill="none"
                  />

                  {/* Core Socialist Bastion Emblem */}
                  <circle cx="160" cy="130" r="24" fill="#991B1B" stroke="#FCA5A5" strokeWidth="2" />
                  <text
                    x="160"
                    y="134"
                    fill="#FEF2F2"
                    fontSize="9"
                    fontWeight="bold"
                    textAnchor="middle"
                  >
                    NHÀ NƯỚC
                  </text>

                  {/* Radiating Defense Wave Ring */}
                  <circle
                    cx="160"
                    cy="130"
                    r="55"
                    stroke="#DC2626"
                    strokeWidth="1"
                    strokeDasharray="3 6"
                    className="animate-ping"
                    style={{ animationDuration: "3.5s" }}
                  />

                  <text x="20" y="260" fill="#94A3B8" fontSize="9" fontFamily="monospace">
                    • CƠ SỞ CHÍNH TRỊ - XÃ HỘI VỮNG CHẮC
                  </text>
                </svg>
              )}
            </div>
          </div>

          {/* Right Content Engine Details */}
          <div className="lg:col-span-7 space-y-6">
            {activeEngine === "kinh-te" ? (
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold block mb-2">
                  YÊU CẦU CỦA NỀN SẢN XUẤT LỚN HIỆN ĐẠI
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-4">
                  Góc Độ Kinh Tế: Kết Nối Hữu Cơ Chuỗi Giá Trị
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                  Trong thời kỳ quá độ, công nghiệp hóa và hiện đại hóa đòi hỏi
                  phá bỏ tính chất phân tán, tự cung tự cấp của nền sản xuất nhỏ.
                  Không ngành kinh tế nào có thể phát triển cô lập nếu không gắn
                  kết hữu cơ với các ngành khác.
                </p>

                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white mb-0.5">
                        Công nghiệp chế tạo là đầu kéo kỹ thuật
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Cung cấp máy móc, phân bón, thiết bị tự động hóa cho nông
                        nghiệp và hạ tầng cho dịch vụ logistics.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white mb-0.5">
                        Nông nghiệp là trụ đỡ nguyên liệu và thị trường
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Cung ứng lương thực cho đô thị công nghiệp, nguyên liệu thô
                        cho nhà máy chế biến và tiêu thụ sản phẩm công nghiệp.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white mb-0.5">
                        Trí thức & Doanh nhân mở rộng biên giới giá trị
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Đưa giải pháp R&D vào sản xuất và thương mại hóa nông sản
                        ra thị trường thế giới với giá trị cao nhất.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-red-400 font-bold block mb-2">
                  TRỤ CỘT BẢO VỆ CHÍNH QUYỀN NHÂN DÂN
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-4">
                  Góc Độ Chính Trị - Xã Hội: Thành Trì Đại Đoàn Kết
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                  Cuộc đấu tranh giai cấp trong thời kỳ quá độ diễn ra gay gắt
                  dưới nhiều hình thái mới. Khối liên minh là thành trì chính trị
                  bảo vệ thành quả cách mạng và chủ quyền đất nước trước mọi nguy cơ
                  phá hoại.
                </p>

                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white mb-0.5">
                        Nền tảng của Nhà nước pháp quyền XHCN
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Khối liên minh do Đảng lãnh đạo là cội nguồn sức mạnh và tính
                        chính danh của chính quyền nhân dân.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white mb-0.5">
                        Tạo sự đồng thuận xã hội cao nhất
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Tập hợp tuyệt đại đa số nhân dân lao động thành sức mạnh
                        vô địch để bảo vệ Tổ quốc và thực hiện công cuộc Đổi mới.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white mb-0.5">
                        Vô hiệu hóa âm mưu "Diễn biến hòa bình"
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Đập tan thủ đoạn chia rẽ nội bộ, kích động thù hằn giai cấp
                        và xâm phạm khối đại đoàn kết toàn dân tộc.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
