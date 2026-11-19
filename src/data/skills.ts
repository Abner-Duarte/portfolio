import type { SkillGroup } from './types';

export const skills: SkillGroup[] = [
  {
    group: { pt: 'IA e LLMs', en: 'AI and LLMs' },
    items: {
      pt: ['OpenAI', 'Groq', 'Gemini', 'Whisper', 'Saída estruturada', 'Tool calling', 'Agentes', 'RAG híbrido', 'Embeddings', 'Guardrails', 'Evals', 'Observabilidade de LLM', 'MCP'],
      en: ['OpenAI', 'Groq', 'Gemini', 'Whisper', 'Structured output', 'Tool calling', 'Agents', 'Hybrid RAG', 'Embeddings', 'Guardrails', 'Evals', 'LLM observability', 'MCP'],
    },
  },
  {
    group: { pt: 'Machine learning e dados', en: 'Machine learning and data' },
    items: {
      pt: ['pandas', 'scikit-learn', 'XGBoost', 'SHAP', 'Streamlit', 'Plotly', 'Jupyter'],
      en: ['pandas', 'scikit-learn', 'XGBoost', 'SHAP', 'Streamlit', 'Plotly', 'Jupyter'],
    },
  },
  {
    group: { pt: 'Backend', en: 'Backend' },
    items: {
      pt: ['Node.js', 'Express', 'Python', 'Java', 'Spring Boot', 'APIs REST', 'Webhooks', 'WhatsApp Cloud API', 'Multi-tenant'],
      en: ['Node.js', 'Express', 'Python', 'Java', 'Spring Boot', 'REST APIs', 'Webhooks', 'WhatsApp Cloud API', 'Multi-tenant'],
    },
  },
  {
    group: { pt: 'Banco de dados', en: 'Databases' },
    items: {
      pt: ['PostgreSQL', 'SQL Server', 'Firebird', 'Firestore', 'Modelagem de dados'],
      en: ['PostgreSQL', 'SQL Server', 'Firebird', 'Firestore', 'Data modeling'],
    },
  },
  {
    group: { pt: 'Front-end e mobile', en: 'Front-end and mobile' },
    items: {
      pt: ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'React Native', 'Expo', 'Astro'],
      en: ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'React Native', 'Expo', 'Astro'],
    },
  },
  {
    group: { pt: 'QA e testes', en: 'QA and testing' },
    items: {
      pt: ['Playwright', 'Gherkin (BDD)', 'Testes de API', 'node:test', 'pytest', 'Vitest'],
      en: ['Playwright', 'Gherkin (BDD)', 'API testing', 'node:test', 'pytest', 'Vitest'],
    },
  },
  {
    group: { pt: 'Cloud e DevOps', en: 'Cloud and DevOps' },
    items: {
      pt: ['GitHub Actions', 'Railway', 'Vercel', 'Firebase', 'Cloudflare Workers', 'Git', 'AWS'],
      en: ['GitHub Actions', 'Railway', 'Vercel', 'Firebase', 'Cloudflare Workers', 'Git', 'AWS'],
    },
  },
  {
    group: { pt: 'Suporte e negócio', en: 'Support and business' },
    items: {
      pt: ['Suporte N2/N3', 'Causa raiz', 'Implantação de ERP', 'NF-e e NFC-e', 'SEFAZ', 'TEF', 'PDV', 'Food service'],
      en: ['L2/L3 support', 'Root cause analysis', 'ERP implementation', 'Brazilian e-invoicing', 'SEFAZ', 'TEF payments', 'POS', 'Food service'],
    },
  },
];
