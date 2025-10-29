import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white border-b-2 shadow-sm dark:bg-gray-800">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* LOGO */}
        <Link
          to="/"
          className="text-2xl font-bold text-indigo-600 dark:text-white"
          onClick={closeMenu}
        >
          📚 BookStore
        </Link>

        {/* TOGGLE MENU MOBILE */}
        <button
          className="md:hidden text-gray-700 dark:text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* MENU LINKS */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent dark:bg-gray-800 md:flex md:space-x-6 md:items-center text-center md:text-left border-t md:border-0`}
        >
          <NavLink
            to="/"
            onClick={closeMenu}
            className={({ isActive }) =>
              `block px-4 py-2 md:p-0 font-medium ${
                isActive
                  ? "text-indigo-600"
                  : "text-gray-700 hover:text-indigo-500 dark:text-gray-300"
              }`
            }
          >
            Beranda
          </NavLink>

          <NavLink
            to="/books"
            onClick={closeMenu}
            className={({ isActive }) =>
              `block px-4 py-2 md:p-0 font-medium ${
                isActive
                  ? "text-indigo-600"
                  : "text-gray-700 hover:text-indigo-500 dark:text-gray-300"
              }`
            }
          >
            Buku
          </NavLink>

          <NavLink
            to="/login"
            onClick={closeMenu}
            className={({ isActive }) =>
              `block px-4 py-2 md:p-0 font-medium ${
                isActive
                  ? "text-indigo-600"
                  : "text-gray-700 hover:text-indigo-500 dark:text-gray-300"
              }`
            }
          >
            Login
          </NavLink>

          <NavLink
            to="/register"
            onClick={closeMenu}
            className={({ isActive }) =>
              `block px-4 py-2 md:p-0 font-medium ${
                isActive
                  ? "text-indigo-600"
                  : "text-gray-700 hover:text-indigo-500 dark:text-gray-300"
              }`
            }
          >
            Register
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
