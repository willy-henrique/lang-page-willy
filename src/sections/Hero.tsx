import { motion } from 'framer-motion';
import { Download, ArrowRight, ChevronDown } from 'lucide-react';
import Scene3D from '../components/3d/Scene3D';
import { useMousePosition } from '../hooks/useMousePosition';

const techBadges = ['React', 'TypeScript', 'Node.js', 'Firebase', 'Python'];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Hero() {
  const mousePosition = useMousePosition();

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* 3D Scene Background */}
      <Scene3D mousePosition={mousePosition} />

      {/* Gradient overlays for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b0f19] via-[#0b0f19]/80 to-transparent z-[1] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-[#0b0f19]/40 z-[1] pointer-events-none" />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-7xl mx-auto px-6 w-full py-32"
      >
        <div className="max-w-2xl mx-auto text-center lg:mx-0 lg:text-left">
          {/* Availability badge */}
          <motion.div variants={item} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm mb-8">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </span>
            <span className="text-sm text-gray-300 font-medium">Disponível para projetos</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={item}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Willy Henrique
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div variants={item} className="mb-6 space-y-1">
            <p className="text-xl sm:text-2xl text-gray-300 font-medium">
              Engenheiro de Software
            </p>
            <p className="text-lg sm:text-xl text-gray-500 font-medium">
              Full Stack Developer
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={item}
            className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8"
          >
            Transformando ideias em experiências digitais extraordinárias.
            Especializado em criar soluções web modernas com foco em performance,
            design e experiência do usuário.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-10"
          >
            <a
              href="/Curriculo_Willy_Henrique.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 px-6 py-3.5 rounded-xl border border-white/[0.12] text-white font-medium text-sm hover:bg-white/[0.04] hover:border-white/[0.2] transition-all duration-300"
            >
              <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
              Download CV
            </a>
            <a
              href="#contato"
              className="group flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium text-sm hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:scale-105 transition-all duration-300"
            >
              Entre em Contato
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Tech Badges */}
          <motion.div
            variants={item}
            className="flex flex-wrap items-center gap-2.5 justify-center lg:justify-start"
          >
            {techBadges.map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-gray-400 shadow-[0_0_15px_rgba(59,130,246,0.04)] hover:border-blue-500/20 hover:text-gray-300 transition-all"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-500 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5 text-gray-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
