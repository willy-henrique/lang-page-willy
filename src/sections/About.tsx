import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { User, MapPin, GraduationCap, Code2 } from 'lucide-react';

const STATS = [
  { label: 'Semestre', value: '7º', icon: GraduationCap },
  { label: 'Projetos', value: '10+', icon: Code2 },
  { label: 'Tecnologias', value: '15+', icon: User },
];

export function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl mb-8">
              Sobre <span className="text-gradient">Mim</span>
            </h2>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Sou Willy Henrique, estudante de Engenharia de Software no 7º período. Com experiência no desenvolvimento de sistemas de alta performance, crio soluções inteligentes e escaláveis para os desafios de negócio modernos.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-brand-accent">
                  <User size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">Nome</p>
                  <p className="font-medium">Willy Henrique, 22 anos</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-brand-accent">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">Localização</p>
                  <p className="font-medium">Goiânia, Brasil</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {STATS.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="glass p-4 rounded-2xl text-center"
                >
                  <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
                  <p className="text-xs text-slate-500 uppercase">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden glass p-2">
              <img
                src="https://picsum.photos/seed/willy/800/800"
                alt="Willy Henrique"
                className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-accent/30 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-brand-secondary/30 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
