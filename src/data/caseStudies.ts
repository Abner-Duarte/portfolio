import type { ImageMetadata } from 'astro';
import type { Link, Localized } from './types';
import { profile } from './profile';
import { projects } from './projects';
import zapSite from '../assets/projects/zapsync/site-desktop.png';
import zapDemo from '../assets/projects/zapsync/demo-ia.png';
import zapPainel from '../assets/projects/zapsync/painel-ia.png';
import dpPainel from '../assets/projects/data-pilot/painel.png';
import dpConversa from '../assets/projects/data-pilot/conversa_ferramentas.png';
import frRoc from '../assets/projects/deteccao-fraude/03_roc_pr.png';
import frLimiar from '../assets/projects/deteccao-fraude/04_limiar.png';
import frShap from '../assets/projects/deteccao-fraude/07_shap_beeswarm.png';
import qaRelatorio from '../assets/projects/qa-verzel/automacao-relatorio-playwright.png';
import qaBug from '../assets/projects/qa-verzel/BUG-01-ui03-carrinho-200-sem-cupom.png';

export type CaseStudy = {
  slug: string;
  title: Localized;
  lead: Localized;
  stack: string[];
  links: Link[];
  problem: Localized;
  built: Localized[];
  decisions: Localized[];
  results: Localized[];
  images: { src: ImageMetadata; alt: Localized }[];
};

