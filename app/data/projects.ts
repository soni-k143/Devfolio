export type Project = {
  title: string;
  description: string;
  stack: string[]; // tech used
  tag: string; // main category label
  liveUrl: string; // deployed URL (or '#' if none)
  githubUrl: string; // GitHub repo URL
  featured: boolean; // show at top
};

export const projects: Project[] = [
  {
    title: 'DevFolio',
    description: 'This portfolio site — built with Next.js 15, TypeScript and Tailwind CSS while learning Next.js from scratch.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    tag: 'Next.js',
    liveUrl: '#',
    githubUrl: 'https://github.com/YOUR_USERNAME/devfolio',
    featured: true,
  },
  {
    title: 'Admin Dashboard', // ← replace with your real project
    description: 'Enterprise dashboard with role-based access, charts, and real-time data built with Angular and NgRx.',
    stack: ['Angular', 'NgRx', 'RxJS', 'TypeScript'],
    tag: 'Angular',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    title: 'E-Commerce UI', // ← replace with your real project
    description: 'Responsive product listing and cart built with React, Context API and TypeScript.',
    stack: ['React', 'TypeScript', 'Context API'],
    tag: 'React',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
];