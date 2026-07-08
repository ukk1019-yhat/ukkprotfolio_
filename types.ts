export interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  tags: string[]
  link?: string
  github?: string
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
