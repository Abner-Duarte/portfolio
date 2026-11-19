# Site de portfólio do Abner: plano de implementação

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Site estático bilíngue (PT/EN) que apresenta o Abner para vagas de engenharia de IA e para clientes de serviço, publicado na Vercel.

**Architecture:** Astro com saída estática e i18n nativo (`/` português, `/en/` inglês). Todo o conteúdo fica em arquivos de dados tipados em `src/data/` e `src/i18n/`; os componentes só leem esses dados. CSS próprio com tokens e tema claro/escuro; JavaScript só no tema e no menu mobile.

**Tech Stack:** Astro (última versão estável, versão exata fixada no `package.json`), TypeScript, `@astrojs/sitemap`, Vitest (dados), Playwright (páginas), Python + Pillow (recorte da foto), Vercel.

**Spec:** `docs/superpowers/specs/2026-11-19-portfolio-design.md`

## Global Constraints

- Conteúdo só das fontes: `Documents\Curriculos\fonte\curriculo-pt.html`, `curriculo-en.html` e os READMEs em github.com/Abner-Duarte. Nenhum número fora delas; **sem quantidade de clientes do ZapSync**.
- ZapSync: cascata só **OpenAI e Groq**; hospedagem **Railway e Vercel**.
- Contato: WhatsApp `(17) 99181-6083` → `https://wa.me/5517991816083`; e-mail `abnerduartw@gmail.com`; LinkedIn `https://www.linkedin.com/in/abner-evandro-duarte-79352523a/`; GitHub `https://github.com/Abner-Duarte`.
- Disponibilidade: remoto, híbrido ou presencial.
- Projetos com peso visual igual, na ordem do currículo.
- Rotas: PT em `/`, EN em `/en/`; páginas de projeto em `/projetos/<slug>` e `/en/projects/<slug>`.
- Fontes auto-hospedadas; sem Google Fonts em runtime. Sem analytics, sem formulário com backend.
- Lighthouse mobile ≥ 95 em desempenho, acessibilidade, boas práticas e SEO.
- Layout sem rolagem horizontal em 375 px; contraste AA nos dois temas.
- Commits direto na `main`, um assunto por commit, **sem linhas de coautoria do Claude**.

## Review Focus

1. Trocar de idioma numa página de projeto deve levar à mesma página no outro idioma, não à home. (Task 6)
2. Projeto sem print (BeHappier, Quest Contratado, Chatwoot etc.) deve mostrar a composição tipográfica, nunca imagem quebrada. (Task 4)
3. Palavras longas e URLs em cards e na stack não podem estourar a largura em 375 px. (Task 6)
4. Com `localStorage` bloqueado ou JavaScript desligado, o site renderiza e o botão de tema não quebra a página. (Task 6)
5. Verde de destaque com contraste AA sobre fundo claro e escuro. (Task 7)

---

## Estrutura de arquivos

```
src/
  i18n/pt.ts, en.ts, index.ts      # textos de interface; t(lang) e caminhos equivalentes
  data/types.ts                    # tipos Lang, Localized, Project, Service, Experience, Cert, SkillGroup, TimelineItem
  data/projects.ts                 # 18 projetos na ordem final
  data/services.ts, experience.ts, certifications.ts, skills.ts, timeline.ts, profile.ts
  assets/foto.jpg                  # recortada (Task 3)
  assets/projects/<slug>/*.png     # prints copiados (Task 3)
  styles/tokens.css, global.css
  layouts/Base.astro               # <html lang>, meta, SEO, cabeçalho, rodapé
  components/Header.astro, ThemeToggle.astro, LangSwitch.astro, Hero.astro, Proofs.astro,
             Featured.astro, ProjectCard.astro, ProjectGrid.astro, Services.astro, Timeline.astro,
             Experience.astro, Skills.astro, Certifications.astro, Contact.astro
  pages/index.astro, en/index.astro
  pages/projetos/[slug].astro, en/projects/[slug].astro
public/cv/Abner_Evandro_Duarte_Curriculo_PT.pdf, Abner_Evandro_Duarte_Resume_EN.pdf, og.png, favicon.svg
scripts/crop_photo.py
tests/data.test.ts                 # Vitest
e2e/*.spec.ts                      # Playwright contra `astro preview`
```

