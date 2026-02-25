import { motion } from 'framer-motion';
import { ArrowDown, ChevronRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] lg:h-screen flex items-center justify-center overflow-hidden pt-20 px-4 sm:px-6">
      {/* Background Gradients - Optimized for performance with opacity and blur */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 sm:w-96 sm:h-96 bg-brand-accent/20 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 sm:w-96 sm:h-96 bg-brand-secondary/20 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge - Commercial positioning */}
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-accent text-xs sm:text-sm font-medium mb-8 tracking-wide uppercase">
            Engenheiro de Software
          </span>
          
          {/* Main Title - Fluid typography with glow */}
          <h1 className="fluid-h1 mb-8 tracking-tight text-white">
            Olá, eu sou <br />
            <span className="text-gradient text-glow">Willy Henrique</span>
          </h1>

          {/* Subtitle - Business-oriented, fluid and responsive lines */}
          <p className="fluid-p text-slate-400 max-w-3xl mx-auto mb-12 font-light">
            Desenvolvo soluções inteligentes para o seu negócio, transformando problemas complexos em sistemas <span className="text-slate-200 font-medium">simples, rápidos e eficientes.</span>
          </p>

          {/* Actions - Large touch targets for mobile */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 group min-h-[56px] px-8"
            >
              Baixar CV
              <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </motion.button>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="btn-secondary w-full sm:w-auto flex items-center justify-center min-h-[56px] px-8"
            >
              Entre em Contato
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator - Hidden on very small screens to save space */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="text-slate-500"
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
