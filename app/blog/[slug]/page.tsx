import { getPostBySlug, posts } from '../../data/posts';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

// Props type — Next.js passes params automatically
type Props = {
  params: Promise<{ slug: string }>;
};

// ← ADD THIS BLOCK above generateStaticParams
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  return {
    title: post ? `${post.title} | DevFolio` : 'Post Not Found',
    description: post?.description,
  };
}

// generateStaticParams tells Next.js which slugs exist
// so it can pre-build each post page at build time (like Angular prerender)
export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}   

export default async function PostPage({ params }: Props) {
//   // Await params (required in Next.js 15)
  const { slug } = await params;

//   // Find the post — if not found, show 404
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="max-w-2xl mx-auto">

{/*       // Back link */}
      <Link
        href="/blog"
        className="text-sm text-gray-400 hover:text-indigo-600 transition-colors mb-8 inline-block"
      >
        ← Back to Blog
      </Link>
{/* Add this div to push tag below the back link */}
    <div className="mt-6">
        <span className="inline-block bg-indigo-50 text-indigo-600 text-xs px-3 py-1 rounded-full mb-4">
            {post.tag}
        </span>
    </div>

{/*       // Title */}
      <h1 className="text-4xl font-bold text-gray-900 mb-3 leading-tight">
        {post.title}
      </h1>

{/*       // Meta */}
      <div className="flex gap-4 text-sm text-gray-400 mb-6">
        <span>{post.date}</span>
        <span>{post.readTime}</span>
      </div>

{/*       // Divider */}
      <hr className="border-gray-200 mb-8" />

{/*       // Content */}
      <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed text-base">
        {post.content}
      </div>

    </article>
  );
}