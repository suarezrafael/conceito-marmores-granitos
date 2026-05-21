'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Ana Carolina Ferreira',
    city: 'Venâncio Aires, RS',
    stars: 5,
    text: 'A Conceito transformou minha cozinha completamente. O mármore ficou deslumbrante e a equipe foi extremamente profissional do início ao fim. Superou todas as expectativas!',
    initials: 'AC',
  },
  {
    id: 2,
    name: 'Roberto Mendes',
    city: 'Santa Cruz do Sul, RS',
    stars: 5,
    text: 'Contratei para o banheiro social e ficou incrível. Material de altíssima qualidade, instalação perfeita e prazo cumprido. Já indiquei para toda a família e amigos.',
    initials: 'RM',
  },
  {
    id: 3,
    name: 'Juliana Santos',
    city: 'Venâncio Aires, RS',
    stars: 5,
    text: 'Fiz as escadas da minha casa em granito e superou todas as expectativas. Atendimento personalizado, sugestões precisas e acabamento impecável. Recomendo muito!',
    initials: 'JS',
  },
  {
    id: 4,
    name: 'Marcelo Costa',
    city: 'Lajeado, RS',
    stars: 5,
    text: 'Fizeram o revestimento da minha área gourmet e ficou exatamente como eu imaginava. Qualidade e elegância em cada detalhe. Empresa séria, comprometida e eficiente.',
    initials: 'MC',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  const t = testimonials[current]

  return (
    <section id="depoimentos" className="py-24 md:py-32 bg-brand-blue-pale overflow-hidden">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 26 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="text-center mb-14"
        >
          <span className="section-label">Depoimentos</span>
          <h2 className="section-heading">
            O que dizem nossos <span className="text-brand-orange">clientes</span>
          </h2>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={t.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="bg-white border border-gray-100 rounded-2xl p-8 md:p-12 shadow-sm"
            >
              {/* Quote icon */}
              <Quote size={32} className="text-brand-orange/25 mb-5" />

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} size={17} className="text-brand-orange fill-brand-orange" />
                ))}
              </div>

              <blockquote className="text-gray-700 text-lg leading-relaxed mb-8 font-medium">
                &ldquo;{t.text}&rdquo;
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-blue flex items-center justify-center text-white font-bold font-heading text-sm">
                  {t.initials}
                </div>
                <div>
                  <div className="text-brand-blue-dark font-bold text-sm">{t.name}</div>
                  <div className="text-gray-400 text-xs mt-0.5">{t.city}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-5 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 border-2 border-brand-blue/20 rounded-full flex items-center justify-center text-brand-blue/50 hover:border-brand-orange hover:text-brand-orange transition-colors"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft size={17} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? 'bg-brand-orange w-7' : 'bg-gray-300 w-2 hover:bg-brand-blue/40'
                  }`}
                  aria-label={`Depoimento ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 border-2 border-brand-blue/20 rounded-full flex items-center justify-center text-brand-blue/50 hover:border-brand-orange hover:text-brand-orange transition-colors"
              aria-label="Próximo depoimento"
            >
              <ChevronRight size={17} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
