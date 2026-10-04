export default function Loading() {
  return <div className="site-shell document-body" role="status" aria-label="Loading projects"><div className="page-intro"><div className="skeleton h-20 w-2/3 mb-6" /><div className="skeleton h-6 w-1/2" /></div><div className="grid grid-cols-1 md:grid-cols-2 gap-10">{Array.from({ length: 6 }, (_, index) => <div key={index}><div className="skeleton aspect-[16/10] mb-6" /><div className="skeleton h-8 w-3/4 mb-4" /><div className="skeleton h-5 w-full" /></div>)}</div></div>;
}
