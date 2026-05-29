import { Github, Linkedin, Instagram, ArrowUp, Heart } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Início', href: '#hero' },
  { label: 'Sobre', href: '#about' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contato', href: '#contact' },
]

const SOCIAL_LINKS = [
  { icon: Github, href: 'https://github.com/willyhfranca', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/willyhfranca', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://www.instagram.com/eng.willyhenrique/', label: 'Instagram' },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-white/[0.05] bg-[#070a12]">
      {/* Subtle top gradient line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      {/* Main content */}
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand column */}
          <div className="space-y-4">
            <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="inline-block">
              <span className="text-xl font-bold tracking-tight font-heading">
                <span className="text-gradient">Willy</span>
                <span className="text-gray-400">.dev</span>
              </span>
            </a>
            <p className="max-w-xs text-sm leading-relaxed text-gray-500">
              Desenvolvedor Full-Stack apaixonado por criar experiências digitais modernas, performáticas e com design premium.
            </p>
          </div>

          {/* Navigation column */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-500">
              Navegação
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social column */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-500">
              Social
            </h3>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-white/[0.06] text-gray-500 transition-all hover:border-white/[0.12] hover:bg-white/[0.04] hover:text-white"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
            <p className="mt-5 text-sm text-gray-500">
              Disponível para novos projetos e colaborações.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.04]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
          <p className="flex items-center gap-1.5 text-xs text-gray-600">
            © {new Date().getFullYear()} Willy.dev — Feito com
            <Heart size={12} className="text-red-500/70" fill="currentColor" />
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Voltar ao topo"
            className="group grid h-9 w-9 place-items-center rounded-lg border border-white/[0.06] text-gray-500 transition-all hover:border-white/[0.12] hover:bg-white/[0.04] hover:text-white"
          >
            <ArrowUp size={14} className="transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  )
}
