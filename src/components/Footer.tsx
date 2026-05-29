import { Github, Linkedin, Instagram, ArrowUp } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const links = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#habilidades', label: 'Skills' },
  { href: '#contato', label: 'Contato' },
];

const socials = [
  { icon: Github, href: 'https://github.com/willyhenrique', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/willy-henrique/', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://www.instagram.com/willyhsf/', label: 'Instagram' },
];

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <footer ref={ref} className="relative border-t border-white/[0.06]">
      {/* Gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-12 items-start"
        >
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold text-white text-lg">
                W
              </div>
              <span className="text-white font-bold text-lg">
                Willy<span className="text-blue-400">.</span>dev
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Engenheiro de Software apaixonado por criar experiências digitais incríveis.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-start md:items-center">
            <p className="text-sm text-gray-500 uppercase tracking-widest mb-4">Navegação</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social & scroll to top */}
          <div className="flex flex-col items-start md:items-end">
            <p className="text-sm text-gray-500 uppercase tracking-widest mb-4">Social</p>
            <div className="flex gap-3 mb-6">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-gray-500 hover:text-white hover:border-white/20 transition-all"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group inline-flex items-center gap-2 text-sm text-gray-500 hover:text-blue-400 transition-colors"
            >
              Voltar ao topo
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Willy Henrique. Todos os direitos reservados.
          </p>
          <p className="text-gray-700 text-xs">
            Feito com 💙 e muito ☕
          </p>
        </div>
      </div>
    </footer>
  );
}
