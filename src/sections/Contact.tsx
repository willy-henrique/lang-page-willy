import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Instagram,
  Send,
  Loader2,
  ExternalLink,
} from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';

const contactSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  subject: z.string().min(3, 'Assunto deve ter pelo menos 3 caracteres'),
  message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/willyhfranca',
    icon: <Github className="w-5 h-5" />,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/willyhfranca',
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/eng.willyhenrique/',
    icon: <Instagram className="w-5 h-5" />,
  },
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

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      toast.success('Mensagem enviada com sucesso!', {
        description: 'Responderei o mais breve possível.',
      });
      reset();
    } catch {
      toast.error('Erro ao enviar mensagem', {
        description: 'Tente novamente ou entre em contato por email.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses =
    'w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder:text-gray-600 text-sm focus:outline-none focus:border-blue-500/40 focus:bg-white/[0.05] transition-all duration-300';

  return (
    <section id="contato" className="relative py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-500/[0.03] rounded-full blur-3xl" />

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
              04 — Contato
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Vamos{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              conversar?
            </span>
          </h2>
        </motion.div>

        {/* 2-column layout */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* Left column: Contact info */}
          <div className="space-y-6">
            {/* Email card */}
            <motion.div
              variants={item}
              className="group flex items-center gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-blue-500/20 hover:bg-white/[0.04] transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-0.5">Email</p>
                <a
                  href="mailto:willydev01@gmail.com"
                  className="text-white font-medium text-sm hover:text-blue-400 transition-colors"
                >
                  willydev01@gmail.com
                </a>
              </div>
            </motion.div>

            {/* Location card */}
            <motion.div
              variants={item}
              className="group flex items-center gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-blue-500/20 hover:bg-white/[0.04] transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-0.5">Localização</p>
                <p className="text-white font-medium text-sm">Goiânia, GO</p>
              </div>
            </motion.div>

            {/* Social links */}
            <motion.div variants={item} className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500/30 hover:bg-white/[0.06] transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </motion.div>

            {/* LinkedIn CTA card */}
            <motion.a
              variants={item}
              href="https://linkedin.com/in/willyhfranca"
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 rounded-2xl bg-gradient-to-br from-blue-500/[0.08] to-purple-500/[0.05] border border-blue-500/[0.15] hover:border-blue-500/30 transition-all duration-500"
            >
              <div className="flex items-center justify-between mb-3">
                <Linkedin className="w-6 h-6 text-blue-400" />
                <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-blue-400 transition-colors" />
              </div>
              <h4 className="text-white font-bold text-base mb-1">
                Vamos nos conectar!
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Me siga no LinkedIn para acompanhar meus projetos e artigos sobre
                desenvolvimento.
              </p>
            </motion.a>
          </div>

          {/* Right column: Contact form */}
          <motion.div
            variants={item}
            className="relative rounded-2xl bg-white/[0.02] border border-white/[0.06] p-6 sm:p-8"
          >
            {/* Subtle corner glow */}
            <div className="absolute -top-px -right-px w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="relative space-y-5"
            >
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm text-gray-400 font-medium mb-2">
                  Nome
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Seu nome"
                  className={inputClasses}
                  {...register('name')}
                />
                {errors.name && (
                  <p className="mt-1.5 text-xs text-red-400">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm text-gray-400 font-medium mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  className={inputClasses}
                  {...register('email')}
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs text-red-400">{errors.email.message}</p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm text-gray-400 font-medium mb-2">
                  Assunto
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Assunto da mensagem"
                  className={inputClasses}
                  {...register('subject')}
                />
                {errors.subject && (
                  <p className="mt-1.5 text-xs text-red-400">{errors.subject.message}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm text-gray-400 font-medium mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Sua mensagem..."
                  className={`${inputClasses} resize-none`}
                  {...register('message')}
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-red-400">{errors.message.message}</p>
                )}
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium text-sm hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100 disabled:hover:shadow-none transition-all duration-300"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Enviar Mensagem
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
