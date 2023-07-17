export default function SupportGrid({className, children}) {
  return <div className={`grid md:grid-cols-2 lg:w-3/4 mx-auto gap-6 ${className}`}>{children}</div>;
}
