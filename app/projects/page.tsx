import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | DevFolio',
  description: 'Things I have built with Angular, React and Next.js',
};

export default function ProjectsPage() {
  // Separate featured from the rest
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <div>
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Projects</h1>
        <p className="text-gray-500">
          Things I've built with Angular, React & Next.js
        </p>
      </div>

      {/* Featured projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {featured.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      {/* Other projects — only shows if there are any */}
      {others.length > 0 && (
        <>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">More Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {others.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}