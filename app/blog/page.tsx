import { posts } from '../data/posts';
import PostCard from '../components/Postcard';

export default function BlogPage() {
  return (
    <div>
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Blog</h1>
        <p className="text-gray-500">
          Thoughts on frontend development, Angular, and Next.js
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}