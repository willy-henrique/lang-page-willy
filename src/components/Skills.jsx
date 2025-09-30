import { motion } from 'framer-motion';

const Skills = ({ language }) => {
  const translations = {
    'pt-BR': {
      title: 'Habilidades',
      subtitle: 'Tecnologias e ferramentas que domino',
      categories: {
        frontend: 'Front-end',
        mobile: 'Mobile',
        backend: 'Back-end',
        tools: 'Ferramentas'
      }
    },
    'en': {
      title: 'Skills',
      subtitle: 'Technologies and tools I master',
      categories: {
        frontend: 'Front-end',
        mobile: 'Mobile',
        backend: 'Back-end',
        tools: 'Tools'
      }
    }
  };

  const t = translations[language];

  const skillsData = {
    frontend: [
      { name: 'Vue.js', level: 90, color: 'from-green-400 to-green-600' },
      { name: 'React', level: 85, color: 'from-blue-400 to-blue-600' },
      { name: 'JavaScript', level: 88, color: 'from-yellow-400 to-yellow-600' },
      { name: 'HTML', level: 95, color: 'from-orange-400 to-orange-600' },
      { name: 'CSS', level: 90, color: 'from-blue-400 to-blue-600' },
      { name: 'Tailwind', level: 85, color: 'from-cyan-400 to-cyan-600' }
    ],
    mobile: [
      { name: 'Kotlin', level: 80, color: 'from-purple-400 to-purple-600' },
      { name: 'Android', level: 75, color: 'from-green-400 to-green-600' },
      { name: 'React Native', level: 70, color: 'from-blue-400 to-blue-600' }
    ],
    backend: [
      { name: 'Python', level: 75, color: 'from-blue-400 to-blue-600' },
      { name: 'Node.js', level: 70, color: 'from-green-400 to-green-600' },
      { name: 'APIs REST', level: 80, color: 'from-indigo-400 to-indigo-600' }
    ],
    tools: [
      { name: 'Git', level: 85, color: 'from-red-400 to-red-600' },
      { name: 'VS Code', level: 90, color: 'from-blue-400 to-blue-600' },
      { name: 'Figma', level: 75, color: 'from-purple-400 to-purple-600' },
      { name: 'Vercel', level: 80, color: 'from-gray-400 to-gray-600' }
    ]
  };

  return (
    <section id="skills" className="section-padding bg-background prevent-jump">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">{t.title}</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="skill-card"
            >
              <h3 className="text-xl font-bold mb-6 text-center">
                {t.categories[category]}
              </h3>
              
              <div className="space-y-4">
                {skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.6, 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1 
                    }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-xs text-foreground/60">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-secondary/30 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 1, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                          ease: "easeOut"
                        }}
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            {language === 'pt-BR' ? 'Outras Competências' : 'Other Skills'}
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Responsive Design',
              'UI/UX Design',
              'Agile/Scrum',
              'Problem Solving',
              'Team Collaboration',
              'Version Control',
              'Testing',
              'Performance Optimization'
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors duration-200"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold mb-4">
              {language === 'pt-BR' ? 'Sempre Aprendendo' : 'Always Learning'}
            </h3>
            <p className="text-foreground/70 mb-6">
              {language === 'pt-BR' 
                ? 'A tecnologia está sempre evoluindo, e eu também. Atualmente estou explorando novas tecnologias e aprimorando minhas habilidades existentes.'
                : 'Technology is always evolving, and so am I. I am currently exploring new technologies and improving my existing skills.'
              }
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'TypeScript',
                'Next.js',
                'Flutter',
                'Docker',
                'AWS'
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-secondary/50 text-secondary-foreground px-3 py-1 rounded-lg text-sm"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

