
import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import ParticleBackground from './components/ParticleBackground';
import BackgroundMusic from './components/BackgroundMusic';
import RobotMascot from './components/RobotMascot';
import {
  Menu,
  Github,
  Instagram,
  Linkedin,
  ChevronRight,
  ExternalLink,
  ChevronDown
} from 'lucide-react';
import { PROJECTS, SKILLS, TIMELINE, VISION_QUOTES } from './constants';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [titleIndex, setTitleIndex] = useState(0);
  const ATHLETE_TITLES = [
    { main: "GOLD", sub: "National Athlete" },
    { main: "CHAMP", sub: "Softball Medalist" },
    { main: "ELITE", sub: "Execution Mindset" },
    { main: "WINNER", sub: "National Level" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % ATHLETE_TITLES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const futuristicTransition = {
    duration: 1,
    ease: [0.16, 1, 0.3, 1]
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      <ParticleBackground />
      <BackgroundMusic />
      <RobotMascot />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-cyan-500 origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/50 backdrop-blur-lg border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl md:text-2xl font-display font-bold tracking-tighter"
          >
            UKK<span className="text-cyan-400">.</span>
          </motion.div>

          <div className="hidden md:flex gap-10 text-sm font-medium text-slate-400">
            {['Vision', 'Story', 'Startup', 'Skills', 'Connect'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ color: '#22d3ee', y: -2 }}
                whileTap={{ y: 0 }}
                className="transition-colors cursor-pointer hover:text-white"
              >
                {item}
              </motion.a>
            ))}
          </div>

          <motion.a
            href="mailto:umakrishnakanthchokkapu15@gmail.com"
            whileHover={{ scale: 1.05, borderColor: 'rgba(34, 211, 238, 0.5)', boxShadow: '0 0 20px rgba(34, 211, 238, 0.2)' }}
            whileTap={{ scale: 0.95 }}
            className="glass px-4 md:px-6 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium border border-white/10 transition-all cursor-pointer"
          >
            Let's Build
          </motion.a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative px-6 pt-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl text-center z-10"
        >
          <motion.div
            variants={itemVariants}
            className="mb-4 inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-xs font-bold uppercase tracking-[0.2em]"
          >
            Founder & AI SaaS Builder
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-8xl font-display font-black leading-[1.1] mb-8 bg-gradient-to-r from-white via-white to-slate-500 bg-clip-text text-transparent"
          >
            Uma Krishna Kanth <span className="text-cyan-400 block md:inline">Chokkapu</span>
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-slate-400 text-lg md:text-xl font-light italic"
          >
            <span>Founder</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/50" />
            <span>B.Tech CSE</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/50" />
            <span>AI-Driven SaaS Innovator</span>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <motion.a
              href="/UKK_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, backgroundColor: '#22d3ee', color: '#020617' }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-auto px-10 py-4 bg-white text-slate-950 rounded-xl font-bold transition-colors shadow-xl shadow-white/5 text-center"
            >
              Check My Resume
            </motion.a>
            <motion.a
              href="https://www.edualtech.xyz/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, borderColor: 'rgba(34, 211, 238, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-auto px-10 py-4 glass text-white rounded-xl font-bold border border-white/10 transition-all text-center"
            >
              Explore Edu Alt Tech
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* About Story Timeline */}
      <section id="story" className="py-20 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
            <div className="md:w-1/3 md:sticky md:top-32 mb-12 md:mb-0">
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">The <span className="text-cyan-400">Journey.</span></h2>
              <p className="text-slate-400 text-lg leading-relaxed font-light">
                B.Tech CSE student and founder building AI-driven SaaS products. Skilled in product strategy, MVP development, and digital growth, with a national-level athlete's execution mindset focused on scalable, automation-led innovation.
              </p>
            </div>

            <div className="md:w-2/3 space-y-12">
              {TIMELINE.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="relative pl-12 border-l-2 border-white/10 group pb-8"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                    className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-500 group-hover:scale-150 transition-transform"
                  />
                  <span className="text-cyan-500 font-display font-bold text-xl mb-2 block">{item.year}</span>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-white transition-colors">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed font-light">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects / Startup Showcase */}
      <section id="startup" className="py-32 px-6 bg-slate-950/40 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Built to <span className="text-cyan-400">Scale.</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Research-driven innovation and product thinking applied to real-world challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -15, transition: { duration: 0.3 } }}
                className="group glass rounded-2xl overflow-hidden flex flex-col h-full border border-white/10 hover:border-cyan-500/30 transition-colors"
              >
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                  />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-2">{project.subtitle}</div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1 font-light">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] px-2 py-1 rounded bg-white/5 border border-white/10 text-slate-300 group-hover:border-cyan-500/30 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <motion.a
                    href={project.link || "#"}
                    target={project.link ? "_blank" : undefined}
                    rel={project.link ? "noopener noreferrer" : undefined}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-sm font-bold text-white group-hover:text-cyan-400 transition-all cursor-pointer"
                  >
                    Learn More <ChevronRight size={16} />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Impact Section */}
      <section id="vision" className="py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="glass p-12 md:p-24 rounded-3xl relative overflow-hidden group">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-violet-500/10 blur-[120px] rounded-full pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={futuristicTransition}
              className="text-center"
            >
              <h2 className="text-3xl md:text-5xl font-display font-medium italic leading-tight mb-12">
                &ldquo;Building AI-driven SaaS products with a <span className="text-cyan-400">national-level athlete's execution mindset.</span>&rdquo;
              </h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 1 }}
                className="h-1 bg-cyan-500 mx-auto mb-12"
              />
              <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
                UKK is focused on scalable, automation-led innovation. From disrupting education with Edu Alt Tech to optimizing business workflows with Expresso AI, he builds for impact and efficiency.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills / Tech Stack */}
      <section id="skills" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Technical <span className="text-cyan-400">Core.</span></h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed mb-10">
                UKK blends engineering precision with strategic business thinking. His toolkit is built for speed, performance, and user delight.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {SKILLS.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="p-6 glass rounded-2xl border border-white/5"
                  >
                    <div className="text-2xl font-bold mb-1 text-white">{skill.level}%</div>
                    <div className="text-xs text-slate-400 font-bold uppercase tracking-widest">{skill.name}</div>
                    <div className="mt-4 h-1 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-cyan-500"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 flex items-center justify-center">
              <div className="relative w-full aspect-square max-w-[280px] md:max-w-md">
                <div className="absolute inset-0 bg-cyan-500/5 blur-3xl rounded-full" />
                <div className="relative h-full w-full glass rounded-full border border-white/10 flex items-center justify-center p-8 md:p-12 overflow-hidden">
                  <div className="text-center relative z-10">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={ATHLETE_TITLES[titleIndex].main}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="text-4xl md:text-6xl font-display font-black text-cyan-400 mb-1 md:mb-2">{ATHLETE_TITLES[titleIndex].main}</div>
                        <div className="text-[10px] md:text-sm text-slate-400 uppercase tracking-[0.2em] md:tracking-[0.3em] whitespace-nowrap">{ATHLETE_TITLES[titleIndex].sub}</div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                  {/* Decorative orbiting circles */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0"
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_15px_rgba(34,211,238,0.8)]" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-violet-500 shadow-[0_0_15px_rgba(168,85,247,0.8)]" />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="connect" className="py-32 px-6 bg-slate-950 relative">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-7xl font-display font-bold mb-8">Let's build something <span className="text-cyan-400">meaningful.</span></h2>
          <p className="text-slate-400 text-lg mb-16 max-w-2xl mx-auto">
            Open for high-impact collaborations, startup advisory, and forward-thinking research.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="glass p-8 rounded-2xl border border-white/5">
              <div className="text-cyan-400 mb-4 flex justify-center"><ExternalLink size={32} /></div>
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <a href="tel:+919121505879" className="text-slate-400 hover:text-cyan-400 transition-colors">+91 9121505879</a>
            </div>
            <div className="glass p-8 rounded-2xl border border-white/5">
              <div className="text-cyan-400 mb-4 flex justify-center"><Linkedin size={32} /></div>
              <h3 className="text-xl font-bold mb-2">LinkedIn</h3>
              <a href="https://linkedin.com/in/uma-krishna-kanth" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">Connect on LinkedIn</a>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const name = formData.get('name') as string;
              const message = formData.get('message') as string;
              const subject = encodeURIComponent(`Portfolio Message from ${name}`);
              const body = encodeURIComponent(message);
              window.location.href = `mailto:umakrishnakanthchokkapu15@gmail.com?subject=${subject}&body=${body}`;
            }}
            className="max-w-2xl mx-auto grid grid-cols-1 gap-6 text-left mb-20"
          >
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-2">Name</label>
              <input name="name" required className="w-full glass bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-cyan-500 transition-colors" placeholder="Your Name" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-2">Vision / Idea</label>
              <textarea name="message" required rows={4} className="w-full glass bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-cyan-500 transition-colors" placeholder="What should we build together?" />
            </div>
            <button type="submit" className="py-5 bg-cyan-500 text-slate-950 rounded-xl font-bold hover:bg-white transition-all shadow-lg shadow-cyan-500/20">
              Launch Message
            </button>
          </form>

          <div className="flex justify-center gap-10">
            {[
              { icon: <Linkedin />, label: 'LinkedIn', href: 'https://linkedin.com/in/uma-krishna-kanth' },
              { icon: <Instagram />, label: 'Instagram', href: 'https://www.instagram.com/ukk.eat/?hl=en' },
              { icon: <Github />, label: 'Github', href: 'https://github.com/ukk1019-yhat' }
            ].map(social => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -5, color: '#22d3ee' }}
                className="flex items-center gap-2 text-slate-400 transition-colors"
              >
                {social.icon}
                <span className="text-sm font-medium">{social.label}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-white/5 text-center text-slate-600 text-xs tracking-widest uppercase">
        <p>&copy; 2026 Uma Krishna Kanth Chokkapu. Building the future of AI SaaS.</p>
        <p className="mt-2 text-[10px]">Designed for high performance & scalable innovation.</p>
      </footer>
    </div>
  );
};

export default App;
