import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, BarChart3, Calendar, FileText, Bug } from 'lucide-react';
import projetoWilltechBiImg from '../assets/willtech-bi-dashboard.jpg';
import projetoLeonicoImg from '../assets/leonico-barbearia.png';
import projetoAquiresolveImg from '../assets/aquiresolve2.png';
import projetoDedetizacaoWebImg from '../assets/dedetizacao.png';
import projetoDedetizacaoMobileImg from '../assets/mobile-dedetizacao.png';

const ProjectDetail = ({ language }) => {
  const { projectId } = useParams();

  const projects = {
    'willtech-bi': {
      id: 'willtech-bi',
      title: {
        'pt-BR': 'WillTech Power Business - BI Analytics',
        'en': 'WillTech Power Business - BI Analytics'
      },
      subtitle: {
        'pt-BR': 'Sistema de Business Intelligence integrado ao ERP Auge',
        'en': 'Business Intelligence system integrated with Auge ERP'
      },
      image: projetoWilltechBiImg,
      icon: BarChart3,
      category: {
        'pt-BR': 'Business Intelligence',
        'en': 'Business Intelligence'
      },
      technologies: ['Business Intelligence', 'Dashboard', 'Analytics', 'ERP Integration', 'Data Visualization', 'KPIs', 'React', 'TypeScript', 'Chart.js', 'Real-time Data'],
      description: {
        'pt-BR': `O WillTech Power Business - Matriz Analytics é um sistema completo de Business Intelligence desenvolvido para integração com o ERP Auge, sistema de gestão para supermercados já consolidado no mercado.

Este projeto representa uma solução avançada de análise de dados que transforma informações brutas do ERP em insights acionáveis para tomada de decisões estratégicas. O sistema oferece um centro de comando completo onde gestores podem monitorar em tempo real o desempenho de suas operações.`,
        'en': `WillTech Power Business - Matriz Analytics is a complete Business Intelligence system developed for integration with Auge ERP, a consolidated supermarket management system in the market.

This project represents an advanced data analysis solution that transforms raw ERP information into actionable insights for strategic decision-making. The system offers a complete command center where managers can monitor their operations' performance in real-time.`
      },
      features: {
        'pt-BR': [
          'Dashboard completo com KPIs em tempo real (Faturamento Bruto, Ticket Médio, Total de Vendas, Margem Bruta)',
          'Análise de performance de vendas diárias com comparação entre períodos',
          'Distribuição de vendas por categorias de produtos (Frios e Laticínios, Padaria, Grãos e Cereais, Hortifruti, Carnes)',
          'Gestão de múltiplas lojas com visão consolidada e individual',
          'Filtros avançados por período (últimos 30 dias, personalizado)',
          'Visualizações interativas com gráficos de linha e donut charts',
          'Sistema de relatórios exportáveis',
          'Interface responsiva e otimizada para desktop e mobile',
          'Integração em tempo real com o ERP Auge',
          'Navegação intuitiva entre diferentes módulos (Visão Geral, Análise de Vendas, Gestão de Estoque, Saúde Financeira, Operação de PDV, Compras e Vendas)'
        ],
        'en': [
          'Complete dashboard with real-time KPIs (Gross Revenue, Average Ticket, Total Sales, Gross Margin)',
          'Daily sales performance analysis with period comparison',
          'Sales distribution by product categories (Cold Cuts and Dairy, Bakery, Grains and Cereals, Produce, Meats)',
          'Multi-store management with consolidated and individual views',
          'Advanced filters by period (last 30 days, custom)',
          'Interactive visualizations with line charts and donut charts',
          'Exportable reporting system',
          'Responsive interface optimized for desktop and mobile',
          'Real-time integration with Auge ERP',
          'Intuitive navigation between different modules (Overview, Sales Analysis, Stock Management, Financial Health, POS Operation, Purchases and Sales)'
        ]
      },
      challenges: {
        'pt-BR': [
          'Integração complexa com o ERP Auge existente',
          'Processamento de grandes volumes de dados em tempo real',
          'Criação de visualizações performáticas e responsivas',
          'Garantir sincronização de dados entre múltiplas lojas',
          'Otimização de queries para relatórios complexos'
        ],
        'en': [
          'Complex integration with existing Auge ERP',
          'Processing large volumes of data in real-time',
          'Creating performant and responsive visualizations',
          'Ensuring data synchronization between multiple stores',
          'Query optimization for complex reports'
        ]
      },
      results: {
        'pt-BR': [
          'Sistema de BI totalmente funcional e integrado ao ERP Auge',
          'Dashboard responsivo com visualizações interativas',
          'Melhoria na tomada de decisões através de dados em tempo real',
          'Interface moderna e intuitiva para gestores',
          'Sistema escalável para múltiplas lojas'
        ],
        'en': [
          'Fully functional BI system integrated with Auge ERP',
          'Responsive dashboard with interactive visualizations',
          'Improved decision-making through real-time data',
          'Modern and intuitive interface for managers',
          'Scalable system for multiple stores'
        ]
      },
      liveUrl: '#',
      githubUrl: '#'
    },
    'leonico-barbearia': {
      id: 'leonico-barbearia',
      title: {
        'pt-BR': 'Leônico Barbearia - Sistema de Agendamento',
        'en': 'Leônico Barbearia - Appointment System'
      },
      subtitle: {
        'pt-BR': 'Sistema completo de agendamento online para barbearia',
        'en': 'Complete online appointment system for barbershop'
      },
      image: projetoLeonicoImg,
      icon: Calendar,
      category: {
        'pt-BR': 'Desenvolvimento Web',
        'en': 'Web Development'
      },
      technologies: ['React', 'Web App', 'Agendamento', 'UI/UX', 'Responsive Design', 'Modern CSS', 'JavaScript'],
      description: {
        'pt-BR': `O Leônico Barbearia é um sistema completo de agendamento online desenvolvido para modernizar a experiência de agendamento em barbearias. O sistema permite que clientes escolham seus barbeiros preferidos e agendem horários de forma rápida, intuitiva e totalmente responsiva.

Desenvolvido com foco na experiência do usuário, o sistema oferece uma interface moderna e elegante que facilita tanto para os clientes quanto para os gestores da barbearia.`,
        'en': `Leônico Barbearia is a complete online appointment system developed to modernize the appointment experience in barbershops. The system allows customers to choose their preferred barbers and schedule appointments quickly, intuitively, and fully responsively.

Developed with a focus on user experience, the system offers a modern and elegant interface that facilitates both customers and barbershop managers.`
      },
      features: {
        'pt-BR': [
          'Sistema de seleção de barbeiros com perfis individuais',
          'Calendário interativo para visualização e seleção de horários',
          'Agendamento rápido e intuitivo em poucos cliques',
          'Interface totalmente responsiva para desktop, tablet e mobile',
          'Design moderno e elegante com foco na experiência do usuário',
          'Sistema de confirmação de agendamentos',
          'Gestão de horários disponíveis e ocupados',
          'Perfis visuais dos barbeiros',
          'Navegação fluida e intuitiva'
        ],
        'en': [
          'Barber selection system with individual profiles',
          'Interactive calendar for viewing and selecting times',
          'Quick and intuitive scheduling in just a few clicks',
          'Fully responsive interface for desktop, tablet and mobile',
          'Modern and elegant design focused on user experience',
          'Appointment confirmation system',
          'Management of available and occupied schedules',
          'Visual barber profiles',
          'Smooth and intuitive navigation'
        ]
      },
      challenges: {
        'pt-BR': [
          'Criar uma interface intuitiva para seleção de barbeiros e horários',
          'Garantir responsividade perfeita em todos os dispositivos',
          'Implementar sistema de calendário funcional e visualmente atraente',
          'Otimizar performance para carregamento rápido',
          'Garantir usabilidade em diferentes tamanhos de tela'
        ],
        'en': [
          'Create an intuitive interface for selecting barbers and times',
          'Ensure perfect responsiveness on all devices',
          'Implement a functional and visually attractive calendar system',
          'Optimize performance for fast loading',
          'Ensure usability on different screen sizes'
        ]
      },
      results: {
        'pt-BR': [
          'Sistema totalmente funcional e responsivo',
          'Interface moderna e intuitiva',
          'Melhoria na experiência de agendamento para clientes',
          'Sistema escalável e fácil de manter',
          'Design otimizado para conversão'
        ],
        'en': [
          'Fully functional and responsive system',
          'Modern and intuitive interface',
          'Improved appointment experience for customers',
          'Scalable and easy to maintain system',
          'Conversion-optimized design'
        ]
      },
      liveUrl: 'https://barber-leonico.vercel.app/',
      githubUrl: '#'
    },
    'sistema-os': {
      id: 'sistema-os',
      title: {
        'pt-BR': 'Sistema Web de Ordem de Serviço (OS)',
        'en': 'Service Order (OS) Web System'
      },
      subtitle: {
        'pt-BR': 'Sistema web completo para criação e gestão de OS com integração mobile',
        'en': 'Complete web system for creating and managing OS with mobile integration'
      },
      image: projetoAquiresolveImg,
      icon: FileText,
      category: {
        'pt-BR': 'Sistema Web/Mobile',
        'en': 'Web/Mobile System'
      },
      technologies: ['React', 'Web App', 'Mobile Integration', 'Real-time Sync', 'Workflow', 'API Integration', 'Responsive Design', 'REST API', 'WebSocket'],
      description: {
        'pt-BR': `Sistema web completo e totalmente funcional para criação, gestão e acompanhamento de Ordens de Serviço (OS). Desenvolvido com integração total ao aplicativo mobile, permitindo sincronização em tempo real entre plataformas.

O sistema oferece um workflow completo desde a criação da OS até sua execução e finalização, com aprovações, atribuições de responsáveis, acompanhamento de status e histórico completo. A integração com o aplicativo mobile permite que técnicos recebam e executem OS diretamente no campo, com sincronização automática de dados.`,
        'en': `Complete and fully functional web system for creating, managing and tracking Service Orders (OS). Developed with full integration to mobile app, allowing real-time synchronization between platforms.

The system offers a complete workflow from OS creation to execution and completion, with approvals, responsible assignments, status tracking and complete history. Integration with the mobile app allows technicians to receive and execute OS directly in the field, with automatic data synchronization.`
      },
      features: {
        'pt-BR': [
          'Criação completa de Ordens de Serviço com todos os campos necessários',
          'Workflow completo de aprovação e execução',
          'Integração em tempo real com aplicativo mobile',
          'Sincronização automática de dados entre web e mobile',
          'Sistema de atribuição de responsáveis e técnicos',
          'Acompanhamento de status em tempo real (Pendente, Em Andamento, Concluída, Cancelada)',
          'Histórico completo de alterações e atualizações',
          'Upload de anexos e documentos relacionados à OS',
          'Notificações em tempo real para responsáveis',
          'Dashboard com visão geral de todas as OS',
          'Filtros avançados por status, responsável, data e cliente',
          'Relatórios exportáveis em PDF e Excel',
          'Interface totalmente responsiva para desktop, tablet e mobile',
          'Sistema de busca e pesquisa avançada',
          'Gestão de clientes e histórico de serviços'
        ],
        'en': [
          'Complete Service Order creation with all necessary fields',
          'Complete approval and execution workflow',
          'Real-time integration with mobile app',
          'Automatic data synchronization between web and mobile',
          'Responsible and technician assignment system',
          'Real-time status tracking (Pending, In Progress, Completed, Cancelled)',
          'Complete history of changes and updates',
          'Upload of attachments and documents related to OS',
          'Real-time notifications for responsible parties',
          'Dashboard with overview of all OS',
          'Advanced filters by status, responsible, date and client',
          'Exportable reports in PDF and Excel',
          'Fully responsive interface for desktop, tablet and mobile',
          'Search and advanced research system',
          'Client management and service history'
        ]
      },
      challenges: {
        'pt-BR': [
          'Implementar sincronização em tempo real entre web e mobile',
          'Garantir consistência de dados entre plataformas',
          'Criar workflow complexo de aprovação e execução',
          'Otimizar performance para grandes volumes de OS',
          'Implementar sistema de notificações eficiente',
          'Garantir sincronização offline/online no mobile',
          'Criar interface intuitiva para gestão de múltiplas OS'
        ],
        'en': [
          'Implement real-time synchronization between web and mobile',
          'Ensure data consistency between platforms',
          'Create complex approval and execution workflow',
          'Optimize performance for large volumes of OS',
          'Implement efficient notification system',
          'Ensure offline/online synchronization on mobile',
          'Create intuitive interface for managing multiple OS'
        ]
      },
      results: {
        'pt-BR': [
          'Sistema totalmente funcional e integrado entre web e mobile',
          'Sincronização em tempo real funcionando perfeitamente',
          'Workflow completo de OS implementado com sucesso',
          'Interface responsiva e otimizada para todos os dispositivos',
          'Melhoria significativa na gestão e acompanhamento de OS',
          'Redução de tempo na criação e processamento de OS',
          'Sistema escalável e pronto para produção'
        ],
        'en': [
          'Fully functional system integrated between web and mobile',
          'Real-time synchronization working perfectly',
          'Complete OS workflow successfully implemented',
          'Responsive interface optimized for all devices',
          'Significant improvement in OS management and tracking',
          'Reduced time in OS creation and processing',
          'Scalable system ready for production'
        ]
      },
      liveUrl: '#',
      githubUrl: '#'
    },
    'naturize-dedetizacao': {
      id: 'naturize-dedetizacao',
      title: {
        'pt-BR': 'NATURIZE Dedetização - Sistema Completo',
        'en': 'NATURIZE Pest Control - Complete System'
      },
      subtitle: {
        'pt-BR': 'Sistema completo de gestão para empresa de dedetização com dashboard web e aplicativo mobile',
        'en': 'Complete management system for pest control company with web dashboard and mobile app'
      },
      image: projetoDedetizacaoWebImg,
      images: [projetoDedetizacaoWebImg, projetoDedetizacaoMobileImg],
      icon: Bug,
      category: {
        'pt-BR': 'Sistema Completo Web/Mobile',
        'en': 'Complete Web/Mobile System'
      },
      technologies: ['React', 'Kotlin', 'Android', 'Dashboard', 'Mobile App', 'Gestão', 'Web App', 'API Integration', 'Real-time Sync', 'Responsive Design'],
      description: {
        'pt-BR': `Sistema completo de gestão desenvolvido para a empresa NATURIZE Dedetização, projeto ativo em produção. O sistema oferece uma solução integrada com dashboard web para gestão administrativa e aplicativo mobile para técnicos em campo.

O dashboard web permite gestão completa de clientes, ordens de serviço, técnicos, responsáveis técnicos, vendedores, estoque, produtos, financeiro e relatórios. O aplicativo mobile permite que técnicos visualizem suas OS, acompanhem agenda, atualizem status e sincronizem dados em tempo real.

Sistema totalmente funcional e em uso ativo pela empresa, com versão 3.0 em produção.`,
        'en': `Complete management system developed for NATURIZE Pest Control company, active project in production. The system offers an integrated solution with web dashboard for administrative management and mobile app for field technicians.

The web dashboard allows complete management of clients, service orders, technicians, technical responsibles, salespeople, stock, products, financial and reports. The mobile app allows technicians to view their OS, track schedule, update status and synchronize data in real-time.

Fully functional system actively used by the company, with version 3.0 in production.`
      },
      features: {
        'pt-BR': [
          'Dashboard web completo com KPIs e métricas em tempo real',
          'Gestão completa de clientes com histórico de serviços',
          'Sistema de Ordens de Serviço (OS) com workflow completo',
          'Gestão de técnicos com perfis e atribuições',
          'Gestão de responsáveis técnicos e vendedores',
          'Controle de estoque e produtos',
          'Módulo financeiro com receitas e despesas',
          'Sistema de relatórios completo e exportável',
          'Aplicativo mobile para técnicos em campo',
          'Sincronização em tempo real entre web e mobile',
          'Dashboard mobile com estatísticas (OS Hoje, Em Andamento, Concluídas, Próximas)',
          'Ações rápidas no mobile (Minhas OS, Agenda)',
          'Navegação intuitiva com menu lateral no web',
          'Interface responsiva e otimizada para todos os dispositivos',
          'Sistema de busca e filtros avançados',
          'Versão 3.0 em produção ativa'
        ],
        'en': [
          'Complete web dashboard with real-time KPIs and metrics',
          'Complete client management with service history',
          'Service Order (OS) system with complete workflow',
          'Technician management with profiles and assignments',
          'Technical responsibles and salespeople management',
          'Stock and products control',
          'Financial module with revenues and expenses',
          'Complete and exportable reporting system',
          'Mobile app for field technicians',
          'Real-time synchronization between web and mobile',
          'Mobile dashboard with statistics (Today OS, In Progress, Completed, Next)',
          'Quick actions on mobile (My OS, Calendar)',
          'Intuitive navigation with sidebar menu on web',
          'Responsive interface optimized for all devices',
          'Search system and advanced filters',
          'Version 3.0 in active production'
        ]
      },
      challenges: {
        'pt-BR': [
          'Desenvolver sistema completo de gestão para empresa real em produção',
          'Integrar dashboard web com aplicativo mobile',
          'Garantir sincronização em tempo real entre plataformas',
          'Criar workflow complexo de gestão de OS',
          'Implementar sistema de estoque e produtos',
          'Desenvolver módulo financeiro completo',
          'Otimizar performance para uso em produção',
          'Garantir escalabilidade do sistema',
          'Criar interface intuitiva para diferentes perfis de usuário'
        ],
        'en': [
          'Develop complete management system for real company in production',
          'Integrate web dashboard with mobile app',
          'Ensure real-time synchronization between platforms',
          'Create complex OS management workflow',
          'Implement stock and products system',
          'Develop complete financial module',
          'Optimize performance for production use',
          'Ensure system scalability',
          'Create intuitive interface for different user profiles'
        ]
      },
      results: {
        'pt-BR': [
          'Sistema totalmente funcional e em produção ativa',
          'Dashboard web completo com todas as funcionalidades implementadas',
          'Aplicativo mobile funcional para técnicos',
          'Sincronização em tempo real funcionando perfeitamente',
          'Sistema escalável e pronto para crescimento',
          'Interface moderna e intuitiva para todos os usuários',
          'Versão 3.0 estável e em uso pela empresa',
          'Melhoria significativa na gestão e organização da empresa'
        ],
        'en': [
          'Fully functional system in active production',
          'Complete web dashboard with all features implemented',
          'Functional mobile app for technicians',
          'Real-time synchronization working perfectly',
          'Scalable system ready for growth',
          'Modern and intuitive interface for all users',
          'Stable version 3.0 in use by the company',
          'Significant improvement in company management and organization'
        ]
      },
      liveUrl: '#',
      githubUrl: '#'
    }
  };

  const project = projects[projectId];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">
            {language === 'pt-BR' ? 'Projeto não encontrado' : 'Project not found'}
          </h1>
          <Link to="/" className="text-blue-600 hover:underline">
            {language === 'pt-BR' ? 'Voltar ao portfólio' : 'Back to portfolio'}
          </Link>
        </div>
      </div>
    );
  }

  const t = {
    'pt-BR': {
      backToPortfolio: 'Voltar ao Portfólio',
      viewProject: 'Ver Projeto',
      viewCode: 'Ver Código',
      description: 'Descrição',
      features: 'Funcionalidades',
      technologies: 'Tecnologias',
      challenges: 'Desafios',
      results: 'Resultados',
      category: 'Categoria'
    },
    'en': {
      backToPortfolio: 'Back to Portfolio',
      viewProject: 'View Project',
      viewCode: 'View Code',
      description: 'Description',
      features: 'Features',
      technologies: 'Technologies',
      challenges: 'Challenges',
      results: 'Results',
      category: 'Category'
    }
  };

  const translations = t[language];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-gray-50/50 dark:to-gray-900/50 text-foreground">
      {/* Header with Back Button - Enhanced */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="sticky top-0 z-50 bg-background/95 dark:bg-gray-900/95 backdrop-blur-lg border-b border-border/50 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link
              to="/"
              className="group inline-flex items-center space-x-2 sm:space-x-3 text-foreground/70 hover:text-foreground transition-all duration-200 px-3 py-2 rounded-lg hover:bg-secondary/50"
            >
              <ArrowLeft size={18} className="sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium text-sm sm:text-base">{translations.backToPortfolio}</span>
            </Link>
            <div className="flex items-center space-x-2">
              <span className="hidden sm:inline-block text-xs text-foreground/50 px-2 py-1 bg-secondary/30 rounded-md">
                {project.category[language]}
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Hero Section - Enhanced */}
      <section className="relative overflow-hidden pt-6 sm:pt-10 md:pt-12 lg:pt-16 pb-8 sm:pb-12 md:pb-16">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 sm:mb-10 md:mb-12"
          >
            {/* Icon with enhanced styling */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center justify-center w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-2xl sm:rounded-3xl mb-4 sm:mb-6 shadow-lg"
            >
              <project.icon className="w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 text-blue-600 dark:text-blue-400" />
            </motion.div>
            
            {/* Category badge */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-600/10 dark:bg-blue-400/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4 border border-blue-600/20"
            >
              {project.category[language]}
            </motion.span>
            
            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-5 leading-tight"
            >
              <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
                {project.title[language]}
              </span>
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/70 dark:text-foreground/60 max-w-3xl mx-auto leading-relaxed px-4"
            >
              {project.subtitle[language]}
            </motion.p>
          </motion.div>

          {/* Project Images - Enhanced with better responsive design */}
          {project.images && project.images.length > 1 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 md:mb-16">
              {project.images.map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + (index * 0.15) }}
                  className="group relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 bg-white dark:bg-gray-800 border border-border/50"
                >
                  <div className="relative aspect-video sm:aspect-auto overflow-hidden">
                    <img
                      src={img}
                      alt={`${project.title[language]} - ${index === 0 ? 'Web' : 'Mobile'}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 bg-black/80 backdrop-blur-sm text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold shadow-lg">
                    {index === 0 ? (language === 'pt-BR' ? '🌐 Dashboard Web' : '🌐 Web Dashboard') : (language === 'pt-BR' ? '📱 Aplicativo Mobile' : '📱 Mobile App')}
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 mb-8 sm:mb-12 md:mb-16 bg-white dark:bg-gray-800 border border-border/50"
            >
              <img
                src={project.image}
                alt={project.title[language]}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </motion.div>
          )}
        </div>
      </section>

      {/* Content Section - Enhanced */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Description - Enhanced Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8 sm:mb-12 md:mb-16"
          >
            <div className="bg-card/50 dark:bg-gray-800/50 backdrop-blur-sm border border-border/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 flex items-center">
                <span className="w-1 h-8 sm:h-10 bg-gradient-to-b from-blue-600 to-cyan-600 rounded-full mr-3 sm:mr-4" />
                {translations.description}
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-foreground/80 dark:text-foreground/70 leading-relaxed sm:leading-loose whitespace-pre-line">
                {project.description[language]}
              </p>
            </div>
          </motion.div>

          {/* Technologies - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8 sm:mb-12 md:mb-16"
          >
            <div className="bg-card/50 dark:bg-gray-800/50 backdrop-blur-sm border border-border/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 flex items-center">
                <span className="w-1 h-8 sm:h-10 bg-gradient-to-b from-blue-600 to-cyan-600 rounded-full mr-3 sm:mr-4" />
                {translations.technologies}
              </h2>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {project.technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + (index * 0.05) }}
                    className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 dark:from-blue-600/20 dark:to-cyan-600/20 text-blue-600 dark:text-blue-400 rounded-lg sm:rounded-xl text-xs sm:text-sm md:text-base font-semibold border border-blue-600/20 hover:border-blue-600/40 hover:bg-blue-600/20 transition-all duration-200 cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Features - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-8 sm:mb-12 md:mb-16"
          >
            <div className="bg-card/50 dark:bg-gray-800/50 backdrop-blur-sm border border-border/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 md:mb-8 flex items-center">
                <span className="w-1 h-8 sm:h-10 bg-gradient-to-b from-blue-600 to-cyan-600 rounded-full mr-3 sm:mr-4" />
                {translations.features}
              </h2>
              <ul className="space-y-3 sm:space-y-4 md:space-y-5">
                {project.features[language].map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + (index * 0.05) }}
                    className="flex items-start space-x-3 sm:space-x-4 group"
                  >
                    <div className="flex-shrink-0 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full mt-2 sm:mt-2.5 md:mt-3 group-hover:scale-150 transition-transform duration-200" />
                    <p className="text-sm sm:text-base md:text-lg text-foreground/80 dark:text-foreground/70 flex-1 leading-relaxed">{feature}</p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Challenges - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-8 sm:mb-12 md:mb-16"
          >
            <div className="bg-card/50 dark:bg-gray-800/50 backdrop-blur-sm border border-border/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 md:mb-8 flex items-center">
                <span className="w-1 h-8 sm:h-10 bg-gradient-to-b from-orange-500 to-red-500 rounded-full mr-3 sm:mr-4" />
                {translations.challenges}
              </h2>
              <ul className="space-y-3 sm:space-y-4 md:space-y-5">
                {project.challenges[language].map((challenge, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 + (index * 0.05) }}
                    className="flex items-start space-x-3 sm:space-x-4 group"
                  >
                    <div className="flex-shrink-0 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-gradient-to-br from-orange-500 to-red-500 rounded-full mt-2 sm:mt-2.5 md:mt-3 group-hover:scale-150 transition-transform duration-200" />
                    <p className="text-sm sm:text-base md:text-lg text-foreground/80 dark:text-foreground/70 flex-1 leading-relaxed">{challenge}</p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Results - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-8 sm:mb-12 md:mb-16"
          >
            <div className="bg-card/50 dark:bg-gray-800/50 backdrop-blur-sm border border-border/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 md:mb-8 flex items-center">
                <span className="w-1 h-8 sm:h-10 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full mr-3 sm:mr-4" />
                {translations.results}
              </h2>
              <ul className="space-y-3 sm:space-y-4 md:space-y-5">
                {project.results[language].map((result, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 + (index * 0.05) }}
                    className="flex items-start space-x-3 sm:space-x-4 group"
                  >
                    <div className="flex-shrink-0 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mt-2 sm:mt-2.5 md:mt-3 group-hover:scale-150 transition-transform duration-200" />
                    <p className="text-sm sm:text-base md:text-lg text-foreground/80 dark:text-foreground/70 flex-1 leading-relaxed">{result}</p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Action Buttons - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-8 sm:pt-10 md:pt-12 border-t border-border/50"
          >
            {project.liveUrl !== '#' && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 sm:flex-none flex items-center justify-center space-x-2 sm:space-x-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 text-center shadow-lg hover:shadow-xl"
              >
                <ExternalLink size={18} className="sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">{translations.viewProject}</span>
              </motion.a>
            )}
            {project.githubUrl !== '#' && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 sm:flex-none flex items-center justify-center space-x-2 sm:space-x-3 border-2 border-border hover:border-primary px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold hover:bg-secondary/50 dark:hover:bg-secondary/30 transition-all duration-200 text-center"
              >
                <Github size={18} className="sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">{translations.viewCode}</span>
              </motion.a>
            )}
          </motion.div>
        </div>
      </section>
      
      {/* Footer spacing */}
      <div className="h-8 sm:h-12 md:h-16" />
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
