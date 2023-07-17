export default function ButtonSmall({ children, onClick }) {
  return (
    <button
      className="m-1 px-4 py-2 bg-fgprimary text-white rounded inline-block mt-4 font-semibold 
      hover:shadow-md hover:bg-amber-500 active:bg-amber-800 active:shadow-inner
      ease-in-out duration-500 "
      onClick={onClick}>
      {children}
    </button>
  );
}
