"use client";

import {
  Factory,
  Wheat,
  FlaskConical,
  Briefcase,
  HeartHandshake,
  Compass,
} from "lucide-react";

const FEATURES = [
  {
    number: "01",
    title: "Giai cấp công nhân",
    desc: "Tiên phong trong phương thức sản xuất tiên tiến, giữ vững vai trò lãnh đạo khối liên minh thông qua Đảng Cộng sản.",
    icon: Factory,
  },
  {
    number: "02",
    title: "Giai cấp nông dân",
    desc: "Đồng minh chiến lược tự nhiên, lực lượng đông đảo nhất bảo đảm an ninh lương thực và ổn định xã hội.",
    icon: Wheat,
  },
  {
    number: "03",
    title: "Đội ngũ trí thức",
    desc: "Hạt nhân sáng tạo tri thức, nghiên cứu khoa học công nghệ 4.0 và cung cấp luận cứ cho sự phát triển đất nước.",
    icon: FlaskConical,
  },
  {
    number: "04",
    title: "Đội ngũ doanh nhân",
    desc: "Lực lượng quản lý, huy động các nguồn lực phát triển kinh tế thị trường định hướng XHCN và mở rộng chuỗi giá trị.",
    icon: Briefcase,
  },
  {
    number: "05",
    title: "Văn hóa - Xã hội",
    desc: "Xây dựng con người phát triển toàn diện, nâng cao dân trí, bảo đảm an sinh xã hội và tiến bộ công bằng.",
    icon: HeartHandshake,
  },
  {
    number: "06",
    title: "Mục tiêu tối thượng",
    desc: "Giữ vững độc lập dân tộc gắn liền với chủ nghĩa xã hội, vì mục tiêu Dân giàu, Nước mạnh, Dân chủ, Công bằng, Văn minh.",
    icon: Compass,
  },
];

export default function MinimalistFeatureGrid() {
  return (
    <section
      id="feature-grid"
      className="relative bg-transparent text-white py-32 px-6 sm:px-12 border-t border-neutral-900/50"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header (Dial "Without the noise" style) */}
        <div className="mb-20 text-center sm:text-left">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-3">
            TỔNG QUAN HỆ THỐNG
          </span>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-tight">
            The rest of it, without the noise.
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg mt-4 max-w-xl font-normal tracking-tight">
            Tất cả các thành tố cốt lõi còn lại, tinh giản và sắc gọn. Không chi
            tiết thừa, tập trung vào bản chất biện chứng của Chương 5.
          </p>
        </div>

        {/* 6-cell Hairline Minimalist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-neutral-800 rounded-2xl overflow-hidden bg-neutral-950/60 divide-y md:divide-y-0 divide-neutral-800">
          {FEATURES.map((feat, idx) => {
            const Icon = feat.icon;

            return (
              <div
                key={feat.number}
                className={`p-8 flex flex-col justify-between hover:bg-neutral-900/40 transition-colors ${
                  idx % 3 !== 2 ? "lg:border-r border-neutral-800" : ""
                } ${idx < 3 ? "lg:border-b border-neutral-800" : ""} ${
                  idx % 2 === 0 ? "md:border-r md:border-neutral-800 lg:border-r-0" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono text-neutral-400">
                      {feat.number}
                    </span>
                    <Icon className="w-4 h-4 text-neutral-400" />
                  </div>

                  <h3 className="text-lg font-semibold text-white tracking-tight mb-2">
                    {feat.title}
                  </h3>
                </div>

                <p className="text-xs text-neutral-400 leading-relaxed mt-4">
                  {feat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
