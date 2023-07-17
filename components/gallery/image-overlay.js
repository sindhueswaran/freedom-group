export default function ImageOverlay({ title }) {
  return (
    <div className="z-10 absolute w-full bottom-0 bg-blue-300/10">
      <p className="text-white text-center mx-2 my-0">{title}</p>
    </div>
  );
}
