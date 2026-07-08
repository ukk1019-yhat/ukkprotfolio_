import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const NAV_ITEMS = ['About', 'Experience', 'Projects', 'Skills', 'Achievements', 'Contact']

export default function NavBar() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-near-black/70 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
          <a href="#hero" className="text-warm-white font-display font-bold text-xl tracking-tight">
            UKK<span className="text-amber-accent">.</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm">
            {NAV_ITEMS.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-warm-white/50 hover:text-warm-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          <button className="md:hidden text-warm-white" onClick={() => setOpen(true)} aria-label="Menu">
            <Menu size={22} />
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-near-black flex flex-col items-center justify-center gap-8"
          >
            <button
              className="absolute top-6 right-6 text-warm-white"
              onClick={() => setOpen(false)}
              aria-label="Close"
            >
              <X size={24} />
            </button>
            {NAV_ITEMS.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="text-3xl font-display font-bold text-warm-white/60 hover:text-amber-accent transition-colors"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
