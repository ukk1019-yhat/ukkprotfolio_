import { useRef, useState, type ReactNode } from 'react'
import { motion } from 'framer-motion'

export default function MagneticButton({
  children,
  href,
  className = '',
}: {
  children: ReactNode
  href?: string
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    setPos({
      x: e.clientX - rect.left - rect.width / 2,
      y: e.clientY - rect.top - rect.height / 2,
    })
  }

  const handleLeave = () => setPos({ x: 0, y: 0 })

  const inner = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      animate={{ x: pos.x * 0.3, y: pos.y * 0.3 }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      className={`inline-flex items-center gap-2 px-8 py-4 bg-amber-accent text-near-black font-display font-semibold text-sm rounded-full cursor-pointer hover:shadow-[0_0_30px_rgba(217,164,65,0.3)] ${className}`}
    >
      {children}
    </motion.div>
  )

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    )
  }

  return inner
}
