import { motion } from 'framer-motion';
import { Mail, Github, Instagram, Linkedin, MapPin, Phone, Send } from 'lucide-react';

const Contact = ({ language }) => {
  const translations = {
    'pt-BR': {
      title: 'Contato',
      subtitle: 'Vamos trabalhar juntos? Entre em contato!',
      description: 'Estou sempre aberto a novas oportunidades e projetos interessantes. Se você tem uma ideia ou precisa de ajuda com desenvolvimento, não hesite em entrar em contato.',
      getInTouch: 'Entre em Contato',
      location: 'Goiânia, Brasil',
      email: 'henriquewilly03@gmail.com',
      form: {
        name: 'Nome',
        email: 'Email',
        subject: 'Assunto',
        message: 'Mensagem',
        send: 'Enviar Mensagem',
        namePlaceholder: 'Seu nome',
        emailPlaceholder: 'seu@email.com',
        subjectPlaceholder: 'Assunto da mensagem',
        messagePlaceholder: 'Sua mensagem...'
      }
    },
    'en': {
      title: 'Contact',
      subtitle: 'Let\'s work together? Get in touch!',
      description: 'I am always open to new opportunities and interesting projects. If you have an idea or need help with development, don\'t hesitate to get in touch.',
      getInTouch: 'Get In Touch',
      location: 'Goiânia, Brazil',
      email: 'henriquewilly03@gmail.com',
      form: {
        name: 'Name',
        email: 'Email',
        subject: 'Subject',
        message: 'Message',
        send: 'Send Message',
        namePlaceholder: 'Your name',
        emailPlaceholder: 'your@email.com',
        subjectPlaceholder: 'Message subject',
        messagePlaceholder: 'Your message...'
      }
    }
  };

  const t = translations[language];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: t.email,
      href: `mailto:${t.email}`,
      color: 'from-red-400 to-red-600'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/willy-henrique',
      href: 'https://www.linkedin.com/in/willy-henrique/',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/willy-henrique',
      href: 'https://github.com/willy-henrique',
      color: 'from-gray-400 to-gray-600'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@willy.hvs',
      href: 'https://instagram.com/willy.hvs',
      color: 'from-pink-400 to-pink-600'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: t.location,
      href: '#',
      color: 'from-green-400 to-green-600'
    }
  ];

  return (
    <section id="contact" className="section-padding gradient-bg prevent-jump">
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
          <p className="text-white/90 max-w-2xl mx-auto mb-6 text-lg">
            {t.subtitle}
          </p>
          <p className="text-white/80 max-w-3xl mx-auto text-base">
            {t.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-white">{t.getInTouch}</h3>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="skill-card group"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">
                        {item.label}
                      </h4>
                      {item.href !== '#' ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/80 hover:text-blue-300 transition-colors duration-200"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white/80">{item.value}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8"
            >
              <h4 className="font-semibold mb-4">
                {language === 'pt-BR' ? 'Redes Sociais' : 'Social Media'}
              </h4>
              <div className="flex space-x-4">
                {contactInfo.slice(1, 4).map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${social.color} flex items-center justify-center text-white hover:shadow-lg transition-shadow duration-300`}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-white">
              {language === 'pt-BR' ? 'Envie uma Mensagem' : 'Send a Message'}
            </h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-white/90">
                    {t.form.name}
                  </label>
                  <input
                    type="text"
                    placeholder={t.form.namePlaceholder}
                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-white/90">
                    {t.form.email}
                  </label>
                  <input
                    type="email"
                    placeholder={t.form.emailPlaceholder}
                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-white/90">
                  {t.form.subject}
                </label>
                <input
                  type="text"
                  placeholder={t.form.subjectPlaceholder}
                  className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-white/90">
                  {t.form.message}
                </label>
                <textarea
                  rows={6}
                  placeholder={t.form.messagePlaceholder}
                  className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200 resize-none"
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-lg font-medium flex items-center justify-center space-x-2 hover:bg-primary/80 transition-colors duration-200"
              >
                <Send size={20} />
                <span>{t.form.send}</span>
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-16 pt-8 border-t border-border/50"
        >
          <p className="text-foreground/60">
            © 2025 Willy Henrique. {language === 'pt-BR' ? 'Todos os direitos reservados.' : 'All rights reserved.'}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