---

### Task 1: Base do projeto, layout e idiomas

**Files:**
- Create: `package.json`, `astro.config.mjs`, `tsconfig.json`, `vitest.config.ts`, `playwright.config.ts`, `.gitignore`
- Create: `src/i18n/pt.ts`, `src/i18n/en.ts`, `src/i18n/index.ts`, `src/styles/tokens.css`, `src/styles/global.css`, `src/layouts/Base.astro`, `src/pages/index.astro`, `src/pages/en/index.astro`
- Test: `e2e/base.spec.ts`

**Interfaces:**
- Produces: `type Lang = 'pt' | 'en'`; `t(lang: Lang): Dict` (Dict = tipo de `pt.ts`, que `en.ts` precisa satisfazer); `Base.astro` com props `{ lang: Lang; title: string; description: string; altPath: string }` (`altPath` = mesma página no outro idioma).
- `astro.config.mjs`: `site: 'https://abner-duarte.vercel.app'`, `i18n: { defaultLocale: 'pt', locales: ['pt','en'], routing: { prefixDefaultLocale: false } }`.
- `playwright.config.ts`: `baseURL` vem de `process.env.BASE_URL` ou `http://localhost:4321`; `webServer` (só quando `BASE_URL` não está definido) roda `npm run build && npm run preview` na porta 4321; projetos `desktop` (1440×900) e `mobile` (375×812).

- [ ] **Step 1:** Criar o projeto com `npm create astro@latest . -- --template minimal --typescript strict --no-git --install`, adicionar `vitest`, `@playwright/test`, `@astrojs/sitemap` e scripts `test` (vitest run), `e2e` (playwright test), `check` (astro check).
- [ ] **Step 2: Teste que falha** — `e2e/base.spec.ts`:
  - `/` responde 200 e `html[lang="pt-BR"]`; `/en/` responde 200 e `html[lang="en"]`.
  - `<body>` tem `background-color` diferente de transparente.
- [ ] **Step 3:** Rodar `npx playwright install chromium && npm run e2e -- e2e/base.spec.ts` → FAIL.
- [ ] **Step 4:** Implementar tokens (`--bg`, `--fg`, `--muted`, `--accent` verde, `--card`, `--border`, espaçamentos, tipos), tema escuro em `@media (prefers-color-scheme: dark)` sob `:root:not([data-theme="light"])` e em `:root[data-theme="dark"]`; fonte auto-hospedada (ex.: Inter via `@fontsource/inter`); `Base.astro` e as duas páginas vazias com título.
- [ ] **Step 5:** `npm run e2e -- e2e/base.spec.ts` → PASS; `npm run check` sem erros.
- [ ] **Step 6:** Commit `Cria base do site em Astro com idiomas e tema`.

### Task 2: Dados de conteúdo

**Files:**
- Create: `src/data/types.ts`, `projects.ts`, `services.ts`, `experience.ts`, `certifications.ts`, `skills.ts`, `timeline.ts`, `profile.ts`
- Test: `tests/data.test.ts`

**Interfaces:**
- `type Localized = { pt: string; en: string }`
- `Project = { slug: string; title: Localized; summary: Localized; highlight?: Localized; stack: string[]; links: { label: Localized; href: string }[]; image?: ImageMetadata; caseStudy: boolean; year: number }`
- `projects: Project[]` (ordem final), `services: { title: Localized; text: Localized; proofSlugs: string[] }[]`, `experience`, `certifications`, `skills`, `timeline`, `profile` (nome, títulos, contatos, frase de valor, 4 provas).
- Imagens: neste task `image` fica indefinido; Task 3 preenche.

