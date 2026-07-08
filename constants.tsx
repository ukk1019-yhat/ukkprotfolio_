import { Project, Experience, SkillGroup, Achievement, StatItem, LanguageData, CodeSnippet } from './types'

export const SOCIAL = {
  email: 'umakrishnakanthchokkapu15@gmail.com',
  github: 'ukk1019-yhat',
  linkedin: 'uma-krishna-kanth',
} as const

export const STATS: StatItem[] = [
  { label: 'Projects Built', value: 22, suffix: '+' },
  { label: 'GitHub Repos', value: 27 },
  { label: 'Followers', value: 44, suffix: '+' },
  { label: 'Gold Medals', value: 2 },
]

export const LANGUAGE_DISTRIBUTION: LanguageData[] = [
  { name: 'TypeScript', count: 11, color: '#3178C6' },
  { name: 'JavaScript', count: 3, color: '#F7DF1E' },
  { name: 'Python', count: 2, color: '#3776AB' },
  { name: 'HTML', count: 2, color: '#E34F26' },
  { name: 'CSS', count: 1, color: '#1572B6' },
  { name: 'Jupyter', count: 1, color: '#F37626' },
]

export const EXPERIENCES: Experience[] = [
  {
    company: 'Expresso AI',
    role: 'AI Developer & Frontend Developer',
    period: '2026 – Present',
    description:
      'Building an AI-driven Behavioral Intelligence platform (BeyonAI) that uses adaptive simulations to train communication, negotiation, and leadership skills through dynamic AI personas with real-time behavioral scoring.',
  },
  {
    company: 'Edu Alt Tech',
    role: 'Founder & Frontend Developer',
    period: '2023 – Present',
    description:
      'Founded a SaaS-based alternative education platform addressing flexibility and skill-alignment gaps. Built the full frontend with React, TypeScript, and integrated Razorpay for payments.',
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
    id: 'beyond-ai',
    title: 'BeyonAI',
    subtitle: 'Behavioral Intelligence Platform',
    description:
      'An Expresso AI platform using adaptive AI simulations to train communication, negotiation, and leadership. Features dynamic AI personas with real-time behavioral scoring and emotional adaptation.',
    tags: ['AI', 'Next.js', 'TypeScript', 'Behavioral Science'],
    link: 'https://github.com/ukk1019-yhat/BeyonAI',
    github: 'https://github.com/ukk1019-yhat/BeyonAI',
    language: 'TypeScript',
  },
  {
    id: 'freshguard-ai',
    title: 'FreshGuard AI',
    subtitle: 'Smart Expiry & Grocery Management',
    description:
      'React-based web app with AI-powered expiry tracking, grocery list management, recipe recommendations via Gemini AI, and analytics dashboard with Recharts visualizations.',
    tags: ['React', 'AI', 'Gemini API', 'Recharts'],
    github: 'https://github.com/ukk1019-yhat/FreshGaurd-Ai',
    language: 'TypeScript',
  },
  {
    id: 'pedestrian-safety',
    title: 'Pedestrian Safety Beacon',
    subtitle: 'Hardware-Accelerated Safety UI',
    description:
      'Mobile-first web app that turns your phone into a safety beacon. Flashes high-contrast Red-Amber-Green strobes using hardware-accelerated CSS animations. No install required.',
    tags: ['HTML/CSS', 'Safety', 'Mobile-First'],
    github: 'https://github.com/ukk1019-yhat/Traffic-flash-walk',
    language: 'HTML',
  },
  {
    id: 'ocr-correction',
    title: 'OCR Document Correction',
    subtitle: 'AI-Powered Document Pipeline',
    description:
      'Intelligent document correction system with Firebase backend, OCR processing, and automated error detection for scanned documents with high accuracy.',
    tags: ['OCR', 'Firebase', 'JavaScript', 'Node.js'],
    github: 'https://github.com/ukk1019-yhat/OCR',
    language: 'JavaScript',
  },
  {
    id: 'edu-alt-tech',
    title: 'Edu Alt Tech',
    subtitle: 'Founder & Frontend Developer',
    description:
      'SaaS alternative education platform with Razorpay payment integration, AI assistant, and SEO-optimized landing pages. Built with React, TypeScript, and Firebase.',
    tags: ['EdTech', 'React', 'Firebase', 'Razorpay'],
    link: 'https://www.edualtech.xyz/',
    github: 'https://github.com/ukk1019-yhat/Edu-Alt-Tech-website',
    language: 'TypeScript',
  },
  {
    id: 'genesis-lms',
    title: 'GenesisLMS',
    subtitle: 'Learning Management System',
    description:
      'A full-stack learning management system with React frontend, Node.js backend, and Vercel deployment. Supports course management, user authentication, and content delivery.',
    tags: ['React', 'Node.js', 'MongoDB', 'LMS'],
    github: 'https://github.com/ukk1019-yhat/GenesisLMS',
    language: 'JavaScript',
  },
]

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'Java', 'HTML/CSS', 'SQL'],
  },
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Three.js', 'Recharts'],
  },
  {
    category: 'Backend & AI',
    items: ['Node.js', 'Gemini API', 'Firebase', 'MongoDB', 'Razorpay', 'OCR Pipelines'],
  },
  {
    category: 'Tools & Platforms',
    items: ['Git', 'VS Code', 'Vercel', 'Figma', 'Postman', 'Linux', 'Chrome DevTools'],
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
      'Led entrepreneurship initiatives at JNTU Kakinada, mentoring 15+ student teams in startup ideation and go-to-market execution.',
    type: 'cert',
  },
  {
    title: 'B.Tech CSE, JNTU Kakinada',
    description:
      'Pursuing Computer Science & Engineering at Jawaharlal Nehru Technological University Kakinada (2024–Present).',
    type: 'cert',
  },
  {
    title: '27 Repos & 44 Followers',
    description:
      'Active open-source presence with 27 public repositories and 44 followers on GitHub. Built 22 original projects across AI, frontend, and automation.',
    type: 'cert',
  },
  {
    title: 'TypeScript Specialist',
    description:
      '11 of 22 original projects use TypeScript — the primary language for frontend and full-stack development.',
    type: 'cert',
  },
]

