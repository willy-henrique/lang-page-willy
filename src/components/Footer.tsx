export function Footer() {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Willy Henrique. Todos os direitos reservados.
        </p>
        <div className="flex items-center gap-6">
          <a href="#home" className="text-xs uppercase tracking-widest text-slate-500 hover:text-white transition-colors">Home</a>
          <a href="#about" className="text-xs uppercase tracking-widest text-slate-500 hover:text-white transition-colors">Sobre</a>
          <a href="#projects" className="text-xs uppercase tracking-widest text-slate-500 hover:text-white transition-colors">Projetos</a>
          <a href="#contact" className="text-xs uppercase tracking-widest text-slate-500 hover:text-white transition-colors">Contato</a>
        </div>
      </div>
    </footer>
  );
}
