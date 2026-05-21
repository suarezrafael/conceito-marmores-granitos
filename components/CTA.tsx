'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MessageCircle, Phone, Instagram } from 'lucide-react'
import { COMPANY } from '@/lib/constants'

export default function CTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contato" className="py-24 md:py-32 bg-brand-orange relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/5 pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-60 h-60 rounded-full bg-white/5 pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-white/70 text-xs font-bold tracking-[0.4em] uppercase mb-4">
            Fale conosco
          </span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-white leading-tight mb-5 uppercase tracking-wide">
            Pronto para realizar seu projeto?
          </h2>
          <p className="text-white/80 text-lg mb-10 leading-relaxed max-w-xl mx-auto">
            Entre em contato agora e receba uma proposta personalizada. Atendemos em Venâncio Aires
            e toda a região com agilidade e qualidade.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href={`https://wa.me/${COMPANY.whatsapp}?text=Olá! Gostaria de solicitar um orçamento para meu projeto.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white text-brand-orange hover:bg-gray-50 font-black px-9 py-4 rounded-xl text-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
            >
              <MessageCircle size={22} />
              WhatsApp — Solicitar Orçamento
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-white/65 text-sm">
            <a
              href={`tel:${COMPANY.phone}`}
              className="flex items-center gap-2 hover:text-white transition-colors font-medium"
            >
              <Phone size={15} />
              {COMPANY.phone}
            </a>
            <a
              href={COMPANY.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors font-medium"
            >
              <Instagram size={15} />
              @conceitomarmoresegranitoss
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