- [ ] **Step 1: Teste que falha** — `tests/data.test.ts`:
  - `projects.map(p => p.slug)` é exatamente `['data-pilot','deteccao-fraude','behappier','qa-verzel','prospeccao-zapsync','quest-contratado','reinos-eternos','tt2-otimizadores','d3code','userscript-chatwoot','simuladores-qa','jogos-python','desafio-python','arduino-portao','bot-whatsapp-gpt','barbearia','fatec-fighters','sysos']`.
  - Todo `title`, `summary` e `label` tem `pt` e `en` não vazios.
  - `caseStudy === true` só para `data-pilot`, `deteccao-fraude`, `behappier`, `qa-verzel` (o ZapSync tem página própria `zapsync`, definida em `profile.featured`).
  - `profile.proofs` contém `'97%'`, `'194'` e `'US$ 5,45'` (PT) / `'US$ 5.45'` (EN).
  - Nenhum texto em todos os dados casa `/\b\d+\s*(empresas|clientes|companies|clients)\b/i`.
  - Todo `proofSlugs` de serviço existe em `projects` ou é `'zapsync'`; os 6 serviços da spec estão presentes.
  - Nenhum texto menciona `Claude` na cascata nem `Cloudflare` no ZapSync (regex sobre `profile.featured`).
- [ ] **Step 2:** `npm test` → FAIL.
- [ ] **Step 3:** Preencher os dados copiando os textos do currículo (PT de `curriculo-pt.html`, EN de `curriculo-en.html`) e, para o D3code, o bullet da experiência na Consumer. Serviços com textos novos, curtos, nos dois idiomas.
- [ ] **Step 4:** `npm test` → PASS.
- [ ] **Step 5:** Commit `Adiciona dados de conteúdo do portfólio`.

### Task 3: Foto, prints e currículos

**Files:**
- Create: `scripts/crop_photo.py`, `src/assets/foto.jpg`, `src/assets/projects/<slug>/…`, `public/cv/*.pdf`
- Modify: `src/data/projects.ts` (campo `image`), `src/data/profile.ts` (`photo`)
- Test: `tests/data.test.ts` (novos casos)

**Interfaces:**
- `crop_photo.py <entrada> <saída>`: detecta a caixa do conteúdo não branco (pixels com algum canal < 240), pega quadrado centrado horizontalmente no rosto, do topo do cabelo menos 6% de margem até 2% acima da linha onde a largura do conteúdo passa de 1,4× a largura da cabeça (início dos ombros), redimensiona para 640×640, JPEG qualidade 88.
- Fontes: foto `assets-src/foto-original.jpeg`; prints de `zapsync-showcase/docs/img/{site-desktop,demo-ia,painel-ia}.png`, `data-pilot/prints/{painel,conversa_ferramentas}.png`, `deteccao-fraude-cartao/imagens/{03_roc_pr,07_shap_beeswarm}.png`, `Teste-qa-verzel/evidencias/` (o print do relatório do Playwright, se existir, senão `BUG-01-ui03-carrinho-200-sem-cupom.png`), `Barbearia-Site/.../logotipo-da-barbearia.jpg`, `FatecFighters/assets/background.png`, `portfolio-python/*/tela.png` (clonar com `gh repo clone Abner-Duarte/<repo> -- --depth 1` numa pasta temporária fora do projeto).
- PDFs: `Documents\Curriculos\PT-BR\Abner_Evandro_Duarte_Curriculo_IA_PT.pdf` → `public/cv/Abner_Evandro_Duarte_Curriculo_PT.pdf`; `Documents\Curriculos\EN\Abner_Evandro_Duarte_Resume_AI_EN.pdf` → `public/cv/Abner_Evandro_Duarte_Resume_EN.pdf`.

- [ ] **Step 1: Teste que falha:** `profile.photo.width === profile.photo.height`; os slugs `data-pilot`, `deteccao-fraude`, `qa-verzel`, `barbearia`, `fatec-fighters`, `jogos-python` têm `image`; os dois PDFs existem em `public/cv/`.
- [ ] **Step 2:** `npm test` → FAIL.
- [ ] **Step 3:** Escrever e rodar o script, copiar prints e PDFs, ligar `image` nos dados. Abrir `src/assets/foto.jpg` e conferir visualmente que mostra cabeça e pescoço sem os ombros.
- [ ] **Step 4:** `npm test` → PASS.
- [ ] **Step 5:** Commit `Adiciona foto, prints dos projetos e currículos`.

### Task 4: Página inicial

**Files:**
- Create: os componentes de seção listados na estrutura; Modify: `src/pages/index.astro`, `src/pages/en/index.astro`
- Test: `e2e/home.spec.ts`

