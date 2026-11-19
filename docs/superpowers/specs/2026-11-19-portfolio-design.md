# Site de portfólio do Abner Duarte: design

Data: 2026-11-19

## Intenção

Um site que apresenta tudo o que o Abner já fez e sabe fazer, para conseguir **contrato de trabalho** (CLT/PJ, vagas de engenharia de IA/LLM) e **prestação de serviço** (clientes que querem um sistema pronto). É o link que vai no currículo, no LinkedIn, no perfil do GitHub e nas propostas.

O foco de carreira é engenharia de IA/LLM, com cloud como apoio. O projeto mais forte é o ZapSync, um SaaS em produção com demo pública.

## Públicos e o que cada um precisa

| Público | Tempo na página | O que procura | Ação esperada |
|---|---|---|---|
| Recrutador / RH | 30 s | Quem é, o que faz, se é sério | Clicar em contato ou LinkedIn |
| Engenheiro avaliando | 2 a 5 min | Profundidade técnica, decisões, código | Abrir a demo do ZapSync, os showcases no GitHub |
| Cliente de serviço | 1 a 2 min | O que ele faz por mim, prova de que funciona | Chamar no WhatsApp ou e-mail |

## Objetivos

- Em 5 segundos, o visitante entende: **engenheiro de IA que coloca produto em produção**.
- Mostrar provas concretas com números (tirados dos READMEs, nunca inventados).
- Atender os dois públicos (emprego e serviço) sem parecer dois sites.
- Português e inglês desde o início.
- Rápido, bonito no celular, bem indexado no Google, bom preview ao compartilhar no LinkedIn/WhatsApp.
- Fácil de atualizar: o conteúdo fica em arquivos de dados, não espalhado no HTML.

## Não-objetivos

- Blog, CMS, login, painel administrativo.
- Formulário de contato com backend (contato é por links).
- Página de preços dos serviços.
- Analytics no lançamento (pode entrar depois).

## Anti-objetivos (falharia mesmo funcionando)

- Parecer template genérico de portfólio ("Hi, I'm a passionate developer").
- Número ou afirmação que não esteja nos READMEs (ex.: "clientes pagando" sem confirmação).
- Projetos de curso com o mesmo peso do ZapSync.
- Página lenta ou quebrada no celular.
- Expor código privado ou dado pessoal de terceiros.

## Abordagens consideradas

| Abordagem | Prós | Contras | Decisão |
|---|---|---|---|
| **A. Astro estático na Vercel** | Conteúdo em arquivos de dados, i18n nativo, HTML estático rápido e bom para SEO, páginas por projeto fáceis, Abner já usa Vercel | Um passo de build e uma ferramenta nova | **Escolhida pelo Abner** |
| B. HTML/CSS/JS puro | Zero dependência, igual ao frontend do ZapSync | Com dois idiomas e muitas seções, o conteúdo se espalha e atualizar vira caça ao texto | Descartada |
| C. Next.js / React SPA | Ecossistema grande | Pesado demais para um site sem dados dinâmicos | Descartada |

## Estrutura da página inicial (ordem de importância)

1. **Topo (hero).** Nome, título "Engenheiro de IA · LLM em produção", uma frase de valor, dois botões: **Ver projetos** e **Falar comigo**. Seletor PT/EN e tema claro/escuro no cabeçalho.
2. **Provas em números.** Faixa com 4 indicadores: ZapSync no ar (link), 97% de acerto nos evals, 194 testes no CI, US$ 5,45 por 1.000 respostas.
3. **Projeto em destaque: ZapSync.** Print, resumo, bullets de engenharia de IA (RAG híbrido, guardrails, evals e benchmark, MCP com 16 ferramentas, observabilidade), botões **Testar a demo**, **Site**, **Arquitetura no GitHub**.
4. **Projetos** (grade de cards, todos com o mesmo peso visual, na mesma ordem do currículo: mais novos e importantes primeiro): Data Pilot, Detecção de fraude, BeHappier, Teste de QA (Verzel), Prospecção de clientes do ZapSync, Quest Contratado, Reinos Eternos, TT2 Otimizadores, Userscript do Chatwoot, Simuladores de QA, Jogos em Python, Desafio técnico em Python, Simulador de portão com Arduino, Bot de WhatsApp com GPT, Barbearia do Pra, Fatec Fighters, SysOs. Cada card: imagem (ou composição tipográfica quando não houver print), uma frase, o número principal quando existir, tags de stack, links. O D3code aparece também como card, além de estar na experiência.
5. **Serviços**, cada um com a prova ao lado:
   - Atendimento com IA no WhatsApp e chatbots → ZapSync
   - Assistentes com IA sobre os dados da empresa (RAG, painéis que conversam, automações) → Data Pilot, ZapSync
   - Sistemas web e apps sob medida → BeHappier, painel do ZapSync, Barbearia
   - Modelos de machine learning e análise de dados → Detecção de fraude
   - Testes e QA (manual e automatizado) → Teste Verzel
   - Suporte técnico e implantação em cloud → experiência N2/N3 e implantação, deploys em Railway/Vercel
   - Chamada final: "Tem um projeto? Me chama no WhatsApp."
