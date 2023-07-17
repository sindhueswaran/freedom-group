import Image from "next/image";

export default function SupportCard({ support }) {
  return (
    <div className="w-3/4 md:w-full mx-auto">
      <h4 className="my-3 text-3xl font-semibold text-center">
        {support.title}
      </h4>
      <ul className="text-center leading-relaxed text-slate-800 md:w-1/2 mx-auto">
        {support.text.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
