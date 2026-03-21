"""
Generate a QR code PNG pointing to your deployed frontend.
Usage:  python generate_qr.py
Output: qr_menu.png  (place it on your table/counter)
"""
import qrcode
from qrcode.image.styledpil import StyledPilImage
from qrcode.image.styles.moduledrawers import RoundedModuleDrawer

MENU_URL = "https://kbrmenu.vercel.app"

qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_H,
    box_size=12,
    border=3,
)
qr.add_data(MENU_URL)
qr.make(fit=True)

img = qr.make_image(
    image_factory=StyledPilImage,
    module_drawer=RoundedModuleDrawer(),
)
img.save("qr_menu.png")
print(f"QR code saved -> qr_menu.png  ({MENU_URL})")
