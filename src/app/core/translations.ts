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
  about: {
    eyebrow: 'Sobre',
    title: 'Quem sou eu?',
    lead: 'Desenvolvedor júnior entusiasta da tecnologia e de inovações.',
    paragraphs: [
      'Me chamo Jihed Elmograbi Berlim, um desenvolvedor júnior atraído por tecnologia e inovações. Ao longo da minha jornada, venho desenvolvendo projetos pessoais práticos com diferentes tecnologias do ecossistema web, com o objetivo de adquirir conhecimento para criar soluções que atendam às necessidades reais dos usuários.',
      'Estou constantemente estudando, me atualizando e buscando novas formas de resolver problemas de maneira criativa e eficiente, com o objetivo de crescer profissionalmente e contribuir de forma significativa em um time de desenvolvimento.',
    ],
    focus: {
      frontend: {
        title: 'Front-end',
        text: 'Interfaces responsivas e acessíveis com Angular, TypeScript e Tailwind CSS.',
      },
      backend: {
        title: 'Back-end',
        text: 'Regras de negócio e APIs com Java e Spring Boot.',
      },
      learning: {
        title: 'Aprendizado contínuo',
        text: 'Sempre estudando novas tecnologias e boas práticas de desenvolvimento.',
      },
    },
  },
  skills: {
    eyebrow: 'Habilidades',
    title: 'Minha caixa de ferramentas',
    description: 'Tecnologias e ferramentas que utilizo e nas quais continuo me aprofundando.',
    categories: {
      frontend: 'Front-end',
      backend: 'Back-end',
      tools: 'Ferramentas',
    },
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
  about: {
    eyebrow: 'About',
    title: 'Who am I?',
    lead: 'Junior developer passionate about technology and innovation.',
    paragraphs: [
      "My name is Jihed Elmograbi Berlim, a junior developer drawn to technology and innovation. Along my journey I've been building hands-on personal projects with different web technologies, aiming to gain the knowledge to create solutions that meet users' real needs.",
      "I'm constantly studying, keeping up to date and looking for creative, efficient ways to solve problems, so I can grow professionally and make a meaningful contribution to a development team.",
    ],
    focus: {
      frontend: {
        title: 'Front-end',
        text: 'Responsive, accessible interfaces with Angular, TypeScript and Tailwind CSS.',
      },
      backend: {
        title: 'Back-end',
        text: 'Business logic and APIs with Java and Spring Boot.',
      },
      learning: {
        title: 'Always learning',
        text: 'Continuously studying new technologies and development best practices.',
      },
    },
  },
  skills: {
    eyebrow: 'Skills',
    title: 'My toolbox',
    description: 'Technologies and tools I use and keep going deeper into.',
    categories: {
      frontend: 'Front-end',
      backend: 'Back-end',
      tools: 'Tools',
    },
  },
  contact: {
    whatsappMessage: 'Hi Jihed! How are you? I was browsing your portfolio and would like to get in touch with you.',
  },
};

export const translations: Record<Lang, Translations> = { pt, en };
