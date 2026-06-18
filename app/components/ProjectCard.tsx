import type { Project } from "../data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col gap-4 hover:border-indigo-300 hover:shadow-sm transition-all">

      {/* Top: tag + title + description */}
      <div>
        <span className="inline-block bg-green-50 text-green-700 text-xs px-3 py-1 rounded-full mb-3">
          {project.tag}
        </span>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Middle: tech stack pills */}
      <div className="flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Bottom: links */}
      <div className="flex gap-4 mt-auto pt-2 border-t border-gray-100">
        {project.liveUrl !== '#' && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-indigo-600 hover:underline font-medium"
          >
            ↗ Live Demo
          </a>
        )}
        {project.githubUrl !== '#' && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 hover:text-indigo-600 hover:underline"
          >
            ⌥ GitHub
          </a>
        )}
      </div>

    </div>
  );
}