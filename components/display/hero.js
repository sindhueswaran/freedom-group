import ButtonOutline from "@ui/button-outline";
import Image from "next/image";
import Link from "next/link";

export default function Hero({ item }) {
  return (
    <>
      <div className="relative px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-48 overflow-hidden flex items-center min-h-screen">
        <div className="w-full h-full absolute top-0 left-0 z-30 bg-black opacity-20"></div>
        <div className="w-full h-full absolute top-0 left-0 z-20 bg-left-top "> 
        {/* blur-xs */}
          <Image
            src={item.img}
            alt={item.title}
            width={1920}
            height={1080}
            className="w-full h-full object-cover grayscale "
          />
        </div>

        <div className="lg:w-3/4 xl:w-3/4 relative z-50 h-100 lg:mt-16">
            <h1 className="glow text-white drop-shadow-lg shadow-white text-5xl md:text-7xl xl:text-8xl font-black leading-tight">
              {item.title}
            </h1>
            <p className="simple text-white drop-shadow-2xl text-xl md:text-4xl leading-snug mt-4 ">
              {item.subtitle}
            </p>
            <Link href={item.btnUrl}>
              <ButtonOutline>
              {item.btnText}
              </ButtonOutline> 
            </Link>
        </div>
      </div>
    </>
  );
}
