'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const highlights = [
  'Acabamento de alto padrão em cada projeto',
  'Atendimento personalizado do início ao fim',
  'Materiais de primeira qualidade selecionados',
  '14 anos de experiência no mercado',
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="sobre" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75 }}
            className="relative order-2 md:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=85"
                alt="Projeto de cozinha premium em mármore"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              {/* Orange accent badge */}
              <div className="absolute bottom-6 left-6 bg-brand-orange text-white rounded-2xl px-5 py-4 shadow-xl">
                <div className="font-heading font-black text-2xl">14+</div>
                <div className="text-xs font-semibold mt-0.5">Anos de Experiência</div>
              </div>
            </div>
            {/* Blue decorative border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-brand-blue/15 rounded-2xl pointer-events-none" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.15 }}
            className="order-1 md:order-2"
          >
            <span className="section-label">Sobre Nós</span>
            <h2 className="section-heading mb-6">
              Possuímos a qualidade que você{' '}
              <span className="text-brand-orange">procura</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              A Conceito Mármores & Granitos é uma empresa especializada em projetos de alto padrão
              com mármores, granitos e quartzos. Com mais de 14 anos de atuação em Venâncio Aires e
              região, oferecemos o atendimento personalizado que você merece.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Nossa equipe altamente qualificada — sempre de uniforme laranja, nossa marca
              registrada — garante desde a escolha do material até a instalação final, com
              acabamento impecável e entrega dentro do prazo.
            </p>

            <ul className="space-y-3 mb-10">
              {highlights.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.35 + i * 0.08 }}
                  className="flex items-center gap-3 text-gray-700"
                >
                  <CheckCircle2 size={18} className="text-brand-orange flex-shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </motion.li>
              ))}
            </ul>

            <a
              href={`#contato`}
              className="btn-blue"
            >
              Fale com a gente
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
