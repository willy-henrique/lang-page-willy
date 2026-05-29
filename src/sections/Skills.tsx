import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { SKILL_CATEGORIES } from '../constants';
import { Code2, Cpu, Server, Wrench } from 'lucide-react';

const categoryIcons: Record<string, typeof Code2> = {
  'Front-end': Code2,
  'Mobile & Native': Cpu,
  'Back-end': Server,
  'Ferramentas': Wrench,
};

const categoryColors: Record<string, string> = {
  'Front-end': 'from-blue-500 to-cyan-500',
  'Mobile & Native': 'from-purple-500 to-pink-500',
  'Back-end': 'from-green-500 to-emerald-500',
  'Ferramentas': 'from-orange-500 to-yellow-500',
};

const barColors: Record<string, string> = {
  'Front-end': 'from-blue-500 to-cyan-400',
  'Mobile & Native': 'from-purple-500 to-pink-400',
  'Back-end': 'from-green-500 to-emerald-400',
  'Ferramentas': 'from-orange-500 to-amber-400',
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20px' });

  return (
    <section id="habilidades" className="relative py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

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
            <span className="text-blue-400 text-sm font-mono tracking-widest uppercase">03 — Skills</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Minhas <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Habilidades</span>
          </h2>
        </motion.div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((category, catIndex) => {
            const Icon = categoryIcons[category.title] || Code2;
            const gradientClass = categoryColors[category.title] || 'from-blue-500 to-cyan-500';
            const barColor = barColors[category.title] || 'from-blue-500 to-cyan-400';

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: catIndex * 0.15 }}
                className="group relative p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-500"
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradientClass} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                    <p className="text-sm text-gray-500">{category.skills.length} tecnologias</p>
                  </div>
                </div>

                {/* Skills list */}
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: catIndex * 0.15 + skillIndex * 0.05 + 0.3 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-xs text-gray-500 font-mono">{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-white/[0.04] overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full bg-gradient-to-r ${barColor}`}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: catIndex * 0.15 + skillIndex * 0.08 + 0.5, ease: 'easeOut' }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradientClass} opacity-[0.03]`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Always learning section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-blue-500/[0.05] to-purple-500/[0.05] border border-white/[0.06] text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            Sempre Aprendendo
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Além das habilidades listadas, estou constantemente explorando novas tecnologias e frameworks para
            me manter atualizado com as melhores práticas do mercado.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {['Next.js', 'Docker', 'AWS', 'GraphQL', 'Prisma', 'tRPC', 'Rust', 'Go'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-lg bg-white/[0.03] border border-white/[0.06] text-sm text-gray-400 hover:text-blue-400 hover:border-blue-500/30 transition-all cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
