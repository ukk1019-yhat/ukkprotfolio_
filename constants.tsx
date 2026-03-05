
import React from 'react';
import { Project, Skill, TimelineItem } from './types';
import {
  Cpu,
  Layers,
  Palette,
  TrendingUp,
  Rocket,
  Code,
  Globe,
  Award
} from 'lucide-react';

export const PROJECTS: Project[] = [
  {
    id: 'edu-alt-tech',
    title: 'Edu Alt Tech',
    subtitle: 'Founder & Frontend Developer',
    description: 'Founded a SaaS-based alternative education platform addressing flexibility and skill-alignment gaps in traditional learning systems. Focused on building future-ready skills through innovative pedagogy.',
    tags: ['EdTech', 'SaaS', 'Startup', 'Frontend'],
    image: 'https://export-download.canva.com/RLoEE/DAHDFIRLoEE/2/0/0001-7864906816322288860.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUH5AO7UJ26%2F20260304%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260304T203319Z&X-Amz-Expires=62704&X-Amz-Signature=930a2071f8a36aaf054998036f78e088e384559261a673dfb7a116b21e812a30&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27Untitled%2520design.png&response-expires=Thu%2C%2005%20Mar%202026%2013%3A58%3A23%20GMT',
    link: 'https://www.edualtech.xyz/'
  },
  {
    id: 'freshguard-ai',
    title: 'FreshGuard AI',
    subtitle: 'Smart Expiry & Grocery Management',
    description: 'Developed a mobile-first web application to track food and grocery expiry dates, reducing household food waste through intelligent expiry-status logic and real-time alerts.',
    tags: ['AI', 'Web App', 'Sustainability', 'Analytics'],
    image: 'https://thumbs.dreamstime.com/b/full-shopping-cart-fruits-vegetables-inside-supermarket-healthy-food-grocery-concept-297453488.jpg?w=992'
  },
  {
    id: 'pedestrian-safety',
    title: 'Pedestrian Safety Beacon',
    subtitle: 'Hardware-Accelerated UI',
    description: 'Built a mobile-first web solution enhancing pedestrian visibility using high-contrast strobe signaling patterns and hardware-accelerated CSS animations for real-time safety signals.',
    tags: ['Safety', 'UI/UX', 'Animation', 'Mobile-First'],
    image: 'https://classroomclipart.com/image/static7/preview2/traffic-light-vector-image-with-illuminated-signal-lights-71797.jpg',
    link: 'https://github.com/ukk1019-yhat/Traffic-flash-walk'
  }
];

export const SKILLS: Skill[] = [
  { name: 'Python & Java', level: 85, icon: 'Code', color: '#22d3ee' },
  { name: 'SQL & Databases', level: 80, icon: 'Layers', color: '#3b82f6' },
  { name: 'Frontend (HTML/CSS)', level: 95, icon: 'Palette', color: '#a855f7' },
  { name: 'Automation Systems', level: 88, icon: 'Cpu', color: '#ec4899' },
  { name: 'Scalable Architecture', level: 82, icon: 'Rocket', color: '#f59e0b' }
];

export const TIMELINE: TimelineItem[] = [
  {
    year: '2020 - 2021',
    title: 'SSC (Class X)',
    description: 'Completed secondary education at Sri Chaitanya School, Bobbili with a perfect GPA of 10/10.',
    category: 'personal'
  },
  {
    year: '2021 - 2023',
    title: 'Intermediate (MPC)',
    description: 'Studied at Narayana Junior College, Vellanki. Achieved 910/1000 marks.',
    category: 'personal'
  },
  {
    year: '2023 - Present',
    title: 'Founder & Frontend Developer',
    description: 'Launched Edu Alt Tech, building a SaaS-based alternative education platform.',
    category: 'startup'
  },
  {
    year: '2024 - Present',
    title: 'B.Tech in CSE',
    description: 'Currently pursuing Computer Science and Engineering at JNTU Kakinada.',
    category: 'milestone'
  },
  {
    year: '2025',
    title: 'Joint Secretary',
    description: 'Entrepreneurship & Startup Club, JNTU Kakinada. Mentored student teams in idea validation.',
    category: 'milestone'
  },
  {
    year: '2026 - Present',
    title: 'Frontend Developer',
    description: 'Building an AI-driven automation platform at Expresso AI to optimize business workflows.',
    category: 'milestone'
  }
];

export const VISION_QUOTES = [
  "Building AI-driven SaaS products with a national-level athlete's execution mindset.",
  "Innovation is the bridge between traditional systems and future-ready solutions.",
  "Scalable, automation-led innovation is the key to solving global challenges."
];
