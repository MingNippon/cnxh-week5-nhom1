"use client";

import { useState } from "react";
import {
  Download,
  ArrowUp,
  CheckCircle2,
  Calendar,
  FileImage,
  BookCheck,
  FileText,
  Smartphone,
  Video,
  QrCode,
  Mic,
  ChevronDown,
  ChevronUp,
  Sparkles,
  ExternalLink,
} from "lucide-react";

interface RoleItem {
  id: string;
  roleNumber: string;
  title: string;
  assignee: string;
  badge: string;
  isLeader?: boolean;
  color: string;
  summary: string;
  details: string[];
  deliverable: string;
  icon: any;
}

const ROLES_DATA: RoleItem[] = [
  {
    id: "role-leader",
    roleNumber: "LEADER",
    title: "Tổng Chỉ Huy & Kiến Trúc Sư Hệ Thống",
    assignee: "Đào Đức Minh",
    isLeader: true,
    badge: "Trưởng nhóm",
    color: "from-amber-500/20 to-amber-600/10 border-amber-500/50 text-amber-300",
    summary: "Xây dựng Web Infographic tương tác đa chiều, điều phối 8 đầu việc và nghiệm thu sản phẩm cuối.",
    details: [
      "Lập trình toàn bộ web app đa nền tảng (Next.js 14, Tailwind CSS, Framer Motion) tại cnxh-week5-nhom1.vercel.app.",
      "Thiết kế ngôn ngữ thị giác Dial Editorial tinh giản, Scrollytelling chuyển màu nền động và Widget Alliance OS.",
      "Giám sát tiến độ toàn nhóm, tích hợp toàn bộ deliverables và duyệt bản nộp Padlet.",
    ],
    deliverable: "Website chính thức hoạt động 24/7 & File PDF Báo cáo Master",
    icon: Sparkles,
  },
  {
    id: "role-1",
    roleNumber: "ROLE 1",
    title: "Xuất File Infographic Master (Ảnh PNG 4K & PDF In Ấn)",
    assignee: "Trần Hải Đăng",
    badge: "Graphics Master",
    color: "from-blue-500/20 to-blue-600/10 border-blue-500/40 text-blue-300",
    summary: "Xuất 1 file ảnh PNG dài độ phân giải cao và 1 file PDF in ấn chuẩn nét bằng extension chụp full trang.",
    details: [
      "Cài đặt tiện ích GoFullPage (hoặc công cụ chụp full-page chuyên dụng trên Chrome/Edge).",
      "Truy cập web cnxh-week5-nhom1.vercel.app, chờ tải đầy đủ hiệu ứng và cuộn mượt từ đầu đến cuối trang.",
      "Xuất ra 01 file ảnh PNG dài độ phân giải cao (4K) và 01 file PDF nét căng (không vỡ hạt, không lệch font) làm file nộp chính.",
    ],
    deliverable: "01 File ảnh PNG dài siêu nét + 01 File PDF in ấn chuẩn màu",
    icon: FileImage,
  },
  {
    id: "role-2",
    roleNumber: "ROLE 2",
    title: "Soát Lỗi Học Thuật & Chuẩn Hóa Thuật Ngữ",
    assignee: "Nguyễn Văn Nam",
    badge: "Academic Review",
    color: "from-emerald-500/20 to-emerald-600/10 border-emerald-500/40 text-emerald-300",
    summary: "Đọc rà soát từng dòng chữ trên web, đối chiếu trực tiếp với Giáo trình CNXHKH Chương 5.",
    details: [
      "Rà soát câu chữ trên web cnxh-week5-nhom1.vercel.app theo chuẩn Chương 5 Giáo trình Bộ GD&ĐT (2021).",
      "Bắt lỗi chính tả, dấu câu, kiểm tra xem có câu chữ nào lệch chuẩn lý luận không để báo lại chỉnh sửa.",
      "Đảm bảo các khái niệm cốt lõi: 'Cơ cấu xã hội - giai cấp', 'Liên minh công - nông - trí thức', '3 Nội dung', '3 Nguyên tắc' tuyệt đối chính xác.",
    ],
    deliverable: "Bản checklist xác nhận chuẩn hóa lý luận 100% không tì vết",
    icon: BookCheck,
  },
  {
    id: "role-3",
    roleNumber: "ROLE 3 & 4 (Phần 1)",
    title: "Bản Thuyết Minh Học Thuật: Cơ Cấu 4 Giai Cấp & Tính Tất Yếu",
    assignee: "Bùi Minh Lâm",
    badge: "Docs Drafting A",
    color: "from-purple-500/20 to-purple-600/10 border-purple-500/40 text-purple-300",
    summary: "Đồng tác giả văn bản giải thích ý đồ cấu trúc Infographic (1 - 2 trang A4 Docs nộp Padlet).",
    details: [
      "Luận giải cơ cấu 4 giai cấp/tầng lớp: Công nhân (lãnh đạo), Nông dân (đồng minh chiến lược), Trí thức (hạt nhân sáng tạo), Doanh nhân (quản trị thị trường).",
      "Phân tích sâu tính tất yếu của liên minh dưới 2 góc độ: Góc độ kinh tế (phân công lao động xã hội) & Góc độ chính trị - xã hội (cơ sở giai cấp của chế độ).",
      "Phối hợp cùng Role 4 hoàn thiện bản thuyết minh đạt chuẩn nghiên cứu khoa học.",
    ],
    deliverable: "Nửa đầu Bản Thuyết minh học thuật (Mục I & Mục II)",
    icon: FileText,
  },
  {
    id: "role-4",
    roleNumber: "ROLE 3 & 4 (Phần 2)",
    title: "Bản Thuyết Minh Học Thuật: 3 Trụ Cột, 3 Nguyên Tắc & Mô Hình 4 Nhà",
    assignee: "Nguyễn Viết Ngọc Duy",
    badge: "Docs Drafting B",
    color: "from-violet-500/20 to-violet-600/10 border-violet-500/40 text-violet-300",
    summary: "Hoàn thiện phân tích 3 nội dung, 3 nguyên tắc và chuỗi giá trị thực tiễn liên kết 4 Nhà tại Việt Nam.",
    details: [
      "Phân tích 3 trụ cột nội dung liên minh (nhấn mạnh kinh tế là quyết định nhất, chính trị là định hướng, văn hóa - xã hội là nền tảng tinh thần).",
      "Phân tích 3 nguyên tắc bất biến: Sự lãnh đạo của Đảng, Tự nguyện & Hài hòa lợi ích.",
      "Phân tích mô hình thực tiễn chuỗi liên kết '4 Nhà' tại Việt Nam (Nhà nước - Nhà nông - Nhà khoa học - Doanh nghiệp) và xuất file PDF kẹp chung vào bài nộp Padlet.",
    ],
    deliverable: "Bản hoàn chỉnh Thuyết minh học thuật (1-2 trang A4 PDF nộp Padlet)",
    icon: FileText,
  },
  {
    id: "role-5",
    roleNumber: "ROLE 5",
    title: "QA & Test Tương Tác Đa Thiết Bị",
    assignee: "Trần Viết Cường",
    badge: "Device QA",
    color: "from-cyan-500/20 to-cyan-600/10 border-cyan-500/40 text-cyan-300",
    summary: "Kiểm thử trải nghiệm người dùng, bấm thử toàn bộ widget trên Safari, Chrome, iPad, điện thoại.",
    details: [
      "Mở web trên nhiều dòng máy thực tế: iPhone Safari, Android Chrome, iPad/Tablet, Laptop màn hình nhỏ (1366x768).",
      "Bấm thử toàn bộ các tab, toggle switch trên widget macOS 'Alliance OS', kiểm tra xem có chỗ nào bị tràn chữ (overflow) hay giật lag không.",
      "Báo cáo và xác nhận mọi thành phần tương tác mượt mà trước khi quay video và nộp bài.",
    ],
    deliverable: "Báo cáo nghiệm thu UX/UI đa thiết bị không giật lag",
    icon: Smartphone,
  },
  {
    id: "role-6",
    roleNumber: "ROLE 6",
    title: "Quay Video Teaser / Screen Record Showcase (30 - 45s)",
    assignee: "Lưu Thế An",
    badge: "Media Producer",
    color: "from-rose-500/20 to-rose-600/10 border-rose-500/40 text-rose-300",
    summary: "Quay màn hình máy tính 1080p/60fps trải nghiệm mượt mà từ Hero đến Widget Alliance OS.",
    details: [
      "Dùng OBS Studio hoặc công cụ quay màn hình chất lượng cao: 1080p, 60 khung hình/giây.",
      "Kịch bản quay: Cuộn mượt mà từ Hero → phần đổi nền sáng (Editorial) → thao tác bấm chuyển đổi trên Widget Alliance OS → chân trang.",
      "Thời lượng: 30 - 45 giây. Xuất video định dạng MP4 nét căng để đính kèm link Google Drive vào bài nộp Padlet.",
    ],
    deliverable: "01 Video MP4 Showcase 1080p/60fps (đính kèm link Drive)",
    icon: Video,
  },
  {
    id: "role-7",
    roleNumber: "ROLE 7",
    title: "Tạo QR Code Hub & Đóng Gói Poster Bìa",
    assignee: "Đặng Quốc Khánh",
    badge: "Hub & Assets",
    color: "from-yellow-500/20 to-yellow-600/10 border-yellow-500/40 text-yellow-300",
    summary: "Tạo mã QR chuẩn dẫn về web và chèn vào góc trên cùng của file ảnh Infographic.",
    details: [
      "Tạo 1 mã QR độ phân giải cao dẫn thẳng về link chính thức: https://cnxh-week5-nhom1.vercel.app/.",
      "Chèn mã QR này vào góc trên cùng của file ảnh Infographic master (kèm dòng chữ: 'Quét mã QR để trải nghiệm bản Infographic Tương tác Số hóa').",
      "Kiểm tra quét thử bằng camera của 3 điện thoại khác nhau để đảm bảo vào web ngay trong 1 giây.",
    ],
    deliverable: "Mã QR chuẩn vector/PNG + Ảnh Infographic tích hợp QR code góc trên",
    icon: QrCode,
  },
  {
    id: "role-8",
    roleNumber: "ROLE 8",
    title: "Soạn Kịch Bản Thuyết Trình 2 Phút & Nộp Padlet",
    assignee: "Nguyễn Đức Anh",
    badge: "Presenter & Submit",
    color: "from-pink-500/20 to-pink-600/10 border-pink-500/40 text-pink-300",
    summary: "Soạn dàn ý thuyết trình nhanh 2 phút và đóng gói toàn bộ hồ sơ nộp lên Padlet trước 17h ngày 12/10.",
    details: [
      "Viết sẵn 1 dàn ý nói nhanh 2 phút (để nếu lên lớp giảng viên yêu cầu nhóm đứng dậy trình bày 1-2 phút về sản phẩm thì có người đại diện nói ngay).",
      "Soạn nội dung bài đăng Padlet trang trọng, đầy đủ tên thành viên và link trải nghiệm số.",
      "Tải toàn bộ bộ hồ sơ: File Ảnh Master + File PDF Báo cáo + Bản Thuyết minh A4 + Link Video + Link Web nộp lên Padlet trước hạn 17h ngày 12/10/2026.",
    ],
    deliverable: "Kịch bản nói 2 phút + Biên lai bài nộp Padlet hoàn tất trước hạn",
    icon: Mic,
  },
];

