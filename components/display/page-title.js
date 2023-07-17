export default function PageTitle({ className, children }) {
  return (<h2 className={`text-5xl text-center font-extrabold my-12 ${className}`}>{children}</h2>);
}
