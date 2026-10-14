export type Lang = 'pt' | 'en';

export type Localized = Record<Lang, string>;

const pt = {
  meta: {
    title: 'Jihed Berlim | Desenvolvedor Júnior',
    description:
      'Portfólio de Jihed Berlim, desenvolvedor júnior front-end e back-end com Angular, TypeScript, Java e Spring Boot.',
  },
  a11y: {
    skipToContent: 'Pular para o conteúdo',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    toggleTheme: 'Alternar tema claro/escuro',
    switchLanguage: 'Switch to English',
    mainNav: 'Navegação principal',
  },
  nav: {
    home: 'Início',
    about: 'Sobre',
    skills: 'Habilidades',
    projects: 'Projetos',
    contact: 'Contato',
  },
};

export type Translations = typeof pt;

const en: Translations = {
  meta: {
    title: 'Jihed Berlim | Junior Developer',
    description:
      'Portfolio of Jihed Berlim, a junior front-end and back-end developer working with Angular, TypeScript, Java and Spring Boot.',
  },
  a11y: {
    skipToContent: 'Skip to content',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    toggleTheme: 'Toggle light/dark theme',
    switchLanguage: 'Mudar para português',
    mainNav: 'Main navigation',
  },
  nav: {
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact',
  },
};

export const translations: Record<Lang, Translations> = { pt, en };
