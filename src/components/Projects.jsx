import { motion } from 'framer-motion';
import { ExternalLink, Github, Smartphone, Globe, Database } from 'lucide-react';
import projetoLojaMoveisImg from '../assets/projeto-loja-moveis.png';
import projetoModbusTcpipImg from '../assets/projeto-modbus-tcpip.jpg';
import projetoCalculadoraGadoImg from '../assets/projeto-calculadora-gado.jpg';
import projetoLeogasImg from '../assets/projeto-leogas.svg';

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

        {/* Projects Grid - Responsive Design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {t.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
            >
              {/* Project Image - Responsive */}
              <div className="relative h-40 sm:h-32 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="text-xs font-medium text-white bg-blue-600/90 backdrop-blur-sm px-2 py-1 rounded-full">
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

              {/* Project Content - Responsive */}
              <div className="p-3 sm:p-4">
                <h3 className="text-base sm:text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors duration-200 line-clamp-1">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mb-3 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies - Responsive */}
                <div className="flex flex-wrap gap-1 mb-3 sm:mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs bg-gray-200/30 dark:bg-gray-700/30 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs bg-gray-200/30 dark:bg-gray-700/30 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-md">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Action Button - Single */}
                {project.liveUrl !== '#' && (
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-blue-600 text-white text-center py-2 px-3 sm:px-4 rounded-lg text-xs sm:text-sm font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-1 sm:space-x-2"
                  >
                    <ExternalLink size={12} className="sm:w-3.5 sm:h-3.5" />
                    <span>{t.viewProject}</span>
                  </motion.a>
                )}
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

export default Projects;

