import Link from 'next/link';
import type { Post } from '../data/posts'; 

// Props type — like @Input() in Angular
type PostCardProps = {
  post: Post;
};

export default function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="bg-white border border-gray-200 rounded-xl p-6 hover:border-indigo-300 hover:shadow-sm transition-all cursor-pointer">

{/*         // Tag badge */}
        <span className="inline-block bg-indigo-50 text-indigo-600 text-xs px-3 py-1 rounded-full mb-3">
          {post.tag}
        </span>

{/*         // Title */}
        <h2 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-indigo-600">
          {post.title}
        </h2>

{/*         // Description */}
        <p className="text-gray-500 text-sm mb-4 leading-relaxed">
          {post.description}
        </p>

{/*         // Meta: date + read time */}
        <div className="flex gap-4 text-xs text-gray-400">
          <span>{post.date}</span>
          <span>{post.readTime}</span>
        </div>

      </article>
    </Link>
  );
}