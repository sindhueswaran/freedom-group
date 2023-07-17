export default function WWDGrid({ className, children }) {
  return <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>{children}</div>;
}
