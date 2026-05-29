import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

interface Project {
  title: string
  category: string
  description: string
  image: string
  technologies: string[]
  link?: string
  github?: string
}

const projects: Project[] = [
  {
    title: 'Loja Royale Estofados',
    category: 'Web',
    description: 'E-commerce moderno para loja de estofados com catálogo dinâmico, filtros inteligentes e experiência de compra otimizada.',
    image: '/royaleestofados.png',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    link: 'https://royaleestofados.vercel.app/',
  },
  {
    title: 'Aplicativo Modbus TCP/IP',
    category: 'IoT',
    description: 'Aplicação desktop para comunicação industrial via protocolo Modbus TCP/IP com interface gráfica intuitiva.',
    image: '/modbustcpip.png',
    technologies: ['Python', 'Qt', 'Modbus'],
  },
  {
    title: 'LEOGÁS - Automação',
    category: 'Web',
    description: 'Sistema completo de automação e gestão para distribuidora de gás com controle de estoque e pedidos.',
    image: '/leogas.png',
    technologies: ['Vue.js', 'Firebase', 'Node.js'],
    link: 'https://leogas.vercel.app/',
  },
  {
    title: 'Leônico Barbearia',
    category: 'Web',
    description: 'Plataforma de agendamento online com dashboard administrativo e gestão completa de serviços.',
    image: '/barbearialeonico.png',
    technologies: ['React', 'Node.js', 'PostgreSQL'],
    link: 'https://www.leonicobarbearia.com.br/',
  },
  {
    title: 'AquiResolve',
    category: 'Mobile',
    description: 'Aplicativo marketplace de serviços locais conectando profissionais a clientes da região.',
    image: '/aquiresolve.png',
    technologies: ['React Native', 'React', 'Express'],
  },
  {
    title: 'Essencialle Studio',
    category: 'Web',
    description: 'Landing page elegante para estúdio de beleza com galeria interativa e agendamento online.',
    image: '/essenciale.png',
    technologies: ['Vue.js', 'Tailwind CSS'],
    link: 'https://nail-designer-chi.vercel.app/',
  },
  {
    title: 'WillTech Power Business',
    category: 'Web',
    description: 'Dashboard de Business Intelligence com visualizações de dados interativas e relatórios automatizados.',
    image: '/willtechBI.jpg',
    technologies: ['React', 'D3.js', 'SQL Server'],
  },
  {
    title: 'Tillit Parceiro+',
    category: 'Web',
    description: 'Plataforma de gestão de parceiros com IA integrada para análise preditiva e automação de processos.',
    image: '/tillitparceiro.png',
    technologies: ['React', 'Tailwind CSS', 'IA', 'Vercel'],
    link: 'https://tillitparceiro.vercel.app/',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: (isLeft: boolean) => ({
    opacity: 0,
    x: isLeft ? -60 : 60,
    y: 20,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isLeft = index % 2 === 0
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={cardRef}
      className={`relative flex items-center w-full ${
        isLeft ? 'md:justify-start' : 'md:justify-end'
      } justify-center`}
      custom={isLeft}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {/* Timeline connector dot */}
      <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center z-10">
        <div className="w-4 h-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 border-2 border-[#0b0f19] shadow-[0_0_12px_rgba(6,182,212,0.5)]" />
      </div>

      {/* Connector line from dot to card */}
      <div
        className={`absolute top-1/2 hidden md:block h-px bg-gradient-to-r ${
          isLeft
            ? 'from-transparent via-cyan-500/30 to-cyan-500/10 right-1/2 w-[calc(50%-280px)] mr-1'
            : 'from-cyan-500/10 via-cyan-500/30 to-transparent left-1/2 w-[calc(50%-280px)] ml-1'
        }`}
      />

      {/* Card */}
      <div
        className={`w-full md:w-[calc(50%-60px)] ${
          isLeft ? 'md:pr-0' : 'md:pl-0'
        }`}
      >
        <div className="group relative overflow-hidden rounded-xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm hover:bg-white/[0.05] hover:border-white/[0.12] transition-all duration-500 hover:shadow-[0_8px_32px_rgba(6,182,212,0.08)]">
          {/* Image */}
          <div className="relative h-48 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-[#0b0f19]/40 to-transparent" />
            
            {/* Category badge */}
            <div className="absolute top-3 left-3">
              <span className="px-3 py-1 text-xs font-medium bg-white/[0.08] backdrop-blur-md border border-white/[0.1] rounded-full text-cyan-400">
                {project.category}
              </span>
            </div>

            {/* Hover overlay with links */}
            <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#0b0f19]/60 backdrop-blur-sm">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/[0.1] border border-white/[0.15] hover:bg-cyan-500/20 hover:border-cyan-500/40 transition-all"
                >
                  <ExternalLink className="w-5 h-5 text-white" />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/[0.1] border border-white/[0.15] hover:bg-purple-500/20 hover:border-purple-500/40 transition-all"
                >
                  <Github className="w-5 h-5 text-white" />
                </a>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="p-5">
            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-gray-400 mb-4 line-clamp-2 leading-relaxed">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs bg-white/[0.04] border border-white/[0.06] rounded-md text-gray-400 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  // Timeline line height animates with scroll
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section
      ref={sectionRef}
      id="projetos"
      className="relative py-24 md:py-32 px-4 overflow-hidden"
    >
      {/* Section Header */}
      <motion.div
        className="max-w-6xl mx-auto mb-16 md:mb-20"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="text-cyan-400 font-mono text-sm">02</span>
          <div className="w-12 h-px bg-cyan-400/40" />
          <span className="text-gray-400 text-sm uppercase tracking-wider">Projetos</span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Meus Projetos
          </span>
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl text-base md:text-lg leading-relaxed">
          Uma seleção dos projetos mais significativos que desenvolvi, cada um representando desafios únicos e soluções criativas.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative max-w-6xl mx-auto">
        {/* Central vertical line - desktop only */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/[0.06] -translate-x-1/2 hidden md:block">
          {/* Animated fill line */}
          <motion.div
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-cyan-500/60 via-blue-500/40 to-purple-500/60"
            style={{ height: lineHeight }}
          />
        </div>

        {/* Mobile line - left side */}
        <div className="absolute left-4 top-0 bottom-0 w-px bg-white/[0.06] md:hidden">
          <motion.div
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-cyan-500/60 via-blue-500/40 to-purple-500/60"
            style={{ height: lineHeight }}
          />
        </div>

        {/* Project cards */}
        <motion.div
          className="relative space-y-12 md:space-y-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </motion.div>

        {/* Timeline end dot */}
        <motion.div
          className="hidden md:flex absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-6 items-center justify-center"
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 shadow-[0_0_12px_rgba(139,92,246,0.5)]" />
        </motion.div>
      </div>
    </section>
  )
}
