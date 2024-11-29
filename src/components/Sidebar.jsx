import { AiFillCloseCircle } from "react-icons/ai"; 
export function Sidebar({ children, isOpen, onClickClose }) {
  return (
    <div>
      <div
        className={`
      fixed top-0 right-0 z-50 w-full md:w-[50%] lg:w-[35%] h-full shadow-lg
      overflow-y-auto p-5 bg-white transition transform duration-300 dark:bg-night
      ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          onClick={onClickClose}
          className="absolute top-4 right-4 p-2 text-black font-bold dark:text-white"
        >
          <AiFillCloseCircle size={25} />
        </button>
        {children}
      </div>
      {isOpen && (
        <div className="fixed top-0 left-0 z-20 w-full h-full bg-black opacity-50" />
      )}
    </div>
  );
}
