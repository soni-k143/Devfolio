// Your personal info — update this with your real details!
export const info = {
  name: 'Priyanka', // ← change this
  title: 'Frontend Developer', // ← change this
  bio: '4 years building web apps with Angular & React. Now crafting fast, modern UIs with Next.js.',
  available: true, // shows the "available" badge
  skills: [
    'Angular', 'React', 'Next.js',
    'TypeScript', 'Tailwind CSS', 'Node.js',
  ],
  github: 'https://github.com/YOUR_USERNAME',
  linkedin: 'https://linkedin.com/in/YOUR_PROFILE',
};

// Export the type so other files can use it
export type Info = typeof info;