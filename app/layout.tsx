import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Liên Minh Giai Cấp, Tầng Lớp trong Thời Kỳ Quá Độ Lên CNXH ở Việt Nam",
  description: "Bản đồ số hóa đồ họa tri thức đa chiều - Học phần Chủ nghĩa xã hội khoa học - Nhóm 1",
  keywords: [
    "Liên minh giai cấp",
    "Chủ nghĩa xã hội khoa học",
    "Công nhân",
    "Nông dân",
    "Trí thức",
    "Doanh nhân",
    "Mô hình 4 nhà",
    "Việt Nam",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="dark scroll-smooth">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-amber-500 selection:text-slate-950 font-sans">
        {children}
      </body>
    </html>
  );
}
