'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, MessageCircle } from 'lucide-react'
import { COMPANY } from '@/lib/constants'

const links = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
]

function ConceitoLogo({ inverted = false }: { inverted?: boolean }) {
  const blue = inverted ? '#ffffff' : '#1a3a8f'
  return (
    <a href="#" className="flex items-center gap-3">
      <svg width="38" height="28" viewBox="0 0 38 28" fill="none">
        <ellipse cx="13" cy="14" rx="11" ry="11" stroke={blue} strokeWidth="3" fill="none" />
        <ellipse cx="25" cy="14" rx="11" ry="11" stroke="#f47920" strokeWidth="3" fill="none" />
      </svg>
      <div className="flex flex-col leading-none">
        <span
          className="font-heading font-bold text-lg tracking-widest"
          style={{ color: inverted ? '#ffffff' : '#0d1f5c' }}
        >
          CONCEITO
        </span>
        <span className="text-[9px] text-brand-orange tracking-[0.3em] uppercase mt-0.5">
          Mármores & Granitos
        </span>
      </div>
    </a>
  )
}

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'bg-white shadow-md shadow-brand-blue-dark/10 border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {scrolled ? <ConceitoLogo /> : <ConceitoLogo inverted />}

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors duration-200 ${
                scrolled
                  ? 'text-gray-600 hover:text-brand-blue'
                  : 'text-white/85 hover:text-white'
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href={`https://wa.me/${COMPANY.whatsapp}?text=Olá! Gostaria de solicitar um orçamento.`}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-light text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-all duration-300 hover:shadow-md hover:shadow-orange-400/30"
        >
          <MessageCircle size={15} />
          Solicitar Orçamento
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden p-2 ${scrolled ? 'text-brand-blue-dark' : 'text-white'}`}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-lg"
          >
            <div className="px-6 py-5 flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-gray-700 hover:text-brand-blue py-3 border-b border-gray-100 text-sm font-medium transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={`https://wa.me/${COMPANY.whatsapp}?text=Olá! Gostaria de solicitar um orçamento.`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2 bg-brand-orange text-white font-bold py-3 rounded-xl text-sm"
              >
                <MessageCircle size={15} />
                Solicitar Orçamento
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
