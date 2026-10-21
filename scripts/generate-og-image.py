import os
from PIL import Image, ImageDraw, ImageFont, ImageFilter

def create_og_image():
    width = 1200
    height = 630
    
    # Create base image with deep rich gradient
    base = Image.new("RGBA", (width, height), (3, 7, 18, 255)) # #030712
    draw = ImageDraw.Draw(base)
    
    # Draw subtle background mesh/glows
    # Radial glow top-right (blue)
    glow1 = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    g1_draw = ImageDraw.Draw(glow1)
    g1_draw.ellipse([700, -200, 1400, 500], fill=(37, 99, 235, 45)) # Blue glow
    glow1 = glow1.filter(ImageFilter.GaussianBlur(100))
    base = Image.alpha_composite(base, glow1)
    
    # Radial glow bottom-left (cyan/indigo)
    glow2 = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    g2_draw = ImageDraw.Draw(glow2)
    g2_draw.ellipse([-100, 300, 600, 900], fill=(79, 70, 229, 35)) # Indigo glow
    glow2 = glow2.filter(ImageFilter.GaussianBlur(120))
    base = Image.alpha_composite(base, glow2)
    
    # Decorative subtle grid or border
    draw = ImageDraw.Draw(base)
    draw.rounded_rectangle([24, 24, width - 24, height - 24], radius=24, outline=(255, 255, 255, 25), width=2)
    
    # Load fonts
    font_bold_path = "C:/Windows/Fonts/segoeuib.ttf"
    font_regular_path = "C:/Windows/Fonts/segoeui.ttf"
    
    font_title = ImageFont.truetype(font_bold_path, 60)
    font_brand = ImageFont.truetype(font_bold_path, 34)
    font_category = ImageFont.truetype(font_bold_path, 16)
    font_desc = ImageFont.truetype(font_regular_path, 26)
    font_badge = ImageFont.truetype(font_bold_path, 18)
    font_footer = ImageFont.truetype(font_regular_path, 20)
    font_footer_bold = ImageFont.truetype(font_bold_path, 20)

    # Top brand bar
    # Load icon
    icon_path = "public/icon-512.png"
    if os.path.exists(icon_path):
        icon_img = Image.open(icon_path).convert("RGBA")
        icon_img = icon_img.resize((64, 64), Image.Resampling.LANCZOS)
        # Create rounded mask for icon
        mask = Image.new("L", (64, 64), 0)
        mask_draw = ImageDraw.Draw(mask)
        mask_draw.rounded_rectangle([0, 0, 64, 64], radius=16, fill=255)
        base.paste(icon_img, (72, 70), mask)
    
    # Brand Name next to icon
    draw.text((150, 70), "Limoria ", font=font_brand, fill=(255, 255, 255))
    limoria_w = draw.textlength("Limoria ", font=font_brand)
    draw.text((150 + limoria_w, 70), "Tech", font=font_brand, fill=(96, 165, 250)) # Cyan/blue
    draw.text((152, 110), "TECH & DIGITAL FINANCIAL SERVICES", font=font_category, fill=(148, 163, 184))
    
    # Top right status badge
    badge_text = "ENTERPRISE IT CONSULTANT"
    badge_w = draw.textlength(badge_text, font=font_category)
    bx2 = width - 72
    bx1 = bx2 - badge_w - 40
    draw.rounded_rectangle([bx1, 75, bx2, 115], radius=20, fill=(30, 41, 59, 200), outline=(59, 130, 246, 100), width=1)
    # green dot
    draw.ellipse([bx1 + 16, 92, bx1 + 24, 100], fill=(52, 211, 153))
    draw.text((bx1 + 32, 86), badge_text, font=font_category, fill=(226, 232, 240))
    
    # Main Headline
    draw.text((72, 180), "Solusi Konsultan IT &", font=font_title, fill=(255, 255, 255))
    draw.text((72, 252), "Transformasi Digital Terpercaya", font=font_title, fill=(96, 165, 250))
    
    # Description
    desc_line1 = "Mitra strategis perencanaan, arsitektur sistem, pengembangan software,"
    desc_line2 = "dan layanan pelaporan keuangan komprehensif untuk pertumbuhan bisnis Anda."
    draw.text((72, 345), desc_line1, font=font_desc, fill=(203, 213, 225))
    draw.text((72, 385), desc_line2, font=font_desc, fill=(148, 163, 184))
    
    # Service Pill Badges
    badges = [
        "IT Architecture & Cloud",
        "Enterprise Web & Mobile App",
        "Digital Financial Services",
        "24/7 IT Advisory"
    ]
    cur_x = 72
    badge_y = 450
    for b in badges:
        bw = draw.textlength(b, font=font_badge) + 32
        draw.rounded_rectangle([cur_x, badge_y, cur_x + bw, badge_y + 44], radius=12, fill=(15, 23, 42, 220), outline=(51, 65, 85, 200), width=1)
        draw.text((cur_x + 16, badge_y + 11), b, font=font_badge, fill=(241, 245, 249))
        cur_x += bw + 14
        
    # Bottom Footer Divider
    draw.line([72, 535, width - 72, 535], fill=(30, 41, 59), width=1)
    
    # Footer info
    draw.text((72, 558), "https://limoriatech.com", font=font_footer_bold, fill=(96, 165, 250))
    legal = "PT Limoria Teknologi Indonesia • Jakarta, Indonesia"
    legal_w = draw.textlength(legal, font=font_footer)
    draw.text((width - 72 - legal_w, 558), legal, font=font_footer, fill=(148, 163, 184))
    
    # Convert RGBA to RGB for saving as PNG or JPG
    final_img = Image.new("RGB", (width, height), (3, 7, 18))
    final_img.paste(base, (0, 0), base)
    
    os.makedirs("public/assets", exist_ok=True)
    final_img.save("public/assets/og-image.png", "PNG", optimize=True)
    # Also save jpg just in case
    final_img.save("public/assets/og-image.jpg", "JPEG", quality=92, optimize=True)
    print("og-image.png and og-image.jpg created successfully in public/assets/")

if __name__ == "__main__":
    create_og_image()
