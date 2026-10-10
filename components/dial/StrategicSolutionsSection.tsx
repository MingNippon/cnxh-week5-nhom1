"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  Scale,
  Users2,
  ShieldCheck,
  GraduationCap,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Layers,
  ChevronRight,
} from "lucide-react";

interface SolutionItem {
  number: string;
  badge: string;
  title: string;
  subtitle: string;
  coreMechanism: string;
  points: string[];
  icon: typeof Cpu;
  stats: { label: string; value: string };
  pillColor: string;
}

const STRATEGIC_SOLUTIONS: SolutionItem[] = [
  {
    number: "01",
    badge: "ĐỘT PHÁ NỀN TẢNG",
    title: "Đẩy mạnh CNH, HĐH gắn với kinh tế tri thức & CMCN 4.0",
    subtitle: "Chuyển dịch cơ cấu kinh tế theo hướng hiện đại, xanh và tuần hoàn",
    coreMechanism:
      "Chuyển dịch cơ cấu lao động gắn liền với chuyển đổi mô hình tăng trưởng: giảm nhanh tỷ trọng lao động nông nghiệp thủ công, tăng tỷ trọng lao động công nghiệp kỹ thuật cao và dịch vụ tri thức; hình thành thế hệ công nhân và nông dân số hóa.",
    points: [
      "Ưu tiên phát triển hạ tầng số quốc gia, công nghiệp bán dẫn và năng lượng tái tạo.",
      "Tập trung đầu tư nông nghiệp công nghệ cao, nông nghiệp sinh thái tuần hoàn.",
      "Gắn kết chặt chẽ viện nghiên cứu, trường đại học với khu công nghiệp và doanh nghiệp.",
    ],
    icon: Cpu,
    stats: { label: "Tỷ trọng LĐ nông nghiệp 2030", value: "< 20%" },
    pillColor: "border-sky-500/30 text-sky-400 bg-sky-950/20",
  },
  {
    number: "02",
    badge: "ĐỘNG LỰC VẬT CHẤT",
    title: "Hoàn thiện đồng bộ thể chế kinh tế thị trường định hướng XHCN",
    subtitle: "Hài hòa và bảo đảm lợi ích hợp pháp giữa các chủ thể",
    coreMechanism:
      "Tạo lập môi trường đầu tư kinh doanh minh bạch, bảo vệ quyền sở hữu tài sản hợp pháp của mọi giai tầng; phân phối công bằng thành quả phát triển; kịp thời phát hiện và hóa giải các mâu thuẫn lợi ích cục bộ.",
    points: [
      "Thực hiện đa dạng hóa hình thức sở hữu, bình đẳng giữa các thành phần kinh tế.",
      "Xây dựng cơ chế tích tụ, tập trung đất đai nông nghiệp gắn với sinh kế bền vững của nông dân.",
      "Hoàn thiện hệ thống thuế và chính sách an sinh xã hội nhằm thu hẹp khoảng cách giàu nghèo.",
    ],
    icon: Scale,
    stats: { label: "Hài hòa lợi ích", value: "3 Cấp độ" },
    pillColor: "border-amber-500/30 text-amber-400 bg-amber-950/20",
  },
  {
    number: "03",
    badge: "DÂN CHỦ CƠ SỞ",
    title: "Đổi mới hoạt động Mặt trận Tổ quốc & các đoàn thể chính trị - xã hội",
    subtitle: "Phát huy quyền làm chủ thực chất của nhân dân",
    coreMechanism:
      "Khắc phục triệt để bệnh hành chính hóa, hình thức; hướng mạnh về cơ sở, khu công nghiệp và thôn bản; thực hiện hiệu quả phương châm 'Dân biết, dân bàn, dân làm, dân kiểm tra, dân giám sát, dân thụ hưởng'.",
    points: [
      "Tăng cường hoạt động giám sát và phản biện xã hội đối với các chính sách dân sinh.",
      "Đổi mới mô hình Công đoàn Việt Nam và Hội Nông dân thích ứng với quan hệ lao động mới.",
      "Tập hợp rộng rãi các hội nghề nghiệp, đội ngũ trí thức trẻ và doanh nhân khởi nghiệp.",
    ],
    icon: Users2,
    stats: { label: "Phương châm hành động", value: "6 Chữ Dân" },
    pillColor: "border-emerald-500/30 text-emerald-400 bg-emerald-950/20",
  },
  {
    number: "04",
    badge: "KIM CHỈ NAM CHÍNH TRỊ",
    title: "Tăng cường xây dựng Đảng & hệ thống chính trị trong sạch, vững mạnh",
    subtitle: "Giữ vững vai trò lãnh đạo tuyệt đối của Đảng đối với liên minh",
    coreMechanism:
      "Xây dựng Đảng là khâu then chốt bảo đảm liên minh không chệch hướng XHCN. Kiên quyết đẩy lùi suy thoái tư tưởng chính trị, đạo đức, lối sống, tham nhũng, lãng phí; củng cố niềm tin tuyệt đối của nhân dân vào Đảng.",
    points: [
      "Nâng cao năng lực dự báo và hoạch định đường lối liên minh giai cấp thời kỳ mới.",
      "Đẩy mạnh tự phê bình và phê bình, siết chặt kỷ luật kỷ cương đi đôi với khuyến khích đổi mới sáng tạo.",
      "Gắn bó máu thịt giữa Đảng với nhân dân: 'Việc gì có lợi cho dân ta phải hết sức làm'.",
    ],
    icon: ShieldCheck,
    stats: { label: "Bản lĩnh cầm quyền", value: "Tuyệt đối" },
    pillColor: "border-rose-500/30 text-rose-400 bg-rose-950/20",
  },
  {
    number: "05",
    badge: "PHÁT TRIỂN CON NGƯỜI",
    title: "Nâng cao chất lượng nguồn nhân lực, văn hóa & công bằng xã hội",
    subtitle: "Đặt nhân tố con người vào vị trí trung tâm của mọi chiến lược",
    coreMechanism:
      "Đổi mới căn bản và toàn diện giáo dục - đào tạo, đào tạo nghề chất lượng cao; xây dựng con người Việt Nam phát triển toàn diện, có tinh thần yêu nước, ý chí tự lực tự cường và khát vọng phát triển đất nước phồn vinh.",
    points: [
      "Phổ cập kỹ năng số và đào tạo lại tay nghề cho công nhân trước làn sóng tự động hóa/AI.",
      "Phát triển hệ thống an sinh xã hội toàn dân: bảo hiểm y tế, bảo hiểm xã hội, nhà ở xã hội.",
      "Tôn vinh, trọng dụng nhân tài, tạo môi trường thuận lợi để trí thức và doanh nhân cống hiến.",
    ],
    icon: GraduationCap,
    stats: { label: "Lao động qua đào tạo 2030", value: "75 - 80%" },
    pillColor: "border-purple-500/30 text-purple-400 bg-purple-950/20",
  },
];

