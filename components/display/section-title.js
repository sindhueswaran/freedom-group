export default function SectionTitle({ className, children }) {
  return (<h3 className={`tracking-wider font-semibold text-center text-5xl text-fgprimaryfont mb-8 ${className}`}>{children}</h3>);
}