export const CODE_SNIPPETS: CodeSnippet[] = [
  {
    title: 'FreshGuard AI — AddItem Component',
    language: 'tsx',
    code: `import React, { useState, useRef } from 'react';
import { Camera, Mic, Type as TypeIcon, Loader2, Save, X } from 'lucide-react';
import { parseItemFromText, parseItemFromImage } from '../services/geminiService';
import { InventoryItem, Category } from '../types';

export default function AddItem({ onAdd }: { onAdd: (item: InventoryItem) => void }) {
  const [mode, setMode] = useState<'text' | 'camera' | 'voice'>('text');
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState('');

  const handleParse = async () => {
    setLoading(true);
    const result = await parseItemFromText(text);
    if (result) onAdd(result);
    setLoading(false);
    setText('');
  };

  return (
    <div className="p-4 space-y-4">
      <div className="flex gap-2">
        <button onClick={() => setMode('text')}>
          <TypeIcon size={20} />
        </button>
        <button onClick={() => setMode('camera')}>
          <Camera size={20} />
        </button>
        <button onClick={() => setMode('voice')}>
          <Mic size={20} />
        </button>
      </div>
      {mode === 'text' && (
        <div className="flex gap-2">
          <input
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="e.g. 2 litres of milk expiring 2025-06-15"
          />
          <button onClick={handleParse} disabled={loading}>
            {loading ? <Loader2 /> : <Save />}
          </button>
        </div>
      )}
    </div>
  );
}`,
    from: 'FreshGuard AI',
    repo: 'ukk1019-yhat/FreshGaurd-Ai',
  },
  {
    title: 'BeyonAI — Next.js Config',
    language: 'ts',
    code: `import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;`,
    from: 'BeyonAI (Expresso AI)',
    repo: 'ukk1019-yhat/BeyonAI',
  },
  {
    title: 'Edu Alt Tech — Constants & Links',
    language: 'tsx',
    code: `import { Users, Globe, BookOpen, Brain, Smartphone,
  ShieldCheck, GraduationCap, HeartHandshake, Target, Zap } from 'lucide-react';

export const LINKS = {
  enroll: "https://docs.google.com/forms/d/e/.../viewform",
  whatsapp: "https://wa.me/919121505879?text=Hi%20Edu%20Alt%20Tech!",
};

export const FEATURES = [
  { icon: Users, title: "Peer Learning", desc: "Learn together" },
  { icon: Brain, title: "AI-Powered", desc: "Smart recommendations" },
  { icon: Globe, title: "Global Access", desc: "Learn from anywhere" },
  { icon: GraduationCap, title: "Certification", desc: "Get certified" },
];`,
    from: 'Edu Alt Tech',
    repo: 'ukk1019-yhat/Edu-Alt-Tech-website',
  },
  {
    title: 'Pedestrian Safety — HTML/CSS Strobes',
    language: 'html',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pedestrian Safety Flash</title>
  <style>
    body { margin: 0; height: 100%; overflow: hidden; background: #111; }
    #light-screen {
      height: 85%; width: 100%;
      display: flex; justify-content: center; align-items: center;
      flex-direction: column;
      transition: background-color 0.2s;
    }
    #status-text {
      font-size: 3rem; font-weight: 900;
      text-transform: uppercase; color: white;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
    }
  </style>
</head>
<body>
  <div id="light-screen">
    <div id="status-text">TAP TO START</div>
  </div>
</body>
</html>`,
    from: 'Pedestrian Safety Beacon',
    repo: 'ukk1019-yhat/Traffic-flash-walk',
  },
  {
    title: 'FreshGuard AI — Analytics Dashboard',
    language: 'tsx',
    code: `import React from 'react';
import { InventoryItem } from '../types';
import { PieChart, Pie, Cell, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface AnalyticsProps { items: InventoryItem[]; }

const COLORS = ['#22c55e', '#eab308', '#ef4444', '#3b82f6'];

export default function Analytics({ items }: AnalyticsProps) {
  const categoryData = items.reduce((acc, item) => {
    const found = acc.find(a => a.name === item.category);
    if (found) found.value++;
    else acc.push({ name: item.category, value: 1 });
    return acc;
  }, [] as { name: string; value: number }[]);

  return (
    <div className="space-y-6 p-4">
      <h2 className="text-xl font-bold">Analytics</h2>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={categoryData} dataKey="value"
              cx="50%" cy="50%" outerRadius={80} label>
              {categoryData.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}`,
    from: 'FreshGuard AI',
    repo: 'ukk1019-yhat/FreshGaurd-Ai',
  },
]
