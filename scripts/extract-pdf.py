import fitz
import os

pdf_path = r"c:\Users\TUF\Downloads\Reliable Company Profile.pdf"
out_dir = r"c:\Users\TUF\Desktop\reliablecompany\reliable-engineering\public\profile"
text_out = r"c:\Users\TUF\Desktop\reliablecompany\reliable-engineering\scripts\profile-text.txt"

os.makedirs(out_dir, exist_ok=True)

doc = fitz.open(pdf_path)
all_text = []

with open(text_out, "w", encoding="utf-8") as tf:
    tf.write(f"Pages: {doc.page_count}\n\n")
    for i in range(doc.page_count):
        page = doc[i]
        text = page.get_text()
        all_text.append(text)
        tf.write(f"--- PAGE {i + 1} ---\n")
        tf.write(text)
        tf.write("\n---END---\n\n")

        for img_index, img in enumerate(page.get_images(full=True)):
            xref = img[0]
            base = doc.extract_image(xref)
            ext = base["ext"]
            img_path = os.path.join(out_dir, f"page-{i + 1}-img-{img_index + 1}.{ext}")
            with open(img_path, "wb") as f:
                f.write(base["image"])
            w, h = base["width"], base["height"]
            print(f"page {i+1} img {img_index+1}: {img_path} ({w}x{h})")

print(f"Text saved to {text_out}")
