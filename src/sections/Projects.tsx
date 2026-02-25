import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '@/constants';

export function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-24 bg-black/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-4xl md:text-5xl mb-4"
          >
            Meus <span className="text-gradient">Projetos</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            Uma seleção de trabalhos que desenvolvi, abrangendo web, mobile e sistemas empresariais.
          </motion.p>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass rounded-2xl overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg to-transparent opacity-60" />
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-md bg-white/5 border border-white/10 text-slate-400">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl mb-2 group-hover:text-brand-accent transition-colors">{project.title}</h3>
                <p className="text-sm text-slate-400 mb-6 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 text-sm font-medium text-white hover:text-brand-accent transition-colors">
                    <ExternalLink size={16} /> Ver Projeto
                  </button>
                  <button className="text-slate-500 hover:text-white transition-colors">
                    <Github size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
