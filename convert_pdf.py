import fitz
from PIL import Image

pdf_path = r"C:\Users\maley\OneDrive\Pictures\new new cover.pdf"
output_path = "bg.jpg"

doc = fitz.open(pdf_path)
page = doc[0]
pix = page.get_pixmap(matrix=fitz.Matrix(1, 1))
img = Image.frombytes("RGB", [pix.width, pix.height], pix.samples)
img.save(output_path, "JPEG", quality=95)
print(f"Converted to {output_path}")
