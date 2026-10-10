import os
import subprocess
import base64

def encode_img(path):
    with open(path, "rb") as f:
        return f"data:image/jpeg;base64,{base64.b64encode(f.read()).decode('utf-8')}"

img_cn = encode_img("public/images/cong_nhan.jpg")
img_nd = encode_img("public/images/nong_dan.jpg")
img_tt = encode_img("public/images/tri_thuc.jpg")
img_dn = encode_img("public/images/doanh_nhan.jpg")
img_logistics = encode_img("public/images/logistics_4nha.jpg")

html_content = f"""<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Báo cáo Infographic Nhiệm vụ 5 - Nhóm 1 - CNXHKH</title>
  <style>
    @page {{
      size: A4 portrait;
      margin: 0;
    }}
    * {{
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      -webkit-font-smoothing: antialiased;
    }}
    body {{
      background-color: #000000;
      color: #FFFFFF;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }}
    .page {{
      width: 210mm;
      height: 297mm;
      max-height: 297mm;
      page-break-after: always;
      break-after: page;
      position: relative;
      overflow: hidden;
      background-color: #050505;
      padding: 13mm 14mm;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }}
    /* Top Header Strip */
    .header-bar {{
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #222225;
      padding-bottom: 3.5mm;
    }}
    .brand {{
      display: flex;
      align-items: center;
      gap: 7px;
    }}
    .monogram {{
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: #FFFFFF;
      color: #000000;
      font-weight: 700;
      font-size: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: monospace;
    }}
    .brand-title {{
      font-size: 10px;
      font-weight: 600;
      letter-spacing: -0.2px;
      color: #E4E4E7;
    }}
    .deadline-badge {{
      font-family: monospace;
      font-size: 8.5px;
      color: #FBBF24;
      background: rgba(251, 191, 36, 0.1);
      border: 1px solid rgba(251, 191, 36, 0.3);
      padding: 2px 7px;
      border-radius: 9999px;
      text-transform: uppercase;
    }}
    /* Footer bar */
    .footer-bar {{
      border-top: 1px solid #1E1E22;
      padding-top: 3mm;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 8px;
      font-family: monospace;
      color: #71717A;
    }}
    .page-num {{
      color: #D4D4D8;
      font-weight: bold;
    }}
    /* Reusable cards */
    .card {{
      background: #0C0C0E;
      border: 1px solid #222226;
      border-radius: 10px;
      padding: 9px 12px;
    }}
    .card-title {{
      font-size: 11px;
      font-weight: 700;
      color: #FFFFFF;
      margin-bottom: 3px;
      display: flex;
      align-items: center;
      gap: 5px;
    }}
    .badge {{
      font-size: 7.5px;
      font-family: monospace;
      text-transform: uppercase;
      padding: 1.5px 5px;
      border-radius: 9999px;
      display: inline-block;
    }}
    .badge-amber {{ background: rgba(245, 158, 11, 0.15); color: #FBBF24; border: 1px solid rgba(245, 158, 11, 0.3); }}
    .badge-red {{ background: rgba(239, 68, 68, 0.15); color: #F87171; border: 1px solid rgba(239, 68, 68, 0.3); }}
    .badge-blue {{ background: rgba(56, 189, 248, 0.15); color: #38BDF8; border: 1px solid rgba(56, 189, 248, 0.3); }}
    .badge-emerald {{ background: rgba(52, 211, 153, 0.15); color: #34D399; border: 1px solid rgba(52, 211, 153, 0.3); }}
    .badge-purple {{ background: rgba(192, 132, 252, 0.15); color: #C084FC; border: 1px solid rgba(192, 132, 252, 0.3); }}
    .chip {{
      font-size: 8px;
      padding: 2.5px 7px;
      border-radius: 9999px;
      background: #18181B;
      border: 1px solid #27272A;
      color: #E4E4E7;
      display: inline-flex;
      align-items: center;
      gap: 3px;
    }}
  </style>
</head>
<body>

  <!-- ======================================================== -->
  <!-- TRANG 1: BÌA CHÍNH THỨC & TỔNG QUAN INFOGRAPHIC HERO -->
  <!-- ======================================================== -->
  <div class="page">
    <div class="header-bar">
      <div class="brand">
        <div class="monogram">1</div>
        <span class="brand-title">NHÓM 1 • HỌC PHẦN CHỦ NGHĨA XÃ HỘI KHOA HỌC</span>
      </div>
      <div class="deadline-badge">HẠN NỘP: 17H00 NGÀY 12/10/2026</div>
    </div>

    <!-- Hero Content -->
    <div style="margin: auto 0; text-align: center; padding: 0 10px;">
      <div style="font-size: 9px; font-family: monospace; letter-spacing: 2px; color: #A1A1AA; text-transform: uppercase; margin-bottom: 8px;">
        BỘ GIÁO DỤC VÀ ĐÀO TẠO — HỌC VIỆN BÁO CHÍ VÀ TUYÊN TRUYỀN
      </div>
      <div style="display: inline-block; padding: 3px 12px; background: rgba(239, 68, 68, 0.15); border: 1px solid rgba(239, 68, 68, 0.4); border-radius: 9999px; color: #F87171; font-size: 9.5px; font-weight: 700; margin-bottom: 12px; letter-spacing: 0.5px;">
        BÁO CÁO KHOA HỌC & INTERACTIVE INFOGRAPHIC • NHIỆM VỤ 5
      </div>

      <h1 style="font-size: 26px; font-weight: 800; line-height: 1.22; letter-spacing: -0.6px; color: #FFFFFF; max-width: 620px; margin: 0 auto 10px auto;">
        LIÊN MINH GIAI CẤP, TẦNG LỚP TRONG THỜI KỲ QUÁ ĐỘ LÊN CHỦ NGHĨA XÃ HỘI Ở VIỆT NAM
      </h1>

      <p style="font-size: 11px; color: #A1A1AA; max-width: 540px; margin: 0 auto 18px auto; line-height: 1.45;">
        Bản đồ số hóa toàn diện cơ cấu xã hội - giai cấp, tính tất yếu khách quan, nội dung liên minh toàn diện, 3 nguyên tắc bất biến và chuỗi liên kết 4 Nhà thời đại 4.0.
      </p>

      <!-- Floating Pills Dial Style -->
      <div style="display: flex; justify-content: center; gap: 7px; margin-bottom: 22px;">
        <span class="chip" style="border-color: #38BDF8;"><span style="color:#38BDF8;">⚡</span> Công nhân: Tiên phong</span>
        <span class="chip" style="border-color: #34D399;"><span style="color:#34D399;">🌾</span> Nông dân: Đồng minh</span>
        <span class="chip" style="border-color: #FBBF24;"><span style="color:#FBBF24;">🔬</span> Trí thức: Đột phá</span>
        <span class="chip" style="border-color: #F87171;"><span style="color:#F87171;">💼</span> Doanh nhân: Hội nhập</span>
        <span class="chip" style="border-color: #A855F7;"><span style="color:#A855F7;">⌘</span> 100% Đồng thuận</span>
      </div>

      <!-- 4 Metric Cards -->
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; max-width: 630px; margin: 0 auto 20px auto;">
        <div class="card" style="text-align: center; padding: 10px 5px;">
          <div style="font-size: 24px; font-weight: 800; color: #FFFFFF; font-family: monospace;">4</div>
          <div style="font-size: 8.5px; font-weight: 700; color: #E4E4E7; margin-top: 2px;">Lực lượng nòng cốt</div>
          <div style="font-size: 7.5px; color: #71717A;">Công - Nông - Trí - Doanh</div>
        </div>
        <div class="card" style="text-align: center; padding: 10px 5px;">
          <div style="font-size: 24px; font-weight: 800; color: #FFFFFF; font-family: monospace;">3</div>
          <div style="font-size: 8.5px; font-weight: 700; color: #E4E4E7; margin-top: 2px;">Trụ cột nội dung</div>
          <div style="font-size: 7.5px; color: #71717A;">Kinh tế - Chính trị - Xã hội</div>
        </div>
        <div class="card" style="text-align: center; padding: 10px 5px;">
          <div style="font-size: 24px; font-weight: 800; color: #FFFFFF; font-family: monospace;">3</div>
          <div style="font-size: 8.5px; font-weight: 700; color: #E4E4E7; margin-top: 2px;">Nguyên tắc bất biến</div>
          <div style="font-size: 7.5px; color: #71717A;">Thế kiềng 3 chân vững chắc</div>
        </div>
        <div class="card" style="text-align: center; padding: 10px 5px;">
          <div style="font-size: 24px; font-weight: 800; color: #FFFFFF; font-family: monospace;">100%</div>
          <div style="font-size: 8.5px; font-weight: 700; color: #E4E4E7; margin-top: 2px;">Hài hòa lợi ích</div>
          <div style="font-size: 7.5px; color: #71717A;">Động lực vật chất trực tiếp</div>
        </div>
      </div>

      <!-- Member Allocation Box -->
      <div class="card" style="max-width: 630px; margin: 0 auto; text-align: left; padding: 11px 14px;">
        <div style="font-size: 9px; font-family: monospace; color: #A1A1AA; margin-bottom: 6px; text-transform: uppercase;">
          ĐƠN VỊ THỰC HIỆN: NHÓM 1 • TRƯỞNG NHÓM: ĐÀO ĐỨC MINH
        </div>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; font-size: 8px; color: #D4D4D8;">
          <div>• <b>Trần Hải Đăng:</b> GCCN & Nông dân</div>
          <div>• <b>Nguyễn Văn Nam:</b> Tính tất yếu 2 góc độ</div>
          <div>• <b>Bùi Minh Lâm:</b> Liên minh Kinh tế</div>
          <div>• <b>Nguyễn Viết Ngọc Duy:</b> Chính trị - Xã hội</div>
          <div>• <b>Trần Viết Cường:</b> 3 Nguyên tắc bất biến</div>
          <div>• <b>Lưu Thế An:</b> Chuỗi giá trị 4 Nhà</div>
          <div>• <b>Đặng Quốc Khánh:</b> Nông nghiệp 4.0 & Case</div>
          <div>• <b>Nguyễn Đức Anh:</b> Biên tập & Đồ họa</div>
          <div style="color: #FBBF24;">• <b>Đào Đức Minh:</b> Thiết kế & Điều phối</div>
        </div>
      </div>
    </div>

    <div class="footer-bar">
      <span>GIÁO TRÌNH CHỦ NGHĨA XÃ HỘI KHOA HỌC (BỘ GD&ĐT 2021) • ĐẠI HỌC QUỐC GIA</span>
      <span class="page-num">TRANG 1 / 5</span>
    </div>
  </div>

  <!-- ======================================================== -->
  <!-- TRANG 2: CƠ CẤU XÃ HỘI - GIAI CẤP & 4 LỰC LƯỢNG NÒNG CỐT -->
  <!-- ======================================================== -->
  <div class="page">
    <div class="header-bar">
      <div class="brand">
        <div class="monogram">1</div>
        <span class="brand-title">CHUYÊN ĐỀ 1: CƠ CẤU XÃ HỘI - GIAI CẤP VÀ 4 LỰC LƯỢNG NÒNG CỐT</span>
      </div>
      <div class="deadline-badge">VỊ TRÍ TRUNG TÂM & QUY LUẬT BIẾN ĐỔI</div>
    </div>

    <div style="display: flex; flex-direction: column; gap: 8.5mm; margin: auto 0;">
      <!-- Theory Overview Box -->
      <div class="card" style="border-left: 3px solid #F59E0B; padding: 10px 14px;">
        <div style="font-size: 11px; font-weight: 700; color: #FFFFFF; margin-bottom: 4px;">
          1. Khái niệm & Vị trí trung tâm của Cơ cấu xã hội - giai cấp
        </div>
        <p style="font-size: 8.8px; color: #D4D4D8; line-height: 1.45;">
          <b>Cơ cấu xã hội - giai cấp</b> là hệ thống các giai cấp, tầng lớp xã hội tồn tại khách quan trong một chế độ xã hội nhất định, cùng mối quan hệ giữa các giai cấp, tầng lớp đó về sở hữu, địa vị chính trị và phân phối của cải. Trong hệ thống cơ cấu xã hội (dân tộc, tôn giáo, nghề nghiệp, dân số), <b>cơ cấu xã hội - giai cấp giữ vị trí trung tâm, chi phối trực tiếp các loại hình cơ cấu xã hội khác</b> vì nó gắn liền trực tiếp với quan hệ sản xuất và quyền lực nhà nước. Trong thời kỳ quá độ, cơ cấu này biến đổi đa dạng, phức tạp và đan xen do nền kinh tế nhiều thành phần quy định.
        </p>
      </div>

      <!-- 4 Core Forces Visual Cards with High-Res Images -->
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 9px;">
        
        <!-- Force 1: Công nhân -->
        <div class="card" style="padding: 9px; display: flex; gap: 10px;">
          <div style="width: 82px; height: 95px; border-radius: 8px; overflow: hidden; position: relative; flex-shrink: 0;">
            <img src="{img_cn}" style="width: 100%; height: 100%; object-fit: cover;" />
            <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);"></div>
          </div>
          <div style="display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 2px;">
                <span style="font-size: 10.5px; font-weight: 700; color: #FFFFFF;">Giai cấp Công nhân</span>
                <span class="badge badge-red">Lãnh đạo</span>
              </div>
              <div style="font-size: 7.5px; font-family: monospace; color: #38BDF8; margin-bottom: 4px;">PTSX TIÊN TIẾN • TỰ ĐỘNG HÓA 4.0</div>
              <p style="font-size: 7.8px; color: #A1A1AA; line-height: 1.35;">
                Giữ vai trò lãnh đạo liên minh thông qua Đảng Cộng sản. Đi đầu trong công nghiệp hóa, hiện đại hóa, làm chủ công nghệ cao, kinh tế số và liên kết với các giai tầng khác.
              </p>
            </div>
            <div style="font-size: 7.5px; font-family: monospace; color: #71717A; border-top: 1px solid #1E1E22; pt: 3px;">
              • Lợi ích: Việc làm bền vững, tiền lương công bằng, nhà ở XH.
            </div>
          </div>
        </div>

        <!-- Force 2: Nông dân -->
        <div class="card" style="padding: 9px; display: flex; gap: 10px;">
          <div style="width: 82px; height: 95px; border-radius: 8px; overflow: hidden; position: relative; flex-shrink: 0;">
            <img src="{img_nd}" style="width: 100%; height: 100%; object-fit: cover;" />
            <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);"></div>
          </div>
          <div style="display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 2px;">
                <span style="font-size: 10.5px; font-weight: 700; color: #FFFFFF;">Giai cấp Nông dân</span>
                <span class="badge badge-emerald">Đồng minh</span>
              </div>
              <div style="font-size: 7.5px; font-family: monospace; color: #34D399; margin-bottom: 4px;">LỰC LƯỢNG ĐÔNG ĐẢO • AN NINH LƯƠNG THỰC</div>
              <p style="font-size: 7.8px; color: #A1A1AA; line-height: 1.35;">
                Bạn đồng minh tự nhiên và trung thành nhất của công nhân. Chủ thể xây dựng nông thôn mới, chuyển dịch sang nông nghiệp công nghệ cao, nông nghiệp sinh thái tuần hoàn.
              </p>
            </div>
            <div style="font-size: 7.5px; font-family: monospace; color: #71717A; border-top: 1px solid #1E1E22; pt: 3px;">
              • Lợi ích: Giá nông sản ổn định, vật tư hợp lý, vốn tín dụng ưu đãi.
            </div>
          </div>
        </div>

        <!-- Force 3: Trí thức -->
        <div class="card" style="padding: 9px; display: flex; gap: 10px;">
          <div style="width: 82px; height: 95px; border-radius: 8px; overflow: hidden; position: relative; flex-shrink: 0;">
            <img src="{img_tt}" style="width: 100%; height: 100%; object-fit: cover;" />
            <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);"></div>
          </div>
          <div style="display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 2px;">
                <span style="font-size: 10.5px; font-weight: 700; color: #FFFFFF;">Đội ngũ Trí thức</span>
                <span class="badge badge-blue">Đột phá R&D</span>
              </div>
              <div style="font-size: 7.5px; font-family: monospace; color: #FBBF24; margin-bottom: 4px;">SÁNG TẠO TRI THỨC • CẦU NỐI CÔNG NGHỆ</div>
              <p style="font-size: 7.8px; color: #A1A1AA; line-height: 1.35;">
                Tầng lớp lao động trí óc đặc biệt, quyết định việc nghiên cứu và ứng dụng KH&CN. Là cầu nối đưa tiến bộ thế giới vào quy trình sản xuất của công nhân và ruộng đồng của nông dân.
              </p>
            </div>
            <div style="font-size: 7.5px; font-family: monospace; color: #71717A; border-top: 1px solid #1E1E22; pt: 3px;">
              • Lợi ích: Tự do học thuật, trọng dụng nhân tài, bảo hộ sở hữu trí tuệ.
            </div>
          </div>
        </div>

        <!-- Force 4: Doanh nhân -->
        <div class="card" style="padding: 9px; display: flex; gap: 10px;">
          <div style="width: 82px; height: 95px; border-radius: 8px; overflow: hidden; position: relative; flex-shrink: 0;">
            <img src="{img_dn}" style="width: 100%; height: 100%; object-fit: cover;" />
            <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);"></div>
          </div>
          <div style="display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 2px;">
                <span style="font-size: 10.5px; font-weight: 700; color: #FFFFFF;">Đội ngũ Doanh nhân</span>
                <span class="badge badge-purple">Hội nhập</span>
              </div>
              <div style="font-size: 7.5px; font-family: monospace; color: #C084FC; margin-bottom: 4px;">QUẢN TRỊ THỊ TRƯỜNG • CHUỖI CUNG ỨNG</div>
              <p style="font-size: 7.8px; color: #A1A1AA; line-height: 1.35;">
                Tổ chức sản xuất kinh doanh trong nền KTTT định hướng XHCN. Huy động nguồn lực vốn, tạo việc làm cho công nhân, bao tiêu nông sản và đưa sản phẩm Việt vươn ra toàn cầu.
              </p>
            </div>
            <div style="font-size: 7.5px; font-family: monospace; color: #71717A; border-top: 1px solid #1E1E22; pt: 3px;">
              • Lợi ích: Môi trường kinh doanh bình đẳng, bảo đảm quyền tài sản.
            </div>
          </div>
        </div>

      </div>

      <!-- Historical Law Summary -->
      <div class="card" style="background: #111114; padding: 9px 12px; display: flex; justify-content: space-between; align-items: center;">
        <span style="font-size: 8.5px; color: #D4D4D8;">
          <b>Quy luật biến đổi:</b> Cơ cấu XH-GC biến đổi theo sự chuyển dịch kinh tế (tăng tỷ trọng công nghiệp - dịch vụ, giảm nông nghiệp).
        </span>
        <span class="badge badge-amber">QUY LUẬT KHÁCH QUAN</span>
      </div>
    </div>

    <div class="footer-bar">
      <span>CHƯƠNG 5 • GIÁO TRÌNH BỘ GIÁO DỤC VÀ ĐÀO TẠO (2021)</span>
      <span class="page-num">TRANG 2 / 5</span>
    </div>
  </div>

  <!-- ======================================================== -->
  <!-- TRANG 3: TÍNH TẤT YẾU KHÁCH QUAN & NỘI DUNG TOÀN DIỆN -->
  <!-- ======================================================== -->
  <div class="page">
    <div class="header-bar">
      <div class="brand">
        <div class="monogram">1</div>
        <span class="brand-title">CHUYÊN ĐỀ 2 & 3: TÍNH TẤT YẾU VÀ NỘI DUNG LIÊN MINH TOÀN DIỆN</span>
      </div>
      <div class="deadline-badge">QUY LUẬT VẬN ĐỘNG & 3 TRỤ CỘT</div>
    </div>

    <div style="display: flex; flex-direction: column; gap: 7mm; margin: auto 0;">
      <!-- Phần 1: Tính tất yếu khách quan -->
      <div>
        <div style="font-size: 9px; font-family: monospace; color: #F59E0B; text-transform: uppercase; margin-bottom: 4px;">
          PHẦN I • TÍNH TẤT YẾU KHÁCH QUAN CỦA KHỐI LIÊN MINH
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 9px;">
          <div class="card">
            <div class="card-title"><span style="color:#FBBF24;">📈</span> 1. Dưới góc độ KINH TẾ (Khách quan, quyết định)</div>
            <p style="font-size: 8px; color: #D4D4D8; line-height: 1.4;">
              • <b>Phân công lao động lớn:</b> Quá trình CNH, HĐH đòi hỏi công nghiệp, nông nghiệp, dịch vụ và KH&CN không thể phát triển biệt lập mà gắn kết hữu cơ thành chuỗi giá trị.<br>
              • <b>Khắc phục manh mún:</b> Chuyển nền sản xuất tiểu nông lên sản xuất hàng hóa lớn có tính cạnh tranh cao.<br>
              • <b>Chất kết dính vật chất:</b> Thỏa mãn nhu cầu và lợi ích kinh tế thiết thân của các giai cấp.
            </p>
          </div>
          <div class="card">
            <div class="card-title"><span style="color:#F87171;">🏛️</span> 2. Dưới góc độ CHÍNH TRỊ - XÃ HỘI (Cơ sở chế độ)</div>
            <p style="font-size: 8px; color: #D4D4D8; line-height: 1.4;">
              • <b>Nền tảng Nhà nước XHCN:</b> Khối liên minh là cội nguồn sức mạnh và tính chính danh của Nhà nước của dân, do dân, vì dân do Đảng Cộng sản lãnh đạo.<br>
              • <b>Khối đại đoàn kết:</b> Tập hợp hơn 90% dân số thành lực lượng cách mạng to lớn bảo vệ thành quả hòa bình.<br>
              • <b>Bảo vệ Tổ quốc:</b> Đập tan âm mưu "Diễn biến hòa bình", chia rẽ giai tầng của các thế lực phản động.
            </p>
          </div>
        </div>
      </div>

      <!-- Quote Box Lênin & Bác Hồ -->
      <div class="card" style="background: rgba(251, 191, 36, 0.05); border: 1px dashed rgba(251, 191, 36, 0.3); padding: 7px 12px;">
        <p style="font-size: 7.8px; color: #FDE68A; line-height: 1.35; font-style: italic;">
          • <b>V.I. Lênin khẳng định:</b> "Nếu không liên minh với nông dân thì không thể có được chính quyền của giai cấp vô sản, không thể nghĩ đến việc duy trì chính quyền đó được..."<br>
          • <b>Chủ tịch Hồ Chí Minh dạy:</b> "Đại đoàn kết toàn dân tộc là đường lối chiến lược của cách mạng Việt Nam; là nguồn sức mạnh, động lực chủ yếu bảo đảm thắng lợi bền vững của sự nghiệp xây dựng và bảo vệ Tổ quốc."
        </p>
      </div>

      <!-- Phần 2: Nội dung toàn diện (3 Trụ cột) -->
      <div>
        <div style="font-size: 9px; font-family: monospace; color: #38BDF8; text-transform: uppercase; margin-bottom: 4px;">
          PHẦN II • NỘI DUNG LIÊN MINH TOÀN DIỆN TRONG THỜI KỲ QUÁ ĐỘ
        </div>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px;">
          <!-- Kinh tế -->
          <div class="card" style="border-top: 2px solid #F59E0B;">
            <div style="font-size: 10px; font-weight: 700; color: #FFFFFF; margin-bottom: 3px;">1. Nội dung Kinh tế</div>
            <span class="badge badge-amber" style="margin-bottom: 5px;">Quyết định nhất</span>
            <p style="font-size: 7.8px; color: #A1A1AA; line-height: 1.35;">
              Tạo cơ sở vật chất - kỹ thuật cho liên minh. Hợp tác phân công lao động, phát triển kinh tế thị trường định hướng XHCN; liên kết chuỗi sản xuất 4 Nhà; kết hợp hài hòa lợi ích kinh tế thiết thân.
            </p>
          </div>

          <!-- Chính trị -->
          <div class="card" style="border-top: 2px solid #EF4444;">
            <div style="font-size: 10px; font-weight: 700; color: #FFFFFF; margin-bottom: 3px;">2. Nội dung Chính trị</div>
            <span class="badge badge-red" style="margin-bottom: 5px;">Định hướng XHCN</span>
            <p style="font-size: 7.8px; color: #A1A1AA; line-height: 1.35;">
              Giữ vững vai trò lãnh đạo tuyệt đối của Đảng Cộng sản Việt Nam đối với liên minh; củng cố Nhà nước pháp quyền XHCN; bảo vệ vững chắc chủ quyền và an ninh quốc gia.
            </p>
          </div>

          <!-- Văn hóa - Xã hội -->
          <div class="card" style="border-top: 2px solid #38BDF8;">
            <div style="font-size: 10px; font-weight: 700; color: #FFFFFF; margin-bottom: 3px;">3. Văn hóa - Xã hội</div>
            <span class="badge badge-blue" style="margin-bottom: 5px;">Mục tiêu vì con người</span>
            <p style="font-size: 7.8px; color: #A1A1AA; line-height: 1.35;">
              Xây dựng nền văn hóa tiên tiến, đậm đà bản sắc dân tộc; nâng cao dân trí, đào tạo nhân lực chất lượng cao; thực hiện an sinh xã hội, giảm nghèo bền vững và công bằng xã hội.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-bar">
      <span>HỌC PHẦN CHỦ NGHĨA XÃ HỘI KHOA HỌC • NHÓM 1</span>
      <span class="page-num">TRANG 3 / 5</span>
    </div>
  </div>

  <!-- ======================================================== -->
  <!-- TRANG 4: BA NGUYÊN TẮC BẤT BIẾN & CHUỖI 4 NHÀ THỜI ĐẠI 4.0 -->
  <!-- ======================================================== -->
  <div class="page">
    <div class="header-bar">
      <div class="brand">
        <div class="monogram">1</div>
        <span class="brand-title">CHUYÊN ĐỀ 4 & 5: BA NGUYÊN TẮC BẤT BIẾN VÀ CHUỖI LIÊN KẾT 4 NHÀ 4.0</span>
      </div>
      <div class="deadline-badge">THẾ KIỀNG 3 CHÂN & THỰC TIỄN VIỆT NAM</div>
    </div>

    <div style="display: flex; flex-direction: column; gap: 7mm; margin: auto 0;">
      <!-- 3 Nguyên tắc -->
      <div>
        <div style="font-size: 9px; font-family: monospace; color: #EF4444; text-transform: uppercase; margin-bottom: 4px;">
          PHẦN I • BA NGUYÊN TẮC CƠ BẢN CỦA LIÊN MINH (THẾ KIỀNG 3 CHÂN)
        </div>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px;">
          <div class="card">
            <div style="font-size: 9.5px; font-weight: 700; color: #FFFFFF; margin-bottom: 2px;">Nguyên tắc 1: Vai trò lãnh đạo</div>
            <span class="badge badge-red" style="margin-bottom: 4px;">Chính trị tối cao</span>
            <p style="font-size: 7.7px; color: #A1A1AA; line-height: 1.35;">
              Bảo đảm sự lãnh đạo của GCCN thông qua Đảng Cộng sản. Lãnh đạo không vì đặc quyền mà để định hướng liên minh theo mục tiêu độc lập dân tộc & CNXH. Mất vai trò lãnh đạo là mất phương hướng.
            </p>
          </div>
          <div class="card">
            <div style="font-size: 9.5px; font-weight: 700; color: #FFFFFF; margin-bottom: 2px;">Nguyên tắc 2: Hài hòa lợi ích</div>
            <span class="badge badge-amber" style="margin-bottom: 4px;">Động lực trực tiếp</span>
            <p style="font-size: 7.7px; color: #A1A1AA; line-height: 1.35;">
              Coi trọng lợi ích kinh tế thiết thân của các giai cấp. Hài hòa lợi ích người lao động, doanh nghiệp và Nhà nước. Coi nhẹ lợi ích kinh tế thì liên minh chỉ là khẩu hiệu hình thức, giả tạo.
            </p>
          </div>
          <div class="card">
            <div style="font-size: 9.5px; font-weight: 700; color: #FFFFFF; margin-bottom: 2px;">Nguyên tắc 3: Tính tự nguyện</div>
            <span class="badge badge-emerald" style="margin-bottom: 4px;">Phương thức dân chủ</span>
            <p style="font-size: 7.7px; color: #A1A1AA; line-height: 1.35;">
              Tuyệt đối không dùng mệnh lệnh hành chính gượng ép. Liên minh dựa trên nhận thức tự giác về quyền lợi và nghĩa vụ chung. Áp đặt cưỡng bức sẽ gây rạn nứt khối đại đoàn kết.
            </p>
          </div>
        </div>
      </div>

      <!-- Mô hình 4 Nhà với ảnh logistics -->
      <div>
        <div style="font-size: 9px; font-family: monospace; color: #34D399; text-transform: uppercase; margin-bottom: 4px;">
          PHẦN II • CHUỖI LIÊN KẾT "4 NHÀ" THỜI ĐẠI 4.0 TẠI VIỆT NAM
        </div>
        <div class="card" style="display: flex; gap: 12px; padding: 10px;">
          <div style="width: 140px; height: 110px; border-radius: 8px; overflow: hidden; flex-shrink: 0; position: relative;">
            <img src="{img_logistics}" style="width: 100%; height: 100%; object-fit: cover;" />
            <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);"></div>
            <div style="position: absolute; bottom: 5px; left: 6px; font-size: 7.5px; font-family: monospace; color: #E4E4E7;">LOGISTICS & CHẾ BIẾN SÂU</div>
          </div>
          <div style="display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <div style="font-size: 11px; font-weight: 700; color: #FFFFFF; margin-bottom: 4px;">Cơ chế phối hợp 4 bên trong chuỗi giá trị:</div>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4px; font-size: 7.8px; color: #D4D4D8;">
                <div>• <b>Nhà nước:</b> Kiến tạo thể chế, quy hoạch vùng nguyên liệu, cấp vốn ưu đãi.</div>
                <div>• <b>Nhà khoa học:</b> Chuyển giao giống thuần chủng, công nghệ IoT, chuẩn VietGAP.</div>
                <div>• <b>Doanh nghiệp:</b> Đầu tư chế biến sâu, chuỗi logistics lạnh, ký hợp đồng bao tiêu.</div>
                <div>• <b>Nhà nông:</b> Tổ chức HTX kiểu mới, canh tác quy mô lớn, tuân thủ an toàn.</div>
              </div>
            </div>
            <div style="font-size: 7.5px; color: #A1A1AA; border-top: 1px solid #222226; pt: 3px;">
              <b>3 Điển hình thực tế:</b> Đề án 1 triệu ha lúa ST25 (ĐBSCL) • Cà phê Tây Nguyên chế biến sâu (>5.4 tỷ USD) • Tổ hợp sữa công nghệ cao TH True Milk / Vinamilk.
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-bar">
      <span>MÔ HÌNH VẬN HÀNH THỰC TIỄN • KINH TẾ NÔNG NGHIỆP HIỆN ĐẠI</span>
      <span class="page-num">TRANG 4 / 5</span>
    </div>
  </div>

  <!-- ======================================================== -->
  <!-- TRANG 5: PHƯƠNG HƯỚNG ĐẠI HỘI XIII & BẢNG TRA CỨU HỌC PHẦN -->
  <!-- ======================================================== -->
  <div class="page">
    <div class="header-bar">
      <div class="brand">
        <div class="monogram">1</div>
        <span class="brand-title">CHUYÊN ĐỀ 6 & 7: GIẢI PHÁP ĐẠI HỘI XIII, MA TRẬN ĐỐI SÁNH & KẾT LUẬN</span>
      </div>
      <div class="deadline-badge">VĂN KIỆN ĐẠI HỘI XIII & TỔNG KẾT HỌC PHẦN</div>
    </div>

    <div style="display: flex; flex-direction: column; gap: 6mm; margin: auto 0;">
      <!-- 5 Giải pháp Đại hội XIII -->
      <div>
        <div style="font-size: 9px; font-family: monospace; color: #C084FC; text-transform: uppercase; margin-bottom: 4px;">
          NĂM GIẢI PHÁP CỦA ĐẠI HỘI XIII CỦNG CỐ KHỐI LIÊN MINH
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 6px; font-size: 7.7px; color: #D4D4D8;">
          <div class="card" style="padding: 7px 10px;">
            <b>1. Đẩy mạnh CNH, HĐH gắn với CMCN 4.0:</b> Chuyển dịch cơ cấu lao động theo hướng giảm nhanh lao động nông nghiệp thủ công, tăng lao động công nghiệp kỹ thuật cao và dịch vụ tri thức.
          </div>
          <div class="card" style="padding: 7px 10px;">
            <b>2. Hoàn thiện thể chế KTTT định hướng XHCN:</b> Bảo vệ quyền sở hữu hợp pháp, bình đẳng giữa các thành phần kinh tế, phân phối công bằng thành quả phát triển, hóa giải mâu thuẫn lợi ích.
          </div>
          <div class="card" style="padding: 7px 10px;">
            <b>3. Đổi mới hoạt động Mặt trận & các đoàn thể:</b> Khắc phục hành chính hóa; thực hiện hiệu quả phương châm "Dân biết, dân bàn, dân làm, dân kiểm tra, dân giám sát, dân thụ hưởng".
          </div>
          <div class="card" style="padding: 7px 10px;">
            <b>4. Xây dựng Đảng cầm quyền trong sạch vững mạnh:</b> Nâng cao năng lực lãnh đạo, ngăn chặn suy thoái tư tưởng chính trị, đạo đức, lối sống; đẩy lùi tham nhũng, lãng phí.
          </div>
        </div>
        <div class="card" style="padding: 6px 10px; margin-top: 5px; font-size: 7.7px; color: #D4D4D8;">
          <b>5. Nâng cao chất lượng nguồn nhân lực & văn hóa:</b> Phổ cập kỹ năng số cho công nhân, chuyển giao kỹ thuật cho nông dân, trọng dụng nhân tài trí thức và hỗ trợ doanh nhân khởi nghiệp sáng tạo.
        </div>
      </div>

      <!-- Comparison Matrix Table -->
      <div>
        <div style="font-size: 9px; font-family: monospace; color: #E4E4E7; text-transform: uppercase; margin-bottom: 4px;">
          MA TRẬN ĐỐI SÁNH CỐT LÕI 4 LỰC LƯỢNG
        </div>
        <table style="width: 100%; border-collapse: collapse; font-size: 7.5px; text-align: left; background: #0C0C0E; border: 1px solid #222226; border-radius: 8px; overflow: hidden;">
          <thead>
            <tr style="background: #18181B; color: #E4E4E7; border-bottom: 1px solid #27272A;">
              <th style="padding: 4px 6px;">Lực lượng</th>
              <th style="padding: 4px 6px;">Vị trí chính trị</th>
              <th style="padding: 4px 6px;">Nhiệm vụ trong liên minh</th>
              <th style="padding: 4px 6px;">Lợi ích kỳ vọng</th>
            </tr>
          </thead>
          <tbody style="color: #A1A1AA;">
            <tr style="border-bottom: 1px solid #1E1E22;">
              <td style="padding: 4px 6px; font-weight: bold; color: #FFFFFF;">Công nhân</td>
              <td style="padding: 4px 6px; color: #F87171;">Lãnh đạo liên minh</td>
              <td style="padding: 4px 6px;">Đi đầu CNH, làm chủ công nghệ và số hóa</td>
              <td style="padding: 4px 6px;">Lương công bằng, an toàn LĐ, nhà ở xã hội</td>
            </tr>
            <tr style="border-bottom: 1px solid #1E1E22;">
              <td style="padding: 4px 6px; font-weight: bold; color: #FFFFFF;">Nông dân</td>
              <td style="padding: 4px 6px; color: #34D399;">Đồng minh chiến lược</td>
              <td style="padding: 4px 6px;">Sản xuất nông sản lớn, giữ an ninh lương thực</td>
              <td style="padding: 4px 6px;">Giá nông sản ổn định, hỗ trợ vốn, bảo hiểm</td>
            </tr>
            <tr style="border-bottom: 1px solid #1E1E22;">
              <td style="padding: 4px 6px; font-weight: bold; color: #FFFFFF;">Trí thức</td>
              <td style="padding: 4px 6px; color: #38BDF8;">Hạt nhân sáng tạo</td>
              <td style="padding: 4px 6px;">Chuyển giao giải pháp R&D, tư vấn chính sách</td>
              <td style="padding: 4px 6px;">Tự do học thuật, bảo hộ quyền tác giả/bằng sáng chế</td>
            </tr>
            <tr>
              <td style="padding: 4px 6px; font-weight: bold; color: #FFFFFF;">Doanh nhân</td>
              <td style="padding: 4px 6px; color: #C084FC;">Quản trị thị trường</td>
              <td style="padding: 4px 6px;">Tạo việc làm, bao tiêu nông sản, vươn ra quốc tế</td>
              <td style="padding: 4px 6px;">Môi trường kinh doanh bình đẳng, hạ tầng logistics</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Conclusion & References Box -->
      <div class="card" style="border-left: 3px solid #34D399; padding: 7px 10px; font-size: 7.5px; color: #D4D4D8;">
        <b>KẾT LUẬN:</b> Khối liên minh là quy luật chiến lược bảo đảm thắng lợi của thời kỳ quá độ lên CNXH tại Việt Nam. Kết hợp hài hòa lợi ích kinh tế, phát huy sự lãnh đạo của Đảng và chuyển đổi số đồng bộ sẽ tạo sức mạnh tổng hợp đưa dân tộc bước vào kỷ nguyên vươn mình phồn vinh, hạnh phúc.<br>
        <span style="color: #71717A;">Tài liệu tham khảo: Giáo trình CNXHKH (Bộ GD&ĐT 2021) • Văn kiện Đại hội XIII (NXB CTQG Sự thật 2021) • V.I. Lênin Toàn tập (Tập 38, 39) • Hồ Chí Minh Toàn tập.</span>
      </div>
    </div>

    <div class="footer-bar">
      <span>BÁO CÁO KHOA HỌC HOÀN CHỈNH • HẠN NỘP TRƯỚC 17H00 NGÀY 12/10/2026</span>
      <span class="page-num">TRANG 5 / 5</span>
    </div>
  </div>

</body>
</html>
"""

with open("scripts/infographic_report.html", "w", encoding="utf-8") as f:
    f.write(html_content)

print("Created scripts/infographic_report.html successfully!")

# Run Chrome Headless to compile into public/NHIEM_VU_5_NHOM_1_LIEN_MINH_GIAI_CAP.pdf
chrome_path = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
html_abs_path = os.path.abspath("scripts/infographic_report.html")
pdf_dest_path = os.path.abspath("public/NHIEM_VU_5_NHOM_1_LIEN_MINH_GIAI_CAP.pdf")

cmd = [
    chrome_path,
    "--headless=new",
    "--disable-gpu",
    "--run-all-compositor-stages-before-draw",
    "--no-pdf-header-footer",
    f"--print-to-pdf={pdf_dest_path}",
    f"file:///{html_abs_path}"
]

print("Executing Chrome headless PDF generation...")
result = subprocess.run(cmd, capture_output=True, text=True)
print("Return code:", result.returncode)
if os.path.exists(pdf_dest_path):
    print("PDF generated successfully! File size:", os.path.getsize(pdf_dest_path), "bytes")
else:
    print("PDF generation failed!")
