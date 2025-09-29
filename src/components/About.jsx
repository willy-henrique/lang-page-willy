import { motion } from 'framer-motion';
import { Code, Smartphone, GraduationCap, MapPin, Calendar, Heart } from 'lucide-react';

const About = ({ language }) => {
  const translations = {
    'pt-BR': {
      title: 'Sobre Mim',
      subtitle: 'Conheça um pouco mais sobre minha jornada',
      description: 'Sou Willy Henrique, estudante de Engenharia de Software no 5º semestre, com 21 anos. Apaixonado por tecnologia, estou sempre em busca de aprender novas tecnologias e aprimorar minhas habilidades. Atualmente, sou especializado em Desenvolvimento Front-end e Mobile, trabalhando com Vue.js, React e Kotlin.',
      experience: 'Com experiência no desenvolvimento web e mobile, crio soluções eficientes e elegantes para os desafios digitais modernos. Residente em Goiânia, Brasil, busco constantemente oportunidades para expandir meu conhecimento e minha expertise.',
      highlights: [
        {
          icon: GraduationCap,
          title: 'Educação',
          description: 'Engenharia de Software - 5º Semestre'
        },
        {
          icon: MapPin,
          title: 'Localização',
          description: 'Goiânia, Brasil'
        },
        {
          icon: Calendar,
          title: 'Idade',
          description: '21 anos'
        },
        {
          icon: Code,
          title: 'Especialização',
          description: 'Desenvolvimento Front-end e Mobile'
        },
        {
          icon: Smartphone,
          title: 'Tecnologias',
          description: 'Vue.js, React, Kotlin'
        },
        {
          icon: Heart,
          title: 'Paixão',
          description: 'Aprender novas tecnologias'
        }
      ]
    },
    'en': {
      title: 'About Me',
      subtitle: 'Learn a little more about my journey',
      description: 'I am Willy Henrique, a Software Engineering student in the 5th semester, 21 years old. Passionate about technology, I am always looking to learn new technologies and improve my skills. Currently, I specialize in Front-end and Mobile Development, working with Vue.js, React and Kotlin.',
      experience: 'With experience in web and mobile development, I create efficient and elegant solutions for modern digital challenges. Resident in Goiânia, Brazil, I constantly seek opportunities to expand my knowledge and expertise.',
      highlights: [
        {
          icon: GraduationCap,
          title: 'Education',
          description: 'Software Engineering - 5th Semester'
        },
        {
          icon: MapPin,
          title: 'Location',
          description: 'Goiânia, Brazil'
        },
        {
          icon: Calendar,
          title: 'Age',
          description: '21 years old'
        },
        {
          icon: Code,
          title: 'Specialization',
          description: 'Front-end & Mobile Development'
        },
        {
          icon: Smartphone,
          title: 'Technologies',
          description: 'Vue.js, React, Kotlin'
        },
        {
          icon: Heart,
          title: 'Passion',
          description: 'Learning new technologies'
        }
      ]
    }
  };

  const t = translations[language];

  return (
    <section id="about" className="py-20 bg-background">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-6 sm:p-8">
              <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
                {t.description}
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base">
                {t.experience}
              </p>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
          >
            {t.highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="skill-card group"
              >
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors duration-300">
                      <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-1 text-sm sm:text-base">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
        >
          {[
            { number: '5º', label: language === 'pt-BR' ? 'Semestre' : 'Semester' },
            { number: '21', label: language === 'pt-BR' ? 'Anos' : 'Years Old' },
            { number: '3+', label: language === 'pt-BR' ? 'Projetos' : 'Projects' },
            { number: '8+', label: language === 'pt-BR' ? 'Tecnologias' : 'Technologies' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;

