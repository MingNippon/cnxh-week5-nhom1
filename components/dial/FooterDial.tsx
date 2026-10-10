"use client";

import { Download, ArrowUp, CheckCircle2, Calendar } from "lucide-react";

const MEMBERS = [
  { name: "Đào Đức Minh", isLeader: true, role: "Trưởng nhóm • Thiết kế hệ thống & Điều phối" },
  { name: "Trần Hải Đăng", isLeader: false, role: "Nghiên cứu Giai cấp Công nhân & Nông dân" },
  { name: "Nguyễn Văn Nam", isLeader: false, role: "Phân tích Tính tất yếu Kinh tế & Chính trị" },
  { name: "Bùi Minh Lâm", isLeader: false, role: "Nghiên cứu Nội dung liên minh Kinh tế" },
  { name: "Nguyễn Viết Ngọc Duy", isLeader: false, role: "Nghiên cứu Chính trị & Văn hóa - Xã hội" },
  { name: "Trần Viết Cường", isLeader: false, role: "Phân tích 3 Nguyên tắc bất biến" },
  { name: "Lưu Thế An", isLeader: false, role: "Xây dựng Chuỗi giá trị 4 Nhà nông nghiệp" },
  { name: "Đặng Quốc Khánh", isLeader: false, role: "Khảo sát Nông nghiệp công nghệ cao & Logistics" },
  { name: "Nguyễn Đức Anh", isLeader: false, role: "Biên tập tư liệu giáo trình & Trình bày" },
];

export default function FooterDial() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-transparent text-white pt-24 pb-16 px-6 sm:px-12 border-t border-neutral-900/40">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Monogram Badge */}
        <div className="w-10 h-10 rounded-full bg-white text-black font-mono font-bold text-sm flex items-center justify-center mb-6 shadow-xl">
          1
        </div>

        {/* Deadline Badge */}
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300 mb-4">
          <Calendar className="w-3.5 h-3.5 text-rose-400" />
          <span>HẠN NỘP SẢN PHẨM: TRƯỚC 17H00 NGÀY 12/10/2026</span>
        </div>

        {/* Headline */}
        <h3 className="text-2xl sm:text-4xl font-semibold tracking-tight text-white mb-3">
          Sản phẩm thực hiện bởi Nhóm 1.
        </h3>

        <p className="text-xs sm:text-sm text-neutral-400 max-w-lg mb-10 tracking-tight leading-relaxed">
          Học phần Chủ nghĩa xã hội khoa học — Nhiệm vụ 5: Cơ cấu xã hội - giai
          cấp và liên minh giai cấp, tầng lớp trong thời kỳ quá độ lên CNXH ở
          Việt Nam.
        </p>

        {/* Member Roster with detailed roles */}
        <div className="w-full border-y border-neutral-900 py-8 mb-10">
          <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 block mb-6">
            DANH SÁCH THÀNH VIÊN VÀ PHÂN CÔNG NHIỆM VỤ
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-left max-w-3xl mx-auto">
            {MEMBERS.map((m) => (
              <div
                key={m.name}
                className={`p-3 rounded-xl border text-xs flex flex-col justify-between transition-colors ${
                  m.isLeader
                    ? "bg-neutral-900/90 border-white/40 text-white"
                    : "bg-neutral-950 border-neutral-800/80 text-neutral-300 hover:border-neutral-700"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-white">{m.name}</span>
                  {m.isLeader && (
                    <span className="text-[9px] uppercase font-mono px-1.5 py-0.5 rounded bg-white text-black font-bold">
                      Trưởng nhóm
                    </span>
                  )}
                </div>
                <span className="text-[11px] text-neutral-400 leading-snug">{m.role}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Direct PDF Download Button (NOT Chrome print dialog) */}
        <a
          href="/NHIEM_VU_5_NHOM_1_LIEN_MINH_GIAI_CAP.pdf"
          download="NHIEM_VU_5_NHOM_1_LIEN_MINH_GIAI_CAP.pdf"
          className="inline-flex items-center space-x-2.5 rounded-full bg-white text-black font-semibold text-xs sm:text-sm px-7 py-3.5 hover:bg-neutral-200 active:scale-95 transition-all shadow-2xl mb-12"
        >
          <Download className="w-4 h-4 text-black" />
          <span>Tải File Báo Cáo PDF Chính Thức (Nộp Bài)</span>
        </a>

        {/* Bottom Bar */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 font-mono pt-6 border-t border-neutral-950 gap-4">
          <span>© 2026 NHÓM 1 • GIÁO TRÌNH BỘ GIÁO DỤC (2021) • ĐẠI HỌC QUỐC GIA</span>
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 hover:text-white transition-colors"
          >
            <span>LÊN ĐẦU TRANG</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
