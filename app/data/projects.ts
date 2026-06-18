export type Project = {
  title: string;
  description: string;
  stack: string[];
  tag: string;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    title: 'DevFolio',
    description:
      'This portfolio site — built with Next.js 15, TypeScript and Tailwind CSS while learning Next.js from scratch. Features dark mode, blog with dynamic routes, contact form with API route.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    tag: 'Next.js',
    liveUrl: 'https://devfolio-seven.vercel.app',
    githubUrl: 'https://github.com/soni-k143/devfolio',
    featured: false,
  },
  {
    title: 'CrownTechStack — Education Platform',
    description:
      'End-to-end education platform for Akash Crown Education with student portal, admin panel, and backend integration. Handles course management, user authentication, and content delivery.',
    stack: ['Angular', 'TypeScript', 'Node.js', 'REST APIs', 'Admin Panel'],
    tag: 'Angular',
    liveUrl: 'https://crown-tech-stack.vercel.app',
    githubUrl: 'https://github.com/soni-k143/CrownTechStack',
    featured: true,
  },
  {
    title: 'CoinGecko Crypto Tracker',
    description:
      'Real-time cryptocurrency price tracking app consuming the CoinGecko Free API. Built with presenter-container pattern, custom hooks, Zustand state management, React Query caching, and Suspense + error boundaries.',
    stack: ['React', 'Zustand', 'React Query', 'CoinGecko API', 'Tailwind CSS'],
    tag: 'React',
    liveUrl: 'https://coin-gecko-tracker-dun.vercel.app',
    githubUrl: 'https://github.com/soni-k143/CoinGecko-Tracker',
    featured: true,
  },
 
];