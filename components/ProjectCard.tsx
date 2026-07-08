import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import type { Project } from '../types'

export default function ProjectCard({
  project,
  index,
}: {
  project: Project
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{ scale: 1.02 }}
      className="group relative p-6 md:p-8 bg-white/[0.02] border border-white/10 rounded-2xl hover:border-amber-accent/30 transition-colors"
    >
      <div className="flex flex-col h-full">
        <div className="text-xs text-amber-accent/70 font-medium uppercase tracking-[0.15em] mb-2">
          {project.subtitle}
        </div>
        <h3 className="text-xl md:text-2xl font-display font-semibold text-warm-white mb-3 group-hover:text-amber-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-warm-white/60 leading-relaxed mb-6 flex-1">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-3 py-1 rounded-full border border-white/10 text-warm-white/50"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-4">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-amber-accent/80 hover:text-amber-accent transition-colors"
            >
              <ExternalLink size={14} /> Live
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-warm-white/50 hover:text-warm-white transition-colors"
            >
              <Github size={14} /> Source
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
