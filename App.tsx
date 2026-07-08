import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Mail, Github, Linkedin, ExternalLink } from 'lucide-react'
import NavBar from './components/NavBar'
import GrainOverlay from './components/GrainOverlay'
import ScrollProgressBar from './components/ScrollProgressBar'
import ProjectCard from './components/ProjectCard'
import TimelineItem from './components/TimelineItem'
import SkillGroup from './components/SkillGroup'
import AchievementBadge from './components/AchievementBadge'
import MagneticButton from './components/MagneticButton'
import StatsCounter from './components/StatsCounter'
import LanguageBar from './components/LanguageBar'
import CodeBlock from './components/CodeBlock'
import GitHubRepos from './components/GitHubRepos'
import TechBadge from './components/TechBadge'
import {
  EXPERIENCES,
  PROJECTS,
  SKILL_GROUPS,
  ACHIEVEMENTS,
  STATS,
  LANGUAGE_DISTRIBUTION,
  CODE_SNIPPETS,
  SOCIAL,
} from './constants'

const Hero3D = lazy(() => import('./components/Hero3D'))

const sectionHeading = (label: string) => (
  <h2 className="text-xs font-medium uppercase tracking-[0.25em] text-amber-accent/50 mb-2">
    {label}
  </h2>
)

export default function App() {
  return (
    <>
      <GrainOverlay />
      <ScrollProgressBar />
      <NavBar />

      <main className="relative">
        {/* ───── HERO ───── */}
        <section
          id="hero"
          className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none">
            <Suspense
              fallback={
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-64 h-64 rounded-full bg-gradient-to-br from-amber-accent/10 to-transparent blur-2xl" />
                </div>
              }
            >
              <div className="w-full h-full opacity-60">
                <Hero3D />
              </div>
            </Suspense>
          </div>

          <div className="max-w-3xl text-center relative z-10">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-xs font-medium uppercase tracking-[0.25em] text-amber-accent/70 mb-6"
            >
              Founder &amp; AI/Frontend Developer
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-5xl sm:text-6xl md:text-8xl font-display font-bold leading-[1.05] tracking-tight text-warm-white mb-6"
            >
              Uma Krishna Kanth
              <br />
              <span className="text-amber-accent">Chokkapu</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-base md:text-lg text-warm-white/50 max-w-xl mx-auto leading-relaxed"
            >
              Building AI-driven products with the execution discipline of a national-level athlete.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
              <ChevronDown size={24} className="text-warm-white/30" />
            </motion.div>
          </div>
        </section>

        {/* ───── STATS ───── */}
        <section className="py-16 md:py-20 px-6 border-t border-white/5">
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {STATS.map((stat, i) => (
              <StatsCounter key={stat.label} stat={stat} index={i} />
            ))}
          </div>
        </section>

        {/* ───── ABOUT ───── */}
        <section id="about" className="py-24 md:py-32 px-6 bg-white/[0.01] border-y border-white/5">
          <div className="max-w-5xl mx-auto">
            {sectionHeading('About')}
            <div className="grid md:grid-cols-2 gap-12 md:gap-16">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <h3 className="text-2xl md:text-3xl font-display font-semibold text-warm-white mb-4">
                  Builder. Athlete. <span className="text-amber-accent">Engineer.</span>
                </h3>
                <p className="text-warm-white/60 leading-relaxed mb-4">
                  Uma Krishna Kanth is a founder and developer who moves between building
                  SaaS products at Edu Alt Tech, engineering AI/frontend systems at
                  Expresso AI (BeyonAI), and competing as a{' '}
                  <span className="text-warm-white/80 font-medium">
                    2× National Gold Medalist in Softball
                  </span>
                  . That last detail isn't a fun fact — it's evidence of the same discipline
                  and competitive drive he brings to every product he builds.
                </p>
                <div className="flex flex-wrap gap-2 mt-6">
                  <TechBadge label="TypeScript" color="#3178C6" />
                  <TechBadge label="React" color="#61DAFB" />
                  <TechBadge label="Next.js" color="#000000" />
                  <TechBadge label="Python" color="#3776AB" />
                  <TechBadge label="Firebase" color="#FFCA28" />
                  <TechBadge label="Gemini AI" color="#8E75FF" />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                className="space-y-4"
              >
                <p className="text-warm-white/60 leading-relaxed">
                  B.Tech CSE at JNTU Kakinada (2024–Present). Joint Secretary of the
                  Entrepreneurship &amp; Startup Cell. <strong className="text-warm-white/80">27 public repos</strong>,{' '}
                  <strong className="text-warm-white/80">44 followers</strong>, and{' '}
                  <strong className="text-warm-white/80">22 original projects</strong> on GitHub.
                </p>
                <p className="text-warm-white/60 leading-relaxed">
                  His work spans behavioral AI platforms (BeyonAI), smart grocery management
                  (FreshGuard AI), pedestrian safety (Traffic Flash Walk), document correction
                  (OCR), and alternative education (Edu Alt Tech) — always with a bias toward
                  shipping and a respect for the fundamentals.
                </p>
                <p className="text-warm-white/60 leading-relaxed">
                  Primary stack: <span className="text-warm-white/80">TypeScript</span> across 11 projects,
                  React for UI, Node.js for backend, and an expanding toolkit in AI/ML integration.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ───── LANGUAGE DISTRIBUTION ───── */}
        <section className="py-20 md:py-24 px-6">
          <div className="max-w-3xl mx-auto">
            {sectionHeading('Code Distribution')}
            <h2 className="text-2xl md:text-3xl font-display font-bold text-warm-white mb-8">
              Languages across <span className="text-amber-accent">22 projects</span>.
            </h2>
            <LanguageBar data={LANGUAGE_DISTRIBUTION} />
            <p className="text-xs text-warm-white/30 mt-6 text-center">
              TypeScript dominates the stack — 11 out of 22 original repositories
            </p>
          </div>
        </section>

        {/* ───── EXPERIENCE ───── */}
        <section id="experience" className="py-24 md:py-32 px-6 bg-white/[0.01] border-y border-white/5">
          <div className="max-w-3xl mx-auto">
            {sectionHeading('Experience')}
            <h2 className="text-3xl md:text-4xl font-display font-bold text-warm-white mb-12">
              Where I've built.
            </h2>
            <div>
              {EXPERIENCES.map((exp, i) => (
                <TimelineItem key={i} exp={exp} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ───── PROJECTS ───── */}
        <section id="projects" className="py-24 md:py-32 px-6">
          <div className="max-w-6xl mx-auto">
            {sectionHeading('Projects')}
            <h2 className="text-3xl md:text-4xl font-display font-bold text-warm-white mb-4">
              What I've shipped.
            </h2>
            <p className="text-warm-white/50 text-sm mb-10 max-w-lg">
              Real products, real code. Each project shipped to production or published on GitHub.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PROJECTS.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ───── GITHUB REPOS ───── */}
        <section className="py-24 md:py-32 px-6 bg-white/[0.01] border-y border-white/5">
          <div className="max-w-5xl mx-auto">
            {sectionHeading('GitHub')}
            <h2 className="text-3xl md:text-4xl font-display font-bold text-warm-white mb-4">
              Recent repositories.
            </h2>
            <p className="text-warm-white/50 text-sm mb-10">
              Live data from{' '}
              <a
                href={`https://github.com/${SOCIAL.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-accent/80 hover:text-amber-accent underline underline-offset-2"
              >
                github.com/{SOCIAL.github}
              </a>
            </p>
            <GitHubRepos />
          </div>
        </section>

        {/* ───── CODE ───── */}
        <section className="py-24 md:py-32 px-6">
          <div className="max-w-4xl mx-auto">
            {sectionHeading('Code')}
            <h2 className="text-3xl md:text-4xl font-display font-bold text-warm-white mb-4">
              Sourced from real projects.
            </h2>
            <p className="text-warm-white/50 text-sm mb-10">
              Code snippets pulled from actual repositories — FreshGuard AI, BeyonAI, Edu Alt Tech,
              and the Pedestrian Safety Beacon.
            </p>
            <div className="space-y-6">
              {CODE_SNIPPETS.map((snippet, i) => (
                <CodeBlock key={i} snippet={snippet} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ───── SKILLS ───── */}
        <section id="skills" className="py-24 md:py-32 px-6 bg-white/[0.01] border-y border-white/5">
          <div className="max-w-5xl mx-auto">
            {sectionHeading('Skills')}
            <h2 className="text-2xl md:text-3xl font-display font-bold text-warm-white mb-4">
              Tools &amp; craft.
            </h2>
            <p className="text-warm-white/50 text-sm mb-10 max-w-lg">
              Technologies used across 22 original projects and 27 total repositories.
            </p>
            <div className="grid md:grid-cols-2 gap-10 md:gap-14">
              {SKILL_GROUPS.map((group, i) => (
                <SkillGroup key={group.category} group={group} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ───── ACHIEVEMENTS ───── */}
        <section id="achievements" className="py-24 md:py-32 px-6">
          <div className="max-w-5xl mx-auto">
            {sectionHeading('Achievements')}
            <h2 className="text-3xl md:text-4xl font-display font-bold text-warm-white mb-4">
              Recognition &amp; milestones.
            </h2>
            <p className="text-warm-white/50 text-sm mb-10 max-w-lg">
              From national-level athletics to technical certifications and open-source presence.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {ACHIEVEMENTS.map((achievement, i) => (
                <AchievementBadge key={i} achievement={achievement} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ───── CONTACT ───── */}
        <section id="contact" className="py-24 md:py-32 px-6 bg-white/[0.01] border-y border-white/5">
          <div className="max-w-3xl mx-auto text-center">
            {sectionHeading('Contact')}
            <h2 className="text-3xl md:text-5xl font-display font-bold text-warm-white mb-6 leading-tight">
              Let's build something
              <br />
              <span className="text-amber-accent">meaningful.</span>
            </h2>
            <p className="text-warm-white/50 mb-4 max-w-md mx-auto">
              Open for collaborations, startup advisory, and interesting problems.
            </p>
            <p className="text-xs text-warm-white/30 mb-10">
              22 projects shipped &middot; 27 repos &middot; 2 gold medals &middot; 44 followers
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
              <MagneticButton href={`mailto:${SOCIAL.email}`}>
                <Mail size={16} /> Send a message
              </MagneticButton>
              <a
                href={`https://github.com/${SOCIAL.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-warm-white/50 hover:text-amber-accent transition-colors px-6 py-3 border border-white/10 rounded-full"
              >
                <Github size={16} /> GitHub
              </a>
              <a
                href={`https://linkedin.com/in/${SOCIAL.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-warm-white/50 hover:text-amber-accent transition-colors px-6 py-3 border border-white/10 rounded-full"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>

            <div className="flex items-center justify-center gap-6 text-xs text-warm-white/30">
              <a href={`mailto:${SOCIAL.email}`} className="hover:text-amber-accent transition-colors">
                {SOCIAL.email}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 px-6 border-t border-white/5">
        <p className="text-center text-xs text-warm-white/20 tracking-widest uppercase">
          &copy; 2026 Uma Krishna Kanth Chokkapu
        </p>
      </footer>
    </>
  )
}
