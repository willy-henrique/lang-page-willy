import { motion } from 'framer-motion';
import Scene3D from '../components/3d/Scene3D';
import { ChevronDown, Download, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* 3D Background - full screen com responsividade sênior para layout HTML */}
      <div className="absolute inset-0 z-0">
        <Scene3D
          showRobot={true}
          robotScale={1.4}
          robotPosition={[3.5, -0.5, 0]}
          particleCount={2000}
        />
      </div>

      {/* Gradient overlays - ajustados para melhorar a legibilidade no mobile quando o robô centraliza */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b md:bg-gradient-to-r from-[#0b0f19] via-[#0b0f19]/80 md:via-[#0b0f19]/70 to-[#0b0f19]/40 md:to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-40 z-[1] bg-gradient-to-t from-[#0b0f19] to-transparent" />

      {/* Content - alinhamento responsivo */}
      <div className="relative z-[2] max-w-7xl mx-auto px-6 py-24 md:py-0 w-full flex flex-col justify-center min-h-screen">
        <div className="max-w-2xl text-center md:text-left flex flex-col items-center md:items-start">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Disponível para projetos
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-none md:leading-tight"
          >
            <span className="text-white">Willy</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Henrique
            </span>
          </motion.h1>

          {/* Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-4"
          >
            <h2 className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light">
              Engenheiro de Software
            </h2>
            <div className="flex items-center justify-center md:justify-start gap-2 mt-2 text-gray-500">
              <div className="h-px w-12 bg-gradient-to-r from-blue-500 to-transparent" />
              <span className="text-xs sm:text-sm tracking-widest uppercase">Full Stack Developer</span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-gray-400 text-base sm:text-lg mb-8 leading-relaxed max-w-lg"
          >
            Transformando ideias em experiências digitais extraordinárias.
            Especialista em React, TypeScript e soluções criativas.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a
              href="/Curriculo_Willy_Henrique.pdf"
              download
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl text-white font-semibold overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] hover:scale-105"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Download className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Baixar CV</span>
            </a>
            <a
              href="#contato"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/10 rounded-xl text-white font-semibold hover:bg-white/5 hover:border-blue-500/50 transition-all hover:scale-105 backdrop-blur-sm"
            >
              <Mail className="w-5 h-5 group-hover:text-blue-400 transition-colors" />
              <span>Entre em Contato</span>
            </a>
          </motion.div>

          {/* Tech stack mini */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="mt-12 flex flex-wrap justify-center md:justify-start items-center gap-4 sm:gap-6 text-gray-600"
          >
            <span className="text-xs tracking-widest uppercase">Stack</span>
            <div className="h-px w-8 bg-gray-700 hidden sm:block" />
            <div className="flex flex-wrap justify-center gap-3">
              {['React', 'TypeScript', 'Node.js', 'Firebase', 'Python'].map((tech) => (
                <span key={tech} className="text-xs sm:text-sm text-gray-500 hover:text-blue-400 transition-colors cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-500 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="w-5 h-5 text-blue-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
