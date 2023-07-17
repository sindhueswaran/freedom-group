export default function Button({ children, onClick }) {
  return (
    <button
      className="m-2 px-8 py-4 bg-fgprimary text-white rounded inline-block mt-8 font-semibold 
      hover:shadow-md hover:bg-amber-500 active:bg-amber-800 active:shadow-inner
      ease-in-out duration-500 "
      onClick={onClick}>
      {children}
    </button>
  );
}
