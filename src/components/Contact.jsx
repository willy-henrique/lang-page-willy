import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Instagram, Linkedin, MapPin, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = ({ language }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

  const translations = {
    'pt-BR': {
      title: 'Contato',
      subtitle: 'Vamos trabalhar juntos? Entre em contato!',
      description: 'Estou sempre aberto a novas oportunidades e projetos interessantes. Se você tem uma ideia ou precisa de ajuda com desenvolvimento, não hesite em entrar em contato.',
      getInTouch: 'Entre em Contato',
      location: 'Goiânia, Brasil',
      email: 'willydev01@gmail.com',
      form: {
        name: 'Nome',
        email: 'Email',
        subject: 'Assunto',
        message: 'Mensagem',
        send: 'Enviar Mensagem',
        namePlaceholder: 'Seu nome',
        emailPlaceholder: 'seu@email.com',
        subjectPlaceholder: 'Assunto da mensagem',
        messagePlaceholder: 'Sua mensagem...',
        sending: 'Enviando...',
        successMessage: 'Mensagem enviada com sucesso!',
        errorMessage: 'Erro ao enviar mensagem. Tente novamente.'
      }
    },
    'en': {
      title: 'Contact',
      subtitle: 'Let\'s work together? Get in touch!',
      description: 'I am always open to new opportunities and interesting projects. If you have an idea or need help with development, don\'t hesitate to get in touch.',
      getInTouch: 'Get In Touch',
      location: 'Goiânia, Brazil',
      email: 'willydev01@gmail.com',
      form: {
        name: 'Name',
        email: 'Email',
        subject: 'Subject',
        message: 'Message',
        send: 'Send Message',
        namePlaceholder: 'Your name',
        emailPlaceholder: 'your@email.com',
        subjectPlaceholder: 'Message subject',
        messagePlaceholder: 'Your message...',
        sending: 'Sending...',
        successMessage: 'Message sent successfully!',
        errorMessage: 'Error sending message. Please try again.'
      }
    }
  };

  const t = translations[language];

  // EmailJS configuration
  const EMAILJS_SERVICE_ID = 'service_d2q5q3g';
  const EMAILJS_TEMPLATE_ID = 'template_d8fgg8g';
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Initialize EmailJS
      emailjs.init(EMAILJS_PUBLIC_KEY);

      // Send email
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'willydev01@gmail.com'
        }
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center space-x-2 p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400"
                >
                  <CheckCircle size={20} />
                  <span>{t.form.successMessage}</span>
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center space-x-2 p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400"
                >
                  <AlertCircle size={20} />
                  <span>{t.form.errorMessage}</span>
                </motion.div>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-white/90">
                    {t.form.name}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={t.form.namePlaceholder}
                    required
                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200 text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-white/90">
                    {t.form.email}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={t.form.emailPlaceholder}
                    required
                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200 text-white"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-white/90">
                  {t.form.subject}
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder={t.form.subjectPlaceholder}
                  required
                  className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200 text-white"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-white/90">
                  {t.form.message}
                </label>
                <textarea
                  rows={6}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={t.form.messagePlaceholder}
                  required
                  className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200 resize-none text-white"
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`w-full py-3 px-6 rounded-lg font-medium flex items-center justify-center space-x-2 transition-colors duration-200 ${
                  isSubmitting 
                    ? 'bg-gray-500 cursor-not-allowed' 
                    : 'bg-primary text-primary-foreground hover:bg-primary/80'
                }`}
              >
                <Send size={20} />
                <span>{isSubmitting ? t.form.sending : t.form.send}</span>
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