const fromProject = (slug: string) => {
  const p = projects.find((x) => x.slug === slug)!;
  return { slug, title: p.title, lead: p.summary, stack: p.stack, links: p.links };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'zapsync',
    title: profile.featured.title,
    lead: profile.featured.summary,
    stack: profile.featured.stack,
    links: profile.featured.links,
    problem: {
      pt: 'Pequenos negócios perdem venda porque não conseguem responder o WhatsApp a tempo, e menus numerados afastam o cliente. Uma IA que atende sozinha precisa acertar preço e pedido toda vez, nunca ficar sem responder e custar pouco por conversa.',
      en: 'Small businesses lose sales because they cannot answer WhatsApp in time, and numbered menus push customers away. An AI that serves customers alone has to get prices and orders right every time, never go silent and cost little per conversation.',
    },
    built: [
      {
        pt: 'Pipeline da mensagem: webhook com validação HMAC, deduplicação, agrupamento de mensagens digitadas em sequência, fila por conversa, áudio com Whisper e imagem com modelo de visão.',
        en: 'Message pipeline: HMAC-verified webhook, deduplication, batching of back-to-back messages, per-conversation queue, audio via Whisper and images via a vision model.',
      },
      {
        pt: 'Cascata de 11 tentativas entre OpenAI e Groq (gpt-5.4-mini, gpt-oss-120b e gpt-oss-20b) com saída estruturada em JSON Schema estrito.',
        en: '11-step fallback cascade across OpenAI and Groq (gpt-5.4-mini, gpt-oss-120b and gpt-oss-20b) with strict JSON Schema structured output.',
      },
      {
        pt: 'RAG híbrido do cardápio no PostgreSQL: palavra-chave (acento, plural, sinônimos) mais embeddings com similaridade de cosseno, reindexando só o que mudou.',
        en: 'Hybrid menu RAG in PostgreSQL: keyword search (accents, plurals, synonyms) plus embeddings with cosine similarity, re-embedding only what changed.',
      },
      {
        pt: 'Servidor MCP com 16 ferramentas para o dono operar o negócio conversando com um assistente de IA, e painel com aba de IA mostrando custo, latência e guardrails.',
        en: 'MCP server with 16 tools so owners can run the business by chatting with an AI assistant, plus a dashboard tab showing cost, latency and guardrails.',
      },
      {
        pt: 'Onboarding self-service com Embedded Signup da Meta e cobrança recorrente no Mercado Pago, com suspensão e reativação automáticas.',
        en: 'Self-service onboarding with Meta Embedded Signup and recurring billing via Mercado Pago, with automatic suspension and reactivation.',
      },
    ],
    decisions: [
      {
        pt: 'O modelo decide o quê, o banco decide quanto: preço recalculado pelo cardápio, quantidade inventada volta para 1 e pedido bloqueado com a loja fechada.',
        en: 'The model decides what, the database decides how much: prices recomputed from the menu, invented quantities reset to 1, and orders blocked when the store is closed.',
      },
      {
        pt: 'Avaliador determinístico nos evals, sem LLM como juiz, para o número não depender de outro modelo.',
        en: 'A deterministic scorer for the evals, with no LLM-as-judge, so the score does not depend on another model.',
      },
      {
        pt: 'A ordem da cascata vem do benchmark, não do feeling: mesmo eval set em cada modelo isolado, medindo acerto, latência e custo.',
        en: 'The cascade order comes from the benchmark, not gut feeling: the same eval set on each model in isolation, measuring accuracy, latency and cost.',
      },
      {
        pt: 'Proteção em duas camadas contra prompt injection: regra no prompt e trava no código que só aceita pedido depois do resumo.',
        en: 'Two-layer protection against prompt injection: a prompt rule and a code-level lock that only accepts an order after the summary.',
      },
    ],
    results: [
      {
        pt: '97% de acerto (168 de 174) no benchmark, 1,6 s de resposta típica, 2,5 s no pior caso (p95) e US$ 5,45 por 1.000 respostas.',
        en: '97% accuracy (168 of 174) on the benchmark, 1.6 s typical response, 2.5 s worst case (p95) and US$ 5.45 per 1,000 replies.',
      },
      {
        pt: 'A categoria segurança foi de 89% para 100% depois da correção da falha de prompt injection que o benchmark encontrou.',
        en: 'The security category went from 89% to 100% after fixing the prompt injection flaw the benchmark found.',
      },
      {
        pt: '194 testes automatizados contra PostgreSQL real a cada push no GitHub Actions.',
        en: '194 automated tests against a real PostgreSQL database on every push via GitHub Actions.',
      },
      {
        pt: 'Demo pública que custa no máximo uns US$ 1,50 por mês, com orçamento diário e limite por pessoa.',
        en: 'A public demo capped at roughly US$ 1.50 per month, with a daily budget and a per-person limit.',
      },
    ],
    images: [
      { src: zapSite, alt: { pt: 'Site do ZapSync', en: 'ZapSync website' } },
      { src: zapDemo, alt: { pt: 'Demo pública mostrando o JSON e o custo de cada resposta', en: 'Public demo showing the JSON and cost of each reply' } },
      { src: zapPainel, alt: { pt: 'Aba de IA do painel com custo, latência e guardrails', en: 'Dashboard AI tab with cost, latency and guardrails' } },
    ],
  },
  {
    ...fromProject('data-pilot'),
    problem: {
      pt: 'Perguntar dados de vendas em português é ótimo, mas um LLM lendo a planilha inventa número. Eu queria um chat em que o modelo explica e o código calcula, para dar para usar até um modelo gratuito com segurança.',
      en: 'Asking sales questions in plain language is great, but an LLM reading the spreadsheet makes up numbers. I wanted a chat where the model explains and the code calculates, so even a free model is safe to use.',
    },
    built: [
      {
        pt: 'Limpeza dos dados e uma função Python por pergunta de negócio (receita, ticket médio, top cidades, cancelamento, resumo por período).',
        en: 'Data cleaning and one Python function per business question (revenue, average ticket, top cities, cancellation rate, period summary).',
      },
      {
        pt: 'Painel em Streamlit com cards e gráficos Plotly, chamando as mesmas funções do chat.',
        en: 'A Streamlit dashboard with cards and Plotly charts, calling the same functions as the chat.',
      },
      {
        pt: 'Chat com tool calling via OpenRouter: o modelo escolhe a função e os argumentos, o Python executa e o modelo redige a resposta. Cada resposta mostra a ferramenta usada e o número devolvido.',
        en: 'A tool-calling chat via OpenRouter: the model picks the function and arguments, Python runs it and the model writes the answer. Every reply shows the tool used and the number returned.',
      },
    ],
    decisions: [
      {
        pt: 'O modelo nunca vê a planilha; ele só recebe o resultado da função.',
        en: 'The model never sees the spreadsheet; it only receives the function result.',
      },
      {
        pt: 'Categoria como enum na definição da ferramenta, para o modelo não pedir uma categoria que não existe.',
        en: 'Category as an enum in the tool definition, so the model cannot ask for a category that does not exist.',
      },
      {
        pt: 'Descrições das ferramentas ajustadas a partir dos erros do modelo: ele escolhe pela descrição, não pelo código.',
        en: 'Tool descriptions tuned from the model\'s mistakes: it chooses by the description, not by the code.',
      },
    ],
    results: [
      {
        pt: 'Depois de ajustar as descrições, o modelo acertou a ferramenta e os argumentos em 4 de 4 tentativas no caso que antes falhava.',
        en: 'After tuning the descriptions, the model picked the right tool and arguments in 4 of 4 attempts on the case that used to fail.',
      },
      {
        pt: 'Um teste garante que o número do chat é igual ao do card do painel, e outro simula o modelo para testar o laço de ferramentas sem gastar API.',
        en: 'One test guarantees the chat number matches the dashboard card, and another simulates the model to test the tool loop without spending API credits.',
      },
    ],
    images: [
      { src: dpPainel, alt: { pt: 'Painel de vendas do Data Pilot', en: 'Data Pilot sales dashboard' } },
      { src: dpConversa, alt: { pt: 'Conversa mostrando a ferramenta usada e o número devolvido', en: 'Chat showing the tool used and the number returned' } },
    ],
  },
  {
    ...fromProject('deteccao-fraude'),
    problem: {
      pt: 'Só 0,17% das transações são fraude. Um modelo que diz "não é fraude" para tudo acerta 99,83% e não pega nenhuma, então acurácia não serve. O desafio é pegar fraudes sem bloquear o cartão de cliente honesto.',
      en: 'Only 0.17% of transactions are fraud. A model that says "not fraud" for everything is 99.83% accurate and catches none, so accuracy is useless. The challenge is catching fraud without blocking honest customers\' cards.',
    },
    built: [
      {
        pt: 'Exploração dos 284.807 registros e comparação de regressão logística, Random Forest e XGBoost.',
        en: 'Exploration of the 284,807 records and a comparison of logistic regression, Random Forest and XGBoost.',
      },
      {
        pt: 'Comparação de estratégias de balanceamento (peso de classe, undersampling, oversampling) e busca de hiperparâmetros com validação cruzada.',
        en: 'Comparison of balancing strategies (class weights, undersampling, oversampling) and hyperparameter search with cross-validation.',
      },
      {
        pt: 'Ajuste do limiar de decisão e explicação das previsões com SHAP, inclusive das fraudes que o modelo perdeu.',
        en: 'Decision threshold tuning and SHAP explanations of predictions, including the frauds the model missed.',
      },
    ],
    decisions: [
      {
        pt: 'Modelos comparados por precisão, recall, F1 e PR-AUC da classe de fraude, nunca por acurácia.',
        en: 'Models compared by precision, recall, F1 and PR-AUC of the fraud class, never by accuracy.',
      },
      {
        pt: 'Escolha pela PR-AUC em vez de só recall: maximizar recall é fácil marcando tudo como fraude.',
        en: 'Selection by PR-AUC rather than recall alone: maximizing recall is easy if you flag everything as fraud.',
      },
      {
        pt: 'Peso de classe mais ajuste de limiar, sem descartar nem inventar dados.',
        en: 'Class weights plus threshold tuning, without discarding or synthesizing data.',
      },
    ],
    results: [
      {
        pt: 'XGBoost ajustado (limiar 0,44): pega 83 de 98 fraudes com 15 alarmes falsos em 57 mil transações de teste.',
        en: 'Tuned XGBoost (threshold 0.44): catches 83 of 98 frauds with 15 false alarms across 57k test transactions.',
      },
      {
        pt: 'PR-AUC de 0,884, contra 0,0017 de um modelo aleatório.',
        en: 'PR-AUC of 0.884, against 0.0017 for a random model.',
      },
    ],
    images: [
      { src: frRoc, alt: { pt: 'Curvas ROC e de precisão e recall', en: 'ROC and precision-recall curves' } },
      { src: frLimiar, alt: { pt: 'Precisão, recall e F1 por limiar', en: 'Precision, recall and F1 by threshold' } },
      { src: frShap, alt: { pt: 'Importância das variáveis com SHAP', en: 'Feature importance with SHAP' } },
    ],
  },
  {
    ...fromProject('behappier'),
    problem: {
      pt: 'Minha namorada queria um lugar só dela para acompanhar a própria energia, sem app de produtividade cobrando metas, e depois precisou de ajuda com a faculdade: o material das aulas chegava espalhado em grupos de WhatsApp e se perdia.',
      en: 'My girlfriend wanted a place of her own to track her energy, without a productivity app nagging her about goals, and then needed help with college: class material arrived scattered across WhatsApp groups and got lost.',
    },
    built: [
      {
        pt: 'Check-in diário de energia e humor com sugestão da IA, gráficos de padrões e acompanhamento de ciclo.',
        en: 'Daily energy and mood check-in with an AI suggestion, pattern charts and cycle tracking.',
      },
      {
        pt: 'Chat de apoio e tutora de estudos que leem texto, fotos, voz, PDF, Word e slides, e geram PDF no próprio celular.',
        en: 'A support chat and a study tutor that read text, photos, voice, PDF, Word and slides, and generate PDFs on the phone.',
      },
      {
        pt: 'Pastas por matéria no Firebase Storage, com compartilhamento direto do WhatsApp para o app e perguntas à IA sobre os itens escolhidos.',
        en: 'Per-subject folders in Firebase Storage, with direct sharing from WhatsApp into the app and AI questions about selected items.',
      },
    ],
    decisions: [
      {
        pt: 'A chave da OpenAI fica só no servidor (Cloud Functions com login obrigatório); o app nunca a vê.',
        en: 'The OpenAI key lives only on the server (Cloud Functions requiring sign-in); the app never sees it.',
      },
      {
        pt: 'Local-first com sincronização no Firestore, para funcionar offline e sobreviver à troca de celular.',
        en: 'Local-first with Firestore sync, so it works offline and survives a phone change.',
      },
      {
        pt: 'Orçamento de material no servidor: mais recentes primeiro, com limite de texto e fotos, e aviso do que ficou de fora.',
        en: 'A server-side material budget: newest first, with text and photo limits, and a notice about what was left out.',
      },
    ],
    results: [
      {
        pt: 'Cerca de 8.700 linhas em TypeScript no app e 4 Cloud Functions, em uso diário.',
        en: 'About 8,700 lines of TypeScript in the app and 4 Cloud Functions, in daily use.',
      },
      {
        pt: 'Ciclo curto de feedback: ela reporta pelo WhatsApp e a correção chega no mesmo dia em um APK novo.',
        en: 'A short feedback loop: she reports on WhatsApp and the fix often ships the same day in a new APK.',
      },
    ],
    images: [],
  },
  {
    ...fromProject('qa-verzel'),
    problem: {
      pt: 'Teste técnico para uma vaga de QA: validar a entrega "cupom de desconto e frete grátis" de uma loja virtual, na interface e na API, contra os critérios de aceite.',
      en: 'A take-home assignment for a QA role: validate the "discount coupon and free shipping" release of an online store, in the UI and the API, against the acceptance criteria.',
    },
    built: [
      {
        pt: 'Cenários em Gherkin cobrindo cada critério de aceite.',
        en: 'Gherkin scenarios covering every acceptance criterion.',
      },
      {
        pt: 'Execução manual e exploratória: 32 casos na interface e 67 na API, com evidências.',
        en: 'Manual and exploratory runs: 32 UI cases and 67 API cases, with evidence.',
      },
      {
        pt: 'Automação com Playwright em TypeScript: testes de interface em Chrome, Firefox, Safari e mobile, e testes de API, rodando no GitHub Actions.',
        en: 'Playwright automation in TypeScript: UI tests on Chrome, Firefox, Safari and mobile, plus API tests, running on GitHub Actions.',
      },
    ],
    decisions: [
      {
        pt: 'Ambiguidades da documentação registradas com a interpretação adotada, em vez de assumir em silêncio.',
        en: 'Documentation ambiguities recorded with the interpretation chosen, instead of assuming silently.',
      },
      {
        pt: 'Testes automatizados que falham de propósito nos bugs encontrados, para servirem de regressão quando forem corrigidos.',
        en: 'Automated tests that fail on purpose on the bugs found, so they become regression tests once fixed.',
      },
    ],
    results: [
      {
        pt: '4 bugs encontrados, 2 de severidade alta: frete cobrado com subtotal exatamente R$ 200,00 e API aceitando mais de 5 unidades por produto.',
        en: '4 bugs found, 2 of them high severity: shipping charged at exactly R$ 200.00 and the API accepting more than 5 units per product.',
      },
      {
        pt: 'Um relatório por bug, com passos, resultado esperado e evidência.',
        en: 'One report per bug, with steps, expected result and evidence.',
      },
    ],
    images: [
      { src: qaRelatorio, alt: { pt: 'Relatório do Playwright', en: 'Playwright report' } },
      { src: qaBug, alt: { pt: 'Evidência do bug de frete com subtotal de R$ 200,00', en: 'Evidence of the shipping bug at R$ 200.00' } },
    ],
  },
];
