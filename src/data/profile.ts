import type { Link, Localized, Proof } from './types';
import photo from '../assets/foto.jpg';
import zapsyncSite from '../assets/projects/zapsync/site-desktop.png';

export const profile = {
  name: 'Abner Evandro Duarte',
  photo,
  role: { pt: 'Engenheiro de IA · Desenvolvedor Backend', en: 'AI Engineer · Backend Developer' } as Localized,
  tagline: {
    pt: 'Coloco LLMs em produção: RAG, saída estruturada, guardrails, evals e custo medido em cada chamada. Fundei e opero sozinho o ZapSync, atendimento com IA no WhatsApp.',
    en: 'I ship LLMs to production: RAG, structured output, guardrails, evals and cost measured on every call. I founded and run ZapSync on my own, AI customer service on WhatsApp.',
  } as Localized,
  location: { pt: 'São José do Rio Preto, SP, Brasil', en: 'São José do Rio Preto, SP, Brazil' } as Localized,
  availability: {
    pt: 'Disponível para trabalho remoto, híbrido ou presencial',
    en: 'Open to remote, hybrid or on-site work',
  } as Localized,
  about: {
    pt: 'Vim do suporte técnico N2/N3 e da implantação de ERP, onde resolvi mais de 10 mil chamados e aprendi a achar a causa raiz em sistemas que não podem parar. Hoje uso essa bagagem para construir produtos com IA que aguentam o mundo real. Falo inglês avançado (C1) e sou AWS Certified AI Practitioner.',
    en: 'I come from L2/L3 technical support and ERP implementation, where I resolved more than 10,000 tickets and learned to find the root cause in systems that cannot stop. Today I use that background to build AI products that hold up in the real world. I speak advanced English (C1) and I am an AWS Certified AI Practitioner.',
  } as Localized,
  proofs: [
    {
      value: { pt: 'No ar', en: 'Live' },
      label: { pt: 'ZapSync em produção, com demo pública', en: 'ZapSync in production, with a public demo' },
      href: 'https://www.zapsync-ia.com.br/demo',
    },
    {
      value: { pt: '97%', en: '97%' },
      label: { pt: 'de acerto nos evals da IA', en: 'accuracy on the AI evals' },
    },
    {
      value: { pt: '194', en: '194' },
      label: { pt: 'testes automatizados no CI', en: 'automated tests on CI' },
    },
    {
      value: { pt: 'US$ 5,45', en: 'US$ 5.45' },
      label: { pt: 'por 1.000 respostas da IA', en: 'per 1,000 AI replies' },
    },
  ] as Proof[],
  featured: {
    slug: 'zapsync',
    image: zapsyncSite,
    title: { pt: 'ZapSync · Atendimento com IA no WhatsApp', en: 'ZapSync · AI customer service on WhatsApp' } as Localized,
    summary: {
      pt: 'SaaS multi-tenant que eu projetei, desenvolvi e opero sozinho. A IA atende os clientes de restaurantes, pizzarias, barbearias e clínicas, fecha pedidos, marca horários e passa para um humano quando precisa.',
      en: 'Multi-tenant SaaS that I designed, built and operate on my own. The AI serves customers of restaurants, pizzerias, barbershops and clinics, takes orders, books appointments and hands off to a human when needed.',
    } as Localized,
    bullets: [
      {
        pt: 'Cascata de 11 tentativas entre OpenAI e Groq com saída estruturada em JSON Schema estrito: o cliente nunca fica sem resposta.',
        en: '11-step fallback cascade across OpenAI and Groq with strict JSON Schema structured output: customers never go unanswered.',
      },
      {
        pt: 'RAG híbrido no PostgreSQL: palavra-chave mais embeddings, reindexando só o que mudou.',
        en: 'Hybrid RAG in PostgreSQL: keyword search plus embeddings, re-embedding only what changed.',
      },
      {
        pt: 'Evals com 58 turnos e benchmark por modelo: 97% de acerto, 1,6 s de resposta típica, US$ 5,45 por 1.000 respostas.',
        en: 'Evals with 58 turns and a per-model benchmark: 97% accuracy, 1.6 s typical response, US$ 5.45 per 1,000 replies.',
      },
      {
        pt: 'O benchmark achou uma falha de prompt injection; depois da correção, segurança foi de 89% para 100%.',
        en: 'The benchmark found a prompt injection flaw; after the fix, the security category went from 89% to 100%.',
      },
      {
        pt: 'Servidor MCP com 16 ferramentas, observabilidade de custo e latência e 194 testes no GitHub Actions. Hospedado no Railway e na Vercel.',
        en: 'MCP server with 16 tools, cost and latency observability and 194 tests on GitHub Actions. Hosted on Railway and Vercel.',
      },
    ] as Localized[],
    stack: ['Node.js', 'PostgreSQL', 'OpenAI', 'Groq', 'Meta Cloud API', 'MCP', 'GitHub Actions'],
    links: [
      { label: { pt: 'Testar a demo', en: 'Try the demo' }, href: 'https://www.zapsync-ia.com.br/demo' },
      { label: { pt: 'Site', en: 'Website' }, href: 'https://www.zapsync-ia.com.br' },
      {
        label: { pt: 'Arquitetura no GitHub', en: 'Architecture on GitHub' },
        href: 'https://github.com/Abner-Duarte/zapsync-showcase',
      },
    ] as Link[],
  },
  contact: {
    phone: '(17) 99181-6083',
    whatsapp: 'https://wa.me/5517991816083',
    email: 'abnerduartw@gmail.com',
    linkedin: 'https://www.linkedin.com/in/abner-evandro-duarte-79352523a/',
    github: 'https://github.com/Abner-Duarte',
  },
  education: {
    degree: {
      pt: 'Tecnólogo em Informática para Negócios',
      en: 'Associate Degree in Information Technology for Business',
    } as Localized,
    school: {
      pt: 'FATEC · Faculdade de Tecnologia do Estado de São Paulo, São José do Rio Preto',
      en: 'FATEC · São Paulo State Technological College, São José do Rio Preto',
    } as Localized,
    year: { pt: 'Concluído em 2026', en: 'Completed 2026' } as Localized,
    thesis: {
      pt: 'TCC sobre mecanismos de desligamento automático em IA.',
      en: 'Thesis on automatic shutdown mechanisms in AI.',
    } as Localized,
  },
  cv: {
    pt: '/cv/Abner_Evandro_Duarte_Curriculo_PT.pdf',
    en: '/cv/Abner_Evandro_Duarte_Resume_EN.pdf',
  },
};
