import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Smartphone, Server, Wrench } from 'lucide-react';

interface SkillItem {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: SkillItem[];
}

const categories: SkillCategory[] = [
  {
    title: 'Front-end',
    icon: <Code className="w-5 h-5" />,
    skills: [
      { name: 'Vue.js', level: 90 },
      { name: 'React', level: 85 },
      { name: 'JavaScript', level: 88 },
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 90 },
      { name: 'Tailwind', level: 85 },
    ],
  },
  {
    title: 'Mobile & Native',
    icon: <Smartphone className="w-5 h-5" />,
    skills: [
      { name: 'Kotlin', level: 80 },
      { name: 'Android', level: 75 },
      { name: 'React Native', level: 70 },
    ],
  },
  {
    title: 'Back-end',
    icon: <Server className="w-5 h-5" />,
    skills: [
      { name: 'Python', level: 75 },
      { name: 'Node.js', level: 70 },
      { name: 'APIs REST', level: 80 },
    ],
  },
  {
    title: 'Ferramentas',
    icon: <Wrench className="w-5 h-5" />,
    skills: [
      { name: 'Git', level: 85 },
      { name: 'VS Code', level: 90 },
      { name: 'Figma', level: 75 },
      { name: 'Vercel', level: 80 },
    ],
  },
];

const learningTechs = [
  'Next.js', 'Docker', 'AWS', 'GraphQL', 'Prisma', 'tRPC', 'Rust', 'Go',
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

function ProgressBar({ level, inView }: { level: number; inView: boolean }) {
  return (
    <div className="h-1.5 w-full rounded-full bg-white/[0.06] overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={inView ? { width: `${level}%` } : { width: 0 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
        className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
      />
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="habilidades" className="relative py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/[0.03] rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/[0.03] rounded-full blur-3xl" />

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
              03 — Skills
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Minhas{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Habilidades
            </span>
          </h2>
        </motion.div>

        {/* Skills grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-16"
        >
          {categories.map((category) => (
            <motion.div
              key={category.title}
              variants={item}
              className="group relative rounded-2xl bg-white/[0.02] border border-white/[0.06] p-6 hover:border-blue-500/20 hover:bg-white/[0.04] transition-all duration-500"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-blue-500/[0.03] opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative">
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    {category.icon}
                  </div>
                  <h3 className="text-base font-bold text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills list */}
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-xs text-gray-500 font-mono">
                          {skill.level}%
                        </span>
                      </div>
                      <ProgressBar level={skill.level} inView={isInView} />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Always Learning section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="relative rounded-2xl bg-white/[0.02] border border-white/[0.06] p-8 text-center"
        >
          <h3 className="text-lg font-bold text-white mb-2">
            🚀 Always Learning
          </h3>
          <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">
            Tecnologias que estou estudando e explorando atualmente
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {learningTechs.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.8 + i * 0.08 }}
                className="relative px-4 py-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-sm text-gray-400 font-medium hover:border-purple-500/30 hover:text-gray-300 transition-all cursor-default"
              >
                {/* Subtle pulse on hover */}
                <span className="absolute inset-0 rounded-lg bg-purple-500/[0.05] animate-pulse opacity-0 hover:opacity-100" />
                <span className="relative">{tech}</span>
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
