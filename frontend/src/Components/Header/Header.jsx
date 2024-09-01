import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";

const Header = () => {
  const { cart } = useSelector((state) => state.cart);

  return (
    <header className="sticky top-0 z-10 bg-gradient-to-r from-teal-900 to-blue-900 text-white shadow-lg">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center">
          <Link
            to="/"
            className="text-3xl font-extrabold hover:text-gray-200 transition duration-300"
          >
            E-Commerce
          </Link>
        </div>
        <div className="flex items-center space-x-6" title="Cart Page">
          <Link
            to="/cart"
            className="relative text-lg font-medium hover:text-gray-200 transition duration-300"
          >
           <BsFillCartFill />
            {cart?.cartItems?.length > 0 && (
              <span className="absolute top-[-10px] right-[-16px] inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-600 rounded-full">
                {cart.cartItems.length}
              </span>
            )}
          </Link>
          <details className="relative">
            <summary className="cursor-pointer text-lg font-medium hover:text-gray-200 transition duration-300">
              More
            </summary>
            <ul className="absolute right-0 mt-2 bg-white text-gray-800 rounded-lg shadow-lg border border-gray-200">
              <li>
                <Link
                  to="/link1"
                  className="block px-4 py-2 hover:bg-gray-100 transition duration-300"
                >
                  Link 1
                </Link>
              </li>
              <li>
                <Link
                  to="/link2"
                  className="block px-4 py-2 hover:bg-gray-100 transition duration-300"
                >
                  Link 2
                </Link>
              </li>
            </ul>
          </details>
        </div>
      </nav>
    </header>
  );
};

export default Header;
