import SectionTitle from "@display/section-title";
import WWDIntroText from "@data/wwd.json";

export default function WWDIntro() {
  return (
    <>
      <SectionTitle>{WWDIntroText.title}</SectionTitle>
      <div className="py-5 grid md:grid-cols-2 gap-x-10 w-full h-fit">
        <p className="mb-5 text-justify leading-relaxed text-slate-800">
          {WWDIntroText.para1}
        </p>
        <p className="mb-5 text-justify leading-relaxed text-slate-800">
          {WWDIntroText.para2}
        </p>
      </div>
    </>
  );
}
