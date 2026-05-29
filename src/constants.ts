import { Project, SkillCategory } from '@/types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Loja Royale Estofados',
    description: 'Landing page moderna e responsiva para e-commerce de estofados.',
    image: '/royaleestofados.png',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    link: 'https://royaleestofados.vercel.app/',
  },
  {
    id: '2',
    title: 'Aplicativo Modbus TCP/IP',
    description: 'Aplicação desktop para leitura e monitoramento via protocolo Modbus.',
    image: '/modbustcpip.png',
    tags: ['Python', 'Qt', 'Modbus'],
  },
  {
    id: '4',
    title: 'LEOGÁS - Automação',
    description: 'Sistema web para compra de gás em 3 cliques.',
    image: '/leogas.png',
    tags: ['Vue.js', 'Firebase', 'Node.js'],
    link: 'https://leogas.vercel.app/',
  },
  {
    id: '5',
    title: 'Leônico Barbearia',
    description: 'Sistema de agendamento online.',
    image: '/barbearialeonico.png',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    link: 'https://www.leonicobarbearia.com.br/',
  },
  {
    id: '6',
    title: 'AquiResolve',
    description: 'Sistema administrativo web e mobile.',
    image: '/aquiresolve.png',
    tags: ['React Native', 'React', 'Express'],
  },
  {
    id: '7',
    title: 'Essencialle Studio',
    description: 'Agendamento para estúdio de beleza.',
    image: '/essenciale.png',
    tags: ['Vue.js', 'Tailwind'],
    link: 'https://nail-designer-chi.vercel.app/',
  },
  {
    id: '8',
    title: 'WillTech Power Business',
    description: 'Sistema BI integrado a ERP com dashboards e KPIs.',
    image: '/willtechBI.jpg',
    tags: ['React', 'D3.js', 'SQL Server'],
  },
  {
    id: '9',
    title: 'Tillit Parceiro+',
    description: 'Landing do programa de indicação: tecnologia feita para pessoas. Desenvolvido em React com integração a IA para tirar dúvidas em tempo real. Deploy e hospedagem na Vercel.',
    image: '/tillitparceiro.png',
    tags: ['React', 'Tailwind CSS', 'IA', 'Vercel', 'Deploy'],
    link: 'https://tillitparceiro.vercel.app/',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Front-end',
    skills: [
      { name: 'Vue.js', level: 90 },
      { name: 'React', level: 85 },
      { name: 'JavaScript', level: 88 },
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 90 },
      { name: 'Tailwind', level: 85 },
    ],
  },
  {
    title: 'Mobile & Native',
    skills: [
      { name: 'Kotlin', level: 80 },
      { name: 'Android', level: 75 },
      { name: 'React Native', level: 70 },
    ],
  },
  {
    title: 'Back-end',
    skills: [
      { name: 'Python', level: 75 },
      { name: 'Node.js', level: 70 },
      { name: 'APIs REST', level: 80 },
    ],
  },
  {
    title: 'Ferramentas',
    skills: [
      { name: 'Git', level: 85 },
      { name: 'VS Code', level: 90 },
      { name: 'Figma', level: 75 },
      { name: 'Vercel', level: 80 },
    ],
  },
];
