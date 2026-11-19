import type { Certification } from './types';

const same = (s: string) => ({ pt: s, en: s });

export const certifications: Certification[] = [
  {
    name: same('AWS Certified AI Practitioner (AIF-C01)'),
    issuer: 'Amazon Web Services',
    featured: true,
  },
  {
    name: { pt: 'Bootcamp Santander Dados com Python e IA', en: 'Santander Data with Python and AI Bootcamp' },
    issuer: 'DIO',
    detail: {
      pt: 'Concluído em nov/2026: Python e POO, testes, dados, bancos relacionais, machine learning, NLP, visão computacional, IA generativa e agentes de IA.',
      en: 'Completed Nov 2026: Python and OOP, testing, data, relational databases, machine learning, NLP, computer vision, generative AI and AI agents.',
    },
    featured: true,
  },
  {
    name: {
      pt: 'Bootcamp IBM Confluent: Dados em Tempo Real para Agentes de IA',
      en: 'IBM Confluent Bootcamp: Real-Time Data for AI Agents',
    },
    issuer: 'DIO',
    featured: true,
  },
  { name: same('EF SET English Certificate: 69/100 (C1 Advanced)'), issuer: 'EF SET', featured: false },
  {
    name: same('NodeJS: The Complete Guide (incl. MVC, REST APIs, GraphQL)'),
    issuer: 'Udemy · Maximilian Schwarzmüller',
    featured: false,
  },
  {
    name: same('100 Days of Code: The Complete Python Pro Bootcamp'),
    issuer: 'Udemy · Angela Yu',
    featured: false,
  },
  {
    name: same("SQL and PostgreSQL: The Complete Developer's Guide"),
    issuer: 'Udemy · Stephen Grider',
    featured: false,
  },
  {
    name: same('Playwright JS/TS Automation Testing from Scratch & Framework'),
    issuer: 'Udemy · Rahul Shetty',
    featured: false,
  },
  {
    name: same('The AI Engineer Course: Complete AI Engineer Bootcamp'),
    issuer: 'Udemy · 365 Careers',
    featured: false,
  },
];
