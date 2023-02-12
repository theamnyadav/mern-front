//code a navbar in tailwind
import React from "react";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineShoppingCart,
} from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between  flex-wrap  p-6">
      <div className="flex items-center flex-shrink-0 text-green-600 mr-6">
        <span className="font-semibold text-xl tracking-tight">My App</span>
      </div>

      <div className="block lg:hidden">
        <button className="flex items-center px-3 py2 border rounded text-green-600 border-teal-200 hover:text-blue-400 hover:border-white">
          <svg
            className="fill-current h-20 w-20"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
      </div>

      <div className="flex items-center w-full  lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-items-center">
          <a
            href="#responsivemenu"
            className="block mt-4 lg:inline-block lg:mt-none text-green-600 hover:text-blue-400 mr-4"
          >
            Home
          </a>

          <a
            href="#responsivemenu"
            className="block mt-4 lg:inline-block lg:mt-none text-green-600 hover:text-blue-400 mr-4"
          >
            Profile
          </a>

          <a
            href="#responsivemenu"
            className="block mt-4 lg:inline-block lg:mt-none text-green-600 hover:text-blue-400 mr-4"
          >
             Cart
          </a>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;



//create a dropdown button in react and tailwind