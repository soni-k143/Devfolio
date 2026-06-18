export default function Loading() {
  return (
    <div className="animate-pulse space-y-6 py-10">

      {/* Page title skeleton */}
      <div className="h-10 bg-gray-200 dark:bg-gray-800 rounded-lg w-1/3" />
      <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/2" />

      {/* Cards skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="bg-gray-200 dark:bg-gray-800 rounded-xl p-6 space-y-3"
          >
            <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-1/4" />
            <div className="h-5 bg-gray-300 dark:bg-gray-700 rounded w-3/4" />
            <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-full" />
            <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-2/3" />
          </div>
        ))}
      </div>
    </div>
  );
}