import { Icon } from "@iconify/react"; 

export default function ImageOverlayHeader ({ title, images, currentIndex, onClose }) {
  return(
  <header className="cursor-auto flex justify-between px-20 py-6 text-center">
    <div className="flex flex-col justify-center">
      <h2 className="m-0 font-normal text-white">{title}</h2>
      <h4 className="m-0 font-normal text-white">{images[currentIndex].title}</h4>
    </div>

    <div className="w-32 flex justify-between items-center">
      <span className="whitespace-nowrap min-w-8 text-center text-white">
        {currentIndex + 1} / {images.length}
      </span>
      <button className="z-10 bg-none border-none text-3xl p-0 m-0 text-white hover:text-gray-500 transition-colors duration-300 ease-linear focus:outline-none" type="button" onClick={onClose}> 
        <Icon icon="mdi:close-circle" />
      </button> 
    </div>
  </header>
);
}