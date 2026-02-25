import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SKILL_CATEGORIES } from '@/constants';

export function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              className="text-4xl md:text-5xl mb-8"
            >
              Minhas <span className="text-gradient">Habilidades</span>
            </motion.h2>
            <p className="text-lg text-slate-400 mb-12 leading-relaxed">
              Ao longo da minha jornada acadêmica e profissional, desenvolvi um conjunto sólido de competências técnicas focado em entregar experiências de usuário excepcionais.
            </p>

            <div className="glass p-8 rounded-3xl">
              <h3 className="text-xl mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
                Sempre Aprendendo
              </h3>
              <div className="flex flex-wrap gap-3">
                {['TypeScript', 'Next.js', 'Flutter', 'Docker', 'AWS', 'GraphQL', 'Prisma'].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div ref={ref} className="space-y-10">
            {SKILL_CATEGORIES.map((category, catIndex) => (
              <div key={category.title}>
                <h3 className="text-sm uppercase tracking-widest text-slate-500 mb-6">{category.title}</h3>
                <div className="space-y-6">
                  {category.skills.map((skill, index) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-slate-300">{skill.name}</span>
                        <span className="text-xs text-slate-500">{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: 0.2 + (catIndex * 0.2) + (index * 0.1) }}
                          className="h-full bg-gradient-to-r from-brand-accent to-brand-secondary rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
