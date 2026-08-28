import qrcode
from pathlib import Path

# Папка, где находится этот файл
OUTPUT_DIR = Path(__file__).parent

# Создаём QR-коды для этапов 1–18
for stage in range(1, 19):

    data = f"CASE18-{stage}"

    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=12,
        border=4
    )

    qr.add_data(data)
    qr.make(fit=True)

    image = qr.make_image(
        fill_color="black",
        back_color="white"
    )

    filename = OUTPUT_DIR / f"CASE18-{stage}.png"

    image.save(filename)

    print(f"✅ Создан: {filename.name}")

print()
print("🎉 Все QR-коды созданы!")