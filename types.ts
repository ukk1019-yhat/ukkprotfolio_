export interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  tags: string[]
  link?: string
  github?: string
  stars?: number
  language?: string
}

export interface Experience {
  company: string
  role: string
  period: string
  description: string
}

export interface SkillGroup {
  category: string
  items: string[]
}

export interface Achievement {
  title: string
  description: string
  type: 'gold' | 'cert'
}

export interface StatItem {
  label: string
  value: number
  suffix?: string
  prefix?: string
}

export interface LanguageData {
  name: string
  count: number
  color: string
}

export interface RepoData {
  name: string
  description: string
  language: string | null
  stars: number
  forks: number
  url: string
  isFork: boolean
  updatedAt: string
}

export interface CodeSnippet {
  title: string
  language: string
  code: string
  from: string
  repo: string
}
