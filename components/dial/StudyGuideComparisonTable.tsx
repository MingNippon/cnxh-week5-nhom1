"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  TableProperties,
  HelpCircle,
  ChevronDown,
  Layers,
  Sparkles,
  Check,
  Building2,
  Wheat,
  FlaskConical,
  Briefcase,
  FileSpreadsheet,
} from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  tag: string;
}

const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Vì sao liên minh trên lĩnh vực KINH TẾ lại giữ vai trò quyết định nhất?",
    tag: "Câu hỏi trọng tâm giáo trình",
    answer:
      "Theo quan điểm của chủ nghĩa Mác - Lênin, kinh tế là hạ tầng cơ sở quyết định kiến trúc thượng tầng. Lợi ích kinh tế là điểm tựa vật chất và là động lực nội tại trực tiếp thúc đẩy các giai cấp, tầng lớp gắn kết bền chặt. Nếu không thực hiện tốt liên minh kinh tế nhằm nâng cao đời sống nhân dân, cải thiện thu nhập và hiện đại hóa sản xuất, thì liên minh chính trị sẽ chỉ dừng lại ở khẩu hiệu hình thức và nhanh chóng tan rã.",
  },
  {
    id: "faq-2",
    question: "Tại sao khối liên minh bắt buộc phải đặt dưới sự lãnh đạo của Giai cấp Công nhân?",
    tag: "Nguyên tắc bất biến",
    answer:
      "Giai cấp công nhân đại biểu cho phương thức sản xuất tiên tiến, có tinh thần cách mạng triệt để và tính tổ chức kỷ luật cao nhất. Sự lãnh đạo của giai cấp công nhân được thực hiện thông qua đội tiên phong là Đảng Cộng sản Việt Nam. Mục tiêu lãnh đạo không vì đặc quyền đặc lợi riêng của giai cấp mình, mà nhằm giải phóng toàn thể xã hội, giữ vững độc lập dân tộc và con đường đi lên CNXH. Đánh mất sự lãnh đạo của Đảng sẽ khiến liên minh chệch hướng và mất phương hướng chính trị.",
  },
  {
    id: "faq-3",
    question: "Nếu coi nhẹ lợi ích kinh tế của người nông dân thì liên minh sẽ đối mặt nguy cơ gì?",
    tag: "Thực tiễn & Bài học",
    answer:
      "Bài học lịch sử (như thời kỳ 'Chính sách cộng sản thời chiến' ở Nga trước khi Lênin chuyển sang NEP, hay thời kỳ tập thể hóa bao cấp trước Đổi mới ở Việt Nam) chứng minh: Khi lợi ích kinh tế thiết thân của nông dân bị xâm phạm hoặc áp đặt cưỡng bức, người nông dân sẽ mất động lực sản xuất, thị trường đình đốn, dẫn tới khủng hoảng lương thực và xói mòn lòng tin vào chính quyền XHCN.",
  },
  {
    id: "faq-4",
    question: "Đội ngũ Trí thức và Doanh nhân giữ vị trí thế nào trong thời kỳ CMCN 4.0?",
    tag: "Bổ sung của Đại hội XIII",
    answer:
      "Trong thời đại kinh tế số và cách mạng công nghiệp lần thứ tư, tri thức khoa học - công nghệ trở thành lực lượng sản xuất trực tiếp. Đội ngũ trí thức là hạt nhân đổi mới sáng tạo, làm cầu nối chuyển giao công nghệ cho công nhân và nông dân. Đội ngũ doanh nhân là lực lượng tổ chức sản xuất, huy động vốn, phát triển thị trường và kết nối chuỗi cung ứng toàn cầu. Sự mở rộng liên minh gồm cả trí thức và doanh nhân là bước phát triển sáng tạo lý luận của Đảng ta.",
  },
];

