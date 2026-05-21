'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award, Users, Shield, Package, Pencil, Zap } from 'lucide-react'

const items = [
  {
    icon: Award,
    title: 'Acabamento de Alto Padrão',
    desc: 'Cada peça recebe tratamento especializado para um resultado impecável.',
  },
  {
    icon: Users,
    title: 'Atendimento Personalizado',
    desc: 'Consultoria individual para entender e superar suas expectativas.',
  },
  {
    icon: Shield,
    title: 'Materiais Selecionados',
    desc: 'Trabalhamos apenas com os melhores mármores, granitos e quartzos.',
  },
  {
    icon: Package,
    title: 'Entrega Profissional',
    desc: 'Instalação precisa com equipe treinada e compromisso com o prazo.',
  },
  {
    icon: Pencil,
    title: 'Projeto Sob Medida',
    desc: 'Desenvolvemos soluções únicas adaptadas ao seu espaço e estilo.',
  },
  {
    icon: Zap,
    title: 'Execução Rápida e Eficiente',
    desc: 'Prontos para realizar seu projeto com agilidade e sem abrir mão da qualidade.',
  },
]

export default function Differentials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-24 md:py-32 bg-brand-blue">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 26 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="text-center mb-16"
        >
          <span className="section-label-white">Nossos diferenciais</span>
          <h2 className="section-heading-white">
            Por que nos{' '}
            <span className="text-brand-orange">escolher?</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.09, duration: 0.55 }}
                className="flex gap-5 group"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-brand-orange/20 rounded-xl flex items-center justify-center mt-0.5 group-hover:bg-brand-orange transition-colors duration-300">
                  <Icon size={20} className="text-brand-orange group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-white text-base mb-2">{item.title}</h3>
                  <p className="text-sm text-white/55 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
