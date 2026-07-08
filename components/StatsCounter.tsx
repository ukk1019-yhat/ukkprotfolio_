import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

function CountUp({ value, suffix = '', prefix = '' }: { value: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const duration = 1500
    const step = Math.max(1, Math.floor(value / 60))
    const timer = setInterval(() => {
      start += step
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, duration / (value / step))
    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <span ref={ref} className="stats-number">
      {prefix}{count}{suffix}
    </span>
  )
}

export default function StatsCounter({
  stat,
  index,
}: {
  stat: { label: string; value: number; suffix?: string; prefix?: string }
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-display font-bold text-amber-accent mb-1">
        <CountUp value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
      </div>
      <div className="text-xs text-warm-white/40 uppercase tracking-[0.15em]">{stat.label}</div>
    </motion.div>
  )
}
