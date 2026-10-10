"use client";

import { Download, Layers } from "lucide-react";
import Magnetic from "@/components/motion/Magnetic";

export default function NavbarPill() {
  const handleDownloadPdf = () => {
    const link = document.createElement("a");
    link.href = "/NHIEM_VU_5_NHOM_1_LIEN_MINH_GIAI_CAP.pdf";
    link.download = "NHIEM_VU_5_NHOM_1_LIEN_MINH_GIAI_CAP.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-full max-w-5xl px-4 pointer-events-none no-print">
      <div className="pointer-events-auto mx-auto flex items-center justify-between rounded-full bg-neutral-950/85 border border-neutral-800/90 shadow-2xl backdrop-blur-xl px-4 py-2 text-xs">
        {/* Brand Monogram */}
        <div className="flex items-center space-x-2.5">
          <div className="w-5 h-5 rounded-full bg-white text-black flex items-center justify-center font-bold text-[10px]">
            1
          </div>
          <span className="font-medium text-neutral-200 tracking-tight hidden sm:inline">
            Nhóm 1 <span className="text-neutral-500">• CNXHKH (Nhiệm vụ 5)</span>
          </span>
        </div>

        {/* Quick Anchor Links */}
        <nav className="flex items-center space-x-1 sm:space-x-3 text-neutral-400 font-normal">
          <button
            onClick={() => scrollTo("core-forces")}
            className="hover:text-white transition-colors px-2 py-1 rounded-full text-xs"
          >
            Cơ cấu 4 lực lượng
          </button>
          <button
            onClick={() => scrollTo("editorial-why")}
            className="hover:text-white transition-colors px-2 py-1 rounded-full text-xs"
          >
            Tính tất yếu & Nội dung
          </button>
          <button
            onClick={() => scrollTo("alliance-os")}
            className="hover:text-white transition-colors px-2 py-1 rounded-full text-xs"
          >
            Chuỗi 4 Nhà
          </button>
          <button
            onClick={() => scrollTo("strategic-solutions")}
            className="hover:text-white transition-colors px-2 py-1 rounded-full text-xs hidden md:inline"
          >
            Giải pháp
          </button>
          <button
            onClick={() => scrollTo("study-guide")}
            className="hover:text-white transition-colors px-2 py-1 rounded-full text-xs hidden lg:inline"
          >
            Bảng tra cứu
          </button>
        </nav>

        {/* Direct Download Button with Magnetic cursor pull */}
        <Magnetic strength={0.3}>
          <button
            onClick={handleDownloadPdf}
            className="flex items-center space-x-1.5 rounded-full bg-white text-black font-medium px-3.5 py-1.5 hover:bg-neutral-200 active:scale-95 transition-all shadow-md"
            title="Tải trực tiếp file PDF chính thức để nộp bài"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="tracking-tight font-semibold">Tải PDF nộp bài</span>
          </button>
        </Magnetic>
      </div>
    </header>
  );
}
