"""Gera public/og.png (1200x630), a imagem de compartilhamento do site.

Uso: python scripts/make_og.py
Usa a foto recortada (src/assets/foto.jpg) e as fontes Segoe UI do Windows.
"""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

RAIZ = Path(__file__).resolve().parent.parent
W, H = 1200, 630
FUNDO = (12, 15, 18)
TEXTO = (233, 236, 239)
SUAVE = (160, 169, 179)
VERDE = (63, 216, 151)
FONTES = Path("C:/Windows/Fonts")


def fonte(nome: str, tamanho: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(str(FONTES / nome), tamanho)


def main() -> None:
    img = Image.new("RGB", (W, H), FUNDO)
    d = ImageDraw.Draw(img)

    # Brilho verde no canto, como no topo do site.
    brilho = Image.new("L", (W, H), 0)
    ImageDraw.Draw(brilho).ellipse((700, -420, 1500, 300), fill=60)
    img.paste(Image.new("RGB", (W, H), (20, 70, 50)), (0, 0), brilho)

    foto = Image.open(RAIZ / "src/assets/foto.jpg").convert("RGB").resize((300, 300), Image.LANCZOS)
    mascara = Image.new("L", (300, 300), 0)
    ImageDraw.Draw(mascara).ellipse((0, 0, 299, 299), fill=255)
    d.ellipse((826, 161, 1134, 469), fill=VERDE)
    img.paste(foto, (830, 165), mascara)

    d.rounded_rectangle((80, 120, 132, 172), radius=14, fill=VERDE)
    d.text((106, 146), "AD", font=fonte("segoeuib.ttf", 24), fill=FUNDO, anchor="mm")
    d.text((80, 230), "Abner Evandro Duarte", font=fonte("segoeuib.ttf", 60), fill=TEXTO)
    d.text((80, 315), "Engenheiro de IA · LLM em produção", font=fonte("segoeui.ttf", 36), fill=VERDE)
    d.text((80, 380), "RAG · evals · guardrails · MCP", font=fonte("segoeui.ttf", 30), fill=SUAVE)
    d.text((80, 520), "abner-duarte.vercel.app", font=fonte("segoeuib.ttf", 26), fill=SUAVE)

    saida = RAIZ / "public/og.png"
    img.save(saida, optimize=True)
    print(saida)


if __name__ == "__main__":
    main()
