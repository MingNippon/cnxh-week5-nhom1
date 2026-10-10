"use client";

import { motion } from "framer-motion";
import {
  Printer,
  Users,
  Award,
  ArrowUp,
  Compass,
  Sparkles,
} from "lucide-react";

interface TeamMember {
  name: string;
  role: "Trưởng nhóm" | "Thành viên";
  task: string;
}

const MEMBERS: TeamMember[] = [
  {
    name: "Đào Đức Minh",
    role: "Trưởng nhóm",
    task: "Tổng đạo diễn nội dung, Điều phối nghiên cứu & Kiến trúc sư số hóa",
  },
  {
    name: "Trần Hải Đăng",
    role: "Thành viên",
    task: "Nghiên cứu cơ cấu Giai cấp Công nhân & Nông dân",
  },
  {
    name: "Nguyễn Văn Nam",
    role: "Thành viên",
    task: "Tổng hợp tính tất yếu kinh tế & chính trị - xã hội",
  },
  {
    name: "Bùi Minh Lâm",
    role: "Thành viên",
    task: "Phân tích nội dung liên minh Kinh tế thời kỳ quá độ",
  },
  {
    name: "Nguyễn Viết Ngọc Duy",
    role: "Thành viên",
    task: "Phân tích nội dung liên minh Chính trị & Văn hóa",
  },
  {
    name: "Trần Viết Cường",
    role: "Thành viên",
    task: "Nghiên cứu 3 nguyên tắc cơ bản của khối liên minh",
  },
  {
    name: "Lưu Thế An",
    role: "Thành viên",
    task: "Phân tích mô hình chuỗi giá trị 4 Nhà thời đại 4.0",
  },
  {
    name: "Đặng Quốc Khánh",
    role: "Thành viên",
    task: "Khảo sát thực tiễn chuỗi nông nghiệp công nghệ cao",
  },
  {
    name: "Nguyễn Đức Anh",
    role: "Thành viên",
    task: "Đóng góp tư liệu giáo trình & Biên tập đồ họa tri thức",
  },
];

export default function FooterGroup() {
  const handlePrint = () => {
    window.print();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-slate-800 bg-slate-950 pt-20 pb-16 px-4 sm:px-6 lg:px-12 mt-28">
      <div className="max-w-7xl mx-auto">
        {/* Curatorial Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-800">
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-amber-400 text-slate-950 flex items-center justify-center font-black">
                <Compass className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] font-mono tracking-widest uppercase font-bold text-amber-400 block">
                  NHIỆM VỤ 5 • NHÓM 1
                </span>
                <h3 className="text-xl font-black text-white">
                  Chủ Nghĩa Xã Hội Khoa Học
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
              Bản đồ tri thức số hóa đồ họa đa chiều: "Cơ cấu xã hội - giai cấp
              và liên minh giai cấp, tầng lớp trong thời kỳ quá độ lên chủ nghĩa
              xã hội ở Việt Nam".
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-[10px] font-mono text-slate-400">
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800">
                Bộ Giáo Dục & Đào Tạo (2021)
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800">
                Văn kiện Đại hội XIII của Đảng
              </span>
            </div>
          </div>

          {/* Group 1 Colophon Roster */}
          <div className="lg:col-span-7">
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold flex items-center">
                <Users className="w-3.5 h-3.5 mr-2 text-amber-400" />
                ĐỘI NGŨ THỰC HIỆN • NHÓM 1 (9 THÀNH VIÊN)
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {MEMBERS.map((m, idx) => {
                const isLeader = m.role === "Trưởng nhóm";

                return (
                  <div
                    key={idx}
                    className={`p-3 rounded-xl border text-xs transition-all ${
                      isLeader
                        ? "bg-amber-950/30 border-amber-500/50"
                        : "bg-slate-900/60 border-slate-800/80"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-white tracking-tight">
                        {m.name}
                      </span>
                      {isLeader && (
                        <span className="text-[9px] px-1.5 py-0.5 rounded font-mono font-bold bg-amber-400 text-slate-950">
                          Trưởng nhóm
                        </span>
                      )}
                    </div>
                    <p className="text-[10.5px] text-slate-400 leading-snug">
                      {m.task}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer Sub-Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-4">
          <p>© 2026 NHÓM 1 • HỌC PHẦN CHỦ NGHĨA XÃ HỘI KHOA HỌC.</p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center space-x-2 text-slate-400 hover:text-amber-400 transition-colors no-print"
          >
            <span>LÊN ĐẦU TRANG</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Floating Action Button (Print / PDF Export) */}
      <div className="fixed bottom-6 right-6 z-50 no-print">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handlePrint}
          className="flex items-center space-x-2.5 px-5 py-3 rounded-full bg-slate-900 border border-amber-500/50 text-amber-300 font-bold text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(245,158,11,0.3)] hover:shadow-[0_0_35px_rgba(245,158,11,0.5)] transition-all duration-300"
        >
          <Printer className="w-4 h-4" />
          <span>Xuất Bản Đồ Infographic (Print/PDF)</span>
        </motion.button>
      </div>
    </footer>
  );
}
