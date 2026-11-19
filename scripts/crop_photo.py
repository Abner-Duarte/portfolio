"""Recorta a foto do perfil em um quadrado centrado no rosto, sem os ombros.

Uso: python scripts/crop_photo.py <entrada> <saida>

A foto original tem fundo branco. O script acha o contorno do conteúdo
(pixels com algum canal abaixo de 240), mede a largura da cabeça e corta
logo antes da linha em que o contorno se alarga para os ombros.
"""

import sys

from PIL import Image

LIMIAR_BRANCO = 240
FATOR_OMBRO = 1.4
TAMANHO = 640


def extensao_por_linha(img: Image.Image) -> list[tuple[int, int] | None]:
    """Para cada linha, devolve (x_min, x_max) do conteúdo não branco."""
    px = img.load()
    w, h = img.size
    linhas: list[tuple[int, int] | None] = []
    for y in range(h):
        xs = [x for x in range(0, w, 2) if min(px[x, y][:3]) < LIMIAR_BRANCO]
        linhas.append((xs[0], xs[-1]) if len(xs) > 3 else None)
    return linhas


def recortar(entrada: str, saida: str) -> None:
    img = Image.open(entrada).convert("RGB")
    linhas = extensao_por_linha(img)
    topo = next(y for y, e in enumerate(linhas) if e)

    # Largura da cabeça: a maior largura entre o topo e 45% da distância até o fim da imagem.
    fim_cabeca = topo + int((img.height - topo) * 0.45)
    larguras = [(e[1] - e[0], e) for e in linhas[topo:fim_cabeca] if e]
    largura_cabeca, (x0, x1) = max(larguras)
    centro_x = (x0 + x1) // 2

    # Ombros: primeira linha abaixo da cabeça em que o contorno passa de 1,4x a largura dela.
    ombro = next(
        (y for y in range(fim_cabeca, img.height) if linhas[y] and linhas[y][1] - linhas[y][0] > largura_cabeca * FATOR_OMBRO),
        img.height,
    )

    margem_topo = int(largura_cabeca * 0.12)
    y0 = max(0, topo - margem_topo)
    y1 = max(y0 + 1, ombro - int(img.height * 0.02))
    lado = y1 - y0
    lado = min(lado, img.width)
    x_ini = min(max(0, centro_x - lado // 2), img.width - lado)

    quadrado = img.crop((x_ini, y0, x_ini + lado, y0 + lado))
    quadrado.resize((TAMANHO, TAMANHO), Image.LANCZOS).save(saida, "JPEG", quality=88)
    print(f"topo={topo} ombro={ombro} cabeca={largura_cabeca} recorte=({x_ini},{y0},{lado})")


if __name__ == "__main__":
    recortar(sys.argv[1], sys.argv[2])
