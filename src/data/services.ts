import type { Service } from './types';

export const services: Service[] = [
  {
    title: { pt: 'Atendimento com IA no WhatsApp', en: 'AI customer service on WhatsApp' },
    text: {
      pt: 'Um atendente que conhece seu cardápio ou seus serviços, responde 24 horas, fecha pedidos, marca horários e chama um humano quando precisa.',
      en: 'An assistant that knows your menu or services, answers 24/7, takes orders, books appointments and calls a human when needed.',
    },
    proofSlugs: ['zapsync'],
  },
  {
    title: { pt: 'Assistentes com IA sobre os seus dados', en: 'AI assistants over your data' },
    text: {
      pt: 'RAG, painéis que conversam e automações que leem áudio, imagem e documentos, sempre com o número vindo do seu sistema e não do modelo.',
      en: 'RAG, dashboards you can talk to and automations that read audio, images and documents, with numbers always coming from your system, not the model.',
    },
    proofSlugs: ['data-pilot', 'zapsync', 'd3code'],
  },
  {
    title: { pt: 'Sistemas web e apps sob medida', en: 'Custom web systems and apps' },
    text: {
      pt: 'Do banco de dados ao app no celular: painéis administrativos, APIs, integrações e apps Android.',
      en: 'From the database to the phone: admin panels, APIs, integrations and Android apps.',
    },
    proofSlugs: ['behappier', 'barbearia', 'zapsync'],
  },
  {
    title: { pt: 'Machine learning e análise de dados', en: 'Machine learning and data analysis' },
    text: {
      pt: 'Modelos que você consegue explicar: métricas certas para o seu problema, ajuste de limiar e explicação de cada decisão.',
      en: 'Models you can explain: the right metrics for your problem, threshold tuning and an explanation for every prediction.',
    },
    proofSlugs: ['deteccao-fraude'],
  },
  {
    title: { pt: 'Testes e QA', en: 'Testing and QA' },
    text: {
      pt: 'Plano de testes, casos em Gherkin, testes exploratórios e automação com Playwright rodando no CI.',
      en: 'Test plans, Gherkin cases, exploratory testing and Playwright automation running on CI.',
    },
    proofSlugs: ['qa-verzel', 'simuladores-qa'],
  },
  {
    title: { pt: 'Suporte técnico e implantação em cloud', en: 'Technical support and cloud deployment' },
    text: {
      pt: 'Diagnóstico de causa raiz, implantação de sistemas e deploy em Railway, Vercel, Firebase e Cloudflare.',
      en: 'Root cause analysis, system implementation and deployment on Railway, Vercel, Firebase and Cloudflare.',
    },
    proofSlugs: ['consumer', 'zapsync'],
  },
];