6. **Como cheguei aqui.** Linha do tempo 2023 a 2026 (mesmo conteúdo do README do perfil), mais os jogos em Python como nota.
7. **Sobre mim e experiência.** Curto: ZapSync (fundador), Consumer (suporte N2/N3 e implantação, com o D3code), MEI. Inglês C1, São José do Rio Preto, aberto a remoto, híbrido ou presencial.
8. **Stack.** Os mesmos 8 grupos do currículo.
9. **Certificações.** AWS Certified AI Practitioner, Bootcamp Santander Dados com Python e IA, Bootcamp IBM Confluent, EF SET C1 e os cursos da Udemy, iguais ao currículo.
10. **Contato.** WhatsApp (17) 99181-6083 com link `wa.me/5517991816083`, e-mail abnerduartw@gmail.com, LinkedIn, GitHub e dois botões de download: currículo em português e em inglês (os PDFs de `Documents\Curriculos`, copiados para `public/`).

## Páginas de projeto

Uma página por projeto principal (`/projetos/zapsync`, `/projetos/data-pilot`, `/projetos/deteccao-fraude`, `/projetos/behappier`, `/projetos/qa-verzel`), em formato de estudo de caso curto: problema, o que foi feito, decisões técnicas, resultados em números, imagens, links. O conteúdo é condensado dos READMEs dos showcases. Os cards da página inicial levam para essas páginas.

Barbearia, Fatec Fighters, SysOs e jogos Python não ganham página: aparecem na linha do tempo com link para o GitHub.

## Conteúdo e fontes

- Todos os textos e números vêm dos READMEs em github.com/Abner-Duarte (zapsync-showcase, data-pilot, deteccao-fraude-cartao, behappier-showcase, Teste-qa-verzel, Barbearia-Site, FatecFighters, Projeto-Final, portfolio-python) e do README do perfil.
- Imagens copiadas dos repositórios: `zapsync-showcase/docs/img/*`, `data-pilot/prints/*`, `deteccao-fraude-cartao/imagens/*`, `Teste-qa-verzel/evidencias/*`. Otimizadas pelo `astro:assets`.
- BeHappier não tem imagens no showcase: o card usa uma ilustração/composição tipográfica no lugar do print (ou um print enviado pelo Abner depois).
- Tom: primeira pessoa, direto, sem jargão de marketing, mesmo estilo dos READMEs.

## Decisões técnicas

- **Astro** (versão estável atual), saída estática, sem framework de UI. JS só no seletor de tema e menu mobile.
- **i18n** com o roteamento nativo do Astro: português em `/`, inglês em `/en/`. Textos em `src/i18n/pt.ts` e `src/i18n/en.ts`; projetos e serviços em arquivos de dados com campos nos dois idiomas.
- **CSS** próprio com variáveis (tokens de cor, espaço, tipografia), tema claro e escuro seguindo o sistema, com botão para trocar.
- **Fontes** auto-hospedadas (sem Google Fonts em runtime).
- **SEO:** título e descrição por página e idioma, `hreflang`, sitemap, Open Graph com imagem própria, dados estruturados `Person`.
- **Acessibilidade:** contraste AA, navegação por teclado, `alt` nas imagens, `prefers-reduced-motion` respeitado.
- **Repositório:** `C:\sleepy\portfolio`, publicado como `Abner-Duarte/portfolio` (público), commit direto na main, sem coautoria do Claude.
- **Deploy:** Vercel conectada ao repositório; inicialmente no subdomínio `.vercel.app`.
- **Qualidade:** `astro check` e build sem erros; Lighthouse ≥ 95 em desempenho, acessibilidade, boas práticas e SEO no celular; conferência visual em 375 px e 1440 px nos dois temas e idiomas; verificação de links quebrados.

## Visual (proposta minha, a confirmar vendo o site)

Visual limpo e técnico: muito espaço em branco, tipografia forte no título, uma cor de destaque só (verde, ligando ao WhatsApp/ZapSync), prints dos projetos em molduras discretas, sem animações chamativas. Referência de sensação: página de produto técnico, não portfólio de designer.

## Deixado para quem implementar

- Layout exato de cada seção, ícones, microinterações.
- Ordem das imagens em cada página de projeto.
- Tradução para o inglês (os READMEs do ZapSync já têm versão em inglês para usar como base).

## Fonte de verdade do conteúdo

O currículo (`Documents\Curriculos\fonte\curriculo-pt.html` e `curriculo-en.html`) é a fonte dos textos de experiência, projetos, competências e certificações; os READMEs dos showcases complementam as páginas de estudo de caso. Nada de número que não esteja nessas fontes (ex.: quantidade de clientes do ZapSync fica de fora).

## Decisões do Abner

- WhatsApp público no site: sim.
- Currículos para download: sim, PT e EN.
- Disponibilidade: remoto, híbrido ou presencial.
- Projetos com peso igual, ordenados como no currículo.
- Foto no topo: `Downloads\WhatsApp Image 2026-11-19 at 08.07.23.jpeg` (773×1030, fundo branco, muito espaço acima da cabeça). Recortar em quadrado centrado no rosto (cabeça até o queixo/pescoço, sem os ombros) e exibir em círculo, otimizada pelo `astro:assets`.
- Domínio: subdomínio grátis da Vercel (`*.vercel.app`) no lançamento; domínio próprio fica para depois.
