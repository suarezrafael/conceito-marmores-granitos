'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown, MessageCircle, ArrowRight } from 'lucide-react'
import { COMPANY } from '@/lib/constants'

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])

  return (
    <section ref={ref} id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=85')",
          }}
        />
      </motion.div>

      {/* Brand blue overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue-dark/90 via-brand-blue-dark/75 to-brand-blue/70" />

      {/* Orange accent bar — bottom */}
      <div className="absolute bottom-0 inset-x-0 h-1 bg-brand-orange" />

      {/* Decorative circles — brand logo motif */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full border border-white/5 hidden lg:block" />
      <div className="absolute top-32 right-24 w-48 h-48 rounded-full border border-brand-orange/15 hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 pt-24">
        <motion.span
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="inline-block bg-brand-orange/20 border border-brand-orange/40 text-brand-orange text-xs font-bold tracking-[0.4em] uppercase px-4 py-2 rounded-full mb-6"
        >
          Qualidade & Atendimento Personalizado
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="font-heading font-bold text-5xl md:text-7xl text-white leading-[1.05] mb-6 uppercase tracking-wide"
        >
          Transformamos pedra{' '}
          <span className="text-brand-orange">em sofisticação</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Projetos em mármore, granito e quartzo com acabamento premium para
          cozinhas, banheiros, escadas e ambientes planejados. Prontos para
          realizar seu projeto de forma rápida e eficiente!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href={`https://wa.me/${COMPANY.whatsapp}?text=Olá! Gostaria de solicitar um orçamento para meu projeto.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-orange text-base"
          >
            <MessageCircle size={18} />
            Solicitar Orçamento
          </a>
          <a href="#projetos" className="btn-outline-white text-base">
            Ver Projetos
            <ArrowRight size={16} />
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.05 }}
          className="mt-16 grid grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden max-w-lg mx-auto"
        >
          {[
            { value: '473', label: 'Projetos' },
            { value: '14+', label: 'Anos' },
            { value: '100%', label: 'Satisfação' },
          ].map((s) => (
            <div key={s.label} className="bg-brand-blue-dark/60 backdrop-blur-sm py-5 px-4 text-center">
              <div className="font-heading font-bold text-2xl text-brand-orange">{s.value}</div>
              <div className="text-white/50 text-xs mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Floating WhatsApp */}
      <motion.a
        href={`https://wa.me/${COMPANY.whatsapp}?text=Olá! Gostaria de solicitar um orçamento.`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.8, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.12 }}
        className="fixed bottom-8 right-8 z-50 bg-green-500 hover:bg-green-400 text-white p-4 rounded-full shadow-xl shadow-green-500/35 transition-colors duration-300"
        aria-label="WhatsApp"
      >
        <MessageCircle size={24} />
      </motion.a>

      {/* Scroll indicator */}
      <motion.a
        href="#sobre"
        aria-label="Próxima seção"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 hover:text-brand-orange transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.2 }}
      >
        <ChevronDown size={26} />
      </motion.a>
    </section>
  )
}
