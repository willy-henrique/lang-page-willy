import { Project, SkillCategory } from '@/types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Loja Royale Estofados',
    description: 'Landing page moderna e responsiva para e-commerce de estofados.',
    image: 'https://picsum.photos/seed/royale/800/600',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    id: '2',
    title: 'Aplicativo Modbus TCP/IP',
    description: 'Aplicação desktop para leitura e monitoramento via protocolo Modbus.',
    image: 'https://picsum.photos/seed/modbus/800/600',
    tags: ['Python', 'Qt', 'Modbus'],
  },
  {
    id: '3',
    title: 'App Calculadora de Gado',
    description: 'Aplicativo mobile para gestão pecuária.',
    image: 'https://picsum.photos/seed/cattle/800/600',
    tags: ['Kotlin', 'Android Jetpack'],
  },
  {
    id: '4',
    title: 'LEOGÁS - Automação',
    description: 'Sistema web para compra de gás em 3 cliques.',
    image: 'https://picsum.photos/seed/leogas/800/600',
    tags: ['Vue.js', 'Firebase', 'Node.js'],
  },
  {
    id: '5',
    title: 'Leônico Barbearia',
    description: 'Sistema de agendamento online.',
    image: 'https://picsum.photos/seed/barber/800/600',
    tags: ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    id: '6',
    title: 'AquiResolve',
    description: 'Sistema administrativo web e mobile.',
    image: 'https://picsum.photos/seed/resolve/800/600',
    tags: ['React Native', 'React', 'Express'],
  },
  {
    id: '7',
    title: 'Essencialle Studio',
    description: 'Agendamento para estúdio de beleza.',
    image: 'https://picsum.photos/seed/studio/800/600',
    tags: ['Vue.js', 'Tailwind'],
  },
  {
    id: '8',
    title: 'WillTech Power Business',
    description: 'Sistema BI integrado a ERP com dashboards e KPIs.',
    image: 'https://picsum.photos/seed/bi/800/600',
    tags: ['React', 'D3.js', 'SQL Server'],
  },
  {
    id: '9',
    title: 'Sistema Web de OS',
    description: 'Gestão completa de OS integrada ao mobile.',
    image: 'https://picsum.photos/seed/os/800/600',
    tags: ['React', 'React Native', 'Node.js'],
  },
  {
    id: '10',
    title: 'NATURIZE Dedetização',
    description: 'Sistema completo empresarial em produção.',
    image: 'https://picsum.photos/seed/naturize/800/600',
    tags: ['React', 'Tailwind', 'Node.js'],
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
