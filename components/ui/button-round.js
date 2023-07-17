export default function ButtonRound({ children, onClick }) {
  return (
    <button
      className="my-3 p-1 bg-fgprimary text-white rounded-full inline-block mt-8 font-semibold 
      hover:shadow-md hover:bg-amber-600 active:bg-amber-800 active:shadow-inner
      ease-in-out duration-500" 
      onClick={onClick}
      >
      {children}
    </button>
  );
}
