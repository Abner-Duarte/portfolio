import type { Experience } from './types';

export const experience: Experience[] = [
  {
    id: 'zapsync',
    role: { pt: 'Fundador e Engenheiro de IA', en: 'Founder and AI Engineer' },
    org: 'ZapSync',
    period: { pt: 'Out/2025 até o momento', en: 'Oct 2025 – Present' },
    bullets: [
      {
        pt: 'Projetei, desenvolvi e opero sozinho um SaaS multi-tenant de atendimento com IA no WhatsApp, do pipeline de mensagens à cobrança recorrente.',
        en: 'Designed, built and run on my own a multi-tenant SaaS for AI customer service on WhatsApp, from the message pipeline to recurring billing.',
      },
      {
        pt: 'Evals, benchmark de modelos, guardrails com auto-correção, observabilidade de LLM e servidor MCP com 16 ferramentas.',
        en: 'Evals, model benchmarking, self-correcting guardrails, LLM observability and an MCP server with 16 tools.',
      },
      {
        pt: 'Isolamento multi-tenant, segurança e 194 testes automatizados contra PostgreSQL real no GitHub Actions.',
        en: 'Multi-tenant isolation, security and 194 automated tests against a real PostgreSQL database on GitHub Actions.',
      },
    ],
  },
  {
    id: 'consumer',
    role: {
      pt: 'Analista de Suporte Técnico N2/N3 e Especialista em Implantação',
      en: 'L2/L3 Technical Support Analyst and Implementation Specialist',
    },
    org: 'Consumer Soluções em Tecnologia',
    period: { pt: 'Fev/2024 a Set/2026', en: 'Feb 2024 – Sep 2026' },
    bullets: [
      {
        pt: 'Mais de 10 mil chamados resolvidos, com média acima de 400 por mês, em ERP para food service em produção.',
        en: 'More than 10,000 tickets resolved, averaging over 400 per month, on a production ERP for food service.',
      },
      {
        pt: 'Diagnóstico de causa raiz com logs e SQL no Firebird; integrações de NF-e, NFC-e, SEFAZ, TEF e delivery.',
        en: 'Root cause analysis with logs and SQL on Firebird; NF-e, NFC-e, SEFAZ, TEF and delivery integrations.',
      },
      {
        pt: 'Criei o D3code, ferramenta interna com IA adotada pelo time de suporte.',
        en: 'Built D3code, an internal AI tool adopted by the support team.',
      },
      {
        pt: 'Implantações completas de novos clientes e treinamento de colaboradores e equipes de clientes.',
        en: 'End-to-end implementations for new customers and training for team members and customer staff.',
      },
    ],
  },
  {
    id: 'mei',
    role: { pt: 'Técnico Autônomo (MEI)', en: 'Independent IT Technician (MEI)' },
    org: 'Prestação de serviços',
    period: { pt: 'Sob demanda', en: 'On demand' },
    bullets: [
      {
        pt: 'Instalação e configuração de equipamentos e infraestrutura de TI, incluindo TVs em escolas, com emissão de nota fiscal.',
        en: 'Installation and configuration of IT equipment and infrastructure, including TVs in schools, with formal invoicing.',
      },
    ],
  },
];
