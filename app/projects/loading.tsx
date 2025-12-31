export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="h-16 w-3/4 bg-bg-surface-2 animate-pulse rounded-lg mb-6"></div>
      <div className="h-6 w-1/2 bg-bg-surface-2 animate-pulse rounded mb-12"></div>
      
      <div className="flex gap-4 mb-12">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-10 w-24 bg-bg-surface-2 animate-pulse rounded-full"></div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="h-96 bg-bg-surface-2 animate-pulse rounded-xl"></div>
        ))}
      </div>
    </div>
  );
}