**Interfaces:**
- Cada seção recebe `{ lang: Lang }` e lê os dados; `ProjectCard` recebe `{ project: Project; lang: Lang }` e liga para `/projetos/<slug>` ou `/en/projects/<slug>` quando `caseStudy`, senão para o primeiro link externo.
- IDs das seções, nesta ordem: `inicio`, `provas`, `zapsync`, `projetos`, `servicos`, `trajetoria`, `experiencia`, `stack`, `certificacoes`, `contato` (mesmos IDs no inglês).

- [ ] **Step 1: Teste que falha** — `e2e/home.spec.ts`, para `/` e `/en/`:
  - As seções aparecem no DOM exatamente na ordem dos IDs acima.
  - `h1` contém `Abner Evandro Duarte`; o topo tem a foto com `alt` não vazio e botões para `#projetos` e `#contato`.
  - `#projetos` tem 18 `article`, e os títulos estão na ordem do Task 2.
  - Card sem imagem (ex.: `quest-contratado`) não tem `<img>` e mostra o bloco tipográfico `[data-fallback]`.
  - `#zapsync` tem links para `https://www.zapsync-ia.com.br/demo` e `https://github.com/Abner-Duarte/zapsync-showcase`.
  - `#contato` tem `a[href="https://wa.me/5517991816083"]`, `a[href="mailto:abnerduartw@gmail.com"]`, o LinkedIn e o GitHub; os dois links de currículo respondem 200 com `content-type` PDF.
  - Nenhuma `<img>` da página tem `naturalWidth === 0`.
- [ ] **Step 2:** `npm run e2e -- e2e/home.spec.ts` → FAIL.
- [ ] **Step 3:** Implementar as seções com o visual da spec: topo com foto em círculo, faixa de 4 provas, ZapSync com print e bullets, grade responsiva de cards (1 coluna até 640 px, 2 até 1024 px, 3 acima), serviços com o projeto-prova ao lado, linha do tempo 2023 → 2026, experiência, stack em 8 grupos, certificações e contato com os dois botões de currículo. Imagens por `<Image>` do `astro:assets`.
- [ ] **Step 4:** `npm run e2e -- e2e/home.spec.ts` → PASS.
- [ ] **Step 5:** Commit `Monta a página inicial`.

### Task 5: Páginas de estudo de caso

**Files:**
- Create: `src/pages/projetos/[slug].astro`, `src/pages/en/projects/[slug].astro`, `src/data/caseStudies.ts`
- Test: `e2e/case.spec.ts`

**Interfaces:**
- `caseStudies: Record<'zapsync'|'data-pilot'|'deteccao-fraude'|'behappier'|'qa-verzel', { problem: Localized; built: Localized[]; decisions: Localized[]; results: Localized[]; images: ImageMetadata[] }>`, textos condensados dos READMEs dos showcases (README.en.md do ZapSync como base do inglês).
- `getStaticPaths` gera os 5 slugs nos dois idiomas.

- [ ] **Step 1: Teste que falha:** para os 5 slugs nos dois idiomas, a página responde 200, tem `h1` com o título do projeto e as seções `Problema/Problem`, `O que fiz/What I built`, `Decisões/Decisions`, `Resultados/Results`; todo card com `caseStudy` na home leva a uma dessas páginas sem 404; a página do ZapSync contém `97%` e `89%` e `100%`.
- [ ] **Step 2:** `npm run e2e -- e2e/case.spec.ts` → FAIL.
- [ ] **Step 3:** Implementar o template e os dados.
- [ ] **Step 4:** `npm run e2e -- e2e/case.spec.ts` → PASS.
- [ ] **Step 5:** Commit `Adiciona páginas de estudo de caso`.

### Task 6: Tema, menu mobile, troca de idioma e responsividade

**Files:**
- Create/Modify: `ThemeToggle.astro`, `LangSwitch.astro`, `Header.astro`, `global.css`
- Test: `e2e/interaction.spec.ts`

