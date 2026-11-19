import type { Project } from './types';
import dataPilot from '../assets/projects/data-pilot/painel.png';
import fraude from '../assets/projects/deteccao-fraude/07_shap_beeswarm.png';
import qaVerzel from '../assets/projects/qa-verzel/automacao-relatorio-playwright.png';
import barbearia from '../assets/projects/barbearia/logotipo-da-barbearia.jpg';
import fatecFighters from '../assets/projects/fatec-fighters/background.png';
import jogosPython from '../assets/projects/jogos-python/coletor.png';

const gh = (repo: string) => `https://github.com/Abner-Duarte/${repo}`;
const code = { pt: 'Código no GitHub', en: 'Code on GitHub' };
const showcase = { pt: 'Vitrine no GitHub', en: 'Showcase on GitHub' };

export const projects: Project[] = [
  {
    slug: 'data-pilot',
    image: dataPilot,
    title: { pt: 'Data Pilot', en: 'Data Pilot' },
    summary: {
      pt: 'Painel de vendas que conversa. O LLM escolhe qual função Python chamar (tool calling) e o Python calcula, então o modelo não inventa números. Testes garantem que o chat e o painel mostram o mesmo valor.',
      en: 'A sales dashboard you can talk to. The LLM picks which Python function to call (tool calling) and Python does the math, so the model never makes up numbers. Tests guarantee the chat and the dashboard show the same value.',
    },
    highlight: { pt: 'Projeto do Bootcamp Santander/DIO', en: 'Santander/DIO Bootcamp project' },
    stack: ['Python', 'Streamlit', 'Plotly', 'OpenRouter', 'pytest'],
    links: [{ label: code, href: gh('data-pilot') }],
    caseStudy: true,
    year: 2026,
  },
  {
    slug: 'deteccao-fraude',
    image: fraude,
    title: { pt: 'Detecção de fraude em cartão', en: 'Credit card fraud detection' },
    summary: {
      pt: '284 mil transações com 0,17% de fraude. Comparei modelos por precisão, recall e PR-AUC, ajustei o limiar e expliquei as decisões com SHAP.',
      en: '284k transactions with 0.17% fraud. Compared models by precision, recall and PR-AUC, tuned the decision threshold and explained predictions with SHAP.',
    },
    highlight: { pt: '83 de 98 fraudes com 15 alarmes falsos', en: '83 of 98 frauds caught with 15 false alarms' },
    stack: ['Python', 'scikit-learn', 'XGBoost', 'SHAP', 'Jupyter'],
    links: [{ label: code, href: gh('deteccao-fraude-cartao') }],
    caseStudy: true,
    year: 2026,
  },
  {
    slug: 'behappier',
    title: { pt: 'BeHappier', en: 'BeHappier' },
    summary: {
      pt: 'App Android com IA multimodal (chat, visão e voz) que projetei e construí sozinho, com backend no Firebase e a chave da API protegida em Cloud Functions.',
      en: 'Android app with multimodal AI (chat, vision and voice) that I designed and built on my own, with a Firebase backend and the API key protected in Cloud Functions.',
    },
    highlight: { pt: 'Cerca de 8.700 linhas em TypeScript', en: 'About 8,700 lines of TypeScript' },
    stack: ['React Native', 'Expo', 'TypeScript', 'Firebase', 'OpenAI'],
    links: [{ label: showcase, href: gh('behappier-showcase') }],
    caseStudy: true,
    year: 2026,
  },
  {
    slug: 'qa-verzel',
    image: qaVerzel,
    title: { pt: 'Teste técnico de QA (Verzel)', en: 'QA take-home assignment (Verzel)' },
    summary: {
      pt: 'Plano, casos em Gherkin, testes manuais e exploratórios e automação com Playwright (interface em Chrome, Firefox, Safari e mobile, mais testes de API) rodando no GitHub Actions.',
      en: 'Test plan, Gherkin test cases, manual and exploratory testing, and Playwright automation (UI on Chrome, Firefox, Safari and mobile, plus API tests) running on GitHub Actions.',
    },
    highlight: { pt: '4 bugs encontrados, 2 de severidade alta', en: '4 bugs found, 2 of them high severity' },
    stack: ['Playwright', 'TypeScript', 'Gherkin', 'GitHub Actions'],
    links: [{ label: code, href: gh('Teste-qa-verzel') }],
    caseStudy: true,
    year: 2026,
  },
  {
    slug: 'prospeccao-zapsync',
    title: { pt: 'Prospecção de clientes do ZapSync', en: 'ZapSync lead generation' },
    summary: {
      pt: 'Script que busca negócios locais por tipo e cidade na Google Places API e gera a lista de contatos para abordagem.',
      en: 'Script that searches local businesses by category and city through the Google Places API and builds the outreach contact list.',
    },
    highlight: {
      pt: '1.500 leads em São José do Rio Preto e Mirassol',
      en: '1,500 leads in São José do Rio Preto and Mirassol',
    },
    stack: ['Python', 'Google Places API', 'CSV'],
    links: [],
    caseStudy: false,
    year: 2026,
  },
  {
    slug: 'quest-contratado',
    title: { pt: 'Quest Contratado', en: 'Quest Contratado' },
    summary: {
      pt: 'Jogo web que criei para gamificar minha busca de emprego e meus estudos, com XP, missões diárias, trilhas de Python, SQL e AWS com revisão espaçada, entrevista simulada com IA e herói 3D animado.',
      en: 'Web game I built to gamify my job search and studies, with XP, daily quests, Python, SQL and AWS tracks with spaced repetition, AI mock interviews and an animated 3D hero.',
    },
    highlight: { pt: '60 lições de Python e 112 de cloud', en: '60 Python lessons and 112 cloud lessons' },
    stack: ['JavaScript', 'HTML', 'CSS', 'three.js', 'three-vrm'],
    links: [],
    caseStudy: false,
    year: 2026,
  },
  {
    slug: 'reinos-eternos',
    title: { pt: 'Reinos Eternos', en: 'Reinos Eternos' },
    summary: {
      pt: 'Idle RPG de fantasia em 3D no navegador, com 4 classes animadas, combate com armadura, esquiva e bloqueio, árvores de talento com sinergias, forja e um simulador próprio para balancear a progressão.',
      en: '3D fantasy idle RPG in the browser, with 4 animated classes, combat with armor, dodge and block, talent trees with synergies, item forging and my own simulator to balance progression.',
    },
    highlight: { pt: '10 zonas e 24 monstros', en: '10 zones and 24 monsters' },
    stack: ['JavaScript', 'Three.js', 'WebAudio', 'Node.js'],
    links: [],
    caseStudy: false,
    year: 2026,
  },
  {
    slug: 'tt2-otimizadores',
    title: { pt: 'TT2 Otimizadores', en: 'TT2 Optimizers' },
    summary: {
      pt: 'Conjunto de ferramentas que roda localmente os otimizadores de um jogo mobile a partir do export da conta, com motor próprio em Node.js e Python, tabelas oficiais do jogo em CSV e execução de páginas web sem navegador.',
      en: "Toolkit that runs a mobile game's optimizers locally from the account export, with my own engine in Node.js and Python, the game's official CSV tables and headless execution of web pages.",
    },
    stack: ['Node.js', 'Python', 'jsdom', 'CSV', 'JSON'],
    links: [],
    caseStudy: false,
    year: 2026,
  },
  {
    slug: 'd3code',
    title: { pt: 'D3code', en: 'D3code' },
    summary: {
      pt: 'Ferramenta interna com IA adotada pelo time de suporte da Consumer: transcreve áudios de clientes (Groq Whisper) e extrai dados de prints (Gemini), com Google OAuth restrito ao domínio da empresa e controle de uso por usuário.',
      en: "Internal AI tool adopted by Consumer's support team: it transcribes customer voice messages (Groq Whisper) and extracts data from screenshots (Gemini), with Google OAuth restricted to the company domain and per-user usage tracking.",
    },
    highlight: { pt: 'Em uso pelo time de suporte', en: 'Used daily by the support team' },
    stack: ['Cloudflare Workers', 'Groq Whisper', 'Gemini', 'Google OAuth', 'JavaScript'],
    links: [],
    caseStudy: false,
    year: 2026,
  },
  {
    slug: 'userscript-chatwoot',
    title: { pt: 'Userscript do Chatwoot', en: 'Chatwoot userscript' },
    summary: {
      pt: 'Extensão no navegador que escuta os eventos em tempo real do Chatwoot e avisa o agente quando entra uma conversa nova na fila, sem mexer no servidor.',
      en: "Browser extension that listens to Chatwoot's real-time events and alerts agents when a new conversation enters the queue, with no server changes.",
    },
    stack: ['JavaScript', 'Tampermonkey', 'WebSocket'],
    links: [],
    caseStudy: false,
    year: 2026,
  },
  {
    slug: 'simuladores-qa',
    title: { pt: 'Simuladores de QA', en: 'QA study simulators' },
    summary: {
      pt: 'Simuladores interativos em HTML que montei para estudar para a vaga interna de QA, cobrindo Azure DevOps, Selenium, Cypress, Robot Framework, Git, SQL e Postman.',
      en: 'Interactive HTML simulators I built to prepare for an internal QA position, covering Azure DevOps, Selenium, Cypress, Robot Framework, Git, SQL and Postman.',
    },
    stack: ['HTML', 'CSS', 'JavaScript'],
    links: [],
    caseStudy: false,
    year: 2026,
  },
  {
    slug: 'jogos-python',
    image: jogosPython,
    title: { pt: 'Jogos em Python', en: 'Python games' },
    summary: {
      pt: 'Dois jogos em Pygame Zero com código comentado para quem está aprendendo, com toda a arte e todos os sons gerados por código, e três scripts de terminal (estoque, comissão e juros).',
      en: 'Two Pygame Zero games with beginner-friendly commented code, with all art and sound generated by code, plus three terminal scripts (inventory, sales commission and late-payment interest).',
    },
    stack: ['Python', 'Pygame Zero', 'Pillow'],
    links: [{ label: code, href: gh('portfolio-python') }],
    caseStudy: false,
    year: 2026,
  },
  {
    slug: 'desafio-python',
    title: { pt: 'Desafio técnico em Python', en: 'Python coding challenge' },
    summary: {
      pt: 'Três exercícios de regra de negócio (comissão de vendas a partir de JSON, movimentação de estoque com validação e juros por atraso) usando só a biblioteca padrão.',
      en: 'Three business-rule exercises (sales commission from JSON, inventory movements with validation and late-payment interest) using only the standard library.',
    },
    stack: ['Python', 'json', 'datetime', 'uuid'],
    links: [{ label: code, href: gh('Desafios-Dev') }],
    caseStudy: false,
    year: 2026,
  },
  {
    slug: 'arduino-portao',
    title: { pt: 'Simulador de portão com Arduino', en: 'Arduino gate simulator' },
    summary: {
      pt: 'Projeto acadêmico da Fatec: portão automático simulado com Arduino, documentado em blog.',
      en: 'FATEC academic project: an automatic gate simulated with Arduino, documented in a blog.',
    },
    stack: ['Arduino', 'Eletrônica'],
    links: [
      {
        label: { pt: 'Blog do projeto', en: 'Project blog' },
        href: 'https://ganzellalorenzo.github.io/blog-luciene/',
      },
    ],
    caseStudy: false,
    year: 2026,
  },
  {
    slug: 'bot-whatsapp-gpt',
    title: { pt: 'Bot de WhatsApp com GPT', en: 'WhatsApp bot with GPT' },
    summary: {
      pt: 'Meu primeiro bot de WhatsApp integrado a um modelo GPT, que serviu de base para o ZapSync.',
      en: 'My first WhatsApp bot connected to a GPT model, which became the foundation for ZapSync.',
    },
    stack: ['WhatsApp', 'OpenAI GPT'],
    links: [],
    caseStudy: false,
    year: 2025,
  },
  {
    slug: 'barbearia',
    image: barbearia,
    title: { pt: 'Barbearia do Pra', en: 'Barbearia do Pra' },
    summary: {
      pt: 'Projeto em equipe na Fatec: sistema web full stack de agendamento com painel administrativo de agenda, profissionais, serviços e horários.',
      en: 'FATEC team project: full-stack web scheduling system with an admin panel for bookings, barbers, services and opening hours.',
    },
    stack: ['Java 17', 'Spring Boot', 'SQL Server', 'JavaScript'],
    links: [{ label: code, href: gh('Barbearia-Site') }],
    caseStudy: false,
    year: 2025,
  },
  {
    slug: 'fatec-fighters',
    image: fatecFighters,
    title: { pt: 'Fatec Fighters', en: 'Fatec Fighters' },
    summary: {
      pt: 'Projeto em equipe na Fatec: jogo de luta 2D para dois jogadores com login, placar e ranking no PostgreSQL. Evoluiu de um protótipo numa classe única para telas separadas com camada DAO e consultas parametrizadas.',
      en: 'FATEC team project: 2D two-player fighting game with login, scoring and a leaderboard in PostgreSQL. It evolved from a single-class prototype into separate screens with a DAO layer and parameterized queries.',
    },
    stack: ['Java', 'libGDX', 'PostgreSQL', 'JDBC', 'Gradle'],
    links: [{ label: code, href: gh('FatecFighters') }],
    caseStudy: false,
    year: 2024,
  },
  {
    slug: 'sysos',
    title: { pt: 'SysOs', en: 'SysOs' },
    summary: {
      pt: 'Projeto final do curso de front-end: site institucional e de vendas de um sistema de ordens de serviço e pedidos para pequenos negócios, com planos, login e cadastro e layout responsivo.',
      en: 'Front-end course final project: marketing and sales website for a work-order and online-ordering system for small businesses, with pricing plans, sign-in/sign-up and a responsive layout.',
    },
    stack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    links: [{ label: code, href: gh('Projeto-Final') }],
    caseStudy: false,
    year: 2023,
  },
];
