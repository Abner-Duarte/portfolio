import type { TimelineItem } from './types';

export const timeline: TimelineItem[] = [
  {
    year: 2023,
    title: 'SysOs',
    href: 'https://github.com/Abner-Duarte/Projeto-Final',
    text: {
      pt: 'Meu primeiro site, só HTML, CSS e JS: um sistema de pedidos para pequenos negócios. É o mesmo problema que o ZapSync resolve hoje.',
      en: 'My first website, just HTML, CSS and JS: an ordering system for small businesses. The same problem ZapSync solves today.',
    },
  },
  {
    year: 2024,
    title: 'Fatec Fighters',
    href: 'https://github.com/Abner-Duarte/FatecFighters',
    text: {
      pt: 'Jogo de luta em Java, feito em equipe. A primeira versão era uma classe só; a final virou telas separadas com camada DAO e PostgreSQL. Foi ali que aprendi a organizar código.',
      en: 'A fighting game in Java, built as a team. The first version was a single class; the final one had separate screens with a DAO layer and PostgreSQL. That is where I learned to organize code.',
    },
  },
  {
    year: 2025,
    title: 'Barbearia do Pra',
    href: 'https://github.com/Abner-Duarte/Barbearia-Site',
    text: {
      pt: 'Full stack com Spring Boot e SQL Server, também em equipe: agendamento com regra de negócio de verdade.',
      en: 'Full stack with Spring Boot and SQL Server, also as a team: scheduling with real business rules.',
    },
  },
  {
    year: 2026,
    title: 'ZapSync',
    href: 'https://github.com/Abner-Duarte/zapsync-showcase',
    text: {
      pt: 'Produto com IA em produção, com cobrança recorrente, evals, observabilidade e testes no CI.',
      en: 'An AI product in production, with recurring billing, evals, observability and tests on CI.',
    },
  },
];
