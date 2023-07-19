import Image from "next/image";

export default function About({ about }) {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="w-full ">
          <div className="border-l border-fgsecondary pl-4">
            <h2 className="text-3xl leading-tight font-bold my-4">
              {about.title1}
            </h2>
            <p className="mt-2 text-justify leading-relaxed text-slate-800">
              {about.para1}
            </p>
          </div>
          <div className="flex">
            <div className="w-48 bg-fgsecondary/50 my-8 grid place-content-center p-4">
              <Image
                className="mx-auto rounded-md"
                src={about.logoicon}
                width={100}
                height={100}
                alt={about.logoalt}
              />
            </div>
            <h2 className="text-3xl text-center grid place-content-center leading-tight font-bold my-4 mx-2">
              {about.tagline}
            </h2>
          </div>
          <p className="mt-2 text-justify leading-relaxed text-slate-800 ">
            {about.para2}
          </p>
        </div>
        <div className="w-full order-first md:order-last">
          <div className="border-l border-fgsecondary pl-4">
            <h2 className="text-3xl leading-tight font-bold my-4">
              {about.title2}
            </h2>
            <p className="mt-2 text-justify leading-relaxed text-slate-800">
              {about.para3}
            </p>
          </div>
          <div className="my-8">
            <Image
              className="mx-auto rounded-md"
              src={about.img}
              width={640}
              height={480}
              alt={about.imgalt}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>
    </>
  );
}
