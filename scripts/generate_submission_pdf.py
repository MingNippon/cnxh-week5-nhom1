import pymupdf
import os

def create_academic_pdf():
    pdf_path = "public/NHIEM_VU_5_NHOM_1_LIEN_MINH_GIAI_CAP.pdf"
    os.makedirs("public", exist_ok=True)
    doc = pymupdf.open()
    
    font_regular = "C:/Windows/Fonts/arial.ttf"
    font_bold = "C:/Windows/Fonts/arialbd.ttf"
    font_italic = "C:/Windows/Fonts/ariali.ttf"
    
    # Page dimensions A4: 595 x 842 pt
    W, H = 595, 842
    
    # ================= PAGE 1: TRANG BÌA CHÍNH THỨC =================
    p1 = doc.new_page(width=W, height=H)
    
    # Outer elegant double border
    p1.draw_rect(pymupdf.Rect(25, 25, W - 25, H - 25), color=(0.1, 0.1, 0.1), width=1.5)
    p1.draw_rect(pymupdf.Rect(28, 28, W - 28, H - 28), color=(0.7, 0.5, 0.1), width=0.8)
    
    # Header institution
    p1.insert_text((W/2 - 170, 75), "BỘ GIÁO DỤC VÀ ĐÀO TẠO — ĐẠI HỌC QUỐC GIA", fontfile=font_bold, fontsize=11, color=(0.1, 0.1, 0.1))
    p1.insert_text((W/2 - 130, 92), "HỌC VIỆN BÁO CHÍ VÀ TUYÊN TRUYỀN", fontfile=font_bold, fontsize=11, color=(0.1, 0.1, 0.1))
    p1.insert_text((W/2 - 95, 107), "KHOA CHỦ NGHĨA XÃ HỘI KHOA HỌC", fontfile=font_regular, fontsize=10, color=(0.3, 0.3, 0.3))
    
    p1.draw_line((W/2 - 50, 118), (W/2 + 50, 118), color=(0.7, 0.5, 0.1), width=1)
    
    # Badge
    p1.draw_rect(pymupdf.Rect(W/2 - 120, 160, W/2 + 120, 185), color=(0.8, 0.2, 0.2), fill=(0.98, 0.94, 0.94), width=1)
    p1.insert_text((W/2 - 105, 177), "BÁO CÁO KHOA HỌC & INFOGRAPHIC", fontfile=font_bold, fontsize=10, color=(0.7, 0.1, 0.1))
    
    # Title
    p1.insert_text((W/2 - 180, 230), "NHIỆM VỤ 5: TÌM HIỂU VỀ LIÊN MINH GIAI CẤP", fontfile=font_bold, fontsize=16, color=(0.05, 0.05, 0.05))
    
    # Subtitle
    p1.insert_text((W/2 - 235, 270), "CƠ CẤU XÃ HỘI - GIAI CẤP VÀ LIÊN MINH GIAI CẤP, TẦNG LỚP", fontfile=font_bold, fontsize=13, color=(0.7, 0.45, 0.05))
    p1.insert_text((W/2 - 220, 292), "TRONG THỜI KỲ QUÁ ĐỘ LÊN CHỦ NGHĨA XÃ HỘI Ở VIỆT NAM", fontfile=font_bold, fontsize=13, color=(0.7, 0.45, 0.05))
    
    p1.insert_text((W/2 - 165, 325), "(Học phần: Chủ nghĩa xã hội khoa học — Chương 5)", fontfile=font_italic, fontsize=11, color=(0.35, 0.35, 0.35))
    
    # Decorative box in center
    p1.draw_rect(pymupdf.Rect(50, 360, W - 50, 520), color=(0.85, 0.85, 0.85), fill=(0.98, 0.98, 0.99), width=1)
    p1.insert_text((70, 385), "CÁC TRỌNG TÂM NGHIÊN CỨU THEO YÊU CẦU ĐỀ BÀI:", fontfile=font_bold, fontsize=11, color=(0.1, 0.1, 0.1))
    
    topics = [
      "1. Tính tất yếu khách quan của liên minh (Góc độ Kinh tế & Góc độ Chính trị - Xã hội)",
      "2. Cơ cấu xã hội - giai cấp và 4 lực lượng nòng cốt (Công nhân - Nông dân - Trí thức - Doanh nhân)",
      "3. Nội dung toàn diện của liên minh trong thời kỳ quá độ (Kinh tế, Chính trị, Văn hóa - Xã hội)",
      "4. Ba nguyên tắc cơ bản bất biến bảo đảm khối liên minh (Thế kiềng 3 chân vững chắc)",
      "5. Thực tiễn chuỗi liên kết giá trị 4 Nhà thời đại 4.0 và các điển hình kinh tế tại Việt Nam",
      "6. Phương hướng & giải pháp xây dựng, củng cố khối liên minh vững chắc theo Đại hội XIII"
    ]
    for idx, t in enumerate(topics):
        p1.insert_text((75, 410 + idx * 18), t, fontfile=font_regular, fontsize=9.5, color=(0.2, 0.2, 0.2))
        
    # Student information box
    p1.draw_rect(pymupdf.Rect(50, 550, W - 50, 740), color=(0.8, 0.8, 0.8), fill=(1, 1, 1), width=1)
    p1.insert_text((70, 575), "THÔNG TIN ĐƠN VỊ THỰC HIỆN: NHÓM 1", fontfile=font_bold, fontsize=11, color=(0.1, 0.1, 0.1))
    
    p1.insert_text((70, 600), "• Trưởng nhóm: ĐÀO ĐỨC MINH (Điều phối dự án & Thiết kế hệ thống)", fontfile=font_bold, fontsize=10, color=(0.15, 0.15, 0.15))
    
    members = [
      ("1. Trần Hải Đăng", "Nghiên cứu cơ cấu Giai cấp Công nhân & Nông dân"),
      ("2. Nguyễn Văn Nam", "Phân tích tính tất yếu Kinh tế & Chính trị - Xã hội"),
      ("3. Bùi Minh Lâm", "Nghiên cứu nội dung liên minh Kinh tế thời kỳ quá độ"),
      ("4. Nguyễn Viết Ngọc Duy", "Nghiên cứu nội dung liên minh Chính trị & Văn hóa - Xã hội"),
      ("5. Trần Viết Cường", "Phân tích 3 nguyên tắc cơ bản của khối liên minh"),
      ("6. Lưu Thế An", "Xây dựng mô hình chuỗi giá trị 4 Nhà thời đại 4.0"),
      ("7. Đặng Quốc Khánh", "Khảo sát thực tiễn nông nghiệp công nghệ cao & logistics"),
      ("8. Nguyễn Đức Anh", "Biên tập tư liệu giáo trình & Đồ họa Infographic"),
    ]
    for idx, (m_name, m_task) in enumerate(members):
        y_pos = 622 + idx * 14
        p1.insert_text((75, y_pos), f"• {m_name}:", fontfile=font_bold, fontsize=8.5, color=(0.25, 0.25, 0.25))
        p1.insert_text((215, y_pos), m_task, fontfile=font_regular, fontsize=8.5, color=(0.4, 0.4, 0.4))
        
    # Deadline & Year
    p1.insert_text((W/2 - 140, 770), "HẠN NỘP SẢN PHẨM: TRƯỚC 17H00 NGÀY 12/10/2026", fontfile=font_bold, fontsize=10, color=(0.75, 0.1, 0.1))
    p1.insert_text((W/2 - 50, 790), "HÀ NỘI — 2026", fontfile=font_bold, fontsize=10, color=(0.2, 0.2, 0.2))

    # ================= PAGE 2: NỘI DUNG PHẦN 1 & PHẦN 2 =================
    p2 = doc.new_page(width=W, height=H)
    p2.draw_rect(pymupdf.Rect(30, 30, W - 30, H - 30), color=(0.85, 0.85, 0.85), width=0.8)
    
    # Header bar
    p2.draw_rect(pymupdf.Rect(40, 40, W - 40, 65), color=(0.1, 0.1, 0.1), fill=(0.08, 0.1, 0.15), width=1)
    p2.insert_text((55, 57), "PHẦN I: CƠ CẤU XÃ HỘI - GIAI CẤP VÀ 4 LỰC LƯỢNG NÒNG CỐT", fontfile=font_bold, fontsize=11, color=(1, 1, 1))
    
    # 1.1 Khái niệm & vị trí
    p2.insert_text((45, 85), "1. Khái niệm và vị trí của cơ cấu xã hội - giai cấp:", fontfile=font_bold, fontsize=10, color=(0.1, 0.1, 0.1))
    text_1_1 = (
      "Cơ cấu xã hội - giai cấp là hệ thống các giai cấp, tầng lớp xã hội tồn tại khách quan trong một chế độ "
      "xã hội nhất định, cùng với mối quan hệ giữa các giai cấp, tầng lớp đó về sở hữu, địa vị chính trị và phân phối. "
      "Trong hệ thống cơ cấu xã hội (dân tộc, tôn giáo, nghề nghiệp, dân số), cơ cấu xã hội - giai cấp giữ vị trí trung tâm, "
      "chi phối trực tiếp đến các cơ cấu xã hội khác bởi nó gắn liền trực tiếp với quan hệ sản xuất và phương thức phân phối."
    )
    p2.insert_textbox(pymupdf.Rect(45, 92, W - 45, 140), text_1_1, fontfile=font_regular, fontsize=9, color=(0.2, 0.2, 0.2))
    
    # 1.2 4 Lực lượng
    p2.insert_text((45, 150), "2. Bốn lực lượng nòng cốt trong thời kỳ quá độ lên CNXH ở Việt Nam:", fontfile=font_bold, fontsize=10, color=(0.1, 0.1, 0.1))
    
    forces = [
      ("GIAI CẤP CÔNG NHÂN (Lực lượng lãnh đạo):",
       "Là giai cấp đại biểu cho phương thức sản xuất tiên tiến, giữ vai trò lãnh đạo khối liên minh thông qua đội tiên phong "
       "là Đảng Cộng sản Việt Nam. Công nhân hiện đại đi đầu trong quá trình công nghiệp hóa, hiện đại hóa, tự động hóa và kinh tế số."),
      ("GIAI CẤP NÔNG DÂN (Đồng minh chiến lược tự nhiên):",
       "Là lực lượng đông đảo nhất trong xã hội, bạn đồng minh tự nhiên và trung thành nhất của giai cấp công nhân. Nông dân là chủ thể "
       "của quá trình phát triển nông nghiệp sinh thái, nông thôn mới, bảo đảm an ninh lương thực quốc gia và ổn định chính trị - xã hội."),
      ("ĐỘI NGŨ TRÍ THỨC (Lực lượng lao động sáng tạo đặc biệt):",
       "Là tầng lớp lao động trí óc đặc biệt, có vai trò quyết định trong sáng tạo tri thức, nghiên cứu và ứng dụng tiến bộ khoa học kỹ thuật, "
       "đổi mới sáng tạo. Đóng vai trò cầu nối đưa tri thức tiên tiến thế giới vào quy trình sản xuất của công nhân và nông dân."),
      ("ĐỘI NGŨ DOANH NHÂN (Lực lượng quản trị & thị trường):",
       "Là lực lượng năng động tổ chức sản xuất kinh doanh, huy động nguồn lực vốn và công nghệ trong nền kinh tế thị trường định hướng XHCN; "
       "tạo công ăn việc làm, bao tiêu nông sản và kết nối chuỗi cung ứng sản phẩm Việt Nam vươn ra thị trường quốc tế.")
    ]
    
    y_f = 168
    for f_title, f_desc in forces:
        p2.draw_rect(pymupdf.Rect(45, y_f, W - 45, y_f + 52), color=(0.88, 0.88, 0.88), fill=(0.98, 0.98, 0.98), width=0.8)
        p2.insert_text((55, y_f + 14), f_title, fontfile=font_bold, fontsize=9, color=(0.7, 0.35, 0.05))
        p2.insert_textbox(pymupdf.Rect(55, y_f + 18, W - 55, y_f + 50), f_desc, fontfile=font_regular, fontsize=8.5, color=(0.2, 0.2, 0.2))
        y_f += 58

    # Header bar Phần 2
    p2.draw_rect(pymupdf.Rect(40, 410, W - 40, 435), color=(0.1, 0.1, 0.1), fill=(0.08, 0.1, 0.15), width=1)
    p2.insert_text((55, 427), "PHẦN II: TÍNH TẤT YẾU KHÁCH QUAN CỦA KHỐI LIÊN MINH GIAI CẤP, TẦNG LỚP", fontfile=font_bold, fontsize=11, color=(1, 1, 1))
    
    p2.insert_text((45, 452), "1. Dưới góc độ KINH TẾ (Khách quan, quyết định nhất):", fontfile=font_bold, fontsize=10, color=(0.7, 0.1, 0.1))
    eco_text = (
      "• Yêu cầu của nền sản xuất lớn hiện đại: Cuộc Cách mạng công nghiệp và quá trình CNH, HĐH đòi hỏi phân công lao động xã hội sâu sắc. "
      "Công nghiệp, nông nghiệp, dịch vụ và khoa học công nghệ không thể phát triển biệt lập mà gắn kết hữu cơ thành một chuỗi giá trị thống nhất.\n"
      "• Khắc phục sự manh mún, phân tán: Liên minh giúp đưa kinh tế tiểu nông nhỏ lẻ lên sản xuất hàng hóa lớn có sức cạnh tranh cao.\n"
      "• Thỏa mãn lợi ích kinh tế thiết thân: Lợi ích kinh tế là động lực trực tiếp, là chất kết dính vật chất tự nhiên để các giai cấp tự giác gắn kết."
    )
    p2.insert_textbox(pymupdf.Rect(45, 460, W - 45, 545), eco_text, fontfile=font_regular, fontsize=8.8, color=(0.2, 0.2, 0.2))
    
    p2.insert_text((45, 560), "2. Dưới góc độ CHÍNH TRỊ - XÃ HỘI (Cơ sở bảo vệ chế độ):", fontfile=font_bold, fontsize=10, color=(0.7, 0.1, 0.1))
    pol_text = (
      "• Nền tảng chính trị của Nhà nước XHCN: Khối liên minh do Đảng Cộng sản lãnh đạo là cội nguồn sức mạnh và tính chính danh của Nhà nước của dân, do dân, vì dân.\n"
      "• Đại đoàn kết toàn dân tộc: Tập hợp hơn 90% dân số thành lực lượng cách mạng to lớn, tạo sự đồng thuận xã hội cao nhất để thực hiện mục tiêu Dân giàu, Nước mạnh.\n"
      "• Đập tan âm mưu phá hoại: Vô hiệu hóa thủ đoạn 'Diễn biến hòa bình', kích động thù hằn chia rẽ giai cấp của các thế lực phản động, giữ vững độc lập chủ quyền."
    )
    p2.insert_textbox(pymupdf.Rect(45, 568, W - 45, 655), pol_text, fontfile=font_regular, fontsize=8.8, color=(0.2, 0.2, 0.2))
    
    # Mini quote box
    p2.draw_rect(pymupdf.Rect(45, 675, W - 45, 785), color=(0.7, 0.5, 0.1), fill=(0.99, 0.98, 0.94), width=1)
    p2.insert_text((60, 698), "LUẬN ĐIỂM KINH ĐIỂN CỦA V.I. LÊNIN VÀ CHỦ TỊCH HỒ CHÍ MINH:", fontfile=font_bold, fontsize=9.5, color=(0.6, 0.35, 0.05))
    quote_text = (
      "• V.I. Lênin khẳng định: 'Chuyên chính vô sản là một hình thức đặc biệt của liên minh giai cấp giữa giai cấp vô sản, "
      "đội tiên phong của những người lao động, với đông đảo những tầng lớp lao động không phải vô sản (tiểu tư sản, tiểu chủ, nông dân, trí thức)...'\n"
      "• Chủ tịch Hồ Chí Minh dạy: 'Đại đoàn kết toàn dân tộc là đường lối chiến lược của cách mạng Việt Nam; là nguồn sức mạnh, "
      "động lực chủ yếu và là nhân tố có ý nghĩa quyết định bảo đảm thắng lợi bền vững của sự nghiệp xây dựng và bảo vệ Tổ quốc'."
    )
    p2.insert_textbox(pymupdf.Rect(60, 706, W - 60, 780), quote_text, fontfile=font_italic, fontsize=8.5, color=(0.25, 0.25, 0.25))

    # ================= PAGE 3: NỘI DUNG PHẦN 3 & PHẦN 4 =================
    p3 = doc.new_page(width=W, height=H)
    p3.draw_rect(pymupdf.Rect(30, 30, W - 30, H - 30), color=(0.85, 0.85, 0.85), width=0.8)
    
    p3.draw_rect(pymupdf.Rect(40, 40, W - 40, 65), color=(0.1, 0.1, 0.1), fill=(0.08, 0.1, 0.15), width=1)
    p3.insert_text((55, 57), "PHẦN III: NỘI DUNG LIÊN MINH TOÀN DIỆN TRONG THỜI KỲ QUÁ ĐỘ", fontfile=font_bold, fontsize=11, color=(1, 1, 1))
    
    # 3.1 Kinh tế
    p3.draw_rect(pymupdf.Rect(45, 80, W - 45, 185), color=(0.85, 0.85, 0.85), fill=(0.99, 0.99, 0.99), width=0.8)
    p3.insert_text((55, 100), "1. NỘI DUNG KINH TẾ (Quan trọng nhất, quyết định nhất):", fontfile=font_bold, fontsize=10, color=(0.7, 0.45, 0.05))
    nd_kt = (
      "• Bản chất: Là cơ sở vật chất - kỹ thuật của liên minh. Mục tiêu là thỏa mãn nhu cầu và lợi ích kinh tế thiết thân của các giai cấp, tầng lớp.\n"
      "• Nhiệm vụ trọng tâm: Hợp tác sản xuất kinh doanh; đẩy mạnh CNH, HĐH nông nghiệp nông thôn gắn với xây dựng nông thôn mới nâng cao.\n"
      "• Hoàn thiện thể chế: Phát triển nền kinh tế thị trường định hướng XHCN với nhiều hình thức sở hữu, nhiều thành phần kinh tế cùng phát triển bình đẳng.\n"
      "• Chuyển giao công nghệ: Gắn kết thành tựu khoa học của trí thức với hoạt động chế biến của doanh nghiệp và đồng ruộng của nông dân."
    )
    p3.insert_textbox(pymupdf.Rect(55, 106, W - 55, 180), nd_kt, fontfile=font_regular, fontsize=8.8, color=(0.2, 0.2, 0.2))

    # 3.2 Chính trị
    p3.draw_rect(pymupdf.Rect(45, 195, W - 45, 295), color=(0.85, 0.85, 0.85), fill=(0.99, 0.99, 0.99), width=0.8)
    p3.insert_text((55, 215), "2. NỘI DUNG CHÍNH TRỊ (Bảo đảm định hướng XHCN):", fontfile=font_bold, fontsize=10, color=(0.7, 0.1, 0.1))
    nd_ct = (
      "• Bản chất: Giữ vững độc lập dân tộc và định hướng XHCN; bảo đảm vai trò lãnh đạo tuyệt đối của Đảng Cộng sản Việt Nam đối với liên minh.\n"
      "• Xây dựng Nhà nước: Củng cố Nhà nước pháp quyền XHCN của dân, do dân, vì dân; kiểm soát quyền lực và bảo vệ quyền làm chủ của nhân dân.\n"
      "• Thực hành dân chủ: Thực hiện tốt phương châm 'Dân biết, dân bàn, dân làm, dân kiểm tra, dân giám sát, dân thụ hưởng'.\n"
      "• Quốc phòng - an ninh: Tăng cường khối liên minh gắn với củng cố thế trận quốc phòng toàn dân và an ninh nhân dân vững chắc."
    )
    p3.insert_textbox(pymupdf.Rect(55, 221, W - 55, 290), nd_ct, fontfile=font_regular, fontsize=8.8, color=(0.2, 0.2, 0.2))

    # 3.3 Văn hóa - xã hội
    p3.draw_rect(pymupdf.Rect(45, 305, W - 45, 410), color=(0.85, 0.85, 0.85), fill=(0.99, 0.99, 0.99), width=0.8)
    p3.insert_text((55, 325), "3. NỘI DUNG VĂN HÓA - XÃ HỘI (Mục tiêu vì con người):", fontfile=font_bold, fontsize=10, color=(0.1, 0.45, 0.6))
    nd_vh = (
      "• Nâng cao dân trí & Nhân lực: Đổi mới giáo dục đào tạo, phổ cập kỹ năng số và đào tạo nghề trình độ cao cho công nhân và nông dân.\n"
      "• Bảo đảm an sinh xã hội: Phát triển bảo hiểm xã hội, bảo hiểm y tế toàn dân, chương trình nhà ở xã hội và giảm nghèo bền vững đa chiều.\n"
      "• Bản sắc văn hóa: Xây dựng nền văn hóa Việt Nam tiên tiến, đậm đà bản sắc dân tộc; con người phát triển toàn diện cả trí - đức - thể - mỹ.\n"
      "• Môi trường sinh thái: Bảo vệ môi trường, ứng phó biến đổi khí hậu, hướng tới tăng trưởng xanh và kinh tế tuần hoàn."
    )
    p3.insert_textbox(pymupdf.Rect(55, 331, W - 55, 405), nd_vh, fontfile=font_regular, fontsize=8.8, color=(0.2, 0.2, 0.2))

    # Header bar Phần 4: Ba nguyên tắc
    p3.draw_rect(pymupdf.Rect(40, 430, W - 40, 455), color=(0.1, 0.1, 0.1), fill=(0.08, 0.1, 0.15), width=1)
    p3.insert_text((55, 447), "PHẦN IV: BA NGUYÊN TẮC CƠ BẢN CỦA KHỐI LIÊN MINH (THẾ KIỀNG 3 CHÂN)", fontfile=font_bold, fontsize=11, color=(1, 1, 1))

    principles = [
      ("NGUYÊN TẮC 1: BẢO ĐẢM VAI TRÒ LÃNH ĐẠO CỦA GIAI CẤP CÔNG NHÂN",
       "• Sự lãnh đạo của GCCN thông qua đội tiên phong là Đảng Cộng sản Việt Nam là nguyên tắc chính trị tối cao.\n"
       "• GCCN lãnh đạo không nhằm đặc quyền đặc lợi, mà để định hướng cho liên minh đi đúng mục tiêu độc lập dân tộc và CNXH.\n"
       "• Nguy cơ nếu vi phạm: Đánh mất vai trò lãnh đạo của Đảng sẽ khiến liên minh rơi vào tự phát, mất phương hướng và tan rã."),
      ("NGUYÊN TẮC 2: KẾT HỢP ĐÚNG ĐẮN CÁC LỢI ÍCH (COI TRỌNG LỢI ÍCH KINH TẾ)",
       "• Lợi ích là điểm tựa, là động lực nội tại mạnh mẽ nhất thúc đẩy các giai cấp, tầng lớp gắn bó lâu dài.\n"
       "• Phải giải quyết hài hòa ba tầng lợi ích: Lợi ích của người lao động (trực tiếp), lợi ích tập thể/doanh nghiệp và lợi ích toàn xã hội.\n"
       "• Nguy cơ nếu vi phạm: Nếu coi nhẹ lợi ích kinh tế thiết thân, liên minh sẽ chỉ là khẩu hiệu hình thức, người dân mất niềm tin."),
      ("NGUYÊN TẮC 3: XUẤT PHÁT TỪ SỰ TỰ NGUYỆN, TỰ GIÁC CỦA CÁC GIAI CẤP, TẦNG LỚP",
       "• Tuyệt đối không dùng biện pháp mệnh lệnh hành chính gượng ép, áp đặt chủ quan.\n"
       "• Liên minh phải được xây dựng trên cơ sở nhận thức đầy đủ về quyền lợi, nghĩa vụ và trách nhiệm chung vì sự phồn vinh của Tổ quốc.\n"
       "• Nguy cơ nếu vi phạm: Áp đặt hành chính sẽ gây tâm lý chống đối ngấm ngầm, rạn nứt khối đại đoàn kết toàn dân tộc.")
    ]

    y_p = 470
    for p_title, p_content in principles:
        p3.draw_rect(pymupdf.Rect(45, y_p, W - 45, y_p + 95), color=(0.85, 0.85, 0.85), fill=(0.99, 0.99, 0.99), width=0.8)
        p3.insert_text((55, y_p + 14), p_title, fontfile=font_bold, fontsize=9, color=(0.1, 0.1, 0.1))
        p3.insert_textbox(pymupdf.Rect(55, y_p + 20, W - 55, y_p + 90), p_content, fontfile=font_regular, fontsize=8.5, color=(0.25, 0.25, 0.25))
        y_p += 105

    # ================= PAGE 4: THỰC TIỄN 4 NHÀ & PHƯƠNG HƯỚNG ĐẠI HỘI XIII =================
    p4 = doc.new_page(width=W, height=H)
    p4.draw_rect(pymupdf.Rect(30, 30, W - 30, H - 30), color=(0.85, 0.85, 0.85), width=0.8)
    
    p4.draw_rect(pymupdf.Rect(40, 40, W - 40, 65), color=(0.1, 0.1, 0.1), fill=(0.08, 0.1, 0.15), width=1)
    p4.insert_text((55, 57), "PHẦN V: THỰC TIỄN VIỆT NAM — CHUỖI LIÊN KẾT '4 NHÀ' THỜI ĐẠI 4.0", fontfile=font_bold, fontsize=11, color=(1, 1, 1))

    chain_text = (
      "Mô hình '4 Nhà' (Nhà nước - Nhà khoa học - Doanh nghiệp - Nhà nông) là sự hiện thực hóa sinh động khối liên minh "
      "Công nhân - Nông dân - Trí thức - Doanh nhân trong nền kinh tế thị trường định hướng XHCN:\n\n"
      "1. NHÀ NƯỚC (Kiến tạo thể chế & Vốn): Quy hoạch vùng nguyên liệu, cấp vốn tín dụng ưu đãi, hạ tầng thủy lợi và bảo hiểm nông nghiệp.\n"
      "2. NHÀ KHOA HỌC (Chuyển giao công nghệ 4.0): Lai tạo giống mới thuần chủng, ứng dụng cảm biến IoT, quy trình VietGAP, GlobalGAP.\n"
      "3. DOANH NGHIỆP (Tổ chức chế biến & Thị trường): Đầu tư nhà máy chế biến sâu, chuỗi logistics lạnh, ký hợp đồng bao tiêu sản phẩm xuất khẩu.\n"
      "4. NHÀ NÔNG (Chủ thể sản xuất sạch): Tổ chức thành các HTX kiểu mới, canh tác trên cánh đồng lớn, tuân thủ nghiêm ngặt kỹ thuật an toàn."
    )
    p4.draw_rect(pymupdf.Rect(45, 80, W - 45, 200), color=(0.85, 0.85, 0.85), fill=(0.99, 0.99, 0.99), width=0.8)
    p4.insert_textbox(pymupdf.Rect(55, 90, W - 55, 195), chain_text, fontfile=font_regular, fontsize=8.8, color=(0.2, 0.2, 0.2))

    # Case studies
    p4.insert_text((45, 220), "CÁC ĐIỂN HÌNH THỰC TIỄN THÀNH CÔNG TẠI VIỆT NAM:", fontfile=font_bold, fontsize=10, color=(0.7, 0.35, 0.05))
    
    cases = [
      ("Đề án 1 triệu ha lúa chất lượng cao & Gạo ST25 (ĐBSCL):",
       "Kỹ sư Hồ Quang Cua và nhóm cộng sự lai tạo giống lúa ST25 đạt giải nhất thế giới; doanh nghiệp bao tiêu xuất khẩu hơn 4.6 tỷ USD; "
       "nông dân giảm 20% chi phí phân bón và giảm phát thải khí nhà kính."),
      ("Chuỗi giá trị Cà phê Tây Nguyên chế biến sâu vươn ra toàn cầu:",
       "Viện KHKT Nông Lâm nghiệp Tây Nguyên (WASI) chuyển giao quy trình giống mới; Trung Nguyên, Vĩnh Hiệp đầu tư nhà máy chế biến sâu đạt chuẩn USDA; "
       "đưa kim ngạch xuất khẩu cà phê Việt Nam vượt mốc 5.4 tỷ USD."),
      ("Tổ hợp nông nghiệp tuần hoàn công nghệ cao TH True Milk & Vinamilk:",
       "Quy mô hàng trăm ngàn con bò sữa gắn chip IoT; liên kết bao tiêu ngô sinh khối cho hàng vạn hộ nông dân vệ tinh; "
       "thay thế hoàn toàn sữa nhập khẩu, xây dựng thương hiệu quốc gia vững mạnh.")
    ]
    
    y_c = 235
    for c_title, c_desc in cases:
        p4.draw_rect(pymupdf.Rect(45, y_c, W - 45, y_c + 45), color=(0.88, 0.88, 0.88), fill=(0.98, 0.98, 0.98), width=0.8)
        p4.insert_text((55, y_c + 13), c_title, fontfile=font_bold, fontsize=8.8, color=(0.1, 0.1, 0.1))
        p4.insert_textbox(pymupdf.Rect(55, y_c + 17, W - 55, y_c + 43), c_desc, fontfile=font_regular, fontsize=8.2, color=(0.3, 0.3, 0.3))
        y_c += 50

    # Header bar Phần 6: Phương hướng Đại hội XIII
    p4.draw_rect(pymupdf.Rect(40, 400, W - 40, 425), color=(0.1, 0.1, 0.1), fill=(0.08, 0.1, 0.15), width=1)
    p4.insert_text((55, 417), "PHẦN VI: PHƯƠNG HƯỚNG & GIẢI PHÁP TĂNG CƯỜNG KHỐI LIÊN MINH (ĐẠI HỘI XIII)", fontfile=font_bold, fontsize=11, color=(1, 1, 1))

    solutions = (
      "1. Đẩy mạnh CNH, HĐH đất nước gắn với phát triển kinh tế tri thức và cuộc CMCN 4.0: Chuyển dịch cơ cấu lao động theo hướng "
      "tăng tỷ trọng lao động công nghiệp và dịch vụ, giảm tỷ trọng lao động nông nghiệp thủ công.\n"
      "2. Hoàn thiện thể chế kinh tế thị trường định hướng XHCN: Bảo vệ quyền sở hữu hợp pháp, bình đẳng giữa các thành phần kinh tế, "
      "phân phối công bằng thành quả phát triển, kịp thời hóa giải các mâu thuẫn lợi ích.\n"
      "3. Xây dựng giai cấp công nhân hiện đại, nông dân văn minh, trí thức sáng tạo và doanh nhân trách nhiệm: "
      "Đổi mới căn bản giáo dục đào tạo, phổ cập kỹ năng số và phát triển nguồn nhân lực chất lượng cao.\n"
      "4. Giữ vững và tăng cường sự lãnh đạo của Đảng đối với khối liên minh: Xây dựng Đảng trong sạch, vững mạnh; "
      "kiên quyết ngăn chặn suy thoái tư tưởng chính trị, đạo đức, lối sống và đẩy lùi tham nhũng, lãng phí.\n"
      "5. Nâng cao vai trò giám sát, phản biện xã hội của Mặt trận Tổ quốc và các đoàn thể: Lắng nghe tâm tư nguyện vọng của nhân dân, "
      "bảo đảm phương châm 'Dân biết, dân bàn, dân làm, dân kiểm tra, dân giám sát, dân thụ hưởng'."
    )
    p4.draw_rect(pymupdf.Rect(45, 435, W - 45, 600), color=(0.85, 0.85, 0.85), fill=(0.99, 0.99, 0.99), width=0.8)
    p4.insert_textbox(pymupdf.Rect(55, 445, W - 55, 595), solutions, fontfile=font_regular, fontsize=8.6, color=(0.2, 0.2, 0.2))

    # KẾT LUẬN & TÀI LIỆU THAM KHẢO
    p4.draw_rect(pymupdf.Rect(45, 615, W - 45, 785), color=(0.7, 0.5, 0.1), fill=(0.99, 0.99, 0.96), width=1)
    p4.insert_text((55, 633), "KẾT LUẬN VÀ TÀI LIỆU THAM KHẢO CHÍNH THỐNG:", fontfile=font_bold, fontsize=10, color=(0.6, 0.35, 0.05))
    concl = (
      "KẾT LUẬN: Liên minh giai cấp, tầng lớp là quy luật tất yếu mang ý nghĩa chiến lược quyết định đối với công cuộc xây dựng chủ nghĩa xã hội "
      "ở Việt Nam. Trong kỷ nguyên mới, việc kết hợp hài hòa lợi ích kinh tế, phát huy vai trò lãnh đạo của Đảng và chuyển đổi số đồng bộ "
      "sẽ tạo nên sức mạnh tổng hợp đưa dân tộc bước vào kỷ nguyên vươn mình phồn vinh, hạnh phúc.\n\n"
      "TÀI LIỆU THAM KHẢO CHÍNH THỨC:\n"
      "1. Bộ Giáo dục và Đào tạo (2021), Giáo trình Chủ nghĩa xã hội khoa học (Dành cho bậc đại học hệ không chuyên lý luận chính trị), NXB Chính trị quốc gia Sự thật, Hà Nội.\n"
      "2. Đảng Cộng sản Việt Nam (2021), Văn kiện Đại hội đại biểu toàn quốc lần thứ XIII, Tập I và Tập II, NXB Chính trị quốc gia Sự thật, Hà Nội.\n"
      "3. V.I. Lênin (1977), Toàn tập, Tập 38 và Tập 39, NXB Tiến bộ, Mát-xcơ-va.\n"
      "4. Hồ Chí Minh (2011), Toàn tập, Tập 12 và Tập 15, NXB Chính trị quốc gia Sự thật, Hà Nội."
    )
    p4.insert_textbox(pymupdf.Rect(55, 642, W - 55, 780), concl, fontfile=font_regular, fontsize=8.2, color=(0.25, 0.25, 0.25))

    doc.save(pdf_path)
    doc.close()
    print(f"Academic PDF generated successfully at: {pdf_path}")

if __name__ == "__main__":
    create_academic_pdf()
