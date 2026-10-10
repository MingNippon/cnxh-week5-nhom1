"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Landmark,
  Microscope,
  Building2,
  Tractor,
  CheckCircle2,
  ArrowRight,
  Sliders,
  Activity,
  Layers,
  ShieldCheck,
  Zap,
  Truck,
  Package,
} from "lucide-react";
import BorderBeam from "@/components/motion/BorderBeam";
import SpotlightCard from "@/components/motion/SpotlightCard";

export default function AllianceOSDashboard() {
  const [activeTab, setActiveTab] = useState<"overview" | "chain" | "principles">(
    "chain"
  );
  const [chainFlowMode, setChainFlowMode] = useState<"value" | "product">("value");

  // State for the 3 Principle toggles
  const [principle1, setPrinciple1] = useState(true);
  const [principle2, setPrinciple2] = useState(true);
  const [principle3, setPrinciple3] = useState(true);

  const allPrinciplesActive = principle1 && principle2 && principle3;

  return (
    <section
      id="alliance-os"
      className="relative bg-transparent text-white py-32 px-6 sm:px-12 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-3">
            GIAO DIỆN QUẢN TRỊ SỐ
          </span>
          <h2 className="text-4xl sm:text-6xl font-semibold tracking-tight text-white leading-tight">
            Điều phối thực tiễn. Chuỗi liên kết 4 Nhà.
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg mt-5 font-normal leading-relaxed tracking-tight">
            Mô phỏng cơ chế vận hành của khối liên minh trong thời đại số: Nhà
            nước kiến tạo thể chế, Nhà khoa học chuyển giao giải pháp, Doanh
            nghiệp tổ chức thị trường và Nhà nông làm chủ sản xuất.
          </p>
        </div>

        {/* macOS / Dial Window Chrome */}
        <div className="relative rounded-2xl border border-neutral-800 bg-neutral-950/90 shadow-[0_20px_70px_rgba(0,0,0,0.8)] backdrop-blur-2xl overflow-hidden">
          {/* Luminous Border Beam Traveling Around the Window */}
          <BorderBeam size={320} duration={12} colorFrom="#F59E0B" colorTo="#38BDF8" />

          {/* Window Title Bar */}
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-neutral-800/80 bg-neutral-900/40">
            {/* Window Traffic Dots */}
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-neutral-700/80" />
              <span className="w-3 h-3 rounded-full bg-neutral-700/80" />
              <span className="w-3 h-3 rounded-full bg-neutral-700/80" />
            </div>

            {/* Window Title */}
            <div className="text-xs font-mono text-neutral-400 flex items-center space-x-2">
              <Activity className="w-3.5 h-3.5 text-neutral-500" />
              <span>Alliance OS — v2.4 (Hệ thống điều phối liên minh)</span>
            </div>

            {/* Segmented Tab Switcher with Morphing Tabs layoutId */}
            <div className="flex rounded-lg bg-neutral-900 p-1 border border-neutral-800 text-xs font-medium">
              {[
                { id: "overview", label: "Tổng quan" },
                { id: "chain", label: "Chuỗi giá trị 4 Nhà" },
                { id: "principles", label: "3 Nguyên tắc" },
              ].map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`relative px-3 py-1 rounded-md transition-colors z-10 ${
                      isActive
                        ? "text-black font-semibold"
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="os-active-tab-indicator"
                        className="absolute inset-0 bg-white rounded-md shadow-sm -z-10"
                        transition={{ type: "spring", stiffness: 450, damping: 32 }}
                      />
                    )}
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Main Dashboard Canvas Body */}
          <div className="p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Main Viewport (8 Columns) */}
              <div className="lg:col-span-8 flex flex-col justify-between">
                <AnimatePresence mode="wait">
                  {/* TAB 1: TỔNG QUAN */}
                  {activeTab === "overview" && (
                    <motion.div
                      key="overview"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <div>
                        <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest block mb-1">
                          TRẠNG THÁI HỆ THỐNG
                        </span>
                        <h3 className="text-2xl font-semibold text-white tracking-tight">
                          Đồng bộ toàn diện giữa các thành tố liên minh
                        </h3>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800">
                          <span className="text-[11px] text-neutral-400 font-mono block">
                            ĐỒNG THUẬN XÃ HỘI
                          </span>
                          <span className="text-2xl font-bold text-white tracking-tight mt-1 block">
                            98.4%
                          </span>
                          <span className="text-[11px] text-emerald-400 mt-1 block">
                            Độ ổn định cao
                          </span>
                        </div>

                        <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800">
                          <span className="text-[11px] text-neutral-400 font-mono block">
                            TĂNG TRƯỞNG CHUỖI
                          </span>
                          <span className="text-2xl font-bold text-white tracking-tight mt-1 block">
                            +14.2%
                          </span>
                          <span className="text-[11px] text-emerald-400 mt-1 block">
                            Hàng năm
                          </span>
                        </div>

                        <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 col-span-2 sm:col-span-1">
                          <span className="text-[11px] text-neutral-400 font-mono block">
                            TIÊU CHUẨN XUẤT KHẨU
                          </span>
                          <span className="text-2xl font-bold text-white tracking-tight mt-1 block">
                            96.0%
                          </span>
                          <span className="text-[11px] text-neutral-400 mt-1 block">
                            GlobalGAP / HACCP
                          </span>
                        </div>
                      </div>

                      <p className="text-xs text-neutral-400 leading-relaxed">
                        Hệ thống điều phối ghi nhận sự chuyển dịch tích cực từ
                        sản xuất tự phát sang chuỗi giá trị tuần hoàn khép kín,
                        thỏa mãn hài hòa ba tầng lợi ích: cá nhân, tập thể và xã
                        hội.
                      </p>
                    </motion.div>
                  )}

                  {/* TAB 2: CHUỖI GIÁ TRỊ 4 NHÀ */}
                  {activeTab === "chain" && (
                    <motion.div
                      key="chain"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      {/* Sub-toggle: Flow Mode */}
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                          MÔ PHỎNG DÒNG CHẢY LIÊN KẾT:
                        </span>
                        <div className="flex items-center space-x-1.5 rounded-full bg-neutral-900 p-1 border border-neutral-800 text-[11px]">
                          <button
                            onClick={() => setChainFlowMode("value")}
                            className={`px-3 py-1 rounded-full transition-all ${
                              chainFlowMode === "value"
                                ? "bg-white text-black font-semibold"
                                : "text-neutral-400 hover:text-white"
                            }`}
                          >
                            Dòng tiền & Giá trị
                          </button>
                          <button
                            onClick={() => setChainFlowMode("product")}
                            className={`px-3 py-1 rounded-full transition-all ${
                              chainFlowMode === "product"
                                ? "bg-white text-black font-semibold"
                                : "text-neutral-400 hover:text-white"
                            }`}
                          >
                            Dòng sản phẩm & Công nghệ
                          </button>
                        </div>
                      </div>

                      {/* Featured 4.0 Modern Logistics & Processing Photo Banner */}
                      <div className="relative w-full h-44 rounded-2xl overflow-hidden border border-neutral-800 group">
                        <img
                          src="/images/logistics_4nha.jpg"
                          alt="Mô hình 4 Nhà thời đại 4.0: Chuỗi logistics và chế biến hiện đại"
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                        <div className="absolute top-3 left-3 flex items-center space-x-1.5 rounded-full bg-black/80 border border-neutral-700/80 text-white text-[11px] px-3 py-1 backdrop-blur-md">
                          <Truck className="w-3 h-3 text-neutral-400" />
                          <span>Hạ tầng chuỗi cung ứng & Logistics 4.0</span>
                        </div>
                        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                          <span className="text-white font-medium">
                            Liên kết chế biến sâu & xuất khẩu nông sản sạch
                          </span>
                          <span className="text-neutral-400 font-mono text-[11px] hidden sm:inline">
                            Kim ngạch &gt; 53 tỷ USD/năm
                          </span>
                        </div>
                      </div>

                      {/* 4 Interactive Flow Nodes */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        {/* Node 1: Nhà nước */}
                        <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 transition-colors">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-semibold text-white flex items-center space-x-1.5">
                              <Landmark className="w-3.5 h-3.5 text-neutral-400" />
                              <span>1. Nhà Nước</span>
                            </span>
                            <span className="text-[10px] font-mono text-neutral-400 uppercase">
                              Thể chế
                            </span>
                          </div>
                          <p className="text-xs text-neutral-400 leading-relaxed">
                            {chainFlowMode === "value"
                              ? "Cung cấp nguồn vốn ưu đãi, chính sách bảo hiểm nông nghiệp và quy hoạch vùng."
                              : "Đầu tư hạ tầng thủy lợi, đê điều và giao thông kết nối liên vùng."}
                          </p>
                        </div>

                        {/* Node 2: Nhà khoa học */}
                        <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 transition-colors">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-semibold text-white flex items-center space-x-1.5">
                              <Microscope className="w-3.5 h-3.5 text-neutral-400" />
                              <span>2. Nhà Khoa Học</span>
                            </span>
                            <span className="text-[10px] font-mono text-neutral-400 uppercase">
                              Công nghệ
                            </span>
                          </div>
                          <p className="text-xs text-neutral-400 leading-relaxed">
                            {chainFlowMode === "value"
                              ? "Thương mại hóa bằng độc quyền sáng chế, gia tăng giá trị thặng dư chất xám."
                              : "Chuyển giao giống cây trồng thuần chủng (như ST25), cảm biến IoT và quy trình VietGAP."}
                          </p>
                        </div>

                        {/* Node 3: Doanh nghiệp */}
                        <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 transition-colors">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-semibold text-white flex items-center space-x-1.5">
                              <Building2 className="w-3.5 h-3.5 text-neutral-400" />
                              <span>3. Doanh Nghiệp</span>
                            </span>
                            <span className="text-[10px] font-mono text-neutral-400 uppercase">
                              Thị trường
                            </span>
                          </div>
                          <p className="text-xs text-neutral-400 leading-relaxed">
                            {chainFlowMode === "value"
                              ? "Tạm ứng vốn cho nông dân, bao tiêu toàn bộ sản lượng theo hợp đồng minh bạch."
                              : "Xây dựng kho lạnh bảo quản, nhà máy chế biến sâu và mở rộng kênh xuất khẩu toàn cầu."}
                          </p>
                        </div>

                        {/* Node 4: Nhà nông */}
                        <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 transition-colors">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-semibold text-white flex items-center space-x-1.5">
                              <Tractor className="w-3.5 h-3.5 text-neutral-400" />
                              <span>4. Nhà Nông</span>
                            </span>
                            <span className="text-[10px] font-mono text-neutral-400 uppercase">
                              Sản xuất
                            </span>
                          </div>
                          <p className="text-xs text-neutral-400 leading-relaxed">
                            {chainFlowMode === "value"
                              ? "Nâng cao thu nhập bền vững, xóa bỏ tư duy tiểu nông manh mún tự cấp tự túc."
                              : "Canh tác trên cánh đồng mẫu lớn, dồn điền đổi thửa, chuẩn hóa nguồn nguyên liệu sạch."}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* TAB 3: 3 NGUYÊN TẮC */}
                  {activeTab === "principles" && (
                    <motion.div
                      key="principles"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-5"
                    >
                      <div>
                        <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest block mb-1">
                          KIỂM TRA TÍNH TOÀN VẸN HỆ THỐNG
                        </span>
                        <h3 className="text-xl font-semibold text-white tracking-tight">
                          3 Nguyên tắc bất biến bảo đảm khối liên minh
                        </h3>
                      </div>

                      <div className="space-y-3">
                        {/* Principle 1 */}
                        <div className="p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800 flex items-center justify-between">
                          <div>
                            <span className="text-xs font-semibold text-white block">
                              1. Vai trò lãnh đạo của Giai cấp Công nhân
                            </span>
                            <span className="text-[11px] text-neutral-400">
                              Bảo đảm định hướng XHCN thông qua Đảng Cộng sản.
                            </span>
                          </div>
                          <button
                            onClick={() => setPrinciple1(!principle1)}
                            className={`w-11 h-6 rounded-full transition-colors p-0.5 flex items-center ${
                              principle1 ? "bg-white justify-end" : "bg-neutral-800 justify-start"
                            }`}
                          >
                            <span
                              className={`w-5 h-5 rounded-full ${
                                principle1 ? "bg-black" : "bg-neutral-500"
                              }`}
                            />
                          </button>
                        </div>

                        {/* Principle 2 */}
                        <div className="p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800 flex items-center justify-between">
                          <div>
                            <span className="text-xs font-semibold text-white block">
                              2. Hài hòa các lợi ích (Trọng tâm kinh tế)
                            </span>
                            <span className="text-[11px] text-neutral-400">
                              Lợi ích kinh tế là chất xi măng gắn kết bền chặt.
                            </span>
                          </div>
                          <button
                            onClick={() => setPrinciple2(!principle2)}
                            className={`w-11 h-6 rounded-full transition-colors p-0.5 flex items-center ${
                              principle2 ? "bg-white justify-end" : "bg-neutral-800 justify-start"
                            }`}
                          >
                            <span
                              className={`w-5 h-5 rounded-full ${
                                principle2 ? "bg-black" : "bg-neutral-500"
                              }`}
                            />
                          </button>
                        </div>

                        {/* Principle 3 */}
                        <div className="p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800 flex items-center justify-between">
                          <div>
                            <span className="text-xs font-semibold text-white block">
                              3. Xuất phát từ sự tự nguyện của các giai cấp
                            </span>
                            <span className="text-[11px] text-neutral-400">
                              Không mệnh lệnh hành chính gượng ép.
                            </span>
                          </div>
                          <button
                            onClick={() => setPrinciple3(!principle3)}
                            className={`w-11 h-6 rounded-full transition-colors p-0.5 flex items-center ${
                              principle3 ? "bg-white justify-end" : "bg-neutral-800 justify-start"
                            }`}
                          >
                            <span
                              className={`w-5 h-5 rounded-full ${
                                principle3 ? "bg-black" : "bg-neutral-500"
                              }`}
                            />
                          </button>
                        </div>
                      </div>

                      {/* Integrity Status Card */}
                      <div
                        className={`p-3.5 rounded-xl border text-xs flex items-center space-x-2 transition-all ${
                          allPrinciplesActive
                            ? "bg-emerald-950/30 border-emerald-500/40 text-emerald-300"
                            : "bg-red-950/30 border-red-500/40 text-red-300"
                        }`}
                      >
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                        <span>
                          {allPrinciplesActive
                            ? "Trạng thái tối ưu: Toàn bộ 3 nguyên tắc đều được kích hoạt, liên minh vững chắc."
                            : "Cảnh báo: Vi phạm nguyên tắc sẽ khiến khối liên minh mất phương hướng hoặc tan rã."}
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Right Side Telemetry Panel (4 Columns) */}
              <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-neutral-800/80 pt-6 lg:pt-0 lg:pl-8 space-y-8">
                {/* Metric Strip 1: Báo cáo an sinh xã hội */}
                <div>
                  <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest block mb-4">
                    BÁO CÁO AN SINH XÃ HỘI
                  </span>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-neutral-300">Bảo hiểm y tế toàn dân</span>
                        <span className="text-neutral-400 font-mono">93.5%</span>
                      </div>
                      <div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                        <div className="h-full bg-white rounded-full w-[93.5%]" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-neutral-300">Đào tạo nghề nông thôn</span>
                        <span className="text-neutral-400 font-mono">89.2%</span>
                      </div>
                      <div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                        <div className="h-full bg-white rounded-full w-[89.2%]" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-neutral-300">Giảm nghèo đa chiều</span>
                        <span className="text-neutral-400 font-mono">96.0%</span>
                      </div>
                      <div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                        <div className="h-full bg-white rounded-full w-[96.0%]" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Metric Strip 2: Tốc độ cơ cấu lao động */}
                <div>
                  <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest block mb-4">
                    CHUYỂN DỊCH CƠ CẤU
                  </span>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-neutral-300">Công nghiệp & Dịch vụ</span>
                        <span className="text-neutral-400 font-mono">+14.8%</span>
                      </div>
                      <div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                        <div className="h-full bg-white rounded-full w-[78%]" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-neutral-300">Lao động số hóa 4.0</span>
                        <span className="text-neutral-400 font-mono">+22.4%</span>
                      </div>
                      <div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                        <div className="h-full bg-white rounded-full w-[65%]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
