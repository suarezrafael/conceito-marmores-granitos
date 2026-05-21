'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  UtensilsCrossed,
  Bath,
  MoveVertical,
  AlignJustify,
  LayoutGrid,
  Gem,
  Ruler,
} from 'lucide-react'

const services = [
  {
    icon: UtensilsCrossed,
    title: 'Bancadas de Cozinha',
    desc: 'Bancadas em mármore, granito e quartzo com acabamento polido ou escovado para cozinhas gourmet.',
  },
  {
    icon: Bath,
    title: 'Banheiros Planejados',
    desc: 'Lavabos e banheiros com revestimentos em pedra natural, pias esculpidas e detalhes sofisticados.',
  },
  {
    icon: MoveVertical,
    title: 'Escadas',
    desc: 'Escadas em mármore e granito com degraus e espelhos com acabamento premium.',
  },
  {
    icon: AlignJustify,
    title: 'Soleiras e Peitoris',
    desc: 'Soleiras, peitoris e rodapés em pedra natural para complementar projetos arquitetônicos.',
  },
  {
    icon: LayoutGrid,
    title: 'Revestimentos',
    desc: 'Revestimentos em pedra natural para paredes, fachadas e pisos internos e externos.',
  },
  {
    icon: Gem,
    title: 'Quartzo Premium',
    desc: 'Superfícies em quartzo engineered com alta resistência e aparência sofisticada.',
  },
  {
    icon: Ruler,
    title: 'Projetos Personalizados',
    desc: 'Soluções sob medida para necessidades específicas com total personalização.',
  },
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="servicos" className="py-24 md:py-32 bg-brand-blue-pale">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 26 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="text-center mb-14"
        >
          <span className="section-label">O que fazemos</span>
          <h2 className="section-heading">
            Nossos <span className="text-brand-orange">Serviços</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className="group bg-white border border-gray-100 rounded-2xl p-6 hover:border-brand-orange/40 hover:shadow-lg hover:shadow-brand-orange/8 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                  <Icon size={21} className="text-brand-orange group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-heading font-bold text-brand-blue-dark text-base mb-2.5">
                  {s.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
