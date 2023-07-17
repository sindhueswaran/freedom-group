export default function SectionTitle({ className, children }) {
  return (<h5 className={`tracking-wider font-semibold text-center text-5xl text-fgprimary mb-8 ${className}`}>{children}</h5>);
}
