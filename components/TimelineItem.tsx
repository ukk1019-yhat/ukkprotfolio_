import { motion } from 'framer-motion'
import type { Experience } from '../types'

export default function TimelineItem({
  exp,
  index,
}: {
  exp: Experience
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative pl-8 pb-12 last:pb-0 border-l border-white/10 last:border-l-transparent"
    >
      <div className="absolute left-[-4.5px] top-1 w-2 h-2 rounded-full bg-amber-accent" />
      <span className="text-xs text-amber-accent/70 font-mono mb-1 block">{exp.period}</span>
      <h3 className="text-lg font-display font-semibold text-warm-white mb-1">{exp.role}</h3>
      <p className="text-sm text-warm-white/50 mb-1">{exp.company}</p>
      <p className="text-sm text-warm-white/60 leading-relaxed">{exp.description}</p>
    </motion.div>
  )
}
