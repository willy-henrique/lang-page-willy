import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin } from 'lucide-react';

const stats = [
  { label: 'Idade', value: '22', suffix: 'anos' },
  { label: 'Faculdade', value: '7°', suffix: 'sem.' },
  { label: 'Projetos', value: '10', suffix: '+', prefix: '' },
  { label: 'Tecnologias', value: '15', suffix: '+', prefix: '' },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="sobre" className="relative py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-40 w-[600px] h-[600px] bg-purple-500/[0.03] rounded-full blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-blue-500 to-transparent" />
            <span className="text-blue-400 text-sm font-mono tracking-widest uppercase">
              01 — Sobre
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Quem{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              sou eu
            </span>
          </h2>
        </motion.div>

        {/* Content grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16"
        >
          {/* Left: Profile image */}
          <motion.div variants={item} className="relative mx-auto lg:mx-0">
            <div className="relative w-72 sm:w-80 aspect-[3/4] rounded-2xl overflow-hidden group">
              {/* Glow effect behind image */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-500/20 blur-sm opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Image */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/[0.08]">
                <img
                  src="/fotoperfil.jpg"
                  alt="Willy Henrique"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Glass overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0b0f19]/90 to-transparent" />
              </div>

              {/* Location badge */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.08] backdrop-blur-xl border border-white/[0.1]">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                <span className="text-xs text-gray-300 font-medium">Goiânia, GO</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Bio */}
          <motion.div variants={item} className="space-y-5">
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Olá! Sou <span className="text-white font-semibold">Willy Henrique</span>,
              um desenvolvedor Full Stack apaixonado por criar experiências digitais que
              fazem a diferença. Atualmente cursando{' '}
              <span className="text-blue-400 font-medium">Engenharia de Software</span>{' '}
              na <span className="text-white font-medium">UniGoiás</span>, onde combino
              teoria e prática para construir soluções robustas e elegantes.
            </p>
            <p className="text-gray-400 text-base leading-relaxed">
              Minha jornada no desenvolvimento começou com a curiosidade de entender como
              as coisas funcionam por trás das telas. Hoje, essa curiosidade se transformou
              em uma paixão por resolver problemas complexos através de código limpo e
              arquiteturas bem pensadas.
            </p>
            <p className="text-gray-400 text-base leading-relaxed">
              Quando não estou codando, estou explorando novas tecnologias, contribuindo
              para projetos open-source ou aprimorando minhas habilidades em design de
              interfaces. Acredito que o melhor software nasce da combinação entre
              excelência técnica e empatia pelo usuário.
            </p>
          </motion.div>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={item}
              className="group relative rounded-2xl bg-white/[0.02] border border-white/[0.06] p-6 text-center hover:border-blue-500/20 hover:bg-white/[0.04] transition-all duration-500"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-blue-500/[0.03] opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                  {stat.prefix !== undefined ? stat.prefix : ''}
                  {stat.value}
                  <span className="text-blue-400">{stat.suffix}</span>
                </div>
                <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
