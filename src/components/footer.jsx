import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t-2 p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl text-center">
        {/* MENU LINK SESUAI ROUTE */}
        <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
          <li>
            <Link to="/" className="mr-4 hover:underline md:mr-6">
              Beranda
            </Link>
          </li>
          <li>
            <Link to="/books" className="mr-4 hover:underline md:mr-6">
              Buku
            </Link>
          </li>
          <li>
            <Link to="/login" className="mr-4 hover:underline md:mr-6">
              Login
            </Link>
          </li>
          <li>
            <Link to="/register" className="hover:underline md:mr-6">
              Register
            </Link>
          </li>
        </ul>

        {/* COPYRIGHT */}
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {new Date().getFullYear()}{" "}
          <Link to="/" className="hover:underline font-semibold">
            BookStore App
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
