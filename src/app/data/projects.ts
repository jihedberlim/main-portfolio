import { Localized } from '../core/translations';

export interface Project {
  title: string;
  description: Localized;
  image: string;
  imageAlt: Localized;
  tags: string[];
  repo: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    title: 'Beauty Salon',
    description: {
      pt: 'Landing page responsiva para um salão de beleza, criada durante a NLW da Rocketseat. Tem menu fixo, navegação suave entre as seções e um visual elegante e minimalista.',
      en: 'Responsive landing page for a beauty salon, built during Rocketseat’s NLW event. It features a fixed menu, smooth navigation between sections and an elegant, minimalist look.',
    },
    image: 'images/project-one.png',
    imageAlt: {
      pt: 'Página inicial do site Beauty Salon',
      en: 'Beauty Salon website home page',
    },
    tags: ['HTML', 'CSS', 'JavaScript'],
    repo: 'https://github.com/jihedberlim/beautysalon',
    demo: 'https://jihedberlim.github.io/beautysalon/',
  },
  {
    title: 'Prompts Manager',
    description: {
      pt: 'Aplicação web para criar, buscar e organizar prompts de IA em um só lugar, evitando que prompts úteis se percam. Inclui busca por palavras-chave e interface responsiva.',
      en: 'Web app to create, search and organize AI prompts in one place, so useful prompts never get lost. Includes keyword search and a responsive interface.',
    },
    image: 'images/project-two.png',
    imageAlt: {
      pt: 'Tela do Prompts Manager com a lista de prompts e o editor',
      en: 'Prompts Manager screen with the prompt list and editor',
    },
    tags: ['HTML', 'CSS', 'JavaScript'],
    repo: 'https://github.com/jihedberlim/prompts-manager',
    demo: 'https://prompts-manager-tawny.vercel.app/',
  },
  {
    title: 'Bank Account',
    description: {
      pt: 'Aplicação de terminal em Java 21 que simula uma conta bancária: consulta de saldo, depósitos e transferências com aviso de saldo insuficiente. Desafio do programa Oracle Next Education (ONE).',
      en: 'Java 21 terminal app that simulates a bank account: balance check, deposits and transfers with an insufficient-funds warning. A challenge from the Oracle Next Education (ONE) program.',
    },
    image: 'images/project-three.png',
    imageAlt: {
      pt: 'Menu da aplicação Bank Account rodando no terminal',
      en: 'Bank Account app menu running in the terminal',
    },
    tags: ['Java'],
    repo: 'https://github.com/jihedberlim/bank-account-challenge',
  },
];
