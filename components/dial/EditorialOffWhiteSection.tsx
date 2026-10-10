"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Shield,
  Coins,
  Landmark,
  Sparkles,
  CheckCircle2,
  Crown,
  Scale,
  Handshake,
  BookOpen,
} from "lucide-react";

export default function EditorialOffWhiteSection() {
  return (
    <section
      id="editorial-why"
      className="relative text-neutral-900 transition-colors duration-1000 py-24 sm:py-36 px-6 sm:px-12"
      style={{
        background:
          "linear-gradient(to bottom, transparent 0%, #F4F4F6 8%, #F4F4F6 92%, transparent 100%)",
      }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Main Section Header */}
        <div className="mb-24 text-center sm:text-left">
          <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white border border-neutral-300 text-neutral-700 text-xs font-mono uppercase tracking-widest mb-4 shadow-sm">
            <BookOpen className="w-3.5 h-3.5 text-neutral-900" />
            <span>CHUYÊN ĐỀ 2 & 3: TÍNH TẤT YẾU, NỘI DUNG & NGUYÊN TẮC LIÊN MINH</span>
          </span>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-neutral-950 leading-[1.08] max-w-4xl">
            Gắn kết tự nhiên hơn những gì bạn nghĩ.
          </h2>
          <p className="text-neutral-600 text-lg sm:text-xl mt-6 max-w-3xl font-normal leading-relaxed tracking-tight">
            Trong thời kỳ quá độ lên chủ nghĩa xã hội, liên minh không phải là một
            sách lược tình thế hay khẩu hiệu trừu tượng. Đó là quy luật vận động
            khách quan xuất phát từ sự đòi hỏi của nền sản xuất lớn hiện đại và
            sự sống còn của chính quyền nhân dân.
          </p>
        </div>

        {/* ================= KHỐI 1: TÍNH TẤT YẾU KHÁCH QUAN ================= */}
        <motion.div
          id="tinh-tat-yeu"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="border-t border-neutral-300/80 pt-12 mb-28"
        >
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider font-semibold">
              PHẦN II • TÍNH TẤT YẾU KHÁCH QUAN CỦA LIÊN MINH
            </span>
            <div className="flex items-center space-x-2">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white border border-neutral-200 text-neutral-900 text-xs font-medium shadow-sm">
                <TrendingUp className="w-3.5 h-3.5 text-neutral-700" />
                <span>Kinh tế: Chuỗi sản xuất lớn</span>
              </span>
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white border border-neutral-200 text-neutral-900 text-xs font-medium shadow-sm">
                <Shield className="w-3.5 h-3.5 text-neutral-700" />
                <span>Chính trị: Nền tảng chế độ</span>
              </span>
            </div>
          </div>

          <h3 className="text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-neutral-950 leading-tight mb-6 max-w-4xl">
            "Nền sản xuất hiện đại không cho phép các ngành đứng riêng rẽ."
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-neutral-700 text-sm sm:text-base leading-relaxed">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-neutral-200/90 shadow-sm space-y-4">
              <h4 className="font-bold text-neutral-950 text-base flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-neutral-900" />
                <span>Góc độ Kinh tế (Quy luật khách quan):</span>
              </h4>
              <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                Quá trình công nghiệp hóa, hiện đại hóa và cuộc CMCN 4.0 thúc đẩy
                phân công lao động xã hội sâu sắc. Công nghiệp cần nguyên liệu và
                thị trường từ nông nghiệp; nông nghiệp cần máy móc, phân bón và
                công nghệ chế biến từ công nghiệp; dịch vụ và KH&CN kết nối thành
                chuỗi giá trị tuần hoàn.
              </p>
              <div className="pt-2 text-xs font-mono text-neutral-500 border-t border-neutral-100">
                → Xóa bỏ tính phân tán tiểu nông, hình thành sản xuất hàng hóa lớn.
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-neutral-200/90 shadow-sm space-y-4">
              <h4 className="font-bold text-neutral-950 text-base flex items-center space-x-2">
                <Shield className="w-4 h-4 text-neutral-900" />
                <span>Góc độ Chính trị - Xã hội (Cơ sở chế độ):</span>
              </h4>
              <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                Khối liên minh do Đảng Cộng sản lãnh đạo là nền tảng chính trị
                vững chắc nhất của Nhà nước pháp quyền XHCN của dân, do dân, vì
                dân. Tập hợp hơn 90% dân số thành lực lượng cách mạng to lớn, tạo
                sự đồng thuận xã hội cao nhất và đập tan âm mưu "Diễn biến hòa
                bình" của các thế lực thù địch.
              </p>
              <div className="pt-2 text-xs font-mono text-neutral-500 border-t border-neutral-100">
                → V.I. Lênin: Không liên minh, công nhân không thể giữ vững chính quyền.
              </div>
            </div>
          </div>
        </motion.div>

        {/* ================= KHỐI 2: NỘI DUNG LIÊN MINH TOÀN DIỆN ================= */}
        <motion.div
          id="noi-dung-lien-minh"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="border-t border-neutral-300/80 pt-12 mb-28"
        >
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider font-semibold">
              PHẦN III • NỘI DUNG LIÊN MINH TOÀN DIỆN TRONG THỜI KỲ QUÁ ĐỘ
            </span>
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white border border-neutral-200 text-neutral-900 text-xs font-medium shadow-sm">
                <Coins className="w-3.5 h-3.5 text-neutral-700" />
                <span>1. Kinh tế (Quyết định nhất)</span>
              </span>
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white border border-neutral-200 text-neutral-900 text-xs font-medium shadow-sm">
                <Landmark className="w-3.5 h-3.5 text-neutral-700" />
                <span>2. Chính trị (Định hướng)</span>
              </span>
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white border border-neutral-200 text-neutral-900 text-xs font-medium shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-neutral-700" />
                <span>3. Văn hóa - Xã hội (Mục tiêu)</span>
              </span>
            </div>
          </div>

          <h3 className="text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-neutral-950 leading-tight mb-8 max-w-4xl">
            "Kinh tế là động lực trước tiên, chính trị là kim chỉ nam dẫn đường."
          </h3>

          {/* 3 Detailed Columns for the 3 Contents */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Nội dung Kinh tế */}
            <div className="p-6 rounded-2xl bg-white border border-neutral-200/90 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-sm mb-4">
                  <Coins className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-neutral-950 text-base mb-2">
                  Nội Dung Kinh Tế
                </h4>
                <span className="text-[11px] font-mono uppercase text-amber-800 font-bold block mb-3">
                  Quan trọng nhất & Quyết định nhất
                </span>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed mb-4">
                  Thỏa mãn nhu cầu và lợi ích kinh tế thiết thân của nhân dân lao
                  động. Hợp tác sản xuất, đẩy mạnh CNH, HĐH nông nghiệp nông thôn
                  gắn với xây dựng nông thôn mới. Phát triển kinh tế thị trường
                  định hướng XHCN với nhiều thành phần kinh tế.
                </p>
              </div>
              <div className="pt-3 border-t border-neutral-100 text-[11px] text-neutral-500 font-mono">
                • Chất xi măng gắn kết bền vững
              </div>
            </div>

            {/* Nội dung Chính trị */}
            <div className="p-6 rounded-2xl bg-white border border-neutral-200/90 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-xl bg-red-100 text-red-900 flex items-center justify-center font-bold text-sm mb-4">
                  <Landmark className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-neutral-950 text-base mb-2">
                  Nội Dung Chính Trị
                </h4>
                <span className="text-[11px] font-mono uppercase text-red-800 font-bold block mb-3">
                  Bảo đảm định hướng XHCN
                </span>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed mb-4">
                  Bảo đảm độc lập dân tộc và CNXH; giữ vững vai trò lãnh đạo duy
                  nhất của Đảng Cộng sản Việt Nam đối với liên minh. Củng cố Nhà
                  nước pháp quyền XHCN của dân, do dân, vì dân; phát huy quyền làm
                  chủ và hoàn thiện nền dân chủ XHCN.
                </p>
              </div>
              <div className="pt-3 border-t border-neutral-100 text-[11px] text-neutral-500 font-mono">
                • Bảo đảm khối liên minh không chệch hướng
              </div>
            </div>

            {/* Nội dung Văn hóa - Xã hội */}
            <div className="p-6 rounded-2xl bg-white border border-neutral-200/90 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-xl bg-sky-100 text-sky-900 flex items-center justify-center font-bold text-sm mb-4">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-neutral-950 text-base mb-2">
                  Nội Dung Văn Hóa - Xã Hội
                </h4>
                <span className="text-[11px] font-mono uppercase text-sky-800 font-bold block mb-3">
                  Mục tiêu vì sự phát triển con người
                </span>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed mb-4">
                  Xây dựng nền văn hóa Việt Nam tiên tiến, đậm đà bản sắc dân tộc.
                  Nâng cao dân trí, phát triển nguồn nhân lực chất lượng cao. Bảo
                  đảm an sinh xã hội, xóa đói giảm nghèo bền vững, chăm lo đời
                  sống y tế, giáo dục cho nhân dân lao động.
                </p>
              </div>
              <div className="pt-3 border-t border-neutral-100 text-[11px] text-neutral-500 font-mono">
                • Thước đo tính ưu việt của chế độ
              </div>
            </div>
          </div>
        </motion.div>

        {/* ================= KHỐI 3: BA NGUYÊN TẮC BẤT BIẾN ================= */}
        <motion.div
          id="nguyen-tac-vang"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="border-t border-neutral-300/80 pt-12"
        >
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider font-semibold">
              PHẦN IV • BA NGUYÊN TẮC CƠ BẢN CỦA LIÊN MINH (THẾ KIỀNG 3 CHÂN)
            </span>
            <div className="flex items-center space-x-2">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-neutral-900 text-white text-xs font-medium shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Bất khả xâm phạm</span>
              </span>
            </div>
          </div>

          <h3 className="text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-neutral-950 leading-tight mb-8 max-w-4xl">
            "Không có tự nguyện và hài hòa lợi ích, khối liên minh sẽ tan rã."
          </h3>

          <div className="space-y-4">
            {/* Nguyên tắc 1 */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-neutral-200/90 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-900 shrink-0 mt-0.5">
                  <Crown className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-xs font-mono text-neutral-500 uppercase font-semibold">
                      Nguyên tắc 1
                    </span>
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-red-100 text-red-700 font-bold">
                      Chính trị tối cao
                    </span>
                  </div>
                  <h4 className="text-base sm:text-lg font-semibold text-neutral-900">
                    Phải bảo đảm vai trò lãnh đạo của giai cấp công nhân
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-1 max-w-2xl leading-relaxed">
                    Sự lãnh đạo của giai cấp công nhân được thực hiện thông qua Đảng
                    Cộng sản Việt Nam. Lãnh đạo không nhằm mục đích tranh giành đặc
                    quyền đặc lợi, mà để hướng khối liên minh tới mục tiêu độc lập
                    dân tộc gắn liền với CNXH. Đánh mất vai trò lãnh đạo là đánh mất
                    phương hướng chính trị.
                  </p>
                </div>
              </div>
              <span className="text-xs font-mono text-neutral-500 uppercase whitespace-nowrap">
                [Định hướng XHCN]
              </span>
            </div>

            {/* Nguyên tắc 2 */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-neutral-200/90 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-900 shrink-0 mt-0.5">
                  <Scale className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-xs font-mono text-neutral-500 uppercase font-semibold">
                      Nguyên tắc 2
                    </span>
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-amber-100 text-amber-700 font-bold">
                      Động lực trực tiếp
                    </span>
                  </div>
                  <h4 className="text-base sm:text-lg font-semibold text-neutral-900">
                    Phải kết hợp đúng đắn các lợi ích (Coi trọng lợi ích kinh tế)
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-1 max-w-2xl leading-relaxed">
                    Lợi ích là điểm tựa, là chất keo kết dính vật chất tự nhiên.
                    Phải giải quyết hài hòa ba tầng lợi ích: Lợi ích của người lao
                    động (trực tiếp), lợi ích tập thể/doanh nghiệp và lợi ích toàn
                    xã hội. Coi nhẹ lợi ích kinh tế thiết thân thì liên minh chỉ là
                    hình thức, giả tạo.
                  </p>
                </div>
              </div>
              <span className="text-xs font-mono text-neutral-500 uppercase whitespace-nowrap">
                [Động lực vật chất]
              </span>
            </div>

            {/* Nguyên tắc 3 */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-neutral-200/90 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-900 shrink-0 mt-0.5">
                  <Handshake className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-xs font-mono text-neutral-500 uppercase font-semibold">
                      Nguyên tắc 3
                    </span>
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-emerald-100 text-emerald-700 font-bold">
                      Phương thức dân chủ
                    </span>
                  </div>
                  <h4 className="text-base sm:text-lg font-semibold text-neutral-900">
                    Phải xuất phát từ sự tự nguyện, tự giác của các giai cấp, tầng lớp
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-1 max-w-2xl leading-relaxed">
                    Tuyệt đối không dùng mệnh lệnh hành chính gượng ép, áp đặt chủ
                    quan. Liên minh phải dựa trên nhận thức đầy đủ về quyền lợi,
                    nghĩa vụ và trách nhiệm chung. Áp đặt hành chính sẽ gây tâm lý
                    chống đối ngấm ngầm và rạn nứt khối đại đoàn kết.
                  </p>
                </div>
              </div>
              <span className="text-xs font-mono text-neutral-500 uppercase whitespace-nowrap">
                [Phương thức bền vững]
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
