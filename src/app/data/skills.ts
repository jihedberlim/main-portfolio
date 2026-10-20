export type SkillCategory = 'frontend' | 'backend' | 'tools';

export interface Skill {
  name: string;
  icon: string;
  color: string;
  category: SkillCategory;
  invertOnDark?: boolean;
}

export const skillCategories: SkillCategory[] = ['frontend', 'backend', 'tools'];

export const skills: Skill[] = [
  { name: 'HTML', icon: 'html5', color: '#E44D26', category: 'frontend' },
  { name: 'CSS', icon: 'css3', color: '#1572B6', category: 'frontend' },
  { name: 'JavaScript', icon: 'javascript', color: '#F7DF1E', category: 'frontend' },
  { name: 'TypeScript', icon: 'typescript', color: '#3178C6', category: 'frontend' },
  { name: 'Angular', icon: 'angular', color: '#DD0031', category: 'frontend' },
  { name: 'Tailwind CSS', icon: 'tailwindcss', color: '#06B6D4', category: 'frontend' },
  { name: 'Java', icon: 'java', color: '#007396', category: 'backend' },
  { name: 'Spring Boot', icon: 'spring', color: '#6DB33F', category: 'backend' },
  { name: 'Git', icon: 'git', color: '#F05032', category: 'tools' },
  { name: 'GitHub', icon: 'github', color: 'var(--fg)', category: 'tools', invertOnDark: true },
  { name: 'VS Code', icon: 'vscode', color: '#007ACC', category: 'tools' },
];
