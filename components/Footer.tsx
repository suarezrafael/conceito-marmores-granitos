import { Instagram, MessageCircle, MapPin, Clock, Phone } from 'lucide-react'
import { COMPANY } from '@/lib/constants'

const navLinks = [
  { href: '#sobre', label: 'Sobre Nós' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
]

function Logo() {
  return (
    <div className="flex items-center gap-3 mb-5">
      <svg width="36" height="27" viewBox="0 0 36 27" fill="none">
        <ellipse cx="12" cy="13.5" rx="10" ry="10" stroke="#ffffff" strokeWidth="3" fill="none" />
        <ellipse cx="24" cy="13.5" rx="10" ry="10" stroke="#f47920" strokeWidth="3" fill="none" />
      </svg>
      <div className="flex flex-col leading-none">
        <span className="font-heading font-bold text-lg text-white tracking-widest">
          CONCEITO
        </span>
        <span className="text-[9px] text-brand-orange tracking-[0.3em] uppercase mt-0.5">
          Mármores & Granitos
        </span>
      </div>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="bg-brand-blue-dark">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Logo />
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Possuímos a qualidade que você procura com o atendimento personalizado que você merece.
              Prontos para realizar seu projeto de forma rápida e eficiente!
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-white/50 text-xs font-bold tracking-widest uppercase mb-5">
              Navegação
            </h4>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-white/40 hover:text-brand-orange text-sm transition-colors duration-200 font-medium"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white/50 text-xs font-bold tracking-widest uppercase mb-5">
              Contato
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`https://wa.me/${COMPANY.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/40 hover:text-brand-orange text-sm transition-colors font-medium"
                >
                  <MessageCircle size={15} />
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="flex items-center gap-3 text-white/40 hover:text-brand-orange text-sm transition-colors font-medium"
                >
                  <Phone size={15} />
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a
                  href={COMPANY.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/40 hover:text-brand-orange text-sm transition-colors font-medium"
                >
                  <Instagram size={15} />
                  @conceitomarmoresegranitoss
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/40 text-sm">
                <MapPin size={15} className="mt-0.5 flex-shrink-0" />
                {COMPANY.address}
              </li>
              <li className="flex items-center gap-3 text-white/40 text-sm">
                <Clock size={15} />
                {COMPANY.hours}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} Conceito Mármores & Granitos. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            <a
              href={COMPANY.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/20 hover:text-brand-orange transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={17} />
            </a>
            <a
              href={`https://wa.me/${COMPANY.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/20 hover:text-brand-orange transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle size={17} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
