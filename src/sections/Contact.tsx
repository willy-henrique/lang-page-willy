import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';
import { Mail, MapPin, Github, Linkedin, Instagram, Send, ArrowUpRight, Loader2 } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  subject: z.string().min(3, 'Assunto deve ter pelo menos 3 caracteres'),
  message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
});

type FormData = z.infer<typeof formSchema>;

const socialLinks = [
  { icon: Github, href: 'https://github.com/willyhenrique', label: 'GitHub', color: 'hover:border-gray-400' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/willy-henrique/', label: 'LinkedIn', color: 'hover:border-blue-500' },
  { icon: Instagram, href: 'https://www.instagram.com/willyhsf/', label: 'Instagram', color: 'hover:border-pink-500' },
];

export default function Contact() {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.15 });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    if (!formRef.current) return;
    setIsSubmitting(true);
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ''
      );
      toast.success('Mensagem enviada com sucesso! ✨');
      reset();
    } catch {
      toast.error('Erro ao enviar mensagem. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="relative py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-500" />
            <span className="text-blue-400 text-sm font-mono tracking-widest uppercase">04 — Contato</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Vamos <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">conversar?</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Tem um projeto em mente ou quer trocar uma ideia? Ficarei feliz em te ouvir.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Info cards */}
            <div className="space-y-4">
              <div className="group p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-blue-500/30 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Email</p>
                    <a href="mailto:willyhsf@icloud.com" className="text-white hover:text-blue-400 transition-colors">
                      willyhsf@icloud.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="group p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-purple-500/30 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Localização</p>
                    <p className="text-white">Goiânia, GO — Brasil 🇧🇷</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-widest mb-4">Redes sociais</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group/social w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center transition-all hover:bg-white/[0.06] ${social.color}`}
                  >
                    <social.icon className="w-5 h-5 text-gray-400 group-hover/social:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/[0.06]">
              <p className="text-white font-semibold mb-2">Prefere um bate-papo?</p>
              <p className="text-gray-400 text-sm mb-4">
                Me chame nas redes sociais para conversarmos sobre seu projeto.
              </p>
              <a
                href="https://www.linkedin.com/in/willy-henrique/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors"
              >
                Conectar no LinkedIn <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit(onSubmit)}
              className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2 font-medium">Nome</label>
                  <input
                    {...register('name')}
                    type="text"
                    placeholder="Seu nome"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2 font-medium">Email</label>
                  <input
                    {...register('email')}
                    type="email"
                    placeholder="seu@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2 font-medium">Assunto</label>
                <input
                  {...register('subject')}
                  type="text"
                  placeholder="Sobre o que quer falar?"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all"
                />
                {errors.subject && (
                  <p className="text-red-400 text-xs mt-1">{errors.subject.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2 font-medium">Mensagem</label>
                <textarea
                  {...register('message')}
                  rows={5}
                  placeholder="Sua mensagem..."
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all resize-none"
                />
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold transition-all hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    Enviar Mensagem
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