export default function StudyGuideComparisonTable() {
  const [activeTab, setActiveTab] = useState<"forces" | "pillars" | "faq">("forces");
  const [openFaq, setOpenFaq] = useState<string | null>("faq-1");

  return (
    <section
      id="study-guide"
      className="relative bg-transparent text-white py-28 sm:py-36 px-6 sm:px-12 border-t border-neutral-900/40"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-14 text-center sm:text-left">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-mono uppercase tracking-widest mb-4">
            <FileSpreadsheet className="w-3.5 h-3.5 text-white" />
            <span>CÔNG CỤ ÔN TẬP • BẢNG TRA CỨU HỌC PHẦN CHƯƠNG 5</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white leading-tight max-w-3xl">
            Ma trận đối sánh & câu hỏi cốt lõi.
          </h2>

          <p className="text-neutral-400 text-base sm:text-lg mt-4 max-w-2xl font-normal leading-relaxed tracking-tight">
            Hệ thống hóa toàn bộ kiến thức lý luận và thực tiễn môn CNXHKH dưới dạng
            bảng tra cứu đối sánh trực quan, hỗ trợ thảo luận nhóm và ôn thi học phần.
          </p>
        </div>

        {/* Dial Navigation Segmented Control with Morphing Tabs layoutId */}
        <div className="flex items-center space-x-2 p-1.5 rounded-full bg-neutral-950 border border-neutral-800 w-fit mb-12 max-w-full overflow-x-auto">
          {[
            { id: "forces", label: "4 Lực lượng nòng cốt" },
            { id: "pillars", label: "3 Trụ cột nội dung liên minh" },
            { id: "faq", label: "Câu hỏi thi & Thảo luận cốt lõi" },
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`relative px-4 py-2 rounded-full text-xs font-medium transition-colors whitespace-nowrap z-10 ${
                  isActive
                    ? "text-black font-semibold"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="study-tab-active-indicator"
                    className="absolute inset-0 bg-white rounded-full shadow-md -z-10"
                    transition={{ type: "spring", stiffness: 450, damping: 32 }}
                  />
                )}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab 1: 4 Core Forces Comparison Table */}
        {activeTab === "forces" && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="rounded-2xl border border-neutral-800 bg-neutral-950/70 overflow-hidden shadow-2xl"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-neutral-800 bg-neutral-900/70 text-neutral-300 font-mono text-[11px] uppercase tracking-wider">
                    <th className="py-4 px-6 w-1/4">Lực lượng</th>
                    <th className="py-4 px-6 w-1/4">Vị trí & Tính chất</th>
                    <th className="py-4 px-6 w-1/4">Nhiệm vụ trong liên minh</th>
                    <th className="py-4 px-6 w-1/4">Lợi ích kỳ vọng</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-900 text-neutral-300">
                  {/* Row 1: Công nhân */}
                  <tr className="hover:bg-neutral-900/30 transition-colors">
                    <td className="py-5 px-6 font-semibold text-white">
                      <div className="flex items-center space-x-2">
                        <Building2 className="w-4 h-4 text-sky-400 shrink-0" />
                        <span>Giai cấp Công nhân</span>
                      </div>
                      <span className="inline-block mt-1 text-[10px] font-mono px-2 py-0.5 rounded bg-sky-950/40 text-sky-300 border border-sky-800/40">
                        LÃNH ĐẠO KHỐI LIÊN MINH
                      </span>
                    </td>
                    <td className="py-5 px-6 text-neutral-400 leading-relaxed">
                      Đại biểu cho PTSX tiên tiến, phương thức lao động công nghiệp hiện đại; giữ vai trò lãnh đạo thông qua Đảng.
                    </td>
                    <td className="py-5 px-6 leading-relaxed">
                      Đi đầu trong CNH, HĐH, cung cấp tư liệu sản xuất và công nghệ máy móc cho nông nghiệp và các ngành khác.
                    </td>
                    <td className="py-5 px-6 text-neutral-300 leading-relaxed font-mono text-xs">
                      Tiền lương công bằng, điều kiện lao động an toàn, nhà ở xã hội, cơ hội nâng cao trình độ nghề và kỹ năng số.
                    </td>
                  </tr>

                  {/* Row 2: Nông dân */}
                  <tr className="hover:bg-neutral-900/30 transition-colors">
                    <td className="py-5 px-6 font-semibold text-white">
                      <div className="flex items-center space-x-2">
                        <Wheat className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>Giai cấp Nông dân</span>
                      </div>
                      <span className="inline-block mt-1 text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/40 text-emerald-300 border border-emerald-800/40">
                        ĐỒNG MINH CHIẾN LƯỢC TỰ NHIÊN
                      </span>
                    </td>
                    <td className="py-5 px-6 text-neutral-400 leading-relaxed">
                      Lực lượng đông đảo nhất, bạn đồng minh tự nhiên và tin cậy nhất; nền tảng an ninh lương thực và ổn định xã hội.
                    </td>
                    <td className="py-5 px-6 leading-relaxed">
                      Chủ thể sản xuất nông sản hàng hóa lớn, bảo vệ tài nguyên đất đai, xây dựng nông thôn mới văn minh, hiện đại.
                    </td>
                    <td className="py-5 px-6 text-neutral-300 leading-relaxed font-mono text-xs">
                      Giá nông sản ổn định, vật tư đầu vào hợp lý, hỗ trợ vay vốn ưu đãi, bảo hiểm nông nghiệp và hạ tầng nông thôn.
                    </td>
                  </tr>

                  {/* Row 3: Trí thức */}
                  <tr className="hover:bg-neutral-900/30 transition-colors">
                    <td className="py-5 px-6 font-semibold text-white">
                      <div className="flex items-center space-x-2">
                        <FlaskConical className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>Đội ngũ Trí thức</span>
                      </div>
                      <span className="inline-block mt-1 text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950/40 text-amber-300 border border-amber-800/40">
                        HẠT NHÂN SÁNG TẠO ĐẶC BIỆT
                      </span>
                    </td>
                    <td className="py-5 px-6 text-neutral-400 leading-relaxed">
                      Tầng lớp lao động trí óc sáng tạo, đóng vai trò quyết định trong việc tạo ra và ứng dụng tri thức khoa học mới.
                    </td>
                    <td className="py-5 px-6 leading-relaxed">
                      Nghiên cứu giống cây trồng, giải pháp tự động hóa, chuyển đổi số và tư vấn phản biện chính sách phát triển.
                    </td>
                    <td className="py-5 px-6 text-neutral-300 leading-relaxed font-mono text-xs">
                      Tự do học thuật, môi trường nghiên cứu hiện đại, bảo hộ quyền sở hữu trí tuệ, cơ chế thương mại hóa đề tài R&D.
                    </td>
                  </tr>

                  {/* Row 4: Doanh nhân */}
                  <tr className="hover:bg-neutral-900/30 transition-colors">
                    <td className="py-5 px-6 font-semibold text-white">
                      <div className="flex items-center space-x-2">
                        <Briefcase className="w-4 h-4 text-rose-400 shrink-0" />
                        <span>Đội ngũ Doanh nhân</span>
                      </div>
                      <span className="inline-block mt-1 text-[10px] font-mono px-2 py-0.5 rounded bg-rose-950/40 text-rose-300 border border-rose-800/40">
                        QUẢN TRỊ & MỞ RỘNG THỊ TRƯỜNG
                      </span>
                    </td>
                    <td className="py-5 px-6 text-neutral-400 leading-relaxed">
                      Lực lượng năng động tổ chức sản xuất kinh doanh trong nền kinh tế thị trường định hướng xã hội chủ nghĩa.
                    </td>
                    <td className="py-5 px-6 leading-relaxed">
                      Huy động vốn xã hội, đầu tư nhà máy chế biến sâu, tổ chức logistics lạnh và kết nối xuất khẩu thị trường quốc tế.
                    </td>
                    <td className="py-5 px-6 text-neutral-300 leading-relaxed font-mono text-xs">
                      Môi trường kinh doanh bình đẳng, thủ tục hành chính thông thoáng, bảo đảm quyền tài sản và giảm chi phí logistics.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {/* Tab 2: 3 Pillars Comparison */}
        {activeTab === "pillars" && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {/* Trụ cột Kinh tế */}
            <div className="rounded-2xl border border-neutral-800 bg-neutral-950/70 p-6 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest px-2.5 py-1 rounded-full bg-amber-950/30 border border-amber-800/40 inline-block mb-4">
                  CƠ SỞ VẬT CHẤT • QUYẾT ĐỊNH NHẤT
                </span>
                <h3 className="text-xl font-semibold text-white tracking-tight mb-3">
                  Nội dung Kinh tế
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                  Thỏa mãn nhu cầu và lợi ích kinh tế thiết thân của các giai cấp. Hợp tác phân công lao động, liên kết sản xuất chuỗi giá trị và thị trường thống nhất.
                </p>
                <div className="space-y-2 border-t border-neutral-900 pt-4 text-xs text-neutral-300">
                  <div className="flex items-center space-x-2">
                    <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Mô hình 4 Nhà nông nghiệp 4.0</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Phát triển KTTT định hướng XHCN</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Hài hòa 3 tầng lợi ích vật chất</span>
                  </div>
                </div>
              </div>
              <span className="text-[11px] font-mono text-neutral-500 mt-6 block">
                [Động lực nội tại trực tiếp]
              </span>
            </div>

            {/* Trụ cột Chính trị */}
            <div className="rounded-2xl border border-neutral-800 bg-neutral-950/70 p-6 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-rose-400 uppercase tracking-widest px-2.5 py-1 rounded-full bg-rose-950/30 border border-rose-800/40 inline-block mb-4">
                  KIM CHỈ NAM • ĐỊNH HƯỚNG CHẾ ĐỘ
                </span>
                <h3 className="text-xl font-semibold text-white tracking-tight mb-3">
                  Nội dung Chính trị
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                  Giữ vững vai trò lãnh đạo tuyệt đối của Đảng Cộng sản Việt Nam; củng cố nền tảng chính trị của Nhà nước pháp quyền XHCN của dân, do dân, vì dân.
                </p>
                <div className="space-y-2 border-t border-neutral-900 pt-4 text-xs text-neutral-300">
                  <div className="flex items-center space-x-2">
                    <Check className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                    <span>Bảo vệ vững chắc chế độ chính trị</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                    <span>Thực hiện quyền làm chủ của nhân dân</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                    <span>Đập tan thủ đoạn 'Diễn biến hòa bình'</span>
                  </div>
                </div>
              </div>
              <span className="text-[11px] font-mono text-neutral-500 mt-6 block">
                [Bảo đảm bản chất XHCN]
              </span>
            </div>

            {/* Trụ cột Văn hóa - Xã hội */}
            <div className="rounded-2xl border border-neutral-800 bg-neutral-950/70 p-6 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-sky-400 uppercase tracking-widest px-2.5 py-1 rounded-full bg-sky-950/30 border border-sky-800/40 inline-block mb-4">
                  MỤC TIÊU TỐI THƯỢNG • VÌ CON NGƯỜI
                </span>
                <h3 className="text-xl font-semibold text-white tracking-tight mb-3">
                  Nội dung Văn hóa - Xã hội
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                  Xây dựng con người phát triển toàn diện; nâng cao dân trí, phát triển văn hóa tiên tiến đậm đà bản sắc; bảo đảm an sinh xã hội và giảm nghèo bền vững.
                </p>
                <div className="space-y-2 border-t border-neutral-900 pt-4 text-xs text-neutral-300">
                  <div className="flex items-center space-x-2">
                    <Check className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    <span>Đào tạo nhân lực chất lượng cao</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    <span>Hệ thống an sinh & BHYT toàn dân</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    <span>Bảo vệ môi trường & tăng trưởng xanh</span>
                  </div>
                </div>
              </div>
              <span className="text-[11px] font-mono text-neutral-500 mt-6 block">
                [Nền tảng tinh thần xã hội]
              </span>
            </div>
          </motion.div>
        )}

        {/* Tab 3: Accordion FAQs */}
        {activeTab === "faq" && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="space-y-4"
          >
            {FAQS.map((faq) => {
              const isOpen = openFaq === faq.id;

              return (
                <div
                  key={faq.id}
                  className="rounded-2xl border border-neutral-800 bg-neutral-950/70 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                    className="w-full py-5 px-6 flex items-center justify-between text-left hover:bg-neutral-900/40 transition-colors"
                  >
                    <div className="space-y-1 pr-4">
                      <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block">
                        {faq.tag}
                      </span>
                      <h4 className="text-base sm:text-lg font-semibold text-white tracking-tight">
                        {faq.question}
                      </h4>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-neutral-400 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-white" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-6 text-sm text-neutral-300 leading-relaxed border-t border-neutral-900 pt-4"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        )}
      </div>
    </section>
  );
}
