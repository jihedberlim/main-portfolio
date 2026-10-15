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
    socials: 'Redes sociais',
  },
  nav: {
    home: 'Início',
    about: 'Sobre',
    skills: 'Habilidades',
    projects: 'Projetos',
    contact: 'Contato',
  },
  hero: {
    badge: 'Aberto a oportunidades',
    greeting: 'Olá, eu sou',
    role: 'Desenvolvedor Júnior',
    roleDetail: 'Front-end & Back-end',
    description:
      'Tenho interesse em atuar tanto no front-end quanto no back-end. Gosto de criar aplicações responsivas e funcionais, sempre buscando aprender novas tecnologias e melhorar minhas habilidades.',
    ctaPrimary: 'Ver projetos',
    ctaSecondary: 'Fale comigo',
    photoAlt: 'Foto de Jihed Berlim sorrindo em um evento à noite, com uma roda-gigante iluminada ao fundo',
  },
  contact: {
    whatsappMessage: 'Olá, Jihed! Tudo bem? Estava navegando pelo seu portfólio e gostaria de entrar em contato com você.',
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
    socials: 'Social links',
  },
  nav: {
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact',
  },
  hero: {
    badge: 'Open to opportunities',
    greeting: "Hi, I'm",
    role: 'Junior Developer',
    roleDetail: 'Front-end & Back-end',
    description:
      "I'm interested in working on both the front-end and the back-end. I enjoy building responsive, functional applications, and I'm always looking to learn new technologies and sharpen my skills.",
    ctaPrimary: 'View projects',
    ctaSecondary: 'Get in touch',
    photoAlt: 'Photo of Jihed Berlim smiling at a night event, with a lit Ferris wheel in the background',
  },
  contact: {
    whatsappMessage: 'Hi Jihed! How are you? I was browsing your portfolio and would like to get in touch with you.',
  },
};

export const translations: Record<Lang, Translations> = { pt, en };
