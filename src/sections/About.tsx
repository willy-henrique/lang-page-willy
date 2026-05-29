import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, GraduationCap, Calendar, Code2, Briefcase, Zap } from 'lucide-react';

const stats = [
  { icon: Calendar, label: 'Anos', value: '22', suffix: 'anos' },
  { icon: GraduationCap, label: 'Semestre', value: '7°', suffix: 'sem.' },
  { icon: Code2, label: 'Projetos', value: '10+', suffix: '' },
  { icon: Zap, label: 'Tecnologias', value: '15+', suffix: '' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20px' });

  return (
    <section id="sobre" className="relative py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-blue-500 to-transparent" />
            <span className="text-blue-400 text-sm font-mono tracking-widest uppercase">01 — Sobre</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Quem sou <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">eu</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo with 3D frame */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            <div className="relative">
              {/* Glow effect behind photo */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Photo container */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gray-900/50 backdrop-blur-sm">
                <img
                  src="/fotoperfil.jpg"
                  alt="Willy Henrique"
                  className="w-full aspect-[4/5] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-transparent opacity-60" />

                {/* Floating info card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 }}
                  className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">Goiânia, GO</p>
                      <p className="text-gray-400 text-xs">Brasil 🇧🇷</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Corner decorations */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-blue-500 rounded-tl-lg" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-purple-500 rounded-br-lg" />
            </div>
          </motion.div>

          {/* Text content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="w-5 h-5 text-blue-400" />
                <span className="text-blue-400 font-medium">Engenheiro de Software</span>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Olá! Me chamo <span className="text-white font-semibold">Willy Henrique</span>, sou
                desenvolvedor Full Stack apaixonado por tecnologia e inovação. Atualmente cursando
                Engenharia de Software, busco constantemente aprimorar minhas habilidades e entregar
                soluções que fazem a diferença.
              </p>

              <p className="text-gray-400 leading-relaxed mb-10">
                Com experiência em desenvolvimento web e mobile, trabalho com tecnologias modernas
                como React, TypeScript, Node.js e Firebase. Meu objetivo é criar experiências
                digitais que unem design, performance e funcionalidade.
              </p>

              {/* Stats grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                    className="relative group/stat p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-blue-500/30 transition-all hover:bg-white/[0.05]"
                  >
                    <stat.icon className="w-5 h-5 text-blue-400 mb-3" />
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">{stat.label}</p>
                    {/* Hover glow */}
                    <div className="absolute inset-0 rounded-xl bg-blue-500/5 opacity-0 group-hover/stat:opacity-100 transition-opacity" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
