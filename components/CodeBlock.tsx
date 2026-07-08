import { motion } from 'framer-motion'
import { Github } from 'lucide-react'
import type { CodeSnippet } from '../types'

export default function CodeBlock({
  snippet,
  index,
}: {
  snippet: CodeSnippet
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group border border-white/10 rounded-xl overflow-hidden hover:border-amber-accent/20 transition-colors"
    >
      <div className="flex items-center justify-between px-4 py-2.5 bg-white/[0.02] border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2 h-2 rounded-full bg-red-500/40" />
            <span className="w-2 h-2 rounded-full bg-amber-accent/40" />
            <span className="w-2 h-2 rounded-full bg-green-500/40" />
          </div>
          <span className="text-xs text-warm-white/40 ml-2">{snippet.title}</span>
        </div>
        <a
          href={`https://github.com/${snippet.repo}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-warm-white/30 hover:text-amber-accent transition-colors"
        >
          <Github size={14} />
        </a>
      </div>
      <pre className="p-4 overflow-x-auto text-xs leading-relaxed code-font">
        <code className="text-warm-white/70">
          {snippet.code.split('\n').map((line, i) => {
            const trimmed = line.trimStart()
            const indent = line.length - trimmed.length
            const isComment = trimmed.startsWith('//') || trimmed.startsWith('/*') || trimmed.startsWith('*/') || trimmed.startsWith('*')
            const isImport = trimmed.startsWith('import ')
            const isTag = trimmed.startsWith('<') && trimmed.endsWith('>')
            const isString = trimmed.startsWith('"') || trimmed.startsWith("'")
            const isKeyword = ['export', 'default', 'function', 'const', 'let', 'var', 'return', 'interface', 'from', 'if', 'else', 'for', 'while'].some(k => trimmed.startsWith(k + ' ') || trimmed === k)

            let color = 'text-warm-white/70'
            if (isComment) color = 'text-warm-white/30 italic'
            else if (isImport) color = 'text-amber-accent/70'
            else if (isKeyword) color = 'text-amber-accent/80'
            else if (isTag) color = 'text-amber-accent/60'
            else if (isString) color = 'text-green-500/60'

            return (
              <div key={i} className={color} style={{ paddingLeft: `${indent * 2}px` }}>
                {trimmed || '\u00A0'}
              </div>
            )
          })}
        </code>
      </pre>
    </motion.div>
  )
}
