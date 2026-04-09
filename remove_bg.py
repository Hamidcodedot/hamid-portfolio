import sys
import subprocess

try:
    from PIL import Image
except ImportError:
    subprocess.check_call([sys.executable, '-m', 'pip', 'install', 'Pillow'])
    from PIL import Image

def process_image(input_path, output_path):
    img = Image.open(input_path).convert("RGB")
    data = img.getdata()
    
    new_data = []
    for r, g, b in data:
        brightness = max(r, g, b)
        alpha = brightness
        if alpha > 0:
            a_norm = alpha / 255.0
            new_r = min(255, int(r / a_norm))
            new_g = min(255, int(g / a_norm))
            new_b = min(255, int(b / a_norm))
            new_data.append((new_r, new_g, new_b, alpha))
        else:
            new_data.append((0, 0, 0, 0))
            
    img = Image.new("RGBA", img.size)
    img.putdata(new_data)
    img.save(output_path, "PNG")

# Do the processing
process_image("public/hero-brain.png", "public/hero-brain.png")
print("Successfully removed background!")
