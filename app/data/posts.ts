// TypeScript type for a blog post
export type Post = {
  slug: string;      // URL: /blog/this-is-the-slug
  title: string;
  description: string;
  tag: string;
  date: string;
  readTime: string;
  content: string;  // Full post content (Day 5)
};

export const posts: Post[] = [
  {
    slug: 'angular-to-nextjs',
    title: 'Why I switched from Angular to Next.js',
    description: 'After 4 years with Angular, here\'s what surprised me most about the Next.js ecosystem and why I made the switch.',
    tag: 'Next.js',
    date: 'Jun 10, 2026',
    readTime: '5 min read',
    content: 'Angular gave me structure, TypeScript discipline, and a deep understanding of component architecture. But Next.js gave me speed — both in development and in production. Here is what I learned making the switch...',
  },
  {
    slug: 'typescript-tips-angular-devs',
    title: 'TypeScript tips every Angular dev already knows',
    description: 'Angular forced me to learn TypeScript properly. Here\'s how that deep knowledge transfers directly to React and Next.js development.',
    tag: 'TypeScript',
    date: 'Jun 5, 2026',
    readTime: '4 min read',
    content: 'If you have been writing Angular for a few years, you already know TypeScript better than most React developers. Interfaces, generics, decorators — you use these daily. Here is how they map to the React world...',
  },
  {
    slug: 'server-components-explained',
    title: 'Server Components: what Angular SSR never told you',
    description: 'Next.js Server Components are fundamentally different from Angular Universal. Here\'s the mental model that finally made it click for me.',
    tag: 'React',
    date: 'Jun 1, 2026',
    readTime: '6 min read',
    content: 'Angular Universal renders your app on the server, then sends the HTML to the client. Next.js Server Components go further — some components never ship JavaScript to the browser at all. That is a completely different paradigm...',
  },
];

// Helper: get a single post by slug
export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}