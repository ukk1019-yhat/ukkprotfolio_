import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Star, GitFork, ExternalLink } from 'lucide-react'
import type { RepoData } from '../types'

export default function GitHubRepos() {
  const [repos, setRepos] = useState<RepoData[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://api.github.com/users/ukk1019-yhat/repos?sort=updated&per_page=6')
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setRepos(
            data.slice(0, 6).map((r: any) => ({
              name: r.name,
              description: r.description || '[No description]',
              language: r.language,
              stars: r.stargazers_count,
              forks: r.forks_count,
              url: r.html_url,
              isFork: r.fork,
              updatedAt: r.updated_at,
            })),
          )
        }
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <div className="grid md:grid-cols-2 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-28 bg-white/[0.02] border border-white/10 rounded-xl animate-pulse" />
        ))}
      </div>
    )
  }

  return (
    <div className="grid md:grid-cols-2 gap-4">
      {repos.map((repo, i) => (
        <motion.a
          key={repo.name}
          href={repo.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4, delay: i * 0.06 }}
          className="group p-4 bg-white/[0.02] border border-white/10 rounded-xl hover:border-amber-accent/30 transition-colors"
        >
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="text-sm font-display font-semibold text-warm-white group-hover:text-amber-accent transition-colors">
                {repo.name}
              </span>
              {repo.isFork && (
                <span className="text-[10px] px-1.5 py-0.5 rounded border border-white/10 text-warm-white/30">
                  fork
                </span>
              )}
            </div>
            <ExternalLink size={12} className="text-warm-white/20 group-hover:text-amber-accent transition-colors shrink-0 mt-0.5" />
          </div>
          <p className="text-xs text-warm-white/50 leading-relaxed mb-3 line-clamp-2">
            {repo.description}
          </p>
          <div className="flex items-center gap-4 text-xs text-warm-white/40">
            {repo.language && (
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-accent/60" />
                {repo.language}
              </span>
            )}
            <span className="flex items-center gap-1">
              <Star size={12} /> {repo.stars}
            </span>
            <span className="flex items-center gap-1">
              <GitFork size={12} /> {repo.forks}
            </span>
          </div>
        </motion.a>
      ))}
    </div>
  )
}
