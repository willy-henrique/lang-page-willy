import { memo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, Smartphone, Globe, Database, Calendar, Briefcase, Sparkles, BarChart3, FileText, Bug } from 'lucide-react';
import projetoLojaMoveisImg from '../assets/projeto-loja-moveis.png';
import projetoModbusTcpipImg from '../assets/projeto-modbus-tcpip.jpg';
import projetoCalculadoraGadoImg from '../assets/projeto-calculadora-gado.jpg';
import projetoLeogasImg from '../assets/projeto-leogas.svg';
import projetoLeonicoImg from '../assets/leonico-barbearia.png';
import projetoAquiresolveImg from '../assets/aquiresolve2.png';
import projetoEssencialleImg from '../assets/Essenciallelogo.png';
import projetoWilltechBiImg from '../assets/willtech-bi-dashboard.jpg'; // WillTech BI Dashboard
import projetoDedetizacaoWebImg from '../assets/dedetizacao.png';
import projetoDedetizacaoMobileImg from '../assets/mobile-dedetizacao.png';

const Projects = ({ language }) => {
  const translations = {
    'pt-BR': {
      title: 'Projetos',
      subtitle: 'Alguns dos meus trabalhos recentes',
      viewProject: 'Ver Projeto',
      viewCode: 'Ver Código',
      projects: [
        {
          id: 1,
          title: 'Loja Royale Estofados',
          description: 'Landing page moderna e responsiva para e-commerce de estofados. Desenvolvida com foco na experiência do usuário e conversão de vendas.',
          image: projetoLojaMoveisImg,
          technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Responsive Design'],
          liveUrl: 'https://royaleestofados.vercel.app/',
          githubUrl: '#',
          category: 'Desenvolvimento Web',
          icon: Globe
        },
        {
          id: 2,
          title: 'Aplicativo de Leitura Modbus TCP/IP',
          description: 'Aplicação desktop desenvolvida para a empresa ZABE PI para leitura e monitoramento de dados via protocolo Modbus TCP/IP.',
          image: projetoModbusTcpipImg,
          technologies: ['Python', 'Modbus TCP/IP', 'Desktop App', 'Data Monitoring'],
          liveUrl: '#',
          githubUrl: '#',
          category: 'Aplicativo Desktop',
          icon: Database
        },
        {
          id: 3,
          title: 'App Calculadora de Gado',
          description: 'Aplicativo móvel para gestão e cálculo de gado, facilitando o controle de rebanhos e cálculos relacionados à pecuária.',
          image: projetoCalculadoraGadoImg,
          technologies: ['Kotlin', 'Android', 'Mobile Development', 'Agriculture'],
          liveUrl: '#',
          githubUrl: '#',
          category: 'Desenvolvimento Mobile',
          icon: Smartphone
        },
        {
          id: 4,
          title: 'LEOGÁS - Automação de Gás',
          description: 'Sistema de automação para compra de gás em apenas 3 cliques. Plataforma web moderna com interface intuitiva para facilitar o processo de pedidos de gás e água.',
          image: projetoLeogasImg,
          technologies: ['React', 'Next.js', 'Tailwind CSS', 'E-commerce', 'Automation'],
          liveUrl: 'https://leogas.vercel.app/',
          githubUrl: '#',
          category: 'Web Development',
          icon: Globe
        },
        {
          id: 5,
          title: 'Leônico Barbearia - Sistema de Agendamento',
          description: 'Sistema completo de agendamento online para barbearia. Permite que clientes escolham barbeiros e agendem horários de forma rápida e prática através de uma interface moderna e intuitiva.',
          image: projetoLeonicoImg,
          technologies: ['React', 'Web App', 'Agendamento', 'UI/UX', 'Responsive Design'],
          liveUrl: 'https://barber-leonico.vercel.app/',
          githubUrl: '#',
          category: 'Desenvolvimento Web',
          icon: Calendar,
          routePath: 'leonico-barbearia'
        },
        {
          id: 6,
          title: 'AquiResolve - Sistema Administrativo',
          description: 'Sistema completo para gestão empresarial disponível em web e mobile. Monitore, analise e tome decisões baseadas em dados precisos sobre suas operações. Controle total sobre pedidos, clientes e operações do seu negócio.',
          image: projetoAquiresolveImg,
          technologies: ['React', 'Kotlin', 'Android', 'Sistema Administrativo', 'Gestão', 'Dashboard', 'Business Intelligence'],
          liveUrl: '#',
          githubUrl: '#',
          category: 'Sistema Administrativo',
          icon: Briefcase
        },
        {
          id: 7,
          title: 'Essencialle Studio - Agendamento de Beleza',
          description: 'Landing page moderna para estúdio de beleza e cuidado pessoal. Sistema de agendamento online que oferece uma experiência única de cuidado personalizado. Interface elegante com gradientes suaves e design responsivo.',
          image: projetoEssencialleImg,
          technologies: ['React', 'Web App', 'Agendamento', 'UI/UX', 'Responsive Design', 'Landing Page'],
          liveUrl: 'https://nail-designer-chi.vercel.app/',
          githubUrl: '#',
          category: 'Desenvolvimento Web',
          icon: Sparkles
        },
        {
          id: 8,
          title: 'WillTech Power Business - BI Analytics',
          description: 'Sistema de Business Intelligence integrado ao ERP Auge (sistema de supermercado). Dashboard completo com análise de vendas, KPIs em tempo real, performance diária, distribuição por categorias e gestão financeira. Centro de comando para tomada de decisões estratégicas baseadas em dados. WillTech Power Business - Matriz Analytics.',
          image: projetoWilltechBiImg,
          technologies: ['Business Intelligence', 'Dashboard', 'Analytics', 'ERP Integration', 'Data Visualization', 'KPIs', 'React'],
          liveUrl: '#',
          githubUrl: '#',
          category: 'Business Intelligence',
          icon: BarChart3,
          routePath: 'willtech-bi'
        },
        {
          id: 9,
          title: 'Sistema Web de Ordem de Serviço (OS)',
          description: 'Sistema web completo para criação e gestão de Ordens de Serviço (OS) com integração total ao aplicativo mobile. Permite criar, editar, acompanhar e sincronizar OS em tempo real entre web e mobile. Totalmente funcional com workflow completo de aprovação e execução.',
          image: projetoAquiresolveImg,
          technologies: ['React', 'Web App', 'Mobile Integration', 'Real-time Sync', 'Workflow', 'API Integration', 'Responsive Design'],
          liveUrl: '#',
          githubUrl: '#',
          category: 'Sistema Web/Mobile',
          icon: FileText,
          routePath: 'sistema-os'
        },
        {
          id: 10,
          title: 'NATURIZE Dedetização - Sistema Completo',
          description: 'Sistema completo de gestão para empresa de dedetização com dashboard web e aplicativo mobile. Gestão de clientes, ordens de serviço, técnicos, estoque, produtos, financeiro e relatórios. Projeto ativo em produção na empresa.',
          image: projetoDedetizacaoWebImg,
          technologies: ['React', 'Kotlin', 'Android', 'Dashboard', 'Mobile App', 'Gestão', 'Web App', 'API Integration'],
          liveUrl: '#',
          githubUrl: '#',
          category: 'Sistema Completo Web/Mobile',
          icon: Bug,
          routePath: 'naturize-dedetizacao'
        }
      ]
    },
    'en': {
      title: 'Projects',
      subtitle: 'Some of my recent work',
      viewProject: 'View Project',
      viewCode: 'View Code',
      projects: [
        {
          id: 1,
          title: 'Royale Estofados Store',
          description: 'Modern and responsive landing page for upholstery e-commerce. Developed with focus on user experience and sales conversion.',
          image: projetoLojaMoveisImg,
          technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Responsive Design'],
          liveUrl: 'https://royaleestofados.vercel.app/',
          githubUrl: '#',
          category: 'Web Development',
          icon: Globe
        },
        {
          id: 2,
          title: 'Modbus TCP/IP Reader Application',
          description: 'Desktop application developed for ZABE PI company for reading and monitoring data via Modbus TCP/IP protocol.',
          image: projetoModbusTcpipImg,
          technologies: ['Python', 'Modbus TCP/IP', 'Desktop App', 'Data Monitoring'],
          liveUrl: '#',
          githubUrl: '#',
          category: 'Desktop Application',
          icon: Database
        },
        {
          id: 3,
          title: 'Cattle Calculator App',
          description: 'Mobile application for cattle management and calculation, facilitating herd control and livestock-related calculations.',
          image: projetoCalculadoraGadoImg,
          technologies: ['Kotlin', 'Android', 'Mobile Development', 'Agriculture'],
          liveUrl: '#',
          githubUrl: '#',
          category: 'Mobile Development',
          icon: Smartphone
        },
        {
          id: 4,
          title: 'LEOGÁS - Gas Automation',
          description: 'Automation system for gas purchase in just 3 clicks. Modern web platform with intuitive interface to facilitate gas and water ordering process.',
          image: projetoLeogasImg,
          technologies: ['React', 'Next.js', 'Tailwind CSS', 'E-commerce', 'Automation'],
          liveUrl: 'https://leogas.vercel.app/',
          githubUrl: '#',
          category: 'Web Development',
          icon: Globe
        },
        {
          id: 5,
          title: 'Leônico Barbearia - Appointment System',
          description: 'Complete online appointment system for barbershop. Allows customers to choose barbers and schedule appointments quickly and easily through a modern and intuitive interface.',
          image: projetoLeonicoImg,
          technologies: ['React', 'Web App', 'Scheduling', 'UI/UX', 'Responsive Design'],
          liveUrl: 'https://barber-leonico.vercel.app/',
          githubUrl: '#',
          category: 'Web Development',
          icon: Calendar,
          routePath: 'leonico-barbearia'
        },
        {
          id: 6,
          title: 'AquiResolve - Administrative System',
          description: 'Complete system for business management available on web and mobile. Monitor, analyze and make decisions based on precise data about your operations. Total control over orders, clients and business operations.',
          image: projetoAquiresolveImg,
          technologies: ['React', 'Kotlin', 'Android', 'Administrative System', 'Management', 'Dashboard', 'Business Intelligence'],
          liveUrl: '#',
          githubUrl: '#',
          category: 'Administrative System',
          icon: Briefcase
        },
        {
          id: 7,
          title: 'Essencialle Studio - Beauty Booking',
          description: 'Modern landing page for beauty and personal care studio. Online appointment system that offers a unique personalized care experience. Elegant interface with soft gradients and responsive design.',
          image: projetoEssencialleImg,
          technologies: ['React', 'Web App', 'Scheduling', 'UI/UX', 'Responsive Design', 'Landing Page'],
          liveUrl: 'https://nail-designer-chi.vercel.app/',
          githubUrl: '#',
          category: 'Web Development',
          icon: Sparkles
        },
        {
          id: 8,
          title: 'WillTech Power Business - BI Analytics',
          description: 'Business Intelligence system integrated with Auge ERP (supermarket system). Complete dashboard with sales analysis, real-time KPIs, daily performance, category distribution and financial management. Command center for strategic data-driven decision making.',
          image: projetoWilltechBiImg,
          technologies: ['Business Intelligence', 'Dashboard', 'Analytics', 'ERP Integration', 'Data Visualization', 'KPIs', 'React'],
          liveUrl: '#',
          githubUrl: '#',
          category: 'Business Intelligence',
          icon: BarChart3,
          routePath: 'willtech-bi'
        },
        {
          id: 9,
          title: 'Service Order (OS) Web System',
          description: 'Complete web system for creating and managing Service Orders (OS) with full integration to mobile app. Allows creating, editing, tracking and real-time synchronization of OS between web and mobile. Fully functional with complete approval and execution workflow.',
          image: projetoAquiresolveImg,
          technologies: ['React', 'Web App', 'Mobile Integration', 'Real-time Sync', 'Workflow', 'API Integration', 'Responsive Design'],
          liveUrl: '#',
          githubUrl: '#',
          category: 'Web/Mobile System',
          icon: FileText,
          routePath: 'sistema-os'
        },
        {
          id: 10,
          title: 'NATURIZE Pest Control - Complete System',
          description: 'Complete management system for pest control company with web dashboard and mobile app. Management of clients, service orders, technicians, stock, products, financial and reports. Active project in production at the company.',
          image: projetoDedetizacaoWebImg,
          technologies: ['React', 'Kotlin', 'Android', 'Dashboard', 'Mobile App', 'Management', 'Web App', 'API Integration'],
          liveUrl: '#',
          githubUrl: '#',
          category: 'Complete Web/Mobile System',
          icon: Bug,
          routePath: 'naturize-dedetizacao'
        }
      ]
    }
  };

  const t = translations[language];

  return (
    <section id="projects" className="section-padding gradient-bg prevent-jump">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">{t.title}</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Projects Grid - Enhanced Responsive Design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-7">
          {t.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-gray-200/60 dark:border-gray-700/60 rounded-xl sm:rounded-2xl overflow-hidden hover:border-blue-500/60 dark:hover:border-blue-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20 hover:-translate-y-1"
            >
              {/* Project Image - Enhanced Responsive */}
              <div className="relative h-52 sm:h-44 md:h-40 lg:h-36 xl:h-32 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Category Badge - Enhanced */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                  <span className="text-xs sm:text-xs font-semibold text-white bg-gradient-to-r from-blue-600/95 to-cyan-600/95 backdrop-blur-md px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full shadow-lg border border-white/20">
                    {project.category}
                  </span>
                </div>
                
                {/* Action Buttons - Compact */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-2">
                  {project.liveUrl !== '#' && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-blue-600 hover:bg-white transition-colors duration-200"
                    >
                      <ExternalLink size={14} />
                    </motion.a>
                  )}
                  
                  {project.githubUrl !== '#' && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:bg-white transition-colors duration-200"
                    >
                      <Github size={14} />
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Project Content - Enhanced Responsive */}
              <div className="p-4 sm:p-5 md:p-6">
                <h3 className="text-lg sm:text-xl md:text-xl font-bold mb-2 sm:mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 line-clamp-2 leading-tight">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-sm md:text-base mb-3 sm:mb-4 md:mb-5 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies - Enhanced Responsive */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5 md:mb-6">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs sm:text-xs md:text-sm bg-gradient-to-r from-gray-100/50 to-gray-200/50 dark:from-gray-700/50 dark:to-gray-600/50 text-gray-700 dark:text-gray-300 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-md sm:rounded-lg font-medium border border-gray-200/50 dark:border-gray-600/50"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs sm:text-xs md:text-sm bg-gradient-to-r from-blue-100/50 to-cyan-100/50 dark:from-blue-900/30 dark:to-cyan-900/30 text-blue-700 dark:text-blue-300 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-md sm:rounded-lg font-semibold border border-blue-200/50 dark:border-blue-700/50">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Action Button - Enhanced */}
                {project.routePath ? (
                  <Link
                    to={`/project/${project.routePath}`}
                    className="block w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-center py-2.5 sm:py-3 md:py-3.5 px-4 sm:px-5 rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                  >
                    <span>{language === 'pt-BR' ? 'Ver Detalhes' : 'View Details'}</span>
                  </Link>
                ) : project.liveUrl !== '#' ? (
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="block w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-center py-2.5 sm:py-3 md:py-3.5 px-4 sm:px-5 rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg"
                  >
                    <ExternalLink size={16} className="sm:w-4 sm:h-4" />
                    <span>{t.viewProject}</span>
                  </motion.a>
                ) : null}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-foreground/60 mb-6">
            {language === 'pt-BR' 
              ? 'Interessado em trabalhar juntos? Vamos conversar!' 
              : 'Interested in working together? Let\'s talk!'
            }
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/80 transition-colors duration-200"
          >
            <span>
              {language === 'pt-BR' ? 'Entre em Contato' : 'Get In Touch'}
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(Projects);

