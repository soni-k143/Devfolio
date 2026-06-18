// Your personal info — update this with your real details!
export const info = {
  name: 'Soni', // ← change this
  title: 'Frontend Developer', // ← change this
  bio: '4 years building web apps with Angular & React. Now crafting fast, modern UIs with Next.js.',
  available: true, // shows the "available" badge
  skills: [
    'Angular', 'React', 'Next.js',
    'TypeScript', 'Tailwind CSS', 'Node.js',
  ],
  github: 'https://github.com/soni-k143',
  linkedin: 'https://www.linkedin.com/in/soni-kumari-webhub',
};

// Export the type so other files can use it
export type Info = typeof info;