export default function Loading() {
  return <div className="site-shell document-body" role="status" aria-label="Loading articles"><div className="page-intro"><div className="skeleton h-20 w-2/3 mb-6" /><div className="skeleton h-6 w-1/2" /></div><div className="flex gap-2 mb-10">{Array.from({ length: 5 }, (_, index) => <div key={index} className="skeleton h-11 w-24" />)}</div><div className="skeleton h-60 w-full" /></div>;
}
