import { Project, Experience, SkillGroup, Achievement } from './types'

export const SOCIAL = {
  email: 'umakrishnakanthchokkapu15@gmail.com',
  github: 'ukk1019-yhat',
  linkedin: 'uma-krishna-kanth',
} as const

export const EXPERIENCES: Experience[] = [
  {
    company: 'Expresso AI',
    role: 'AI Developer & Frontend Developer',
    period: '2026 – Present',
    description:
      'Building an AI-driven Behavioral Intelligence platform to optimize business workflows. Working on frontend architecture and AI integration layers.',
  },
  {
    company: 'Edu Alt Tech',
    role: 'Founder & Frontend Developer',
    period: '2023 – Present',
    description:
      'Founded a SaaS-based alternative education platform addressing flexibility and skill-alignment gaps in traditional learning systems. Focused on scalable, automation-led innovation.',
  },
  {
    company: 'E-Cell JNTU Kakinada',
    role: 'Joint Secretary',
    period: '2025',
    description:
      'Mentored student teams in idea validation and go-to-market strategy. Organized entrepreneurship events and hackathons to foster startup culture on campus.',
  },
  {
    company: 'Maarifaa',
    role: 'Marketing Intern',
    period: 'Oct 2025',
    description:
      '[ADD: details about marketing campaigns, content strategy, or growth initiatives at Maarifaa]',
  },
]

export const PROJECTS: Project[] = [
  {
    id: 'freshguard-ai',
    title: 'FreshGuard AI',
    subtitle: 'Smart Expiry & Grocery Management',
    description:
      'Mobile-first web app that tracks food and grocery expiry dates, reducing household waste through intelligent expiry-status logic and real-time alerts.',
    tags: ['AI', 'Web App', 'Sustainability'],
    github: 'https://github.com/ukk1019-yhat',
  },
  {
    id: 'pedestrian-safety',
    title: 'Pedestrian Safety Beacon',
    subtitle: 'Hardware-Accelerated Safety UI',
    description:
      'Mobile-first web solution enhancing pedestrian visibility using high-contrast strobe signaling patterns and hardware-accelerated CSS animations.',
    tags: ['Safety', 'UI/UX', 'Animation'],
    github: 'https://github.com/ukk1019-yhat/Traffic-flash-walk',
  },
  {
    id: 'ocr-correction',
    title: 'OCR Intelligent Document Correction',
    subtitle: 'AI-Powered Document Pipeline',
    description:
      'Intelligent document correction system using OCR to detect and fix errors in scanned documents with high accuracy and minimal manual intervention.',
    tags: ['OCR', 'AI', 'Document Processing'],
    github: 'https://github.com/ukk1019-yhat',
  },
  {
    id: 'edu-alt-tech',
    title: 'Edu Alt Tech',
    subtitle: 'Founder & Frontend Developer',
    description:
      'SaaS-based alternative education platform addressing flexibility and skill-alignment gaps in traditional learning systems through innovative pedagogy.',
    tags: ['EdTech', 'SaaS', 'Startup'],
    link: 'https://www.edualtech.xyz/',
    github: 'https://github.com/ukk1019-yhat',
  },
  {
    id: 'beyond-ai',
    title: 'BeyonAI',
    subtitle: 'AI Exploration Lab',
    description:
      '[ADD: description of BeyonAI project — research prototypes, experiments, or AI tooling]',
    tags: ['AI', 'Research', 'Prototype'],
    github: 'https://github.com/ukk1019-yhat',
  },
]

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'Java', 'C++', 'SQL'],
  },
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Three.js'],
  },
  {
    category: 'AI & Automation',
    items: ['Gemini API', 'OpenAI', 'LangChain', 'OCR Pipelines', 'Automation Scripting'],
  },
  {
    category: 'Tools',
    items: ['Git', 'VS Code', 'Vercel', 'Figma', 'Postman', 'Linux'],
  },
]

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: '2× National Gold Medalist',
    description:
      'Gold medals in Softball at the national level — discipline, teamwork, and competitive drive at the highest amateur stage.',
    type: 'gold',
  },
  {
    title: 'Joint Secretary, E-Cell JNTUK',
    description:
      'Led entrepreneurship initiatives at JNTU Kakinada, mentoring student teams in startup ideation and go-to-market execution.',
    type: 'cert',
  },
  {
    title: 'B.Tech CSE, JNTU Kakinada',
    description:
      'Pursuing Computer Science & Engineering at Jawaharlal Nehru Technological University Kakinada (2024–Present).',
    type: 'cert',
  },
  {
    title: 'Full-Stack Product Builder',
    description:
      'End-to-end product builds from concept to deployed SaaS — FreshGuard AI, Edu Alt Tech, BeyonAI, and more.',
    type: 'cert',
  },
]
