import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <div className="text-7xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
        404
      </div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
        Page not found
      </h2>
      <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-sm">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <div className="flex gap-4">
        <Link
          href="/"
          className="bg-indigo-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
        >
          Go home
        </Link>
        <Link
          href="/blog"
          className="border border-indigo-600 text-indigo-600 dark:text-indigo-400 px-6 py-2.5 rounded-lg font-medium hover:bg-indigo-50 dark:hover:bg-indigo-950 transition-colors"
        >
          Read blog
        </Link>
      </div>
    </div>
  );
}