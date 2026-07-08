import { motion } from 'framer-motion'
import type { SkillGroup as SkillGroupType } from '../types'

export default function SkillGroup({
  group,
  index,
}: {
  group: SkillGroupType
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-amber-accent/60 mb-3">
        {group.category}
      </h3>
      <div className="flex flex-wrap gap-x-5 gap-y-2">
        {group.items.map((skill) => (
          <span key={skill} className="text-sm text-warm-white/70 font-medium">
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
