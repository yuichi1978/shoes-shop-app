import { useState } from "react";
import { TbShoppingBag } from "react-icons/tb";
import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";

const ROUTES = ["Home", "About", "Services", "Pricing", "Contact"];

export function Nav({ onClickShoppingBtn }) {
  const [isMobileMenuShow, setIsMobileMenuShow] = useState(false);

  return (
    <nav className="z-10 relative flex flex-wrap justify-between items-center">
      {/* Logo */}
      <a href="#">
        {/* SVGの場合はfillプロパティが使える */}
        <NikeLogo className="h-20 w-20 dark:fill-white" />
      </a>

      {/* Burger button */}
      <button
        onClick={() => setIsMobileMenuShow(!isMobileMenuShow)}
        className="dark:text-gray-400 dark:hover:bg-gray-700 lg:hidden p-2 hover:bg-gray-200 rounded-lg focus:ring-2 focus:ring-gray-200"
      >
        <RxHamburgerMenu size={25} />
      </button>

      {/* Menu list */}
      <div
        className={`${
          isMobileMenuShow === false && "hidden"
        } w-full lg:w-auto lg:block`}
      >
        <ul
          className="
          lg:space-x-8 flex flex-col lg:flex-row bg-gray-50 lg:bg-transparent border
        border-gray-100 lg:border-none rounded-lg p-4 text-lg lg:dark:text-white
        "
        >
          {ROUTES.map((route, index) => (
            <li
              className={`lg:hover:bg-transparent lg:hover:text-blue-500 py-2 px-5 cursor-pointer ${
                index === 0
                  ? "bg-blue-500 text-white lg:bg-transparent lg:text-blue-500"
                  : "hover:bg-gray-100"
              } ${(index == 3 || index == 4) && "lg:text-white"}`}
              key={route}
            >
              {route}
            </li>
          ))}
        </ul>
      </div>

      {/* Cart button */}
      <div
        onClick={onClickShoppingBtn}
        className="btn-press-anim fixed left-4 bottom-4 lg:static lg:mr-8"
      >
        <div className="flex flex-center w-12 h-12 cursor-pointer rounded-full shadow-md bg-white">
          <TbShoppingBag />
        </div>
      </div>
    </nav>
  );
}
