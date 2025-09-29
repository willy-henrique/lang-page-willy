import { motion } from 'framer-motion';
import { ChevronDown, Download, Mail } from 'lucide-react';
import fotoPerfil from '../assets/foto-perfil.png';

const Hero = ({ language }) => {
  const translations = {
    'pt-BR': {
      greeting: 'Olá, eu sou',
      name: 'Willy Henrique',
      title: 'Engenheiro de Software',
      subtitle: 'Desenvolvedor Front-end & Engenheiro Mobile',
      description: 'Apaixonado por tecnologia, estou sempre em busca de aprender novas tecnologias e aprimorar minhas habilidades. Especializado em desenvolvimento Front-end e Mobile, criando soluções eficientes e elegantes para os desafios digitais modernos.',
      downloadCV: 'Baixar CV',
      contactMe: 'Entre em Contato',
      scrollDown: 'Role para baixo'
    },
    'en': {
      greeting: 'Hello, I am',
      name: 'Willy Henrique',
      title: 'Software Engineer',
      subtitle: 'Front-end Developer & Mobile Engineer',
      description: 'Passionate about technology, I am always looking to learn new technologies and improve my skills. Specialized in Front-end and Mobile development, creating efficient and elegant solutions for modern digital challenges.',
      downloadCV: 'Download CV',
      contactMe: 'Contact Me',
      scrollDown: 'Scroll down'
    }
  };

  const t = translations[language];

  return (
    <section className="min-h-screen flex items-start justify-center hero-gradient relative overflow-hidden pt-24 sm:pt-28 lg:pt-32">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Sky Effect - Blue themed, subtle and professional */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Color overlay to blend with the blue theme */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/15 via-blue-900/10 to-indigo-900/15"></div>

        {/* Aurora ribbon */}
        <motion.div
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-[120%] h-40 bg-gradient-to-b from-cyan-300/10 via-blue-400/8 to-transparent blur-3xl"
          animate={{ opacity: [0.15, 0.35, 0.15] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        {/* Stars */}
        {[...Array(24)].map((_, i) => (
          <motion.span
            key={`star-${i}`}
            className="absolute rounded-full bg-white"
            style={{
              width: i % 6 === 0 ? 3 : 2,
              height: i % 6 === 0 ? 3 : 2,
              left: `${(i * 17) % 100}%`,
              top: `${(i * 37) % 100}%`,
              opacity: 0.8
            }}
            animate={{ opacity: [0.15, 0.6, 0.25] }}
            transition={{ duration: 4 + (i % 4), repeat: Infinity, ease: "easeInOut", delay: (i % 10) * 0.25 }}
          />
        ))}

        {/* Shooting star */}
        <motion.div
          className="absolute h-[2px] w-24 bg-gradient-to-r from-white/90 via-blue-200/70 to-transparent"
          style={{ left: '5%', top: '25%', rotate: 18 }}
          animate={{ x: ['0%', '110%'], y: ['0%', '35%'], opacity: [0, 1, 0] }}
          transition={{ duration: 2.6, repeat: Infinity, repeatDelay: 7 }}
        />

        {/* Soft moving glow */}
        <motion.div
          className="absolute -bottom-24 right-1/3 w-72 h-72 bg-blue-400/5 rounded-full blur-3xl"
          animate={{ y: [10, -10, 10], x: [0, 10, 0], opacity: [0.08, 0.18, 0.08] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-foreground/80 mb-4"
            >
              {t.greeting}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              <span className="text-gradient">{t.name}</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-2xl md:text-3xl font-semibold text-foreground/90 mb-6"
            >
              {t.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-lg text-foreground/70 mb-2"
            >
              {t.subtitle}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="text-foreground/60 mb-8 max-w-lg"
            >
              {t.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="/Curriculo_Willy_Henrique.pdf"
                download="Curriculo_Willy_Henrique.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg"
              >
                <Download size={20} />
                <span>{t.downloadCV}</span>
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center space-x-2 border border-border px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-secondary/50"
              >
                <Mail size={20} />
                <span>{t.contactMe}</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end order-1"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <img
                  src={fotoPerfil}
                  alt="Willy Henrique"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500/20 rounded-full blur-sm"
              ></motion.div>
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-cyan-500/20 rounded-full blur-sm"
              ></motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-foreground/60 hover:text-foreground/80 transition-colors duration-300"
        >
          <span className="text-sm mb-2">{t.scrollDown}</span>
          <ChevronDown size={24} />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;

