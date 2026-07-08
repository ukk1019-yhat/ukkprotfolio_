import { motion } from 'framer-motion'
import type { Achievement } from '../types'

export default function AchievementBadge({
  achievement,
  index,
}: {
  achievement: Achievement
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="relative p-6 bg-white/[0.02] border border-white/10 rounded-2xl"
    >
      {achievement.type === 'gold' && (
        <div className="absolute -top-px -left-px right-0 h-[2px] bg-gradient-to-r from-amber-accent to-transparent rounded-t-2xl" />
      )}
      <div className="flex items-start gap-4">
        {achievement.type === 'gold' ? (
          <div className="shrink-0 mt-1 w-8 h-8 rounded-full bg-amber-accent/20 border border-amber-accent/30 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-amber-accent" />
          </div>
        ) : (
          <div className="shrink-0 mt-1 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center">
            <div className="w-2 h-2 bg-warm-white/30 rounded-full" />
          </div>
        )}
        <div>
          <h3 className="text-base font-display font-semibold text-warm-white mb-1">
            {achievement.title}
          </h3>
          <p className="text-sm text-warm-white/60 leading-relaxed">{achievement.description}</p>
        </div>
      </div>
    </motion.div>
  )
}
