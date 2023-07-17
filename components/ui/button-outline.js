export default function ButtonOutline({ children, onClick }) {
  return (
    <button
      className="m-4 inline-block font-semibold px-8 py-4 text-white 
      md:bg-transparent md:text-white border-2 border-white rounded 
      hover:border-fgprimary hover:text-opacity-75 hover:bg-fgprimary
      ease-in-out duration-500 focus:animate-ping"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
