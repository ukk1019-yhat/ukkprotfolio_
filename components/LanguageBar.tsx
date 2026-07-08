import { motion } from 'framer-motion'
import type { LanguageData } from '../types'

export default function LanguageBar({ data }: { data: LanguageData[] }) {
  const total = data.reduce((s, d) => s + d.count, 0)

  return (
    <div className="space-y-3">
      {data.map((lang, i) => (
        <motion.div
          key={lang.name}
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4, delay: i * 0.06 }}
        >
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full" style={{ background: lang.color }} />
              <span className="text-xs text-warm-white/70 font-medium">{lang.name}</span>
            </div>
            <span className="text-xs text-warm-white/40">{lang.count} repos</span>
          </div>
          <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${(lang.count / total) * 100}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
              className="h-full rounded-full"
              style={{ background: lang.color }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  )
}
