'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'

type Category = 'Todos' | 'Cozinhas' | 'Banheiros' | 'Escadas' | 'Revestimentos'

const categories: Category[] = ['Todos', 'Cozinhas', 'Banheiros', 'Escadas', 'Revestimentos']

const projects = [
  {
    id: 1,
    title: 'Preto São Gabriel Escovado',
    subtitle: 'Bancada com rebaixo, cuba inox e cooktop',
    category: 'Cozinhas' as Category,
    image: '/images/projeto-cozinha-preto-sao-gabriel.jpeg',
    real: true,
  },
  {
    id: 2,
    title: 'Mármore Donatello',
    subtitle: 'Escadaria com acabamento em 45 graus',
    category: 'Escadas' as Category,
    image: '/images/projeto-escada-marmore-donatello.png',
    real: true,
  },
  {
    id: 3,
    title: 'Bancada Branca Premium',
    subtitle: 'Cozinha gourmet com acabamento polido',
    category: 'Cozinhas' as Category,
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&q=80',
    real: false,
  },
  {
    id: 4,
    title: 'Banheiro em Mármore',
    subtitle: 'Lavabo com revestimento em pedra natural',
    category: 'Banheiros' as Category,
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80',
    real: false,
  },
  {
    id: 5,
    title: 'Revestimento em Granito',
    subtitle: 'Área gourmet com granito escovado',
    category: 'Revestimentos' as Category,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    real: false,
  },
  {
    id: 6,
    title: 'Bancada Cozinha Moderna',
    subtitle: 'Ilha central em quartzo branco',
    category: 'Cozinhas' as Category,
    image: 'https://images.unsplash.com/photo-1556085049-5a3aafdf2fd4?w=600&q=80',
    real: false,
  },
  {
    id: 7,
    title: 'Banheiro Master',
    subtitle: 'Revestimento completo em mármore',
    category: 'Banheiros' as Category,
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80',
    real: false,
  },
  {
    id: 8,
    title: 'Parede em Pedra Natural',
    subtitle: 'Revestimento para área externa',
    category: 'Revestimentos' as Category,
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=80',
    real: false,
  },
]

export default function Gallery() {
  const [active, setActive] = useState<Category>('Todos')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const filtered = active === 'Todos' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="projetos" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 26 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="text-center mb-12"
        >
          <span className="section-label">Portfólio</span>
          <h2 className="section-heading">
            Nossos <span className="text-brand-orange">Projetos</span>
          </h2>
          <p className="text-gray-500 mt-3 text-sm">
            Fotos reais dos nossos projetos executados
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                active === cat
                  ? 'bg-brand-orange text-white shadow-md shadow-orange-400/25'
                  : 'bg-gray-100 text-gray-600 hover:bg-brand-blue-pale hover:text-brand-blue'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.93 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.93 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-2xl overflow-hidden aspect-square cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-400"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  onError={(e) => {
                    const el = e.currentTarget
                    el.style.display = 'none'
                    el.parentElement!.style.background = '#eef2fb'
                  }}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                />

                {/* Real project badge */}
                {p.real && (
                  <div className="absolute top-3 left-3 bg-brand-orange text-white text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full uppercase">
                    Projeto Real
                  </div>
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-dark/90 via-brand-blue/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-350" />
                <div className="absolute bottom-0 inset-x-0 p-5 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-350">
                  <span className="text-brand-orange text-[10px] tracking-widest uppercase font-bold">
                    {p.category}
                  </span>
                  <h3 className="text-white font-heading font-bold text-lg leading-tight mt-0.5">
                    {p.title}
                  </h3>
                  <p className="text-white/65 text-xs mt-1">{p.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <p className="text-center text-gray-400 text-xs mt-8">
          * Envie mais fotos dos seus projetos para substituir as imagens de exemplo
        </p>
      </div>
    </section>
  )
}
