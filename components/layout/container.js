export default function Container({ className, children }) {
  return (<section className={`relative px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16 lg:py-32 ${className}`}>{children}</section>);
}