export default function FooterDial() {
  const [expandedRoleId, setExpandedRoleId] = useState<string | null>("role-leader");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleRole = (id: string) => {
    setExpandedRoleId((prev) => (prev === id ? null : id));
  };

  return (
    <footer className="relative bg-transparent text-white pt-24 pb-16 px-6 sm:px-12 border-t border-neutral-900/60">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Monogram Badge */}
        <div className="w-11 h-11 rounded-full bg-white text-black font-mono font-bold text-sm flex items-center justify-center mb-6 shadow-2xl">
          01
        </div>

        {/* Deadline & Mission Tag */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-800 text-xs font-mono text-neutral-300 mb-4 shadow-sm">
          <Calendar className="w-3.5 h-3.5 text-amber-400" />
          <span>HẠN NỘP SẢN PHẨM: TRƯỚC 17H00 NGÀY 12/10/2026</span>
        </div>

        {/* Headline */}
        <h3 className="text-2xl sm:text-4xl font-semibold tracking-tight text-white mb-3 text-center">
          Sản phẩm thực hiện bởi Nhóm 1.
        </h3>

        {/* Mission Brief Box from Instructor */}
        <div className="w-full max-w-3xl my-6 p-5 sm:p-6 rounded-2xl bg-neutral-950/80 border border-neutral-800/90 text-left relative overflow-hidden shadow-xl">
          <div className="flex items-center justify-between mb-3 border-b border-neutral-800/60 pb-3">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-amber-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              ĐỀ BÀI NHIỆM VỤ 5 — BỘ MÔN CNXHKH
            </span>
            <span className="text-[10px] font-mono text-neutral-400">Padlet Submission</span>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mb-2">
            Nhiệm vụ 5: Tìm hiểu về liên minh giai cấp, tầng lớp
          </h4>
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed italic">
            &ldquo;Mỗi nhóm hãy thiết kế 1 sản phẩm infographic về liên minh giai cấp (tính tất yếu của liên minh, nội dung liên minh, nguyên tắc liên minh...). Hạn nộp sản phẩm là trước 17h ngày 12/10/2026.&rdquo;
          </p>
        </div>

        {/* 8 ROLES BATTLE PLAN ACCORDION / GRID */}
        <div className="w-full my-8">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-2">
            <div className="text-center sm:text-left">
              <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 block">
                KẾ HOẠCH TÁC CHIẾN & PHÂN CÔNG ĐẦU VIỆC
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-white mt-1">
                Bảng Phân Công 8 Roles Nhóm 1 (9 Thành Viên)
              </h4>
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300">
              100% Chuyên môn hóa
            </span>
          </div>

          <div className="space-y-3 max-w-4xl mx-auto">
            {ROLES_DATA.map((role) => {
              const Icon = role.icon;
              const isExpanded = expandedRoleId === role.id;

              return (
                <div
                  key={role.id}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    role.isLeader
                      ? "bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 border-amber-500/40 shadow-lg"
                      : isExpanded
                      ? "bg-neutral-900/90 border-neutral-700 shadow-md"
                      : "bg-neutral-950/70 border-neutral-800/80 hover:border-neutral-700"
                  }`}
                >
                  {/* Clickable Header */}
                  <button
                    onClick={() => toggleRole(role.id)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className={`w-10 h-10 rounded-xl bg-neutral-900 border flex items-center justify-center flex-shrink-0 ${role.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-0.5">
                          <span className="text-[10px] font-mono uppercase font-bold px-2 py-0.5 rounded bg-neutral-900 text-neutral-300 border border-neutral-800">
                            {role.roleNumber}
                          </span>
                          <span className="font-semibold text-white text-sm truncate">
                            {role.assignee}
                          </span>
                          <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${role.color}`}>
                            {role.badge}
                          </span>
                        </div>
                        <p className="text-xs text-neutral-300 font-medium truncate">
                          {role.title}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className="text-[11px] font-mono text-neutral-400 hidden md:inline">
                        {isExpanded ? "Thu gọn" : "Chi tiết"}
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-neutral-400" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-neutral-400" />
                      )}
                    </div>
                  </button>

                  {/* Expanded Checklist & Delivery details */}
                  {isExpanded && (
                    <div className="px-4 pb-5 sm:px-5 border-t border-neutral-800/60 pt-3 text-left space-y-3 text-xs bg-black/40">
                      <p className="text-neutral-300 leading-relaxed font-normal">
                        {role.summary}
                      </p>

                      <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800 space-y-2">
                        <span className="text-[10px] font-mono uppercase font-bold text-neutral-400 block tracking-wider">
                          CHI TIẾT THỰC HIỆN:
                        </span>
                        <ul className="space-y-1.5">
                          {role.details.map((d, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-neutral-300">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                              <span className="leading-snug">{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-2 p-2.5 rounded-xl bg-neutral-900/60 border border-neutral-800/80">
                        <span className="text-[11px] font-mono text-neutral-400">
                          Sản phẩm bàn giao: <strong className="text-white font-medium">{role.deliverable}</strong>
                        </span>
                        <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" /> Chuẩn hạn 17h 12/10
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Direct PDF Download Button */}
        <div className="my-6 flex flex-col sm:flex-row items-center gap-4">
          <a
            href="/NHIEM_VU_5_NHOM_1_LIEN_MINH_GIAI_CAP.pdf"
            download="NHIEM_VU_5_NHOM_1_LIEN_MINH_GIAI_CAP.pdf"
            className="inline-flex items-center space-x-2.5 rounded-full bg-white text-black font-semibold text-xs sm:text-sm px-8 py-3.5 hover:bg-neutral-200 active:scale-95 transition-all shadow-2xl"
          >
            <Download className="w-4 h-4 text-black" />
            <span>Tải Báo Cáo PDF Chính Thức (Nộp Bài)</span>
          </a>

          <a
            href="https://cnxh-week5-nhom1.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center space-x-2 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs sm:text-sm px-6 py-3.5 hover:text-white hover:bg-neutral-800 transition-all"
          >
            <ExternalLink className="w-4 h-4 text-neutral-400" />
            <span>Trải nghiệm Live Web Vercel</span>
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 font-mono pt-8 border-t border-neutral-900 gap-4 mt-8">
          <span>© 2026 NHÓM 1 • GIÁO TRÌNH BỘ GIÁO DỤC (2021) • ĐẠI HỌC QUỐC GIA</span>
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 hover:text-white transition-colors cursor-pointer"
          >
            <span>LÊN ĐẦU TRANG</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
