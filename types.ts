
export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
  color: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  category: 'personal' | 'startup' | 'milestone';
}
