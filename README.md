# Portfólio · Abner Duarte

Site pessoal bilíngue (português e inglês) com meus projetos, serviços, experiência e contato.

**No ar:** https://abner-duarte.vercel.app

## Stack

- [Astro](https://astro.build) com saída estática e i18n nativo (`/` em português, `/en/` em inglês)
- TypeScript e CSS próprio com tokens, tema claro e escuro
- Vitest para os dados, Playwright e axe para as páginas
- Publicado na Vercel

## Rodar localmente

```bash
npm install
npm run dev        # http://localhost:4321
npm test           # testes dos dados (Vitest)
npm run e2e        # testes das páginas (Playwright, faz o build sozinho)
npm run check      # checagem de tipos do Astro
```

Na primeira vez, instale o navegador dos testes: `npx playwright install chromium`.

## Onde editar o conteúdo

Todo o texto fica em arquivos de dados, nos dois idiomas:

| O quê | Arquivo |
|---|---|
| Nome, contatos, números de destaque e ZapSync | `src/data/profile.ts` |
| Projetos (a ordem do arquivo é a ordem do site) | `src/data/projects.ts` |
| Estudos de caso | `src/data/caseStudies.ts` |
| Serviços | `src/data/services.ts` |
| Experiência, certificações, stack e trajetória | `src/data/experience.ts`, `certifications.ts`, `skills.ts`, `timeline.ts` |
| Textos da interface | `src/i18n/pt.ts` e `src/i18n/en.ts` |
| Currículos em PDF | `public/cv/` |

Os prints dos projetos ficam em `src/assets/projects/<slug>/`. A imagem de compartilhamento (`public/og.png`) é gerada por `python scripts/make_og.py`.