**Interfaces:**
- `ThemeToggle`: script inline no `<head>` aplica `data-theme` salvo antes da pintura; leitura e escrita de `localStorage` dentro de `try/catch`.
- `LangSwitch`: usa `altPath` do `Base.astro`.

- [ ] **Step 1: Teste que falha:**
  - Clicar no botão de tema alterna `html[data-theme]` entre `dark` e `light` e o valor persiste após recarregar.
  - Com `localStorage` lançando erro (`page.addInitScript` que sobrescreve `Storage.prototype.getItem/setItem` com `throw`), a página carrega, não há erro no console e o botão ainda alterna o tema na sessão.
  - Com `javaScriptEnabled: false`, `/` mostra `h1` e os 18 cards.
  - Em `/projetos/data-pilot`, o link de idioma leva a `/en/projects/data-pilot`, e o inverso.
  - Em 375 px, `document.documentElement.scrollWidth <= 375` em `/`, `/en/` e nas 10 páginas de estudo de caso; o menu mobile abre, mostra os links das seções e fecha ao clicar num link.
- [ ] **Step 2:** `npm run e2e -- e2e/interaction.spec.ts` → FAIL.
- [ ] **Step 3:** Implementar; textos longos com `overflow-wrap: anywhere` nos cards e na stack.
- [ ] **Step 4:** `npm run e2e` (suíte inteira) → PASS.
- [ ] **Step 5:** Commit `Adiciona tema, menu mobile e troca de idioma`.

### Task 7: SEO, acessibilidade e qualidade

**Files:**
- Modify: `src/layouts/Base.astro`, `astro.config.mjs`; Create: `public/og.png`, `public/favicon.svg`
- Test: `e2e/seo.spec.ts`

**Interfaces:**
- Base inclui `<title>`, `meta description`, `link rel="alternate" hreflang="pt-BR|en|x-default"`, `link rel="canonical"`, Open Graph (`og:title`, `og:description`, `og:image` absoluta, `og:locale`), Twitter card e JSON-LD `Person` (nome, cargo, `sameAs` LinkedIn e GitHub, e-mail).
- `og.png` 1200×630: nome, "Engenheiro de IA · LLM em produção", foto e fundo do tema escuro.

- [ ] **Step 1: Teste que falha:** cada página tem título e descrição únicos por idioma, `hreflang` nos dois sentidos, canonical, `og:image` absoluta respondendo 200 e JSON-LD válido (`JSON.parse` com `@type: "Person"`); o build gera `dist/sitemap-index.xml`; `@axe-core/playwright` sem violações `serious` ou `critical` em `/`, `/en/` e `/projetos/zapsync`, nos dois temas.
- [ ] **Step 2:** `npm run e2e -- e2e/seo.spec.ts` → FAIL.
- [ ] **Step 3:** Implementar; ajustar o verde se o axe acusar contraste.
- [ ] **Step 4:** `npm run e2e` e `npm run check` → PASS; `npx lighthouse http://localhost:4321/ --preset=perf --form-factor=mobile` e as categorias accessibility, best-practices, seo ≥ 95 (repetir em `/en/`).
- [ ] **Step 5:** Commit `Adiciona SEO, imagem de compartilhamento e ajustes de acessibilidade`.

### Task 8: Publicação

**Files:**
- Create: `README.md` (o que é, como rodar, onde editar o conteúdo)

- [ ] **Step 1:** `gh repo create Abner-Duarte/portfolio --public --source . --push`.
- [ ] **Step 2:** Publicar na Vercel com `npx vercel --prod` ligado ao repositório (se pedir login, o Abner roda `! npx vercel login`); nome do projeto `abner-duarte` para obter `abner-duarte.vercel.app` (se ocupado, usar o que a Vercel der e atualizar `site` no `astro.config.mjs`).
- [ ] **Step 3:** Rodar a suíte Playwright contra a URL publicada (`BASE_URL=<url> npm run e2e`) → PASS.
- [ ] **Step 4:** Adicionar o link do site no README do perfil `Abner-Duarte/Abner-Duarte` (linha de contatos) e no cabeçalho dos dois currículos (`Site:`), regenerando os PDFs. Commit em cada repositório/pasta separadamente.
- [ ] **Step 5:** Commit `Adiciona README do portfólio`.