export default function StrategicSolutionsSection() {
  return (
    <section
      id="strategic-solutions"
      className="relative bg-transparent text-white py-28 sm:py-36 px-6 sm:px-12 border-t border-neutral-900/40"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-20 text-center sm:text-left">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-mono uppercase tracking-widest mb-4">
            <Layers className="w-3.5 h-3.5 text-white" />
            <span>VĂN KIỆN ĐẠI HỘI XIII • ĐỊNH HƯỚNG CHIẾN LƯỢC</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white leading-tight max-w-3xl">
            Năm giải pháp cốt lõi củng cố khối liên minh.
          </h2>

          <p className="text-neutral-400 text-base sm:text-lg mt-4 max-w-2xl font-normal leading-relaxed tracking-tight">
            Nghị quyết Đại hội XIII của Đảng Cộng sản Việt Nam đề ra hệ thống giải
            pháp toàn diện, kết hợp chặt chẽ giữa kinh tế, chính trị, văn hóa và
            xây dựng Đảng nhằm đưa khối liên minh phát triển lên tầm cao mới.
          </p>
        </div>

        {/* 5 Stacked Solution Rows (Dial List / Master-Detail Style) */}
        <div className="space-y-6">
          {STRATEGIC_SOLUTIONS.map((sol, index) => {
            const Icon = sol.icon;

            return (
              <motion.div
                key={sol.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative rounded-2xl bg-neutral-950/70 border border-neutral-800/80 p-6 sm:p-8 hover:border-neutral-700 transition-all duration-300 overflow-hidden"
              >
                {/* Subtle Hover Radial Gradient */}
                <div className="absolute inset-0 bg-radial-gradient from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div className="relative z-10 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  {/* Left Column: Number, Title, Mechanism */}
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="text-xs font-mono text-neutral-400 font-bold px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800">
                        GIẢI PHÁP {sol.number}
                      </span>
                      <span
                        className={`text-[11px] font-mono uppercase px-2.5 py-0.5 rounded-full border ${sol.pillColor}`}
                      >
                        {sol.badge}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mb-2 group-hover:text-neutral-100 transition-colors">
                      {sol.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400 font-mono mb-4">
                      {sol.subtitle}
                    </p>

                    <p className="text-sm text-neutral-300 leading-relaxed bg-neutral-900/60 rounded-xl p-4 border border-neutral-800/50 mb-5">
                      <span className="font-semibold text-white">Cơ chế vận hành: </span>
                      {sol.coreMechanism}
                    </p>

                    {/* Actionable points */}
                    <ul className="space-y-2">
                      {sol.points.map((pt, pIdx) => (
                        <li
                          key={pIdx}
                          className="flex items-start space-x-2.5 text-xs sm:text-sm text-neutral-400"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Column: Icon & Metric Dial Pill */}
                  <div className="lg:w-56 flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-start gap-4 pt-4 lg:pt-0 border-t lg:border-t-0 border-neutral-900">
                    <div className="w-12 h-12 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="text-right">
                      <span className="text-2xl sm:text-3xl font-mono font-bold text-white block">
                        {sol.stats.value}
                      </span>
                      <span className="text-[11px] font-mono text-neutral-400 block uppercase">
                        {sol.stats.label}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dial Summary Callout */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 border border-neutral-800 p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-xs font-mono uppercase text-neutral-400 tracking-wider">
              TỔNG KẾT VẬN DỤNG THỰC TIỄN
            </span>
            <h4 className="text-lg sm:text-xl font-semibold text-white tracking-tight">
              Sức mạnh tổng hợp từ sự đồng thuận và đổi mới sáng tạo
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-xl">
              Năm giải pháp không tách rời mà tác động tương hỗ biện chứng: Kinh tế
              tạo động lực vật chất, chính trị định hướng mục tiêu, văn hóa bồi đắp
              con người và sự lãnh đạo của Đảng bảo đảm thắng lợi tối hậu.
            </p>
          </div>

          <div className="shrink-0 flex items-center space-x-2">
            <span className="px-4 py-2 rounded-full bg-white text-black font-semibold text-xs tracking-tight shadow-md">
              Mục tiêu 2045: Nước phát triển
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
