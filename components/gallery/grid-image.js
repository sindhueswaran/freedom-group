import Image from "next/image";

export default function GridImage({ key, index, left, top, photo, onClick }) {
  const { height, width, src, alt, title } = photo;
  return (
    <div className="block absolute cursor-pointer border-2 border-transparent border-solid hover:border-fgprimary rounded-md ease-in-out duration-300" 
    key={`${key}-${index}`}
      // index={index}
      onClick={(e) => onClick(e, { index })}
      style={{ left, top, height, width }}
    >
      <div className="relative h-full overflow-hidden rounded">
        <Image
          src={src}
          alt={alt}
          title={title}
          width={width}
          height={height}
        />
        <div className="z-10 absolute bottom-0 w-full text-white text-center">{title}</div>
      </div>
    </div>
  );
}
